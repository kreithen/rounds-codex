#!/usr/bin/env python3
"""build_usmle_logo.py <web-clone> [--apply]

Rebuilds the USMLE module's header lockup from the canonical one, `scripts/logo-trim.png`.

WHY THIS EXISTS. The brand-asset audit of 2026-09-16 (BRAND-ASSET-AUDIT.md, finding 1) found that
`usmle/assets/logo.png` -- which `preview/assets/logo.png` is a byte-identical copy of -- is the
WORDMARK ONLY: outlined type, no ring, no ECG trace. Every other surface in the product wears the
emblem. So a reader who goes Library -> USMLE PREP watches the brand change on the way. Nothing is
broken, which is why it survived; it is a consistency defect, not a rendering one.

THE CONVERSION IS THE WHOLE JOB, and it is not a resize. `logo-trim.png` is RGB on a near-black
ground (measured (0,2,17) at its corners, not pure black), while the file being replaced is RGBA
keyed to transparency. Two things depend on that alpha and both would break under a straight paste:

  * the page ground is `--bg:#070b12`, NOT the lockup's (0,1,13), so an opaque rectangle would sit
    on the header as a faintly visible dark patch -- the kind of thing nobody can name but everyone
    can see; and
  * `.brandimg` carries `filter:drop-shadow(0 0 7px rgba(90,180,240,.35))`, and a drop-shadow is
    cast by the ALPHA SHAPE. Opaque corners turn the mark's glow into a glowing rectangle.

So the ground is keyed out the way a screen/additive graphic must be: alpha from the brightest
channel, then the colour UN-PREMULTIPLIED (c * 255 / a) so a half-lit glow pixel keeps its hue
instead of washing grey. Over a dark ground that renders as the artwork does on black, which is
what the lockup was drawn for.

THE FLOOR IS MEASURED, and the measurement is the reason it is not zero. The ground is not black:
the four 24px corner patches read 10-24 on the brightest channel, so keying at 0 leaves the whole
rectangle at ~9% alpha -- invisible as a tint, but a rectangle is exactly what the drop-shadow then
draws. The floor is taken as the corners' own maximum plus a margin and everything at or below it
goes fully transparent, so the corners key to 0 BY CONSTRUCTION and the script asserts it rather
than hoping. It costs the dimmest ~10% of the glow, which is the trade: a faint outer halo for no
glowing box. Do not take the floor off the whole border -- the ECG trace runs out of the frame at
the bottom edge, which reads there as 255.

GEOMETRY. Emitted at 843x270's HEIGHT -- 270 -- so the file's vertical intrinsic is unchanged and
anything that assumed it still holds; the width follows the lockup's own aspect (949, up from 843,
because the emblem is now in the frame). `.brandimg` is `height:52px;width:auto;max-width:260px`,
so the rendered width goes 162px -> 183px, and 120px -> 141px against the 190px cap under the
520px media query. Both stay clear, which is why this needs no CSS change.

THE GUARD is `assert_closed_ring`, the same measurement `build_app_icons.py` makes and for the same
reason: the mark is a CLOSED circle, so the bounding box of the emblem alone is square to within
10%. The four shipped icons measured 0.78 because their right arc had been cropped away, and that
is the shape of defect this whole line of work exists to catch. Here it is measured on the emblem
region of the output, after the alpha key, so it also proves the key did not eat the ring's dimmer
arcs -- a threshold set too high would.
"""
import sys, os
from PIL import Image

ROOT = sys.argv[1] if len(sys.argv) > 1 else None
APPLY = '--apply' in sys.argv
if not ROOT:
    print(__doc__); sys.exit(2)

HERE = os.path.dirname(os.path.abspath(__file__))
LOCKUP = os.path.join(HERE, 'logo-trim.png')
OUT_H = 270                     # the height of the file being replaced

# The emblem's extent inside the lockup, measured not eyeballed -- the same box build_app_icons.py
# uses: bright pixels left of the first fully empty column (x=353), the gutter before the "R".
EMBLEM = (38, 20, 360, 338)


def ground_floor(a, pad=24, margin=2):
    """The ground level, read off the four corner patches -- NOT the whole border, which the ECG
       trace leaves through at the bottom edge (255 there)."""
    w, h = a.size
    hi = max(a.crop(b).getextrema()[1] for b in
             ((0, 0, pad, pad), (w - pad, 0, w, pad),
              (0, h - pad, pad, h), (w - pad, h - pad, w, h)))
    return hi + margin


