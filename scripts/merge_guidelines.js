/* Merge a specialty's guideline-year files into content/resident.json.
 *
 * Usage: node scripts/merge_guidelines.js <spec> <content-dir> <year>=<file.json> [<year>=<file.json> ...]
 *   e.g. node scripts/merge_guidelines.js anes /workspace/rounds-codex-app/content \
 *          2025=guidelines-staging/anes-2025.json 2026=guidelines-staging/anes-2026.json
 *
 * THE `verify` BLOCK IS STRIPPED, NOT SHIPPED. Staging entries carry a `verify` object recording
 * whether the citation was found, contradicted or overstated. That is review material for the
 * physician, not app content -- it must not reach a resident's screen, and shipping it would also
 * put the phrase "NOT FOUND" on a study card. It is asserted present in staging (so an entry can
 * never be merged without having been checked) and deleted on the way in.
 *
 * `spec` IS ASSERTED AGAINST RES_SPECIALTIES. A typo'd code would write a guidelines key no
 * specialty page can ever read, and the section would simply never appear -- with nothing failing.
 *
 * FIELD SET IS FIXED. The renderer reads exactly title/journal/date/breakthrough/impact/practical/
 * link/url; an extra key is silently dropped on render, so an unknown one is an error here instead.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , SPEC, DIR, ...PAIRS] = process.argv;
if (!SPEC || !DIR || !PAIRS.length) {
  console.error('usage: merge_guidelines.js <spec> <content-dir> <year>=<file.json> ...');
  process.exit(2);
}

const SHIP = ['title', 'journal', 'date', 'breakthrough', 'impact', 'practical', 'link', 'url'];
const REQUIRED = ['title', 'breakthrough', 'impact', 'practical'];

/* Stripping the `verify` object is not enough. Review vocabulary leaks into SHIPPED fields when an
   entry is being corrected -- "2025 entry as submitted" reached a resident-facing date field once,
   caught only because a headless assertion happened to grep for it. These phrases have no reason to
   appear in content a resident reads, so reject them at the merge instead of relying on the check
   downstream being written that day. */
const REVIEW_LANG = /\bas submitted\b|\bNOT (INDEPENDENTLY|FOUND)\b|\bREVERSED\b|\bmatched with correction|\bverify block\b|\bplaceholder\b|\bawaiting Dr\b|physician'?s original/i;

const problems = [];

const RESFILE = path.join(DIR, 'resident.json');
const res = JSON.parse(fs.readFileSync(RESFILE, 'utf8'));

const codes = new Set((res.specialties || []).map(s => s.id));
if (!codes.has(SPEC)) {
  console.error(`FAILED: '${SPEC}' is not a specialty code. Known: ${[...codes].sort().join(' ')}`);
  process.exit(1);
}
const specName = (res.specialties.find(s => s.id === SPEC) || {}).n;

const years = {};
for (const pair of PAIRS) {
  const eq = pair.indexOf('=');
  if (eq < 0) { console.error(`FAILED: '${pair}' is not <year>=<file>`); process.exit(2); }
  const year = pair.slice(0, eq), file = pair.slice(eq + 1);
  if (!/^\d{4}$/.test(year)) { console.error(`FAILED: '${year}' is not a 4-digit year`); process.exit(2); }

  const items = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(items)) { console.error(`FAILED: ${file} is not an array`); process.exit(1); }

  const seen = new Set();
  years[year] = items.map((a, i) => {
    const tag = `${year} #${i + 1}`;
    if (!a.verify || !a.verify.status) problems.push(`${tag}: no verify block — every entry must record whether its citation was checked`);
    for (const k of REQUIRED) if (!a[k] || !String(a[k]).trim()) problems.push(`${tag}: '${k}' is empty`);
    for (const k of Object.keys(a)) if (k !== 'verify' && !SHIP.includes(k)) problems.push(`${tag}: unknown field '${k}' — the renderer would drop it`);
    if (!a.url) problems.push(`${tag}: no url — the requirement is a link out to the article`);
    else if (!/^https:\/\//.test(a.url)) problems.push(`${tag}: url is not https: ${a.url}`);
    const key = String(a.title).toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(key)) problems.push(`${tag}: duplicate title within ${year}`);
    seen.add(key);

    const out = {};
    for (const k of SHIP) if (a[k] != null && a[k] !== '') out[k] = a[k];
    for (const [k, v] of Object.entries(out)) {
      const m = REVIEW_LANG.exec(String(v));
      if (m) problems.push(`${tag}: review language "${m[0]}" in the shipped '${k}' field — that reaches a resident's screen`);
    }
    return out;
  });
  console.log(`  ${year}: ${items.length} studies from ${file}`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach(p => console.error('  - ' + p));
  process.exit(1);
}

res.guidelines = res.guidelines || {};
res.guidelines[SPEC] = Object.assign(res.guidelines[SPEC] || {}, years);

/* COMPACT, no indent — that is what split_content.js writes (`JSON.stringify(files[f])`), and every
   content/*.json on the live site is minified. Pretty-printing this file added 300 kB of pure
   whitespace to a 3.7 MB download that every user fetches at boot and the service worker precaches,
   and it turned a 20-entry addition into a 57,000-line diff nobody could review. */
fs.writeFileSync(RESFILE, JSON.stringify(res));
console.log(`\n${specName} (${SPEC}): ${Object.entries(res.guidelines[SPEC]).map(([y, v]) => y + '=' + v.length).join(', ')}`);
console.log(`wrote ${RESFILE} (${fs.statSync(RESFILE).size} bytes)`);
