#!/usr/bin/env python3
"""
Build the native app bundle from the live site tree.

The website and the app want different things from the same content. The site is JPEG,
serves gallery PDFs over HTTP, and is deliberately hidden from search engines while it is
pre-launch. The bundle has to be small, because every megabyte is a megabyte of App Store
download, and self-contained, because Guideline 2.5.2 says the binary must not fetch
executable code at runtime.

So this is a BUILD, not an edit. Nothing here modifies the site; it reads the deployed tree
and writes a separate bundle directory.

WHAT IT DOES AND WHY

  * Gallery pages and USMLE illustrations to WebP q82. Measured on a stratified sample of the
    real set: 52% of JPEG size, and at 3x magnification the smallest type on a gallery page
    - the CLINICAL SOURCE citation line - is indistinguishable from the shipping JPEG. q75
    reaches 42% but softens the thinnest strokes, which is not a trade worth making on a
    citation. WebP is supported in WKWebView from iOS 14.
  * Gallery download PDFs are EXCLUDED. 90 of them is 145 MB - a fifth of the whole download -
    for a button most users never press. The app shell resolves `pdf` against the public
    origin instead, the same way RC_SHARE_ORIGIN already works for share links.
  * robots.txt and the noindex header are dropped. They exist to keep the pre-launch website
    out of search results and mean nothing inside an app package.
  * content/galleries.json is rewritten so `file` and `thumb` point at .webp. The site's copy
    is untouched.

WHAT IT DELIBERATELY DOES NOT DO

  * It does not shrink page dimensions. 1024x1536 is the standard and the viewer zooms to 4x;
    dropping resolution would be visible where re-encoding is not.
  * It does not touch index.html or any JS. Same bytes as the web app, which is what keeps
    "the shipped code is the tested code" true.

Usage:
  python3 scripts/build_app_bundle.py [--site /workspace/rounds-codex-app] [--out ./app-bundle]
                                      [--quality 82] [--keep-pdfs] [--jobs N]
"""
import argparse, json, os, shutil, sys, time
from concurrent.futures import ProcessPoolExecutor

# WHICH images to convert is driven by the MANIFESTS, not by a directory list. A directory list
# missed 87 MB: 21 of the galleries predate the assets/<id>/ convention and their pages sit at the
# SITE ROOT, with five more under <id>-upload/ folders, because early GitHub web-uploads nested
# wrong and index.html was pointed at reality rather than moving 270 files. Anything referenced
# from content/galleries.json gets converted wherever it lives.
USMLE_IMG_DIR = "usmle/img"
PDF_SUFFIX = "-gallery.pdf"

# Root-level things that should never reach a package. The site accumulated build artifacts from
# the months of GitHub web-uploads - a 26 MB gallery zip, deploy zips, staging folders - all of
# which are currently served publicly and would otherwise be shipped inside the app.
DROP_FILES = ("robots.txt",)                     # exists only to hide the pre-launch website
DROP_ROOT_SUFFIX = (".zip", ".sh", ".md")        # archives, setup scripts, notes
DROP_ROOT_DIRS = ("usmle-app-part1", "usmle-data-part2", "usmle-data-part3")

# Loaded by convention rather than by reference, so a grep for their names finds nothing.
# Listing them here is a reminder never to add them to the DROP rules above.
KEEP_ALWAYS = ("_redirects", "_headers", "netlify.toml", "package.json", "version.txt",
               "manifest.webmanifest", "sw.js", "index.html")


