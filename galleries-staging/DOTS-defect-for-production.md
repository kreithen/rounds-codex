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
| sepsis | 9 | panel heading "TIMELINE OF SEPSIS **PROGRESSON**" | PROGRESSION — **already fixed on our side, see below** |
| hiv | 6 | workflow step "3. **STASE**" | STAGE |
| cellulitis | 4 | **two text runs printed on top of each other** — see below | one line of text |

The three from 2026-08-02 are in `DOTS-evidence/` as `sepsis-p9-progresson.png`,
`hiv-p6-stase.png` and `cellulitis-p4-collision.png`, all cropped at native resolution.

**The cellulitis one is not a spelling mistake, it is a layout failure.** The body line reads
"…swollen area of skin that is spreading. Symptoms range from…", and the tail of that sentence is
rendered *on top of itself* — two runs of type occupying the same pixels, so the last few words
are an unreadable smear. This is the only defect so far that makes a sentence impossible to read
rather than merely wrong, and it is worth checking whether other pages in the same run share it.

### One of the three is fixed at our end; two are not

`sepsis` page 9 has been repaired in place and is live. The missing **I** was copied from
`TIMELINE` on the same line — same font, size, colour and rasteriser — and `ON` shifted right by
the spacing measured off the `S-I-S` in `SEPSIS` on that line. Nothing was drawn. Still worth
correcting at source so the next render of that page is right.

**The other two cannot be repaired this way and need you.**

`hiv` page 6 needs an uppercase **G** in lime green at a 12px cap height. There is no such glyph
anywhere in the 40 pages: every other lime G is 11px or 14px, and the 12px G's are cyan. Rescaling
or recolouring one would mean synthesising a letterform, which is exactly what produced the
visibly damaged pages when the header dots were repainted.

`cellulitis` page 4 has two text runs printed over each other. Both are destroyed where they
overlap — there is no intact copy of either to move. This one needs the line re-rendered.

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

---

## UPDATE 2026-08-02 (later) — COVID-19 and Osteomyelitis: badge FIXED, dots still wrong

Two new ten-page galleries arrived built on a revised template. Evidence:
`DOTS-evidence/covid-dots.png` and `DOTS-evidence/osteo-dots.png` — the dot row of all ten pages
of each gallery, stacked, at 2x.

**The good news, and it is the big one: the false review status is GONE.** The footer metadata bar
no longer carries a REVIEW cell at all. The last cell is the RC-check shield, which is the
canonical verified mark. Nothing on either gallery claims the clinical review is pending. That is
the defect that mattered most and it is fixed at source — please keep this template.

Also right on both galleries: the logo lockup is canonical on all twenty pages (no TM variant, no
spurious glyph inside the emblem), and — for the first time in any batch — **the pages arrived in
page order**, so `IMAGE n OF 10` matches the filename on all twenty.

**Defects 1 and 3 are still present.** Read off the evidence sheets:

| gallery | page | dots | filled | should be |
|---|---|---|---|---|
| covid | 1 | 10 | 1st | correct |
| covid | 2 | **9** | **1st** | 10 dots, 2nd |
| covid | 3 | 10 | **1st** | 3rd |
| covid | 4 | 10 | 4th | correct |
| covid | 5 | **9** | **6th** | 10 dots, 5th |
| covid | 6 | **9** | **7th** | 10 dots, 6th |
| covid | 7 | **9** | **8th** | 10 dots, 7th |
| covid | 8 | **9** | **9th** | 10 dots, 8th |
| covid | 9 | **9** | 9th | 10 dots |
| covid | 10 | 10 | 10th | correct |

covid pages 5–8 are all filled **one position too far right**, and page 3 is two positions too
far left, so again no single offset corrects it.

Osteomyelitis is much better on the index — only page 8 is wrong, filling the 7th on page 8 — but
**nine of its ten pages carry the wrong dot count**: nine dots on pages 1, 2, 3, 5, 6, 7, 9 and
**eleven** on page 4. Only page 10 has ten.

So the two defects are independent, and this batch shows it clearly: one gallery got the count
mostly right and the index mostly wrong, the other the reverse. Fixing the index alone will not
be enough.

### The 1023/1022-wide export is back

