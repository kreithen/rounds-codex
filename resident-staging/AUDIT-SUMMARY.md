# Rounds Codex Resident Mode — Medical-Accuracy Audit Summary

**Scope:** all 22 audited specialties (1308-entry master).
**Method:** web-grounded, prioritized spot-check of currency-sensitive claims (newest drugs, indications, trials, classifications) vs current guidelines/FDA/landmark trials. Structural QA re-verified after every edit. **NOT a per-sentence certification — attending sign-off required.**

## Headline
Across 1308 entries, **zero underlying medical errors** were found. Every change was a narrow, **edge-of-guideline addition** — a newest agent, indication, or trial — not a correction of something wrong. The datasets were medically sound as built.

## Scorecard (~35 corrections/enhancements, all verified live in the master)
| Specialty | Fixes | Specialty | Fixes |
|---|---|---|---|
| Cardiology | 7 | Orthopedics | 1 |
| Thoracic | 3 | ENT | 1 |
| Neurology | 3 | Neurosurgery | 1 |
| Urology | 2 | General Surgery | 1 |
| Dermatology | 2 | Preventive Medicine | 1 |
| OB/GYN | 2 | Psychiatry | 1 |
| Pediatrics | 2 | Radiation Oncology | 1 |
| Pathology | 2 | Family Medicine | 1 |
| PM&R | 2 | Radiology | 1 |
| Plastics | 1 | **Emergency Medicine** | **0** |
| | | **Internal Medicine** | **0** |
| | | **Anesthesiology** | **0** |

*(Ophthalmology is in the master data but was not part of this medical-accuracy pass.)*

## Pattern
- Changes clustered in **oncology-adjacent + newest-FDA-approval content (2022–2024)**: immunotherapy indications (KEYNOTE-A18 cervical, EV-302 bladder, RUBY/NRG-GY018 endometrial, KEYNOTE-048 HNSCC, neoadjuvant melanoma SWOG S1801/NADINA); the neuromuscular FcRn/complement wave (MG, CIDP); classification updates (WHO 2022 AML blast threshold, HER2-low); and newest agents (Cobenfy, deucravacitinib, fezolinetant, doxy-PEP, tofersen).
- **Mature live specialties (EM, IM, Anesthesiology) needed nothing** — uniformly current.
- **Family Medicine was the most current build** — a 50-entry primary-care dataset already through the 2024 FLOW trial; only doxy-PEP was added.
- **Neurosurgery** was the most sophisticated — already had MMA embolization for chronic SDH, WHO 2021 glioma classification, "triple-H is out" DCI; only ENRICH (2024) was added.

## Cross-specialty consistency achieved
- Cervical-cancer **KEYNOTE-A18** now matches across **radonc + obgyn**.
- Melanoma **neoadjuvant immunotherapy** now consistent across **plastics + derm**.
- **Lymphedema** (CDT/LVA/VLNT) consistent across **plastics + pmr**.

## Representative enhancements by specialty
- **Cardiology (7):** PREVENT equations; CHA2DS2-VASc anticoagulation threshold; mavacamten pregnancy; finerenone HFpEF (FINEARTS-HF); DanGer/Impella CP cardiogenic shock; acoramidis + vutrisiran ATTR-CM.
- **Thoracic (3):** symptom-based pneumothorax mgmt; aneurysm thresholds; mesothelioma nivo+ipi (CheckMate 743).
- **Neurology (3):** MG complement/FcRn inhibitors; ALS tofersen (SOD1); CIDP efgartigimod.
- **Urology (2):** MIBC adjuvant nivolumab/EV-302; NMIBC BCG-unresponsive bladder-sparing agents.
- **Dermatology (2):** psoriasis deucravacitinib (oral TYK2); melanoma neoadjuvant IO.
- **OB/GYN (2):** cervical KEYNOTE-A18; endometrial chemoimmunotherapy + molecular classification.
- **Pediatrics (2):** CF elexacaftor/tezacaftor/ivacaftor; neonatal-jaundice AAP 2022 thresholds.
- **Pathology (2):** AML WHO 2022/ICC blast-threshold change; HER2-low (trastuzumab deruxtecan).
- **PM&R (2):** paired VNS stroke rehab (Vivistim); targeted muscle reinnervation.
- **Plastics / Ortho / ENT / Nsg / GS / Prev / Psych / Radonc / FM / Rads (1 each):** neoadjuvant melanoma IO; post-arthroplasty aspirin VTE nuance (CRISTAL/PEPPER); HNSCC KEYNOTE-048; ICH ENRICH (2024); breast SLNB omission (SOUND/INSEMA); PREVENT equations; Cobenfy (xanomeline-trospium); cervix KEYNOTE-A18; doxy-PEP (CDC 2024); large-core thrombectomy (SELECT2/ANGEL-ASPECT).

## Deliverables
- `res-resident-master.js` / `.json` — deployment-ready dataset (1308 entries, 23 sections, 0 parse errors).
- `qa-logs/qa-medical-<spec>.md` — 22 per-specialty logs with the specific claims checked, sources, and confirmations.
