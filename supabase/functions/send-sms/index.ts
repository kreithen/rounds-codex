// Rounds Codex — "send-sms" edge function (Supabase, Deno).
// Admin-triggered. Sends a text to one person or a batch, via an SMS provider
// (Twilio by default; Telnyx supported), and logs every message into
// public.sms_messages. Batch sends pull consented, non-opted-out signups.
//
// Body (one of):
//   { "to": "+15551234567", "body": "..." }            // single
//   { "phones": ["+1...","+1..."], "body": "..." }      // explicit list
//   { "scope": "consented", "body": "..." }             // all textable signups
//
// Provider config (secrets):
//   SMS_PROVIDER = "twilio" (default) | "telnyx"
//   Twilio:  TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM   (number or MG… service SID)
//   Telnyx:  TELNYX_API_KEY, TELNYX_FROM
//   SMS_DEFAULT_COUNTRY = "1" (US) — used to normalize bare 10-digit numbers.
// Auto-provided: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Deploy:  supabase functions deploy send-sms --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const CC = (Deno.env.get("SMS_DEFAULT_COUNTRY") ?? "1").replace(/\D/g, "");
const BATCH_CAP = 500;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
}

const svc = { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}`, "Content-Type": "application/json" };

interface SmsCfg { provider: string; account_sid: string; auth_token: string; from_number: string; }

// Config comes from the sms_config table first (managed server-side, no env
// secrets to paste), falling back to env vars if the row is missing/empty.
async function loadSmsConfig(): Promise<SmsCfg> {
  const env: SmsCfg = {
    provider: (Deno.env.get("SMS_PROVIDER") ?? "twilio").toLowerCase(),
    account_sid: Deno.env.get("TWILIO_ACCOUNT_SID") ?? "",
    auth_token: Deno.env.get("TWILIO_AUTH_TOKEN") ?? Deno.env.get("TELNYX_API_KEY") ?? "",
    from_number: Deno.env.get("TWILIO_FROM") ?? Deno.env.get("TELNYX_FROM") ?? "",
  };
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/sms_config?id=eq.1&select=provider,account_sid,auth_token,from_number`, { headers: svc });
    if (r.ok) {
      const rows = await r.json();
      if (Array.isArray(rows) && rows.length) {
        const x = rows[0];
        return {
          provider: (x.provider || env.provider).toLowerCase(),
          account_sid: x.account_sid || env.account_sid,
          auth_token: x.auth_token || env.auth_token,
          from_number: x.from_number || env.from_number,
        };
      }
    }
  } catch (e) { console.error("sms_config read failed:", String(e)); }
  return env;
}

async function requireAdmin(req: Request): Promise<string | null> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return null;
  const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, { headers: { Authorization: `Bearer ${token}`, apikey: ANON_KEY } });
  if (!uRes.ok) return null;
  const user = await uRes.json();
  if (!user?.id) return null;
  const aRes = await fetch(`${SUPABASE_URL}/rest/v1/admins?user_id=eq.${user.id}&select=user_id`, { headers: svc });
  if (!aRes.ok) return null;
  const rows = await aRes.json();
  return Array.isArray(rows) && rows.length ? user.id : null;
}

// Best-effort E.164 normalization. Bare 10-digit -> +<CC><number>.
function normalize(raw: string): string | null {
  const s = (raw ?? "").trim();
  if (!s) return null;
  if (s.startsWith("+")) { const d = s.slice(1).replace(/\D/g, ""); return d.length >= 8 ? "+" + d : null; }
  const d = s.replace(/\D/g, "");
  if (d.length === 10) return `+${CC}${d}`;
  if (d.length === 11 && d.startsWith("1")) return `+${d}`;
  if (d.length >= 8) return `+${d}`;
  return null;
}

// GSM-7 ~160/segment, unicode ~70. Rough count for logging.
function segCount(body: string): number {
  const unicode = /[^\x00-\x7F]/.test(body);
  const per = unicode ? 70 : 160;
  return Math.max(1, Math.ceil(body.length / per));
}

interface SendResult { sid?: string; error?: string; }

