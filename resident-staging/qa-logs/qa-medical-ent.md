# Otolaryngology – Head & Neck Surgery (ENT) — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive oncologic/biologic/guideline claims + emergencies checked vs current guidelines/FDA approvals/landmark trials; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: ent (EXTENDED schema: +tech, +after). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** very current — already had dupilumab/biologics for CRSwNP, hypoglossal nerve stimulation for OSA, molecular testing + TI-RADS/Bethesda for thyroid, prompt steroids for SSNHL, Epley for BPPV, EBV DNA for NPC, bevacizumab for RRP. One clear systemic-therapy gap (recurrent/metastatic HNSCC immunotherapy), now added.

---

## Batch 1 — 2026-07-18 (high-yield: H&N oncology + rhinology/otology + airway emergencies)

### ent-oral-cavity-cancer  ✅ ENHANCEMENT APPLIED (applies across mucosal H&N subsites)
- **Gap:** the mucosal H&N cancer entries (oral cavity/oropharynx/larynx) covered curative surgery/(chemo)RT + de-escalation but not systemic therapy for recurrent/metastatic disease.
- **Added** (tx + pearl, web-verified, placed in the prototypical mucosal-HNSCC entry and framed to apply across subsites): **RECURRENT/METASTATIC HNSCC (oral cavity/oropharynx/larynx/hypopharynx) - first-line pembrolizumab (monotherapy if PD-L1 CPS>=1, or with platinum/5-FU) per KEYNOTE-048, replacing cetuximab-EXTREME; nivolumab for platinum-refractory disease (CheckMate 141)**.
- **Source (web-verified):** KEYNOTE-048 (Burtness, Lancet 2019; guideline-recommended first-line R/M HNSCC); CheckMate 141 (nivolumab, platinum-refractory). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs guidelines/FDA; no change):
- **ent-oropharyngeal-cancer** — TORS or definitive (chemo)RT (both cure most HPV+), **p16/HPV testing (separate AJCC staging)**, de-escalation via trials, cystic neck node = metastatic HPV+ OPSCC. ✓
- **ent-oral-cavity-cancer** (curative portion) — surgery-primary (+/- mandibulectomy) + neck dissection + reconstruction, erythroplakia > leukoplakia, field cancerization. ✓
- **ent-laryngeal-cancer** — early glottic single-modality (RT or transoral laser, voice preservation), advanced organ-preservation chemoRT (salvage surgery) vs total laryngectomy, TEP/electrolarynx. ✓
- **ent-chronic-rhinosinusitis** — saline + intranasal corticosteroids, **BIOLOGICS (dupilumab and anti-type-2 agents) for severe CRSwNP**, FESS for refractory, AERD/Samter's + aspirin desensitization, unilateral polyp = tumor. ✓
- **ent-thyroid-nodules-cancer** — **TI-RADS + FNA Bethesda**, indeterminate -> **molecular testing** or diagnostic lobectomy, lobectomy for low-risk (de-escalation), protect RLN/parathyroids, medullary (MEN2/RET, no RAI). ✓ *(active surveillance for low-risk papillary microcarcinoma is an emerging option; "observe" framing already present)*
- **ent-osa** — CPAP first-line + weight/positional, oral appliances (mild-moderate), **HYPOGLOSSAL NERVE STIMULATION**/UPPP/MMA for intolerance, DISE before airway surgery, pediatric adenotonsillectomy. ✓
- **ent-snhl** — **SSNHL time-sensitive: prompt corticosteroids (oral +/- intratympanic)**, MRI for unilateral (vestibular schwannoma), cochlear implantation for severe-profound, ototoxicity monitoring. ✓
- **ent-hn-cutaneous-malignancy** — excision/**Mohs (face)**, parotidectomy/neck dissection for nodal/parotid mets + adjuvant RT, **systemic/immunotherapy for advanced disease** (cemiplimab-class), facial cSCC drains to parotid. ✓
- **ent-epiglottitis** — **secure airway in controlled OR setting**, IV antibiotics (H. flu, 3rd-gen ceph) + steroids, don't agitate, thumbprint sign, airway before imaging (now more adult post-Hib). ✓
- **ent-deep-neck-infection** — early airway (awake/surgical), broad-spectrum + anaerobes + surgical drainage + source control, **Ludwig's angina emergency**, contrast CT, Lemierre (Fusobacterium), descending mediastinitis. ✓
- **ent-bppv** — **canalith repositioning (Epley posterior, Lempert horizontal) curative first-line**, vestibular suppressants NOT recommended (prolong recovery), Dix-Hallpike, central red flags. ✓
- **ent-facial-nerve-palsy** — **Bell's: oral corticosteroids within 72h** + antivirals for severe/Ramsay Hunt, eye protection (exposure keratopathy), forehead involvement (peripheral vs central), tumor red flags. ✓ (matches neuro)
- **ent-nasopharyngeal-carcinoma** — **radiosensitive: primary IMRT + concurrent/adjuvant chemo**, salvage surgery/re-irradiation, **EBV DNA monitoring**, unilateral serous OM red flag. ✓ *(R/M NPC immunotherapy - toripalimab/pembrolizumab + gem-cis, JUPITER-02 - is an emerging option in this biologically distinct EBV+ cancer; not added to keep scope tight)*
- **ent-peritonsillar-abscess** — **drainage (aspiration/I&D) + antibiotics** (strep + anaerobes), quinsy tonsillectomy for recurrent, trismus/hot-potato voice/uvular deviation. ✓
- **ent-epistaxis** — compression 10-15min + vasoconstrictor, anterior cautery/packing vs posterior packing + admission, Kiesselbach, **JNA in adolescent male (image before biopsy)**. ✓
- **ent-rrp** — **tissue-sparing debulking (microdebrider/CO2 laser) mainstay**, adjuvant (cidofovir, **systemic bevacizumab**, HPV vaccine), **avoid tracheostomy (distal seeding)**, HPV-6/11. ✓

## Running tally (ent)
- Checked: 16 high-yield claim-areas | CONFIRMED: 15 | ENHANCEMENT applied: 1 (recurrent/metastatic HNSCC immunotherapy, KEYNOTE-048) | CORRECTION: 0 | UNVERIFIED: 0
- **Very current** — CRSwNP biologics, OSA hypoglossal stimulation, thyroid molecular testing, SSNHL steroids, Epley, Bell's steroids, EBV DNA NPC, RRP bevacizumab all present. The one gap was systemic immunotherapy for recurrent/metastatic HNSCC - now added across subsites.

## Next (ent)
- Remaining ~44 = airway/emergency (emergency airway, angioedema, foreign bodies, tracheostomy, pediatric airway), otology (AOM/OME, otitis externa, chronic OM/cholesteatoma, TM perforation, otosclerosis, tinnitus, vestibular schwannoma, otalgia), vestibular (Meniere/neuritis, vestibular migraine), rhinology (acute rhinosinusitis, rhinitis, nasal obstruction, sinonasal masses/CSF leak, pediatric rhinology), laryngology (hoarseness/vocal lesions, vocal fold paralysis, LPR, dysphagia/Zenker, chronic cough/PVFM), H&N (neck mass, salivary tumors/disorders, hyperparathyroidism, congenital neck masses), peds (tonsils/adenoids, hearing loss/CI, JNA), facial trauma/plastics (nasal/mandible/midface fractures, soft-tissue/temporal trauma, facial plastics, microtia, cleft, TMJ), smell/taste, benign oral lesions, free-flap reconstruction - mostly stable procedural/diagnostic content, lower change-risk; lighter/attending pass.