def convert(job):
    src, dst, quality = job
    from PIL import Image
    with Image.open(src) as im:
        im.convert("RGB").save(dst, "WEBP", quality=quality, method=6)
    return os.path.getsize(src), os.path.getsize(dst)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--site", default="/workspace/rounds-codex-app")
    ap.add_argument("--out", default="app-bundle")
    ap.add_argument("--quality", type=int, default=82)
    ap.add_argument("--keep-pdfs", action="store_true")
    ap.add_argument("--jobs", type=int, default=max(1, (os.cpu_count() or 2) - 1))
    a = ap.parse_args()

    site, out = os.path.abspath(a.site), os.path.abspath(a.out)
    assert os.path.exists(os.path.join(site, "index.html")), f"no index.html under {site}"
    if os.path.exists(out):
        shutil.rmtree(out)

    t0 = time.time()
    copied = converted = dropped_pdf = dropped_other = 0
    jobs = []
    before_total = 0

    # every path galleries.json points at, relative to the site root
    G0 = json.load(open(os.path.join(site, "content", "galleries.json")))
    gallery_paths = set()
    for g in G0["galleries"].values():
        b = g.get("base", "")
        for im in g["images"]:
            gallery_paths.add(os.path.normpath(b + im["file"]))
            gallery_paths.add(os.path.normpath(im["thumb"]))
    print(f"galleries.json references {len(gallery_paths)} image paths")

    for root, dirs, files in os.walk(site):
        dirs[:] = [d for d in dirs if d not in (".git", "node_modules")]
        rel = os.path.relpath(root, site)
        rel = "" if rel == "." else rel
        if rel == "":
            dirs[:] = [d for d in dirs if d not in DROP_ROOT_DIRS]
        os.makedirs(os.path.join(out, rel), exist_ok=True)
        in_usmle_img = rel == USMLE_IMG_DIR or rel.startswith(USMLE_IMG_DIR + os.sep)
        for f in files:
            s = os.path.join(root, f)
            before_total += os.path.getsize(s)
            if rel == "" and f not in KEEP_ALWAYS and (
                    f in DROP_FILES or f.endswith(DROP_ROOT_SUFFIX)):
                dropped_other += 1; continue
            if f.endswith(PDF_SUFFIX) and not a.keep_pdfs:
                dropped_pdf += 1; continue
            relpath = os.path.normpath(os.path.join(rel, f)) if rel else f
            if (in_usmle_img or relpath in gallery_paths) and \
                    f.lower().endswith((".jpg", ".jpeg", ".png")):
                jobs.append((s, os.path.join(out, rel, os.path.splitext(f)[0] + ".webp"), a.quality))
                continue
            shutil.copy2(s, os.path.join(out, rel, f)); copied += 1

    print(f"copying {copied} files, converting {len(jobs)} images at WebP q{a.quality} "
          f"on {a.jobs} workers...")
    src_bytes = dst_bytes = 0
    with ProcessPoolExecutor(max_workers=a.jobs) as ex:
        for n, (sb, db) in enumerate(ex.map(convert, jobs, chunksize=8), 1):
            src_bytes += sb; dst_bytes += db; converted += 1
            if n % 200 == 0:
                print(f"  {n}/{len(jobs)}  {src_bytes/1e6:.0f} -> {dst_bytes/1e6:.0f} MB")

    # --- rewrite the gallery manifest to point at the converted files -----------------
    gp = os.path.join(out, "content", "galleries.json")
    G = json.load(open(gp))
    for gid, g in G["galleries"].items():
        for im in g["images"]:
            for k in ("file", "thumb"):
                im[k] = os.path.splitext(im[k])[0] + ".webp"
    json.dump(G, open(gp, "w"), separators=(",", ":"))
    print(f"\nrewrote {gp} -> .webp paths for "
          f"{sum(len(g['images']) for g in G['galleries'].values())} images")

    # illus-real.js names every USMLE illustration by .jpg. Converting the files without
    # rewriting this leaves 197 broken images - the manifest and the bytes have to move together.
    ip = os.path.join(out, "usmle", "illus-real.js")
    if os.path.exists(ip):
        js = open(ip, encoding="utf-8").read()
        import re as _re
        js2, n = _re.subn(r'(src="img/[^"]+)\.(?:jpg|jpeg|png)"', r'\1.webp"', js)
        open(ip, "w", encoding="utf-8").write(js2)
        print(f"rewrote {ip} -> .webp for {n} illustrations")

    after_total = sum(os.path.getsize(os.path.join(r, f))
                      for r, _, fs in os.walk(out) for f in fs)
    print(f"\n=== bundle: {out} ===")
    print(f"  site   {before_total/1e6:8.0f} MB")
    print(f"  bundle {after_total/1e6:8.0f} MB   ({after_total/before_total*100:.0f}% of site, "
          f"saved {(before_total-after_total)/1e6:.0f} MB)")
    print(f"  images converted {converted}: {src_bytes/1e6:.0f} -> {dst_bytes/1e6:.0f} MB "
          f"({dst_bytes/src_bytes*100:.0f}%)")
    if dropped_pdf:
        print(f"  gallery PDFs excluded: {dropped_pdf}  <- app must resolve `pdf` against the "
              f"public origin")
    print(f"  root artifacts dropped: {dropped_other} "
          f"(robots.txt, *.zip, *.sh, *.md, usmle-*-part*)")
    print(f"  {time.time()-t0:.0f}s")
    return 0


if __name__ == "__main__":
    sys.exit(main())
