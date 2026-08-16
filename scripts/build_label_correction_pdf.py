#!/usr/bin/env python3
"""Build the mislabelled-anatomy correction PDF.

Per gallery page: a marked-up full page (red = where the leader ends now, green = where it
belongs), a zoom strip showing each finding at 3-6x, and a table of instructions.
"""
import json, os, math, io, textwrap
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas as rlcanvas
from reportlab.lib.utils import ImageReader

ROOT = '/workspace/rounds-codex-app'
PATHS = json.load(open(os.environ.get('RC_PDF_PATHS','/tmp/pdf_paths.json')))
DATA = json.load(open(os.environ.get('RC_FINDINGS','/home/user/rounds-codex/galleries-staging/label-corrections-findings.json')))
OUT = '/home/user/rounds-codex/galleries-staging/Rounds-Codex-anatomy-label-corrections.pdf'

W, H = letter                       # 612 x 792 pt
M = 44                              # margin
RED = (0.86, 0.13, 0.13)
GRN = (0.06, 0.58, 0.24)
GREY = (0.40, 0.40, 0.40)
DARK = (0.13, 0.13, 0.15)

FB = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FR = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

_cache = {}
def page_img(key):
    if key not in _cache:
        _cache[key] = Image.open(os.path.join(ROOT, PATHS[key])).convert('RGB')
    return _cache[key]

def ttf(bold, size):
    return ImageFont.truetype(FB if bold else FR, size)

# ---------------------------------------------------------------- markers

def draw_marker(d, x, y, r, colour, label=None, style='ring', scale=1.0):
    w = max(2, int(2.4 * scale))
    if style == 'ring':
        d.ellipse([x-r, y-r, x+r, y+r], outline=colour, width=w)
        d.line([x-r-6*scale, y, x-r-1*scale, y], fill=colour, width=w)
        d.line([x+r+1*scale, y, x+r+6*scale, y], fill=colour, width=w)
        d.line([x, y-r-6*scale, x, y-r-1*scale], fill=colour, width=w)
        d.line([x, y+r+1*scale, x, y+r+6*scale], fill=colour, width=w)
    else:                                    # 'x'
        k = r*0.72
        d.line([x-k, y-k, x+k, y+k], fill=colour, width=w)
        d.line([x-k, y+k, x+k, y-k], fill=colour, width=w)
        d.ellipse([x-r, y-r, x+r, y+r], outline=colour, width=w)
    if label:
        f = ttf(True, int(13*scale))
        bb = d.textbbox((0, 0), label, font=f)
        tw, th = bb[2]-bb[0], bb[3]-bb[1]
        bx, by = x + r + 5*scale, y - r - th - 5*scale
        d.rectangle([bx-3, by-3, bx+tw+4, by+th+5], fill=colour)
        d.text((bx, by), label, font=f, fill=(255, 255, 255))

def arrow(d, p, q, colour, scale=1.0):
    d.line([p, q], fill=colour, width=max(2, int(2.2*scale)))
    ang = math.atan2(q[1]-p[1], q[0]-p[0]); L = 11*scale; s = 0.42
    d.polygon([q,
               (q[0]-L*math.cos(ang-s), q[1]-L*math.sin(ang-s)),
               (q[0]-L*math.cos(ang+s), q[1]-L*math.sin(ang+s))], fill=colour)

def rgb255(c):
    return tuple(int(v*255) for v in c)

# ---------------------------------------------------------------- overview

def overview(page, maxw, maxh):
    im = page_img(page['key']).copy()
    s = min(maxw/im.width, maxh/im.height)
    im = im.resize((int(im.width*s), int(im.height*s)), Image.LANCZOS)
    d = ImageDraw.Draw(im)
    sc = max(1.5, s*3.0)
    for f in page['findings']:
        if f.get('now'):
            x, y = f['now'][0]*s, f['now'][1]*s
            if f.get('target'):
                tx, ty = f['target'][0]*s, f['target'][1]*s
                dx, dy = tx-x, ty-y; L = math.hypot(dx, dy)
                if L > 26:
                    ux, uy = dx/L, dy/L
                    arrow(d, (x+ux*13, y+uy*13), (tx-ux*13, ty-uy*13), rgb255(GRN), sc)
                draw_marker(d, tx, ty, 11*sc, rgb255(GRN), None, 'ring', sc)
            draw_marker(d, x, y, 11*sc, rgb255(RED), str(f['n']), 'x', sc)
    b = Image.new('RGB', (im.width+2, im.height+2), (150, 150, 155))
    b.paste(im, (1, 1))
    return b

