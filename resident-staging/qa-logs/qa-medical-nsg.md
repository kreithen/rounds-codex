# Neurosurgery — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive trial/guideline/technology claims + emergencies checked vs current guidelines/landmark trials; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: nsg (EXTENDED schema: +tech, +after). 58 entries. **PRIOR-SESSION build.**

**Assessment up front:** the most current build audited so far. Already had MMA embolization (chronic SDH), WHO 2021 glioma molecular classification + TTFields + 5-ALA, "triple-H is out" DCI management, CREST carotid, Patchell/separation surgery/SINS spinal mets, ISAT/PHASES aneurysm, BTF tiered TBI. One very recent trial added (ENRICH 2024).

---

## Batch 1 — 2026-07-18 (high-yield: neurotrauma/vascular/tumor/spine)

### nsg-ich  ✅ ENHANCEMENT APPLIED
- **Gap:** entry had STICH/STICH II (restraint) + MISTIE III (mortality benefit, no functional benefit) but not the newest positive trial.
- **Added** (tx + pearl, web-verified): **ENRICH (2024)** - early (<24h) minimally invasive trans-sulcal parafascicular evacuation improved 180-day functional outcomes vs medical management, **benefit driven by LOBAR hemorrhages** - the first positive functional-outcome surgical trial after decades of negative/equivocal results.
- **Source (web-verified):** Pradilla et al., NEJM 2024;390:1277-1289 (ENRICH, NCT02880878). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs guidelines/trials; no change):
- **nsg-sdh** — acute SDH BTF criteria (>10mm or MLS >5mm), chronic SDH burr-hole drainage + correct anticoagulation, **MMA embolization (EMBOLISE/MAGIC-MT era) reducing recurrence**. ✓ (the biggest recent neurosurgery change, already present)
- **nsg-glioma** — maximal safe resection, **Stupp protocol + tumor-treating fields**, **molecular markers define diagnosis (IDH, 1p/19q, MGMT)** [WHO 2021], MGMT predictive, **5-ALA** fluorescence. ✓
- **nsg-sci** — MAP 85-90 x5-7d, **high-dose methylprednisolone controversial/not routine (NASCIS harms)**, **early decompression <24h (STASCIS)**, neurogenic shock (hypotension + bradycardia), central cord. ✓
- **nsg-asah** — secure early (<24-72h) clip/coil, strict BP pre-securing, **nimodipine x21d (improves outcome, not angiographic spasm)**, EVD, CT-then-LP for xanthochromia, cerebral salt wasting. ✓
- **nsg-tbi-severe** — BTF tiered therapy, **prophylactic hyperventilation worsens outcome (temporizing bridge only)**, seizure prophylaxis x7d (early only), **no steroids (CRASH)**, hypotension/hypoxia the preventable insults. ✓
- **nsg-brain-mets** — prognosis-driven, **SRS for limited mets (spares cognition)**, **WBRT retreating from routine (QUARTZ)**, cavity SRS after resection. ✓ (matches radonc/HA-WBRT approach)
- **nsg-aneurysm** — **ISAT (coiling better 1-yr independent survival for suitable aneurysms, higher retreatment)**, selection (MCA/wide-neck clip; posterior/elderly coil), **PHASES** for unruptured, flow diverters commit to DAPT. ✓
- **nsg-vasospasm** — nimodipine, **maintain EUVOLEMIA (triple-H abandoned)**, symptomatic DCI induced hypertension, refractory endovascular rescue (IA vasodilators/angioplasty), treat exam not Doppler. ✓
- **nsg-carotid** — best medical therapy for all (narrowing the surgical margin), revascularize **symptomatic <2 weeks**, **CEA vs CAS (CREST: more periprocedural stroke with CAS, more MI with CEA)**, hyperperfusion syndrome, neck hematoma airway emergency. ✓
- **nsg-pituitary** — **PROLACTINOMA medical-first (cabergoline)**, transsphenoidal for nonfunctioning mass effect/GH/ACTH, apoplexy urgent decompression + stress steroids, **check prolactin + hook effect** before operating, post-op DI-then-SIADH. ✓
- **nsg-trigeminal-neuralgia** — **carbamazepine/oxcarbazepine first-line**, refractory -> **MVD (most durable, treats cause)**, ablative rhizotomy for poor candidates/MS, young/bilateral/sensory-loss -> image for MS/tumor. ✓
- **nsg-spinal-tumors** — **dexamethasone immediately (MESCC)**, **Patchell (decompression then RT > RT alone)**, radiosensitive tumors RT alone, **separation surgery + SRS**, ambulatory status the key predictor, **SINS** stability. ✓
- **nsg-spinal-abscess** — surgical decompression + drainage for deficit/progression + antibiotics (vancomycin + gram-neg after cultures), incomplete triad + risk factor -> urgent MRI, **image whole spine (skip lesions)**. ✓
- **nsg-cervical-myelopathy** — **surgical decompression for moderate-severe/progressive** (halts progression), mild stable observe (mJOA), Hoffmann/clumsy hands/gait, T2 signal argues against waiting, C5 palsy transient. ✓
- **nsg-iih** — **weight loss disease-modifying (bariatric for severe)**, acetazolamide first-line, **vision (not headache) is the emergency** (serial fields/OCT), MRV for venous sinus thrombosis, procedures (fenestration/shunt/stent) for fulminant. ✓

## Running tally (nsg)
- Checked: 16 high-yield claim-areas | CONFIRMED: 15 | ENHANCEMENT applied: 1 (ENRICH minimally invasive lobar ICH evacuation) | CORRECTION: 0 | UNVERIFIED: 0
- **The most current build audited so far.** MMA embolization, WHO 2021 glioma classification, triple-H-is-out DCI, CREST, cabergoline-first prolactinoma, Patchell/separation surgery/SINS, weight-loss-modifying IIH all present. Only the newest trial (ENRICH 2024) was missing - now added.

## Next (nsg)
- Remaining ~42 = neurotrauma (EDH, contusion, skull fracture, ICP/herniation/decompressive craniectomy, EVD, brain death, concussion), vascular (AVM, cavernoma, dAVF, moyamoya), tumor (meningioma, vestibular schwannoma, skull base, CSF leak, intraventricular/pineal, peds posterior fossa, awake craniotomy, SRS essentials), spine degenerative/trauma (cervical radiculopathy/ACDF, lumbar disc/stenosis, spondylolisthesis, cauda equina, c-spine/TL fractures, vertebral augmentation, spinal AVM), CSF/hydrocephalus (shunt/malfunction/ETV, Chiari, iNPH, colloid cyst), peds (myelomeningocele, tethered cord, craniosynostosis), functional (DBS, epilepsy surgery, baclofen pump), peripheral nerve, brain abscess - mostly stable procedural content, lower change-risk; lighter/attending pass.
