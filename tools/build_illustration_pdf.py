#!/usr/bin/env python3
"""
Build a PDF of downloaded illustrations, each on a page with the exam question it belongs to.

    python3 tools/build_illustration_pdf.py <image-dir-or-files...> [--out FILE] [--batch N]

WHY THE IMAGES MUST BE DOWNLOADED RATHER THAN LINKED
The Higgsfield CDN returns 403 Forbidden to anything that is not an authenticated session on
their site -- confirmed 2026-08-01 against two different recorded URLs, fetched through a
route that does not use this container's egress proxy, so the 403 is CloudFront's own answer
and not a sandbox restriction. An earlier note in this repo claimed the URLs were unsigned
and therefore durable and shareable. That was wrong, and the consequence is not cosmetic: a
remote <img> to one of these renders as a broken icon in ANY page, so no amount of URL
harvesting produces a document anyone can look at. The bytes have to come down first.

HOW AN IMAGE IS MATCHED TO A QUESTION, in order, first match wins:

  1. A question id in the filename        s1-0085.png, s2ck-0060_v2.jpg
  2. A generation UUID in the filename     hf_20260731_141233_<uuid>.png
     mapped through tools/higgsfield-jobs-0731.json (job id -> question id)
  3. A sidecar map passed with --map       {"<filename or stem>": "<question-id>"}

Anything unmatched is reported and placed at the END of the PDF under "unidentified", never
guessed at by position. Ordering is not identity: these are medical illustrations, and one
attached to the wrong vignette is worse than one that is missing.

--batch N splits the output into N-image files, because a browser download folder and a mail
attachment both have limits, and 174 full-resolution pages in one PDF is around 80 MB.
"""
import argparse, io, json, os, re, sys

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                Image as RLImage, PageBreak, KeepTogether)
from PIL import Image as PILImage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
from build_image_contact_sheet import load_bank            # one parser, not two

MANIFEST = os.path.join(ROOT, 'tools', 'image-manifest.json')
JOBS = os.path.join(ROOT, 'tools', 'higgsfield-jobs-0731.json')
EXT = ('.png', '.jpg', '.jpeg', '.webp')

UUID_RE = re.compile(r'([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', re.I)
# (?!\d) not \b at the end: underscore is a word character, so \b fails on the very
# common "s2ck-0060_v2.jpg" shape a re-download produces. Caught in testing.
QID_RE = re.compile(r'(?<![\w-])(s1|s2ck|s3)-(\d{4})(?!\d)', re.I)

INK = colors.HexColor('#16202c'); MUTED = colors.HexColor('#5d6f82')
ACC = colors.HexColor('#0b6ea8'); RULE = colors.HexColor('#d6dfe8')
CHIP = colors.HexColor('#eef3f8'); SHOW = colors.HexColor('#eaf4fb')


def S(n, **kw):
    b = dict(fontName='Helvetica', fontSize=9.6, leading=13.2, textColor=INK, spaceAfter=5)
    b.update(kw); return ParagraphStyle(n, **b)


st = {
    'qid':   S('qid', fontName='Courier-Bold', fontSize=9.5, textColor=ACC, spaceAfter=1),
    'title': S('title', fontName='Helvetica-Bold', fontSize=14, leading=17, spaceAfter=4),
    'chips': S('chips', fontSize=8.4, textColor=MUTED, spaceAfter=7),
    'lbl':   S('lbl', fontName='Helvetica-Bold', fontSize=7.8, textColor=MUTED, spaceAfter=2),
    'body':  S('body'),
    'lead':  S('lead', fontName='Helvetica-Bold'),
    'ans':   S('ans', textColor=colors.HexColor('#116b3a'), fontName='Helvetica-Bold'),
    'shows': S('shows', fontSize=9.4, leading=12.6, spaceAfter=0),
    'mod':   S('mod', fontSize=8.6, leading=11.4, textColor=MUTED),
    'warn':  S('warn', fontSize=9.4, textColor=colors.HexColor('#a3402f')),
    'h1':    S('h1', fontName='Helvetica-Bold', fontSize=17, leading=21, spaceAfter=3),
    'sub':   S('sub', fontSize=9.6, textColor=MUTED, spaceAfter=12),
}


