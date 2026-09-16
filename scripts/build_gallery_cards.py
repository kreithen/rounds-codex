#!/usr/bin/env python3
"""build_gallery_cards.py <web-clone> [--only id,id,id] [--apply]

Builds a 1200x630 link-preview card per gallery, so a shared /g/<id> shows that gallery's own
artwork instead of the site-wide card.

WHY IT LOOKS LIKE THIS, and the reasoning is inherited rather than invented. `build_og_card.py`
already settled the design for the site-wide artwork card and its docstring carries the reason:
**at roughly 240px wide a page reads as "original medical illustration" without any single leader
line being legible.** That matters more here than it did there. The mislabelled-anatomy audit
examined 119 pages and found 81 where a leader line does not land on the structure it names; a
share card is the wrong surface to enlarge one of those on. So the pages stay small, dimmed and
behind the lockup -- they say "there is real artwork in here", which is the only claim a card needs
to make.

NO RENDERED TYPE, for the same reason `build_og_card.py` has none: the brand faces are Inter and
Oswald, neither is installed here, and "Rounds Codex" set in DejaVu would be visibly the wrong
wordmark on every share the product makes. The lockup goes on as an IMAGE. The gallery's name is
not drawn on the card at all -- it does not need to be, because the edge function already puts it
in og:title, which is rendered by the platform in its own type right beside the image.

PAGE CHOICE AVOIDS THE KNOWN-BAD PAGES. `galleries-staging/label-qa-worklist.json` lists 109 pages
across 92 galleries whose leader lines are on the work order -- overwhelmingly pages 1 and 2, which
are the anatomy plates. Those are skipped when there is any alternative. It costs nothing (every
gallery has ten pages and needs three) and means no card is built from a page already known to be
wrong. Where a gallery has fewer than three clean pages the flagged ones are used and NAMED in the
output, so the choice is visible rather than silent.

`logo-trim.png` is RGB on a solid black ground, so the lockup composites with a LIGHTEN blend --
same technique, same reason, as build_og_card.py and build_app_icons.py.
"""
import sys, os, json
from PIL import Image, ImageFilter, ImageChops

ROOT = sys.argv[1] if len(sys.argv) > 1 else None
APPLY = '--apply' in sys.argv
ONLY = None
if '--only' in sys.argv:
    ONLY = [s.strip() for s in sys.argv[sys.argv.index('--only') + 1].split(',') if s.strip()]
if not ROOT:
    print(__doc__); sys.exit(2)

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1200, 630
INK      = (8, 13, 26)      # the app's --bg
INK_TOP  = (14, 22, 42)
# 4 pages, not 3, and the geometry is build_og_card.py's exactly. The pilot was built with 3 and
# it was visibly wrong: 3*240+2*26 = 772 of 1200, so the card read as sparse with dead bands either
# side, and worse, the lockup landed ON the middle page and buried it. At 4 the row is 1038 wide and
# the lockup falls in the gutter between pages 2 and 3, which is why the site-wide card works.
TW, TH, GAP, N = 240, 360, 26, 4
OUTDIR = os.path.join(ROOT, 'og', 'g')


def ground():
    g = Image.new('RGB', (1, H)); px = g.load()
    for y in range(H):
        t = y / (H - 1)
        px[0, y] = tuple(round(INK_TOP[i] + (INK[i] - INK_TOP[i]) * t) for i in range(3))
    return g.resize((W, H))


def lockup(max_w):
    lg = Image.open(os.path.join(HERE, 'logo-trim.png')).convert('RGB')
    w = min(max_w, lg.width)
    return lg.resize((w, round(lg.height * w / lg.width)), Image.LANCZOS)


def place_lockup(im, lg, dy=0):
    x, y = (im.width - lg.width) // 2, (im.height - lg.height) // 2 + dy
    box = (x, y, x + lg.width, y + lg.height)
    im.paste(ImageChops.lighter(im.crop(box), lg), box)


gal = json.load(open(os.path.join(ROOT, 'content', 'galleries.json')))
GALLERIES, REAL = gal['galleries'], set(gal.get('real', []))
flagged = {}
for e in json.load(open(os.path.join(HERE, '..', 'galleries-staging', 'label-qa-worklist.json'))):
    flagged.setdefault(e['gid'], set()).add(e['page'])


def pick_pages(gid, g):
    """Three pages, preferring ones not on the leader-line work order."""
    bad = flagged.get(gid, set())
    imgs = g.get('images', [])
    clean = [p for p in imgs if p['n'] not in bad]
    used_flagged = []
    chosen = clean[:N]
    if len(chosen) < N:
        extra = [p for p in imgs if p['n'] in bad][:N - len(chosen)]
        used_flagged = [p['n'] for p in extra]
        chosen = chosen + extra
    return chosen, used_flagged


def card(gid, g):
    pages, used_flagged = pick_pages(gid, g)
    if len(pages) < N:
        return None, f'only {len(pages)} pages', used_flagged
    im = ground()
    total = N * TW + (N - 1) * GAP
    x0 = (W - total) // 2
    for i, p in enumerate(pages):
        src = os.path.join(ROOT, g.get('base', '') + p['thumb'])
        if not os.path.exists(src):
            src = os.path.join(ROOT, p['thumb'])
        if not os.path.exists(src):
            return None, f'thumb missing: {p["thumb"]}', used_flagged
        t = Image.open(src).convert('RGB').resize((TW, TH), Image.LANCZOS)
        im.paste(t, (x0 + i * (TW + GAP), (H - TH) // 2 - 24))
    veil = Image.new('RGB', (W, H), INK)
    im = Image.blend(im, veil, 0.55)
    im = im.filter(ImageFilter.GaussianBlur(0.7))
    place_lockup(im, lockup(660), -6)
    return im, [p['n'] for p in pages], used_flagged


ids = [i for i in GALLERIES if i in REAL]
if ONLY:
    missing = [i for i in ONLY if i not in ids]
    if missing:
        print(f'FAIL: not a real gallery: {", ".join(missing)}'); sys.exit(1)
    ids = ONLY

print('--- build_gallery_cards.py ---')
print(f'  {len(ids)} gallery/galleries   {W}x{H}   {N} pages at {TW}x{TH}, veil 0.55, no rendered type')
print(f'  leader-line work order: {sum(len(v) for v in flagged.values())} pages across {len(flagged)} galleries -- avoided where possible')
print()

ok = fail = 0
for gid in ids:
    img, pages, used_flagged = card(gid, GALLERIES[gid])
    if img is None:
        print(f'  FAIL  {gid:24} {pages}'); fail += 1; continue
    note = f'  (had to use flagged page(s) {used_flagged})' if used_flagged else ''
    print(f'  ok    {gid:24} pages {pages}{note}')
    ok += 1
    if APPLY:
        os.makedirs(OUTDIR, exist_ok=True)
        dest = os.path.join(OUTDIR, f'{gid}.jpg')
        img.save(dest, 'JPEG', quality=86, optimize=True, progressive=True)

print()
print(f'  {ok} built, {fail} failed')
if APPLY:
    tot = sum(os.path.getsize(os.path.join(OUTDIR, f)) for f in os.listdir(OUTDIR)) if os.path.isdir(OUTDIR) else 0
    print(f'  written to og/g/   {tot/1024/1024:.1f} MB total')
else:
    print('  dry run. Pass --apply to write.')
