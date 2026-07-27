"""Replace a wrong logo lockup on rendered gallery pages with the canonical one.

The production process keeps getting the lockup wrong, and not the same way twice. Across the
Hyperparathyroidism set (the case this was written for): eight pages drew a spurious "R" or
"Rx" INSIDE the emblem circle, one had no emblem at all, all ten dropped the lens flare, and
two sat the lockup on a slightly lighter grey plate that reached past the artwork. Position and
size drift as well (page 6 at x 22-214, page 3 at x 25-265).

So each page is measured on its own, and the replacement is then drawn at ONE fixed size and
position, so the header does not jump while swiping through the gallery.

The page frame draws a thin rule across the top (row 3-8) and another below the header
(row 81-96). Both are full width, so the erase is clamped between them and the emblem search
ignores columns 0-11 where the frame's left rule runs.
"""
import os
import sys
import glob

from PIL import Image
import numpy as np

LOGO_PATH = os.environ.get("RC_LOGO", "logo-trim.png")   # canonical lockup, trimmed, on black
LOGO = Image.open(LOGO_PATH).convert("RGB")
ASPECT = LOGO.width / LOGO.height

INK = 55           # header background is near-black; artwork ink is far above this
GAP = 28           # columns of clear space that mean the wordmark has ended
FRAME_X = 12       # right of the frame's left rule

# Where the lockup is drawn. The height is a fallback — placement() measures the set and
# returns the largest size the tightest page can take.
PLACE_X, PLACE_Y, PLACE_H = 20, 14, 56


def rules(a, W):
    """(bottom of the top rule, top of the header rule) — the band the lockup lives in."""
    wide = (a[0:140, int(W * 0.4):int(W * 0.88)].max(axis=2) > INK).mean(axis=1) > 0.5
    rows = np.where(wide)[0]
    top = rows[rows < 20].max() + 1 if len(rows[rows < 20]) else 0
    below = rows[rows > 40].min() - 1 if len(rows[rows > 40]) else 130
    return int(top), int(below)


def lockup(a, W, H):
    """(x0, y0, x1, y1) of the existing lockup. Falls back to the wordmark when the emblem
    is missing, as on page 5."""
    top, below = rules(a, W)
    YB = min(below, int(H * 0.09))
    m = a[0:YB, FRAME_X:int(W * 0.14)].max(axis=2) > INK

    # The emblem is tall: its columns cross far more rows than a 3 px rule does.
    tall = np.where(m.sum(axis=0) >= YB * 0.25)[0]
    if len(tall):
        rows = np.where(m[:, tall].sum(axis=1) > 3)[0]
        runs, s, e = [], rows[0], rows[0]
        for r in rows[1:]:
            if r - e <= 3:
                e = r
            else:
                runs.append((s, e)); s = e = r
        runs.append((s, e))
        y0, y1 = max(runs, key=lambda r: r[1] - r[0])
        cols = np.where(m[y0:y1 + 1].sum(axis=0) > 0)[0]
        x0, xseed = FRAME_X + int(cols.min()), FRAME_X + int(cols.max())
    else:
        # No emblem — bound the wordmark instead, across the whole header band.
        band = a[top + 2:below - 1, FRAME_X:int(W * 0.45)].max(axis=2) > INK
        rows = np.where(band.sum(axis=1) > 2)[0]
        cols = np.where(band.sum(axis=0) > 0)[0]
        if not len(rows) or not len(cols):
            return None
        # Take the widest block of inked columns: the wordmark. Anything left of it is a stray
        # frame pixel, anything right of it is the centred "IMAGE n OF 10" group.
        blocks, s, e = [], cols[0], cols[0]
        for c in cols[1:]:
            if c - e < GAP:
                e = c
            else:
                blocks.append((s, e)); s = e = c
        blocks.append((s, e))
        _, bx1 = max(blocks, key=lambda b: b[1] - b[0])
        # Erase from the frame inwards and over the full band height: this page also carries a
        # stray vertical scratch to the left of the wordmark, and nothing else lives in there.
        return FRAME_X, top + 1, FRAME_X + int(bx1), below - 1

    y0, y1 = max(y0, top), min(y1, below)
    if y1 - y0 < int(H * 0.02):
        return None

    # Walk right through the wordmark, on core rows only so the frame rules cannot extend it.
    inset = max(2, int((y1 - y0) * 0.18))
    ink = (a[y0 + inset:y1 - inset + 1, :].max(axis=2) > INK).sum(axis=0)
    x1, gap = xseed, 0
    for x in range(xseed + 1, min(W, int(W * 0.45))):
        if ink[x] > 0:
            x1, gap = x, 0
        else:
            gap += 1
            if gap >= GAP:
                break
    # The measured box hugs the ink; a few pixels of padding takes the soft outer glow with it.
    return (max(FRAME_X, x0 - 4), max(top + 1, int(y0) - 3),
            int(x1) + 8, min(below - 1, int(y1) + 8))


