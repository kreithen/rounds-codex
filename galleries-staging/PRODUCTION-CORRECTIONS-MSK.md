# Correction request — Hip Fracture and Low Back Pain galleries

Two ten-page MSK & Rheum galleries delivered 2026-08-08.

**Reviewed at full resolution:** all ten Low Back Pain pages, and Hip Fracture pages 1, 3, 4, 5, 6, 7,
8, 9, 10. **Hip Fracture page 2 has not been seen at full resolution** — it is the only page in either
gallery still unverified.

**The artwork is strong and the clinical content is largely excellent.** The logo lockup is correct on
every page, which is a first in several batches. Most of what follows is template, not content.

Everything here is typeset into the page, so it needs a re-render at your end. We do not repaint
delivered artwork — it was attempted once and produced visibly damaged pages.

> **This document supersedes an earlier version. Three findings in it were wrong and are retracted
> below** (§R1–§R3). All three came from reading downscaled phone screenshots; each is marked so nobody
> works from the withdrawn version.


> ## ✅ FIXED IN THE APP AS OF v81 (2026-08-08) — but the TEMPLATE still needs these
>
> Two items below were corrected in the shipped pages by transplanting glyphs that already existed
> in this same batch (same size, same font, same renderer — nothing invented). **Your re-render will
> overwrite them, which is correct — please still fix them at source:**
>
> - **H1** — pages 1, 2, 3 now read **S72.009A**, lifted from page 4's own ICD line.
> - **H3** — page 10 now reads **15%–30%** one-year mortality, using the "15" from the readmission
>   stat on the same page.
>
> Everything else stands. **Explicitly NOT fixed and not fixable this way:** page 10's absent ICD-10
> field (adding a row where the template has none is inventing layout), page 10's cumulative and
> inverted dot row (the documented repainting failure), and the discharge-destination chart, which
> needs a source rather than a pixel edit.

---

# Part 1 — Retractions

## R1. Hip Fracture pages 1, 3 and 6 — the dot rows are CORRECT

Previously reported as: pages 1 and 3 carrying eleven dots with the fill one position late, and page 6
filling the 7th of ten.

At full resolution: **page 1 fills the 1st of ten, page 3 the 3rd of ten, page 6 the 6th of ten. All
correct.** Pages 4, 5, 7, 8 and 9 are also correct.

**Hip Fracture's only dot fault is page 10.** Please disregard everything previously said about pages
1, 3 and 6.

## R2. The "three template generations" grouping does not hold

Previously reported as: the wrong ICD-10 code and the broken dot rows falling on exactly the same
three pages, called very unlikely to be coincidence, and used to argue four re-renders would resolve
several items at once.

That rested on pages 1 and 3 having broken dot rows. They do not. **The correlation was an artifact of
a bad measurement.** The ICD-10 split across pages 1–3 versus 4–9 is real and still points at two
generations of the code field, but the code, the dots and the footer are **three independent faults**.

*A real template correlation does exist — see §T1. It is a different one, and it is supported by
evidence in both galleries.*

## R3. Low Back Pain page 5's dot row is CORRECT

Previously reported as filling the 4th of ten. At full resolution it fills the **5th of ten**.

The rest of the Low Back Pain dot finding **stands and is confirmed** — see §T2.

---

# Part 2 — TEMPLATE faults

## T1. Two footer templates are in circulation, and one of them is broken

This is the correlation worth acting on, and it is visible in both galleries.

**The working footer** carries `© 2025 Rounds Codex, Inc. All rights reserved.` and
`Learn. Understand. Succeed.`, and places *"Not a Substitute for Professional Medical Advice."* on its
**own centred line**. Used by **Low Back Pain pages 1–7**. Correct.

**The broken footer** has no copyright line and no tagline, and wraps the disclaimer **inside the
CATEGORY column, underneath "MSK & Rheum"**. Used by **Low Back Pain pages 8, 9, 10** and **all ten Hip
Fracture pages**.

| gallery | pages | footer | disclaimer |
|---|---|---|---|
| Low Back Pain | 1–7 | carries © 2025 + tagline | own centred line — **correct** |
| Low Back Pain | 8, 9, 10 | no © line | inside CATEGORY column — **collides** |
| Hip Fracture | 1–9 | no © line | inside CATEGORY column — **collides** |
| Hip Fracture | 10 | no © line | inside CATEGORY column, italicised — **collides, styled differently again** |

