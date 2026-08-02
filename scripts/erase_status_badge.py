#!/usr/bin/env python3
"""Erase the false review status from gallery footer artwork. Removes only; renders nothing.

    python3 scripts/erase_status_badge.py --pages <file> --outdir <dir>

The physician has reviewed every page, so a footer cell reading CLINICAL PENDING / Clinical
Pending / CLINICAL PEERED is factually wrong. This deletes those words and leaves the panel
behind them, so the artwork stops making a claim that is untrue.

WHY THIS SUCCEEDS WHERE THE REPLACEMENT ATTEMPT FAILED

Two earlier attempts rendered "ROUNDS CODEX / VERIFIED" into the cell and produced visibly
damaged pages -- see galleries-staging/BADGE-AUDIT/WHY-NOT-REPAINTED.md. Both failures came from
things this does not do:

  * no type is rendered, so nothing has to be sized, fitted or font-matched;
  * nothing is written outside the pixels being removed, so there is no overflow into a
    neighbouring cell.

The one shared risk is picking the wrong target, and that is what the guards below are for. The
sepsis failure happened because a whole-footer search caught the orange "ACT IMMEDIATELY" banner
a row above the metadata bar. So the search is constrained three ways: to the right-hand column,
to the LOWEST warm group in it, and to a group narrow enough to be a status cell rather than a
banner. Anything ambiguous is refused and goes to production.

FILL COLOUR

The panel is not pure black -- it is a dark navy carrying a gradient. Filling with #000 would
leave a visible rectangle, so each row is filled with the panel colour sampled from that same row
just beside the text. The result is that the words disappear rather than being blacked out.
"""
import argparse, io, os, sys
import numpy as np
from PIL import Image

# Only look in the right-hand column: the status cell is the last cell of the metadata bar.
RIGHT = 0.78
# A status value sits at the very bottom. The banner that broke the first attempt sits higher.
LOWEST = 0.90
# A status value is a short stack of words, not a full-width banner.
MAX_W_FRAC = 0.22
MAX_LINES = 3


def cool(a):
    """The cyan cell LABEL ("REVIEW" / "EVIDENCE"), as distinct from the warm value below it."""
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (b > 130) & (b > r + 45) & (g > 70)


def warm(a):
    """Status-value ink: gold, amber, orange or red. The cyan label is deliberately excluded."""
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    return (r > 140) & (b < 125) & (r > b + 55) & (g < r + 12)


def groups(mask, gap=None):
    """Row runs, merged across small vertical gaps so a two-line value is one group.

    The gap is ADAPTIVE, not a constant. A fixed 6px split "CLINICAL" from "PENDING" on every
    page -- their baselines are ~9px apart at a 10px cap -- so only the second word was erased
    and a dangling "CLINICAL" was left behind. Leading scales with type size, so the threshold
    has to as well: merge when the gap is no wider than the run above it is tall.
    """
    rs = mask.sum(axis=1)
    runs, y = [], 0
    while y < len(rs):
        if rs[y] > 1:
            y2 = y
            while y2 < len(rs) and rs[y2] > 1:
                y2 += 1
            runs.append([y, y2 - 1])
            y = y2
        y += 1
    out = []
    for r in runs:
        if out:
            prev_h = out[-1][1] - out[-1][0] + 1
            allow = gap if gap is not None else max(6, int(prev_h * 1.4))
            if r[0] - out[-1][1] <= allow:
                out[-1][1] = r[1]
                continue
        out.append(r)
    return out


