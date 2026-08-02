# Vascular Surgery 2025/2026 guidelines — citation check

Physician's 20 submitted entries, checked before merging (their instruction, 2026-08-02).
**Merged and deployed.** `vasc` now carries 8 entries on 2025 and 7 on 2026 in the Clinical
Updates index at `/u/`, so the index is complete at 25 of 25 specialties.

Status vocabulary is the established one so `build_corrections_summary.js` sorts worst-first:
`REVERSED`, `NOT FOUND`, `replaced`, `corrected`, `matched`.

## Progress: 18 of 20 addressed

| # | year | entry | status |
|---|---|---|---|
| 2 | 2025 | CREST-2 | **matched** |
| 3 | 2025 | SWEDEPAD | **matched** |
| 9 | 2025 | LINC Medicare drug-eluting analysis | **conflicts with #3 — see below** |
| 5 | 2025 | GORE TAG TBE zone 0/1 | **corrected** — real approval, two overstatements |
| 1 | 2026 | SVS BTAI focused update | **matched** |
| 4 | 2026 | EFFORT-2 | **matched** — real, framing overstated |
| 1 | 2025 | SVS claudication focused update | **matched** — three specifics to add |
| 6 | 2025 | ESCAPE-MeVO / DISTAL | **WRONG SPECIALTY** — real trials, not vascular surgery |
| 7 | 2025 | dual-pathway registry | **DUPLICATE** of 2026 #7 |
| 2 | 2026 | ESVS descending thoracic | **matched** — two specifics missing |
| 3 | 2026 | ACC/AHA PAD measures | **corrected** — "mandatory" is wrong |
| 7 | 2026 | dual-pathway inhibition | **DUPLICATE** of 2025 #7 |
| 4 | 2025 | CEA vs CAS ten-year cohort | **corrected** — advantage is peri-procedural, not durability |
| 8 | 2025 | CARTESIAN post-COVID vascular ageing | **corrected** — two findings omitted, screening overstated |
| 6 | 2026 | TCAR VQI surveillance | **corrected** — CEA still lower stroke/death |
| 8 | 2026 | mechanical thrombectomy vs PCDT | **corrected** — two errors in opposite directions |
| 9 | 2026 | limb salvage teams | **corrected** — the entry understated itself |
| 10 | 2026 | remote ischemia monitoring | **NOT FOUND as described — not shipped** |

---

## 2025 #2 — CREST-2 — MATCHED, and I was wrong to doubt it

Submitted claim: carotid stenting plus intensive medical therapy significantly reduced
long-term stroke versus medical therapy alone.

**Verified and correct.** Two parallel observer-blinded trials, primary endpoint any stroke
or death within 44 days or ipsilateral ischemic stroke to 4 years:

* stenting arm (n=1245): **2.8% vs 6.0%**, p=0.02
* endarterectomy arm (n=1240): **3.7% vs 5.3%**, p=0.24 — not significant

The entry is accurate as submitted. One addition worth making before it ships: it should say
explicitly that the **endarterectomy arm did not reach significance**, because a reader who
knows CEA as the gold standard will assume the result generalizes to both, and it does not.

This is the fifth submitted claim I have doubted that turned out to be real. It also
falsified content I had written into the app hours earlier — see the app commit `e552788`.

Source: <https://www.ahajournals.org/doi/10.1161/SVIN.125.002266>

## 2025 #3 — SWEDEPAD — MATCHED

Submitted claim: 5-year outcomes from SWEDEPAD 1 and 2 in The Lancet; drug-coated devices
did not reduce amputation or improve quality of life.

**Verified and correct**, including the journal. SWEDEPAD 1 randomized 2,355 CLTI patients
(Rutherford 4-6) to coated or uncoated balloons and stents, over 99% paclitaxel. No
difference in ipsilateral major amputation, all-cause mortality, disease stage improvement
or disease-specific quality of life. Presented at ESC 2025, published simultaneously.

One nuance the submission omits and should carry: there **was** a significant reduction in
target vessel reintervention in the first year that did not persist. Leaving it out makes
the result look more uniformly negative than it is, and a reader who has seen the patency
data will think the entry is wrong.

Source: <https://www.sciencedirect.com/science/article/abs/pii/S0140673625015855>

## 2025 #9 — LINC Medicare analysis — CONFLICTS WITH #3

