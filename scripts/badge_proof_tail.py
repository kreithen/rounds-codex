#!/usr/bin/env python3
"""Erase the trailing "Proof - Prepublication" from the bottom strip of pad and dvt.

    python3 scripts/badge_proof_tail.py --outdir <dir> [--apply]

    (c) 2026 Rounds Codex, Inc. - PAD Page 6 v6.0 Proof - Prepublication
    (c) 2026 Rounds Codex, Inc.  -  DVT Page 7 Proof  -  Prepublication

Both galleries are published, so both words are false in the same way "CLINICAL PENDING" is.
Everything up to the page number is true and stays. Requested by the physician, 2026-08-02.

TWO GALLERIES, TWO METHODS, AND WHY

pad is measured automatically. Its strip is a fixed template: the tail lands at x450-543 on nine
of ten pages and x441/x453 on the other two, and the only variable is the page number's width.

NOT IDEMPOTENT -- run it once, over the originals. dvt refuses a second pass, because its table
asserts there is ink where the tail used to be. pad's automatic path does NOT: on an
already-erased page it finds the NEW last segments and eats "PAD Page N v6.0" as well. Re-run
the whole chain from the deployed pages rather than re-running a stage over its own output.

dvt is a TABLE of ten hand-read positions, and that is deliberate. Three automatic rules were
tried on it and each cut through the middle of a word:

  * last N word-segments -- "Prepublication" breaks into two glyph runs on page 8 and three on
    page 9, so a count that is right on pages 2-6 leaves "Proof" behind on 8 and "Proof -" on 9;
  * a fixed span back from the end of the line -- the line's word spacing differs page to page,
    so the same span reaches past "Proof" on some pages and stops short on others;
  * lowest text-scoring row band -- pages 7 and 10 put the page frame's bottom rule inside the
    search window, and page 5's metadata label row ("MODALITY  CLINICAL SOURCE  REVIEW") scored
    higher than the copyright line, which would have erased the word REVIEW.

dvt is not a template -- it ships two page heights inside one gallery -- so there is nothing for
a rule to lock onto. Ten positions read off a pixel ruler is smaller and more honest than a
fourth rule that happens to fit. Each one is asserted below: there must be ink at the recorded
start and a clear word gap immediately left of it, so if the artwork is ever re-rendered the
script fails loudly instead of erasing the wrong thing.
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image, ImageDraw

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from badge_lines import save_like, row_bg

SITE = '/workspace/rounds-codex-app'
PAD_TARGET = 88          # width of "Proof - Prepublication" in pad's type

# dvt: page -> (row band, x of the "P" of Proof, x of the end of "Prepublication").
# Read off scripts-generated pixel rulers over each page's own copyright line, 2026-08-02.
# Page 10 reads "Page 10 of 10 - Prepublication" with no "Proof", so its tail starts at the
# separator; every other page starts at Proof.
DVT = {
    1:  (1350, 1366, 498, 614),
    2:  (1349, 1365, 505, 630),
    3:  (1351, 1367, 497, 615),
    4:  (1347, 1363, 502, 623),
    5:  (1347, 1363, 506, 636),
    6:  (1348, 1364, 507, 638),
    7:  (1347, 1362, 526, 669),
    8:  (1344, 1362, 514, 658),
    9:  (1351, 1367, 521, 653),
    10: (1345, 1365, 559, 662),
}


# pad page 6 also carries the claim a third time, in red, INSIDE the artwork:
#   "TEACHING ILLUSTRATIONS - NOT DIAGNOSTIC PHOTOMICROGRAPHS - PATHOLOGIST REVIEW PENDING"
# The physician asked for the whole line, not just the tail. It is one line on one page: a scan
# for red text of that shape across all 20 pad and dvt pages returned 28 candidates, and looking
# at every one showed the other 27 are legitimate artwork ("ALI - SUDDEN <2 WEEKS", "THE 6 Ps",
# "RED FLAGS: SEEK IMMEDIATE CARE"). Hard-coded rather than detected, for that reason.
PAD6_RED = (199, 907, 606, 923)


def red_of(a):
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (r > 110) & (r > g + 45) & (r > b + 45)


def pad6_red_box(a):
    x0, y0, x1, y1 = PAD6_RED
    red = red_of(a)
    inside = int(red[y0:y1 + 1, x0:x1 + 1].sum())
    if inside < 400:
        return None, f'only {inside} red px in the recorded disclaimer box -- artwork changed'
    outside = int(red[y0:y1 + 1].sum()) - inside
    if outside > 20:
        return None, f'{outside} red px on those rows outside the box -- re-measure'
    return (x0, y0, x1, y1), None


def ink_of(a):
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (b > 70) & (b > r + 12)


def seg_runs(ink, w, gap=3, edge=24):
    """Glyph runs merged into word-segments, ignoring the page frame's own vertical rules."""
    cols = ink.sum(axis=0)
    runs, on = [], False
    for x in range(edge, w - edge):
        if cols[x] > 0 and not on:
            s, on = x, True
        elif cols[x] == 0 and on:
            runs.append([s, x - 1]); on = False
    if on:
        runs.append([s, w - edge - 1])
    out = []
    for rr in runs:
        if out and rr[0] - out[-1][1] < gap:
            out[-1][1] = rr[1]
        else:
            out.append(list(rr))
    return out


