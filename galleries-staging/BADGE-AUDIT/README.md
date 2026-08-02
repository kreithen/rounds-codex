# Gallery status-badge audit — 2026-08-02

The physician reported that gallery pages carry a **"REVIEW / CLINICAL PENDING"** status in the
bottom metadata bar, which is factually wrong: all artwork has been reviewed. The correct mark is
a shield badge reading **Verified**.

This directory holds the full page-by-page audit of all **780 pages across 78 galleries**, read
visually from footer contact sheets (eight parallel readers, one sheet per gallery, ten rows per
sheet in page order).

## What the audit found that the original report did not

It is not one defect with one fix. The footer's rightmost cell is used for **at least five
different things** across the set, and only some of them are wrong:

1. **Verified badge** — RC shield + "Rounds Codex Verified". Already correct.
2. **False pending claim** — "REVIEW / CLINICAL PENDING", "CLINICAL PEERED", "Clinical Pending".
   This is the reported defect.
3. **Hybrid** — the RC shield IS present but captioned "CLINICAL PENDING" instead of "Verified".
4. **Content descriptor, not a status** — "REVIEW / HIGH-YIELD FOUNDATION",
   "REVIEW / Start of Module", "REVIEW / Pathophysiology". These make no false claim; whether they
   should become a verified badge is an editorial decision, not a correction.
5. **No status cell at all** — some templates simply do not have one (e.g. hypoglycemia, whose
   rightmost element is an ICD-10 code).

Counts, the per-page table and the production brief are in the files beside this one.

## Reading caveat recorded honestly

The first crop region (0.855-0.985 of page height) missed the metadata bar on some page layouts,
which produced UNREADABLE rows. Those galleries were re-cropped at 0.78-1.0 and re-read. An
UNREADABLE row in the raw agent output is a limitation of the crop, not evidence of a missing
badge -- the re-read is what settles each one.