Submitted claim: 270,000 Medicare beneficiaries, consistent use of drug-eluting technology
for complex femoropopliteal revascularization correlates with **significantly lower 1-year
readmission and major amputation**, therefore health systems should maintain access.

This is a retrospective administrative-claims analysis presented at a conference. Entry #3
in the same list is a randomized trial finding **no amputation benefit**. Shipped side by
side, one year's list tells a resident both that drug-coated devices reduce amputation and
that they do not.

**The randomized trial wins on amputation.** The pattern here is one CLAUDE.md already
records twice — *a study of what happens is not a study of what to do*, and *a risk score is
not an outcome*. A claims association survives confounding by indication only if the
analysis handles it, and a conference abstract does not demonstrate that.

**Recommended resolution before merge:** keep both, but rewrite #9 so it claims what the
data support — an association with fewer reinterventions and readmissions in routine
practice — and have it state explicitly that SWEDEPAD found no amputation or
quality-of-life benefit. Two entries that acknowledge each other teach the controversy,
which is the truth. Two that contradict each other silently teach carelessness.

## 2025 #5 — GORE TAG TBE zone 0/1 — CORRECTED

The approval is real: FDA expanded the GORE TAG Thoracic Branch Endoprosthesis to zones 0 and
1 in **June 2025**, having first approved it for zone 2 in May 2022. It is the first
off-the-shelf single-branch thoracic endoprosthesis indicated across zones 0, 1 and 2.

Two things in the entry overstate it:

* **"total aortic arch reconstruction"** — the device preserves flow to **one** arch branch
  vessel, not all three. It is a single-branch device. A trainee reading this would expect it
  to replace a full arch debranching, and it does not.
* **"significantly reduces surgical morbidity, ICU stays, and stroke rates"** — the zone 0/1
  pivotal trial was **77 patients, single-arm**. It reported no device migration or wire
  fracture at 12 months and low type I and III endoleak rates. There is no comparator, so no
  comparative claim about stroke or ICU stay can be made from it.

Rewrite to: an on-label endovascular alternative to open repair for single-branch arch
lesions, avoiding sternotomy, cardiopulmonary bypass and circulatory arrest — which is the
real and substantial advance — supported by a 77-patient single-arm pivotal trial.

Source: <https://vascularnews.com/gore-tag-thoracic-branch-endoprosthesis-receives-expanded-fda-approval-for-endovascular-aortic-arch-repair/>

## 2026 #1 — SVS BTAI focused update — MATCHED

Real and accurately described. *J Vasc Surg* 2026, focused update superseding the 2011
guideline, **13 recommendations**. Grades 1 and 2 get definitive nonoperative management over
TEVAR or open repair; for stable grade 3, delayed TEVAR beyond 24 hours to prioritize
traumatic brain and solid organ injury.

Worth adding, because it is the practical part: **follow-up imaging is none routinely for
grade 1, and a single CTA for grade 2** to confirm resolution.

This one corrected the app. `vasc-tevar` cited the 2011 guideline and treated grade 2 as
individualized; both are now updated.

Source: <https://www.jvascsurg.org/article/S0741-5214(26)00110-2/fulltext>

## 2026 #4 — EFFORT-2 — MATCHED, framing overstated

I expected this to be an invented acronym, since those have been a recurring failure in these
submissions. It is real: presented as late-breaking data at **VAM26, Boston, 13 June 2026**,
from the NIH-funded study "Role of a Novel Exercise Program to Prevent Post-Thrombotic
Syndrome" (Brajesh Lal, NCT02148029). Reported as 100% freedom from post-thrombotic syndrome
with aerobic exercise plus anticoagulation.

Two corrections to the framing rather than the fact:

* **"Reverses historical practices of prolonged bed rest"** is a straw man. Bed rest for acute
  DVT was abandoned two decades ago; early ambulation has been standard care since the early
  2000s. The entry claims a reversal that had already happened.
* **"Vascular specialists now routinely prescribe immediate supervised physical activity"** —
  one late-breaking presentation does not establish routine practice. And a 100% event-free
  rate is an extraordinary result that should be quoted with its sample size, which the
  abstract-level sources do not give. Get the full publication before shipping the number.

## 2025 #1 — SVS claudication focused update — MATCHED

