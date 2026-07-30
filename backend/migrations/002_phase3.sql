-- Migration 002 — Phase 3 foundation (welcome email + newsletters).
-- Run once in Supabase → SQL Editor. Safe to re-run.

-- 1) Per-signup unsubscribe token (used in the one-click unsubscribe link).
alter table public.signups
  add column if not exists unsub_token uuid not null default gen_random_uuid();
create unique index if not exists signups_unsub_token_uidx
  on public.signups (unsub_token);

-- 2) Newsletter campaigns (composed + AI-drafted, approval-gated, then sent).
create table if not exists public.campaigns (
  id          uuid primary key default gen_random_uuid(),
  subject     text not null default '',
  preheader   text,
  body_html   text,
  body_text   text,
  status      text not null default 'draft'
                check (status in ('draft','approved','sending','sent','canceled')),
  audience    text not null default 'subscribed',
  ai_model    text,
  ai_brief    text,
  created_by  uuid references auth.users(id),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  approved_by uuid references auth.users(id),
  approved_at timestamptz,
  sent_at     timestamptz,
  sent_count  integer not null default 0
);

-- 3) Per-recipient send log.
create table if not exists public.campaign_sends (
  id          uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  signup_id   uuid not null references public.signups(id) on delete cascade,
  email       text not null,
  status      text not null default 'sent',   -- sent | failed | test
  resend_id   text,
  error       text,
  created_at  timestamptz not null default now()
);
create index if not exists campaign_sends_campaign_idx on public.campaign_sends (campaign_id);

-- 4) RLS: only admins can touch campaigns + sends (reuses is_admin() from schema.sql).
alter table public.campaigns enable row level security;
drop policy if exists campaigns_admin_all on public.campaigns;
create policy campaigns_admin_all on public.campaigns
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

alter table public.campaign_sends enable row level security;
drop policy if exists campaign_sends_admin_all on public.campaign_sends;
create policy campaign_sends_admin_all on public.campaign_sends
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