Nine of the ten COVID pages and nine of the ten Osteomyelitis pages exported at **1022x1536**
rather than 1024x1536; one page of each is correct. Same class of rounding artefact reported for
the 2026-08-02 batch (which came in at 1023x1537). We resampled to 1024x1536 to build, but a page
resampled after export is softer than one exported at the right size, and a gallery must ship one
size.


---

## UPDATE 2026-08-03 — Fractures (all 10 pages): count FIXED, index wrong on 4

The full ten-page Fractures gallery arrived in two halves. Evidence:
`DOTS-evidence/fracture-headers.png` and `fracture-headers-6-10.png`.

**Defect 1 is fixed. Every page carries exactly ten dots.** That is the first gallery in the
whole series to get the count right on all ten, against 15 of 20 wrong in the two galleries
delivered the day before. Whatever changed between those batches, keep it.

**Defect 3 remains, on four of ten pages.**

| page | dots | filled | verdict |
|---|---|---|---|
| 1 | 10 | 1st | correct |
| 2 | 10 | **1st and 2nd** | cumulative fill — should be 2nd only |
| 3 | 10 | 3rd | correct |
| 4 | 10 | 4th | correct |
| 5 | 10 | 5th | correct |
| 6 | 10 | 6th | correct |
| 7 | 10 | **6th** | one too far left |
| 8 | 10 | **7th** | one too far left |
| 9 | 10 | **7th** | TWO too far left |
| 10 | 10 | 10th | correct |

Page 2 is the cumulative-fill bug, which has now reappeared three separate times after appearing
to be fixed (C. difficile, then `dic`, now here). Pages 7, 8 and 9 drift by -1, -1 and -2, so
again no constant offset corrects it. Six of ten are right, which is the best yet.

**A note on how this was read.** An automated count was written and then discarded: it reported
zero filled dots on rows where one is plainly visible, and counts of 11, 12 and 15 on a row of
10, because it picks up other header ink as dots. That is the fourth time automation has failed
on this row. Reading a zoomed strip by eye remains the only method that works, and pages 9 and 10
specifically needed a 5x crop before they could be counted honestly.

### Also right on this batch

Every page exported at exactly **1024x1536** — no 1022/1023 rounding artefact, so nothing was
resampled. Logo lockup canonical on all ten. No REVIEW cell anywhere in the footer.

### Still the OLD shield

These ten carry **"RC" in white over a cyan pulse line**. COVID-19 and Osteomyelitis, delivered
one day earlier, carry the new **RC + checkbox** mark in cyan. Both are acceptable in that
neither asserts a pending review, but two galleries one tap apart show different marks in the
same footer cell. Please standardise on RC + checkbox. Side-by-side:
`DOTS-evidence/fracture-vs-covid-shield.png`.

---

## UPDATE 2026-08-03 — Osteoporosis: the count changes HALFWAY THROUGH one gallery

Ten pages, delivered as two batches of five. Evidence: `DOTS-evidence/osteo-headers-1-5.png`,
`osteo-dots-6-10.png`.

**Pages 1-5 carry ten dots. Pages 6-10 carry nine.** Same gallery, same delivery day, same page
total printed in the text on all ten. This is the clearest evidence yet that the dot row is not
being sized from the gallery's page count at all — nothing about the gallery changed between
page 5 and page 6.

| page | dots | filled | verdict |
|---|---|---|---|
| 1 | 10 | 1st | correct |
| 2 | 10 | **1st and 2nd** | cumulative fill |
| 3 | 10 | 3rd | correct |
| 4 | 10 | 4th | correct |
| 5 | 10 | 5th | correct |
| 6 | **9** | 6th | count wrong, index right |
| 7 | **9** | 7th | count wrong, index right |
| 8 | **9** | 7th | count wrong, index one early |
| 9 | **9** | 8th | count wrong, index one early |
| 10 | **9** | 9th | count wrong, index one early |

### Page 2 is cumulative on BOTH galleries delivered today

Fractures page 2 fills the first two dots and no other Fractures page does. Osteoporosis page 2
fills the first two dots and no other Osteoporosis page does. Two galleries, same day, same
single page. That is a much narrower target than "the dot row is wrong" — it suggests something
specific about how page 2 is produced, not a general accumulator across the run.

### One page short again