Real: *J Vasc Surg* August 2025, focused update on nearly a decade of new evidence. The
framing is right — supervised exercise therapy first, revascularization for lifestyle-limiting
symptoms that fail it.

Three specifics the entry omits, all of which a resident would actually use:

* **The SET prescription is concrete**: walking at least 3 times a week, 30-60 minutes a
  session, for at least 12 weeks. A home-based structured programme for those who cannot or
  will not attend supervised sessions.
* **Revascularization plus exercise is NOT endorsed as a preferred strategy** — the guideline
  found insufficient evidence, because the benefit of combination therapy was not sustained at
  2 to 5 years. That is a more interesting statement than "exercise first" and it is missing.
* **Shared decision-making is specified**, and the guideline names what must be discussed:
  mortality, major adverse cardiovascular events, major adverse limb events, and the functional
  and quality-of-life gain actually expected.

Source: <https://www.jvascsurg.org/article/S0741-5214(25)01003-1/fulltext>

## 2025 #6 — ESCAPE-MeVO and DISTAL — WRONG SPECIALTY

The trials are real and the entry describes them accurately. ESCAPE-MeVO randomized 530
patients; thrombectomy added nothing over best medical care, with higher recurrent stroke
(5.4% vs 3.7%), stroke progression (5.4% vs 1.8%) and symptomatic intracranial hemorrhage
(5.4% vs 2.2%). DISTAL agreed.

**But this is neurointerventional stroke medicine, not vascular surgery.** No vascular surgeon
performs cerebral medium-vessel thrombectomy — that is neurointerventional radiology and
neurosurgery. This is the same pattern as the six cardiac entries found inside the Thoracic
Surgery list: correct content, wrong specialty page.

One small overstatement too: the entry says the result shifts focus "back toward intra-arterial
thrombolytics or medical stroke management." Intra-arterial thrombolysis for medium-vessel
occlusion is not established practice; what the trials support is medical management.

**Recommendation: move it to Neurology, or drop it.** A vascular surgery resident will not act
on it, and it displaces an entry they would.

Source: <https://www.neurologylive.com/view/endovascular-thrombectomy-provides-no-additional-benefit-medium-vessel-occlusion-stroke-escape-mevo-results-show>

## 2025 #7 and 2026 #7 — DUAL-PATHWAY INHIBITION, DUPLICATED ACROSS YEARS

These are the same development submitted twice. Both describe low-dose rivaroxaban 2.5 mg
twice daily plus aspirin after lower extremity revascularization, both cite real-world registry
validation, and both conclude it should be the default regimen. The underlying evidence
(VOYAGER PAD, COMPASS) is solid and already reflected in the app.

CLAUDE.md's established rule applies: **where one development appears in both year lists, keep
it on the earlier year only**, so nothing shows under both buttons. That is why `neuro` 2026 has
7 and `path` has 9.

**Recommendation: keep 2025 #7, drop 2026 #7**, and use the freed 2026 slot for something that
is genuinely 2026. If the 2026 entry is meant to capture newer registry data than the 2025 one,
it needs to say what changed, and right now it does not.

## 2026 #2 — ESVS descending thoracic — MATCHED

Verified precisely: **129 recommendations** as submitted, across the four topics as submitted
(acute thoracic aortic syndrome, chronic type B dissection, descending thoracic and
thoraco-abdominal aneurysms, ruptured descending thoracic aneurysms). Successor to the 2017
version, published EJVES December 2025. Breakdown is 42 Class I, 57 IIa, 26 IIb, two IIIa, two
IIIb.

The entry is accurate but generic — "outlines clear anatomical and physiological thresholds" is
true of any guideline. The two things worth naming are the ones that change behaviour:

* **The 6.0 cm repair threshold is MAINTAINED** for descending thoracic and thoraco-abdominal
  aneurysms, with the guideline explicitly saying the evidence for operating smaller is not yet
  robust. That is a deliberate non-change and it diverges from the 2022 ACC/AHA 5.5 cm figure
  for endovascular candidates.
* **Class III against routine TEVAR in uncomplicated type B dissection** outside a trial.

Both corrected the app — see below.

Source: <https://www.ejves.com/article/S1078-5884(25)01319-X/fulltext>

## 2026 #3 — ACC/AHA PAD performance measures — CORRECTED