def erase(path, out_path):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im).astype(float)
    h, w, _ = a.shape
    xoff = int(w * RIGHT)
    band = a[:, xoff:, :]
    m = warm(band)
    m[:int(h * 0.80), :] = False          # footer only
    if m.sum() < 20:
        return False, 'no warm status ink in the right-hand footer column', None

    gs = groups(m)
    if not gs:
        return False, 'warm ink present but no text group', None
    top, bot = gs[-1]                      # LOWEST group: the status value
    if bot < h * LOWEST:
        return False, f'lowest warm group ends at y={bot} ({bot/h:.3f}h), above the status row', None

    sub = m[top:bot + 1]
    xs = np.where(sub.sum(axis=0) > 0)[0]
    x0, x1 = int(xs.min()) + xoff, int(xs.max()) + xoff
    if (x1 - x0 + 1) > w * MAX_W_FRAC:
        return False, f'group is {x1-x0+1}px wide ({(x1-x0+1)/w:.2f}w) -- looks like a banner', None
    nlines = len(groups(sub, gap=2))
    if nlines > MAX_LINES:
        return False, f'{nlines} lines -- not a status value', None

    # background sampled per row from the gutter beside the text, inside the same cell
    gl, gr = max(0, x0 - 40), max(1, x0 - 5)
    if gr - gl < 8:
        gl, gr = min(w - 1, x1 + 5), min(w, x1 + 40)
    if gr - gl < 8:
        return False, 'no clean gutter beside the status text to sample the panel from', None

    out = a.copy()
    pad = 3

    # LABEL REMOVAL WAS TRIED AND REMOVED. Blanking the cyan "REVIEW" label as well looked
    # tidier -- an empty cell rather than a header with nothing under it -- but the detector
    # could not reliably tell a one-word label from cyan BODY text on the row above. On hiv it
    # grabbed "(Undetectable = Untransmittable)." and erased half of it. The label is left in
    # place: a header with no value is cosmetically imperfect, whereas eating a sentence is
    # damage. Value-only is clean on every page tested.
    for y in range(max(0, top - pad), min(h, bot + pad + 1)):
        out[y, max(0, x0 - pad):min(w, x1 + pad + 1)] = np.median(a[y, gl:gr, :], axis=0)

    # CONFINEMENT, asserted in memory before anything is written. Comparing the saved JPEG
    # against the original cannot do this: re-encoding shifts pixels across the whole frame, so
    # the diff is swamped by codec noise (43k "changed" pixels on a clean sepsis erase). Diffing
    # the arrays isolates exactly what this function touched -- which is the property that
    # matters, and the one the abandoned label pass would have failed on hiv.
    diff = np.abs(out - a).max(axis=2)
    diff[max(0, top - pad):bot + pad + 1, max(0, x0 - pad):x1 + pad + 1] = 0
    stray = int((diff > 0).sum())
    if stray:
        ys, xs = np.where(diff > 0)
        return False, f'refusing: {stray}px would change outside the box (y{ys.min()}-{ys.max()})', None

    Image.fromarray(out.round().astype(np.uint8)).save(out_path, 'JPEG', quality=88, optimize=True)
    # prove it: no warm ink left where the text was
    chk = warm(np.asarray(Image.open(out_path).convert('RGB')).astype(float))
    left = int(chk[top:bot + 1, x0:x1 + 1].sum())
    if left > 8:
        return False, f'erase incomplete -- {left} warm pixels remain', None
    return True, f'erased {x1-x0+1}x{bot-top+1}px at ({x0},{top}), {nlines} line(s)', (x0, top, x1, bot)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--pages', required=True)
    ap.add_argument('--outdir', required=True)
    ap.add_argument('--boxes', help='write src/dst/box tuples here for the confinement check')
    a = ap.parse_args()
    os.makedirs(a.outdir, exist_ok=True)
    ok = bad = 0
    boxes = []
    for line in io.open(a.pages, encoding='utf-8'):
        p = line.strip()
        if not p:
            continue
        dst = os.path.join(a.outdir, os.path.basename(p))
        good, msg, box = erase(p, dst)
        print(('  ok      ' if good else '  REFUSED ') + f'{os.path.basename(p):30s} {msg}')
        if good:
            boxes.append('\t'.join([p, dst] + [str(v) for v in box]))
        ok, bad = ok + good, bad + (not good)
    print(f'\n{ok} erased, {bad} refused')
    if a.boxes:
        io.open(a.boxes, 'w', encoding='utf-8').write('\n'.join(boxes) + '\n')
        print(f'boxes -> {a.boxes}')
