# Rounds Codex on Google Play — everything between here and published

**Written 2026-09-17**, after Play account verification cleared. This is the ordered list, who does
each step, and what each one waits on. It supersedes nothing; it points at the files that hold the
detail.

**The account is done.** Organization, verified, `Create app` unlocked, Draft app
`com.roundscodex.app` created. Nothing on the Play side blocks anything.

**One thing blocks everything else, and it is a 20-minute job on your Mac.**

---

## The critical path

| # | Step | Who | Waits on |
|---|---|---|---|
| ~~1~~ | ~~push the Capacitor project~~ **DONE 2026-09-18** | you | ✅ |
| ~~2~~ | ~~Android platform files~~ **DONE 2026-09-18** | me | ✅ |
| ~~3~~ | ~~build and run the emulator test~~ **DONE 2026-09-21 — it runs** | you | ✅ |
| ~~4~~ | ~~asset packs vs streaming~~ **SETTLED — option A, packs work offline** | both | ✅ |
| ~~5~~ | ~~upload key, signed `.aab`~~ **DONE 2026-09-21 — 808 MB, all eleven packs in it** | you | ✅ |
| ~~6~~ | ~~upload to internal testing~~ **DONE 2026-09-21 — version 1 (1.0), targetSdk 36** | you | ✅ |
| ~~7~~ | ~~`assetlinks.json`~~ **DONE 2026-09-21 — shipped live as v150** | me | ✅ |
| 8 | Fill the Console forms | you | — *(can be done now, in parallel with 1–6)* |
| 9 | Enter the listing: copy, icon, feature graphic, screenshots | you | — *(assets all exist now)* |
| 10 | Promote to production, submit for review | you | 6, 7, 8, 9 |

Steps **8 and 9 do not wait on anything** — do them while the Mac work is in flight and the app is
ready to publish the moment the bundle is.

### What steps 5–7 measured, 2026-09-21

- **808 MB bundle, 847 MB install, 8m 22s download** — Play's own numbers. Under the 200 MB base
  cap and the 1 GB install-time-pack cap, with ~258 MB of pack headroom left for new galleries.
- **Play raised nothing about size, asset packs or large screens.** The two warnings on the release
  were "no testers specified" and "no deobfuscation file" — the second is correct and permanent:
  `minifyEnabled` is false because the Java layer is a shell and all the real code is JavaScript,
  which R8 never touches.
- **App signing key SHA-256:** `82:36:E4:29:51:18:C8:2C:24:7C:E2:98:1E:03:5B:83:96:C2:29:57:7E:D0:D6:F5:E3:EC:DE:3D:70:B7:FA:01`
  (public — it is served at `/.well-known/assetlinks.json`).
- **App Links verify at INSTALL time.** A device that already has the app will not re-verify
  against the newly deployed file until it reinstalls, so test the links on a fresh install.

---

## Step 1 — the one that blocks everything  *(you, ~20 min)*

`native/MAC-PUSH-NATIVE-REPO.md`, one command per line. A session cannot add a platform to a project
it cannot read; until this lands, everything Android-side is a guess about a project nobody but you
can see.

When it is pushed, send me the output of `git remote -v` and `git log --oneline -1`.

---

## Step 3 and 4 — the one genuinely open engineering question

**Can Capacitor's `WebViewLocalServer` read a file out of a Play install-time asset pack?**

Everything else about the split is settled and verified. Re-run today against v147:

| | |
|---|---|
| Base module | **84.3 MB** — Play caps it at 200 MB compressed. 115.7 MB of headroom. |
| Asset packs | **11 packs, 1,153 files, 741.9 MB.** `verify_asset_packs.js`: all 48 checks pass. |
| The invariant that matters | base (1,308 files) + packs (1,153) == everything the app can request. Wrong one way and 742 MB ships twice; wrong the other and a gallery is silently missing on a device, offline, with no error. |
| Payload variant | `verify_ios_variant.js`: **31/31 pass** on the v147 Android payload. No request leaves the origin. |

**That proves the split is right. It does not prove Android serves it**, and a container cannot
settle that — `dl.google.com` is blocked, so there is no Android SDK here. The test is three steps
on the Mac (`native/ANDROID-RUNBOOK.md` step 6): build, install on an emulator, open a gallery in
Airplane Mode.

- **If it works** → option A. Full offline from install, same as iOS. The listing copy is already
  written for this.
- **If it fails** → option B, `RC_MEDIA_ROOT` streaming. One config string, `add_media_root.js`
  already does it. **Then two sentences in the full description become false** — "works entirely
  offline" and "a downloadable PDF for each gallery" — and `PLAY-LISTING-DRAFT.md` §7.4 is the
  paragraph to rewrite before submitting, not after.

---

