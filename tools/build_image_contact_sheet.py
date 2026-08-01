#!/usr/bin/env python3
"""
Build a print-ready contact sheet of the generated illustrations, each next to the exam
question it belongs to.

    python3 tools/build_image_contact_sheet.py [--urls FILE] [--out FILE] [--all]

Open the result in a browser and use Print -> Save as PDF. That is not a workaround for
laziness -- it is the only way this document can exist:

  A PDF EMBEDS IMAGE BYTES. This container cannot reach the image CDN at all; the agent
  proxy answers `CONNECT tunnel failed, response 403` for d8j0ntlcm91z4.cloudfront.net,
  so the bytes never arrive here and there is nothing to embed. Your browser has ordinary
  internet access, fetches every image itself, and its print engine produces the PDF.
  The page carries @page and break-inside rules so that print is clean rather than an
  afterthought.

  The same fact rules out publishing this as an Artifact: that CSP blocks every external
  host, so remote <img> would silently render as broken boxes.

WHAT IS ON EACH CARD
The point is to see the picture beside the question, so the physician can judge whether the
illustration actually depicts what the vignette describes. So each card carries the real
question text pulled from the shipped bank -- vignette, lead-in and the correct option --
not just the id. Where the question cannot be found the card says so rather than rendering
a confident-looking blank.

Only items with a harvested URL get a picture. The rest are listed at the end, because a
document that silently omits them reads as "this is all of them".
"""
import argparse, json, os, re, html, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, 'tools', 'image-manifest.json')
URLS = os.path.join(ROOT, 'tools', 'generated-image-urls.json')
DATA = os.path.join(ROOT, 'data')


def load_bank():
    """id -> question dict, read out of the 43 shipped bank files.

    They are JS files holding one big array literal, so the object bodies are pulled with a
    brace matcher rather than eval'd -- these are the shipped medical items and running them
    to read them is not a trade worth making.
    """
    out = {}
    for fn in sorted(os.listdir(DATA)):
        if not fn.endswith('.js'):
            continue
        src = open(os.path.join(DATA, fn), encoding='utf-8').read()
        for m in re.finditer(r'\bid\s*:\s*[\'"]([\w-]+)[\'"]', src):
            qid = m.group(1)
            start = src.rfind('{', 0, m.start())
            if start < 0:
                continue
            depth, i, instr, esc, quote = 0, start, False, False, ''
            while i < len(src):
                c = src[i]
                if instr:
                    if esc:
                        esc = False
                    elif c == '\\':
                        esc = True
                    elif c == quote:
                        instr = False
                elif c in '\'"`':
                    instr, quote = True, c
                elif c == '{':
                    depth += 1
                elif c == '}':
                    depth -= 1
                    if depth == 0:
                        break
                i += 1
            body = src[start:i + 1]

            def field(name):
                mm = re.search(name + r'\s*:\s*([\'"`])((?:\\.|(?!\1).)*)\1', body, re.S)
                if not mm:
                    return ''
                # unescape the few sequences the bank actually uses
                v = mm.group(2)
                for a, b in [('\\n', ' '), ("\\'", "'"), ('\\"', '"'), ('\\`', '`'), ('\\\\', '\\')]:
                    v = v.replace(a, b)
                return re.sub(r'\s+', ' ', v).strip()

            opts = re.search(r'options\s*:\s*\[(.*?)\]', body, re.S)
            options = []
            if opts:
                options = [re.sub(r'\s+', ' ', o.group(2)).strip()
                           for o in re.finditer(r'([\'"`])((?:\\.|(?!\1).)*)\1', opts.group(1), re.S)]
            ans = re.search(r'\banswer\s*:\s*(\d)', body)
            vig = field('vignette')
            # The bank marks the intended picture inline as **[IMAGE: ...]**. That sentence is
            # the single most useful line on a review card -- it is the spec the illustration
            # has to satisfy -- so it is lifted out rather than left as raw asterisks mid-prose.
            shot = ''
            mimg = re.search(r'\*{0,2}\[IMAGE:\s*(.+?)\]\*{0,2}', vig, re.S)
            if mimg:
                shot = re.sub(r'\s+', ' ', mimg.group(1)).strip()
                vig = re.sub(r'\s*\*{0,2}\[IMAGE:.+?\]\*{0,2}\s*', ' ', vig, flags=re.S).strip()
            out[qid] = {
                'vignette': vig, 'shows': shot, 'lead': field('lead'),
                'system': field('system'), 'discipline': field('discipline'),
                'topic': field('topic'), 'anchor': field('anchor'),
                'options': options,
                'answer': int(ans.group(1)) if ans else None,
                'file': fn,
            }
    return out


