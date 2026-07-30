// Rounds Codex — "inbox-draft" edge function (Supabase, Deno).
// Drafts a reply to a support thread with Claude. Loads the recent messages for
// one person (server-side, service role), asks Claude for a reply, returns the
// text for the admin to edit before sending. Draft-only — sends nothing.
//
// Auth: verify_jwt OFF (CORS preflight); admin membership checked manually.
// Required: ANTHROPIC_API_KEY.  Optional: DRAFT_MODEL (default "claude-opus-5").
// Deploy:  supabase functions deploy inbox-draft --no-verify-jwt

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const MODEL = Deno.env.get("DRAFT_MODEL") ?? "claude-opus-5";

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

const SYSTEM = `You are the support agent for Rounds Codex, a visual medical-education app for nursing
students, medical students, and residents (clinical libraries, pharmacology, image galleries,
NCLEX & USMLE practice), currently pre-launch. Write a helpful, warm, concise reply to the most
recent message in the thread below.

Rules: sound like a real person on a small founding team, not a bot. Be specific and honest; if
you don't know something (a price, an exact launch date), say you'll follow up rather than
inventing it. No marketing fluff. Return ONLY the reply body text — no subject line, no
"Dear/Sincerely" boilerplate unless it fits, no quoting of their message.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  if (!ANTHROPIC_API_KEY) return json({ error: "ANTHROPIC_API_KEY not set" }, 500);
  if (!(await requireAdmin(req))) return json({ error: "not authorized" }, 401);

  let partyEmail = "";
  try {
    const b = await req.json();
    partyEmail = (b?.party_email ?? "").toString().trim().toLowerCase();
  } catch { return json({ error: "bad request" }, 400); }
  if (!partyEmail) return json({ error: "party_email is required" }, 400);

  // Load the thread (oldest → newest), service role.
  const r = await fetch(
    `${SUPABASE_URL}/rest/v1/messages?party_email=eq.${encodeURIComponent(partyEmail)}`
      + `&select=direction,party_name,subject,body_text,snippet,sent_at&order=sent_at.asc`,
    { headers: { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}` } },
  );
  if (!r.ok) return json({ error: "could not load thread" }, 502);
  const msgs: any[] = await r.json();
  if (!msgs.length) return json({ error: "no messages for that person" }, 404);

  const name = msgs.find((m) => m.party_name)?.party_name || partyEmail;
  const transcript = msgs.map((m) => {
    const who = m.direction === "out" ? "Rounds Codex (us)" : (m.party_name || partyEmail);
    const text = (m.body_text || m.snippet || "").toString().slice(0, 2000);
    return `${who}:\n${text}`;
  }).join("\n\n---\n\n");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1200,
        system: SYSTEM,
        messages: [{ role: "user", content: `Thread with ${name}:\n\n${transcript}\n\nWrite our reply to their latest message.` }],
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("anthropic error", res.status, t);
      return json({ error: "draft failed", status: res.status }, 502);
    }
    const data = await res.json();
    const text = (data?.content ?? []).filter((c: any) => c?.type === "text").map((c: any) => c.text).join("").trim();
    if (!text) return json({ error: "empty draft" }, 502);
    return json({ reply_text: text, model: MODEL });
  } catch (e) {
    console.error(e);
    return json({ error: "server error" }, 500);
  }
});
