#!/bin/bash
# Rounds Codex - full backup to a folder you control.
#
#   Double-click this file in Finder, or run:  bash backup-rounds-codex.command [destination]
#   Default destination: ~/RoundsCodex-Backup/<today's date>
#
# WHAT THIS BACKS UP, AND WHY IT IS SHAPED THIS WAY
#
# Both GitHub repositories already hold the complete history of the project. The exposure is not
# that the work is unversioned -- it is that every copy lives on one GitHub account. This pulls
# the whole thing onto hardware you own.
#
# It makes TWO kinds of copy of each repo on purpose:
#
#   1. A `--mirror` clone. That is every branch, tag and commit, byte for byte -- the full
#      history, not just today's files. It is what you would restore FROM. It is also the only
#      form that survives a mistake made months ago, because the old version is still in it.
#
#   2. A plain folder with the .git directory removed. No git, no tooling, no account needed --
#      anyone can open it in ten years and read the files. Mirrors are useless to someone who
#      does not know git, and the person restoring this might not be you.
#
# It then writes a SHA-256 manifest, so a restore can be checked rather than assumed. A backup
# you have never verified is a hope, not a backup.
set -euo pipefail

OWNER="kreithen"
DEST="${1:-$HOME/RoundsCodex-Backup}"
STAMP="$(date +%Y-%m-%d)"
OUT="$DEST/$STAMP"

echo "Rounds Codex backup -> $OUT"
mkdir -p "$OUT"
cd "$OUT"

for repo in rounds-codex-app rounds-codex; do
  echo
  echo "=== $repo ==="
  if [ -d "$repo.git" ]; then
    echo "  mirror already here, fetching any new commits"
    git -C "$repo.git" remote update --prune
  else
    echo "  mirror clone (full history)"
    git clone --mirror "https://github.com/$OWNER/$repo.git" "$repo.git"
  fi
  echo "  readable snapshot"
  rm -rf "$repo-files"
  git clone --quiet "$repo.git" "$repo-files"
  rm -rf "$repo-files/.git"
done

echo
echo "=== checksums ==="
find . -type f ! -name 'MANIFEST.sha256' -print0 | sort -z | xargs -0 shasum -a 256 > MANIFEST.sha256
echo "  $(wc -l < MANIFEST.sha256) files recorded in MANIFEST.sha256"

echo
echo "=== done ==="
du -sh "$OUT"
cat <<'NOTE'

Three things this CANNOT reach, which you have to add by hand:

  1. Netlify's own settings - environment variables, build command, custom domain, DNS.
     Nothing in the repos records them. Screenshot the site configuration pages.
  2. The original production artwork files, if the vendor holds masters you were never sent.
  3. Anything still living only in a chat session or a cloud generator's gallery.

To verify a restore later, from inside the backup folder:
    shasum -a 256 -c MANIFEST.sha256

To restore the live site from the mirror:
    git clone rounds-codex-app.git restored-site

Now copy this whole folder to a second place - an external drive AND a cloud account.
Two copies in your house is one flood away from zero.
NOTE
