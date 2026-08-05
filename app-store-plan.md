# App Store submission — decisions and plan

Decisions taken by Dr. Kreithen 2026-08-04. This file is the record; where a decision has a
technical consequence, the consequence is written down with it, because that is the part that
gets forgotten.

---

## Monetization

| | decision |
|---|---|
| Launch | **Free**, no paywall at all |
| Later | **$5/month for everyone** — one price, no student tier, no offer codes |
| Early users | **Grandfathered permanently** — anyone who installs while it is free keeps full access |
| Entitlement | **On-device StoreKit only** — no accounts, no server, no login |

> **Superseded in part by what shipped.** A Supabase email/password login wall plus WebAuthn passkey
> unlock landed on the live app on 2026-08-04 (`ca2b024`, `239ca6b`). That is a backend and an
> account, so "no accounts, no server, no login" no longer describes the app, and the
> **"Data Not Collected" privacy label below no longer applies as written** — an email address is a
> collected identifier. The rest of this section (one price, grandfathering via
> `AppTransaction.originalAppVersion`) is unaffected; a subscription still needs no account. Worth a
> deliberate decision rather than letting the two designs drift.
>
> **Decided 2026-08-05: v1 ships with NO login.** That restores "no accounts, no server, no login"
> and the "Data Not Collected" label, removes the Guideline 5.1.1(v) rejection risk and the
> account-deletion requirement that comes with it, and un-breaks the first-run disclaimer. What
> you can still see without it is set out under "Seeing users, subscribers and money" below.

### Why one price

Apple provides **no student verification to third-party apps**. It verifies students for its own
hardware store through UNiDAYS, but that is not exposed through StoreKit. A $5 tier beside a $10
tier is therefore an honour system that nearly everyone resolves in their own favour, and a real
student rate needs a paid verification vendor plus offer-code redemption. One flat $5 removes the
vendor, the second SKU, the redemption UI and the enforcement question. If a student rate is ever
wanted, the supported route is **offer codes** (custom like `STUDENT26`, or one-time 18-digit
codes) redeemed in-app via `offerCodeRedemption` — not a second price tier.

### Grandfathering: use `AppTransaction.originalAppVersion`, not a local flag

The obvious implementation — write a "first launch" date to local storage and honour it — fails
on reinstall, fails on a new device, and is trivially editable. StoreKit already answers this:
**`AppTransaction.originalAppVersion`** reports the app version the user *originally* downloaded,
from their Apple ID purchase history. Grant permanent entitlement when it is below the version
that introduced the paywall.

This survives reinstalls and device changes, needs no backend, and cannot be spoofed from inside
the app. Confirm the exact API shape against current StoreKit docs at build time — this is
recorded as the approach, not as verified code.

### Consequence for the privacy label

On-device-only entitlement is what keeps the App Store privacy label at **"Data Not Collected"**.
The app has no analytics, no accounts, and transmits nothing; `RC_STORE` and `NCLEX_STORE` are
`localStorage` and never leave the device, which is not "collection" under Apple's definition.
That label is a genuine differentiator for a medical app and should not be given up casually —
adding a backend later costs it.

**A subscription does not by itself require an account.** StoreKit ties it to the Apple ID, so it
already works across that person's iPhone and iPad. A backend is only needed to unlock the
*website* with the same subscription, or to collect usage data. Neither is currently wanted.

---

## Seeing users, subscribers and money — with no login

Decided 2026-08-05: **v1 ships with no account.** The question that follows is what you can still
see. Answer: everything commercially useful, and none of it needs a login, an SDK or a line of code
in the app. What you give up is knowing *who* anyone is — which for a medical study app is a
feature.

Nothing in this section changes the **"Data Not Collected"** privacy label. All of it is Apple
reporting on its own infrastructure, not the app reporting on the user.

### The three places the data lives

**1. App Store Connect → Analytics ("App Analytics") — the audience**

Impressions, product page views, conversion rate, first-time downloads, redownloads, total
downloads, installs, deletions, sessions, active devices, active in the last 30 days, crashes, and
**retention curves by download cohort** (day 1 / 7 / 28). Each of those breaks down by
**territory, device, app version, OS version and source** — App Store Search vs Browse vs Web
Referrer vs App Referrer, so you can see whether installs came from search or from a link someone
shared.

**The one caveat that matters:** usage metrics — sessions, active devices, retention — are computed
only from users who agreed to share diagnostics and usage data with developers. It is a subset, and
Apple does not gross it up. So treat *engagement* numbers as directional and trust *relative*
movement between weeks more than the absolute figure. Downloads and money are complete counts, not
samples.

**2. Sales and Trends → Subscriptions — the subscribers** (once the paywall lands)

Purpose-built for exactly this, no server required: active subscribers, new subscribers,
cancellations, billing retry, grace period, refunds, upgrades and downgrades, **churn**, and
**retention by subscriber cohort** — how many of January's subscribers are still paying in June.
The **Subscription Events** report gives the same as a downloadable row-per-event CSV if you want it
in a spreadsheet.

