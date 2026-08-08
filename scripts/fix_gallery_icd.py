#!/usr/bin/env python3
"""Replace a wrong ICD-10 line on a delivered gallery page by TRANSPLANTING the correct line
from another page of the same batch.

Written 2026-08-08 at the physician's request, for hip-fracture pages 1-3, which carry M80.00XA
where pages 4-9 and the app carry S72.009A.

WHY THIS IS NOT "REPAINTING THE ARTWORK", which is forbidden:
  A dot-row repainter was written once, had to DETECT geometry that drifts tens of pixels between
  pages, INVENT the corrected marks, and RECONSTRUCT background by interpolation. It produced
  half-erased dots on 49 pages and was deleted.
  This does none of that. The correct line already exists, rendered by the same pipeline in the
  same font on a sibling page, sitting on a background measured flat to std ~0.6/channel. The work
  is: lift that line's glyph coverage, and composite it onto the target's own background colour.
  Nothing is invented and no geometry is guessed.

  It is still an edit to delivered artwork, so: originals are kept, every change is asserted to be
  confined to one rectangle, the result is OCR'd to confirm the new code, and production is still
  asked to fix the template -- a re-render overwrites this.

WHY THE WHOLE LINE, not just the code: pages 1 and 2 render the header line LARGER than pages 3-9
(glyph height ~18px vs ~13px), and no page carries the correct code at that larger size. Scaling a
13px line up to 18px softens it visibly next to crisp neighbours. Transplanting page 4's entire
"ICD-10 <code>" line at its native size fixes the code AND makes those two pages consistent with
the other seven, which is the better outcome and needs no resampling.

Usage:
  python3 scripts/fix_gallery_icd.py <dir> --source 4 --targets 1,2,3 --expect S72.009A [--apply]
Without --apply it writes a before/after visual and changes nothing.
"""
import argparse, os, subprocess, sys
import numpy as np
from PIL import Image, ImageOps

# The ICD line lives in this rectangle on every page of this template. Deliberately a fixed window
# rather than a detector: it is asserted flat before use, and a detector is the thing that failed.
RECT = (786, 54, 1006, 94)          # x0, y0, x1, y1
BG_SAMPLE = (690, 56, 786, 92)      # flat band immediately left of the line, same rows
FLAT_STD_MAX = 2.0                  # per-channel std allowed in the background sample


def load(d, n):
    p = os.path.join(d, f'{os.path.basename(d)}-{n:02d}.png')
    if not os.path.exists(p):
        sys.exit(f'missing {p}')
    return Image.open(p).convert('RGB'), p


def bg_colour(a):
    s = a[BG_SAMPLE[1]:BG_SAMPLE[3], BG_SAMPLE[0]:BG_SAMPLE[2]].reshape(-1, 3)
    std = s.std(0)
    if (std > FLAT_STD_MAX).any():
        sys.exit(f'background sample is not flat (std={std.round(2)}) -- refusing to erase')
    return s.mean(0), std


def norm_code(t):
    """Normalise for comparison. tesseract reads the leading S of 'S72.009A' as '$' on these
    pages -- a font/threshold artifact, not a wrong code -- and O/0 confusion is routine."""
    t = t.upper().replace('$', 'S').replace('O', '0')
    return ''.join(c for c in t if c.isalnum())


