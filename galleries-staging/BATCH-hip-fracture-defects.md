# For production: defects in the Hip Fracture batch (2026-08-08)

Received for `hip-fracture` (MSK & Rheum): pages **1, 3, 4, 5** — plus a **second, different version
of page 3**, so five files covering four pages. Pages 2, 6, 7, 8, 9 and 10 are outstanding.

The artwork is strong and the clinical content is good. **Two defects below would have shipped
silently**, so they come first.

As with the Low Back Pain batch, this was read from forwarded screenshots rather than the delivered
files, so anything involving small type or counting needs confirming at full resolution.

---

## 1. The ICD-10 code changes between pages

| page | code shown |
|---:|---|
| 1 | **M80.00XA** |
| 3 (both versions) | **M80.00XA** |
| 4 | **S72.009A** |
| 5 | **S72.009A** |

The app's Hip Fracture page uses **S72.009A**, so pages 1 and 3 disagree with the app *and* with the
rest of the batch. The header code appears on every card, so a reader flipping through sees it change
mid-gallery.

Worth saying which is which, because this is not simply a typo:

- **S72.009A** — fracture of the neck of the femur, initial encounter, closed. The injury code.
- **M80.00XA** — age-related osteoporosis with current pathological fracture, *unspecified site*.

For a genuine fragility fracture there is a real coding argument for the M80 family, and this
gallery's whole thesis is that these are fragility fractures. But **M80.00XA is the unspecified-site
code** — the femur-specific one is M80.05-. So if the intent was to code it as a pathological
fracture, the code shown is the wrong member of that family.

**Please make it one code on all ten pages.** Which one is the physician's call; the app currently
says S72.009A, so matching that is the smaller change.

---

## 2. Two different versions of page 3

Both are "Pathophysiology" and both are labelled `IMAGE 3 OF 10`. They differ, so one is a revision:

- one has **"Advanced age"**, the other **"Advanced age (>65 years)"**
- the risk-factor grid has different internal dividing rules
- the intracapsular panel places the "Disrupted retinacular vessels" callout differently
- the subtrochanteric illustration renders the lateral vessel differently
- their header progress dots appear to fill **different positions** as well

The version with "(>65 years)" looks like the newer one. **Confirm which is canonical** — I will not
guess, because a gallery built from the wrong take silently ships superseded artwork, which has
happened before with a re-fired image set.

---

## 3. Page 1's contents list skips number 8

"WHAT WE WILL COVER" reads:

> ① Anatomy & Classification ② Pathophysiology ③ Clinical Presentation ④ Physical Exam
> ⑤ Diagnostic Workup ⑥ Imaging ⑦ Treatment & Management **⑨** Complications & Prognosis
> ⑩ Clinical Pearls

Nine items, numbered 1–7 then 9–10. Two problems:

- **8 is missing** from the sequence.
- The numbering does not match the actual page numbers. Item ② is Pathophysiology, which is
  *page 3*; item ③ is Clinical Presentation, which is *page 4*; item ④ is Physical Exam, which is
  *page 5*. So the list is running one behind the pages it points at, and mapped onto pages 2–10 the
  last item falls off the end of the gallery.

Simplest fix: number the list **2–10** to match the page numbers, and confirm what page 8 is.

---

## 4. Page 4 tells the reader to do something the app's own quiz marks wrong

Under IMMEDIATE NURSING PRIORITIES: **"Maintain NPO after midnight (if surgery likely)."**

The Hip Fracture quiz in the app asks which intervention on arrival most reduces delirium risk, and
option E — *"Keeping her NPO from arrival until surgery"* — is **marked incorrect**. A student can read
the instruction on the card and then be told it is wrong one tap away.

It is also out of step with current practice: blanket nil-by-mouth-after-midnight has been superseded
by minimising fasting, with clear fluids permitted up to two hours before anaesthesia, and prolonged
fasting in a frail older adult contributes to the delirium and dehydration this very page is trying to
prevent.

Suggested replacement, matching the app: **"Follow the fasting protocol — avoid prolonged NPO; clear
fluids per anaesthesia guidance."** The physician should confirm the wording.

---

## 5. The footer disclaimer collides with the metadata columns

On all four pages, *"Not a Substitute for Professional Medical Advice."* wraps underneath
"MSK & Rheum" inside the CATEGORY column instead of sitting on its own line. **This is the same
template fault as the Low Back Pain batch** — worth fixing once in the template rather than per
gallery.

---

## 6. The header progress dots look wrong again, differently

Counting off the forwarded images, pages 1 and 3 appear to carry **eleven** dots on a ten-page
gallery, and the two page-3 versions seem to fill different positions. Pages 4 and 5 look correct at
ten dots with the right index.

**Low confidence on the exact counts** — these were read from downscaled images and eleven-versus-ten
is precisely the count I cannot make reliably that way. But an eleven-dot row on a ten-page gallery is
the documented defect from the neurology batch, so please check the row against the template. Flag for
re-render; we do not repaint delivered pages.

---

## Cleared on this batch

- **Logo lockup** — correct ℞ waveform mark on all four pages.
- **One-year mortality quoted as 15–30%**, which matches the app's module exactly. The module was
  corrected to that range today, down from an overstated 20–30%, so this is now consistent.
- **Fracture classification** — femoral neck intracapsular, intertrochanteric and subtrochanteric
  extracapsular, with the retinacular blood supply and the AVN/nonunion consequence. Matches the
  module.
- **Atypical femoral fracture** — bisphosphonate use, transverse pattern, prodromal thigh pain, image
  the other femur. Matches the module.
- **Physical exam page** — "do not passively move the hip", log roll, heel tap, full neurovascular
  assessment. Sound and consistent.
