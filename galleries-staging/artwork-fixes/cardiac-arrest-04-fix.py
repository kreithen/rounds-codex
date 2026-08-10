"""cardiac-arrest p4 - remove the unattached arrowhead on the patient's shoulder.

It is an arrow pointing left with a ~10 px stub of shaft that terminates in mid-air: no
label, no box, no leader. Verified unattached - nothing above threshold anywhere to the
right of x=472 on its rows, and it is not the tail of either scene callout.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math, sys

SRC='/workspace/rounds-codex-app/cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-04.jpg'
X0,X1,Y0,Y1 = 447,474, 445,459          # region to clear (stray spans 449-470 x 448-455)
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

# The shoulder's fabric highlight runs near-horizontally just above the stray, so clone
# along the ROW: a per-column fill would cut that edge. Offset chosen by statistics.
# Donor picked by EYE off a contact sheet of eight offsets, not by statistics: the
# lowest-scoring offset (dx=-46) lands on the patient's face and neck and cloned blue and
# orange skin into the fabric. Statistics matched; content did not.
DX=32
for y in range(Y0,Y1):
    ref_d=np.concatenate([arr[y, X0-7:X0-1], arr[y, X1+1:X1+7]]).mean(0)
    ref_s=np.concatenate([arr[y, X0+DX-7:X0+DX-1], arr[y, X1+DX+1:X1+DX+7]]).mean(0)
    corr=ref_d-ref_s
    for x in range(X0,X1):
        ex=min(x-X0, X1-1-x); ey=min(y-Y0, Y1-1-y)
        w=(1.0 if ex>=2 else (ex+1)/3.0)*(1.0 if ey>=2 else (ey+1)/3.0)
        out[y,x]=out[y,x]*(1-w)+(arr[y, x+DX]+corr)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0)
ImageDraw.Draw(mk).rectangle([X0-1,Y0-1,X1,Y1], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(1.6))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.6)), img, mk)
img.save('/tmp/ca4/cardiac-arrest-04-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
