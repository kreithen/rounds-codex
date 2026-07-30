# landing/ — Rounds Codex "coming soon" landing page

Single-page marketing site for **roundscodex.com**, built in ChatGPT's site builder and
transferred here so it's version-controlled and portable off the ChatGPT host.

- `index.html` — the whole page. Inline CSS + JS, no external scripts, no font/CDN dependencies
  (falls back to the system sans stack; Inter is named but not loaded).
- `assets/` — 17 `.webp` images. `favicon.svg` sits at the folder root (that's the path the page
  references). All present and verified (18/18 decode, 0 page errors).

Fully self-contained — nothing loads from the ChatGPT host anymore.

## What was changed on transfer
The original hard-coded every asset URL to
`https://rounds-codex-coming-soon.jkreithen.chatgpt.site/…`. Those were rewritten to
**relative `assets/…` paths** so the page works on any host, and the social-share
`og:image` / `twitter:image` were pointed at the canonical `https://www.roundscodex.com/…`
(social scrapers require absolute URLs). Nothing else was altered.

## Asset manifest
All supplied (from the ChatGPT site-builder export zip) and verified:

| File | Used for |
|---|---|
| `rounds-codex-logo.webp` | header brand + coming-soon logo |
| `rounds-codex-clinical-hero.webp` | hero image (also the OG share image) |
| `condition-guide.webp` | phone — clinical guides |
| `app-library.webp` | phone — medical library |
| `gallery-detail.webp` | phone — image galleries |
| `nursing-approach.webp` | learner card — Nursing |
| `usmle-builder.webp` | learner card — Medical students |
| `resident-mode.webp` | learner card — Residents |
| `medical-illustration.webp` | bento — gallery (back) |
| `gallery-board.webp` | bento — gallery (front) |
| `pharmacology.webp` | bento — Rx |
| `usmle-question.webp` | bento — exam |
| `nclex-practice.webp` | bento — exam |
| `performance-analytics.webp` | bento — analytics |
| `clinical-team.webp` | bento — OR/peri-op (wide) |
| `periop-guide.webp` | bento — OR/peri-op (phone) |
| `learning-on-wards.webp` | visual break |
| `favicon.svg` | browser tab icon |

## Verify locally
```
node scripts/netlifysim.js landing 8899   # serve
# open http://localhost:8899/
```
Headless render is clean (0 page errors); the 18 assets 404 until supplied.
