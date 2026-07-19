# USMLE Module - Build Status

Ledger for the USMLE bank build. Update EVERY batch (mirrors resident-mode discipline:
files survive session death, conversation does not).

## Decisions locked
- **Deliverable:** in-app "USMLE Mode" quiz engine + pre-generated banks (static; no API).
- **Source (Option A):** official Content Outline drives scope; all vignettes original;
  no copyrighted textbook (FA) content ingested or reproduced.
- **Scope:** blueprint-weighted mix, each batch of 25 spans all Step 1 systems.
- **Difficulty:** each batch centered on Moderate with a few Easy/Hard, all tagged.
- **CCS:** deferred past v1.
- **Exam order:** Step 1 first.

## Progress
| Exam | Batch | File | Items | Validated | Committed |
|---|---|---|---|---|---|
| Step 1 | B1 | data/usmle-step1-b1.js | 25 | yes | yes |

Step 1 running total: **25** MCQs (max 280).

### Batch 1 ids
s1-0001 .. s1-0025 (contiguous).

### Answer key balance (B1)
A:5 B:5 C:5 D:5 E:5 (no sequential pattern). Anchors: 12/25.

## Next
- Step 1 Batch 2 (s1-0026 .. s1-0050), same blueprint mix. Run validator with
  `--against data/usmle-step1-b1.js` to guarantee no id collisions.
- Later (separate publish session): wire "USMLE Mode" UI into `index.html`, fold banks
  into a production array, push live via the Chrome publish path (medcodex-publish).

## Trigger for next session
"Continue the USMLE module - generate Step 1 Batch 2 (25 items, blueprint mix)."
Attach: this status doc + data/usmle-step1-b1.js (for id collision checking).
