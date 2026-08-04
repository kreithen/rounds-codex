# Major Depressive Disorder gallery — pages 1–5 received 2026-08-03

Condition **`depression`** — Major Depressive Disorder, Psychiatry, ICD-10 F32.9.

**This would be the FIRST Psychiatry gallery.** All seven Psychiatry conditions currently have
none, so it opens a category rather than adding to one. It would be the 87th gallery.

**Half a gallery. Pages 6–10 still to come — do not build until they arrive.**

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own "Page n of 10" agrees with the header. The batch arrived in the order 1, 5, 2, 4, 3.

| page | IMAGE TITLE | footer CATEGORY | file |
|---|---|---|---|
| 1 | Overview: Biology, Pathophysiology & Clinical Overview | Psychiatry | `depression-01.png` |
| 2 | Labeled Neuroanatomy | Anatomy | `depression-02.png` |
| 3 | Pathophysiology of Major Depressive Disorder | Pathophysiology | `depression-03.png` |
| 4 | Clinical Presentation of Major Depressive Disorder | Clinical Presentation | `depression-04.png` |
| 5 | Physical Examination of Major Depressive Disorder | Clinical Assessment | `depression-05.png` |

Clinical source on every page: American Psychiatric Association DSM-5-TR (2022) + UpToDate:
Major Depressive Disorder.

## Checks run

- **Not re-sends** — all five diffed as new against the 860 live pages.
- **Footer status check clean** — no cell asserts pending / proof / prepublication / draft.
- **The RC☑ shield lockup** is on all five.
- **Progress dots are nearly right, which is new.** Ten dots and the correct fill index on all
  five pages — the count and index defects that ran through the gout 6–10 / compartment / SLE
  batch a few hours earlier are absent here. **The one fault is page 2, which has a SECOND,
  dimmer filled dot at position 1** alongside the correct bright fill at position 2 — the
  cumulative-fill artifact, in a half-lit form.

  Read at 2x off the aligned header sheet. At contact-sheet scale I first misread pages 4 and 5
  as off-by-one; they are correct. Zoom before believing a dot reading.

## Page size

Page 1 is **1024×1535**, pages 2–5 are **1023×1537**. Neither is the 1024×1536 standard, and
the set is mixed, so the builder will resample all five. Every batch this evening has arrived
with inconsistent page dimensions.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # header strip for order, footer for titles, dot rows at 2x off the aligned header sheet
    mv titles-partial.json titles.json     # after adding entries 6-10
    python3 scripts/build_galleries_from_images.py depression=galleries-staging/depression-0803
