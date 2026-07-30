// Rounds Codex — "unsubscribe" edge function (Supabase, Deno).
// Public link target from email footers: .../functions/v1/unsubscribe?token=<uuid>
// Sets the matching signup to status='unsubscribed' using the service_role key
// (server-side only) and returns a small confirmation page.
//
// Deploy:  supabase functions deploy unsubscribe --no-verify-jwt
// Uses Supabase-provided env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function page(title: string, msg: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · Rounds Codex</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:linear-gradient(#030610,#07101e 60%,#040712);
font-family:Inter,-apple-system,Segoe UI,sans-serif;color:#dbe4f2}
.card{width:min(420px,90%);background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:18px;padding:2.2rem;text-align:center}
h1{font-size:1.3rem;margin:.2rem 0 .6rem;color:#fff}p{color:#9daac0;line-height:1.6;font-size:.95rem}
a{color:#46f2ad;text-decoration:none;font-weight:700}.b{font-weight:800;color:#fff;letter-spacing:-.02em}</style></head>
<body><div class="card"><div class="b">Rounds&nbsp;Codex</div><h1>${title}</h1><p>${msg}</p>
<p style="margin-top:1.2rem"><a href="https://roundscodex.com">← roundscodex.com</a></p></div></body></html>`;
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";
  const headers = { "Content-Type": "text/html; charset=utf-8" };

  if (!UUID.test(token)) {
    return new Response(page("Invalid link", "This unsubscribe link isn't valid. If you keep getting our emails, reply and we'll remove you."), { status: 400, headers });
  }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/signups?unsub_token=eq.${token}`,
      {
        method: "PATCH",
        headers: {
          "apikey": SERVICE_ROLE,
          "Authorization": `Bearer ${SERVICE_ROLE}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation",
        },
        body: JSON.stringify({ status: "unsubscribed", unsubscribed_at: new Date().toISOString() }),
      },
    );
    if (!res.ok) {
      console.error("unsub patch failed", res.status, await res.text());
      return new Response(page("Something went wrong", "We couldn't process that just now. Please try again shortly."), { status: 502, headers });
    }
    // Whether or not a row matched, show a success page (don't leak token validity).
    return new Response(page("You're unsubscribed", "You won't receive further emails from Rounds Codex. Changed your mind? You can sign up again anytime at roundscodex.com."), { status: 200, headers });
  } catch (e) {
    console.error(e);
    return new Response(page("Something went wrong", "We couldn't process that just now. Please try again shortly."), { status: 500, headers });
  }
});
