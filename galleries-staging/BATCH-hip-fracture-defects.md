# For production: defects in the Hip Fracture batch (2026-08-08)

Received for `hip-fracture` (MSK & Rheum): pages **1, 3, 4, 5, 6, 7, 8, 9, 10** — plus a **second,
different version of page 3**. **Page 2 is outstanding**, and page 1's contents list says it should
be "Anatomy & Classification".

The artwork is strong and the clinical content is largely excellent. Nine issues below. The first
four would ship without anyone noticing, and three of them are the gallery **disagreeing with
itself** — which matters more than a single wrong value, because a reader flipping through sees both.

Read from forwarded screenshots rather than the delivered files, so anything involving small type or
counting needs confirming at full resolution.

---

## 1. The ICD-10 code is inconsistent, and page 10 has none at all

| page | code shown |
|---:|---|
| 1 | **M80.00XA** |
| 3 (both versions) | **M80.00XA** |
| 4, 5, 6, 7, 8, 9 | **S72.009A** |
| 10 | **none — the field is absent** |

The app's Hip Fracture page uses **S72.009A**, which is also the majority here, so pages 1 and 3
need changing and page 10 needs the field restored.

This is not simply a typo. For a genuine fragility fracture there is a real argument for the M80
*pathological fracture* family — that is this gallery's whole thesis. But **M80.00XA is the
unspecified-site member of it**; the femur-specific code is M80.05-. So even on its own terms, the
code shown is the wrong one. Simplest resolution is S72.009A on all ten to match the app and the
other seven pages.

---

## 2. The one-year mortality figure changes between pages

- Pages **1 and 3**: "High 1-year mortality **(15–30%)**"
- Page **10**: "1-YEAR MORTALITY **20%–30%**"

The app's module says **15–30%**, so pages 1 and 3 are right and page 10 should match them. Please
change page 10, not the other two.

Context worth having: 20–30% is the classic teaching figure and it sits at the top of the
contemporary range — recent series cluster nearer 16–22%. The module was corrected from 20–30% to
15–30% for exactly that reason. So page 10 is quoting the figure we have just moved away from.

---

## 3. Page 4 tells the reader to do something page 7 gets right — and the app's quiz marks wrong

- Page **4**, immediate nursing priorities: **"Maintain NPO after midnight (if surgery likely)."**
- Page **7**, pre-operative checklist: **"NPO status per anesthesia."**

**Page 7 has it right.** Blanket nil-by-mouth-after-midnight has been superseded by minimising
fasting, with clear fluids permitted up to two hours before anaesthesia; prolonged fasting in a frail
older adult contributes to the very delirium and dehydration page 4 is trying to prevent.

It also contradicts the app directly: the Hip Fracture quiz asks which arrival intervention most
reduces delirium risk, and *"Keeping her NPO from arrival until surgery"* is **marked incorrect**. A
student can read page 4 and be told one tap later that it is wrong.

Fix page 4 to match page 7's wording.

---

## 4. Pages 6 and 7 duplicate each other, including the algorithm verbatim

Page 6 is "Imaging Evaluation"; page 7 is "Diagnostic Imaging & Workup". Both carry:

- the **same four-step imaging algorithm** — AP pelvis + lateral X-ray → MRI if X-ray negative with
  high suspicion → CT if MRI unavailable → use results to plan — reproduced almost word for word
- AP pelvis and cross-table lateral radiographs
- MRI as most sensitive for occult fracture, CT for cortical bone detail
- a "look for / assess for" checklist of essentially the same items

Page 1's contents list expects **"Diagnostic Workup"** and **"Imaging"** as two separate pages, so
the intent was two topics; what arrived is one topic twice. Page 7's unique material (labs, RCRI
cardiac risk, fracture classification, pre-op checklist) and page 6's (3D reconstruction, occult-
fracture special considerations) are both worth keeping — the duplication is in the middle.

Ten pages is a fixed budget, so this costs a page that could cover something else.

---

## 5. Page 10 uses a different template from the other nine

- **No ICD-10 field** (see §1).
- The title block is **centred**, where every other page is left-aligned.
- "MSK & RHEUM" and "V1.0" are stacked without the pill badge the others use.
- The progress dots are **cumulative and inverted**: nine filled with the tenth left open, so the
  current page is the only *unfilled* one. Every other page fills exactly the current dot.

