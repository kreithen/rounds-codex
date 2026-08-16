#!/usr/bin/env python3
"""Stage the gallery pages with open label findings as a zip the physician can open in Photoshop.

    python3 scripts/stage_pages_to_fix.py [<out.zip>]

Reads `galleries-staging/label-corrections-findings.json` (the same data that drives
`scripts/build_label_correction_pdf.py`) and copies each page out of the LIVE app repo
**byte-identically** -- no re-encode, no resize, no metadata touch. The md5 of every file is
recorded in MANIFEST.txt and re-verified against the live bytes before the zip is written, because
a page that has been silently re-encoded on the way out is indistinguishable by eye from one that
has not, and would come back with a different quantisation table.

Two folders, deliberately:

    photoshop/      every finding is a leader tip, dot or marker that can move over background
    needs-artwork/  the fix needs illustration repainted, a label block re-sited, a panel added
                    or a figure redrawn -- included for completeness, not to be attempted locally

The split is not cosmetic. Every large tissue-side erase attempted on this project left a visible
patch, so a page in `needs-artwork/` that gets Photoshopped anyway produces a worse page than the
defect it fixes.

The zip filename must match `rounds-codex-*.zip`, which `.gitignore` already excludes -- this
bundle carries live app artwork and must not land in the public build repo.
"""
import json, os, shutil, sys, hashlib, textwrap, subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.environ.get('RC_APP_REPO', '/workspace/rounds-codex-app')
FINDINGS = os.path.join(REPO, 'galleries-staging/label-corrections-findings.json')
PDF = os.path.join(REPO, 'galleries-staging/Rounds-Codex-anatomy-label-corrections.pdf')
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, 'rounds-codex-pages-to-fix.zip')
STAGE = '/tmp/rc-pages-to-fix'
W = 94

# Why each of these cannot be a Photoshop job. Keyed by page key in the findings file.
ARTWORK = {
    'acs-p2': 'badge 3 must move ~55 px across myocardium to reach the LAD',
    'acs-p6': 'the ring must move over myocardium that has to be repainted - re-render',
    'aortic-stenosis-p2': 'the LABEL BLOCK has to be re-sited, not the leader - layout change',
    'cardiomyopathy-p1': 'two callouts cross the figure over myocardium; ARRHYTHMOGENIC has no slab to point at',
    'pericarditis-p4': 'the ECG tracing does not contain the finding the arrows name - redraw the strip',
    'anxiety-p2': 'all three structures are off the midsagittal plane - needs an inset, not a marker move',
}


def md5(path):
    return hashlib.md5(open(path, 'rb').read()).hexdigest()


def resolve_paths(pages):
    """page key -> path inside the app repo, read from the deployed galleries.json."""
    g = json.load(open(os.path.join(APP, 'content/galleries.json')))
    G = g.get('galleries', g)
    out = {}
    for p in pages:
        gid, n = p['key'].rsplit('-p', 1)
        e = G[gid]
        im = [i for i in e['images'] if i['n'] == int(n)][0]
        out[p['key']] = os.path.join(e.get('base', ''), im['file'])
    return out


def para(t, ind=''):
    return '\n'.join(textwrap.fill(l, W, initial_indent=ind, subsequent_indent=ind) or ind
                     for l in t.split('\n'))


def main():
    pages = json.load(open(FINDINGS))['pages']
    paths = resolve_paths(pages)
    shutil.rmtree(STAGE, ignore_errors=True)
    ps, aw = os.path.join(STAGE, 'photoshop'), os.path.join(STAGE, 'needs-artwork')
    os.makedirs(ps); os.makedirs(aw)

    rows = []
    for p in pages:
        src = os.path.join(APP, paths[p['key']])
        name = os.path.basename(paths[p['key']])
        dst = os.path.join(aw if p['key'] in ARTWORK else ps, name)
        if os.path.exists(dst):
            sys.exit(f'filename collision: {name} — two pages would overwrite each other')
        shutil.copy2(src, dst)
        from PIL import Image, JpegImagePlugin
        with Image.open(dst) as I:
            sz = I.size
            samp = {0: '4:4:4', 1: '4:2:2', 2: '4:2:0'}.get(JpegImagePlugin.get_sampling(I), '?')
        rows.append(dict(page=p, name=name, dst=dst, w=sz[0], h=sz[1], samp=samp,
                         md5=md5(dst), dest=paths[p['key']], artwork=ARTWORK.get(p['key'])))

    # the check that matters: what we staged is what the site serves
    bad = [r for r in rows if md5(os.path.join(APP, r['dest'])) != r['md5']]
    if bad:
        sys.exit('staged bytes differ from the live file: ' + ', '.join(r['name'] for r in bad))

    write_manifest(rows)
    if os.path.exists(PDF):
        shutil.copy2(PDF, os.path.join(STAGE, os.path.basename(PDF)))

    if os.path.exists(OUT):
        os.remove(OUT)
    subprocess.run(['zip', '-r', '-q', '-X', OUT, os.path.basename(STAGE),
                    '-x', '.*', '-x', '__MACOSX/*'], cwd=os.path.dirname(STAGE), check=True)
    n_ps = sum(1 for r in rows if not r['artwork'])
    print(f'{OUT}  {os.path.getsize(OUT)/1e6:.1f} MB')
    print(f'  {len(rows)} pages  ({n_ps} photoshop, {len(rows)-n_ps} needs-artwork), '
          f'{sum(len(r["page"]["findings"]) for r in rows)} findings')
    print('  every file verified byte-identical to the live app repo')


