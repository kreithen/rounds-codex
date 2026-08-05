// Rounds Codex — "welcome" edge function (Supabase, Deno).
// Fires from a Database Webhook on INSERT into public.signups and sends a
// branded welcome email via Resend. The wording is editable from the dashboard
// (public.email_templates, key 'welcome'); this function falls back to the
// built-in default below if that row is missing. Every welcome is also logged
// into public.messages (direction 'out') so it shows in the person's inbox
// thread — when they reply, you have the full conversation.
//
// Required secrets:  RESEND_API_KEY
// Optional secrets:  WELCOME_FROM   (default below)
//                    WELCOME_REPLY_TO
// Auto-provided by Supabase:  SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy welcome --no-verify-jwt
// Webhook: Database → Webhooks → INSERT on public.signups → POST to this URL.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";
const REPLY_TO = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";
const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const FUNCTIONS_BASE = SUPABASE_URL + "/functions/v1";

const svc = { apikey: SERVICE_ROLE, Authorization: `Bearer ${SERVICE_ROLE}`, "Content-Type": "application/json" };

const ROLE_LABEL: Record<string, string> = {
  premed: "pre-med student",
  nursing: "nursing student",
  medical: "medical student",
  resident: "resident",
  professional: "medical professional",
  nonmedical: "friend of Rounds Codex",
  other: "future user",
};

interface Tpl {
  subject: string;
  heading: string;
  body: string;
  button_label: string | null;
  button_url: string | null;
  note: string | null;
}

const DEFAULT_WELCOME: Tpl = {
  subject: "Welcome to Rounds Codex — you're on the launch list",
  heading: "You're on the list.",
  body:
    "Thanks for signing up as a {{role}}. Rounds Codex is a visual medical education app for nursing students, medical students, and residents — clinical libraries, pharmacology, image galleries, and NCLEX & USMLE practice, all in one place.\n\nWe're building it now, and you'll be among the first to know the moment it goes live. We'll only email you when there's something worth your time.\n\n— The Rounds Codex team",
  button_label: "Visit roundscodex.com",
  button_url: "https://roundscodex.com",
  note: null,
};

async function loadTemplate(key: string, fallback: Tpl): Promise<Tpl> {
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/email_templates?key=eq.${key}&select=subject,heading,body,button_label,button_url,note`,
      { headers: svc },
    );
    if (r.ok) {
      const rows = await r.json();
      if (Array.isArray(rows) && rows.length) return { ...fallback, ...rows[0] };
    }
  } catch (e) {
    console.error("template load failed:", String(e));
  }
  return fallback;
}

function esc(s: string) {
  return (s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Blank-line-separated paragraphs; single newlines become <br>.
function parasHtml(body: string) {
  return (body ?? "")
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b7c2d6">${esc(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function fill(s: string | null, role: string | null): string {
  const who = ROLE_LABEL[role ?? ""] ?? "future user";
  return (s ?? "").replaceAll("{{role}}", who);
}

function welcomeHtml(t: Tpl, role: string | null, unsubUrl: string) {
  const heading = esc(fill(t.heading, role));
  const body = parasHtml(fill(t.body, role));
  const btnUrl = (t.button_url ?? "").trim();
  const btnLabel = (t.button_label ?? "").trim();
  const button = btnUrl && btnLabel
    ? `<tr><td style="padding:22px 34px 30px">
      <a href="${esc(btnUrl)}" style="display:inline-block;background:linear-gradient(115deg,#4ff0b2,#28d9ed);color:#03110f;text-decoration:none;font-weight:800;font-size:14px;padding:12px 20px;border-radius:12px">${esc(btnLabel)}</a>
    </td></tr>`
    : "";
  const note = (t.note ?? "").trim()
    ? `<tr><td style="padding:0 34px 22px"><p style="margin:0;font-size:12px;line-height:1.6;color:#6b7690">${esc(fill(t.note, role))}</p></td></tr>`
    : "";
  return `<!DOCTYPE html><html><body style="margin:0;background:#050813;font-family:Inter,-apple-system,Segoe UI,sans-serif;color:#e7eefb">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050813">
<tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:18px;overflow:hidden">
    <tr><td style="padding:34px 34px 8px">
      <div style="font-size:20px;font-weight:800;letter-spacing:-.02em;color:#fff">Rounds&nbsp;Codex</div>
      <div style="height:3px;width:52px;margin-top:12px;background:linear-gradient(90deg,#24d9ff,#46f2ad);border-radius:3px"></div>
    </td></tr>
    <tr><td style="padding:20px 34px 6px">
      <h1 style="margin:0 0 12px;font-size:26px;line-height:1.2;color:#fff;font-weight:750">${heading}</h1>
      ${body}
    </td></tr>
    ${note}
    ${button}
  </table>
  <p style="max-width:520px;margin:18px auto 0;font-size:11px;line-height:1.6;color:#5b6884;text-align:center">
    You're receiving this because you joined the launch list at roundscodex.com.<br>
    Rounds Codex, Inc. · [mailing address]<br>
    <a href="${unsubUrl}" style="color:#8296b5">Unsubscribe</a>
  </p>
</td></tr>
</table></body></html>`;
}

function welcomeText(t: Tpl, role: string | null, unsubUrl: string) {
  const lines = [
    fill(t.heading, role),
    "",
    fill(t.body, role),
  ];
  const btnUrl = (t.button_url ?? "").trim();
  if (btnUrl) lines.push("", btnUrl);
  if ((t.note ?? "").trim()) lines.push("", fill(t.note, role));
  lines.push(
    "",
    "You joined the launch list at roundscodex.com. Rounds Codex, Inc., [mailing address].",
    `Unsubscribe: ${unsubUrl}`,
  );
  return lines.join("\n");
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
    const tpl = await loadTemplate("welcome", DEFAULT_WELCOME);
    const subject = fill(tpl.subject, role);
    const html = welcomeHtml(tpl, role, unsubUrl);
    const text = welcomeText(tpl, role, unsubUrl);

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
        subject,
        html,
        text,
        headers: { "List-Unsubscribe": `<${unsubUrl}>` },
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("resend error", res.status, t);
      return new Response("send failed", { status: 502 });
    }

    // Log into the inbox thread (best-effort — never fail the send over this).
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
        method: "POST",
        headers: { ...svc, Prefer: "return=minimal" },
        body: JSON.stringify({
          mailbox: REPLY_TO,
          direction: "out",
          party_email: email.toLowerCase(),
          from_email: REPLY_TO,
          to_email: email.toLowerCase(),
          subject,
          snippet: text.slice(0, 140),
          body_text: text,
          body_html: html,
          is_read: true,
          sent_at: new Date().toISOString(),
        }),
      });
    } catch (e) {
      console.error("welcome thread-log failed:", String(e));
    }

    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
});
