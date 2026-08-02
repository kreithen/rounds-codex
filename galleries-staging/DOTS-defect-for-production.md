# Re-render request: gallery page headers — 110 pages across 11 galleries

**For:** whoever maintains the gallery page template.
**Scope:** the header strip only. **No artwork below the header needs to change**, with the
exception of three typos listed at the end.
**Evidence:** `DOTS-evidence/<gallery>-headers.png` — one contact sheet per gallery showing all
ten header strips stacked in page order. Everything asserted here is visible in those images.

## Galleries affected

| gallery | delivered | pages |
|---|---|---|
| myasthenia | 2026-08-01 | 10 |
| icp, sci, migraine, iron-anemia, b12-anemia, sickle-cell, leukemia, lymphoma, thrombocytopenia | 2026-08-01 (one 90-page batch) | 90 |
| dic | 2026-08-01, hours after the batch | 10 |

All 110 are live. The defect is cosmetic, which is why they shipped, but it is on every page of
every gallery and it is now the only thing wrong with an otherwise good body of work.

---

## What the header strip should do

Under the text `IMAGE n OF 10` there is a row of dots that indicates position in the gallery.
For a ten-page gallery it should be, on every page:

* **exactly 10 dots** — the same number as pages in the gallery
* **exactly one filled**, at position *n*
* **one marker style** — filled disc for current, hollow ring for the rest

So page 4 of 10 is ten dots, the fourth filled, nine hollow. That is the entire specification.

---

## Defect 1 — the dot COUNT is not the page total

Pages carry **9, 10, 11, 12 or 13 dots** on ten-page galleries, and the count varies from page to
page *within a single gallery*.

Verified example: myasthenia runs 10, 10, 10, 10, 10, 10, 11, 11, 11, 12 across its ten pages.
Because that is one gallery with one page total, the count cannot be coming from a per-gallery
configuration value. It looks like the row is being sized from something that accumulates.

Bacterial meningitis page 6 from the July batch was measured directly off the delivered PNG:
11 dots at a 27 px pitch spanning x=372 to x=648, the 6th filled cyan (RGB ≈ 2,111,177), the
other ten grey rings (RGB ≈ 130,130,130). Fill position right, count wrong.

## Defect 2 — the fill is CUMULATIVE on some galleries

Every dot up to and including the current page is filled, so the strip reads as a progress bar
rather than a position marker.

| gallery | page | filled | should be |
|---|---|---|---|
| myasthenia | 5 of 10 | first 5 | only the 5th |
| myasthenia | 10 of 10 | first 11 | only the 10th |
| dic | 4 of 10 | first 3 | only the 4th |
| dic | 5 of 10 | first 5 | only the 5th |

Page 1 of an affected gallery looks correct, because one filled dot is right either way. The
divergence starts at page 2.

## Defect 3 — the filled dot is at the WRONG INDEX *(the one that matters)*

This is worse than the count. A wrong dot count is cosmetic; a dot filled at the wrong index
tells the reader they are on a different page than they are.

| gallery | page | filled | should be |
|---|---|---|---|
| iron-anemia | 3 of 10 | **4th** | 3rd |
| b12-anemia | 2 of 10 | **1st** | 2nd |
| myasthenia | 7 of 10 | ring highlight on the **8th** | 7th |
| dic | 2 of 10 | **1st** | 2nd |
| dic | 3 of 10 | **1st** | 3rd |

Note these go in **opposite directions**, so it is not a constant offset that could be corrected
by subtracting one. Note also that dic pages 1, 2 and 3 are visually identical.

## Defect 4 — inconsistent marker rendering

There should be two states. There are currently at least five:

* filled cyan disc (correct current-page marker)
* grey hollow ring (correct non-current marker)
* **orange/yellow hollow ring** — thrombocytopenia uses these throughout instead of grey
* **orange filled disc** — dic pages 6 to 10, never at the current page index
* **half-cyan half-orange hybrid** — dic page 6, position 6; not any intended state

Iron-anemia page 2 contains three renderings in a single row: normal grey rings, one ring so
dark it is nearly invisible against the header, and one ring filled grey rather than cyan.

---

## Two template versions appear to be in flight

The 90-page batch arrived with Defect 2 **fixed** — no page in those 90 fills more than one dot.
`dic`, delivered hours later the same day, has it back, plus the orange second colour and the
hybrid marker.

So a fix confirmed on one gallery says nothing about the next delivery. Whatever the cause, it
would be worth pinning the template version before the re-render so all 110 come back from the
same generator.

---

## UPDATE 2026-08-02 — both defects are still present, on a 40-page batch

Forty pages arrived as one drop: Sepsis & Septic Shock, HIV/AIDS, Cellulitis and Influenza,
interleaved. Evidence in `DOTS-evidence/sepsis-hiv-0802-dots.png` and the sheets beside it.

**Retraction, recorded so nobody works from the wrong version.** On first look at ten of these
pages I wrote here that the count defect was fixed and only the index was wrong. **That was wrong.**
Those ten happened not to include a count error. Widening to all forty found `cellulitis` page 9
carrying **12 dots** on a ten-page gallery — read at 2.6x zoom, unambiguous. One clean sample is
not evidence of a fix. Defect 1 stands.