def pad_box(a):
    """pad's tail, measured on the page. Its strip is a template, so this is stable."""
    h, w, _ = a.shape
    ink = ink_of(a)
    counts = ink.sum(axis=1)
    ok = [y for y in range(int(h * 0.92), h) if 25 < counts[y] < 0.5 * w]
    if not ok:
        return None, 'no copyright line found'
    bands, start = [], ok[0]
    for i in range(1, len(ok)):
        if ok[i] != ok[i - 1] + 1:
            bands.append((start, ok[i - 1])); start = ok[i]
    bands.append((start, ok[-1]))
    # lowest band that reads as TEXT: the frame's bottom rule is one long run and scores zero
    band = None
    for y0, y1 in reversed(bands):
        if sum(1 for s in seg_runs(ink[y0:y1 + 1], w) if 3 <= s[1] - s[0] + 1 <= 60) >= 4:
            band = (max(0, y0 - 3), min(h, y1 + 4)); break
    if band is None:
        return None, 'no text row in the bottom strip'
    y0, y1 = band
    sub = ink_of(a[y0:y1])
    segs = seg_runs(sub, w)
    if len(segs) < 5:
        return None, f'only {len(segs)} segments on the line'
    end = segs[-1][1]
    i = len(segs) - 1
    while i > 0 and (end - segs[i - 1][0] + 1) <= PAD_TARGET:
        i -= 1
    if segs[i][0] - segs[i - 1][1] < 3:
        return None, 'left edge lands mid-word'
    x0, x1 = segs[i][0] - 3, end + 4
    rows = np.where(sub[:, x0:x1 + 1].sum(axis=1) > 0)[0]
    return (x0, y0 + int(rows.min()) - 2, x1, y0 + int(rows.max()) + 3), None


