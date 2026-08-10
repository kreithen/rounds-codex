"""cardiac-arrest p2 - badge 5 'Diaphragm' pointed into left lung parenchyma."""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-02.jpg'
ELBOW=(341.0,539.0); NEW=(430.0,562.0)
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

# Erase ONLY the arrowhead, not the shaft.
# The shaft crosses a rib at x 295-330, and no parallel/column fill can rebuild a strong
# diagonal like that - both were tried and both left a visible seam through the rib. So the
# original horizontal run is KEPT out to x=343 and becomes an elbow; only the 14 px of
# arrowhead beyond it is erased, and that sits on plain lung texture.
LO,HI=533,547
best=None
for DY in (-24,-20,-16,16,20,24):
    a=arr[LO:HI, 343:358]; b=arr[LO+DY:HI+DY, 343:358]
    sc=abs(a.std()-b.std())+abs(a.mean()-b.mean())*0.4
    if best is None or sc<best[0]: best=(sc,DY)
DY=best[1]; print('arrowhead donor dy', DY, 'score %.2f'%best[0])
for x in range(343,358):
    ref_dst=np.concatenate([arr[LO-6:LO-1,x], arr[HI+1:HI+6,x]]).mean(0)
    ref_src=np.concatenate([arr[LO-6+DY:LO-1+DY,x], arr[HI+1+DY:HI+6+DY,x]]).mean(0)
    corr=ref_dst-ref_src
    for y in range(LO,HI):
        e=min(y-LO, HI-1-y); w=1.0 if e>=2 else (e+1)/3.0
        ex=min(x-343, 357-x); w*= 1.0 if ex>=2 else (ex+1)/3.0
        out[y,x]=out[y,x]*(1-w)+(arr[y+DY,x]+corr)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0)
ImageDraw.Draw(mk).line([(344,539.5),(357,539.5)], fill=255, width=15)
mk=mk.filter(ImageFilter.GaussianBlur(1.8))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.7)), img, mk)

# redraw: shaft + arrowhead, matching the page's other badge arrows
S=4; STROKE=(206,200,214)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
dx,dy=NEW[0]-ELBOW[0], NEW[1]-ELBOW[1]; L=math.hypot(dx,dy); ux,uy=dx/L,dy/L
HL,HW=7.5,3.2                      # arrowhead length / half-width, measured off the shipped head
base=(NEW[0]-ux*HL, NEW[1]-uy*HL)
od.line([(ELBOW[0]*S,ELBOW[1]*S),(base[0]*S,base[1]*S)], fill=STROKE+(255,), width=5)
nx,ny=-uy,ux
od.polygon([(NEW[0]*S,NEW[1]*S),
            ((base[0]+nx*HW)*S,(base[1]+ny*HW)*S),
            ((base[0]-nx*HW)*S,(base[1]-ny*HW)*S)], fill=STROKE+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/ca2/cardiac-arrest-02-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
