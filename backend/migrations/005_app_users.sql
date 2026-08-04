-- Migration 005 — app_users (login wall for the Rounds Codex app + iOS later).
-- Every Supabase Auth account gets one app_users row, auto-filled with their
-- email the moment the account is created. School (and future App Store fields)
-- fill in afterward. Run once. Safe to re-run.

create table if not exists public.app_users (
  id           uuid primary key references auth.users(id) on delete cascade,
  email        text,
  school       text,
  role         text,                         -- premed | nursing | medical | resident | professional (optional)
  status       text not null default 'invited'
                 check (status in ('invited','active','disabled')),
  invited_by   uuid references auth.users(id),
  platform     text,                         -- 'web' | 'ios' (for the App Store reuse later)
  app_store_id text,                         -- external identifier, filled by the iOS app later
  metadata     jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists app_users_email_idx on public.app_users (lower(email));

-- Auto-create the profile row on every new auth account. Defensive: it must
-- NEVER block user creation, so a failure here is swallowed.
create or replace function public.handle_new_app_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  begin
    insert into public.app_users (id, email, status)
    values (new.id, new.email, 'invited')
    on conflict (id) do nothing;
  exception when others then
    null; -- never fail the auth.users insert
  end;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_app_user();

-- Keep updated_at fresh on profile edits.
create or replace function public.touch_app_users_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists app_users_touch on public.app_users;
create trigger app_users_touch
  before update on public.app_users
  for each row execute function public.touch_app_users_updated_at();

-- RLS: a user sees/edits only their own row; admins (is_admin()) see all.
alter table public.app_users enable row level security;

drop policy if exists app_users_self_select on public.app_users;
create policy app_users_self_select on public.app_users
  for select to authenticated using (auth.uid() = id);

drop policy if exists app_users_self_update on public.app_users;
create policy app_users_self_update on public.app_users
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists app_users_admin_all on public.app_users;
create policy app_users_admin_all on public.app_users
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
