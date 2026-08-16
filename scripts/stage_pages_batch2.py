#!/usr/bin/env python3
"""Stage the second correction batch as a zip the physician can open in Photoshop.

Same discipline as `stage_pages_to_fix.py`: every page is copied out of the LIVE app repo
byte-identically and the md5 is re-verified against the live file before the zip is written.

The difference is the folder split, and it is the point of this bundle:

    measured/         the work order gave a coordinate AND we verified a leader terminator is
                      actually there. These can be worked from the PDF's green targets.
    described-only/   the work order describes the fault in words with NO coordinate. 153 of its
                      179 rows on these pages are like this. They are included so the set is
                      complete, but there is nothing to aim at yet -- they are waiting on our
                      measuring pass, and Photoshopping them from prose is guesswork.
    residual/         pages already corrected and live that still carry a known defect, from
                      PRODUCTION-residual-after-rerender.md. Mostly artwork rather than Photoshop.

Usage:  python3 scripts/stage_pages_batch2.py [<out.zip>]
Inputs: /tmp/zip2_map.json   (page key -> (group, path relative to the app repo))
        /tmp/order_rows.json (the parsed work order)
"""
import json, os, shutil, sys, hashlib, textwrap, subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.environ.get('RC_APP_REPO', '/workspace/rounds-codex-app')
MAP = json.load(open(os.environ.get('RC_ZIP_MAP', '/tmp/zip2_map.json')))
ROWS = json.load(open(os.environ.get('RC_ORDER_ROWS', '/tmp/order_rows.json')))
PDF = os.path.join(REPO, 'galleries-staging/Rounds-Codex-unmeasured-tranche1.pdf')
SHEET = os.path.join(REPO, 'galleries-staging/PRODUCTION-residual-after-rerender.md')
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, 'rounds-codex-pages-to-fix-2.zip')
STAGE = '/tmp/rc-pages-to-fix-2'
W = 94

RESIDUAL = {
    'cardiomyopathy-p1': [("ARRHYTHMOGENIC callout", "(772,861)",
        "still in the RESTRICTIVE slab (dividers measured at x 352 and x 640). No fourth slab was "
        "added, so there is nothing to point at. ARTWORK: add an ARRHYTHMOGENIC slab showing the "
        "RV free wall, or drop the callout.")],
    'aortic-stenosis-p2': [("Inferior Vena Cava", "(365,1010)",
        "the vessel the old Pulmonary Trunk label pointed at is the IVC and now carries nothing, "
        "while the page labels the SVC above it. ADD a label with a short leader."),
        ("Pulmonary Trunk leader routing", "(255,1105) -> (644,512)",
        "endpoint is correct but the label block was not re-sited, so the leader crosses the right "
        "ventricle, the tricuspid chordae and the LVOT. LAYOUT: move the label block up-left.")],
    'stroke-p2': [("Posterior Communicating Artery (PCoA)", "CIRCLE OF WILLIS panel",
        "deleted along with a fabricated 'Middle Communicating Artery'. Deleting the fake one was "
        "right; the PCoA is real and the panel is now missing it. RESTORE it with a leader onto "
        "the vessel joining the ICA to the PCA.")],
}


def md5(p):
    return hashlib.md5(open(p, 'rb').read()).hexdigest()


def para(t, ind=''):
    return '\n'.join(textwrap.fill(l, W, initial_indent=ind, subsequent_indent=ind) or ind
                     for l in t.split('\n'))


def main():
    shutil.rmtree(STAGE, ignore_errors=True)
    for g in ('measured', 'described-only', 'residual'):
        os.makedirs(os.path.join(STAGE, g))

    from PIL import Image, JpegImagePlugin
    rows = []
    for key, (grp, rel) in sorted(MAP.items()):
        src = os.path.join(APP, rel)
        name = os.path.basename(rel)
        dst = os.path.join(STAGE, grp, name)
        if os.path.exists(dst):
            sys.exit(f'filename collision: {name}')
        shutil.copy2(src, dst)
        with Image.open(dst) as I:
            sz = I.size
            ch = {0: '4:4:4', 1: '4:2:2', 2: '4:2:0'}.get(JpegImagePlugin.get_sampling(I), '?')
        rows.append(dict(key=key, grp=grp, name=name, rel=rel, w=sz[0], h=sz[1], ch=ch, md5=md5(dst)))

    bad = [r for r in rows if md5(os.path.join(APP, r['rel'])) != r['md5']]
    if bad:
        sys.exit('staged bytes differ from live: ' + ', '.join(r['name'] for r in bad))

    write_manifest(rows)
    for f in (PDF, SHEET):
        if os.path.exists(f):
            shutil.copy2(f, os.path.join(STAGE, os.path.basename(f)))

    if os.path.exists(OUT):
        os.remove(OUT)
    subprocess.run(['zip', '-r', '-q', '-X', OUT, os.path.basename(STAGE),
                    '-x', '.*', '-x', '__MACOSX/*'], cwd=os.path.dirname(STAGE), check=True)
    n = {g: sum(1 for r in rows if r['grp'] == g) for g in ('measured', 'described-only', 'residual')}
    print(f'{OUT}  {os.path.getsize(OUT)/1e6:.1f} MB')
    print(f'  {len(rows)} pages  {n}')
    print('  every file verified byte-identical to the live app repo')


