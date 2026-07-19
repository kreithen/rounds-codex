# USMLE Module - Build Status

Ledger for the USMLE bank build. Update EVERY batch (mirrors resident-mode discipline:
files survive session death, conversation does not).

## Decisions locked
- **Deliverable:** in-app "USMLE Mode" quiz engine + pre-generated banks (static; no API).
- **Source (Option A):** official Content Outline drives scope; all vignettes original;
  no copyrighted textbook (FA) content ingested or reproduced.
- **Scope:** blueprint-weighted mix, each batch of 25 spans all Step 1 systems.
- **Difficulty:** each batch centered on Moderate with a few Easy/Hard, all tagged.
- **CCS:** deferred past v1.
- **Exam order:** Step 1 first.

## Progress
| Exam | Batch | File | Items | Validated | Committed |
|---|---|---|---|---|---|
| Step 1 | B1 | data/usmle-step1-b1.js | 25 | yes | yes |
| Step 1 | B2 | data/usmle-step1-b2.js | 25 | yes | yes |
| Step 1 | B3 | data/usmle-step1-b3.js | 25 | yes | yes |
| Step 1 | B4 | data/usmle-step1-b4.js | 25 | yes | yes |
| Step 1 | B5 | data/usmle-step1-b5.js | 25 | yes | yes |
| Step 1 | B6 | data/usmle-step1-b6.js | 25 | yes | yes |

Step 1 running total: **150** MCQs (max 280).

### Batch ids
- B1: s1-0001 .. s1-0025 (contiguous).
- B2: s1-0026 .. s1-0050 (contiguous). No collisions with B1.
- B3: s1-0051 .. s1-0075 (contiguous). No collisions with B1/B2.
- B4: s1-0076 .. s1-0100 (contiguous). No collisions with B1/B2/B3.
- B5: s1-0101 .. s1-0125 (contiguous). No collisions with B1-B4.
- B6: s1-0126 .. s1-0150 (contiguous). No collisions with B1-B5.

### Answer key balance
- B1: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B2: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B3: A:5 B:5 C:5 D:5 E:5. Anchors 13/25.
- B4: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B5: A:5 B:5 C:5 D:5 E:5. Anchors 13/25.
- B6: A:5 B:5 C:5 D:5 E:5. Anchors 17/25.

### B6 topics (no repeats vs B1-B5)
homocystinuria, familial hypercholesterolemia, zero-order kinetics, iron deficiency,
Hodgkin lymphoma, schizophrenia, Huntington, Wernicke encephalopathy, osteoporosis,
osteosarcoma, WPW, coarctation of aorta, pulmonary embolism (ABG), poststrep GN,
ulcerative colitis, pyloric stenosis, Graves, Addison, preeclampsia, SLE, lead
poisoning, absolute risk reduction, confounding, informed consent, intimate partner
violence. Difficulty 5 easy / 14 moderate / 6 hard (new wider spread applied).

### B5 topics (no repeats vs B1-B4)
Tay-Sachs, Down syndrome, vitamin B6/isoniazid, anaphylaxis (type I), TTP, epidural
hematoma, serotonin syndrome, major depressive disorder, dermatomyositis, cutaneous SCC,
dilated cardiomyopathy, beta-blocker MOA, ARDS, membranous nephropathy, Barrett esophagus,
colorectal adenocarcinoma, acromegaly, papillary thyroid carcinoma, complete mole,
secondary syphilis, neurofibromatosis type 1, relative risk calc, Hawthorne effect,
advance directive, impaired colleague.

### B4 topics (no repeats vs B1/B2/B3)
galactosemia, Prader-Willi (imprinting), Kartagener/ciliary dynein, SCID, hemophilia A,
Guillain-Barre, opioid overdose, developmental milestones, Paget disease, psoriasis,
calcific aortic stenosis, statin MOA, squamous cell lung ca (PTHrP), ADPKD, acute
pancreatitis, hepatitis B serology, primary hyperparathyroidism, SIADH, seminoma,
tuberculosis (type IV), multiple myeloma, type I error, incidence vs prevalence,
child-abuse mandatory reporting, HIV partner notification.

