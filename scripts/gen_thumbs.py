#!/usr/bin/env python3
"""Build the shared gthumbs/ set for galleries that shipped without real thumbnails.

Background in scripts/repoint_thumbs.js: 26 galleries were built with thumb === file, so the
galleries index downloads full-size page scans (~308 kB each) to fill 81x108 css boxes.

Width is the one number that matters, and it is set by the *largest* place a thumb renders --
not the index, but the 10-image grid inside a condition gallery: 193x290 css, so 386 device px
on a phone and 424 on an iPad. 320 px measured as the point where the grid is indistinguishable
from the full image at that size while the whole set fits in ~12 MB; the sources are only
800x1200, so there is no headroom above ~440 anyway.

    python3 scripts/gen_thumbs.py <out-dir> <src-dir>... [--width 320] [--quality 82]

Each <src-dir> is a folder of per-gallery directories (e.g. gal-final/dka/dka-01.jpg). Output
is flat -- gthumbs/<id>-NN.jpg -- so the whole set uploads to one destination and every gallery
can use the same path shape. Numbering follows sorted filename order, matching the app's
images[] order.
"""
import argparse
import glob
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("needs Pillow:  pip install Pillow")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out")
    ap.add_argument("src", nargs="+", help="folders containing per-gallery directories")
    ap.add_argument("--width", type=int, default=320)
    ap.add_argument("--quality", type=int, default=82)
    a = ap.parse_args()

    os.makedirs(a.out, exist_ok=True)
    total = count = 0
    for root in a.src:
        for gid in sorted(os.listdir(root)):
            gdir = os.path.join(root, gid)
            if not os.path.isdir(gdir):
                continue
            pages = sorted(f for f in glob.glob(os.path.join(gdir, "*.jpg"))
                           if "gallery" not in os.path.basename(f))
            if not pages:
                continue
            for i, page in enumerate(pages):
                im = Image.open(page).convert("RGB")
                h = max(1, round(im.height * a.width / im.width))
                dest = os.path.join(a.out, "%s-%02d.jpg" % (gid, i + 1))
                im.resize((a.width, h), Image.LANCZOS).save(
                    dest, "JPEG", quality=a.quality, optimize=True, progressive=True)
                total += os.path.getsize(dest)
                count += 1
            print("  %-22s %2d pages" % (gid, len(pages)))

    if not count:
        sys.exit("no gallery pages found")
    print("\n%d thumbnails at %dpx q%d -> %s  (%.1f MB, avg %.0f kB)"
          % (count, a.width, a.quality, a.out, total / 1048576, total / count / 1024))


if __name__ == "__main__":
    main()
