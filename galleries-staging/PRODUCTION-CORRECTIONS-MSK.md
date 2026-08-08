# Correction request — Hip Fracture and Low Back Pain galleries

Two ten-page MSK & Rheum galleries delivered 2026-08-08. **The artwork is strong and the clinical
content is largely excellent, and the logo lockup is correct on all twenty pages** — a first in
several batches, so whatever changed there is working.

Everything below is typeset into the page, so all of it needs a re-render at your end. We do not
repaint delivered artwork: it was attempted once and produced visibly damaged pages.

**Please fix items marked TEMPLATE once in the template rather than per page** — they account for most
of this list, and they affect both galleries.

Defects were read from phone screenshots, so anything involving small type or counting dots should be
confirmed against your own exports. Items are flagged where confidence is low.

---

# Part 1 — TEMPLATE faults (both galleries, fix once)

## T1. The footer disclaimer collides with the metadata columns

*"Not a Substitute for Professional Medical Advice."* wraps underneath "MSK & Rheum" inside the
CATEGORY column instead of sitting on its own line at the foot of the card.

- Hip Fracture: pages 1, 3, 4, 5, 6, 7, 8, 9 — and page 10 renders it differently again, italicised
  on its own line
- Low Back Pain: pages 8, 9, 10, with a related misalignment on page 1

It is legally required text on every page, so it should not be able to collide with anything.

## T2. The header progress dots

**A wrong dot count is cosmetic. A wrong dot index tells the reader they are on a different page than
they are, which is why this one matters.** It has now appeared with the count wrong, the fill
cumulative, the fill inverted, and the index off by one in both directions — across several batches.

Hip Fracture — **REVISED against full-resolution pages, and largely retracted:**

| page | dots | fill | verdict |
|---:|---:|---|---|
| 1 | **10** | 1st | **correct** — an earlier report of 11 dots was wrong |
| 3 | **10** | 3rd | **correct** — an earlier report of 11 dots / 4th fill was wrong |
| 4 | 10 | 4th | **correct** |
| 5 | 10 | 5th | **correct** |
| 6 | 10 | **appears to be the 7th** | **please verify** — see the note below |
| 2 | not re-checked | reported as 1st, one too early | **please verify** |
| 10 | 10 | cumulative **and inverted** — nine filled, current page the only empty one | wrong |

**What changed, and please disregard the earlier reading.** Pages 1 and 3 were reported as carrying
eleven dots with the fill one position late. At full resolution they carry **ten dots, correctly
filled**. That came off downscaled phone screenshots, where eleven-versus-ten genuinely cannot be
counted; it was flagged low-confidence at the time and it was wrong.

The only dot fault now confirmed is **page 10**. Two pages need one look before any template changes:

- **Page 6** appears to fill the 7th of ten on a page headed IMAGE 6 OF 10. Stated as uncertain on
  purpose — a dot claim has already been wrong once here, and pages 1, 3, 4 and 5 are demonstrably
  right, which makes one stray page less likely than a miscount.
- **Page 2** has not been seen at full resolution.

Low Back Pain:

| page | dots | fill | should be |
|---:|---:|---|---|
| 1–4 | 10 | correct | — |
| 5 | 10 | 4th | 5th |
| 6–10 | **9** | one behind throughout | 6th–10th of 10 |

Worth knowing for whoever fixes this:

- **Most Hip Fracture pages are demonstrably correct at ten dots**, so the row is not
  uniformly broken — it is wrong on specific pages, page 10 certainly.

## T3. Hip Fracture page 10 is built from a different template

- No ICD-10 field at all
- Title block **centred**, where every other page is left-aligned
- "MSK & RHEUM" and "V1.0" stacked without the pill badge the others use
- Dots cumulative and inverted (T2)

Please bring it onto the same template as pages 4–9.

---

# Part 2 — Hip Fracture

## RETRACTED: the "three template generations" grouping

An earlier version of this document claimed the defects grouped into three template generations, with
the wrong ICD-10 code and the broken dot rows falling on **exactly the same three pages** — called very
unlikely to be coincidence, and implying four re-renders would resolve several items together.

**That correlation does not hold.** It rested on pages 1 and 3 having broken dot rows, and at full
resolution their dot rows are correct. The grouping was an artifact of a bad measurement.

What survives:

| pages | ICD-10 | dots | footer |
|---|---|---|---|
| **1, 2, 3** | **M80.00XA** — wrong | 1 and 3 **correct**; 2 unverified | collides |
| **4, 5, 6, 7, 8, 9** | **S72.009A** — correct | correct (verify page 6) | collides |
| **10** | **absent** | cumulative and inverted | different template again |

The ICD-10 split across pages 1–3 versus 4–9 is real and still points at two generations of the code
field. But **treat the code, the dots and the footer as three independent faults** — do not assume
fixing one fixes the others.

