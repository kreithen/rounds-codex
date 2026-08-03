#!/usr/bin/env python3
"""Triage an incoming gallery batch before building anything.

    python3 scripts/triage_incoming_gallery.py <incoming-dir> [--site <root>] [--out <dir>]

Two checks, both of which CLAUDE.md records as having already cost real work:

1. IS IT A RE-SEND?  Of the three batches received on 2026-07-30, two were
   largely pages we had already shipped -- 20 of 25, then 10 of 75, byte-
   identical to deployed artwork. Diffing first saved rebuilding four galleries.
   Every incoming page is compared against all 550 live pages: first by exact
   file hash, then by mean pixel difference on a downscaled grayscale copy, so
   a re-encode of the same artwork is still recognised. A mean diff under
   2/255 is compression noise, not a revision.

2. DOES THE FOOTER CLAIM ANYTHING?  Added 2026-08-03, after 302 pages shipped
   asserting "CLINICAL PENDING" and it took months to notice. Each footer is
   OCRed twice -- warm ink alone, to separate a cell VALUE from its cyan label,
   and the whole bar, because asthma/cap/copd print the claim a second time in
   pale cyan that no warm pass can see. Validated against ten pages of known
   answer: all six real claims fire, including hyponatremia's pale gold, and the
   descriptive labels CLINICAL PEARLS and CLINICAL FOUNDATION stay quiet.

3. WHAT ORDER DO THE PAGES GO IN?  Page order comes from the "IMAGE n OF 10"
   header, never from filenames or arrival order -- every batch so far has
   arrived shuffled. This crops the header strip from each page and tiles them
   into ONE contact sheet, plus a second sheet of the title strips, so the whole
   batch is two images to read instead of seventy-five.

It reads only. It builds nothing and writes nothing into the app.
"""
import argparse, hashlib, json, os, re, sys
from PIL import Image
import numpy as np

EXT = {'.jpg', '.jpeg', '.png', '.webp'}
# Header carries "IMAGE n OF 10"; the band below it carries the page title.
# Fractions of image height, so they hold whether a page is 1024x1536 or 1536x2304.
#
# The header band is cut to include the FULL logo lockup and the progress dots,
# not just the page number, because that makes one sheet answer all three
# per-page checks CLAUDE.md lists: the page order, the logo lockup (production
# has sent a TM variant), and the dots (should be ONE filled dot at the current
# page; C. difficile rendered them cumulatively, and some pages fill two).
# Measured off a real page by cropping 0.05-0.22 with fraction ticks drawn on it,
# rather than guessed: logo and dots end ~0.058, the big title runs 0.085-0.12,
# the blue subtitle to ~0.145, and "OVERVIEW" body copy starts ~0.165.
HEADER = (0.008, 0.062)
TITLE  = (0.072, 0.155)
SIG    = (64, 96)          # downscale for the perceptual comparison
NOISE  = 2.0               # mean abs diff (0-255) at or below which it is the same artwork


def sig(path):
    """Grayscale thumbprint used for the near-identical test."""
    with Image.open(path) as im:
        return np.asarray(im.convert('L').resize(SIG, Image.LANCZOS), dtype=np.float32)


