# Alcohol & Substance Withdrawal gallery — pages 1–5 received 2026-08-04

Condition **`withdrawal`** — Alcohol & Substance Withdrawal, Psychiatry, ICD-10 F10.239. The
header's ICD-10 matches `content/conditions.json` exactly. It would be the **91st gallery** and
the **fifth Psychiatry** one, after Major Depressive Disorder (v61), Anxiety Disorders (v62),
Bipolar Disorder (v63) and Schizophrenia (v64) — taking Psychiatry to 5 of 7.

**Half a gallery. Pages 6–10 still to come.** The builder asserts all ten pages, so it refuses
rather than shipping short.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header. Arrived shuffled — 1, 4, 3, 5, 2.

| page | IMAGE TITLE | file | delivered as |
|---|---|---|---|
| 1 | Overview: Alcohol & Substance Withdrawal | `withdrawal-01.png` | `2d23920d-…` |
| 2 | Anatomy & Neurobiology of Alcohol & Substance Withdrawal | `withdrawal-02.png` | `f911b93b-…` |
| 3 | Pathophysiology of Alcohol & Substance Withdrawal | `withdrawal-03.png` | `894c5edd-…` |
| 4 | Clinical Presentation & Severity Grading | `withdrawal-04.png` | `71b805b5-…` |
| 5 | Physical Exam & Nursing Assessment | `withdrawal-05.png` | `d3740490-…` |

Clinical sources: Netter's Atlas, DSM-5-TR, Goodman & Gilman, Guyton Physiology, Harsh & Boparai's
ADR (page 1 only).

Each page's headline band agrees with its footer IMAGE TITLE, so there is no
`bipolar`-page-5-style mistitling here.

**Page 5 matches the canonical psychiatry examination wording** established by `schizophrenia`
page 5 — except that this one says *Nursing* Assessment where schizophrenia says *Mental Status
Exam*. Both are defensible for their condition (withdrawal is monitored with CIWA-Ar by nursing
staff), so this is recorded as a difference, not a defect.

## Checks run

- **5 files, 5 distinct.** No duplicates for once — three of the eight preceding batches
  contained some.
- **Not a re-send.** `triage_incoming_gallery.py` against the live site: 0 already live,
  0 possibly revised, 5 new.
- **All five footers pass the status-claim check** — no "Clinical Pending", "Proof" or
  "Prepublication" cells.

## Faults found

### Footer CATEGORY is wrong on page 4

Page 4's CATEGORY cell reads **"Pathophysiology"**. The page is Clinical Presentation & Severity
Grading, and page 3 is the real pathophysiology page. **This is the same fault, on the same page
number, as `gout` page 4** — worth telling production that it has now happened twice.

### Header progress dots — three of five pages wrong, two different ways

Read at 4x off the aligned per-gallery header sheet, not at contact-sheet scale.

| page | dots drawn | filled at | verdict |
|---|---:|---:|---|
| 1 | **11** | 1 | count inflated by one |
| 2 | 10 | **1** | **wrong index** |
| 3 | 10 | **2** | **wrong index** |
| 4 | 10 | 4 | correct |
| 5 | 10 | 5 | correct |

Both wrong indices are one short of the page number, but page 1 fills correctly and pages 4 and 5
fill correctly, so it is not a uniform off-by-one that could be corrected — the same mixed
behaviour seen across every batch. A wrong count is cosmetic; **a wrong index tells the reader
they are on a different page**.

### Specialty label colour

`PSYCHIATRY` renders **cyan** here, as on `depression` and `anxiety`, and unlike the
purple/magenta on `bipolar` and `schizophrenia`. Five Psychiatry galleries, two colours.

## Page size

Page 1 is 1024×1536 (the standard); pages 2–5 are 1024×1535. Mixed inside one gallery again, so
the builder will resample.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # add titles 6-10, then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py withdrawal=galleries-staging/withdrawal-0804
