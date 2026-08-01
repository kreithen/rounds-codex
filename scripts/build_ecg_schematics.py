#!/usr/bin/env python3
"""Build the five missing USMLE ECG schematics, in the app's existing house style.

    python3 scripts/build_ecg_schematics.py               # write illus-pM.js + previews
    python3 scripts/build_ecg_schematics.py --check       # verify only, write nothing

Of the 32 ECG items in the bank, 27 carry a hand-built SVG and five carry nothing:

    s2ck-0009  atrial fibrillation
    s1-0012    torsades de pointes on sotalol
    s1-0136    Wolff-Parkinson-White
    s1-0061    inferior MI          -- both are INFERIOR STEMI, so one image
    s2ck-0001  acute STEMI          -- is registered against both ids

WHY DRAWN AND NOT GENERATED. `image-manifest.json` says it outright for s1-0061:
image models "render gibberish/anatomically-invalid ECG waveforms (wrong complex
morphology, impossible intervals, mislabeled leads)" and the app's own vector
tracing is the recommended primary. That is why all 32 ECGs were held back from the
Higgsfield run. A schematic that is honest about being a diagram beats a
photorealistic tracing that is subtly wrong.

WHAT THE GRID DOES AND DOES NOT MEAN. The existing 27 are NOT to paper scale --
measured off s2ck-0028, the R-R is 72 px, which at 25 mm/s would be 250 bpm. At a
320 px display width you cannot have both standard 0.04 s boxes and enough beats to
read a rhythm, and those schematics chose the rhythm. This follows them, so the grid
is decoration and nothing here is measurable. What IS faithful is relative
morphology: the R-R irregularity in fibrillation, the twisting envelope in torsades,
the short PR and slurred upstroke in pre-excitation, and which leads move in which
direction in the inferior infarct. Those carry the teaching; absolute timing does
not.

LABELS NAME THE FINDING, NEVER THE DIAGNOSIS. "Short PR", not "WPW". The bank asks
what the tracing shows, so a label reading "Monomorphic VT" hands over the answer --
which is what s3-0023 currently does, and is worth a separate pass over the other 26.

Nothing here has been through the physician gate.
"""
import argparse, math, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_JS = os.path.join(ROOT, 'applive', 'usmle', 'illus-pM.js')
PREVIEW = os.path.join(ROOT, 'usmle-staging', 'ecg-preview')

# ── house style, measured off the shipped SVGs (s2ck-0028, s2ck-0026) ───────────
W        = 460
GRID     = 12                       # minor grid pitch
MAJOR    = 60                       # every fifth line is brighter
GRID_COL = '#e0524f'
CARD_BG  = '#06090d'
CARD_ST  = 'rgba(255,255,255,.08)'
TRACE    = 'rgba(240,246,252,.95)'  # the tracing itself
ACCENT   = '#e0524f'                # marks ONLY the pathologic feature
LEADLBL  = 'rgba(214,224,238,.80)'
FONT     = 'font-family="sans-serif" font-size="11"'


def card(h):
    """Border plus the red graph paper, identical to the shipped schematics."""
    out = [f'<svg viewBox="0 0 {W} {h}" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">',
           f'<rect x="4" y="4" width="{W - 8}" height="{h - 8}" rx="10" '
           f'fill="{CARD_BG}" stroke="{CARD_ST}"/>', '<g>']
    for x in range(0, W + 1, GRID):
        op = '0.14' if x % MAJOR == 0 else '0.06'
        out.append(f'<line x1="{x}" y1="0" x2="{x}" y2="{h}" stroke="{GRID_COL}" stroke-opacity="{op}"/>')
    for y in range(0, h + 1, GRID):
        op = '0.14' if y % MAJOR == 0 else '0.06'
        out.append(f'<line x1="0" y1="{y}" x2="{W}" y2="{y}" stroke="{GRID_COL}" stroke-opacity="{op}"/>')
    out.append('</g>')
    return out


def poly(pts, colour=TRACE, width=2):
    s = ' '.join(f'{round(x, 1)},{round(y, 1)}' for x, y in pts)
    return (f'<polyline points="{s}" fill="none" stroke="{colour}" stroke-width="{width}" '
            f'stroke-linejoin="round" stroke-linecap="round"/>')


def text(x, y, s, colour=LEADLBL):
    return f'<text x="{x}" y="{y}" {FONT} fill="{colour}">{s}</text>'


