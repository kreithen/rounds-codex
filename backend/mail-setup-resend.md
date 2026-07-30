# Sending email with Resend (welcome email + newsletters)

Resend is the **bulk/transactional sender** for Rounds Codex. It's separate from Zoho: Zoho =
your team mailboxes (read/reply), Resend = automated + bulk email the app sends. They don't
conflict — Resend puts its SPF on a `send.` subdomain and uses its own DKIM selector, so your
Zoho records at the root are untouched.

## 1. Create Resend + verify the domain
1. Sign up at **resend.com**.
2. **Domains → Add Domain** → `roundscodex.com`.
3. Resend shows a set of DNS records (typically an **MX** and **TXT/SPF** on `send.roundscodex.com`,
   a **DKIM** TXT at `resend._domainkey`, and an optional **DMARC**). Add each one in
   **GoDaddy → DNS** exactly as shown (use Resend's copy buttons).
4. Click **Verify**. (Minutes to propagate.) These do not affect your Zoho mail or the website.
5. **API Keys → Create API Key** → copy it (starts `re_…`). Treat it as a secret.

> From address: emails send as `hello@roundscodex.com` with Reply-To `admin@roundscodex.com`
> (a real Zoho inbox, so replies reach you). Both are configurable via the secrets below.

## 2. Run the database migration
Supabase → **SQL Editor** → paste **`backend/migrations/002_phase3.sql`** → **Run**.
(Adds unsubscribe tokens + the newsletter tables.)

## 3. Deploy the edge functions
Four functions: `welcome`, `unsubscribe`, `draft`, `send-campaign` (all under
`supabase/functions/<name>/index.ts`).

**Easiest — Supabase dashboard (no CLI):**
1. Supabase → **Edge Functions → Deploy a new function** (or "Create function").
2. Name it **`welcome`**, paste the contents of `supabase/functions/welcome/index.ts`, and
   **turn OFF "Verify JWT"** (it's called by a webhook). Deploy.
3. Repeat for **`unsubscribe`** (public link), **`draft`**, and **`send-campaign`** —
   **all four have Verify JWT OFF.** `draft` and `send-campaign` check admin membership
   themselves (so CORS preflight works); only a signed-in admin can trigger them.

**Or CLI (for devs):**
```
npm i -g supabase
supabase login
supabase link --project-ref emdrmxscgmnfxgvimbqn
supabase functions deploy welcome
supabase functions deploy unsubscribe
supabase functions deploy draft
supabase functions deploy send-campaign
```
(`supabase/config.toml` already sets `verify_jwt = false` for all four.)

## 4. Add the secrets
Supabase → **Project Settings → Edge Functions → Secrets** (or **Edge Functions → Manage secrets**):
- `RESEND_API_KEY` = your `re_…` key  **(required — welcome + newsletters)**
- `ANTHROPIC_API_KEY` = your `sk-ant-…` key  **(required for "Draft with AI")**
- `WELCOME_FROM` = `Rounds Codex <hello@roundscodex.com>`  *(optional; reused as the newsletter From)*
- `WELCOME_REPLY_TO` = `admin@roundscodex.com`  *(optional)*
- `MAIL_ADDRESS` = your real postal address  *(optional; CAN-SPAM footer — replaces `[mailing address]`)*

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are provided
automatically — do **not** add them.

## 5. Fire the welcome email on every new signup
Supabase → **Database → Webhooks → Create a new hook**:
- Table: `public.signups`
- Events: **Insert**
- Type: **HTTP Request → POST**
- URL: your `welcome` function URL
  (`https://emdrmxscgmnfxgvimbqn.supabase.co/functions/v1/welcome`)
- Add header `Content-Type: application/json`.

## 6. Test
Go to **roundscodex.com**, sign up with a test email → you should receive the branded welcome
email within a few seconds, with a working **Unsubscribe** link. Unsubscribing flips that row to
`unsubscribed` (visible in the dashboard).

## 7. Newsletters (admin dashboard → Newsletters tab)
Once `draft` + `send-campaign` are deployed and the secrets above are set:
1. Open the admin dashboard → **Newsletters** → **+ New newsletter**.
2. Write a one-line **brief** → **✨ Draft with AI** (Claude writes subject + preheader + body).
3. Edit anything, **Save draft**, then **Send test** to yourself to see the real email.
4. **Approve** → **Send to list**. It emails every `subscribed` signup, wraps the body in the
   branded shell, adds a per-recipient one-click unsubscribe, and logs each send.

Notes:
- Bulk sends reuse this same Resend domain + key. Nothing auto-sends — a human approves + sends.
- Set `MAIL_ADDRESS` (secret) to a real postal address before sending marketing email (CAN-SPAM).
- The current sender loops recipients one at a time — fine for the launch list. A very large
  list (10k+) will want batching/queueing; noted for a later pass.