# ---------------------------------------------------------------- zoom

def zoom(page, f, boxw, boxh):
    im = page_img(page['key'])
    pts = [f['now']] + ([f['target']] if f.get('target') else [])
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    cx, cy = sum(xs)/len(xs), sum(ys)/len(ys)
    span = max(max(xs)-min(xs), max(ys)-min(ys))
    half = max(52, span*0.62 + 38)
    ar = boxw/boxh
    hw, hh = half*ar, half
    x0, y0 = int(cx-hw), int(cy-hh)
    x1, y1 = int(cx+hw), int(cy+hh)
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(im.width, x1), min(im.height, y1)
    crop = im.crop((x0, y0, x1, y1))
    s = min(boxw*3/crop.width, boxh*3/crop.height)
    crop = crop.resize((int(crop.width*s), int(crop.height*s)), Image.LANCZOS)
    d = ImageDraw.Draw(crop)
    nx, ny = (f['now'][0]-x0)*s, (f['now'][1]-y0)*s
    if f.get('target'):
        tx, ty = (f['target'][0]-x0)*s, (f['target'][1]-y0)*s
        dx, dy = tx-nx, ty-ny; L = math.hypot(dx, dy)
        if L > 40:
            ux, uy = dx/L, dy/L
            arrow(d, (nx+ux*27, ny+uy*27), (tx-ux*27, ty-uy*27), rgb255(GRN), 2.3)
        draw_marker(d, tx, ty, 21, rgb255(GRN), None, 'ring', 2.3)
    draw_marker(d, nx, ny, 21, rgb255(RED), str(f['n']), 'x', 2.3)
    b = Image.new('RGB', (crop.width+2, crop.height+2), (150, 150, 155))
    b.paste(crop, (1, 1))
    return b

# ---------------------------------------------------------------- pdf text

def wrap(c, text, x, y, width, font, size, lead, colour=DARK):
    c.setFillColorRGB(*colour); c.setFont(font, size)
    avg = c.stringWidth('n', font, size)
    for para in text.split('\n'):
        for line in textwrap.wrap(para, max(12, int(width/avg))) or ['']:
            c.drawString(x, y, line); y -= lead
    return y

DPI = 190
def img_reader(pil, wpt=None, hpt=None, q=82):
    """Downsample to DPI at the size it will be drawn, then JPEG-encode.
    A 1024x1536 page drawn 3 inches wide does not need 1024 px of data."""
    if wpt and hpt:
        tw, th = int(wpt/72.0*DPI), int(hpt/72.0*DPI)
        if pil.width > tw and tw > 40:
            pil = pil.resize((tw, max(1, th)), Image.LANCZOS)
    b = io.BytesIO(); pil.save(b, 'JPEG', quality=q, subsampling=0, optimize=True); b.seek(0)
    return ImageReader(b)

def draw_notes(c, p, y):
    if p.get('note'):
        c.setFillColorRGB(*GREY); c.setFont('Helvetica-Bold', 8.5)
        c.drawString(M, y, 'NOTES'); y -= 13
        y = wrap(c, p['note'], M, y, W-2*M, 'Helvetica', 9, 12.4)
        y -= 12
    if p.get('carried'):
        c.setFillColorRGB(*GREY); c.setFont('Helvetica-Bold', 8.5)
        c.drawString(M, y, 'CARRIED FROM THE WORK ORDER - NOT RE-MEASURED HERE'); y -= 13
        for row, lab, txt in p['carried']:
            c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 9)
            c.drawString(M, y, f'{row}')
            y = wrap(c, lab, M+22, y, W-2*M-22, 'Helvetica-Bold', 9, 11)
            y = wrap(c, txt, M+22, y, W-2*M-22, 'Helvetica', 8.6, 10.6, GREY)
            y -= 8
    return y

# ---------------------------------------------------------------- build

c = rlcanvas.Canvas(OUT, pagesize=letter)
c.setTitle('Rounds Codex — anatomy label corrections')
c.setAuthor('Rounds Codex')

