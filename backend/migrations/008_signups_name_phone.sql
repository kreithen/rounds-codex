-- Migration 008 — capture name + phone (+ SMS consent) on the launch list.
-- The landing signup now asks for name and a (mandatory) phone number so we can
-- text launch updates. sms_consent records that the person agreed to receive
-- texts at signup (single opt-in; the form states it beside the button).

alter table public.signups add column if not exists name text;
alter table public.signups add column if not exists phone text;
alter table public.signups add column if not exists sms_consent boolean not null default false;

comment on column public.signups.phone is
  'E.164-ish phone captured at signup; for launch SMS updates (consent in sms_consent).';
