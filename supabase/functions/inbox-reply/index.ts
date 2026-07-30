// Rounds Codex — "inbox-reply" edge function (Supabase, Deno).
// Sends a reply to someone in the support inbox via Resend (from your verified
// domain, Reply-To your Zoho address) and logs it to public.messages as an
// outbound row so it shows in the thread. Their reply comes back to Zoho and is
// mirrored in on the next sync — that's the two-way loop.
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Required: RESEND_API_KEY.  Optional: WELCOME_FROM, WELCOME_REPLY_TO.
// Deploy:  supabase functions deploy inbox-reply --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";
const REPLY_TO = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
}

async function requireAdmin(req: Request): Promise<boolean> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return false;
  const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: ANON_KEY },
  });
  if (!uRes.ok) return false;
  const user = await uRes.json();
  if (!user?.id) return false;
  const aRes = await fetch(`${SUPABASE_URL}/rest/v1/admins?user_id=eq.${user.id}&select=user_id`,
    { headers: { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}` } });
  if (!aRes.ok) return false;
  const rows = await aRes.json();
  return Array.isArray(rows) && rows.length > 0;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  if (!RESEND_API_KEY) return json({ error: "RESEND_API_KEY not set" }, 500);
  if (!(await requireAdmin(req))) return json({ error: "not authorized" }, 401);

  let to = "", subject = "", bodyText = "", mailbox = REPLY_TO;
  try {
    const b = await req.json();
    to = (b?.to ?? "").toString().trim();
    subject = (b?.subject ?? "").toString().trim() || "Re: your message";
    bodyText = (b?.body_text ?? "").toString();
    mailbox = (b?.mailbox ?? REPLY_TO).toString().trim() || REPLY_TO;
  } catch { return json({ error: "bad request" }, 400); }

  if (!to || !bodyText.trim()) return json({ error: "to and body_text are required" }, 400);
  if (!subject.toLowerCase().startsWith("re:")) subject = "Re: " + subject;

  const bodyHtml = `<div style="font-family:-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.6;color:#111">`
    + esc(bodyText).replace(/\n/g, "<br>") + `</div>`;

  // Send via Resend.
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to, reply_to: REPLY_TO, subject, text: bodyText, html: bodyHtml }),
  });
  if (!res.ok) {
    const t = await res.text();
    console.error("resend error", res.status, t);
    return json({ error: "send failed", detail: t.slice(0, 200) }, 502);
  }
  const sent = await res.json().catch(() => ({}));

  // Log the outbound message into the thread.
  await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
    method: "POST",
    headers: { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({
      mailbox,
      direction: "out",
      party_email: to.toLowerCase(),
      from_email: REPLY_TO,
      to_email: to.toLowerCase(),
      subject,
      snippet: bodyText.slice(0, 140),
      body_text: bodyText,
      body_html: bodyHtml,
      is_read: true,
      sent_at: new Date().toISOString(),
    }),
  });

  return json({ ok: true, id: sent?.id ?? null });
});