def footer(n, label=''):
    c.setFont('Helvetica', 7.5); c.setFillColorRGB(*GREY)
    c.drawString(M, 26, 'Rounds Codex — mislabelled anatomy corrections')
    c.drawCentredString(W/2, 26, label)
    c.drawRightString(W-M, 26, str(n))

# ---- cover
y = H - 96
c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 26)
c.drawString(M, y, 'Anatomy label corrections'); y -= 30
c.setFont('Helvetica', 14); c.setFillColorRGB(*GREY)
c.drawString(M, y, 'Leader lines that do not end on the structure they name'); y -= 20
c.setFont('Helvetica', 10)
c.drawString(M, y, 'Rounds Codex  ·  compiled 16 August 2026'); y -= 34

c.setStrokeColorRGB(*GREY); c.setLineWidth(0.6); c.line(M, y, W-M, y); y -= 24

y = wrap(c, 'HOW TO READ EVERY FIGURE IN THIS DOCUMENT', M, y, W-2*M, 'Helvetica-Bold', 10.5, 15)
y -= 4
c.setFillColorRGB(*RED); c.setFont('Helvetica-Bold', 10)
c.drawString(M+8, y, 'RED')
c.setFillColorRGB(*DARK); c.setFont('Helvetica', 10)
c.drawString(M+66, y, 'crossed circle  —  where the leader, dot or badge ends NOW. The number matches the table.'); y -= 16
c.setFillColorRGB(*GRN); c.setFont('Helvetica-Bold', 10)
c.drawString(M+8, y, 'GREEN')
c.setFillColorRGB(*DARK); c.setFont('Helvetica', 10)
c.drawString(M+66, y, 'plain circle  —  where it belongs, with an arrow running from red to green.'); y -= 26

body = ("Every coordinate is in the SHIPPED page's own pixels, origin top-left. Where a page is "
        "off-standard its size is printed in the page header, so the numbers can be scaled if you "
        "work from a larger master.\n\n"
        "Where a target is given as a coordinate it was measured, and the tissue under it was "
        "sampled with the leader's own ink excluded. Where a target is described in words but not "
        "numbered, it could not be pinned to a pixel from the shipped render and needs placing from "
        "the source file — those are marked PLACE FROM SOURCE and are not guesses to be actioned "
        "blindly.\n\n"
        "Some rows cannot be fixed by moving anything: the structure the label names is not drawn on "
        "the page. Those say so explicitly. They need artwork or a different view, and re-aiming the "
        "leader would only move the error.")
y = wrap(c, body, M, y, W-2*M, 'Helvetica', 10, 14)
y -= 14

c.setStrokeColorRGB(*GREY); c.line(M, y, W-M, y); y -= 22
y = wrap(c, 'WHAT IS IN HERE', M, y, W-2*M, 'Helvetica-Bold', 10.5, 15); y -= 2
nfind = sum(len(p['findings']) for p in DATA['pages'])
y = wrap(c, f"{len(DATA['pages'])} gallery pages, {nfind} measured findings. These are the pages "
            "whose corrections are measured and still open. Pages already corrected and deployed are "
            "not included.", M, y, W-2*M, 'Helvetica', 10, 14)
y -= 16

c.setFont('Helvetica-Bold', 9); c.setFillColorRGB(*GREY)
c.drawString(M, y, 'PAGE'); c.drawString(M+230, y, 'FINDINGS'); c.drawString(M+300, y, 'WHAT IT IS')
y -= 4; c.setLineWidth(0.4); c.line(M, y, W-M, y); y -= 13
for i, p in enumerate(DATA['pages']):
    if y < 70:
        footer('i', 'contents'); c.showPage(); y = H - 70
    c.setFont('Helvetica', 9); c.setFillColorRGB(*DARK)
    c.drawString(M, y, p['title'][:44])
    c.drawString(M+230, y, str(len(p['findings'])))
    c.setFillColorRGB(*GREY); c.setFont('Helvetica', 8.5)
    c.drawString(M+300, y, p['panel'][:44])
    y -= 13
footer('ii', 'contents'); c.showPage()

# ---- how to make the corrections
y = H - 62
c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 18)
c.drawString(M, y, 'How to make the corrections'); y -= 26

