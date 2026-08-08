#!/usr/bin/env node
/* Restore the Supabase login wall to index.html, with the two faults that got it removed FIXED.
 *
 * Reverses scripts/remove_login_wall.js (v76) at the physician's request, 2026-08-08. Three
 * decisions were taken before writing this, and each one changes the code:
 *
 *   1. SHARE LINKS STAY OPEN. The old wall blocked every /c/<id>, /g/, /s/, /r/, /u/ and /x/ link,
 *      silently, which is what made it worth removing -- anyone sent a link who was not signed in
 *      landed on a sign-in form instead of the content. The restored wall returns early on those
 *      routes.
 *
 *   2. INVITE-ONLY. The wall never had a self-signup form, and it already handles
 *      hp.type==='invite', so the app needs no change for this. What it needs is
 *      "Allow new users to sign up" turned OFF in the Supabase dashboard -- there is no MCP tool
 *      for auth config, so that is the physician's step and the app cannot enforce it.
 *
 *   3. SIGN-IN FIRST, THEN THE MEDICAL DISCLAIMER. This needs no ordering code, only the id fix:
 *      the wall is z-index 100000 and the disclaimer is 9999, so the wall covers it, and pass()
 *      hiding the wall reveals the disclaimer underneath. Verified from the stylesheets, not assumed.
 *
 * THE ID COLLISION, which is the whole reason the disclaimer disappeared for days:
 *   rcTermsGate() guards against building twice with `if(document.getElementById('rc-gate')) return;`
 *   and the wall's static markup was `<div id="rc-gate" class="hidden">`. The guard fired on every
 *   visit, so the disclaimer was never created. The wall is therefore renamed to #rc-authgate
 *   throughout its own block -- and only its own block.
 *
 * A CONSEQUENCE OF (1)+(3) worth stating, because it is invisible in the diff: on a share link the
 * wall never shows, so "sign-in first" cannot apply there -- the disclaimer appears immediately
 * instead. That is deliberate. The alternative is serving clinical content to someone who has
 * accepted nothing.
 *
 * Usage: node scripts/restore_login_wall.js <app-root> [--apply]
 */
const fs = require('fs');
const { execFileSync } = require('child_process');

const root = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!root) { console.error('usage: restore_login_wall.js <app-root> [--apply]'); process.exit(2); }

const REMOVAL = '8f44d45';                 // the commit that took the wall out
const git = a => execFileSync('git', ['-C', root, ...a], { maxBuffer: 1 << 28 }).toString();

const cur = fs.readFileSync(`${root}/index.html`, 'utf8');
const pre = git(['show', `${REMOVAL}^:index.html`]);

// The removed lines, straight from the commit -- not retyped, not reconstructed.
const wall = git(['show', REMOVAL, '--', 'index.html'])
  .split('\n')
  .filter(l => l.startsWith('-') && !l.startsWith('---'))
  .map(l => l.slice(1));
console.log(`wall block: ${wall.length} lines, ${wall.join('\n').length} bytes`);

// Locate the wall REGION by its first and last line, not by matching the removed lines as one run.
// They are not contiguous: git kept one blank line inside the block as context, so a contiguous
// match fails at offset 113. This cost a wrong first attempt and is exactly the kind of thing a
// byte-offset or "the diff said 166 lines" assumption gets wrong.
const preL = pre.split('\n');
const first = wall[0], last = wall[wall.length - 1];
const at = preL.indexOf(first);
if (at < 0) { console.error('wall opening line not found in the pre-removal file'); process.exit(1); }
let end = -1;
for (let i = at + 1; i < preL.length; i++) if (preL[i] === last) { end = i; break; }
if (end < 0) { console.error('wall closing line not found'); process.exit(1); }
console.log(`wall region: lines ${at + 1}..${end + 1} (${end - at + 1} lines)`);

