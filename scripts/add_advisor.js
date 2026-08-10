#!/usr/bin/env node
/* Append a person to RC_ADVISORS -- the "Clinical advisors" list on the About page.
 *
 * The list is one array literal and adding a person is one entry, which is how add_about.js
 * intended it. This script exists so the edit is repeatable and asserted rather than a hand edit
 * into a 745 kB file, and so the count is checked after: an unbalanced quote inside the literal
 * takes the whole About page down and the page still renders enough to look fine at a glance.
 *
 * `bio` is optional -- Arthur Mark ships without one, and the renderer guards it
 * (`(a.bio?'<p>'+a.bio+'</p>':'')`). `role` is not optional; it renders unconditionally.
 *
 * Names and roles must be real. Nothing on this page is invented -- the "clinically reviewed"
 * claim in marketing-brief.md rests on every person here having agreed to be listed and having
 * reviewed material in the app.
 *
 * Usage:
 *   node scripts/add_advisor.js <app-root> --name "Jane Doe, RN" --role "Nurse Educator" \
 *        [--bio "..."] [--apply]
 */
const fs = require('fs');

const argv = process.argv.slice(2);
const root = argv[0];
const APPLY = argv.includes('--apply');
const arg = (k) => { const i = argv.indexOf(k); return i > 0 && argv[i + 1] ? argv[i + 1] : null; };
const name = arg('--name'), role = arg('--role'), bio = arg('--bio');

if (!root || !name || !role) {
  console.error('usage: add_advisor.js <app-root> --name "..." --role "..." [--bio "..."] [--apply]');
  process.exit(2);
}
// Single quotes delimit the literal; an apostrophe or backslash in a name would break the file.
for (const [k, v] of [['name', name], ['role', role], ['bio', bio]]) {
  if (v && /['\\]/.test(v)) {
    console.error(`FAIL: --${k} contains a quote or backslash. Use &rsquo; for an apostrophe.`);
    process.exit(1);
  }
}

const p = `${root}/index.html`;
let s = fs.readFileSync(p, 'utf8');
const before = s.length;

const START = 'var RC_ADVISORS=[';
const i = s.indexOf(START);
if (i < 0) { console.error('FAIL: RC_ADVISORS not found'); process.exit(1); }
const end = s.indexOf('\n];', i);
if (end < 0) { console.error('FAIL: could not find the end of RC_ADVISORS'); process.exit(1); }

const list = s.slice(i, end);
if (list.includes(name)) { console.error(`FAIL: ${name} is already in the list`); process.exit(1); }
const wasCount = (list.match(/\{ *name:/g) || []).length;

const entry = `,\n  { name:'${name}', role:'${role}'` + (bio ? `,\n    bio:'${bio}'` : '') + ` }`;
s = s.slice(0, end) + entry + s.slice(end);

const now = s.slice(s.indexOf(START), s.indexOf('\n];', s.indexOf(START)));
const checks = [
  ['entry added',              now.includes(`name:'${name}'`)],
  ['role set',                 now.includes(`role:'${role}'`)],
  ['count went up by one',     (now.match(/\{ *name:/g) || []).length === wasCount + 1],
  ['no stray quote in the literal',
    (now.match(/'/g) || []).length % 2 === 0],
  ['existing advisors intact', now.includes("Joshua Kreithen, MD") && now.includes('Arthur Mark, MD')],
];
let bad = 0;
for (const [n, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${n}`); if (!bad && !ok) bad++; }
console.log(`\nadvisors: ${wasCount} -> ${wasCount + 1}`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (bad) { console.error('assertion(s) failed -- not writing'); process.exit(1); }
if (APPLY) { fs.writeFileSync(p, s); console.log('written'); }
else { console.log('dry run -- pass --apply to write'); }