def place(seg, x0, base):
    """(dx, amplitude-up) offsets -> absolute SVG points. Up is positive, SVG y is down."""
    return [(x0 + dx, base - up) for dx, up in seg]


# ── beat morphology ────────────────────────────────────────────────────────────
# Each returns (dx, up) offsets from the start of the beat, sitting on the baseline.
# Amplitudes are in px and relative to one another; see the scale note above.

def sinus(rr, p=7, q=6, r=38, s=13, t=12, st=0, t_inv=False, pr=22, qt=None):
    """One sinus beat. `st` shifts the J point and ST segment off the baseline.

    `qt` stretches the interval from the J point to the peak of T, which is the
    whole point of the sotalol tracing; the T also widens with it so a long QT does
    not read as a normal T that has merely drifted late.
    """
    tp = -t if t_inv else t
    j = 42                                       # J point, end of QRS
    tpk = j + (16 if qt is None else qt)         # T peak
    tend = tpk + (16 if qt is None else int(qt * 0.9))
    return [(0, 0), (2, 0), (8, p), (14, 0), (pr, 0),
            (25, -q), (31, r), (37, -s), (j, st),
            (j + 6, st), (tpk, st + tp), (tend, 0), (rr, 0)]


def infarct_beat(rr, st, t):
    """A beat whose ST segment is displaced off the baseline and stays there.

    Drawn as a plateau, not a peak. Injury current lifts the whole ST segment from
    the J point and the T grows out of the raised segment -- the earlier version
    ramped straight from J to a tall apex, which renders as an enormous T wave and
    is a different abnormality. Amplitude is held to about a third of the R for the
    same reason: an ST shift as tall as the QRS is not something the eye should be
    taught to expect.
    """
    return [(0, 0), (2, 0), (8, 6), (14, 0), (22, 0),        # P, PR
            (25, -5), (31, 32), (37, -9),                     # QRS
            (42, st), (50, st + 1), (58, st + 2),             # J point, coved plateau
            (68, st + t), (80, 0), (rr, 0)]                   # T off the raised ST


def st_span(beat_x, base, st, t):
    """The J-point-to-baseline span of an infarct beat, painted in the accent colour."""
    return place([(42, st), (50, st + 1), (58, st + 2), (68, st + t), (80, 0)], beat_x, base)


# ── the four tracings ──────────────────────────────────────────────────────────

def atrial_fibrillation():
    """Absent P waves on a fibrillating baseline, with irregularly irregular R-R.

    The two findings that make the diagnosis are the ones drawn: nothing organised
    before the QRS, and no two R-R intervals alike. The QRS stays narrow -- rate
    control, not aberrancy, and a wide complex here would be a different question.
    """
    h, base = 190, 112
    out = card(h)
    rr = [58, 86, 64, 92, 68, 56, 66]            # deliberately no repeat, no pattern
    qrs = [(0, 0), (8, -6), (14, 36), (20, -11), (26, 0), (31, 0), (40, 10), (50, 0)]
    beat_w = qrs[-1][0]

    def fib(x0, n):
        """Fibrillatory baseline: two incommensurate waves, so it never repeats."""
        return [(x0 + i, base - (2.6 * math.sin((x0 + i) * 0.55)
                                 + 1.7 * math.sin((x0 + i) * 0.23 + 1.1)))
                for i in range(0, max(4, n), 2)]

    trace, fibs, ticks, x = [], [], [], 22
    for gap in rr:
        if x + gap > W - 12:
            break
        seg = fib(x, gap - beat_w)
        fibs.append(seg)
        trace += seg
        beat = place(qrs, seg[-1][0], base)
        trace += beat
        ticks.append(beat[2][0])                 # R peak, for the interval marks
        x = beat[-1][0]
    out.append(poly(trace))
    for seg in fibs:                             # accent the baseline, never the QRS
        out.append(poly(seg, ACCENT, 2.4))
    for t in ticks:
        out.append(f'<line x1="{round(t,1)}" y1="{base+44}" x2="{round(t,1)}" y2="{base+54}" '
                   f'stroke="{ACCENT}" stroke-width="2"/>')
    out += [text(20, 30, 'No P waves', ACCENT),
            text(20, 178, 'R–R never repeats'),
            '</svg>']
    return ''.join(out)


