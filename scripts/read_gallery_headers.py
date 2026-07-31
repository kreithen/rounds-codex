#!/usr/bin/env python3
"""Read the header off every page of an incoming batch, by OCR.

    python3 scripts/read_gallery_headers.py <incoming-dir> [--json out.json]

Page order comes from the "IMAGE n OF 10" header, never from filenames, and
every batch so far has arrived shuffled. Reading 75 of those off a contact sheet
by eye works but is exactly the step CLAUDE.md records me getting wrong once.
Tesseract reads the header text directly, so the mapping is mechanical.

The progress dots are NOT checked here. Two attempts at counting them
automatically -- greyscale blob fill, then cyan saturation -- both returned
obvious nonsense (0 filled on all 75 pages), and a check that reports the wrong
answer is worse than no check. Read the dots off the header contact sheet that
triage_incoming_gallery.py writes; they are perfectly legible there.

A pixel-similarity approach was tried first and abandoned: the header sits at a
slightly different y on each page and the dots differ page to page, so crops
that should have matched did not. OCR reads the words instead of the pixels.
"""
import argparse, json, os, re, sys
from PIL import Image, ImageOps
import pytesseract

EXT = {'.jpg', '.jpeg', '.png', '.webp'}
HDR_H = 0.075                      # header occupies the top ~7.5% of the page


# Two different crops, because one does not serve both fields. The full-width
# header read page numbers reliably but dragged in the big title underneath,
# which wrecked the condition. A tight right-hand crop reads the condition
# cleanly but misses the centred page number, whose y varies too much to pin
# down. So: broad crop for the number, tight crop for the name.
NAME_CROP = (0.56, 0.028, 1.000, 0.072)


def ocr(path, box, psm, scale=2):
    with Image.open(path) as im:
        g = im.convert('L')
        w, h = g.size
        c = g.crop((int(w * box[0]), int(h * box[1]), int(w * box[2]), int(h * box[3])))
    c = ImageOps.invert(c).resize((c.width * scale, c.height * scale), Image.LANCZOS)
    return pytesseract.image_to_string(c, config=f'--psm {psm}')


def read_page_no(path):
    for box, psm, scale in [((0, 0, 1, HDR_H), 6, 2), ((0, 0, 1, 0.10), 6, 3),
                            ((0.25, 0, 0.75, 0.055), 7, 4)]:
        m = re.search(r'IMAGE\s+(\d+)\s*OF\s*(\d+)', ocr(path, box, psm, scale), re.I)
        if m:
            return int(m.group(1)), int(m.group(2))
    return None, None


def read_condition(path):
    txt = ocr(path, NAME_CROP, 6, 3)
    icd = re.search(r'ICD[\-\s]?10\s+([A-Z]\d{2}[.\d]*)', txt, re.I)
    if icd:
        return 'ICD-10 ' + icd.group(1).upper()
    best = ''
    for line in txt.splitlines():
        # Lines start with OCR noise from the progress dots; keep the longest
        # run of real capitalised words.
        for cand in re.findall(r"[A-Z][A-Z'’’\-&\s\(\)]{4,}", line):
            c = ' '.join(cand.split()).strip(' -&()')
            if 'CODEX' in c or c.startswith('ROUNDS'):
                continue
            c = c.replace('NEUROLOGY', '').strip(' -&()')
            # The crop clips the right-hand end of the progress dots, which OCR
            # renders as leading O/Q/@ tokens. Untrimmed they fragment one
            # gallery into "MULTIPLE SCLEROSIS", "O MULTIPLE SCLEROSIS",
            # "OO MULTIPLE SCLEROSIS" and so on.
            c = re.sub(r'^(?:[OQ0@©®]+\s+)+', '', c).strip(' -&()')
            c = c.replace('’', "'").replace('‘', "'")
            # drop short all-consonant OCR garbage
            if len(c) < 5 or not re.search(r'[AEIOU]', c):
                continue
            if len(c) > len(best):
                best = c
    return best or None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('incoming')
    ap.add_argument('--json')
    a = ap.parse_args()
    files = sorted(f for f in os.listdir(a.incoming)
                   if os.path.splitext(f)[1].lower() in EXT and not f.startswith('_contact-'))
    rows = []
    for f in files:
        p = os.path.join(a.incoming, f)
        page, total = read_page_no(p)
        cond = read_condition(p)
        rows.append(dict(file=f, page=page, total=total, condition=cond))

    unread = [r for r in rows if r['page'] is None or not r['condition']]
    print(f'{len(rows)} pages read, {len(unread)} unreadable\n')
    for r in unread:
        print(f"  UNREAD  {r['file']}  page={r['page']} cond={r['condition']}")
    if unread:
        print()

    groups = {}
    for r in rows:
        groups.setdefault(r['condition'], []).append(r)
    print(f'{len(groups)} conditions\n')
    for cond in sorted(groups, key=lambda c: (c is None, c or '')):
        g = sorted(groups[cond], key=lambda r: (r['page'] is None, r['page']))
        pages = [r['page'] for r in g]
        dupes = {p for p in pages if pages.count(p) > 1}
        total = g[0]['total'] or 10
        missing = [n for n in range(1, total + 1) if n not in pages]
        flag = ''
        if dupes:
            flag += f'  DUPLICATE pages {sorted(dupes)}'
        if missing:
            flag += f'  MISSING pages {missing}'
        print(f'  {str(cond):26s} {len(g):2d}/{total}{flag}')

    if a.json:
        json.dump(rows, open(a.json, 'w'), indent=1)
        print(f'\nwrote {a.json}')


if __name__ == '__main__':
    main()
