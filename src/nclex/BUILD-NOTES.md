# NCLEX Phase 3 — session build notes (working)

## Reconciled against nclex-module-workflow.md v0.2 (received this session)

### Confirmed
- numeric type stands (exact-within-tol).
- Blueprint 150, band-checked, all cats in band.
- ~60% mc / ~40% NGN mix.
- Batch-of-10 + validate + checkpoint after every batch.
- Disclaimer (engine phase): "Educational practice material for Rounds Codex. Not affiliated
  with or endorsed by NCSBN. NCLEX(R) is a registered trademark of NCSBN, Inc."

### Corrections applied mid-build
1. caseId naming -> spec example is "case-chf-01" (condition-slugged). Using case-<cond>-01.
2. Case items MUST carry chart:{tabs:[{t,body}]} (EHR tabs: Nurses' Notes / Vitals / Labs /
   Orders) evolving across the 6 NCJMM steps. CONFIRMED by Dr. K 2026-07-21 -> PER-ITEM chart
   snapshot (each of the 6 items carries its own evolving chart; renders standalone in Study).
3. ddTable payload: validator enforces rows[].{opts,key}; spec prose says "blanks +rows".
   Following the VALIDATOR (the gate). FLAG for Dr. K: align doc wording to validator.
4. Count conflict: spec sec6 says "~59 items + 3 cases" (stale); approved blueprint sec4 +
   status doc say 124 items + 5 cases (30). CONFIRMED by Dr. K 2026-07-21 -> 124 + 5 cases.

### Format coverage
Exercised so far: mc, matrixMC, matrixMR, selectN, sata, cloze, ddTable, pair, numeric.
Remaining unexercised: bowtie -> place as case capstone (step 5/6).

### Scoring models to honor when writing keys (engine implements)
- mc 0/1; matrixMC +/- per row floor 0; selectN/sata/matrixMR +/- floor 0;
  cloze/ddTable 0/1 per blank/cell; bowtie max 5; pair dyad (both parts or 0).

## Batch ledger
- b1 pilot: 26 items, PASS (0/0).
- b2: 10 items (0027-0036), PASS (0/0). New formats: sata, cloze, selectN, ddTable, matrixMR, pair.

## Run decisions (Dr. K, 2026-07-21) — cleared to execute
- Scope: 124 items + 5 cases (full 150). CONFIRMED.
- Case chart: per-item snapshot, evolving across 6 steps. CONFIRMED.
- Execution: continuous run batches 3-13, checkpoint after each, stop only on validation failure. CONFIRMED.
- Accuracy: run skeptical-CNE independent review pass BEFORE final merge. CONFIRMED.

## Blueprint correction at 104 items (physio overage fixed)
Cases ran physio-heavy; physio hit 23 (target 21). Recoded 2 items on test-plan grounds:
- nclex-0005 (post-op hemorrhage recognition) physio -> risk (Reduction of Risk Potential).
- nclex-0009 (newborn respiratory distress assessment) physio -> hpm (Health Promotion/Maint).
Both defensible by NCLEX category definitions; content unchanged. physio now 21 exactly.
Remaining 46 slots (EXACT): mgmt+11 safety+6 hpm+4 psych+7 basic+7 pharm+4 risk+7 physio+0.
Rule for remaining 2 cases (b12, b14 or similar): code steps as mgmt/risk/safety/psych/basic,
ZERO physio.

## Batch ledger (cont.)
- b3 0037-0046 PASS. b4 0047-0056 PASS. b5 case-sepsis-01 0057-0062 PASS (bowtie).
- b6 0063-0072 PASS. b7 0073-0082 PASS. b8 case-dka-01 0083-0088 PASS.
- b9 0089-0098 PASS. b10 case-copd-01 0099-0104 PASS.
- Recode applied to b1 (0005->risk, 0009->hpm). b1 re-validated PASS.

- b11 0105-0114 PASS (psych/basic). b12 case-stroke-01 0115-0120 PASS (zero physio).
- b13 case-chf-01 0121-0126 PASS (zero physio). ALL 5 CASES DONE (30 case items).
At 126 items. Remaining 24 standalone (EXACT): mgmt+5 safety+4 hpm+3 psych+2 basic+3 pharm+4 risk+3 physio+0.
Plan: b14 (10) + b15 (10) + b16 (4) = 24. Then merge -> nclex-data.js, band check at 150, then skeptical-CNE review.

## FINAL: batches 14-16 + merge + accuracy review (2026-07-21)
- b14 0127-0136 PASS. b15 0137-0146 PASS. b16 0147-0150 PASS (final 4).
- Merged all 16 batches -> nclex-data.js (150 items, const NCLEX_DATA).
- FULL-150 BAND CHECK: 0 errors, 0 warnings. Blueprint hit EXACTLY:
  mgmt27 safety20 hpm14 psych13 basic13 pharm24 risk18 physio21 = 150.
- Skeptical-CNE accuracy review COMPLETE:
  * All 150 keys reviewed clinically correct (mc/sata/selectN/cloze/matrixMC/matrixMR/ddTable/pair/bowtie/numeric).
  * 3 special-format pilot items (0031 ddTable, 0032 matrixMR, 0033 pair) individually verified.
  * All 4 numeric dosage calcs independently recomputed: 0013=24, 0014=8, 0046=15, 0079=31 -> all OK.
- STATUS: 150-item bank BUILD-COMPLETE and accuracy-reviewed. Ready for engine (Phase 4).

## Remaining (NOT this session's build): engine + publish
- Phase 4: nclex-logic.js (9 renderers + 4 scorers), Study/Exam modes, 85-item weighted forms (3 cases/form).
- Phase 6: patch into live index.html, publish via medcodex-publish (Chrome->GitHub main->Netlify),
  then COMMIT modular nclex-*.js source into the repo.
- Spec 8b open items: timer default, disclaimer text, mint medcodex-nclex-buildout skill.

## Terminology change (Dr. K, 2026-07-21): client -> patient
Global rename across all 150 items (stems, options, rationales, case charts):
client->patient, clients->patients, client's->patient's, case-preserving.
375 occurrences replaced, 0 remain. All 16 batches re-validated PASS; re-merged
nclex-data.js re-passes the enforced 150 band check (0/0). Engine tests 58/58 still pass.
Preview + both handoff zips repackaged.

## Medical-accuracy QA pass (Dr. K request, 2026-07-21)
Full skeptical-CNE review of all 150 items (full text, not just keys). Result: 1 correction.
- nclex-0034: colorectal screening age corrected 50 -> 45 (USPSTF 2021/ACS 2018; also fixed
  inconsistency with nclex-0140). Verified vs current sources.
- Verified-correct-no-change: 0029 (regular insulin onset 30-60 min), 0009 (newborn glucose),
  0140 (screening age 45). All high-risk pharmacology/electrolyte/case content spot-checked OK.
- Re-validated + re-merged: band check 0/0. Engine 58/58. See QA-MEDICAL-ACCURACY.md.
