#!/usr/bin/env python3
"""Check that every character the app can render is covered by a shipped font subset.

This exists because the failure is silent. A character outside every declared unicode-range
does not error -- it renders in a system font, mid-sentence, and looks like nothing more than
a slightly wrong letter. When the fonts were first built, the rightwards arrow was outside
every subset and appeared 585 times in the content; nobody noticed for months.

Run it after any content change, and after rebuilding the fonts.

  python3 scripts/audit_font_coverage.py <site-root>

Exit code 1 if a non-emoji character is uncovered. Emoji are expected to be uncovered: the
system emoji font is the right renderer for them, and bundling colour emoji is not sensible.
"""
import glob
import os
import re
import sys
import unicodedata
from collections import Counter

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."


def parse_range(css_range):
    out = set()
    for part in css_range.split(","):
        part = part.strip()
        if not part.startswith("U+"):
            continue
        part = part[2:]
        if "-" in part:
            a, b = part.split("-")
            out.update(range(int(a, 16), int(b, 16) + 1))
        else:
            out.add(int(part, 16))
    return out


# Characters Inter itself does not contain, so no rebuild can cover them. Accepted rather
# than fixed: both are correct clinical notation in Dr. Kreithen's prose, they occur once
# each, and one character in a system font is invisible. Listed here so the audit stays a
# real gate -- an audit that always fails is an audit nobody reads.
ACCEPTED = {
    0x221D: "resistance ∝ 1/r⁴ (Poiseuille, in Croup)",
    0x226B: "BKA rehab ≫ AKA (in the vascular resident set)",
}


def is_emoji(cp):
    """Pictographs and their modifiers -- deliberately left to the system font."""
    return (0x1F000 <= cp <= 0x1FAFF or 0x2600 <= cp <= 0x27BF
            or cp in (0xFE0F, 0xFE0E, 0x20E3) or 0x1F1E6 <= cp <= 0x1F1FF
            or 0x2B00 <= cp <= 0x2BFF or 0x23E9 <= cp <= 0x23FA or cp == 0x23F1)


def main():
    # Read the @font-face block out of index.html, not out of fonts/fonts.css. fonts.css is a
    # build intermediate; what actually ships is the inline <style id="rc-fonts">, and auditing
    # the intermediate would miss any hand edit or a stale copy.
    index = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    m = re.search(r'<style id="rc-fonts">(.*?)</style>', index, re.S)
    if not m:
        sys.exit(f"no <style id=\"rc-fonts\"> in {ROOT}/index.html -- "
                 f"run scripts/build_fonts.py then scripts/self_host_fonts.js")
    css = m.group(1)

    for f in re.findall(r"url\(([^)]+)\)", css):
        if not os.path.exists(os.path.join(ROOT, f)):
            sys.exit(f"FAIL: index.html references {f}, which is not in {ROOT}/")
    print(f"{len(re.findall(r'url', css))} font files referenced, all present")

    # family -> covered codepoints, so a title-only family can be checked separately
    covered = {}
    for face in re.findall(r"@font-face\{(.*?)\}", css, re.S):
        fam = re.search(r"font-family:'([^']+)'", face).group(1)
        rng = re.search(r"unicode-range:([^;}]+)", face)
        if rng:
            covered.setdefault(fam, set()).update(parse_range(rng.group(1)))
    print("shipped subsets: " + ", ".join(f"{k} ({len(v):,} codepoints)"
                                          for k, v in sorted(covered.items())))

    # everything the app can put on screen
    text = index
    for path in sorted(glob.glob(os.path.join(ROOT, "content", "*.json"))):
        text += open(path, encoding="utf-8").read()

    inter = covered.get("Inter", set())
    counts = Counter(ch for ch in text if ord(ch) > 0xFF)
    missing, emoji, accepted = [], [], []
    for ch, n in counts.items():
        cp = ord(ch)
        if cp in inter:
            continue
        bucket = emoji if is_emoji(cp) else (accepted if cp in ACCEPTED else missing)
        bucket.append((ch, cp, n))

    print(f"\n{len(counts)} distinct characters above U+00FF, {sum(counts.values()):,} occurrences")
    print(f"  covered by Inter: {len(counts) - len(missing) - len(emoji) - len(accepted)}")
    print(f"  emoji, left to the system font (expected): {len(emoji)}")
    if accepted:
        print(f"  absent from Inter, accepted ({len(accepted)}):")
        for ch, cp, n in sorted(accepted):
            print(f"      U+{cp:04X}  {ch}  x{n}  {ACCEPTED[cp]}")

    if missing:
        print(f"\nUNCOVERED -- these render in a system font mid-sentence:")
        for ch, cp, n in sorted(missing, key=lambda x: -x[2]):
            try:
                name = unicodedata.name(ch)
            except ValueError:
                name = "?"
            print(f"  U+{cp:04X}  {ch}  x{n:<6} {name}")
        print("\nEither add them to SYMBOLS in scripts/build_fonts.py and rebuild, or -- if")
        print("Inter has no such glyph -- replace them in the content.")
        return 1

    print("\nno uncovered characters beyond the accepted ones.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