SEC = [
 ("1.  Moving a leader tip or a dot  —  most of this document",
  "Erase the last segment along the LEADER'S OWN AXIS, then redraw to the green point. Two things "
  "keep it invisible: take the stroke width and colour by sampling the leader itself a little way "
  "back from the tip, and erase along the axis rather than with a box, so the surrounding artwork "
  "is never touched.\n"
  "The test that the move is clean: at the OLD endpoint, ink in a 13x13 box should fall to ZERO. "
  "If ink remains there, the leader was extended rather than moved, and the page now carries two "
  "terminators."),
 ("2.  Never repaint artwork",
  "If a fix would mean painting over illustration - erasing a disc of shaded tissue, rebuilding a "
  "background, redrawing a structure - stop and mark the page for a re-render instead. This has "
  "been attempted here and it does not repair cleanly; every large tissue-side erase left a visible "
  "patch. Several rows in this document say exactly that and are addressed to the illustrator, not "
  "to Photoshop."),
 ("3.  Rows that no move can fix",
  "Where the structure the label names is NOT DRAWN on the page, re-aiming the leader only moves "
  "the error somewhere else. Those rows say so in the text and need artwork or a different view - "
  "for example a lateral inset, an added slab, or a redrawn tracing. Rows marked PLACE FROM SOURCE "
  "are ones we could not pin to a pixel from the shipped render; place them from the layered file."),
 ("4.  Save at the SAME pixel dimensions",
  "Do not resample, resize, crop or rotate. The coordinates in this document are in the shipped "
  "page's own pixels, and the app, the thumbnails and the download PDF are all built from that "
  "geometry. Save as JPEG at high quality - we re-encode on integration at the file's own "
  "quantisation tables and chroma sampling, so an exact quality match on your side is not needed, "
  "but a resize breaks everything downstream."),
 ("5.  Send the corrected page back; do not rebuild anything else",
  "We regenerate the thumbnail and rebuild that gallery's download PDF. That second step matters: "
  "the download PDF is a separate build artefact and drifts from the pages if it is not rebuilt - "
  "four galleries shipped for months with an old logo in the PDF while the app showed the current "
  "one."),
 ("6.  One page at a time is fine",
  "Corrections are integrated and deployed in batches of about six pages. Each one is measured "
  "against the sheet before it ships - what was fixed, what was missed, and what was left - and "
  "that measurement is reported back honestly rather than assumed."),
]
for head, body in SEC:
    if y < 120:
        footer('iii', 'method'); c.showPage(); y = H - 62
    c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 10.5)
    c.drawString(M, y, head); y -= 15
    y = wrap(c, body, M+10, y, W-2*M-10, 'Helvetica', 9.5, 12.8)
    y -= 15
footer('iii', 'method'); c.showPage()


