#!/bin/sh
# One command before archiving. Runs every guard in this repo against a tree and prints one
# pass/fail summary, so nothing is forgotten at 1am the night before a submission.
#
# It is deliberately a shell script and not another Node tool: the value is that it is impossible
# to misremember which of eleven scripts to run and in what order, and that is a sequencing problem
# rather than a logic one.
#
# TWO MODES, and the difference matters:
#
#   web      the deploy tree as it stands. Checks what ships to roundscodex.com.
#   ios      builds the payload first (patcher chain + strip) and checks THAT. This is the one to
#            run before an archive, because it tests the bytes that go in the bundle rather than
#            the bytes they were derived from.
#
# Usage:
#   sh scripts/preflight.sh web <web-clone>
#   sh scripts/preflight.sh ios <web-clone> [payload-dir]
#
# Needs RC_PW pointing at a directory containing node_modules/playwright-core for the browser
# suites. Without it those are SKIPPED and reported as skipped rather than passed -- a skipped check
# reported as green is worse than no check at all.

set -u
MODE="${1:-}"; SRC="${2:-}"; PAYLOAD="${3:-/tmp/rc-preflight-payload}"
HERE=$(cd "$(dirname "$0")" && pwd)
[ -z "$MODE" ] || [ -z "$SRC" ] && { echo "usage: preflight.sh <web|ios> <web-clone> [payload-dir]"; exit 2; }
[ "$MODE" = web ] || [ "$MODE" = ios ] || { echo "mode must be web or ios"; exit 2; }

PASS=0; FAIL=0; SKIP=0
FAILED=""
run() {                       # run <label> <command...>
  label="$1"; shift
  out=$("$@" 2>&1); rc=$?
  if [ $rc -eq 0 ]; then
    printf '  ok    %s\n' "$label"; PASS=$((PASS+1))
  else
    printf '  FAIL  %s\n' "$label"; FAIL=$((FAIL+1)); FAILED="$FAILED\n--- $label ---\n$out"
  fi
}
skip() { printf '  skip  %s  (%s)\n' "$1" "$2"; SKIP=$((SKIP+1)); }

TREE="$SRC"
if [ "$MODE" = ios ]; then
  echo "building the iOS payload from $SRC"
  rm -rf "$PAYLOAD"
  node "$HERE/build_ios_payload.js" "$SRC" "$PAYLOAD" >/tmp/rc-payload.log 2>&1 || {
    echo "FAIL  payload build -- see /tmp/rc-payload.log"; tail -20 /tmp/rc-payload.log; exit 1; }
  grep -E '^  (stripped|removed|PAYLOAD)' /tmp/rc-payload.log | sed 's/^/  /'
  # The payload builder warns rather than fails on a surprising size, so surface it here where
  # somebody is actually reading the output.
  grep -q 'expected roughly' /tmp/rc-payload.log && echo "  !!    payload size is off the plan -- read /tmp/rc-payload.log"
  TREE="$PAYLOAD"
fi

echo
echo "checking $TREE"

# ---- always, both modes -------------------------------------------------------------------------
run "service worker"            node "$HERE/verify_sw.js" "$TREE/sw.js"
run "font coverage"             python3 "$HERE/audit_font_coverage.py" "$TREE"

if [ "$MODE" = ios ]; then
  # Only the payload is checked for this: the guard it asserts is applied by the payload chain,
  # and the bug it guards against is unreachable on the web (an http URL always has a path).
  run "RC_ROOT keeps its host" node "$HERE/verify_root_authority.js" "$TREE"
fi

if [ "$MODE" = web ]; then
  run "version and copyright"   node "$HERE/stamp_version.js" "$TREE" --check
  run "public legal pages"      node "$HERE/build_legal_pages.js" "$TREE" --check
  # Regenerating the AASA is not a check, so it is not run here; but a missing one is worth saying.
  [ -f "$TREE/.well-known/apple-app-site-association" ] \
    && run "AASA is valid JSON" node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" \
         "$TREE/.well-known/apple-app-site-association" \
    || { printf '  FAIL  AASA present\n'; FAIL=$((FAIL+1)); }
fi

# ---- browser suites ------------------------------------------------------------------------------
if [ -z "${RC_PW:-}" ] || [ ! -d "${RC_PW:-}/node_modules/playwright-core" ]; then
  skip "app end-to-end"       "RC_PW unset or playwright-core missing"
  skip "iOS variant"          "RC_PW unset or playwright-core missing"
  [ "$MODE" = web ] && skip "media root" "RC_PW unset or playwright-core missing"
else
  PORT=${RC_PORT:-8701}
  node "$HERE/netlifysim.js" "$TREE" "$PORT" >/dev/null 2>&1 &
  SIM=$!; sleep 2
  run "app end-to-end"        node "$HERE/audit_app_e2e.js" "http://127.0.0.1:$PORT"
  kill $SIM 2>/dev/null
  if [ "$MODE" = ios ]; then
    run "iOS variant"         node "$HERE/verify_ios_variant.js" "$TREE" $((PORT+10))
  else
    skip "iOS variant"        "web mode -- run 'preflight.sh ios' before archiving"
  fi
fi

# ---- content invariants --------------------------------------------------------------------------
# read_shipped_counts exits non-zero if a count cannot be derived, which is the failure that matters:
# a silently missing number is how a stale one survives into the store listing.
run "shipped counts derive"   node "$HERE/read_shipped_counts.js" "$SRC"
# The pack plan must still match the tree, or build_ios_payload strips the wrong files.
run "asset pack plan matches" node "$HERE/plan_asset_packs.js" "$SRC"

echo
printf '%s passed, %s failed, %s skipped\n' "$PASS" "$FAIL" "$SKIP"
if [ "$FAIL" -gt 0 ]; then
  printf '%b\n' "$FAILED"
  echo "NOT READY."
  exit 1
fi
if [ "$SKIP" -gt 0 ]; then
  echo "Passed, but $SKIP check(s) were SKIPPED -- that is not the same as green."
  exit 0
fi
echo "All green."
