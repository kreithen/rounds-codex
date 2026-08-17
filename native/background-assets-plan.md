# Background Assets — the delivery plan for the iOS app

> ## NOT THE v1 PLAN — superseded 2026-08-17, the physician's call
>
> **v1 bundles all the media in the app: ~826 MB of payload, one binary, offline from install, on
> every supported iOS version.** No asset packs, no Background Assets capability, no downloader
> extension, no separate pack review, and no `WKURLSchemeHandler` seam. Three unverified pieces of
> the build became zero, on the day the app first ran on WebKit.
>
> The cost, accepted knowingly: an artwork change means a new binary and a new review.
>
> **Everything below is still accurate and still works** — `scripts/plan_asset_packs.js`,
> `scripts/build_asset_pack_manifests.js`, `native/manifests/` and
> `build_ios_payload.js --asset-packs` are all current. Read this file when the bundle gets
> uncomfortable, when content updates want to ship without a review, or when a second content pack
> (a specialty, a language) makes a 4 GB single binary the wrong shape. Do not read it as a
> description of what v1 does.

**Written 2026-08-17.** Task #27. Supersedes the "get under 250 MB by compressing artwork" framing
in `app-store-checklist.md` §4 and `native-app-plan.md`, which was built on a limit that does not
exist.

Numbers here come from `scripts/measure_bundle.js` and `scripts/plan_asset_packs.js`, run against
the shipped tree. Re-run them rather than quoting this file.

---

## 1. The limit, which is the reason this plan exists

| | value | source |
|---|---|---|
| Maximum app size, iOS 9+ | **4 GB** uncompressed | Apple, *Maximum build file sizes* |
| Maximum executable `__TEXT` | 80 MB | same — irrelevant here, a Capacitor app's content is resources |
| Cellular download threshold | **200 MB**, user-overridable since iOS 13 | Apple Developer News; Settings → App Store → App Downloads |
| Apple-hosted asset packs | **200 packs**, **200 GB** total per app | Apple, *Apple-hosted asset pack size limits* |

**The 250 MB target was never a rejection threshold and there is no size at which this app gets
rejected.** 200 MB is where iOS stops a cellular download without asking, and a reader can turn that
off. So compressing 1,020 illustration pages the physician deliberately standardised at 1024×1536
buys a worse product against a line that is not a wall.

Even the aggressive version does not clear it: WebP q75 — real quality loss on labelled medical
artwork — lands the whole bundle at 271 MB, still over 200. **Compression cannot win this and asset
packs win it outright**, which is what settles the approach.

## 2. What ships where

Measured, not estimated. `826.1 MB` is everything the app can request.

| | size | ships as |
|---|---|---|
| shell, `content/*.json`, fonts, icons | 12.6 MB | **in the app** |
| gallery thumbnails (1,020) | 47.4 MB | **in the app** |
| USMLE illustrations (197) | 24.2 MB | **in the app** |
| **app total** | **≈84 MB** | installs over cellular with no prompt |
| gallery pages (1,020) | 426.5 MB | asset packs |
| gallery PDFs (102) | 155.4 MB | asset packs |
| narrated audio (31) | 160.0 MB | asset packs |
| **packs total** | **741.9 MB** | 11 packs |

**Thumbnails stay in the app, and that is the one non-obvious call.** They are the most obvious 47
MB to move and moving them breaks the browse surface: the galleries index renders 340 thumbnails at
once, so a reader without the pack would get an index of grey rectangles and no way to judge what is
worth downloading. The thumbnails *are* the catalogue; the catalogue ships with the app and the
pages arrive behind it.

**The gallery PDFs go in the packs rather than staying remote.** The earlier plan was to resolve
them against the public origin like `RC_SHARE_ORIGIN` does for share links. That would put two
promises in the store listing in direct conflict — "a downloadable PDF for each gallery" and "works
entirely offline" — because the download would then need a connection. In a pack they are offline
with everything else, and 155 MB is free under a 200 GB allowance.

## 3. The eleven packs

Cut by condition **category**, not one per gallery. Per-gallery would be 102 packs, each with its
own App Store Connect row and its own App Review submission, to save a reader a few megabytes they
will download anyway. Category is how the library is already organised, how a student already thinks
("I'm on cardiology"), and it keeps each recording beside the gallery it belongs to.

