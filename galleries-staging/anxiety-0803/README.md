# Anxiety Disorders gallery — 9 of 10 pages received 2026-08-03

Condition **`anxiety`** — Anxiety Disorders, Psychiatry, ICD-10 F41.1 (the pages are stamped
`F41.x`). It would be the 88th gallery and the second Psychiatry one, after Major Depressive
Disorder which shipped as v61.

## **PAGE 5 IS MISSING.** Everything else is here.

Present: 1, 2, 3, 4, 6, 7, 8, 9, 10.

The batch contained 15 files but only **14 distinct images** — one upload was a byte-identical
duplicate of *Major Depressive Disorder page 10*, not of anything in this gallery. So the
duplicate did not hide page 5; page 5 was simply never sent. Worth noting because a duplicate
in a batch that is also short by one page looks, at a glance, like the missing page arriving
twice.

By position, page 5 should be the physical-examination / assessment page: the other nine follow
the same run as depression and compartment syndrome, where 4 is clinical presentation and 6 is
diagnostic evaluation.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header.

| page | IMAGE TITLE | file |
|---|---|---|
| 1 | Overview: Anxiety Disorders | `anxiety-01.png` |
| 2 | Anatomy: Brain Circuits & Neurotransmitters | `anxiety-02.png` |
| 3 | Pathophysiology of Anxiety Disorders | `anxiety-03.png` |
| 4 | Clinical Presentation & Patterns | `anxiety-04.png` |
| **5** | **— not received —** | **missing** |
| 6 | Diagnostic Evaluation & Imaging | `anxiety-06.png` |
| 7 | Pathophysiology & Neurobiology | `anxiety-07.png` |
| 8 | Cellular Pathophysiology & Neurobiology | `anxiety-08.png` |
| 9 | Management & Treatment Strategies | `anxiety-09.png` |
| 10 | Summary, Prognosis & Key Takeaways | `anxiety-10.png` |

Clinical sources: DSM-5-TR, APA Practice Guideline for the Treatment of Anxiety Disorders
(Am Psych Assoc. 2020), Stahl's Essential Psychopharmacology (7th Ed.).

## Checks run

- **Not re-sends** — all nine diffed as new against the 860 live pages at the time.
- **Footer status check clean** on all nine.
- **Titles 7 and 8 are near-duplicates**: "Pathophysiology & Neurobiology" and "Cellular
  Pathophysiology & Neurobiology". Both pages exist and differ, but the titles will read as
  repetition in the thumbnail strip. Worth a look before it ships.

## When page 5 arrives

    # add its title as key "5", then
    mv titles-partial.json titles.json
    python3 scripts/build_galleries_from_images.py anxiety=galleries-staging/anxiety-0803

The builder asserts pages 1–10 all exist, so it will refuse until page 5 is in place — it
cannot silently ship a nine-page gallery.
