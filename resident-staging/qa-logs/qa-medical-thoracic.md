# Thoracic Surgery — Medical-Accuracy QA Log (web-grounded)

**Method:** same as cardiology log — high-yield/high-risk claims checked against current guidelines/landmark trials via web search; status CONFIRMED / NUANCE / CORRECTION / UNVERIFIED. Prioritized spot-check, NOT certification; expert/attending sign-off still required. sec: thoracic (EXTENDED schema: +tech[]/+after[]). 60 entries.

---

## Batch 1 — 2026-07-18 (oncologic resection & staging — highest-yield)

### thoracic-lobectomy + thoracic-sublobar-resection — extent of resection for early NSCLC
- **Claim:** lobectomy is the standard for fit early-stage NSCLC; sublobar (segmentectomy/wedge) for small (<=2 cm) peripheral node-negative NSCLC is NON-INFERIOR (JCOG0802, CALGB 140503); segmentectomy preferred over wedge for primary cancer; margin >= tumor size or >=2 cm.
- **Status: CONFIRMED (current).** JCOG0802/WJOG4607L (Lancet 2022) showed segmentectomy non-inferior (and superior OS) and CALGB 140503 (NEJM 2023) showed sublobar non-inferior DFS for <=2 cm peripheral stage IA NSCLC. Entries already cite both trials and frame it as practice-changing. Accurate.
- **Note:** JCOG0802 actually showed an OS *benefit* for segmentectomy; entry says "non-inferior" (conservative, safe, accurate). Optional: could mention the OS signal. Not required.
- **Action:** none. (Content already current.)

### thoracic-esophageal-cancer-staging — staging & neoadjuvant therapy
- **Claim:** EUS best for T/N, PET/CT for M, Siewert classification for GEJ, T1a -> EMR/ESD; neoadjuvant CROSS chemoradiation or perioperative FLOT (adenocarcinoma).
- **Status: CONFIRMED (current).** CROSS (neoadjuvant chemoRT) and FLOT (perioperative chemo for adeno/GEJ) are current standards; EUS/PET staging and Siewert correct; T1a endoscopic resection correct.
- **Optional enhancement:** adjuvant nivolumab (CheckMate 577) for residual disease after neoadjuvant chemoRT + R0 resection — a 2021 addition worth a mention. Not an error.
- **Action:** none required (optional enhancement logged).

### thoracic-lung-cancer-staging — staging workup
- **Claim:** TNM; invasive mediastinal staging when nodes must be confirmed (PET can be false +/-); EBUS-TBNA first-line invasive nodal test, mediastinoscopy for confirmation (stations 2/4/7); confirmed N2 -> multimodality; neoadjuvant increasingly chemo-immunotherapy.
- **Status: CONFIRMED (current).** EBUS-first with mediastinoscopy confirmation, N2 multimodality, and neoadjuvant chemo-immunotherapy (e.g., CheckMate 816 nivolumab+chemo) all current. Entry doesn't cite a TNM edition number (so not wrong; 8th current, 9th adopted ~2025).
- **Optional enhancement:** name CheckMate 816 (neoadjuvant nivolumab+chemo) / note TNM 9th edition. Not errors.
- **Action:** none required.

---

## Batch 2 — 2026-07-18 (physiologic eval, LVRS, pneumothorax)

### thoracic-pneumothorax — initial management  ✅ CORRECTION APPLIED
- **Old claim:** "observation/aspiration for small stable primary pneumothorax; chest tube for larger/symptomatic" — SIZE-based framing.
- **Status: CORRECTION.** Practice shifted to SYMPTOM-based management: 2023 BTS + 2024 ERS/EACTS/ESTS guidelines recommend conservative/observation care for minimally symptomatic PSP REGARDLESS of size (Brown et al, NEJM 2020, conservative non-inferior), with ambulatory management as an initial option; intervention (needle aspiration/chest tube) for significant symptoms or unsuitable-for-conservative. Old size-based framing was outdated.
- **Source:** BTS Pleural Disease Guideline 2023 (Thorax); ERS/EACTS/ESTS 2024; Brown NEJM 2020.
- **Action:** APPLIED — rewrote the initial-management tx bullet to symptom-based + added a pearl. Master regenerated + re-verified.

