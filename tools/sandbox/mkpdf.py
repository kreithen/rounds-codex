import base64,gzip,json,subprocess,os,sys
from PIL import Image
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,Table,TableStyle,Image as RI,PageBreak
rows=json.loads(gzip.decompress(base64.b64decode(open('p.b64').read())))
P='https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_'
def S(n,**k):
    b=dict(fontName='Helvetica',fontSize=9.6,leading=13,textColor=colors.HexColor('#16202c'),spaceAfter=5);b.update(k);return ParagraphStyle(n,**b)
qs=S('q',fontName='Courier-Bold',fontSize=9.5,textColor=colors.HexColor('#0b6ea8'),spaceAfter=1)
ts=S('t',fontName='Helvetica-Bold',fontSize=13.5,leading=16,spaceAfter=3)
xs=S('x',fontSize=8.4,textColor=colors.HexColor('#5d6f82'),spaceAfter=8)
ss=S('s',fontSize=9.4,leading=12.5,spaceAfter=0)
ls=S('l',fontName='Helvetica-Bold')
asy=S('a',fontName='Helvetica-Bold',textColor=colors.HexColor('#116b3a'))
e=lambda s:str(s or '').replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
story=[];ok=0;bad=[]
for i,r in enumerate(rows):
    f=r['q']+'.jpg'
    subprocess.run(['curl','-sS','-m','90','-o','o.png',P+r['u']+'.png'],check=False)
    try:
        im=Image.open('o.png').convert('RGB');im.thumbnail((1100,1600),Image.LANCZOS);im.save(f,'JPEG',quality=80,optimize=True)
    except Exception as ex:
        bad.append(r['q']);continue
    ok+=1
    right=[Paragraph(e(r['q']),qs),Paragraph(e(r['t']),ts),Paragraph(e(r['x']),xs)]
    if r['s']:
        t=Table([[Paragraph('<b>IMAGE SHOULD SHOW</b><br/>'+e(r['s']),ss)]],colWidths=[3.5*inch])
        t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),colors.HexColor('#eaf4fb')),('LINEBEFORE',(0,0),(0,-1),2.2,colors.HexColor('#0b6ea8')),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
        right+=[t,Spacer(1,7)]
    right+=[Paragraph(e(r['l']),ls),Paragraph(e(r['a']),asy)]
    w,h=Image.open(f).size;sc=min(3.2*inch/w,8.3*inch/h)
    row=Table([[RI(f,width=w*sc,height=h*sc),right]],colWidths=[3.35*inch,3.75*inch])
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(0,0),14),('TOPPADDING',(0,0),(-1,-1),0)]))
    story.append(row)
    if i!=len(rows)-1: story.append(PageBreak())
SimpleDocTemplate('out.pdf',pagesize=LETTER,leftMargin=0.7*inch,rightMargin=0.7*inch,topMargin=0.6*inch,bottomMargin=0.6*inch).build(story)
print('PAGES',ok,'FAILED',len(bad),bad,'BYTES',os.path.getsize('out.pdf'))
