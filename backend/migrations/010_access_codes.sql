-- Migration 010 — free-access codes + entitlements.
-- Access = an entitlement on app_users. Apple IAP, founding-member status, and
-- admin-issued free codes all set the same field, and the app reads only that.
-- Admins create/revoke codes from the dashboard; users redeem in-app via the
-- atomic security-definer RPC redeem_access_code (no edge function needed).

alter table public.app_users add column if not exists entitlement text;             -- null | founding | comped | trial | paid
alter table public.app_users add column if not exists entitlement_source text;       -- 'code:XXXX' | 'founding_signup' | 'apple_iap' | 'manual'
alter table public.app_users add column if not exists entitlement_expires_at timestamptz; -- null = lifetime

create table if not exists public.access_codes (
  code            text primary key,
  label           text,
  grant_type      text not null default 'lifetime' check (grant_type in ('lifetime','year','month')),
  max_redemptions int  not null default 1,
  redemptions     int  not null default 0,
  expires_at      timestamptz,
  active          boolean not null default true,
  created_by      uuid,
  created_at      timestamptz not null default now()
);
alter table public.access_codes enable row level security;
drop policy if exists access_codes_admin_all on public.access_codes;
create policy access_codes_admin_all on public.access_codes
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.code_redemptions (
  id          uuid primary key default gen_random_uuid(),
  code        text not null references public.access_codes(code) on delete cascade,
  user_id     uuid not null,
  email       text,
  redeemed_at timestamptz not null default now(),
  unique (code, user_id)
);
alter table public.code_redemptions enable row level security;
drop policy if exists code_redemptions_admin_read on public.code_redemptions;
create policy code_redemptions_admin_read on public.code_redemptions
  for select to authenticated using (public.is_admin());

-- Atomic redeem. Any signed-in user: the app calls rpc('redeem_access_code', {p_code}).
-- Row-locks the code, validates active/expiry/remaining/not-already-redeemed,
-- records the redemption, and grants the entitlement to the caller's own row.
create or replace function public.redeem_access_code(p_code text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  c   record;
  exp timestamptz;
  em  text;
begin
  if uid is null then return jsonb_build_object('ok', false, 'error', 'not signed in'); end if;
  select * into c from public.access_codes where upper(code) = upper(trim(p_code)) for update;
  if not found then return jsonb_build_object('ok', false, 'error', 'invalid code'); end if;
  if not c.active then return jsonb_build_object('ok', false, 'error', 'code inactive'); end if;
  if c.expires_at is not null and c.expires_at < now() then return jsonb_build_object('ok', false, 'error', 'code expired'); end if;
  if c.redemptions >= c.max_redemptions then return jsonb_build_object('ok', false, 'error', 'code fully used'); end if;
  if exists (select 1 from public.code_redemptions where code = c.code and user_id = uid) then
    return jsonb_build_object('ok', false, 'error', 'already redeemed');
  end if;
  exp := case c.grant_type when 'year' then now() + interval '1 year'
                           when 'month' then now() + interval '1 month'
                           else null end;
  select email into em from auth.users where id = uid;
  insert into public.code_redemptions (code, user_id, email) values (c.code, uid, em);
  update public.access_codes set redemptions = redemptions + 1 where code = c.code;
  update public.app_users
     set entitlement = 'comped', entitlement_source = 'code:' || c.code,
         entitlement_expires_at = exp, updated_at = now()
   where id = uid;
  return jsonb_build_object('ok', true, 'grant', c.grant_type, 'expires_at', exp);
end $$;
grant execute on function public.redeem_access_code(text) to authenticated;
