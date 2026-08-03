#!/bin/bash
# Rounds Codex - prepare the downloaded Higgsfield PNGs for the USMLE module.
#
#   bash prepare-usmle-images.command /path/to/folder/of/pngs
#   (or double-click it in Finder and it uses the folder it lives in)
#
# WHY THIS RUNS ON YOUR MACHINE AND NOT IN A SESSION
#
# The 190 masters are ~6 MB each, about 1.16 GB in total. That is far too much to hand to a
# chat session, and the session container is thrown away anyway. What the app actually needs is
# ~150 kB per image. So the shrinking happens here, next to the files, and only the small set
# travels.
#
# WHAT IT DOES
#
#   1. Checks all 190 expected ids are present and are real PNGs (same test as
#      check-downloaded-images.command). It refuses to build a partial set silently.
#   2. Resizes each so its longest side is at most 1024 px and re-encodes to JPEG, named
#      <question-id>.jpg. 1024 is the app's existing artwork standard, and the module displays
#      an illustration at no more than 700 CSS px, so this is still oversampled on a phone.
#   3. Writes `img/` - the folder the app wants - plus `upload-1/img` and `upload-2/img`, which
#      are the same files split under GitHub's ~100-files-per-commit web limit.
#   4. Writes size-capped zips, so the set can be sent to a session that will commit it for you.
#   5. Writes review.html - every image beside its question id and title, for reading through
#      before any of it goes live.
#
# It uses `sips`, which is part of macOS. Nothing to install.
#
# Re-running is safe: it rebuilds from the masters each time, so changing the quality or size
# below and running again just replaces the output.
set -uo pipefail

LONGEST_SIDE=1024   # px cap on the longer edge
QUALITY=82          # JPEG quality 0-100
CHUNK_MB=9          # max size of each zip

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPECT="$HERE/expected-image-ids.txt"
SRC="${1:-$HERE}"

[ -f "$EXPECT" ] || { echo "cannot find expected-image-ids.txt next to this script"; exit 1; }
cd "$SRC" || { echo "no such folder: $SRC"; exit 1; }
command -v sips >/dev/null || { echo "sips not found - this script needs macOS"; exit 1; }

echo "Rounds Codex - USMLE illustration prep"
echo "source : $(pwd)"
echo "target : longest side ${LONGEST_SIDE}px, JPEG q${QUALITY}"
echo

# ---- 1. is the download complete? -------------------------------------------------------
missing=0; bad=0
while read -r id; do
  [ -n "$id" ] || continue
  f=""
  for e in png PNG jpg jpeg webp; do [ -f "$id.$e" ] && { f="$id.$e"; break; }; done
  if [ -z "$f" ]; then echo "  MISSING   $id"; missing=$((missing+1)); continue; fi
  sz=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")
  if [ "$sz" -lt 20000 ]; then echo "  TOO SMALL $f ($sz bytes - likely a saved error page)"; bad=$((bad+1)); fi
done < "$EXPECT"

if [ "$missing" -gt 0 ] || [ "$bad" -gt 0 ]; then
  echo
  echo "STOPPING: $missing missing, $bad suspect."
  echo "Re-run download-rounds-codex-images.command to fetch the gaps, then run this again."
  exit 1
fi
echo "  all 190 masters present"
echo

# ---- 2. resize + convert ----------------------------------------------------------------
rm -rf img upload-1 upload-2 review.html
mkdir -p img
n=0
while read -r id; do
  [ -n "$id" ] || continue
  for e in png PNG jpg jpeg webp; do [ -f "$id.$e" ] && { src="$id.$e"; break; }; done
  # -Z caps the LONGER side, so a portrait image is not stretched and a landscape one is not
  # cropped. Both orientations are in this set (87 square, 54 landscape, 49 portrait).
  sips -Z "$LONGEST_SIDE" \
       -s format jpeg -s formatOptions "$QUALITY" \
       "$src" --out "img/$id.jpg" >/dev/null 2>&1 \
    || { echo "  FAILED to convert $src"; exit 1; }
  n=$((n+1))
  [ $((n % 25)) -eq 0 ] && echo "  converted $n / 190"
done < "$EXPECT"
echo "  converted $n / 190"

total_k=$(du -sk img | cut -f1)
echo
echo "  img/ is $((total_k / 1024)) MB for $n files (average $((total_k / n)) kB each)"

# ---- 3. split for GitHub's web upload limit ---------------------------------------------
# The web UI takes about 100 files per commit, so 190 has to go up as two drags. Each part
# folder is named `img` on purpose: the web UI lands a dragged folder under its own name, so a
# folder called anything else would create usmle/upload-1/img instead of usmle/img.
mkdir -p upload-1/img upload-2/img
i=0
for f in img/*.jpg; do
  i=$((i+1))
  if [ "$i" -le 95 ]; then cp "$f" upload-1/img/; else cp "$f" upload-2/img/; fi
done
echo "  upload-1/img  $(ls upload-1/img | wc -l | tr -d ' ') files"
echo "  upload-2/img  $(ls upload-2/img | wc -l | tr -d ' ') files"

# ---- 4. size-capped zips ----------------------------------------------------------------
rm -f usmle-img-part*.zip
part=1; acc=0
for f in img/*.jpg; do
  k=$(du -k "$f" | cut -f1)
  if [ $((acc + k)) -gt $((CHUNK_MB * 1024)) ] && [ "$acc" -gt 0 ]; then part=$((part+1)); acc=0; fi
  zip -q -j "usmle-img-part${part}.zip" "$f"
  acc=$((acc + k))
done
echo
for z in usmle-img-part*.zip; do echo "  $z  $(du -h "$z" | cut -f1)"; done

# ---- 5. review page ---------------------------------------------------------------------
{
  echo '<!doctype html><meta charset="utf-8"><title>USMLE illustrations - review</title>'
  echo '<style>body{background:#0d1117;color:#e6edf3;font:15px/1.5 -apple-system,system-ui,sans-serif;margin:0;padding:24px}'
  echo 'h1{font-size:20px}.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px}'
  echo 'figure{margin:0;background:#161b22;border:1px solid #30363d;border-radius:10px;overflow:hidden}'
  echo 'img{width:100%;height:auto;display:block}figcaption{padding:8px 10px;font-size:13px}'
  echo 'code{color:#7ee787}</style>'
  echo "<h1>USMLE illustrations &mdash; $n images for review</h1>"
  echo '<p>Each image is about to replace a hand-drawn schematic on its question. Note any that are'
  echo 'wrong or misleading by question id; anything not approved keeps its existing schematic.</p><div class="g">'
  while read -r id; do
    [ -n "$id" ] || continue
    echo "<figure><img src=\"img/$id.jpg\" loading=\"lazy\"><figcaption><code>$id</code></figcaption></figure>"
  done < "$EXPECT"
  echo '</div>'
} > review.html
echo "  review.html written"

cat <<NOTE

=== done ===

Open review.html first - that is the whole set on one page.

Then either:
  (a) send the usmle-img-part*.zip files to the session, and it will commit, deploy and verify; or
  (b) upload them yourself: on GitHub go INTO the usmle/ folder, choose Add file > Upload files,
      and drag the `img` folder from upload-1. Commit. Repeat with upload-2's `img`.
      Drag the folder named `img` itself, not upload-1 - the folder name becomes the path.

Nothing is live until the images are in the app repo AND illus-real.js is regenerated. Until
then every question keeps the schematic it has now, so a partial upload cannot break anything.
NOTE