def esc(s):
    return (str(s or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def fit(path, max_w, max_h):
    """Scale to fit the box, preserving aspect. ReportLab will happily distort otherwise, and
    a stretched clinical photograph is a misleading clinical photograph."""
    with PILImage.open(path) as im:
        w, h = im.size
    r = min(max_w / w, max_h / h)
    return RLImage(path, width=w * r, height=h * r)


def collect(paths):
    out = []
    for p in paths:
        if os.path.isdir(p):
            for f in sorted(os.listdir(p)):
                if f.lower().endswith(EXT):
                    out.append(os.path.join(p, f))
        elif p.lower().endswith(EXT):
            out.append(p)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('paths', nargs='+', help='image files, or directories of them')
    ap.add_argument('--out', default=os.path.join(ROOT, 'Rounds-Codex-Illustrations.pdf'))
    ap.add_argument('--batch', type=int, default=0, help='split into files of N images')
    ap.add_argument('--map', help='JSON sidecar: {"filename or stem": "question-id"}')
    a = ap.parse_args()

    files = collect(a.paths)
    if not files:
        sys.exit('no images found in: ' + ', '.join(a.paths))

    jobs = json.load(open(JOBS, encoding='utf-8')) if os.path.exists(JOBS) else {}
    sidecar = json.load(open(a.map, encoding='utf-8')) if a.map else {}
    man = json.load(open(MANIFEST, encoding='utf-8'))
    man = man if isinstance(man, list) else man.get('items', [])
    by_id = {m['id']: m for m in man}
    bank = load_bank()

    matched, unmatched, how = [], [], {}
    for f in files:
        stem = os.path.splitext(os.path.basename(f))[0]
        qid = None
        m = QID_RE.search(stem)
        if m:
            qid, how[f] = m.group(0).lower(), 'question id in the filename'
        if not qid:
            u = UUID_RE.search(stem)
            if u and u.group(1).lower() in jobs:
                qid, how[f] = jobs[u.group(1).lower()], 'generation uuid -> job map'
        if not qid:
            for k in (os.path.basename(f), stem):
                if k in sidecar:
                    qid, how[f] = sidecar[k], 'sidecar map'
                    break
        (matched if qid else unmatched).append((f, qid))

    print(f'{len(files)} image(s): {len(matched)} matched, {len(unmatched)} unidentified')
    tally = {}
    for f, q in matched:
        tally[how[f]] = tally.get(how[f], 0) + 1
    for k, v in tally.items():
        print(f'   {v:4d}  by {k}')
    if unmatched:
        print('   unidentified: ' + ', '.join(os.path.basename(f) for f, _ in unmatched[:6])
              + (' ...' if len(unmatched) > 6 else ''))
    nofind = [q for _, q in matched if q not in bank]
    if nofind:
        print(f'   WARNING: {len(nofind)} matched to ids with no bank question: {nofind[:5]}')

    matched.sort(key=lambda t: t[1])
    groups = ([matched[i:i + a.batch] for i in range(0, len(matched), a.batch)]
              if a.batch else [matched])

    written = []
    for gi, group in enumerate(groups, 1):
        out = a.out
        if len(groups) > 1:
            base, ext = os.path.splitext(a.out)
            out = f'{base}-{gi:02d}-of-{len(groups):02d}{ext}'
        doc = SimpleDocTemplate(out, pagesize=LETTER,
                                leftMargin=0.7 * inch, rightMargin=0.7 * inch,
                                topMargin=0.6 * inch, bottomMargin=0.6 * inch,
                                title='Rounds Codex illustrations', author='Rounds Codex')
        story = []
        if gi == 1:
            story += [Paragraph('Generated illustrations, with their exam questions', st['h1']),
                      Paragraph(f'{len(matched)} image(s)'
                                + (f', batch {gi} of {len(groups)}' if len(groups) > 1 else '')
                                + '. Each page pairs the picture with the question it is '
                                  'attached to and what that question says the image should '
                                  'show.', st['sub'])]
        for n, (f, qid) in enumerate(group):
            if n or gi > 1 or True:
                pass
            q = bank.get(qid, {})
            it = by_id.get(qid, {})
            chips = ' &nbsp;·&nbsp; '.join(esc(c) for c in [
                it.get('exam'), q.get('system'), q.get('discipline'), q.get('topic')] if c)
            right = [Paragraph(esc(qid), st['qid']),
                     Paragraph(esc(it.get('title') or q.get('topic') or '(untitled)'), st['title'])]
            if chips:
                right.append(Paragraph(chips, st['chips']))
            if q:
                right += [Paragraph('VIGNETTE', st['lbl']),
                          Paragraph(esc(q['vignette']), st['body'])]
                if q.get('shows'):
                    inner = Table([[Paragraph('<b>IMAGE SHOULD SHOW</b><br/>' + esc(q['shows']),
                                              st['shows'])]], colWidths=[3.55 * inch])
                    inner.setStyle(TableStyle([
                        ('BACKGROUND', (0, 0), (-1, -1), SHOW),
                        ('LINEBEFORE', (0, 0), (0, -1), 2.2, ACC),
                        ('LEFTPADDING', (0, 0), (-1, -1), 7), ('RIGHTPADDING', (0, 0), (-1, -1), 7),
                        ('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6)]))
                    right += [Spacer(1, 3), inner, Spacer(1, 6)]
                right.append(Paragraph(esc(q['lead']), st['lead']))
                if q.get('answer') is not None and len(q.get('options') or []) > q['answer']:
                    right.append(Paragraph(
                        chr(65 + q['answer']) + '. ' + esc(q['options'][q['answer']]), st['ans']))
            else:
                right.append(Paragraph(
                    f'No question with id {esc(qid)} was found in the shipped bank. '
                    'Check before approving this image.', st['warn']))
            if it.get('modality'):
                right += [Spacer(1, 4), Paragraph('Intended modality: ' + esc(it['modality']), st['mod'])]

            img = fit(f, 3.25 * inch, 8.4 * inch)
            row = Table([[img, right]], colWidths=[3.4 * inch, 3.7 * inch])
            row.setStyle(TableStyle([
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (0, 0), 14),
                ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0)]))
            story.append(row)
            if n != len(group) - 1:
                story.append(PageBreak())

        if unmatched and gi == len(groups):
            story.append(PageBreak())
            story.append(Paragraph('Unidentified images', st['h1']))
            story.append(Paragraph(
                'These could not be matched to a question from their filename, and are NOT '
                'guessed at by position. Rename them to the question id, or supply a --map '
                'sidecar.', st['sub']))
            for f, _ in unmatched:
                story += [Paragraph(esc(os.path.basename(f)), st['qid']),
                          fit(f, 2.6 * inch, 3.4 * inch), Spacer(1, 10)]

        doc.build(story)
        written.append(out)
        print(f'wrote {out}  ({os.path.getsize(out):,} bytes, {len(group)} image(s))')
    return written


if __name__ == '__main__':
    main()
