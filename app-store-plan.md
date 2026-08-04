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

Still to add: a visible "for education, not a substitute for clinical judgement" line (the
`#rc-gate` disclaimer covers first run; the App Store listing needs its own) and a sources screen.

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
- [ ] Run `scripts/backup-rounds-codex.command` and test one restore
- [ ] Four one-line content fixes: `bipolar` page 5 title, `schizophrenia` 7/9 and `anxiety` 7/8
      near-duplicate titles, `schizophrenia` page 1 citation year
- [ ] `DOTS-defect-for-production.md` to the artwork vendor
- [ ] The gallery viewer's own PDF button is still a `toast()` stub, unlike the working one on the
      gallery page
