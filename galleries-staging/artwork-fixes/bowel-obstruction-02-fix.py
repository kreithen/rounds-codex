#!/usr/bin/env python3
"""bowel-obstruction page 2 - "Villi" ended in the outer wall of the cross-section.

Work order row `bowel-obstruction` p2 #1: the leader ends on "the outer part of the
annular cut face (serosa/muscularis zone)"; it should reach "the pale scalloped mucosal
projections lining the lumen".

Measured on the shipped page (1024x1536), SMALL BOWEL CROSS-SECTION panel:
  the leader is horizontal at y=928-929 and terminates in a dot centred (156,929), r~2.
  the annulus's silhouette centroid is (126,990), so that dot sits at radius 68 - out in
  the concentric striated bands, four layers outboard of the mucosa.
  the "Mucosa" leader below it already lands correctly on a scalloped fold at (172,964),
  which is what makes the Villi endpoint read as a layer error rather than a near miss.

Moving 21 px INWARD along the annulus's own radius, to r=47, lands at (146.7,947.8) - on a
pale scalloped projection near the top of the lumen. The connecting segment is therefore
radial, which is the natural direction on a cross-section, and the leader gains one bend
at (161,929) rather than a dog-leg.

The erase is a single r=4 disc over concentric striated bands: donor is TANGENTIAL,
(+7.2,+3.5) - the local tangent at that radius - so band lands on band. Same principle as
`pud` p2, where the band was an arc and only a tangent donor was invisible.
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, JpegImagePlugin

SRC = '/workspace/rounds-codex-app/assets/bowel-obstruction/bowel-obstruction-02.jpg'
DST = '/home/user/rounds-codex/galleries-staging/artwork-fixes/bowel-obstruction-02.jpg'

CENTRE = np.array([126.0, 990.0])
OLD_DOT = np.array([156.0, 929.0])
BEND = np.array([161.0, 929.0])
NEW_DOT = np.array([146.7, 947.8])       # r = 47 along the same radius
DOTBOX = (151, 924, 162, 935)
INK = np.array([232., 232., 234.], dtype=np.float32)

im = Image.open(SRC)
qt, sub = im.quantization, JpegImagePlugin.get_sampling(im)
a = np.asarray(im.convert('RGB')).astype(np.float32)
H, W, _ = a.shape

rad = (OLD_DOT - CENTRE) / np.hypot(*(OLD_DOT - CENTRE))
tan = np.array([rad[1], -rad[0]]) * -8.0        # tangential donor, 8 px

x0, y0, x1, y1 = DOTBOX
patch = a[y0:y1, x0:x1].copy()
bgv = np.median(patch.reshape(-1, 3), axis=0)
al = np.clip((patch.mean(2) - bgv.mean() - 25) / (225.0 - bgv.mean()), 0, 1)
al = np.asarray(Image.fromarray((al * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.25))
                ).astype(np.float32) / 255.0

def shift(img, dx, dy):
    ys, xs = np.mgrid[0:H, 0:W]
    sx = np.clip(xs + dx, 0, W - 1.001); sy = np.clip(ys + dy, 0, H - 1.001)
    ix = sx.astype(int); iy = sy.astype(int)
    fx = (sx - ix)[..., None]; fy = (sy - iy)[..., None]
    return (img[iy, ix] * (1 - fx) * (1 - fy) + img[iy, ix + 1] * fx * (1 - fy)
            + img[iy + 1, ix] * (1 - fx) * fy + img[iy + 1, ix + 1] * fx * fy)

m = Image.new('L', (W, H), 0)
ImageDraw.Draw(m).ellipse([OLD_DOT[0] - 4.2, OLD_DOT[1] - 4.2,
                           OLD_DOT[0] + 4.2, OLD_DOT[1] + 4.2], fill=255)
M = np.asarray(m.filter(ImageFilter.GaussianBlur(0.8))).astype(np.float32) / 255.0
out = a * (1 - M[..., None]) + shift(a, tan[0], tan[1]) * M[..., None]

SS = 8
s = Image.new('L', (W * SS, H * SS), 0)
ImageDraw.Draw(s).line([tuple(BEND * SS), tuple((NEW_DOT + rad * 1.6) * SS)],
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

im.convert('RGB').save('/tmp/bo_null.jpg', 'JPEG', qtables=qt, subsampling=sub, optimize=True)
n = np.asarray(Image.open('/tmp/bo_null.jpg').convert('RGB')).astype(int)
o = np.asarray(im.convert('RGB')).astype(int)
b = np.asarray(Image.open(DST).convert('RGB')).astype(int)
print('subsampling %s   null re-encode: mean %.3f, %d px >20'
      % (sub, np.abs(n - o).mean(), (np.abs(n - o).max(2) > 20).sum()))
ys, xs = np.nonzero(np.abs(b - n).max(2) > 20)
print('edit vs null: bbox x %d-%d y %d-%d, %d px' % (xs.min(), xs.max(), ys.min(), ys.max(), len(xs)))
