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

---

## The per-gallery rectangle plan is dead too — its prerequisite fails. 2026-08-02

The paragraph above ends "it is worth doing only if the bar holds still between pages of a
gallery, which has not been established and must be checked first." It was checked. It does not.

Cross-correlating each gallery's footer band (bottom 18%) against its own page 1, searching
+/-40px in both axes:

| gallery | size | correlation vs p1 | best offset |
|---|---|---|---|
| asthma | 800x1200 | 0.74 – 0.84 | (0,0) on all nine |
| copd | 800x1200 | 0.60 – 0.80 | (0,0) on eight of nine |
| cap | 800x1200 | 0.48 – 0.86 | (0,0) on seven of nine |
| cellulitis | 1024x1536 | **0.06 – 0.20** | (-6,2) to (18,26) |
| sepsis | 1024x1536 | **0.06 – 0.13** | (-36,-20) to (36,20) |
| aki | 1024x1536 | **0.08 – 0.15** | (20,-12) to (40,20) |
| uti | 1024x1536 | **0.09 – 0.14** | (-14,-12) to (34,40) |
| hiv | 1024x1536 | **0.08 – 0.22** | (-32,-6) to (34,18) |

A per-pixel constancy map says the same thing from the other direction: 78% of asthma's footer
band is identical across its ten pages, versus **0.3% of cellulitis's and 0.0% of sepsis's**.

The reading is that these pages are not a template with artwork poured into it. **The footer is
drawn by the generator on each page**, which is also why the dot count, the status wording, the
typos and even the page size wander within a single gallery. The three galleries that hold still
are the three surviving 800x1200 ones from the older pipeline — and they are exactly the three
that passed verification in attempt 4. That is not a coincidence, it is the whole explanation.

So there is no rectangle to measure once and reuse. Per-gallery would have been 33 measurements;
per-page is 380, which is not reviewable.

## What actually worked: stop having the machine choose. `scripts/badge_lines.py`

Every failed cue found the text and then picked the wrong blob. So the machine no longer picks.
It enumerates every warm text line in the bottom 30% of the page, draws them numbered over a 2x
crop with the cyan cell labels outlined for orientation, and stops. A reviewer names the numbers.

Two changes make the enumeration safe enough to choose from:

* **2D connected components, not row runs.** The tia p10 smear — 110px of the FINAL TAKEAWAY
  panel replaced by a bar — happened because a row-run's bbox spans every warm pixel on its
  scanlines, and "Recognize. Evaluate. Treat. Prevent." in gold sits 500px to the left of the
  status on the same rows. Components are grouped into lines by baseline overlap AND x-proximity,
  so a box cannot reach across the page.
* **A much lower warm threshold.** hyponatremia's pale mixed-case "Clinical Pending" sat under
  the old r>140 cut, so it was never detected — and the old "no warm ink remains" check could not
  see it either, so the tool reported success on a page it had not touched. r>95 finds it. Over-
  detection now costs a reviewer one more numbered box; under-detection ships the claim.

With that, the two pages the old tool got most wrong come out right: tia p10 offers `16 Clinical`
/ `17 Pending` as two tight boxes beside the cyan REVIEW label, and dvt p01 — which the old tool
refused outright as having no warm status ink — offers `10 CLINICAL` / `11 PENDING`.

**Known gap: copd prints the claim a second time**, in grey, at the end of the centred copyright
line ("© 2026 Rounds Codex, Inc. • COPD • Page 1 of 10 • CLINICAL PENDING"). Grey is not warm, so
it gets no box and cannot be picked. copd is one of the three galleries whose footer DOES hold
still, so that one is handled by a measured box applied to all ten pages.

---

## Attempt 5 — reviewer-chosen boxes. This one works. 2026-08-02/03

`scripts/badge_lines.py` enumerates every warm text line in the bottom 30% of a page, draws them
numbered over a 2x crop with the cyan cell labels outlined, and stops. Ten agents read all 380
pages of the 38 affected galleries and named which numbers are the false claim; the code then
deletes exactly those boxes and asserts it changed nothing else.

296 pages erased, 38 correctly had nothing to erase, 6 refused by the guard.

**Three things the reviewers found that no detector would have.**

* **asthma, cap and copd print the claim TWICE** — the second time in pale cyan at the end of the
  bottom copyright line, `... Page 10 of 10 - CLINICAL PENDING`. It is the same ink as the rest
  of the line, so no warm-ink pass can see it, and it had been sitting there through four
  previous attempts. `scripts/badge_copyright_tail.py`.
* **pad and dvt end their line with `Proof - Prepublication`**, and pad p6 carries a third copy
  inside the artwork in red. The physician asked for all of it. `scripts/badge_proof_tail.py`.
* **hyponatremia's claim was never detected at all.** Its pale mixed-case gold sat under the old
  r>140 cut — and the old "no warm ink remains" check could not see it either, so the tool
  reported success on pages it had not touched.

**Four defects found by the independent before/after pass, all now fixed.** This is the part
worth keeping: every one was invisible to the tool's own checks, which passed on all of them.

1. *The fill on the copyright strip was a light-blue bar.* The panel colour was taken as the
   median of the 60px left of the erased text — which there is "Page 1 of 10", not empty panel —
   so it landed between the type and the background: RGB(9,52,73) against a true RGB(1,8,18), on
   all ten asthma and all ten cap and copd pages. Taking the darkest half of that one window was
   still not enough, because on some rows the window is more than half type. `row_bg()` now
   offers both sides and each row takes the darker.
2. *Box growth climbed into the cell label.* The growth added so meningitis p3 would not leave a
   stray "C" was symmetric, and the cyan label sits directly above the value: cdiff 06 lost the
   bottom two rows of "REVIEW", di 10 lost the label outright. Sideways growth is what that fix
   needed; vertical is now capped at 2px.
3. *A detached underline survived.* addisons stamps its status with a short amber rule two rows
   under the text, so growth — which only follows ink that touches — left it on three pages and
   removed it on the other seven, leaving an orange dash in an empty cell.
4. *The damage check could not see two of the three passes.* It keyed off `badge_lines`' manifest
   alone, so it masked the REVIEW cell, treated the copyright-strip edit as unexplained noise and
   **reported cap and copd clean while their footers carried a visible bar**. Each pass now writes
   its own manifest and the check reads all of them.

**The pages are also re-encoded better than the first run.** Matching the source's quantization
tables was worth little on its own; the loss was almost all CHROMA SUBSAMPLING. Writing 4:4:4
while keeping each source's tables gains 3.2-3.8 dB and is *smaller* than raising quality to 95.
Measured effect on the pages outside the edited cell: the longest contiguous run of changed
pixels went from 972px to 34px worst-case, and from 71 pages to one.

**A note on `.convert('RGB')`.** It returns a NEW Image with the JPEG quantization tables
dropped, so passing the converted handle to the saver silently fell back to a fixed quality and
re-quantized the whole page — the exact thing the saver exists to prevent. Keep the unconverted
handle.

**The tail passes are NOT idempotent.** dvt refuses a second run because its table asserts there
is ink where the tail used to be; pad's automatic path does not, and re-running it over its own
output ate "PAD Page N v6.0" as well. Run the chain from the deployed pages.
