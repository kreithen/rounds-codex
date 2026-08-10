#!/usr/bin/env python3
"""addisons page 1 - the "Cortex" leader ends inside the medulla.

Work order row: `addisons` p1 #1 -- "Cortex (glucocorticoids, mineralocorticoids,
androgens)" ends inside the dark brown medulla of the inset cross-section, past the
cortex/medulla boundary: the same tissue the "Medulla" leader points at. It should end on
the orange striated outer band.

Measured on the shipped page (800x1200):
  leader runs from the label at ~(299,218) down-left to a tip at (255,244), unit (0.861,-0.509)
  sampling the tissue 4-5 px either side of the line along its own axis:
    t 0..6    dark brown medulla   (mean RGB ~ 110, 55, 30)
    t 6.5..16.5 orange cortex band (mean RGB ~ 200, 140,  80)
    t >=18    black background
  so the tip sits ~7 px inside the medulla and the band it should reach is t 6.5-16.5.

The correction is a SHORTENING, not a redraw: erase t in [-2.5, 10.2] so the visible
terminus falls inside the orange band. That matches the page's own idiom -- the third
leader into this inset (from below) also stops at the band's boundary rather than pushing
into it.

Erase donor: a clone offset +6 px PERPENDICULAR to the leader. The leader here runs almost
exactly radially out of the medulla's centre (247,250), so its perpendicular is nearly
tangential -- a tangential donor stays in the same radius band and its radial striations
line up with the ones being replaced. Chosen from a contact sheet of eight offsets by eye,
not by score: +/-10 and +/-12 both left a visible step in the cortex/medulla contour.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SRC = '/workspace/rounds-codex-app/addisons-01.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/addisons-01.jpg'

P0 = np.array([255.0, 244.0])          # shipped tip, inside the medulla
U  = np.array([0.861, -0.509])         # unit vector along the leader, toward the label
N  = np.array([-U[1], U[0]])
T0, T1, HALFW = -2.5, 10.2, 2.7
DONOR = 6                              # px along N

im = Image.open(SRC)
qt, sub = im.quantization, 0           # measured: 4:4:4, table above
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

m = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(m)
p0, p1 = P0 + U * T0, P0 + U * T1
d.line([tuple(p0), tuple(p1)], fill=255, width=int(round(HALFW * 2)))
for p in (p0, p1):
    d.ellipse([p[0] - HALFW, p[1] - HALFW, p[0] + HALFW, p[1] + HALFW], fill=255)
M = np.asarray(m.filter(ImageFilter.GaussianBlur(0.8))).astype(np.float32) / 255.0

off = (N * DONOR).round().astype(int)
donor = np.roll(np.roll(a, -off[1], axis=0), -off[0], axis=1)
out = a * (1 - M[..., None]) + donor * M[..., None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(
    DST, 'JPEG', qtables=qt, subsampling=sub, optimize=True)

# QA
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
o = np.asarray(Image.open(SRC).convert('RGB')).astype(int)
diff = np.abs(b - o).max(2)
ys, xs = np.nonzero(diff > 12)
print('changed bbox  x %d-%d  y %d-%d' % (xs.min(), xs.max(), ys.min(), ys.max()))
untouched = diff.copy()
untouched[ys.min() - 4:ys.max() + 5, xs.min() - 4:xs.max() + 5] = 0
print('mean abs diff outside the edit: %.3f  max %d'
      % (np.abs(b - o)[untouched >= 0].mean(), untouched.max()))
