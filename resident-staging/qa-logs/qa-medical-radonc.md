# Radiation Oncology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive fractionation/regimen + trial-citation claims checked vs current standards; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: radonc (BASE schema). 60 entries. **NEWER build (not yet live).**

**Assessment up front:** this build is *exceptionally current* on the currency-sensitive material — dose/fractionation schemes and trial citations are correct throughout. Only one true practice-change gap found (cervix immunotherapy), now added.

---

## Batch 1 — 2026-07-18 (high-yield: fractionation regimens + trial-driven standards)

### radonc-cervix  ✅ ENHANCEMENT APPLIED
- **Gap:** entry had the chemoRT + irreplaceable-brachytherapy backbone but not the 2024 immunotherapy addition.
- **Added** (tx + pearl): for **high-risk locally advanced disease (FIGO 2014 III-IVA, or node-positive IB2-IIB)**, add **pembrolizumab to concurrent chemoRT then pembrolizumab maintenance** — improves PFS and OS (**KEYNOTE-A18; FDA-approved Jan 12, 2024**), the first practice change in LACC in >20 years.
- **Source (web-verified):** KEYNOTE-A18 (ENGOT-cx11/GOG-3047), Lancet 2024; FDA approval Jan 2024; OS HR ~0.73.
- **Action:** APPLIED to res-radonc.js; master regenerated + re-verified **1308/0-errors**; KEYNOTE-A18 present.

### CONFIRMED current (fractionation/regimen + trial citations all correct; no change):
- **radonc-breast-early-hypofx** — hypofx 40Gy/15 or 42.5Gy/16 (START/Canadian), ultra-hypofx **26Gy/5 (FAST-Forward)**, boost 10-16Gy, DIBH/prone heart-sparing, **RT omission in older ER+ node-neg on endocrine (CALGB 9343/PRIME II)**. ✓
- **radonc-prostate-ebrt** — dose escalation 78-80Gy, moderate hypofx 60Gy/20, **SBRT 36.25Gy/5 (HYPO-RT-PC/PACE-B)**, ADT by risk (none/4-6mo/18-36mo), pelvic nodes (POP-RT), low a/b ~1.5, **PSMA PET** staging. ✓
- **radonc-lung-sbrt** — peripheral **54Gy/3** (>90% LC), central risk-adapted 50Gy/5 or 60Gy/8 (avoid single/3-fx centrally), motion management + IGRT. ✓
- **radonc-bone-mets-palliation** — **single-fraction 8Gy = multi-fraction** for pain (higher retreatment), 30Gy/10 for weight-bearing/soft-tissue, SBRT for oligomets/reRT, Mirels, bone-modifying agents. ✓
- **radonc-brain-metastases** — **SRS preferred for limited mets** (spares cognition), WBRT for diffuse (30Gy/10 or 20Gy/5), **HA-WBRT + memantine (NRG CC001)**, resect large + cavity SRS, omit WBRT after SRS (intracranial control not survival, worse cognition). ✓
- **radonc-glioblastoma** — **Stupp: resection -> 60Gy/30 + concurrent daily TMZ -> adjuvant TMZ + TTFields**; WHO 2021 (IDH-wildtype defines GBM, MGMT predicts TMZ benefit); **elderly hypofx 40Gy/15 + TMZ (Perry)**; FLAIR-guided ~2cm CTV. ✓
- **radonc-rectal** — **TNT standard (RAPIDO, PRODIGE 23)**, long-course 50.4Gy/28 + capecitabine or short-course 25Gy/5, TME or **watch-and-wait (OPRA)**, MRI CRM. ✓
- **radonc-oropharynx-hpv** — early single-modality; LA definitive chemoRT 70Gy/35 + high-dose cisplatin; **do NOT substitute cetuximab for cisplatin (RTOG 1016/De-ESCALaTE)**; HPV/p16 downstaged AJCC; IMRT organ-sparing. ✓
- **radonc-cervix** (backbone) — weekly cisplatin chemoRT ~45Gy + **irreplaceable brachytherapy** to ~80-85+ EQD2, complete <=8 weeks, IGABT (EMBRACE/GEC-ESTRO), PET-guided para-aortic extension. ✓ (+ KEYNOTE-A18 added above)
- **radonc-anal** — **Nigro** (5-FU + mitomycin-C + RT), IMRT 45-59Gy (**RTOG 0529**), allow months for regression, APR salvage-only, HPV/HIV. ✓
- **radonc-sclc-pci** — LS concurrent chemoRT, **45Gy BID (Turrisi)** + platinum/etoposide, ES chemo + immunotherapy + consolidative thoracic RT, **PCI ~25Gy/10**, paraneoplastic (SIADH/LEMS/ectopic ACTH). ✓
- **radonc-endometrial** — HIR **vaginal cuff brachy alone (PORTEC-2)**, high-risk pelvic EBRT + **chemo (PORTEC-3, p53-abnormal)**, molecular classification (POLE/MMR/p53). ✓
- **radonc-dcis-pbi** — BCS + whole-breast RT (hypofx), endocrine for ER+ DCIS, **APBI for ASTRO/GEC-ESTRO "suitable" low-risk**, omit RT in very-low-risk (SDM). ✓
- **radonc-soft-tissue-sarcoma** — **preop 50Gy (more wound complications, less late fibrosis — NCIC SR2)** vs postop 60-66Gy, limb-sparing + RT = amputation, retroperitoneal preop (STRASS), biopsy along resection axis. ✓

## Running tally (radonc)
- Checked: 14 high-yield claim-areas | CONFIRMED: 13 | ENHANCEMENT applied: 1 (KEYNOTE-A18 cervix) | CORRECTION: 0 | UNVERIFIED: 0
- **Impressively current** — every fractionation scheme and trial citation checked was correct (FAST-Forward, PACE-B, NRG CC001, Stupp/WHO 2021, RAPIDO/PRODIGE 23/OPRA, RTOG 1016/0529, PORTEC-2/-3, NCIC SR2/STRASS). The one enhancement adds the newest curative-intent practice change (cervix immunotherapy).

## Emerging developments NOT yet reflected (optional future additions, not corrections):
- Breast: **LUMINA** (2023) prospective RT-omission in luminal-A (entry already cites CALGB 9343/PRIME II — adequate).
- LS-SCLC: **ADRIATIC** (durvalumab consolidation, 2024).
- These are recent/evolving; the entries reflect established standards correctly.

## Next (radonc)
- Remaining ~46 = physics/radiobiology fundamentals (timeless), other disease sites (nasopharynx/larynx/esophageal/gastric/bladder/seminoma/Hodgkin/NHL/peds/skin/Merkel), techniques (brachy physics, particle therapy, radiopharmaceuticals incl. Lu-177/Ra-223), toxicity/late-effects, emergencies, safety — mostly stable; lighter/attending pass.
