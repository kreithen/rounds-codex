# Osteoarthritis gallery — pages 1–5 received 2026-08-05

Condition **`osteoarthritis`** — Osteoarthritis, MSK & Rheum, ICD-10 M19.90. The header's ICD-10
matches `content/conditions.json` exactly.

**This is the last MSK & Rheum condition without a gallery.** It would be the **94th gallery** and
would take MSK & Rheum to **7 of 7** — the tenth complete category, after Cardiac, Endocrine, GI,
Heme & Onc, ID, Neurology, Psychiatry, Renal & GU and Respiratory.

**Half a gallery. Pages 6–10 still to come.** The builder asserts all ten pages, so it refuses
rather than shipping short.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's Image Title box. Every
footer's own page number agrees with its header. Arrived shuffled — 2, 4, 3, 1, 5.

| page | Image Title | file | delivered as |
|---|---|---|---|
| 1 | Overview: Anatomy, Pathophysiology & Key Facts | `osteoarthritis-01.png` | `c58e4263-…` |
| 2 | Anatomy & Joint Structure | `osteoarthritis-02.png` | `3304ec0c-…` |
| 3 | Pathophysiology & Disease Process | `osteoarthritis-03.png` | `b3168791-…` |
| 4 | Clinical Presentation | `osteoarthritis-04.png` | `8cfc79ef-…` |
| 5 | Physical Examination | `osteoarthritis-05.png` | `e8100bcb-…` |

Every headline band agrees with its footer Image Title. Clinical sources: ACR Clinical Practice
Guideline (2019) and UpToDate: Osteoarthritis Overview, identical on all five pages.

The page 1 title overlaps pages 2 and 3 by naming anatomy and pathophysiology, but it is the
overview page and its band reads *"THE MOST COMMON ARTHRITIS — A DISEASE OF THE WHOLE JOINT"*, so
it is not the near-duplicate problem seen on `delirium` 3/7.

## A THIRD page template is now in circulation

The biggest thing in this batch, and it is not a defect so much as a divergence. Side-by-side
evidence: `DOTS-evidence/template-v3-vs-v2-footer.jpg`.

| | 93 shipped galleries | this batch |
|---|---|---|
| footer labels | `IMAGE TITLE`, `CATEGORY`, `MODALITY`, `CLINICAL SOURCE` — all caps | `Image Title`, `Category`, `Modality`, `Clinical Source` — Title Case |
| shield mark | `RC` + a **square** check | `RC` + a **filled circular** check |
| what CATEGORY holds | the page type — "Pathophysiology", "Physical Exam" | the **specialty** — "MSK & Rheum", the same on all five pages |
| Clinical Source | one line per source | smaller type, tighter leading |

**The CATEGORY change is the one that matters.** On every shipped gallery that cell names what kind
of page it is; here it names the specialty, which the header already says. It does have one happy
side effect — the "CATEGORY reads Pathophysiology on a clinical presentation page" bug cannot occur
if the cell holds the specialty — but it is inconsistent with 930 published pages, and a reader
moving between galleries will see the footer mean two different things.

Worth deciding deliberately rather than absorbing: either this is the new standard and the other 93
are legacy, or it is a regression to flag. **It does not block the build either way** — nothing in
`content/galleries.json` reads the footer.

## Header progress dots — four of five wrong, two pairs identical

Read at 3x off the source pages. Evidence: `DOTS-evidence/osteoarthritis-p1-p5-dots.png`.

| page | dots | filled at | |
|---|---:|---:|---|
| 1 | 10 | 1 | ok |
| 2 | 10 | **1** | **wrong — the row is identical to page 1's** |
| 3 | 10 | **4** | **wrong** |
| 4 | 10 | **5** | **wrong** |
| 5 | 10 | **5** | **wrong — the row is identical to page 4's** |

**The count is correct on all five**, which is now the second delivery running where the count is
clean and the index is not — `delirium` was the first. That keeps confirming the two are separate
faults.

Two pairs of pages carry an identical indicator (1 and 2, then 4 and 5). Pages 3 and 4 overshoot by
one; pages 2 and 5 are duplicates of their neighbour. No single offset corrects it.

Ring colour is grey throughout — no orange, no stray cyan.

## Checks run

- 5 files, 5 distinct — no duplicates.
- Not a re-send: `triage_incoming_gallery.py` reported 0 already live, 0 possibly revised, 5 new.
- All five footers pass the status-claim check.

## Page size

Four at 1024×1536, page 4 at 1024×1535. The builder will resample.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # add titles 6-10, then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py osteoarthritis=galleries-staging/osteoarthritis-0805