## Step 8 — the Console forms  *(you, now)*

`native/PLAY-CONSOLE-ANSWER-PACK.md` walks all eleven in Console order. Three are decisions:

- **Free**, set before the first publish. Irreversible afterwards.
- **Target audience: 18 and over only.** Any band below 18 pulls the app into the Families policy.
- **Countries: all.**

---

## Step 9 — the listing  *(you, now; every asset exists)*

| asset | where | status |
|---|---|---|
| Title / short / full description | `PLAY-LISTING-DRAFT.md` §§1–3 | 28/30, 77/80, 2,823/4,000 |
| App icon 512×512 | `native/play-graphics/play-icon-512.png` | **new today** |
| Feature graphic 1024×500 | `native/play-graphics/feature-graphic.png` | exists |
| Phone screenshots ×8 | `native/play-screenshots/` | **re-shot today at v147** |
| 7" tablet ×8 | `native/play-screenshots/tablet7/` | **new today**, 2048×1200 |
| 10" tablet ×8 | `native/play-screenshots/tablet10/` | **new today**, 2560×1600 |

**The icon comes from `icon-maskable-512.png`, not `icon-512.png`.** The latter carries rounded-corner
transparency — 3.5% of its pixels are not opaque — and Play applies its own rounded mask and shadow,
so a pre-rounded icon gets rounded twice. The maskable variant is already fully opaque (alpha 255
everywhere, measured), so the store icon is that file with the redundant alpha channel dropped
entirely: 512×512, colour type 2, 85 kB against Play's 1,024 kB cap. No repainting, no compositing
onto a guessed background.

**The counts are current.** `verify_listing_counts.js` against v147: all 56 quoted counts match.
Re-run it on the day you paste.

---

## Two findings from doing the tablet pass, neither blocking

### ~~The image viewer does not scale above phone width~~ — FIXED, shipped live as **v149**

`.vslide` was `width:min(94%,440px)` — **no height term at all**, so a 2:3 page rendered at width ×
1.5 whatever the viewport was, and the 440px cap never lifted. v138–v147 built a large-screen layout;
the viewer was not part of it, which left the app's flagship surface the one that did not use the
extra room.

| viewport | before | after |
|---|---|---|
| 360×640 phone | 338×508 | **338×508 — identical to the tenth of a pixel** |
| 1024×600 7" landscape | 440×660, **cropped 30px top and bottom** | 312×468, complete |
| 1280×800 10" landscape | 440×660 | 445×668 |
| 800×1280 10" portrait | 440×660 | **752×1128 — 71% wider** |

The new rule is `min(94%, (100svh − 132px)/1.5, 1024px)`. **The 132px is not arbitrary**: today's
phone render is width-constrained at 338.4 and sits with 66px of clearance above and below, with
`.vbot`'s scrim deliberately over the lower edge of the artwork. Writing that as a height term
reproduces the phone exactly and generalises it. 1024px is the cap because that is the shipped page
width — past it the browser is upscaling a JPEG.

**The 7-inch case getting smaller is the correct answer**, not a regression: a 2:3 page cannot be
shown larger in a 600px-tall window without losing part of it.

**`svh`, and both forms written.** `.viewer` is `position:fixed;inset:0`, so its real height is the
visual viewport; on mobile Safari `100vh` is the *large* viewport and exceeds it while the URL bar
shows, which would compute a width too big and bring the crop straight back. The `vh` form is the
fallback where `svh` does not parse.

### The screenshot tool could produce a broken panel and pass every check

The first tablet run was shot against the `--asset-packs` payload, which strips the full-size artwork
out by design. `03-viewer.png` came back as **2560×1600 of black with a broken-image glyph and its alt
text** — correct dimensions, correct aspect ratio, zero page errors, and it passed every assertion in
the tool. A store panel that is a broken image is worse than a missing one.

`shoot_play_screenshots.js` now checks every image for `naturalWidth === 0` after each capture and
names the file that failed. Run against the stripped payload it fails shot 3 and says why; that is
the test that makes it a guard rather than decoration.

---

## Still open, and not on the critical path

- The duplicate `v=spf1` record at GoDaddy — SPF is failing for all outbound mail (`ANDROID-RUNBOOK.md` §6c).
- How the landing site (`roundscodexwebsite`) deploys. It is in no repo this session can see, and it
  carries the same "25 specialties" error the launch email did.
- The Console's unread notifications.
- The mode toggle at 26px tall — the largest remaining tap-target finding, three controls on every
  view. A design decision, not a padding tweak (`native/PRE-LAUNCH-REPORT.md` §5). The two that
  *were* padding tweaks shipped live as **v148** on 2026-09-17.
- The Apple Individual → Organization conversion (`native/apple-org-switch.md`, D-U-N-S filled in).
