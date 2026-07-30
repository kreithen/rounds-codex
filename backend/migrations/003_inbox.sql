-- Migration 003 — Support inbox (mirror Zoho mailboxes into the dashboard).
-- Run once in Supabase → SQL Editor. Safe to re-run.
--
-- Stores every email we pull from Zoho (direction 'in') and every reply we send
-- from the dashboard (direction 'out'), threaded by the external participant's
-- address (party_email). Admin-only via RLS (reuses is_admin() from schema.sql).

-- 1) The messages table.
create table if not exists public.messages (
  id              uuid primary key default gen_random_uuid(),
  mailbox         text not null,                 -- which of our addresses (admin@ / teacher@)
  direction       text not null default 'in'
                    check (direction in ('in','out')),
  party_email     text not null,                 -- the external person = the thread key
  party_name      text,
  from_email      text,
  to_email        text,
  subject         text,
  snippet         text,
  body_html       text,
  body_text       text,
  zoho_message_id text,                          -- dedupe key for pulled mail
  zoho_folder_id  text,
  sent_at         timestamptz,
  is_read         boolean not null default false,
  created_at      timestamptz not null default now()
);

create index if not exists messages_party_idx on public.messages (lower(party_email), sent_at);
create index if not exists messages_sent_idx  on public.messages (sent_at desc);
-- Dedupe pulled mail: one row per Zoho message per mailbox.
create unique index if not exists messages_zoho_uidx
  on public.messages (mailbox, zoho_message_id)
  where zoho_message_id is not null;

-- 2) Per-mailbox sync bookkeeping (for a "last synced" line + error surfacing).
create table if not exists public.inbox_state (
  mailbox        text primary key,
  last_synced_at timestamptz,
  last_error     text,
  updated_at     timestamptz not null default now()
);

-- 3) RLS: only admins can read/reply. The edge functions use the service role
--    (which bypasses RLS) to insert pulled mail.
alter table public.messages enable row level security;
drop policy if exists messages_admin_all on public.messages;
create policy messages_admin_all on public.messages
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

alter table public.inbox_state enable row level security;
drop policy if exists inbox_state_admin_read on public.inbox_state;
create policy inbox_state_admin_read on public.inbox_state
  for select to authenticated using (public.is_admin());
