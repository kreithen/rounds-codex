#!/usr/bin/env python3
"""build_app_icons.py <web-clone> [--apply]

Builds every app icon from the canonical lockup, `scripts/logo-trim.png`.

WHY THIS EXISTS. The shipped icons carry a CROPPED mark: the ring is open on the right, so the
emblem reads as a "C" rather than the closed circle the brand uses everywhere else. Reported by the
physician on 2026-09-16 while uploading the Play listing -- "don't see the full circle" -- and
confirmed against the lockup, which has a complete ring with the ECG trace running through it and
out both sides. Nobody had noticed because a small dark icon is exactly where a missing arc hides.

Two smaller defects came out of the same measurement and are fixed here:

  * THE MARK IS OFF-CENTRE. In `icon-maskable-512.png` its glow-inclusive bounding box sits at
    x 238-398 against a 512 canvas -- centre 318 where it should be 256, about 12% of the width to
    the right. Under any mask that reads as pushed right with dead space to the left. It is also
    what made the crop hard to see: the mark looked deliberately asymmetric.
  * `apple-touch-icon.png` HAS TRANSPARENT CORNERS. iOS composites a transparent apple-touch-icon
    onto black and then applies its own squircle, so baked-in rounding plus alpha gives a double
    mask with black showing between them. Apple wants a full-bleed opaque square.

WHAT EACH OUTPUT IS FOR, because the correct treatment differs and guessing produces a plausible
wrong answer in every case:

  | file                     | corners            | mark  | why                                    |
  |--------------------------|--------------------|-------|----------------------------------------|
  | play/icon-512.png        | full bleed, opaque | 70%   | Play adds its own rounding and shadow  |
  |                          |                    |       | and tells you not to supply either     |
  | icons/icon-512.png       | rounded 20%, alpha | 70%   | manifest purpose "any" -- rendered as  |
  | icons/icon-192.png       | rounded 19%, alpha | 70%   | supplied, so it carries its own shape  |
  | icons/icon-maskable-512  | full bleed, opaque | 62%   | purpose "maskable": content must stay  |
  |                          |                    |       | inside the safe zone, a circle of 80%  |
  |                          |                    |       | diameter, or adaptive cropping eats it |
  | icons/apple-touch-icon   | full bleed, opaque | 70%   | iOS masks it itself (see above)        |
  | native/landing-icons/    | full bleed, opaque | 70%   | the same file for roundscodex.com,     |
  |   apple-touch-icon.png   |                    |       | staged for `main` -- see its README    |

The rounded radii are not invented -- they are measured off the icons being replaced (20%, 19%,
18%), so the "any" icons keep the silhouette the product already has.

`logo-trim.png` is RGB with a solid BLACK ground, not a transparent PNG, so the emblem is composited
with a LIGHTEN blend, which drops the black and keeps the glow. That is the same technique and the
same reason as `build_og_card.py`; pasting it directly puts a black box on the icon.

THE GUARD THAT MATTERS is `assert_closed_ring`. A closed circle has a roughly SQUARE bounding box;
the shipped crop is 160x206, an aspect of 0.78, because the right arc is missing. Run this script's
check against the old `icon-maskable-512.png` and it fails on exactly that number. An assertion that
only counted bright pixels, or only checked the centroid, would pass the broken file.
"""
import sys, os
from PIL import Image, ImageChops, ImageDraw

ROOT = sys.argv[1] if len(sys.argv) > 1 else None
APPLY = '--apply' in sys.argv
if not ROOT:
    print(__doc__); sys.exit(2)

HERE = os.path.dirname(os.path.abspath(__file__))
LOCKUP = os.path.join(HERE, 'logo-trim.png')
BG = (11, 17, 32)          # the app's --bg, and the ground the shipped icons already use

# The emblem's extent inside the lockup, measured rather than eyeballed: bright pixels left of the
# first fully empty column (x=353), which is the gutter before the "R" of Rounds.
EMBLEM = (38, 20, 360, 338)


def emblem():
    src = Image.open(LOCKUP).convert('RGB')
    return src.crop(EMBLEM)


def mark_bbox(img, thresh=110):
    """Bounding box of everything brighter than the ground, glow included."""
    px = img.convert('RGB').load()
    w, h = img.size
    x0, x1, y0, y1 = w, 0, h, 0
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if r + g + b > thresh:
                x0 = min(x0, x); x1 = max(x1, x); y0 = min(y0, y); y1 = max(y1, y)
    return (x0, x1, y0, y1) if x1 >= x0 else None


