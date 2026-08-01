/* Condition audio player for Rounds Codex.
 *
 * A narrated audio bar that sits under the "Take the Quiz" / "Image Gallery" buttons
 * on a condition page, for the conditions that have a recording. Built from the
 * mockup supplied 2026-08-01 (IMG_1322.png) with every colour and proportion
 * measured off that file rather than eyeballed:
 *
 *     card       #E3E3E3 -> #DDDDDD   (a 2x64 strip of the real pixels, 121 bytes,
 *                                      inlined as a data URI -- see CARD_BG)
 *     bar        #131313
 *     progress   #8D1D43   (median of the drawn crimson run)
 *     track      #888888
 *     bar height 32.2% of the card, spanning 4.8%..98.7% of its width
 *
 * WHY THE BAR IS REBUILT AND NOT OVERLAID ON THE PNG
 * The mockup has the bar drawn INTO the image, complete with fixed times (0:00,
 * 3:41, 7:59). Using the PNG whole and positioning live controls on top means those
 * baked-in numbers have to be covered exactly, at every width, forever -- and a
 * one-pixel miss shows a stale "7:59" next to the real duration. The card itself is
 * flat (mean 224.4, std 1.3, a three-value vertical gradient), so it carries as a
 * 121-byte strip while the bar is rebuilt in CSS at the measured colours. Same look,
 * no alignment to maintain, and it scales to any width.
 *
 * WHY IT REFLOWS UNDER 560px
 * The mockup is 1956px wide. On a 390px phone the transport buttons, both time
 * readouts, three utility icons and a usable slider do not fit on one line -- the
 * slider ends up about 60px, which cannot be scrubbed. Below 560px the slider drops
 * to its own row and everything else stays on the first. Above it, the single-row
 * mockup layout is exact.
 *
 * The utility icons DO something. A settings gear that opens nothing is the gallery
 * PDF button all over again: volume mutes and reveals a level slider, settings sets
 * playback rate (which is the one control a narrated lecture actually needs), and
 * fullscreen expands the card. RCAP_RATES is the list.
 */
'use strict';

/* Two pixels wide, sixty-four tall, lifted straight out of IMG_1322 and stretched.
   Kept inline because a separate file would need adding to sw.js CORE to survive
   offline, and 164 bytes of base64 is cheaper than that bookkeeping. */
var RCAP_CARD_BG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABACAIAAAC/RDEUAAAAQElEQVR42mN8/PgxAwMDEwMDAwbF8v//fwSFVQntKRYGhv8MDAwsDP+xyTHi0fcf4ocBcTW+8CTJ7/9w+QjKAwABGRQwElapuQAAAABJRU5ErkJggg==';

var RCAP_RATES = [0.75, 1, 1.25, 1.5, 1.75, 2];

/* mm:ss. Floors rather than rounds, so the readout never shows a second the audio
   has not reached -- a player that says 6:07 at 6:06.9 looks broken next to a
   duration of 6:06. */
function rcapTime(s) {
  if (!isFinite(s) || s < 0) s = 0;
  var m = Math.floor(s / 60), r = Math.floor(s % 60);
  return m + ':' + (r < 10 ? '0' : '') + r;
}

function rcapIcon(p, fill) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="' + (fill || 'currentColor') +
         '" stroke="none">' + p + '</svg>';
}

