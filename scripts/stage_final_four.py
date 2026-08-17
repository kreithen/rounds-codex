import json, os, shutil, hashlib, subprocess, textwrap
from PIL import Image, JpegImagePlugin
APP='/workspace/rounds-codex-app'
P=json.load(open('/tmp/res_paths.json'))
STAGE='/tmp/rc-final-four'
OUT='/home/user/rounds-codex/rounds-codex-final-four.zip'
W=94
shutil.rmtree(STAGE, ignore_errors=True); os.makedirs(STAGE)
def md5(p): return hashlib.md5(open(p,'rb').read()).hexdigest()
def para(t, ind=''):
    return '\n'.join(textwrap.fill(l, W, initial_indent=ind, subsequent_indent=ind) or ind for l in t.split('\n'))
rows=[]
for k, src in sorted(P.items()):
    name=os.path.basename(src)
    dst=os.path.join(STAGE,name)
    shutil.copy2(src,dst)
    with Image.open(dst) as I:
        sz=I.size; ch={0:'4:4:4',1:'4:2:2',2:'4:2:0'}.get(JpegImagePlugin.get_sampling(I),'?')
    h=md5(dst)
    assert h==md5(src), name
    rows.append(dict(key=k,name=name,w=sz[0],h=sz[1],ch=ch,md5=h,rel=os.path.relpath(src,APP)))

ITEMS={
 'cardiomyopathy-p1':[("1. ARRHYTHMOGENIC callout — (772,861)",
   "The callout terminates at (772,861), inside the RESTRICTIVE slab (slab dividers measured "
   "at x=352 and x=640). No arrhythmogenic slab was ever drawn, so there is nothing on this "
   "page for it to point at.\n"
   "THIS IS A DELETION, NOT A MOVE. There is no correct place on this page for this callout, "
   "so dragging it anywhere just relocates the error. Either delete the ARRHYTHMOGENIC label "
   "and its leader outright, or send the page to production to have a fourth slab drawn. Note "
   "that ACM is classically RIGHT-ventricular while every existing slab is cut to show the LV, "
   "so a fourth slab is new artwork, not a recolour of an existing one.")],
 'aortic-stenosis-p2':[("2. Inferior Vena Cava — ADD a label at (365,1010)",
   "The vessel at (365,1010) is the inferior vena cava. It used to carry the Pulmonary Trunk "
   "label; that label was correctly moved, and the IVC now carries nothing — while the page "
   "labels the SUPERIOR vena cava a short distance above it. A reader sees one cava named and "
   "one not.\n"
   "ADD 'Inferior Vena Cava' with a short leader terminating at (365,1010). Tissue sampled "
   "there is (97,109,167) — the blue vessel body, not an edge. Match the type size, weight and "
   "leader stroke of the existing 'Superior Vena Cava' label above it."),
  ("3. Pulmonary Trunk label block — re-site it; leader currently (255,1105) -> (644,512)",
   "The endpoint at (644,512) is CORRECT and must not move — tissue there samples (134,136,168), "
   "on the blue trunk. The problem is the route: the label block stayed at the lower left, so "
   "the leader runs diagonally across the right ventricle, through the tricuspid chordae, and "
   "past the LVOT leaders.\n"
   "MOVE THE LABEL BLOCK ONLY, to the upper left or upper centre, beside the vessel it names, "
   "and redraw the leader short and clean into the same endpoint (644,512). This is cosmetic, "
   "not anatomical — no reader will misidentify anything today — but it is a hero anatomy page "
   "and the crossing is conspicuous.")],
 'stroke-p2':[("4. Posterior Communicating Artery — RESTORE it (CIRCLE OF WILLIS panel)",
   "The correction pass deleted TWO label blocks from this panel. Deleting "
   "'Middle Communicating Artery (PCoA)' was right — there is no such vessel, it was fabricated, "
   "and it duplicated the PCoA abbreviation. But 'Posterior Communicating Artery (PCoA)' was "
   "deleted too, and that one is real. Verified on the current file: the label column now reads "
   "only ICA / PCA / Basilar / Vertebral.\n"
   "RESTORE 'Posterior Communicating Artery (PCoA)' with a leader onto the vessel joining the "
   "internal carotid to the posterior cerebral artery. Do NOT restore the middle communicating "
   "entry. The panel is THE Circle of Willis figure and the PCoA is one of the two vessels that "
   "make it a circle — it is the collateral pathway the panel's own caption is about.\n"
   "TARGET COORDINATE IS APPROXIMATE: roughly (105,487), read off the drawn vessel. Place the "
   "terminator on the vessel as drawn rather than trusting that number to the pixel — the old "
   "label is gone, so there is no leader left to measure against.")],
}

