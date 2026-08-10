#!/usr/bin/env python3
"""pud page 2 - "Pylorus (pyloric sphincter)" ended inside the duodenal bulb.

Work order row `pud` p2 #1: the leader ends on "the mucosal surface inside the duodenal
bulb, well distal (left) of the pyloric narrowing"; it should reach "the constricted neck
between the gastric antrum and the duodenal bulb, about 120 px to the right of the
endpoint".

Measured on the shipped page (1024x1536):
  the shipped leader is a plain vertical stroke at x=248.5 from y=391 to a dot centred
  (248.5,450), r~3.5. Sampling 5-6 px either side of it: black background to y 407, the
  pale cut wall band y 409-431, dark red bulb interior from y 433. So the dot is in the
  bulb's lumen, ~120 px distal to the sphincter, exactly as the row says.

  the pylorus is drawn as a thickened muscular collar: the cut wall doubles back on itself
  at x~368, y 432-445, and a corresponding fold sits below at y 470-480, with a paler
  vertical column of muscle between them separating bulb from antrum. (370,455) is the
  middle of that collar.

The leader is re-routed as a single ~45 degree diagonal from below the label's right end
to the collar, which is shorter than the vertical it replaces and crosses the organ wall
once.

ERASE DONOR - the finding worth keeping. The wall band here is an ARC, not horizontal
banding, and a plain horizontal clone (the rule for banded backgrounds) fails visibly:
+/-18 and +/-26 px all leave a vertical scar where the arc is displaced. Fitting the
organ's top edge over x 210-292 gives dy/dx = -0.33 locally, and a donor ALONG that
tangent - (+14,-4.6) - is invisible at 9x across all three zones the stroke crosses.
(-14,+4.6) leaves a small step in the outer rim; (+/-20,-/+7) duplicate a rugal scallop.
So: clone along the band, but measure which way the band actually runs.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, JpegImagePlugin

SRC = '/workspace/rounds-codex-app/assets/pud/pud-02.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/pud-02.jpg'

TOP = np.array([248.5, 388.0])       # top of the shipped vertical stroke
OLD_DOT = np.array([248.5, 450.0])   # shipped terminus, in the bulb lumen
NEW_START = np.array([300.0, 390.0])  # just below the label's right end
NEW_END = np.array([367.0, 452.0])
NEW_DOT = np.array([370.0, 455.0])   # the pyloric collar
DONOR = (14.0, -4.6)                 # along the wall arc's tangent
DOTBOX = (243, 444, 255, 457)
INK = np.array([238., 238., 240.], dtype=np.float32)

im = Image.open(SRC)
qt, sub = im.quantization, JpegImagePlugin.get_sampling(im)
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

x0, y0, x1, y1 = DOTBOX
patch = a[y0:y1, x0:x1].copy()
bgv = np.median(patch.reshape(-1, 3), axis=0)
al = np.clip((patch.mean(2) - bgv.mean() - 12) / (215.0 - bgv.mean()), 0, 1)
al = np.asarray(Image.fromarray((al * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.3))
                ).astype(np.float32) / 255.0

def shift(img, dx, dy):
    ys, xs = np.mgrid[0:H, 0:W]
    sx = np.clip(xs + dx, 0, W - 1.001); sy = np.clip(ys + dy, 0, H - 1.001)
    ix = sx.astype(int); iy = sy.astype(int)
    fx = (sx - ix)[..., None]; fy = (sy - iy)[..., None]
    return (img[iy, ix] * (1 - fx) * (1 - fy) + img[iy, ix + 1] * fx * (1 - fy)
            + img[iy + 1, ix] * (1 - fx) * fy + img[iy + 1, ix + 1] * fx * fy)

m = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(m)
d.line([tuple(TOP), tuple(OLD_DOT)], fill=255, width=7)
d.ellipse([OLD_DOT[0] - 7, OLD_DOT[1] - 7, OLD_DOT[0] + 7, OLD_DOT[1] + 7], fill=255)
M = np.asarray(m.filter(ImageFilter.GaussianBlur(1.0))).astype(np.float32) / 255.0
out = a * (1 - M[..., None]) + shift(a, *DONOR) * M[..., None]

SS = 8
s = Image.new('L', (W * SS, H * SS), 0)
ImageDraw.Draw(s).line([tuple(NEW_START * SS), tuple(NEW_END * SS)],
                       fill=255, width=int(round(1.9 * SS)))
A = np.asarray(s.resize((W, H), Image.BOX).filter(ImageFilter.GaussianBlur(0.3))
               ).astype(np.float32) / 255.0
out = out * (1 - A[..., None]) + INK * A[..., None]

cy, cx = np.unravel_index(np.argmax(patch.mean(2) * al), al.shape)
ox, oy = int(round(NEW_DOT[0] - cx)), int(round(NEW_DOT[1] - cy))
box = out[oy:oy + al.shape[0], ox:ox + al.shape[1]]
out[oy:oy + al.shape[0], ox:ox + al.shape[1]] = box * (1 - al[..., None]) + patch * al[..., None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(
    DST, 'JPEG', qtables=qt, subsampling=sub, optimize=True)

im.convert('RGB').save('/tmp/pud_null.jpg', 'JPEG', qtables=qt, subsampling=sub, optimize=True)
n = np.asarray(Image.open('/tmp/pud_null.jpg').convert('RGB')).astype(int)
o = np.asarray(im.convert('RGB')).astype(int)
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
print('subsampling %s   null re-encode: mean %.3f, %d px >20'
      % (sub, np.abs(n - o).mean(), (np.abs(n - o).max(2) > 20).sum()))
ys, xs = np.nonzero(np.abs(b - n).max(2) > 20)
print('edit vs null: bbox x %d-%d y %d-%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), len(xs)))