async function sendOne(to: string, body: string, cfg: SmsCfg): Promise<SendResult> {
  if (cfg.provider === "telnyx") {
    const key = cfg.auth_token;
    const from = cfg.from_number;
    if (!key || !from) return { error: "Telnyx not configured" };
    const r = await fetch("https://api.telnyx.com/v2/messages", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, text: body }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) return { error: `telnyx ${r.status}: ${JSON.stringify(j).slice(0, 160)}` };
    return { sid: j?.data?.id };
  }
  // Twilio (default)
  const sid = cfg.account_sid;
  const token = cfg.auth_token;
  const from = cfg.from_number;
  if (!sid || !token || !from) return { error: "Twilio not configured" };
  const form = new URLSearchParams({ To: to, Body: body });
  // TWILIO_FROM may be a phone number (From) or a Messaging Service SID (MG...).
  if (from.startsWith("MG")) form.set("MessagingServiceSid", from); else form.set("From", from);
  const r = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: { Authorization: "Basic " + btoa(`${sid}:${token}`), "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) return { error: `twilio ${r.status}: ${(j?.message ?? JSON.stringify(j)).toString().slice(0, 160)}` };
  return { sid: j?.sid };
}

async function log(row: Record<string, unknown>) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/sms_messages`, {
      method: "POST", headers: { ...svc, Prefer: "return=minimal" }, body: JSON.stringify(row),
    });
  } catch (e) { console.error("sms log failed:", String(e)); }
}

// Pull textable recipients: phone present, consented, not opted out.
async function consentedRecipients(): Promise<Array<{ phone: string; name: string | null }>> {
  const r = await fetch(
    `${SUPABASE_URL}/rest/v1/signups?select=name,phone&sms_consent=is.true&sms_opted_out=is.false&phone=not.is.null&limit=${BATCH_CAP}`,
    { headers: svc },
  );
  if (!r.ok) return [];
  const rows = await r.json();
  return (Array.isArray(rows) ? rows : []).map((x: any) => ({ phone: x.phone, name: x.name ?? null }));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const adminId = await requireAdmin(req);
  if (!adminId) return json({ error: "not authorized" }, 401);

  let body = "", to = "", scope = "", phones: string[] = [];
  try {
    const b = await req.json();
    body = (b?.body ?? "").toString();
    to = (b?.to ?? "").toString().trim();
    scope = (b?.scope ?? "").toString().trim();
    if (Array.isArray(b?.phones)) phones = b.phones.map((p: any) => String(p));
  } catch { return json({ error: "bad request" }, 400); }

  if (!body.trim()) return json({ error: "message body is required" }, 400);

  // Build the recipient list.
  let recipients: Array<{ phone: string; name: string | null }> = [];
  if (to) recipients = [{ phone: to, name: null }];
  else if (phones.length) recipients = phones.map((p) => ({ phone: p, name: null }));
  else if (scope === "consented") recipients = await consentedRecipients();
  else return json({ error: "provide 'to', 'phones', or scope:'consented'" }, 400);

  if (!recipients.length) return json({ error: "no recipients" }, 400);
  if (recipients.length > BATCH_CAP) return json({ error: `too many recipients (max ${BATCH_CAP} per send)` }, 400);

  const cfg = await loadSmsConfig();
  const segments = segCount(body);
  let sent = 0, failed = 0;
  const errors: string[] = [];

  for (const rcpt of recipients) {
    const norm = normalize(rcpt.phone);
    if (!norm) {
      failed++; errors.push(`${rcpt.phone}: invalid number`);
      await log({ phone: rcpt.phone, name: rcpt.name, direction: "out", body, status: "failed", provider: cfg.provider, error: "invalid number", segments, sent_by: adminId });
      continue;
    }
    const res = await sendOne(norm, body, cfg);
    if (res.error) {
      failed++; errors.push(`${norm}: ${res.error}`);
      await log({ phone: norm, name: rcpt.name, direction: "out", body, status: "failed", provider: cfg.provider, error: res.error, segments, sent_by: adminId });
    } else {
      sent++;
      await log({ phone: norm, name: rcpt.name, direction: "out", body, status: "sent", provider: cfg.provider, provider_sid: res.sid ?? null, segments, sent_by: adminId });
    }
  }

  return json({ ok: true, sent, failed, total: recipients.length, segments, errors: errors.slice(0, 20) });
});
