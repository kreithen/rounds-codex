# The Play Console, form by form — every answer, in Console order

**Written 2026-09-17, the day account verification cleared and `Create app` unlocked.** The Draft
`Rounds Codex: Clinical Atlas` (`com.roundscodex.app`) already exists, so everything below is
enterable now.

**This is not a duplicate of `PLAY-LISTING-DRAFT.md`.** That file holds the *copy* — title, short
and full description, graphics, and the reasoning behind each — plus long-form answers for Data
safety, the Health apps declaration and content rating. This file is the **checklist in the order
the Console walks you through it**, covering the eight forms that file does not mention at all, and
pointing at it rather than restating it where it already has the answer.

**Counts re-derived against v147 on 2026-09-17** — `node scripts/verify_listing_counts.js
../rounds-codex-app native/PLAY-LISTING-DRAFT.md app-store-submission-draft.md` returns *all 56
quoted counts match*. Re-run it on the day you paste; every earlier document's numbers went stale,
and two wrong ones reached 25 people in the launch email.

**Legend.** **`ANSWER`** — settled, paste it. **`YOURS`** — a decision only you can make, with a
recommendation. **`CHECK`** — cannot be confirmed until the Capacitor project exists (§4.0).

---

## Before anything: the one irreversible choice

| | |
|---|---|
| **Free or paid** | **Free.** Set it before the first publish. **Free → paid is irreversible once an app has been published**, and under the grandfathering decision (option D, `native/GRANDFATHERING-android.md`) the subscription arrives later as an *in-app product*, not as a price on the app. A paid app would also put the entire existing library behind a wall, which is the one thing that decision rules out. |

Everything else on this page can be edited after submission.

---

## Part 1 — App content  *(Console: left nav → Policy → App content)*

Nine declarations. Play will not let you release without all of them.

### 1.1 Privacy policy — **`ANSWER`**

```
https://roundscodex.com/privacy/
```

Live and correct as of v133: it names "the iOS and Android apps". Check it loads in a private
window before pasting — Play fetches it, and a policy behind any kind of gate fails the check.

### 1.2 App access — **`ANSWER`**

> **All functionality is available without special access.**

No account, no sign-in, no region lock, no promo code. This is true of the *native variant*
specifically: `build_native_payload.js` strips the login wall and the Ask feature. It is **not**
true of the website, which is invite-only — so do not answer this from what you see at
`roundscodex.com`.

The medical disclaimer on first launch is **not** access-restricted content: it is a one-tap
acknowledgement with nothing behind it to authenticate. Do not list it here.

### 1.3 Ads — **`ANSWER`**

> **No, my app does not contain ads.**

No ad SDK, no house ads, no affiliate placements, no sponsored content.

⚠ **`CHECK` once §4.0 lands:** this answer must be backed by the manifest. If any dependency pulls
in Play Services and `com.google.android.gms.permission.AD_ID` ends up merged into
`AndroidManifest.xml`, Play treats the app as using the advertising ID and this answer becomes
inconsistent with the binary. The fix is a one-line `tools:node="remove"` in the app manifest. Grep
the *merged* manifest, not the one you wrote.

### 1.4 Content rating — **see `PLAY-LISTING-DRAFT.md` §6c**

A questionnaire, not a choice: you answer, IARC computes a rating for every region, and you cannot
aim for a target. The two that bite are the 300 drug entries and the 1,020 clinical illustrations.
Answer honestly and take the medical/educational context wherever the form offers it.

Three more the questionnaire asks that the draft does not cover, all easy:

| question | answer |
|---|---|
| Does the app let users interact, or share content with each other? | **No.** The share button hands a URL to the OS share sheet. There is no in-app messaging, no comments, no profiles. |
| Does it share the user's physical location with other users? | **No** |
| Does it allow users to purchase digital goods? | **No** in v1. Revisit when the subscription ships. |
| Does it contain user-generated content? | **No.** Bookmarks and quiz scores are on-device and visible to nobody. |

⚠ **Read the computed rating before you submit it.** The App Store answer was 16+ on Medical/
Treatment Information; IARC may not land on an equivalent band, and the result is what appears on
the listing.

### 1.5 Target audience and content — **`YOURS`, and it has consequences**

