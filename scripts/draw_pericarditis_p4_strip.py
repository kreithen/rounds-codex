"""pericarditis p4 - the corrected rhythm strip, drawn to the shipped page's own scale.

Everything below is measured off the shipped page, not chosen: 1 mm = 4.21 px (its large
grid square is 21.05 px), 10 mm/mV, RR = 224 px, P wave 67 px before R, T peak 75 px after.
The ONLY substantive change is that the PR segment is now depressed 1.0 mm below the TP
baseline. On the shipped strip it sits ON the baseline to within 0.2 px, which is why the
two purple arrows have no correct endpoint there.
"""
from PIL import Image, ImageDraw, ImageFont
import math

MM = 4.21                      # px per millimetre, measured
W, H = 1121, 172               # the shipped panel's own size (x 79..1200, y 1136..1308)
CARD = (217, 194, 188)
MINOR = (213, 171, 169)
MAJOR = (206, 156, 154)
TRACE = (26, 26, 30)
GREEN = (24, 128, 60)
PURPLE = (108, 62, 168)

BASE = 118.0                   # TP baseline, px from the top of the panel
RR   = 224.0
R0   = 64.0                    # first R peak
PR_DEPRESSION = 1.0 * MM       # <-- the correction
ST_ELEVATION  = 1.6 * MM       # ~0.16 mV, the range already drawn on the page

im = Image.new('RGB', (W, H), CARD)
d = ImageDraw.Draw(im)
x = 0.0
while x < W:
    d.line([(x, 0), (x, H)], fill=MINOR); x += MM
x = 0.0
while x < W:
    d.line([(x, 0), (x, H)], fill=MAJOR); x += MM * 5
y = BASE % (MM * 5)
while y < H:
    d.line([(0, y), (W, y)], fill=MINOR if round(y - BASE) % round(MM*5) else MAJOR); y += MM
y = BASE
while y > 0: d.line([(0, y), (W, y)], fill=MAJOR); y -= MM * 5
y = BASE
while y < H: d.line([(0, y), (W, y)], fill=MAJOR); y += MM * 5

def beat(cx):
    """One PQRST, returned as a point list. x is px, y is px from the panel top."""
    p = []
    p.append((cx - 110, BASE))                                   # TP baseline
    p.append((cx - 78, BASE))
    for t in range(0, 25):                                       # P wave, 24 px wide
        f = t / 24
        p.append((cx - 78 + t, BASE - 2.2 * MM * math.sin(math.pi * f)))
    p.append((cx - 54, BASE))
    p.append((cx - 50, BASE + PR_DEPRESSION))                    # PR segment, DEPRESSED
    p.append((cx - 14, BASE + PR_DEPRESSION))
    p.append((cx - 10, BASE + 1.0 * MM))                         # Q
    p.append((cx,      BASE - 11.0 * MM))                        # R
    p.append((cx + 7,  BASE + 1.6 * MM))                         # S
    p.append((cx + 12, BASE - ST_ELEVATION))                     # J point, elevated
    for t in range(0, 70):                                       # concave ST rising into the T
        f = t / 69
        y = BASE - ST_ELEVATION * (1 - 0.15 * f) - 4.6 * MM * (math.sin(math.pi * f) ** 1.6)
        p.append((cx + 12 + t, y))
    p.append((cx + 84, BASE))
    p.append((cx + 114, BASE))
    return p

pts = []
k = 0
while R0 + k * RR < W + 120:
    pts += beat(R0 + k * RR); k += 1
d.line([(px, py) for px, py in pts if -5 <= px <= W + 5], fill=TRACE, width=3, joint='curve')

def arrow(tip, tail, col):
    """A leader-arrow from the label down to the component, matching the page's own style."""
    ang = math.degrees(math.atan2(tip[1] - tail[1], tip[0] - tail[0]))
    d.line([tail, tip], fill=col, width=3)
    for s in (152, -152):
        b = math.radians(ang + s)
        d.line([tip, (tip[0] + math.cos(b) * 13, tip[1] + math.sin(b) * 13)], fill=col, width=3)

# short arrows, like the page's own: each drops from just above its beat, not from the label
for k in (0, 1, 2):                                              # ST elevation -> the ST segment
    cx = R0 + k * RR
    tip = (cx + 26, BASE - ST_ELEVATION - 9)
    arrow(tip, (tip[0] - 30, tip[1] - 44), GREEN)
for k in (3, 4):                                                 # PR depression -> the PR segment
    cx = R0 + k * RR
    if cx - 20 > W: continue
    tip = (cx - 30, BASE + PR_DEPRESSION + 11)
    arrow(tip, (tip[0] + 30, tip[1] - 46), PURPLE)

def F(n):
    for p in ('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',):
        try: return ImageFont.truetype(p, n)
        except: pass
    return ImageFont.load_default()
d.text((R0 + 150, 8), 'Diffuse ST elevation', font=F(22), fill=GREEN, anchor='ma')
d.text((R0 + 3 * RR + 20, 8), 'PR depression', font=F(22), fill=PURPLE, anchor='ma')

im.save('/tmp/ecg/pericarditis-04-strip-CORRECTED.png')
im.resize((W * 2, H * 2), Image.LANCZOS).save('/tmp/ecg/preview-2x.png')
print('wrote', im.size, ' PR depression %.1f px = %.2f mm' % (PR_DEPRESSION, PR_DEPRESSION / MM),
      ' ST elevation %.1f px = %.2f mm' % (ST_ELEVATION, ST_ELEVATION / MM))
