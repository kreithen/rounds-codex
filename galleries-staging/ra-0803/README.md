# Rheumatoid Arthritis gallery - INCOMPLETE, do not build yet

Received 2026-08-03: **5 of 10 pages**. Every header reads `IMAGE n OF 10`, so pages
**6, 7, 8, 9 and 10** are outstanding.

Condition id **`ra`** ("Rheumatoid Arthritis", MSK & Rheum) already exists and has no gallery;
the header's "MSK & RHEUM" and ICD-10 **M06.9** (rheumatoid arthritis, unspecified) agree.

## Page order - shuffled again

| upload | real page | title |
|---|---|---|
| #4 | **1** | Overview: Introduction |
| #5 | **2** | Anatomy: The Normal Joint |
| #2 | **3** | Pathophysiology: Immune-Mediated Joint Destruction |
| #1 | **4** | Clinical Presentation |
| #3 | **5** | Physical Examination |

## Defects

1. **The dot row is a full cumulative PROGRESS BAR on every page.** Page 1 fills one dot, page 2
   fills two, page 3 three, page 4 four, page 5 five. This is Defect 2 in its original form,
   fully regressed - the last three galleries had it on page 2 only.
2. **The dot count also varies within the batch: 9, 9, 9, 8, 10.** Never the correct 10 except
   by accident on page 5.
3. **Two pages exported at 1023x1537** (pages 2 and 4 as delivered). The other three are
   1024x1536. This is the 1023x1537 variant last seen on the 2026-08-02 batch, not the
   1024x1535 one seen on Osteoporosis.

Taken together this looks like an OLDER template version than the one that produced Fractures
and Osteoporosis earlier the same day, both of which had ten dots on every page.

## What is right

**No REVIEW cell in any footer** - confirmed both by the new automated footer-claim check in
`triage_incoming_gallery.py` (its first real batch, all five clean) and by eye on the footer
crops. Canonical logo lockup on all five. Shield is the RC-over-pulse mark.
