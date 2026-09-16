# HANDOFF — `claude/ios-large-screen-layout-6n2sur`

Written 2026-09-16, for a **fresh conversation**. This branch was opened to do one thing —
`large-screen-plan.md` Level 1, letting the app breathe above 468 px — and then absorbed six more
pieces of work as they surfaced. Everything it built is **deployed and live**; nothing is half
done. This document says what shipped, what is waiting on the physician, and the handful of things
that would be easy to undo by accident.

**There is no PR.** `CLAUDE.md` forbids opening one unless asked, and it has not been asked.

---

## 0. Read these first, in this order

| file | why |
|---|---|
| **`CLAUDE.md`** | The standing rules. Non-optional. The physician is the medical gate; **a deploy needs approval**. |
| **`HANDOFF-app-code-edits.md`** | How this branch came to exist, and §0b on the two unrelated histories. Still accurate. |
| **`app-integration-queue.md`** | The deploy record. v143, v144 and v145 are the last three sections. |
| **`app-store-checklist.md`** | What is open, and the **1.0.1** list — which this branch added to. |
| **`BRAND-ASSET-AUDIT.md`** | Why the icons were regenerated, and the two findings that were not the crop. |
| `large-screen-plan.md` | **Level 2 shipped as v146** — read its Level 2 section for what was built and the seven places the plan was wrong or silent. Level 3 is untouched and should stay that way until the hardware exists. |

**The branch to continue from is this one.** It is the newest on the native line, ahead of
`claude/no-wall-ios-variant-nbyd9v` by 20 commits. Do not branch from `main` — it is a disjoint
history that deploys the landing site, and `git merge-base` between them is empty.

---

## 1. What shipped, in deploy order

| version | what | where to read it |
|---|---|---|
| **v138** | Large screens Level 1: the app stops being a 468 px column on an iPad. | `large-screen-plan.md`, `verify_large_screen.js` |
| **v139** | The condition page's side rail — References / Ask / PDF / disclaimer beside the narrative. | `add_detail_rail.js`, `verify_detail_rail.js` |
| **v140** | A link preview renders a card instead of a bare grey URL — one site-wide `og:` block. | `add_og_tags.js`, `build_og_card.py` |
| **v141** | `sw.js` precaches the app that is actually shipping (a `CACHE` bump the v140 head needed). | `verify_sw.js`, `verify_sw_upgrade.js` |
| **v142** | Per-route preview text: a Netlify Edge Function giving 394 routes their own `og:` tags. | `build_route_previews.js`, `verify_route_previews.js` |
| **v143** | Every app icon regenerated from the lockup — the shipped mark was a **cropped ring**. | `build_app_icons.py`, `BRAND-ASSET-AUDIT.md` |
| **v144** | Per-gallery card art: the 102 `/g/<id>` routes carry a card built from their own pages. | `build_gallery_cards.py` |
| **v145** | The USMLE module's lockup — it was the wordmark with no emblem. | `build_usmle_logo.py` |

All eight are confirmed live. `/version.txt` reads `v145-USMLE-LOCKUP`, and the live
`usmle/assets/logo.png` is byte-identical by md5 to what was pushed.

**The live host was reachable from the container on 2026-09-16.** `CLAUDE.md` records that this
block moves in both directions — retest at the start of every session and trust neither state.

---

## 2. The four things that would be easy to undo by accident

**Do not hand-edit an app icon.** All six come out of `scripts/build_app_icons.py`, and the reason
is that the shipped ones carried a cropped mark — the ring open on the right, so the emblem read as
a "C" — from launch until 2026-09-16. The tell is the bounding box's **aspect**: a closed ring is
square, and all four web icons measured **0.78**, identically, which is what proved one upstream
crop propagating rather than four mistakes. Fix the generator, re-run it.

**Any new `og:` tag goes INSIDE `<!--RC_OG-->` … `<!--/RC_OG-->`.** The edge function swaps
everything between those sentinels per route. A tag placed after the closing sentinel survives the
swap and, being later in the head, wins. `verify_route_previews.js` asserts exactly that.

**Regenerate the preview table after any content change** —
`node scripts/build_route_previews.js <web-clone> --apply`. The 394 routes are baked from
`content/*.json`, so a new condition ships without a card until you do.

**`iOS still has the cropped icon.`** Its store icon comes from the binary, not from App Store
Connect, so it is a **1.0.1 build item**. `native/ios-project/AppIcon-1024.png` is generated and
committed; it needs an archive.

---

## 2b. Level 2 large screens — shipped as v146, refined in v147

Above **1180px** the nav becomes a left sidebar and the list you came from stays on screen beside
the item you opened, for all five list/item pairs. `scripts/add_large_screen_l2.js`, guarded by
`scripts/verify_large_screen_l2.js` (35 checks, 22 fail on the pre-patch tree), in `preflight.sh`.

`large-screen-plan.md` calls Level 2 "a genuine product decision, not a polish item — it changes
how the app is navigated", and it does, above 1180px, so it went to the physician as a decision.
`preflight.sh web` 14/0, `preflight.sh ios` 13/0/0, nothing below 1180 moved, zero page errors, and
the `CACHE` v143 → v146 migration was driven in a real browser.

v147 hides the library's hero **in the list pane only** — 613px of chrome above the first card
became 467, two cards in view became three, measured in all three modes.

The four things a future session is most likely to undo by accident are in `CLAUDE.md`: the
breakpoint is **measured** and 1180 is the first width that clears the rail; selecting a sibling
**replaces** the stack top rather than pushing; the condition swipe and the detail rail are both
**off** in two-pane, each for a reason stated in the patcher; and **to change any of it, re-run
`add_large_screen_l2.js` from the pre-Level-2 file** rather than patching the patched one — that is
how v147 came out as +10/−0 against v146.