def dvt_box(a, n):
    """dvt's tail, from the measured table, re-checked against the pixels every run."""
    y0, y1, tx0, tx1 = DVT[n]
    sub = ink_of(a[y0:y1])
    cols = sub.sum(axis=0)
    if not cols[tx0:tx0 + 4].any():
        return None, f'no ink at the recorded tail start x{tx0} -- artwork changed, re-measure'
    if cols[tx1 + 2:tx1 + 12].any():
        return None, f'ink past the recorded tail end x{tx1} -- artwork changed, re-measure'
    # How much clear space is there before the tail? On page 9 the "9" of "Page 9" ends 2px
    # before the P of Proof, so a flat 3px left pad would have clipped the page number. Pad by
    # what the gap allows, and refuse if there is no gap at all.
    gap = 0
    while gap < 8 and tx0 - gap - 1 >= 0 and not cols[tx0 - gap - 1]:
        gap += 1
    if gap < 2:
        return None, f'only {gap}px clear left of x{tx0} -- the box would cut a word, re-measure'
    rows = np.where(sub[:, tx0:tx1 + 1].sum(axis=1) > 0)[0]
    return (tx0 - min(3, gap - 1), y0 + int(rows.min()) - 2, tx1 + 4,
            y0 + int(rows.max()) + 3), None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--outdir', required=True)
    ap.add_argument('--apply', action='store_true')
    ap.add_argument('--srcdir', help='take pages from <srcdir>/<gallery>/ instead of the site')
    a = ap.parse_args()
    G = json.load(open(os.path.join(SITE, 'content', 'galleries.json')))['galleries']
    ok = bad = 0
    manifest = []
    for gid in ('pad', 'dvt'):
        gal = G[gid]
        gd = os.path.join(a.outdir, gid)
        os.makedirs(gd, exist_ok=True)
        for im in sorted(gal['images'], key=lambda i: i['n']):
            n = im['n']
            p = os.path.join(SITE, gal.get('base', '') or '', im['file'])
            if a.srcdir:
                alt = os.path.join(a.srcdir, gid, os.path.basename(p))
                if os.path.exists(alt):
                    p = alt
            I = Image.open(p)
            arr = np.asarray(I.convert('RGB')).astype(np.int16)
            box, err = pad_box(arr) if gid == 'pad' else dvt_box(arr, n)
            if err:
                print(f'  FAIL  {gid}-{n:02d}  {err}'); bad += 1; continue
            boxes = [box]
            if gid == 'pad' and n == 6:
                extra, xerr = pad6_red_box(arr)
                if xerr:
                    print(f'  FAIL  pad-06 disclaimer  {xerr}'); bad += 1; continue
                boxes.append(extra)
            bx0, by0, bx1, by1 = box
            print(f'  {gid}-{n:02d}  erase x{bx0}-{bx1} ({bx1-bx0}px) y{by0}-{by1}'
                  + ('  + the red PATHOLOGIST REVIEW PENDING line' if len(boxes) > 1 else ''))
            if a.apply:
                base = np.asarray(I.convert('RGB')).astype(float)
                out = base.copy()
                for cx0, cy0, cx1, cy1 in boxes:
                    for y in range(cy0, cy1 + 1):
                        out[y, cx0:cx1 + 1] = row_bg(base, y, max(0, cx0 - 70), max(1, cx0 - 10))
                d = np.abs(out - base).max(axis=2)
                for cx0, cy0, cx1, cy1 in boxes:
                    d[cy0:cy1 + 1, cx0:cx1 + 1] = 0
                assert not (d > 0).any(), f'{gid}-{n:02d} changed pixels outside its box'
                dstp = os.path.join(gd, os.path.basename(p))
                save_like(Image.fromarray(out.round().astype(np.uint8)), I, dstp)
                manifest.append(dict(gid=gid, n=n, status='ok', dst=dstp,
                                     boxes=[dict(x0=c[0], y0=c[1], x1=c[2], y1=c[3]) for c in boxes]))
            else:
                V = I.convert('RGB')
                for cb in boxes:
                    ImageDraw.Draw(V).rectangle(list(cb), outline=(255, 40, 90), width=1)
                w, _ = V.size
                C = V.crop((max(0, bx0 - 230), by0 - 4, min(w, bx1 + 12), by1 + 4))
                C.resize((C.width * 3, C.height * 3), Image.LANCZOS)\
                 .save(os.path.join(gd, f'preview-{n:02d}.png'))
            ok += 1
    if a.apply:
        json.dump(manifest, open(os.path.join(a.outdir, 'applied.json'), 'w'), indent=1)
    print(f'\n{ok} pages {"erased" if a.apply else "previewed"}, {bad} failed -> {a.outdir}')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