The cumulative-dot fault is the documented defect from `DOTS-defect-for-production.md`; the inversion
on top of it is new.

---

## 6. The progress dots — page-specific, not uniform

Counted off the forwarded images:

| pages | dots | fill | verdict |
|---|---|---|---|
| 4, 5, 6, 7, 8, 9 | 10 | current page | **correct** |
| 1, 3 | appear to be **11** | 3rd on one page-3, 4th on the other | check |
| 10 | 10 | cumulative, inverted | wrong (see §5) |

**Low confidence on pages 1 and 3.** Eleven-versus-ten is precisely the count that cannot be made
reliably from a downscaled image. What makes it worth checking is that six pages here are
demonstrably correct at ten dots, so the row is not uniformly broken — it is wrong on specific pages,
including differing between the two page-3 versions. Flag for re-render; we do not repaint delivered
pages.

---

## 7. Two different versions of page 3

Both are "Pathophysiology", both labelled `IMAGE 3 OF 10`, and they differ:

- one has **"Advanced age"**, the other **"Advanced age (>65 years)"**
- the risk-factor grid has different internal dividing rules
- the intracapsular panel places the "Disrupted retinacular vessels" callout differently
- the subtrochanteric illustration renders the lateral vessel differently
- their dot rows fill different positions

The ">65 years" version looks newer. **Confirm which is canonical** — building from the wrong take
silently ships superseded artwork, which has happened here before with a re-fired image set.

---

## 8. Page 1's contents list skips number 8 and is offset

> ① Anatomy & Classification ② Pathophysiology ③ Clinical Presentation ④ Physical Exam
> ⑤ Diagnostic Workup ⑥ Imaging ⑦ Treatment & Management **⑨** Complications & Prognosis
> ⑩ Clinical Pearls

Nine items numbered 1–7 then 9–10. Now that the full set has arrived it is clear how far off it is —
the delivered pages are:

| page | actual title | list expects |
|---:|---|---|
| 3 | Pathophysiology | ② Pathophysiology |
| 4 | Clinical Presentation | ③ Clinical Presentation |
| 5 | Physical Exam | ④ Physical Exam |
| 6 | Imaging Evaluation | ⑤ Diagnostic Workup |
| 7 | Diagnostic Imaging & Workup | ⑥ Imaging |
| 8 | Microscopic Pathology | ⑦ Treatment & Management |
| 9 | Rehabilitation & Long-Term Outcomes | ⑨ Complications & Prognosis |
| 10 | Clinical Pearls & Key Takeaways | ⑩ Clinical Pearls |

So the list is one behind throughout, **and Treatment & Management never appears as a page at all** —
which is a notable gap for this condition, since surgical timing and fixation-versus-arthroplasty are
the core decisions. Renumber the list 2–10 to match the pages, and confirm whether Treatment &
Management was meant to be page 2 or was dropped.

---

## 9. The footer disclaimer collides with the metadata columns

On pages 1, 3, 4, 5, 6, 7, 8 and 9, *"Not a Substitute for Professional Medical Advice."* wraps
underneath "MSK & Rheum" inside the CATEGORY column instead of sitting on its own line. Page 10
renders it differently again, italicised on its own line.

**Same template fault as the Low Back Pain batch** — worth fixing once in the template.

---

## Cleared on this batch

- **Logo lockup** — correct ℞ waveform mark on all ten.
- **Page 8 histology is accurate throughout** — osteon and Haversian system, concentric lamellae,
  lacunae and canaliculi, osteoblast lining versus osteoclast resorption, and the special stains
  (TRAP for osteoclasts, ALP for osteoblasts, trichrome for collagen) are all correctly assigned.
- **Fracture classification and blood supply** — intracapsular versus extracapsular, retinacular
  vessels, the AVN and nonunion consequence. Matches the module.
- **Atypical femoral fracture** — bisphosphonate use, transverse pattern, prodromal thigh pain, image
  the contralateral femur. Matches the module.
- **"Operate early: ≤ 48 hours"** on page 10 matches the module's 24–48 hour target.
- **Page 5's exam page** — do not passively move the hip, log roll, heel tap, full neurovascular
  assessment. Sound.
- One small editorial point, not a defect: page 10's discharge-destination legend describes both
  "Home with Support" and "Inpatient Rehabilitation" as giving the best outcome. One of them should
  probably be phrased differently.
