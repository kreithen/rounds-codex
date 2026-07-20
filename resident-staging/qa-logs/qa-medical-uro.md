# Urology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive systemic-therapy/device claims + high-risk emergencies checked vs current guidelines/FDA approvals; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: uro (EXTENDED schema: +tech, +after). 60 entries. **NEWER build (not yet live).**

---

## Batch 1 — 2026-07-18 (high-yield: uro-oncology systemic therapy + BPH/OAB + emergencies)

### Bladder cancer — 2 ENHANCEMENTS APPLIED (the immunotherapy/ADC wave)
- **uro-muscle-invasive-bladder** ✅ — entry had the curative pathway (neoadjuvant cisplatin -> cystectomy + PLND + diversion, trimodality) but not the systemic-therapy advances. **Added:** (tx) **adjuvant nivolumab** for high-risk (ypT2+/node-positive) post-cystectomy (**CheckMate 274**) + **perioperative durvalumab + neoadjuvant chemo (NIAGARA, 2024)**; (pearl) **metastatic first-line = enfortumab vedotin + pembrolizumab (EV-302; ~doubled OS vs platinum chemo)** replacing platinum chemotherapy.
- **uro-bladder-cancer-nmibc** ✅ — entry said "radical cystectomy for BCG-unresponsive disease" (old standard). **Added:** (tx + pearl) **BCG-unresponsive bladder-sparing options** for patients declining/unfit for cystectomy — **pembrolizumab (KEYNOTE-057), nadofaragene firadenovec, nogapendekin alfa (N-803/Anktiva) + BCG** — all FDA-approved.
- **Source (web-verified):** EV-302/KEYNOTE-A39 (Lancet/NEJM 2024; OS HR ~0.51, ~32 vs 16 mo) new SOC; CheckMate-901 (nivo + gem/cis) alternative; CheckMate 274 adjuvant nivolumab; KEYNOTE-057, nadofaragene, Anktiva for BCG-unresponsive.
- **Action:** APPLIED to res-uro.js; master regenerated + re-verified **1308/0-errors**; EV-302/CheckMate 274/KEYNOTE-057/Anktiva all present.

### CONFIRMED current (verified vs guidelines/FDA; no change):
- **uro-advanced-prostate-cancer** — ADT backbone + **upfront intensification (doublet/triplet: ADT + ARSI +/- docetaxel)**, mCRPC sequencing (ARSIs, taxanes, radium-223, **PARP inhibitors for HRR/BRCA**, **PSMA radioligand Lu-177**), bone health. ✓ (PEACE-1/ARASENS, VISION)
- **uro-renal-mass-rcc** — partial nephrectomy for T1, ablation/active surveillance for small masses, **metastatic = IO combinations + VEGF TKI**, cytoreductive nephrectomy selected, Bosniak, VHL, IVC thrombus. ✓
- **uro-bph-medical-therapy** — alpha-blockers (uroselective + BP agents), 5-ARIs (PSA halved), combination (MTOPS/CombAT), tadalafil for ED, floppy iris syndrome. ✓
- **uro-turp-surgical-bph** — TURP (bipolar avoids TUR syndrome), **HoLEP** (size-independent/anticoagulated), GreenLight/PVP, **minimally invasive: UroLift, Rezum, Aquablation, prostatic artery embolization**, simple prostatectomy for large glands. ✓
- **uro-overactive-bladder** — behavioral first-line, antimuscarinics or **beta-3 agonists (mirabegron/vibegron; preferred in elderly for cognitive burden)**, third-line (Botox, sacral neuromodulation, PTNS). ✓
- **uro-testicular-torsion** — emergent exploration + detorsion + orchiopexy (bilateral, bell-clapper), manual detorsion bridge, explore <6h, don't delay for imaging, absent cremasteric reflex. ✓
- **uro-priapism** — ischemic = emergency (aspirate + intracavernosal phenylephrine -> shunt), non-ischemic (observe +/- embolization), corporal blood gas, sickle cell/PDE5, time-is-tissue. ✓
- **uro-fournier-gangrene** — early aggressive debridement (life-saving) + broad-spectrum abx (anaerobes) + resuscitation, repeat debridements, diversion, diabetes, mortality tracks time-to-OR. ✓ (consistent w/ GS nec-fasc)
- **uro-renal-colic** — NSAIDs first-line (> opioids), MET (tamsulosin, distal >5mm), urgent decompression for infected obstruction/AKI/solitary, non-contrast CT (US in pregnancy). ✓ (consistent w/ EM)
- **uro-prostate-cancer-screening** — shared decision ~55-69, PSA not cancer-specific (density/velocity/free-total), **mpMRI/PI-RADS targeted biopsy**, **transperineal biopsy (lower sepsis)**, Black men/BRCA earlier. ✓
- **uro-localized-prostate-cancer** — **active surveillance for low-risk**, definitive RP or RT +/- ADT for intermediate/high, Grade Group/D'Amico/NCCN, ADT for high/unfavorable-intermediate. ✓
- **uro-testicular-cancer** — radical inguinal orchiectomy (never transscrotal), seminoma I surveillance, NSGCT surveillance/RPLND, BEP, AFP not in pure seminoma, sperm banking. ✓
- **uro-hypogonadism-testosterone** — confirm 2 AM testosterone + symptoms, no exogenous T if fertility desired (hCG/clomiphene), erythrocytosis monitoring, secondary causes (prolactinoma/opioids/obesity/hemochromatosis). ✓

## Running tally (uro)
- Checked: 15 high-yield claim-areas | CONFIRMED: 13 | ENHANCEMENTS applied: 2 (both bladder cancer immunotherapy/ADC) | CORRECTION: 0 | UNVERIFIED: 0
- **Content is current** on prostate (intensification + PSMA + PARP), RCC (IO combos), BPH devices, OAB (vibegron), and the emergencies. The two enhancements bring the bladder-cancer entries up to the 2023-2024 immunotherapy/ADC standard (the biggest recent shift in uro-oncology).

## Next (uro)
- Remaining ~45 = anatomical/surgical/reconstruction/pediatric entries (stents/nephrostomy, upper-tract urothelial, adrenal/pheo, retroperitoneal, trauma [renal/bladder/ureteral/urethral], strictures/urethroplasty, fistula, neurogenic bladder, SUI/prolapse, IC/BPS, pediatric GU [VUR/cryptorchidism/hypospadias/PUV], transplant, infections, scrotal masses, diversion) - mostly stable technical content, lower change-risk; lighter/attending pass.
