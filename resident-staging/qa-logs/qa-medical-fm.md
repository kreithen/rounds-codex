# Family Medicine — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive guideline/pharmacotherapy/screening claims checked vs current USPSTF/ADA/ACC-AHA/GOLD/CDC/KDIGO/Menopause Society; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: fm (BASE schema). 50 entries. **PRIOR-SESSION build.**

**Assessment up front:** ★ **the most current build in the entire audit.** Exceptionally detailed and up to date across chronic disease, prevention, and pharmacotherapy - it already had the 2022-2024 changes that other builds needed added. Only the single newest 2024 addition (doxy-PEP) was missing.

---

## Batch 1 — 2026-07-18 (high-yield: chronic disease + prevention + women's/sexual health)

### fm-sti  ✅ ENHANCEMENT APPLIED (the one gap)
- **Gap:** STI treatment fully current (2021 CDC) but the newest prevention tool absent.
- **Added** (pearl, web-verified): **doxy-PEP** - CDC (June 2024) recommends offering **doxycycline 200 mg within 72 h after sex to MSM and transgender women with a bacterial STI in the past year** (cuts syphilis/chlamydia >70%, gonorrhea ~50%; retest q3-6 mo; link to HIV PrEP).
- **Source (web-verified):** CDC Clinical Guidelines on doxy-PEP, MMWR 2024 (finalized June 6, 2024). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs current guidelines; no change) — an exceptional list:
- **fm-htn** — DASH, **chlorthalidone/indapamide preferred over HCTZ**, ACEi/ARB/DHP-CCB, **goal <130/80 (SPRINT)**, home BP averages, **resistant HTN -> spironolactone (PATHWAY-2)**, primary aldosteronism (ARR before MRA), NSAID reversible cause. ✓
- **fm-t2dm** — metformin, **compelling-indication drugs regardless of A1c (ADA): ASCVD -> GLP-1 RA/SGLT2i; HF/CKD -> SGLT2i**, GLP-1 titration + **hold before procedures (2023 anesthesia guidance)**, euglycemic DKA, deintensify in elderly, LADA/GAD. ✓
- **fm-lipids** — high-intensity statin, **>=50% LDL reduction, LDL<70 -> ezetimibe (IMPROVE-IT) -> PCSK9i (FOURIER/ODYSSEY)**, **bempedoic acid (CLEAR Outcomes)**, **icosapent ethyl (REDUCE-IT)**, SAMSON nocebo, CAC-zero de-risker, Lp(a) once. ✓
- **fm-obesity** — **semaglutide 2.4mg (STEP-1 ~15%), tirzepatide (SURMOUNT-1 ~20%)**, older agents, **discontinuation regain (STEP-4)**, **metabolic-bariatric surgery (BMI>=35 regardless of comorbidity, ASMBS/IFSO 2022)**, binge-eating screen, med-list review. ✓ (fully "GLP-1 era")
- **fm-prevention** — **low-dose aspirin primary prevention individualized 40-59/>=10% risk only (grade C), NOT routine (2022 USPSTF)**, FIT->colonoscopy, Lung-RADS, stop-screening ages (CRC 76-85 selective/stop 85+, cervical stops 65), life-expectancy rule. ✓
- **fm-adult-imms** — **pneumococcal at 50 (the 65 anchor is gone)**, **RSV vaccine (one dose, check age/risk bands)**, RZV after zoster/Zostavax, egg allergy NOT a flu contraindication, Tdap every pregnancy. ✓ (very current)
- **fm-copd** — smoking cessation + LTOT (mortality-movers), **GOLD groups A/B/E (2023 revision)**, eosinophil-guided ICS (>=300 upfront, >=100 escalate), **triple therapy (IMPACT/ETHOS mortality signal)**, withdraw ICS if pneumonia, pulmonary rehab underprescribed. ✓
- **fm-ckd** — **four-pillar stack: (1) ACEi/ARB, (2) SGLT2i (DAPA-CKD/EMPA-KIDNEY, eGFR >=20-25), (3) statin (KDIGO), (4) BP + finerenone (FIDELIO/FIGARO) + GLP-1 RA (FLOW trial)**, sick-day rules, late-referral mortality risk. ✓ (includes 2024 FLOW trial - exceptional)
- **fm-osteoporosis** — bisphosphonate first-line, **denosumab (rebound if missed - no exit without a bridge)**, **very-high-risk anabolic-FIRST (teriparatide/abaloparatide) then antiresorptive**, drug holiday, glucocorticoid-induced at osteopenic thresholds. ✓ (matches ortho)
- **fm-gout** — flare within 24h, **ULT indications (ACR: >=2 flares/tophi/damage)**, **allopurinol first-line incl CKD, treat-to-target urate <6**, prophylaxis during titration, **febuxostat 2nd-line (CARES CV signal)**, HCTZ->losartan. ✓
- **fm-menopause** — **transdermal estradiol first-line (lower VTE/stroke)**, **no arbitrary stop at 65**, **nonhormonal fezolinetant (NK3, first-in-class) + elinzanetant**, low-dose vaginal estrogen for GSM, anti-pellet (Menopause Society). ✓ (fezolinetant 2023 - very current)
- **fm-depression** — psychotherapy first-line for mild, SSRI (sertraline/escitalopram), expectation-setting, **augment (bupropion/aripiprazole)**, screen bipolar (MDQ) before prescribing, sexual side effects, plain suicide screening. ✓
- **fm-headache** — treat early (NSAID/triptan), **NO butalbital/opioids (MOH factories)**, prophylaxis >=4 d/mo, **CGRP-era: mAbs (erenumab/fremanezumab/galcanezumab) or gepants after 2 failed oral classes**, MOH management. ✓ (matches neuro)
- **fm-thyroid** — levothyroxine 1.6 mcg/kg (start low elderly/CAD), subclinical (treat TSH>=10/TPO+symptoms/pregnancy), **pregnancy +30% immediately**, Graves methimazole (PTU 1st-trimester/storm, agranulocytosis), nodule (Bethesda III/IV molecular testing). ✓
- **fm-sti** — **chlamydia doxycycline (beats azithromycin, rectal)**, gonorrhea ceftriaxone 500mg IM, syphilis benzathine penicillin, **PID triple therapy (+ metronidazole)**, EPT (all 2021 CDC). ✓ (+ now doxy-PEP)
- **fm-contraception** — **LARC first-line for everyone incl adolescents/nulliparous (ACOG/AAP)**, extended cycling, **EC ladder (copper/LNG IUD > ulipristal > LNG)**, salpingectomy for ovarian-cancer reduction, migraine-with-aura + estrogen, quick-start. ✓