SIZE = (1024, 1536)   # pages sometimes arrive a pixel short; a gallery ships one uniform size


def placement(paths):
    """One (x, y, height) for the whole set, from the page with the least room.

    Drawing every page's logo at the same size and position is the point: measured per page it
    would jitter by ten pixels or more as you swipe, which is far more visible than the lockup
    being a few pixels smaller than the artwork it replaces.
    """
    heights = []
    for f in paths:
        im = Image.open(f).convert("RGB")
        a = np.asarray(im).astype(int)
        box = lockup(a, *im.size)
        if box is None:                      # e.g. a page whose emblem is missing entirely
            continue
        x0, y0, x1, y1 = box
        heights.append(min(y1 - y0 + 1, round((x1 - x0 + 1) / ASPECT)))
    if not heights:
        raise SystemExit("no lockup found on any page")
    return PLACE_X, PLACE_Y, min(heights)


def render(path, out, quality=88, place=None):
    im = Image.open(path).convert("RGB")
    W, H = im.size
    a = np.asarray(im).astype(int)
    box = lockup(a, W, H)
    if box is None:
        return None
    x0, y0, x1, y1 = box

    # Some pages render the lockup on a slightly lighter grey plate that reaches past the
    # artwork (page 3's runs to x 318). Erasing only the ink leaves that plate as a visible box
    # floating in the header, so measure it and take it too. It is dim — a few levels above the
    # page background, far below anything that counts as ink — which is what identifies it.
    top, below = rules(a, W)
    bg = np.median(a[top + 1:below, int(W * 0.68):int(W * 0.88)].reshape(-1, 3), axis=0).mean()
    band = a[top + 1:below, 0:int(W * 0.45)]
    plate = ((band.mean(axis=2) > bg + 2) & (band.max(axis=2) <= INK)).mean(axis=0) > 0.5
    px = np.where(plate)[0]
    if len(px):
        # never left of FRAME_X: the frame's own rule lives there and must survive
        x0, x1 = max(FRAME_X, min(x0, int(px.min()))), max(x1, int(px.max()))
        y0, y1 = min(y0, top + 1), max(y1, below - 1)

    # Erase to the page's own background. The header carries a faint vertical gradient, so each
    # row is filled from a clear strip to the right rather than with one flat colour.
    sx0, sx1 = min(W - 1, x1 + 40), min(W, x1 + 110)
    arr = np.asarray(im).copy()
    for y in range(y0, y1 + 1):
        arr[y, x0:x1 + 1] = np.median(a[y, sx0:sx1], axis=0).astype(np.uint8)
    base = Image.fromarray(arr)

    lx, ly, nh = place or (PLACE_X, PLACE_Y, PLACE_H)
    nw = round(nh * ASPECT)
    lg = LOGO.resize((nw, nh), Image.LANCZOS)
    reg = np.asarray(base.crop((lx, ly, lx + nw, ly + nh))).astype(int)
    lga = np.asarray(lg).astype(int)[:reg.shape[0], :reg.shape[1]]
    base.paste(Image.fromarray(np.maximum(reg, lga).astype(np.uint8)), (lx, ly))

    if base.size != SIZE:
        base = base.resize(SIZE, Image.LANCZOS)
    if out:
        base.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
    return {"erased": (x0, y0, x1, y1), "logo": (lx, ly, nw, nh)}


def main():
    """python3 scripts/fix_page_logo.py <src-dir> <out-dir>   (set RC_LOGO to the lockup PNG)"""
    if len(sys.argv) != 3:
        sys.exit(main.__doc__)
    src, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    files = sorted(f for f in glob.glob(os.path.join(src, "*"))
                   if f.lower().endswith((".png", ".jpg", ".jpeg")))
    if not files:
        sys.exit("no pages in " + src)
    place = placement(files)                      # pass 1: one size for the whole set
    print("  logo %dx%d at (%d, %d)" % (round(place[2] * ASPECT), place[2], place[0], place[1]))
    for f in files:                               # pass 2: render
        dest = os.path.join(out, os.path.splitext(os.path.basename(f))[0] + ".jpg")
        r = render(f, dest, place=place)
        print("  %-30s %s" % (os.path.basename(f),
                              "erased " + str(r["erased"]) if r else "NO LOCKUP FOUND"))
    print("%d pages -> %s" % (len(files), out))


if __name__ == "__main__":
    main()
