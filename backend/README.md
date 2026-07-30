# backend/ — Rounds Codex platform (Phase 1)

Server-side pieces for roundscodex.com. See `../backend-plan.md` for the full architecture.
**Phase 1 = launch-list capture** (single opt-in, email + role). The admin dashboard (Phase 2)
and newsletters (Phase 3) come later.

## Files
- `schema.sql` — the `signups` + `admins` tables, row-level security, and `is_admin()`. Run once.
- `functions/welcome/index.ts` — optional Supabase Edge Function that sends a welcome email via
  Resend on each new signup. Not required for capture to work.

## Phase 1 setup (≈10 min)

### 1. Create the tables
Supabase → **SQL Editor** → paste all of `schema.sql` → **Run**. Re-running is safe.

### 2. Connect the landing form
Supabase → **Project Settings → API**. Copy:
- **Project URL** → `landing/config.js` → `SUPABASE_URL`
- **anon / public** key → `landing/config.js` → `SUPABASE_ANON_KEY`

Both are safe to commit — the anon key is browser-facing and constrained by row-level security.
**Never** put the `service_role` key here. Commit + let Netlify deploy. The form goes live; until
these are filled it just says “signups open soon.”

### 3. Verify
Visit the site, submit a test email, then in Supabase → **Table Editor → signups** confirm the
row (email + role). A repeat email returns a friendly “already on the list.”

### 4. (Optional) Welcome email via Resend
Only when you want an automatic welcome message:
1. Resend → add + **verify the `roundscodex.com` domain** (add its SPF/DKIM/DMARC DNS records).
2. `supabase secrets set RESEND_API_KEY=re_xxx WELCOME_FROM="Rounds Codex <hello@roundscodex.com>"`
3. `supabase functions deploy welcome --no-verify-jwt`
4. Supabase → **Database → Webhooks** → new webhook: table `public.signups`, event `INSERT`,
   type HTTP → POST to the `welcome` function URL.

Secrets live only in Supabase (step 2), never in this repo.

## Not yet wired (later phases)
- **Admin dashboard** (Phase 2): `admin.roundscodex.com`, magic-link login, signup list + export.
- **Newsletters** (Phase 3): `campaigns` tables, Claude “draft with AI,” approve→send via Resend.
- **App accounts** (Phase 4): syncing the app's device-local study data into accounts.
