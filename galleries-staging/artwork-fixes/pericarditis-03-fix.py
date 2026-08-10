"""pericarditis p3 - re-anchor the visceral pericardium leader.

Extended along its OWN existing angle, so the leader does not change direction:
  visceral (898.3,728.0) -> (861.0,756.1)   onto the pale epicardial streak

The panel has THREE zones between muscle and background, not two: a pale
epicardial streak on the muscle, a darker translucent cavity, then the bright
inflamed parietal band. The Pericardial cavity dot at (886.6,587.7) sits inside
that middle zone and is CORRECT - it is not moved.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math, sys

SRC='/workspace/rounds-codex-app/assets/pericarditis/pericarditis-03.jpg'
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float)
out=arr.copy()

STROKE=(200,200,206); DOTC=(246,246,246); DOTR=4.2
JOBS=[  # (old, angle_deg, new, band_slope_dx_per_dy)
    ((898.3,728.0), -37.0, (861.0,756.1), -0.25),
]

def bil(A,x,y):
    x0,y0=int(math.floor(x)),int(math.floor(y)); fx,fy=x-x0,y-y0
    return (A[y0,x0]*(1-fx)*(1-fy)+A[y0,x0+1]*fx*(1-fy)
            +A[y0+1,x0]*(1-fx)*fy+A[y0+1,x0+1]*fx*fy)

yy,xx=np.mgrid[0:H,0:W]
def ring(cx,cy,lo,hi):
    d=np.hypot(xx-cx,yy-cy); return (d>=lo)&(d<=hi)

# mask every leader stroke so no ring statistic is taken across one
strokes=np.zeros((H,W),bool)
for (ox,oy),deg,_,_ in JOBS:
    c,s=math.cos(math.radians(deg)),math.sin(math.radians(deg))
    for t in range(-70,200):
        X,Y=int(round(ox+t*c)),int(round(oy+t*s))
        if 0<=X<W-1 and 0<=Y<H-1: strokes[Y-4:Y+5, X-4:X+5]=True

for (ox,oy),deg,(nx_,ny_),grad in JOBS:
    OX,OY=int(round(ox)),int(round(oy))
    base=ring(OX,OY,10,16)&~strokes
    best=None
    for dy in list(range(22,40,2))+list(range(-38,-21,2)):
        dx=grad*dy
        m2=ring(OX+dx,OY+dy,10,16)&~strokes
        k=min(base.sum(),m2.sum())
        if k<80: continue
        A=arr[base][:k]; B=arr[m2][:k]
        sc=abs(A.std()-B.std())+abs(A.mean()-B.mean())*0.4
        if best is None or sc<best[0]: best=(sc,dx,dy)
    sc,DX,DY=best
    print('dot (%d,%d): donor offset %+.1f,%+d  score %.2f'%(OX,OY,DX,DY,sc))
    m2=ring(OX+DX,OY+DY,10,16)&~strokes
    k=min(base.sum(),m2.sum())
    corr=arr[base][:k].mean(0)-arr[m2][:k].mean(0)
    R,RR=DOTR+1.8, DOTR+5.0
    for j in range(-int(RR)-1,int(RR)+2):
        for i in range(-int(RR)-1,int(RR)+2):
            X,Y=OX+i,OY+j; d=math.hypot(i,j)
            if d>RR: continue
            w=1.0 if d<=R else max(0.0,(RR-d)/(RR-R))
            out[Y,X]=out[Y,X]*(1-w)+(bil(arr,X+DX,Y+DY)+corr)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))

# soften only the two repaired discs
mk=Image.new('L',(W,H),0); md=ImageDraw.Draw(mk)
for (ox,oy),_,_,_ in JOBS:
    md.ellipse([ox-11,oy-11,ox+11,oy+11], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(2))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.8)), img, mk)

# draw the extensions and the new dots
S=4
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
for (ox,oy),deg,(nx_,ny_),_ in JOBS:
    c,s=math.cos(math.radians(deg)),math.sin(math.radians(deg))
    a0=(ox+10*c, oy+10*s)          # start inside the surviving original stroke
    od.line([(a0[0]*S,a0[1]*S),(nx_*S,ny_*S)], fill=STROKE+(255,), width=6)
    od.ellipse([(nx_-DOTR)*S,(ny_-DOTR)*S,(nx_+DOTR)*S,(ny_+DOTR)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')

img.save('/tmp/perifix/pericarditis-03-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
