#!/usr/bin/env node
/* Generate the Core Spotlight payload for the 183 conditions.
 *
 * The highest-value Guideline 4.2 signal there is: indexed conditions turn up in the phone's own
 * search, so the content becomes part of the OS rather than something inside a wrapped website.
 * A reviewer asking "why is this not just your site?" can be answered by typing "pericarditis" into
 * Spotlight.
 *
 * THIS FILE IS DATA, NOT SWIFT. The native side reads it once at first launch and hands it to
 * CSSearchableIndex; that Swift is yours to write, because I cannot compile or test a line of it.
 * What a session CAN do is get the content right, and the content is the part that would otherwise
 * be typed by hand 183 times.
 *
 * WHAT GOES IN AN ENTRY, and why each field is what it is:
 *
 *   uniqueIdentifier      rc.condition.<id> -- stable, so re-indexing updates rather than
 *                         duplicates. It must never be derived from the NAME: renaming a condition
 *                         would orphan the old entry and leave a dead Spotlight result pointing at
 *                         nothing.
 *   contentURL            the /c/<id> Universal Link. Tapping a Spotlight hit therefore goes
 *                         through exactly the path already built and deployed, rather than a
 *                         second, parallel deep-link scheme that can rot on its own.
 *   title                 the condition name.
 *   contentDescription    the tagline. One line, written for a human, already in the content.
 *   keywords              name words, the category, the ICD-10 code, and the specialty. The code
 *                         matters more than it looks: a student who has a code and not a name is
 *                         exactly the person Spotlight should help.
 *
 * DELIBERATELY NOT INCLUDED: body text. Spotlight entries are metadata, and pushing nine fields of
 * clinical prose per condition into the OS index bloats it for a worse match. The app's own deep
 * search already covers full text and is better at it.
 *
 * Usage: node scripts/build_spotlight_index.js <site-root> <out.json>
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2], OUT = process.argv[3];
if (!ROOT || !OUT) { console.error('usage: build_spotlight_index.js <site-root> <out.json>'); process.exit(2); }

const conditions = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/conditions.json'), 'utf8'));

/* The origin a Spotlight hit should open. Read from the app's own RC_SHARE_ORIGIN rather than
   typed, for the same reason build_aasa.js reads the route regex: one source, and it moves when
   roundscodex.com becomes canonical without anyone remembering this file exists. */
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const m = idx.match(/var RC_SHARE_ORIGIN\s*=\s*['"]([^'"]+)['"]/);
if (!m) { console.error('FAIL: could not read RC_SHARE_ORIGIN from index.html'); process.exit(1); }
const ORIGIN = m[1].replace(/\/+$/, '');

const STOP = new Set(['and', 'the', 'of', 'in', 'with', 'a', 'an', 'to', 'for']);
const words = s => String(s || '').toLowerCase().match(/[a-z0-9][a-z0-9-]{1,}/g) || [];

const entries = [];
const problems = [];
for (const c of conditions) {
  if (!c.id || !c.name) { problems.push(`entry with no id or name: ${JSON.stringify(c).slice(0, 60)}`); continue; }
  /* Keywords deduped case-insensitively and stripped of stopwords. "Deep Vein Thrombosis" gives
     deep/vein/thrombosis plus dvt from the id -- an abbreviation a student is far likelier to type
     than the full name, and one that would be missing if this only used the display name. */
  const kw = new Set();
  for (const w of words(c.name)) if (!STOP.has(w)) kw.add(w);
  for (const w of words(c.category)) if (!STOP.has(w)) kw.add(w);
  for (const w of words(c.id)) if (!STOP.has(w)) kw.add(w);
  if (c.icd10) kw.add(String(c.icd10).toLowerCase());
  kw.add('rounds codex');

  entries.push({
    uniqueIdentifier: `rc.condition.${c.id}`,
    domainIdentifier: 'com.roundscodex.app.conditions',
    contentURL: `${ORIGIN}/c/${c.id}`,
    title: c.name,
    contentDescription: c.tagline || '',
    keywords: [...kw],
    category: c.category || '',
    icd10: c.icd10 || '',
  });
}

if (problems.length) {
  console.error(`FAIL: ${problems.length} malformed condition(s):`);
  problems.slice(0, 5).forEach(p => console.error('  ' + p));
  process.exit(1);
}

/* Checks that would each catch a real defect rather than restate the loop above. */
const ids = new Set(entries.map(e => e.uniqueIdentifier));
const noDesc = entries.filter(e => !e.contentDescription);
const checks = [
  ['every condition indexed',        entries.length === conditions.length, `${entries.length}/${conditions.length}`],
  ['identifiers are unique',         ids.size === entries.length, `${ids.size} unique of ${entries.length}`],
  ['every entry has a description',  noDesc.length === 0, noDesc.map(e => e.title).slice(0, 3).join(', ')],
  ['URLs use the deployed origin',   entries.every(e => e.contentURL.startsWith(ORIGIN + '/c/')), ORIGIN],
  /* If this fails, the Universal Link path and the Spotlight path have diverged and half the hits
     would open Safari instead of the app. */
  ['URLs are the /c/ route the AASA claims',
   entries.every(e => /^https?:\/\/[^/]+\/c\/[\w-]+$/.test(e.contentURL))],
];


let bad = 0;
for (const [name, ok, detail] of checks) {
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? '  (' + detail + ')' : ''}`);
  if (!ok) bad++;
}
if (bad) { console.error(`\n${bad} check(s) failed -- not writing`); process.exit(1); }

/* The host is the part that silently breaks this. Spotlight opens contentURL, and iOS only hands
   it to the app if that HOST is in the Associated Domains entitlement. RC_SHARE_ORIGIN is
   rounds-codex.netlify.app while the AASA was first written claiming roundscodex.com -- so every
   Spotlight hit and every shared link would have opened Safari, and iOS reports nothing when it
   does that. Stated on every run rather than checked, because the entitlement lives in an Xcode
   project this script cannot see. */
console.log(`\n  ! contentURL host is ${new URL(ORIGIN).host}`);
console.log(`    The Associated Domains entitlement MUST list it (native/ios-project/App.entitlements`);
console.log(`    claims roundscodex.com, www.roundscodex.com and rounds-codex.netlify.app).`);
console.log(`    A host that is claimed nowhere opens Safari, silently.`);

fs.writeFileSync(OUT, JSON.stringify({
  note: 'Generated by scripts/build_spotlight_index.js. Regenerate after any content change; ' +
        'uniqueIdentifier is stable so re-indexing updates rather than duplicates.',
  domainIdentifier: 'com.roundscodex.app.conditions',
  count: entries.length,
  entries,
}, null, 2) + '\n');

const kwTotal = entries.reduce((a, e) => a + e.keywords.length, 0);
console.log(`\n${entries.length} conditions, ${kwTotal} keywords (${(kwTotal / entries.length).toFixed(1)} each)`);
console.log(`written: ${OUT}  (${(fs.statSync(OUT).size / 1024).toFixed(0)} kB)`);
console.log(`\nThe Swift that consumes this is yours -- CSSearchableItem per entry, indexed once on`);
console.log(`first launch and again when the bundled content version changes. Deleting the app`);
console.log(`removes the index automatically; no cleanup code needed.`);
