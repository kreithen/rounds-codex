#!/usr/bin/env python3
"""Build the self-hosted font set that ships with the live app.

WHY NOT fonts.googleapis.com (which is what index.html used until now):

  * It was the app's ONLY cross-origin request, and sw.js deliberately skips cross-origin
    fetches -- so the one thing the service worker could not cache was typography. Offline,
    the fonts came from the browser's own HTTP cache or not at all.
  * First paint waited on DNS + TLS to two extra hosts.
  * Every cold load sent the reader's IP to Google, which is an awkward footnote beside an
    App Store privacy label of "Data Not Collected".
  * The native build has no network guarantee at all.

WHY FILES AND NOT BASE64 (this script used to inline):

  Inlining put ~160 kB of incompressible base64 inside index.html. index.html changes on
  every code deploy and the fonts change essentially never, so inlining re-ships the fonts
  every time a button moves. As separate files they are fetched once, revalidate as 304, and
  -- the actual point -- can go in the service worker's CORE list and be genuinely offline.

SUBSETS

  Inter carries body text, Oswald carries condition titles.

    Inter   latin        as Google ships it
            latin-ext    subset to Latin Extended-A (U+0100-017F); the full subset is 85 kB
                         and we need a handful of accented eponyms
            greek        as Google ships it -- real clinical text needs beta-blocker, Delta,
                         micrograms, alpha-1
            symbols      NEW. Google's latin subset does NOT contain the arrows, comparison
                         operators, or sub/superscripts this app leans on. The rightwards
                         arrow alone appears 585 times in the content and was silently
                         rendering in a system font mid-sentence. Built with the Google Fonts
                         &text= API and given a unicode-range derived from the file's real
                         cmap, so the browser never selects this face for a glyph it lacks.

    Oswald  latin, latin-ext-A only. Condition names contain nothing above U+00FF -- checked,
            and scripts/audit_font_coverage.py re-checks it -- so Oswald needs no Greek and
            no symbols.

  A few characters the app uses are absent from Inter itself and will keep falling back
  whatever we do here (U+2261, U+226A, U+226B, U+221D, U+223C). The audit script reports
  them; today only three occur, once each.

Output: <outdir>/*.woff2 plus <outdir>/fonts.css, which references them relatively so the
<base> tag resolves them correctly on the site, from a /c/<id> link, and in a native bundle.

Requires: fontTools, brotli   (pip install fonttools brotli)
Usage:    python3 scripts/build_fonts.py <outdir>
"""
import os
import re
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

FAMILIES = {
    "Inter":  {"axis": "wght@400..900", "weight": "400 900",
               "subsets": ["latin", "latin-ext", "greek"]},
    "Oswald": {"axis": "wght@500..700", "weight": "500 700",
               "subsets": ["latin", "latin-ext"]},
}
LATIN_EXT_A = "U+0100-017F"

# Requested for the symbols face. Deliberately wider than what the content uses today, so a
# new "K+ -> up" in a vignette does not silently lose its typography. Whatever Inter does not
# have is dropped, and the declared unicode-range is built from what actually survives.
SYMBOLS = ("→←↑↓↔"                    # arrows
           "≤≥≠≈≡"                    # comparison
           "≪≫∝∼℞"                    # much less/greater, prop, ~, Rx
           "₀₁₂₃₄₅₆₇₈₉₊₋"
           "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻"
           "⅓⅔⅙⅛′″"              # fractions, prime
           "✓✗☆★")                         # check, ballot X, star

# Emoji are intentionally NOT included: the system emoji font is the right renderer for them.


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=90).read()


def google_css(family, axis, text=None):
    url = f"https://fonts.googleapis.com/css2?family={family}:{axis}&display=swap"
    if text:
        url += "&text=" + urllib.parse.quote(text)
    return fetch(url).decode("utf-8")


def parse_faces(css):
    """Google returns one @font-face per subset, each preceded by a /* subset */ comment."""
    out = []
    for name, face in re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S):
        url = re.search(r"url\((https://[^)]+)\)", face).group(1)
        rng = re.search(r"unicode-range:\s*([^;}]+)", face)
        out.append({"subset": name, "url": url, "range": rng.group(1).strip() if rng else None})
    return out


