#!/usr/bin/env python3
"""Find, deduplicate and IDENTIFY gallery pages the physician pasted into chat.

Written 2026-08-08 after an entire session was spent asking for files that were already on disk.
The physician delivers gallery pages by pasting them from their photo album, and those pastes land
in the session's upload directory at FULL RESOLUTION -- 1024x1536, ~2.5 MB PNG, which is exactly
the shipping standard. They are not lossy previews. Check here before asking for anything.

Three things this handles that are easy to get wrong by hand:

  1. The same image appears several times under different uuid prefixes (2-3 copies each). On the
     MSK batch, 42 files were 21 unique pages. Dedupe by content hash, not by name.

  2. Page order must come from each page's own "IMAGE n OF 10" header strip, never from filenames
     or arrival order -- every batch so far has arrived shuffled. The footer "IMAGE TITLE" field
     gives the authoritative page title. Both are read by OCR here, which is exact and beats
     reading a contact sheet by eye.

  3. A page can arrive in TWO takes (hip fracture page 3 did). This refuses to stage a set with an
     unresolved duplicate rather than picking one silently -- resolve it by reading the panel that
     differs, then pass --pick.

OCR note: the pages are light-on-dark, and tesseract wants dark-on-light, so every crop is
inverted and upscaled 2x before recognition. Without the invert it returns nothing.

Usage:
  python3 scripts/ingest_pasted_gallery.py --list                      # what is in the uploads dir
  python3 scripts/ingest_pasted_gallery.py --gid hip-fracture --stage  # stage as <gid>-NN.png
  python3 scripts/ingest_pasted_gallery.py --gid X --stage --pick 3=<file>   # resolve a duplicate
"""
import argparse, glob, hashlib, os, re, shutil, subprocess, sys, time
from collections import defaultdict
from difflib import SequenceMatcher

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit('needs Pillow')

UPLOAD_ROOT = '/root/.claude/uploads'
STAGING = '/home/user/rounds-codex/galleries-staging'
# Accept anything close to the 1024x1536 standard. A paste is occasionally off by a pixel
# (one back-pain page arrived 1023x1537); the builder resamples those deliberately.
MIN_W, MAX_W, MIN_H, MAX_H = 900, 1700, 1300, 2400


def newest_upload_dir():
    ds = [d for d in glob.glob(os.path.join(UPLOAD_ROOT, '*')) if os.path.isdir(d)]
    if not ds:
        sys.exit(f'no upload directories under {UPLOAD_ROOT}')
    return max(ds, key=os.path.getmtime)


def ocr(im):
    g = ImageOps.invert(im.convert('L'))
    g = g.resize((g.width * 2, g.height * 2), Image.LANCZOS)
    tmp = '/tmp/_ingest_ocr.png'
    g.save(tmp)
    r = subprocess.run(['tesseract', tmp, 'stdout', '--psm', '6'],
                       capture_output=True, text=True)
    return ' '.join(r.stdout.split())


def read_page(path):
    """Return (page_number, total, icd10, footer_text) read off the page itself."""
    im = Image.open(path)
    W, H = im.size
    head = ocr(im.crop((0, 0, W, int(H * 0.062))))
    foot = ocr(im.crop((0, int(H * 0.94), W, H)))
    # The huge condition name below the header is the most legible thing on the page, so it is the
    # primary attribution signal. The footer IMAGE TITLE is small and OCR'd unreliably -- using it
    # alone left 2 of 10 hip-fracture pages unattributed and 3 images unplaced on the first run.
    # FULL width, not just the left column: hip-fracture page 10 came from a template whose title
    # block is CENTRED, so a left-side crop missed it entirely and the page went unattributed.
    title = ocr(im.crop((0, int(H * 0.05), W, int(H * 0.22))))
    m = re.search(r'IMAGE\s*(\d+)\s*OF\s*(\d+)', head, re.I)
    # anchored and length-bounded: OCR noise after the code produced 'M54.50EEEESSee' on a real page
    icd = re.search(r'([A-Z]\d{2}\.\d{1,3}[A-Z]{0,2}\d?)', head.replace(' ', ''))
    return (int(m.group(1)) if m else None,
            int(m.group(2)) if m else None,
            icd.group(1) if icd else None,
            foot, im.size, title)


def cond_icds():
    """id -> ICD-10 code, a third attribution signal for a page whose title OCR came out poorly.
       Only helps when the page carries the CORRECT code -- hip-fracture pages 1-3 ship M80.00XA,
       which matches no condition, so this is a supplement and never the only check."""
    import json
    f = '/workspace/rounds-codex-app/content/conditions.json'
    return {c['id']: c.get('icd10', '') for c in json.load(open(f))} if os.path.exists(f) else {}


