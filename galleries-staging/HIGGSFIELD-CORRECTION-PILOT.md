# Pilot: can Higgsfield correct a mislabelled leader line?

**Date:** 2026-08-06 · **Cost:** 18 credits over three runs · **Verdict: yes — panel only, one change per run.**

The physician asked whether a mislabelled page could be sent to Higgsfield, corrected, and QA'd.
Three runs on `pericarditis` p2 answered it. Run 1 failed, and the two things the physician then
changed — *crop out just the panel, and prompt it properly* — are exactly what made run 3 work.

Test page chosen because it has only two bad labels, a simple layered cross-section, and its ground
truth had already been verified by hand, so the output could be judged strictly.

## The three runs

| run | input | prompt | result |
|---|---|---|---|
| 1 | **whole page** (1280x1920) | preserve everything, move 2 dots | **failed** — regenerated the entire page |
| 2 | panel crop, 627x795, `aspect_ratio: auto` | preserve everything, move 2 dots | **failed** — squashed to 1024x1024, neither dot moved |
| 3 | panel crop **padded to a 795x795 square**, `1:1` | **one** change, stated plainly | **worked** |

## Why run 1 failed

Region-wise diff of original against output, 8x6 grid, mean absolute difference out of 255:

```
row0:  46  27  28  24  11  18      row4:  26  44  26  17  29  32
row1:  44  49  37  29  26  23      row5:  30  38  24  31  26   8
row2:  11  61  29  32  46  37      row6:  23  44  31  24  22  11
row3:  20  46  36  23  39  32      row7:  21  20  22  26  19  19
```

Whole page 28.9/255, **no region near zero**. A targeted edit reads ~0 everywhere but the two dots.
Every text block, the heart render, the footer and the header were repainted, and it downscaled
1280x1920 to 1024x1536. Sending the whole page asks the model to re-derive ~40 text elements
including a six-cell footer carrying the domain and copyright line.

## Why run 2 failed, and the fix

`aspect_ratio: "auto"` was ignored: a 627x795 panel came back 1024x1024, i.e. stretched. The fix is
to **pad the crop to a square on our side**, using the panel's own background colour, and ask for
`1:1`. Then nothing is distorted and the padding is stripped afterwards.

Run 2 also kept two instructions in one prompt and made neither change.

## How run 3 was measured

Visual QA of a full page cannot be done from this container (see *Transport* below), so the dots
were measured instead. For each leader line the script finds the white tip, then samples the tissue
band colours stepping right from it, classifying each as grey-fibrous / teal-cavity /
lavender-visceral / red-myocardium.

**Original panel** — reproduces the hand-verified findings exactly:

| label | band the tip sits in | |
|---|---|---|
| Fibrous | GREY-fibrous | ok |
| Parietal Serous | TEAL-cavity | **wrong** |
| Pericardial Cavity | TEAL-cavity | ok |
| Visceral Serous | LAVENDER | ok |
| Myocardium | TEAL-cavity, red not reached until +55px | **wrong** |

**Run 3 output** — the Myocardium leader now terminates with RED at **+10px**, against +95px in run
2 and +55px in the original. The correction was made. Visceral Serous still lands on lavender.
The decoded top strip confirms the heading, the green `Fibrous Pericardium` label and the layer
order all render correctly, with no text corruption.

**Not fully verified:** only 4 of 5 horizontal leaders were detected in the output, so one label
could not be confirmed unchanged, and no full-resolution visual read was possible from here. **The
physician must look at the output before it is used.** It is in the Higgsfield gallery.

## The recipe

```python
BOX = (635, 305, 1262, 1100)          # panel on the 1280x1920 page - per page
crop = page.crop(BOX)                  # 627x795
S    = max(crop.size)
sq   = Image.new("RGB", (S, S), crop.getpixel((5, 5)))   # pad with the panel's own background
sq.paste(crop, ((S - crop.width) // 2, 0))
```

- upload `sq`, generate with `openai_hazel`, `aspect_ratio: "1:1"`, `quality: "high"`
- **one change per run.** Run 2 asked for two and made neither.
- state it plainly: *"Copy this image unchanged except for ONE thing. The white line labelled X
  currently stops in the dark teal band. Extend it right so its endpoint sits in the middle of the
  thick RED muscle."* Then list what must stay identical.
- strip the padding: the panel occupies x `[84*1024/795, (84+627)*1024/795]` = `[108, 916]`, full
  height; resize back to 627x795 and paste at `(635, 305)`.
- re-run the band probe against the output before accepting it.

## Transport — the real constraint

`scripts/hf_fetch_chunks.py` exists because the result CDN is unreachable from this container (the
agent proxy refuses CONNECT). Higgsfield's `sandbox_exec` can reach it, so an image can return as
base64 chunks. It self-tests, and it works for a **small crop**.

It is not reliable at page resolution: `sandbox_exec` truncates stdout at ~20 KB, a readable page
needs 7+ round trips, and re-entering long base64 by hand corrupted three separate attempts. **Do
not plan on eyeballing output from here.** Measure it numerically — the band probe above is
stronger evidence than a visual read anyway — and have the physician confirm in the gallery.

## Recommendation

1. **Ask production to re-render from source first.** Free, exact, resolution preserved, and they
   can fix the *template* faults in `LABEL-QA.md` (fan-of-leaders, off-by-one) rather than 47 pages
   one at a time.
2. Where production cannot, the panel recipe above is a working fallback at ~6 credits per change.
3. Either way the physician gates every output. A confidently wrong leader line looks exactly like
   a correct one.
