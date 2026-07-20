# Preventive Medicine — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — high-yield/high-risk claims checked vs current guidelines (USPSTF/ACIP/AHA); prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: prev (BASE schema). 60 entries. **NEWER build (not yet live).**

**Structure:** entries 1-12 (epi/biostatistics), 40-48 (occupational/environmental), 49-60 (public-health systems/ethics) are timeless methodology — low change-risk, not guideline-dated. The clinical screening + CVD-risk + immunization block (13-38) is where currency matters and was the focus.

---

## Batch 1 — 2026-07-18 (high-yield clinical prevention block)

### prev-cvd-risk-aspirin-statin  ✅ CORRECTION APPLIED
- **Was:** "Global RISK ESTIMATION (e.g., the pooled cohort equations / 10-year ASCVD risk) integrates age, sex, **race**, blood pressure, lipids, diabetes, and smoking..."
- **Now:** "...integrates age, sex, blood pressure, lipids, diabetes, **kidney function**, and smoking... — the **AHA PREVENT equations (2023; race-agnostic, ages 30-79, add kidney/cardiovascular-kidney-metabolic factors) are now recommended by 2025 ACC/AHA guidance in place of the older race-based pooled cohort equations.**"
- **Rationale (web-verified):** PREVENT (Predicting Risk of CVD EVENTs, AHA 2023, Circulation) replaced the PCE — race-agnostic, ages 30-79, incorporates eGFR/kidney function, predicts total CVD (ASCVD + HF) at 10 & 30y. The **2025 ACC/AHA High Blood Pressure guideline** made an explicit new recommendation to use PREVENT instead of PCE; PREVENT yields lower risk estimates (notably Black adults, ages 70-75), reducing statin/antihypertensive eligibility.
- **Scope:** this was the fix flagged during the cardiology audit. Applied to res-prev.js + master.js/.json; regenerated + re-verified **1308/0-errors**, PREVENT text present. (transfer/res-resident-all.js has a *separate* dyslipidemia line already reading "pooled cohort equations or newer PREVENT" — acceptable, not the master source for this entry.)
- Aspirin + statin thresholds in the same entry were already CURRENT (USPSTF 2022 aspirin: individualized 40-59, against >=60; statins LDL>=190 / diabetes 40-75 / elevated 10-yr risk). ✓

### CONFIRMED current (verified vs USPSTF/ACIP; no change) — the newer build is impressively up-to-date here:
- **prev-breast-cancer-screening** — biennial mammography **age 40**-74 grade B (correctly reflects the **2024 USPSTF** lowering from 50), MRI + genetics for high-risk, overdiagnosis counseling. ✓
- **prev-colorectal-cancer-screening** — start **age 45** (2021 USPSTF; grade A 50-75, B 45-49), full test menu + intervals, positive stool test -> colonoscopy. ✓
- **prev-lung-cancer-screening** — **50-80, >=20 pack-years, current or quit <15y** (2021 USPSTF), Lung-RADS, cessation coupling. ✓
- **prev-diabetes-screening-dpp** — **35-70 overweight/obese** grade B (2021 USPSTF), DPP (~7% weight loss + 150 min/wk > metformin), A1c thresholds. ✓
- **prev-prostate-cancer-screening** — 55-69 shared decision (grade C), >=70 against (grade D), active surveillance for low-risk, Black men/family-hx individualize. ✓
- **prev-cervical-cancer-screening** — start 21; 21-29 cytology q3y; 30-65 cytology q3y OR hrHPV q5y OR co-test q5y (primary hrHPV increasingly preferred); stop 65; ASCCP risk-based mgmt. ✓
- **prev-adult-immunization** — annual flu, Td/Tdap q10y + each pregnancy, COVID per current, zoster >=50, pneumococcal >=65, **RSV (older adults)**, HepB (diabetes/liver/risk), HPV to 26 (SDM to 45). ✓ (RSV = 2023 ACIP)
- **prev-childhood-immunization** — HepB birth + primary series (DTaP/Hib/PCV/IPV/rota/MMR/VZV), adolescent 11-12 (Tdap/HPV/MenACWY + 16 booster, MenB older teens), catch-up, minor illness not a contraindication. ✓
- **prev-hypertension-screening** — screen >=18 grade A, **out-of-office confirmation** (ambulatory/home) before labeling, interval by age/risk, DASH. ✓
- **prev-osteoporosis-screening** — DXA women >=65 grade B (+ younger postmenopausal at-risk), T-score <=-2.5, FRAX for osteopenia, fall prevention. ✓
- **prev-aaa-screening** — one-time US men 65-75 ever-smoked grade B, against never-smoking women grade D, repair ~5.5cm. ✓ (2019 USPSTF)
- **prev-sti-hiv-screening** — HIV 15-65 once grade A + all pregnant, chlamydia/gonorrhea women <=24, syphilis at-risk, **PrEP** for substantial risk, universal prenatal. ✓
- **prev-post-exposure-prophylaxis** — HIV PEP 3-drug <72h x28d, rabies (wound wash + RIG at wound + vaccine; bat exposures count), tetanus toxoid +/- TIG, HepB vaccine +/- HBIG. ✓
- **prev-uspstf-framework**, **prev-screening-principles** — grade definitions + lead-time/length-time/overdiagnosis biases: standard, correct. ✓ (spot-check)

### Not individually audited (timeless methodology, low change-risk):
Epi/biostats (study designs, disease frequency, measures of association, test characteristics, bias/confounding, inference, regression/survival, systematic reviews/GRADE, causal inference, outbreak, surveillance) and public-health/occupational/environmental/systems entries (levels of prevention, SDOH, health promotion, program eval, health economics, QI/safety, informatics, ID control, emergency prep, food safety, global health, ethics/law; occupational history, occ lung disease, NIHL, ergonomics, tox, OSHA, workers' comp, environmental health). Conceptual board content, not guideline-dated — flagged for lighter/attending pass.

## Running tally (prev)
- Checked: ~16 high-yield claim-areas | CONFIRMED: 15 | CORRECTION applied: 1 (PREVENT equations) | UNVERIFIED: 0
- **Newer build, but the clinical screening/immunization content is current and accurate** — the sole currency gap was the CVD risk equation (PCE -> PREVENT), now fixed. Screenings already reflect the latest USPSTF (breast 40, CRC 45, lung 50/20-pk-yr, diabetes 35-70) and ACIP (RSV) updates.
