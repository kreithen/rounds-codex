# Physical Medicine & Rehabilitation (PM&R) — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive technique/technology/guideline claims + emergencies checked vs current evidence/FDA clearances; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: pmr (BASE schema). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** very current for a largely stable functional specialty. Core rehab frameworks all correct (ASIA, CIMT, botulinum toxin/ITB, active-rehab concussion, Budapest CRPS, Braden/NPIAP, CDT, amantadine DOC, CIC). Added two genuine recent technology/technique advances.

---

## Batch 1 — 2026-07-18 (high-yield: neurorehab + amputation + pain + SCI complications)

### 2 ENHANCEMENTS APPLIED (recent rehab technology/technique)
- **pmr-stroke-rehab** ✅ — had CIMT + task-specific/repetitive training + dysphagia screening (all current) but not the newest adjuncts. **Added** (pearl, web-verified): **high-intensity task-specific training** and **paired vagus nerve stimulation (Vivistim, FDA-approved 2021 via the VNS-REHAB trial)** for moderate-severe chronic upper-limb impairment.
- **pmr-amputation-prosthetics** ✅ — had K-levels/knee-preservation/contracture prevention (current) but not the surgical advances. **Added** (pearl): **targeted muscle reinnervation (and osseointegration)** - TMR reduces neuroma/phantom pain and improves myoelectric prosthetic control.
- **Source (web-verified):** VNS-REHAB (Dawson et al., Lancet 2021; Vivistim FDA Aug 2021, 47% vs 24% meaningful FMA-UE responders). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs current evidence/guidelines; no change):
- **pmr-spasticity** — stepwise: remove noxious triggers -> stretching/positioning/therapy -> oral agents (baclofen/tizanidine/dantrolene-peripheral) -> **focal botulinum toxin + motor-point blocks** -> **intrathecal baclofen** (severe generalized); Modified Ashworth; treat only when problematic. ✓
- **pmr-sports-concussion** — **brief RELATIVE rest then graduated symptom-limited return-to-play** + clearance before contact, **return-to-learn precedes return-to-play**, **avoid prolonged strict rest**, targeted rehab (vestibular/cervical/cognitive), no same-day return, second-impact syndrome. ✓ (fully modern)
- **pmr-autonomic-dysreflexia** — **emergency: sit up, loosen clothing, find/remove trigger (drain bladder first)** + rapid antihypertensive if persistent, SCI at/above T6, noxious stimulus below lesion -> hypertensive emergency + headache + reflex bradycardia, bladder distension #1 trigger. ✓
- **pmr-chronic-pain** — **multimodal biopsychosocial** (active exercise/PT, CBT, non-opioid pharmacology, interventional), **minimize opioids** (limited benefit/harm in chronic non-cancer pain), target FUNCTION, nociplastic pain, avoid passive/procedure-only trap. ✓
- **pmr-phantom-limb** — **mirror therapy, graded motor imagery**, desensitization, neuropathic agents, TENS; residual limb pain (neuroma/Tinel/prosthetic fit); perioperative analgesia may reduce phantom pain; reassure non-painful phantom sensation. ✓
- **pmr-sci-classification** — **ASIA exam** (sacral sparing = incomplete; ASIA A complete), central cord (most common incomplete), anterior cord (worst), Brown-Sequard, functional milestones (C6 tenodesis, C7 transfers), complication prevention. ✓
- **pmr-crps** — **Budapest criteria (clinical diagnosis)**, EARLY mobilization + functional restoration/desensitization/mirror therapy (immobilization worsens), neuropathic agents/bisphosphonates/sympathetic blocks, Type I vs II. ✓
- **pmr-pressure-injuries** — prevention (reposition ~q2h, redistribution surfaces, moisture/nutrition), **NPIAP staging (1 non-blanchable erythema -> 4 muscle/bone; unstageable under eschar)**, **Braden scale**, sacrum/heels/ischium, flaps for advanced. ✓
- **pmr-cardiac-rehab** — supervised progressive exercise + risk-factor modification, Phase I/II/III, **reduces mortality/readmissions after MI/revascularization and in HF (underutilized - refer!)**, METs, hold for unstable angina/decompensated HF/severe symptomatic AS. ✓
- **pmr-lymphedema** — **complete decongestive therapy (MLD + compression + exercise + skin care)**, prevent cellulitis, weight management, secondary (cancer node dissection/RT) most common, **Stemmer sign**, lifelong. ✓ (consistent w/ plastics-lymphedema)
- **pmr-disorders-consciousness** — **amantadine accelerates recovery in severe traumatic DOC**, traumatic > anoxic prognosis, **avoid premature prognostication** (recovery over months), **UWS/vegetative (arousal without awareness) vs MCS (inconsistent reproducible awareness)**, locked-in is NOT a DOC. ✓ (reflects 2018 AAN/ACRM guideline)
- **pmr-neurogenic-bladder-bowel** — **CIC mainstay**, anticholinergics/timed voiding, dyssynergia management, bowel program (reflexic vs areflexic), **protect upper tracts (priority)**, UMN vs LMN, UTI surveillance. ✓
- **pmr-electrodiagnostics** — guides dx/prognosis (not treatment), **timing (<2-3wk misses denervation)**, NCS (axonal low-amplitude vs demyelinating slowed/prolonged latency), needle EMG (fibs/PSWs ~2-3wk, large polyphasic = chronic reinnervation), localizes + dates, paraspinal denervation = radiculopathy. ✓

## Running tally (pmr)
- Checked: 15 high-yield claim-areas | CONFIRMED: 13 | ENHANCEMENTS applied: 2 (VNS-paired stroke rehab; TMR/osseointegration amputation) | CORRECTION: 0 | UNVERIFIED: 0
- **Very current for a stable functional specialty.** Every core rehab framework was correct; the two additions are genuine recent technology/technique advances (paired VNS, TMR).

## Next (pmr)
- Remaining ~45 = rehab principles/assessment (functional assessment, gait analysis, exercise/modalities/manual medicine), neuro-rehab (TBI, MS, Parkinson, neuromuscular/GBS-ALS, dysphagia, aphasia/cognitive), MSK/sports (LBP/radiculopathy, cervical, shoulder, knee/hip, tendinopathy, OA/inflammatory-arthritis rehab, overuse injuries, osteoporosis/falls, degenerative spine), neuromuscular EDX-adjacent (carpal tunnel/entrapment, peripheral neuropathy, plexopathy), pain (myofascial/fibromyalgia, interventional procedures), devices/mobility (orthotics, wheelchair/seating), peds (peds rehab/CP, spina bifida), other (pulmonary/cancer/burn rehab, VTE/immobility, heterotopic ossification, vestibular rehab, deconditioning, impairment rating, geriatric rehab, post-ICU syndrome, pelvic floor, contracture, sialorrhea, adaptive sports, occupational rehab, autonomic/orthostatic) - mostly stable functional content, lower change-risk; lighter/attending pass.