**Please bring every page onto the footer that carries the copyright line.** That fixes the collision
everywhere in one change.

**Two things this makes visible that are worse than a layout bug:**

- **No Hip Fracture page carries a copyright notice at all.** Twenty pages were delivered and ten of
  them have no `© 2025 Rounds Codex, Inc.` line. That is a rights matter, not cosmetics.
- The disclaimer is legally required on every page, so it should not be *able* to collide with
  anything. Whichever footer survives, please give it a layout where that text cannot be pushed into
  another column.

## T2. The header progress dots

**A wrong dot count is cosmetic. A wrong dot index tells the reader they are on a different page than
they are** — that is why this one matters.

**Hip Fracture — one page wrong:**

| page | dots | fill | verdict |
|---:|---:|---|---|
| 1, 3, 4, 5, 6, 7, 8, 9 | 10 | current page | **correct** |
| 10 | 10 | **nine filled blue, the tenth left white** — cumulative *and* inverted, so the current page is the only *unfilled* dot | **wrong** |
| 2 | — | not seen at full resolution | **please verify** |

**Low Back Pain — the row loses a dot from page 6, and the fill goes one behind with it:**

| pages | dots | fill | verdict |
|---|---:|---|---|
| 1, 2, 3, 4, 5 | 10 | current page | **correct** |
| 6, 7, 8, 9, 10 | **9** | position *n*−1 (page 6 fills the 5th, page 10 the 9th) | **wrong** |

The pattern is self-consistent across all five affected pages, which is what makes it credible: a
ten-page gallery is rendering nine dots, and because one is missing the highlight sits one place early
throughout.

*Confidence: high on the pattern. Exact counts should still be checked against your own exports — a
dot count in this batch has already been misread twice from screenshots, which is why §R1 and §R3
exist.*

## T3. Hip Fracture page 10 is built from a different template again

- **No ICD-10 field at all** (see H1)
- Title block **centred**, where every other page is left-aligned
- "MSK & RHEUM" and "V1.0" stacked, with **V1.0 missing the pill badge** every other page gives it
- Dots cumulative and inverted (T2)
- Footer disclaimer italicised, styled unlike the other nine (T1)

Please bring it onto the same template as pages 1–9, then onto the corrected footer from T1.

## T4. Version label casing differs between the two galleries

Hip Fracture uses **V1.0**; Low Back Pain uses **v1.0**. Trivial, but they sit side by side in the app.

---

# Part 3 — Hip Fracture

## H1. The ICD-10 code is inconsistent, and page 10 has none

| pages | code shown |
|---|---|
| 1, 3 (and 2, reported) | **M80.00XA** |
| 4, 5, 6, 7, 8, 9 | **S72.009A** |
| 10 | **none — field absent** |

Please use **S72.009A on all ten**, matching the app and the six confirmed-correct pages.

This is not simply a typo, and the reasoning is worth recording: for a genuine fragility fracture there
is a real argument for the M80 *pathological fracture* family — arguably this gallery's whole thesis.
But **M80.00XA is the unspecified-site member of that family**; the femur-specific code is M80.05-. So
even on its own terms the code shown is the wrong one.

## H2. Page 4 gives fasting advice that page 7 gets right — and the app marks wrong

Both confirmed at full resolution:

- Page **4**, IMMEDIATE NURSING PRIORITIES: **"Maintain NPO after midnight (if surgery likely)."**
- Page **7**, PRE-OPERATIVE CHECKLIST: **"NPO status per anesthesia."**

**Page 7 is correct. Please change page 4 to match its wording.**

Blanket nil-by-mouth-after-midnight has been superseded by minimising fasting, with clear fluids
permitted up to two hours before anaesthesia. Prolonged fasting in a frail older adult contributes to
the very delirium and dehydration page 4 is trying to prevent — and page 4 devotes a whole panel to
delirium risk factors, dehydration among them.

It also contradicts the app directly: the Hip Fracture quiz asks which arrival intervention most
reduces delirium risk, and *"Keeping her NPO from arrival until surgery"* is **marked incorrect**. A
student can read page 4 and be told one tap later that it is wrong.

## H3. Page 10's one-year mortality figure disagrees with pages 1 and 3

- Pages 1 and 3: "High 1-year mortality **(15–30%)**"
- Page 10: "1-YEAR MORTALITY **20%–30%**"

