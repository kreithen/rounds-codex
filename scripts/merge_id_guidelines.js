#!/usr/bin/env node
/*
 * Merge the Infectious Disease clinical guidelines into content/resident.json.
 *
 *     node scripts/merge_id_guidelines.js <site-root> [--check]
 *
 * Guidelines live under a `guidelines` key inside resident.json rather than as an
 * eighth content file — same reasoning as the other 23 specialties: a new file means
 * editing the loader FILES list AND sw.js CORE, and forgetting the second leaves the
 * app fine online and broken offline.
 *
 * WHAT THIS REFUSES TO SHIP
 * CLAUDE.md records a `date` field reaching a resident-facing page reading "2025 entry
 * as submitted". The guard below is deliberately in TWO parts, because a single
 * case-insensitive sweep produces false positives on real clinical prose: "reversed
 * with sugammadex" and "Replaced rigid, time-based holding" are both legitimate. The
 * all-caps review tokens are matched case-SENSITIVELY and only in `date`, `title`,
 * `journal` and `link` — the narrative fields are allowed to say REVERSED, because
 * that is exactly where a reader needs to be told.
 *
 * Years sort ASCENDING in this app, so 2025 sits above 2026. That is specified
 * behavior, not a bug, and differs from the newest-first ordering used elsewhere.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: merge_id_guidelines.js <site-root> [--check]'); process.exit(2); }
const JSON_PATH = path.join(ROOT, 'content', 'resident.json');
const SRC = path.join(__dirname, '..', 'guidelines-staging', 'id-guidelines.json');
for (const f of [JSON_PATH, SRC]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

const SEC = 'id';
const R = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
const G = JSON.parse(fs.readFileSync(SRC, 'utf8'));

const errs = [];
if (!R.guidelines) errs.push('resident.json has no guidelines key');
if (R.guidelines && R.guidelines[SEC]) errs.push('guidelines already contain "id"');
if (!R.specialties.some(s => s.id === SEC)) errs.push('specialty "id" is not registered — merge the specialty first');

/* Shape must match every other specialty exactly, or the year page renders blank. */
const sample = R.guidelines && R.guidelines.im && R.guidelines.im['2025'][0];
const KEYS = sample ? Object.keys(sample).sort() : null;
if (!KEYS) errs.push('could not read a reference entry to compare the shape against');

/* Review vocabulary must not reach a field the reader sees as a label. Case-sensitive
   on the all-caps tokens: /reversed/i would flag "reversed with sugammadex", which is
   real prose and has caused a false failure on this project before. */
const LABEL_FIELDS = ['date', 'title', 'journal', 'link'];
const TOKENS = /\b(REVERSED|NOT FOUND|CORRECTED|UNVERIFIED)\b|as submitted|verify block/;

/* Label fields were not enough. The first QA pass on this specialty put "CORRECTED: the
   submission said..." into nine narrative fields, and the merge shipped all nine -- the
   browser check caught them, which is one layer too late. A phrase that ADDRESSES THE
   REVIEWER is wrong in any field, because a resident does not know what "the submission"
   is. These are phrases, not bare words, so /reversed/i-style false positives on real
   clinical prose ("reversed with sugammadex") do not arise and the match can be
   case-insensitive. Bare all-caps tokens stay in TOKENS, case-sensitive, labels only. */
const REVIEWER_VOICE = /the submission|the submitted|as submitted|submitted entry|not independently verified|could not be confirmed|verify block|DATE CORRECTED/i;

let total = 0;
for (const year of Object.keys(G)) {
  if (!/^20\d\d$/.test(year)) errs.push(`bad year key "${year}"`);
  if (!Array.isArray(G[year]) || !G[year].length) { errs.push(`${year}: empty`); continue; }
  G[year].forEach((e, i) => {
    total++;
    const tag = `${year}[${i}]`;
    if (KEYS && JSON.stringify(Object.keys(e).sort()) !== JSON.stringify(KEYS))
      errs.push(`${tag}: keys ${Object.keys(e).sort().join(',')} != ${KEYS.join(',')}`);
    for (const k of LABEL_FIELDS)
      if (e[k] && TOKENS.test(e[k])) errs.push(`${tag}: review vocabulary in ${k}: "${e[k]}"`);
    for (const k of Object.keys(e)) {
      const m = String(e[k]).match(REVIEWER_VOICE);
      if (m) errs.push(`${tag}: ${k} addresses the reviewer ("${m[0]}") — that belongs in id-guidelines-CORRECTIONS.md`);
    }
    if (!e.url || !e.url.startsWith('https://')) errs.push(`${tag}: url not https`);
    for (const k of Object.keys(e)) if (!String(e[k]).trim()) errs.push(`${tag}: ${k} empty`);
  });
}

/* An empty year array renders a "Coming soon" button, which is worse than omitting
   the year entirely. Not a risk here, but the guard is cheap. */
for (const year of Object.keys(G)) if (G[year].length === 0) errs.push(`${year}: would render "Coming soon"`);

if (errs.length) { console.error('REFUSING TO MERGE:'); errs.forEach(e => console.error('  ' + e)); process.exit(1); }

console.log(`Infectious Disease guidelines: ${Object.keys(G).map(y => y + '=' + G[y].length).join(', ')} (${total} entries)`);
console.log('shape matches the other specialties; no review vocabulary in reader-facing labels');
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }

R.guidelines[SEC] = G;
fs.writeFileSync(JSON_PATH, JSON.stringify(R) + '\n');
const names = Object.keys(R.guidelines).length;
console.log(`\nwrote ${path.relative(process.cwd(), JSON_PATH)} — ${names} specialties now carry guidelines`);
