#!/usr/bin/env python3
"""Correct a typo on a rendered gallery page by rearranging glyphs the page already contains.

The production pages have no text layer, and the body face is not one we have, so retyping a
word in a substitute font would show. What does work is moving the page's own glyphs around:
a letter lifted from elsewhere on the same page matches in face, size, weight, colour and
antialiasing exactly, because it *is* the same rendering.

    "releif" -> "relief"          swap the e and the i where they sit
    "Bule"   -> "Rule"            an R lifted from "Reflux" two panels up
    "SUPPOCH" -> "SUPPORT"        R and T lifted from "STRUCTURES" in the same heading

Two things make it invisible:

* **Background.** Erasing to a flat colour leaves a visible rectangle, because these pages carry
  soft vignettes and glows behind the text. The fill is instead *estimated from the page itself*:
  a low percentile over a local window, which discards the bright text and keeps whatever the
  background was doing underneath. Measured against the genuinely text-free pixels of the same
  region it lands within about 3/255 on average.
* **Compositing.** A glyph box carries the background it was sitting on, and these pages are not
  evenly lit — a letter lifted from beside a glowing graphic drops a visibly brighter rectangle
  where it lands. So each box has its own estimated background subtracted first, leaving only
  the letterform, which is then *added* to the destination. That is how glowing text on a dark
  ground actually composites, so the antialiased edges land right too.

Usage:  python3 scripts/retouch_text.py <edits.json> <src-dir> <out-dir>

Each edit in the JSON:

    {"file": "gerd-02.png",
     "note": "SUPPOCH -> SUPPORT",
     "rows": [886, 899],            # the row range to rebuild, inclusive
     "clear": [[492, 511]],         # column spans to erase, inclusive
     "place": [{"src": [530, 886, 536, 899], "dst": [494, 886]},   # x0,y0,x1,y1 -> x,y
               {"src": [522, 886, 528, 899], "dst": [502, 886]}]}

Pick `rows` from a row profile: the first and last row of the line's ink, with a pixel or two of
margin so no antialiasing survives.
"""
import json
import os
import sys

import numpy as np
from PIL import Image

RADIUS = 9        # local window for the background estimate
PCT = 15          # percentile within it; text is far brighter than its background
FLOOR = 12        # residual below this is estimator noise, not letterform
MARGIN = 25       # columns either side of a cleared span used to calibrate the fill


def background(a, y0, y1, x0, x1):
    """Estimate what is behind the text over rows y0..y1, columns x0..x1 (inclusive)."""
    r = RADIUS
    py0, px0 = max(0, y0 - r), max(0, x0 - r)
    pad = a[py0:y1 + r + 1, px0:x1 + r + 1].astype(np.float32)
    win = np.lib.stride_tricks.sliding_window_view(pad, (2 * r + 1, 2 * r + 1), axis=(0, 1))
    est = np.percentile(win.reshape(*win.shape[:3], -1), PCT, axis=-1)
    oy, ox = y0 - py0 - r, x0 - px0 - r
    return est[oy:oy + (y1 - y0 + 1), ox:ox + (x1 - x0 + 1)]


def retouch(img, edit):
    a = np.asarray(img.convert("RGB"))
    src = a.copy()                       # sample glyphs from the untouched original
    out = a.copy()
    y0, y1 = edit["rows"]

    for x0, x1 in edit["clear"]:
        # A low percentile is a good background estimate but a slightly pessimistic one — its
        # window reaches into the darker gaps between lines. Calibrate it against the genuine
        # background either side of the span, row by row, so the patch cannot read as a box.
        m0, m1 = max(0, x0 - MARGIN), min(src.shape[1] - 1, x1 + MARGIN)
        est = background(src, y0, y1, m0, m1)
        real = src[y0:y1 + 1, m0:m1 + 1].astype(np.float32)
        is_bg = (real - est).max(axis=2) < FLOOR
        is_bg[:, x0 - m0:x1 - m0 + 1] = False          # the span itself is what we are replacing
        for j in range(est.shape[0]):
            if is_bg[j].any():
                est[j] += np.median((real - est)[j][is_bg[j]], axis=0)
        patch = est[:, x0 - m0:x1 - m0 + 1]
        out[y0:y1 + 1, x0:x1 + 1] = np.rint(np.clip(patch, 0, 255)).astype(np.uint8)

    for p in edit["place"]:
        sx0, sy0, sx1, sy1 = p["src"]
        dx, dy = p["dst"]
        ink = src[sy0:sy1 + 1, sx0:sx1 + 1].astype(np.float32) - background(src, sy0, sy1, sx0, sx1)
        np.clip(ink, 0, None, out=ink)
        ink[ink.max(axis=2) < FLOOR] = 0     # else the box lands as a faint bright rectangle
        h, w = ink.shape[:2]
        reg = out[dy:dy + h, dx:dx + w].astype(np.float32)
        out[dy:dy + h, dx:dx + w] = np.rint(np.clip(reg + ink, 0, 255)).astype(np.uint8)

    return Image.fromarray(out)


def main():
    if len(sys.argv) != 4:
        sys.exit(__doc__.strip().splitlines()[-1])
    edits_path, src_dir, out_dir = sys.argv[1:]
    edits = json.load(open(edits_path))
    os.makedirs(out_dir, exist_ok=True)

    by_file = {}
    for e in edits:
        by_file.setdefault(e["file"], []).append(e)

    for name in sorted(os.listdir(src_dir)):
        if not name.lower().endswith((".png", ".jpg", ".jpeg")):
            continue
        img = Image.open(os.path.join(src_dir, name)).convert("RGB")
        for e in by_file.get(name, []):
            img = retouch(img, e)
            print("  %-16s %s" % (name, e.get("note", "")))
        img.save(os.path.join(out_dir, name))
    missing = set(by_file) - set(os.listdir(src_dir))
    if missing:
        sys.exit("edits reference files not in %s: %s" % (src_dir, ", ".join(sorted(missing))))
    print("%d pages written to %s" % (len(os.listdir(out_dir)), out_dir))


if __name__ == "__main__":
    main()