**Defect 3 is widespread and is still the one that matters.** Confirmed wrong-index pages include:

| gallery | page | fills | off by |
|---|---|---|---|
| sepsis | 2 | 1st | −1 |
| sepsis | 4 | 3rd | −1 |
| sepsis | 5 | 6th | +1 |
| sepsis | 6 | 7th | +1 |
| sepsis | 8 | 7th | −1 |
| sepsis | 9 | 7th | −2 |
| influenza | 6 | 5th | −1 |
| influenza | 7 | 6th | −1 |
| influenza | 8 | 7th | −1 |

**This is not a complete tally and should not be treated as one.** At the resolution these dots
occupy, reading forty rows reliably by eye is not something we can promise, and a list that is
wrong in either direction is worse than no list. What is certain: the errors run −2, −1 and +1, so
no constant offset corrects them; several different pages fill the **7th** dot; and the
`IMAGE n OF 10` text is correct on all forty.

**So please fix the template against the page number, not against a list of pages from us.** The
text and the dot row disagree, the text is the one that is right, and that is the whole finding.

### Also new: the page size is no longer uniform within a batch

Four pages are **1024x1536** and six are **1023x1537**. The standard is 1024x1536 and
`fix_page_logo.py` errors on a mixed set by design. 1023x1537 is not 2:3 either, so it is not a
deliberate alternative size — it looks like a rounding artefact somewhere in the export. Worth
fixing upstream: we can resample, but a page that has been resampled twice is softer than one
exported at the right size.

---

## What we need back

Re-rendered pages, same 1024×1536, same JPEG quality, same filenames, with the header strip
corrected:

1. **Dot count = the gallery's page total** (10 for all eleven of these).
2. **Exactly one filled dot, at the current page index** — the same number that prints in
   `IMAGE n OF 10` on that same page.
3. **One marker style**: filled disc for current, hollow ring for the rest, one colour scheme.

If the page number is read from one variable and the dot row generated from another, that
mismatch is very likely the whole of Defects 1 and 3.

**Please fix it in the template, not per batch** — every future gallery carries it otherwise.

### Self-check before delivering

Lay the ten header strips of a gallery on top of one another and read down the column. The
filled dot should step one position to the right per page and nothing else should change. That
single check catches all four defects in about five seconds per gallery, and it is what we do
on arrival.

---

## Three typos in artwork text

Not header defects, but they need the same re-render. Crops are in `DOTS-evidence/`.

| gallery | page | reads | should read |
|---|---|---|---|
| icp | 4 | "Early recognition of **deteroration**…" | deterioration |
| leukemia | 4 | "…bone marrow and **bloodigd**, leading to…" | blood |
| leukemia | 8 | "…risk-adapted, **multidiscipliinary** care." | multidisciplinary |
| sepsis | 9 | panel heading "TIMELINE OF SEPSIS **PROGRESSON**" | PROGRESSION |
| hiv | 6 | workflow step "3. **STASE**" | STAGE |
| cellulitis | 4 | **two text runs printed on top of each other** — see below | one line of text |

The three from 2026-08-02 are in `DOTS-evidence/` as `sepsis-p9-progresson.png`,
`hiv-p6-stase.png` and `cellulitis-p4-collision.png`, all cropped at native resolution.

**The cellulitis one is not a spelling mistake, it is a layout failure.** The body line reads
"…swollen area of skin that is spreading. Symptoms range from…", and the tail of that sentence is
rendered *on top of itself* — two runs of type occupying the same pixels, so the last few words
are an unreadable smear. This is the only defect so far that makes a sentence impossible to read
rather than merely wrong, and it is worth checking whether other pages in the same run share it.

`STASE` is worth a second look at the generator too: the step's own body text is "CD4 count & HIV
RNA viral load", which is staging, so the word is right in the layout and wrong in the glyphs.

The icp one is worth a look at the generator: the same word is spelled **correctly twice on that
same page** — in the heading `CLINICAL PRESENTATION & NEUROLOGIC DETERIORATION` directly above,
and in the panel `NEUROLOGIC DETERIORATION PATHWAY` to the right — and incorrectly only in the
subtitle line between them. Three instances of one word on one page, one of them wrong, suggests
the subtitle text is authored separately from the headings rather than derived from them.

---

## Do NOT ask us to repaint the delivered pages

Recorded here so it is not proposed again. A repainter was written on 2026-07-31 that located
the dot row by autocorrelation, sampled the ring grey and disc cyan off each page, rebuilt the
background by interpolating the rows above and below, and refused to touch any page it could not
read cleanly.

It still produced visibly damaged pages — half-erased dots left as "U" shapes, cumulative fills
surviving underneath — and it could not read 31 of 80 pages at all. Five earlier detection
approaches also failed: fixed-fraction crops, greyscale blob fill, cyan saturation, pixel
clustering and an even-spacing scan. The header's vertical position drifts by tens of pixels
between pages, which defeats every fixed-geometry method. The tool was deleted rather than kept.

Automated dot *counting* is unreliable for the same reason. Reading the contact sheets by eye is
the method that works, and it is how every table above was produced.
