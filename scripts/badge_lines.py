#!/usr/bin/env python3
"""Enumerate the warm text LINES in a gallery page footer, so eyes can choose the target.

    python3 scripts/badge_lines.py --gallery <id> --outdir <dir>      # propose
    python3 scripts/badge_lines.py --apply <picks.json>               # erase what was chosen

WHY THIS SHAPE, AFTER FOUR FAILED DETECTORS

`galleries-staging/BADGE-AUDIT/WHY-NOT-REPAINTED.md` records four attempts to find the false
"CLINICAL PENDING" cell automatically -- by warm ink, by an adaptive line merge, by a merge
height cap, by the cell divider, by the cyan label. Every one of them found the *text* reliably
and then picked the *wrong blob*: it swallowed a KEY POINT banner above the bar, or stopped one
line short and left "CLINICAL" behind. Three verification passes over the last run put it at
16 of 33 galleries clean, which is not shippable.

The plan that replaced it -- one hand-measured rectangle per gallery -- was killed by its own
prerequisite. Cross-correlating each gallery's footer band against its own page 1 gives 0.75-0.86
at offset (0,0) on the three 800x1200 galleries and **0.05-0.22 at offsets up to the +/-40px
search limit on every 1024x1536 one**. Those pages are not a template with artwork poured into
it; the footer is drawn by the generator on each page, which is also why the dot count, the
wording and the page size all wander within a single gallery. There is no rectangle that holds
still across ten pages, so there is nothing to measure once and reuse.

So this script does not decide anything. It finds every warm text line in the footer, draws them
numbered, and stops. A reviewer says which numbers are the false status. Consequences:

  * A box can never span the page, because lines are built from 2D CONNECTED COMPONENTS and
    grouped by x-proximity. The tia p10 smear came from row-runs, whose bbox reaches from the
    status across to any warm pixel on the same scanline -- there "Recognize. Evaluate. Treat.
    Prevent." in gold, 500px away. A component cannot do that.
  * A two-line status cannot be half-erased, because the reviewer picks both lines. Every merge
    heuristic is gone; there is nothing left to tune wrong.
  * Nothing is ever silently skipped. A page with no pick is reported, not dropped.

The one job left to code is deleting the pixels inside boxes it was handed, and asserting it
changed nothing outside them.
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image, ImageDraw

SITE = '/workspace/rounds-codex-app'
BAND = 0.70          # search the bottom 30%: the bar sits low, but copd repeats the wording
                     # in the full-width copyright line, which a right-column search never saw.


def save_like(img, src_im, dst):
    """Write a JPEG using the SOURCE file's quantization tables and chroma subsampling.

    Re-encoding at a nominal quality re-quantizes every block on the page, not just the edited
    one, so a page that was touched in a 100x40px cell comes back measurably different across
    its whole area -- 3,000+ pixels shifted by more than 28 levels, concentrated on the thin
    bright panel borders where JPEG rings worst. That is a real quality loss on 296 pages, and
    it also drowns any mechanical check for damage outside the erase box in noise.

    Reusing the source's own tables means the untouched blocks re-quantize to what they already
    were, so the diff collapses to the edit itself.
    """
    q = getattr(src_im, 'quantization', None)
    kw = dict(optimize=True)
    if q:
        kw['qtables'] = q
        try:
            from PIL import JpegImagePlugin
            kw['subsampling'] = JpegImagePlugin.get_sampling(src_im)
        except Exception:
            pass
    else:
        kw['quality'] = 92
    img.save(dst, 'JPEG', **kw)


def warm(a):
    """Status ink: gold, amber, orange, red, and the PALE mixed-case gold that broke the last run.

    hyponatremia renders "Clinical Pending" in a gold light enough that a r>140 threshold missed
    it entirely -- and the previous tool then reported success, because its "no warm ink remains"
    check also could not see the text it had failed to erase. The bar is deliberately low here;
    over-detection costs a reviewer one extra numbered box, under-detection ships the claim.
    """
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (r > 95) & (r > b + 22) & (g < r + 14)


def cyan(a):
    """The cell LABEL (REVIEW / MODALITY / CLINICAL SOURCE). Drawn for orientation, never erased."""
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (b > 120) & (b > r + 40) & (g > 70)


def components(mask, gap_x, gap_y):
    """8-connected components after a rectangular dilation, as (x0,y0,x1,y1) boxes.

    Dilating before labelling is what turns letters into words: the gap inside "CLINICAL" is a
    few pixels, the gap to the next cell is tens. Run-length + union-find rather than scipy,
    which is not installed here.
    """
    h, w = mask.shape
    m = mask
    if gap_x or gap_y:
        acc = np.zeros_like(m)
        for dy in range(-gap_y, gap_y + 1):
            s = np.roll(m, dy, axis=0)
            if dy > 0:
                s[:dy] = False
            elif dy < 0:
                s[dy:] = False
            for dx in range(-gap_x, gap_x + 1):
                t = np.roll(s, dx, axis=1)
                if dx > 0:
                    t[:, :dx] = False
                elif dx < 0:
                    t[:, dx:] = False
                acc |= t
        m = acc

    parent = {}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(x, y):
        rx, ry = find(x), find(y)
        if rx != ry:
            parent[ry] = rx

    runs = []                       # per row: list of (x0, x1, label)
    nxt = 0
    prev = []
    for y in range(h):
        row = m[y]
        xs = np.flatnonzero(row)
        cur = []
        if xs.size:
            starts = [xs[0]]
            ends = []
            d = np.flatnonzero(np.diff(xs) > 1)
            for i in d:
                ends.append(xs[i]); starts.append(xs[i + 1])
            ends.append(xs[-1])
            for x0, x1 in zip(starts, ends):
                lbl = None
                for px0, px1, plbl in prev:
                    if px0 <= x1 and x0 <= px1:
                        if lbl is None:
                            lbl = find(plbl)
                        else:
                            union(lbl, plbl)
                if lbl is None:
                    lbl = nxt; parent[lbl] = lbl; nxt += 1
                cur.append((int(x0), int(x1), lbl))
        runs.append(cur)
        prev = cur

    boxes = {}
    for y, cur in enumerate(runs):
        for x0, x1, lbl in cur:
            r = find(lbl)
            if r in boxes:
                b = boxes[r]
                boxes[r] = (min(b[0], x0), min(b[1], y), max(b[2], x1), max(b[3], y))
            else:
                boxes[r] = (x0, y, x1, y)
    return list(boxes.values())


def lines_of(mask, w):
    """Words, then lines: components joined only when they sit on the same baseline and are close.

    Joining by x-proximity as well as y-overlap is the whole safety property. "CLINICAL PENDING"
    and a gold banner heading can share scanlines; they cannot be within one word-gap of each
    other AND share a baseline.
    """
    words = components(mask, gap_x=2, gap_y=1)
    words = [b for b in words if (b[2] - b[0]) >= 2 and (b[3] - b[1]) >= 4]
    words.sort(key=lambda b: (b[1], b[0]))
    lines = []
    for b in words:
        bh = b[3] - b[1] + 1
        placed = False
        for L in lines:
            lh = L[3] - L[1] + 1
            ov = min(b[3], L[3]) - max(b[1], L[1]) + 1
            if ov > 0.5 * min(bh, lh) and (b[0] - L[2]) < 2.2 * max(bh, lh) and b[0] >= L[0] - 4:
                L[0], L[1] = min(L[0], b[0]), min(L[1], b[1])
                L[2], L[3] = max(L[2], b[2]), max(L[3], b[3])
                placed = True
                break
        if not placed:
            lines.append(list(b))
    # a status value is a short phrase, never a full-width run of body copy
    return [L for L in lines if (L[2] - L[0] + 1) < 0.42 * w and (L[3] - L[1] + 1) < 90]


def page_lines(path):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im).astype(np.int16)
    h, w, _ = a.shape
    y0 = int(h * BAND)
    sub = a[y0:]
    L = lines_of(warm(sub), w)
    L.sort(key=lambda b: (b[1], b[0]))
    return im, y0, [dict(i=i + 1, x0=b[0], y0=b[1] + y0, x1=b[2], y1=b[3] + y0) for i, b in enumerate(L)], \
           [dict(x0=b[0], y0=b[1] + y0, x1=b[2], y1=b[3] + y0) for b in lines_of(cyan(sub), w)]


def annotate(im, y0, lines, labels, out_path):
    """One image per page: the footer at 2x with every warm line boxed and numbered.

    The cyan labels are outlined too, unnumbered, because the status value is identified by the
    label above it -- a reviewer needs to see REVIEW to know which warm line is the claim.
    """
    w, h = im.size
    crop = im.crop((0, y0, w, h))
    s = 2 if w <= 1100 else 1.6
    crop = crop.resize((int(crop.width * s), int(crop.height * s)), Image.LANCZOS)
    d = ImageDraw.Draw(crop)
    for b in labels:
        d.rectangle([b['x0'] * s - 2, (b['y0'] - y0) * s - 2, b['x1'] * s + 2, (b['y1'] - y0) * s + 2],
                    outline=(0, 210, 255), width=1)
    for L in lines:
        x0, yy0 = L['x0'] * s - 3, (L['y0'] - y0) * s - 3
        x1, yy1 = L['x1'] * s + 3, (L['y1'] - y0) * s + 3
        d.rectangle([x0, yy0, x1, yy1], outline=(255, 40, 90), width=2)
        tx, ty = max(0, x0 - 17), max(0, yy0 - 2)
        d.rectangle([tx, ty, tx + 15, ty + 15], fill=(255, 40, 90))
        d.text((tx + 4, ty + 3), str(L['i']), fill=(255, 255, 255))
    crop.save(out_path, quality=92)


def gallery_pages(gid):
    G = json.load(open(os.path.join(SITE, 'content', 'galleries.json')))['galleries']
    gal = G[gid]
    out = []
    for im in gal['images']:
        p = os.path.join(SITE, gal.get('base', '') or '', im['file'])
        if os.path.exists(p):
            out.append((im['n'], p))
    return sorted(out)


def propose(gids, outdir):
    os.makedirs(outdir, exist_ok=True)
    index = {}
    for gid in gids:
        gdir = os.path.join(outdir, gid)
        os.makedirs(gdir, exist_ok=True)
        index[gid] = {}
        for n, p in gallery_pages(gid):
            im, y0, lines, labels = page_lines(p)
            ann = os.path.join(gdir, f'{gid}-{n:02d}.jpg')
            annotate(im, y0, lines, labels, ann)
            index[gid][str(n)] = dict(src=p, annotated=ann, lines=lines)
            print(f'{gid}-{n:02d}  {len(lines)} warm line(s)')
    with open(os.path.join(outdir, 'lines.json'), 'w') as f:
        json.dump(index, f, indent=1)
    print(f'\n-> {outdir}/lines.json')


def any_ink(a, x0, x1):
    """Mask of anything that is not the panel, measured against each row's own background.

    Colour-keying cannot be used for the growth step. On meningitis p3 the word "Clinical" is
    set in a gradient that starts CYAN and ends gold, so its leading C is not warm ink at all;
    the warm mask broke the component there and erasing the box as picked left a lone C sitting
    under the REVIEW label. Distance-from-background sees the whole word regardless of hue.
    """
    h, w, _ = a.shape
    gl, gr = max(0, x0 - 55), max(1, x0 - 8)
    if gr - gl < 8:
        gl, gr = min(w - 1, x1 + 8), min(w, x1 + 55)
    bg = np.median(a[:, gl:gr, :], axis=1)[:, None, :]
    return np.abs(a - bg).max(axis=2) > 30


def grow_to_ink(mask, b, limit=16):
    """Extend a chosen box outward while ink is still touching its edge.

    A reviewer flagged meningitis p3, where the box around "Clinical" stopped short of its
    leading C. Picking the box was right; erasing exactly it would have left a stray letter in
    the REVIEW cell. Growth is capped and reported: if a box wants more than `limit` px on a
    side it has almost certainly latched onto a neighbour, and the page is refused rather than
    smeared.
    """
    h, w = mask.shape
    x0, y0, x1, y1 = b['x0'], b['y0'], b['x1'], b['y1']
    grown = 0
    for _ in range(limit):
        moved = False
        if x0 > 0 and mask[y0:y1 + 1, x0 - 1].any():
            x0 -= 1; moved = True
        if x1 < w - 1 and mask[y0:y1 + 1, x1 + 1].any():
            x1 += 1; moved = True
        if y0 > 0 and mask[y0 - 1, x0:x1 + 1].any():
            y0 -= 1; moved = True
        if y1 < h - 1 and mask[y1 + 1, x0:x1 + 1].any():
            y1 += 1; moved = True
        if not moved:
            break
        grown += 1
    hit_cap = grown >= limit
    return dict(x0=x0, y0=y0, x1=x1, y1=y1, i=b.get('i')), grown, hit_cap


def erase_boxes(src, dst, boxes):
    """Delete the ink inside the given boxes, filling from the panel beside each row.

    The fill is sampled per row from the gutter next to the box rather than set to a flat colour:
    the panel carries a vertical gradient, so #000 would leave a visible rectangle where the words
    were. Confinement is asserted against the in-memory array, not the saved JPEG -- re-encoding
    perturbs the whole frame and swamped this check with 43k pixels of codec noise the first time
    it was written.
    """
    # Keep the UNCONVERTED handle: .convert() returns a new Image that has dropped the JPEG
    # quantization tables, so passing the converted one to save_like() silently fell back to a
    # fixed quality and re-quantized the whole page after all.
    im = Image.open(src)
    a = np.asarray(im.convert('RGB')).astype(float)
    h, w, _ = a.shape
    out = a.copy()
    pad = 3

    grown_boxes, notes = [], []
    for b in boxes:
        nb, grew, capped = grow_to_ink(any_ink(a, b['x0'], b['x1']), b)
        if capped:
            return False, f'box {b.get("i")} still finding ink after 16px of growth'
        if grew:
            notes.append(f'box {b.get("i")} grew {grew}px')
        grown_boxes.append(nb)
    boxes = grown_boxes

    for b in boxes:
        x0, y0, x1, y1 = b['x0'] - pad, b['y0'] - pad, b['x1'] + pad, b['y1'] + pad
        x0, y0 = max(0, x0), max(0, y0)
        x1, y1 = min(w - 1, x1), min(h - 1, y1)
        gl, gr = max(0, x0 - 45), max(1, x0 - 6)
        if gr - gl < 8:
            gl, gr = min(w - 1, x1 + 6), min(w, x1 + 45)
        if gr - gl < 8:
            return False, 'no clean gutter beside the box to sample the panel from'
        for y in range(y0, y1 + 1):
            out[y, x0:x1 + 1] = np.median(a[y, gl:gr, :], axis=0)

    diff = np.abs(out - a).max(axis=2)
    for b in boxes:
        diff[max(0, b['y0'] - pad):b['y1'] + pad + 1, max(0, b['x0'] - pad):b['x1'] + pad + 1] = 0
    stray = int((diff > 0).sum())
    if stray:
        return False, f'{stray}px would change outside the chosen boxes'

    save_like(Image.fromarray(out.round().astype(np.uint8)), im, dst)

    # and prove the ink is gone where it was, reading the file back off disk
    chk = warm(np.asarray(Image.open(dst).convert('RGB')).astype(np.int16))
    left = sum(int(chk[b['y0']:b['y1'] + 1, b['x0']:b['x1'] + 1].sum()) for b in boxes)
    area = sum((b['x1'] - b['x0'] + 1) * (b['y1'] - b['y0'] + 1) for b in boxes)
    if left > max(8, area * 0.002):
        return False, f'{left} warm px still inside the boxes'
    return True, f'{len(boxes)} box(es), {area}px' + ('; ' + ', '.join(notes) if notes else '')


def apply(picks_path):
    picks = json.load(open(picks_path))
    idx = json.load(open(picks['lines']))
    outdir = picks['outdir']
    os.makedirs(outdir, exist_ok=True)
    ok = skipped = failed = 0
    log = []
    for gid, pages in picks['picks'].items():
        for n, sel in sorted(pages.items(), key=lambda kv: int(kv[0])):
            rec = idx[gid][n]
            if not sel:
                print(f'  --      {gid}-{int(n):02d}  no line picked')
                log.append(dict(gid=gid, n=int(n), status='skipped'))
                skipped += 1
                continue
            boxes = [L for L in rec['lines'] if L['i'] in sel]
            if len(boxes) != len(sel):
                print(f'  FAIL    {gid}-{int(n):02d}  pick names a line that does not exist')
                log.append(dict(gid=gid, n=int(n), status='bad-pick'))
                failed += 1
                continue
            gd = os.path.join(outdir, gid)
            os.makedirs(gd, exist_ok=True)
            dst = os.path.join(gd, os.path.basename(rec['src']))
            good, msg = erase_boxes(rec['src'], dst, boxes)
            print(('  ok      ' if good else '  FAIL    ') + f'{gid}-{int(n):02d}  {msg}')
            log.append(dict(gid=gid, n=int(n), status='ok' if good else 'failed',
                            msg=msg, dst=dst if good else None, boxes=boxes))
            ok += good
            failed += (not good)
    print(f'\n{ok} erased, {skipped} skipped, {failed} failed')
    with open(os.path.join(outdir, 'applied.json'), 'w') as f:
        json.dump(log, f, indent=1)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--gallery', action='append', default=[])
    ap.add_argument('--outdir')
    ap.add_argument('--apply')
    a = ap.parse_args()
    if a.apply:
        apply(a.apply)
    elif a.gallery and a.outdir:
        propose(a.gallery, a.outdir)
    else:
        sys.exit('need --gallery <id> ... --outdir <dir>, or --apply <picks.json>')