def write_manifest(rows):
    L = ['=' * W, 'ROUNDS CODEX - GALLERY PAGES WITH MISLABELLED ANATOMY',
         f'{len(rows)} pages, {sum(len(r["page"]["findings"]) for r in rows)} measured findings.',
         '=' * W, '']
    L += [para("Every JPEG here is a BYTE-IDENTICAL copy of the file the live site is serving "
               "today. Nothing has been re-encoded, resized or touched. The md5 of each is listed "
               "below so you can prove that if you ever need to."), '',
          para("Work from Rounds-Codex-anatomy-label-corrections.pdf alongside these. Every "
               "coordinate below and in that PDF is in THIS FILE's own pixels, origin top-left."), '',
          '-' * W, 'THE FOUR RULES', '-' * W,
          para("1. Erase the last segment along the LEADER'S OWN AXIS, then redraw to the target. "
               "Sample the stroke width and colour off the leader itself a little way back from "
               "the tip.", '   '),
          para("2. The test that a move is clean: at the OLD endpoint, ink in a 13x13 box must "
               "fall to ZERO. If ink remains, the leader was extended rather than moved and the "
               "page now has two terminators.", '   '),
          para("3. Never repaint artwork. If a fix needs illustration painted over, stop and say "
               "so - that page goes to production instead.", '   '),
          para("4. Save at the SAME pixel dimensions. Do not resample, resize, crop or rotate. "
               "Save JPEG at high quality; exact quality matching is not needed because each page "
               "is re-encoded on integration at its own quantisation tables and chroma sampling.",
               '   '), '',
          para("Send the corrected JPEGs back with the same filenames. Do not rebuild thumbnails "
               "or gallery PDFs - those are regenerated here, and the gallery download PDF drifts "
               "from the pages if it is not."), '',
          '-' * W, 'TWO FOLDERS, AND WHY', '-' * W,
          para(f"photoshop/     {sum(1 for r in rows if not r['artwork'])} pages. Every finding on "
               "these is a leader tip, a dot or a marker that moves over background or over a "
               "boundary you can erase along. These are the ones to work."), '',
          para(f"needs-artwork/  {sum(1 for r in rows if r['artwork'])} pages. Included so you "
               "have the complete set, but none of these can be fixed in Photoshop: each needs "
               "illustration repainted, a label block re-sited, a panel added, or a figure "
               "redrawn. The reason is stated against each one below."), '']

    for folder, label in (('photoshop', 'PHOTOSHOP'),
                          ('needs-artwork', 'NEEDS ARTWORK - DO NOT ATTEMPT LOCALLY')):
        sel = [r for r in rows if (r['artwork'] is None) == (folder == 'photoshop')]
        L += ['=' * W, f'{label}   ({len(sel)} pages)', '=' * W]
        for r in sorted(sel, key=lambda r: -len(r['page']['findings'])):
            p = r['page']
            L += ['', f"{folder}/{r['name']}",
                  f"    {p['title']}  -  {p['panel']}",
                  f"    {r['w']}x{r['h']} px, chroma {r['samp']}, {len(p['findings'])} finding(s)",
                  f"    md5 {r['md5']}"]
            if r['artwork']:
                L.append(para(f"WHY NOT PHOTOSHOP: {r['artwork']}", '    '))
            for f in p['findings']:
                now = f"({f['now'][0]},{f['now'][1]})" if f.get('now') else '-'
                L.append(para(f"[{f['n']}] {f['label']}", '    '))
                L.append(para(f"NOW      {now}  {f['now_desc']}", '         '))
                tgt = f.get('target_desc') or ''
                if f.get('target'):
                    L.append(para(f"MOVE TO  ({f['target'][0]},{f['target'][1]})  {tgt}", '         '))
                elif tgt:
                    L.append(para(f"MOVE TO  {tgt}", '         '))
            L += ['', f"    goes back to:  {r['dest']}"]
        L.append('')
    open(os.path.join(STAGE, 'MANIFEST.txt'), 'w').write('\n'.join(L) + '\n')


if __name__ == '__main__':
    main()
