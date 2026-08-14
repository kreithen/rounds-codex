# Store strategy — release cadence, monetization gates, and Android

> ## ⚠ SUPERSEDED for the App Store — read `app-store-checklist.md` first (2026-08-14)
>
> This file was written for a **no-account v1**, a decision reversed on 2026-08-08 when the login
> wall came back (v82) and re-settled on 2026-08-14: **the wall stays on the web and is stripped
> from the iOS build.** Every content count below is also stale — it is 183 conditions, 102
> galleries, 1,020 pages and 1,840 quiz questions now.
>
> `app-store-checklist.md` is the current, single checklist.
>
> **This file is still the authority on**: what needs Apple's review after the first release and
> what does not, the bundle-*and*-fetch architecture, and **Android**, which appears nowhere else.


Written 2026-08-09, answering three questions from Dr. Kreithen. Sits alongside `app-store-plan.md`,
which holds the **decisions** (one price, grandfathering, privacy label, size, Guidelines 4.2 and
1.4.1) and `app-store-submission-draft.md`, which holds the **field-by-field submission text**.

This file covers what those two do not: **what needs Apple's approval and what does not**, the
consequences of dropping the login wall for iOS, and **Android, which appears nowhere in any
existing document.**

> **Policy specifics drift and my knowledge has a cutoff.** The architecture and the strategy below
> are stable; the *numbers* — review times, tester counts, fees, exact guideline numbering — must be
> checked against the current Apple and Google developer documentation before anything is scheduled
> around them. Every such number is marked **[verify]**.

---

## 1. What needs approval after the first release

### Needs review

| change | notes |
|---|---|
| **Any binary update** | Usually hours to a day **[verify]**, never zero, and a rejection resets the clock. Budget for one rejection on anything structural. |
| **Adding the subscription** | Twice over: the binary containing StoreKit, *and* the in-app purchase products, which are reviewed as separate items in App Store Connect. First-time IAP submissions get more scrutiny than a routine update — expect questions about exactly what sits behind the paywall. |
| **Metadata** — description, screenshots, keywords | Reviewed, but no binary needed, so it is a much lighter loop. |

### Does not need review

| change | notes |
|---|---|
| **Price changes** on an existing product | Raising the price for *existing* subscribers has its own consent and notification rules **[verify]**; the review queue is not involved either way. |
| **Server-side content** | See below. This is the one that matters most here. |

### The architectural decision that follows — bundle *and* fetch

Content already lives in `content/*.json` and is fetched at boot; `index.html` is code only. That
gives a choice the plan has not yet recorded:

- **Fetch content from the server** → every new condition, quiz, gallery and guideline update ships
  **instantly, with no review at all.** Only code changes need Apple.
- **Bundle content in the app** → works offline, and materially helps against **Guideline 4.2
  ("repackaged website")**, which `app-store-plan.md` already identifies as the main rejection risk.

**Do both.** Bundle a baseline at build time so the app is complete and useful on first launch with
no network, and fetch updates over the network so content is not hostage to the review queue. The
service worker already does exactly this shape of thing for the web — `CORE` precaches the seven
content files and the app updates them on the next load.

**The hard line:** Apple permits downloading *data and content* freely, and prohibits downloading
*executable code* that changes what the app does. New JSON is fine. New JavaScript that adds a
feature is not. Keep the update channel to content only.

---

## 2. Removing the login wall for the iOS submission

**The right call, and it deletes four of the five problems** the wall created (recorded in the
banner on `app-store-submission-draft.md`):

| problem the wall created | with no wall |
|---|---|
| Privacy label no longer "Data Not Collected" | **Returns to "Data Not Collected"** — the differentiator `app-store-plan.md` §"Consequence for the privacy label" calls out |
| Guideline 5.1.1(v) requires in-app account deletion | **Does not apply** — no account creation, no requirement |
| Guideline 2.1 requires a working demo account | **Not needed** |
| A sign-in wall in front of a study app | Gone — it is a known rejection trigger in its own right |

`app-store-plan.md` already established the load-bearing fact: **a subscription does not require an
account.** StoreKit ties entitlement to the Apple ID, and grandfathering runs off
`AppTransaction.originalAppVersion`.

