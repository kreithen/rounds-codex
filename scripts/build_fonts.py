#!/usr/bin/env python3
"""Build the inlined @font-face block that ships inside the live index.html.

Why inline instead of <link href="fonts.googleapis.com/...">:
  * the app has to render correctly with no network at all (offline on the wards, and the
    future native build where the whole bundle is local)
  * it removes two extra hosts and up to eleven requests from every page load
  * it adds no files for the user to upload -- publishing is a browser drag of index.html

The woff2 files are Google's own binaries, fetched from the same URLs the stylesheet would
have used, so the typography is unchanged. Only Latin-Ext is touched: the full subset is
85 kB for Inter and we need a handful of accented eponyms, so it is subset down to Latin
Extended-A (U+0100-017F, ~14 kB).

Output: fonts/inline-fonts.css -- paste-ready <style id="rc-fonts"> block, dropped into
<head> in place of the two Google Fonts <link> tags. Applied by scripts/clean_patch.py.

Re-run when new content introduces glyphs outside Latin / Latin-Ext-A / Greek. To find out,
scan the built index.html for characters above U+00FF and check them against the ranges in
WANT below.

Requires: fonttools, brotli  (pip install fonttools brotli)
Usage:    python3 scripts/build_fonts.py [outdir]     # default outdir: ./fonts
"""
import base64
import os
import re
import subprocess
import sys
import urllib.request

# Variable-axis request: one file per subset instead of one per weight.
CSS_URL = ("https://fonts.googleapis.com/css2"
           "?family=Inter:wght@400..900&family=Oswald:wght@500..700&display=swap")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

# (family, subset) -> keep as Google ships it, or subset to this unicode range.
# Greek is needed for real clinical text: Delta, micrograms, beta-blocker, alpha-1.
WANT = {
    ("Inter", "latin"): None,
    ("Inter", "latin-ext"): "U+0100-017F",
    ("Inter", "greek"): None,
    ("Oswald", "latin"): None,
    ("Oswald", "latin-ext"): "U+0100-017F",
}
ORDER = [("Inter", "latin"), ("Inter", "latin-ext"), ("Inter", "greek"),
         ("Oswald", "latin"), ("Oswald", "latin-ext")]


def fetch(url, dest=None):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    data = urllib.request.urlopen(req, timeout=60).read()
    if dest:
        open(dest, "wb").write(data)
    return data


def main(outdir="fonts"):
    os.makedirs(outdir, exist_ok=True)
    css = fetch(CSS_URL).decode("utf-8")

    faces = {}
    for subset, block in re.findall(r"/\* (.*?) \*/\s*(@font-face \{.*?\})", css, re.S):
        fam = re.search(r"font-family: '([^']+)'", block).group(1)
        if (fam, subset) not in WANT:
            continue
        faces[(fam, subset)] = {
            "weight": re.search(r"font-weight: ([^;]+);", block).group(1).strip(),
            "range": re.search(r"unicode-range: ([^;]+);", block).group(1).strip(),
            "url": re.search(r"url\((\S+)\)", block).group(1),
        }

    missing = [k for k in ORDER if k not in faces]
    if missing:
        sys.exit("Google Fonts no longer serves these subsets: %s" % (missing,))

    out = ["""<style id="rc-fonts">
/* Self-hosted, inlined variable fonts (Inter 400-900, Oswald 500-700).
   Deliberately NOT loaded from fonts.googleapis.com: the app has to render correctly
   with no network at all (offline use on the wards, and the future native build where
   the whole bundle is local). Latin-Ext is subset to Latin Extended-A (U+0100-017F) --
   full Latin-Ext is 85 kB for the few accented eponyms we actually use.
   Rebuild: scripts/build_fonts.py */"""]
    total = 0
    for key in ORDER:
        fam, subset = key
        face = faces[key]
        raw_path = os.path.join(outdir, "%s-%s.woff2" % (fam.lower(), subset))
        fetch(face["url"], raw_path)

        limit = WANT[key]
        if limit:
            small = os.path.join(outdir, "%s-%s-subset.woff2" % (fam.lower(), subset))
            subprocess.run(["pyftsubset", raw_path, "--output-file=" + small,
                            "--flavor=woff2", "--unicodes=" + limit,
                            "--layout-features=*", "--no-hinting"], check=True)
            use, rng = small, limit
        else:
            use, rng = raw_path, face["range"]

        blob = open(use, "rb").read()
        total += len(blob)
        out.append("@font-face{font-family:'%s';font-style:normal;font-weight:%s;"
                   "font-display:swap;src:url(data:font/woff2;base64,%s) format('woff2');"
                   "unicode-range:%s}"
                   % (fam, face["weight"], base64.b64encode(blob).decode(), rng))
        print("  %-8s %-10s %7d B%s" % (fam, subset, len(blob),
                                        "  (subset %s)" % limit if limit else ""))

    out.append("</style>")
    block = "\n".join(out)
    dest = os.path.join(outdir, "inline-fonts.css")
    open(dest, "w", encoding="utf-8").write(block)
    print("\n%d faces, %d B of font data -> %s (%d B inlined)"
          % (len(ORDER), total, dest, len(block)))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "fonts")
