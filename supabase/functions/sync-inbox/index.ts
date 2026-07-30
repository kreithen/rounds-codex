// Rounds Codex — "sync-inbox" edge function (Supabase, Deno).
// Pulls recent Inbox mail from one or more Zoho mailboxes via the Zoho Mail API
// and mirrors it into public.messages (direction 'in'), deduped by Zoho message
// id. Sends one alert email (via Resend) when new mail arrives. Meant to be
// called on a schedule by pg_cron (see backend/migrations/004_inbox_cron.sql).
//
// Reads mail with the Zoho Mail REST API (HTTPS/JSON) — robust inside an edge
// function, unlike raw IMAP.
//
// ---- Configuration (secrets) ----
// Single mailbox (simplest — start here):
//   ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN   (required)
//   ZOHO_MAILBOX        label, e.g. "admin@roundscodex.com"  (optional)
//   ZOHO_ACCOUNT_ID     skip auto-lookup if provided          (optional)
//   ZOHO_DC             data center: com | eu | in | com.au | jp  (default "com")
// Multiple mailboxes (override — a JSON array of the same fields):
//   ZOHO_MAILBOXES = '[{"mailbox":"admin@roundscodex.com","client_id":"...",
//                       "client_secret":"...","refresh_token":"...","dc":"com"}, ...]'
// Alerts + auth:
//   RESEND_API_KEY, WELCOME_FROM, WELCOME_REPLY_TO           (for the alert email)
//   ALERT_TO            where alerts go (default WELCOME_REPLY_TO/admin@)
// Auto-provided: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy sync-inbox   (keep Verify JWT ON — it is
// called by pg_cron with the service_role key, which is a valid project JWT.
// CRON_SECRET below is an optional extra guard, not required.)

const SUPABASE_URL = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/$/, "");
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";
const REPLY_TO = Deno.env.get("WELCOME_REPLY_TO") ?? "admin@roundscodex.com";
const ALERT_TO = Deno.env.get("ALERT_TO") ?? REPLY_TO;
const CRON_SECRET = Deno.env.get("CRON_SECRET") ?? "";
const PER_MAILBOX_LIMIT = 25;

const svc = {
  apikey: SERVICE_ROLE,
  Authorization: `Bearer ${SERVICE_ROLE}`,
  "Content-Type": "application/json",
};

interface Mailbox {
  mailbox: string;
  client_id: string;
  client_secret: string;
  refresh_token: string;
  account_id?: string;
  dc?: string;
}

function loadMailboxes(): Mailbox[] {
  const raw = Deno.env.get("ZOHO_MAILBOXES");
  if (raw) {
    try {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length) return arr;
    } catch (e) {
      console.error("ZOHO_MAILBOXES is not valid JSON:", String(e));
    }
  }
  const client_id = Deno.env.get("ZOHO_CLIENT_ID");
  const client_secret = Deno.env.get("ZOHO_CLIENT_SECRET");
  const refresh_token = Deno.env.get("ZOHO_REFRESH_TOKEN");
  if (client_id && client_secret && refresh_token) {
    return [{
      mailbox: Deno.env.get("ZOHO_MAILBOX") ?? "inbox",
      client_id, client_secret, refresh_token,
      account_id: Deno.env.get("ZOHO_ACCOUNT_ID") ?? undefined,
      dc: Deno.env.get("ZOHO_DC") ?? "com",
    }];
  }
  return [];
}

const accountsHost = (dc: string) => `https://accounts.zoho.${dc}`;
const mailHost = (dc: string) => `https://mail.zoho.${dc}`;

async function accessToken(mb: Mailbox): Promise<string> {
  const dc = mb.dc ?? "com";
  const url = `${accountsHost(dc)}/oauth/v2/token`
    + `?refresh_token=${encodeURIComponent(mb.refresh_token)}`
    + `&client_id=${encodeURIComponent(mb.client_id)}`
    + `&client_secret=${encodeURIComponent(mb.client_secret)}`
    + `&grant_type=refresh_token`;
  const r = await fetch(url, { method: "POST" });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) {
    throw new Error(`token refresh failed (${r.status}): ${JSON.stringify(j).slice(0, 200)}`);
  }
  return j.access_token;
}