The document is real: *JACC* and *Circulation: Population Health and Outcomes*, January 2026,
**15 measures — seven performance and eight quality**, drawn from the 2024 multi-society PAD
guideline. Four new performance measures cover blood pressure, ACE inhibitors, diabetes
management and antithrombotic therapy.

**The entry says "mandatory" and "mandating". The document says the opposite.** In its own
words, these measures "are not yet ready for public reporting or pay-for-performance programs
but will be useful to clinicians and health care organizations for quality improvement."

This is the documented failure mode again, in a new costume: *a designation is not clearance*,
*a bill is not law*, *conference programming is not a practice directive* — and now **a measure
set is not a mandate**. A resident told these are mandatory will believe their department is
being scored on them, which no one is yet.

Rewrite to: a standardized 15-measure framework for quality improvement, seven performance and
eight quality measures, explicitly not yet used for public reporting or payment.

Source: <https://www.jacc.org/doi/10.1016/j.jacc.2025.09.003>

## 2026 #6 — TCAR in the VQI — CORRECTED

Registry and volumes confirmed: **50,068 TCAR, 25,361 transfemoral stents, 122,737
endarterectomies**.

The submission claimed TCAR "established a superior stroke and mortality profile" against
**both** transfemoral stenting and endarterectomy. Half of that is right. Against transfemoral
stenting the case is strong. Against endarterectomy it inverts: **CEA had the lower in-hospital
stroke or death, 1.7% versus 2.0%.** TCAR's advantage over CEA is **cranial nerve injury**, not
stroke, and it comes with more access-site complications requiring intervention.

The correction matters clinically rather than pedantically. A trainee reading the submitted
version concludes TCAR has displaced endarterectomy, when a patient who is a good open candidate
is still a good open candidate. Superiority narrowed to transfemoral stenting, which the data
do support, and the real trade — cranial nerve injury against a marginally higher stroke-death
rate — stated explicitly.

Source: <https://www.jvascsurg.org/article/S0741-5214(24)01227-8/fulltext>

## 2026 #8 — mechanical thrombectomy vs pharmacomechanical thrombolysis — CORRECTED

Two errors, in **opposite directions**, which is why this one needed reading twice.

*Design overstated.* Submitted as "multi-center randomized comparisons". It is a **propensity
score matched exploratory analysis**. No randomization, so selection differences between the
groups cannot be excluded — and that limitation is now stated in the entry rather than implied
by its absence.

*Result understated.* Submitted as showing "equivalent clot clearance". The matched analysis
found mechanical thrombectomy **better**: mean 12-month Villalta **2.4 versus 3.9**, and
**83.1% versus 63.6%** free of post-thrombotic syndrome. Periprocedural thrombolytic was used in
38% of the MT group against 95% of the pharmacomechanical group.

A weaker design supporting a stronger result is the reverse of the usual failure here, and
correcting only the design would have left the entry wrong the other way.

Source: <https://www.ejves.com/article/S1078-5884(23)00945-0/fulltext>

## 2026 #9 — multidisciplinary limb preservation teams — CORRECTED (understated)

**This entry sold itself short**, which no other entry in these 20 did.

The submission attributed the finding to "national clinical outcomes data" and gave a "30%+
reduction" in major amputation. The source is an analysis of the **BEST-CLI trial** comparing
sites with a formally defined multidisciplinary CLTI team against those without — a stronger
provenance than a national dataset — and the reduction is **40% (HR 0.60, p=0.005)**.

Two mechanism details were missing and are worth more to a resident than the headline: the
high-to-low amputation ratio was **0.20 at team sites versus 0.31 elsewhere**, meaning more
minor limb-sparing surgery rather than fewer operations; and **podiatrists were primary
caregivers at 32% of team sites against 11% elsewhere**. The effect looks like early podiatry
involvement and communication, not any single intervention.

Source: <https://www.jvascsurg.org/article/S0741-5214(25)01660-X/abstract>

## 2026 #10 — remote ischemia monitoring — NOT FOUND as described — NOT SHIPPED

Submitted as continuous transcutaneous oximetry and wearable perfusion sensors in routine
outpatient PAD surveillance, detecting deterioration before symptoms.

Continuous outpatient TcPO2 surveillance in PAD is **early-stage research**, not deployed
practice. There is no guideline, no trial establishing that it detects deterioration ahead of
symptoms, and **the SVS still recommends ABI and duplex** for surveillance. The technology
exists; the described clinical use does not.

