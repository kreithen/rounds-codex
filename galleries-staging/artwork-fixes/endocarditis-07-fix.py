"""endocarditis p7 - 'VALVE CUSP' landed on the vegetation it is meant to contrast with."""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/endocarditis/endocarditis-07.jpg'
ELBOW=(930.0,406.0); OLD_X0,OLD_X1=822,934; NEW=(828.0,476.0)
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

# Erase the horizontal run left of the elbow. A per-column quadratic fit was tried first
# and left an obvious flat smear: the fit gives each column a smooth ramp, so the sinus
# wall's fine striations inside the band are lost. A parallel clone keeps them - the
# structures here run near-vertically, so a vertical offset slides them along their own
# direction. dy chosen by eye off a six-offset contact sheet.
LO,HI=401,412; DY=-18
for x in range(OLD_X0, OLD_X1):
    ref_d=np.concatenate([arr[LO-6:LO-1,x], arr[HI+1:HI+6,x]]).mean(0)
    ref_s=np.concatenate([arr[LO-6+DY:LO-1+DY,x], arr[HI+1+DY:HI+6+DY,x]]).mean(0)
    corr=ref_d-ref_s
    for y in range(LO,HI):
        e=min(y-LO,HI-1-y); w=1.0 if e>=2 else (e+1)/3.0
        out[y,x]=out[y,x]*(1-w)+(arr[y+DY,x]+corr)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0)
ImageDraw.Draw(mk).line([(OLD_X0,406.5),(OLD_X1,406.5)], fill=255, width=13)
mk=mk.filter(ImageFilter.GaussianBlur(1.8))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.7)), img, mk)

S=4; STROKE=(226,224,226); DOTR=2.6; DOTC=(244,243,244)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
od.line([((ELBOW[0]+3)*S,ELBOW[1]*S),(NEW[0]*S,NEW[1]*S)], fill=STROKE+(255,), width=6)
od.ellipse([(NEW[0]-DOTR)*S,(NEW[1]-DOTR)*S,(NEW[0]+DOTR)*S,(NEW[1]+DOTR)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/en7/endocarditis-07-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
