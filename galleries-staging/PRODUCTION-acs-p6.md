# For production: `acs` page 6 — the magnifier ring encloses no vessel

Send with the leader-line re-render batch. Attachment: `PRODUCTION-acs-p6-evidence.png`.

---

## What is wrong

The magnifier ring on the anterior heart is centred at **(761.6, 360.7)**, radius ~10.7 px. At 16× it
contains **no coronary artery at all** — only myocardial surface texture. The inset it feeds shows an
atherosclerotic plaque *inside a coronary artery*, so the ring is telling the reader "this is the
segment we have magnified" while pointing at bare muscle.

Measured rather than eyeballed. Counting strongly red pixels (R−G > 60, which separates the drawn
vessels from myocardium) inside a disc of the ring's own radius:

| centre | mean R−G | fraction of pixels that are vessel |
|---|---|---|
| **(762, 361) — where the ring is now** | 33.0 | **5%** |
| **(735, 356) — 28 px to its left** | 61.5 | **56%** |
| (712, 350) | 43.3 | 20% |
| (724, 372) | 42.8 | 11% |

So the correct target is close by and unambiguous: **move the ring 28 px left, to centre ≈ (735, 356)**,
where it encloses a coronary segment. The connector to the inset then runs from the new ring edge to
the same point on the inset circle, (828, 322).

**`acs` page 3 does this correctly** — the equivalent ring there encircles the anterior descending
vessel just proximal to the infarct territory. Same gallery, same device, so this is a placement slip
rather than a limitation of the layout.

---

## Why we are not fixing this one locally

Every other correction in this batch moves a dot or a leader — a few hundred pixels of thin stroke.
This one requires erasing a **28 px disc** of shaded myocardium near the heart's silhouette edge, and
that does not repair cleanly: four clone offsets were rendered and every one left a visible pale patch
where the old ring had been. The ring is a prominent graphic on the page's hero image, and a repaired
patch there would be more noticeable than the defect.

The move itself is trivial in the source file. Please re-render.

---

*Measured on the shipped page, 2026-08-10. Extends the finding in `CARDIOLOGY-audit-findings.md` with
the corrected coordinates and the vessel-fraction measurement behind them.*