def cond_names():
    """id -> display name, so a page can be attributed to its gallery by the condition name
       printed in its own footer. Without this, two galleries pasted in one window look like
       ten duplicate pages -- which is exactly what happened the first time this ran."""
    import json
    for root in ('/workspace/rounds-codex-app/content/conditions.json',):
        if os.path.exists(root):
            return {c['id']: c['name'] for c in json.load(open(root))}
    return {}


def _flat(s):
    return re.sub(r'[^a-z]', '', s.lower())


def name_score(txt, name):
    """How well does an OCR'd blob contain this condition name? Fuzzy on purpose.

    Exact substring matching was tried first and is too brittle: OCR of the big title turned
    "HIP FRACTURE" into something that matched the OTHER condition "Fractures" but not
    "Hip Fracture", so page 8 was attributed to the wrong gallery. This slides a window the
    length of the name across the text and takes the best similarity, which tolerates a few
    misread characters without inventing matches.
    """
    key, hay = _flat(name), _flat(txt)
    if len(key) < 6 or not hay:
        return 0.0
    best = 0.0
    for i in range(0, max(1, len(hay) - len(key) + 1)):
        best = max(best, SequenceMatcher(None, key, hay[i:i + len(key)]).ratio())
    return best


def attribute(title, foot, names, gid=None, thresh=0.85, icd=None, icds=None):
    """Return (gid, signal, score). With gid given, score only that one -- the operator always
       knows which gallery they just pasted, so guessing across 183 conditions is unnecessary
       risk. Without gid, report the best-scoring condition for a summary view.

       THRESHOLD IS DELIBERATELY STRICT (0.85), and attribution is deliberately allowed to FAIL.
       Measured on the MSK batch, where "Hip Fracture" and "Low Back Pain" were pasted in one
       window: back-pain page 6 scored 0.73 against "Hip Fracture" (a false positive) while
       hip-fracture page 10 scored 0.55 (a false negative, because that page's title block is
       centred and OCR'd poorly). No single threshold separates those two, so there is no
       cleverness available here -- a strict cut plus explicit --pick for the leftovers is the
       only safe design. Never widen this to make the leftovers disappear.
    """
    cands = {gid: names[gid]} if gid and gid in names else names
    best = (None, None, 0.0)
    for g, nm in cands.items():
        for label, txt in (('title', title), ('footer', foot)):
            sc = name_score(txt, nm)
            if sc > best[2]:
                best = (g, label, sc)
    if best[2] >= thresh:
        return best
    # fallback: the printed ICD-10 matches this condition's own code
    # _flat() strips digits, which is right for names and WRONG for codes -- using it here made
    # every M-code match every other M-code, and back-pain absorbed hip-fracture pages.
    if gid and icd and icds and icds.get(gid):
        norm = lambda c: re.sub(r'[^A-Z0-9]', '', c.upper())
        if norm(icd).startswith(norm(icds[gid])):
            return gid, 'icd', 1.0
    return None, None, best[2]