var RCAP_ICONS = {
  play:  '<path d="M7 4.5v15l13-7.5z"/>',
  pause: '<path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z"/>',
  stop:  '<path d="M5.5 5.5h13v13h-13z"/>',
  vol:   '<path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4zM15.4 8.1a5.2 5.2 0 010 7.8l1.3 1.4a7.1 7.1 0 000-10.6zM17.9 5.2a8.9 8.9 0 010 13.6l1.3 1.4a10.8 10.8 0 000-16.4z"/>',
  mute:  '<path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4zM20.6 9.4l-1.3-1.3-2 2-2-2-1.3 1.3 2 2-2 2 1.3 1.3 2-2 2 2 1.3-1.3-2-2z"/>',
  /* Eight-tooth gear drawn as a ring of rounded spokes plus a punched centre, using
     evenodd so the hole is a hole. The first attempt was a single freehand path and
     rendered as a blob at 17px -- at this size the teeth have to be geometric. */
  gear:  '<path fill-rule="evenodd" d="M10.6 2h2.8l.35 2.32a8 8 0 011.72.72l1.9-1.38 1.98 1.98-1.38 1.9a8 8 0 01.72 1.72L21 9.6v2.8l-2.31.34a8 8 0 01-.72 1.73l1.38 1.9-1.98 1.98-1.9-1.38a8 8 0 01-1.72.72L13.4 20h-2.8l-.35-2.31a8 8 0 01-1.72-.72l-1.9 1.38-1.98-1.98 1.38-1.9a8 8 0 01-.72-1.73L3 12.4V9.6l2.31-.34a8 8 0 01.72-1.72L4.65 5.64 6.63 3.66l1.9 1.38a8 8 0 011.72-.72zM12 8.65A3.35 3.35 0 1012 15.35 3.35 3.35 0 0012 8.65z"/>',
  /* Diagonal opposing arrows, which is what the mockup shows -- corner brackets read
     as a crop tool rather than expand. */
  full:  '<path d="M13.6 3H21v7.4l-2.7-2.7-3.2 3.2-1.8-1.8 3.2-3.2zM3 13.6l2.7 2.7 3.2-3.2 1.8 1.8-3.2 3.2L10.4 21H3z"/>'
};

function rcapBtn(action, label, icon, cls) {
  return '<button type="button" class="rcap-b' + (cls ? ' ' + cls : '') + '" data-rcap="' +
    action + '" aria-label="' + label + '" title="' + label + '">' + rcapIcon(icon) + '</button>';
}

/* `a` is {src, title, duration} -- duration in seconds, from the file, so the bar
   shows the real length before a single byte is fetched. It is verified against
   the decoded metadata on load and corrected if they disagree, because a wrong
   published duration is worse than none. */
function rcapHTML(a) {
  return '' +
  '<div class="rcap" data-src="' + a.src + '" data-dur="' + a.duration + '">' +
    '<div class="rcap-title">' + a.title + '</div>' +
    '<div class="rcap-bar">' +
      '<div class="rcap-transport">' +
        rcapBtn('play', 'Play', RCAP_ICONS.play) +
        rcapBtn('pause', 'Pause', RCAP_ICONS.pause) +
        rcapBtn('stop', 'Stop', RCAP_ICONS.stop) +
      '</div>' +
      '<span class="rcap-t rcap-cur">0:00</span>' +
      '<div class="rcap-seekwrap">' +
        '<span class="rcap-tip">0:00</span>' +
        '<input type="range" class="rcap-seek" min="0" max="1000" value="0" step="1" ' +
          'aria-label="Seek" aria-valuetext="0:00">' +
      '</div>' +
      '<span class="rcap-t rcap-dur">' + rcapTime(a.duration) + '</span>' +
      '<div class="rcap-util">' +
        rcapBtn('vol', 'Mute', RCAP_ICONS.vol, 'rcap-u') +
        rcapBtn('set', 'Playback speed', RCAP_ICONS.gear, 'rcap-u') +
        rcapBtn('full', 'Expand', RCAP_ICONS.full, 'rcap-u') +
      '</div>' +
      '<div class="rcap-pop rcap-volpop" hidden>' +
        '<input type="range" class="rcap-vol" min="0" max="100" value="100" aria-label="Volume">' +
      '</div>' +
      '<div class="rcap-pop rcap-setpop" hidden>' +
        RCAP_RATES.map(function (r) {
          return '<button type="button" class="rcap-rate' + (r === 1 ? ' on' : '') +
                 '" data-rate="' + r + '">' + (r === 1 ? 'Normal' : r + '×') + '</button>';
        }).join('') +
      '</div>' +
    '</div>' +
  '</div>';
}

