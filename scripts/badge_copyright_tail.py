#!/usr/bin/env python3
"""Erase the false review status from the COPYRIGHT LINE of the three template galleries.

    python3 scripts/badge_copyright_tail.py --outdir <dir> [--apply]

asthma, cap and copd print the claim twice. `badge_lines.py` handles the copy in the metadata
bar; this handles the second one, at the end of the bottom strip:

    (c) 2026 Rounds Codex, Inc. - COPD - Page 10 of 10 - CLINICAL PENDING

That copy is pale cyan, the same ink as the rest of the line, so the warm-ink pass cannot see it
and it survived every earlier attempt. It was found by a reviewer, not by a detector.

These three are the only galleries where a measured box is legitimate. Cross-correlating each
gallery's footer against its own page 1 gives 0.48-0.86 at offset (0,0) here, versus 0.05-0.22 at
offsets up to 40px everywhere else -- they are the surviving 800x1200 pages from the older
pipeline, where the footer really is a template rather than something the generator redraws per
page. The run asserts that: if the measured boxes disagree by more than 12px it refuses.

WHY THE LEFT EDGE IS FOUND THE WAY IT IS
The line must keep "...Page 10 of 10" and lose "- CLINICAL PENDING", so the cut lands in a
4-5px word gap in 8px type. Two rules were tried and both cut through the middle of a word:
segmenting into words (the bullet merges with the digit beside it on some pages and with the C
of CLINICAL on others -- 34px of drift between page 1 and page 10), and measuring a fixed span
back from the end of the line (the page-10 lines are 3px longer). What holds on all thirty pages
is to take the last two segments and then absorb the one before them ONLY if it is bullet-width:
that separator is 3-4px wide where "10" is 9-13px, so the two are never confused.
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image, ImageDraw

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from badge_lines import save_like, row_bg

SITE = '/workspace/rounds-codex-app'
# The copyright row, measured per gallery. Deliberately not searched for: the panel border a few
# rows below is also cyan and 760px wide, and it is the thing a row search finds first.
ROWS = {'asthma': (1175, 1189), 'cap': (1175, 1189), 'copd': (1178, 1192)}
GAP = 3          # >=3px between glyph runs is a word gap; letters sit 1-2px apart
BULLET_W = 6     # a separator is 3-4px wide; "10" is 9-13px


def segments(ink, w):
    cols = ink.sum(axis=0)
    runs, on = [], False
    for x in range(21, w - 20):                 # skip the page's own cyan side borders
        if cols[x] > 0 and not on:
            s, on = x, True
        elif cols[x] == 0 and on:
            runs.append([s, x - 1]); on = False
    if on:
        runs.append([s, w - 21])
    segs = []
    for rr in runs:
        if segs and rr[0] - segs[-1][1] < GAP:
            segs[-1][1] = rr[1]
        else:
            segs.append(list(rr))
    return segs


def box_for(path, y0, y1):
    a = np.asarray(Image.open(path).convert('RGB')).astype(np.int16)[y0:y1]
    h, w, _ = a.shape
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    ink = (b > 70) & (b > r + 12)
    segs = segments(ink, w)
    if len(segs) < 4:
        return None, f'only {len(segs)} segments on the copyright line'
    x0 = segs[-2][0]                            # the CLINICAL segment
    # Take the separator with it, or the line ends on a dangling bullet. It cannot be found by
    # segmenting: on some pages it stands alone and on others it merges into the "10" beside it,
    # so it is found by HEIGHT instead -- the dot is ~4px tall where a digit is ~9px.
    cols = ink.sum(axis=0)
    for x in range(x0 - 1, max(20, x0 - 14), -1):
        if cols[x] == 0:
            continue
        s = x
        while s > 20 and cols[s - 1] > 0:
            s -= 1
        if (x - s + 1) <= BULLET_W and int(ink[:, s:x + 1].sum(axis=1).astype(bool).sum()) <= 5:
            x0 = s
        break
    x0, x1 = x0 - 2, segs[-1][1] + 4
    rows = np.where(ink[:, x0:x1 + 1].sum(axis=1) > 0)[0]
    return (x0, y0 + int(rows.min()) - 3, x1, y0 + int(rows.max()) + 3), None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--outdir', required=True)
    ap.add_argument('--apply', action='store_true')
    # These three pages carry the claim TWICE, so this pass has to run over the output of
    # badge_lines.py rather than over the deployed original -- otherwise whichever runs second
    # writes a file that still has the other copy on it.
    ap.add_argument('--srcdir', help='take pages from <srcdir>/<gallery>/ instead of the site')
    a = ap.parse_args()
    G = json.load(open(os.path.join(SITE, 'content', 'galleries.json')))['galleries']
    os.makedirs(a.outdir, exist_ok=True)
    total = 0
    manifest = []
    for gid, (y0, y1) in ROWS.items():
        gal = G[gid]
        gd = os.path.join(a.outdir, gid)
        os.makedirs(gd, exist_ok=True)
        lefts = []
        for im in sorted(gal['images'], key=lambda i: i['n']):
            p = os.path.join(SITE, gal.get('base', '') or '', im['file'])
            if a.srcdir:
                alt = os.path.join(a.srcdir, gid, os.path.basename(p))
                if not os.path.exists(alt):
                    print(f'  SKIP  {gid}-{im["n"]:02d}  not in srcdir'); continue
                p = alt
            box, err = box_for(p, y0, y1)
            if err:
                print(f'  SKIP  {gid}-{im["n"]:02d}  {err}'); continue
            bx0, by0, bx1, by1 = box
            lefts.append(bx0)
            print(f'  {gid}-{im["n"]:02d}  erase x{bx0}-{bx1} y{by0}-{by1}')
            I = Image.open(p)            # unconverted, so save_like keeps its qtables
            if a.apply:
                base = np.asarray(I.convert('RGB')).astype(float)
                out = base.copy()
                for y in range(by0, by1 + 1):
                    out[y, bx0:bx1 + 1] = row_bg(base, y, max(0, bx0 - 70), bx0 - 10)
                d = np.abs(out - base).max(axis=2)
                d[by0:by1 + 1, bx0:bx1 + 1] = 0
                assert not (d > 0).any(), f'{gid}-{im["n"]:02d} changed pixels outside its box'
                dstp = os.path.join(gd, os.path.basename(p))
                save_like(Image.fromarray(out.round().astype(np.uint8)), I, dstp)
                manifest.append(dict(gid=gid, n=im['n'], status='ok', dst=dstp,
                                     boxes=[dict(x0=bx0, y0=by0, x1=bx1, y1=by1)]))
            else:
                I = I.convert('RGB')
                ImageDraw.Draw(I).rectangle([bx0, by0, bx1, by1], outline=(255, 40, 90), width=1)
                w, _ = I.size
                C = I.crop((bx0 - 135, by0 - 3, min(w, bx1 + 10), by1 + 3))
                C.resize((C.width * 6, C.height * 6), Image.NEAREST)\
                 .save(os.path.join(gd, f'preview-{im["n"]:02d}.png'))
            total += 1
        assert max(lefts) - min(lefts) <= 12, f'{gid}: left edge moved {max(lefts)-min(lefts)}px between pages'
    # Recorded so the damage check sees these edits too. The first verification pass keyed off
    # badge_lines' manifest alone and therefore reported cap and copd as clean while their
    # copyright strips were carrying a visible bar.
    if a.apply:
        json.dump(manifest, open(os.path.join(a.outdir, 'applied.json'), 'w'), indent=1)
    print(f'\n{total} pages {"erased" if a.apply else "previewed"} -> {a.outdir}')


if __name__ == '__main__':
    main()
