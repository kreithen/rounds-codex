#!/usr/bin/env python3
"""
Erase burned-in text labels from a generated medical image.

A label that names the finding turns a test item into a free point, so it has to go. But
"remove the text" is only safe where the text sits on FEATURELESS background. Painting over
anatomy - inpainting ultrasound speckle, filling in tissue - fabricates medical image content,
and a plausible invented texture next to a real finding is worse than the label ever was.

So this tool does one narrow thing and refuses everything else:

  * It fills only inside boxes you name explicitly. It never hunts for text on its own.
  * It REFUSES a box that contains any structure (saturated pixels for a stained smear,
    non-uniform luminance for a grayscale study). "No structure" is the whole licence.
  * It fills by fitting a first-order PLANE to the ring of background around the box and
    adding noise matched to that ring's standard deviation. A plane cannot invent an edge,
    a mass or a boundary - the worst it can do is be slightly the wrong shade.
  * It writes a report of what it changed and how far the result drifts from the ring.

If a label sits on the finding itself, this tool is the wrong answer and the image should be
re-generated instead. That is not a limitation to work around; it is the point.

Usage:
  python3 tools/erase_image_labels.py --image usmle/img/s1-0030.jpg \
      --box 101,133,503,160 --box 802,181,927,204 --out out.jpg [--dry-run]
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image

# A box that passes the gate contains nothing but background and ink, so the whole interior is
# replaced rather than only the pixels that look like ink. Thresholding the glyphs leaves their
# antialiased edges behind, and those edges are still READABLE - the first attempt at this
# erased the strokes and left four legible ghost words.
GAP = 6          # buffer around the box, also replaced: glyph antialiasing spills past the bbox
RING = 10        # ring sampled beyond the gap, so faint text cannot contaminate the plane fit
FEATHER = 3      # blend width at the patch border, so no seam appears
SAT_STRUCTURE = 55   # saturation at/above which a pixel is stained structure, not background


def dilate(mask, n):
    out = mask.copy()
    for _ in range(n):
        g = out.copy()
        g[1:, :] |= out[:-1, :]; g[:-1, :] |= out[1:, :]
        g[:, 1:] |= out[:, :-1]; g[:, :-1] |= out[:, 1:]
        out = g
    return out


def plane_fit(vals, ys, xs):
    """Least-squares a*x + b*y + c. Falls back to the mean if the system is degenerate."""
    A = np.column_stack([xs, ys, np.ones(len(xs))]).astype(np.float64)
    try:
        coef, *_ = np.linalg.lstsq(A, vals.astype(np.float64), rcond=None)
        return coef
    except np.linalg.LinAlgError:
        return np.array([0.0, 0.0, float(vals.mean())])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--image", required=True)
    ap.add_argument("--box", action="append", required=True,
                    help="x0,y0,x1,y1 of a text label (repeatable)")
    ap.add_argument("--out", required=True)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--grayscale", action="store_true",
                    help="image has no stain colour, so judge structure by luminance spread")
    ap.add_argument("--max-ring-std", type=float, default=26.0,
                    help="refuse a box whose surrounding ring is busier than this")
    ap.add_argument("--seed", type=int, default=12345)
    a = ap.parse_args()

    rng = np.random.default_rng(a.seed)
    src = Image.open(a.image)
    qtables = getattr(src, "quantization", None)
    im = src.convert("RGB")
    arr = np.asarray(im).astype(np.float64)
    H, W, _ = arr.shape
    lum = arr.mean(axis=2)
    sat = arr.max(axis=2) - arr.min(axis=2)

    boxes = []
    for b in a.box:
        x0, y0, x1, y1 = (int(v) for v in b.split(","))
        boxes.append((x0, y0, x1, y1))

    out = arr.copy()
    report, refused = [], []

    PAD = GAP + RING
    for i, (x0, y0, x1, y1) in enumerate(boxes, 1):
        X0, Y0 = max(0, x0 - PAD), max(0, y0 - PAD)
        X1, Y1 = min(W - 1, x1 + PAD), min(H - 1, y1 + PAD)
        sub = arr[Y0:Y1 + 1, X0:X1 + 1]
        sl = lum[Y0:Y1 + 1, X0:X1 + 1]
        ss = sat[Y0:Y1 + 1, X0:X1 + 1]
        h, w, _ = sub.shape
        yy, xx = np.mgrid[0:h, 0:w]

        # target = the box plus the gap; ring = strictly outside that, so glyph antialiasing
        # spilling past the bbox cannot skew the plane we fit to the background.
        target = ((xx >= x0 - GAP - X0) & (xx <= x1 + GAP - X0) &
                  (yy >= y0 - GAP - Y0) & (yy <= y1 + GAP - Y0))
        ring = np.zeros((h, w), bool)
        ring[:RING, :] = ring[-RING:, :] = True
        ring[:, :RING] = ring[:, -RING:] = True
        ring &= ~target

        # --- the refusal gate -------------------------------------------------
        structure = (ss >= SAT_STRUCTURE) & target
        if structure.any():
            refused.append((i, f"{int(structure.sum())} stained-structure pixels inside the box"))
            continue
        if ring.sum() < 200:
            refused.append((i, "box is too close to the image edge to sample a background ring"))
            continue
        ring_vals = sl[ring]
        ring_std, ring_mean = float(ring_vals.std()), float(ring_vals.mean())
        if ring_std > a.max_ring_std:
            refused.append((i, f"background ring is not featureless (std {ring_std:.1f} > "
                               f"{a.max_ring_std}); filling here would invent texture"))
            continue

        # feathered alpha: 1 across the target, ramping to 0 across FEATHER px outside it
        dist = np.zeros((h, w), np.float64)
        d = target.copy()
        for k in range(FEATHER):
            g = dilate(d, 1)
            dist[g & ~d] = (FEATHER - k) / (FEATHER + 1.0)
            d = g
        alpha = np.where(target, 1.0, dist)

        for c in range(3):
            vals, ry, rx = sub[:, :, c][ring], yy[ring], xx[ring]
            coef = plane_fit(vals, ry, rx)
            # The grain to imitate is the RESIDUAL after the gradient is removed, not the ring's
            # raw spread - that spread is mostly the gradient itself, and using it painted a
            # visibly grainy rectangle over smooth plasma. Estimate it robustly (MAD), so one
            # stray edge in the ring cannot inflate it, and refit without the outliers.
            resid = vals - (coef[0] * rx + coef[1] * ry + coef[2])
            sigma = 1.4826 * np.median(np.abs(resid - np.median(resid)))
            good = np.abs(resid) <= 3 * max(sigma, 0.5)
            if good.sum() > 50:
                coef = plane_fit(vals[good], ry[good], rx[good])
                resid = vals[good] - (coef[0] * rx[good] + coef[1] * ry[good] + coef[2])
                sigma = 1.4826 * np.median(np.abs(resid - np.median(resid)))
            plane = coef[0] * xx + coef[1] * yy + coef[2]
            noise = rng.normal(0.0, max(sigma, 0.3), size=(h, w))
            patch = np.clip(plane + noise, 0, 255)
            reg = out[Y0:Y1 + 1, X0:X1 + 1, c]
            out[Y0:Y1 + 1, X0:X1 + 1, c] = reg * (1 - alpha) + patch * alpha
            if c == 1:
                grain = round(float(sigma), 2)

        filled = out[Y0:Y1 + 1, X0:X1 + 1].mean(axis=2)[target]
        report.append({"box": i, "rect": [x0, y0, x1, y1], "replaced_px": int(target.sum()),
                       "ring_mean": round(ring_mean, 1), "ring_std": round(ring_std, 1),
                       "filled_mean": round(float(filled.mean()), 1), "grain_sigma": grain,
                       "drift_from_ring": round(float(filled.mean()) - ring_mean, 1)})

    for i, why in refused:
        print(f"REFUSED box {i}: {why}", file=sys.stderr)
    for r in report:
        print(f"box {r['box']} {r['rect']}  replaced {r['replaced_px']:5d}px  "
              f"ring {r['ring_mean']}±{r['ring_std']}  grain {r['grain_sigma']}  filled {r['filled_mean']}  "
              f"drift {r['drift_from_ring']:+.1f}")

    changed = int((np.abs(out - arr).max(axis=2) > 0).sum())
    print(f"\npixels changed: {changed}")
    if refused and not report:
        print("nothing written - every box was refused")
        return 2
    if a.dry_run:
        print("dry run - not written")
        return 0

    res = Image.fromarray(out.round().astype(np.uint8))
    kw = dict(optimize=True, subsampling=0)
    if qtables:
        kw["qtables"] = qtables
    else:
        kw["quality"] = 92
    res.save(a.out, "JPEG", **kw)
    json.dump({"image": a.image, "boxes": report, "refused": refused,
               "pixels_changed": changed}, open(a.out + ".erase.json", "w"), indent=1)
    print(f"wrote {a.out} ({os.path.getsize(a.out)/1e3:.0f} kB)")
    return 1 if refused else 0


if __name__ == "__main__":
    sys.exit(main())
