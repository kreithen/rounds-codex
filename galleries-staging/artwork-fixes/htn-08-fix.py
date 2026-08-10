"""htn p8 - badge 1 'Endothelium' kept the same radius across all three panels while the
lumen narrowed, so on the two DISEASED panels it points into the thickened wall.

NOTHING IS ERASED. The existing horizontal run is kept in full and becomes an elbow; only
a new diagonal is added from its tip down to the endothelial lining. The alternative -
erasing the horizontal and re-aiming it - was built first and rejected: the run crosses
the vessel's outer edge, a strong curved tissue/background boundary, and four clone
offsets all left a visible patch there at 10x.
"""
from PIL import Image, ImageDraw, ImageChops
import numpy as np, math

SRC='/workspace/rounds-codex-app/assets/htn/htn-08.jpg'
im=Image.open(SRC).convert('RGB'); W,H=im.size
# (elbow = existing leader tip, new endothelial endpoint)
JOBS=[((624.0,492.0),(554.0,533.5)),      # hyaline
      ((976.0,488.0),(928.7,546.1))]      # hyperplastic
S=4; STROKE=(232,230,228)
ov=Image.new('RGBA',(W*S,H*S),(0,0,0,0)); od=ImageDraw.Draw(ov)
for (ex,ey),(nx,ny) in JOBS:
    od.line([((ex+2)*S,ey*S),(nx*S,ny*S)], fill=STROKE+(255,), width=6)
img=Image.alpha_composite(im.convert('RGBA'), ov.resize((W,H), Image.LANCZOS)).convert('RGB')
img.save('/tmp/h8/htn-08-FIXED.png')
print('changed:', ImageChops.difference(im,img).convert('L').getbbox())
