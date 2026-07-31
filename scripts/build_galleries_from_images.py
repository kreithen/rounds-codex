#!/usr/bin/env python3
"""Build gallery assets + content/galleries.json entries for loose-image galleries.

Post-content-split replacement for the index.html path in scripts/add_gallery.js: the entry now
goes into content/galleries.json, and the id into its `real` list.

base is left '' with the folder carried in each `file`, so `thumb` can reach the shared
root-level gthumbs/ set -- thumbs resolve as base + thumb.
"""
import json, os, sys
from PIL import Image

APP = '/workspace/rounds-codex-app'
SRC = '/home/user/rounds-codex/galleries-staging'
PAGE_Q, THUMB_W, THUMB_Q = 88, 320, 82
# The compact download PDF embeds pages at 512x768 -- matched to the live galleries, which
# come in around 1.1 MB for ten pages. Embedding the full 1024x1536 tripled that.
PDF_W, PDF_Q = 512, 80

def cond_names():
    D = json.load(open(os.path.join(APP, 'content/conditions.json')))
    return {c['id']: c['name'] for c in D}

def build(gid, srcdir):
    names = cond_names()
    assert gid in names, 'no condition with id %r -- the gallery would be hidden' % gid
    titles = json.load(open(os.path.join(srcdir, 'titles.json')))
    adir = os.path.join(APP, 'assets', gid)
    os.makedirs(adir, exist_ok=True)
    os.makedirs(os.path.join(APP, 'gthumbs'), exist_ok=True)
    pages, sizes = [], set()
    for p in range(1, 11):
        src = None
        for ext in ('png', 'jpg'):
            c = os.path.join(srcdir, '%s-%02d.%s' % (gid, p, ext))
            if os.path.exists(c): src = c; break
        assert src, 'missing page %d for %s' % (p, gid)
        im = Image.open(src).convert('RGB')
        if im.size != (1024, 1536):            # one size per gallery -- resample deliberately
            im = im.resize((1024, 1536), Image.LANCZOS)
        sizes.add(im.size)
        im.save(os.path.join(adir, '%s-%02d.jpg' % (gid, p)), 'JPEG', quality=PAGE_Q, optimize=True)
        th = im.resize((THUMB_W, int(THUMB_W * im.height / im.width)), Image.LANCZOS)
        th.save(os.path.join(APP, 'gthumbs', '%s-%02d.jpg' % (gid, p)), 'JPEG', quality=THUMB_Q, optimize=True)
        pages.append(im.resize((PDF_W, int(PDF_W * im.height / im.width)), Image.LANCZOS))
    assert len(sizes) == 1, 'mixed page sizes in %s: %s' % (gid, sizes)
    pdf = os.path.join(adir, '%s-gallery.pdf' % gid)
    pages[0].save(pdf, 'PDF', save_all=True, append_images=pages[1:], resolution=72.0, quality=PDF_Q)
    G = json.load(open(os.path.join(APP, 'content/galleries.json')))
    G['galleries'][gid] = {
        'title': names[gid], 'base': '', 'pdf': 'assets/%s/%s-gallery.pdf' % (gid, gid),
        'images': [{'n': p, 'file': 'assets/%s/%s-%02d.jpg' % (gid, gid, p),
                    'thumb': 'gthumbs/%s-%02d.jpg' % (gid, p), 'title': titles[str(p)]}
                   for p in range(1, 11)],
    }
    if gid not in G['real']: G['real'].append(gid)
    json.dump(G, open(os.path.join(APP, 'content/galleries.json'), 'w'), separators=(',', ':'))
    kb = sum(os.path.getsize(os.path.join(adir, '%s-%02d.jpg' % (gid, p))) for p in range(1, 11)) // 1024
    print('%-16s 10 pages, %d kB, pdf %d kB' % (gid, kb, os.path.getsize(pdf) // 1024))

if __name__ == '__main__':
    # Batches used to be a hard-coded list edited for each run, which meant the
    # file's history recorded old batches as if they were about to be rebuilt.
    # Pass `<gid>=<srcdir>` pairs instead; with no args it prints usage.
    args = sys.argv[1:]
    if not args:
        print('usage: build_galleries_from_images.py <gid>=<srcdir> [...]')
        print('   eg: build_galleries_from_images.py stroke=galleries-staging/neuro-0731/stroke')
        sys.exit(2)
    for a in args:
        gid, _, srcdir = a.partition('=')
        assert srcdir, 'expected <gid>=<srcdir>, got %r' % a
        build(gid, srcdir)
