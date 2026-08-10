"""cardiomyopathy p4 - 'SMALL LV CAVITY' sat inside the septal mass; extend it into the cavity.

The leader is elbow(303,505) -> diagonal(slope 0.817) -> dot(423.6,603.2). The LV cavity is
drawn as a narrow slit further along that SAME line, so the fix is a pure extension: the
leader's angle does not change and no new crossing is created (the crossing with the SAM
leader at x=413 already exists on the shipped page).
"""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/cardiomyopathy/cardiomyopathy-04.jpg'
ELBOW=(303.0,505.0); OLD=(423.6,603.2); NEW=(630.0,772.0); DOTR=4.2
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

def bil(A,x,y):
    x0,y0=int(math.floor(x)),int(math.floor(y)); fx,fy=x-x0,y-y0
    return (A[y0,x0]*(1-fx)*(1-fy)+A[y0,x0+1]*fx*(1-fy)
            +A[y0+1,x0]*(1-fx)*fy+A[y0+1,x0+1]*fx*fy)

yy,xx=np.mgrid[0:H,0:W]
def ring(cx,cy,lo,hi):
    d=np.hypot(xx-cx,yy-cy); return (d>=lo)&(d<=hi)

# keep every leader out of the ring statistics
sm=np.zeros((H,W),bool)
for (ax,ay),(bx,by) in (((303,505),(424,603)),((270,595),(507,595)),((220,700),(483,700)),((370,440),(448,497))):
    n=int(math.hypot(bx-ax,by-ay))
    for i in range(n+1):
        t=i/n; X=int(ax+(bx-ax)*t); Y=int(ay+(by-ay)*t)
        sm[Y-4:Y+5, X-4:X+5]=True

base=ring(OLD[0],OLD[1],9,15)&~sm
best=None
for dx,dy in [(0,26),(0,-26),(26,0),(-26,0),(20,20),(-20,20),(20,-20),(-20,-20),(0,34),(34,0)]:
    m2=ring(OLD[0]+dx,OLD[1]+dy,9,15)&~sm
    k=min(base.sum(),m2.sum())
    if k<70: continue
    A=arr[base][:k]; B=arr[m2][:k]
    sc=abs(A.std()-B.std())+abs(A.mean()-B.mean())*0.4
    print('  donor %+3d,%+3d  score %.2f'%(dx,dy,sc))
    if best is None or sc<best[0]: best=(sc,dx,dy)
sc,DX,DY=best; print('chosen donor', DX, DY)
m2=ring(OLD[0]+DX,OLD[1]+DY,9,15)&~sm
k=min(base.sum(),m2.sum())
corr=arr[base][:k].mean(0)-arr[m2][:k].mean(0)
R,RR=DOTR+2.0, DOTR+5.5
for j in range(-int(RR)-1,int(RR)+2):
    for i in range(-int(RR)-1,int(RR)+2):
        X,Y=int(round(OLD[0]))+i, int(round(OLD[1]))+j; d=math.hypot(i,j)
        if d>RR: continue
        w=1.0 if d<=R else (RR-d)/(RR-R)
        out[Y,X]=out[Y,X]*(1-w)+(bil(arr,X+DX,Y+DY)+corr)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0)
ImageDraw.Draw(mk).ellipse([OLD[0]-11,OLD[1]-11,OLD[0]+11,OLD[1]+11], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(2))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.8)), img, mk)

S=4; STROKE=(210,208,212); DOTC=(246,247,248)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
a0=(OLD[0]-10, OLD[1]-10*0.817)   # start inside the surviving original stroke
od.line([(a0[0]*S,a0[1]*S),(NEW[0]*S,NEW[1]*S)], fill=STROKE+(255,), width=7)
od.ellipse([(NEW[0]-DOTR)*S,(NEW[1]-DOTR)*S,(NEW[0]+DOTR)*S,(NEW[1]+DOTR)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/cm4/cardiomyopathy-04-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
