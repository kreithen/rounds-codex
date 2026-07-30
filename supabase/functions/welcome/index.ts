// Rounds Codex — "welcome" edge function (Supabase, Deno).
// Fires from a Database Webhook on INSERT into public.signups and sends a
// branded welcome email via Resend. Secrets live in the function env, never
// in the repo.
//
// Required secrets:  RESEND_API_KEY
// Optional secrets:  WELCOME_FROM   (default below)
//                    WELCOME_REPLY_TO
// Auto-provided by Supabase:  SUPABASE_URL
//
// Deploy:  supabase functions deploy welcome --no-verify-jwt
// Webhook: Database → Webhooks → INSERT on public.signups → POST to this URL.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";
const REPLY_TO = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";
const FUNCTIONS_BASE = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "") + "/functions/v1";

const ROLE_LABEL: Record<string, string> = {
  premed: "pre-med student",
  nursing: "nursing student",
  medical: "medical student",
  resident: "resident",
  professional: "medical professional",
  nonmedical: "friend of Rounds Codex",
  other: "future user",
};

function emailHtml(role: string | null, unsubUrl: string) {
  const who = ROLE_LABEL[role ?? ""] ?? "future user";
  return `<!DOCTYPE html><html><body style="margin:0;background:#050813;font-family:Inter,-apple-system,Segoe UI,sans-serif;color:#e7eefb">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050813">
<tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:18px;overflow:hidden">
    <tr><td style="padding:34px 34px 8px">
      <div style="font-size:20px;font-weight:800;letter-spacing:-.02em;color:#fff">Rounds&nbsp;Codex</div>
      <div style="height:3px;width:52px;margin-top:12px;background:linear-gradient(90deg,#24d9ff,#46f2ad);border-radius:3px"></div>
    </td></tr>
    <tr><td style="padding:20px 34px 6px">
      <h1 style="margin:0 0 12px;font-size:26px;line-height:1.2;color:#fff;font-weight:750">You're on the list.</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b7c2d6">
        Thanks for signing up as a <strong style="color:#8dddfc">${who}</strong>. Rounds Codex is a
        visual medical education app for nursing students, medical students, and residents —
        clinical libraries, pharmacology, image galleries, and NCLEX &amp; USMLE practice, all in one place.
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b7c2d6">
        We're building it now, and you'll be among the first to know the moment it goes live.
        We'll only email you when there's something worth your time.
      </p>
      <p style="margin:0 0 4px;font-size:15px;line-height:1.7;color:#b7c2d6">— The Rounds Codex team</p>
    </td></tr>
    <tr><td style="padding:22px 34px 30px">
      <a href="https://roundscodex.com" style="display:inline-block;background:linear-gradient(115deg,#4ff0b2,#28d9ed);color:#03110f;text-decoration:none;font-weight:800;font-size:14px;padding:12px 20px;border-radius:12px">Visit roundscodex.com</a>
    </td></tr>
  </table>
  <p style="max-width:520px;margin:18px auto 0;font-size:11px;line-height:1.6;color:#5b6884;text-align:center">
    You're receiving this because you joined the launch list at roundscodex.com.<br>
    Rounds Codex, Inc. · [mailing address]<br>
    <a href="${unsubUrl}" style="color:#8296b5">Unsubscribe</a>
  </p>
</td></tr>
</table></body></html>`;
}

function emailText(role: string | null, unsubUrl: string) {
  const who = ROLE_LABEL[role ?? ""] ?? "future user";
  return [
    "You're on the list.",
    "",
    `Thanks for signing up as a ${who}. Rounds Codex is a visual medical education app for`,
    "nursing students, medical students, and residents — clinical libraries, pharmacology,",
    "image galleries, and NCLEX & USMLE practice, all in one place.",
    "",
    "We're building it now, and you'll be among the first to know the moment it goes live.",
    "",
    "— The Rounds Codex team",
    "https://roundscodex.com",
    "",
    "You joined the launch list at roundscodex.com. Rounds Codex, Inc., [mailing address].",
    `Unsubscribe: ${unsubUrl}`,
  ].join("\n");
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const record = payload.record ?? payload;
    const email: string | undefined = record?.email;
    const role: string | null = record?.role ?? null;
    const token: string | undefined = record?.unsub_token;
    const status: string = record?.status ?? "subscribed";
    if (!email) return new Response("no email", { status: 400 });
    if (status !== "subscribed") return new Response("skip (not subscribed)", { status: 200 });

    const unsubUrl = `${FUNCTIONS_BASE}/unsubscribe?token=${token ?? ""}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: email,
        reply_to: REPLY_TO,
        subject: "Welcome to Rounds Codex — you're on the launch list",
        html: emailHtml(role, unsubUrl),
        text: emailText(role, unsubUrl),
        headers: { "List-Unsubscribe": `<${unsubUrl}>` },
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("resend error", res.status, t);
      return new Response("send failed", { status: 502 });
    }
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
});
