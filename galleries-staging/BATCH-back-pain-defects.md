# For production: defects in the Low Back Pain batch (2026-08-08)

Ten pages received for `back-pain` (ICD-10 M54.50, MSK & Rheum). **The clinical content is good and
the logo lockup is correct on all ten** — the ℞ waveform mark, no repaint needed, which is a first in
several batches. Four things need fixing at your end.

Read from the images the physician forwarded, not from the delivered files, so the numbers in §1 in
particular need confirming at full resolution before anyone acts on them.

---

## 1. The header progress dots — wrong from page 5, and wrong in two ways

Counted off the forwarded images:

| page | dots in the row | filled position | should be |
|---:|---:|---:|---|
| 1 | 10 | 1st | correct |
| 2 | 10 | 2nd | correct |
| 3 | 10 | 3rd | correct |
| 4 | 10 | 4th | correct |
| 5 | 10 | **4th** | 5th |
| 6 | **9** | **5th** | 6th of 10 |
| 7 | **9** | **6th** | 7th of 10 |
| 8 | **9** | **7th** | 8th of 10 |
| 9 | **9** | **8th** | 9th of 10 |
| 10 | **9** | **9th** | 10th of 10 |

Two separate faults, and they start at different pages:

- **The fill lags one position from page 5 onward.** Every page from 5 to 10 highlights the dot for
  the previous page.
- **The row loses a dot from page 6 onward** — nine dots on a ten-page gallery.

A wrong dot *count* is cosmetic. A wrong dot *index* tells the reader they are on a different page
than the header says, which is why this one matters.

**Confidence:** the pattern is consistent across six pages, so something is certainly wrong; the
exact counts were read off downscaled images and should be verified against the delivered files.

This is the same defect class as `DOTS-defect-for-production.md` — it has now appeared with the count
wrong, the fill cumulative, and the index off, in different batches. **Please fix it in the template
rather than per page.** We do not repaint delivered pages: it was attempted once and produced
visibly damaged artwork.

---

## 2. The footer disclaimer collides with the metadata columns

On pages **8, 9 and 10**, *"Not a Substitute for Professional Medical Advice."* wraps underneath
"MSK & Rheum" inside the CATEGORY column instead of sitting on its own line at the foot of the card.
Pages 6 and 7 are correct. Page 1 appears to have a related misalignment in the same strip.

It is legally required text on every page, so it should not be able to collide with anything.

---

## 3. Page 9 — "Muscle relaxants" is split across two bullets

In the Medications list under CONSERVATIVE FIRST-LINE THERAPY:

```
• NSAIDs
• Acetaminophen
• Muscle
• relaxants
• Topical agents
```

It reads as two separate drug classes. Should be one bullet, "Muscle relaxants".

---

## 4. Page 4 — typo inside the artwork

Psychosocial "Yellow Flags" box: *"Addressing yellow flags improves **fanction** and reduces
chronicity."* → **function**.

---

## Not a defect, but a question for the physician

**The "90% of acute low back pain improves within 6 weeks" figure** appears twice — as the headline
statistic on page 10 and in Key Pearls on page 7. It is a widely published number, but it is
optimistic against current cohort evidence, where roughly a third still report moderate pain at three
months and a majority report some pain at a year. The app's own module text says "improve
*substantially* within about 6 weeks", which is deliberately softer. Either the artwork softens or
the module firms up — the physician decides, and this is not something for production to change
unprompted.

The 60% recurrence-within-a-year figure on page 10 is well supported and can stay as it is.

**Pages 7 and 9 overlap substantially.** "Management Overview" (stepwise by time) and "Treatment &
Management" (by modality) both carry medications, surgical indications and interventional options;
epidural steroid injection and facet injection appear on both. Ten pages is a fixed budget, so one
of them may be worth repurposing — again a content decision, not a production fault.

---

## Cleared on this batch

- **Logo lockup** — correct ℞ waveform mark on all ten pages.
- **Clinical accuracy** — the durations, the 85–90% nonspecific figure, L4–S1 for sciatica, the red
  flag list, the sensory maps and the imaging guidance all match the app's module.
- **Myotome mapping** — page 2 assigns L4 to ankle dorsiflexion while page 5 puts the patellar reflex
  at L4. That is **not** a contradiction: L4 contributes to both knee extension (L2–L4) and
  dorsiflexion (L4–L5). No change needed. The app's module text has been reworded instead, to screen
  by movement rather than giving each root one job, so the two now read consistently.
