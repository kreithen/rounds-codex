# Higgsfield image run, 2026-07-31 — all 174 remaining USMLE illustrations

**Status: all 174 jobs submitted. URLs NOT yet harvested.**

Together with the 24-image pilot already in `generated-image-urls.json`, this covers
all **198 eligible** items in `image-manifest.json`. (32 ECGs and the genetics pedigree
stay excluded on purpose — the app's vector versions are better.)

| | |
|---|---|
| jobs fired | 174 (44 Step 1, 79 Step 2 CK, 51 Step 3) |
| model requested | `nano_banana_pro` — the server silently substitutes `nano_banana_2`, as always |
| resolution | `2k` (same price as 1k, so never ask for 1k) |
| aspect ratio | per modality, from `image_batch_plan.aspect()` — 2:3 portrait, 1:1 square, else 4:3 |
| cost | 2 credits each, ~348 total; balance went 3000 → 2666 with the last few still settling |
| duplicates | none — 174 unique question ids, zero overlap with the pilot 24 |

## Files

* **`higgsfield-jobs-0731.json`** — `{job_id: question_id}` for all 174. This is the run.
  It was committed after every batch of twelve precisely so the run survives losing the
  container, which is the normal end of a long session.
* **`higgsfield-remaining-0731.json`** — now `[]`. Non-empty means a batch did not finish.
* **`generated-image-urls.json`** — the harvested output. Still just the 24 pilot entries.

## Already done without the images: the prompt audit

`ILLUSTRATIONS-audit.md` checks every one of the 198 prompts against the bank item it
was written for — the failure the physician cannot catch by looking, because the render
may be a faithful picture of the wrong thing. 11 findings, no blockers, plus 24
redundancy clusters where one approved image can be registered against several question
ids. Read it before building the review page; it decides which items need a second look
and which do not need reviewing at all.

## What is left: the harvest

The images are finished and sitting in Dr. Kreithen's Higgsfield gallery. Getting their
URLs into this repo needs `show_generations`, which returned

    MCP error -32003: MCP tool call requires approval

for the whole run, and the Higgsfield MCP server has since dropped out of the session
entirely. Neither is a problem with the generation — nothing was lost, and nothing needs
re-generating.

To finish, in a session where the Higgsfield connector is live and approved:

1. `show_generations` — page through and collect `{id, url}` for each job.
2. For each, `python3 tools/image_batch_plan.py --record <question_id> <url>`, mapping
   job_id → question_id through `higgsfield-jobs-0731.json`.
3. `python3 tools/build_review_page.py` — writes ONE standalone HTML with remote `<img>`
   tags for the physician to open locally. It **cannot** be an Artifact: the Artifact CSP
   blocks external hosts, and this container cannot fetch the Higgsfield CDN either (the
   proxy 403s it), so nobody here can see the images. Review happens on the user's machine.
4. Physician gate, then `tools/incorporate_images.py`.

## Two traps worth keeping

* **Nothing generated is visible from this container.** The proxy 403s `higgsfield.ai` and
  the result CDN. Do not write a verification step that fetches an image — it will fail for
  a reason that has nothing to do with the image.
* **A connector can read `connected: true` while `enabledInChat: false`.** Check
  `ListConnectors` before concluding the integration is broken; re-authorising the account
  does not fix a per-chat toggle.
