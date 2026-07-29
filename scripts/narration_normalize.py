#!/usr/bin/env python3
"""
Turn module text into text a text-to-speech engine will read correctly.

Screen prose and spoken prose are not the same thing, and the gap is where a cloned voice fails
audibly. Three classes of problem, all mechanical:

 1. MARKUP. `<b>` tags are authoring markup. Left in, some engines read them aloud.

 2. SYMBOLS. An arrow is the worst offender -- it appears 585 times across this content and is
    either skipped or read as "arrow". Same for the sub/superscripts, comparators and units:
    "EF <=40%" must become "an ejection fraction of 40 percent or less", and "K+" must become
    "potassium", not "K plus".

 3. ABBREVIATIONS. These split three ways and the distinction matters:
      * SPELL OUT as letters -- BNP, JVD, ECG. A listener knows these as letters.
      * EXPAND on first use, then abbreviate -- HFrEF, ARNI, GDMT. Unfamiliar acronyms are
        unintelligible spoken cold.
      * NEVER as letters -- PND, MRA, S3. "P-N-D" means nothing; "paroxysmal nocturnal dyspnea"
        does. S3 must be "a third heart sound", not "S three".

What this does NOT do is rewrite sentence structure. Turning a dense clinical bullet into something
speakable is an authoring judgement, so the tool reports every line that is still too long or still
holds an unexpanded token, and a human closes those. It is a normaliser, not a writer.

Usage:
  python3 scripts/narration_normalize.py --text "..."          # normalise one string
  python3 scripts/narration_normalize.py --check <script.txt>  # audit a drafted script
"""
import argparse, re, sys

# Read as letters. A listener parses these fine.
SPELL = {
    'BNP', 'NT-proBNP', 'ECG', 'EKG', 'JVD', 'JVP', 'CXR', 'CBC', 'TSH', 'EF', 'ACS', 'PE',
    'IV', 'PO', 'ICU', 'COPD', 'CKD', 'AKI', 'DKA', 'HIV', 'CT', 'MRI', 'CPR', 'ROSC',
}

# Expand on FIRST use, then the abbreviation is fine.
EXPAND_FIRST = {
    'HFrEF': 'heart failure with reduced ejection fraction',
    'HFpEF': 'heart failure with preserved ejection fraction',
    'ARNI': 'angiotensin receptor-neprilysin inhibitor',
    'GDMT': 'guideline-directed medical therapy',
    'ACEi': 'ACE inhibitor',
    'ARB': 'angiotensin receptor blocker',
    'SGLT2': 'sodium-glucose cotransporter 2',
    'NYHA': 'New York Heart Association',
}

# Never acceptable as letters -- always the full phrase.
ALWAYS_EXPAND = {
    'PND': 'paroxysmal nocturnal dyspnea',
    'MRA': 'mineralocorticoid receptor antagonist',
    'S1': 'a first heart sound',
    'S2': 'a second heart sound',
    'S3': 'a third heart sound',
    'S4': 'a fourth heart sound',
    'Na': 'sodium',
    'K': 'potassium',
    'Cr': 'creatinine',
    'Mg': 'magnesium',
    'Ca': 'calcium',
}

# Symbols, longest-first so multi-character forms win.
SYMBOLS = [
    ('→', ', leading to '), ('->', ', leading to '),
    ('≥', 'at least '), ('>=', 'at least '),
    ('≤', 'no more than '), ('<=', 'no more than '),
    ('≠', 'not equal to '),
    # The ASCII forms must be listed too, and BEFORE the bare-element expansion below. Otherwise
    # "K+" matches the element rule on the K alone and leaves a stray plus: "potassium+ under 3.3".
    ('K⁺', 'potassium'), ('K+', 'potassium'),
    ('Na⁺', 'sodium'), ('Na+', 'sodium'),
    ('Mg²⁺', 'magnesium'), ('Mg2+', 'magnesium'),
    ('Ca²⁺', 'calcium'), ('Ca2+', 'calcium'),
    ('HCO₃', 'bicarbonate'), ('HCO3', 'bicarbonate'),
    ('SpO₂', 'oxygen saturation'), ('PaO₂', 'arterial oxygen'),
    ('PaCO₂', 'arterial carbon dioxide'), ('CO₂', 'carbon dioxide'), ('O₂', 'oxygen'),
    ('°C', ' degrees Celsius'), ('°F', ' degrees Fahrenheit'),
    ('μ', 'micro'), ('–', ' to '), ('—', ', '),
    ('%', ' percent'), ('&', ' and '),
    ('‘', "'"), ('’', "'"), ('“', ''), ('”', ''),
]

