# Pilot: can Higgsfield correct a mislabelled leader line?

**Date:** 2026-08-06 · **Cost:** 6 credits · **Verdict: no, not as a surgical edit.**

The physician asked whether we could send each mislabelled gallery page to Higgsfield, prompt it
to fix the leader line, and QA the result. This is the one-page pilot.

## What was run

| | |
|---|---|
| page | `pericarditis` p2 — "Pericardial Layers & Relationships" |
| why this page | only 2 bad labels, a simple layered cross-section, and the ground truth was verified by hand at tile level first, so the output could be judged hard. `aki` p2 (19 bad labels across 3 panels) would have failed for reasons that teach nothing. |
| model | `openai_hazel` — the catalogue's editing model, tagged `text-rendering`, `editing`, `typography`, `diagram`, `infographic`. The best available fit. |
| input | the live page, imported by URL. Verified byte-identical over the wire (md5 `045969a7…` both ends). |
| prompt | preservation-first: every element to be reproduced unchanged, listed explicitly, then the two dot moves described with the tissue bands enumerated outside-in. Leading with the constraint, per the lesson from the USMLE image prompts. |

## Result

**It regenerated the whole page instead of editing it.** Region-wise difference of original vs
output, on an 8x6 grid, mean absolute difference per region out of 255:

```
row0:   46   27   28   24   11   18
row1:   44   49   37   29   26   23
row2:   11   61   29   32   46   37
row3:   20   46   36   23   39   32
row4:   26   44   26   17   29   32
row5:   30   38   24   31   26    8
row6:   23   44   31   24   22   11
row7:   21   20   22   26   19   19
```

Whole page 28.9/255. **No region is anywhere near zero.** A genuine targeted edit would read ~0
everywhere except the two dots. Every text block, the heart render, the footer and the header were
all repainted.

**It also downscaled.** Source 1280x1920, output 1024x1536 — so even a perfect result would not
drop back into the gallery at the page's own resolution.

## Why this was predictable, and why it is not a prompt problem

These pages are **not Higgsfield's work**. Higgsfield made the 231 USMLE illustrations; the gallery
pages come from the production illustrator's pipeline, and **they hold the source**. For them a fix
moves one line and leaves the other 95% of the page byte-identical. Higgsfield has no source, so it
must re-derive the entire 1024x1536 page — title band, ten-item numbered list, three panel headings,
KEY POINT box, and a six-cell footer carrying the domain and copyright line. Dense small type is the
first thing to go, and the defect log already tracks production's own text errors (`MODIFVABLE`,
`bloodigd`, `casee`).

The deeper objection stands regardless of model or prompt: **to place the line correctly the model
must know where the structure is** — which is precisely the task the original pipeline failed. A
confidently wrong line looks exactly like a correct one, so every output needs the physician's eyes.
At 47+ pages that is the real cost, not the credits.

## QA transport — built, works, but impractical at page resolution

`scripts/hf_fetch_chunks.py` exists because the result CDN is unreachable from this container (the
agent proxy refuses CONNECT). Higgsfield's own `sandbox_exec` can reach it, so an image can come back
as base64 chunks and be reassembled here, with the count/gap check refusing a truncated transfer.

It self-tests correctly and it is the right tool for a **small crop**. For a whole page it is not
practical: `sandbox_exec` truncates stdout at ~20 KB, a readable page is 7+ round trips, and one
reassembly came back with a broken data stream. **The full-resolution visual QA of this pilot was
therefore not completed from the container** — the numeric diff is the evidence, and the physician
can view the output in the Higgsfield gallery.

## Recommendation

1. **Ask production to re-render from source.** Strictly better and free: one line moves, nothing
   else changes, resolution preserved.
2. Send them the two mechanical patterns in `LABEL-QA.md` rather than 47 individual page reports —
   the fan-of-leaders and the off-by-one are template faults, not page faults.
3. Keep Higgsfield as the fallback for a page production cannot re-render, accepting that the whole
   page is regenerated and must be proofread end to end, not just at the corrected dot.
