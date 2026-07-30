-- Migration 004 — schedule the inbox sync (pg_cron → sync-inbox edge function).
-- Run once in Supabase → SQL Editor. Re-running is safe (it re-schedules).
--
-- BEFORE RUNNING: replace <PASTE_SERVICE_ROLE_KEY> below with your project's
-- service_role key (Supabase → Project Settings → API → service_role, "secret").
-- It's only stored server-side in the cron job table (admin-only) — do NOT
-- commit the filled-in version anywhere.

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Remove any prior schedule so this migration can be re-run cleanly.
do $$
begin
  perform cron.unschedule('sync-inbox-every-2-min');
exception when others then
  null; -- not scheduled yet
end $$;

-- Poll Zoho every 2 minutes. The service_role key is a valid project JWT, so
-- the platform accepts the call while rejecting anonymous callers.
select cron.schedule(
  'sync-inbox-every-2-min',
  '*/2 * * * *',
  $CRON$
  select net.http_post(
    url     := 'https://emdrmxscgmnfxgvimbqn.supabase.co/functions/v1/sync-inbox',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer <PASTE_SERVICE_ROLE_KEY>'
    ),
    body    := '{}'::jsonb
  );
  $CRON$
);

-- To stop the sync later:
--   select cron.unschedule('sync-inbox-every-2-min');
