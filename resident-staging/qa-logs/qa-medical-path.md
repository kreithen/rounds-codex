# Pathology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive classification/biomarker/diagnostic-criteria claims checked vs current WHO/ICC/IMWG frameworks + FDA companion diagnostics; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: path (BASE schema). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** morphology, IHC panels, and core molecular frameworks are accurate and current (Grade Groups, MMR/MSI, IMWG CRAB/SLiM, mass-spec amyloid typing, BTK/BCL-2 for CLL, LI-RADS). Two classification/biomarker frameworks had drifted to pre-2022 versions - both updated.

---

## Batch 1 — 2026-07-18 (high-yield: molecular classification + predictive biomarkers + heme)

### 2 ENHANCEMENTS APPLIED
- **path-acute-leukemias** ✅ — stated the ">=20% blasts" rule as absolute. **Added** (dx + pearl, web-verified): **WHO 2022/ICC 2022 now allow an AML diagnosis BELOW 20% blasts when a defining genetic abnormality is present** (APL/PML-RARA, t(8;21), inv(16), NPM1, etc.); **exceptions AML with BCR::ABL1 and CEBPA still require >=20%** (ICC uses a 10% cutoff for recurrent genetic abnormalities).
- **path-breast-carcinoma + path-predictive-biomarkers** ✅ — HER2 reported only as amplified/not. **Added: HER2-LOW (IHC 1+ or 2+/ISH-negative) is now a reportable, actionable category** - responds to trastuzumab deruxtecan (DESTINY-Breast04, 2022), so distinguishing IHC 0 from 1+ matters.
- **Source (web-verified):** WHO 5th ed (2022) & ICC (Arber, Blood 2022) AML blast-threshold change (CAP summary; exceptions BCR::ABL1/CEBPA); DESTINY-Breast04 (T-DXd for HER2-low). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors** (one embedded-quote parse error caught and fixed).