---

## 3. Waiting on the physician — nothing here is blocked on code

1. **Two App Store Connect description edits.** No build needed, text fields only:
   - `Share any condition, section or gallery as a link` → `Share a condition, a specialty section
     or a guideline year as a link` (the gallery header's share button was removed in v74, so the
     live copy promises something the app no longer does).
   - `197 of them illustrated` → `231 of them illustrated`, **in two places**.
2. **Paste one gallery from the photo album.** The 27 sub-standard 800×1200 galleries were almost
   certainly *delivered* at 1024×1536 and downscaled by our own old pipeline, so the fix is probably
   re-pasting rather than a production re-export. One gallery measures it. See the banner on
   `REEXPORT-REQUEST-1024x1536.md`.
3. **The Mac.** Android Studio / `npx cap add android` / a signed bundle, per
   `native/ANDROID-RUNBOOK.md`; and the **iOS 1.0.1 archive**, which is what ships the corrected
   store icon.
4. **Check `app/build.gradle` for Firebase or Crashlytics before submitting.** Either one flips the
   Play Data safety answer from "no data collected", and that answer is already filed.

---

## 4. Deliberately not done, with the reason

- **`noindex` is still on the live site.** Removing it at launch very likely starts the three-month
  §412 window for statutory damages, and that window never reopens. It is flagged in
  `legal/README.md` and is the physician's call, not a default.
- **The landing site's `apple-touch-icon.png` is a different icon design** from the app's — a thick
  solid ring where the app has the glowing thin one. Someone who saves both roundscodex.com and the
  app to a home screen gets two marks for one product. **Not fixed here** for a structural reason:
  `landing/` lives on `main`, a disjoint history owned by another conversation. Raise it there.
- **Condition routes keep the site-wide card image.** Only galleries got their own art. A condition
  page's subject is its text, and the mislabelled-anatomy audit found 81 of 119 pages where a leader
  line misses the structure it names — a share card is the wrong surface to enlarge one on.
- **The USMLE module's `logo.jpg`** (939×450) is referenced by nothing and was left alone.

---

## 5. The tooling this branch added, and what it is for

Six generators and four guards, all of which run from `scripts/` and none of which need a browser
except where noted.

| script | what it owns |
|---|---|
| `build_app_icons.py` | all six app icons, from `logo-trim.png`. Refuses a mark whose aspect is under 0.90 or whose centre is off by more than 2%. |
| `build_usmle_logo.py` | `usmle/assets/logo.png` and its `preview/` twin. |
| `build_gallery_cards.py` | the 102 `og/g/<id>.jpg` link cards. |
| `build_route_previews.js` | the 394-route edge function. |
| `verify_route_previews.js` | 30 checks, calibrated by **eleven mutants**. In `preflight.sh` under web mode. |
| **`lib/pure_insertion.js`** | the post-condition every in-place patcher now carries — see §6. |
| `verify_pure_insertion.js` | its calibration: 18 cases, 11 of which must be REJECTED. |
| `verify_patchers_guarded.js` | sweeps `scripts/` and fails if an in-place patcher is missing the post-condition. |

`sh scripts/preflight.sh web <web-clone>` is **13 passed, 0 failed** (the native-variant check is
skipped there, correctly — it belongs to the other mode), and
`sh scripts/preflight.sh ios <web-clone> <payload-dir>` is **12 passed, 0 failed, 0 skipped**, which
builds the 826 MB payload through the whole patcher chain with the post-condition live. Both need
`RC_PW` pointing at a directory containing `node_modules/playwright-core`, or the browser suites
report themselves as **skipped** — which is not the same as passing.

---

## 6. The pure-insertion post-condition — read this before writing a patcher

**51 scripts patch a file in place.** Every one now asserts that its output is its input with
exactly the declared edits applied, plus whole lines added, and nothing else touched. Three lines
to adopt: require the library beside `fs`, capture the input right after reading it, and
`RC.assert(before, after)` immediately before the write — plus one `RC.step(label, from, to)` inside
the script's own `replaceOnce`/`sub`/`cut` helper, which is why forty scripts adopted it without a
single call site changing.

It exists because `add_detail_rail.js` shipped a patch whose three anchors each matched exactly
once, whose wrappers balanced, whose page rendered, and whose only symptom was the clinical
disclaimer quietly **four words shorter**. An assertion on what a patch *finds* cannot catch a patch
that mangles what it finds.

Four things about it that are not obvious and cost time to learn:

- **It compares LINES, not bytes.** Byte-level subsequence is too weak beside a large insertion —
  the characters of a deleted clause get re-matched, in order, out of the text the patch added a few
  lines down. Measured on a real script, not feared.
- **An intra-line edit is a rewrite and must be declared.** Inserting between `</style>` and
  `</head>` on one line changes that line. `add_safe_area.js` failed the whole native chain on
  exactly this until its three edits were declared — which is the guard working, not a false alarm.
- **Declared edits are replayed FORWARD onto the input, never unwound off the output.** Unwinding
  means searching the output for what was written, and a deletion wrote nothing: on
  `build_ios_variant.js` that matched 732,809 times.
- **It cannot see an error INSIDE a declared replacement**, and never will — the edit is replayed
  with the very strings the patcher used. Mutating `add_scroll_restore.js` so its rewritten `back()`
  loses an argument **passes**. What it catches is *collateral* damage, which is the disclaimer
  bug's real shape: mutating `build_ios_variant.js` to shorten the disclaimer is rejected by line
  number.

If a patcher fails this check, **declare the edit — do not relax the check.**
