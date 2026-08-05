# Gestational Diabetes gallery — pages 1–5 received 2026-08-05

Condition **`gdm`** — Gestational Diabetes, OB & Peds, ICD-10 O24.419. The header's ICD-10 matches
`content/conditions.json` exactly. It would be the **96th gallery** and would take **OB & Peds to
2 of 6**, after `preeclampsia` opened the category earlier today.

**Half a gallery. Pages 6–10 still to come.** The builder asserts all ten pages, so it refuses
rather than shipping short.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header. Arrived shuffled — 4, 5, 3, 2, 1.

| page | IMAGE TITLE | file | delivered as |
|---|---|---|---|
| 1 | Overview: Gestational Diabetes | `gdm-01.png` | `f77278d6-…` |
| 2 | Anatomy & Physiology of Gestational Diabetes | `gdm-02.png` | `b82537b2-…` |
| 3 | Pathophysiology of Gestational Diabetes | `gdm-03.png` | `986b9a4d-…` |
| 4 | Clinical Presentation of Gestational Diabetes | `gdm-04.png` | `27fdd0ed-…` |
| 5 | Physical Exam of Gestational Diabetes | `gdm-05.png` | `683b8103-…` |

Clinical sources: ACOG Practice Bulletin No. 190 (2023) plus UpToDate: Gestational Diabetes,
identical on all five pages. PB 190 *is* the gestational diabetes bulletin, so the attribution is
right; the **(2023)** is presumably a reaffirmation year rather than original publication. Worth a
glance from the physician, not flagged as an error.

---

## THE DOTS ARE ALL CORRECT — first time in the whole log

| page | dots | filled at | |
|---|---:|---:|---|
| 1 | 10 | 1 | **ok** |
| 2 | 10 | 2 | **ok** |
| 3 | 10 | 3 | **ok** |
| 4 | 10 | 4 | **ok** |
| 5 | 10 | 5 | **ok** |

Read at 3x off the source pages. Evidence: `DOTS-evidence/gdm-p1-p5-dots-ALL-CORRECT.png`.

**Every row: right count, right index.** No previous delivery has managed that — the closest was
`preeclampsia` at seven of ten. It is only half a gallery, and the log's own rule is that **a half
gallery cannot settle a per-gallery question** (that lesson was learned on `osteoarthritis`, whose
first five were clean and whose second five arrived at eleven dots). So this is not yet proof the
template is fixed. But it is the first clean half ever received and **production should be told**,
because every message they have had so far has been a defect report.

### Two new cosmetic elements

- **An underline bar beneath the current dot** on pages 3 and 4, absent on 1, 2 and 5. A new
  indicator, inconsistently applied.
- **A cyan-ringed dot at position 4 on page 3** — the same stray second-marker seen on `delirium`
  pages 1–3. Harmless, still wrong.

## The Category cell is inconsistent *within* this gallery

New wrinkle. Four of the five pages put the **specialty** in CATEGORY (`OB & Peds`), matching
yesterday's `osteoarthritis`/`preeclampsia` change. **Page 2 puts the page type** (`Anatomy`),
matching the 93 galleries before that.

So the cell now means two different things on two pages of one gallery. Previously the
inconsistency was at least *between* galleries. Also minor: page 5's MODALITY reads
`Clinical Illustration` where the rest read `Illustration`.

Footer labels are **ALL CAPS** here and the shield is the **square** check — i.e. back to the older
styling, while keeping the new Category semantics. Three variables (label case, Category meaning,
shield mark) are now moving independently.

## Checks run

- 5 files, 5 distinct — no duplicates.
- Not a re-send: `triage_incoming_gallery.py` reported 0 already live, 0 possibly revised, 5 new.
- All five footers pass the status-claim check.
- No spelling errors found.
- Every headline band agrees with its footer IMAGE TITLE.

## Page size

Four at 1024×1536, one at 1024×1535.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # add titles 6-10, then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py gdm=galleries-staging/gdm-0805
