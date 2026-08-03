# Osteoporosis gallery - INCOMPLETE, do not build yet

Received 2026-08-03: **5 of 10 pages**. Every header reads `IMAGE n OF 10`, so pages
**6, 7, 8, 9 and 10** are outstanding. `build_galleries_from_images.py` asserts all ten and will
refuse until they arrive.

Condition id **`osteoporosis`** ("Osteoporosis", MSK & Rheum) already exists, and the header's
"MSK & RHEUM" with ICD-10 **M81.0** (age-related osteoporosis without current pathological
fracture) agrees. No gallery on that condition yet.

## Page order - shuffled again

Read off the `IMAGE n OF 10` header strip.

| upload | real page | title |
|---|---|---|
| #2 | **1** | Overview: Anatomy, Pathophysiology & Clinical Approach |
| #3 | **2** | Anatomy: The Skeletal Framework |
| #1 | **3** | Pathophysiology |
| #4 | 4 | Clinical Presentation |
| #5 | 5 | Physical Exam |

## Defects

1. **Page 2 fills the first TWO dots** - cumulative fill. Pages 1, 3, 4 and 5 each fill exactly
   one dot at the right index, and all five carry ten dots, so the count is right again.
   **This is the second gallery running where page 2 specifically is the cumulative one**
   (Fractures had it too, on page 2, and nowhere else). That is a strong hint for production:
   look at how page 2 is generated rather than at the row as a whole.
2. **Page 3 exported at 1024x1535**, one pixel short. The other four are exactly 1024x1536. The
   builder will resample it, but a resampled page is softer than one exported right.

## What is right

No REVIEW cell in the footer on any page - nothing claims a pending review. Canonical logo
lockup on all five. Shield is the RC-over-pulse mark, matching Fractures but NOT the RC +
checkbox mark on COVID-19 and Osteomyelitis.
