# Orthopedic Surgery — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive guideline/pharmacotherapy claims + emergencies checked vs current guidelines/landmark trials; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: ortho (EXTENDED schema: +tech, +after). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** very current, especially for a largely-stable procedural specialty — osteoporosis already had romosozumab + anabolic-first + denosumab-rebound; open fractures had the antibiotics-over-rigid-6h nuance; ACL/Achilles/distal-radius reflect recent trials; knee OA correctly de-supports arthroscopy/viscosupplementation. One worthwhile currency addition (post-arthroplasty VTE prophylaxis).

---

## Batch 1 — 2026-07-18 (high-yield: emergencies + pharmacotherapy + arthroplasty/sports)

### ortho-hip-oa-tha  ✅ ENHANCEMENT APPLIED
- **Gap:** after[] mentioned "VTE prophylaxis" generically but not the recent shift.
- **Added** (pearl, deliberately nuanced — web-verified): **VTE prophylaxis after arthroplasty is risk-stratified — low-dose aspirin is now a widely-used, guideline-endorsed (ICM 2022/AAOS) option for standard-risk patients alongside LMWH/DOACs, BUT guidelines conflict (CRISTAL 2022 favored LMWH; PEPPER pending)** — individualize by bleeding/VTE risk + early mobilization + mechanical prophylaxis.
- **Rationale:** genuinely contested area — 2022 ICM/AAOS endorse aspirin and its use rose sharply (~0.4%->61% by 2023), but CRISTAL (JAMA 2022) found aspirin inferior to enoxaparin for symptomatic VTE; PEPPER (~20,000 pts) pending. Stated with that nuance rather than a flat "aspirin recommended."
- **Action:** APPLIED to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs guidelines/trials; no change):
- **ortho-osteoporosis-fragility** — post-fracture treat bone (Ca/vit D + **antiresorptives [bisphosphonates/denosumab] or anabolics [teriparatide/abaloparatide/romosozumab] for high-risk/severe]**), **anabolic-first for very-high-risk**, **don't stop denosumab abruptly (rebound)**, fracture liaison service. ✓ (fully current)
- **ortho-open-fractures** — **early IV antibiotics = top priority** (cephalosporin +/- gram-neg by grade), urgent I&D, **debridement prompt but not rigid 6h (modern evidence)**, Gustilo grade (IIIB flap/IIIC arterial), tetanus. ✓
- **ortho-hip-fractures** — **early surgery ~24-48h + ortho-geriatric co-management** (mortality benefit), femoral neck (nondisplaced/young fixation, displaced older arthroplasty), intertrochanteric (SHS/cephalomedullary nail), occult fracture MRI, treat osteoporosis. ✓
- **ortho-pji-arthroplasty-complications** — acute PJI **DAIR** (+ modular exchange), chronic PJI **two-stage revision** (spacer), painful arthroplasty = infected until proven (ESR/CRP -> aspiration), hold antibiotics before aspiration, Vancouver. ✓
- **ortho-osteomyelitis** — organism-directed prolonged antibiotics, surgical debridement (sequestrum), **bone biopsy/culture before antibiotics**, source control (revascularization/offloading), Salmonella (sickle cell)/Pseudomonas (nail puncture). ✓ *(IM-osteo carries the OVIVA oral-therapy nuance; not duplicated here)*
- **ortho-septic-arthritis** — **surgical drainage/washout + IV antibiotics after cultures**, aspirate before antibiotics, crystals don't exclude infection, Staph aureus/gonococcal. ✓ (matches EM)
- **ortho-compartment-syndrome** — immediate decompression (split casts, **limb at HEART LEVEL not elevated**), emergent fasciotomy, **pain out of proportion/passive stretch early (5 Ps late)**, delta pressure <=30 mmHg, tibial shaft classic. ✓
- **ortho-cauda-equina** — emergent decompression (earlier = better bladder/bowel recovery), bilateral sciatica + saddle anesthesia + retention, PVR/anal tone objective red flags, disc/abscess/hematoma/tumor. ✓
- **ortho-acl** — **nonoperative rehab reasonable for lower-demand** patients, reconstruction for young/active/instability, neuromuscular prevention (female athletes), Lachman, criteria-based RTS ~9-12mo. ✓
- **ortho-achilles** — rupture: **both functional bracing and surgery good** (modern rehab narrowed the gap; surgery lowers re-rupture, adds wound risk); tendinopathy **eccentric loading** (no intratendinous steroid); Thompson test; fluoroquinolone/steroid risk. ✓
- **ortho-rotator-cuff** — nonoperative (PT + subacromial injection), repair acute traumatic/young/failed conservative, **reverse TSA for cuff-tear arthropathy** (or SCR/tendon transfer), Jobe/drop-arm. ✓
- **ortho-distal-radius** — closed reduction/casting for stable (older lower-demand tolerate residual deformity), operative for unstable, **acute carpal tunnel -> urgent release**, Colles, fragility-fracture = osteoporosis workup. ✓
- **ortho-knee-oa-tka** — conservative (weight loss/exercise strong evidence), TKA for end-stage / uni for isolated compartment, weight-bearing films, **arthroscopy/viscosupplementation NOT supported for degenerative knee**, early motion. ✓
- **ortho-scfe** — non-weight-bearing immediately + **in situ pinning** (avoid forceful reduction -> AVN), prophylactic contralateral fixation in high-risk, overweight adolescent with knee/hip pain, frog-leg lateral both hips. ✓

## Running tally (ortho)
- Checked: 15 high-yield claim-areas | CONFIRMED: 14 | ENHANCEMENT applied: 1 (THA VTE-prophylaxis aspirin nuance) | CORRECTION: 0 | UNVERIFIED: 0
- **Very current** — osteoporosis agents, open-fracture/hip-fracture management, PJI, ACL/Achilles/distal-radius (trial-reflective), knee-OA de-support of arthroscopy/viscosupplementation all correct. The one addition captures the contested post-arthroplasty VTE-prophylaxis landscape accurately.

## Next (ortho)
- Remaining ~45 = fracture-specific entries (clavicle through pelvic/acetabular, peds physeal/supracondylar), pediatric hip/spine/foot (DDH/Perthes/clubfoot/scoliosis), sports/soft-tissue (meniscus, multiligament, patellofemoral, cartilage, shoulder instability, carpal tunnel, hand conditions, ankle sprains, foot disorders, FAI), spine (lumbar disc, stenosis, cervical myelopathy, spinal trauma), tumors (bone tumors, sarcoma/mets), and principles (fracture healing, polytrauma/damage-control, nonunion/malunion, stress fractures, amputations, nerve injuries, CP) - stable procedural/anatomical content, lower change-risk; lighter/attending pass.
