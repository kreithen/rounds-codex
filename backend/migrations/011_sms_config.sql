-- Migration 011 — sms_config (Twilio/SMS credentials, server-managed).
-- Single row (id=1). Holds the auth token, so it's service-role only (RLS on,
-- no policies) — same pattern as zoho_accounts. send-sms reads this first and
-- falls back to env vars. Lets us set the provider credentials from the server
-- without anyone touching the Edge Functions "Secrets" screen.

create table if not exists public.sms_config (
  id          int primary key default 1 check (id = 1),
  provider    text not null default 'twilio',
  account_sid text,
  auth_token  text,
  from_number text,
  updated_at  timestamptz not null default now()
);

alter table public.sms_config enable row level security;
-- Intentionally NO policies: only the service role (bypasses RLS) may read/write.
-- Never add a policy that exposes auth_token to the anon or authenticated roles.

comment on table public.sms_config is
  'SMS provider credentials (Twilio). Service role only — never expose auth_token.';
