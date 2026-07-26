#!/usr/bin/env python3
"""
build_gallery.py — deterministic core of the medcodex-gallery skill.

Given an approved production-package PDF and a target condition id, it:
  1. Renders every PDF page to a high-res JPG (default 180 dpi).
  2. Generates a uniform thumbnail for each page (default 520 px wide).
  3. Copies the ORIGINAL PDF in untouched (for the "View Complete Gallery (PDF)" button).
  4. Inserts/updates one gallery entry: content/galleries.json if the project has
     had its content split out (current shape), else the inline GALLERIES map in
     index.html (pre-split shape).

It never regenerates, crops, or substitutes artwork — pages are rendered 1:1 and
only downscaled (never cropped) for thumbnails.

Rendering uses pypdfium2 (pip) + Pillow so there is NO dependency on poppler/ImageMagick.

Usage:
  python build_gallery.py \
      --project <dir with index.html> \
      --pdf <production_package.pdf> \
      --id <condition_id e.g. acs> \
      --title "<Condition display name>" \
      --titles-file <json array of page titles, in page order> \
      [--dpi 180] [--thumb 520] [--quality 88]

If --titles-file is omitted the script falls back to generic "Page N" titles and
prints a warning — always pass real titles read from each page's footer.
"""
import argparse, json, os, re, shutil, sys


def ensure_deps():
    try:
        import pypdfium2  # noqa
        from PIL import Image  # noqa
        import img2pdf  # noqa
    except Exception:
        os.system(f"{sys.executable} -m pip install --quiet --break-system-packages pypdfium2 Pillow img2pdf")


def build_gallery_pdf(out_dir, cid, images, src_pdf):
    """Rebuild a COMPACT gallery PDF from the rendered page images.

    The approved artwork is unchanged — these are the exact pages rendered above (the
    same images the in-app viewer shows). img2pdf embeds the JPGs losslessly, so the
    download stays high quality (matches the viewer) while dropping the container bloat
    that makes raw production PDFs 20-25 MB. Falls back to copying the original if
    img2pdf is unavailable for any reason.
    """
    dst = os.path.join(out_dir, f"{cid}-gallery.pdf")
    try:
        import img2pdf
        paths = [os.path.join(out_dir, im["file"]) for im in images]
        with open(dst, "wb") as f:
            f.write(img2pdf.convert(paths))
        return "compact (rebuilt from approved rendered pages)"
    except Exception as e:
        import shutil
        shutil.copyfile(src_pdf, dst)
        return f"original copied (img2pdf unavailable: {e})"


def render_assets(pdf_path, out_dir, cid, dpi, thumb_w, quality):
    import pypdfium2 as pdfium
    from PIL import Image
    os.makedirs(out_dir, exist_ok=True)
    pdf = pdfium.PdfDocument(pdf_path)
    n = len(pdf)
    scale = dpi / 72.0
    images = []
    for i in range(n):
        page = pdf[i]
        pil = page.render(scale=scale).to_pil().convert("RGB")
        full_name = f"{cid}-{i+1:02d}.jpg"
        thumb_name = f"thumb-{i+1:02d}.jpg"
        pil.save(os.path.join(out_dir, full_name), "JPEG", quality=quality)
        th = pil.resize((thumb_w, max(1, round(pil.height * thumb_w / pil.width))), Image.LANCZOS)
        th.save(os.path.join(out_dir, thumb_name), "JPEG", quality=82)
        images.append({"file": full_name, "thumb": thumb_name})
    return images


def build_entry(cid, title, page_titles, images, base=None):
    """base is where the app will find the files at RUNTIME, which is not necessarily
    where this script writes them. The live site has ended up with several layouts
    (`assets/<id>/`, `<id>/`, and a flat root) after GitHub web-uploads nested wrong,
    so it is overridable with --base."""
    base = f"assets/{cid}/" if base is None else base
    return {
        "title": title,
        "base": base,
        "pdf": f"{base}{cid}-gallery.pdf",
        "images": [
            {"n": i + 1, "file": im["file"], "thumb": im["thumb"],
             "title": page_titles[i] if i < len(page_titles) else f"Page {i+1}"}
            for i, im in enumerate(images)
        ],
    }


def entry_to_js(cid, entry):
    # JSON is valid JS object-literal syntax; the app reads keys the same either way.
    return json.dumps(cid) + ": " + json.dumps(entry, ensure_ascii=False)


def inject_json(project, cid, entry):
    """Preferred path: the app's content was split out of index.html, so a gallery is a
    change to content/galleries.json -- a small file -- and never touches the code."""
    path = os.path.join(project, "content", "galleries.json")
    doc = json.load(open(path, encoding="utf-8"))
    existed = cid in doc.get("galleries", {})
    doc.setdefault("galleries", {})[cid] = entry
    real = doc.setdefault("real", [])
    realgal_status = "already present"
    if cid not in real:
        real.append(cid)          # gates real artwork; without it the app shows placeholders
        realgal_status = "added"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False)
    return ("updated" if existed else "added"), realgal_status, path