def torsades():
    """A markedly long QT, then R-on-T, then polymorphic VT twisting about the baseline.

    The vignette requires both halves -- the prolonged QT is the mechanism and the
    reason sotalol is the answer, so a strip showing only the arrhythmia would lose
    the item. The run is drawn as a fast oscillation under a swelling-and-collapsing
    envelope, which is what produces the spindle the eye reads as a twisting axis.
    """
    h, base = 210, 112
    out = card(h)
    trace, x = [], 16
    long_qt, rr = 34, 112
    # sinus(qt=34) ends its T at 42+34+30 = 106, so the R-R has to clear that. At the
    # 96 used first, each prolonged T ran on into the following P and the lead-in
    # rendered as a tangle -- a long QT is only legible if there is room for it.
    assert rr > 42 + long_qt + int(long_qt * 0.9)
    sinus_at = []
    for _ in range(2):
        trace += place(sinus(rr, r=34, t=13, qt=long_qt), x, base)
        sinus_at.append(x)
        x += rr
    # R-on-T: the ectopic lands on the tail of the preceding T and starts the run
    trace += place([(0, 0), (6, -7), (12, 30), (18, -13), (24, 0)], x - 30, base)
    x -= 4
    start = x
    # Oscillation slow enough that individual complexes are countable -- at the
    # period this first used, the run rendered as a fine sinusoid indistinguishable
    # from flutter or fine VF, which is the wrong rhythm.
    env_len = 104.0
    while x < W - 22:
        k = x - start
        env = 36 * math.sin(math.pi * (k % env_len) / env_len) ** 1.3 + 3
        trace.append((x, base - env * math.sin(k * 0.34)))
        x += 1.2
    trace.append((x, base))
    out.append(poly(trace))
    for sx in sinus_at:                          # both prolonged QTs, not just the first
        out.append(poly(place([(42, 0), (48, 0), (42 + long_qt, 11),
                               (42 + long_qt + 30, 0)], sx, base), ACCENT, 2.6))
    out.append(poly([p for p in trace if p[0] >= start], ACCENT, 2.6))
    out += [text(20, 30, 'Prolonged QT'),
            text(start + 6, 30, 'Twisting axis', ACCENT),
            '</svg>']
    return ''.join(out)


def wpw():
    """Short PR, delta wave, wide QRS, discordant T -- the resting pre-excitation ECG.

    The delta is the accessory pathway depolarising ventricle early, so it must run
    continuously out of the P wave with no isoelectric PR segment between them. Drawn
    as a separate slurred ramp into the R, and that ramp is the only thing in accent.
    """
    h, base = 190, 112
    out = card(h)
    trace, deltas, x = [], [], 18
    rr = 84
    while x < W - 26:
        # The QRS runs 16 -> 54, roughly twice the 25 -> 42 of the normal beat above.
        # The width is a diagnostic criterion, not decoration: pre-excitation without
        # a visibly broad complex is just a short PR.
        beat = place([(0, 0), (2, 0), (8, 7), (14, 0),        # P
                      (16, 1),                                # PR barely exists
                      (30, 13),                               # slurred delta upstroke
                      (38, 34), (46, -12), (54, 0),           # broad QRS
                      (60, 0), (70, -10), (80, 0), (rr, 0)],  # discordant T
                     x, base)
        trace += beat
        deltas.append(beat[4:6])                              # the 16 -> 30 ramp
        x += rr
    out.append(poly(trace))
    for d in deltas:
        out.append(poly(d, ACCENT, 2.8))
    out += [text(20, 30, 'Delta wave', ACCENT),
            text(20, 178, 'Short PR, no isoelectric segment'),
            '</svg>']
    return ''.join(out)


def inferior_stemi():
    """ST elevation in II, III and aVF with reciprocal depression in aVL.

    Which leads move, and in which direction, IS the finding -- a single rhythm strip
    cannot carry it, which is why this one is four lanes. III is drawn with more
    elevation than II because that is the right-coronary pattern the vignette implies
    (bradycardic and hypotensive). No Q waves: at 40-45 minutes they have usually not
    formed, and drawing them would age the infarct past the stem.
    """
    lanes = [('II', 9, 5), ('III', 13, 6), ('aVF', 11, 5), ('aVL', -7, -5)]
    pitch, top, h = 96, 62, 420
    out = card(h)
    rr = 96                                      # unhurried, as the bradycardia implies
    starts = [20 + i * rr for i in range(5) if 20 + i * rr < W - rr + 40]
    for n, (name, st, t) in enumerate(lanes):
        base = top + n * pitch
        trace = []
        for x in starts:
            trace += place(infarct_beat(rr, st, t), x, base)
        out.append(poly(trace))
        for x in starts:
            out.append(poly(st_span(x, base, st, t), ACCENT, 2.4))
        out.append(text(14, base - 34, name))
    out += [text(300, top - 34, 'ST elevation', ACCENT),
            text(232, top + 3 * pitch + 52, 'Reciprocal ST depression', ACCENT),
            '</svg>']
    return ''.join(out)


