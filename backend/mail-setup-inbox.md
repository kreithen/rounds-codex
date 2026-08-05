# Support inbox — mirror your Zoho mail into the dashboard

This connects your Zoho mailbox to the dashboard's **Inbox** tab: incoming email is
pulled in every couple of minutes, grouped by sender into threads; you reply from the
dashboard (sent via Resend), and their reply comes back through Zoho and shows up in the
same thread. Two-way, no extra domain needed.

There are three parts: **database**, **edge functions**, and the **Zoho connection**
(the fiddly one — take it slow).

---

## Part A — Database (2 min)
Supabase → **SQL Editor** → run each of these once:
1. Paste **`backend/migrations/003_inbox.sql`** → **Run**. (Creates the `messages` table.)
2. **`backend/migrations/004_inbox_cron.sql`** — **first** replace `<PASTE_SERVICE_ROLE_KEY>`
   with your service_role key (Project Settings → API → `service_role`, the "secret" one),
   **then** Run. (Schedules the sync every 2 minutes.)

*Check:* Table Editor now shows a `messages` table.

---

## Part B — Edge functions (5 min)
Deploy three more functions (same as before: Edge Functions → Deploy a new function →
name it → paste the file → Deploy):

| Function name | File | Verify JWT |
|---|---|---|
| `sync-inbox` | `supabase/functions/sync-inbox/index.ts` | **ON** (leave default) |
| `inbox-reply` | `supabase/functions/inbox-reply/index.ts` | **OFF** |
| `inbox-draft` | `supabase/functions/inbox-draft/index.ts` | **OFF** |

`sync-inbox` is different — leave **Verify JWT ON**, because the cron job calls it with
your service_role key. The other two are dashboard-called, so **JWT off** like the rest.

They reuse `RESEND_API_KEY` and `ANTHROPIC_API_KEY` — already set. Nothing new here.

---

## Part C — Connect Zoho (the fiddly part, ~10 min)

We read your mail with the Zoho Mail API. That needs a one-time credential (a "refresh
token"). Do it once and it keeps working.

### C1. Create a Zoho API client
1. Go to **api-console.zoho.com** → **Add Client** → choose **Self Client** → **Create**.
2. Copy the **Client ID** and **Client Secret** somewhere safe.

### C2. Generate a grant code
1. In that Self Client, open the **Generate Code** tab.
2. **Scope:** paste exactly:
   ```
   ZohoMail.accounts.READ,ZohoMail.folders.READ,ZohoMail.messages.READ
   ```
3. **Time Duration:** 10 minutes. **Scope Description:** anything (e.g. "dashboard inbox").
4. Click **Create** → pick your `roundscodex.com` portal if asked → copy the **code** it
   shows. (It expires in 10 minutes — do the next step promptly.)

### C3. Trade the code for a refresh token
On a Mac: open **Terminal** and paste this, filling in your three values, then Enter:
```bash
curl -s -X POST "https://accounts.zoho.com/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "code=YOUR_GRANT_CODE"
```
The reply is a line of JSON. Copy the value of **`refresh_token`** (the long string after
`"refresh_token":`). That's the one you keep.

*(No Terminal / prefer not to? Tell me and I'll add a one-click "connect" helper page
instead — it does this exchange for you.)*

### C4. Add the Zoho secrets
Supabase → **Project Settings → Edge Functions → Secrets** → add:

| Name | Value |
|---|---|
| `ZOHO_CLIENT_ID` | from C1 |
| `ZOHO_CLIENT_SECRET` | from C1 |
| `ZOHO_REFRESH_TOKEN` | from C3 |
| `ZOHO_MAILBOX` | `admin@roundscodex.com` |
| `ZOHO_DC` | `com` |

*(`ZOHO_DC` is your Zoho data center — `com` for US accounts. If your Zoho URL is
`.eu`/`.in`/`.com.au`, use that instead.)*

### Second mailbox (teacher@)
- If **teacher@ is an alias** of admin@ (same mailbox), you're done — its mail already
  lands in the same Inbox.
- If **teacher@ is a separate mailbox**, repeat C1–C3 signed in as that account, then set
  one secret `ZOHO_MAILBOXES` to a JSON array covering both:
  ```json
  [{"mailbox":"admin@roundscodex.com","client_id":"...","client_secret":"...","refresh_token":"...","dc":"com"},
   {"mailbox":"teacher@roundscodex.com","client_id":"...","client_secret":"...","refresh_token":"...","dc":"com"}]
  ```
  (When `ZOHO_MAILBOXES` is set it takes over from the single-mailbox secrets above.)

---

## Part D — Test
1. In the dashboard → **Inbox** tab → **Sync now** (or wait 2 min for the cron).
2. Send an email **to admin@roundscodex.com** from some other address.
3. Within ~2 minutes it appears in the Inbox, grouped under that sender.
4. Open it → **✨ Draft reply with AI** → edit → **Send reply**. They get your email; when
   they reply, it flows back into the same thread on the next sync.

### If nothing shows up
Supabase → **Edge Functions → `sync-inbox` → Logs**. The function logs each step and the
first message's field names. Common causes:
- **`token refresh failed`** → wrong Client ID/Secret/refresh token, or wrong `ZOHO_DC`.
- **`no accountId` / `no Inbox folderId`** → the scope was wrong in C2 (must include
  `ZohoMail.accounts.READ`), or the token is for the wrong account.
- Nothing in logs → the cron isn't calling it; re-check Part A step 2 (service_role key).

Paste me any red log line and I'll pinpoint it.
