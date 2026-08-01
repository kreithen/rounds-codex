#!/usr/bin/env node
/*
 * Merge the Infectious Disease specialty into content/resident.json.
 *
 *     node scripts/merge_id_specialty.js <site-root> [--check]
 *
 * Five things have to change together, and forgetting any one of them ships a broken
 * specialty rather than a missing one:
 *
 *   data         the 60 entries
 *   specialties  the picker row, sorted by DISPLAY NAME not by code
 *   active       without this the card renders "Coming soon" and does not open
 *   titles       the section-2 heading; a missing key renders an empty header
 *   conditions   "Relevant Conditions" beneath it, and every id must exist in DATA
 *                or the card renders as a dead tile
 *
 * The card order on the Resident Mode grid and in the Clinical Updates index is by
 * display name. CLAUDE.md records why: a code sort looks right until `ent`
 * (Otolaryngology) or `nsg` (Neurological Surgery) gets content. "Infectious Disease"
 * lands between Family Medicine and Internal Medicine either way here, but the sort is
 * the app's, not this script's, and this script must not fight it.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: merge_id_specialty.js <site-root> [--check]'); process.exit(2); }
const JSON_PATH = path.join(ROOT, 'content', 'resident.json');
if (!fs.existsSync(JSON_PATH)) { console.error('missing: ' + JSON_PATH); process.exit(2); }

const SEC = 'id';
const NAME = 'Infectious Disease';
const TITLE = 'Top 60 Infectious Disease Topics';
const STAGING = path.join(__dirname, '..', 'resident-staging', 'id');

/* Conditions that already exist in the library and that an ID resident would actually
   open from this page. Every id is checked against conditions.json below -- a
   nonexistent id renders a tile that goes nowhere. */
const CONDITIONS = [
  'cap', 'pneumothorax', 'tb', 'covid', 'influenza', 'sepsis', 'endocarditis',
  'meningitis', 'hiv', 'hepatitis', 'cdiff', 'uti', 'cellulitis', 'orbital-cellulitis',
  'osteomyelitis', 'herpes-zoster', 'sinusitis', 'peritonsillar-abscess',
  'peds-fever-sepsis'
];

function loadEntries() {
  let all = [];
  for (let n = 1; n <= 12; n++) {
    const f = path.join(STAGING, `res-id-b${n}.js`);
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

if (entries.length !== 60) errs.push(`expected 60 entries, loaded ${entries.length}`);
if (R.data.some(d => d.sec === SEC)) errs.push('resident.json already contains sec="id"');
if (R.specialties.some(s => s.id === SEC)) errs.push('specialties already contains "id"');

const existingIds = new Set(R.data.map(d => d.id));
for (const e of entries) if (existingIds.has(e.id)) errs.push(`id collision with live data: ${e.id}`);

/* A Relevant Condition that is not in conditions.json renders a card that does
   nothing when tapped -- silent, and only findable by clicking every tile. */
const condPath = path.join(ROOT, 'content', 'conditions.json');
/* conditions.json is a bare ARRAY, not an object with a .conditions key. Assuming the
   wrapper threw here on the first run; it would have silently produced an empty set
   and dropped every condition had the shape been an object with a different key. */
const condRaw = JSON.parse(fs.readFileSync(condPath, 'utf8'));
if (!Array.isArray(condRaw)) { console.error('FAILED: conditions.json is not an array'); process.exit(1); }
const known = new Set(condRaw.map(c => c.id));
const good = CONDITIONS.filter(c => known.has(c));
const bad = CONDITIONS.filter(c => !known.has(c));

if (errs.length) { console.error('REFUSING TO MERGE:'); errs.forEach(e => console.error('  ' + e)); process.exit(1); }

console.log(`${entries.length} entries ready`);
console.log(`conditions: ${good.length} resolve, ${bad.length} dropped as nonexistent`);
if (bad.length) console.log('  dropped: ' + bad.join(', '));

if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }

R.data = R.data.concat(entries);
R.specialties.push({ id: SEC, n: NAME });
R.specialties.sort((a, b) => a.n.localeCompare(b.n));   // display-name order, as the app expects
R.active.push(SEC);
R.active.sort();
R.titles[SEC] = TITLE;
R.conditions[SEC] = good;

fs.writeFileSync(JSON_PATH, JSON.stringify(R) + '\n');
console.log(`\nwrote ${path.relative(process.cwd(), JSON_PATH)}`);
console.log(`  data ${R.data.length} entries, ${R.specialties.length} specialties, ${R.active.length} active`);
const i = R.specialties.findIndex(s => s.id === SEC);
console.log(`  position: ${R.specialties[i - 1] ? R.specialties[i - 1].n : '(first)'} -> ${NAME} -> ${R.specialties[i + 1] ? R.specialties[i + 1].n : '(last)'}`);