## Running tally (fm)
- Checked: 16 high-yield claim-areas | CONFIRMED: 15 | ENHANCEMENT applied: 1 (doxy-PEP) | CORRECTION: 0 | UNVERIFIED: 0
- ★ **The most current build audited.** A 50-entry broad primary-care dataset that already incorporated GLP-1/tirzepatide, SGLT2i/GLP-1 cardiorenal, PCSK9i/bempedoic acid/icosapent ethyl, 2022 USPSTF aspirin, pneumococcal-50/RSV, GOLD 2023 A/B/E, four-pillar CKD (incl 2024 FLOW), fezolinetant, 2021 CDC STI, CGRP era, treat-to-target gout, anabolic-first osteoporosis, LARC-first. Only the newest 2024 tool (doxy-PEP) was missing.

## Next (fm)
- Remaining ~34 = peds primary care (well-child, child imms, peds fever, otitis), acute/infectious (pharyngitis, sinusitis, URI/bronchitis, flu-COVID, outpatient CAP), GI (GERD, IBS, constipation/hemorrhoids), MSK (low back, knee, shoulder, OA), neuro/psych (dizziness, anxiety, ADHD, insomnia, SBIRT), other (asthma, anemia, UTI, menstrual/AUB-PCOS, prenatal, men's health/ED, BPH, skin triage, geriatric assessment, chronic pain/opioid stewardship, fatigue workup, care transitions/SDOH) - broad primary-care content, mostly stable but overlapping the already-clean prev/IM; lighter/attending pass.