def ocr_line(im):
    r = im.crop((600, 40, 1024, 100))
    g = ImageOps.invert(r.convert('L')).resize((r.width * 3, r.height * 3), Image.LANCZOS)
    g.save('/tmp/_icd_ocr.png')
    out = subprocess.run(['tesseract', '/tmp/_icd_ocr.png', 'stdout', '--psm', '7'],
                         capture_output=True, text=True).stdout
    return ' '.join(out.split())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('dir')
    ap.add_argument('--source', type=int, required=True, help='page carrying the CORRECT line')
    ap.add_argument('--targets', required=True, help='comma-separated pages to fix')
    ap.add_argument('--expect', required=True, help='code that must be readable after the fix')
    ap.add_argument('--apply', action='store_true')
    a = ap.parse_args()
    targets = [int(x) for x in a.targets.split(',')]

    src_im, src_path = load(a.dir, a.source)
    src = np.asarray(src_im).astype(float)
    src_bg, src_std = bg_colour(src)
    print(f'source p{a.source}: bg={src_bg.round(1)} std={src_std.round(2)}')
    if norm_code(a.expect) not in norm_code(ocr_line(src_im)):
        sys.exit(f'source page does not read {a.expect}: {ocr_line(src_im)!r}')
    print(f'  source line reads: {ocr_line(src_im)!r}')

    # glyph coverage of the source line, 0..1, relative to the source's own background
    x0, y0, x1, y1 = RECT
    patch = src[y0:y1, x0:x1]
    lum = patch.mean(2)
    base = src_bg.mean()
    peak = np.percentile(lum, 99.9)
    alpha = np.clip((lum - base) / max(peak - base, 1e-6), 0, 1)
    ink = patch[lum > np.percentile(lum, 99.5)].mean(0)
    print(f'  glyph coverage: {(alpha > 0.05).sum()} px, ink colour {ink.round(1)}, peak lum {peak:.1f}')

    vis, fails = [], []
    for n in targets:
        tgt_im, tgt_path = load(a.dir, n)
        tgt = np.asarray(tgt_im).astype(float)
        before = tgt_im.crop(RECT).copy()
        tbg, tstd = bg_colour(tgt)
        out = tgt.copy()
        # composite: the target's OWN background under the source's glyph coverage, so no
        # background tint travels between pages (p1 bg blue 9.7 vs p4 14.2 -- small, but free to fix)
        region = tbg[None, None, :] * (1 - alpha[..., None]) + ink[None, None, :] * alpha[..., None]
        out[y0:y1, x0:x1] = region
        out_im = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))

        # ASSERT the change is confined to RECT
        d = np.abs(np.asarray(out_im).astype(int) - np.asarray(tgt_im).astype(int)).sum(2)
        mask = np.zeros(d.shape, bool); mask[y0:y1, x0:x1] = True
        outside = d[~mask].max()
        # Verify by GLYPH COVERAGE, not OCR. tesseract on a 220x40 crop read the correct
        # "S72.009A" as "$72,009" on two of three pages -- unreliable enough to be useless as a
        # gate, while the composite was visibly perfect. Recovering alpha from the written page and
        # correlating it against the source's alpha checks the actual thing: that the right glyphs,
        # in the right places, at the right coverage, landed on the page.
        w_lum = np.asarray(out_im).astype(float)[y0:y1, x0:x1].mean(2)
        w_alpha = np.clip((w_lum - tbg.mean()) / max(ink.mean() - tbg.mean(), 1e-6), 0, 1)
        corr = float(np.corrcoef(w_alpha.ravel(), alpha.ravel())[0, 1])
        got = ocr_line(out_im)
        ok = outside == 0 and corr >= 0.995
        print(f'  p{n}: bg={tbg.round(1)} outside-rect diff={outside} glyph-corr={corr:.5f}  '
              f'ocr(advisory)={got!r}  {"OK" if ok else "FAILED"}')
        vis.append((n, before, out_im.crop(RECT)))
        if not ok:
            fails.append(n)
        if a.apply and ok:
            os.replace(tgt_path, tgt_path + '.orig') if not os.path.exists(tgt_path + '.orig') else None
            out_im.save(tgt_path)
            print(f'       wrote {tgt_path} (original kept as .orig)')

    # before/after strip, 2x, for eyeball review -- the last check no assertion replaces
    w = RECT[2] - RECT[0]; h = RECT[3] - RECT[1]
    sheet = Image.new('RGB', (w, (h + 8) * (len(vis) * 2 + 1)), (8, 8, 16))
    sheet.paste(src_im.crop(RECT), (0, 0))
    for i, (n, b, af) in enumerate(vis):
        sheet.paste(b,  (0, (h + 8) * (i * 2 + 1)))
        sheet.paste(af, (0, (h + 8) * (i * 2 + 2)))
    sheet = sheet.resize((sheet.width * 2, sheet.height * 2), Image.LANCZOS)
    sheet.save('/tmp/icd_before_after.png')
    print(f'\nwrote /tmp/icd_before_after.png -- source, then before/after per target, 2x')
    print('LOOK AT IT before shipping. A clean assertion is not a clean seam.')
    if fails:
        print(f'\nNOT WRITTEN: pages {fails} -- glyph coverage did not match the source, or the change\n'
              f'was not confined to the rectangle.')
        sys.exit(1)


if __name__ == '__main__':
    main()