MAX_SPOKEN_CHARS = 220     # beyond this a sentence has no natural place to breathe


def strip_markup(s):
    # Require a tag-like opener. The naive /<[^>]*>/ eats clinical comparators: "K+ <3.3 mEq/L"
    # would lose everything up to the next '>'. That bug already bit the quiz QA script.
    return re.sub(r'</?[a-z][^>]*>', '', s, flags=re.I)


def normalize(s):
    s = strip_markup(s)
    for a, b in SYMBOLS:
        s = s.replace(a, b)
    for abbr, full in ALWAYS_EXPAND.items():
        s = re.sub(r'\b' + re.escape(abbr) + r'\b', full, s)
    # comparators written against a bare number: "<40" -> "under 40"
    s = re.sub(r'<\s*(\d)', r'under \1', s)
    s = re.sub(r'>\s*(\d)', r'over \1', s)
    # An expansion can collide with the article already in the sentence: "an S3" becomes
    # "an a third heart sound". Collapse the duplicate rather than leave it to be read aloud.
    s = re.sub(r'\b(an?)\s+(an?)\s+', r'\2 ', s, flags=re.I)
    s = re.sub(r'\s{2,}', ' ', s)
    s = re.sub(r'\s+([,.;:])', r'\1', s)
    # Stripping a tag or expanding an acronym can leave a sentence starting lowercase, which some
    # engines read with the wrong intonation. Recapitalise after terminal punctuation.
    s = re.sub(r'(^|[.!?]\s+)([a-z])', lambda m: m.group(1) + m.group(2).upper(), s)
    return s.strip()


def recapitalize(s):
    return re.sub(r'(^|[.!?]\s+)([a-z])', lambda m: m.group(1) + m.group(2).upper(), s)


def expand_on_first_use(text):
    """Rewrite the first occurrence of each acronym as 'full phrase, ACRONYM'."""
    for abbr, full in EXPAND_FIRST.items():
        m = re.search(r'\b' + re.escape(abbr) + r'\b', text)
        if m:
            text = text[:m.start()] + f'{full}, {abbr}' + text[m.end():]
    # The inserted phrase is lowercase, so an acronym that opened a sentence leaves it lowercase.
    # Recapitalise again here, after the insertions rather than only before them.
    return recapitalize(text)


def check(text):
    """Report what a human still needs to fix. Returns a list of complaints."""
    out = []
    if re.search(r'</?[a-z][^>]*>', text, flags=re.I):
        out.append('still contains HTML markup')
    for a, _ in SYMBOLS:
        if a in text and a not in ("'",):
            out.append(f'unconverted symbol {a!r}')
    for abbr in ALWAYS_EXPAND:
        if re.search(r'\b' + re.escape(abbr) + r'\b', text):
            out.append(f'{abbr} must never be read as letters')
    for abbr in EXPAND_FIRST:
        hits = list(re.finditer(r'\b' + re.escape(abbr) + r'\b', text))
        if hits:
            before = text[:hits[0].start()]
            if EXPAND_FIRST[abbr].split(',')[0].lower() not in before.lower():
                out.append(f'{abbr} used before being expanded')
    for sent in re.split(r'(?<=[.!?])\s+', text):
        if len(sent) > MAX_SPOKEN_CHARS:
            out.append(f'sentence of {len(sent)} chars needs breaking: "{sent[:60]}..."')
    # a digit run longer than 4 will be read as a number, not a figure
    for m in re.finditer(r'\d{5,}', text):
        out.append(f'long digit run {m.group()!r} — write it as words')
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--text')
    ap.add_argument('--check')
    a = ap.parse_args()

    if a.text:
        print(expand_on_first_use(normalize(a.text)))
        return 0
    if a.check:
        text = open(a.check, encoding='utf-8').read()
        problems = check(text)
        words = len(text.split())
        print(f'{words} words — roughly {words / 150:.1f} min at 150 wpm')
        if not problems:
            print('clean: no markup, no unconverted symbols, no unexpanded acronyms, '
                  'no oversized sentences')
            return 0
        print(f'\n{len(problems)} things to fix:')
        for p in dict.fromkeys(problems):
            print('  ' + p)
        return 1
    ap.print_help()
    return 2


if __name__ == '__main__':
    sys.exit(main())
