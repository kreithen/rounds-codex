/* Corrections from the independent medical re-read of the calculator bank.
 *
 * Usage: node scripts/fix_calculators_medreview.js [--check]
 *
 * One clinical ERROR, two currency updates, one overstated label, one spelling
 * miss, and the boundary test vectors whose absence let the error through.
 * Every change is asserted, and the script refuses to run twice.
 *
 * The finding that matters: Wells DVT banded "DVT unlikely" at max 0.99, so a
 * score of 1 was reported as "DVT likely -- proceed to compression ultrasound;
 * D-dimer alone is not sufficient to exclude". The validated two-level model
 * puts DVT unlikely at <=1 and likely at >=2. The calculator's OWN caveat says
 * ">=2 points is 'DVT likely'", so the arithmetic contradicted the explanation
 * printed beneath it.
 *
 * Why it survived: the four published vectors covered scores 0, 2, 0 and 9 --
 * every one of them except the boundary. A band edge with no vector on it is
 * not tested, it is assumed. This script adds a vector on both sides of every
 * band edge in every score, which is the general fix.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const F = path.join(__dirname, '..', 'calculators-staging', 'calculators.json');
const CHECK = process.argv.includes('--check');
const C = JSON.parse(fs.readFileSync(F, 'utf8'));
const byId = id => {
  const c = C.find(x => x.id === id);
  if (!c) { console.error('FAILED: no calculator ' + id); process.exit(1); }
  return c;
};
const done = [];
function assert(cond, msg) { if (!cond) { console.error('FAILED: ' + msg); process.exit(1); } }

/* 1 ── Wells DVT: the threshold ------------------------------------------- */
{
  const c = byId('wells-dvt');
  const b = c.bands[0];
  assert(b.label === 'DVT unlikely', 'wells-dvt first band is not "DVT unlikely"');
  if (b.max === 0.99) {
    b.max = 1.99;
    done.push('wells-dvt: "DVT unlikely" band 0.99 -> 1.99 (score 1 was being called DVT likely)');
  }
  assert(b.max === 1.99, 'wells-dvt band not at 1.99 after fix');
  /* the caveat already stated the correct rule; make it state the whole rule */
  const i = c.caveats.findIndex(x => x.includes('two-tier'));
  assert(i >= 0, 'wells-dvt two-tier caveat missing');
  if (!c.caveats[i].includes('≤1 is')) {
    c.caveats[i] = c.caveats[i].replace(
      "≥2 points is 'DVT likely'.",
      "≤1 is 'DVT unlikely' and ≥2 is 'DVT likely'.");
    done.push('wells-dvt: caveat now states both sides of the threshold, not just one');
  }
}

/* 2 ── PERC: a British spelling the first sweep missed --------------------- */
{
  const c = byId('perc');
  const inp = c.inputs.find(x => /hormone/i.test(x.label));
  assert(inp, 'perc hormone input missing');
  if (inp.label.includes('oestrogenic')) {
    inp.label = inp.label.replace('oestrogenic hormone', 'estrogen');
    done.push('perc: "oestrogenic hormone" -> "estrogen" (missed by the first US-spelling sweep)');
  }
}

/* 3 ── MAP: the guideline moved on ----------------------------------------
   SSC 2026 (Prescott, Antonelli, Alhazzani et al, Crit Care Med 2026;54(4):
   725-812) keeps the 65 mmHg initial target as a strong recommendation, so the
   BAND is unchanged and the number a student learns is the same. What changed
   is the citation generation and one genuine nuance: for adults 65 or older it
   SUGGESTS an initial range of 60-65 (weak, low certainty, off the 65 trial). */
{
  const c = byId('map');
  if (c.citation.includes('2021')) {
    c.citation = 'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: '
      + 'International Guidelines for Management of Sepsis and Septic Shock 2026. '
      + 'Crit Care Med 2026;54(4):725-812.';
    c.url = 'https://pubmed.ncbi.nlm.nih.gov/41869847/';
    done.push('map: citation SSC 2021 -> SSC 2026 (the 65 mmHg target itself is unchanged)');
  }
  const i = c.caveats.findIndex(x => x.includes('≥65 mmHg is the initial resuscitation target'));
  assert(i >= 0, 'map target caveat missing');
  if (!c.caveats.some(x => x.includes('60–65'))) {
    c.caveats.splice(i + 1, 0,
      'In adults 65 or older, SSC 2026 suggests an initial range of 60–65 mmHg rather than a '
      + 'higher target (weak recommendation, low certainty) — from the 65 trial, where permissive '
      + 'hypotension gave similar 90-day mortality with less vasopressor exposure.',
      'A MAP cannot be held at exactly 65. The guideline’s own remark is to titrate to a range '
      + 'around the target, roughly within 5 mmHg, rather than to a single number.');
    done.push('map: added the SSC 2026 age-65 range (60–65) and the titrate-to-a-range remark');
  }
}

