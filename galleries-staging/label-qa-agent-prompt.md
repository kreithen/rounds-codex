# Task: find mislabelled leader lines on Rounds Codex anatomy pages

You are auditing medical illustration pages for one specific defect, reported by the physician
who owns the product:

> **The line from an anatomical label does not go to the correct location on the artwork.**

Your job is to look at each assigned page and decide, for every labelled structure, whether its
leader line terminates on the structure it names. Report findings. Do not edit anything.

## Your assigned pages

Read your batch file (path given below). It is JSON: a list of `{gid, page, title, cond, cat}`.

## How to look at a page — follow this exactly

For each page:

1. Generate tiles:
   `python3 /home/user/rounds-codex/scripts/qa_label_tiles.py <gid> <page> --out /tmp/qa-tiles/<gid>`
   It prints the filenames it wrote.
2. **Read the `-full.jpg` first.** Get oriented: which panel holds the labelled diagram, how many
   labels there are, where the leader lines run.
3. **Then read the tiles that contain the label text and the line endpoints.** You usually need
   2–4 tiles, not all 6. Tiles are 2x magnified and overlap by 12%.
4. For each label, trace its line from the text to where it stops, and ask: **is the structure at
   that endpoint the one the label names?**

**You must zoom. Do not judge from the full page.** At 1024x1536 a leader line is 1–2 pixels
wide; endpoints cannot be resolved at that size. Judging from the full page is how this audit
produces wrong answers.

## Traps that will make you report false positives

These are real and were hit during calibration:

- **Dogleg / elbow connectors.** A leader may run horizontally a long way, then turn 90° and run
  vertically to its target. On `croup` page 2 the "Subglottic space" dashed line runs right, then
  turns and travels a long way *up* to a dashed box at the larynx. Reading only the horizontal
  segment makes it look like it points at the carina. **Follow the whole path, including turns.**
- **Callout boxes rather than points.** Some labels connect to a dashed rectangle enclosing a
  region, not to a single point. Judge whether the *box* encloses the right region.
- **Labels that point to a zoomed inset**, not to the main figure. That is correct behaviour.
- **A label naming a region** (e.g. "subglottic space", "posterior fossa") legitimately points at
  an area, not a discrete organ. Be more forgiving with regions than with discrete structures.
- **Multiple panels.** Many pages have 3–5 panels. A label belongs to the panel it sits in.

## What counts as a finding

| verdict | means |
|---|---|
| `WRONG` | The line clearly ends on a different named structure, or in empty space / plain background / a different organ. You can say what it lands on instead. |
| `SUSPECT` | The endpoint is ambiguous, sits between two structures, or is close-but-off. You would want a second pair of eyes. |
| `OK` | The line lands on the right structure. |
| `UNREADABLE` | You genuinely cannot trace it even zoomed. |

**Report `SUSPECT` or `UNREADABLE` rather than guessing.** A confident wrong answer is worse than
an admitted uncertainty here — a physician reviews this list, and false positives waste his time
while false confidence could let a real error ship.

## Output format — follow it exactly

End your reply with a fenced block in this format and nothing else after it. One line per label
that is **not** OK. If a page is entirely clean, emit the `PAGE` line with `clean`.

```
PAGE <gid> <page> <worst-verdict: WRONG|SUSPECT|UNREADABLE|clean> <n_labels_total> <n_not_ok>
  <VERDICT> "<label text>" -> lands on: <what is actually there> | expected: <where it should point>
  ...
PAGE <gid> <page> ...
```

Example:

```
PAGE croup 2 WRONG 7 2
  WRONG "Trachea" -> lands on: lung parenchyma well below the carina | expected: the ringed tube between larynx and carina
  SUSPECT "Vocal cords" -> lands on: inside the orange subglottic callout box | expected: just above the subglottis
PAGE bronchiolitis 2 clean 6 0
```

Before that block, give a short prose summary: how many pages you checked, how many had findings,
and anything systematic you noticed (e.g. "every page from the same production run puts the
right-hand column labels one structure too low").

Be rigorous and be honest about uncertainty. Accuracy matters far more than finding something.
