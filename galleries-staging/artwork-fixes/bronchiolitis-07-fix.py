#!/usr/bin/env python3
"""bronchiolitis page 7 - "Minimal mucus" ended outside the airway wall.

Work order row `bronchiolitis` p7 #1: the leader ends "on the outer adventitial layers on
the OUTSIDE of the airway wall, ~page(634,471)"; it should reach "the inner lining at the
lumen surface, where the mucus layer sits (the 'Thin airway wall' leader already covers
the wall)".

Measured on the shipped page (1024x1536). The leader's own axis is (0.4472,-0.8944) - the
horizontal run sits at y=491 from x=612 to 623, then it rises to a tip at (631,475).
Sampling the tissue 4-5 px either side of that ray, with t = 0 at the tip:

    t < 1     black background, outside the figure
    t 2-16    outer salmon rim, the adventitia/wall  (RGB ~190,100, 80)
    t 16      a dark boundary line
    t 18-27   the pale pink epithelial ring          (RGB ~220,120,125)
    t 28+     dark maroon lumen                      (RGB ~128, 50, 40)

So the shipped tip is at the OUTERMOST margin of the figure and the surface the label
wants is at t ~27.5 - the epithelium/lumen interface.

THIS IS A PURE EXTENSION - nothing is erased. Same finding as `htn` p8: check whether the
correction can be an extension before planning an erase.

Two fidelity choices:
  * the stroke is drawn 8x supersampled at 1.35 px and composited toward the page's own
    leader white (measured peak luma 199-230 on this page's strokes), not painted 255.
  * the terminal dot is not drawn at all - it is LIFTED from the "Open lumen" leader's own
    dot on this same panel (x 632-643, y 421-431) with a soft alpha and composited at the
    new tip, so it keeps the artwork's real shape and antialiasing. That dot is r~2 px,
    peak 248, and is the page's idiom for a leader terminus.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SRC = '/workspace/rounds-codex-app/assets/bronchiolitis/bronchiolitis-07.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/bronchiolitis-07.jpg'

P0 = np.array([631.0, 475.0])          # shipped tip, on the outer margin
U  = np.array([0.4472, -0.8944])       # the leader's own axis, inward
T_END = 27.5                           # epithelium/lumen interface, measured above
INK = np.array([236., 232., 230.], dtype=np.float32)
DOT = (632, 421, 643, 431)             # the "Open lumen" dot to lift

im = Image.open(SRC)
qt, sub = im.quantization, __import__('PIL.JpegImagePlugin', fromlist=['x']).get_sampling(im)
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

SS = 8
m = Image.new('L', (W * SS, H * SS), 0)
ImageDraw.Draw(m).line([tuple((P0 + U * 1.0) * SS), tuple((P0 + U * (T_END - 1.5)) * SS)],
                       fill=255, width=int(round(1.35 * SS)))
A = np.asarray(m.resize((W, H), Image.BOX).filter(ImageFilter.GaussianBlur(0.35))
               ).astype(np.float32) / 255.0
out = a * (1 - A[..., None]) + INK * A[..., None]

x0, y0, x1, y1 = DOT
patch = a[y0:y1, x0:x1]
bg = np.median(patch.reshape(-1, 3), axis=0)
al = np.clip((patch.mean(2) - bg.mean() - 8) / (215.0 - bg.mean()), 0, 1)
al = np.asarray(Image.fromarray((al * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.3))
                ).astype(np.float32) / 255.0
cy, cx = np.unravel_index(np.argmax(patch.mean(2) * al), al.shape)
tip = P0 + U * T_END
ox, oy = int(round(tip[0] - cx)), int(round(tip[1] - cy))
box = out[oy:oy + al.shape[0], ox:ox + al.shape[1]]
out[oy:oy + al.shape[0], ox:ox + al.shape[1]] = box * (1 - al[..., None]) + patch * al[..., None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(
    DST, 'JPEG', qtables=qt, subsampling=sub, optimize=True)

o = np.asarray(Image.open(SRC).convert('RGB')).astype(int)
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
d = np.abs(b - o).max(2)
ys, xs = np.nonzero(d > 20)
print('tip %s  dot pasted at %s  subsampling %s' % (tip.round(1), (ox, oy), sub))
print('changed (>20/255) bbox x %d-%d y %d-%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), len(xs)))
print('global mean abs diff %.3f' % np.abs(b - o).mean())
