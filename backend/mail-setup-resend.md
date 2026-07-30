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

## 3. Deploy the two edge functions
Files: `supabase/functions/welcome/index.ts` and `supabase/functions/unsubscribe/index.ts`.

**Easiest — Supabase dashboard (no CLI):**
1. Supabase → **Edge Functions → Deploy a new function** (or "Create function").
2. Name it **`welcome`**, paste the contents of `supabase/functions/welcome/index.ts`, and
   **turn OFF "Verify JWT"** (it's called by a webhook). Deploy.
3. Repeat for **`unsubscribe`** (also **Verify JWT off** — it's a public link).

**Or CLI (for devs):**
```
npm i -g supabase
supabase login
supabase link --project-ref emdrmxscgmnfxgvimbqn
supabase functions deploy welcome
supabase functions deploy unsubscribe
```
(`supabase/config.toml` already sets `verify_jwt = false` for both.)

## 4. Add the secrets
Supabase → **Project Settings → Edge Functions → Secrets** (or **Edge Functions → Manage secrets**):
- `RESEND_API_KEY` = your `re_…` key  **(required)**
- `WELCOME_FROM` = `Rounds Codex <hello@roundscodex.com>`  *(optional)*
- `WELCOME_REPLY_TO` = `admin@roundscodex.com`  *(optional)*

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically — do **not** add them.

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

## Notes for the newsletter sender (next build)
- Bulk sends will reuse this same Resend domain + key.
- A `[mailing address]` placeholder is in the email footer for CAN-SPAM — replace it with a real
  postal address before sending marketing email.
- We'll add the Anthropic API key (`ANTHROPIC_API_KEY`) as a secret when we wire "Draft with AI."