**Please change page 10 to 15–30%, not the other two.** 20–30% is the classic teaching figure and sits
at the top of the contemporary range; recent series cluster nearer 16–22%. The app's module was
deliberately moved from 20–30% to 15–30% for that reason, so page 10 quotes the figure we have just
moved away from.

## H4. Page 10's discharge-destination chart looks inverted — please check it against a source

The donut reads **55% Home with Support / 25% Inpatient Rehabilitation / 20% Skilled Nursing Facility**.

That does not match the usual picture for hip fracture, where the **majority** of patients are
discharged to post-acute care and a **skilled nursing facility is typically the single largest
destination**, with discharge directly home the minority. As drawn, the chart tells a trainee to expect
close to the opposite of what they will see on the ward.

Please either **cite the source and population** on the page, or correct the proportions. If the figure
comes from a particular registry or country, say so — destination mix varies a great deal by health
system, and an uncited chart reads as universal.

Two smaller things in the same panel:

- The donut centre says **"BEST OUTCOMES WITH REHABILITATION"** while the legend credits *Home with
  Support* with "best outcomes with adequate support" and *Inpatient Rehabilitation* with "best
  functional recovery". Three superlatives, no ranking — pick one claim.
- There is no denominator or date anywhere on the chart.

## H5. Pages 6 and 7 duplicate each other, and the algorithm is near-verbatim

Confirmed at full resolution. Page 6 is "Imaging Evaluation", page 7 "Diagnostic Imaging & Workup".
Both carry an IMAGING ALGORITHM panel:

| step | page 6 | page 7 |
|---:|---|---|
| 1 | "Initial study: AP pelvis + lateral hip X-ray" | "Initial: AP pelvis + lateral hip X-ray" |
| 2 | "If X-ray negative but high clinical suspicion → MRI (most sensitive)" | "If X-ray negative but high suspicion → MRI (most sensitive)" |
| 3 | "If MRI unavailable → CT (good for cortical bone)" | "If MRI unavailable → CT (good for cortical bone)" |
| 4 | "CT useful for pre-op planning and complex fractures" | "Use imaging results to classify fracture and plan management" |

Steps 1–3 are the same instruction twice over. Both pages also carry **AP pelvis and cross-table
lateral radiographs**, both state **MRI most sensitive for occult fracture** and **CT for cortical bone
detail**, and both carry an "assess for / look for" checklist of essentially the same items.

Each page does have unique material worth keeping:

- **Page 6 only:** CT 3D reconstruction, coronal STIR MRI, special considerations (osteopenia making
  fractures subtle, reviewing both hips, associated pubic rami / sacral / acetabular fractures)
- **Page 7 only:** laboratory evaluation, cardiac risk stratification with the six RCRI factors,
  fracture classification (subcapital / transcervical / basicervical; stable 2-part vs unstable
  3–5 part vs reverse obliquity; within 5 cm below the lesser trochanter), the pre-operative checklist,
  bone scan as an alternative

**The duplication is in the middle.** Ten pages is a fixed budget, and this costs one — see H6, where
the contents list expects a page that was never delivered.

## H6. Page 1's contents list is one behind, skips ⑧, and omits Treatment & Management

Confirmed at full resolution. As delivered: ① Anatomy & Classification ② Pathophysiology ③ Clinical
Presentation ④ Physical Exam ⑤ Diagnostic Workup ⑥ Imaging ⑦ Treatment & Management **⑨** Complications
& Prognosis ⑩ Clinical Pearls — nine items numbered 1–7 then **9–10**.

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

Please renumber the list to match the pages. **And please confirm whether "Treatment & Management" was
meant to be a page** — it never appears as one, and no delivered page covers surgical timing or the
fixation-versus-arthroplasty decision, which are the core decisions in this condition. Page 10 mentions
"Operate early: ≤ 48 hours" in a single pearl and that is the whole treatment content in the gallery.

**Folding the pages 6/7 duplication (H5) into one page frees exactly the slot this needs.**

## H7. Page 5 — the sensation map mislabels the deep peroneal nerve territory

Under NEUROVASCULAR EXAM, "Test sensation" reads:

```
- Dorsum of foot (deep peroneal)
- 1st web space
- Plantar foot
```

and the SENSATION MAP legend is **Deep peroneal / Sural / Saphenous / Plantar**.