> **Recommended: tick 18 and over, and nothing else.**

This is the form on this page most worth getting right first time. Ticking **any** band below 18
puts the app under Google Play's **Families policy**, which brings a separate content review, rules
about the store listing's imagery, restrictions on what data may be handled, and an ads regime the
app does not need. None of it fits a clinical reference with anatomical and surgical illustrations.

The audience is nursing students, medical students and clinicians in training, who are adults.
A capable 17-year-old pre-nursing student can still download it; the age band declares who it is
*designed for*, not who is permitted.

| question | answer |
|---|---|
| Target age groups | **18 and over** only |
| Could your app appeal to children? | **No.** Nothing in the listing, the icon or the screenshots is child-directed. |
| Does it have ads? | No — as §1.3 |

### 1.6 News app — **`ANSWER`**

> **No.** It is a reference and study app. Clinical Updates summarises published guidelines by
> specialty and year; it is not journalism and has no editorial staff, bylines or news feed.

### 1.7 COVID-19 contact tracing and status apps — **`ANSWER`**

> **No.** The app does no contact tracing and holds no vaccination or test status.

### 1.8 Data safety — **see `PLAY-LISTING-DRAFT.md` §6a**

Short version: **no data collected, no data shared**, and that is *measured* rather than believed —
`verify_ios_variant.js` watches every request across a full session and asserts nothing leaves the
origin.

Three answers the Console asks for that the draft does not spell out:

| question | answer |
|---|---|
| Does your app use the **Advertising ID**? | **No** — and see the manifest check in §1.3 |
| Do you collect **crash logs or diagnostics**? | **No.** There is no crash reporter and no analytics SDK. Play counts these as collected data when an SDK sends them; nothing here does. |
| Is data collection **optional** for users? | N/A — nothing is collected. |

⚠ **This form is a policy commitment, not a description.** If a future build restores the login wall
or Ask, the declaration becomes false and that is a policy violation rather than a stale document.
`preflight.sh android` is the check that keeps them in step.

### 1.9 Government apps — **`ANSWER`**

> **No.** Rounds Codex, LLC is a private company. The app is not developed for or on behalf of any
> government entity.

### 1.10 Financial features — **`ANSWER`**

> **No financial features.** No payments, no lending, no crypto, no insurance, no investment.

### 1.11 Health apps — **see `PLAY-LISTING-DRAFT.md` §6b**

**Yes, this declaration applies.** Play names *"educational resources for healthcare professionals
and patients"* as declarable, and assuming an educational reference is out of scope is exactly how a
listing collects an **"Inaccurate Health Apps Declaration"** rejection.

The compliance surface is the description: Play requires a non-medical-device health app to say in
its listing that it *"is not a medical device and does not diagnose, treat, cure, or prevent any
medical condition"* plus a reminder to consult a professional. **The App Store text does not carry
that wording.** The full description in `PLAY-LISTING-DRAFT.md` §3 has been rewritten to. Do not
trim that paragraph for space.

---

## Part 2 — Store presence

### 2.1 Main store listing — **all copy is in `PLAY-LISTING-DRAFT.md` §§1–4**

| field | where |
|---|---|
| App name (30) | §1 — `Rounds Codex: Clinical Atlas` (28) |
| Short description (80) | §2 — 77 chars, with two alternatives if you want to lead differently |
| Full description (4,000) | §3 — 2,823 chars, carrying the required health disclaimer |
| App icon 512×512 | §4 — reuse the circular mark, **no alpha channel** |
| Feature graphic 1024×500 | `native/play-graphics/feature-graphic.png` — exists |
| Phone screenshots | `native/play-screenshots/` — eight panels at exactly 1080×1920, exist |
| 7" / 10" tablet screenshots | **do not exist.** Optional. See the note at the end. |

⚠ **Do not reuse the App Store screenshots.** They are 1290×2796 = 2.17:1 and Play's maximum is
2:1; they will be rejected, and cropping to fit eats the captions.

### 2.2 Store settings — **`ANSWER`**