// ---- fix 1: rename the wall's gate id, inside the wall region only
let block = preL.slice(at, end + 1).join('\n');
const idHits = (block.match(/rc-gate/g) || []).length;
block = block.replace(/rc-gate/g, 'rc-authgate');
console.log(`renamed ${idHits} occurrence(s) of rc-gate -> rc-authgate inside the block`);
if (!/id="rc-authgate"/.test(block)) { console.error('rename lost the gate id'); process.exit(1); }

// ---- fix 2: share routes bypass the wall entirely
// Inserted as the first statement of the wall's IIFE, before it reads any session. The route list
// is the same one RC_ROOT uses; a new one-segment route must be added in both places.
const ANCHOR = "  var gate=document.getElementById('rc-authgate');";
if (!block.includes(ANCHOR)) { console.error('could not find the gate lookup to anchor the bypass'); process.exit(1); }
const BYPASS = [
  "  /* Share links are public on purpose. A /c/<id> or /g/<id> link sent to a colleague must open",
  "     the content, not a sign-in form -- the old wall blocked all of them silently, which is why",
  "     it was removed in v76. Keep this list in step with the RC_ROOT route regex. An auth hash",
  "     (invite / recovery / magic link) still wins, so those links work from any path. */",
  "  var RC_OPEN_ROUTES=/^\\/(c|s|g|r|u|x)\\//;",
  "  if(RC_OPEN_ROUTES.test(location.pathname) && !/access_token=/.test(location.hash||'')){",
  "    var og=document.getElementById('rc-authgate'); if(og) og.remove();",
  "    return;",
  "  }",
].join('\n');
block = block.replace(ANCHOR, BYPASS + '\n' + ANCHOR);

// ---- reassemble
const out = preL.slice(0, at).concat(block.split('\n'), preL.slice(end + 1)).join('\n');

// The strongest available check that nothing outside the wall moved: every line of the file we
// ship today must still appear in the new file, in order. Insertions are allowed; edits and
// deletions outside the wall region are not.
{
  const a = cur.split('\n'), b = out.split('\n');
  let i = 0;
  for (const line of b) { if (i < a.length && a[i] === line) i++; }
  if (i !== a.length) {
    console.error(`current index.html is NOT a subsequence of the result (matched ${i}/${a.length} ` +
                  `lines) -- something outside the wall was altered. Aborting.`);
    process.exit(1);
  }
  console.log(`verified: all ${a.length} current lines survive in order (pure insertion)`);
}

// ---- assertions that would have caught the original bug
const checks = [
  ['wall present',                     /id="rc-authgate"/.test(out)],
  ['no static id="rc-gate" survives',  !/id="rc-gate"/.test(out)],
  ['disclaimer builder intact',        /function rcTermsGate\(\)/.test(out)],
  ['disclaimer overlay rule intact',   /#rc-gate\{position:fixed[^}]*z-index:9999/.test(out)],
  ['disclaimer guard still on rc-gate',/getElementById\('rc-gate'\)\) return;/.test(out)],
  ['wall overlay rule renamed',        /#rc-authgate\{position:fixed[^}]*z-index:100000/.test(out)],
  ['supabase endpoint present',        /emdrmxscgmnfxgvimbqn\.supabase\.co/.test(out)],
  ['share-route bypass present',       /RC_OPEN_ROUTES/.test(out)],
  ['no self-signup form',             !/(sign ?up|create account)/i.test(block.replace(/'signup'/g, ''))],
  ['wall is above the disclaimer',     out.indexOf('z-index:100000') > 0],
];
let bad = 0;
for (const [name, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) bad++; }
if (bad) { console.error(`${bad} assertion(s) failed -- not writing`); process.exit(1); }

console.log(`\nindex.html: ${cur.length} -> ${out.length} bytes (+${out.length - cur.length})`);
if (APPLY) {
  fs.writeFileSync(`${root}/index.html`, out);
  console.log('written');
} else {
  console.log('dry run -- pass --apply to write');
}