## H1. The ICD-10 code is inconsistent, and page 10 has none

Pages 1, 2, 3 show **M80.00XA**; pages 4–9 show **S72.009A**; page 10 shows none.

Please use **S72.009A on all ten**, matching the app and the six correct pages.

This is not simply a typo, and the reasoning is worth recording: for a genuine fragility fracture
there is a real argument for the M80 *pathological fracture* family — arguably this gallery's whole
thesis. But **M80.00XA is the unspecified-site member of that family**; the femur-specific code is
M80.05-. So even on its own terms the code shown is the wrong one.

## H2. Page 4 gives fasting advice that page 7 gets right — and the app marks wrong

- Page **4**, immediate nursing priorities: **"Maintain NPO after midnight (if surgery likely)."**
- Page **7**, pre-operative checklist: **"NPO status per anesthesia."**

**Page 7 is correct; please change page 4 to match its wording.**

Blanket nil-by-mouth-after-midnight has been superseded by minimising fasting, with clear fluids
permitted up to two hours before anaesthesia. Prolonged fasting in a frail older adult contributes to
the very delirium and dehydration page 4 is trying to prevent.

It also contradicts the app directly: the Hip Fracture quiz asks which arrival intervention most
reduces delirium risk, and *"Keeping her NPO from arrival until surgery"* is **marked incorrect**. A
student can read page 4 and be told one tap later that it is wrong.

## H3. Page 10's one-year mortality figure disagrees with pages 1 and 3

- Pages 1 and 3: "High 1-year mortality **(15–30%)**"
- Page 10: "1-YEAR MORTALITY **20%–30%**"

**Please change page 10 to 15–30%, not the other two.** 20–30% is the classic teaching figure and
sits at the top of the contemporary range; recent series cluster nearer 16–22%. The app's module was
deliberately moved from 20–30% to 15–30% for that reason, so page 10 is quoting the figure we have
just moved away from.

## H4. Pages 6 and 7 duplicate each other, including the algorithm verbatim

Page 6 is "Imaging Evaluation"; page 7 is "Diagnostic Imaging & Workup". Both carry:

- the **same four-step imaging algorithm** — AP pelvis + lateral X-ray → MRI if X-ray negative with
  high suspicion → CT if MRI unavailable → plan from results — reproduced almost word for word
- AP pelvis and cross-table lateral radiographs
- MRI as most sensitive for occult fracture, CT for cortical bone detail
- a "look for / assess for" checklist of essentially the same items

Page 1's contents list expects **"Diagnostic Workup"** and **"Imaging"** as two separate topics, so
the intent was two pages; what arrived is one topic twice. Page 7's unique material (labs, RCRI
cardiac risk, fracture classification, pre-op checklist) and page 6's (3D reconstruction,
occult-fracture considerations) are both worth keeping — the duplication is in the middle.

Ten pages is a fixed budget, so this costs a page.

## H5. Page 1's contents list is one behind, skips 8, and omits Treatment

As delivered: ① Anatomy & Classification ② Pathophysiology ③ Clinical Presentation ④ Physical Exam
⑤ Diagnostic Workup ⑥ Imaging ⑦ Treatment & Management **⑨** Complications & Prognosis ⑩ Clinical
Pearls — nine items numbered 1–7 then 9–10.

Against the pages actually delivered:

| page | actual title | list expects |
|---:|---|---|
| 2 | Anatomy | ① Anatomy & Classification |
| 3 | Pathophysiology | ② Pathophysiology |
| 4 | Clinical Presentation | ③ Clinical Presentation |
| 5 | Physical Exam | ④ Physical Exam |
| 6 | Imaging Evaluation | ⑤ Diagnostic Workup |
| 7 | Diagnostic Imaging & Workup | ⑥ Imaging |
| 8 | Microscopic Pathology | ⑦ Treatment & Management |
| 9 | Rehabilitation & Long-Term Outcomes | ⑨ Complications & Prognosis |
| 10 | Clinical Pearls & Key Takeaways | ⑩ Clinical Pearls |

Renumber the list 2–10 to match the pages. **And please confirm whether "Treatment & Management" was
meant to be a page** — it never appears as one, which is a notable gap for this condition, since
surgical timing and fixation-versus-arthroplasty are the core decisions.

## H7. Page 5 — the sensation map mislabels the deep peroneal nerve territory

Under NEUROVASCULAR EXAM, "Test sensation" reads:

```
- Dorsum of foot (deep peroneal)
- 1st web space
- Plantar foot
```

and the SENSATION MAP legend is: **Deep peroneal / Sural / Saphenous / Plantar**.

**The deep peroneal nerve supplies only the first dorsal web space.** Most of the dorsum of the foot is
**superficial peroneal**, which is missing from the legend entirely. So the page attributes a large
territory to the wrong nerve, and the two bullets are redundant as written — "1st web space" *is* the
deep peroneal test.

