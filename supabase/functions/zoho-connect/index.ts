// Rounds Codex — "zoho-connect" edge function (Supabase, Deno).
// One-time setup helper: a small web form that exchanges a Zoho Self Client
// grant code for a long-lived refresh token, and hands back a ready-to-paste
// ZOHO_MAILBOXES entry. Runs on Supabase (can reach accounts.zoho.com), so no
// Terminal needed. Delete/ignore after setup.
//
// Open it in a browser:  https://<project>.functions.supabase.co/zoho-connect
//   (or the /functions/v1/zoho-connect URL). Fill the form, submit, copy the JSON.
//
// The secret you type is used only to call Zoho and is never stored or logged.
// Deploy:  supabase functions deploy zoho-connect --no-verify-jwt

function esc(s: string) {
  return (s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function page(inner: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Connect Zoho · Rounds Codex</title>
<style>
body{margin:0;min-height:100vh;background:radial-gradient(circle at 50% 20%,#0a1d33,#050813 62%);color:#e7eefb;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;justify-content:center;padding:28px 16px}
.card{width:100%;max-width:560px}
h1{font-size:22px;margin:0 0 4px}.sub{color:#9daac4;font-size:14px;line-height:1.55;margin:0 0 22px}
label{display:block;font-size:12px;font-weight:700;color:#b7c2d6;margin:16px 0 5px}
input,select{width:100%;box-sizing:border-box;min-height:46px;padding:0 12px;border-radius:10px;border:1px solid #6fa9ff40;
background:#0a1424cc;color:#eef4ff;font-size:15px;font-family:inherit}
input:focus,select:focus{outline:none;border-color:#24d9ff;box-shadow:0 0 0 3px #24d9ff26}
button{width:100%;min-height:48px;margin-top:22px;border:0;border-radius:11px;cursor:pointer;font-size:15px;font-weight:800;
color:#03110f;background:linear-gradient(115deg,#4ff0b2,#28d9ed)}
.brand{font-weight:800;font-size:15px;margin-bottom:16px}.brand span{color:#46f2ad}
.box{background:#0c1830;border:1px solid #6fa9ff30;border-radius:12px;padding:14px;margin-top:14px;
font-family:ui-monospace,Menlo,monospace;font-size:12.5px;word-break:break-all;white-space:pre-wrap;color:#bff8e1}
.err{color:#ff8ea0;font-weight:600}.ok{color:#46f2ad;font-weight:700}
a{color:#24d9ff}.step{color:#8dddfc;font-size:13px}
</style></head><body><div class="card"><div class="brand">Rounds&nbsp;Codex</div>${inner}</div></body></html>`;
}

function form(note = "") {
  return page(`
<h1>Connect a Zoho mailbox</h1>
<p class="sub">Paste your Self Client's <b>Client ID</b> + <b>Secret</b> and a <b>fresh grant code</b>
(Generate Code → scope <code>ZohoMail.messages.READ,ZohoMail.accounts.READ</code> → 10&nbsp;min).
This swaps the code for a long-lived refresh token. Your secret is used once and never stored.</p>
${note}
<form method="POST">
<label>Mailbox address</label>
<input name="mailbox" type="email" placeholder="admin@roundscodex.com" required>
<label>Client ID</label>
<input name="client_id" placeholder="1000.XXXXXXXX" required autocomplete="off">
<label>Client Secret</label>
<input name="client_secret" placeholder="xxxxxxxx" required autocomplete="off">
<label>Grant code (fresh — expires in minutes)</label>
<input name="code" placeholder="1000.xxxx.yyyy" required autocomplete="off">
<label>Data center</label>
<select name="dc"><option value="com">com (US)</option><option value="eu">eu</option><option value="in">in</option><option value="com.au">com.au</option><option value="jp">jp</option></select>
<button type="submit">Get refresh token →</button>
</form>`);
}

Deno.serve(async (req) => {
  if (req.method === "GET") {
    return new Response(form(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });

  const fd = await req.formData();
  const mailbox = (fd.get("mailbox") ?? "").toString().trim();
  const client_id = (fd.get("client_id") ?? "").toString().trim();
  const client_secret = (fd.get("client_secret") ?? "").toString().trim();
  const code = (fd.get("code") ?? "").toString().trim();
  const dc = (fd.get("dc") ?? "com").toString().trim() || "com";

  if (!mailbox || !client_id || !client_secret || !code) {
    return new Response(form(`<p class="err">All fields are required.</p>`), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  const url = `https://accounts.zoho.${dc}/oauth/v2/token`
    + `?grant_type=authorization_code`
    + `&client_id=${encodeURIComponent(client_id)}`
    + `&client_secret=${encodeURIComponent(client_secret)}`
    + `&code=${encodeURIComponent(code)}`;

  let j: any = {};
  try {
    const r = await fetch(url, { method: "POST" });
    j = await r.json();
  } catch (e) {
    return new Response(form(`<p class="err">Network error contacting Zoho: ${esc(String(e))}</p>`), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  if (!j.refresh_token) {
    const reason = j.error === "invalid_code"
      ? "That grant code is expired or already used — go back to Zoho’s Generate Code tab, make a NEW code, and try again right away."
      : `Zoho returned: <code>${esc(JSON.stringify(j))}</code>`;
    return new Response(form(`<p class="err">No refresh token. ${reason}</p>`), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  const entry = JSON.stringify({ mailbox, client_id, client_secret, refresh_token: j.refresh_token, dc });
  return new Response(page(`
<h1 class="ok">✓ Connected ${esc(mailbox)}</h1>
<p class="sub">Copy this entry. When you have <b>both</b> mailboxes, put them in one array as the
<code>ZOHO_MAILBOXES</code> secret (Supabase → Project Settings → Edge Functions → Secrets):</p>
<div class="box">${esc(entry)}</div>
<p class="sub" style="margin-top:18px">Final secret shape with both mailboxes:</p>
<div class="box">[ ${esc(entry)},\n  { …teacher@ entry… } ]</div>
<p class="step" style="margin-top:20px"><a href="">← Connect the other mailbox</a></p>`),
    { headers: { "Content-Type": "text/html; charset=utf-8" } });
});
