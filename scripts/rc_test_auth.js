// Get a headless browser past the Supabase login wall.
//
// The wall (added to the live app 2026-08-04) renders `#rc-authgate` over everything with
// `position:fixed; inset:0`, so an unauthenticated context cannot tap ANYTHING. That is correct
// for a visitor and fatal for a test: the gesture suite failed on `swipe left` and
// `swipe chaining` for exactly this reason, and the failure looked like a swipe regression.
// It was the overlay eating the touch.
//
// The wall's own boot logic is the bypass. It reads `rc.app.session.v1`; a session whose
// `expires_at` is in the future and with no passkey enrolled calls `pass()` immediately, with no
// network request to Supabase - which matters, because the container cannot reach it anyway.
//
// This does NOT test the wall. It steps around it so the rest of the app can be tested at all.
// Seed BEFORE navigating: the wall runs during parse, so a session written after `goto` is too
// late and the overlay is already up.
const SESSION_KEY = 'rc.app.session.v1';

async function seedAuth(ctx) {
  await ctx.addInitScript(([k, exp]) => {
    try {
      localStorage.setItem(k, JSON.stringify({
        access_token: 'headless-test', refresh_token: 'headless-test', expires_at: exp,
      }));
    } catch (e) {}
  }, [SESSION_KEY, Date.now() + 3600e3]);
}

module.exports = { seedAuth, SESSION_KEY };
