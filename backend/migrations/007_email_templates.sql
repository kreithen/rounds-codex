-- Migration 007 — Editable email templates.
-- Lets an admin edit the wording of the automated Resend emails (welcome +
-- invite) from the dashboard, without touching code. The edge functions read a
-- row here (service role, bypasses RLS) and fall back to their built-in default
-- if the row is missing. Admins read/write via the dashboard (RLS + is_admin()).
--
-- Only the *content* is editable — subject, heading, body, button. The branded
-- shell and the legal footer (unsubscribe / sender line) stay in code so they
-- can't be broken or accidentally stripped (CAN-SPAM needs the unsubscribe link).
--
-- Placeholders the functions substitute:
--   welcome:  {{role}}    -> "nursing student" / "medical student" / ...
--   invite:   {{school}}  -> a sentence about their school (or a generic one)
-- The invite button always points at the freshly generated set-password link,
-- so its button_url is ignored.

create table if not exists public.email_templates (
  key          text primary key,          -- 'welcome' | 'invite'
  subject      text not null,
  heading      text not null,
  body         text not null,             -- paragraphs split on blank lines; {{placeholders}} allowed
  button_label text,
  button_url   text,                       -- ignored for 'invite' (uses the generated link)
  note         text,                       -- small fine print under the button
  updated_at   timestamptz not null default now(),
  updated_by   uuid
);

alter table public.email_templates enable row level security;
drop policy if exists email_templates_admin_all on public.email_templates;
create policy email_templates_admin_all on public.email_templates
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Seed the current wording as the starting point. ON CONFLICT DO NOTHING so a
-- re-run never clobbers edits made in the dashboard.
insert into public.email_templates (key, subject, heading, body, button_label, button_url, note) values
(
  'welcome',
  'Welcome to Rounds Codex — you''re on the launch list',
  'You''re on the list.',
  'Thanks for signing up as a {{role}}. Rounds Codex is a visual medical education app for nursing students, medical students, and residents — clinical libraries, pharmacology, image galleries, and NCLEX & USMLE practice, all in one place.

We''re building it now, and you''ll be among the first to know the moment it goes live. We''ll only email you when there''s something worth your time.

— The Rounds Codex team',
  'Visit roundscodex.com',
  'https://roundscodex.com',
  null
),
(
  'invite',
  'Your Rounds Codex invite — set your password',
  'You''re invited to Rounds Codex.',
  'An account has been created for you. Click below to set your password and get in. {{school}}',
  'Set your password →',
  null,
  'This link expires in 24 hours. If it wasn''t you, you can ignore this email.'
)
on conflict (key) do nothing;