def collect(updir, hours):
    now = time.time()
    uniq = {}
    for f in glob.glob(os.path.join(updir, '*')):
        try:
            st = os.stat(f)
            if now - st.st_mtime > hours * 3600:
                continue
            w, h = Image.open(f).size
        except Exception:
            continue
        if not (MIN_W <= w <= MAX_W and MIN_H <= h <= MAX_H):
            continue
        d = hashlib.md5(open(f, 'rb').read()).digest()
        # keep the earliest copy of each distinct image
        if d not in uniq or st.st_mtime < uniq[d][0]:
            uniq[d] = (st.st_mtime, f)
    return [f for _, f in sorted(uniq.values())]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--uploads', default=None, help='upload dir (default: newest under %s)' % UPLOAD_ROOT)
    ap.add_argument('--hours', type=float, default=24, help='only files this recent (default 24)')
    ap.add_argument('--gid', help='gallery/condition id, required with --stage')
    ap.add_argument('--expect', type=int, default=10, help='pages expected (default 10)')
    ap.add_argument('--stage', action='store_true', help='copy into galleries-staging/<gid>/')
    ap.add_argument('--pick', action='append', default=[],
                    help='assign a page explicitly: --pick 3=<filename>. Use for a duplicate page '
                         'AND for any page attribution could not place. Overrides attribution.')
    ap.add_argument('--list', action='store_true', help='just report what is there')
    a = ap.parse_args()

    updir = a.uploads or newest_upload_dir()
    files = collect(updir, a.hours)
    print(f'{updir}\n{len(files)} unique candidate images in the last {a.hours:g}h\n')
    if not files:
        sys.exit('nothing to ingest -- widen --hours, or the pages have not been pasted yet')

    picks = {}
    for p in a.pick:
        n, _, fn = p.partition('=')
        picks[int(n)] = os.path.basename(fn)

    names, icds = cond_names(), cond_icds()
    groups = defaultdict(lambda: defaultdict(list))   # gid -> page -> [rec]
    unknown = []
    for f in files:
        n, tot, icd, foot, size, title = read_page(f)
        gid, how, sc = attribute(title, foot, names, a.gid, icd=icd, icds=icds)
        rec = (f, icd, foot, size, tot)
        if n and gid:
            groups[gid][n].append(rec)
        else:
            unknown.append((n, gid, rec))
        print(f'  {(gid or "?"):<18} p{str(n or "?"):>3} of {tot or "?":<3} {size[0]}x{size[1]}  '
              f'icd={icd or "?":<11} via={how or "-":<6} {sc:.2f} {os.path.basename(f)[:14]}')

    print()
    if len(groups) > 1:
        print(f'{len(groups)} galleries in this window: ' +
              ', '.join(f'{g} ({len(v)} pages)' for g, v in sorted(groups.items())))
        print('Pass --gid to work on one of them.\n')
    if not a.gid:
        for g, v in sorted(groups.items()):
            miss = [n for n in range(1, a.expect + 1) if n not in v]
            dup = sorted(n for n, x in v.items() if len(x) > 1)
            print(f'  {g:<18} pages={sorted(v)}' +
                  (f' MISSING={miss}' if miss else '') + (f' DUPLICATE={dup}' if dup else ''))
        if unknown:
            print(f'  {len(unknown)} image(s) not attributable to a gallery -- inspect by hand')
        return
    # --pick overrides attribution entirely, so a page the OCR could not place is still stageable
    by_name = {os.path.basename(f): f for f in files}
    for n, fn in picks.items():
        if fn not in by_name:
            sys.exit(f'--pick {n}={fn}: no such file in {updir}')
        groups[a.gid][n] = [r for r in groups[a.gid].get(n, []) if os.path.basename(r[0]) == fn] \
                           or [(by_name[fn], None, '', Image.open(by_name[fn]).size, None)]
    if a.gid not in groups:
        sys.exit(f'no pages found for {a.gid}; saw {sorted(groups) or "nothing"}')
    by_page = groups[a.gid]
    for n in sorted(by_page):
        for f, icd, foot, size, _ in by_page[n]:
            print(f'  p{n:>3} {size[0]}x{size[1]} icd={icd or "?":<11} {os.path.basename(f)[:14]}')
            print(f'        {foot[:120]}')
    print()
    dupes = {n: v for n, v in by_page.items() if len(v) > 1}
    missing = [n for n in range(1, a.expect + 1) if n not in by_page]

    for n, v in sorted(dupes.items()):
        chosen = picks.get(n)
        print(f'DUPLICATE page {n}: {len(v)} takes' + (f' -- picked {chosen}' if chosen else ''))
        for f, icd, foot, size, _ in v:
            print(f'    {os.path.basename(f)}  {size[0]}x{size[1]}  icd={icd}')
        if not chosen:
            print('    -> resolve by reading the panel that DIFFERS between them, then pass '
                  f'--pick {n}=<filename>. Do not pick by timestamp.')
    if missing:
        print(f'MISSING pages: {missing}')
    if unknown:
        print(f'{len(unknown)} image(s) with no readable "IMAGE n OF 10" header -- inspect by hand')

    codes = {icd for v in by_page.values() for _, icd, _, _, _ in v if icd}
    if len(codes) > 1:
        print(f'\nNOTE: more than one ICD-10 code across the set: {sorted(codes)}')
        print('      That is a real defect class -- record it for production, do not "fix" the art.')
    tots = {t for v in by_page.values() for *_, t in v if t}
    if len(tots) > 1:
        print(f'NOTE: pages disagree on the total: {sorted(tots)}')

    if a.list or not a.stage:
        return
    if not a.gid:
        sys.exit('--stage needs --gid')
    if missing:
        sys.exit(f'refusing to stage: pages {missing} are missing')
    unresolved = [n for n in dupes if n not in picks]
    if unresolved:
        sys.exit(f'refusing to stage: unresolved duplicate page(s) {unresolved} -- pass --pick')

    dest = os.path.join(STAGING, a.gid)
    os.makedirs(dest, exist_ok=True)
    for n in range(1, a.expect + 1):
        cands = by_page[n]
        src = next(f for f, *_ in cands
                   if len(cands) == 1 or os.path.basename(f) == picks[n])
        shutil.copy2(src, os.path.join(dest, '%s-%02d.png' % (a.gid, n)))
    sizes = {Image.open(os.path.join(dest, '%s-%02d.png' % (a.gid, n))).size
             for n in range(1, a.expect + 1)}
    print(f'\nstaged {a.expect} pages -> {dest}')
    print(f'page sizes: {sorted(sizes)}' + ('  (builder will resample to 1024x1536)'
                                            if sizes != {(1024, 1536)} else ''))
    print('\nnext: write titles.json from the footer IMAGE TITLE values above, then')
    print(f'  python3 scripts/build_galleries_from_images.py {a.gid}=galleries-staging/{a.gid}')


if __name__ == '__main__':
    main()
