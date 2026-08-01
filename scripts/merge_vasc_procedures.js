#!/usr/bin/env node
/*
 * Merge the Vascular Surgery specialty into content/resident.json.
 *
 *     node scripts/merge_vasc_specialty.js <site-root> [--check]
 *
 * Modelled on merge_id_specialty.js, which shipped Infectious Disease. Five things have to
 * change together, and forgetting any one of them ships a broken specialty rather than a
 * missing one:
 *
 *   data         the 60 entries
 *   specialties  the picker row, sorted by DISPLAY NAME not by code
 *   active       without this the card renders "Coming soon" and does not open
 *   titles       the section-2 heading; a missing key renders an empty header
 *   conditions   "Relevant Conditions" beneath it, and every id must exist in DATA
 *                or the card renders as a dead tile
 *
 * vasc is the last of the 24 specialties with no content, so this is also the merge that
 * takes `active` from 24 to 25 and empties the Resident Mode grid of "Coming soon" cards.
 * "Vascular Surgery" sorts last by display name, after Urology.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: merge_vasc_specialty.js <site-root> [--check]'); process.exit(2); }
const JSON_PATH = path.join(ROOT, 'content', 'resident.json');
if (!fs.existsSync(JSON_PATH)) { console.error('missing: ' + JSON_PATH); process.exit(2); }

const SEC = 'vasc';
const NAME = 'Vascular Surgery';
const TITLE = 'Top 50 Vascular Surgery Procedures';
const BATCHES = 10;
const EXPECT = 50;
const STAGING = path.join(__dirname, '..', 'resident-staging', 'vasc-proc');

/* Conditions that already exist in the library and that a vascular surgery resident would
   actually open from this page. Every id is checked against conditions.json below -- a
   nonexistent id renders a tile that goes nowhere.

   `compartment` and `wound-care` are here because they are the two library pages this
   specialty's own entries lean on hardest. `dic` and `thrombocytopenia` are included for
   the coagulopathy the trauma and HIT entries deal with. */
const CONDITIONS = [
  'pad', 'aortic-dissection', 'dvt', 'pe', 'stroke', 'tia', 'afib', 'acs',
  'htn', 'hyperlipidemia', 'compartment', 'wound-care', 'cellulitis', 'osteomyelitis',
  't2dm', 'ckd', 'aki', 'sepsis', 'thrombocytopenia', 'dic', 'svc-syndrome'
];

function loadEntries() {
  let all = [];
  for (let n = 1; n <= BATCHES; n++) {
    const f = path.join(STAGING, `res-${SEC}-b${n}.js`);
    if (!fs.existsSync(f)) { console.error('missing batch: ' + f); process.exit(1); }
    const src = fs.readFileSync(f, 'utf8');
    const names = [...src.matchAll(/const\s+([A-Za-z0-9_]+)\s*=/g)].map(m => m[1]);
    all = all.concat(new Function(src.replace(/const /g, 'var ') + ';return [' + names.join(',') + '];')().flat());
  }
  return all;
}

const R = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
const entries = loadEntries();
const errs = [];

if (entries.length !== EXPECT) errs.push(`expected ${EXPECT} entries, loaded ${entries.length}`);
/* This merge REPLACES the 60-topic set with the 50 procedures (physician's call,
   2026-08-01). Unlike a first-time specialty merge it must therefore REMOVE the existing
   vasc entries rather than refuse because they are present -- but only vasc's, and only
   after confirming the count is what we expect, so a bug here cannot quietly delete
   another specialty's content. */
const priorVasc = R.data.filter(d => d.sec === SEC).length;
if (priorVasc && priorVasc !== 60) errs.push(`expected 0 or 60 existing vasc entries, found ${priorVasc} -- refusing to guess what to remove`);

/* vasc is unusual: it is ALREADY in specialties (as the one inactive card), so unlike the
   ID merge this must update the existing row rather than refuse because it is present. */
const hasRow = R.specialties.some(s => s.id === SEC);


const existingIds = new Set(R.data.map(d => d.id));
for (const e of entries) if (existingIds.has(e.id)) errs.push(`id collision with live data: ${e.id}`);

const condRaw = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'conditions.json'), 'utf8'));
if (!Array.isArray(condRaw)) { console.error('FAILED: conditions.json is not an array'); process.exit(1); }
const known = new Set(condRaw.map(c => c.id));
const good = CONDITIONS.filter(c => known.has(c));
const bad = CONDITIONS.filter(c => !known.has(c));

if (errs.length) { console.error('REFUSING TO MERGE:'); errs.forEach(e => console.error('  ' + e)); process.exit(1); }

console.log(`${entries.length} entries ready; ${priorVasc} existing vasc entries will be REPLACED`);
console.log(`specialties row: ${hasRow ? 'already present, will be left as-is' : 'will be added'}`);
console.log(`conditions: ${good.length} resolve, ${bad.length} dropped as nonexistent`);
if (bad.length) console.log('  dropped: ' + bad.join(', '));

if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }

R.data = R.data.filter(d => d.sec !== SEC).concat(entries);
if (!hasRow) R.specialties.push({ id: SEC, n: NAME });
R.specialties.sort((a, b) => a.n.localeCompare(b.n));   // display-name order, as the app expects
if (!R.active.includes(SEC)) R.active.push(SEC);
R.active.sort();
R.titles[SEC] = TITLE;
R.conditions[SEC] = good;

fs.writeFileSync(JSON_PATH, JSON.stringify(R) + '\n');
console.log(`\nwrote ${path.relative(process.cwd(), JSON_PATH)}`);
console.log(`  data ${R.data.length} entries, ${R.specialties.length} specialties, ${R.active.length} active`);
const inactive = R.specialties.filter(s => !R.active.includes(s.id)).map(s => s.n);
console.log(`  inactive specialties remaining: ${inactive.length ? inactive.join(', ') : 'none'}`);
const i = R.specialties.findIndex(s => s.id === SEC);
console.log(`  position: ${R.specialties[i - 1] ? R.specialties[i - 1].n : '(first)'} -> ${NAME} -> ${R.specialties[i + 1] ? R.specialties[i + 1].n : '(last)'}`);
