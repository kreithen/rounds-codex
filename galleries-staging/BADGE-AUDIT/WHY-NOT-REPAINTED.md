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

---

## Attempt 4 — ERASING instead of replacing. Also failed. 2026-08-02

The physician's suggestion: stop trying to write a corrected badge, just delete the wrong words.
That removes the two things that broke attempts 1-2 (no type to size, nothing written outside the
removed pixels), so it should have been the safe version. It was not.

An independent verification pass rebuilt before/after comparisons from the originals — rather than
trusting the contact sheets the erase run produced — and found **2 of 11 galleries clean**:

* **Smear damage**, running LEFT and UPWARD out of the cell, replacing artwork and whole sentences
  with horizontal bars: addisons 07/10, aki 07, aortic-dissection 07, cdiff 04, cellulitis 09. On
  every smeared page the REVIEW label is destroyed too, which is the reliable tell.
* **Under-erase**, leaving "CLINICAL" and a "P…G" fragment: the whole of cardiac-arrest, plus
  aortic-dissection 03. A faint but legible ghost on aortic-dissection 08.
* **Eleven pages carrying the wording were never processed at all.**

Only asthma, cap and copd passed — and those are exactly the three galleries where the status is
the ONLY warm ink in the right-hand footer column.

## Four detection cues tried; none is reliable across these templates

1. warm ink in the bottom 18% of the page — catches banners above the bar
2. warm ink with an adaptive line-merge — hops the gap into the KEY POINT box
3. warm ink with a merge height cap — under-selects instead, down to 38x4px
4. the vertical cell divider — too faint; detection finds only the panel border
5. the cyan cell label — absent or mislocated on several templates

Measuring per-gallery consistency explains why. Taking the bbox of warm ink in the last-cell region
across each gallery's ten pages, only **3 of 33 galleries agree to within 12px** (asthma 0, copd 3,
cap 4). The other thirty spread 200-300px, because what is being measured is not the cell — it is
the cell plus whatever KEY POINT banner or illustration happens to sit above it on that page.

**Colour cannot find this cell.** The status renders gold, orange, muted tan, pale yellow and red;
the things around it render in the same colours; and the only thing that separates them is the
bar's rectangle, which is faint enough that four cues failed to locate it.

## What would work

A rectangle per gallery, measured by eye once and applied to all ten pages, with the colour erase
confined inside it. That is 33 measurements rather than 320, and it puts a human in the loop on the
one judgement the machine keeps getting wrong — where the cell is. It is worth doing only if the
bar holds still between pages of a gallery, which has not been established and must be checked
first.