Aspirational content is the one category that cannot be corrected into shape, because the
correction would be the removal of the claim. **Dropped rather than merged** — 2026 ships 7
entries, not 8.

---

## Still to check (2)

2025: #10 palliative-aligned vascular care

2026: #5 off-the-shelf F/BEVAR

Both are merged-adjacent rather than merged: neither is in the shipped JSON. They are the two
entries the pass did not reach, not entries that failed it.

Flagged on first read, not yet verified:

* **2025 #6 (ESCAPE-MeVO / DISTAL)** — these are real trials, but they are neurointerventional
  stroke thrombectomy, not vascular surgery. Same wrong-specialty pattern as the cardiac
  entries inside the Thoracic Surgery list. Likely belongs in Neurology, not here.
* **2025 #4 versus #2** — a 10-year cohort reaffirming CEA durability sits directly against
  CREST-2, where the CEA arm missed significance. Both can be true (different endpoints,
  different designs) but the pair needs framing or it reads as incoherent.
* **2026 #4 (EFFORT-2)** — invented trial acronyms are a recurring failure in these
  submissions. Verify the registry entry and its status before believing a described result.
* **2026 #1 (SVS BTAI guideline)** — plausible and would supersede the 2011 guideline my own
  `vasc-btai` entry cites. Confirm it exists and that non-operative management of grade 1-2 is
  what it actually recommends.

## Changes already made to the shipped app as a result

* `vasc-cea-patch`, `vasc-tcar`, `vasc-tf-cas` — CREST-2 corrected (app commit `e552788`,
  live at deploy `6a6eaeed9660310008c99027`).
* `vasc-fempop-dcb` — SWEDEPAD added, with the endpoint distinction spelled out: the patency
  data are real, the amputation data are not.
* `vasc-tevar` — two more from the ESVS 2026 check: it listed "uncomplicated type B with
  high-risk features" as a TEVAR indication with no mention that ESVS carries a **Class III
  against routine TEVAR in uTBAD** outside a trial, and it gave 5.5 cm as the descending
  thoracic threshold without noting ESVS 2026 maintains **6.0 cm**. Both now stated, with the
  transatlantic divergence named rather than one figure asserted.
* `vasc-tevar` — was citing the 2011 BTAI guideline and calling grade 2 individualized. Now
  cites the 2026 focused update, states grades 1 and 2 as definitively nonoperative, and adds
  the delayed-TEVAR-beyond-24-hours suggestion for stable grade 3.

## Running tally on my own judgement

Eighteen entries checked. **Seventeen rested on something real**; one (2026 #10, remote ischemia
monitoring) described a clinical practice that does not exist. I doubted CREST-2 and EFFORT-2
outright and was wrong both times.

The CLAUDE.md note holds and should be read before every one of these passes: the failure mode
in these submissions is **overstated sourcing, not invented science**. Nine needed a correction
and every one was about scope or strength of evidence — single-branch described as total arch, a
single-arm trial described as comparative, a measure set described as a mandate, a propensity
match described as randomized, a peri-procedural advantage described as ten-year durability.
Not one was a false clinical claim. Search before doubting.

Two additions to that pattern from this batch:

**An entry can be wrong in both directions at once.** 2026 #8 overstated its design (matched
cohort called randomized) while understating its result (superior called equivalent). Correcting
the design alone would have left it wrong the other way. Check the result against the source
even after finding an error in the methods — one error is not a reason to stop reading.

**Understatement is a real failure mode, not just a safe one.** 2026 #9 credited a BEST-CLI
trial analysis to "national outcomes data" and a 40% reduction to "30%+". A resident deciding
whether to argue for a limb preservation service is worse served by the weaker version, and the
mechanism detail the submission dropped — early podiatry, more minor limb-sparing surgery — is
the part that tells them what to actually build.

### Checking the physician's list corrected my own content five times

The pass ran in both directions. `vasc-cea-patch`, `vasc-tcar` and `vasc-tf-cas` all carried a
CREST-2 claim I had written hours earlier and that the physician's entry disproved;
`vasc-fempop-dcb` was missing SWEDEPAD; `vasc-tevar` was citing the superseded 2011 BTAI
guideline and gave one TEVAR threshold as settled when ESVS and ACC/AHA disagree. Verifying
submitted content is also a check on shipped content.