# id -> (builder, one-line comment for the JS pack)
BUILDERS = {
    's2ck-0009': (atrial_fibrillation,
                  'Atrial fibrillation: no organised P waves, fibrillatory baseline, '
                  'irregularly irregular R-R, narrow QRS.'),
    's1-0012':   (torsades,
                  'Sotalol torsades: markedly prolonged QT, then R-on-T initiating '
                  'polymorphic VT whose axis twists about the baseline.'),
    's1-0136':   (wpw,
                  'Pre-excitation: short PR running straight into a slurred delta '
                  'upstroke, wide QRS, discordant T.'),
    's1-0061':   (inferior_stemi,
                  'Inferior STEMI: ST elevation II/III/aVF with III > II, reciprocal '
                  'ST depression in aVL.'),
    's2ck-0001': (inferior_stemi,
                  'Inferior STEMI - the same tracing as s1-0061; both items ask for '
                  'an inferior infarct and RC_ILLUS is keyed by question id.'),
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--check', action='store_true')
    a = ap.parse_args()

    import xml.etree.ElementTree as ET
    built, problems = {}, []
    for qid, (fn, _) in BUILDERS.items():
        svg = fn()
        built[qid] = svg
        # Parse it, rather than checking that it starts with "<svg". An unclosed tag
        # or a stray quote gets past a prefix check and then fails silently in the
        # app, where the illustration simply does not appear.
        try:
            ET.fromstring(svg)
        except ET.ParseError as e:
            problems.append(f'{qid}: not well-formed XML -- {e}')
        if "'" in svg:
            problems.append(f'{qid}: contains an apostrophe, which breaks the JS '
                            f"single-quoted string it is emitted into")
        if ACCENT not in svg:
            problems.append(f'{qid}: nothing marked in the accent colour')

    # The five must not already be registered -- a duplicate key in a later-loading
    # pack silently wins, which is exactly the kind of thing nobody notices.
    import glob, re
    for f in glob.glob(os.path.join(ROOT, 'applive', 'usmle', 'illus-p[A-L].js')):
        s = open(f, encoding='utf-8').read()
        for qid in BUILDERS:
            if re.search(r'["\']%s["\']\s*:' % re.escape(qid), s):
                problems.append(f'{qid}: already registered in {os.path.basename(f)}')

    for p in problems:
        print('FAIL  ' + p)
    if problems:
        return 1

    print(f'{len(built)} ids, {len(set(built.values()))} distinct tracings')
    for qid, svg in built.items():
        print(f'  {qid:<11} {len(svg):>6} chars')
    if a.check:
        return 0

    body = ''.join(
        f'\n  // {qid} {BUILDERS[qid][1]}\n  "{qid}": {chr(39)}{svg}{chr(39)},\n'
        for qid, svg in built.items())
    with open(OUT_JS, 'w', encoding='utf-8') as f:
        f.write('/*\n * Rounds Codex - USMLE Mode illustration library (pack M): ECG tracings.\n'
                ' * The five ECG items that had no illustration. Generated by\n'
                ' * scripts/build_ecg_schematics.py -- edit there and re-run, never here.\n'
                ' * EDUCATIONAL SCHEMATICS. The grid is decoration, not paper scale; see the\n'
                ' * script docstring. Labels name the finding, never the diagnosis.\n */\n'
                'Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {\n'
                + body + '\n});\n')
    os.makedirs(PREVIEW, exist_ok=True)
    for qid, svg in built.items():
        open(os.path.join(PREVIEW, qid + '.svg'), 'w', encoding='utf-8').write(svg)
    print(f'\nwrote {os.path.relpath(OUT_JS, ROOT)}'
          f'\n      {os.path.relpath(PREVIEW, ROOT)}/*.svg')
    return 0


if __name__ == '__main__':
    sys.exit(main())