def write_manifest(rows):
    L = ['=' * W, 'ROUNDS CODEX - CORRECTION BATCH 2', f'{len(rows)} pages.', '=' * W, '']
    L += [para("Every JPEG here is a BYTE-IDENTICAL copy of the file the live site is serving "
               "today. Nothing has been re-encoded, resized or touched."), '',
          '-' * W, 'THE THREE FOLDERS, AND WHY THE SPLIT MATTERS', '-' * W,
          para("measured/        The work order gave a coordinate AND we confirmed a real leader "
               "terminator is there by counting ink at that point. Work these from "
               "Rounds-Codex-unmeasured-tranche1.pdf, which shows each one as an image with a red "
               "marker where the leader ends and a green ring where it belongs."), '',
          para("described-only/  The work order describes the fault in WORDS ONLY - no coordinate. "
               "153 of its 179 rows on these pages are like this. They are here so you have the "
               "complete set, but there is nothing to aim at yet and Photoshopping them from prose "
               "is guesswork. They are waiting on our measuring pass; the findings text is "
               "reproduced below so you can see what is coming."), '',
          para("residual/        Pages that are already corrected and live but still carry a known "
               "defect. Most of these need artwork rather than Photoshop - the reason is stated "
               "against each. See PRODUCTION-residual-after-rerender.md."), '',
          '-' * W, 'THE FOUR RULES', '-' * W,
          para("1. Erase the last segment along the LEADER'S OWN AXIS, then redraw to the target. "
               "Sample the stroke width and colour off the leader itself a little way back from "
               "the tip.", '   '),
          para("2. The test that a move is clean: at the OLD endpoint, ink in a 13x13 box must "
               "fall to ZERO. If ink remains, the leader was extended rather than moved.", '   '),
          para("3. Never repaint artwork. If a fix needs illustration painted over, stop and say "
               "so - that page goes to production instead.", '   '),
          para("4. Save at the SAME pixel dimensions. Do not resample, resize, crop or rotate.",
               '   '), '',
          para("A LESSON FROM BATCH 1, WORTH ONE LINE: two pages came back with a label's TEXT "
               "destroyed rather than its leader moved - 'Right pulmonary artery (posterior to "
               "aorta & SVC)' became one illegible line, and 'Pubic symphysis' became a garbled "
               "remnant. Both were caught before shipping. When a leader starts inside a text "
               "column, check the type after the erase."), '']

    for grp, label in (('measured', 'MEASURED - endpoints verified, work these first'),
                       ('described-only', 'DESCRIBED ONLY - no coordinates yet'),
                       ('residual', 'RESIDUAL - already live, mostly artwork not Photoshop')):
        sel = [r for r in rows if r['grp'] == grp]
        L += ['=' * W, f'{label}   ({len(sel)} pages)', '=' * W]
        for r in sorted(sel, key=lambda r: r['key']):
            L += ['', f"{grp}/{r['name']}   [{r['key']}]",
                  f"    {r['w']}x{r['h']} px, chroma {r['ch']}",
                  f"    md5 {r['md5']}"]
            if grp == 'residual':
                for lab, where, txt in RESIDUAL[r['key']]:
                    L.append(para(f"* {lab}  {where}", '    '))
                    L.append(para(txt, '         '))
            else:
                d = ROWS.get(r['key'])
                if d:
                    L.append(para(d['count'], '    '))
                    for x in d['rows']:
                        tag = '  [CHECK]' if x['check'] else ''
                        L.append(para(f"[{x['n']}] {x['label']}{tag}", '    '))
                        pre = f"({x['now'][0]},{x['now'][1]})  " if x['now'] else ''
                        L.append(para('ENDS ON      ' + pre + x['now_desc'], '         '))
                        if x['target_desc']:
                            L.append(para('ORDER SAYS   ' + x['target_desc'], '         '))
            L.append(f"    goes back to:  {r['rel']}")
        L.append('')
    open(os.path.join(STAGE, 'MANIFEST.txt'), 'w').write('\n'.join(L) + '\n')


if __name__ == '__main__':
    main()
