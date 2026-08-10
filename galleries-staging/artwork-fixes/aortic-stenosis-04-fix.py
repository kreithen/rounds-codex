"""aortic-stenosis p4 - 'Narrowed central orifice' landed on a calcified cusp (same error as p1)."""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math, sys

SRC='/workspace/rounds-codex-app/assets/aortic-stenosis/aortic-stenosis-04.jpg'
ELBOW=(905.0,493.0); OLD=(886.4,469.3); NEW=(829.0,484.0); DOTR=4.4
DX,DY=(int(sys.argv[1]),int(sys.argv[2])) if len(sys.argv)>2 else (0,30)
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

def bil(A,x,y):
    x0,y0=int(math.floor(x)),int(math.floor(y)); fx,fy=x-x0,y-y0
    return (A[y0,x0]*(1-fx)*(1-fy)+A[y0,x0+1]*fx*(1-fy)
            +A[y0+1,x0]*(1-fx)*fy+A[y0+1,x0+1]*fx*fy)

# short diagonal: single-sided perpendicular clone
dx,dy=ELBOW[0]-OLD[0], ELBOW[1]-OLD[1]; L=math.hypot(dx,dy)
ux,uy=dx/L,dy/L; nx,ny=-uy,ux; PD=13.0; HALF=3.2
for i in range(int(DOTR)+3, int(L)+2):
    cx,cy=OLD[0]+ux*i, OLD[1]+uy*i
    ref_d=(bil(arr,cx+nx*7,cy+ny*7)+bil(arr,cx-nx*7,cy-ny*7))/2
    ref_s=(bil(arr,cx+nx*7+nx*PD,cy+ny*7+ny*PD)+bil(arr,cx-nx*7+nx*PD,cy-ny*7+ny*PD))/2
    corr=ref_d-ref_s
    t=-HALF
    while t<=HALF:
        X,Y=int(round(cx+nx*t)), int(round(cy+ny*t))
        e=HALF-abs(t); w=1.0 if e>=1.2 else max(0.0,e/1.2)
        out[Y,X]=out[Y,X]*(1-w)+(bil(arr,cx+nx*t+nx*PD, cy+ny*t+ny*PD)+corr)*w
        t+=0.4

# the dot, on the right cusp's nodular texture
R2=DOTR+2.2
yy,xx=np.mgrid[0:H,0:W]; dd=np.hypot(xx-OLD[0],yy-OLD[1])
ring=(dd>=R2+2)&(dd<=R2+8)
dn=np.hypot(xx-OLD[0]-DX,yy-OLD[1]-DY); don=(dn>=R2+2)&(dn<=R2+8)
k=min(ring.sum(),don.sum()); corr2=arr[ring][:k].mean(0)-arr[don][:k].mean(0)
for j in range(-int(R2)-4,int(R2)+5):
    for i in range(-int(R2)-4,int(R2)+5):
        d2=math.hypot(i,j)
        if d2>R2+3: continue
        w=1.0 if d2<=R2 else (R2+3-d2)/3.0
        X,Y=int(OLD[0])+i,int(OLD[1])+j
        out[Y,X]=out[Y,X]*(1-w)+(bil(arr,X+DX,Y+DY)+corr2)*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0); md=ImageDraw.Draw(mk)
md.line([OLD,ELBOW], fill=255, width=10); md.ellipse([OLD[0]-10,OLD[1]-10,OLD[0]+10,OLD[1]+10], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(1.8))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.7)), img, mk)

S=4; STROKE=(216,214,216); DOTC=(246,246,248)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
od.line([((ELBOW[0]+2)*S,ELBOW[1]*S),(NEW[0]*S,NEW[1]*S)], fill=STROKE+(255,), width=6)
od.ellipse([(NEW[0]-DOTR)*S,(NEW[1]-DOTR)*S,(NEW[0]+DOTR)*S,(NEW[1]+DOTR)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/as4/aortic-stenosis-04-FIXED.png')
print('dot donor %+d,%+d  changed: %s'%(DX,DY,ImageChops.difference(im,img).convert('L').getbbox()))