### B3 topics (no repeats vs B1/B2)
PKU, Marfan, scurvy, DiGeorge, beta-thalassemia major, Alzheimer, myasthenia gravis,
delirium vs dementia, rheumatoid arthritis, melanoma (Breslow), inferior STEMI/RCA,
digoxin, sarcoidosis, acute tubular necrosis, Crohn, hereditary hemochromatosis,
type 1 DM/DKA, Cushing (dexamethasone suppression), PCOS, Lyme, retinoblastoma (two-hit),
sensitivity/SnNout, case-control/odds ratio, medical error disclosure, professional interpreter.

### Topic coverage (no repeats across B1/B2)
B2 topics: OTC deficiency, fragile X, I-cell disease, hereditary angioedema, G6PD,
multiple sclerosis, benzodiazepine MOA, normal grief vs MDD, gout, basal cell carcinoma,
tetralogy of Fallot, ACE inhibitor, neonatal RDS, minimal change disease, celiac,
carcinoid, Hashimoto, pheochromocytoma, Klinefelter, diphtheria toxin, methotrexate,
number needed to treat, confidence-interval interpretation, surrogate decision-making,
Tarasoff duty to protect.

## Review log (125-item pass)
- Medicine: no substantive errors (the one real error, s1-0010 pemphigus distractor,
  was fixed during the B1/B2 QA). Applied 2 minor tweaks: s1-0033 distractor relabeled
  "prolonged grief disorder" (DSM-5-TR); s1-0094 seminoma stem now notes mildly elevated
  beta-hCG with normal AFP.
- Difficulty retags applied: s1-0006, s1-0021, s1-0040, s1-0070, s1-0120 -> easy;
  s1-0061 -> moderate.
- NEW difficulty-spread rule (Batch 6 onward): target ~5 easy / 14 moderate / 6 hard
  per 25 (~20/56/24), and make "hard" items genuinely two-step (interpret-then-decide),
  not deeper recall. Prior batches ran ~3 easy / 20 moderate / 2 hard.

## Step 2 CK (started)
| Exam | Batch | File | Items | Validated | Committed |
|---|---|---|---|---|---|
| Step 2 CK | B1 (pilot) | data/usmle-step2ck-b1.js | 25 | yes | yes |

- IDs s2ck-0001 .. s2ck-0025. Validated with `--exam step2ck` (exam-aware validator).
- Blueprint (clinical, Medicine-heavy): Internal Medicine 9, Surgery 4, Pediatrics 4,
  Obstetrics & Gynecology 4, Psychiatry 2, Preventive Medicine & Ethics 2.
- Key 5/5/5/5/5, 11 anchors, difficulty 5 easy / 14 moderate / 6 hard. All original;
  clinical lead-ins (next best step / most likely dx). QA'd medically clean.
- Preview: WIRED. preview/index.html now has an Exam selector (Step 1 150 / Step 2 CK 25);
  switching repopulates the system filter and pool. Browser-verified both exams.

## Next
- Step 1 Batch 7 (s1-0151 .. s1-0175), blueprint mix + wider difficulty spread
  (~5 easy / 14 moderate / 6 hard). Validate `--against data/usmle-step1-b1.js .. b6.js`.
- Step 2 CK Batch 2 (s2ck-0026 .. s2ck-0050) when desired; validate `--exam step2ck
  --against data/usmle-step2ck-b1.js`. Consider a Step 2 CK production merge
  (extend production/build-data.js or add a step2ck bundler).
- Preview app (`preview/`) is now multi-exam (B1..B6 = 150 Step 1 + Step 2 CK 25). For a
  new batch: add its `<script src>`, extend the BANKS.<exam> concat, copy into preview/data.
- Production kit (`production/`): usmle-step1-data.js regenerated to 150 via build-data.js
  (auto-globs). Live wiring happens via the Chrome publish path (medcodex-publish).

## Trigger for next session
"Continue the USMLE module - generate Step 1 Batch 7 (25 items, blueprint mix)."
Attach: this status doc + data/usmle-step1-b1.js .. b6.js (for id checks).