def key_alpha(src):
    """Near-black ground -> transparency, for artwork drawn to be screened onto black."""
    r, g, b = src.split()
    # brightest channel is the intensity; a coloured glow must not lose alpha for being blue
    a = ImageChops.lighter(ImageChops.lighter(r, g), b)
    floor = ground_floor(a)
    span = 255.0 - floor
    out = Image.new('RGBA', src.size)
    sp, ap, op = src.load(), a.load(), out.load()
    w, h = src.size
    for y in range(h):
        for x in range(w):
            av = ap[x, y]
            if av <= floor:
                op[x, y] = (0, 0, 0, 0)
                continue
            na = round((av - floor) * 255.0 / span)
            if na <= 0:
                op[x, y] = (0, 0, 0, 0)
                continue
            cr, cg, cb = sp[x, y]
            k = 255.0 / av                       # un-premultiply against the ORIGINAL intensity
            op[x, y] = (min(255, round(cr * k)), min(255, round(cg * k)),
                        min(255, round(cb * k)), na)
    return out, floor


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
    """A closed circle is as wide as it is tall. 0.78 is the cropped mark; below 0.9 is not ours."""
    bb = mark_bbox(img)
    if not bb:
        print(f'FAIL: {label} has no visible mark'); sys.exit(1)
    x0, x1, y0, y1 = bb
    w, h = x1 - x0 + 1, y1 - y0 + 1
    aspect = w / h
    ok = aspect >= 0.9
    print(f'  {"ok  " if ok else "FAIL"} {label:28} emblem {w}x{h}  aspect {aspect:.2f}')
    if not ok:
        print('       aspect must be >= 0.90 -- a closed ring, not the cropped "C"'); sys.exit(1)


from PIL import ImageChops  # after the docstring, next to where it is used

src = Image.open(LOCKUP).convert('RGB')
scale = OUT_H / src.height
out_w = round(src.width * scale)

print('--- build_usmle_logo.py ---')
print(f'  source  {os.path.relpath(LOCKUP)}  {src.width}x{src.height}  ->  {out_w}x{OUT_H} RGBA')

# Measure the ring on the SOURCE emblem crop, before any resampling can blur the argument.
assert_closed_ring(src.crop(EMBLEM), 'emblem in the lockup')

keyed, floor = key_alpha(src)
print(f'  ok   ground floor {floor}/255 measured off the corner patches; at or below it keys to 0')
rgba = keyed.resize((out_w, OUT_H), Image.LANCZOS)

# And again on the output's emblem, so the alpha key is on the hook for the ring too.
ex0, ey0, ex1, ey1 = [round(v * scale) for v in EMBLEM]
em = Image.new('RGB', (ex1 - ex0, ey1 - ey0), (0, 0, 0))
crop = rgba.crop((ex0, ey0, ex1, ey1))
em.paste(crop, (0, 0), crop)
assert_closed_ring(em, 'emblem after the alpha key')

corners = [rgba.getpixel(p)[3] for p in
           ((0, 0), (out_w - 1, 0), (0, OUT_H - 1), (out_w - 1, OUT_H - 1))]
if max(corners) != 0:
    print(f'FAIL: the ground was not keyed out, corner alphas {corners}'); sys.exit(1)
print(f'  ok   corners transparent {corners}  (drop-shadow follows the mark, not a rectangle)')

DESTS = [os.path.join(ROOT, 'usmle', 'assets', 'logo.png'),
         os.path.join(HERE, '..', 'preview', 'assets', 'logo.png')]

print()
for d in DESTS:
    d = os.path.normpath(d)
    old = os.path.getsize(d) if os.path.exists(d) else 0
    print(f'  {d:60} {"replaces " + str(old // 1024) + " kB" if old else "new"}')
    if APPLY:
        os.makedirs(os.path.dirname(d), exist_ok=True)
        rgba.save(d)

if not APPLY:
    print('\n  dry run. Pass --apply to write.')
else:
    print('\n  written')
    print('  NOTE: usmle/ is NOT in sw.js CORE, so this needs a deploy but no CACHE bump.')
