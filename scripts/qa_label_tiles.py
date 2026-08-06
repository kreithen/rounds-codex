#!/usr/bin/env python3
"""Cut a gallery page into overlapping 2x tiles so leader lines can actually be traced.

Written for the label-QA sweep of 2026-08-06: the physician reported that on many anatomy
pages the leader line from a label does not land on the structure it names.

WHY TILES AND NOT JUST THE PAGE

A shipped page is 1024x1536. At that size a leader line is one or two pixels wide and its
endpoint sits inside dense artwork, so reading the whole page at once is exactly the mistake
that made the header-dot counts wrong seven times. The endpoint has to be magnified before it
can be judged. There is no higher-resolution master - 1024x1536 IS the source - so this
upscales with LANCZOS, which does not add detail but does make a two-pixel line followable.

The tiles overlap by 12% because a leader line that crosses a tile boundary is unreadable
otherwise: you see it enter and never see it land.

Usage:
  python3 scripts/qa_label_tiles.py <gallery-id> <page> [--out DIR] [--zoom 2] [--site PATH]

Writes  <out>/<gid>-<pp>-full.jpg   the whole page, for orientation
        <out>/<gid>-<pp>-r<c>.jpg   tiles, row/column indexed from 0
"""
import argparse, json, os, sys
from PIL import Image

SITE = "/workspace/rounds-codex-app"


def page_path(site, gid, page):
    G = json.load(open(os.path.join(site, "content", "galleries.json")))["galleries"]
    if gid not in G:
        sys.exit(f"no gallery {gid!r}")
    g = G[gid]
    for im in g["images"]:
        if int(im["n"]) == int(page):
            return os.path.join(site, os.path.normpath(g.get("base", "") + im["file"])), im["title"]
    sys.exit(f"gallery {gid!r} has no page {page}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("gid"); ap.add_argument("page", type=int)
    ap.add_argument("--out", default="/tmp/qa-tiles")
    ap.add_argument("--zoom", type=float, default=2.0)
    ap.add_argument("--cols", type=int, default=2)
    ap.add_argument("--rows", type=int, default=3)
    ap.add_argument("--site", default=SITE)
    a = ap.parse_args()

    path, title = page_path(a.site, a.gid, a.page)
    im = Image.open(path).convert("RGB")
    W, H = im.size
    os.makedirs(a.out, exist_ok=True)
    stem = f"{a.gid}-{a.page:02d}"

    # Orientation copy: full page, readable but small enough to take in at once.
    full = im.resize((int(W * 0.85), int(H * 0.85)), Image.LANCZOS)
    full.save(os.path.join(a.out, f"{stem}-full.jpg"), quality=92)

    ov = 0.12                       # overlap, so a line crossing a seam is still followable
    tw, th = W / a.cols, H / a.rows
    written = []
    for r in range(a.rows):
        for c in range(a.cols):
            x0 = max(0, int(c * tw - tw * ov)); x1 = min(W, int((c + 1) * tw + tw * ov))
            y0 = max(0, int(r * th - th * ov)); y1 = min(H, int((r + 1) * th + th * ov))
            t = im.crop((x0, y0, x1, y1))
            t = t.resize((int(t.width * a.zoom), int(t.height * a.zoom)), Image.LANCZOS)
            fn = os.path.join(a.out, f"{stem}-r{r}c{c}.jpg")
            t.save(fn, quality=94)
            written.append(os.path.basename(fn))

    print(json.dumps({"gallery": a.gid, "page": a.page, "title": title, "source": path,
                      "size": [W, H], "out": a.out,
                      "full": f"{stem}-full.jpg", "tiles": written}, indent=1))


if __name__ == "__main__":
    main()
