-- Migration 009 — outbound SMS (launch texts).
-- Log of every text we send from the dashboard (individual or batch), plus an
-- opt-out flag on signups so STOP is honored. Admin-only via RLS (is_admin()).
-- The send-sms edge function (service role) writes rows here.

create table if not exists public.sms_messages (
  id           uuid primary key default gen_random_uuid(),
  phone        text not null,               -- E.164 recipient
  name         text,                        -- denormalized for display
  direction    text not null default 'out'
                 check (direction in ('out','in')),
  body         text not null,
  status       text not null default 'queued'
                 check (status in ('queued','sent','failed')),
  provider     text,                        -- 'twilio' | 'telnyx' | ...
  provider_sid text,                        -- provider message id
  error        text,
  segments     int,
  sent_by      uuid,                         -- admin auth.users id
  created_at   timestamptz not null default now()
);

create index if not exists sms_messages_phone_idx on public.sms_messages (phone, created_at desc);
create index if not exists sms_messages_created_idx on public.sms_messages (created_at desc);

alter table public.sms_messages enable row level security;
drop policy if exists sms_messages_admin_all on public.sms_messages;
create policy sms_messages_admin_all on public.sms_messages
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Honor STOP / manual opt-out. Batch sends skip opted-out numbers.
alter table public.signups add column if not exists sms_opted_out boolean not null default false;