function zoho(dc: string, token: string) {
  return async (path: string) => {
    const r = await fetch(`${mailHost(dc)}/api${path}`, {
      headers: { Authorization: `Zoho-oauthtoken ${token}` },
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(`GET ${path} failed (${r.status}): ${JSON.stringify(j).slice(0, 200)}`);
    return j;
  };
}

// Some Zoho fields drift by account age; read the first present key.
function pick(o: any, keys: string[]): string {
  for (const k of keys) {
    const v = o?.[k];
    if (v !== undefined && v !== null && String(v).length) return String(v);
  }
  return "";
}

// "Name" <a@b.com> -> {name, email}; bare address -> {email}.
function parseAddr(s: string): { name: string; email: string } {
  if (!s) return { name: "", email: "" };
  const m = s.match(/^\s*"?([^"<]*?)"?\s*<([^>]+)>\s*$/);
  if (m) return { name: m[1].trim(), email: m[2].trim().toLowerCase() };
  return { name: "", email: s.trim().toLowerCase() };
}

function toMs(v: string): number {
  const n = Number(v);
  if (Number.isFinite(n) && n > 0) return n < 1e12 ? n * 1000 : n; // sec vs ms
  const d = Date.parse(v);
  return Number.isFinite(d) ? d : 0;
}

function htmlToText(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|tr|li|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n").trim();
}

async function existingIds(mailbox: string, ids: string[]): Promise<Set<string>> {
  if (!ids.length) return new Set();
  const inList = ids.map((i) => `"${i}"`).join(",");
  const r = await fetch(
    `${SUPABASE_URL}/rest/v1/messages?mailbox=eq.${encodeURIComponent(mailbox)}`
      + `&zoho_message_id=in.(${encodeURIComponent(inList)})&select=zoho_message_id`,
    { headers: svc },
  );
  if (!r.ok) return new Set();
  const rows = await r.json();
  return new Set((rows || []).map((x: any) => x.zoho_message_id));
}

async function setState(mailbox: string, error: string | null) {
  await fetch(`${SUPABASE_URL}/rest/v1/inbox_state`, {
    method: "POST",
    headers: { ...svc, Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({
      mailbox,
      last_synced_at: new Date().toISOString(),
      last_error: error,
      updated_at: new Date().toISOString(),
    }),
  });
}

async function syncMailbox(mb: Mailbox): Promise<number> {
  const dc = mb.dc ?? "com";
  const token = await accessToken(mb);
  const get = zoho(dc, token);

  // accountId
  let accountId = mb.account_id;
  if (!accountId) {
    const acc = await get(`/accounts`);
    accountId = pick(acc?.data?.[0] ?? {}, ["accountId", "account_id"]);
    if (!accountId) throw new Error("no accountId from /accounts");
  }

  // Inbox folderId
  const folders = await get(`/accounts/${accountId}/folders`);
  const inbox = (folders?.data ?? []).find((f: any) =>
    /inbox/i.test(String(f.folderName ?? f.path ?? "")));
  const folderId = pick(inbox ?? {}, ["folderId", "folder_id"]);
  if (!folderId) throw new Error("no Inbox folderId from /folders");

  // Recent messages
  const list = await get(
    `/accounts/${accountId}/messages/view?folderId=${folderId}&limit=${PER_MAILBOX_LIMIT}`,
  );
  const msgs: any[] = list?.data ?? [];
  if (msgs.length) console.log(`[${mb.mailbox}] first message keys:`, Object.keys(msgs[0]).join(","));

  const ids = msgs.map((m) => pick(m, ["messageId", "msgId"])).filter(Boolean);
  const seen = await existingIds(mb.mailbox, ids);

  const fresh = msgs.filter((m) => {
    const id = pick(m, ["messageId", "msgId"]);
    return id && !seen.has(id);
  });
  if (!fresh.length) { await setState(mb.mailbox, null); return 0; }

  const rows: any[] = [];
  for (const m of fresh) {
    const messageId = pick(m, ["messageId", "msgId"]);
    const from = parseAddr(pick(m, ["fromAddress", "sender", "from"]));
    const to = parseAddr(pick(m, ["toAddress", "to"]));
    const subject = pick(m, ["subject"]);
    const snippet = pick(m, ["summary", "snippet"]);
    const sentMs = toMs(pick(m, ["receivedTime", "sentDateInGMT", "receivedDateInGMT", "time"]));

    let bodyHtml = "";
    try {
      const c = await get(`/accounts/${accountId}/folders/${folderId}/messages/${messageId}/content`);
      bodyHtml = pick(c?.data ?? {}, ["content", "body", "htmlContent"]);
    } catch (e) {
      console.error(`[${mb.mailbox}] content fetch failed for ${messageId}:`, String(e));
    }

    rows.push({
      mailbox: mb.mailbox,
      direction: "in",
      party_email: from.email || "unknown",
      party_name: from.name || null,
      from_email: from.email || null,
      to_email: to.email || mb.mailbox,
      subject: subject || "(no subject)",
      snippet: snippet || null,
      body_html: bodyHtml || null,
      body_text: bodyHtml ? htmlToText(bodyHtml) : (snippet || null),
      zoho_message_id: messageId,
      zoho_folder_id: folderId,
      sent_at: sentMs ? new Date(sentMs).toISOString() : new Date().toISOString(),
    });
  }

  // Insert, ignoring any that raced in (unique index on mailbox+zoho_message_id).
  const ins = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
    method: "POST",
    headers: { ...svc, Prefer: "return=minimal,resolution=ignore-duplicates" },
    body: JSON.stringify(rows),
  });
  if (!ins.ok) throw new Error(`insert failed (${ins.status}): ${(await ins.text()).slice(0, 200)}`);

  await setState(mb.mailbox, null);
  return rows.length;
}

async function alert(total: number) {
  if (!RESEND_API_KEY || total <= 0) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: ALERT_TO,
        reply_to: REPLY_TO,
        subject: `${total} new message${total > 1 ? "s" : ""} in the Rounds Codex inbox`,
        text: `You have ${total} new message${total > 1 ? "s" : ""} waiting in the admin dashboard inbox.\n\nhttps://roundsdash.netlify.app`,
      }),
    });
  } catch (e) { console.error("alert send failed:", String(e)); }
}

Deno.serve(async (req) => {
  // Guard: if CRON_SECRET is set, require it (header or ?key=).
  if (CRON_SECRET) {
    const url = new URL(req.url);
    const given = req.headers.get("x-cron-secret") ?? url.searchParams.get("key") ?? "";
    if (given !== CRON_SECRET) return new Response("forbidden", { status: 403 });
  }

  const mailboxes = loadMailboxes();
  if (!mailboxes.length) {
    return new Response(JSON.stringify({ error: "no Zoho mailboxes configured" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }

  let total = 0;
  const results: any[] = [];
  for (const mb of mailboxes) {
    try {
      const n = await syncMailbox(mb);
      total += n;
      results.push({ mailbox: mb.mailbox, new: n });
    } catch (e) {
      console.error(`[${mb.mailbox}] sync error:`, String(e));
      await setState(mb.mailbox, String(e));
      results.push({ mailbox: mb.mailbox, error: String(e) });
    }
  }
  await alert(total);

  return new Response(JSON.stringify({ ok: true, total_new: total, results }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
});
