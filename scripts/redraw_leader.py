#!/usr/bin/env python3
"""Move one mislabelled leader line to the structure it names, without regenerating the page.

WHY THIS EXISTS

The label-QA sweep found 323 leader lines that do not land on the structure they name. Two ways
to fix one: have production re-render from source (best), or regenerate the panel through an
image model. The model route works (see HIGGSFIELD-CORRECTION-PILOT.md) but it repaints the whole
panel - every label, the border, the artwork - so it has to be proofread end to end, and on the
aortic-dissection page it silently dropped one of the six leaders.

For this defect class none of that is necessary. A leader is a thin pale stroke ending in a dot,
drawn over background the artwork already contains on both sides of it. Erasing and redrawing one
is a deterministic operation: it touches only the pixels along the old and new strokes, leaves
every other pixel byte-identical, and keeps the page at its native resolution.

TWO THINGS THAT MATTER, both learned by getting them wrong first

1. Erase by INTERPOLATING the clean samples either side of the stroke, not by taking their median.
   A median picks one side or the other and leaves a visible trail wherever the background is a
   gradient - which is most of these pages, between the ghost ribcage and the organs.
2. Draw the new stroke SUPERSAMPLED (4x then LANCZOS down). A 1px aliased diagonal renders as a
   dotted line and does not match the other leaders.

This is not a licence to repaint artwork generally. `DOTS-defect-for-production.md` records a
failed attempt to repaint header progress dots; that failed because it had to reconstruct glyphs
over artwork whose position drifted between pages. This only reconstructs background under a
straight stroke, and the result is checked with a difference bounding box before it is accepted.

Usage:
  python3 scripts/redraw_leader.py <page.jpg> --from 133,419 --old 378,395 --new 462,232 \
      --out fixed.png
"""
import argparse, math
from PIL import Image, ImageDraw, ImageFilter, ImageChops

STROKE = (198, 201, 206)
DOT    = (240, 242, 246)


def pt(s):
    x, y = s.split(","); return (int(x), int(y))


def erase(img, a, b, off=11, half=4.0):
    """Repaint the stroke a->b from the clean pixels `off` away on each side."""
    W, H = img.size
    ref = img.copy().load(); px = img.load()
    dx, dy = b[0] - a[0], b[1] - a[1]
    L = math.hypot(dx, dy)
    if L == 0: return
    ux, uy = dx / L, dy / L
    nx, ny = -uy, ux
    for i in range(int(L) + 3):
        cx, cy = a[0] + ux * (i - 1), a[1] + uy * (i - 1)
        pa = (int(round(cx + nx * off)), int(round(cy + ny * off)))
        pb = (int(round(cx - nx * off)), int(round(cy - ny * off)))
        if not (0 <= pa[0] < W and 0 <= pa[1] < H and 0 <= pb[0] < W and 0 <= pb[1] < H):
            continue
        ca, cb = ref[pa], ref[pb]
        t = -half
        while t <= half:
            X, Y = int(round(cx + nx * t)), int(round(cy + ny * t))
            if 0 <= X < W and 0 <= Y < H:
                f = (t + off) / (2 * off)
                px[X, Y] = tuple(int(round(cb[k] + (ca[k] - cb[k]) * f)) for k in range(3))
            t += 0.5


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("page")
    ap.add_argument("--from", dest="a", required=True, type=pt, help="the label's own dot")
    ap.add_argument("--old", required=True, type=pt, help="where the leader wrongly ends")
    ap.add_argument("--new", required=True, type=pt, help="where it should end")
    ap.add_argument("--out", required=True)
    ap.add_argument("--width", type=int, default=1)
    ap.add_argument("--dot", type=float, default=3.2)
    a = ap.parse_args()

    base = Image.open(a.page).convert("RGB")
    W, H = base.size
    img = base.copy()

    erase(img, a.a, a.old)
    # blur only the repaired strip, so the seam disappears without touching the artwork
    strip = Image.new("L", (W, H), 0)
    ImageDraw.Draw(strip).line([a.a, a.old], fill=255, width=13)
    img = Image.composite(img.filter(ImageFilter.GaussianBlur(1.1)), img, strip)

    S = 4
    ov = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    od.line([(a.a[0] * S, a.a[1] * S), (a.new[0] * S, a.new[1] * S)],
            fill=STROKE + (255,), width=a.width * S)
    od.ellipse([(a.new[0] - a.dot) * S, (a.new[1] - a.dot) * S,
                (a.new[0] + a.dot) * S, (a.new[1] + a.dot) * S], fill=DOT + (255,))
    img = Image.alpha_composite(img.convert("RGBA"), ov.resize((W, H), Image.LANCZOS)).convert("RGB")

    img.save(a.out)
    bb = ImageChops.difference(base, img).convert("L").getbbox()
    print(f"wrote {a.out}\nchanged region: {bb}  (everything outside is byte-identical)")


if __name__ == "__main__":
    main()
