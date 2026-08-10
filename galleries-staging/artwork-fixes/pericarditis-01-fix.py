"""pericarditis p1 - 'Fibrous Pericardium' ended on empty background; move it onto the sac."""
from PIL import Image, ImageDraw, ImageFilter, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/pericarditis/pericarditis-01.jpg'
ELBOW=(874.0,373.5); OLD=(750.0,624.5); NEW=(730.0,784.0); DOTR=6.0
im=Image.open(SRC).convert('RGB'); W,H=im.size
arr=np.asarray(im).astype(float); out=arr.copy()

def bil(A,x,y):
    x0,y0=int(math.floor(x)),int(math.floor(y)); fx,fy=x-x0,y-y0
    return (A[y0,x0]*(1-fx)*(1-fy)+A[y0,x0+1]*fx*(1-fy)
            +A[y0+1,x0]*(1-fx)*fy+A[y0+1,x0+1]*fx*fy)

# the old leader and its dot lie entirely on flat background, so a perpendicular
# interpolation from 11 px either side reconstructs it exactly
dx,dy=ELBOW[0]-OLD[0], ELBOW[1]-OLD[1]; L=math.hypot(dx,dy)
ux,uy=dx/L,dy/L; nx,ny=-uy,ux; OFF=11.0; HALF=3.6
for i in range(-2,int(L)+2):
    cx,cy=OLD[0]+ux*i, OLD[1]+uy*i
    ca,cb=bil(arr,cx+nx*OFF,cy+ny*OFF), bil(arr,cx-nx*OFF,cy-ny*OFF)
    t=-HALF
    while t<=HALF:
        X,Y=int(round(cx+nx*t)), int(round(cy+ny*t))
        f=(t+OFF)/(2*OFF); out[Y,X]=cb+(ca-cb)*f; t+=0.4
# The dot sits on flat near-black background with the aorta's rim just clipping its
# lower-left. Per-column fill extrapolates aorta colour into the background (brown
# rectangle); a perpendicular average leaves a grey blob; interpolating along the rim
# drags in the leader's glow above and the blue SVC below. Fit the BACKGROUND itself:
# a 2-D quadratic over an annulus, using only the dark pixels, evaluated across the disc.
src=out.copy()
R,RR=DOTR+2.5, DOTR+6.5
cx,cy=int(OLD[0]),int(OLD[1])
pts=[]
for j in range(-20,21):
    for i in range(-20,21):
        d=math.hypot(i,j)
        if not (RR+1 <= d <= 20): continue
        X,Y=cx+i,cy+j
        if src[Y,X].max()<62: pts.append((i,j,src[Y,X]))
A=np.array([[1,i,j,i*i,i*j,j*j] for i,j,_ in pts], float)
B=np.array([v for _,_,v in pts], float)
coef,_,_,_=np.linalg.lstsq(A,B,rcond=None)
print('background fit from %d dark annulus px'%len(pts))
for j in range(-int(RR)-1,int(RR)+2):
    for i in range(-int(RR)-1,int(RR)+2):
        d=math.hypot(i,j)
        if d>RR: continue
        w=1.0 if d<=R else (RR-d)/(RR-R)
        val=np.array([1,i,j,i*i,i*j,j*j],float)@coef
        X,Y=cx+i,cy+j
        out[Y,X]=out[Y,X]*(1-w)+val*w

img=Image.fromarray(np.clip(out,0,255).astype(np.uint8))
mk=Image.new('L',(W,H),0); md=ImageDraw.Draw(mk)
md.line([OLD,ELBOW], fill=255, width=11); md.ellipse([OLD[0]-16,OLD[1]-16,OLD[0]+16,OLD[1]+16], fill=255)
mk=mk.filter(ImageFilter.GaussianBlur(2))
img=Image.composite(img.filter(ImageFilter.GaussianBlur(0.8)), img, mk)

S=4; STROKE=(228,230,232); DOTC=(246,247,248)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
od.line([(ELBOW[0]*S,ELBOW[1]*S),(NEW[0]*S,NEW[1]*S)], fill=STROKE+(255,), width=7)
od.ellipse([(NEW[0]-DOTR)*S,(NEW[1]-DOTR)*S,(NEW[0]+DOTR)*S,(NEW[1]+DOTR)*S], fill=DOTC+(255,))
img=Image.alpha_composite(img.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/p1fix/pericarditis-01-FIXED.png')
print('changed region:', ImageChops.difference(im,img).convert('L').getbbox())
