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

function round(n, dp) { const f = Math.pow(10, dp); return Math.round(n * f) / f; }

/* Weight-based dose.
 *
 * This kernel is deliberately the most verbose of the four, because on a dosage
 * calculator the DERIVATION is the content and the number is the by-product. It
 * returns `work` -- the dimensional analysis, step by step, in the student's own
 * units -- so the UI can show the reasoning rather than an unexplained answer,
 * and so the tests can assert on the reasoning too.
 *
 * Everything is converted to milligrams internally. mcg/mg/g is where these
 * calculations actually go wrong: a thousandfold slip produces a plausible-looking
 * number, so the conversion happens in exactly one place rather than being spread
 * across the arithmetic.
 *
 * What this kernel will NOT do is claim a dose is safe. It has no drug knowledge,
 * so it cannot know a maximum. The only sanity signal available without that
 * knowledge is whether the resulting VOLUME is physically plausible to measure --
 * which catches unit slips and nothing else, and the band notes say so.
 */
function dose(spec, values) {
  const MASS = { mcg: 0.001, mg: 1, g: 1000 };

  const wUnit = values.weight_unit || 'kg';
  const kg    = toBase(values.weight, wUnit, spec.inputs[0].units);
  const perKg = Number(values.dose);
  const dUnit = values.doseUnit || 'mg';
  const basis = values.basis || 'dose';
  const freq  = Number(values.freq) || 1;
  const strength = Number(values.strength);
  const sUnit = values.strengthUnit || 'mg';
  const vol   = Number(values.volume);

  if (!(kg > 0) || !(perKg > 0) || !MASS[dUnit]) return null;
  if (basis === 'day' && !(freq > 0)) return null;

  const work = [];
  work.push(wUnit === 'kg'
    ? `Weight: ${round(kg, 2)} kg`
    : `Weight: ${values.weight} ${wUnit} ÷ 2.20462 = ${round(kg, 2)} kg`);

  const perDay = basis === 'day';
  let mass = kg * perKg;
  work.push(`Ordered: ${perKg} ${dUnit}/kg${perDay ? '/day' : ''} × ${round(kg, 2)} kg = ` +
            `${round(mass, 3)} ${dUnit}${perDay ? '/day' : ''}`);
  if (perDay) {
    /* The single commonest weight-based error is giving a DAILY dose as one dose.
       Making the division an explicit, visible step is the point of showing it. */
    const total = mass;
    mass = mass / freq;
    work.push(`Divided into ${freq} dose${freq === 1 ? '' : 's'} a day: ` +
              `${round(total, 3)} ÷ ${freq} = ${round(mass, 3)} ${dUnit} per dose`);
  }

  const mg = mass * MASS[dUnit];

  // Present the dose in whichever unit reads naturally, rather than always mg.
  let dv, dvUnit;
  if (mg < 1)          { dv = round(mg / MASS.mcg, 2); dvUnit = 'mcg'; }
  else if (mg >= 1000) { dv = round(mg / MASS.g, 3);   dvUnit = 'g'; }
  else                 { dv = round(mg, 2);            dvUnit = 'mg'; }

  // Dose and volume are two separate steps; show the dose as soon as it is known.
  if (!(strength > 0) || !(vol > 0) || !MASS[sUnit]) {
    return { dose: dv, doseUnit: dvUnit, volume: null, work,
             band: { label: 'Enter the available supply to get a volume', tone: '' } };
  }

  const mgPerMl = (strength * MASS[sUnit]) / vol;
  work.push(`Supply: ${strength} ${sUnit} in ${vol} mL = ${round(mgPerMl, 4)} mg/mL`);
  const raw = mg / mgPerMl;
  const volume = round(raw, raw < 1 ? 3 : 2);
  work.push(`Volume: ${round(mg, 3)} mg ÷ ${round(mgPerMl, 4)} mg/mL = ${volume} mL`);

  return { dose: dv, doseUnit: dvUnit, volume, mgPerMl: round(mgPerMl, 4),
           work, band: bandFor(spec.bands, volume) };
}

const KERNELS = { sum, bmiBsa, map, dose };

function run(spec, values) {
  const k = KERNELS[spec.kernel];
  if (!k) throw new Error(`unknown kernel: ${spec.kernel}`);
  return k(spec, values || {});
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { run, sum, bmiBsa, map, dose, round, bandFor, toBase, KERNELS };
}
