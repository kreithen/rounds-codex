#!/usr/bin/env node
/* Add "Deleting your account" to the Privacy page, and date the page for it.
 *
 * The privacy copy was written when deletion was not possible in the app. v87 ships the control,
 * so the page is now silent about the one thing a reader looking for it would search for -- and
 * Apple's reviewer checks the privacy text against Guideline 5.1.1(v), not only the button.
 *
 * The version/updated strings on the page are DISPLAY ONLY (`'Version '+d.version`). First-run
 * acceptance is keyed to a separate RC_TERMS_VERSION constant, so bumping these does NOT re-show
 * the medical disclaimer to everyone. Checked before changing them; do not assume it next time.
 *
 * Usage: node scripts/add_privacy_deletion_section.js <app-root> [--apply]
 */
const fs = require('fs');

const root = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!root) { console.error('usage: add_privacy_deletion_section.js <app-root> [--apply]'); process.exit(2); }

const p = `${root}/index.html`;
let s = fs.readFileSync(p, 'utf8');
const before = s.length;

// Anchor on the section that follows, so the new one lands between "What leaves your device"
// and "What we do not do" -- data in, data out, then how to get rid of it.
const ANCHOR = "   {h:'What we do not do', p:[";
if (!s.includes(ANCHOR)) { console.error('FAIL: could not find the "What we do not do" section'); process.exit(1); }

const SECTION =
  "   {h:'Deleting your account', p:[\n" +
  "    'You can delete your account from inside the app at any time: <b>My account &rarr; Delete my '+\n" +
  "    'account</b>. That permanently removes your email address and your sign-in from our server. It '+\n" +
  "    'takes effect immediately and cannot be undone, and because access is by invitation you would '+\n" +
  "    'need a new invitation to come back.',\n" +
  "    'Deleting your account does not touch anything saved on this device. Use <b>Clear my saved '+\n" +
  "    'data</b> for that, or do both.']},\n\n";

s = s.replace(ANCHOR, SECTION + ANCHOR);

// Date the page. Privacy only -- the Terms text is unchanged, so its date must not move.
const OLD_HEAD = "privacy:{\n  title:'Privacy', version:'2026-07-26', updated:'2026-07-26',";
const NEW_HEAD = "privacy:{\n  title:'Privacy', version:'2026-08-09', updated:'2026-08-09',";
if (!s.includes(OLD_HEAD)) { console.error('FAIL: could not find the privacy version header'); process.exit(1); }
s = s.replace(OLD_HEAD, NEW_HEAD);

const checks = [
  ['section added',              /\{h:'Deleting your account'/.test(s)],
  ['names the in-app path',      /My account &rarr; Delete my /.test(s)],
  ['says it is irreversible',    /cannot be undone/.test(s)],
  ['distinguishes local data',   /does not touch anything saved on this device/.test(s)],
  ['privacy dated 2026-08-09',   /title:'Privacy', version:'2026-08-09', updated:'2026-08-09'/.test(s)],
  ['terms date untouched',       /title:'Terms &amp; Conditions', version:'2026-07-26'/.test(s)],
  ['inserted before "do not do"',
    s.indexOf("{h:'Deleting your account'") < s.indexOf("{h:'What we do not do'")],
  ['after "what leaves your device"',
    s.indexOf("{h:'What leaves your device'") < s.indexOf("{h:'Deleting your account'")],
];
let bad = 0;
for (const [n, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${n}`); if (!ok) bad++; }
console.log(`\nindex.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (bad) { console.error(`${bad} assertion(s) failed -- not writing`); process.exit(1); }
if (APPLY) { fs.writeFileSync(p, s); console.log('written'); }
else { console.log('dry run -- pass --apply to write'); }
