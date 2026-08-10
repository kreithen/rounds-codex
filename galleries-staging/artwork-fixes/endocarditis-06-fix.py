"""endocarditis p6 - the TEE arrow points at black background outside the ultrasound sector.

The arrow is translated, not redrawn: its own pixels are lifted with a soft yellowness alpha
and composited at the new position, so the arrowhead keeps exactly the shape, colour and
antialiasing it already has. Offset (-56,-15) puts the tip at (655,878) - inside the sector,
just off the upper-right corner of the vegetation, with the arrow still pointing down-left
into it. The old position is flat near-black background, so the erase is a background fit.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/endocarditis/endocarditis-06.jpg'
X0,X1,Y0,Y1 = 706, 745, 860, 899          # the arrow's own box, with margin
DX,DY = -56, -15
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

# soft alpha from yellowness: the arrow is the only saturated yellow in the panel
R,G,B = arr[:,:,0], arr[:,:,1], arr[:,:,2]
yellow = np.clip((np.minimum(R,G) - B - 25) / 70.0, 0, 1)
yellow[:Y0,:] = 0; yellow[Y1:,:] = 0; yellow[:,:X0] = 0; yellow[:,X1:] = 0
print('arrow alpha: %d px above 0.5, %d above 0.05' % ((yellow>0.5).sum(), (yellow>0.05).sum()))
patch = arr.copy()

# The erase mask must be WIDER than the paste mask. JPEG leaves a faint warm fringe a pixel or
# two outside the arrow that carries almost no yellowness, and leaving it behind traces the old
# arrow's outline - visible at 10x. Dilate a blurred copy for erasing; paste with the sharp one.
from PIL import ImageFilter as _IF
_y = Image.fromarray((np.clip(yellow,0,1)*255).astype(np.uint8)).filter(_IF.GaussianBlur(2.0))
erase_a = np.clip(np.asarray(_y).astype(float)/255.0 * 3.0, 0, 1)

# 1. erase. The old arrow straddles the sector's bright diagonal border, so a single
# background surface over an annulus averages border and black together and leaves a grey
# arrow-shaped ghost - built that way first and it was obvious at 7x. Clone ALONG the border
# instead: the sector edge runs (635,847)->(767,955), so an offset parallel to it lands
# border-on-border and black-on-black.
import sys
ux, uy = 0.775, 0.632                      # unit vector along the sector border
K = float(sys.argv[1]) if len(sys.argv) > 1 else 52.0
sx, sy = ux*K, uy*K
def bil(A, x, y):
    x0, y0 = int(math.floor(x)), int(math.floor(y)); fx, fy = x-x0, y-y0
    return (A[y0,x0]*(1-fx)*(1-fy)+A[y0,x0+1]*fx*(1-fy)
            +A[y0+1,x0]*(1-fx)*fy+A[y0+1,x0+1]*fx*fy)
for j in range(Y0-2, Y1+2):
    for i in range(X0-2, X1+2):
        w = erase_a[j, i]
        if w <= 0.004: continue
        out[j, i] = out[j, i]*(1-w) + bil(arr, i+sx, j+sy)*w

img = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))
mk = Image.new('L', (W, H), 0)
ImageDraw.Draw(mk).rectangle([X0-3, Y0-3, X1+3, Y1+3], fill=255)
mk = mk.filter(ImageFilter.GaussianBlur(2))
img = Image.composite(img.filter(ImageFilter.GaussianBlur(0.6)), img, mk)

# 2. paste the arrow's own pixels at the new position
out2 = np.asarray(img).astype(float).copy()
for j in range(Y0-2, Y1+2):
    for i in range(X0-2, X1+2):
        a = yellow[j, i]
        if a <= 0: continue
        J, I = j+DY, i+DX
        out2[J, I] = out2[J, I]*(1-a) + patch[j, i]*a
img = Image.fromarray(np.clip(out2, 0, 255).astype(np.uint8))

img.save('/tmp/en6f/endocarditis-06-FIXED.png')
print('changed region:', ImageChops.difference(im, img).convert('L').getbbox())
