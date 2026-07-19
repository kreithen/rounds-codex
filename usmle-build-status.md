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
| Step 1 | B8 | data/usmle-step1-b8.js | 25 | yes | yes |
| Step 1 | B9 | data/usmle-step1-b9.js | 25 | yes | yes |

Step 1 running total: **225** MCQs (max 280).

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
- B8: s1-0176 .. s1-0200 (contiguous). No collisions with B1-B7. Key 5/5/5/5/5, 17 anchors
  (incl. complete-heart-block ECG), 5 easy/14 mod/6 hard. Topics: Fabry, fluoroquinolone/
  DNA gyrase, acetaminophen/NAPQI, warm AIHA, sickle cell, OCD, NPH, NMS, ankylosing
  spondylitis, vit-D rickets, infective endocarditis, complete AV block, lobar pneumonia,
  Goodpasture, primary biliary cholangitis, H. pylori PUD, medullary thyroid ca (MEN2),
  endometriosis, Conn syndrome, amyloidosis, ethylene glycol, positive LR, publication
  bias, transfusion refusal/autonomy, truth-telling/nondisclosure.
- B9: s1-0201 .. s1-0225 (contiguous). No collisions with B1-B8. Key 5/5/5/5/5, 14 anchors,
  5 easy/14 mod/6 hard. Topics: Pompe, aminoglycoside/30S, warfarin/VKORC1, von Willebrand,
  polycythemia vera, glioblastoma, alcohol withdrawal/DTs, borderline PD, giant cell
  arteritis, Ewing sarcoma, atrial fibrillation, cardiac tamponade, renal cell carcinoma,
  small cell lung ca (Lambert-Eaton), calcium oxalate stone, achalasia, hepatocellular
  carcinoma, central DI, uterine leiomyoma, DIC, tumor lysis syndrome, Berkson selection
  bias, length-time bias, emancipated minor, withdrawing vs withholding treatment.

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
| Step 2 CK | B3 | data/usmle-step2ck-b3.js | 25 | yes | yes |
| Step 2 CK | B4 | data/usmle-step2ck-b4.js | 25 | yes | yes |

Step 2 CK running total: **100** MCQs (max 318).

- IDs s2ck-0001 .. s2ck-0100. Validated with `--exam step2ck` (exam-aware validator).
- B4 IDs s2ck-0076 .. s2ck-0100 (contiguous). Key 5/5/5/5/5, 15 anchors, 5 easy/14 mod/6
  hard. Topics: acute asthma, aortic dissection, infective endocarditis, C. diff colitis,
  HHS, DVT, primary hypothyroidism, AF with RVR, B12/pernicious anemia, mesenteric ischemia,
  sigmoid volvulus, major burn resuscitation, obstructing infected stone, DDH, minimal-change
  nephrotic, ALL, pertussis, placenta previa, shoulder dystocia, leiomyomata, GBS prophylaxis,
  GAD, PTSD, AAA screening, decision-making capacity.
- B3 IDs s2ck-0051 .. s2ck-0075 (contiguous). Key 5/5/5/5/5, 15 anchors, 5 easy/14 mod/6
  hard. Topics: CAP, NSTE-ACS, ADHF, thyroid storm, hypertensive emergency, UGIB/PUD,
  hepatic encephalopathy, prerenal AKI, myxedema coma, perforated ulcer, incarcerated
  inguinal hernia, tension pneumothorax, testicular torsion, croup, febrile seizure, HSP,
  foreign body aspiration, GDM, preterm PROM, ovarian torsion, postmenopausal bleeding,
  panic disorder, anorexia nervosa, adolescent confidentiality, breast ca screening.
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
| Step 3 | Day 1 FIP B2 | data/usmle-step3d1-b2.js | 25 | yes | yes |
| Step 3 | Day 1 FIP B3 | data/usmle-step3d1-b3.js | 25 | yes | yes |
| Step 3 | Day 2 ACM B1 (pilot) | data/usmle-step3d2-b1.js | 25 | yes | yes |

Step 3 running total: **100** MCQs (75 Day 1 FIP + 25 Day 2 ACM; max 412: 232 Day 1 FIP +
180 Day 2 ACM + 13 CCS).

- Day 1 FIP IDs s3-0001 .. s3-0075; Day 2 ACM IDs s3-0076 .. s3-0100 (shared s3- id space,
  non-overlapping ranges; both validate under `--exam step3`; cross-checked no ID collision).
- Validated with `--exam step3` (exam-aware validator; systems
  set = IM, Surgery, Peds, OB-GYN, Psych, Emergency Medicine, Biostat & Epi, Prev & Ethics).
- Day 1 = Foundations of Independent Practice (FIP): biostat/epidemiology, literature
  interpretation, ethics, diagnosis/management heavy. Blueprint this batch: Biostat & Epi 5,
  Prev & Ethics 3, Internal Medicine 6, Pediatrics 3, OB-GYN 3, Psychiatry 2,
  Emergency Medicine 2, Surgery 1.
