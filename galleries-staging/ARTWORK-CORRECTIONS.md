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
| withdrawal (2026-08-04) | page 1 has **eleven**, page 6 has **nine**; five pages fill the wrong index; pages 7 and 8 fill the same one |
| delirium (2026-08-04) | **count correct on all ten** — and pages **6, 7, 8 and 9 all fill dot 6** |
| suicide (2026-08-04) | count wanders 10–11; five wrong indices, **overshooting** where withdrawal undershoots; pages 7 and 8 share a dot; page 10 has a **partial extra mark wedged between dots 6 and 7** |
| osteoarthritis 1–5 (2026-08-05) | count correct on all five; four wrong indices, and **two pairs of pages draw an identical row** (1 = 2, 4 = 5) |

**A wrong count is cosmetic. A wrong index tells the reader they are on a different page.**

`delirium` and `osteoarthritis` are the important rows: the count is right on every page of both
and the indices are still wrong, which proves the count and the index are separate faults. Fixing
the count will not fix the index — and two deliveries running with clean counts suggests the count
*was* fixed, while the index was never touched. And because `withdrawal` undershoots while `suicide` overshoots **in the same
delivery**, there is no offset that could be applied downstream.

The correct number is available in the template — `IMAGE n OF 10` is right on every page in every
batch. Whatever draws the dots is not reading the same value.

### Page dimensions

The standard is **1024×1536**. Delivered sizes across recent batches: 1024×1536, 1024×1535 and
1023×1537 — sometimes **mixed inside a single gallery** (gout pages 1–4 at 1535, page 5 at 1536).
Everything is resampled on our side, so nothing ships wrong, but a stable export would remove a
step and the resample is a small quality loss for no reason.

### Logo lockup and footer template — now THREE versions

Both the old RC-over-pulse mark and the **RC☑ shield** were already in circulation. The
`osteoarthritis` batch of 2026-08-05 adds a third: `RC` with a **filled circular** check, Title Case
footer labels instead of all caps, and — the part that matters — a **CATEGORY cell holding the
specialty rather than the page type**.

On 930 published pages CATEGORY names what kind of page it is. This template repeats the specialty
the header already shows. It does make the recurring "CATEGORY reads Pathophysiology on a clinical
presentation page" fault impossible, so it may be an intended fix, but it leaves two galleries a tap
apart explaining their footers differently. **Needs a decision on which is standard.** Side-by-side
evidence: `DOTS-evidence/template-v3-vs-v2-footer.jpg`.

### Specialty label colour

`PSYCHIATRY` renders **cyan** on depression, anxiety, withdrawal, delirium and suicide, and
**purple/magenta** on bipolar and schizophrenia — same specialty, seven galleries, two colours. If
the specialty colour is meant to be fixed per category, two of the seven disagree.

### Ring colour and stray rings

Separate from the fill index, the ring styling is unstable too:

- **Orange** unfilled rings instead of grey — `dic`, `withdrawal` 8–9, `delirium` 8–10. It changes
  partway through a gallery, so pages 1–7 and 8–10 of one gallery do not match.
- A **cyan** second ring beside the fill on `delirium` 1–3, at an inconsistent offset (position 3,
  3, then 2). `depression` page 2 had a dimmer second *fill* — the same class.
- A dim, **half-drawn partial ring wedged between dots 6 and 7** on `suicide` page 10 — an extra
  mark rather than a malformed one, and the first glyph-level defect rather than a count, fill or
  colour fault.

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
| `suicide` | 4 | "RISK IS DYNAMIC AND **MODIFVABLE**" — large display type at the top of the page, the most visible text defect in any batch | MODIFIABLE |
| `delirium` | 10 | "Delirium is reversible in most **casee**." | cases |
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
| `withdrawal` | 4 | **the identical fault** — CATEGORY reads "Pathophysiology" on the Clinical Presentation page |
| `delirium` | 4 | the identical fault again |
| `suicide` | 4, 5, 6, 7 | **four pages of one gallery** all reading CATEGORY "Pathophysiology": clinical presentation, history taking, clinical presentation, diagnostic imaging |
| `gout` | 9 | CATEGORY cell reads "**Therepeutics**" — misspelt |
| `lupus` | 3 | the whole footer metadata row renders with the IMAGE TITLE text overlapping its label, unlike every other page |
| `bipolar` | 5 | IMAGE TITLE duplicates page 4 exactly. The page is the examination page; `schizophrenia` page 5 from the same run is correctly titled "Physical Exam & Mental Status Exam" |
| `schizophrenia` | 1 | cites *APA Guidelines (2020)*; pages 2–10 cite *(2023)*. 2023 is current |
| `suicide` | 6 | IMAGE TITLE reads "**Clinicial** Presentation" — and the page's own headline band spells it correctly, so the two disagree on the same page |
| `delirium` | 7 | IMAGE TITLE duplicates page 3 exactly ("Pathophysiology of Delirium"), as does the headline band. Page 7 is the multifactorial-causes page |

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
| `delirium` | 7 | Pathophysiology of Delirium — **byte-identical to page 3** | page 7 is the multifactorial-causes page; something like "Multifactorial Causes & Precipitants" |
| `suicide` | 4 & 6 | Clinical Presentation & Warning Signs / Clinical Presentation: Key Signs & Symptoms | differentiate — they read as a repeat with the history page between them |

Note the **two layers**: fixing the app title makes the strip read correctly, but the artwork's own
footer still shows the wrong title on the page itself. Re-rendering fixes both; the app fix alone
fixes the list but not the image.

**One title has already been overridden on the way in**, the only time this has been done:
`suicide` page 6's footer reads "Clinicial Presentation" and the app ships "Clinical Presentation",
because the page's own headline band spells it correctly and shipping a typo into a display title
that the same page contradicts would be worse. The artwork still needs the re-render.

---

## How to read a dot row (for whoever checks the next batch)

Six automated attempts have failed — the last returned counts of 25, 39 and 47 on ten-dot rows
because it locked onto the logo. The header's y position drifts tens of pixels between pages,
which defeats every fixed-geometry approach.

What works: run `triage_incoming_gallery.py`, take the **per-gallery** `_contact-headers.jpg` it
writes (its rows are y-aligned, unlike the pages), crop the dot row, scale it **2x**, and count by
eye. **Never report a fill index read at contact-sheet scale** — that mistake was made on
`depression`, where pages 4 and 5 read as off-by-one and are actually correct.
