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

WEBP_DIRS = ("assets", "gthumbs", "usmle/img")   # everything image-heavy
DROP = ("robots.txt",)                            # meaningless in a package
PDF_SUFFIX = "-gallery.pdf"


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

    for root, dirs, files in os.walk(site):
        dirs[:] = [d for d in dirs if d not in (".git", "node_modules")]
        rel = os.path.relpath(root, site)
        rel = "" if rel == "." else rel
        os.makedirs(os.path.join(out, rel), exist_ok=True)
        in_webp_dir = any(rel == d or rel.startswith(d + os.sep) for d in WEBP_DIRS)
        for f in files:
            s = os.path.join(root, f)
            before_total += os.path.getsize(s)
            if rel == "" and f in DROP:
                dropped_other += 1; continue
            if f.endswith(PDF_SUFFIX) and not a.keep_pdfs:
                dropped_pdf += 1; continue
            if in_webp_dir and f.lower().endswith((".jpg", ".jpeg", ".png")):
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
    print(f"  other files dropped: {dropped_other} ({', '.join(DROP)})")
    print(f"  {time.time()-t0:.0f}s")
    return 0


if __name__ == "__main__":
    sys.exit(main())
