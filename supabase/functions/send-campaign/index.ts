// Rounds Codex — "send-campaign" edge function (Supabase, Deno).
// Sends an approved newsletter to the subscribed launch list via Resend, wraps
// the editorial body in the branded shell, appends a per-recipient one-click
// unsubscribe footer (CAN-SPAM), and logs one row per recipient into
// public.campaign_sends.
//
// Two modes (POST JSON):
//   { campaign_id, test_to: "you@x.com" }  -> send ONE test copy, no state change
//   { campaign_id }                        -> real send to all subscribed
//                                             (requires campaign.status === 'approved')
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
//
// Required secret:  RESEND_API_KEY
// Optional secrets: WELCOME_FROM (reused as the From), WELCOME_REPLY_TO,
//                   MAIL_ADDRESS (postal address for the footer)
// Auto-provided by Supabase: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy send-campaign --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";
const REPLY_TO = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";
const MAIL_ADDRESS = Deno.env.get("MAIL_ADDRESS") ?? "1 S School Ave #800, Sarasota, FL 34237";
const FUNCTIONS_BASE = SUPABASE_URL + "/functions/v1";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

async function requireAdmin(req: Request): Promise<boolean> {
  const auth = req.headers.get("Authorization") ?? "";
  const token = auth.replace(/^Bearer\s+/i, "").trim();
  if (!token) return false;
  const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: ANON_KEY },
  });
  if (!uRes.ok) return false;
  const user = await uRes.json();
  if (!user?.id) return false;
  const aRes = await fetch(
    `${SUPABASE_URL}/rest/v1/admins?user_id=eq.${user.id}&select=user_id`,
    { headers: { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}` } },
  );
  if (!aRes.ok) return false;
  const rows = await aRes.json();
  return Array.isArray(rows) && rows.length > 0;
}

const svc = {
  apikey: SERVICE_ROLE,
  Authorization: `Bearer ${SERVICE_ROLE}`,
  "Content-Type": "application/json",
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Wrap the editorial body_html in the branded email shell + unsubscribe footer.
function wrapHtml(subject: string, preheader: string, bodyHtml: string, unsubUrl: string) {
  return `<!DOCTYPE html><html><body style="margin:0;background:#050813;font-family:Inter,-apple-system,Segoe UI,sans-serif;color:#e7eefb">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050813">
<tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:18px;overflow:hidden">
    <tr><td style="padding:30px 34px 6px">
      <div style="font-size:20px;font-weight:800;letter-spacing:-.02em;color:#fff">Rounds&nbsp;Codex</div>
      <div style="height:3px;width:52px;margin-top:12px;background:linear-gradient(90deg,#24d9ff,#46f2ad);border-radius:3px"></div>
    </td></tr>
    <tr><td style="padding:8px 34px 26px;font-size:15px;line-height:1.7;color:#c4cfe2">
      <style>h2{color:#fff;font-size:19px;font-weight:750;line-height:1.3;margin:22px 0 10px}
      p{margin:0 0 15px}a{color:#46f2ad}ul{margin:0 0 15px;padding-left:20px}li{margin:0 0 8px}strong{color:#dfe8f7}</style>
      ${bodyHtml}
    </td></tr>
  </table>
  <p style="max-width:560px;margin:18px auto 0;font-size:11px;line-height:1.6;color:#5b6884;text-align:center">
    You're receiving this because you joined the launch list at roundscodex.com.<br>
    Rounds Codex, Inc. · ${esc(MAIL_ADDRESS)}<br>
    <a href="${unsubUrl}" style="color:#8296b5">Unsubscribe</a>
  </p>
</td></tr>
</table></body></html>`;
}

function wrapText(bodyText: string, unsubUrl: string) {
  return [
    bodyText,
    "",
    "—",
    "You joined the launch list at roundscodex.com.",
    `Rounds Codex, Inc., ${MAIL_ADDRESS}.`,
    `Unsubscribe: ${unsubUrl}`,
  ].join("\n");
}

async function getCampaign(id: string) {
  const r = await fetch(
    `${SUPABASE_URL}/rest/v1/campaigns?id=eq.${id}&select=*`,
    { headers: svc },
  );
  if (!r.ok) return null;
  const rows = await r.json();
  return Array.isArray(rows) && rows.length ? rows[0] : null;
}

async function patchCampaign(id: string, patch: Record<string, unknown>) {
  await fetch(`${SUPABASE_URL}/rest/v1/campaigns?id=eq.${id}`, {
    method: "PATCH",
    headers: svc,
    body: JSON.stringify(patch),
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  if (!RESEND_API_KEY) return json({ error: "RESEND_API_KEY not set" }, 500);
  if (!(await requireAdmin(req))) return json({ error: "not authorized" }, 401);

  let campaignId = "", testTo = "";
  try {
    const b = await req.json();
    campaignId = (b?.campaign_id ?? "").toString().trim();
    testTo = (b?.test_to ?? "").toString().trim();
  } catch {
    return json({ error: "bad request" }, 400);
  }
  if (!campaignId) return json({ error: "campaign_id required" }, 400);

  const campaign = await getCampaign(campaignId);
  if (!campaign) return json({ error: "campaign not found" }, 404);

  const subject = campaign.subject || "(no subject)";
  const preheader = campaign.preheader || "";
  const bodyHtml = campaign.body_html || "";
  const bodyText = campaign.body_text || "";

  // ---- TEST MODE: one copy to the admin, no DB state changes. ----
  if (testTo) {
    const unsubUrl = `${FUNCTIONS_BASE}/unsubscribe?token=preview`;
    const r = await sendOne(
      testTo,
      "[TEST] " + subject,
      wrapHtml(subject, preheader, bodyHtml, unsubUrl),
      wrapText(bodyText, unsubUrl),
      unsubUrl,
    );
    if (!r.ok) return json({ error: "test send failed", detail: r.error }, 502);
    return json({ ok: true, mode: "test", to: testTo });
  }

  // ---- REAL SEND: approved campaigns only. ----
  if (campaign.status !== "approved") {
    return json({ error: `campaign is '${campaign.status}', must be 'approved' to send` }, 409);
  }

  // Pull the subscribed audience (email + unsub token).
  const audRes = await fetch(
    `${SUPABASE_URL}/rest/v1/signups?status=eq.subscribed&select=id,email,unsub_token`,
    { headers: svc },
  );
  if (!audRes.ok) return json({ error: "could not load audience" }, 502);
  const audience: Array<{ id: string; email: string; unsub_token: string }> = await audRes.json();
  if (!audience.length) return json({ error: "no subscribed recipients" }, 400);

  await patchCampaign(campaignId, { status: "sending", updated_at: new Date().toISOString() });

  let sent = 0, failed = 0;
  const logs: any[] = [];

  // Send sequentially (small list). Each recipient gets their own unsub URL.
  for (const person of audience) {
    const unsubUrl = `${FUNCTIONS_BASE}/unsubscribe?token=${person.unsub_token ?? ""}`;
    const r = await sendOne(
      person.email,
      subject,
      wrapHtml(subject, preheader, bodyHtml, unsubUrl),
      wrapText(bodyText, unsubUrl),
      unsubUrl,
    );
    if (r.ok) sent++; else failed++;
    logs.push({
      campaign_id: campaignId,
      signup_id: person.id,
      email: person.email,
      status: r.ok ? "sent" : "failed",
      resend_id: r.id ?? null,
      error: r.ok ? null : (r.error ?? "send failed"),
    });
  }

  // Log all recipients, then finalize campaign.
  if (logs.length) {
    await fetch(`${SUPABASE_URL}/rest/v1/campaign_sends`, {
      method: "POST",
      headers: svc,
      body: JSON.stringify(logs),
    });
  }
  await patchCampaign(campaignId, {
    status: "sent",
    sent_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sent_count: sent,
  });

  return json({ ok: true, mode: "send", sent, failed, total: audience.length });
});

async function sendOne(
  to: string,
  subject: string,
  html: string,
  text: string,
  unsubUrl: string,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to,
        reply_to: REPLY_TO,
        subject,
        html,
        text,
        headers: { "List-Unsubscribe": `<${unsubUrl}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      return { ok: false, error: `${res.status} ${t.slice(0, 200)}` };
    }
    const data = await res.json().catch(() => ({}));
    return { ok: true, id: data?.id };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
