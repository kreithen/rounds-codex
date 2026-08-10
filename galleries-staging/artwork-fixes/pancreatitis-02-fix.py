#!/usr/bin/env python3
"""pancreatitis page 2 - the "Celiac trunk" leader ended on the IVC.

Work order row `pancreatitis` p2 #1: the leader ends on "the large blue VEIN (IVC/portal)
about 13 px lateral to the aorta; the celiac trunk itself is the red stub arising from the
aorta ~45 px lower right". A label naming an artery, ending on a vein.

Measured on the shipped page (1024x1536):
  the leader leaves the label as a horizontal run at y=307 (x 567-580), turns down-left at
  (566,308), bends again at (555,325), and terminates in a dot centred (499,353.5) - which
  is on the blue vessel, left of the aorta (whose borders sit at x~510 and x~539 through
  this height).

  the celiac trunk: masking bright red (R>90, R>1.9G, R>1.9B) shows a stub running out of
  the aorta's right border across rows 373-381, from x~551 to the trifurcation at x~578,
  where it forks into the limb the "Splenic artery" label correctly follows. (563,377) is
  solidly inside it.

The whole descending run is replaced by a single near-vertical segment from the label's
own corner (567,308) to (563,375), so the corrected leader is simpler than the one it
replaces rather than a third bend added to two.

Erase donor: (+1.5,+14) - i.e. ALONG the aorta's own border, not straight down. The
borders lean dx/dy = +0.11 through this height, so a purely vertical donor of 14 shifts the
border 1.5 px and leaves a notch in it; that notch is visible at 9x on the (0,14) and
(0,20) candidates and is why this is a subpixel shift rather than np.roll. Four candidates
were compared by eye: (-1.5,-14) duplicated a chevron in the aorta's highlight and
(-2.1,-20) left a pale ghost in the black gap.

The terminal dot is LIFTED from the shipped dot (r~2.2 px, peak luma 253) rather than
drawn, so it keeps the artwork's own shape and antialiasing.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, JpegImagePlugin

SRC = '/workspace/rounds-codex-app/assets/pancreatitis/pancreatitis-02.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/pancreatitis-02.jpg'

CORNER = np.array([567.0, 308.0])     # where the label's horizontal run turns down
BEND = np.array([555.0, 325.0])       # the shipped leader's second bend - it is a POLYLINE
OLD_DOT = np.array([499.0, 353.5])    # shipped terminus, on the vein
NEW_DOT = np.array([563.0, 377.0])    # on the celiac trunk stub
DONOR = (1.5, 14.0)                   # along the aorta's border
DOTBOX = (494, 348, 506, 360)
INK = np.array([235., 236., 238.], dtype=np.float32)

im = Image.open(SRC)
qt, sub = im.quantization, JpegImagePlugin.get_sampling(im)
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

# lift the dot BEFORE anything is erased
x0, y0, x1, y1 = DOTBOX
patch = a[y0:y1, x0:x1].copy()
bgv = np.median(patch.reshape(-1, 3), axis=0)
al = np.clip((patch.mean(2) - bgv.mean() - 10) / (215.0 - bgv.mean()), 0, 1)
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
d.line([tuple(CORNER + np.array([-0.5, 0.5])), tuple(BEND), tuple(OLD_DOT)],
       fill=255, width=6, joint='curve')
d.ellipse([OLD_DOT[0] - 6, OLD_DOT[1] - 6, OLD_DOT[0] + 6, OLD_DOT[1] + 6], fill=255)
M = np.asarray(m.filter(ImageFilter.GaussianBlur(1.0))).astype(np.float32) / 255.0
out = a * (1 - M[..., None]) + shift(a, *DONOR) * M[..., None]

SS = 8
s = Image.new('L', (W * SS, H * SS), 0)
ImageDraw.Draw(s).line([tuple(CORNER * SS), tuple(np.array([563.0, 375.0]) * SS)],
                       fill=255, width=int(round(1.7 * SS)))
A = np.asarray(s.resize((W, H), Image.BOX).filter(ImageFilter.GaussianBlur(0.3))
               ).astype(np.float32) / 255.0
out = out * (1 - A[..., None]) + INK * A[..., None]

cy, cx = np.unravel_index(np.argmax(patch.mean(2) * al), al.shape)
ox, oy = int(round(NEW_DOT[0] - cx)), int(round(NEW_DOT[1] - cy))
box = out[oy:oy + al.shape[0], ox:ox + al.shape[1]]
out[oy:oy + al.shape[0], ox:ox + al.shape[1]] = box * (1 - al[..., None]) + patch * al[..., None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(
    DST, 'JPEG', qtables=qt, subsampling=sub, optimize=True)

# QA against a NULL re-encode, so chroma round-trip is not mistaken for the edit
im.convert('RGB').save('/tmp/pa2_null.jpg', 'JPEG', qtables=qt, subsampling=sub, optimize=True)
n = np.asarray(Image.open('/tmp/pa2_null.jpg').convert('RGB')).astype(int)
o = np.asarray(im.convert('RGB')).astype(int)
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
print('subsampling %s   null re-encode: mean %.3f, %d px >20'
      % (sub, np.abs(n - o).mean(), (np.abs(n - o).max(2) > 20).sum()))
ys, xs = np.nonzero(np.abs(b - n).max(2) > 20)
print('edit vs null: bbox x %d-%d y %d-%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), len(xs)))