def _match_close(text, open_idx):
    depth = 0
    i = open_idx
    while i < len(text):
        c = text[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("Unbalanced braces")


def remove_existing(body, cid):
    pat = re.compile(r'(?:"%s"|%s)\s*:\s*\{' % (re.escape(cid), re.escape(cid)))
    m = pat.search(body)
    if not m:
        return body
    start = m.start()
    close = _match_close(body, m.end() - 1)
    j = close + 1
    while j < len(body) and body[j] in " \t\r\n":
        j += 1
    if j < len(body) and body[j] == ",":
        j += 1
    return body[:start] + body[j:]


def inject(html, cid, entry_js):
    # Tolerate any spacing/quoting: `const GALLERIES = {`, `const GALLERIES={`, etc.
    m = re.search(r'(?:const|let|var|window\.)\s*GALLERIES\s*=\s*\{', html)
    if not m:
        raise ValueError("Could not find the `GALLERIES = {` declaration in index.html")
    mi = m.start()
    open_i = html.index("{", m.end() - 1)
    close_i = _match_close(html, open_i)
    body = remove_existing(html[open_i + 1:close_i], cid)
    tail = body if body.strip() == "" else "\n" + body.lstrip("\n")
    new_body = "\n  " + entry_js + "," + tail
    return html[:open_i + 1] + new_body + html[close_i:]


def ensure_realgal(html, cid):
    """The app gates real-image rendering behind `const REALGAL=new Set([...])`;
    an id absent from it renders placeholders instead of the approved artwork.
    Make sure this condition is a member."""
    m = re.search(r'REALGAL\s*=\s*new\s+Set\(\s*\[', html)
    if not m:
        return html, "no REALGAL set found (skipped)"
    arr_start = html.index('[', m.end() - 1)
    arr_end = html.index(']', arr_start)
    arr = html[arr_start:arr_end + 1]
    if re.search(r'["\']%s["\']' % re.escape(cid), arr):
        return html, "already present"
    new_html = html[:arr_start + 1] + '"%s",' % cid + html[arr_start + 1:]
    return new_html, "added"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--project", required=True)
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--id", required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--titles-file")
    ap.add_argument("--dpi", type=int, default=180)
    ap.add_argument("--thumb", type=int, default=520)
    ap.add_argument("--quality", type=int, default=88)
    ap.add_argument("--base", help="runtime path prefix the app uses to find the images "
                                   "(default assets/<id>/). Set this to match wherever the "
                                   "files actually land -- the live site is not uniform.")
    a = ap.parse_args()

    index_path = os.path.join(a.project, "index.html")
    content_path = os.path.join(a.project, "content", "galleries.json")
    split_app = os.path.isfile(content_path)
    if not split_app and not os.path.isfile(index_path):
        sys.exit(f"ERROR: no content/galleries.json and no index.html in {a.project}")
    if not os.path.isfile(a.pdf):
        sys.exit(f"ERROR: PDF not found: {a.pdf}")

    page_titles = []
    if a.titles_file and os.path.isfile(a.titles_file):
        page_titles = json.load(open(a.titles_file))
    else:
        print("WARNING: no --titles-file given; using generic 'Page N' titles. "
              "Read each page's Image Title and pass them for a proper gallery.")

    ensure_deps()
    out_dir = os.path.join(a.project, "assets", a.id)
    images = render_assets(a.pdf, out_dir, a.id, a.dpi, a.thumb, a.quality)

    # Build a COMPACT gallery PDF from the rendered pages (same images the viewer shows).
    pdf_mode = build_gallery_pdf(out_dir, a.id, images, a.pdf)

    if page_titles and len(page_titles) != len(images):
        print(f"WARNING: {len(page_titles)} titles for {len(images)} pages — extras ignored / missing filled with 'Page N'.")

    entry = build_entry(a.id, a.title, page_titles, images, a.base)
    if split_app:
        entry_status, realgal_status, wrote = inject_json(a.project, a.id, entry)
    else:
        # pre-split app: the content is still inline in index.html
        html = open(index_path, encoding="utf-8").read()
        html = inject(html, a.id, entry_to_js(a.id, entry))
        html, realgal_status = ensure_realgal(html, a.id)
        open(index_path, "w", encoding="utf-8").write(html)
        entry_status, wrote = "written", index_path
        print("NOTE: this project still has its content inline in index.html. "
              "Post-split projects get content/galleries.json instead.")

    print(json.dumps({
        "condition_id": a.id,
        "wrote": wrote,
        "entry": entry_status,
        "pages": len(images),
        "assets_dir": out_dir,
        "titles_used": page_titles or "generic",
        "gallery_pdf": pdf_mode,
        "realgal": realgal_status,
        "status": f"gallery entry {entry_status} in {os.path.relpath(wrote)}"
    }, indent=2))


if __name__ == "__main__":
    main()
