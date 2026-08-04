# Schizophrenia gallery — pages 1–5 received 2026-08-03

Condition **`schizophrenia`** — Schizophrenia, Psychiatry, ICD-10 F20.9. It would be the 90th
gallery and the fourth Psychiatry one, after Major Depressive Disorder (v61), Anxiety Disorders
(v62) and Bipolar Disorder (v63).

**Half a gallery. Pages 6–10 still to come.** The builder asserts all ten pages, so it refuses
rather than shipping short.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header. Arrived 1, 2, 3, 4, 5 — in order for once.

| page | IMAGE TITLE | file |
|---|---|---|
| 1 | Overview: Schizophrenia at a Glance | `schizophrenia-01.png` |
| 2 | Anatomy: Brain Circuits & Dopamine Pathways | `schizophrenia-02.png` |
| 3 | Pathophysiology of Schizophrenia | `schizophrenia-03.png` |
| 4 | Clinical Presentation of Schizophrenia | `schizophrenia-04.png` |
| 5 | Physical Exam & Mental Status Exam | `schizophrenia-05.png` |

Clinical sources: DSM-5-TR, APA Guidelines, Stahl's Essential Psychopharmacology (4th Ed.).

**Page 5's title is the canonical wording for a psychiatry examination page** — worth noting
because Bipolar Disorder shipped with its page 5 mistitled as a second "Clinical Presentation"
page. This gallery is the evidence for what that one should say.

## Checks run

- **All five were uploaded TWICE.** The batch held 15 files and 10 distinct images: bipolar 6–10
  plus these five, each sent in duplicate. Caught by content hash. Third batch this evening to
  contain duplicates.
- **Not re-sends** against the live set, and all five footers pass the status-claim check.
- **A citation-year inconsistency**: page 1 cites *APA Guidelines (2020)*, pages 2–5 cite
  *(2023)*. One of the two is wrong; the 2023 guideline is the current one.

## Page size

Pages 1 and 5 are 1024×1536 (the standard); pages 2, 3 and 4 are 1024×1535. Mixed again, so the
builder will resample.

## Dots

Not read yet — do it when the full ten are in hand, at 2x off the aligned per-gallery header
sheet. See DOTS-defect-for-production.md for why contact-sheet scale is not good enough.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # add titles 6-10, then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py schizophrenia=galleries-staging/schizophrenia-0803
