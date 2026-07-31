#!/usr/bin/env python3
"""Independently verify a visual read of a gallery batch's page order and grouping.

    python3 scripts/verify_gallery_grouping.py <incoming-dir>

Reading page order off a contact sheet is a human step, and CLAUDE.md records a
time I mis-read one and reported two pages as revised when the swap was mine.
This checks the read without repeating it: instead of recognising the glyphs, it
crops the two header regions that identify a page -- the "IMAGE n OF 10" text
and the right-hand condition name -- and clusters pages by pixel similarity.

Two pages showing the same page number have a pixel-identical number crop, and
two pages from the same gallery have a pixel-identical name crop. So the
clusters ARE the grouping, derived mechanically. Cross-tabulating them then
answers the question that matters: does every (condition, page) slot appear
exactly once, and which are missing?

Boxes are fractions of page size, measured off a real page of this template by
drawing a labelled grid over the header, not guessed.
"""
import os, sys, itertools
from PIL import Image
import numpy as np

# Generous bands, not tight boxes. The header block sits at a slightly different
# y on each page -- measured spread is a few tens of pixels -- so a tight
# fixed-fraction box slides off the text and every page ends up looking unique.
# These bands are wide enough to contain the text wherever it sits; the ink
# bounding box below then removes the offset.
NUM_BAND  = (0.380, 0.000, 0.620, 0.075)   # "IMAGE n OF 10"
NAME_BAND = (0.580, 0.010, 0.999, 0.070)   # condition name or ICD-10 code
EXT = {'.jpg', '.jpeg', '.png', '.webp'}
TOL = 12.0         # mean abs grey diff below which two crops are the same text


def crop_sig(path, band, size=(260, 40)):
    """Signature of the text in a band, independent of where the band sits.

    Binarise, take the bounding box of the ink, and normalise that to a fixed
    size. Two pages showing the same words then produce the same signature even
    though their headers are not aligned to the pixel.
    """
    with Image.open(path) as im:
        w, h = im.size
        c = im.convert('L').crop((int(w * band[0]), int(h * band[1]),
                                  int(w * band[2]), int(h * band[3])))
    a = np.asarray(c, dtype=np.float32)
    lo, hi = a.min(), a.max()
    if hi <= lo:
        return np.zeros(size[::-1], dtype=np.float32)
    a = (a - lo) / (hi - lo) * 255
    ink = a > 140                                   # light text on a dark header
    rowhas = ink.any(axis=1)
    if rowhas.sum() < 3:
        return np.asarray(Image.fromarray(a.astype('uint8')).resize(size, Image.LANCZOS),
                          dtype=np.float32)
    # Take only the TOPMOST run of inked rows. In the number band the page-number
    # text sits above the progress dots, and the dots differ from page to page
    # (they are the buggy element in this batch), so including them made every
    # page look unique. In the name band the top run is the specialty line's
    # sibling -- the condition name -- which is what we want to match on.
    idx = np.where(rowhas)[0]
    start = idx[0]
    end = start
    for r in idx[1:]:
        if r - end > 3:                             # a clear gap ends the run
            break
        end = r
    sub = ink[start:end + 1]
    cols = np.where(sub.any(axis=0))[0]
    a = a[start:end + 1, cols.min():cols.max() + 1]
    return np.asarray(Image.fromarray(a.astype('uint8')).resize(size, Image.LANCZOS),
                      dtype=np.float32)


def cluster(items):
    """items: [(key, sig)] -> list of [keys]; greedy, which is fine at this tolerance."""
    reps, out = [], []
    for k, s in items:
        for i, r in enumerate(reps):
            if float(np.abs(s - r).mean()) < TOL:
                out[i].append(k)
                break
        else:
            reps.append(s)
            out.append([k])
    return out


def main():
    d = sys.argv[1]
    files = sorted(f for f in os.listdir(d)
                   if os.path.splitext(f)[1].lower() in EXT and not f.startswith('_contact-'))
    if not files:
        sys.exit('no images')
    paths = {f: os.path.join(d, f) for f in files}

    nums = cluster([(f, crop_sig(paths[f], NUM_BAND)) for f in files])
    names = cluster([(f, crop_sig(paths[f], NAME_BAND)) for f in files])
    print(f'{len(files)} pages -> {len(nums)} distinct page numbers, {len(names)} distinct galleries\n')

    num_of = {f: i for i, g in enumerate(nums) for f in g}
    name_of = {f: i for i, g in enumerate(names) for f in g}

    # A gallery's pages should cover distinct numbers; use the size-10 galleries
    # to order the number clusters (the cluster containing a gallery's unique
    # page is arbitrary until anchored, so just report the grid and let the
    # caller match it to the visual read).
    print('gallery cluster sizes:', sorted(len(g) for g in names))
    print('page-number cluster sizes:', sorted(len(g) for g in nums), '\n')

    bad = 0
    for gi, g in enumerate(names):
        seen = {}
        for f in g:
            seen.setdefault(num_of[f], []).append(f)
        dupes = {k: v for k, v in seen.items() if len(v) > 1}
        flag = ''
        if dupes:
            flag = f'  <-- DUPLICATE page slot(s): {[len(v) for v in dupes.values()]}'
            bad += 1
        if len(g) != 10:
            flag += f'  <-- {len(g)} pages, not 10'
        print(f'  gallery {gi}: {len(g):2d} pages, {len(seen):2d} distinct numbers{flag}')
        for f in dupes.values():
            for x in f:
                print(f'        {x}')

    print()
    if len(nums) != 10:
        print(f'NOTE: {len(nums)} page-number clusters, expected 10 for 1..10 galleries.')
        bad += 1
    print('GROUPING CONSISTENT' if not bad else f'{bad} problem(s) - see above')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
