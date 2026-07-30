-- Rounds Codex — Phase 1 schema (single opt-in launch list + admin allowlist)
-- Run once in the Supabase SQL editor for your project.
-- Safe to re-run: uses "if not exists" / "or replace" where possible.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Launch-list signups. Written by the public landing page with the ANON key.
-- Row-level security lets anonymous visitors INSERT a subscribed row and do
-- nothing else — they cannot read, update, or delete. Admins (Phase 2) get
-- full access via the is_admin() policy below.
-- ---------------------------------------------------------------------------
create table if not exists public.signups (
  id              uuid primary key default gen_random_uuid(),
  email           text not null,
  role            text check (role in ('premed','nursing','medical','resident','professional','nonmedical','other')),
  source          text not null default 'landing',
  status          text not null default 'subscribed'
                    check (status in ('subscribed','unsubscribed','bounced')),
  created_at      timestamptz not null default now(),
  unsubscribed_at timestamptz,
  user_agent      text
);

-- One signup per email, case-insensitive. A duplicate insert fails with 23505,
-- which the form turns into a friendly "you're already on the list".
create unique index if not exists signups_email_uidx
  on public.signups (lower(email));

alter table public.signups enable row level security;

-- Anonymous visitors may ONLY insert a fresh, subscribed, landing-sourced row.
drop policy if exists signups_anon_insert on public.signups;
create policy signups_anon_insert on public.signups
  for insert to anon
  with check (status = 'subscribed' and source = 'landing');

-- ---------------------------------------------------------------------------
-- Admin allowlist. A user may use the dashboard (Phase 2) only if their
-- auth.users id appears here. Seed your own account after first magic-link
-- sign-in:  insert into public.admins (user_id, email)
--           values ('<your-auth-uid>', 'you@example.com');
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  user_id  uuid primary key references auth.users(id) on delete cascade,
  email    text not null,
  added_at timestamptz not null default now()
);
alter table public.admins enable row level security;

-- security definer so the function can read admins regardless of the caller's RLS
create or replace function public.is_admin() returns boolean
  language sql security definer stable set search_path = public as
$$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

-- Admins can read their own allowlist row, and fully manage signups.
drop policy if exists admins_self_read on public.admins;
create policy admins_self_read on public.admins
  for select to authenticated using (user_id = auth.uid());

drop policy if exists signups_admin_all on public.signups;
create policy signups_admin_all on public.signups
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- NOTE: campaigns / campaign_sends tables (newsletters) arrive in Phase 3.
-- They are specified in backend-plan.md §3 and intentionally not created yet.
-- ---------------------------------------------------------------------------
