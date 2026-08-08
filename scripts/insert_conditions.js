/* Insert authored conditions into content/conditions.json at a chosen swipe position.
 *
 * A condition's position in the DATA array is not cosmetic: left/right swipe on a detail page
 * browses array order, so where an entry sits decides what a reader lands on next. Appending to
 * the end would put Hip Fracture after whatever the last condition in the file happens to be.
 * That is why placement is an explicit argument rather than something this script guesses.
 *
 * Idempotent: an id already present is left alone and reported, so a re-run after a partial
 * failure does not duplicate an entry (byId would silently keep only one, and the library count
 * would be one higher than the number of reachable cards).
 *
 * Every inserted entry is checked against the field set the existing conditions share. A missing
 * field renders as an empty section rather than throwing, so an omission is invisible in the app
 * and has to be caught here.
 *
 * Usage:
 *   node scripts/insert_conditions.js <staging.json> <content-dir> \
 *        --after <id>:<after-id> [--after <id>:<after-id> ...]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const AFTER = {};
const UPDATE = new Set();
const pos = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--after') {
    const [id, after] = String(argv[++i] || '').split(':');
    if (!id || !after) { console.error('--after wants <id>:<after-id>'); process.exit(2); }
    AFTER[id] = after;
  } else if (argv[i] === '--update') {
    // Replacing an entry in place is a different, riskier act from adding one, so it needs
    // naming explicitly. Without this the idempotency guard silently SKIPS an edited staging
    // entry and reports success -- which is what happened when the back-pain exam line was
    // revised and the content file never changed.
    String(argv[++i] || '').split(',').filter(Boolean).forEach(x => UPDATE.add(x));
  } else pos.push(argv[i]);
}
const [STAGING, CONTENT] = pos;
if (!STAGING || !CONTENT) {
  console.error('usage: insert_conditions.js <staging.json> <content-dir> --after <id>:<after-id>...');
  process.exit(2);
}

const file = path.join(CONTENT, 'conditions.json');
const RAW = fs.readFileSync(file, 'utf8');
const DATA = JSON.parse(RAW);
const TRAILING_NL = RAW.endsWith('\n') ? '\n' : '';
// Match the file's own formatting. conditions.json ships MINIFIED; re-emitting it pretty-printed
// adds ~124 kB of whitespace to a file the app fetches at boot and turns a two-entry addition
// into a whole-file diff. Infer the indent instead of assuming one.
const INDENT = (() => {
  const nl = RAW.indexOf('\n');
  if (nl < 0) return null;                       // no newlines at all -> minified
  const m = /^([ \t]*)/.exec(RAW.slice(nl + 1));
  return m[1].length ? (m[1][0] === '\t' ? '\t' : m[1].length) : null;
})();
const incoming = JSON.parse(fs.readFileSync(STAGING, 'utf8'));
const list = Array.isArray(incoming) ? incoming : Object.values(incoming);

// the field set the shipped conditions agree on — the majority shape, so one odd
// legacy entry cannot drag the expectation off
const tally = {};
for (const c of DATA) for (const k of Object.keys(c)) tally[k] = (tally[k] || 0) + 1;
const CANON = Object.keys(tally).filter(k => tally[k] === DATA.length).sort();

let added = 0, skipped = 0, updated = 0, fail = 0;
for (const c of list) {
  const at0 = DATA.findIndex(d => d.id === c.id);
  if (at0 >= 0 && !UPDATE.has(c.id)) { console.log(`skip ${c.id} — already present`); skipped++; continue; }

  const keys = Object.keys(c).sort();
  const missing = CANON.filter(k => !keys.includes(k));
  const extra = keys.filter(k => !tally[k]);
  if (missing.length) { console.error(`FAIL ${c.id}: missing ${missing.join(', ')}`); fail++; continue; }
  if (extra.length) { console.error(`FAIL ${c.id}: unknown field ${extra.join(', ')}`); fail++; continue; }
  if (!DATA.some(d => d.category === c.category)) {
    console.error(`FAIL ${c.id}: category "${c.category}" matches no existing condition`); fail++; continue;
  }

  // --update replaces in place, so the swipe position is untouched by definition. Report which
  // fields actually changed, so a no-op edit cannot pass as a successful one.
  if (at0 >= 0) {
    const changed = CANON.filter(k => JSON.stringify(DATA[at0][k]) !== JSON.stringify(c[k]));
    if (!changed.length) { console.log(`update ${c.id} — identical, nothing changed`); skipped++; continue; }
    DATA[at0] = c;
    console.log(`upd  ${c.id.padEnd(14)} fields changed: ${changed.join(', ')}`);
    updated++;
    continue;
  }

  const after = AFTER[c.id];
  if (!after) { console.error(`FAIL ${c.id}: no --after given`); fail++; continue; }
  const at = DATA.findIndex(d => d.id === after);
  if (at < 0) { console.error(`FAIL ${c.id}: --after "${after}" is not a condition id`); fail++; continue; }

  DATA.splice(at + 1, 0, c);
  console.log(`add  ${c.id.padEnd(14)} after ${after} — swipe order: ` +
    `${DATA[at].id} -> ${c.id} -> ${DATA[at + 2] ? DATA[at + 2].id : '(end)'}`);
  added++;
}

if (fail) { console.error(`\n${fail} failed — nothing written`); process.exit(1); }

if (added || updated) {
  fs.writeFileSync(file, JSON.stringify(DATA, null, INDENT === null ? undefined : INDENT) + TRAILING_NL);
  console.log(`\nwrote ${path.relative(process.cwd(), file)} — ${DATA.length} conditions` +
              (updated ? ` (${updated} updated in place)` : ''));
} else {
  console.log(`\nnothing to do — ${DATA.length} conditions`);
}
const unverified = DATA.filter(d => d.verified === false).map(d => d.id);
if (unverified.length) console.log(`RC VERIFIED badge off (awaiting review): ${unverified.join(', ')}`);
