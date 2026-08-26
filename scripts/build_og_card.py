#!/usr/bin/env python3
"""build_og_card.py <web-clone> [--out DIR]

Builds the 1200x630 image that link previews show for rounds-codex.netlify.app.

TWO CANDIDATES, because this is a design decision rather than a mechanical one:

  og-card-mark.jpg      the logo lockup on the app's own dark ground. Safe, unmistakably the
                        product, says nothing about what is inside it.
  og-card-artwork.jpg   four real gallery pages behind the lockup. Says the thing that actually
                        differentiates this product -- 1,020 original clinical illustrations --
                        and is the reason anyone would tap.

WHY THE TEXT IS THE LOGO IMAGE AND NOT RENDERED TYPE. The brand faces are Inter and Oswald and
neither is installed here; rendering "Rounds Codex" in DejaVu would be visibly the wrong wordmark
on every share the product makes. The lockup is used as an image so the type is correct.

WHY THE PAGES ARE SMALL AND DIMMED in the artwork card: at roughly 240px wide a page reads as
"original medical illustration" without any single leader line being legible. That matters --
`galleries-staging/HANDOFF-anatomy-label-corrections.md` records 81 pages whose leader lines do not
land on the structure they name, and a marketing card is the wrong place to enlarge one.

Pages are named explicitly rather than globbed. A glob would silently change what the world sees
the next time the thumbnail set changes.
"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter, ImageChops

ROOT = sys.argv[1] if len(sys.argv) > 1 else None
if not ROOT:
    print(__doc__); sys.exit(2)
OUT = sys.argv[sys.argv.index('--out') + 1] if '--out' in sys.argv else '.'

W, H = 1200, 630
INK      = (8, 13, 26)      # the app's --bg
INK_TOP  = (14, 22, 42)     # a touch lighter at the top, as the app's home screen is
CYAN     = (79, 195, 247)

# Four pages from four different specialties, chosen so the card reads as a library rather than
# one gallery. Named, not globbed -- see the docstring.
PAGES = ['copd-01.jpg', 'dvt-01.jpg', 'addisons-01.jpg', 'pad-01.jpg']


def ground():
    """Vertical gradient, the same direction as the app's own background."""
    g = Image.new('RGB', (1, H))
    px = g.load()
    for y in range(H):
        t = y / (H - 1)
        px[0, y] = tuple(round(INK_TOP[i] + (INK[i] - INK_TOP[i]) * t) for i in range(3))
    return g.resize((W, H))


def lockup(max_w):
    """logo-trim.png is RGB with a solid BLACK background, not a transparent PNG. Pasting it puts a
    black rectangle on the card -- which looked exactly as bad as it sounds over the artwork. It is
    light-on-black, so compositing it with a LIGHTEN blend drops the background and keeps the glow;
    that is also why the card grounds are near-black."""
    lg = Image.open(os.path.join(os.path.dirname(__file__), 'logo-trim.png')).convert('RGB')
    w = min(max_w, lg.width)
    return lg.resize((w, round(lg.height * w / lg.width)), Image.LANCZOS)


def place_lockup(im, lg, dy=0):
    x, y = (im.width - lg.width) // 2, (im.height - lg.height) // 2 + dy
    box = (x, y, x + lg.width, y + lg.height)
    im.paste(ImageChops.lighter(im.crop(box), lg), box)
    return box


def card_mark():
    im = ground()
    lg = lockup(760)
    box = place_lockup(im, lg, -10)
    d = ImageDraw.Draw(im)
    y = box[3] + 34
    d.line([(W // 2 - 190, y), (W // 2 + 190, y)], fill=CYAN, width=3)
    return im


def card_artwork():
    im = ground()
    tw, th = 240, 360
    gap = 26
    total = 4 * tw + 3 * gap
    x0 = (W - total) // 2
    for i, name in enumerate(PAGES):
        p = os.path.join(ROOT, 'gthumbs', name)
        if not os.path.exists(p):
            raise SystemExit(f'FAIL: {p} not found -- the thumbnail set moved; fix PAGES, do not glob')
        t = Image.open(p).convert('RGB').resize((tw, th), Image.LANCZOS)
        im.paste(t, (x0 + i * (tw + gap), (H - th) // 2 - 24))
    # Darken everything so the lockup reads and no single label invites squinting.
    veil = Image.new('RGB', (W, H), INK)
    im = Image.blend(im, veil, 0.55)
    im = im.filter(ImageFilter.GaussianBlur(0.7))
    place_lockup(im, lockup(660), -6)
    return im


os.makedirs(OUT, exist_ok=True)
for name, fn in (('og-card-mark.jpg', card_mark), ('og-card-artwork.jpg', card_artwork)):
    img = fn()
    assert img.size == (W, H), img.size
    path = os.path.join(OUT, name)
    img.save(path, 'JPEG', quality=88, optimize=True, progressive=True)
    print(f'  {name}  {img.size[0]}x{img.size[1]}  {os.path.getsize(path)/1024:.0f} kB')
