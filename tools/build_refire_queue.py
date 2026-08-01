#!/usr/bin/env python3
"""Build the re-fire queue for USMLE illustrations whose PROMPT is wrong.

    python3 tools/build_refire_queue.py            # write the queue + the review doc
    python3 tools/build_refire_queue.py --check    # verify only, write nothing

These are the eight items `ILLUSTRATIONS-audit.md` found where the prompt disagrees
with the bank item it was written for. They almost certainly RENDERED -- they are not
the eight that failed and were refunded, which the harvest identifies separately by
absence. A rendered image from a wrong prompt is the more dangerous of the two: it
looks fine, and it is a faithful picture of something else.

Each correction below states the finding it fixes and why. The medical reasoning is
the audit's, re-checked against the vignette; nothing here has been through the
physician gate, and REFIRE-for-review.md is what goes to Dr. Kreithen.

Three audit findings are deliberately NOT here, because they are editorial decisions
about the bank item rather than defects in the prompt:

  s2ck-0257  ulnar drift in a 4-month history -- a judgement call about whether a hand
             showing late deformity is acceptable next to an early-disease vignette
  s3-0275    sigmoid volvulus apex direction -- the fired prompt already dropped the
             wrong "LEFT" option; check the render before re-firing anything
  s3-0314    the item shows the result of the very test it asks the student to order;
             the fix is to the item or to drop the image, not to the prompt

The re-fires are cheap (2 credits each, 16 total) and the wrong images are not
recoverable by editing, so this is not a close call.
"""
import argparse, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, 'tools', 'image-manifest.json')
QUEUE = os.path.join(ROOT, 'tools', 'refire-queue.json')
DOC = os.path.join(ROOT, 'tools', 'REFIRE-for-review.md')

sys.path.insert(0, os.path.join(ROOT, 'tools'))
from image_batch_plan import aspect                       # one definition of the ratios


