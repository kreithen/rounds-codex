# Radiology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive reporting-system/guideline/technique claims checked vs current ACR/Fleischner/-RADS/guidelines; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: rads (BASE schema). 60 entries. **PRIOR-SESSION build.** *(Source file: res-rads.js, not the shared transfer file.)*

**Assessment up front:** very current for a fundamentally stable specialty. Every structured reporting system and core imaging framework was correct and up to date; only one recent practice change (large-core thrombectomy) needed adding.

---

## Batch 1 — 2026-07-18 (high-yield: reporting systems + neuro/cardiac/onc imaging + IR)

### rads-stroke-imaging  ✅ ENHANCEMENT APPLIED
- **Gap:** entry reflected the mismatch-only paradigm ("small core + large penumbra favors intervention").
- **Added** (pearl, web-verified): **selected LARGE-core infarcts (low ASPECTS 3-5 or core >=50 mL) now also benefit from thrombectomy within 24 h (SELECT2, ANGEL-ASPECT, RESCUE-Japan LIMIT)** - a large established core no longer automatically excludes intervention.
- **Source (web-verified):** SELECT2 & ANGEL-ASPECT (NEJM 2023), RESCUE-Japan LIMIT (2022); AHA science advisory + SNIS 2024 (Class I). Applied to res-rads.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs ACR/guidelines; no change):
- **rads-contrast-media** — premedicate prior-reactors, **epinephrine first-line for anaphylaxis**, **anaphylactoid not IgE ('shellfish allergy' does NOT contraindicate iodinated contrast)**, NSF tied to severe renal failure + older linear gadolinium, hydration in selected patients. ✓ (consistent w/ IM contrast-nephropathy reappraisal)
- **rads-pulmonary-nodule** — **Fleischner (incidental) vs Lung-RADS (screening)**, benign calcification patterns, spiculation, **USPSTF screening 50-80/heavy smoking/quit within 15y**, subsolid tracking. ✓
- **rads-cardiac-ct** — **CCTA high NPV to exclude CAD (gatekeeper for low-intermediate chest pain)**, **CAD-RADS -> management**, CT-FFR, **CAC score (0 = very low risk)**, high-risk plaque (napkin-ring/positive remodeling). ✓ (reflects 2021 chest pain guideline)
- **rads-theranostics** — **Lu-177 PSMA-617 (mCRPC, VISION), Lu-177 DOTATATE (SSTR+ NET, NETTER)**, companion PET before therapy, Ra-223/I-131/I-131-MIBG/Y-90. ✓ (very current)
- **rads-prostate-mri** — **PI-RADS 4-5 -> MRI-targeted biopsy**, DWI/ADC (peripheral zone) vs T2 (transition zone), MRI-fusion biopsy, supports active surveillance, post-biopsy hemorrhage. ✓
- **rads-liver-lirads** — **LR-5 diagnoses HCC without biopsy**, HCC hallmark (arterial hyperenhancement + washout + capsule), LI-RADS only for at-risk (cirrhosis/HBV), hemangioma/FNH/cholangio features. ✓ (matches path-HCC)
- **rads-incidental-findings** — **ACR white-paper algorithms**, benign signatures (adrenal <=10 HU, simple renal cyst, macroscopic-fat AML, classic hemangioma), clear recommendation to stop the cascade, weigh life expectancy. ✓
- **rads-pulmonary-embolism-aorta** — **CTPA first-line, RV:LV ratio for strain**, **Wells/PERC + D-dimer** gating, **Stanford A surgical vs type B medical**, acute aortic syndrome (IMH/penetrating ulcer). ✓
- **rads-mammography-birads** — **BI-RADS -> action (0 imaging, 3 short-interval, 4/5 biopsy)**, suspicious vs benign calcifications, **supplemental MRI/US for high-risk/dense breast**, **tomosynthesis** (detection/recall). ✓
- **rads-ob-gyn-imaging** — **O-RADS risk stratification**, ectopic (discriminatory hCG + adnexal mass), **ovarian torsion (edematous ovary, peripheralized follicles, abnormal Doppler)**, TVUS first-line. ✓
- **rads-renal-adrenal** — **Bosniak I/II no follow-up, IIF surveillance, III/IV urology**, **adrenal <=10 HU adenoma vs washout CT/chemical-shift**, macroscopic fat = AML, **exclude pheo biochemically before intervention**. ✓
- **rads-fdg-pet** — staging/restaging/response, prep (fasting/glucose/brown fat), **PSMA (prostate)/DOTATATE (NET) alternative tracers**, false positives (inflammation/granulomatous/brown fat), **Deauville/PERCIST**. ✓
- **rads-acute-abdomen** — emergent findings (free air/closed-loop/ischemia/abscess), **US first in kids/pregnancy**, appendicitis (>6mm/non-compressible/fat stranding/appendicolith), ischemia signs (pneumatosis/portal venous gas). ✓
- **rads-interventional-oncology** — **TACE/TARE (Y-90) for intermediate HCC + select mets**, **thermal ablation (RFA/microwave/cryo) for small tumors**, **mRECIST**, liver arterially fed, **Tc-MAA mapping/lung shunt before Y-90**, heat-sink, hydrodissection. ✓
- **rads-trauma-imaging** — **FAST (free fluid; misses solid-organ/retroperitoneal)**, **contrast blush = active extravasation -> embolization**, triage by stability (unstable -> OR/angio not CT), IR embolization (splenic/hepatic/pelvic), subtle bowel/mesenteric injury. ✓

## Running tally (rads)
- Checked: 16 high-yield claim-areas | CONFIRMED: 15 | ENHANCEMENT applied: 1 (large-core thrombectomy) | CORRECTION: 0 | UNVERIFIED: 0
- **Very current for a stable specialty.** All structured reporting systems (BI-RADS/LI-RADS/PI-RADS/Lung-RADS/CAD-RADS/O-RADS/Bosniak), Fleischner, contrast guidance, theranostics, TACE/TARE/ablation, and trauma imaging were correct. Only the 2022-2023 large-core thrombectomy expansion was missing - now added.

## Next (rads)
- Remaining ~44 = physics/safety (radiography/fluoro, CT dose/ALARA, MRI physics/safety, ultrasound physics), neuro (ICH/trauma, brain tumors, spine/cord compression, head-neck-temporal), chest (CXR lines/tubes, ILD/HRCT patterns), cardiac MRI, GI/GU (pancreaticobiliary, bowel fluoroscopy), MSK (trauma/fractures, bone tumors, arthritis patterns, MSK MRI), peds (imaging safety/NAI, peds abdomen, peds chest), appropriateness/reporting, and the full IR/nuclear suite (IR fundamentals, embolization, BAE, UFE/PAE, biliary/abscess drainage, GU intervention, venous access, IVC filters, PAD, TIPS, biopsy, EVAR/TEVAR, carotid/neurovascular, vertebral augmentation; nuclear physics, bone scintigraphy, cardiac nuclear, thyroid/radioiodine, V/Q, renal/HIDA/Meckel) - stable physics/technique/findings content, lower change-risk; lighter/attending pass.
