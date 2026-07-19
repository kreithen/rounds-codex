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

Step 1 running total: **125** MCQs (max 280).

### Batch ids
- B1: s1-0001 .. s1-0025 (contiguous).
- B2: s1-0026 .. s1-0050 (contiguous). No collisions with B1.
- B3: s1-0051 .. s1-0075 (contiguous). No collisions with B1/B2.
- B4: s1-0076 .. s1-0100 (contiguous). No collisions with B1/B2/B3.
- B5: s1-0101 .. s1-0125 (contiguous). No collisions with B1-B4.

### Answer key balance
- B1: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B2: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B3: A:5 B:5 C:5 D:5 E:5. Anchors 13/25.
- B4: A:5 B:5 C:5 D:5 E:5. Anchors 12/25.
- B5: A:5 B:5 C:5 D:5 E:5. Anchors 13/25.

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

## Next
- Step 1 Batch 6 (s1-0126 .. s1-0150), same blueprint mix. Validate with
  `--against data/usmle-step1-b1.js ... data/usmle-step1-b5.js`.
- Preview app (`preview/`) now loads B1..B5 (125 items); add each new batch's
  `<script src>` + BANK concat when built, and copy the file into `preview/data/`.
- Later (separate publish session): wire "USMLE Mode" UI into `index.html`, fold banks
  into a production array, push live via the Chrome publish path (medcodex-publish).

## Trigger for next session
"Continue the USMLE module - generate Step 1 Batch 6 (25 items, blueprint mix)."
Attach: this status doc + data/usmle-step1-b1.js .. b5.js (for id checks).