def sha(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    return h.hexdigest()


def live_pages(site):
    """Every page the live app actually references, resolved through each gallery's base."""
    g = json.load(open(os.path.join(site, 'content', 'galleries.json')))
    out = []
    for gid, gal in g['galleries'].items():
        for im in gal['images']:
            p = os.path.join(site, gal.get('base', '') or '', im['file'])
            if os.path.exists(p):
                out.append((f"{gid}-{im['n']:02d}", p, im.get('title', '')))
    return out


def strip(path, frac):
    with Image.open(path) as im:
        w, h = im.size
        return im.convert('RGB').crop((0, int(h * frac[0]), w, int(h * frac[1])))


def sheet(paths, frac, out_path, label_w=210):
    """Tile one horizontal band from each page into a single tall image, labelled."""
    from PIL import ImageDraw
    crops = [(os.path.basename(p), strip(p, frac)) for p in paths]
    tw = max(c.width for _, c in crops)
    scale = min(1.0, 900 / tw)
    rows = [(n, c.resize((int(c.width * scale), int(c.height * scale)), Image.LANCZOS)) for n, c in crops]
    W = label_w + max(c.width for _, c in rows)
    H = sum(c.height + 6 for _, c in rows) + 6
    sheet_im = Image.new('RGB', (W, H), (14, 18, 28))
    d = ImageDraw.Draw(sheet_im)
    y = 6
    for name, c in rows:
        sheet_im.paste(c, (label_w, y))
        d.text((8, y + max(0, c.height // 2 - 6)), name[:30], fill=(190, 205, 225))
        y += c.height + 6
    sheet_im.save(out_path, quality=90)
    return out_path, len(rows)


# --------------------------------------------------------------------------- footer claims
#
# Added 2026-08-03, after 302 pages shipped asserting "CLINICAL PENDING" in the footer and it
# took months to notice. The reason it survived is worth recording: it was on EVERY page from
# the first gallery onward, and a defect that never varies reads as design. The dot errors were
# caught in days because they changed page to page; this one never did, so nobody re-read it.
#
# Every check in this script existed for something that had already gone wrong -- page order,
# logo lockup, page size, re-sends. None of them looked at what the footer CLAIMS.

# Words that assert a status about the page's own readiness. These are always wrong on delivered
# artwork, because the physician has reviewed it.
CLAIM_WORDS = ['PENDING', 'PREPUBLICATION', 'PROOF', 'DRAFT', 'PROVISIONAL',
               'UNVERIFIED', 'AWAITING', 'INCOMPLETE', 'PRELIMINARY']
# Garbles of the same thing that have actually been delivered. PEARSON is the one to watch: it
# sits in the REVIEW cell where PEARLS would be a legitimate section label, so it is reported
# separately rather than called a definite claim.
GARBLES = ['PEERED', 'PEARSON', 'PEARSONS']
# NEVER flagged. These are descriptive section labels and appear in the same cell, in the same
# warm ink. Flagging them would have condemned 38 perfectly good pages.
SAFE = ['PEARLS', 'FOUNDATION', 'HIGH-YIELD', 'HIGHYIELD', 'CORE CONCEPTS', 'OVERVIEW',
        'ANATOMY', 'CLINICAL REVIEW']


def _ocr(img):
    try:
        import pytesseract
    except ImportError:
        return None
    return pytesseract.image_to_string(img, config='--psm 6')


def _norm(t):
    return re.sub(r'[^A-Z0-9 +/-]', ' ', (t or '').upper().replace('0', 'O').replace('1', 'I'))


def footer_claims(path, band=0.84):
    """OCR the footer and report any cell VALUE that asserts a status.

    Two passes, because the claim has been delivered in two different inks and a single pass
    cannot tell a label from a value:

      * WARM ink only. The cell label is cyan and the value is warm, so a status word found here
        is a value -- a claim. This pass alone may flag the word REVIEW, which is only ever a
        label when cyan.
      * The WHOLE footer, any ink. asthma, cap and copd print the claim a second time in pale
        cyan at the end of the copyright line, which no warm pass can see; that copy went
        unnoticed through four separate attempts to fix this. Here only unambiguous claim words
        count, never the bare word REVIEW, or every page with a REVIEW label would fire.

    Returns a list of (severity, word, ink, context). Empty means the footer makes no claim.
    """
    im = Image.open(path).convert('RGB')
    w, h = im.size
    foot = im.crop((0, int(h * band), w, h))
    foot = foot.resize((foot.width * 3, foot.height * 3), Image.LANCZOS)
    a = np.asarray(foot).astype(int)
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]

    # warm ink rendered black-on-white, which tesseract reads far better than light-on-dark
    warm = (r > 95) & (r > b + 22) & (g < r + 14)
    warm_img = Image.fromarray(np.where(warm, 0, 255).astype(np.uint8))
    warm_txt = _norm(_ocr(warm_img))
    if warm_txt is None:
        return [('SKIP', '', '', 'pytesseract not installed - install it or read the sheet')]
    all_txt = _norm(_ocr(foot.convert('L').point(lambda v: 255 - v)))

    hits, seen = [], set()
    for word, txt, ink in ([(x, warm_txt, 'warm value') for x in CLAIM_WORDS + GARBLES + ['REVIEW']]
                           + [(x, all_txt, 'any ink') for x in CLAIM_WORDS]):
        if word not in txt or word in seen:
            continue
        ctx = txt[max(0, txt.find(word) - 26):txt.find(word) + len(word) + 12].strip()
        if any(s in ctx for s in SAFE) and word not in CLAIM_WORDS:
            continue
        seen.add(word)
        sev = 'CLAIM' if word in CLAIM_WORDS else ('GARBLE?' if word in GARBLES else 'REVIEW-as-value')
        hits.append((sev, word, ink, ' '.join(ctx.split())))
    return hits


def footer_sheet(paths, out_path):
    """Every incoming page's footer bar, stacked. OCR on 8px type is not trustworthy on its own,
    and reading a contact sheet by eye is the method that has actually worked on this project."""
    from PIL import ImageDraw
    crops = [(os.path.basename(p), strip(p, (0.88, 1.0))) for p in paths]
    scale = min(1.0, 900 / max(c.width for _, c in crops))
    rows = [(n, c.resize((int(c.width * scale), int(c.height * scale)), Image.LANCZOS))
            for n, c in crops]
    W = 200 + max(c.width for _, c in rows)
    H = sum(c.height + 6 for _, c in rows) + 6
    sh = Image.new('RGB', (W, H), (14, 18, 28))
    d = ImageDraw.Draw(sh)
    y = 6
    for name, c in rows:
        sh.paste(c, (200, y))
        d.text((8, y + max(0, c.height // 2 - 6)), name[:32], fill=(190, 205, 225))
        y += c.height + 6
    sh.save(out_path, quality=90)
    return out_path


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('incoming')
    ap.add_argument('--site', default='/workspace/rounds-codex-app')
    ap.add_argument('--out', default=None, help='where to write the contact sheets')
    a = ap.parse_args()

    # Skip the sheets this script itself writes. They are .jpg in the same folder,
    # so a second run was feeding its own output back in as two extra "pages".
    inc = sorted(os.path.join(a.incoming, f) for f in os.listdir(a.incoming)
                 if os.path.splitext(f)[1].lower() in EXT and not f.startswith('_contact-'))
    if not inc:
        sys.exit(f'no images in {a.incoming}')
    out = a.out or a.incoming
    # --out is written to at the very end, after the whole diff has run. Left uncreated it
    # throws there, so the expensive comparison is done and then thrown away.
    os.makedirs(out, exist_ok=True)

    live = live_pages(a.site)
    print(f'{len(inc)} incoming pages vs {len(live)} live pages\n')

    live_sha = {}
    for key, p, _ in live:
        live_sha.setdefault(sha(p), key)
    live_sig = [(key, sig(p)) for key, p, _ in live]

    resend = new = revised = 0
    print(f'{"incoming":<34} {"verdict":<12} {"closest live page":<22} diff')
    print('-' * 84)
    for p in inc:
        name = os.path.basename(p)
        h = sha(p)
        if h in live_sha:
            print(f'{name:<34} {"IDENTICAL":<12} {live_sha[h]:<22} 0.00')
            resend += 1
            continue
        s = sig(p)
        best_k, best_d = None, 1e9
        for key, ls in live_sig:
            d = float(np.abs(s - ls).mean())
            if d < best_d:
                best_k, best_d = key, d
        if best_d <= NOISE:
            verdict = 'RE-ENCODE'
            resend += 1
        elif best_d < 12:
            verdict = 'REVISED?'
            revised += 1
        else:
            verdict = 'NEW'
            new += 1
        print(f'{name:<34} {verdict:<12} {best_k:<22} {best_d:.2f}')

    print(f'\n  {resend} already live, {revised} possibly revised, {new} new')
    if revised:
        print('  NOTE: "REVISED?" needs eyes. A contact-sheet misread once made me report two')
        print('        pages as revised when the swap was mine -- re-check the mapping.')

    # ---- does the footer claim anything about its own review status? ----
    print('\n' + '=' * 84)
    print('FOOTER CLAIMS - any cell value asserting pending / proof / draft / unverified')
    print('=' * 84)
    flagged = 0
    for p in inc:
        hits = footer_claims(p)
        if not hits:
            continue
        flagged += 1
        print(f'  {os.path.basename(p)}')
        for sev, word, ink, ctx in hits:
            print(f'      {sev:16s} {word:15s} ({ink})   ...{ctx}...')
    if flagged:
        print(f'\n  {flagged} of {len(inc)} pages carry a footer claim.')
        print('  A delivered page must not assert that its own review is pending -- the')
        print('  physician has reviewed it. Send these back rather than erasing them: 302 pages')
        print('  had to be repaired by hand in August 2026 because this went unnoticed.')
    else:
        print(f'  none - all {len(inc)} footers clean')

    hp, n = sheet(inc, HEADER, os.path.join(out, '_contact-headers.jpg'))
    tp, _ = sheet(inc, TITLE, os.path.join(out, '_contact-titles.jpg'))
    fp = footer_sheet(inc, os.path.join(out, '_contact-footers.jpg'))
    print(f'\ncontact sheets ({n} pages each):\n  {hp}   <- read "IMAGE n OF 10" for page order\n  {tp}   <- read the page titles\n  {fp}   <- read the footer bar; OCR above is a prompt, not a verdict')


if __name__ == '__main__':
    main()
