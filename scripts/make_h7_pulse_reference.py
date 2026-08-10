from PIL import Image, ImageDraw, ImageFont
W,H=1560,980
BG=(18,20,32); SKIN=(214,150,150); BONE=(228,224,216); CYAN=(0,210,235); TXT=(240,242,246)
im=Image.new('RGB',(W,H),BG); d=ImageDraw.Draw(im)
def font(sz):
    try: return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',sz)
    except: return ImageFont.load_default()
def tag(x,y,s,col=TXT,sz=22,anchor='la'):
    f=font(sz); bb=d.textbbox((x,y),s,font=f,anchor=anchor)
    d.rectangle([bb[0]-8,bb[1]-6,bb[2]+8,bb[3]+6], fill=(9,10,17)); d.text((x,y),s,font=f,fill=col,anchor=anchor)
def marker(cx,cy,r=16):
    d.ellipse([cx-r-7,cy-r-7,cx+r+7,cy+r+7], outline=(255,255,255), width=4)
    d.ellipse([cx-r,cy-r,cx+r,cy+r], fill=CYAN)

# ---------- PANEL A : dorsal view, right foot ----------
ox,oy=70,130
d.rectangle([ox-30,oy-80,ox+640,oy+820], outline=(58,64,84), width=2)
tag(ox+305,oy-56,'DORSAL (top) view — RIGHT foot',sz=30,anchor='ma')
toes=[((232,296),(46,60)),((300,272),(34,62)),((356,276),(32,58)),((405,290),(29,52)),((446,315),(26,42))]
for (cx,cy),(rx,ry) in toes:
    d.ellipse([ox+cx-rx,oy+cy-ry,ox+cx+rx,oy+cy+ry], fill=SKIN)
body=[(215,760),(185,690),(170,600),(165,520),(185,430),(215,370),(245,330),(300,318),(355,320),
      (405,335),(445,365),(462,430),(465,520),(450,620),(420,700),(370,760),(290,782)]
d.polygon([(ox+x,oy+y) for x,y in body], fill=SKIN)
d.line([(ox+252,oy+345),(ox+272,oy+430),(ox+288,oy+540)], fill=BONE, width=8)
tag(ox+30,oy+618,'extensor hallucis longus tendon',sz=20,anchor='la')
d.line([(ox+286,oy+548),(ox+250,oy+604)], fill=BONE, width=3)
marker(ox+312,oy+498)
d.line([(ox+328,oy+492),(ox+455,oy+400)], fill=(255,255,255), width=3)
tag(ox+300,oy+368,'DORSALIS PEDIS',col=CYAN,sz=28,anchor='la')
tag(ox+30,oy+672,'just lateral to the EHL tendon, between',sz=19,anchor='la')
tag(ox+30,oy+700,'the bases of the 1st and 2nd metatarsals',sz=19,anchor='la')
tag(ox+120,oy+250,'MEDIAL',sz=21,anchor='ra')
tag(ox+500,oy+250,'LATERAL',sz=21,anchor='la')

# ---------- PANEL B : medial view, right ankle ----------
px,py=800,130
d.rectangle([px-30,py-80,px+700,py+820], outline=(58,64,84), width=2)
tag(px+335,py-56,'MEDIAL view — RIGHT ankle',sz=30,anchor='ma')
leg=[(330,20),(300,200),(280,330),(230,400),(140,445),(60,470),(35,520),(70,548),(170,556),
     (250,534),(330,532),(420,556),(492,548),(522,500),(522,420),(504,300),(492,20)]
d.polygon([(px+x,py+y) for x,y in leg], fill=SKIN)
d.ellipse([px+340,py+348,px+444,py+444], fill=BONE)
tag(px+300,py+300,'medial malleolus',sz=20,anchor='ra')
d.line([(px+306,py+312),(px+352,py+372)], fill=BONE, width=3)
marker(px+452,py+452)
d.line([(px+466,py+470),(px+560,py+616)], fill=(255,255,255), width=3)
tag(px+574,py+624,'POSTERIOR TIBIAL',col=CYAN,sz=28,anchor='rm')
tag(px+574,py+662,'behind and below the medial malleolus,',sz=19,anchor='rm')
tag(px+574,py+688,'in the retromalleolar groove',sz=19,anchor='rm')
tag(px+40,py+120,'ANTERIOR (toes)',sz=21)
tag(px+660,py+120,'POSTERIOR (heel)',sz=21,anchor='ra')

tag(W//2,H-34,'LAYOUT AND PALPATION POINTS ONLY — not finished artwork; re-render in the gallery style',sz=21,anchor='mm')
im.save('/tmp/pulse_ref_2panel.png'); print('ok')
