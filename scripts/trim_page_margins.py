#!/usr/bin/env python3
"""Trim the white paper margin off rendered gallery pages.

Some production PDFs render with the page's white margin still around the dark artwork.
Hyperlipidemia was the clearest case: a 1139x1474 canvas with the actual page inside at
x 110-1028, y 48-1425, so it was the only gallery showing a white frame. Barely noticeable
in the full-screen viewer; obvious on the galleries index, where the thumbnail is small and
the border eats a large share of it.

Detects each page's own edge rather than assuming a fixed inset, so a gallery whose pages
were rendered slightly differently still comes out right, and asserts afterwards that no
light fringe survived.

  python3 scripts/trim_page_margins.py <src-dir> <out-dir> [--size 915x1372] [--quality 88]

Leaves the source untouched. Sibling cardiology galleries are 915x1372, which is the default
so a trimmed gallery matches the section it sits in.
"""
import argparse
import glob
import os
import sys

try:
    from PIL import Image
    import numpy as np
except ImportError:
    sys.exit("needs Pillow and numpy:  pip install Pillow numpy")

# Anything below this is "not paper". The pages are near-black, the margin is pure white,
# so the threshold is not delicate.
INK = 200
INSET = 2       # JPEG ringing leaves a bright halo exactly on the page edge
FRINGE = 60     # a surviving white edge would be ~255; real artwork edges measure < 20


def page_box(img):
    a = np.array(img.convert("RGB"))
    mask = a.mean(axis=2) < INK
    rows = np.where(mask.any(axis=1))[0]
    cols = np.where(mask.any(axis=0))[0]
    if not len(rows) or not len(cols):
        return None
    return (cols.min() + INSET, rows.min() + INSET, cols.max() - INSET + 1, rows.max() - INSET + 1)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("out")
    ap.add_argument("--size", default="915x1372", help="WxH, or 'keep' to leave the crop as-is")
    ap.add_argument("--quality", type=int, default=88)
    a = ap.parse_args()

    size = None
    if a.size != "keep":
        w, h = a.size.lower().split("x")
        size = (int(w), int(h))

    os.makedirs(a.out, exist_ok=True)
    files = sorted(f for f in glob.glob(os.path.join(a.src, "*.jpg")) if "gallery" not in os.path.basename(f))
    if not files:
        sys.exit("no page images in " + a.src)

    worst = 0.0
    for f in files:
        im = Image.open(f)
        box = page_box(im)
        if box is None:
            print("  SKIP %s (no dark page found)" % os.path.basename(f))
            continue
        crop = im.convert("RGB").crop(box)
        if size:
            crop = crop.resize(size, Image.LANCZOS)
        dest = os.path.join(a.out, os.path.basename(f))
        crop.save(dest, "JPEG", quality=a.quality, optimize=True, progressive=True)

        # prove the fringe is gone rather than trusting the crop
        c = np.array(crop)
        edge = max(c[0, :, :].mean(), c[-1, :, :].mean(), c[:, 0, :].mean(), c[:, -1, :].mean())
        worst = max(worst, edge)
        print("  %-28s %s -> %s  edge %.1f" % (os.path.basename(f), im.size, crop.size, edge))

    print("\nbrightest surviving edge: %.1f (must be < %d; white would be 255)" % (worst, FRINGE))
    if worst >= FRINGE:
        sys.exit("FAIL: a light margin survived the crop -- check INK/INSET for this gallery")
    print("OK -- %d pages trimmed into %s" % (len(files), a.out))


if __name__ == "__main__":
    main()
