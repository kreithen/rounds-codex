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
// Deployed with verify_jwt OFF, deliberately and for one reason: the platform's JWT gate also
// rejects the CORS preflight, which carries no Authorization header, so a browser call would fail
// before it ever reached this code. The gate buys nothing here anyway -- the function has to call
// getUser() regardless, because it needs to know WHICH user is asking, and it deletes nobody
// without a token that resolves. The sibling admin function `delete-user` is off for the same
// reason and says so.
//
// This is NOT the same thing as `delete-user`. That one is an admin tool: it takes a user id in
// the request body, requires the caller to be in public.admins, and explicitly refuses to delete
// the caller's own account. This one is its mirror -- no admin rights, no body, and it can delete
// only the caller.
//
// The client half is deliberately NOT shipped until this is deployed and proven. A Delete button
// that cannot delete is worse than no button: this project already lost months to a gallery PDF
// control that toasted a description of what it would do, and passed every test that only checked
// for a toast.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type, apikey, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body),
    { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);

  const auth = req.headers.get('Authorization') || '';
  const jwt = auth.replace(/^Bearer\s+/i, '').trim();
  if (!jwt) return json({ error: 'not signed in' }, 401);

  const url = Deno.env.get('SUPABASE_URL')!;
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

  // Identify the caller FROM THE TOKEN, never from the request body. A user id in the body would
  // let any signed-in user delete anyone else's account.
  const admin = createClient(url, service, { auth: { persistSession: false } });
  const { data: got, error: whoErr } = await admin.auth.getUser(jwt);
  if (whoErr || !got?.user) return json({ error: 'invalid session' }, 401);

  const id = got.user.id;

  // Three foreign keys point at auth.users with NO ACTION rather than CASCADE, so a user who has
  // invited anyone -- or written a campaign -- cannot be deleted until those references are
  // cleared. Without this the delete fails with a foreign-key violation and the reader is told
  // "something went wrong" for a reason they can neither see nor fix. All three columns are
  // nullable; the rows themselves are kept, they just stop naming a person who no longer exists.
  //   public.app_users.invited_by   -> who invited this account
  //   public.campaigns.created_by   -> marketing, admin-only
  //   public.campaigns.approved_by
  // (public.admins.user_id and public.app_users.id are ON DELETE CASCADE and need nothing.)
  const detach = [
    admin.from('app_users').update({ invited_by: null }).eq('invited_by', id),
    admin.from('campaigns').update({ created_by: null }).eq('created_by', id),
    admin.from('campaigns').update({ approved_by: null }).eq('approved_by', id),
  ];
  for (const step of detach) {
    const { error } = await step;
    // Not fatal on its own: if nothing references the user the delete below still succeeds, and
    // if something does, the delete's own error is the one worth returning.
    if (error) console.error('detach failed', error.message);
  }

  const { error: delErr } = await admin.auth.admin.deleteUser(id);
  if (delErr) {
    console.error('deleteUser failed', delErr.message);
    return json({ error: delErr.message }, 500);
  }
  return json({ deleted: true }, 200);
});
