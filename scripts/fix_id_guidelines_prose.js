#!/usr/bin/env node
/*
 * Strip reviewer-addressed vocabulary out of the Infectious Disease guideline entries
 * and replace four journal-home-page links with real article URLs.
 *
 *     node scripts/fix_id_guidelines_prose.js [--check]
 *
 * WHY THIS EXISTS
 * The QA pass wrote its findings INTO the fields a resident reads: "CORRECTED: the
 * submission said...", "REVERSED - the submitted entry stated the opposite",
 * "NOT INDEPENDENTLY VERIFIED". Those sentences address me and the physician, not the
 * reader. A resident has no idea what "the submission" is, and CLAUDE.md already
 * records a `date` field reaching a live page reading "2025 entry as submitted".
 *
 * The rule this settles: the corrected FACT belongs in the entry; the fact that a
 * correction happened belongs in guidelines-staging/id-guidelines-CORRECTIONS.md.
 * Every clinical number below is preserved verbatim from the QA'd text -- this rewrites
 * the framing, never the finding.
 *
 * Three entries carried an explicit "could not be confirmed from source" hedge. Rather
 * than ship the hedge, all three were resolved against the literature (PediCAP Lancet
 * 2026, clesrovimab NEJM 2025, MVA-BN systematic review + clade I deployment review) and
 * the entries now state what the sources actually support. The MVA-BN entry changes
 * substantively: real-world effectiveness data is CLADE II; clade I rests on
 * immunobridging and modelling, so the original title claimed more than exists.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const CHECK = process.argv.includes('--check');
const SRC = path.join(__dirname, '..', 'guidelines-staging', 'id-guidelines.json');
const G = JSON.parse(fs.readFileSync(SRC, 'utf8'));

/* [year, 1-based index, field, must-contain-before, new value] --------------------- */
const EDITS = [

  ['2025', 2, 'breakthrough', 'CORRECTED',
    'Phase 2b open-label randomized trial, 200 adults with complicated S. aureus bacteremia at 23 North American centers. Two doses of dalbavancin a week apart versus standard daily therapy, in patients who had ALREADY CLEARED their blood cultures. It was designed and powered as a SUPERIORITY trial on day-70 Desirability of Outcome Ranking, and it did NOT meet that endpoint. A trial that fails to show superiority has not thereby shown noninferiority - that requires a prespecified noninferiority margin, and this trial had none.'],

  ['2025', 6, 'breakthrough', 'CORRECTED',
    'endTB established that shorter all-oral bedaquiline-containing regimens are noninferior to the standard longer regimen for MULTIDRUG-RESISTANT and rifampicin-resistant tuberculosis. Do not confuse it with TRUNCATE-TB, which is a different trial answering a different question: an 8-week treatment strategy in drug-SUSCEPTIBLE tuberculosis. The endTB result applies to MDR/RR disease and does not extend to susceptible disease.'],

  ['2025', 7, 'breakthrough', 'REVERSED',
    'Double-blind randomized trial at 27 French hospitals giving 21 days of adjunctive corticosteroid or placebo to 218 HIV-NEGATIVE patients with Pneumocystis pneumonia and acute hypoxemic respiratory failure. Day-28 mortality, the primary endpoint, was 21.5% with corticosteroid versus 32.4% with placebo - a 10.9% absolute difference that did NOT reach significance (p=0.069). Day-90 mortality (HR 0.59, p=0.022) and need for intubation (HR 0.36, p=0.020) were both SIGNIFICANTLY LOWER with corticosteroid.'],

  ['2025', 7, 'impact', 'as submitted',
    'The primary endpoint was not statistically significant, so this trial does not establish adjunctive corticosteroid as standard of care in non-HIV Pneumocystis pneumonia. But every point estimate favors corticosteroid and two secondary endpoints reached significance. It is a positive-trending trial that missed its primary endpoint, and reading it as a negative trial would withhold a treatment it suggests may help.'],

  ['2025', 9, 'breakthrough', 'CORRECTED',
    'Mosnodenvir is a first-in-class dengue antiviral, and the published trial gave it DAILY AS PROPHYLAXIS in a CONTROLLED HUMAN INFECTION MODEL - healthy volunteers deliberately challenged with virus. It is not a treatment trial, and not a study in naturally acquired infection, so it says nothing yet about viral load or symptom duration in a patient who walks in with dengue.'],

  ['2025', 10, 'impact', 'CORRECTED',
    'Argues for broadening treatment thresholds beyond ALT elevation. Weigh it as what it is: an interim analysis of a trial still enrolling, so the effect estimate can move.'],

  ['2026', 1, 'impact', 'CORRECTED',
    'This, not CloCeBa, is the definitive answer, and it moves cefazolin to first-line for MSSA bacteremia. Be precise about what reached significance: mortality was NONINFERIOR, not improved. The benefit that reached significance was renal.'],

  ['2026', 2, 'breakthrough', 'Multinational randomized trial',
    'Factorial randomized trial in 1,101 African children aged two months to six years hospitalized with severe community-acquired pneumonia, across 13 hospitals in South Africa, Uganda, Zambia, Zimbabwe and Mozambique. After at least 24 hours of WHO-recommended injectable therapy and documented clinical improvement, step-down to oral amoxicillin was noninferior to completing the injectable course: readmission or death by 28 days was 6% with oral amoxicillin, 7% with oral amoxicillin-clavulanate and 6% with continued injectable therapy. Total courses of 4-5 days matched 7-8 days.'],

  ['2026', 2, 'impact', 'in favour of',
    'Challenges the WHO pediatric pneumonia recommendation for a fixed period of injectable therapy, in favor of a clinically triggered oral step-down. It also shows no benefit from the broader-spectrum amoxicillin-clavulanate, which matters for stewardship.'],

  ['2026', 2, 'practical', 'NOT INDEPENDENTLY VERIFIED',
    'Shorter admissions, fewer cannulas and less hospital-acquired infection. The trigger is clinical improvement confirmed by a health worker after at least 24 hours of injectable therapy, not a fixed day count - and plain amoxicillin is the step-down drug, not the combination.'],

  ['2026', 3, 'practical', 'DATE CORRECTED',
    'The pivotal PURPOSE 1 and PURPOSE 2 publications are 2024; what belongs to this year is regulatory approval and rollout rather than the trial result. Removes the daily pill burden, and is discreet, which matters for people who cannot safely keep tablets at home.'],

  ['2026', 4, 'breakthrough', 'Phase 2b/3 trial of a single dose',
    'Double-blind placebo-controlled phase 2b/3 trial randomizing 3,632 healthy preterm and full-term infants 2:1 to a single fixed 105mg intramuscular dose of clesrovimab or placebo before or during their first RSV season. Through day 150 it cut RSV-associated medically attended lower respiratory infection by 60.4% (95% CI 44.1-71.9) and RSV hospitalization by 84.2% (95% CI 66.6-92.6), with severe medically attended disease down 91.7%.'],

  ['2026', 4, 'practical', 'not independently verified',
    'A weight-independent single 105mg dose simplifies delivery in the newborn period - unlike nirsevimab, there is no dose band to calculate. Give it before or during the first RSV season; the efficacy window studied is 150 days.'],

  ['2026', 5, 'practical', 'Listed here for the URINARY indication',
    'Listed here for the URINARY indication specifically; the gonorrhea data for the same drug sits under 2025 with zoliflodacin, so the development is not counted twice. Note the date: the EAGLE-2 and EAGLE-3 publications are 2024, and what belongs to this year is approval and uptake. Diarrhea is the dose-limiting nuisance, in 14-18% of patients.'],

  /* The clade I claim does not survive checking, so the entry is re-scoped rather than
     hedged. Real-world effectiveness evidence is clade II; clade I rests on
     cross-neutralization and modelling, which is a materially weaker claim. */
  ['2026', 6, 'title', 'Real-World Effectiveness of MVA-BN Vaccine Against Clade I and II Mpox',
    'MVA-BN Mpox Vaccine: Two-Dose Effectiveness and the Clade I Evidence Gap'],

  ['2026', 6, 'breakthrough', 'reporting substantial real-world effectiveness against both clade I and clade II',
    'Pooled real-world evidence puts two-dose MVA-BN (Jynneos) effectiveness against mpox at roughly 82%, with adjusted per-study estimates spanning 66-90% and post-exposure single-dose estimates of 78-89%. Those data are almost entirely CLADE II. For clade I, the evidence is cross-neutralization - two doses raise antibodies against clade Ib, but at lower titers than against clade IIb - together with deployment modelling, not measured effectiveness.'],

  ['2026', 6, 'impact', 'across clades',
    'Supports WHO and CDC outbreak guidance on ring vaccination and post-exposure prophylaxis, while leaving clade I effectiveness an open question during the ongoing central African outbreak.'],

  ['2026', 6, 'practical', 'NOT INDEPENDENTLY VERIFIED',
    'Two doses matter; single-dose protection is meaningfully lower and wanes. Vaccinate as post-exposure prophylaxis as early as you can after contact. Do not quote a clade I effectiveness figure to a patient - it has not been measured.'],

  ['2026', 7, 'practical', 'DATE CORRECTED',
    'The pivotal SHINE publication is 2022, with extended follow-up since. Applies to NON-SEVERE disease in children only - severe or disseminated tuberculosis still takes the full course, and assessing severity correctly is the whole decision.'],
];

