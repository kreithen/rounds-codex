#!/usr/bin/env python3
"""Build the PDF for the work-order pages we have NOT measured yet.

This is deliberately a different document from
`Rounds-Codex-anatomy-label-corrections.pdf`. That one carries findings we measured on the shipped
artwork -- pixel endpoints, sampled tissue colour under each terminator, a green target. This one
carries the **work order's own text**, unverified. Every page is stamped as such, because the whole
value of the measured sheets is that they say which rows were checked and which were carried, and a
document that blurred the two would undo that.

The order's coordinates have been accurate where we have checked them (on `hepatitis` p2 all
thirteen came out within 2 px), so this is a usable working document -- it is just not evidence.

Usage:  python3 scripts/build_unmeasured_pdf.py [out.pdf]
Inputs: /tmp/order_rows.json   (parsed from the .docx work order)
        /tmp/page_paths.json   (page key -> absolute path in the app repo)
"""
import json, os, sys, io, math, textwrap
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas as rlcanvas
from reportlab.lib.utils import ImageReader

ROWS = json.load(open(os.environ.get('RC_ORDER_ROWS', '/tmp/order_rows.json')))
PATHS = json.load(open(os.environ.get('RC_PAGE_PATHS', '/tmp/page_paths.json')))
OUT = sys.argv[1] if len(sys.argv) > 1 else \
    '/home/user/rounds-codex/galleries-staging/Rounds-Codex-unmeasured-pages.pdf'

W, H = letter
M = 42
RED = (0.86, 0.13, 0.13)
AMB = (0.72, 0.45, 0.05)
GREY = (0.40, 0.40, 0.40)
DARK = (0.13, 0.13, 0.15)
FB = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
DPI = 190

_c = {}
def page_img(k):
    if k not in _c:
        _c[k] = Image.open(PATHS[k]).convert('RGB')
    return _c[k]

def rgb255(c):
    return tuple(int(v * 255) for v in c)

def marked(key, rows, maxw=1200):
    im = page_img(key).copy()
    s = min(maxw / im.width, (maxw * 1.6) / im.height)
    im = im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FB, 30)
    for r in rows:
        if not r.get('now'):
            continue
        x, y = r['now'][0] * s, r['now'][1] * s
        rad, w = 26, 5
        k = rad * 0.7
        d.ellipse([x - rad, y - rad, x + rad, y + rad], outline=rgb255(RED), width=w)
        d.line([x - k, y - k, x + k, y + k], fill=rgb255(RED), width=w)
        d.line([x - k, y + k, x + k, y - k], fill=rgb255(RED), width=w)
        t = str(r['n'])
        bb = d.textbbox((0, 0), t, font=f)
        bx, by = x + rad + 6, y - rad - (bb[3] - bb[1]) - 8
        d.rectangle([bx - 4, by - 4, bx + bb[2] - bb[0] + 6, by + bb[3] - bb[1] + 8], fill=rgb255(RED))
        d.text((bx, by), t, font=f, fill=(255, 255, 255))
    b = Image.new('RGB', (im.width + 2, im.height + 2), (150, 150, 155))
    b.paste(im, (1, 1))
    return b

def reader(pil, wpt, hpt, q=82):
    tw = int(wpt / 72.0 * DPI)
    if pil.width > tw > 40:
        pil = pil.resize((tw, int(hpt / 72.0 * DPI)), Image.LANCZOS)
    buf = io.BytesIO()
    pil.save(buf, 'JPEG', quality=q, subsampling=0, optimize=True)
    buf.seek(0)
    return ImageReader(buf)

c = rlcanvas.Canvas(OUT, pagesize=letter)
c.setTitle('Rounds Codex - pages not yet measured')

def wrap(text, x, y, width, font, size, lead, colour=DARK):
    c.setFillColorRGB(*colour)
    c.setFont(font, size)
    avg = c.stringWidth('n', font, size)
    for para in text.split('\n'):
        for line in textwrap.wrap(para, max(12, int(width / avg))) or ['']:
            c.drawString(x, y, line)
            y -= lead
    return y

def footer(n, lab=''):
    c.setFont('Helvetica', 7.5)
    c.setFillColorRGB(*GREY)
    c.drawString(M, 26, 'Rounds Codex - work-order pages NOT YET MEASURED')
    c.drawCentredString(W / 2, 26, lab)
    c.drawRightString(W - M, 26, str(n))

keys = sorted(ROWS, key=lambda k: (len(ROWS[k]['rows']), k))
nrows = sum(len(ROWS[k]['rows']) for k in keys)

# ---- cover
y = H - 92
c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 25)
c.drawString(M, y, 'Pages not yet measured'); y -= 28
c.setFont('Helvetica', 13); c.setFillColorRGB(*GREY)
c.drawString(M, y, f'{len(keys)} gallery pages, {nrows} flagged labels'); y -= 18
c.setFont('Helvetica', 10)
c.drawString(M, y, 'Rounds Codex  ·  compiled 16 August 2026'); y -= 30
c.setStrokeColorRGB(*GREY); c.setLineWidth(0.6); c.line(M, y, W - M, y); y -= 22