| field | value |
|---|---|
| App or game | **App** |
| Category | **Medical** |
| Tags | Up to 5, from Play's fixed list — there is no free-text keyword field. Pick the education/medical ones the picker offers. |
| Store listing contact — email | `teacher@roundscodex.com` *(public on the listing)* |
| Store listing contact — website | `https://roundscodex.com` |
| Store listing contact — phone | Optional. **Leave it blank.** It is published on the listing, and there is no support line to answer it. |
| External marketing | **Yes**, allow Google to promote the app outside Play. No downside; it is free placement. |

**`Medical` rather than `Education` is deliberate.** It matches the App Store listing and it is where
the audience searches. It also routes the app through the health review path — which Part 1 has
already answered, so it costs nothing.

### 2.3 Countries and regions — **`YOURS`**

> **Recommended: all countries.**

There is no regulatory reason to restrict an educational reference that makes no medical-device
claim, and no per-country obligation is created by availability. The content is US-centric —
ICD-10-CM codes, USMLE, NCLEX — but that is a relevance question, not a compliance one, and there
are US-exam candidates everywhere.

---

## Part 3 — Release  *(these need the app bundle, so they wait on §4.0)*

| | |
|---|---|
| **Play App Signing** | **Accept it.** It is the default for new apps: Google holds the app signing key, you hold an upload key. It is also where the App Links fingerprint comes from — see below. |
| **Target API level** | Play requires **36** for a new app. Capacitor 8 sets 36; Capacitor 7.4 does not. `HANDOFF-android-app.md` carries the version decision. |
| **App bundle** | `.aab`, not `.apk`. Base module **≤ 200 MB compressed** — `build_native_payload.js --platform android` refuses to build without `--asset-packs` for exactly this reason. |
| **Testing track** | **`YOURS`.** An *organisation* account is exempt from the 12-testers-for-14-days rule that binds personal accounts, so you may go straight to production. An internal test first is still worth one day: it is the only way to see the app installed from Play rather than from Xcode, and it is where the pre-launch report first runs. |
| **Pre-launch report** | Runs automatically on upload and publishes its findings **on the Console, where they cannot be edited**. `native/PRE-LAUNCH-REPORT.md` is what this session did to pre-empt it: 0 unlabelled controls, 0 low-contrast text, and the two worst tap targets fixed on 2026-09-17. |

### The App Links fingerprint — the one ordering trap

`/.well-known/assetlinks.json` must carry the SHA-256 of the key that signs what users install.
With Play App Signing that is **Google's app signing key, not your upload key** — and it does not
exist until the first bundle is uploaded.

So the order is: upload a bundle → Console → **App integrity** (the Console has also called this
Release → Setup → App signing) → copy the **app signing key certificate** SHA-256 → then

```sh
node scripts/make_assetlinks.js <fingerprint> <web-clone>/.well-known/assetlinks.json
node scripts/make_assetlinks.js --check <web-clone>/.well-known/assetlinks.json
```

The generator takes the fingerprint with or without colons, in any case, and refuses a SHA-1 by
name rather than writing a file that would never verify. It also needs a `Content-Type:
application/json` line in the app repo's `_headers`, the same way the iOS AASA does.

Publishing the upload key's fingerprint instead produces a file that verifies against nothing, and
**the failure is silent** — links simply open in Chrome rather than the app. `verify_routes.js`
checks the five places a route has to be declared; it cannot check that the fingerprint is the right
key, because both are valid SHA-256 strings.

---

## What this page cannot answer

- **Everything in Parts 1 and 2 is an answer, not a submission.** The forms live in the Console and
  only the account holder can fill them.
- **Tablet screenshots do not exist.** Optional, and an empty tablet slot on a Medical app that is
  genuinely good on a tablet is a visible gap — v138–v147 built a two-pane layout specifically for
  large screens. `shoot_play_screenshots.js` renders at a fixed 360×640 CSS; pointing it at tablet
  dimensions is a small change. Say the word.
- **The unread notifications** on the Console home have not been read from here and may contain a
  policy announcement worth knowing before you submit.
- **The offline claim in the full description is contingent on §4.3** — the asset-packs-versus-
  streaming decision. Under install-time asset packs the description's "works entirely offline" and
  "a downloadable PDF for each gallery" are both true. Under streaming they are not. Re-read that
  paragraph after that decision, not before.