/* Wire one .rcap element. Idempotent: re-running on an already-wired node is a
   no-op, because paint() re-renders a view wholesale and this gets called again. */
function rcapInit(root) {
  root = root || document;
  var els = root.querySelectorAll ? root.querySelectorAll('.rcap') : [];
  Array.prototype.forEach.call(els, function (el) {
    if (el.__rcap) return;
    el.__rcap = true;

    var audio = new Audio();
    audio.preload = 'metadata';          // never pull 5.9 MB just to draw the bar
    audio.src = el.getAttribute('data-src');

    var q     = function (s) { return el.querySelector(s); };
    var seek  = q('.rcap-seek'), tip = q('.rcap-tip'),
        cur   = q('.rcap-cur'),  dur = q('.rcap-dur'),
        volPop = q('.rcap-volpop'), setPop = q('.rcap-setpop'),
        volBtn = q('[data-rcap="vol"]');
    var published = parseFloat(el.getAttribute('data-dur')) || 0;
    var scrubbing = false;

    function total() { return isFinite(audio.duration) && audio.duration > 0 ? audio.duration : published; }

    function paintPos(t) {
      var d = total(), pct = d ? Math.min(100, Math.max(0, (t / d) * 100)) : 0;
      el.style.setProperty('--rcap-pct', pct + '%');
      cur.textContent = rcapTime(t);
      tip.textContent = rcapTime(t);
      /* Clamp to the track, in pixels. At 0% a percentage left with translateX(-50%)
         puts half the label outside the bar and over the card, where it is unreadable;
         the same happens at the right end. Measured each paint because the track width
         changes with the reflow. */
      var wrapW = seek.clientWidth || 1, tipW = tip.offsetWidth || 30;
      var x = (pct / 100) * wrapW;
      tip.style.left = Math.min(wrapW - tipW / 2, Math.max(tipW / 2, x)) + 'px';
      seek.setAttribute('aria-valuetext', rcapTime(t));
      if (!scrubbing) seek.value = String(Math.round(pct * 10));
    }

    audio.addEventListener('loadedmetadata', function () {
      /* Trust the decoded file over the published number. They should agree; if they
         do not, the JSON is stale and the bar would otherwise scrub to the wrong
         place for the whole recording. */
      if (isFinite(audio.duration) && Math.abs(audio.duration - published) > 1) {
        published = audio.duration;
        el.setAttribute('data-dur', String(audio.duration));
      }
      dur.textContent = rcapTime(total());
      paintPos(audio.currentTime);
    });
    audio.addEventListener('timeupdate', function () { if (!scrubbing) paintPos(audio.currentTime); });
    audio.addEventListener('ended', function () { el.classList.remove('playing'); paintPos(total()); });
    audio.addEventListener('play',  function () { el.classList.add('playing'); });
    audio.addEventListener('pause', function () { el.classList.remove('playing'); });

    seek.addEventListener('input', function () {
      scrubbing = true;
      el.classList.add('scrubbing');      // touch has no :hover, so the class carries it
      paintPos((seek.value / 1000) * total());
    });
    function commit() {
      if (!scrubbing) return;
      scrubbing = false;
      audio.currentTime = (seek.value / 1000) * total();
      /* Held briefly after release so the label does not vanish under the finger the
         instant you let go, which reads as the seek having failed. */
      setTimeout(function () { el.classList.remove('scrubbing'); }, 600);
    }
    seek.addEventListener('change', commit);
    seek.addEventListener('pointerup', commit);
    seek.addEventListener('pointercancel', commit);

    q('.rcap-vol').addEventListener('input', function (e) {
      audio.volume = e.target.value / 100;
      audio.muted = audio.volume === 0;
      volBtn.innerHTML = rcapIcon(audio.muted ? RCAP_ICONS.mute : RCAP_ICONS.vol);
    });

    function closePops(except) {
      [volPop, setPop].forEach(function (p) { if (p !== except) p.hidden = true; });
    }

    el.addEventListener('click', function (e) {
      var rate = e.target.closest && e.target.closest('.rcap-rate');
      if (rate) {
        audio.playbackRate = parseFloat(rate.getAttribute('data-rate'));
        setPop.querySelectorAll('.rcap-rate').forEach(function (b) { b.classList.remove('on'); });
        rate.classList.add('on');
        setPop.hidden = true;
        return;
      }
      var b = e.target.closest && e.target.closest('[data-rcap]');
      if (!b) return;
      var a = b.getAttribute('data-rcap');
      if (a === 'play')  { closePops(); audio.play().catch(function () {}); }
      else if (a === 'pause') { closePops(); audio.pause(); }
      else if (a === 'stop')  { closePops(); audio.pause(); audio.currentTime = 0; paintPos(0); }
      else if (a === 'vol')   { closePops(volPop); volPop.hidden = !volPop.hidden; }
      else if (a === 'set')   { closePops(setPop); setPop.hidden = !setPop.hidden; }
      else if (a === 'full')  {
        closePops();
        if (document.fullscreenElement) document.exitFullscreen();
        else if (el.requestFullscreen) el.requestFullscreen().catch(function () {});
        else el.classList.toggle('rcap-big');   // iOS Safari has no element fullscreen
      }
    });

    /* A popover that only closes by pressing its own button is a trap: the speed menu
       stayed open over the page in the first build. Escape and any click elsewhere
       shut it. Bound on document, and torn down with the node below. */
    function outside(e) { if (!el.contains(e.target)) closePops(); }
    function esc(e) { if (e.key === 'Escape') closePops(); }
    document.addEventListener('click', outside, true);
    document.addEventListener('keydown', esc);

    /* Leaving the page mid-recording and coming back to it still playing is
       disorienting, and paint() destroys this node without telling anyone. */
    var obs = new MutationObserver(function () {
      if (!document.body.contains(el)) {
        audio.pause(); obs.disconnect();
        document.removeEventListener('click', outside, true);
        document.removeEventListener('keydown', esc);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });

    paintPos(0);
  });
}

var RCAP_CSS = [
/* Sized against the quiz/gallery buttons it sits under: those are 43px tall, and the
   first build made the card 143px, which read as a second hero rather than a control.
   Every number below is cut to land the whole card near 70px. */
'.rcap{background-image:url(' + RCAP_CARD_BG + ');background-size:100% 100%;',
' border-radius:11px;padding:8px 9px 9px;margin:10px 0 2px}',
'.rcap-title{color:#0b0b0b;font-weight:800;font-size:13.5px;line-height:1.25;',
' letter-spacing:-.2px;margin:0 1px 6px}',
/* One row at every width, which is also what the mockup shows. The two-row phone
   layout that preceded this bought a wider slider and cost 55px of height. */
'.rcap-bar{position:relative;display:flex;align-items:center;gap:4px;',
' background:#131313;border-radius:7px;padding:5px 6px}',
'.rcap-transport,.rcap-util{display:flex;align-items:center;gap:1px;flex:0 0 auto}',
'.rcap-b{background:none;border:0;padding:2px;cursor:pointer;color:#fff;',
' display:inline-flex;align-items:center;justify-content:center;border-radius:5px}',
'.rcap-b svg{width:17px;height:17px;display:block}',
'.rcap-u svg{width:15px;height:15px}',
'.rcap-b:hover{background:rgba(255,255,255,.13)}',
'.rcap-b:active{transform:translateY(1px)}',
/* Tabular figures: without them the readout jiggles every second as digit widths
   change, which on a 25px label is very visible. */
'.rcap-t{color:#fff;font-size:11.5px;font-variant-numeric:tabular-nums;flex:0 0 auto}',
/* The track sits at the BOTTOM of this box and the tooltip rides in the space above
   it, so the label needs no height of its own. */
'.rcap-seekwrap{position:relative;flex:1 1 auto;min-width:0;height:22px;',
' display:flex;align-items:flex-end;padding-bottom:2px}',
'.rcap-seek{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;',
' background:linear-gradient(90deg,#8D1D43 0,#8D1D43 var(--rcap-pct,0%),#888 var(--rcap-pct,0%),#888 100%);',
' outline:none;margin:0;cursor:pointer}',
'.rcap-seek::-webkit-slider-thumb{-webkit-appearance:none;width:3px;height:15px;border-radius:1px;',
' background:#fff;cursor:pointer;border:0}',
'.rcap-seek::-moz-range-thumb{width:3px;height:15px;border-radius:1px;background:#fff;border:0;cursor:pointer}',
'.rcap-seek:focus-visible{outline:2px solid #fff;outline-offset:2px}',
/* Shown while scrubbing or hovering, not permanently. At the compact height there is
   no clear air above the track, so an always-on tooltip sat against the current-time
   readout and the bar read "0:00  0:00". It is also what the mockup actually depicts:
   0:00 on the left with the tooltip reading 3:41 is a scrub preview, not the clock --
   the two cannot both be the current time and disagree. The left label carries the
   time at rest; the tooltip carries the position under your finger. */
'.rcap-tip{position:absolute;bottom:9px;left:0;transform:translateX(-50%);color:#fff;',
' font-size:10.5px;font-variant-numeric:tabular-nums;pointer-events:none;white-space:nowrap;',
' text-shadow:0 1px 3px rgba(0,0,0,.95);opacity:0;transition:opacity .12s}',
'.rcap-seekwrap:hover .rcap-tip,.rcap.scrubbing .rcap-tip,',
'.rcap-seek:focus-visible+.rcap-tip,.rcap-seekwrap:focus-within .rcap-tip{opacity:1}',
/* [hidden] only sets display:none at user-agent specificity, so the display:grid and
   display:flex below silently beat it: the popovers were marked hidden and stayed on
   screen. Asserting el.hidden passed the whole time -- the test had to look at what
   is painted, not at the attribute. */
'.rcap-pop[hidden]{display:none}',
'.rcap-pop{position:absolute;bottom:calc(100% + 6px);right:6px;background:#1d1d1d;',
' border:1px solid rgba(255,255,255,.16);border-radius:9px;padding:6px;z-index:5;',
' box-shadow:0 8px 22px rgba(0,0,0,.5)}',
'.rcap-volpop{display:flex;align-items:center;width:126px}',
'.rcap-vol{width:100%;accent-color:#8D1D43}',
'.rcap-setpop{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;min-width:176px}',
'.rcap-rate{background:rgba(255,255,255,.07);border:0;border-radius:6px;color:#e9eef5;',
' font:inherit;font-size:12px;padding:6px 4px;cursor:pointer}',
'.rcap-rate.on{background:#8D1D43;color:#fff;font-weight:700}',
'.rcap:fullscreen,.rcap.rcap-big{display:flex;flex-direction:column;justify-content:center;padding:26px}',
'.rcap:fullscreen .rcap-title,.rcap.rcap-big .rcap-title{font-size:26px;text-align:center;margin-bottom:16px}',
/* Below about 345px the slider is squeezed under 90px, at which point four seconds
   of a six-minute file share one pixel. Expand is the one control of the nine worth
   losing -- fullscreen on an audio bar is a nicety, scrubbing is not. */
'@media(max-width:344px){ .rcap-b[data-rcap="full"]{display:none} }'
].join('');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { rcapHTML: rcapHTML, rcapInit: rcapInit, rcapTime: rcapTime,
                     RCAP_CSS: RCAP_CSS, RCAP_CARD_BG: RCAP_CARD_BG, RCAP_RATES: RCAP_RATES };
}
