#!/usr/bin/env python3
"""audit_text_integrity.py <app-clone> [--file index.html] [--since <rev>] [--all-files]

Walk the deploy repo's history and find reader-facing text that a PATCHER MANGLED rather than a
human edited.

WHY THIS EXISTS. On 2026-09-14, building the condition-page rail, a patcher's closing anchor was
lengthened without lengthening its replacement string. `replace(longAnchor, shortReplacement)` then
deleted "guidelines and your facility's " from the educational-use disclaimer on all 183 condition
pages. Every anchor assertion in that patcher passed. The wrappers balanced. The page rendered with
no error. The sentence still read like a sentence:

    before: Educational use only - verify dosing & decisions against current guidelines and your
            facility's policies.
    after:  Educational use only - verify dosing & decisions against current policies.

It was caught by noticing the text in a screenshot. Roughly forty anchored patchers have been run
against this app over its life, so the question this script answers is: has that happened before
and shipped?

THE SIGNATURE, AND WHY IT IS DETECTABLE. A human rewriting copy produces a different sentence. A
bad `replace()` produces the SAME sentence with one contiguous run of characters missing -- the
anchor's text survives on both sides of the hole. So for every string that left the file in a given
commit, this looks for a string that arrived in the same commit which is exactly the old one with a
single contiguous chunk deleted. That is a narrow, mechanical property: no fuzzy similarity score,
no threshold to tune, and an ordinary copy edit does not satisfy it.

It reports two classes:

  TRUNCATION   one contiguous deletion, as above. Read every one of these.
  VANISHED     a long string that left and whose near-neighbour did not arrive. Noisier by nature
               -- removing a paragraph on purpose looks identical -- so it is off unless you ask
               for it with --vanished. Useful when chasing a specific suspicion, not as a gate.

WHAT COUNTS AS READER-FACING. `index.html` is code that builds markup from template literals, so
there is no clean boundary. The heuristic is deliberately broad and then filtered: runs of natural
language at least MIN_LEN characters long with at least four spaces and a lowercase word. That
picks up prose in markup, in quoted strings and in comments alike. Comments are noise here but
harmless -- a truncated comment is not a finding, and there are few enough to read past.

For `content/*.json` the extraction is exact rather than heuristic: every string value in the
document, which is precisely the clinical text the app renders.

CALIBRATION, AND WHAT IT FOUND -- run 2026-09-14 over the whole deploy history, 251 revisions of
index.html and 197 of each content file:

    content/conditions.json   197 revisions   0 findings     <- the 183 condition modules
    content/drugs.json        197 revisions   0 findings
    content/nclex.json        197 revisions   0 findings
    content/galleries.json    197 revisions   0 findings
    content/or.json           197 revisions   0 findings
    content/calculators.json  134 revisions   0 findings
    content/quizzes.json      197 revisions   1 finding      -> deliberate, read below
    content/resident.json     197 revisions  22 findings     -> one commit, all false, read below
    index.html                251 revisions  10 findings     -> all false, read below

**Nothing shipped has ever been mangled by a patcher.** Every one of the 33 was read by hand and
resolved:

  - quizzes.json: "starting at age 21-25" -> "starting at age 25", in the commit "Fix the nine
    Tier 1 teaching errors from the blinded medical review". A correct medical edit -- primary HPV
    testing begins at 25 under ACS, and the shipped explanation now says so and adds that it is
    cytology alone that starts at 21.
  - resident.json: all 22 are one commit that replaced 60 Vascular Surgery *topics* with 50
    *procedures* -- a different schema and a different set of entries. The detector paired an old
    topic's sentence with a different new procedure's sentence because the same author writes
    similar openings. Verified on the closest-looking pair: the old entry was "Carotid Stenting and
    Transcarotid Artery Revascularization" and the new one is TCAR alone, so dropping "TCAR" from
    "TCAR stroke and death rates" is correct editing, not a hole.
  - index.html: line-continuation artifacts (this file builds markup from `'...'+` concatenations,
    so a fragment can end mid-sentence and the rest is on the next line -- the medical disclaimer
    gate and its Terms link both read as truncated and are intact), hard-coded counts replaced by
    `${DATA.length}`, two JS identifier renames in the audio player, one mode-toggle label changed
    and changed back, and one gallery page title corrected from "Labeled Atrial Anatomy" to
    "Atrial Anatomy" -- which matches the title printed on the page itself, checked by eye.

THE TWO FALSE-POSITIVE MODES, so the next reader can dismiss them quickly:

  1. WHOLESALE REPLACEMENT of a dataset in one commit. Many findings, all in that commit, all
    pairing sentences from *different* entries. The tell is the count and the commit message.
  2. STRING CONCATENATION in index.html. A prose run can end at `'+` and continue on the next
    line, so the extractor sees a sentence that stops early. Always check the shipped file before
    believing one of these.

EXIT CODE is 1 if any TRUNCATION is found, so this can gate. VANISHED never gates.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

MIN_LEN = 30          # characters; shorter runs are labels and are too noisy to compare
MIN_SPACES = 4

PROSE = re.compile(r"[A-Za-z][A-Za-z0-9 ,;:'’&()\[\]\-–—./%+*#<>=?!\"]{" + str(MIN_LEN - 1) + r",}")
HAS_LOWER_WORD = re.compile(r"\b[a-z]{3,}\b")


def git(repo, *args):
    return subprocess.run(["git", "-C", str(repo), *args],
                          capture_output=True, text=True, errors="replace").stdout


def fragments_html(text):
    """Prose runs out of a file that is code building markup."""
    out = set()
    for m in PROSE.finditer(text):
        f = " ".join(m.group(0).split())
        if len(f) < MIN_LEN or f.count(" ") < MIN_SPACES:
            continue
        if not HAS_LOWER_WORD.search(f):
            continue
        out.add(f)
    return out


def fragments_json(text):
    """Every string value in a JSON document -- exact, not heuristic."""
    out = set()
    try:
        doc = json.loads(text)
    except Exception:
        return fragments_html(text)

    def walk(node):
        if isinstance(node, str):
            f = " ".join(node.split())
            if len(f) >= MIN_LEN and f.count(" ") >= MIN_SPACES:
                out.add(f)
        elif isinstance(node, dict):
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    walk(doc)
    return out


def one_contiguous_deletion(old, new):
    """Is `new` exactly `old` with a single contiguous run removed? Returns the run, or None.

    This is the whole detector. Nothing fuzzy: a common prefix, a common suffix, and the two must
    account for every character of `new`.
    """
    if len(new) >= len(old):
        return None
    p = 0
    while p < len(new) and old[p] == new[p]:
        p += 1
    s = 0
    while s < len(new) - p and old[len(old) - 1 - s] == new[len(new) - 1 - s]:
        s += 1
    if p + s != len(new):
        return None
    gap = old[p:len(old) - s]
    # A deletion that removes only whitespace or a single character is reformatting, not a mangle.
    if len(gap.strip()) < 3:
        return None
    return gap


def index_by_head(frags, n=18):
    idx = {}
    for f in frags:
        idx.setdefault(f[:n], []).append(f)
    return idx


def main():
    argv = sys.argv[1:]
    if not argv:
        print(__doc__)
        return 2
    repo = Path(argv[0])
    if not (repo / ".git").exists():
        print(f"not a git repo: {repo}")
        return 2

    want_vanished = "--vanished" in argv
    all_files = "--all-files" in argv
    since = None
    if "--since" in argv:
        since = argv[argv.index("--since") + 1]

    if all_files:
        files = ["index.html"] + sorted(
            f for f in git(repo, "ls-tree", "--name-only", "-r", "HEAD").split("\n")
            if f.startswith("content/") and f.endswith(".json"))
    elif "--file" in argv:
        files = [argv[argv.index("--file") + 1]]
    else:
        files = ["index.html"]

    rng = f"{since}..HEAD" if since else "HEAD"
    commits = [c for c in git(repo, "log", "--format=%H", "--reverse", rng).split("\n") if c]
    print(f"auditing {len(files)} file(s) across {len(commits)} commits\n")

    findings = 0
    vanished_total = 0
    for path in files:
        extract = fragments_json if path.endswith(".json") else fragments_html
        prev = None
        prev_sha = None
        seen = 0
        for sha in commits:
            blob = git(repo, "show", f"{sha}:{path}")
            if not blob:
                continue
            cur = extract(blob)
            seen += 1
            if prev is not None:
                removed = prev - cur
                added = cur - prev
                if removed and added:
                    idx = index_by_head(added)
                    for r in removed:
                        for a in idx.get(r[:18], ()):
                            gap = one_contiguous_deletion(r, a)
                            if gap:
                                subj = git(repo, "log", "-1", "--format=%s", sha).strip()
                                print(f"TRUNCATION  {path}  {sha[:9]}  {subj}")
                                print(f"   before: {r}")
                                print(f"   after : {a}")
                                print(f"   lost  : {gap!r}\n")
                                findings += 1
                if want_vanished:
                    idx = index_by_head(added, 12)
                    for r in removed:
                        if len(r) < 60:
                            continue
                        if not idx.get(r[:12]):
                            vanished_total += 1
            prev = cur
            prev_sha = sha
        print(f"  {path}: {seen} revisions compared")

    print()
    if findings:
        print(f"{findings} TRUNCATION finding(s) -- each one is text that left the file with its "
              f"own beginning and end intact. Read them.")
    else:
        print("no truncations found: no reader-facing string in this history was ever replaced by "
              "itself-with-a-hole.")
    if want_vanished:
        print(f"{vanished_total} long string(s) removed with no near-neighbour added "
              f"(expected to be mostly deliberate rewrites)")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main())