**The deep peroneal nerve supplies only the first dorsal web space.** Most of the dorsum of the foot is
**superficial peroneal**, which is absent from the legend entirely. So the page attributes a large
territory to the wrong nerve, and the two bullets are redundant as written — "1st web space" *is* the
deep peroneal test.

Suggested:

```
- Dorsum of foot (superficial peroneal)
- 1st web space (deep peroneal)
- Plantar foot (tibial)
```

and add **superficial peroneal** to the legend as its own colour.

This is more than a labelling nitpick: a reader who documents intact sensation over the dorsum and
records it as deep peroneal has not tested the nerve they think they tested.

**Please check the map's colour regions against the corrected legend when re-rendering** — if the
purple "deep peroneal" region currently covers the broad dorsum, the artwork needs changing too, not
just the text.

### H7a. The map is a PLANTAR view, so the artwork needs a full redraw — not a relabel

Examined at full resolution 2026-08-10. **The SENSATION MAP is a plantar (sole) view** — toe pads,
arch and heel pad are all visible. That makes the defect larger than described above, because two of
the three structures the exam bullets ask the reader to test are on the *dorsum* and a sole view
cannot show them at all.

Colour regions as drawn, sampled against the legend swatches:

| region of the sole | colour drawn | legend meaning | correct |
|---|---|---|---|
| all toes | green | Saphenous | **wrong** — saphenous never reaches the toes |
| central sole | blue | Sural | **wrong** — sural is a thin lateral border strip only |
| medial ball | purple | Deep peroneal | **impossible** — deep peroneal supplies no plantar skin |
| medial arch | pink | *not in the legend* | **wrong** — medial plantar |
| heel | orange | Plantar | roughly right (medial calcaneal) |

**The entire sole is tibial-nerve territory** (medial and lateral plantar, medial calcaneal at the
heel), with only thin sural and saphenous border strips. Six colours appear on a four-item legend, so
the panel reads as a generic reflexology-style foot rather than a nerve map built to this legend.
**No peroneal branch belongs on a plantar view.**

**Requested correction: replace the panel with a DORSAL view**, which is what the corrected exam
bullets teach — superficial peroneal across the broad dorsum, deep peroneal confined to the first web
space, sural along the lateral border, saphenous along the medial border. If a plantar inset is kept
alongside it, it should be almost entirely "Plantar"/tibial with thin sural and saphenous borders.

**An approved reference render exists.** Dr. Kreithen approved a generated dorsal map on 2026-08-10
to show the intended territories; see `galleries-staging/artwork-fixes/` and the note in
`HANDOFF-anatomy-label-corrections.md`. It is a **specification of the layout, not final artwork** —
please re-render from source in the gallery's own style.

**Note that the legend and the bullets change too**, so this page cannot be corrected by swapping the
picture alone: the legend gains **Superficial peroneal** as a fifth colour, and the bullets become
"Dorsum of foot (superficial peroneal) / 1st web space (deep peroneal) / Plantar foot (tibial)".

## H8. Page 9 — the complications shown are arthroplasty-specific, unlabelled

RECOGNIZE & REPORT COMPLICATIONS gives five: infection, DVT/PE, **dislocation**, **implant loosening**,
**periprosthetic fracture**. The last three occur after **arthroplasty**; they are not the failure modes
after internal fixation of an intertrochanteric or subtrochanteric fracture, where the relevant problems
are lag-screw cut-out, implant migration, malunion and nonunion — all of which pages 1 and 3 correctly
raise as risks.

Since the gallery teaches the intracapsular-versus-extracapsular distinction on pages 1 and 3, and
extracapsular fractures are usually fixed rather than replaced, please either **label the panel "after
hip replacement"** or add the fixation failure modes alongside.

## H9. "NOF" is a superseded name, on pages 1 and 10

Both CLINICAL SOURCE lines read "AAOS, NICE, ACR Appropriateness Criteria, **NOF**, ACP Clinical
Guidelines". The National Osteoporosis Foundation became the **Bone Health and Osteoporosis Foundation
(BHOF)** in 2021. Minor, but it dates the page.

## H10. Page 3 — two versions arrived

**The canonical one is the version with "Advanced age (>65 years)"** in FACTORS THAT INCREASE RISK,
confirmed by the physician and confirmed present at full resolution. Please discard the other take.

---

# Part 4 — Low Back Pain

