/* Calculator kernels for the Rounds Codex calculator module.
 *
 * Two kernels cover all nine calculators:
 *   sum      — point-summing scores. Entirely data-driven from calculators.json.
 *   bmiBsa   — BMI + Mosteller BSA.
 *   map      — mean arterial pressure.
 *
 * This file is the single source of truth for the arithmetic. It is loaded by
 * test_calculators.js (which runs every published test vector in the JSON) and
 * inlined into index.html by add_calculators.js, so the shipped app and the
 * tested code are the same code -- a calculator that passes here cannot drift
 * from the one on the ward.
 *
 * Deliberately dependency-free and side-effect-free so it can run in Node, in
 * a browser, and inside a vm sandbox without modification.
 */
'use strict';

/* Resolve a value to base units. `units` is [[label, multiplier], ...] with the
   base unit first; a raw number means "already in base units". */
function toBase(raw, unitLabel, units) {
  const n = Number(raw);
  if (!Number.isFinite(n)) return NaN;
  if (!units || !units.length) return n;
  const hit = units.find(u => u[0] === unitLabel);
  return n * (hit ? hit[1] : units[0][1]);
}

/* Bands are ordered ascending and matched on `value <= band.max`. The final
   band carries a sentinel max, so a lookup always resolves. */
function bandFor(bands, value) {
  for (const b of bands) if (value <= b.max) return b;
  return bands[bands.length - 1];
}

/* Point-summing scores (Wells x2, PERC, CHA2DS2-VASc, HAS-BLED, CURB-65, qSOFA).
   A `check` contributes its points when true; a `select` contributes the value
   carried by the chosen option. The select exists so mutually exclusive tiers
   -- CHA2DS2-VASc age being the one that matters -- cannot both be scored. */
function sum(spec, values) {
  let score = 0;
  for (const inp of spec.inputs) {
    if (inp.type === 'check') {
      if (values[inp.id]) score += inp.points;
    } else if (inp.type === 'select') {
      const v = values[inp.id];
      // A select defaults to its first option rather than to zero, so an
      // untouched control scores what the UI is actually showing.
      score += (v === undefined || v === null) ? inp.options[0][1] : Number(v);
    }
  }
  // Half-point scores are real (Wells PE): round only to kill float drift.
  score = Math.round(score * 100) / 100;
  return { score, band: bandFor(spec.bands, score) };
}

function bmiBsa(spec, values) {
  const kg = toBase(values.weight, values.weight_unit, spec.inputs[0].units);
  const cm = toBase(values.height, values.height_unit, spec.inputs[1].units);
  if (!(kg > 0) || !(cm > 0)) return null;
  const m = cm / 100;
  const bmi = Math.round((kg / (m * m)) * 10) / 10;
  const bsa = Math.round(Math.sqrt((cm * kg) / 3600) * 100) / 100;
  return { bmi, bsa, band: bandFor(spec.bands, bmi) };
}

function map(spec, values) {
  const sbp = Number(values.sbp), dbp = Number(values.dbp);
  if (!Number.isFinite(sbp) || !Number.isFinite(dbp)) return null;
  // Guard the physiologically impossible rather than silently computing it.
  if (dbp > sbp) return { error: 'Diastolic pressure cannot exceed systolic.' };
  const value = Math.round((sbp + 2 * dbp) / 3);
  return { value, band: bandFor(spec.bands, value) };
}

const KERNELS = { sum, bmiBsa, map };

function run(spec, values) {
  const k = KERNELS[spec.kernel];
  if (!k) throw new Error(`unknown kernel: ${spec.kernel}`);
  return k(spec, values || {});
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { run, sum, bmiBsa, map, bandFor, toBase, KERNELS };
}