Osteoporosis page 3 exported at **1024x1535**. The other nine are 1024x1536. It was resampled to
build, which costs a little sharpness. Same rounding artefact reported for the last three batches.

---

## UPDATE 2026-08-03 — Rheumatoid Arthritis (all 10): FULL REGRESSION on the dot row

Evidence: `DOTS-evidence/ra-dots-1-5.png`, read at 4x.

**The dot row is a cumulative progress bar again, on every page.** Not one page in five, as on
the two galleries delivered earlier the same day — all of them.

| page | dots | filled | should be |
|---|---|---|---|
| 1 | 9 | 1st | 10 dots, 1st |
| 2 | 9 | **1st + 2nd** | 10 dots, 2nd only |
| 3 | 9 | **1st + 2nd + 3rd** | 10 dots, 3rd only |
| 4 | **8** | **first four** | 10 dots, 4th only |
| 5 | 10 | **first five** | 10 dots, 5th only |

The count is also wrong on four of five, and varies 8-10 inside a single batch.

### This is a different, OLDER template than the one used hours earlier

Fractures and Osteoporosis, delivered the same day, both carried **ten dots on every page** and
filled cumulatively on page 2 only. This batch has neither property. Whatever produced Fractures
is better than whatever produced this, and both are apparently in use simultaneously.

That is the third time two template versions have been in flight at once — the same thing
happened on 2026-08-01, when a 90-page batch arrived with the cumulative fill FIXED and `dic`
arrived hours later with it back. **Please pin the generator version before the next batch**, so
a fix confirmed on one gallery means something for the next.

### Page size: the 1023x1537 variant is back

Two of the five exported at **1023x1537**; the other three are 1024x1536. Osteoporosis had a
different wrong size (1024x1535) the same day. Both need resampling, and a page resampled after
export is softer than one exported right.

### The footer is clean

No REVIEW cell on any of the five — confirmed by the new automated footer-claim check and by eye.
Whatever else this template version gets wrong, it does not assert a pending review.

### RA pages 6-10 confirm it: the progress bar runs the whole way

Pages 6 to 10 continue filling cumulatively - six dots on page 6, seven on page 7, eight on
page 8, and so on to the end. So across the full gallery the row is a progress bar from page 1
to page 10 with no exception, which is the cleanest example of Defect 2 anyone has sent.

If it helps to localise: this behaviour is what you would get if the marker index were driven by
an accumulator that is never reset between pages, rather than by the current page number. The
`IMAGE n OF 10` text on the same pages is correct throughout, so the right number is available
in the template - it just is not the one the dot row uses.

Footer on pages 6-10 is clean as well: no REVIEW cell, verified by the automated check and by eye.


## 2026-08-03 — gout / compartment syndrome / SLE (30 pages, MSK & Rheum)

**The count regressed and the fill index went wrong from page 3 onward.** Read by eye off the
per-gallery header sheets, at 2x, after a sixth automated attempt produced nonsense (counts of
25, 39 and 47 on a ten-page row — it was locking onto the logo, not the dots). Automated dot
reading has now failed six times; do not try again, crop the header band and look.

- **Dot count is 12–14, not 10**, and it varies page to page within one gallery.
- **The fill index is right on pages 1 and 2, then sits one position too far right from page 3
  on.** Pages 9 and 10 of both ten-page galleries fill the *same* dot near the right end, so at
  most one of them can be correct.
- **`lupus-05`'s filled marker is an OVAL, not a circle** — wider than tall, as though two
  adjacent dots merged.
- `gout` pages 1–5, delivered a few hours earlier in the same evening, had **correct** dots:
  ten of them, one fill, right index. Pages 6–10 of the *same gallery* do not. So this is not
  even stable within a single gallery, which is the strongest evidence yet that two page
  templates are in flight at production's end.

Other defects in the same batch, all cosmetic and all shipped as-is:

- **Page heights are mixed three ways**: 1024×1535, 1024×1536 and 1023×1537 all appear. The
  standard is 1024×1536. The builder resamples, but the source should not vary.
- **`gout-09` footer CATEGORY reads "Therepeutics"** — misspelt.
- **`gout-04` footer CATEGORY reads "Pathophysiology"** while its title is "Clinical
  Presentation of Gout" and page 3 is the real pathophysiology page.