## B1. Page 9 — "Muscle relaxants" is split across two bullets

Confirmed at full resolution. In MEDICATIONS under CONSERVATIVE FIRST-LINE THERAPY:

```
• NSAIDs
• Acetaminophen
• Muscle
• relaxants
• Topical agents
```

It reads as two separate drug classes. Should be one bullet: **"Muscle relaxants"**.

## B2. Page 4 — typo inside the artwork

Confirmed at full resolution. PSYCHOSOCIAL "YELLOW FLAGS" box: *"Addressing yellow flags improves
**fanction** and reduces chronicity."* → **function**.

## B3. Pages 7 and 9 overlap substantially — a question, not a fault

Page 7 "Management Overview" (stepwise by time) and page 9 "Treatment & Management" (by modality) both
carry a medications list, surgical indications and interventional options. Epidural steroid injection
and facet joint injection appear on both; the surgical indication lists are near-identical (progressive
neurologic deficit, cauda equina, structural instability, refractory radiculopathy).

Each does have unique material — page 7 has medial branch block, radiofrequency ablation and spinal
cord stimulation; page 9 has trigger point injection and the non-pharmacologic modalities. **Content
decision for the physician, not a production fault.**

---

# What full resolution confirmed as correct — please do not re-open these

- **Logo lockup** — the canonical ℞ waveform mark on all twenty pages, both galleries.
- **Low Back Pain ICD-10 M54.50** on all ten pages, matching the app.
- **Low Back Pain page 6's cross-reference** — "Red Flags Present? (See Image 4)" correctly points at
  page 4, which does carry the red flags.
- **Myotome and sensory mapping is internally consistent.** Page 2's L2 hip flexion / L3 knee extension
  / L4 ankle dorsiflexion / L5 great toe extension / S1 plantarflexion agrees with page 5's patellar
  (L4) and Achilles (S1) reflexes and its L4 medial leg / L5 dorsal foot / S1 lateral foot sensory
  areas. An earlier concern here was mistaken and is withdrawn.
- **The 90% / 6 weeks figure** (Low Back Pain pages 7 and 10) — reviewed by the physician and **stays as
  drawn**. Page 1's softer "improve substantially within ~6 weeks" matches the app's module wording.
- **15–30% mortality** on Hip Fracture pages 1 and 3, so only page 10 disagrees.
- **Hip Fracture page 7's RCRI panel** — all six factors correct (high-risk surgery, ischemic heart
  disease, heart failure, cerebrovascular disease, insulin-treated diabetes, creatinine > 2.0 mg/dL).
- **Hip Fracture page 3's blood-supply logic** — intracapsular disrupting retinacular vessels with
  higher AVN and nonunion risk, extracapsular preserving supply, subtrochanteric carrying mechanical
  risk. Correct, and the atypical femur fracture panel (long-term bisphosphonate use, transverse
  pattern, prodromal thigh/groin pain, image the contralateral femur) is correct too.
- **Hip Fracture page 8** — bone histology labelling (osteon, central canal, concentric lamellae,
  lacunae with osteocytes, canaliculi; trabeculae, marrow adipocytes, osteoblast lining, osteoclast
  resorption), the four healing stages with their timings, and the special stains (trichrome for
  osteoid/fibrosis, ALP for osteoblast activity, TRAP for osteoclasts, immunohistochemistry for
  metastases) all check out. This page is clean.
- **Low Back Pain page 8** — disc degeneration, annular tear / high-intensity zone, facet
  osteoarthritis, ligamentum flavum hypertrophy, enthesopathy and nerve root inflammation all correctly
  labelled, with the appropriate caution that microscopic findings correlate poorly with pain severity.
  Clean.

---

# Export specification, for whichever pages get re-rendered

- **1024×1536** (2:3 portrait), JPEG q88. If your pipeline outputs 1536×2304 we downscale — but a
  gallery must ship **one** size throughout, so please do not mix.
- Page order is read from the **`IMAGE n OF 10` header strip**, never filenames — every batch so far has
  arrived shuffled, so the header is the only thing we trust.
- Keep the canonical ℞ waveform logo lockup, which is correct in this batch.
- **Send the page files themselves**, at that resolution — either the ten `..._Proof.png` renders or the
  production gallery PDF, the way the PAD package was delivered. Phone screenshots are excellent for
  review and cannot be built from.