c.setFillColorRGB(*AMB); c.setFont('Helvetica-Bold', 12)
c.drawString(M, y, 'READ THIS FIRST — these findings are NOT ours'); y -= 17
y = wrap("Every row in this document is the WORK ORDER'S text, reproduced as written. We have not "
         "examined these pages at magnification, have not measured a single endpoint on them, and "
         "have not sampled the tissue under any leader. Nothing here has been verified.",
         M, y, W - 2 * M, 'Helvetica', 10, 13.6); y -= 10
y = wrap("That matters because the other document — Rounds-Codex-anatomy-label-corrections.pdf — is "
         "the opposite: every row in it was measured on the shipped artwork, with a pixel endpoint, "
         "the sampled colour under the terminator, and a target. Do not treat the two as the same "
         "kind of evidence.",
         M, y, W - 2 * M, 'Helvetica', 10, 13.6); y -= 10
y = wrap("It is still worth working from. Where we HAVE checked the order's coordinates they have "
         "held up well — on hepatitis p2 all thirteen came out within 2 px of what the order stated "
         "— and the order's authors were told to report [CHECK] rather than guess. Expect the "
         "[CHECK] rows to include pages that turn out to be correct.",
         M, y, W - 2 * M, 'Helvetica', 10, 13.6); y -= 18

c.setStrokeColorRGB(*GREY); c.line(M, y, W - M, y); y -= 20
c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 11)
c.drawString(M, y, 'How to read a page'); y -= 16
y = wrap("A red crossed circle marks where the order says the leader ends, and only 26 of the 179 "
         "rows carry a coordinate — the rest are described in words alone, so most pages have few "
         "markers or none. Rows tagged CHECK are the order's own uncertainty, not ours. There is no "
         "green target anywhere in this document, because we have not established one.",
         M, y, W - 2 * M, 'Helvetica', 10, 13.6); y -= 20

c.setFont('Helvetica-Bold', 9); c.setFillColorRGB(*GREY)
c.drawString(M, y, 'PAGE'); c.drawString(M + 210, y, 'FLAGGED'); c.drawString(M + 275, y, 'PANEL')
y -= 4; c.setLineWidth(0.4); c.line(M, y, W - M, y); y -= 12
for k in keys:
    if y < 64:
        footer('i', 'contents'); c.showPage(); y = H - 64
    r = ROWS[k]
    c.setFont('Helvetica', 8.6); c.setFillColorRGB(*DARK)
    c.drawString(M, y, k)
    c.drawString(M + 210, y, str(len(r['rows'])))
    c.setFillColorRGB(*GREY); c.setFont('Helvetica', 8.2)
    c.drawString(M + 275, y, r['panel'][:52])
    y -= 12
footer('i', 'contents'); c.showPage()

pno = 1
for k in keys:
    data = ROWS[k]
    im = page_img(k)
    rows = data['rows']
    y = H - 50
    c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 15)
    c.drawString(M, y, k); y -= 13
    c.setFont('Helvetica', 8.6); c.setFillColorRGB(*GREY)
    c.drawString(M, y, f"{data['panel']}   ·   {os.path.basename(PATHS[k])}   ·   "
                       f"{im.width}×{im.height} px")
    y -= 12
    c.setFillColorRGB(*AMB); c.setFont('Helvetica-Bold', 8.6)
    c.drawString(M, y, f"NOT MEASURED BY US — {data['count']}")
    y -= 14

    ov = marked(k, rows)
    availw = 236
    availh = y - 52
    s = min(availw / ov.width, availh / ov.height)
    ow, oh = ov.width * s, ov.height * s
    c.drawImage(reader(ov, ow, oh), M, y - oh, ow, oh)

    tx = M + ow + 14
    tw = W - M - tx
    ty = y
    for r in rows:
        if ty < 60:
            footer(pno, k); c.showPage(); pno += 1
            ty = H - 52
            c.setFillColorRGB(*GREY); c.setFont('Helvetica-Bold', 9)
            c.drawString(M, ty, f'{k} (continued)'); ty -= 16
            tx, tw = M, W - 2 * M
        c.setFillColorRGB(*RED); c.setFont('Helvetica-Bold', 8.6)
        c.drawString(tx, ty, r['n'])
        lab = r['label'] + ('   [CHECK]' if r['check'] else '')
        ty = wrap(lab, tx + 14, ty, tw - 14, 'Helvetica-Bold', 8.6, 10.5, DARK)
        now = r['now_desc']
        if r.get('now'):
            now = f"({r['now'][0]},{r['now'][1]})  " + now
        ty = wrap('ENDS ON   ' + now, tx + 14, ty, tw - 14, 'Helvetica', 7.8, 9.4, RED)
        if r['target_desc']:
            ty = wrap('ORDER SAYS   ' + r['target_desc'], tx + 14, ty, tw - 14,
                      'Helvetica', 7.8, 9.4, GREY)
        ty -= 7
    footer(pno, k); c.showPage(); pno += 1

c.save()
print('wrote', OUT, os.path.getsize(OUT), 'bytes,', pno - 1, 'content pages')
