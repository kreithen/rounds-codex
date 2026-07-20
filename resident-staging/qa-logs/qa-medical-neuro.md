# Neurology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive systemic/biologic/guideline claims + emergencies checked vs current guidelines/FDA approvals; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: neuro (BASE schema). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** exceptionally current for a prior-session build — already had anti-amyloid antibodies, high-efficacy MS DMTs, CGRP migraine agents, tenecteplase stroke, SMA gene therapies, and NMOSD targeted agents. The 3 gaps were all in the neuromuscular FcRn/complement-inhibitor wave, now added.

---

## Batch 1 — 2026-07-18 (high-yield: neuroimmunology/neuromuscular + stroke/epilepsy emergencies + movement/dementia)

### 3 ENHANCEMENTS APPLIED (the neuromuscular targeted-therapy wave)
- **neuro-myasthenia** ✅ — had pyridostigmine/steroids/steroid-sparing/thymectomy/IVIG-PLEX (classic approach) but not the modern targeted biologics. **Added** (tx + pearl): for refractory AChR+ generalized MG — **complement C5 inhibitors (eculizumab, ravulizumab, zilucoplan; need meningococcal vaccination)** and **FcRn inhibitors (efgartigimod, rozanolixizumab — latter also for MuSK-MG)**. Web-verified.
- **neuro-als** ✅ — "newer agents per evolving evidence" (vague). **Added:** for the ~2% with SOD1 mutations, **tofersen** (antisense oligonucleotide, genotype-targeted; Qalsody 2023).
- **neuro-cidp** ✅ — maintenance list (IVIG/steroids/steroid-sparing). **Added:** the FcRn inhibitor **efgartigimod** (ADHERE, FDA 2024) as a newer option.
- **Source (web-verified):** MG complement/FcRn landscape (eculizumab 2017, ravulizumab 2022, zilucoplan 2023, efgartigimod 2021, rozanolixizumab 2023). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (already incorporating recent agents/guidelines; no change):
- **neuro-alzheimer** — cholinesterase inhibitors + memantine, **anti-amyloid mAbs (lecanemab, donanemab) with confirmed amyloid + ARIA monitoring + APOE4 hemorrhage risk**, screen reversible causes, caregiver support. ✓ (fully current)
- **neuro-ms** — relapse steroids/PLEX, **high-efficacy DMTs (anti-CD20 ocrelizumab/ofatumumab, natalizumab, S1P modulators)**, pseudorelapse management, DIS/DIT, check NMOSD/MOGAD first. ✓
- **neuro-migraine** — acute NSAIDs/triptans + **gepants (ubrogepant, rimegepant) + ditans (lasmiditan)**, preventives by comorbidity, **CGRP therapies + botulinum toxin for chronic/refractory**, MOH. ✓
- **neuro-acute-ischemic-stroke** — alteplase <=4.5h, **tenecteplase increasingly preferred (single bolus)**, **thrombectomy to 24h (DAWN/DEFUSE-3)**, bridge-don't-choose, glucose check. ✓ (matches EM 2026)
- **neuro-sma** — **SMN2 splicing modifiers (nusinersen, risdiplam) + SMN1 gene replacement (onasemnogene abeparvovec)**, newborn screening, Kennedy disease (AR CAG), SMN2 copy number. ✓
- **neuro-nmosd-mogad** — acute steroids/PLEX, **NMOSD maintenance (rituximab, eculizumab, inebilizumab, satralizumab)**, AVOID MS DMTs, MOGAD often monophasic, AQP4/MOG + area postrema. ✓
- **neuro-status-epilepticus** — benzodiazepine first-line (**RAMPART** IM midazolam), **ESETT** (levetiracetam/fosphenytoin/valproate equivalent second-line), refractory anesthetic + cEEG, nonconvulsive status. ✓
- **neuro-bacterial-meningitis** — empiric vancomycin + 3rd-gen ceph + ampicillin (Listeria), **dexamethasone before/with first dose (pneumococcal)**, abx don't wait for LP, contact chemoprophylaxis. ✓ (matches IM)
- **neuro-gbs** — **IVIG or PLEX (not both), NO steroids**, FVC/NIF monitoring (not sat), autonomic instability, areflexia before CSF protein. ✓
- **neuro-parkinson** — levodopa/carbidopa, dopamine agonists/MAO-B (younger), motor-fluctuation management + amantadine for dyskinesia, DBS, **pimavanserin/quetiapine for psychosis (avoid typical antipsychotics/metoclopramide)**, RBD/hyposmia prodrome. ✓
- **neuro-autoimmune-encephalitis** — first-line steroids/IVIG/PLEX, second-line rituximab/cyclophosphamide, **remove tumor (ovarian teratoma in NMDAR)**, anti-LGI1 (faciobrachial dystonic seizures + hyponatremia), serum+CSF. ✓
- **neuro-huntington** — symptomatic only, **VMAT2 inhibitors (deutetrabenazine, valbenazine, tetrabenazine) for chorea** (worsen depression), CAG repeat, psychiatric/suicide burden. ✓
- **neuro-tia** — immediate secondary prevention (statin/BP/antithrombotic), **DAPT 21 days (CHANCE/POINT)**, carotid revascularization <2wk, tissue-based definition, 48h highest risk. ✓

## Running tally (neuro)
- Checked: 16 high-yield claim-areas | CONFIRMED: 13 | ENHANCEMENTS applied: 3 (MG targeted biologics; ALS tofersen; CIDP efgartigimod) | CORRECTION: 0 | UNVERIFIED: 0
- **Exceptional currency for a prior-session build.** Already had anti-amyloid antibodies, high-efficacy MS DMTs, CGRP agents, tenecteplase, SMA/NMOSD targeted therapy, RAMPART/ESETT, CHANCE/POINT. The 3 gaps were the neuromuscular FcRn/complement wave (MG, CIDP) + SOD1-ALS tofersen - now added.

## Next (neuro)
- Remaining ~44 = stroke subtypes/prevention (CVST, dissection), headache variants (cluster/TN/secondary), other neuroimmune (optic neuritis, CNS vasculitis/sarcoid), movement (atypical parkinsonism, ET, dystonia, RLS, tics, drug-induced), other dementias (FTD, DLB, vascular, RPD/CJD), infections (encephalitis, neurosyphilis/HIV/Lyme), myelopathy, CN palsies, vertigo, coma, toxic-metabolic, metabolic/mitochondrial, neuro-oncology, FND, sleep, ataxia, autonomic, phakomatoses, neuropathic pain, syncope-vs-seizure, post-concussion - mostly stable diagnostic content, lower change-risk; lighter/attending pass.
