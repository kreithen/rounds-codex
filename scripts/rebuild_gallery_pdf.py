#!/usr/bin/env python3
"""Rebuild a gallery's download PDF from the page JPGs the app currently serves.

Why this exists: the download PDF is a build artifact, generated once when the gallery was
built. When `fix_page_logo.py` later repainted the logo lockup on the page JPGs, nobody
regenerated the PDFs -- so the app's viewer showed the canonical logo while the downloaded PDF
still carried whatever the pages had at build time. Reported 2026-08-08 from an iPhone: the
downloaded Cardiac Arrest pages have the wrong mark in the top-left corner.

Four galleries are affected, and they are the four whose PDF pages are 900x1350 -- a geometry no
other gallery uses, i.e. the earliest build generation. `pad`'s PDF is actually LARGER than its
current pages (900 vs 804), which is proof on its own that it was not built from them.

Two rules this follows rather than inventing:

  - **Page order comes from galleries.json's `images` array, never from a directory glob.**
    Every incoming batch so far has arrived shuffled, and the order in that array is the one the
    app displays and the one the titles were read against.
  - **Never upscale.** The embedded width is min(the PDF's existing width, the source page's
    width), so the fix changes the logo and nothing else. Rebuilding these at the newer
    pipeline's 512px would have quietly halved the resolution of a document the physician
    downloads to keep.

Unlike a re-recorded MP3, the PDF does NOT need a new filename: `_headers` marks only
/assets/audio/* immutable, so a rebuilt PDF at the same path is revalidated and picked up.

Usage:  python3 scripts/rebuild_gallery_pdf.py <site-root> <gallery-id> [<gallery-id> ...]
        python3 scripts/rebuild_gallery_pdf.py <site-root> --all-stale
"""
import io, json, os, sys
import fitz
from PIL import Image

# Quality 82 at the page's own geometry. The originals were ~1.9 MB for ten 900px pages and this
# produces ~2.8 MB, because the original encoder is not reproducible here -- matching its byte
# count needs q~62, which is visible degradation on pages this dense with small labels, and these
# are downloaded to be read. +3 MB across the four affected files is immaterial against a 150 MB
# PDF corpus. Standardising all four down to the newer pipeline's 512px would save ~6 MB and halve
# their linear resolution; that is a product decision, not a bug fix, so it is not made here.
PDF_Q = 82


def load(root):
    with open(os.path.join(root, 'content', 'galleries.json')) as f:
        return json.load(f)


def pdf_page_width(root, rel):
    """The width the existing PDF embeds, so the rebuild keeps the same document geometry."""
    doc = fitz.open(os.path.join(root, rel.lstrip('/')))
    try:
        xs = doc[0].get_images(full=True)
        if not xs:
            return None
        im = Image.open(io.BytesIO(doc.extract_image(xs[0][0])['image']))
        return im.width
    finally:
        doc.close()


def rebuild(root, gid, G):
    g = G['galleries'][gid]
    rel = g['pdf'].lstrip('/')
    out = os.path.join(root, rel)
    old_size = os.path.getsize(out)
    old_w = pdf_page_width(root, rel)

    # order from the images array, not from a glob
    srcs = [os.path.join(root, (g.get('base', '') + im['file']).lstrip('/')) for im in g['images']]
    missing = [s for s in srcs if not os.path.exists(s)]
    if missing:
        raise SystemExit(f'{gid}: {len(missing)} page file(s) missing, first {missing[0]}')

    pages = []
    for s in srcs:
        im = Image.open(s).convert('RGB')
        w = min(old_w or im.width, im.width)          # never upscale
        if w != im.width:
            im = im.resize((w, round(w * im.height / im.width)), Image.LANCZOS)
        pages.append(im)

    tmp = out + '.new'
    pages[0].save(tmp, 'PDF', save_all=True, append_images=pages[1:], resolution=72.0, quality=PDF_Q)

    # the rebuild must have the same number of pages before it replaces anything
    doc = fitz.open(tmp)
    n = doc.page_count
    doc.close()
    if n != len(srcs):
        os.remove(tmp)
        raise SystemExit(f'{gid}: rebuilt PDF has {n} pages, expected {len(srcs)}')

    os.replace(tmp, out)
    new_size = os.path.getsize(out)
    print(f'{gid:20s} {len(srcs)} pages @ {pages[0].width}px  '
          f'{old_size//1024:5d} kB -> {new_size//1024:5d} kB  (was {old_w}px)')


def main():
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    root, args = sys.argv[1], sys.argv[2:]
    G = load(root)
    if args == ['--all-stale']:
        # the four whose PDF geometry betrays the older build generation
        args = [g for g in sorted(G['galleries']) if pdf_page_width(root, G['galleries'][g]['pdf']) == 900]
        print(f'stale-geometry galleries: {", ".join(args)}\n')
    for gid in args:
        if gid not in G['galleries']:
            raise SystemExit(f'unknown gallery id: {gid}')
        rebuild(root, gid, G)


if __name__ == '__main__':
    main()