E = lambda s: html.escape(str(s or ''))

CSS = """
:root{--ink:#16202c;--mut:#5d6f82;--line:#d6dfe8;--bg:#fff;--chip:#eef3f8;--acc:#0b6ea8}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
 font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.wrap{max-width:1000px;margin:0 auto;padding:26px 22px 60px}
h1{font-size:23px;margin:0 0 4px}
.sub{color:var(--mut);font-size:13px;margin:0 0 6px}
.note{background:#fdf6e9;border:1px solid #e6cfa4;border-radius:9px;padding:11px 13px;
 font-size:13px;margin:16px 0 24px}
.card{display:grid;grid-template-columns:290px 1fr;gap:20px;border:1px solid var(--line);
 border-radius:12px;padding:16px;margin:0 0 18px;background:#fff}
.card img{width:100%;height:auto;border-radius:8px;border:1px solid var(--line);display:block;
 background:var(--chip)}
.qid{font:600 12px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--acc);
 letter-spacing:.3px}
.title{font-size:16px;font-weight:700;margin:5px 0 8px}
.chips{display:flex;flex-wrap:wrap;gap:5px;margin:0 0 10px}
.chip{background:var(--chip);border-radius:999px;padding:2px 9px;font-size:11.5px;color:var(--mut)}
.lbl{font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;
 color:var(--mut);margin:11px 0 3px}
.vig{font-size:13.2px;line-height:1.52}
.lead{font-weight:600;font-size:13.2px;margin-top:6px}
.ans{font-size:13px;margin-top:6px}
.ans b{color:#116b3a}
.shows{margin:9px 0 0;padding:8px 11px;background:#eaf4fb;border-left:3px solid var(--acc);
 border-radius:0 7px 7px 0;font-size:12.8px}
.shows span{display:block;font-size:10.5px;font-weight:700;letter-spacing:.6px;
 text-transform:uppercase;color:var(--acc);margin-bottom:2px}
.mod{font-size:12.2px;color:var(--mut);margin-top:9px;font-style:italic}
.url{font:11px/1.4 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--mut);
 word-break:break-all;margin-top:9px}
.missing{color:#a3402f;font-size:12.5px}
.pend{border:1px solid var(--line);border-radius:10px;padding:14px 16px;margin-top:26px}
.pend h2{font-size:15px;margin:0 0 8px}
.pend .ids{font:11.5px/1.7 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--mut);
 word-break:break-all}
@media print{
  @page{size:letter;margin:12mm}
  body{background:#fff}
  .wrap{max-width:none;padding:0}
  .note{background:#f6f6f6;border-color:#bbb}
  .card{break-inside:avoid;page-break-inside:avoid;border-color:#bbb;margin-bottom:10px}
  .url{display:none}          /* a printed URL is unclickable noise */
  a{color:inherit;text-decoration:none}
}
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--urls', default=URLS)
    ap.add_argument('--out', default=os.path.join(ROOT, 'Rounds-Codex-Illustrations.html'))
    ap.add_argument('--all', action='store_true',
                    help='include manifest items with no URL as text-only cards')
    a = ap.parse_args()

    man = json.load(open(MANIFEST, encoding='utf-8'))
    man = man if isinstance(man, list) else man.get('items', [])
    urls = json.load(open(a.urls, encoding='utf-8'))
    bank = load_bank()
    by_id = {m['id']: m for m in man}

    have = [i for i in man if i['id'] in urls]
    pending = [i['id'] for i in man if i['id'] not in urls]

    sys.stderr.write(f'manifest {len(man)}, bank {len(bank)} questions, '
                     f'{len(have)} with a URL, {len(pending)} pending\n')
    nofind = [i['id'] for i in have if i['id'] not in bank]
    if nofind:
        sys.stderr.write(f'  WARNING: {len(nofind)} have no matching bank question: {nofind[:6]}\n')

    parts = [f'<!doctype html><meta charset="utf-8">'
             f'<meta name="viewport" content="width=device-width,initial-scale=1">'
             f'<title>Rounds Codex - generated illustrations</title><style>{CSS}</style>'
             f'<div class="wrap"><h1>Generated illustrations, with their exam questions</h1>'
             f'<p class="sub">{len(have)} of {len(man)} illustrated items have a harvested image. '
             f'Built 1 August 2026.</p>'
             f'<div class="note"><b>To save this as a PDF:</b> let every image finish loading, '
             f'then Print (Cmd-P / Ctrl-P) and choose <b>Save as PDF</b>. Turn on '
             f'&ldquo;Background graphics&rdquo; if you want the panel borders. The images are '
             f'fetched by your browser from the Higgsfield CDN, which the Rounds Codex session '
             f'itself cannot reach &mdash; which is why this is an HTML page you print rather '
             f'than a PDF handed to you directly.</div>']

    for it in have:
        qid = it['id']
        q = bank.get(qid)
        u = urls[qid]
        chips = ''.join(f'<span class="chip">{E(c)}</span>' for c in [
            it.get('exam'), (q or {}).get('system') or it.get('system'),
            (q or {}).get('discipline'), (q or {}).get('topic'),
            ('anchor: ' + q['anchor']) if q and q.get('anchor') else None,
        ] if c)
        if q:
            ans = ''
            if q.get('answer') is not None and q.get('options') and q['answer'] < len(q['options']):
                ans = (f'<div class="ans">Correct answer: '
                       f'<b>{chr(65 + q["answer"])}. {E(q["options"][q["answer"]])}</b></div>')
            shows = (f'<div class="shows"><span>Image should show</span> {E(q["shows"])}</div>'
                     if q.get('shows') else '')
            qhtml = (f'<div class="lbl">Vignette</div><div class="vig">{E(q["vignette"])}</div>'
                     f'{shows}<div class="lead">{E(q["lead"])}</div>{ans}')
        else:
            qhtml = ('<div class="lbl">Question</div>'
                     f'<div class="missing">No question with id {E(qid)} was found in the shipped '
                     f'bank. Check before approving this image.</div>')
        parts.append(
            f'<div class="card"><div><img src="{E(u)}" alt="Illustration for {E(qid)}" loading="lazy"></div>'
            f'<div><div class="qid">{E(qid)}</div>'
            f'<div class="title">{E(it.get("title"))}</div>'
            f'<div class="chips">{chips}</div>{qhtml}'
            f'<div class="mod">Intended modality: {E(it.get("modality"))}</div>'
            f'<div class="url"><a href="{E(u)}">{E(u)}</a></div></div></div>')

    if pending:
        ids = ' '.join(E(p) for p in pending)
        parts.append(
            f'<div class="pend"><h2>{len(pending)} illustrated items still have no harvested URL</h2>'
            f'<p class="sub">These were generated but their URLs have not been collected yet '
            f'&mdash; see the harvest runbook. They are listed so this document is not mistaken '
            f'for the complete set.</p><div class="ids">{ids}</div></div>')

    parts.append('</div>')
    open(a.out, 'w', encoding='utf-8').write(''.join(parts))
    print(f'wrote {a.out}  ({os.path.getsize(a.out):,} bytes)  '
          f'{len(have)} image cards, {len(pending)} pending')


if __name__ == '__main__':
    main()
