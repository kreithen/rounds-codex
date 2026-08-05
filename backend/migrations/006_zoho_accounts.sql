-- Rounds Codex — migration 006: zoho_accounts
--
-- Holds the Zoho Mail connection for each support mailbox (admin@, teacher@),
-- so the support inbox sync reads its config from the database instead of the
-- fiddly ZOHO_MAILBOXES env secret. sync-inbox reads this table first (active
-- rows), falling back to the env secret only if the table is empty. Rows are
-- written by the zoho-connect edge function (grant code -> refresh token), or
-- directly via a service-role token exchange.
--
-- Secrets live here (client_secret, refresh_token), so the table is service
-- role only: RLS on, no policies -> the anon/publishable key and signed-in
-- users cannot read it. The edge functions use SUPABASE_SERVICE_ROLE_KEY,
-- which bypasses RLS.

create table if not exists public.zoho_accounts (
  mailbox       text primary key,
  client_id     text not null,
  client_secret text not null,
  refresh_token text not null,
  dc            text not null default 'com',
  account_id    text,
  active        boolean not null default true,
  updated_at    timestamptz not null default now()
);

alter table public.zoho_accounts enable row level security;
-- Intentionally NO policies: only the service role (which bypasses RLS) may
-- read or write. Never add a policy that exposes client_secret/refresh_token.

comment on table public.zoho_accounts is
  'Per-mailbox Zoho Mail OAuth config for the support inbox sync. Service role only.';