| pack | galleries | audio | files | MB |
|---|---|---|---|---|
| `rc-cardiac` | 13 | 13 | 156 | 148.2 |
| `rc-endocrine` | 13 | 8 | 151 | 104.9 |
| `rc-respiratory` | 10 | 10 | 120 | 92.0 |
| `rc-gastrointestinal` | 12 | — | 132 | 84.7 |
| `rc-neurology` | 12 | — | 132 | 69.9 |
| `rc-msk-and-rheum` | 9 | — | 99 | 49.4 |
| `rc-renal-and-gu` | 7 | — | 77 | 43.6 |
| `rc-heme-and-onc` | 7 | — | 77 | 41.5 |
| `rc-psychiatry` | 7 | — | 77 | 39.1 |
| `rc-infectious-disease` | 6 | — | 66 | 35.4 |
| `rc-ob-and-peds` | 6 | — | 66 | 33.3 |

Median 49.4 MB. The file lists are in `native/asset-packs.json`, in `DATA` order — the same order
`rcGalOrder()` and `rcapOrder()` use, so a pack downloads in the order a reader walks it.

**Pack ids are permanent.** A renamed pack is a new pack and every device re-downloads it.

Ten condition categories have no pack because they have no gallery and no audio yet — that is the
existing coverage gap (102 of 183 conditions), not something this plan introduces. A new gallery
joins its category's pack; a new category means a new pack, and there are 189 spare.

## 4. The one web-side change

Gallery pages, PDFs and audio currently resolve as `base + file` against whatever `RC_ROOT` decided.
In the native app those bytes live in a pack outside the WebView's origin, so there needs to be a
single resolver between the app and its media — the same shape as `RC_SHARE_ORIGIN`, which already
exists precisely because "where a link points" and "where assets load from" are different questions.

Proposed: **`RC_MEDIA_ROOT`**, read once at boot, with three states:

1. **unset** — resolve exactly as today. This is the web build, and it must be behaviourally
   identical, not merely similar.
2. **set by the native shell** — a URL the WebView can read that maps to the downloaded pack.
3. **pack not yet present** — fall back to `RC_SHARE_ORIGIN`, so a reader who opens a gallery
   during the background download sees artwork over the network instead of a broken image.

State 3 is what makes the app usable in the first minutes after install, and it is also the answer
for any device that cannot get packs at all (see §6).

**BUILT 2026-08-17.** `scripts/add_media_root.js`, guarded by `scripts/verify_media_root.js`
(12 checks; **6 fail against an unpatched build**). Routed: gallery page images, the gallery PDF
(all its entry points) and the audio element's `src`. Not routed: thumbnails, deliberately —
`gframe()` draws both from one ternary, so that split is the specific thing a careless edit breaks.

The web build is proved unchanged by **side-by-side**, not by reading the diff: both builds are
served at once, driven through the same script, and every constructed media URL compared exactly —
gallery pages across six galleries covering both `base` conventions, the galleries-index thumbnails,
the PDF anchor's `href`, and the audio `src` after a real tap. `audit_app_e2e.js` is clean on the
patched build.

The fallback is stage 2 of `gimgerr()`, which already existed as a one-shot retry; stage 1 is
untouched and is still the only stage reachable on the web.

**One requirement for the native shell:** `RC_MEDIA_ROOT` is read when the app's script parses, so
the shell must set `window.RC_MEDIA_ROOT` **before** `index.html` runs — an injected script, not a
post-load assignment.

**Order matters for the iOS build**, and the three patchers compose (verified end to end):

```
node scripts/stamp_version.js     <copy> --set v<n>-<label> --apply
node scripts/add_media_root.js    <copy> --apply
node scripts/build_ios_variant.js <copy> --apply
```

## 5. What needs the Mac, and what is still unknown

**Verified from Apple's documentation:** the size and count limits above; iOS 26+ / iPadOS 26+ only;
packs upload to App Store Connect **separately from builds** and version independently; they must be
**submitted for App Review**; and they can be tested through TestFlight.

### The packaging tool — checked 2026-08-17

The tool is **`ba-package`**. It ships with Xcode (`xcrun ba-package`) and separately as *Managed
Background Assets Developer Tools* for Linux and Windows. Two subcommands matter:

```
ba-package template                                        # prints the manifest template
ba-package create --manifest <manifest.json> --output <archive>
```

**The Linux build cannot be obtained from a session, for two independent reasons, neither fixable
from here.** `developer.apple.com/download/all/` 302s to `idmsa.apple.com/IDMSWebAuth/signin.html` —
an Apple ID sign-in, which needs the physician's credentials. And the file host itself,
`download.developer.apple.com`, is refused by the agent proxy at the CONNECT stage
(`gateway answered 403 to CONNECT`, confirmed in the proxy's own status log — so this is the proxy
denying us, not Apple). The container is otherwise a plausible host: x86_64, glibc 2.39, Ubuntu 24.04.

