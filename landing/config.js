/* Rounds Codex — public runtime config for the landing page.
 *
 * BOTH values below are safe to be public:
 *   - the project URL is not a secret
 *   - the ANON key is designed for browsers and is protected by row-level
 *     security (see backend/schema.sql). It is NOT the service_role key.
 *
 * Never put the service_role key, the Resend key, or the Anthropic key here.
 *
 * Fill these in from Supabase → Project Settings → API. Until they are set,
 * the signup form stays visible but politely says signups aren't open yet.
 */
window.RC_CONFIG = {
  SUPABASE_URL: "https://emdrmxscgmnfxgvimbqn.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable__vlY1vTmGdsNj1zsKTU3Ag_Fleh3Hth"  // publishable (public) key
};
