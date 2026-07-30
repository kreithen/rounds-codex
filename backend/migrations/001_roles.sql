-- Migration 001 — widen the allowed signup roles.
-- Run once in Supabase → SQL Editor. Safe to re-run.
-- Adds: premed, professional, nonmedical. Keeps the originals (incl. 'other')
-- so existing rows stay valid.

alter table public.signups drop constraint if exists signups_role_check;

alter table public.signups
  add constraint signups_role_check
  check (role in ('premed','nursing','medical','resident','professional','nonmedical','other'));
