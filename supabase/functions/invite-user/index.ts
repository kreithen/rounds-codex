// Rounds Codex — "invite-user" edge function (Supabase, Deno).
// Admin-triggered. Creates (or re-invites) an app user and emails them a secure
// one-time "set your password" link from teacher@roundscodex.com via Resend.
// The link lands them on the app, where they choose a password and enter their
// school. No password is ever emailed.
//
// Body: { "email": "...", "school"?: "...", "role"?: "..." }
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Required secret:  RESEND_API_KEY
// Optional secrets: INVITE_FROM (default teacher@), INVITE_REPLY_TO, APP_URL
// Auto-provided: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy invite-user --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM = Deno.env.get("INVITE_FROM") ?? "Rounds Codex <teacher@roundscodex.com>";
const REPLY_TO = Deno.env.get("INVITE_REPLY_TO") ?? "teacher@roundscodex.com";
const APP_URL = (Deno.env.get("APP_URL") ?? "https://rounds-codex.netlify.app").replace(/\/$/, "");

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
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inviteEmail(link: string, school: string | null) {
  const schoolLine = school
    ? `We have you down at <strong style="color:#8dddfc">${esc(school)}</strong> — you can confirm or change it when you set your password.`
    : `You'll pick your school when you set your password.`;
  return `<!DOCTYPE html><html><body style="margin:0;background:#050813;font-family:Inter,-apple-system,Segoe UI,sans-serif;color:#e7eefb">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050813"><tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:18px;overflow:hidden">
    <tr><td style="padding:34px 34px 8px">
      <div style="font-size:20px;font-weight:800;letter-spacing:-.02em;color:#fff">Rounds&nbsp;Codex</div>
      <div style="height:3px;width:52px;margin-top:12px;background:linear-gradient(90deg,#24d9ff,#46f2ad);border-radius:3px"></div>
    </td></tr>
    <tr><td style="padding:20px 34px 6px">
      <h1 style="margin:0 0 12px;font-size:24px;line-height:1.2;color:#fff;font-weight:750">You're invited to Rounds Codex.</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b7c2d6">
        An account has been created for you. Click below to <strong>set your password</strong> and get in.
        ${schoolLine}
      </p>
    </td></tr>
    <tr><td style="padding:14px 34px 30px">
      <a href="${link}" style="display:inline-block;background:linear-gradient(115deg,#4ff0b2,#28d9ed);color:#03110f;text-decoration:none;font-weight:800;font-size:14px;padding:13px 22px;border-radius:12px">Set your password →</a>
      <p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#6b7690">This link expires in 24 hours. If it wasn't you, you can ignore this email.</p>
    </td></tr>
  </table>
  <p style="max-width:520px;margin:16px auto 0;font-size:11px;line-height:1.6;color:#5b6884;text-align:center">Rounds Codex · Sent by teacher@roundscodex.com</p>
</td></tr></table></body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  if (!RESEND_API_KEY) return json({ error: "RESEND_API_KEY not set" }, 500);

  const adminId = await requireAdmin(req);
  if (!adminId) return json({ error: "not authorized" }, 401);

  let email = "", school: string | null = null, role: string | null = null;
  try {
    const b = await req.json();
    email = (b?.email ?? "").toString().trim().toLowerCase();
    school = b?.school ? b.school.toString().trim() : null;
    role = b?.role ? b.role.toString().trim() : null;
  } catch { return json({ error: "bad request" }, 400); }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: "valid email required" }, 400);

  // 1) Generate an invite link (creates the auth user if new; does NOT send
  //    Supabase's own email — we send our own from teacher@).
  const genRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/generate_link`, {
    method: "POST",
    headers: svc,
    body: JSON.stringify({ type: "invite", email, redirect_to: `${APP_URL}/` }),
  });
  const gen = await genRes.json().catch(() => ({}));
  if (!genRes.ok) {
    // If the user already exists, fall back to a recovery (set-password) link.
    if (genRes.status === 422 || /already/i.test(JSON.stringify(gen))) {
      const rec = await fetch(`${SUPABASE_URL}/auth/v1/admin/generate_link`, {
        method: "POST", headers: svc,
        body: JSON.stringify({ type: "recovery", email, redirect_to: `${APP_URL}/` }),
      });
      const recj = await rec.json().catch(() => ({}));
      if (!rec.ok) { console.error("recovery link failed", rec.status, recj); return json({ error: "could not create link" }, 502); }
      Object.assign(gen, recj);
    } else {
      console.error("invite link failed", genRes.status, gen);
      return json({ error: "could not create invite" }, 502);
    }
  }
  const link = gen?.action_link || gen?.properties?.action_link;
  const userId = gen?.user_id || gen?.id || gen?.user?.id;
  if (!link) { console.error("no action_link", gen); return json({ error: "no link returned" }, 502); }

  // 2) Fill in the profile (row is auto-created by the trigger; upsert to be safe).
  await fetch(`${SUPABASE_URL}/rest/v1/app_users`, {
    method: "POST",
    headers: { ...svc, Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      ...(userId ? { id: userId } : {}),
      email, school, role, status: "invited", invited_by: adminId, platform: "web",
    }),
  });

  // 3) Send the branded invite from teacher@.
  const send = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM, to: email, reply_to: REPLY_TO,
      subject: "Your Rounds Codex invite — set your password",
      html: inviteEmail(link, school),
      text: `You're invited to Rounds Codex. Set your password here:\n${link}\n\nThis link expires in 24 hours.`,
    }),
  });
  if (!send.ok) { const t = await send.text(); console.error("resend error", send.status, t); return json({ error: "invite created but email failed", detail: t.slice(0, 200) }, 502); }

  return json({ ok: true, email });
});
