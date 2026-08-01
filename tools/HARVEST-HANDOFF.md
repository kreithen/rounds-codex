# Harvesting the 174 image URLs — why it needs a different surface, and what to run

**Status:** 174 images fired 2026-07-31 and generated. Their URLs are still unrecorded, so
nothing downstream can use them. `tools/generated-image-urls.json` holds only the 24 from the
2026-07-29 batch.

## The blocker is the surface, not a permission you can grant

The two MCP tools that map a job id to its result URL — `show_generations` and `job_display` —
are refused by the cloud/headless surface this project is normally driven from. It is **not** an
approval prompt going unanswered, and clicking "always allow" cannot fix it. Three facts, all
checked against the session transcript on 2026-08-01:

| tool | calls | result |
|---|---|---|
| `generate_image` | 175 | works |
| `balance`, `transactions`, `models_explore` | 7 | works |
| `show_medias` | 1 | works |
| `show_generations` | 10 | **refused every time** |
| `job_display` | 2 | **refused every time** |
| `sandbox_exec` | 1 | **refused** |

- The refusals return **instantly** — nothing is waiting on a human.
- **No Higgsfield tool has ever been allow-listed.** `.claude/settings.local.json` contains only
  `add_repo` and `list_repos`, and has not been written since 12:07 on 2026-08-01. Yet
  `generate_image` ran 175 times. So the working tools are not working because of a grant, and
  the failing ones are not failing for the lack of one.
- The three that fail are exactly the ones that **render a client UI widget** (`show_generations`
  = gallery widget, `job_display` = single-result widget) or **execute code** (`sandbox_exec`).
  A headless surface has nowhere to render them.

Two dead ends already ruled out:

- **The URLs are not in the transcript.** `generate_image` returned
  `{"results":[{"id":"<job>","status":"pending",...}]}` — a job id and no URL.
- **`show_medias` is the wrong collection.** It works, but returns bare-UUID filenames on
  `d2ol7oe51mr4n9.cloudfront.net`, whereas generation results live on `d8j0ntlcm91z4...` as
  `hf_<date>_<uuid>.png`. It carries no job id or prompt, so a URL cannot be traced back to a
  question.

**No deadline.** The recorded URLs are unsigned CloudFront paths with no query string — no
signature, no expiry. The 2026-07-29 batch was still addressable two days later.

## What to run, on a surface with a real client

Claude Code desktop or CLI, or claude.ai chat with the Higgsfield connector.

1. `show_generations(size=100, type="image")`, following `next_cursor` until it is null.
   174 jobs is two or three pages. **Do not use `job_display`** — that is one call per job.
2. Save each page's raw JSON. Pasting the pages into one file back to back is fine; the
   harvester pulls out each top-level value.
3. Back in this repo:

```
python3 tools/harvest_generations.py page1.json page2.json --dry-run   # look first
python3 tools/harvest_generations.py page1.json page2.json
python3 tools/image_batch_plan.py --status                             # confirm the new total
```

## What the harvester guarantees

Tested 2026-08-01 against a 174-job fixture with the pages shuffled, an unrelated generation
mixed in, three jobs failed and four absent:

- **Joins on job id, never on order.** Pages come back newest-first and interleave with other
  generations; positional matching would mislabel medical images, and an illustration attached to
  the wrong question is worse than a missing one.
- Ignores generations that are not in the job map.
- Reports a job that is present **but has no URL** as pending/failed rather than skipping it.
  Expect **8** of these: the ledger showed 174 spends and 8 refunds landing within seconds of
  their own spend, which is the signature of a moderation refusal, not a capacity failure.
- Reports which jobs were **absent from the dump**, so a short page cannot look like a complete
  harvest.
- Refuses to overwrite an existing different URL without `--force`, and leaves the 24 entries
  from the earlier batch untouched.
- Idempotent: a second run records 0 new.

## After the harvest

- `python3 tools/build_review_page.py` builds one standalone HTML for the physician to open
  locally. It cannot be an Artifact — the Artifact CSP blocks external hosts, and these are
  remote `<img>` tags.
- The container still cannot fetch the images (the proxy 403s `higgsfield.ai` and the CDN), so
  review happens in the browser, not here.
- 8 refire prompts are already staged in `tools/refire-queue.json` (16 credits), separate from
  whatever the harvest shows as failed.
