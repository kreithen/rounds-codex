# Alcohol & Substance Withdrawal gallery — BUILT AND SHIPPED (v66, 2026-08-04)

Condition **`withdrawal`** — Alcohol & Substance Withdrawal, Psychiatry, ICD-10 F10.239. The
header's ICD-10 matches `content/conditions.json` exactly. It would be the **91st gallery** and
the **fifth Psychiatry** one, after Major Depressive Disorder (v61), Anxiety Disorders (v62),
Bipolar Disorder (v63) and Schizophrenia (v64) — taking Psychiatry to 5 of 7.

Pages 1–5 arrived in the afternoon, 6–10 the same evening. **Built and live as the 91st
gallery**, in the same push as `delirium` and `suicide`, which completed Psychiatry at 7 of 7.

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
| 6 | Diagnostic Imaging & Laboratory Evaluation | `withdrawal-06.png` | `b1463b80-…` |
| 7 | Pathophysiology & Complications | `withdrawal-07.png` | `c470a212-…` |
| 8 | Treatment & Management | `withdrawal-08.png` | `88f37a66-…` |
| 9 | Procedures & Special Situations | `withdrawal-09.png` | `aefa1cb7-…` |
| 10 | Clinical Pearl & Key Takeaways | `withdrawal-10.png` | `cf3ab281-…` |

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

### Header progress dots — six of ten pages wrong

Read at 3x off the source pages, not at contact-sheet scale.

| page | dots drawn | filled at | verdict |
|---|---:|---:|---|
| 1 | **11** | 1 | count inflated by one |
| 2 | 10 | **1** | **wrong index** |
| 3 | 10 | **2** | **wrong index** |
| 4 | 10 | 4 | correct |
| 5 | 10 | 5 | correct |
| 6 | **9** | **5** | count AND index wrong |
| 7 | 10 | **6** | **wrong index** |
| 8 | 10 | **6** | **wrong index — the same dot page 7 fills** |
| 9 | 10 | **7** | **wrong index** |
| 10 | 10 | 10 | correct |

The wrong indices are one or two short of the page number, but pages 1, 4, 5 and 10 fill
correctly, so it is not a uniform offset that could be corrected downstream. **Pages 7 and 8 fill
the same dot**, so those two are indistinguishable by their indicator. A wrong count is cosmetic;
**a wrong index tells the reader they are on a different page**.

Pages 8 and 9 also draw their unfilled rings in **orange** rather than grey — the second
highlight colour first seen on `dic`.

### Specialty label colour

`PSYCHIATRY` renders **cyan** here, as on `depression` and `anxiety`, and unlike the
purple/magenta on `bipolar` and `schizophrenia`. Five Psychiatry galleries, two colours.

## Page size

Page 1 is 1024×1536 (the standard); pages 2–5 are 1024×1535. Mixed inside one gallery again, so
the builder will resample.

## Titles worth a second look

Page 7 is *"Pathophysiology & Complications"* while page 3 is *"Pathophysiology of Alcohol &
Substance Withdrawal"*. Distinguishable, but the two sit close in the thumbnail strip; page 7's
distinct content is the complications half.

## Built with

    python3 scripts/build_galleries_from_images.py withdrawal=galleries-staging/withdrawal-0804
