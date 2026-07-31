/* Run every published test vector in calculators.json against the real kernels.
 *
 * Usage: node scripts/test_calculators.js [calculators.json]
 *
 * Why this exists: a calculator is the one kind of content in this app whose
 * correctness can be PROVEN rather than reviewed. The quiz bank needed a
 * physician to read every answer; a Wells score either sums to 4.5 or it does
 * not. Every vector here is a case whose expected value comes from the source
 * paper or from a hand-worked example, so a formula edit that breaks one is
 * caught before it reaches a ward.
 *
 * The structural checks below are as important as the arithmetic: a band table
 * with a gap, a select whose options do not cover the stated range, or a
 * missing citation are all ways a calculator can be wrong without any test
 * vector failing.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { run } = require('./calc_engine.js');

const SRC = process.argv[2] || path.join(__dirname, '..', 'calculators-staging', 'calculators.json');
const SPECS = JSON.parse(fs.readFileSync(SRC, 'utf8'));

const fail = [];
const ok = (cond, msg) => { console.log((cond ? '  ok   ' : '  FAIL ') + msg); if (!cond) fail.push(msg); };

/* eq() compares the fields the vector actually asserts, so a vector can pin the
   score without also having to restate the band, and vice versa. */
function check(spec, vec, i) {
  const got = run(spec, vec.in);
  const want = vec.out;
  const label = `${spec.short} vector ${i + 1}`;
  if (!got) { ok(false, `${label}: kernel returned nothing`); return; }
  for (const key of Object.keys(want)) {
    if (key === 'band') {
      ok(got.band && got.band.label === want.band,
         `${label}: band "${got.band && got.band.label}" === "${want.band}"`);
    } else {
      ok(got[key] === want[key], `${label}: ${key} ${got[key]} === ${want[key]}`);
    }
  }
}

console.log(`\nCALCULATORS (${SPECS.length}) — ${path.relative(process.cwd(), SRC)}\n`);

const ids = new Set();
for (const spec of SPECS) {
  console.log(`${spec.name}`);

  // ---- structure -------------------------------------------------------
  ok(!ids.has(spec.id), `  unique id: ${spec.id}`); ids.add(spec.id);
  ok(!!spec.citation && spec.citation.length > 20, '  carries a source citation');
  ok(Array.isArray(spec.caveats) && spec.caveats.length > 0,
     `  carries caveats (${(spec.caveats || []).length}) — the misuse notes are the point of a teaching calculator`);
  ok(Array.isArray(spec.tests) && spec.tests.length >= 3,
     `  has at least 3 test vectors (${(spec.tests || []).length})`);

  // Bands must ascend and the last must be a catch-all, or a high score
  // silently falls through bandFor() and reports the wrong interpretation.
  const maxes = spec.bands.map(b => b.max);
  ok(maxes.every((m, i) => i === 0 || m > maxes[i - 1]), '  bands ascend without overlap');
  ok(maxes[maxes.length - 1] >= 999, '  final band is a catch-all');

  // ---- reachable range -------------------------------------------------
  if (spec.kernel === 'sum') {
    let lo = 0, hi = 0;
    for (const inp of spec.inputs) {
      if (inp.type === 'check') { if (inp.points > 0) hi += inp.points; else lo += inp.points; }
      else if (inp.type === 'select') {
        const vals = inp.options.map(o => o[1]);
        hi += Math.max(...vals); lo += Math.min(...vals);
      }
    }
    lo = Math.round(lo * 100) / 100; hi = Math.round(hi * 100) / 100;
    console.log(`  range ${lo} to ${hi}`);
    // Every band must be reachable — an unreachable band is dead UI that
    // implies a clinical tier the score cannot actually produce.
    for (const b of spec.bands) {
      const reachable = b.max >= 999 ? hi > (spec.bands[spec.bands.length - 2]?.max ?? -Infinity) : b.max >= lo;
      ok(reachable, `  band "${b.label}" is reachable`);
    }
  }

  // ---- arithmetic ------------------------------------------------------
  (spec.tests || []).forEach((v, i) => check(spec, v, i));
  console.log('');
}

/* Cross-cutting: the calculators claim to link to conditions. A typo in a
   condition id produces a dead link in the shipped app, so verify against the
   real content file when it is reachable. */
const CONDS = ['/workspace/rounds-codex-app/content/conditions.json',
               path.join(__dirname, '..', 'applive', 'content', 'conditions.json')]
  .find(p => fs.existsSync(p));
if (CONDS) {
  const known = new Set(JSON.parse(fs.readFileSync(CONDS, 'utf8')).map(c => c.id));
  console.log(`CONDITION LINKS (against ${path.basename(path.dirname(CONDS))}/conditions.json)`);
  for (const spec of SPECS) {
    for (const id of spec.conditions || []) {
      ok(known.has(id), `  ${spec.short} → ${id}`);
    }
  }
  console.log('');
} else {
  console.log('CONDITION LINKS  skipped — no conditions.json found\n');
}

console.log(fail.length ? `FAILED: ${fail.length}` : 'ALL CHECKS PASSED');
process.exit(fail.length ? 1 : 0);
