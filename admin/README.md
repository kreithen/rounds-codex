# admin/ — Rounds Codex admin dashboard (Phase 2)

A private, auth-gated dashboard for the launch list. **Vite + React**, deployed as a **second,
separate Netlify site** at `admin.roundscodex.com`. It talks to the same Supabase project as the
landing page and shows nothing to anyone who isn't a signed-in administrator.

- Magic-link sign-in (Supabase Auth) — no passwords.
- Access limited to accounts listed in the `admins` table (row-level security enforces it).
- Signup list with search, **CSV export**, live stats (total / subscribed / unsubscribed / by
  role) and a 14-day signups sparkline.

Public config only (`src/config.js`: project URL + publishable key). No secret keys here.

## Local dev
```
cd admin
npm install
npm run dev      # http://localhost:5173
```

## Deploy (one-time)

### 1. Create the second Netlify site
Netlify → **Add new project** → import **`kreithen/rounds-codex`** (same public repo) →
- **Base directory:** `admin`
- **Branch:** `main`
- Build command / publish dir come from `admin/netlify.toml` (`npm run build` → `dist`).

Deploy. It comes up at a temporary `*.netlify.app` URL.

### 2. Point the subdomain
Netlify (admin site) → **Domain management** → add **`admin.roundscodex.com`**.
Then in GoDaddy DNS add:

| Type | Name | Value |
|---|---|---|
| CNAME | `admin` | `<your-admin-site>.netlify.app` |

Netlify issues the SSL certificate automatically once DNS resolves.

### 3. Tell Supabase the admin URL is allowed
Supabase → **Authentication → URL Configuration**:
- **Site URL:** `https://admin.roundscodex.com`
- **Redirect URLs:** add `https://admin.roundscodex.com/**` (and the temporary
  `https://<your-admin-site>.netlify.app/**` while testing).

Magic-link emails are sent by Supabase's built-in auth mailer (fine for a handful of admin
logins; a custom SMTP/Resend sender can be added later).

### 4. Make yourself an admin (one-time)
1. Open the admin site and request a magic link with your email; click it to sign in. You'll see
   "This account isn't an administrator" — expected, because you're not in the allowlist yet.
2. Supabase → **SQL Editor**, run (uses the account you just created):
   ```sql
   insert into public.admins (user_id, email)
   select id, email from auth.users where email = 'YOUR_EMAIL_HERE'
   on conflict (user_id) do nothing;
   ```
3. Back on the admin site, refresh — you now see the dashboard.

Add more admins later by repeating step 4.2 with their email (after they've signed in once).

## Not yet (Phase 3)
Newsletters: `campaigns` tables, "Draft with AI" (Claude), Approve → Send via Resend, open/click
stats. Specified in `../backend-plan.md`.
