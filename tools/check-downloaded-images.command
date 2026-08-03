#!/bin/bash
# Verify the Higgsfield download is complete and the files are real images.
#
#   bash check-downloaded-images.command <folder-with-the-190-pngs>
#
# Run this on your Mac, in the folder the download script wrote to. It answers three questions
# without anything having to be uploaded anywhere:
#
#   1. Are all 190 there, by question id?
#   2. Is any of them a truncated or empty file? A failed curl can leave a 0-byte or partial PNG
#      that looks fine in a folder listing and is useless.
#   3. Are they actually PNGs, or did the CDN hand back an error page with a .png name?
#
# It prints a short summary you can paste back into the chat. That summary is all I need -- the
# 1.16 GB itself does not need to travel.
set -uo pipefail
# Resolve the script's own folder BEFORE changing directory -- otherwise a relative
# BASH_SOURCE is looked up inside the target folder and the id list is never found.
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPECT="$HERE/expected-image-ids.txt"
DIR="${1:-.}"
cd "$DIR" || { echo "no such folder: $DIR"; exit 1; }
[ -f "$EXPECT" ] || { echo "expected-image-ids.txt not found next to this script"; exit 1; }

echo "checking $(pwd)"
echo

missing=0; empty=0; small=0; notpng=0; ok=0
while read -r id; do
  f="$id.png"
  if [ ! -f "$f" ]; then echo "  MISSING   $f"; missing=$((missing+1)); continue; fi
  sz=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")
  if [ "$sz" -eq 0 ]; then echo "  EMPTY     $f"; empty=$((empty+1)); continue; fi
  if [ "$sz" -lt 20000 ]; then echo "  SUSPECT   $f  only ${sz} bytes - likely an error page"; small=$((small+1)); continue; fi
  # PNG magic number. od rather than xxd: xxd ships with vim and is not guaranteed present,
  # od is POSIX and exists on both macOS and Linux.
  if [ "$(head -c 8 "$f" | od -An -tx1 | tr -d ' \n')" != "89504e470d0a1a0a" ]; then
    echo "  NOT PNG   $f"; notpng=$((notpng+1)); continue
  fi
  ok=$((ok+1))
done < "$EXPECT"

extra=$(ls -1 *.png 2>/dev/null | wc -l | tr -d ' ')
echo
echo "----------------------------------------------------"
echo "  expected 190   valid $ok"
echo "  missing $missing   empty $empty   suspiciously small $small   not a PNG $notpng"
echo "  .png files in folder: $extra"
echo "  total size: $(du -sh . | cut -f1)"
echo "----------------------------------------------------"
if [ "$ok" -eq 190 ]; then
  echo "  ALL 190 PRESENT AND VALID - nothing needs re-downloading."
else
  echo "  Incomplete. Re-run download-rounds-codex-images.command; it skips what is already good."
fi