def assert_closed_ring(img, label):
    """A closed circle is as wide as it is tall. The cropped mark is 160x206 -- 0.78 -- because its
       right arc is gone. Anything below 0.9 is not the brand's circle."""
    bb = mark_bbox(img)
    if not bb:
        print(f'FAIL: {label} has no visible mark'); sys.exit(1)
    x0, x1, y0, y1 = bb
    w, h = x1 - x0 + 1, y1 - y0 + 1
    aspect = w / h
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    off = max(abs(cx - img.width / 2), abs(cy - img.height / 2)) / img.width
    ok = aspect >= 0.9 and off <= 0.02
    print(f'  {"ok  " if ok else "FAIL"} {label:28} mark {w}x{h} aspect {aspect:.2f}  '
          f'centre ({cx:.0f},{cy:.0f}) off by {off*100:.1f}%')
    if not ok:
        print(f'       aspect must be >= 0.90 (a closed ring) and the centre within 2%')
        sys.exit(1)


def build(size, frac, radius_frac=None):
    """radius_frac None -> full bleed opaque. Otherwise rounded with transparent corners."""
    em = emblem()
    box = int(size * frac)
    s = min(box / em.width, box / em.height)
    r = em.resize((round(em.width * s), round(em.height * s)), Image.LANCZOS)
    canvas = Image.new('RGB', (size, size), BG)
    x, y = (size - r.width) // 2, (size - r.height) // 2
    region = canvas.crop((x, y, x + r.width, y + r.height))
    canvas.paste(ImageChops.lighter(region, r), (x, y))   # black ground drops out
    out = canvas.convert('RGBA')
    if radius_frac is not None:
        m = Image.new('L', (size, size), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1],
                                            radius=int(size * radius_frac), fill=255)
        out.putalpha(m)
    return out


TARGETS = [
    # path relative to the web clone,      size, mark frac, corner radius (None = full bleed)
    ('icons/icon-512.png',                  512, 0.70, 0.20),
    ('icons/icon-192.png',                  192, 0.70, 0.19),
    ('icons/icon-maskable-512.png',         512, 0.62, None),
    ('icons/apple-touch-icon.png',          180, 0.70, None),
]
PLAY = ('native/play-graphics/play-icon-512.png', 512, 0.70, None)
# The LANDING site's home-screen icon, staged for `main` and deliberately not pushed there -- see
# native/landing-icons/README.md, and native/landing-aasa/ for the same arrangement.
#
# Two reasons it is generated here rather than left alone. The obvious one is that roundscodex.com
# and the app wear DIFFERENT MARKS -- a thick solid ring on the landing site against the app's
# glowing thin one -- so someone who saves both to a home screen gets two icons for one product.
# The one that makes it a defect rather than a preference is that the shipped landing file is RGB
# with **white** corners baked in (1,594 pure-white pixels, 4.9% of it). iOS masks an
# apple-touch-icon with its own squircle, so those corners show as white wedges outside the art's
# rounding and inside Apple's. It is the same class of fault the app's icon had in v143, in the
# other direction: that one was transparent and iOS composited it onto black.
LANDING = ('native/landing-icons/apple-touch-icon.png', 180, 0.70, None)
# The App Store icon. 1024x1024 and Apple REJECTS ALPHA outright -- a transparent icon is not
# masked, it is refused at upload -- so this is full bleed like Play's, and the corner-treatment
# check below already asserts opacity rather than trusting it. The App Store icon comes from the
# BINARY, not from App Store Connect, so shipping it means an iOS build (1.0.1).
APPSTORE = ('native/ios-project/AppIcon-1024.png', 1024, 0.70, None)

print('--- build_app_icons.py ---')
print(f'  source  {os.path.relpath(LOCKUP)}  emblem crop {EMBLEM}')

built = []
for rel, size, frac, rad in TARGETS + [PLAY, APPSTORE, LANDING]:
    img = build(size, frac, rad)
    assert_closed_ring(img, os.path.basename(rel))
    px = img.load()
    corners = [px[1, 1][3], px[size - 2, 1][3], px[1, size - 2][3], px[size - 2, size - 2][3]]
    want_opaque = rad is None
    if want_opaque and min(corners) != 255:
        print(f'FAIL: {rel} must have opaque corners, got {corners}'); sys.exit(1)
    if not want_opaque and max(corners) != 0:
        print(f'FAIL: {rel} must have transparent corners, got {corners}'); sys.exit(1)
    built.append((rel, img))

print()
for rel, img in built:
    dest = os.path.join(HERE, '..', rel) if rel.startswith('native/') else os.path.join(ROOT, rel)
    dest = os.path.normpath(dest)
    old = os.path.getsize(dest) if os.path.exists(dest) else 0
    print(f'  {rel:38} {img.size[0]:>4}px   {"replaces" if old else "new"}'
          f'{f" {old//1024} kB" if old else ""}')
    if APPLY:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        img.save(dest)

if not APPLY:
    print('\n  dry run. Pass --apply to write.')
else:
    print('\n  written')
    print('  NOTE: all four web icons are precached in sw.js CORE, so shipping them means a deploy')
    print('        and a CACHE bump if you want installed users to pick them up offline.')
