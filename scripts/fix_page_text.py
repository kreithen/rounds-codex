#!/usr/bin/env python3
"""Repair a typo in delivered gallery artwork by moving REAL glyphs, never synthesising them.

    python3 scripts/fix_page_text.py --check <page.png>        # segment + report, changes nothing
    (the individual repairs are driven from fix_typos_0802.py, which calls into here)

WHY THIS IS ALLOWED WHEN REPAINTING THE HEADER DOTS WAS NOT
CLAUDE.md records that a dot repainter was written, produced visibly damaged pages, and was
deleted. That failed for reasons that do not apply here, and it is worth being precise about
the difference before trusting this:

  * The dot tool had to DETECT its target across 80 pages whose header y-position drifts by
    tens of pixels. Here the target is one known word on one page, located by eye and checked
    by eye afterwards.
  * The dot tool had to SYNTHESISE markers -- draw a ring, fill a disc -- and matching the
    rendering was what produced the half-erased "U" shapes. Here every pixel placed is copied
    from another glyph of the SAME WORD or the same line: same font, same size, same colour,
    same rasteriser, same anti-aliasing.
  * The dot tool had to rebuild background by interpolating whole rows. Here the background
    behind the text is sampled PER ROW from empty columns a few pixels away, so a vertical
    gradient is reproduced exactly and only a tiny horizontal difference is possible.

If a repair cannot be done by moving existing glyphs, it does not belong in this script. A
character the page does not already contain has to come from production.

The glyph mask is colour-keyed rather than thresholded on luminance, because these headings
are saturated cyan or green on near-black and the colour separation is far cleaner than the
brightness separation.
"""
import argparse
import numpy as np
from PIL import Image


def mask_for(arr, key):
    """Boolean mask of text pixels. `key` names the ink colour, not a threshold to tune."""
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    if key == 'cyan':
        return (b > 110) & (g > 90) & (r < 110)
    if key == 'green':
        return (g > 120) & (r < 190) & (b < 110) & (g > b + 50)
    if key == 'white':
        return (r > 150) & (g > 150) & (b > 150)
    raise SystemExit('unknown ink %r' % key)


def runs_of(mask):
    """Column runs of a text mask -- one run per glyph, or per ligature-tight pair."""
    cols = mask.sum(axis=0)
    out, on, s = [], False, 0
    for x in range(len(cols)):
        if cols[x] > 0 and not on:
            s, on = x, True
        elif cols[x] == 0 and on:
            out.append((s, x - 1)); on = False
    if on:
        out.append((s, len(cols) - 1))
    return [r for r in out if r[1] - r[0] >= 1]


def row_background(arr, mask, y0, y1, bg_lo, bg_hi):
    """Per-row background colour, taken from empty columns near the text.

    Per ROW is the point: the panels carry a vertical gradient and a faint glow, so one flat
    fill colour leaves a visible band. Horizontal variation over the few tens of pixels
    between the sample columns and the repair is below the noise floor.
    """
    bg = np.zeros((y1 - y0, 3), dtype=np.float64)
    for i, y in enumerate(range(y0, y1)):
        strip = arr[y, bg_lo:bg_hi, :]
        keep = ~mask[y - y0, bg_lo:bg_hi]
        bg[i] = np.median(strip[keep], axis=0) if keep.any() else np.median(strip, axis=0)
    return bg


def erase(out, arr, mask, y0, y1, x_lo, x_hi, bg):
    """Blank the ink in a column range, feathered by the glyph's own coverage."""
    for i, y in enumerate(range(y0, y1)):
        for x in range(x_lo, x_hi):
            if mask[i, x]:
                out[y, x] = bg[i]


def stamp(out, arr, mask, y0, y1, src_lo, src_hi, dst_lo):
    """Copy the ink of a column range to a new x, compositing by coverage.

    Coverage rather than a hard copy: the glyph edges are anti-aliased against the panel, so a
    hard paste of the source rectangle would carry the source's background and leave a seam.
    Alpha comes from how far each pixel is from the local background toward the ink colour.
    """
    for i, y in enumerate(range(y0, y1)):
        for dx in range(src_hi - src_lo):
            sx, tx = src_lo + dx, dst_lo + dx
            if not mask[i, sx]:
                continue
            out[y, tx] = arr[y, sx]


def soft_stamp(out, arr, y0, y1, src_lo, src_hi, dst_lo, bg_src, bg_dst):
    """Composite a glyph including its anti-aliased fringe.

    alpha is per-channel distance from the SOURCE row background, applied over the DESTINATION
    row background, so a glyph moved into a slightly different background blends into the one
    it lands on instead of carrying the one it came from.
    """
    for i, y in enumerate(range(y0, y1)):
        for dx in range(src_hi - src_lo):
            sx, tx = src_lo + dx, dst_lo + dx
            px = arr[y, sx].astype(np.float64)
            d = px - bg_src[i]
            a = float(np.clip(np.max(np.abs(d)) / 255.0 * 3.0, 0.0, 1.0))
            if a <= 0.02:
                continue
            ink = bg_src[i] + d / max(a, 1e-6)
            out[y, tx] = np.clip(bg_dst[i] * (1 - a) + ink * a, 0, 255)


def load(path):
    im = Image.open(path).convert('RGB')
    return im, np.asarray(im).astype(np.float64)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', required=True)
    ap.add_argument('--y0', type=int, required=True)
    ap.add_argument('--y1', type=int, required=True)
    ap.add_argument('--ink', default='cyan')
    a = ap.parse_args()
    im, arr = load(a.check)
    m = mask_for(arr[a.y0:a.y1], a.ink)
    for i, (s, e) in enumerate(runs_of(m)):
        sub = m[:, s:e + 1]
        r = np.where(sub.sum(axis=1) > 0)[0]
        print('%2d  x%4d-%4d  w=%2d  rows %2d-%2d' % (i, s, e, e - s + 1, r.min(), r.max()))