# id -> (what was wrong, what the corrected prompt must say instead, corrected prompt).
# The `was` string is asserted to be present in the manifest prompt and the `now`
# string to be absent from it, so a manifest that has already been fixed fails loudly
# instead of queueing a pointless re-fire.
CORRECTIONS = {

's1-0118': dict(
  finding='"Orphan Annie eye" nuclear clearing is a formalin/paraffin artifact and is '
          'characteristically ABSENT on a cytology smear. What an alcohol-fixed Pap '
          'smear shows is finely granular, powdery pale chromatin. The grooves, '
          'pseudoinclusions and psammoma bodies were already right.',
  note='The vignette fixes the modality as cytology ("FNA performed; the image is the '
       'thyroid cytology"), so the fix is to the nuclear description, not to the stain. '
       'The item\'s bracketed image caption repeats the same claim and needs the same '
       'edit in the bank -- that is an app-side text change, not part of this re-fire.',
  was='(Orphan Annie eye) optically empty nuclei',
  now='powdery, finely granular pale chromatin',
  prompt=(
    'Hyperrealistic thyroid fine-needle aspiration cytology photomicrograph at 400x, '
    'Papanicolaou-stained smear with authentic pale translucent cytoplasm and crisp '
    'nuclear detail, showing a crowded overlapping papillary cluster of enlarged '
    'follicular tumor cells with the diagnostic cytologic nuclear features: markedly '
    'ENLARGED, OVERLAPPING nuclei with powdery, finely granular pale chromatin, '
    'longitudinal nuclear GROOVES (coffee-bean creases), and occasional INTRANUCLEAR '
    'CYTOPLASMIC PSEUDOINCLUSIONS (sharply outlined round cytoplasmic invaginations); '
    'among the cells one or two round laminated concentric calcified PSAMMOMA BODIES '
    '(basophilic onion-ring structures); realistic smear background with scattered '
    'colloid and cellular texture. The nuclei are NOT optically clear or empty - this '
    'is a cytology smear, not a paraffin section. '
    'no text, no labels, no watermark, no measurement overlays.')),

's1-0184': dict(
  finding='Vertebral corner squaring and vertical syndesmophytes are LATERAL-projection '
          'findings; on an AP pelvis only L5 and the sacrum are in the field, so neither '
          'is demonstrable. The generator was being asked for something the projection '
          'cannot show.',
  note='The bilateral symmetric sacroiliitis carries the item on its own. The vignette\'s '
       'caption promises a second lateral-spine panel that the prompt never produced; '
       'either drop that clause from the caption or commission a two-panel image. '
       'Bank-side text, again not part of this re-fire.',
  was='thin vertical bridging SYNDESMOPHYTES',
  now='sacroiliac joints are the only abnormality in the field',
  prompt=(
    'Photorealistic ANTEROPOSTERIOR pelvis radiograph of a young adult man, grayscale '
    'with DICOM-like diagnostic dynamic range, realistic bone trabecular texture and '
    'correct pelvic anatomy. Show advanced BILATERAL, SYMMETRIC SACROILIITIS of '
    'ankylosing spondylitis: both sacroiliac joints demonstrate irregular subchondral '
    'EROSION and reactive SCLEROSIS on both the iliac and sacral sides, progressing to '
    'near-complete BONY FUSION (ankylosis) with bridging trabeculae crossing the joint, '
    'so the normal SI joint spaces are blurred and obliterated bilaterally and '
    'symmetrically. The hips, pubic symphysis, sacrum and visible lower lumbar segment '
    'are otherwise normally rendered - the sacroiliac joints are the only abnormality in '
    'the field. '
    'no text, no labels, no watermark, no measurement overlays.')),

's1-0188': dict(
  finding='A right LOWER lobe consolidation obliterates the right HEMIDIAPHRAGM outline '
          'and PRESERVES the right heart border, because the right heart border abuts '
          'the air-filled right MIDDLE lobe. Loss of the right heart border localizes '
          'disease to the middle lobe, which is a different diagnosis on the film.',
  note='Second, smaller error in the same sentence: the RLL is bounded superiorly by the '
       'MAJOR fissure only. The minor fissure separates upper from middle lobe, so '
       '"major/minor fissure boundary" is wrong for this lobe.',
  was='the right heart border and hemidiaphragm silhouette may be partly obscured',
  now='RIGHT HEART BORDER remains SHARP and clearly visible',
  prompt=(
    'Photorealistic frontal PA chest radiograph of an adult, grayscale with high dynamic '
    'range and DICOM-like diagnostic quality, anatomically correct thorax with sharp bony '
    'detail. Show LOBAR PNEUMONIA of the RIGHT LOWER LOBE: a dense, homogeneous '
    'water-density (white) CONSOLIDATION confined to the right lower lobe below the MAJOR '
    'FISSURE, containing branching lucent AIR BRONCHOGRAMS coursing through the opacity. '
    'The consolidation OBLITERATES the outline of the RIGHT HEMIDIAPHRAGM where it abuts '
    'it, while the RIGHT HEART BORDER remains SHARP and clearly visible - the silhouette '
    'sign of lower-lobe rather than middle-lobe disease. The LEFT lung is clear for '
    'contrast, the costophrenic angles are otherwise sharp, and the heart size is normal '
    'with no gross effusion. Correct ribs, clavicles, and mediastinal contours. '
    'no text, no labels, no watermark, no measurement overlays.')),

's1-0206': dict(
  finding='The vignette gives new LEFT-sided weakness, which requires a RIGHT-hemisphere-'
          'dominant lesion; the prompt asked for a SYMMETRIC bihemispheric mass. The '
          'prompt also contradicts itself - a truly symmetric mass exerts balanced '
          'pressure and cannot produce the midline shift and single-ventricle effacement '
          'it goes on to request.',
  note='Real butterfly gliomas are bihemispheric but almost always have a dominant side, '
       'so "right-predominant, extending across the corpus callosum into the left" is '
       'both more accurate and internally consistent.',
  was='symmetric wing-like (butterfly) configuration',
  now='RIGHT-PREDOMINANT',
  prompt=(
    'Hyperrealistic axial POST-GADOLINIUM T1-weighted brain MRI in diagnostic grayscale, '
    'radiologically accurate skull-base and brain anatomy with realistic MRI signal and '
    'gray-white differentiation. Depict a GLIOBLASTOMA as a BUTTERFLY GLIOMA: a large, '
    'irregular, thick-walled RING-ENHANCING mass with a bright peripheral rim of '
    'enhancement surrounding a darker CENTRAL NECROTIC core, centered on and CROSSING THE '
    'CORPUS CALLOSUM so that it involves BOTH cerebral hemispheres in a wing-like '
    '(butterfly) configuration but is clearly RIGHT-PREDOMINANT, with the bulk of the '
    'mass in the RIGHT hemisphere and a smaller wing extending across the midline into '
    'the left. Show surrounding non-enhancing vasogenic edema, mass effect with '
    'effacement of the RIGHT lateral ventricle, and midline shift toward the LEFT. Skull '
    'and orbits correctly rendered. '
    'no text, no labels, no watermark, no measurement overlays.')),

's2ck-0017': dict(
  finding='The target / doughnut / bull\'s-eye sign of pyloric stenosis is the TRANSVERSE '
          'section. The long-axis view gives the CERVIX sign. A doughnut cannot be seen '
          '"in profile", so the two halves of the instruction fight each other.',
  note='The risk is concrete: the generator may return a transverse bull\'s-eye instead of '
       'the elongated 17 mm channel the vignette measures, which would also collide with '
       'the intussusception target image in s2ck-0039.',
  was='giving the classic cervix-like / doughnut appearance in profile',
  now='the CERVIX SIGN',
  prompt=(
    'Photorealistic infant abdominal ultrasound image, grayscale high-frequency image '
    'with realistic fine ultrasound speckle texture, LONG-AXIS (longitudinal) view of the '
    'gastric pylorus. Depict HYPERTROPHIC PYLORIC STENOSIS: an ELONGATED pyloric CHANNEL '
    'roughly 17 mm long, its wall formed by a THICKENED HYPOECHOIC muscular layer about '
    '4 mm thick on the single measured wall, surrounding a thin central ECHOGENIC mucosal '
    'line, so the elongated hypertrophied pylorus indents the fluid-filled gastric antrum '
    'and produces the CERVIX SIGN. The stomach proximally is distended with anechoic '
    'fluid. This is the longitudinal section - do NOT render a transverse, round '
    'target/doughnut/bull\'s-eye cross-section. Correct probe geometry and sector edges. '
    'no text, no labels, no watermark, no measurement overlays.')),

's2ck-0051': dict(
  finding='Same silhouette-sign error as s1-0188: an RLL consolidation obscures the right '
          'HEMIDIAPHRAGM and leaves the right HEART BORDER sharp. Loss of the heart '
          'border would put the disease in the middle lobe.',
  note='Found independently by two different audit shards, which is why a sweep of all '
       '231 manifest prompts was run - these two are the only instances.',
  was='the adjacent right hemidiaphragm/heart border silhouette is partly obscured',
  now='RIGHT HEART BORDER remains SHARP',
  prompt=(
    'Photorealistic frontal PA chest radiograph of an adult man, grayscale with high '
    'dynamic range and DICOM-like diagnostic quality, anatomically correct thorax with '
    'sharp bony detail. Show a focal RIGHT LOWER LOBE PNEUMONIA: a dense, homogeneous '
    'water-density (white) CONSOLIDATION in the right lower lobe below the MAJOR FISSURE '
    'with lucent branching AIR BRONCHOGRAMS running through it. The consolidation '
    'OBLITERATES the outline of the RIGHT HEMIDIAPHRAGM, while the RIGHT HEART BORDER '
    'remains SHARP and clearly visible - the silhouette sign of lower-lobe rather than '
    'middle-lobe disease. The remainder of the right lung and the entire LEFT lung are '
    'clear, costophrenic angles are sharp, the heart size is normal, and there is no '
    'significant effusion. Correct ribs, clavicles, and mediastinal contours. '
    'no text, no labels, no watermark, no measurement overlays.')),

's2ck-0127': dict(
  finding='"Fat-containing" describes a MYELOLIPOMA, a different lesion. A lipid-rich '
          'adenoma holds microscopic intracytoplasmic lipid and measures under 10 HU - '
          'near water, mid-to-dark gray. Macroscopic fat density (about -30 to -100 HU, '
          'as dark as the surrounding retroperitoneal fat) is the myelolipoma\'s hallmark.',
  note='This is the one most likely to have produced a confidently wrong picture: the '
       'generator can reasonably read "fat-containing" as fat-density and render the '
       'wrong entity, and the item\'s answer turns on the near-water appearance the '
       'vignette specifies.',
  was='(fat-containing, dark gray/near-water density)',
  now='NOT as dark as the surrounding retroperitoneal FAT',
  prompt=(
    'Hyperrealistic axial CT of the abdomen in diagnostic grayscale, soft-tissue window, '
    'radiologically accurate upper-abdominal anatomy (liver, spleen, kidneys, both '
    'adrenal glands, aorta, and inferior vena cava) with realistic CT noise. Depict a '
    'BENIGN LIPID-RICH ADRENAL ADENOMA: a small (about 2.5 cm), WELL-CIRCUMSCRIBED, '
    'ROUND, HOMOGENEOUS RIGHT ADRENAL NODULE with smooth margins and uniformly LOW '
    'attenuation close to WATER density (mid-to-dark gray, comparable to simple fluid), '
    'without necrosis, calcification, or an irregular thick enhancing rim. The nodule is '
    'clearly NOT as dark as the surrounding retroperitoneal FAT - it contains no '
    'macroscopic fat and must not resemble a fat-density myelolipoma. The contralateral '
    'left adrenal limb, kidneys, and other organs appear normal. '
    'no text, no labels, no watermark, no measurement overlays.')),

's2ck-0162': dict(
  finding='In a displaced subcapital femoral-neck fracture the HEAD stays seated in the '
          'acetabulum, typically in varus; it is the neck-shaft fragment that rides '
          'superiorly and externally rotates. Asking for "the femoral HEAD displaced" '
          'invites a rendered hip DISLOCATION.',
  note='A dislocated hip with an empty acetabulum and no fracture is on this item\'s own '
       'avoid list, and this wording is the most direct route to it.',
  was='with the femoral HEAD displaced',
  now='HEAD still SEATED within the acetabulum',
  prompt=(
    'Photorealistic ANTEROPOSTERIOR (AP) PELVIS RADIOGRAPH of an older adult in grayscale '
    'with DICOM-like diagnostic dynamic range and anatomically accurate bony pelvis, both '
    'hips, and proximal femora, with osteopenic (washed-out) bone texture. Depict a '
    'DISPLACED RIGHT FEMORAL NECK (subcapital) FRACTURE: a lucent FRACTURE LINE across the '
    'RIGHT femoral NECK just below the head, with the femoral HEAD still SEATED within the '
    'acetabulum and tilted into varus, while the NECK-AND-SHAFT fragment is displaced '
    'SUPERIORLY, shortened, and EXTERNALLY ROTATED (the lesser trochanter thrown into '
    'profile), producing a DISRUPTED/BROKEN Shenton line on the right. The acetabulum is '
    'NOT empty and the hip is NOT dislocated. The LEFT hip is intact with a smooth '
    'continuous Shenton line for comparison, and the acetabula, pubic rami, and sacrum are '
    'correctly rendered. '
    'no text, no labels, no watermark, no measurement overlays.')),
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true', help='verify only, write nothing')
    a = ap.parse_args()

    by = {i['id']: i for i in json.load(open(MANIFEST))['items']}
    jobs = json.load(open(os.path.join(ROOT, 'tools', 'higgsfield-jobs-0731.json')))
    pilot = json.load(open(os.path.join(ROOT, 'tools', 'generated-image-urls.json')))
    generated = set(jobs.values()) | set(pilot)

    rows, problems = [], []
    for qid, c in sorted(CORRECTIONS.items()):
        it = by.get(qid)
        if it is None:
            problems.append(f'{qid}: not in the manifest')
            continue
        if qid not in generated:
            problems.append(f'{qid}: never generated, so there is nothing to re-fire')
        # The point of these two: if someone fixes the manifest prompt in place, this
        # script must stop claiming a re-fire is needed rather than silently agreeing.
        if c['was'] not in it['prompt']:
            problems.append(f'{qid}: the defect text is gone from the manifest prompt '
                            f'-- already fixed? ({c["was"][:50]!r})')
        if c['now'] not in c['prompt']:
            problems.append(f'{qid}: the corrected prompt does not contain its own fix '
                            f'({c["now"][:50]!r})')
        rows.append(dict(id=qid, title=it['title'], exam=it['exam'],
                         ar=aspect(it['modality']), finding=c['finding'],
                         note=c['note'], prompt=c['prompt']))

    for p in problems:
        print('FAIL  ' + p)
    if problems:
        return 1

    print(f'{len(rows)} corrected prompts, all verified against the manifest')
    for r in rows:
        print(f'  {r["id"]:<11} {r["ar"]:<4} {r["title"]}')
    print(f'\ncost to re-fire: {2 * len(rows)} credits')
    if a.check:
        return 0

    json.dump(rows, open(QUEUE, 'w'), indent=1)

    with open(DOC, 'w') as f:
        f.write('# USMLE illustrations — corrected prompts awaiting the physician gate\n\n')
        # Drop the title and the usage block; the rest of the docstring is the
        # rationale, which is exactly what the reviewer needs at the top.
        f.write('\n\n'.join(__doc__.split('\n\n')[2:]).strip() + '\n\n')
        f.write(f'**{len(rows)} re-fires, {2 * len(rows)} credits.** '
                'Generated by `build_refire_queue.py`; edit the corrections there, '
                'not here.\n\n---\n\n')
        for r in rows:
            f.write(f'## `{r["id"]}` — {r["title"]}\n\n')
            f.write(f'*{r["exam"]}* · aspect `{r["ar"]}`\n\n')
            f.write(f'**What was wrong.** {r["finding"]}\n\n')
            f.write(f'{r["note"]}\n\n')
            f.write('<details><summary>corrected prompt</summary>\n\n```\n')
            f.write(r['prompt'] + '\n```\n\n</details>\n\n')
    print(f'\nwrote {os.path.relpath(QUEUE, ROOT)}\n      {os.path.relpath(DOC, ROOT)}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
