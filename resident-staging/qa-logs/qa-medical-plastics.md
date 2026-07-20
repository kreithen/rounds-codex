# Plastic & Reconstructive Surgery — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive oncologic/systemic-therapy + evolving-standard claims checked vs current guidelines/trials; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: plastics (EXTENDED schema: +tech, +after). 60 entries. **NEWER build (not yet live).** Mostly technique/anatomy (stable); currency focus on the oncologic + evolving-standard entries.

---

## Batch 1 — 2026-07-18 (high-yield: oncologic + evolving-standard entries)

### plastics-melanoma  ✅ ENHANCEMENT APPLIED
- **Gap:** entry covered WLE margins, SLNB, and advanced/metastatic immunotherapy + BRAF/MEK, but NOT the resectable-disease setting.
- **Added** (tx + pearl): **adjuvant anti-PD-1** (nivolumab/pembrolizumab) for resected stage III (and IIB/IIC), and **neoadjuvant immunotherapy now standard for macroscopic stage III** — **SWOG S1801** (neoadj+adj pembrolizumab, 2-yr EFS 72% vs 49%) and **NADINA** (neoadj ipilimumab+nivolumab, 12-mo EFS ~84% vs 57%), with response-driven adjuvant therapy.
- **Source (web-verified):** SWOG S1801 (NEJM 2023); NADINA (NEJM 2024) — "new standard of care for macroscopic stage III melanoma."
- **Action:** APPLIED to res-plastics.js; master regenerated + re-verified **1308/0-errors**; SWOG S1801 + NADINA present.

### CONFIRMED current (verified vs guidelines/FDA; no change):
- **plastics-nonmelanoma-skin-cancer** — excision/Mohs (highest cure, facial/high-risk), topical/cryo/curettage/RT for low-risk, **advanced/unresectable: hedgehog inhibitors (BCC) + cemiplimab (advanced cSCC)**, subunit reconstruction, field cancerization/transplant SCCs. ✓
- **plastics-breast-augmentation-alcl** — textured implants linked to **BIA-ALCL** (T-cell lymphoma of capsule), late seroma -> aspirate + CD30/cytology, en bloc capsulectomy for localized (excellent early prognosis), silent silicone rupture (MRI/US surveillance). ✓
- **plastics-acute-burn-management** — Parkland ~4mL/kg/%TBSA LR as a STARTING point titrated to UOP (avoid fluid creep), early airway, escharotomy, TBSA (palm ~1%), CO/cyanide. ✓ (consistent w/ EM burns)
- **plastics-vascular-anomalies** — ISSVA (tumor vs malformation; hemangioma GLUT1+/involutes), **propranolol first-line for problematic infantile hemangioma**, pulsed-dye laser (port-wine), sclerotherapy + **sirolimus** (complicated malformations), AVM embolize-then-resect (never ligate feeder), PHACE/Sturge-Weber. ✓
- **plastics-lymphedema** — complete decongestive therapy mainstay, **physiologic surgery (LVA, VLNT)** for early fluid-predominant, excisional/liposuction for fibrofatty, Stemmer sign, lymphoscintigraphy + **ICG mapping**, cellulitis prevention. ✓
- **plastics-implant-breast-reconstruction** — two-stage expander->implant / direct-to-implant, **prepectoral + ADM increasingly standard** (avoids animation deformity), radiation is dominant failure risk (favors autologous), **ICG angiography** for flap perfusion. ✓
- **plastics-autologous-breast-reconstruction** — **DIEP gold standard** (spares rectus vs TRAM), tolerates radiation, **preoperative CT/MR angiography** perforator mapping, flap monitoring first 48-72h. ✓
- **plastics-flexor-tendon-injuries** — core suture (4-6 strand) + epitendinous, **preserve A2/A4 pulleys**, early controlled motion, jersey finger (FDP avulsion) repair to bone, zone II, FDS testing. ✓
- **plastics-replantation-revascularization** — transport (saline-moist gauze/sealed bag/on ice, not direct/submerged), repair sequence (bone->extensor->flexor->ARTERY->nerve->VEIN->skin), absolute indications (thumb/multiple digits/child/hand-forearm), leeches (Aeromonas). ✓
- **plastics-cleft-lip** — feeding, NAM/taping, **rule of 10s**, orbicularis oris reapproximation, staged alveolar grafting, syndromes (Van der Woude, 22q11), cleft ear/tubes. ✓
- **plastics-free-flap-microsurgery** — first 24-72h thrombosis risk + take-back, **venous (blue/brisk refill) vs arterial (white/no refill)** compromise, Allen test/pedal arch, leeches + Aeromonas coverage. ✓
- **plastics-lower-extremity-reconstruction** — reconstructive ladder by thirds (gastrocnemius/soleus/free flap), **Gustilo IIIB needs flap**, early coverage, recipient vessels outside zone of injury, honest limb-salvage-vs-amputation. ✓
- **plastics-hand-infections** — felon/paronychia I&D, **Kanavel signs** (pyogenic flexor tenosynovitis = surgical emergency), fight bite (Eikenella, never close), amox-clav (Pasteurella/Eikenella). ✓
- **plastics-gender-affirming-surgery** — masculinizing chest (double-incision free-nipple-graft), feminizing genital (penile-inversion vaginoplasty), **WPATH multidisciplinary**, lifelong dilation, phalloplasty urethral complications, fertility/hair-removal planning before surgery. ✓

## Running tally (plastics)
- Checked: 15 high-yield claim-areas | CONFIRMED: 14 | ENHANCEMENT applied: 1 (melanoma neoadjuvant/adjuvant IO) | CORRECTION: 0 | UNVERIFIED: 0
- **Content is current and accurate.** As a largely technique/anatomy specialty, it was stable; the one currency gap (resectable-melanoma immunotherapy) is now added. NMSC systemic agents (cemiplimab/hedgehog), BIA-ALCL, propranolol/sirolimus, LVA/VLNT, prepectoral/ADM, DIEP, and WPATH GAS all already current.

## Next (plastics)
- Remaining ~45 = technique/anatomy entries (skin grafts, flap types, tissue expansion, craniofacial [cleft palate/craniosynostosis/facial fractures], ear/nasal/facial reconstruction, hand [tendon/fracture/nerve/Dupuytren/tumors/congenital], reduction/mastopexy/gynecomastia, chest/abdominal wall, burns reconstruction, pressure injuries, aesthetic [rhinoplasty/facelift/blepharoplasty/neurotoxins/liposuction/abdominoplasty]) - stable, lower change-risk; lighter/attending pass.

---
## ★ Milestone: ALL NEWER BUILDS AUDITED (uro, plastics, prev, psych, radonc + cardiology, thoracic)
The newer-build tier is complete. Pattern held throughout: narrow, edge-of-guideline gaps (a newest drug/mechanism, a newest indication) rather than errors — concentrated in oncology-adjacent content.
