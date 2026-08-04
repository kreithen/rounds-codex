# Artwork corrections — worklist

`DOTS-defect-for-production.md` is the evidence log, written chronologically as each batch
arrived. It is 534 lines and the right place to look for *why* something is wrong. **This file is
the worklist**: what to fix, grouped so it can be acted on.

Three sections, because they go to different people:

1. **Systemic — fix the template.** Recurs on every batch. Worth more than all the rest combined.
2. **Per-gallery re-renders.** Specific pages with specific faults.
3. **App-side only.** No new artwork needed; fixable in `content/galleries.json` in one line each.

---

## 1. Systemic — these recur on every delivery

### Header progress dots (the big one)

The row of dots under `IMAGE n OF 10`. **Six galleries delivered on 2026-08-03 produced six
different behaviours**, which is the strongest evidence that more than one page template is in
circulation:

| gallery | what the dots did |
|---|---|
| gout 1–5 | correct — ten dots, one fill, right index |
| gout 6–10, compartment, SLE | count inflated to 12–14 |
| depression | correct count and index, but page 2 has a **second, dimmer fill** at position 1 |
| anxiety | rows short of ten |
| bipolar | pages 3–5 have **nine**; page 3 fills the **same dot as page 4** |
| schizophrenia | count wanders **8 to 10 within one gallery**; four pages fill the wrong dot, and pages 6 and 7 fill the same one |

**A wrong count is cosmetic. A wrong index tells the reader they are on a different page.**

The correct number is available in the template — `IMAGE n OF 10` is right on every page in every
batch. Whatever draws the dots is not reading the same value.

### Page dimensions

The standard is **1024×1536**. Delivered sizes across recent batches: 1024×1536, 1024×1535 and
1023×1537 — sometimes **mixed inside a single gallery** (gout pages 1–4 at 1535, page 5 at 1536).
Everything is resampled on our side, so nothing ships wrong, but a stable export would remove a
step and the resample is a small quality loss for no reason.

### Logo lockup

Both the old RC-over-pulse mark and the new **RC☑ shield** are in circulation. Recent batches are
all the new shield; older galleries on the site still carry the old one, which is why the two
appear side by side in the app.

### Specialty label colour

`PSYCHIATRY` renders **cyan** on depression and anxiety and **purple/magenta** on bipolar and
schizophrenia — same specialty, four galleries, delivered the same evening. If the specialty
colour is meant to be fixed per category, three of the four disagree. Compare the orange second
highlight colour that appeared on `dic`.

### Footer status cells — RESOLVED, do not regress

Earlier batches shipped footer cells reading **"Clinical Pending"**, "Proof" and
"Prepublication". Every batch since has been clean, and `triage_incoming_gallery.py` now checks
every incoming footer automatically. Recorded here because the cost of the regression was high:
**302 already-published pages had to be erased page by page** at our end.

---

## 2. Per-gallery re-renders

### Text errors inside the artwork

Evidence crops at native resolution are in `DOTS-evidence/`.

| gallery | page | reads | should read |
|---|---|---|---|
| `icp` | 4 | "Early recognition of **deteroration**…" | deterioration |
| `leukemia` | 4 | "…bone marrow and **bloodigd**, leading to…" | blood |
| `leukemia` | 8 | "…risk-adapted, **multidiscipliinary** care." | multidisciplinary |
| `hiv` | 6 | workflow step "3. **STASE**" | STAGE |
| `sepsis` | 9 | "TIMELINE OF SEPSIS **PROGRESSON**" | **already repaired on our side — no re-render needed** |

**`cellulitis` page 4 is not a spelling mistake, it is a layout failure.** The line
"…swollen area of skin that is spreading. Symptoms range from…" is rendered *on top of itself* —
two runs of type in the same pixels, so the tail of the sentence is an unreadable smear. The only
defect so far that makes a sentence impossible to read rather than merely wrong. Worth checking
whether other pages from the same run share it.

### Footer metadata errors

| gallery | page | fault |
|---|---|---|
| `gout` | 4 | CATEGORY cell reads "Pathophysiology"; the page is Clinical Presentation, and page 3 is the real pathophysiology page |
| `gout` | 9 | CATEGORY cell reads "**Therepeutics**" — misspelt |
| `lupus` | 3 | the whole footer metadata row renders with the IMAGE TITLE text overlapping its label, unlike every other page |
| `bipolar` | 5 | IMAGE TITLE duplicates page 4 exactly. The page is the examination page; `schizophrenia` page 5 from the same run is correctly titled "Physical Exam & Mental Status Exam" |
| `schizophrenia` | 1 | cites *APA Guidelines (2020)*; pages 2–10 cite *(2023)*. 2023 is current |

### Carried over from earlier sessions — needs re-verification

These were noted in session working notes rather than logged with evidence crops, so **confirm
against the live artwork before sending**:

- `tia` — footer domain rendered as "roundciodex.com" and "roundccodex.com" on different pages
- `tia` page 8 — "IMAGE **TITLIEEE**"
- `meningitis` page 9 — "**Nong**-Term Management"

---

## 3. App-side only — no new artwork required

These are display titles in `content/galleries.json`, not text inside the images. Each is a
one-line change and can ship immediately. **They are the physician's call**, which is why they
were left as delivered rather than reworded.

| gallery | page | current | suggested |
|---|---|---|---|
| `bipolar` | 5 | Clinical Presentation of Bipolar Disorder | Physical Exam & Mental Status Exam |
| `anxiety` | 7 & 8 | Pathophysiology & Neurobiology / Cellular Pathophysiology & Neurobiology | differentiate — they read as a repeat in the thumbnail strip |
| `schizophrenia` | 7 & 9 | Management Overview & Treatment Framework / Treatment & Management Strategies | differentiate |

Note the **two layers**: fixing the app title makes the strip read correctly, but the artwork's own
footer still shows the wrong title on the page itself. Re-rendering fixes both; the app fix alone
fixes the list but not the image.

---

## How to read a dot row (for whoever checks the next batch)

Six automated attempts have failed — the last returned counts of 25, 39 and 47 on ten-dot rows
because it locked onto the logo. The header's y position drifts tens of pixels between pages,
which defeats every fixed-geometry approach.

What works: run `triage_incoming_gallery.py`, take the **per-gallery** `_contact-headers.jpg` it
writes (its rows are y-aligned, unlike the pages), crop the dot row, scale it **2x**, and count by
eye. **Never report a fill index read at contact-sheet scale** — that mistake was made on
`depression`, where pages 4 and 5 read as off-by-one and are actually correct.
