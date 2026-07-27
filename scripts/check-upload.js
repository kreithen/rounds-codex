/* Rounds Codex — post-upload verifier.
 *
 * Open https://rounds-codex.netlify.app in Chrome, press F12 (or Cmd-Option-I),
 * click the Console tab, paste this whole file in, press Enter. Takes about a minute.
 *
 * It reads the app's own gallery data and requests every file that data points at —
 * every thumbnail and every full-size page — then names anything that is missing.
 * It only reads; it changes nothing.
 */
(async () => {
  const EXPECT_GALLERIES = 39;
  const EXPECT_IMAGES = 390;
  const log = (...a) => console.log('%c[check]', 'color:#00c2ff;font-weight:bold', ...a);

  if (typeof GALLERIES === 'undefined') {
    console.error('GALLERIES is not defined — are you on rounds-codex.netlify.app with the app loaded?');
    return;
  }

  // ---- 1. is this the new index.html? -------------------------------------------------------
  const ids = Object.keys(GALLERIES).filter(id => REALGAL.has(id) && byId[id]);
  const nImages = ids.reduce((n, id) => n + GALLERIES[id].images.length, 0);
  log(`index.html reports ${ids.length} galleries and ${nImages} images`);
  if (ids.length !== EXPECT_GALLERIES || nImages !== EXPECT_IMAGES) {
    console.warn(`  expected ${EXPECT_GALLERIES} / ${EXPECT_IMAGES} — if this is lower, index.html did not upload`);
  }
  const NEW = ['hyperparathyroid', 'pud', 'gerd', 'gi-bleed', 'di'];
  const missingEntries = NEW.filter(id => !ids.includes(id));
  log('the five new galleries present in index.html:',
      missingEntries.length ? 'MISSING ' + missingEntries.join(', ') : 'all five');

  // ---- 2. build the full expected file list -------------------------------------------------
  const want = [];
  for (const id of ids) {
    const g = GALLERIES[id];
    g.images.forEach(im => {
      want.push({ id, kind: 'thumb', url: g.base + im.thumb });
      want.push({ id, kind: 'page', url: g.base + im.file });
    });
  }
  log(`checking ${want.length} files…`);

  // ---- 3. request them, 20 at a time --------------------------------------------------------
  const missing = [];
  let done = 0;
  const queue = want.slice();
  await Promise.all(Array.from({ length: 20 }, async () => {
    while (queue.length) {
      const it = queue.shift();
      try {
        const r = await fetch(it.url, { method: 'HEAD', cache: 'no-store' });
        if (!r.ok) missing.push({ ...it, status: r.status });
      } catch (e) {
        missing.push({ ...it, status: 'network error' });
      }
      if (++done % 100 === 0) log(`  ${done}/${want.length}`);
    }
  }));

  // ---- 4. report ----------------------------------------------------------------------------
  console.log('%c\n================ RESULT ================', 'font-weight:bold');
  if (!missing.length) {
    console.log('%cAll ' + want.length + ' files are live. Nothing missing.', 'color:#0a0;font-weight:bold');
  } else {
    console.log('%c' + missing.length + ' of ' + want.length + ' files are MISSING:', 'color:#c00;font-weight:bold');
    const byGallery = {};
    missing.forEach(m => (byGallery[m.id] = byGallery[m.id] || []).push(m));
    for (const id of Object.keys(byGallery).sort()) {
      const rows = byGallery[id];
      const thumbs = rows.filter(r => r.kind === 'thumb').length;
      const pages = rows.filter(r => r.kind === 'page').length;
      console.log(`  ${id}: ${thumbs} thumbnail(s), ${pages} page(s) — e.g. ${rows[0].url} → ${rows[0].status}`);
    }
    console.table(missing.map(m => ({ gallery: m.id, kind: m.kind, url: m.url, status: m.status })));
    console.log('%cA whole gallery missing usually means that folder nested a level too deep.',
                'color:#c60');
    console.log('%cScattered single files usually means one drag ran out of GitHub\'s ~100-file limit.',
                'color:#c60');
  }

  // ---- 5. the optional PDFs, expected absent ------------------------------------------------
  const pdfs = await Promise.all(NEW.map(async id => {
    try { return { id, ok: (await fetch(GALLERIES[id].pdf, { method: 'HEAD' })).ok }; }
    catch { return { id, ok: false }; }
  }));
  const up = pdfs.filter(p => p.ok).map(p => p.id);
  console.log(`\ngallery PDFs (the optional zip): ${up.length ? 'uploaded — ' + up.join(', ') : 'not uploaded, as expected'}`);
})();
