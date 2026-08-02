# Vascular Surgery 2025/2026 guidelines — citation check

Physician's 20 submitted entries, checked before merging (their instruction, 2026-08-02).
**Nothing has been merged yet.** `vasc` remains the one specialty absent from the Clinical
Updates index at `/u/`.

Status vocabulary is the established one so `build_corrections_summary.js` sorts worst-first:
`REVERSED`, `NOT FOUND`, `replaced`, `corrected`, `matched`.

## Progress: 3 of 20 checked

| # | year | entry | status |
|---|---|---|---|
| 2 | 2025 | CREST-2 | **matched** |
| 3 | 2025 | SWEDEPAD | **matched** |
| 9 | 2025 | LINC Medicare drug-eluting analysis | **conflicts with #3 — see below** |

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

---

## Still to check (17)

2025: #1 SVS claudication guideline · #4 CEA vs CAS 10-year cohort · #5 GORE TAG TBE zone
0/1 expansion · #6 ESCAPE-MeVO and DISTAL · #7 dual-pathway registry · #8 long COVID
vascular aging · #10 palliative-aligned vascular care

2026: all ten

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