### thoracic-preop-pulmonary-eval — operability thresholds
- **Claim:** ppoFEV1/ppoDLCO <~40% predicted flag high risk; VO2max >~20 mL/kg/min supports resection (even pneumonectomy), <~10-15 high risk; DLCO independently predictive.
- **Status: CONFIRMED (current).** ppoDLCO/ppoFEV1 40% is the commonly-used high-risk threshold; VO2max >20 = low risk (all resections incl. pneumonectomy), <10 = high risk, 10-20 intermediate (refine with VE/VCO2). DLCO independent predictor confirmed (ERS/ESTS). (Note: some algorithms trigger CPET at <60% and use 30% as a very-high-risk floor — entry's 40% is accurate and standard.)
- **Action:** none.

### thoracic-lvrs-emphysema — NETT criteria & valves
- **Claim:** upper-lobe-predominant + low exercise capacity benefit from LVRS; high-risk group FEV1 <=20% + (homogeneous emphysema or DLCO <=20%) harmed; endobronchial valves for selected patients without collateral ventilation; bullectomy for giant bulla (>1/3 hemithorax).
- **Status: CONFIRMED (established standard).** NETT subgroups and endobronchial valve indication (absence of collateral ventilation) unchanged/current.
- **Action:** none.

## Batch 3 — 2026-07-18 (aortic, CABG, achalasia, thymoma)

### thoracic-aortic-aneurysm-dissection — thresholds & root options  ✅ ENHANCEMENT APPLIED
- **Claim:** repair ~5.5 cm ascending; lower ~4.5-5.0 for Marfan/Loeys-Dietz/bicuspid or rapid growth; David (valve-sparing) vs Bentall.
- **Status: CONFIRMED + ENHANCED.** 2022 ACC/AHA aortic guideline: ~5.5 cm standard, but a "major practice change" LOWERED the sporadic ascending threshold to ~5.0 cm at experienced multidisciplinary centers; Marfan >=5.0 (>=4.5 with risk features); rapid growth >=0.5 cm/yr (sporadic). Valve-sparing root replacement reasonable. Added the 5.0-cm experienced-center note.
- **Source:** 2022 ACC/AHA Aortic Disease Guideline (Circulation/JACC 2022).
- **Action:** APPLIED — pearls now note the 5.0 cm experienced-center threshold + growth rate.

### thoracic-aortic-injury — blunt traumatic aortic injury
- **Claim:** TEVAR now preferred over open for most blunt aortic injuries.
- **Status: CONFIRMED (current).** TEVAR is standard of care for blunt thoracic aortic injury (lower morbidity/mortality); consistent with 2022 aortic guideline (TEVAR over open for descending TAA in non-Marfan/LDS/vEDS) and SVS/EAST guidance.
- **Action:** none.

### thoracic-cabg — indications & conduits
- **Claim:** CABG for left main/complex multivessel/diabetics (SYNTAX, FREEDOM); LIMA-to-LAD; total/multi-arterial improves patency.
- **Status: CONFIRMED (current).** LIMA-LAD survival benefit and SYNTAX/FREEDOM indications unchanged; multiarterial improves graft patency (survival benefit debated per ART — entry correctly frames it as patency).
- **Action:** none.

### thoracic-achalasia — definitive therapy
- **Claim:** Heller myotomy + partial fundoplication or POEM (definitive); pneumatic dilation effective; POEM excels for type III (spastic) but more reflux; botox for poor operative candidates.
- **Status: CONFIRMED (current).** All accurate and standard.
- **Action:** none.

### thoracic-thymoma-thymectomy — resection & MG
- **Claim:** complete thymectomy for resectable thymoma; postop RT for incompletely resected/invasive (Masaoka III+); thymectomy benefits generalized AChR-Ab MG even without thymoma (MGTX); optimize MG preop (IVIG/PLEX).
- **Status: CONFIRMED (current).** MGTX (NEJM 2016) supports thymectomy in non-thymomatous generalized AChR-Ab MG; resection + stage-based RT correct.
- **Action:** none.

## Running tally (thoracic)
- Checked (batches 1-3): 11 claim-areas | CONFIRMED: 9 | CORRECTION applied: 1 (pneumothorax) | ENHANCEMENT applied: 1 (aortic 5.0 cm) | UNVERIFIED: 0
- Optional enhancements still logged (not applied): JCOG0802 OS signal; CheckMate 577; CheckMate 816 / TNM 9th.

## Batch 4 — 2026-07-18 (LARGE batch: esophageal, pleural, mediastinal, transplant/MCS/ECMO/AF-ablation/endocarditis)

### thoracic-mesothelioma — systemic therapy & surgery  ✅ ENHANCEMENT APPLIED
- **Status: CONFIRMED + ENHANCED.** Named first-line nivolumab + ipilimumab for UNRESECTABLE pleural mesothelioma (CheckMate 743, OS 18.1 vs 14.1 mo, benefit regardless of histology, FDA 2020). Added that MARS-2 (Lancet Respir Med 2024) questioned the survival benefit of radical pleurectomy/decortication + chemo, so surgery's role is debated. EPP largely abandoned in favor of lung-sparing P/D (confirmed).
- **Action:** APPLIED (tx + pearls).

### CONFIRMED current (no change) — verified against established standards/guidelines:
- **thoracic-esophagectomy-complications** — leak (POD 5-10, water-soluble esophagram/CT), conduit blood supply (right gastroepiploic), conduit necrosis -> diversion, chyle leak (MCT/octreotide -> duct ligation). ✓
- **thoracic-esophageal-perforation** — early buttressed primary repair (stable), endoscopic stent/vacuum (contained), wide drainage, broad-spectrum abx + antifungals; Boerhaave (left posterolateral distal); high pleural amylase/low pH. ✓
- **thoracic-mediastinal-masses** — anterior "4 T's," AFP/beta-hCG for germ cell, do NOT transpleurally biopsy resectable thymoma (seeding), biopsy lymphoma/germ cell; posterior dumbbell -> MRI + neurosurgery. ✓
- **thoracic-empyema-decortication** — pH <7.2 / low glucose / pus = complicated; intrapleural tPA+DNase (MIST2), VATS if fibrinolytics fail, decortication for organized/trapped lung; split-pleura sign. ✓
- **thoracic-svc-syndrome** — usually not emergency (tissue first), endovascular stent for severe, chemosensitive tumors (SCLC/lymphoma/germ cell), catheter thrombosis -> anticoagulation. ✓
- **thoracic-chylothorax** — MCT/TPN + octreotide (low-output), duct ligation/embolization (>1 L/day), duct anatomy (low->right, high->left chylothorax), TG >110/chylomicrons. ✓
- **thoracic-lung-transplant** — bilateral for suppurative disease (CF)/PH, single for COPD/fibrosis; PGD (major early threat), CLAD/BOS (main long-term limit); CNI+antimetabolite+steroid. ✓
- **thoracic-heart-transplant** — bicaval technique standard; denervated heart (no atropine response, use isoproterenol/epi); fixed severe PH contraindication; cardiac allograft vasculopathy main long-term limit. ✓
- **thoracic-lvad-mcs** — durable continuous-flow, magnetically-levitated centrifugal (HeartMate 3 / MOMENTUM 3 superior); RV failure main post-implant risk; pump thrombosis/stroke/driveline infection/GI bleed (acquired vWF+AVMs). ✓
- **thoracic-ecmo** — VV (lungs, native circulation) vs VA (heart+lungs); EOLIA (severe ARDS); peripheral VA distal perfusion cannula, LV distension, Harlequin/differential hypoxia. ✓
- **thoracic-surgical-af-ablation** — Cox-Maze IV (RF/cryo) concomitant with cardiac (esp. mitral) surgery; LAA closure/excision integral; better for paroxysmal/smaller atria. ✓
- **thoracic-endocarditis-surgery** — 3 indications (HF, uncontrolled infection/abscess, high embolic risk), radical debridement + repair/replacement, root/homograft for abscess, conduction block risk near abscess; prosthetic-valve IE usually surgical. (Consistent w/ cardiology entry.) ✓

## Running tally (thoracic)
- Checked (batches 1-4): 25 claim-areas across ~25 entries | CONFIRMED: 22 | CORRECTION applied: 1 (pneumothorax) | ENHANCEMENTS applied: 2 (aortic 5.0 cm; mesothelioma CheckMate 743/MARS-2) | UNVERIFIED: 0
- **3 corrections/enhancements applied total; 0 outright factual errors found.**

# ✅ THORACIC HIGH-YIELD AUDIT — SUBSTANTIALLY COMPLETE (4 batches)
Covered the highest-yield/highest-risk claims across oncologic resection & staging (lung/esophageal/mesothelioma), physiologic operability, pleural disease, mediastinal masses, aortic (thresholds/dissection/injury), CABG/valve (cross-checked vs cardiology), and the transplant/MCS/ECMO/AF-ablation/endocarditis cluster. **Result: content is strongly current** — only pneumothorax needed a real correction (size->symptom-based); aortic and mesothelioma got currency enhancements.

**Remaining (~35 entries)** are more technical/anatomical/lower-change-risk (e.g., anatomy-access, chest tubes, lung isolation, bronchoscopy, airway surgery, GERD/hiatal hernia, pectus, thoracic outlet, diaphragm, chest/tracheobronchial trauma, hemothorax, CPB, pericardial disease, cardiac tumors, adult congenital, postop critical care, carcinoid, metastasectomy, solitary nodule, Pancoast, infectious lung, hemoptysis, mediastinitis, chest-wall tumors, malignant effusion). These warrant a lighter verification pass or direct attending review; no high-risk guideline-driven claims flagged on scan.

**Limits (honest scope):** prioritized spot-check of high-yield claims, NOT per-sentence certification. Attending sign-off still required.

## Next batches (thoracic)
- b2: pulmonary eval (ppoFEV1/DLCO thresholds), chest tubes/air leak, pneumothorax (BTS/CHEST), empyema/decortication, LVRS (NETT criteria).
- b3: aortic dissection type A surgery / TEVAR for blunt aortic injury & type B; CABG (SYNTAX/multivessel), valve surgery thresholds (cross-check vs cardiology).
- b4: esophagectomy complications (leak/conduit), achalasia (Heller/POEM), esophageal perforation; thymoma/myasthenia; mediastinal masses.
- b5: transplant (lung/heart allocation, ISHLT), LVAD/MCS, ECMO, surgical AF ablation (Cox-Maze), endocarditis surgical indications (cross-check vs cardiology).
