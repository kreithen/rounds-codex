// Rounds Codex — "draft" edge function (Supabase, Deno).
// Called from the admin dashboard's Newsletter composer. Takes a short brief
// and asks Claude to write a newsletter: subject, preheader, and the body
// *content* (inner HTML + plain text). The branded shell + unsubscribe footer
// are added later by send-campaign, so this only produces the editorial body.
//
// NOTHING is sent here — this is draft-only. A human approves + sends.
//
// Auth: verify_jwt is OFF (so CORS preflight works); we check admin membership
//       manually below. Only a signed-in admin can spend Anthropic credits.
//
// Required secret:  ANTHROPIC_API_KEY
// Optional secret:  DRAFT_MODEL   (default "claude-opus-5")
// Auto-provided by Supabase:  SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy draft --no-verify-jwt

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
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

// Confirm the caller is a signed-in Rounds Codex admin.
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

const SYSTEM = `You are the email copywriter for Rounds Codex, a visual medical-education app for
nursing students, medical students, and residents (clinical libraries, pharmacology, image
galleries, NCLEX & USMLE practice). The product is pre-launch — an audience that joined a
"coming soon" launch list.

Voice: warm, credible, concise, physician-founded. No hype, no spam words, no ALL CAPS, no
excessive exclamation points. Respect the reader's time.

Write ONE newsletter from the brief. Return ONLY a JSON object, no markdown fences, with keys:
  "subject":   string, <= 65 chars, specific and non-clickbait
  "preheader": string, <= 110 chars, complements (does not repeat) the subject
  "body_html": string, the email BODY as simple inline-safe HTML using only
               <h2>, <p>, <ul>/<li>, <strong>, <em>, and <a href>. NO <html>/<head>/<body>,
               no styles, no images — the branded wrapper and unsubscribe footer are added
               automatically. Keep paragraphs short.
  "body_text": string, a plain-text version of the same content (no HTML), line-wrapped.

Do not invent a launch date, pricing, or features that were not in the brief.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  if (!ANTHROPIC_API_KEY) return json({ error: "ANTHROPIC_API_KEY not set" }, 500);
  if (!(await requireAdmin(req))) return json({ error: "not authorized" }, 401);

  let brief = "";
  try {
    const b = await req.json();
    brief = (b?.brief ?? "").toString().trim();
  } catch {
    return json({ error: "bad request" }, 400);
  }
  if (!brief) return json({ error: "brief is required" }, 400);

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2000,
        system: SYSTEM,
        messages: [{ role: "user", content: `Brief:\n${brief}` }],
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("anthropic error", res.status, t);
      return json({ error: "draft failed", status: res.status }, 502);
    }
    const data = await res.json();
    const text = (data?.content ?? [])
      .filter((c: any) => c?.type === "text")
      .map((c: any) => c.text)
      .join("")
      .trim();

    const draft = parseDraft(text);
    if (!draft) {
      console.error("could not parse draft", text.slice(0, 400));
      return json({ error: "model returned unparseable draft" }, 502);
    }
    return json({ draft, model: MODEL });
  } catch (e) {
    console.error(e);
    return json({ error: "server error" }, 500);
  }
});

// Pull the JSON object out of the model's reply, tolerating stray prose or fences.
function parseDraft(text: string): Record<string, string> | null {
  let s = text.trim();
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) s = fence[1].trim();
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    const o = JSON.parse(s.slice(start, end + 1));
    const out = {
      subject: String(o.subject ?? "").trim(),
      preheader: String(o.preheader ?? "").trim(),
      body_html: String(o.body_html ?? "").trim(),
      body_text: String(o.body_text ?? "").trim(),
    };
    if (!out.subject || !out.body_html) return null;
    return out;
  } catch {
    return null;
  }
}
