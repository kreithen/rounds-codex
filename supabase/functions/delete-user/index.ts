// Rounds Codex — "delete-user" edge function (Supabase, Deno).
// Admin-triggered. Permanently removes an app user: deletes their Supabase Auth
// account, which cascades (ON DELETE CASCADE) to public.app_users. This fully
// revokes access — deleting only the profile row would leave a login intact.
//
// Body: { "id": "<auth user uuid>" }   (falls back to "email" lookup if no id)
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Auto-provided: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy delete-user --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
}

const svc = { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}`, "Content-Type": "application/json" };

async function requireAdmin(req: Request): Promise<string | null> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return null;
  const uRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: ANON_KEY },
  });
  if (!uRes.ok) return null;
  const user = await uRes.json();
  if (!user?.id) return null;
  const aRes = await fetch(`${SUPABASE_URL}/rest/v1/admins?user_id=eq.${user.id}&select=user_id`, { headers: svc });
  if (!aRes.ok) return null;
  const rows = await aRes.json();
  return Array.isArray(rows) && rows.length ? user.id : null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const adminId = await requireAdmin(req);
  if (!adminId) return json({ error: "not authorized" }, 401);

  let id = "", email = "";
  try {
    const b = await req.json();
    id = (b?.id ?? "").toString().trim();
    email = (b?.email ?? "").toString().trim().toLowerCase();
  } catch { return json({ error: "bad request" }, 400); }

  // Resolve id from email if only email was given.
  if (!id && email) {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/app_users?email=eq.${encodeURIComponent(email)}&select=id`, { headers: svc });
    if (r.ok) { const rows = await r.json(); id = Array.isArray(rows) && rows.length ? rows[0].id : ""; }
  }
  if (!id) return json({ error: "user id (or known email) required" }, 400);

  // Don't let an admin delete themselves out of the system by accident.
  if (id === adminId) return json({ error: "you can't delete your own account here" }, 400);

  // Delete the auth account → cascades to public.app_users.
  const del = await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${id}`, { method: "DELETE", headers: svc });
  if (del.ok) return json({ ok: true, id });

  // If the auth user is already gone (404), remove any leftover profile row directly.
  if (del.status === 404) {
    await fetch(`${SUPABASE_URL}/rest/v1/app_users?id=eq.${id}`, { method: "DELETE", headers: { ...svc, Prefer: "return=minimal" } });
    return json({ ok: true, id, note: "auth user not found; profile removed" });
  }

  const t = await del.text();
  console.error("delete auth user failed", del.status, t);
  return json({ error: "could not delete user", detail: t.slice(0, 200) }, 502);
});