- Key 5/5/5/5/5, 12 anchors, 6 biostat/literature-interpretation items. All original.
- B2 IDs s3-0026 .. s3-0050 (contiguous). Key 5/5/5/5/5, 15 anchors (lab/table-heavy),
  6 biostat/epi/lit-interp items, 5 easy/14 mod/6 hard. Topics: sens/spec 2x2, positive
  LR, hazard ratio, odds ratio/case-control, intention-to-treat, attack rate/outbreak,
  decision-making capacity, communicable-disease reporting, outpatient CAP, AF stroke
  prevention, COPD exacerbation, SIADH, NSTE-ACS, DKA, febrile seizure, Kawasaki, neonatal
  hyperbilirubinemia, ectopic pregnancy, postpartum hemorrhage/atony, GDM screening, MDD
  first-line, delirium, ischemic stroke thrombolysis, acetaminophen overdose, cholecystitis.
- B3 (Day 1) IDs s3-0051 .. s3-0075. Key 5/5/5/5/5, 14 anchors, 6 biostat/epi/lit-interp
  items. Topics: NNH, post-test probability/LR, forest plot, incidence rate/person-time,
  Cohen kappa, futile-intervention ethics, herd immunity/R0, vaccine refusal, hypothyroidism,
  gout flare, B12 anemia, HFrEF GDMT, new T2DM, PE (stable), bronchiolitis, otitis media,
  epiglottitis, placenta previa, cervical ca screening, GBS prophylaxis, GAD, postpartum
  depression, STEMI, septic shock, appendicitis.
- **Day 2 ACM B1 (pilot)** IDs s3-0076 .. s3-0100. Day 2 = Advanced Clinical Management:
  longer multi-step vignettes, longitudinal/next-step management lead-ins, much less biostat
  than Day 1. Key 5/5/5/5/5, 15 anchors, blueprint IM8/EM3/Surg3/Peds3/OBGYN3/Psych2/Prev2/
  Biostat1. Topics: HFrEF titration, T2DM intensification, diabetic CKD, periprocedural
  bridging, resistant HTN, levothyroxine titration, SBP, chronic gout ULT, septic-shock
  pressors, anterior STEMI reperfusion, refractory status epilepticus, appendicitis mgmt,
  postop oliguria, AAA repair threshold, otitis media therapy, pediatric asthma step-up,
  bronchiolitis, preeclampsia severe, GBS prophylaxis, preterm labor steroids/tocolysis,
  GAD long-term, lithium initiation, pneumococcal immunization, substituted judgment,
  noninferiority interpretation. Same s3- prefix/systems as Day 1 -> no validator change.
- CCS (computer-based case simulations) deferred past v1 (MCQs only for now).

## Images / illustrations
- App art lives in `preview/illustrations.js` + `preview/illus-pA..G.js`, keyed by
  question id (`RC_ILLUS[id]`). Every illustrated item covered by schematic SVGs
  (medical-illustration quality): pA-pD = original 44, pE = B7/CK2/S3-1 (16), pF =
  B8/CK3/S3-2 (18), pG = B9/CK4/S3D1-3/S3D2-1 (22). ECGs kept as vector tracings.
- **Master image-prompt file: `higgsfield-image-prompts.md`** - one hyperrealistic,
  case-specific AI image prompt per illustrated question (QA checklist + negative prompt
  + open-access real-image fallback each). This is the canonical file; **append a new
  section for every new illustrated question** (see its Maintenance header).
- Upgrade path: generate/source a real or AI image per id -> physician verifies against
  the QA checklist -> wire into `RC_ILLUS[id]` (one-line swap; no engine change).

## Next
- Step 1 Batch 10 (s1-0226 .. s1-0250); validate `--against data/usmle-step1-b1.js .. b9.js`.
- Step 2 CK Batch 5 (s2ck-0101 .. s2ck-0125); validate `--exam step2ck
  --against data/usmle-step2ck-b1.js .. b4.js`.
- Step 3 Day 1 FIP Batch 4 (s3-0101 .. s3-0125) and Day 2 ACM Batch 2 (s3-0126 .. s3-0150).
  Keep Day 1/Day 2 in non-overlapping s3- ranges; validate `--exam step3 --against` all
  prior s3 files. (Convention: allot Day 1 the lower block, Day 2 the next block per round.)
- Preview app (`preview/`) is tri-exam via BUTTONS (Step 1 225 / Step 2 CK 100 / Step 3 100,
  the last = 75 Day 1 + 25 Day 2). Exam dropdown + order/shuffle selector removed (always
  shuffle, no-repeat). For a new batch: add its `<script src>`, extend the BANKS.<exam>
  concat, copy into preview/data.
- Production kit (`production/`): usmle-step1-data.js regenerated to 225 via build-data.js
  (auto-globs). Consider Step 2 CK / Step 3 production bundlers. Live wiring via the Chrome
  publish path (medcodex-publish).
- Images: append a `higgsfield-image-prompts.md` section for every new illustrated question
  (now 100 sections). New-item SVGs: pE = B7/CK2/S3-1, pF = B8/CK3/S3-2, pG = B9/CK4/
  S3D1-3/S3D2-1 (RC_ILLUS registry).

## Trigger for next session
"Continue the USMLE module - generate Step 1 Batch 8 / Step 2 CK Batch 3 / Step 3 Day 1
Batch 2 (25 items each, blueprint mix)."
Attach: this status doc + the relevant data/*.js banks (for id checks).