**Still required with no account: a Restore Purchases control** (Guideline 3.1.1 **[verify]**). Any
paid app must let a user re-establish entitlement on a new device. That is a build item and it is
not in any current checklist.

### Two consequences to decide deliberately

**Web and iOS become different products.** Invitation-only on the web, open on iOS, is perfectly
defensible — but the privacy copy then differs per platform, and `AppTransaction.originalAppVersion`
grandfathers **App Store installs only**. Web users who were there from the beginning are not
covered by it. If early web users are meant to be grandfathered too, that needs its own mechanism
and it does not exist today.

**Account deletion becomes a web-only concern.** If iOS has no accounts, Apple never asks for
deletion. The edge function at `supabase/functions/delete-account/` is still worth deploying for the
web while the wall is there — good practice, and the kind of thing a privacy policy should be able
to promise — but it stops being a submission blocker. Its priority drops accordingly.

---

## 3. Android — absent from every existing document

**Structurally easier than iOS, because the app is already a PWA with a service worker.**

### The route: a Trusted Web Activity

A TWA is a thin native wrapper around the live site, generated with Google's **Bubblewrap** tool and
accepted on Play. It stays in sync with the deployed site automatically, so most updates need no
Play release at all — the same review-free content story as §1, but extending to code as well.

That is a genuine advantage over iOS and also the main risk: a TWA is close to what Play's own
policies describe as a webview wrapper, so the app must be demonstrably app-like — offline support,
home-screen identity, no browser chrome. The service worker already provides the first.

### Three things to plan around

**1. Developer account type is the decision to get right at signup.** Personal accounts registered
in recent years must run a closed test with a group of testers for a continuous period before
production access is granted; **organisation accounts are exempt** **[verify — the tester count and
duration have both changed since introduction]**. Registering as a business rather than an
individual skips the requirement entirely, and changing account type afterwards is painful. **This
is the single biggest Android timeline risk and it costs nothing to avoid.**

**2. Fees and billing.** Play is **$25 one-time** against Apple's **$99/year** **[verify]**. Google
Play Billing is mandatory for digital subscriptions, so the $5/month decision carries over but the
implementation does not — StoreKit and Play Billing are separate integrations, and
`AppTransaction.originalAppVersion` has no Play equivalent. **Grandfathering on Android needs its
own design.**

**3. Health apps carry extra declarations** — a health-app declaration plus the Data Safety form,
Google's rougher equivalent of Apple's privacy label **[verify]**. The Guideline 1.4.1 reasoning in
`app-store-plan.md` largely transfers: this is an educational reference for clinicians and students,
not a diagnostic tool, and the medical disclaimer gates first use.

### The option that needs no store at all

**Android users can install the PWA from Chrome today.** Full-screen, home-screen icon, offline via
the existing service worker, no review, no developer account, no fee. If Android reach matters
before an app-store presence exists, this is available the moment the site is public — and it costs
an install prompt, not a project.

Worth noting it cuts the other way too: the same is *not* true on iOS, where PWA install is more
limited and less discoverable, which is much of why the App Store matters more there.

---

## Suggested sequencing

1. **Web launch 17 Aug** — see `LAUNCH-AUG17.md`. Nothing here blocks it.
2. **iOS submission** — drop the wall, add Restore Purchases, decide bundle-vs-fetch, submit **free**.
   Get approved before money is involved; a first submission and a first IAP submission are two
   different kinds of scrutiny and there is no reason to take both at once.
3. **Android PWA** — free, immediate, no gatekeeper. Do it as soon as the site is public.
4. **Subscription** — one binary update plus IAP products, on iOS first since the grandfathering
   design already exists there.
5. **Android TWA** — only once the free iOS app has been through review, so the 4.2-style
   "is it app-like enough" argument has already been won once and can be reused.

## Open questions this raises that nobody has answered

- **Are early *web* users grandfathered?** `AppTransaction.originalAppVersion` cannot see them.
- **Does the web keep the login wall after iOS drops it?** Two products, two privacy statements.
- **Bundle, fetch, or both** — and if bundling, what does that do to the 250 MB target that
  `app-store-plan.md` measured down to 383 MB?
