# Bipolar Disorder gallery — pages 1–5 received 2026-08-03

Condition **`bipolar`** — Bipolar Disorder, Psychiatry, ICD-10 F31.9. It would be the 89th
gallery and the third Psychiatry one, after Major Depressive Disorder (v61) and Anxiety
Disorders (v62).

**Half a gallery. Pages 6–10 still to come — do not build until they arrive.** The builder
asserts all ten pages, so it will refuse rather than ship a short gallery.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box, verbatim.
Every footer's own page number agrees with its header. The batch arrived 5, 1, 2, 3, 4.

| page | IMAGE TITLE (as delivered) | file |
|---|---|---|
| 1 | Overview: Bipolar Disorder | `bipolar-01.png` |
| 2 | Anatomy: Bipolar Disorder | `bipolar-02.png` |
| 3 | Pathophysiology of Bipolar Disorder | `bipolar-03.png` |
| 4 | Clinical Presentation of Bipolar Disorder | `bipolar-04.png` |
| 5 | **Clinical Presentation of Bipolar Disorder** ← same as page 4 | `bipolar-05.png` |

Clinical sources: DSM-5-TR, APA Guidelines (2023), Stahl's Essential Psychopharmacology (4th Ed.).

## Two things to settle before this is built

**1. Pages 4 and 5 carry the SAME title.** The artwork differs — page 5's own key takeaway is
*"Recognize the behavioural and mental status differences between mania and depression, assess
medical stability, and always screen for safety risks"*, which is an examination page, not a
second presentation page. Every other gallery this evening puts the physical-exam page at 5
(`depression-05` "Physical Examination of Major Depressive Disorder", `anxiety-05` "Physical Exam
& Nursing Assessment"). So page 5's title looks like page 4's, copied.

Titles are stored verbatim in `titles-partial.json` rather than being second-guessed here — the
title belongs to the physician. Two pages reading identically in the thumbnail strip is the
thing to avoid; something like *"Physical Exam & Mental Status Examination"* would match the
rest of the set.

**2. The dots regressed again, differently.** Read at 2x off the aligned header sheet:

| page | dots | fill at | |
|---|---|---|---|
| 1 | 10 | 1 | ok |
| 2 | 10 | 2 | ok |
| 3 | **9** | **4** | wrong — fills the same dot as page 4 |
| 4 | **9** | 4 | index ok, count short |
| 5 | **9** | 5 | index ok, count short |

Pages 1–2 have the right count, 3–5 have nine. Page 3 fills the fourth dot, identical to page 4,
so those two pages are indistinguishable by their progress indicator.

## Also new: the header label changed colour

`PSYCHIATRY` renders **purple/magenta** on these five pages. On `depression` and `anxiety`,
shipped hours earlier from the same specialty, it is **cyan**. Not a defect on its own, but it is
a second accent colour appearing unannounced — the same way an orange highlight turned up on
`dic`. If the specialty colour is meant to be per-category, depression and anxiety are now
inconsistent with bipolar.

## Page size — the good news

All five are **1024×1536**, the standard, with no resampling needed. That is the second batch in
a row to get this right after an evening of 1024×1535 and 1023×1537.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # header strip for order, footer for titles, dot rows at 2x off the aligned header sheet
    # add titles 6-10, settle the page 5 title, then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py bipolar=galleries-staging/bipolar-0803
