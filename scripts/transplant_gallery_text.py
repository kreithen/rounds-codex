#!/usr/bin/env python3
"""Correct text on a delivered gallery page by TRANSPLANTING glyphs that already exist elsewhere
in the same batch, at the same size, in the same font, from the same renderer.

This is the general form of scripts/fix_gallery_icd.py. Both exist because the physician asked for
specific corrections on 2026-08-08 that could be made without inventing anything.

THE LINE THIS DOES NOT CROSS. A dot-row repainter was written once. It had to DETECT geometry that
drifts tens of pixels between pages, INVENT the corrected marks, and RECONSTRUCT background by
interpolating neighbouring rows. It produced half-erased "U"-shaped dots, skipped 31 of 80 pages as
unreadable, and was deleted. Nothing here detects, invents or reconstructs: the corrected glyphs
already exist on a page in the same batch, and the background is measured flat before anything is
written. If a correction needs a glyph that does not exist in the batch, or sits on a background
that is not flat, THIS TOOL IS THE WRONG ANSWER -- flag it for re-render.

Every run asserts:
  * source and target rectangles are the same size (no resampling, ever)
  * the background under both is flat within FLAT_STD_MAX
  * not one pixel changes outside the target rectangle
  * glyph coverage recovered from the written page correlates >= 0.995 with the source's
and writes a 4x before/after strip, because a clean assertion is not a clean seam. LOOK AT IT.

The original is kept as <file>.orig. A production re-render overwrites these edits, which is
correct -- the template still needs fixing, and the corrections document still says so.

Usage:
  python3 scripts/transplant_gallery_text.py <page.png> \\
      --from X0,Y0,X1,Y1 --to X0,Y0,X1,Y1 --label "20%->15%" [--apply]
"""
import argparse, os, shutil, sys
import numpy as np
from PIL import Image

FLAT_STD_MAX = 3.0
BG_PROBE = 10          # rows below the rectangle used to sample local background


def rect(s):
    v = [int(x) for x in s.split(',')]
    if len(v) != 4:
        sys.exit(f'rect must be X0,Y0,X1,Y1 -- got {s!r}')
    return tuple(v)


def local_bg(a, r, who):
    x0, y0, x1, y1 = r
    band = a[y1 + 2:y1 + 2 + BG_PROBE, x0:x1].reshape(-1, 3)
    std = band.std(0)
    if (std > FLAT_STD_MAX).any():
        sys.exit(f'{who} background is not flat (std={std.round(2)} > {FLAT_STD_MAX}) -- '
                 f'refusing to composite. Flag this page for re-render instead.')
    return band.mean(0), std


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('page')
    ap.add_argument('--from', dest='src', required=True, type=rect, help='source rect X0,Y0,X1,Y1')
    ap.add_argument('--to', dest='tgt', required=True, type=rect, help='target rect, same size')
    ap.add_argument('--label', default='', help='what this corrects, for the log')
    ap.add_argument('--apply', action='store_true')
    a = ap.parse_args()

    im = Image.open(a.page).convert('RGB')
    arr = np.asarray(im).astype(float)
    sx0, sy0, sx1, sy1 = a.src
    tx0, ty0, tx1, ty1 = a.tgt
    if (sx1 - sx0, sy1 - sy0) != (tx1 - tx0, ty1 - ty0):
        sys.exit(f'rect sizes differ: source {(sx1-sx0, sy1-sy0)} vs target {(tx1-tx0, ty1-ty0)}. '
                 f'Resampling is not allowed -- it softens glyphs next to crisp neighbours.')

    sbg, sstd = local_bg(arr, a.src, 'source')
    tbg, tstd = local_bg(arr, a.tgt, 'target')
    print(f'{os.path.basename(a.page)}  {a.label}')
    print(f'  source bg={sbg.round(1)} std={sstd.round(2)}   target bg={tbg.round(1)} std={tstd.round(2)}')

    src = arr[sy0:sy1, sx0:sx1]
    lum = src.mean(2)
    peak = np.percentile(lum, 99.9)
    alpha = np.clip((lum - sbg.mean()) / max(peak - sbg.mean(), 1e-6), 0, 1)
    ink = src[lum > np.percentile(lum, 99.0)].mean(0)
    print(f'  glyph coverage {(alpha > 0.05).sum()} px, ink={ink.round(1)}')

    out = arr.copy()
    out[ty0:ty1, tx0:tx1] = (tbg[None, None, :] * (1 - alpha[..., None])
                             + ink[None, None, :] * alpha[..., None])
    out_im = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))

    d = np.abs(np.asarray(out_im).astype(int) - np.asarray(im).astype(int)).sum(2)
    m = np.zeros(d.shape, bool); m[ty0:ty1, tx0:tx1] = True
    outside = int((d[~m] > 0).sum())
    w_lum = np.asarray(out_im).astype(float)[ty0:ty1, tx0:tx1].mean(2)
    w_alpha = np.clip((w_lum - tbg.mean()) / max(ink.mean() - tbg.mean(), 1e-6), 0, 1)
    corr = float(np.corrcoef(w_alpha.ravel(), alpha.ravel())[0, 1])
    ok = outside == 0 and corr >= 0.995
    print(f'  pixels changed outside the target rect: {outside}   glyph-corr={corr:.5f}   '
          f'{"OK" if ok else "FAILED"}')

    pad = 24
    box = (max(0, tx0 - pad), max(0, ty0 - pad), min(im.width, tx1 + pad * 6), min(im.height, ty1 + pad))
    bw, bh = box[2] - box[0], box[3] - box[1]
    sheet = Image.new('RGB', (bw, bh * 2 + 8), (8, 8, 16))
    sheet.paste(im.crop(box), (0, 0))
    sheet.paste(out_im.crop(box), (0, bh + 8))
    sheet = sheet.resize((sheet.width * 4, sheet.height * 4), Image.LANCZOS)
    sheet.save('/tmp/transplant_before_after.png')
    print('  wrote /tmp/transplant_before_after.png (before above, after below, 4x) -- LOOK AT IT')

    if not ok:
        sys.exit('refusing to write')
    if a.apply:
        if not os.path.exists(a.page + '.orig'):
            shutil.copy2(a.page, a.page + '.orig')   # PIL cannot infer a format from .orig
        out_im.save(a.page)
        print(f'  wrote {a.page} (original kept as .orig)')
    else:
        print('  dry run -- pass --apply to write')


if __name__ == '__main__':
    main()