/* Journal front doors are the tell CLAUDE.md warns about: on this project they have
   predicted, three for three, which entries would not resolve to a real citation. */
const LINKS = [
  ['2026', 2, 'https://www.thelancet.com/', 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00879-2/fulltext'],
  ['2026', 4, 'https://www.nejm.org/', 'https://www.nejm.org/doi/full/10.1056/NEJMoa2502984'],
  ['2026', 5, 'https://www.thelancet.com/', 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)02196-7/fulltext'],
  ['2026', 6, 'https://jamanetwork.com/journals/jama', 'https://www.sciencedirect.com/science/article/pii/S0264410X24010910'],
];
/* Journal names follow the corrected links. */
const JOURNALS = [['2026', 6, 'JAMA', 'Vaccine']];

const errs = [];
const at = (y, n) => (G[y] && G[y][n - 1]) || null;

for (const [y, n, field, before, after] of EDITS) {
  const e = at(y, n);
  if (!e) { errs.push(`${y} #${n}: no such entry`); continue; }
  if (!String(e[field]).includes(before)) errs.push(`${y} #${n} ${field}: anchor not found ("${before}")`);
  if (/the submission|the submitted|as submitted|submitted entry|NOT INDEPENDENTLY VERIFIED|not independently verified|verify block|CORRECTED|REVERSED|NOT FOUND/.test(after))
    errs.push(`${y} #${n} ${field}: replacement still carries reviewer vocabulary`);
}
for (const [y, n, before] of LINKS) {
  const e = at(y, n);
  if (!e) { errs.push(`${y} #${n}: no such entry`); continue; }
  if (e.url !== before) errs.push(`${y} #${n} url: expected "${before}", found "${e.url}"`);
}
for (const [y, n, before] of JOURNALS) {
  const e = at(y, n);
  if (e && e.journal !== before) errs.push(`${y} #${n} journal: expected "${before}", found "${e.journal}"`);
}
if (errs.length) { console.error('REFUSING TO EDIT:'); errs.forEach(m => console.error('  ' + m)); process.exit(1); }

for (const [y, n, field, , after] of EDITS) at(y, n)[field] = after;
for (const [y, n, , after] of LINKS) at(y, n).url = after;
for (const [y, n, , after] of JOURNALS) at(y, n).journal = after;

/* The whole point: nothing addressed to a reviewer may survive in ANY field. Unlike the
   merge guard, this sweeps narrative fields too, and it is case-insensitive on the
   phrases (not on bare words like "reversed", which is real clinical prose). */
const LEAK = /the submission|the submitted|as submitted|submitted entry|not independently verified|verify block|could not be confirmed|DATE CORRECTED|\bCORRECTED\b|\bREVERSED\b|\bNOT FOUND\b|\bUNVERIFIED\b/i;
let leaks = 0;
for (const y of Object.keys(G)) G[y].forEach((e, i) => {
  for (const k of Object.keys(e)) if (LEAK.test(String(e[k]))) { leaks++; console.error(`LEAK ${y} #${i + 1} ${k}: ${String(e[k]).slice(0, 120)}`); }
});
if (leaks) { console.error(`\n${leaks} field(s) still address the reviewer -- not writing`); process.exit(1); }

console.log(`${EDITS.length} field rewrites, ${LINKS.length} link corrections, ${JOURNALS.length} journal correction`);
console.log('no field in any entry addresses the reviewer');
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }

fs.writeFileSync(SRC, JSON.stringify(G, null, 2) + '\n');
console.log(`\nwrote ${path.relative(process.cwd(), SRC)}`);
