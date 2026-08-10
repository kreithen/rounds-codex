"""htn p2 - move the 'Renal Arteries' leader off the kidney parenchyma onto the drawn renal artery.

The leader is horizontal. Rather than re-angling the whole run, the horizontal
segment is KEPT from the label back to an elbow at x=745 and only the stub to its
left is erased, then a new diagonal is drawn from that elbow to the artery. Two
reasons: elbowed leaders are already this page's idiom (Aortic Arch, Common Carotid),
and the 100 px to the right of the elbow crosses the body outline and the intercostal
vessels DIAGONALLY - a per-column fill smears those into vertical streaks, which is
visible at 12x. Left of the elbow the stroke crosses only kidney parenchyma, a
near-vertical kidney border and flat background, all of which a per-column fill
reconstructs cleanly.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/htn/htn-02.jpg'
ELBOW=(745.0,748.0); OLD=(639.9,747.3); NEW=(615.0,717.0)
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

# the leader carries a DARK halo a pixel out on each side, so the band to replace is
# wider than the white core; fit each column's own vertical gradient outside it
LO,HI=743,755; SUP=13
ys=np.arange(LO-SUP,HI+SUP); keep=(ys<LO)|(ys>=HI)
for x in range(int(OLD[0])-11, int(ELBOW[0])+2):
    col=arr[LO-SUP:HI+SUP, x]
    for ch in range(3):
        p=np.polyfit(ys[keep], col[keep,ch], 2)
        out[LO:HI, x, ch]=np.polyval(p, np.arange(LO,HI))

DR=8.5
for i in range(-int(DR)-2,int(DR)+3):
    x=int(round(OLD[0]))+i
    half=math.sqrt(max(0.0,(DR+1.5)**2-i*i))
    lo=min(int(round(OLD[1]-half)),LO); hi=max(int(round(OLD[1]+half))+1,HI)
    yy=np.arange(lo-SUP,hi+SUP); kp=(yy<lo)|(yy>=hi)
    col=arr[lo-SUP:hi+SUP, x]
    for ch in range(3):
        p=np.polyfit(yy[kp], col[kp,ch], 2)
        out[lo:hi, x, ch]=np.polyval(p, np.arange(lo,hi))

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0); md=ImageDraw.Draw(mk)
md.line([(OLD[0]-12,748.4),(ELBOW[0],748.4)], fill=255, width=13)
md.ellipse([OLD[0]-13,OLD[1]-13,OLD[0]+13,OLD[1]+13], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(1.8))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.7)), img, mk)

S=4; STROKE=(206,208,214); DOTC=(242,242,244); R=5.0
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
od.line([((ELBOW[0]+2)*S,ELBOW[1]*S),(NEW[0]*S,NEW[1]*S)], fill=STROKE+(255,), width=6)
od.ellipse([(NEW[0]-R)*S,(NEW[1]-R)*S,(NEW[0]+R)*S,(NEW[1]+R)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/htnfix/htn-02-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
