#!/usr/bin/env python3
"""addisons page 2 - two zona leaders overshoot the cortex into the medulla.

Work order rows `addisons` p2 #3 and #4, in the ADRENAL GLAND STRUCTURE inset:
  #3 "Zona Fasciculata (cortisol)" ends on "the central white hilum dot at the dead centre
     of the medulla"; it should reach "the middle of the orange cortical band".
  #4 "Zona Reticularis (androgens)" ends "inside the dark brown medulla"; it should reach
     "the innermost part of the orange cortical band, just outside the medulla".

Both are SHORTENINGS along each leader's own axis - the same shape as `addisons` p1, where
the "Cortex" leader ran seven pixels past the same boundary on the sister inset.

Measured on the shipped page (800x1200) by sampling the tissue 3-4 px either side of each
leader along its own axis, t = 0 at the point where it leaves the label bracket:

  Zona Fasciculata, from (671,282), unit (-0.989,+0.147):
      t  0-6    black background
      t  9-15   the pale outer rim
      t 18-33   the orange cortical band   (RGB ~ 210,145, 85)
      t 36+     dark brown medulla         (RGB ~ 120, 55, 25)
    band mid-point t=25 -> (646,286). The shipped stroke runs to t~54, the hilum.

  Zona Reticularis, from (676,323), unit (-0.951,-0.309):
      t  6-15   the pale outer rim
      t 18-30   the orange cortical band   (RGB ~ 195,135, 78)
      t 33+     medulla                    (RGB ~ 145, 80, 50)
    inner edge of the band t=30 -> (648,314). The shipped stroke runs to t~39.

THE HILUM IS ARTWORK AND MUST SURVIVE. The bright blob at (617,290.5), r~2, is the gland's
central hilum, not a terminal dot - the same feature noted on `addisons` p1 at (247,250).
The erase stops at t=51, which is (620,289.5), so the blob is untouched.

Erase donor: PERPENDICULAR, -7 px. Unusually, that is the safe direction here: both leaders
run nearly PARALLEL to the cortex's radial striations, so a perpendicular offset lands on
the neighbouring striations, which look alike (pitch ~3-4 px). The usual rule - clone along
the band - would slide the stroke along itself and erase nothing. Four offsets were compared
by eye; +7 left a faint smear across the band's striations.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, JpegImagePlugin

SRC = '/workspace/rounds-codex-app/addisons-02.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/addisons-02.jpg'

SEGMENTS = [
    # (origin, unit vector, t_start, t_end) - the run to erase
    (np.array([671.0, 282.0]), np.array([-0.989, 0.147]), 25.0, 51.0),   # fasciculata
    (np.array([676.0, 323.0]), np.array([-0.951, -0.309]), 30.0, 42.0),  # reticularis
]
DONOR = -7.0

im = Image.open(SRC)
qt, sub = im.quantization, JpegImagePlugin.get_sampling(im)
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

def shift(img, dx, dy):
    ys, xs = np.mgrid[0:H, 0:W]
    sx = np.clip(xs + dx, 0, W - 1.001); sy = np.clip(ys + dy, 0, H - 1.001)
    ix = sx.astype(int); iy = sy.astype(int)
    fx = (sx - ix)[..., None]; fy = (sy - iy)[..., None]
    return (img[iy, ix] * (1 - fx) * (1 - fy) + img[iy, ix + 1] * fx * (1 - fy)
            + img[iy + 1, ix] * (1 - fx) * fy + img[iy + 1, ix + 1] * fx * fy)

out = a.copy()
for P0, u, t0, t1 in SEGMENTS:
    n = np.array([-u[1], u[0]])
    m = Image.new('L', (W, H), 0)
    ImageDraw.Draw(m).line([tuple(P0 + u * t0), tuple(P0 + u * t1)], fill=255, width=4)
    M = np.asarray(m.filter(ImageFilter.GaussianBlur(0.7))).astype(np.float32) / 255.0
    off = n * DONOR
    out = out * (1 - M[..., None]) + shift(out, off[0], off[1]) * M[..., None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(
    DST, 'JPEG', qtables=qt, subsampling=sub, optimize=True)

im.convert('RGB').save('/tmp/ad2_null.jpg', 'JPEG', qtables=qt, subsampling=sub, optimize=True)
n_ = np.asarray(Image.open('/tmp/ad2_null.jpg').convert('RGB')).astype(int)
o = np.asarray(im.convert('RGB')).astype(int)
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
print('subsampling %s   null re-encode: mean %.3f, %d px >20'
      % (sub, np.abs(n_ - o).mean(), (np.abs(n_ - o).max(2) > 20).sum()))
ys, xs = np.nonzero(np.abs(b - n_).max(2) > 20)
print('edit vs null: bbox x %d-%d y %d-%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), len(xs)))
hil = b[288:294, 614:621].mean(2).max()
print('hilum peak luma after edit: %.0f (shipped %.0f)'
      % (hil, o[288:294, 614:621].mean(2).max()))