### CONFIRMED current (verified vs WHO/ICC/IMWG/FDA; no change):
- **path-predictive-biomarkers** — EGFR/ALK/ROS1 (lung TKIs), BRAF V600E (melanoma/thyroid/CRC), HER2 amp (breast/gastric), **MSI-high/MMR-deficient + PD-L1 (immunotherapy)**, KRAS/NRAS WT for anti-EGFR (CRC), **NTRK fusions tumor-agnostic**, NGS companion diagnostics. ✓ (now + HER2-low)
- **path-mpn-mds** — JAK2 V617F/CALR/MPL, PV (high RBC mass/low EPO), PMF (fibrosis/teardrops), MDS (<20% blasts/dysplasia/ring sideroblasts/del(5q)), hypomethylating agents/lenalidomide-del(5q). ✓ *(WHO 2022 renamed MDS "myelodysplastic neoplasms" - minor nomenclature; content current)*
- **path-non-hodgkin-lymphoma** — DLBCL (CD20+, cell-of-origin, double-hit MYC+BCL2/BCL6), follicular t(14;18)/BCL2, mantle t(11;14)/cyclin D1 CD5+, MALT (H. pylori/Sjogren/Hashimoto; gastric regresses w/ eradication), Burkitt starry-sky/Ki-67. ✓
- **path-cns-tumors** — GBM (pseudopalisading necrosis/microvascular proliferation/GFAP+), meningioma (dural/whorls/psammoma/EMA+), oligodendroglioma 1p/19q, **molecular markers (IDH, 1p/19q) now define glioma** [WHO 2021]. ✓
- **path-endometrial-carcinoma** — hyperplasia by atypia (EIN), Type I (endometrioid/estrogen/PTEN/MMR) vs Type II (serous/p53), Lynch sentinel, postmenopausal bleeding -> biopsy. ✓ *(TCGA/ProMisE molecular classes POLE/MMR/p53/NSMP added in the obgyn entry; dualistic model here still valid)*
- **path-lung-carcinoma** — SCLC (central neuroendocrine/oat cells/paraneoplastic), NSCLC adeno (peripheral/TTF-1/EGFR-ALK-KRAS) vs squamous (central/cavitary/keratin pearls/PTHrP), **molecular + PD-L1 testing standard**. ✓
- **path-platelet-disorders** — ITP (exclusion), TTP (schistocytes/ADAMTS13, **PLEX emergency, no platelets**), HIT (fall 5-10d + thrombosis, anti-PF4/SRA, non-heparin anticoagulant). ✓ *(TTP caplacizumab/rituximab are treatment adjuncts covered in heme; diagnosis/mechanism here accurate)*
- **path-transfusion-medicine** — ABO/Rh + screen + crossmatch + DAT, acute hemolytic (clerical/ABO), **TRALI (leading death) vs TACO**, irradiation (TA-GVHD), leukoreduction, platelets = highest bacterial risk, O universal RBC / AB universal plasma. ✓
- **path-prostate-adenocarcinoma** — loss of basal layer (p63/HMWCK-neg, AMACR-pos), **Gleason -> Grade Groups 1-5**, **active surveillance for low-risk**, osteoblastic bone mets, peripheral zone. ✓
- **path-colorectal-carcinoma** — adenoma-carcinoma (APC->KRAS->TP53), **universal MMR/MSI testing (Lynch + immunotherapy)**, FAP vs Lynch (MSI-high/right-sided), RAS/BRAF, left (obstruct/bleed) vs right (IDA). ✓
- **path-plasma-cell-myeloma** — clonal plasma cells, SPEP/UPEP + immunofixation, lytic lesions, **IMWG criteria (CRAB + SLiM biomarkers)**, **proteasome inhibitors/IMiDs/anti-CD38/ASCT**, MGUS ~1%/yr. ✓
- **path-amyloidosis** — Congo red apple-green birefringence, AL (light chains) / AA (SAA) / ATTR, **typing by mass spectrometry**, fat-pad aspirate, AL plasma-cell-directed vs **ATTR stabilizers**, restrictive CM. ✓
- **path-cll-cml** — CLL (smudge cells, CD5+/CD23+), CML (Ph t(9;22)/BCR-ABL, basophilia, low LAP), **CML TKIs**, **CLL BTK/BCL-2 inhibitors, del(17p)/TP53 poor response**, Richter transformation. ✓
- **path-hepatocellular-carcinoma** — HepPar-1/arginase-1/glypican-3, **LI-RADS (diagnose without biopsy in cirrhosis)**, surveillance US +/- AFP, resection/transplant (**Milan**)/ablation, portal vein invasion, fibrolamellar (young/no cirrhosis/normal AFP). ✓

## Running tally (path)
- Checked: 16 high-yield claim-areas | CONFIRMED: 14 | ENHANCEMENTS applied: 2 (AML WHO 2022/ICC blast threshold; HER2-low) | CORRECTION: 0 | UNVERIFIED: 0
- **Accurate and largely current.** Core morphology/IHC/molecular frameworks all correct. Two frameworks had drifted to pre-2022 versions (AML blast rule; HER2 binary reporting) - both updated to current classification.

## Next (path)
- Remaining ~44 = general principles (cell injury/necrosis/apoptosis, acute/chronic + granulomatous inflammation, neoplasia grading/staging, IHC/molecular workup), heme (Hodgkin, anemias/smear, coagulation/DIC, thrombophilia), GI/hepatobiliary (Barrett/esophageal, gastric, IBD, celiac, hepatitis/cirrhosis, pancreatic), GU/gyn (RCC, bladder, testicular GCT, cervical/HPV, ovarian, GTD), endocrine (thyroid, islet/diabetes), other tumors (NMSC, bone tumors, soft-tissue sarcoma, salivary, NET, mesothelioma, head-neck SCC), renal/cardiac (glomerular, atherosclerosis/IHD, MI evolution), systemic (vasculitis, autoimmune CTD, microbiology/sepsis), and practice (cytopathology/FNA, autopsy/forensic, frozen section, placental/perinatal, lymphadenopathy) - mostly stable morphology/mechanism content, lower change-risk; lighter/attending pass.