def subset_to(src, dest, unicodes):
    subprocess.run([sys.executable, "-m", "fontTools.subset", src,
                    f"--unicodes={unicodes}", "--flavor=woff2",
                    "--layout-features=*", f"--output-file={dest}"],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def parse_range(css_range):
    """'U+0000-00FF, U+0131' -> {0..255, 0x131}"""
    out = set()
    for part in css_range.split(","):
        part = part.strip().removeprefix("U+")
        if "-" in part:
            a, b = part.split("-")
            out.update(range(int(a, 16), int(b, 16) + 1))
        else:
            out.add(int(part, 16))
    return out


def ranges_from_cmap(path, exclude=frozenset()):
    """Collapse a font's real cmap into a compact CSS unicode-range list.

    Two things this has to get right:

      * Declare only what the file CONTAINS. A face selected for a codepoint it lacks renders
        a missing glyph; it does not fall through to the next font.
      * Declare only what no EARLIER face of the same family already claims. Overlapping
        ranges resolve last-wins, and Google's &text= subsetter always throws in U+0020 and
        U+003D -- so without this the symbols face would own the space character, and every
        space in the app would block on a 9 kB download that was meant to be incidental.
    """
    from fontTools.ttLib import TTFont
    cps = sorted(cp for cp in TTFont(path).getBestCmap() if cp not in exclude)
    parts, start, prev = [], None, None
    for cp in cps:
        if start is None:
            start = prev = cp
        elif cp == prev + 1:
            prev = cp
        else:
            parts.append((start, prev))
            start = prev = cp
    if start is not None:
        parts.append((start, prev))
    return ", ".join(f"U+{a:04X}" if a == b else f"U+{a:04X}-{b:04X}" for a, b in parts)


def main(outdir):
    os.makedirs(outdir, exist_ok=True)
    tmp = tempfile.mkdtemp()
    faces, total = [], 0

    for family, cfg in FAMILIES.items():
        avail = {f["subset"]: f for f in parse_faces(google_css(family, cfg["axis"]))}
        for want in cfg["subsets"]:
            if want not in avail:
                sys.exit(f"FAIL: Google did not return a '{want}' subset for {family}")
            f = avail[want]
            raw = fetch(f["url"])
            if want == "latin-ext":
                src = os.path.join(tmp, f"{family}-{want}.woff2")
                open(src, "wb").write(raw)
                name = f"{family.lower()}-latin-ext-a.woff2"
                subset_to(src, os.path.join(outdir, name), LATIN_EXT_A)
                rng = LATIN_EXT_A
            else:
                name = f"{family.lower()}-{want}.woff2"
                open(os.path.join(outdir, name), "wb").write(raw)
                rng = f["range"]
            size = os.path.getsize(os.path.join(outdir, name))
            total += size
            faces.append({"family": family, "weight": cfg["weight"], "file": name,
                          "range": rng, "size": size})
            print(f"  {family:<7} {want:<11} {name:<28} {size:>7,} B")

    # Inter only: the symbols Google's latin subset leaves out.
    css = google_css("Inter", FAMILIES["Inter"]["axis"], text=SYMBOLS)
    parsed = parse_faces(css)
    url = parsed[0]["url"] if parsed else re.search(r"url\((https://[^)]+)\)", css).group(1)
    name = "inter-symbols.woff2"
    dest = os.path.join(outdir, name)
    open(dest, "wb").write(fetch(url))
    claimed = set()
    for f in faces:
        if f["family"] == "Inter":
            claimed |= parse_range(f["range"])
    rng = ranges_from_cmap(dest, exclude=claimed)

    from fontTools.ttLib import TTFont
    got = set(TTFont(dest).getBestCmap())
    absent = [c for c in SYMBOLS if ord(c) not in got]
    overlap = sorted(cp for cp in got if cp in claimed)
    if overlap:
        print("           dropped from its range (already covered by another Inter face): "
              + " ".join(f"U+{cp:04X}" for cp in overlap))
    size = os.path.getsize(dest)
    total += size
    faces.append({"family": "Inter", "weight": FAMILIES["Inter"]["weight"], "file": name,
                  "range": rng, "size": size})
    print(f"  {'Inter':<7} {'symbols':<11} {name:<28} {size:>7,} B"
          f"   ({len(SYMBOLS) - len(absent)}/{len(SYMBOLS)} glyphs)")
    if absent:
        print("           not in Inter, will fall back: "
              + " ".join(f"U+{ord(c):04X}" for c in absent))

    out = [
        "/* Self-hosted variable fonts -- Inter 400-900 (body), Oswald 500-700 (titles).",
        " * Was fonts.googleapis.com, which was this app's only cross-origin request and the",
        " * one thing sw.js could not cache, because it skips cross-origin. These are",
        " * same-origin, precached in CORE, and therefore actually offline.",
        " * Paths are relative so <base> resolves them on the site, from /c/<id>, and in a",
        " * native bundle alike. Rebuild with scripts/build_fonts.py; re-check coverage with",
        " * scripts/audit_font_coverage.py after any content change.",
        " */",
    ]
    for f in faces:
        out.append(f"@font-face{{font-family:'{f['family']}';font-style:normal;"
                   f"font-weight:{f['weight']};font-display:swap;"
                   f"src:url(fonts/{f['file']}) format('woff2');unicode-range:{f['range']}}}")
    open(os.path.join(outdir, "fonts.css"), "w").write("\n".join(out) + "\n")

    first = sum(f["size"] for f in faces if f["file"].endswith("-latin.woff2"))
    print(f"\n  {len(faces)} faces, {total:,} bytes total -> {outdir}/")
    print(f"  first paint needs inter-latin + oswald-latin only ({first:,} B)")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "fonts")
