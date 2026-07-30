# SEO for roundscodex.com

What's implemented on the landing page and how to keep it healthy. The page is a single-URL
"coming soon" site, so the SEO job is: rank for the brand + a tight set of category terms, and
render a perfect link preview everywhere it's shared.

## Target keywords

**Primary (in title, H1/H2 area, description, structured data):**
- medical education app
- visual medical education
- nursing student study app / NCLEX practice
- USMLE practice / medical student study app
- resident medical reference

**Secondary (woven into copy, alt text, feature list, JSON-LD `featureList`):**
- clinical condition library, disease guides
- pharmacology / drug reference
- medical image galleries / atlas
- peri-operative / operating room guide
- NGN-style NCLEX-RN, blueprint-weighted USMLE

**Brand:** "Rounds Codex" — front of `<title>`, `og:site_name`, Organization schema.

Keyword *stuffing* is avoided on purpose: Google ranks the copy you see. The real signals here
are the honest feature descriptions, the image `alt` text (every image is described), and the
structured data — not the legacy `<meta name="keywords">` tag (Google ignores it; kept only
because it's harmless and other engines occasionally read it).

## What's in `index.html`

| Signal | Status |
|---|---|
| `<title>` (brand + category, ~80 chars) | ✅ |
| Meta description (~155 chars, keyword-forward) | ✅ |
| Canonical → `https://roundscodex.com/` | ✅ |
| `robots`: `index, follow, max-image-preview:large, max-snippet:-1` | ✅ |
| Open Graph (title/desc/url/type/locale/image + dimensions/alt) | ✅ |
| Twitter `summary_large_image` card | ✅ |
| **Landscape share image** `assets/og-cover.jpg` (1200×630, JPEG) | ✅ |
| SVG favicon + 180×180 `apple-touch-icon.png` | ✅ |
| JSON-LD `@graph`: Organization + WebSite + WebPage + SoftwareApplication | ✅ |
| Semantic HTML (`<header> <main> <section> <footer>`, one `<h1>`) | ✅ |
| Descriptive `alt` on every content image | ✅ |
| Mobile viewport + responsive down to 470px | ✅ |
| `prefers-reduced-motion` respected | ✅ |
| `robots.txt` + `sitemap.xml` (apex) | ✅ |
| Self-hosted, zero external requests (fast LCP, no CDN/font round-trips) | ✅ |
| HTTPS + HSTS + security headers (see `netlify.toml`) | ✅ |

**Why a separate `og:image`.** Link-preview scrapers (Facebook, LinkedIn, iMessage, Slack)
want a ~1.91:1 landscape image and several don't render WebP. The hero photo is a portrait
WebP, so a dedicated 1200×630 JPEG card (`og-cover.jpg`) is used for sharing while the page
itself keeps the optimized WebP images.

## Regenerating the share card

If the hero image or the headline changes, rebuild `assets/og-cover.jpg` so previews match.
The card is composed from `assets/rounds-codex-logo.webp` + `assets/rounds-codex-clinical-hero.webp`
and screenshotted at 1200×630 with headless Chromium. The generator template + script are in
this repo's history (commit that added `SEO.md`); re-run it, or ask Claude to regenerate.

## Verify after deploy (paste the live URL)

- **Google Rich Results Test** — https://search.google.com/test/rich-results (structured data)
- **PageSpeed Insights** — https://pagespeed.web.dev/ (Core Web Vitals; aim for all-green)
- **Facebook Sharing Debugger** — https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector** — https://www.linkedin.com/post-inspector/
- **opengraph.xyz** — quick all-platform preview
- **Google Search Console** — add the property, submit the sitemap (see `DEPLOY.md` §5)

## Room to grow (optional, when there's more than one page)
- A short **FAQ section** with `FAQPage` schema ("Is Rounds Codex free?", "What exams does it
  cover?") earns rich snippets and adds honest keyword coverage.
- A **blog / condition previews** would turn this into a multi-page site that can rank for
  long-tail clinical queries — each condition guide is a potential landing page.
- An **email capture** on the coming-soon section converts the traffic SEO brings in.