Suggested:

```
- Dorsum of foot (superficial peroneal)
- 1st web space (deep peroneal)
- Plantar foot (tibial)
```

and add **superficial peroneal** to the map legend as its own colour.

This matters more than a labelling nitpick: a reader who documents intact sensation on the dorsum and
records it as deep peroneal has not tested the nerve most at risk in this population.

*Please check the map's colour regions against the corrected legend when re-rendering — if the purple
"deep peroneal" region currently covers the broad dorsum, the artwork needs changing too, not just the
text.*

## H8. Page 1 — "NOF" in CLINICAL SOURCE is a superseded name

The source line reads "AAOS, NICE, ACR Appropriateness Criteria, **NOF**, ACP Clinical Guidelines".
The National Osteoporosis Foundation became the **Bone Health and Osteoporosis Foundation (BHOF)** in
2021. Minor, but it dates the page.

## H6. Page 3 — two versions arrived

**The canonical one is the version with "Advanced age (>65 years)"**, confirmed by the physician.
Please discard the other take.

Note that the content-correct version is the one whose dot row is wrong (fills the 4th, appears to
carry eleven) while the superseded take filled the 3rd correctly — so page 3 still needs the
pages 1–3 re-render.

---

# Part 3 — Low Back Pain

## B1. Page 9 — "Muscle relaxants" is split across two bullets

In the Medications list under CONSERVATIVE FIRST-LINE THERAPY:

```
• NSAIDs
• Acetaminophen
• Muscle
• relaxants
• Topical agents
```

It reads as two separate drug classes. Should be one bullet: **"Muscle relaxants"**.

## B2. Page 4 — typo inside the artwork

Psychosocial "Yellow Flags" box: *"Addressing yellow flags improves **fanction** and reduces
chronicity."* → **function**.

## B3. Pages 7 and 9 overlap substantially — a question, not a fault

"Management Overview" (stepwise by time) and "Treatment & Management" (by modality) both carry
medications, surgical indications and interventional options; epidural steroid injection and facet
injection appear on both. Ten pages is a fixed budget, so one may be worth repurposing. **Content
decision for the physician, not a production fault.**

---

# Cleared — no action needed

- **Logo lockup** — correct ℞ waveform mark on all twenty pages, both galleries.
- **Low Back Pain clinical accuracy** — durations, the 85–90% nonspecific figure, L4–S1 for sciatica,
  the red flag list, sensory maps and imaging guidance all match the app's module.
- **The 90% / 6 weeks figure** (Low Back Pain pages 7 and 10) — reviewed and **stays as drawn**. It is
  widely published; the app says "improves substantially", so the two are differently precise rather
  than contradictory.
- **Myotome mapping** (Low Back Pain pages 2 and 5) — page 2 assigns L4 to ankle dorsiflexion, page 5
  puts the patellar reflex at L4. **Not a contradiction:** L4 contributes to both knee extension
  (L2–L4) and dorsiflexion (L4–L5). The app's module was reworded instead, to screen by movement
  rather than give each root one job.

---

# Export specification, for whichever pages get re-rendered

- **1024×1536** (2:3 portrait), JPEG q88. If your pipeline outputs 1536×2304, we downscale — but a
  gallery must ship **one** size throughout, so please do not mix.
- Page order is read from the **`IMAGE n OF 10` header strip**, not filenames — every batch so far has
  arrived shuffled, so the header is the only thing we trust.
- Please keep the canonical ℞ waveform logo lockup, which is correct in this batch.

---

# What full-resolution pages confirmed

Pages 1, 3, 4, 5 and 6 were reviewed at full resolution. **Confirmed as reported:**

- **M80.00XA** on pages 1 and 3; **S72.009A** on pages 4, 5 and 6 (H1)
- **"Maintain NPO after midnight (if surgery likely)"** in page 4's IMMEDIATE NURSING PRIORITIES (H2)
- Page 1's contents list running ① ② ③ ④ ⑤ ⑥ ⑦ **⑨** ⑩ — **⑧ is skipped** (H5)
- The footer disclaimer collision on all five pages (T1)
- **15–30%** mortality on pages 1 and 3, so only page 10 disagrees (H3)
- Page 3 is the canonical take, carrying "Advanced age" in FACTORS THAT INCREASE RISK (H6)
- The correct ℞ waveform logo lockup on every page

**Retracted at full resolution:** the eleven-dot counts on pages 1 and 3, and the whole
"three template generations" correlation built on them.

**Also verified as clinically sound**, so nobody re-opens them: the intracapsular / intertrochanteric /
subtrochanteric blood-supply logic and AVN risk on pages 1 and 3; the atypical femur fracture panel
(bisphosphonate use, transverse pattern, prodromal pain, image the contralateral femur); the five-stage
cellular healing sequence; the imaging algorithm and the three radiographic patterns on page 6.
