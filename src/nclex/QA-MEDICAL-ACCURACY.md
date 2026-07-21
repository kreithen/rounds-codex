# NCLEX-RN Item Bank — Medical Accuracy QA Report
**Reviewer pass: skeptical-CNE full clinical review of all 150 items (2026-07-21).**

## Method
Full-text review of every item — stem, all options (correct + distractors), keyed
answer, rationale, and case-chart data — not just the keyed letter. Each item judged on:
correct key, accurate rationale, no misleading distractors, current guidelines, safe
practice. Contested or version-sensitive facts were verified against current sources
(USPSTF, ACS, StatPearls/Endotext, Cleveland Clinic) rather than recall.

## Result: 1 correction, 149 items confirmed accurate

### Correction applied
- **nclex-0034 (hpm, colorectal screening)** — Keyed option previously read "begin
  average-risk colorectal cancer screening now at age 50," framing 50 as the start age.
  Current guidance (USPSTF 2021 grade B; ACS 2018) starts average-risk screening at **age
  45**. This was also internally inconsistent with nclex-0140, which correctly keys age 45.
  **Fix:** keyed option now reads "Average-risk colorectal cancer screening should have
  already begun at age 45," with the rationale updated to cite the age-45 standard. The
  item still tests distinct content (a 50-year-old who should already be screened) rather
  than duplicating 0140. Not a safety error, but a precision/consistency fix appropriate
  for a board-prep tool.

### Items verified against current sources (confirmed correct, no change)
- **nclex-0029 (insulin mixing/onset)** — Regular insulin onset "30 to 60 minutes" and the
  "15 minutes (rapid)" distractor are correct; verified vs StatPearls/Endotext/Cleveland
  Clinic. "Clear before cloudy" mixing sequence is standard. No change.
- **nclex-0009 (newborn glucose 52 mg/dL "safe")** — Item keys on respiratory distress, not
  the glucose; 52 mg/dL is above any neonatal hypoglycemia threshold. Defensible. No change.
- **nclex-0140 (colorectal screening age 45)** — Confirmed correct and now the single
  authoritative colorectal-screening item after the 0034 fix.

## Spot-verified clinically high-risk content (all correct)
- Magnesium sulfate toxicity -> stop infusion + calcium gluconate (0026).
- Hyperkalemia 6.8 -> ECG first (0021, 0135); hypokalemia ECG U-waves (0022).
- SIADH hyponatremia -> 3% hypertonic saline slow (0023); DI hypernatremia seizure
  precautions (0024); post-thyroidectomy hypocalcemia/Trousseau (0025).
- Sepsis bundle sequence, lactate clearance (case-sepsis-01, 0057-0062).
- DKA fluids-first, insulin-driven hypokalemia, dextrose at glucose ~200 (case-dka-01).
- COPD target SpO2 88-92%, respiratory acidosis w/ compensation (case-copd-01).
- Stroke thrombolytic BP threshold <185/110, NPO for dysphagia (case-stroke-01).
- CHF decompensation cues, loop-diuretic hypokalemia, 2-3 lb/day weight rule (case-chf-01).
- PPE donning/doffing order, C. diff soap-and-water, TB airborne/N95 (0015-0020, 0136-0137).
- Antidotes: naloxone (opioid), protamine (heparin), calcium gluconate (Mg) — all correct.
- All 4 dosage calculations independently recomputed correct (0013=24, 0014=8, 0046=15, 0079=31).

## Post-fix validation
- nclex-b2.js re-validated: 0 errors.
- Re-merged nclex-data.js: full-150 enforced band check 0 errors / 0 warnings; blueprint exact.
- Engine tests: 58/58 pass. Preview re-embedded and rebuilt.

## Bottom line
The bank is medically sound. One outdated screening age was corrected; no unsafe keys or
rationales were found across the 150 items and 5 unfolding cases.
