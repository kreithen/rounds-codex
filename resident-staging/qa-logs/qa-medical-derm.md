# Dermatology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive systemic/biologic/topical-agent claims + emergencies checked vs current guidelines/FDA approvals; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: derm (BASE schema). 50 entries. **PRIOR-SESSION build.**

**Refs note (cosmetic):** derm cites real sources (StatPearls NBK, AAD, MedlinePlus, NCCN, CDC, IDSA); some are society landing pages rather than deep links — a citation-polish item, not content. (This is the "placeholder refs" legacy note — verified as real sources on generic paths.)

**Assessment up front:** remarkably current for a prior-session build — it already incorporates most of the recent agents. Two narrow gaps found and fixed.

---

## Batch 1 — 2026-07-18 (high-yield: immune-mediated + skin cancers + emergencies)

### 2 ENHANCEMENTS APPLIED
- **derm-psoriasis** ✅ — entry had methotrexate + apremilast + full biologic classes (TNF, IL-17 [secukinumab/ixekizumab], IL-23 [guselkumab/risankizumab]) with the IBD/IL-17 caveat, but not the newest oral agent. **Added: oral TYK2 inhibitor deucravacitinib** (Sotyktu, FDA 2022) to the systemics list.
- **derm-melanoma-nevi** ✅ — entry had WLE/SLNB + advanced/metastatic ICI + BRAF/MEK + **adjuvant** immunotherapy, but not neoadjuvant. **Added: NEOADJUVANT immunotherapy now standard for macroscopic stage III (SWOG S1801, NADINA)** — consistent with the plastics-melanoma enhancement.
- **Action:** APPLIED to transfer/res-resident-all.js (derm source); master regenerated + re-verified **1308/0-errors**; deucravacitinib + SWOG S1801 present.

### CONFIRMED current (already incorporating recent agents; no change):
- **derm-atopic-dermatitis** — emollients/barrier, topical anti-inflammatories, escalation: **dupilumab (IL-4/13 first-line biologic) + oral JAK inhibitors (upadacitinib/abrocitinib)**; eczema herpeticum, bleach baths. ✓
- **derm-vitiligo** — topical steroids/calcineurin inhibitors, **topical ruxolitinib cream (FDA-approved, first repigmentation therapy)**, nbUVB, grafting, TSH screening. ✓ (Opzelura 2022)
- **derm-alopecia-areata** — intralesional steroids (localized), **oral JAK inhibitors (baricitinib, ritlecitinib) FDA-approved for severe AA**, exclamation-mark hairs, rule out tinea. ✓
- **derm-hidradenitis-suppurativa** — smoking/weight, clindamycin/tetracyclines/clindamycin-rifampin, hormonal, **adalimumab (TNF) + secukinumab (IL-17)** biologics, deroofing/WLE. ✓
- **derm-pemphigus-vulgaris** — **RITUXIMAB now first-line** (with steroids, durable remission), desmoglein titers, DIF fishnet, Nikolsky. ✓
- **derm-bcc** — excision/Mohs, superficial (imiquimod/5-FU/C&E/PDT), advanced/metastatic **hedgehog inhibitors (vismodegib/sonidegib) + cemiplimab**. ✓
- **derm-scc-ak** — AK field therapy (cryo/5-FU/imiquimod/**tirbanibulin**/PDT), excision/Mohs, advanced/metastatic **cemiplimab or pembrolizumab**, transplant (reduce immunosuppression + acitretin). ✓
- **derm-sjs-ten** — stop culprit early, burn unit/ICU, **ophthalmology day one**, cyclosporine/etanercept best-supported, IVIG/steroids debated. ✓
- **derm-dress** — stop culprit + avoid aromatic-anticonvulsant cross-reaction, steroids 0.5-1mg/kg slow taper, **delayed thyroid monitoring 6-12wk**, HLA screening (allopurinol). ✓
- **derm-urticaria-angioedema** — 2nd-gen H1 up-titrated to 4x + add-on (omalizumab for refractory), IM epinephrine for anaphylaxis, **bradykinin angioedema (stop ACEi, C1 inhibitor/HAE therapy)**, urticarial vasculitis clue (>24h). ✓
- **derm-acne** — topical retinoid backbone + BPO, oral antibiotics limited course (never monotherapy; pair with retinoid+BPO), isotretinoin (iPLEDGE/teratogen). ✓
- **derm-bullous-pemphigoid** — localized **high-potency topical clobetasol first-line** (= systemic efficacy, less toxicity), steroid-sparing (doxycycline+nicotinamide/azathioprine/MMF), perilesional DIF, pre-bullous itch. ✓
- **derm-ctcl** — stage-driven, skin-directed (topical steroids/mechlorethamine/bexarotene/phototherapy), advanced (TSEB, retinoids, interferon, HDAC inhibitors, **brentuximab vedotin, mogamulizumab**). ✓
- **derm-cutaneous-lupus** — photoprotection, **hydroxychloroquine first-line** (retinopathy screening), refractory (quinacrine/MTX/MMF/thalidomide/**belimumab**), DLE early/aggressive, SCLE drug-induced (HCTZ/terbinafine). ✓
- **derm-scabies-lice** — permethrin 5% + repeat in 1wk, oral ivermectin, treat all contacts + decontaminate, head lice options, post-treatment itch expected. ✓

## Running tally (derm)
- Checked: 17 high-yield claim-areas | CONFIRMED: 15 | ENHANCEMENTS applied: 2 (psoriasis deucravacitinib; melanoma neoadjuvant IO) | CORRECTION: 0 | UNVERIFIED: 0
- **Excellent currency for a prior-session build** — already had ruxolitinib cream (vitiligo), JAK inhibitors (AA), rituximab (pemphigus), adalimumab/secukinumab (HS), hedgehog/cemiplimab (skin cancers), brentuximab/mogamulizumab (CTCL), belimumab (CLE), tirbanibulin (AK), cyclosporine/etanercept (SJS-TEN). Two narrow oral-agent/indication gaps fixed.

## Next (derm)
- Remaining ~33 = common conditions (contact/seborrheic dermatitis, rosacea, infections [impetigo/HSV/tinea/candida], other bullous/papulosquamous [DH/LP/PR/GA], benign tumors [DF/SK/cysts], pigmentation [melasma/PIH], androgenetic/telogen, vascular/panniculitis [PG/EN/vasculitis], stasis/pressure, photosensitivity, nails, pediatric exanthems, procedures) - mostly stable diagnostic/treatment content, lower change-risk; lighter/attending pass.