pageno = 1
for p in DATA['pages']:
    im = page_img(p['key'])
    label = f"{p['title']}"
    # ---------- page A: overview + findings table
    y = H - 54
    c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 16)
    c.drawString(M, y, p['title']); y -= 15
    c.setFont('Helvetica', 9); c.setFillColorRGB(*GREY)
    c.drawString(M, y, f"{p['panel']}   ·   {os.path.basename(PATHS[p['key']])}   ·   "
                       f"{im.width}×{im.height} px   ·   {len(p['findings'])} findings")
    y -= 18
    c.setFillColorRGB(*DARK)
    y = wrap(c, p['status'], M, y, W-2*M, 'Helvetica-Bold', 9.5, 13)
    y -= 4
    y = wrap(c, p['lead'], M, y, W-2*M, 'Helvetica', 9, 12.4)
    y -= 12

    ov = overview(p, 1200, 1800)
    availh = y - 58
    availw = W - 2*M - 218
    s = min(availw/ov.width, availh/ov.height)
    ow, oh = ov.width*s, ov.height*s
    ox = M
    c.drawImage(img_reader(ov, ow, oh), ox, y-oh, ow, oh)

    # table beside it
    tx = ox + ow + 14
    tw = W - M - tx
    ty = y - 2
    c.setFont('Helvetica-Bold', 8); c.setFillColorRGB(*GREY)
    c.drawString(tx, ty, 'WHAT TO CHANGE'); ty -= 12
    for f in p['findings']:
        if ty < 62:
            break
        c.setFillColorRGB(*RED); c.setFont('Helvetica-Bold', 8.5)
        c.drawString(tx, ty, f"{f['n']}")
        c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 8.5)
        ty = wrap(c, f['label'], tx+13, ty, tw-13, 'Helvetica-Bold', 8.5, 10.4)
        nowtxt = f"NOW  ({f['now'][0]},{f['now'][1]})  {f['now_desc']}" if f.get('now') else f['now_desc']
        ty = wrap(c, nowtxt, tx+13, ty, tw-13, 'Helvetica', 8, 9.6, RED)
        tgt = f.get('target_desc') or ''
        if f.get('target'):
            tgt = f"MOVE TO  ({f['target'][0]},{f['target'][1]})  {tgt}"
        elif tgt:
            tgt = f"MOVE TO  {tgt}"
        if tgt:
            ty = wrap(c, tgt, tx+13, ty, tw-13, 'Helvetica', 8, 9.6, GRN)
        ty -= 6
    footer(pageno, label); c.showPage(); pageno += 1

    # ---------- page B: zooms (2 per row), notes folded onto the last one if they fit
    zs = [f for f in p['findings'] if f.get('now')]
    per = 4
    chunks = [zs[i:i+per] for i in range(0, len(zs), per)] or [[]]
    for ci, chunk in enumerate(chunks):
        y = H - 54
        c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 13)
        c.drawString(M, y, f"{p['title']} — close-ups"); y -= 13
        c.setFont('Helvetica', 8.5); c.setFillColorRGB(*GREY)
        c.drawString(M, y, 'red crossed circle = where it ends now      green plain circle = where it belongs')
        y -= 14
        cw = (W - 2*M - 18) / 2
        ch = 210
        lowest = y
        for i, f in enumerate(chunk):
            col, row = i % 2, i // 2
            bx = M + col*(cw+18)
            by = y - row*(ch+96) - ch
            z = zoom(p, f, cw, ch)
            sz = min(cw/z.width, ch/z.height)
            c.drawImage(img_reader(z, z.width*sz, z.height*sz), bx, by, z.width*sz, z.height*sz)
            cy = by - 10
            c.setFillColorRGB(*RED); c.setFont('Helvetica-Bold', 9)
            c.drawString(bx, cy, str(f['n']))
            c.setFillColorRGB(*DARK)
            cy = wrap(c, f['label'], bx+13, cy, cw-13, 'Helvetica-Bold', 9, 11)
            nowtxt = f"({f['now'][0]},{f['now'][1]}) {f['now_desc']}"
            cy = wrap(c, nowtxt, bx+13, cy, cw-13, 'Helvetica', 7.6, 9.2, RED)
            tgt = f.get('target_desc') or ''
            if f.get('target'):
                tgt = f"-> ({f['target'][0]},{f['target'][1]}) {tgt}"
            elif tgt:
                tgt = f"-> {tgt}"
            if tgt:
                cy = wrap(c, tgt, bx+13, cy, cw-13, 'Helvetica', 7.6, 9.2, GRN)
            lowest = min(lowest, cy)

        last = (ci == len(chunks)-1)
        notes = p.get('note'); carried = p.get('carried')
        if last and (notes or carried):
            need = 0
            if notes:  need += 26 + 13*max(1, len(notes)//92 + 1)
            if carried: need += 20 + sum(30 + 11*(len(t)//96 + 1) for _, _, t in carried)
            ny = lowest - 22
            if ny - need > 52:
                c.setStrokeColorRGB(*GREY); c.setLineWidth(0.4); c.line(M, ny+10, W-M, ny+10)
                ny = draw_notes(c, p, ny)
                notes = carried = None
        footer(pageno, label); c.showPage(); pageno += 1

    # ---------- page C: notes, only if they did not fit above
    if (p.get('note') or p.get('carried')) and notes is not None:
        y = H - 54
        c.setFillColorRGB(*DARK); c.setFont('Helvetica-Bold', 13)
        c.drawString(M, y, f"{p['title']} — notes"); y -= 20
        draw_notes(c, p, y)
        footer(pageno, label); c.showPage(); pageno += 1

c.save()
print('wrote', OUT, os.path.getsize(OUT), 'bytes,', pageno-1, 'pages')
