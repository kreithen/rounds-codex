# Corrected artwork awaiting deploy

Held on `claude/anatomy-label-corrections-j58lf1` deliberately (physician's call, 2026-08-10):
**batch cardiology corrections and deploy once**, rather than a second deploy for a single dot
during the other session's launch week. This project is not launch-blocking.

## 1. `aortic-dissection` page 1 — second orphan dot

| | |
|---|---|
| file | `aortic-dissection-01-PENDING-v2-page.png` (+ .jpg, + panel crop) |
| supersedes | the v89 page currently live |
| diff vs live | **(363,302)–(388,315) = 25×13 px**; everything else byte-identical |
| orphan dot (374,308) | 32 → 12 bright px — residual is the reinstated leader line passing through |
| terminal dot (402,304) | 18 → **18, untouched** |
| approved | yes, 2026-08-10 |

**What it fixes.** The "Aortic root" leader carried **two** dots — seven dots on the page for six
labels. The rightmost (402,304) is the real terminus on the aortic root; the one at (374,308) sat
mid-line on the right atrial appendage, attached to nothing. A reader tracing the leader hit the
first dot and read "aortic root" as the atrial appendage.

**Pre-existing, not introduced by us** — verified against the pre-v89 blob (`beb5531`), which carries
16 bright pixels there against the shipped file's 13, a difference explained entirely by JPEG
re-encoding.

**Method.** Harder than the v89 stray, which was a dead-end stub that could be erased wholesale.
This dot straddles a **live leader that has to survive**, so: clone-fill the bulge from tissue 16 px
below (clear of both dot and line), then redraw the 1 px stroke across the gap, supersampled 4×,
matching measured brightness (~160) and the line's real slope (y=309 at x=360 → y=306 at x=394).

### Deploy sequence when the batch ships
1. copy the PNG over `aortic-dissection-upload/assets/aortic-dissection/aortic-dissection-01.jpg`
   at **q92** (matches the v89 encode)
2. regenerate `gthumbs/aortic-dissection-01.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> aortic-dissection` — the PDF is a build artifact
   and drifts otherwise
4. `python3 scripts/verify_gallery_pdfs.py <root> aortic-dissection`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**The page stays 915×1373**, not the 1024×1536 standard. A production re-render from source would fix
the size, this dot and the other 41 `aortic-dissection` findings in one pass — this local fix is a
stopgap for a live defect, not a substitute for that.

---

## Higgsfield was tried on this dot and failed — second independent failure on this panel

Physician asked for the Higgsfield route; two variants were generated and both failed, so the
deterministic fix was shipped instead.

| | orphan dot (must go) | terminal dot (must stay) | quietest 60×60 region |
|---|---|---|---|
| Variant A | 32 → **16** — dimmed, not removed | 18 → 11, kept | 2.8/255 |
| Variant B | 32 → **0**, removed | 18 → **0** — **anchor destroyed** | 3.2/255 |
| deterministic | 32 → 12 | 18 → **18** | n/a — 325 px touched |

**Variant B is the instructive one:** it made the requested change *and* deleted the correct terminal
dot beside it, leaving the "Aortic root" label anchored to nothing — a worse defect than the one
being fixed.

**Both fail the pilot's own fidelity test regardless of the dots.** `HIGGSFIELD-CORRECTION-PILOT.md`
requires a targeted edit to read **~0 everywhere except the change**; the quietest region here is
2.8–3.2, so the whole panel was re-derived. Pasting either back would replace ~130,000 px of approved
artwork to fix 325.

This reproduces the **Aug 6** attempt on this same panel, which "removed the wrong dot but came back
with five leaders where the original had six". **Two independent attempts, the same class of
failure: the model will not reliably leave an adjacent marker alone.**

**Conclusion for this defect class:** for a *stray mark next to a correct mark*, use the
deterministic route. Higgsfield remains viable for what the pilot actually validated — moving a
single leader endpoint on a panel with no adjacent marker to preserve.
