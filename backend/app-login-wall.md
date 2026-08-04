# App login wall — integration notes (rounds-codex-app)

Gates the live app (rounds-codex.netlify.app) behind Supabase email/password auth.
The same accounts will power the iOS app later. Committed to the **app repo** on branch
`claude/app-login-wall` (commit `ce53dec`); this file is the durable copy + the checklist
to make it live.

## How it works
- A self-contained overlay (`#rc-gate`) is injected **right after `<body>`** in the app's
  `index.html`. It uses plain `fetch` against Supabase Auth (GoTrue) + REST — **no SDK**, so
  the app stays self-contained (no CDN, service-worker-safe).
- **Unauthed** → the overlay covers the app (login form). **Valid session** → overlay hides,
  app shows. Session persists in `localStorage` (`rc.app.session.v1`) and auto-refreshes.
- **Login**: `POST /auth/v1/token?grant_type=password`.
- **Forgot password**: `POST /auth/v1/recover?redirect_to=<app>/` → Supabase emails a reset link.
- **Invite / recovery link** lands on the app with tokens in the URL hash → shows the
  **set-password + school** view → `PUT /auth/v1/user` (password) + `PATCH /rest/v1/app_users`
  (school, status='active', via the user's own RLS row).
- `window.rcLogout()` is exposed globally (wire a button into the app menu later).
- It's a **login wall**, not a hard paywall: the content JSON is still fetchable directly by a
  determined user. Harden before charging money (App Store paid tier).

## To make it live — checklist
1. **Deploy the Supabase side** (migration `005_app_users.sql`, function `invite-user`) — see
   below.
2. **Supabase → Authentication → URL Configuration**:
   - **Site URL**: `https://rounds-codex.netlify.app`
   - **Redirect URLs**: add `https://rounds-codex.netlify.app/**`
   Without this, invite / reset links won't redirect back to the app.
3. **Deploy the app** (push `claude/app-login-wall` → merge → your usual deploy path).
4. **Invite a user** (admin dashboard "Users" tab → calls `invite-user`, or the Supabase
   dashboard). They get the teacher@ email → set password + school → in.

## Supabase deploy (migration 005 + invite-user)
- Run `backend/migrations/005_app_users.sql` (SQL Editor) — creates `app_users`, the
  auto-fill trigger, and RLS.
- Deploy `supabase/functions/invite-user` (Verify JWT **OFF** — admin-checked internally).
  Reuses `RESEND_API_KEY`; sends from `teacher@roundscodex.com` (override via `INVITE_FROM`).

## The overlay block (reference — exact code lives in app repo `index.html`)
Injected between `<body>` and `<div class="bg">`. See app-repo commit `ce53dec` for the full
block: an inline `<style>`, the `#rc-gate` markup (login / forgot / set-password views), and an
IIFE `<script>` implementing the auth flow described above. Config it carries:
`SUPABASE_URL = https://emdrmxscgmnfxgvimbqn.supabase.co`, publishable key (browser-safe).