- **`lupus-03`'s footer metadata row is visually broken** — the IMAGE TITLE text overlaps the
  label, unlike every other page.


## 2026-08-03 (late) — depression, anxiety, bipolar (Psychiatry)

Three Psychiatry galleries in one evening, three different dot behaviours. Read at 2x off the
aligned header sheet each time.

- **`depression` 1–5**: ten dots, correct index on all five. The only fault is **page 2, which
  carries a SECOND, dimmer filled dot at position 1** beside the correct bright fill at 2 — the
  cumulative artifact, half-lit.
- **`anxiety`**: page 5 arrived separately and its row reads short of ten.
- **`bipolar` 1–5**: pages 1–2 have ten dots and the right index; **pages 3–5 have only NINE**,
  and **page 3 fills the fourth dot — the same one page 4 fills**, so those two pages cannot be
  told apart by their indicator.

**A correction to the gout/compartment/SLE entry above.** Its "fill index runs one position late
from page 3 onward" was read at contact-sheet scale, and at 2x the same rows read differently —
on `depression` I made exactly that mistake and pages 4 and 5 turned out correct. The **count**
inflation in that batch is real and obvious at any scale; treat the per-page fill indices as
unconfirmed until re-read at 2x.

**Rule for reading dots, now that six automated attempts have failed:** crop the dot row out of
the per-gallery header sheet `triage_incoming_gallery.py` writes (its rows are y-aligned, unlike
the pages, whose header drifts tens of pixels), scale it 2x, and count by eye. Never report a
fill index read at contact-sheet scale.

### Not a dot defect, but new in the same batch

`PSYCHIATRY` renders **purple/magenta** on `bipolar` and **cyan** on `depression` and `anxiety` —
same specialty, same evening, two accent colours. Compare with the orange highlight that appeared
on `dic`. If the specialty colour is meant to be fixed per category, three galleries now disagree.


## 2026-08-03 (late, cont.) — bipolar and schizophrenia

Read at 2x off the aligned per-gallery header sheet, as the method note requires.

**`bipolar`**: pages 1–2 ten dots, right index. Pages 3–5 **nine** dots, and **page 3 fills the
fourth — the same dot page 4 fills**, so those two pages are indistinguishable by their indicator.

**`schizophrenia`**: the worst of the evening. The dot **count varies between 8 and 10** across
ten pages of one gallery, and the fill index is wrong on four:

| page | dots | fill | |
|---|---|---|---|
| 1 | 10 | 1 | ok |
| 2 | 10 | 2 | ok |
| 3 | 9 | **4** | wrong |
| 4 | 8 | **5** | wrong |
| 5 | 8 | 5 | index ok |
| 6 | 9 | 6 | ok |
| 7 | 9 | **6** | wrong — same dot as page 6 |
| 8 | 9 | **7** | wrong |
| 9 | 10 | 9 | ok |
| 10 | 10 | 10 | ok |

Pages 6 and 7 fill the same dot; so do 3 and 4 in effect. A wrong count is cosmetic, but a
wrong index actively tells the reader they are on a different page.

**Six galleries this evening, six different dot behaviours** — correct (gout 1–5), count
inflated to 12–14 (gout 6–10 / compartment / SLE), one half-lit extra fill (depression),
short rows (anxiety), nine-dot rows with one duplicated index (bipolar), and counts wandering
8–10 with four wrong indices (schizophrenia). Nothing about this is stable, which is why it has
to be fixed at the template rather than detected downstream.

### Title and citation issues in the same batch

- **`bipolar` page 5** is titled *"Clinical Presentation of Bipolar Disorder"*, identical to its
  page 4. The page is the examination page; `schizophrenia` page 5 — same production run — is
  titled *"Physical Exam & Mental Status Exam"*, which is what bipolar's should say.
- **`schizophrenia` pages 7 and 9** read as near-duplicates: *"Management Overview & Treatment
  Framework"* and *"Treatment & Management Strategies"*.
- **`anxiety` pages 7 and 8** likewise: *"Pathophysiology & Neurobiology"* and *"Cellular
  Pathophysiology & Neurobiology"*.
- **`schizophrenia` page 1** cites *APA Guidelines (2020)*; pages 2–10 cite *(2023)*.