**This is not a blocker.** The identical tool is already on the physician's Mac with Xcode, and
`xcrun ba-package` is what the generated runner defaults to. The Linux build would only have moved
the packaging step off that desk.

**The manifests are generated here anyway**, which was the actual point of the question.
`scripts/build_asset_pack_manifests.js` reads `native/asset-packs.json` and writes one manifest per
pack plus `package-all.sh`. **The schema is not invented** — it is the template that
`ba-package template` prints, quoted verbatim in Apple's WWDC25 session 325:

```json
{ "assetPackID": …, "downloadPolicy": { "essential": { "installationEventTypes": […] } },
  "fileSelectors": [ {"file": …}, {"directory": …} ], "platforms": […] }
```

If `ba-package template` on a real machine prints anything different, **it wins**: run it, diff, and
fix the generator rather than hand-editing eleven files.

**Download policy is `onDemand`, and that is a product decision.** `essential` blocks app launch
until the packs finish, which throws away the 84 MB install outright. `prefetch` pulls all 742 MB
onto every device including ten specialties a reader may never open. `onDemand` works because
`RC_MEDIA_ROOT`'s fallback already streams an un-downloaded pack rather than breaking, so the app
can request a category when a reader first opens a gallery in it and stay usable meanwhile — and it
leaves room for an explicit "download for offline" control. Override with `--policy prefetch`.

Selectors are explicit `file` entries, not `directory` ones: a directory selector would sweep in
whatever else sits in that folder, and this tree has already demonstrated it keeps things in odd
places. All **1,153** selectors were checked against the shipped tree; none is missing.

**One thing the Linux limitation does cost:** localized asset packs are not supported by the Linux
tools, only by Xcode. Irrelevant today — there is no localization — but worth knowing before anyone
plans one.

**Not verified, and deliberately not guessed at:** the runtime Swift API. Apple's documentation pages
render client-side, so the framework and `AssetPackManager` pages could not be read, and the search
result that offered method names hedged. Anything this document said about `download(_:)`,
`status(for:)` or `url(for:)` would be a plausible-looking invention taken into Xcode — the exact
failure mode this project has been bitten by. **Read it in Xcode's documentation viewer and write
the real names down here.**

**Also unverified:** whether a separate downloader extension target is required when Apple hosts the
packs. Developer-forum threads describe app groups shared between the main app and a download
extension; the managed/Apple-hosted path may not need one. It changes the Xcode project layout, so
settle it first.

**The genuine engineering risk is the seam, not the framework.** Pack files land in a container
directory, and a `WKWebView` will not load them from a `file://` path inside a page served from
Capacitor's scheme. The fix is a `WKURLSchemeHandler` — or Capacitor's local server — mapping a
media path onto the pack directory, which is exactly what `RC_MEDIA_ROOT` in §4 is there to point
at. **This cannot be tested from a session: no macOS, no WebKit.** Build the fallback in §4 first so
that if the seam misbehaves the app degrades to streaming rather than to broken images.

## 6. The decision this needs

**Apple-hosted asset packs are iOS 26+.** Two ways to go, and it is the physician's call:

- **Minimum deployment target iOS 26.** Simplest, one code path. Costs the users on older devices,
  and a study app's audience includes people on hand-me-down phones.
- **Support older iOS, degrade to streaming.** The §4 fallback already does this: no packs, media
  resolves against the public origin. The app works everywhere; "works entirely offline" becomes
  true on iOS 26+ and partly true below it. That is a listing-copy problem more than a code one, and
  the copy has to be honest about it.

## 7. Consequences for the store copy, so they are not found late

- The Description says the app works offline — "every page, image and question is on your device the
  moment it finishes downloading". With asset packs the *app* finishes downloading at 84 MB and the
  galleries arrive behind it. The claim stays true, the sentence needs rewording.
- If §6 goes the second way, the offline claim is version-dependent and must say so.
- `app-store-checklist.md` §4 still says "target under 250 MB". That target should be struck, not
  renegotiated.

---

## Re-running the numbers

```
node scripts/measure_bundle.js   <site-root>                       # referenced vs not, by category
node scripts/plan_asset_packs.js <site-root> --manifest native/asset-packs.json
```
