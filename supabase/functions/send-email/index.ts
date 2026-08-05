// Rounds Codex — "send-email" edge function (Supabase, Deno).
// Admin-triggered. Sends a fresh (non-reply) email to a single person from one
// of our mailboxes (default admin@roundscodex.com) via Resend, and logs it into
// public.messages (direction 'out') so it appears in the inbox thread. Their
// reply comes back to the Zoho mailbox and is picked up by sync-inbox.
//
// Unlike inbox-reply, this does NOT force a "Re:" subject — it's for composing a
// new message (e.g. emailing a launch-list signup from the Signups tab).
//
// Body: { "to": "...", "subject": "...", "body_text": "...", "mailbox"?: "admin@roundscodex.com" }
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Required secret:  RESEND_API_KEY
// Auto-provided: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy send-email --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const DEFAULT_MAILBOX = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";
// Which of our addresses may be used as the sender (verified roundscodex.com).
const ALLOWED_MAILBOXES = new Set(["admin@roundscodex.com", "teacher@roundscodex.com"]);

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
}

async function requireAdmin(req: Request): Promise<string | null> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return null;
  const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: ANON_KEY },
  });
  if (!uRes.ok) return null;
  const user = await uRes.json();
  if (!user?.id) return null;
  const aRes = await fetch(`${SUPABASE_URL}/rest/v1/admins?user_id=eq.${user.id}&select=user_id`,
    { headers: { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}` } });
  if (!aRes.ok) return null;
  const rows = await aRes.json();
  return Array.isArray(rows) && rows.length ? user.id : null;
}

const svc = { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}`, "Content-Type": "application/json" };

function esc(s: string) {
  return (s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  if (!RESEND_API_KEY) return json({ error: "RESEND_API_KEY not set" }, 500);

  const adminId = await requireAdmin(req);
  if (!adminId) return json({ error: "not authorized" }, 401);

  let to = "", subject = "", bodyText = "", mailbox = DEFAULT_MAILBOX;
  try {
    const b = await req.json();
    to = (b?.to ?? "").toString().trim().toLowerCase();
    subject = (b?.subject ?? "").toString().trim();
    bodyText = (b?.body_text ?? "").toString();
    mailbox = (b?.mailbox ?? DEFAULT_MAILBOX).toString().trim() || DEFAULT_MAILBOX;
  } catch { return json({ error: "bad request" }, 400); }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return json({ error: "valid recipient email required" }, 400);
  if (!subject) return json({ error: "subject is required" }, 400);
  if (!bodyText.trim()) return json({ error: "message body is required" }, 400);
  if (!ALLOWED_MAILBOXES.has(mailbox)) mailbox = DEFAULT_MAILBOX;

  const from = `Rounds Codex <${mailbox}>`;
  const bodyHtml = `<div style="font-family:-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.6;color:#111">`
    + esc(bodyText).replace(/\n/g, "<br>") + `</div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: mailbox, subject, text: bodyText, html: bodyHtml }),
  });
  if (!res.ok) {
    const t = await res.text();
    console.error("resend error", res.status, t);
    return json({ error: "send failed", detail: t.slice(0, 200) }, 502);
  }

  // Log into the inbox thread (best-effort).
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
      method: "POST",
      headers: { ...svc, Prefer: "return=minimal" },
      body: JSON.stringify({
        mailbox,
        direction: "out",
        party_email: to,
        from_email: mailbox,
        to_email: to,
        subject,
        snippet: bodyText.slice(0, 140),
        body_text: bodyText,
        body_html: bodyHtml,
        is_read: true,
        sent_at: new Date().toISOString(),
      }),
    });
  } catch (e) {
    console.error("send-email thread-log failed:", String(e));
  }

  return json({ ok: true, to });
});
