#!/usr/bin/env python3
"""Fail if any gallery's download PDF has drifted from the pages the app actually serves.

The defect this exists for shipped unnoticed for months and was found by the physician, not by
us: the download PDF is a build artifact, and `fix_page_logo.py` repaints the logo on the page
JPGs without regenerating it. Four galleries ended up shipping a download whose pages carried a
logo the app had stopped using.

The invariant is deliberately broader than "the logo matches", because logo drift was only the
symptom: **every page of every gallery PDF must be the page the app serves.** That also catches a
re-rendered page, a re-sent batch, a reordered gallery, and a PDF built from the wrong source.

Three things this has to get right, each learned by getting it wrong first:

  - **Control for size before comparing.** PDF pages are embedded smaller than the source (512px
    against 1024px is typical), so a raw comparison measures resampling blur. An early version of
    this check reported 91 of 100 galleries broken on that alone.
  - **Control for position too.** Two renderings of the same artwork can sit a few pixels apart;
    a plain difference cannot tell that from different artwork, and it wrongly flagged two
    galleries whose logo was correct and merely shifted. The comparison minimises over small
    translations.
  - **Check page IDENTITY, not just similarity.** Each PDF page must match its OWN source page
    better than any other page of the same gallery, or a reordered PDF passes.

Usage:
  python3 scripts/verify_gallery_pdfs.py <site-root> [gallery-id ...]
Exit code 1 if anything drifted.
"""
import io, json, os, sys
import fitz
from PIL import Image
import numpy as np

# Calibrated against the corpus after the v75 rebuild: 1,000 pages, median 2.5, p90 3.2, and the
# four genuinely-drifted galleries sat at 20-41. 12 sits in the empty gap between the two.
LOGO_MAX = 12.0
PAGE_MAX = 12.0

LOGO_BOX = (0.0, 0.012, 0.28, 0.085)      # the lockup, top-left, as fractions of the page


def arr(im, size):
    return np.asarray(im.convert('L').resize(size, Image.LANCZOS), dtype=np.float32)


def crop_frac(im, box):
    W, H = im.size
    x0, y0, x1, y1 = box
    return im.crop((int(x0 * W), int(y0 * H), int(x1 * W), int(y1 * H)))


def aligned_diff(a, b, r=6):
    """Smallest mean-abs-diff over small translations: same artwork nudged a few pixels collapses
       to noise, different artwork stays high however you slide it."""
    best = 1e9
    for dy in range(-r, r + 1):
        for dx in range(-r, r + 1):
            aa = a[max(0, dy):a.shape[0] + min(0, dy), max(0, dx):a.shape[1] + min(0, dx)]
            bb = b[max(0, -dy):b.shape[0] + min(0, -dy), max(0, -dx):b.shape[1] + min(0, -dx)]
            if aa.size:
                best = min(best, float(np.abs(aa - bb).mean()))
    return best


def check(root, gid, g):
    """-> list of problem strings for this gallery."""
    bad = []
    pdf_path = os.path.join(root, g['pdf'].lstrip('/'))
    if not os.path.exists(pdf_path):
        return [f'{gid}: PDF missing at {g["pdf"]}']
    doc = fitz.open(pdf_path)
    try:
        if doc.page_count != len(g['images']):
            bad.append(f'{gid}: PDF has {doc.page_count} pages, gallery declares {len(g["images"])}')
        srcs, embeds = [], []
        for i, img in enumerate(g['images']):
            sp = os.path.join(root, (g.get('base', '') + img['file']).lstrip('/'))
            if not os.path.exists(sp):
                bad.append(f'{gid} p{i+1}: source page missing at {img["file"]}')
                return bad
            srcs.append(Image.open(sp).convert('RGB'))
            if i >= doc.page_count:
                continue
            xs = doc[i].get_images(full=True)
            if not xs:
                bad.append(f'{gid} p{i+1}: PDF page embeds no image')
                return bad
            embeds.append(Image.open(io.BytesIO(doc.extract_image(xs[0][0])['image'])).convert('RGB'))

        for i, (e, s) in enumerate(zip(embeds, srcs)):
            # size control: bring the source down to the embedded page's own geometry
            sr = s.resize(e.size, Image.LANCZOS)
            ld = aligned_diff(arr(crop_frac(e, LOGO_BOX), (240, 68)),
                              arr(crop_frac(sr, LOGO_BOX), (240, 68)))
            pd = aligned_diff(arr(e, (160, 240)), arr(sr, (160, 240)), r=3)
            if ld > LOGO_MAX:
                bad.append(f'{gid} p{i+1}: logo differs from the served page (diff {ld:.1f}) '
                           f'- the PDF predates the last change to that page')
            if pd > PAGE_MAX:
                bad.append(f'{gid} p{i+1}: page content differs from the served page (diff {pd:.1f})')

        # identity: each PDF page must match its OWN source page best, or the order has moved
        if len(embeds) == len(srcs) and len(srcs) > 1:
            small_s = [arr(s.resize(embeds[0].size, Image.LANCZOS), (120, 180)) for s in srcs]
            for i, e in enumerate(embeds):
                ae = arr(e, (120, 180))
                ds = [float(np.abs(ae - ss).mean()) for ss in small_s]
                j = int(np.argmin(ds))
                if j != i:
                    bad.append(f'{gid} p{i+1}: matches source page {j+1} better than its own - PDF order is wrong')
    finally:
        doc.close()
    return bad


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    root = sys.argv[1]
    only = sys.argv[2:]
    G = json.load(open(os.path.join(root, 'content', 'galleries.json')))['galleries']
    ids = only or sorted(G)
    problems, pages = [], 0
    for gid in ids:
        if gid not in G:
            raise SystemExit(f'unknown gallery id: {gid}')
        problems += check(root, gid, G[gid])
        pages += len(G[gid]['images'])
    print(f'{len(ids)} galleries, {pages} pages compared against the pages the app serves')
    if problems:
        print(f'\n{len(problems)} PROBLEM(S):')
        for p in problems:
            print('  ' + p)
        print('\nFix with: python3 scripts/rebuild_gallery_pdf.py <site-root> <gallery-id>')
        sys.exit(1)
    print('every gallery PDF matches its pages - no drift')


if __name__ == '__main__':
    main()
