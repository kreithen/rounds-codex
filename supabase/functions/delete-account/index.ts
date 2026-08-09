// Delete the caller's own Rounds Codex account.
//
// Apple Guideline 5.1.1(v): an app that lets you create an account must let you delete it from
// inside the app. This cannot be done client-side -- removing a Supabase auth user requires the
// service_role key, and that key must never reach a browser. Hence an edge function: the browser
// sends only its own access token, and the privileged key stays on the server.
//
// Deploy:  supabase functions deploy delete-account --project-ref emdrmxscgmnfxgvimbqn
// Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, which Supabase injects automatically.
//
// The client half is deliberately NOT shipped until this is deployed. A Delete button that cannot
// delete is worse than no button: this project already lost months to a gallery PDF control that
// toasted a description of what it would do, and passed every test that only checked for a toast.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'POST only' }),
      { status: 405, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }

  const auth = req.headers.get('Authorization') || '';
  const jwt = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!jwt) {
    return new Response(JSON.stringify({ error: 'not signed in' }),
      { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

  // Identify the caller FROM THE TOKEN, never from the request body. A user id in the body would
  // let any signed-in user delete anyone else's account.
  const admin = createClient(url, service, { auth: { persistSession: false } });
  const { data: got, error: whoErr } = await admin.auth.getUser(jwt);
  if (whoErr || !got?.user) {
    return new Response(JSON.stringify({ error: 'invalid session' }),
      { status: 401, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }

  const { error: delErr } = await admin.auth.admin.deleteUser(got.user.id);
  if (delErr) {
    return new Response(JSON.stringify({ error: delErr.message }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } });
  }
  return new Response(JSON.stringify({ deleted: true }),
    { status: 200, headers: { ...CORS, 'Content-Type': 'application/json' } });
});
