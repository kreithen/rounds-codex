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
| Step 1 | B7 | data/usmle-step1-b7.js | 25 | yes | yes |

Step 1 running total: **175** MCQs (max 280).

### Batch ids
- B1: s1-0001 .. s1-0025 (contiguous).
- B2: s1-0026 .. s1-0050 (contiguous). No collisions with B1.
- B3: s1-0051 .. s1-0075 (contiguous). No collisions with B1/B2.
- B4: s1-0076 .. s1-0100 (contiguous). No collisions with B1/B2/B3.
- B5: s1-0101 .. s1-0125 (contiguous). No collisions with B1-B4.
- B6: s1-0126 .. s1-0150 (contiguous). No collisions with B1-B5.
- B7: s1-0151 .. s1-0175 (contiguous). No collisions with B1-B6. Key 5/5/5/5/5 (s1-0173
  rebalanced), 14 anchors, 5 easy/14 mod/6 hard. Topics: von Gierke, cyanide, CF, ITP,
  CML, bipolar I, ALS, PTSD, OA, bullous pemphigoid, mitral stenosis, nitrates, asthma,
  IgA nephropathy, Gilbert, Hirschsprung, T2DM, prolactinoma, Turner, systemic sclerosis,
  CO poisoning, type II error/power, recall bias, elder abuse, conflict of interest.

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
| Step 2 CK | B2 | data/usmle-step2ck-b2.js | 25 | yes | yes |

Step 2 CK running total: **50** MCQs (max 318).

- IDs s2ck-0001 .. s2ck-0050. Validated with `--exam step2ck` (exam-aware validator).
- Blueprint (clinical, Medicine-heavy): Internal Medicine 9, Surgery 4, Pediatrics 4,
  Obstetrics & Gynecology 4, Psychiatry 2, Preventive Medicine & Ethics 2 per batch.
- Both batches key 5/5/5/5/5, difficulty 5 easy / 14 moderate / 6 hard. All original;
  clinical lead-ins (next best step / most likely dx). QA'd medically clean.
- B2 IDs s2ck-0026 .. s2ck-0050 (contiguous, no collision with B1).
- Preview: WIRED. preview/index.html Exam selector (Step 1 175 / Step 2 CK 50 / Step 3 25);
  switching repopulates the system filter and pool. Browser-verified all exams.

## Step 3 (started)
| Exam | Batch | File | Items | Validated | Committed |
|---|---|---|---|---|---|
| Step 3 | Day 1 FIP B1 (pilot) | data/usmle-step3d1-b1.js | 25 | yes | yes |

Step 3 running total: **25** MCQs (max 412: 232 Day 1 FIP + 180 Day 2 ACM + 13 CCS).

- IDs s3-0001 .. s3-0025. Validated with `--exam step3` (exam-aware validator; systems
  set = IM, Surgery, Peds, OB-GYN, Psych, Emergency Medicine, Biostat & Epi, Prev & Ethics).
- Day 1 = Foundations of Independent Practice (FIP): biostat/epidemiology, literature
  interpretation, ethics, diagnosis/management heavy. Blueprint this batch: Biostat & Epi 5,
  Prev & Ethics 3, Internal Medicine 6, Pediatrics 3, OB-GYN 3, Psychiatry 2,
  Emergency Medicine 2, Surgery 1.
- Key 5/5/5/5/5, 12 anchors, 6 biostat/literature-interpretation items. All original.
- CCS (computer-based case simulations) deferred past v1 (MCQs only for now).

## Images / illustrations
- App art lives in `preview/illustrations.js` + `preview/illus-pA..D.js`, keyed by
  question id (`RC_ILLUS[id]`). 44/44 illustrated items covered by schematic SVGs
  (rebuilt to medical-illustration quality). ECGs kept as vector tracings.
- **Master image-prompt file: `higgsfield-image-prompts.md`** - one hyperrealistic,
  case-specific AI image prompt per illustrated question (QA checklist + negative prompt
  + open-access real-image fallback each). This is the canonical file; **append a new
  section for every new illustrated question** (see its Maintenance header).
- Upgrade path: generate/source a real or AI image per id -> physician verifies against
  the QA checklist -> wire into `RC_ILLUS[id]` (one-line swap; no engine change).

## Next
- Step 1 Batch 8 (s1-0176 .. s1-0200), blueprint mix + wider difficulty spread
  (~5 easy / 14 moderate / 6 hard). Validate `--against data/usmle-step1-b1.js .. b7.js`.
- Step 2 CK Batch 3 (s2ck-0051 .. s2ck-0075); validate `--exam step2ck
  --against data/usmle-step2ck-b1.js data/usmle-step2ck-b2.js`.
- Step 3 Day 1 FIP Batch 2 (s3-0026 .. s3-0050) and/or begin Day 2 ACM (advanced clinical
  management, ward/office-based). Validate `--exam step3 --against data/usmle-step3d1-b1.js`.
- Preview app (`preview/`) is now tri-exam (Step 1 175 / Step 2 CK 50 / Step 3 25). For a
  new batch: add its `<script src>`, extend the BANKS.<exam> concat, copy into preview/data.
- Production kit (`production/`): usmle-step1-data.js regenerated to 175 via build-data.js
  (auto-globs). Consider Step 2 CK / Step 3 production bundlers. Live wiring happens via
  the Chrome publish path (medcodex-publish).
- Images: append a `higgsfield-image-prompts.md` section for every new illustrated question
  (now 60 sections). New-item SVGs land in `preview/illus-pE.js` (RC_ILLUS registry).

## Trigger for next session
"Continue the USMLE module - generate Step 1 Batch 8 / Step 2 CK Batch 3 / Step 3 Day 1
Batch 2 (25 items each, blueprint mix)."
Attach: this status doc + the relevant data/*.js banks (for id checks).
