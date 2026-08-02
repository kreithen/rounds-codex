# The status cell cannot be repainted at scale — attempted 2026-08-02, twice, deleted

Recorded so it is not proposed again, in the same spirit as the header-dot repainter.

## What was tried

A tool that finds the footer status value by INK COLOUR (the value is gold/amber/orange/red; the
"REVIEW" label above it is cyan, so colour separates them without depending on geometry), erases
it against a per-row background sampled from the gutter beside it, and renders
"ROUNDS CODEX / VERIFIED" in its place.

The type face was chosen honestly: Liberation Sans Bold was picked by rendering a word that
already exists on the page — CLINICAL — and comparing it against the original at 6x. It matches
well. Font was never the problem.

## Attempt 1 — sized the face by WIDTH

Matched the replacement width to the detected warm-ink span. The span over-reaches whenever the
mask catches any other warm element in the footer band, so sepsis and aki got ~40px type
sprawling across the entire bar. Obviously broken.

## Attempt 2 — sized the face by CAP HEIGHT, plus a fit check

Cap height is a property of the text being replaced and cannot be inflated by a detection error,
so this fixed the sizing. It still produced damaged pages:

* **sepsis** — the warm mask caught the orange "ACT IMMEDIATELY" banner a row above the footer,
  so the erase struck through that banner and the replacement landed across it.
* **aki** — replacement overflowed its cell into the neighbouring CLINICAL SOURCE column.
* **thrombocytopenia** — same overflow, printing over the source citation.

Three of the five it accepted were visibly damaged. It refused three more (leukemia, dvt,
meningitis), which is the guard working, but a tool that damages the majority of what it accepts
is not usable.

## Why it fails, stated plainly

The cell has no reliable boundary. "Rightmost cell of the footer bar" is a description, not a
geometry: across **eleven page sizes and at least six footer templates** the divider position,
the cell width, the number of lines, the ink colour and the label wording all vary. Colour finds
the *text* but not the *cell it must stay inside*, and without the cell bounds there is nothing to
clip the replacement to.

**One page can be done well by hand.** The single sample that looked good had its cell
coordinates hard-coded after measuring that page. That does not generalise to 317 pages, and
317 hand-measured pages is not a realistic or reviewable piece of work.

## What to do instead

Re-render from the template with the correct badge. The audit beside this file gives production
the exact page list, the exact current wording per page, and the ink colour, so the re-render can
be scoped precisely rather than "all galleries".

The canonical mark is **"Rounds Codex Verified" under the RC shield** — the physician's decision,
2026-08-02, matching the eight galleries that already ship it. The MedCodex/MC form in the
original screenshot exists on no live page.