L=['='*W,'ROUNDS CODEX — THE FINAL FOUR ITEMS','3 pages, 4 items.','='*W,'']
L+=[para("Every JPEG here is a BYTE-IDENTICAL copy of the file the live site is serving today. "
         "Nothing has been re-encoded, resized or touched."),'',
    para("Work these alongside Rounds-Codex-final-four-items.pdf, which shows each item on the "
         "image itself: a red crossed circle where the leader ends now, a green ring where it "
         "belongs, and close-ups at magnification."),'',
    '-'*W,'THESE FOUR ARE NOT ORDINARY LEADER MOVES','-'*W,
    para("Everything else in this project was 'the line ends in the wrong place, drag the tip'. "
         "These four are not. One is a DELETION (there is no correct target on the page), one is "
         "an ADDITION (a structure that carries no label at all), one is a LABEL BLOCK MOVE with "
         "the endpoint held fixed, and one is a RESTORATION of type that was erased. Read each "
         "item before starting it."),'',
    '-'*W,'THE FOUR RULES','-'*W,
    para("1. Erase the last segment along the LEADER'S OWN AXIS, then redraw to the target. "
         "Sample the stroke width and colour off the leader itself a little way back from the "
         "tip.",'   '),
    para("2. The test that a move is clean: at the OLD endpoint, ink in a 13x13 box must fall to "
         "ZERO. If ink remains, the leader was extended rather than moved.",'   '),
    para("3. Never repaint artwork. If a fix needs illustration painted over, stop and say so — "
         "that page goes to production instead.",'   '),
    para("4. Save at the SAME pixel dimensions. Do not resample, resize, crop or rotate.",'   '),'',
    para("AND ONE LESSON FROM AN EARLIER BATCH: two pages came back with a label's TEXT destroyed "
         "rather than its leader moved. When a leader starts inside a text column, check the type "
         "after the erase."),'']

for r in rows:
    L+=['='*W, f"{r['name']}   [{r['key']}]", '='*W,
        f"    {r['w']}x{r['h']} px, chroma {r['ch']}",
        f"    md5 {r['md5']}",
        f"    goes back to:  {r['rel']}", '']
    for title, body in ITEMS[r['key']]:
        L.append(para(title,'  ')); L.append(''); L.append(para(body,'      ')); L.append('')
open(os.path.join(STAGE,'README.txt'),'w').write('\n'.join(L)+'\n')
shutil.copy2('/home/user/rounds-codex/galleries-staging/Rounds-Codex-final-four-items.pdf', STAGE)
shutil.copy2('/home/user/rounds-codex/galleries-staging/PRODUCTION-residual-after-rerender.md', STAGE)
if os.path.exists(OUT): os.remove(OUT)
subprocess.run(['zip','-r','-q','-X',OUT,os.path.basename(STAGE),'-x','.*','-x','__MACOSX/*'],
               cwd=os.path.dirname(STAGE),check=True)
print(OUT, os.path.getsize(OUT))
for r in rows: print(' ', r['name'], r['w'], 'x', r['h'], r['ch'], r['md5'][:12])