**3. Payments and Financial Reports — the actual money**

What Apple actually paid you, monthly, by region and currency, with tax withheld and Apple's
commission broken out. These are the numbers for the accountant. Sales and Trends is the near
real-time estimate; this is the settled figure. They will not match exactly and are not meant to.

All three are also in the **App Store Connect app** on your phone.

### What Apple will never give you

**Age and gender do not exist in App Store Connect.** There is no such report, with or without a
login. The only "demographic" Apple reports is **territory** — country and region — plus device
class, which is a rough income proxy and nothing more.

So Apple cannot tell you the thing you most want to know: **is this a nursing-student app or a
med-student app?** That gap is not caused by having no login. A login would not fill it either
unless you asked the question at sign-up, which is a different decision.

### How to get the demographics anyway, without collecting anything

Three routes, cheapest first.

**A one-tap link out to a web survey.** Put "Help us make this better — 60 seconds" in the About
page, opening a hosted form in Safari. The app collects nothing; it opens a URL. Nothing to declare,
label untouched. Respondents self-select and skew engaged, so treat it as a mix estimate rather
than a census — but for "what fraction are nursing students", a few hundred honest answers settles
it. This is the recommended route.

**Custom Product Pages, which measure the mix as a side effect.** App Store Connect allows up to
35 alternate product pages, each with its own screenshots, its own URL, and **its own conversion
metrics**. Build one aimed at nursing students and one at med students, put each link where that
audience already is, and the conversion rates tell you which pitch lands — while the download
totals tell you the mix. Free, and it doubles as marketing.

**The website's own analytics.** `rounds-codex.netlify.app` is a separate audience from the app,
and Netlify's server-log analytics is a paid add-on that needs no cookies and no JavaScript, so it
does not touch the app's privacy label at all. It answers "which conditions do people actually read"
in a way the app deliberately cannot.

### The one real trade-off, stated plainly

You will not know **which features people use**. Not how many opened a gallery, not which quizzes
get abandoned, not whether the spaced-review queue is touched after week one. Apple gives you
sessions and retention; it cannot give you in-app behaviour, because nothing in the app is watching.

The tool that would answer it — a privacy-focused analytics SDK, or RevenueCat for subscriptions —
is genuinely good, and RevenueCat in particular is free below a revenue threshold and would give
much richer subscription analytics than Sales and Trends. **But any of them ends "Data Not
Collected."** Even a well-behaved one declares Usage Data or an anonymous identifier, and the label
becomes a list instead of two words.

For a medical app sold to students, that label is worth more than the funnel data — and it is a
one-way door in practice, because adding it later is a version note that says the app started
collecting something. **Recommendation: ship with nothing, run the survey, and revisit only if a
specific decision is blocked on behaviour data you cannot get any other way.**

### What to do at launch

- [ ] Turn on **App Store Connect notifications** for the milestones you'd otherwise check daily
- [ ] Baseline the free period: downloads, day-7 and day-28 retention, and territory mix. This is
      what tells you whether $5/month is right — a paid conversion target is meaningless without it
- [ ] Stand up the survey form and link it from About
- [ ] Build two Custom Product Pages before any marketing push, not after

---

## Download size — the first engineering problem

Measured on the live tree, 2026-08-04, at 90 galleries:

| | size |
|---|---:|
| Gallery page images (900) | 392 MB |
| Gallery download PDFs (90) | 145 MB |
| Thumbnails | 40 MB |
| USMLE module (197 illustrations + 43 banks) | 28 MB |
| Code, content, fonts | 9 MB |
| **total** | **740 MB** |

At the planned 101 galleries that is roughly 830 MB. Apple will not reject for size, but it is a
bad download for a study app and it is the largest single lever available.

### Result, measured 2026-08-04

**767 MB → 383 MB** (50%, saved 385 MB). 1,917 images converted, 458 → 256 MB (56% of JPEG).
Verified by serving the bundle and running both suites against it: all 197 USMLE illustrations
resolve and render, and the gallery chain works in both directions. Zero page errors.

Two bugs in the builder were found by inspecting its output rather than re-reading the code, and
both are worth remembering because the same shape will recur:

- It converted `usmle/img/*.jpg` but left `illus-real.js` naming them `.jpg` — **197 broken
  illustrations**. A manifest and its bytes have to move together.
- Conversion was driven by a hardcoded directory list, which does not know that 21 galleries
  predate the `assets/<id>/` convention and keep their pages at the **site root**, with five more
  under `<id>-upload/`. That blind spot was 87 MB. It is now driven off the paths
  `galleries.json` actually references.

**Still not small enough.** 383 MB is a better download than 767 but not a comfortable one. The
next lever is on-demand gallery packs: bundle core plus thumbnails (~80 MB) and fetch full pages
per category, which keeps the offline story once downloaded.

`scripts/build_app_bundle.py` addresses it as a **build**, leaving the website alone:

1. **WebP q82** for gallery pages, thumbnails and USMLE illustrations. Measured across a
   stratified sample of the real set at **52% of JPEG**. Quality was checked, not assumed: at 3x
   magnification the smallest type on a gallery page — the CLINICAL SOURCE citation line — is
   indistinguishable from the shipping JPEG. q75 reaches 42% but softens the thinnest strokes,
   which is not a trade worth making on a citation.
2. **Exclude the 90 gallery PDFs.** 145 MB, a fifth of the download, for a button most users
   never press. **Consequence: the app shell must resolve `pdf` against the public origin**, the
   way `RC_SHARE_ORIGIN` already works for share links — otherwise the download button breaks in
   the app.
3. **Drop `robots.txt`.** It exists to hide the pre-launch website and means nothing in a package.

Page dimensions are deliberately unchanged. 1024x1536 is the standard and the viewer zooms to 4x;
lowering resolution would be visible where re-encoding is not.

---

## Guideline 4.2 — "repackaged website"

The rejection risk for a webview around an existing site. What already answers it:

- **Full offline content** — the whole bundle ships in the package
- **Persistence** — `RC_STORE` and `NCLEX_STORE` are live (this was §3.3 of `native-app-plan.md`
  and is now done; that document's "Storage: None" row is stale)
- **Self-hosted fonts** — six `@font-face` rules, zero external requests, verified

Still missing, in order of review-signal per hour:

- [ ] **Core Spotlight indexing** — the 181 conditions become iOS system search results. About an
      afternoon and the strongest single "not a website" signal.
- [ ] **Universal Links** — a shared `/c/<id>` opens the app when installed. `/c/`, `/s/`, `/g/`,
      `/r/`, `/u/`, `/x/` are already one short stable namespace, chosen partly for this.
- [ ] **Save gallery PDFs to Files** — real document handling, and it pairs with fetching the PDFs
      from the origin rather than bundling them.
- [ ] **Local notifications** for study reminders
- [ ] **Haptics** on quiz answers

**Guideline 2.5.2**: the binary must be self-contained. Content *data* updates (new conditions as
JSON) are defensible; shipping new executable JS at runtime is not. The service worker registers
only on `http(s)`, so it is inert in the shell — that is deliberate.

---

## Guideline 1.4.1 — medical content

The existing posture already satisfies the hard parts and must not regress:

- practice scores only — **never a predicted USMLE/NCLEX score or pass probability**
- areas with fewer than 3 items are shown but never drive recommendations
- no fabricated strengths
- `RC VERIFIED` reserved for reviewed content

Still to add: a visible "for education, not a substitute for clinical judgement" line and a sources
screen.

> **The first-run disclaimer is currently NOT SHOWN.** The Supabase login wall added on 2026-08-04
> declares its overlay as `id="rc-gate"` — the id the disclaimer already used — so
> `rcTermsGate()`'s duplicate guard fires on every visit and the gate is never built. Measured both
> ways; renaming the wall's id restores it. Details and the exact fix in
> `LOGIN-WALL-id-collision.md`. **This is the highest-priority item on this page**, because it is
> what the paragraph above was relying on.

### The real blocker, stated plainly

**No independent medical re-read has been done.** 1,820 quiz questions authored and self-checked,
197 generated clinical images, 470 guideline entries, 181 condition texts.

Charging money changes what this is. Free educational content with a visible disclaimer is one
thing; a $5/month subscription sold to medical students is a product with a duty of care. And the
evidence that structural checks are not enough is on the record — in one evening the checks passed
a femoral-neck fracture image that was the mirror of its own vignette, and three images with the
diagnosis printed on them.

This should gate the **paid** launch even if it does not gate the free one.

---

## Launch checklist

- [ ] Delete `robots.txt` and the `X-Robots-Tag: noindex` block in `_headers` — both deliberate
      now, and they would keep the site invisible to search forever
- [ ] Netlify failed-deploy email (nothing alerted for 16 hours on 2026-07-30)
- [ ] Copyright registration — guide written at `legal/Rounds-Codex-Copyright-Registration-Guide.pdf`
- [ ] **Free USPTO trademark search on ROUNDS CODEX** — `legal/trademark-plan.md`. Do this one
      before the listing goes public: it is the only item here that could still change the name,
      and the name is burned into 950 illustration footers.
- [ ] Trademark application, standard character mark, filing basis 1(b) intent-to-use
- [ ] Run `scripts/backup-rounds-codex.command` and test one restore
- [ ] Four one-line content fixes: `bipolar` page 5 title, `schizophrenia` 7/9 and `anxiety` 7/8
      near-duplicate titles, `schizophrenia` page 1 citation year
- [ ] `DOTS-defect-for-production.md` to the artwork vendor
- [ ] The gallery viewer's own PDF button is still a `toast()` stub, unlike the working one on the
      gallery page
- [ ] **Restore the first-run disclaimer** — `LOGIN-WALL-id-collision.md`. Blocks nothing
      technically and everything legally.
- [ ] Decide whether the Supabase login wall stays. If it does, the privacy label changes and the
      "no accounts" line above needs rewriting; if it goes, the disclaimer collision goes with it.
