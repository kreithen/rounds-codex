/* Remove the Supabase login wall, which restores the first-run medical disclaimer.
 *
 * Two problems, one cause. `rcTermsGate()` guards against inserting its panel twice with
 *
 *     if (document.getElementById('rc-gate')) return;
 *
 * and the login wall's static markup is `<div id="rc-gate" class="hidden">`. So the guard always
 * fires and the disclaimer is never created -- the collision recorded in LOGIN-WALL-id-collision.md.
 *
 * The second problem is worse and was not in the notes: measured in a fresh browser context, the
 * wall is not dormant. Its `hidden` class is removed at runtime when there is no session, so a
 * first-time visitor gets a Supabase "Sign in" form, full-screen at z-index 100000, with the
 * app unreachable behind it. Anyone sent a /c/<id> or /g/<id> share link who is not signed in has
 * been landing on that. v1 was decided to ship with no login, so the wall goes.
 *
 * Verified before writing this, because each one could have made the removal wrong:
 *
 *  - **The disclaimer has its OWN `#rc-gate` positioning rule** in a later style block, so it does
 *    not depend on the wall's inline CSS and still renders as a full-screen overlay afterwards.
 *    Had it relied on the wall's rule, this would have produced an unpositioned panel.
 *  - **The wall is genuinely self-contained.** Every reference to its session, passkey and email
 *    localStorage keys, to supabase, and to its rc-login / rc-enroll element ids lies inside the
 *    removed region. Nothing outside reaches in.
 *  - **Its one global, `window.rcLogout`, has no callers**, so removing it leaves no dead control.
 *    (The lesson from removing a nav tab: find the other entry points first.)
 *
 * The region removed is the HTML comment, the `<div id="rc-gate">` block including its inline
 * `<style>`, and the auth `<script>` that immediately follows -- located by anchored parsing rather
 * than byte offsets, and asserted before anything is written.
 *
 * Usage: node scripts/remove_login_wall.js <site-root>
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: remove_login_wall.js <site-root>'); process.exit(2); }
const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

const MARK = '<!-- Rounds Codex login wall';
if (!s.includes(MARK)) {
  console.log('already applied - no login wall present');
  process.exit(0);
}

const start = s.indexOf(MARK);
const divAt = s.indexOf('<div id="rc-gate"', start);
if (divAt < 0) { console.error('FAIL: the wall comment is present but its div is not'); process.exit(1); }

// Walk the div to its matching close, stepping over <style> and <script> bodies so a "</div>"
// inside a string or a stylesheet cannot end the walk early.
let depth = 0, end = -1, p = divAt;
while (p < s.length) {
  if (s.startsWith('<style', p)) { p = s.indexOf('</style>', p) + 8; continue; }
  if (s.startsWith('<script', p)) { p = s.indexOf('</script>', p) + 9; continue; }
  if (s.startsWith('<div', p)) { depth++; p += 4; continue; }
  if (s.startsWith('</div>', p)) { depth--; if (depth === 0) { end = p + 6; break; } p += 6; continue; }
  p++;
}
if (end < 0) { console.error('FAIL: could not find the wall div\'s closing tag'); process.exit(1); }

// the auth script sits immediately after, separated only by whitespace
const sOpen = s.indexOf('<script', end);
const gap = s.slice(end, sOpen);
if (sOpen < 0 || gap.trim() !== '') {
  console.error(`FAIL: expected the auth script immediately after the wall, found ${JSON.stringify(gap.slice(0, 60))}`);
  process.exit(1);
}
const sClose = s.indexOf('</script>', sOpen) + 9;

const block = s.slice(start, sClose);
// assert we are cutting what we think we are, before cutting it
const must = ['supabase.co', 'id="rc-gate"', 'window.rcLogout', 'Sign in'];
const missing = must.filter(m => !block.includes(m));
if (missing.length) { console.error('FAIL: the block to remove lacks ' + missing.join(', ')); process.exit(1); }
// and that it does not straddle anything it should not
if (block.includes('rcTermsGate') || block.includes('RC_TERMS')) {
  console.error('FAIL: the block overlaps the disclaimer code - aborting rather than removing it');
  process.exit(1);
}

s = s.slice(0, start) + s.slice(sClose);

// after removal there must be no id="rc-gate" left in the static markup, or the guard still fires
if (/id="rc-gate"/.test(s)) {
  console.error('FAIL: a static id="rc-gate" survives - rcTermsGate would still bail out');
  process.exit(1);
}
// and the disclaimer must still be there, with its own overlay rule
for (const need of ['function rcTermsGate(', 'function rcGateShow(', '#rc-gate{position:fixed']) {
  if (!s.includes(need)) { console.error(`FAIL: removal took "${need}" with it`); process.exit(1); }
}

fs.writeFileSync(file, s);
console.log(`removed the login wall: ${block.length} bytes (${(block.length / 1024).toFixed(1)} kB)`);
console.log(`  index.html ${before} -> ${s.length}`);
console.log('  the disclaimer\'s rcTermsGate/rcGateShow and its own #rc-gate overlay rule are intact');