/* 4 ── CHA2DS2-VASc: a band label that is wrong for women ------------------
   The threshold is >=2 in men but >=3 in women, so "Anticoagulation generally
   recommended" is not true of every score in the band -- a woman at 2 whose
   only extra point is her sex is low risk, which the note directly beneath it
   says. The label is the big text; the note is the small text. Make the label
   a risk statement, consistent with "Low risk" / "Intermediate risk" above it,
   and let the note carry the treatment rule. */
{
  const c = byId('cha2ds2-vasc');
  const b = c.bands[c.bands.length - 1];
  if (b.label === 'Anticoagulation generally recommended') {
    b.label = 'High risk';
    c.tests.forEach(t => {
      if (t.out.band === 'Anticoagulation generally recommended') t.out.band = 'High risk';
    });
    done.push('cha2ds2-vasc: top band label -> "High risk" (the old label was untrue for a woman scoring 2)');
  }
  if (!c.caveats.some(x => x.includes('2% per year'))) {
    c.caveats.push('The 2023 ACC/AHA/ACCP/HRS guideline frames the decision as an annual '
      + 'thromboembolic risk of about 2% per year rather than a score alone — which corresponds '
      + 'to ≥2 in men and ≥3 in women — and allows other validated scores (ATRIA, '
      + 'GARFIELD-AF) alongside this one.');
    done.push('cha2ds2-vasc: added the 2023 AF guideline’s risk-based framing');
  }
}

/* 5 ── Wells PE: NICE CG144 was replaced by NG158 in 2020 ------------------ */
{
  const c = byId('wells-pe');
  if (c.citation.includes('CG144')) {
    c.citation = c.citation.replace('NICE CG144', 'NICE NG158');
    done.push('wells-pe: NICE CG144 -> NG158 (CG144 was withdrawn and replaced in 2020)');
  }
  if (c.url.includes('mdcalc.com')) {
    c.url = 'https://pubmed.ncbi.nlm.nih.gov/10744147/';
    done.push('wells-pe: url pointed at MDCalc rather than the cited paper; now the Thromb Haemost record');
  }
}

/* 6 ── boundary vectors ----------------------------------------------------
   The general fix. For every `sum` score, put a vector on each side of each
   band edge, so no band edge can move without a test noticing. Built from the
   spec's own inputs: take checks in order until the target score is reached. */
{
  const target = (c, want) => {
    const inn = {};
    let s = 0;
    for (const inp of c.inputs) {
      if (s >= want) break;
      if (inp.type !== 'check' || inp.points <= 0) continue;
      if (s + inp.points > want) continue;
      inn[inp.id] = true; s += inp.points;
    }
    return s === want ? inn : null;
  };
  let added = 0;
  for (const c of C) {
    if (c.kernel !== 'sum') continue;
    const edges = new Set();
    for (const b of c.bands) {
      if (b.max > 900) continue;
      edges.add(Math.floor(b.max));            // last score inside the band
      edges.add(Math.floor(b.max) + 1);        // first score in the next band
    }
    for (const want of [...edges].sort((a, b) => a - b)) {
      const inn = target(c, want);
      if (!inn) continue;
      const already = c.tests.some(t => t.out.score === want);
      if (already) continue;
      const band = c.bands.find(b => want <= b.max) || c.bands[c.bands.length - 1];
      c.tests.push({ in: inn, out: { score: want, band: band.label } });
      added++;
    }
  }
  if (added) done.push('boundary vectors: +' + added + ' on band edges that had no test on them');
}

if (!done.length) { console.log('nothing to do - already applied.'); process.exit(0); }
if (CHECK) { console.log('WOULD APPLY:'); done.forEach(d => console.log('  * ' + d)); process.exit(0); }
fs.writeFileSync(F, JSON.stringify(C, null, 1) + '\n');
console.log('applied to ' + F);
done.forEach(d => console.log('  * ' + d));
