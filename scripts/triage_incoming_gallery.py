#!/usr/bin/env python3
"""Triage an incoming gallery batch before building anything.

    python3 scripts/triage_incoming_gallery.py <incoming-dir> [--site <root>] [--out <dir>]

Two checks, both of which CLAUDE.md records as having already cost real work:

1. IS IT A RE-SEND?  Of the three batches received on 2026-07-30, two were
   largely pages we had already shipped -- 20 of 25, then 10 of 75, byte-
   identical to deployed artwork. Diffing first saved rebuilding four galleries.
   Every incoming page is compared against all 550 live pages: first by exact
   file hash, then by mean pixel difference on a downscaled grayscale copy, so
   a re-encode of the same artwork is still recognised. A mean diff under
   2/255 is compression noise, not a revision.

2. WHAT ORDER DO THE PAGES GO IN?  Page order comes from the "IMAGE n OF 10"
   header, never from filenames or arrival order -- every batch so far has
   arrived shuffled. This crops the header strip from each page and tiles them
   into ONE contact sheet, plus a second sheet of the title strips, so the whole
   batch is two images to read instead of seventy-five.

It reads only. It builds nothing and writes nothing into the app.
"""
import argparse, hashlib, json, os, sys
from PIL import Image
import numpy as np

EXT = {'.jpg', '.jpeg', '.png', '.webp'}
# Header carries "IMAGE n OF 10"; the band below it carries the page title.
# Fractions of image height, so they hold whether a page is 1024x1536 or 1536x2304.
#
# The header band is cut to include the FULL logo lockup and the progress dots,
# not just the page number, because that makes one sheet answer all three
# per-page checks CLAUDE.md lists: the page order, the logo lockup (production
# has sent a TM variant), and the dots (should be ONE filled dot at the current
# page; C. difficile rendered them cumulatively, and some pages fill two).
# Measured off a real page by cropping 0.05-0.22 with fraction ticks drawn on it,
# rather than guessed: logo and dots end ~0.058, the big title runs 0.085-0.12,
# the blue subtitle to ~0.145, and "OVERVIEW" body copy starts ~0.165.
HEADER = (0.008, 0.062)
TITLE  = (0.072, 0.155)
SIG    = (64, 96)          # downscale for the perceptual comparison
NOISE  = 2.0               # mean abs diff (0-255) at or below which it is the same artwork


def sig(path):
    """Grayscale thumbprint used for the near-identical test."""
    with Image.open(path) as im:
        return np.asarray(im.convert('L').resize(SIG, Image.LANCZOS), dtype=np.float32)


def sha(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    return h.hexdigest()


def live_pages(site):
    """Every page the live app actually references, resolved through each gallery's base."""
    g = json.load(open(os.path.join(site, 'content', 'galleries.json')))
    out = []
    for gid, gal in g['galleries'].items():
        for im in gal['images']:
            p = os.path.join(site, gal.get('base', '') or '', im['file'])
            if os.path.exists(p):
                out.append((f"{gid}-{im['n']:02d}", p, im.get('title', '')))
    return out


def strip(path, frac):
    with Image.open(path) as im:
        w, h = im.size
        return im.convert('RGB').crop((0, int(h * frac[0]), w, int(h * frac[1])))


def sheet(paths, frac, out_path, label_w=210):
    """Tile one horizontal band from each page into a single tall image, labelled."""
    from PIL import ImageDraw
    crops = [(os.path.basename(p), strip(p, frac)) for p in paths]
    tw = max(c.width for _, c in crops)
    scale = min(1.0, 900 / tw)
    rows = [(n, c.resize((int(c.width * scale), int(c.height * scale)), Image.LANCZOS)) for n, c in crops]
    W = label_w + max(c.width for _, c in rows)
    H = sum(c.height + 6 for _, c in rows) + 6
    sheet_im = Image.new('RGB', (W, H), (14, 18, 28))
    d = ImageDraw.Draw(sheet_im)
    y = 6
    for name, c in rows:
        sheet_im.paste(c, (label_w, y))
        d.text((8, y + max(0, c.height // 2 - 6)), name[:30], fill=(190, 205, 225))
        y += c.height + 6
    sheet_im.save(out_path, quality=90)
    return out_path, len(rows)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('incoming')
    ap.add_argument('--site', default='/workspace/rounds-codex-app')
    ap.add_argument('--out', default=None, help='where to write the contact sheets')
    a = ap.parse_args()

    # Skip the sheets this script itself writes. They are .jpg in the same folder,
    # so a second run was feeding its own output back in as two extra "pages".
    inc = sorted(os.path.join(a.incoming, f) for f in os.listdir(a.incoming)
                 if os.path.splitext(f)[1].lower() in EXT and not f.startswith('_contact-'))
    if not inc:
        sys.exit(f'no images in {a.incoming}')
    out = a.out or a.incoming

    live = live_pages(a.site)
    print(f'{len(inc)} incoming pages vs {len(live)} live pages\n')

    live_sha = {}
    for key, p, _ in live:
        live_sha.setdefault(sha(p), key)
    live_sig = [(key, sig(p)) for key, p, _ in live]

    resend = new = revised = 0
    print(f'{"incoming":<34} {"verdict":<12} {"closest live page":<22} diff')
    print('-' * 84)
    for p in inc:
        name = os.path.basename(p)
        h = sha(p)
        if h in live_sha:
            print(f'{name:<34} {"IDENTICAL":<12} {live_sha[h]:<22} 0.00')
            resend += 1
            continue
        s = sig(p)
        best_k, best_d = None, 1e9
        for key, ls in live_sig:
            d = float(np.abs(s - ls).mean())
            if d < best_d:
                best_k, best_d = key, d
        if best_d <= NOISE:
            verdict = 'RE-ENCODE'
            resend += 1
        elif best_d < 12:
            verdict = 'REVISED?'
            revised += 1
        else:
            verdict = 'NEW'
            new += 1
        print(f'{name:<34} {verdict:<12} {best_k:<22} {best_d:.2f}')

    print(f'\n  {resend} already live, {revised} possibly revised, {new} new')
    if revised:
        print('  NOTE: "REVISED?" needs eyes. A contact-sheet misread once made me report two')
        print('        pages as revised when the swap was mine -- re-check the mapping.')

    hp, n = sheet(inc, HEADER, os.path.join(out, '_contact-headers.jpg'))
    tp, _ = sheet(inc, TITLE, os.path.join(out, '_contact-titles.jpg'))
    print(f'\ncontact sheets ({n} pages each):\n  {hp}   <- read "IMAGE n OF 10" for page order\n  {tp}   <- read the page titles')


if __name__ == '__main__':
    main()
