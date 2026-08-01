# Building the illustration PDF inside the Higgsfield sandbox

`sandbox_exec` is the only place that can reach the generated images. Proven 2026-08-01.

## Why here and not in the Rounds Codex session

| where | can fetch a generation URL? |
|---|---|
| Rounds Codex container (curl) | no — agent proxy: `CONNECT tunnel failed, response 403` |
| WebFetch (via Anthropic, no proxy) | no — **CloudFront's own 403**; the objects are not public |
| **Higgsfield `sandbox_exec`** | **yes — HTTP 200, 8.2 MB, 2400x1792** |

So the bytes exist and are reachable, but only from inside Higgsfield's own environment.
The sandbox therefore downloads, downsizes, and builds the PDF; the session only supplies
the data and reads the result.

## The pipeline, as proven on a 5-image pilot

1. Compress the per-question data here and paste it in as one base64 blob:
   `{q, t (title), x (system), s (image-should-show), l (lead), a (answer), u (url tail)}`.
   190 rows is 76 KB raw, **31.7 KB gzip+base64** — over the 16,000-character command
   limit, so the full run needs it split across back-to-back calls. The 5-row pilot is
   1,464 characters.
2. `pip install -q reportlab`, write `mkpdf.py`, run it. It curls each image, downsizes to
   1100px, and lays out one page per image: picture left, question right.
3. `media_upload` BEFORE the build call to get a presigned PUT URL, then `curl -f -X PUT`
   in the same call — the sandbox is reclaimed seconds after a call returns.
4. `media_confirm` with `type: "file"`.

Pilot result: `PAGES 5 FAILED 0 [] BYTES 961585`, `PUT http=200`, confirmed `uploaded`.

## The open problem: delivery

The returned "permanent" URL is on `d2ol7oe51mr4n9.cloudfront.net` and is **also 403** to
anything unauthenticated — verified. So the PDF can be built but not handed over by link
alone. Either the physician opens it from a logged-in Higgsfield session, or the images get
downloaded from the gallery and `tools/build_illustration_pdf.py` runs locally instead.

Base64-ing the PDF back through stdout does not scale: the sandbox truncates stdout at
roughly 100 KB, which is about one 800px image per call.

## Traps

- **Never retype the base64 payload.** The first attempt failed with
  `zlib.error: invalid literal/lengths set` because the blob was reproduced by hand instead
  of read from the file. Generate the command with a script.
- Reconstructing a URL from a guessed timestamp fails — `hf_<date>_<time>_<uuid>.png`
  timestamps are not derivable. Use the harvested tail verbatim.
