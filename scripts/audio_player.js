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
 * --------------------------------------------------------------------------------
 * ONE AUDIO ELEMENT FOR THE WHOLE APP  (the 2026-08-01 rewrite)
 *
 * The first build created `new Audio()` per .rcap node and stopped it when paint()
 * removed the node. Four of the five features asked for next are impossible on that
 * shape, and they are impossible for the same reason:
 *
 *   forward-to-next-recording   playback has to survive the navigation that shows
 *   continuous play (infinity)  the next page, and a new element would be a fresh
 *                               element with no user gesture behind it -- Safari
 *                               rejects .play() on one of those, so the next track
 *                               would silently never start
 *   CarPlay / lock screen       iOS surfaces ONE media element per page as the now-
 *                               playing item; a per-node element means the car head
 *                               unit loses the session at every navigation
 *   never two at once           two nodes, two elements, two recordings talking over
 *                               each other
 *
 * So there is now a single module-level element (rcapAudio()) that outlives every
 * view. A .rcap node is a VIEW ONTO it: if the node's id is the one loaded, it shows
 * live position and state; otherwise it shows a fresh bar and pressing play loads it.
 *
 * This deliberately reverses an earlier decision. The old code stopped playback when
 * you navigated away, reasoning that coming back to a page still playing is
 * disorienting. Continuous play makes that reasoning obsolete -- the whole point is
 * to listen while moving through the app, or with the phone locked in a car. Coming
 * back to a playing page now re-syncs the bar rather than being surprised by it.
 *
 * HOW IT NARROWS
 * The mockup is 1956px wide and single-row, and the card stays single-row at every
 * width, because a second row cost 55px of height and the brief was to sit close to
 * the 43px quiz/gallery buttons above it. What gives way instead is CONTROLS, in a
 * fixed order, each at the width where the track would otherwise drop under 90px --
 * the point at which four seconds of a six-minute recording share a pixel and the
 * scrubber cannot be aimed at. Expand goes at 400, stop at 400 (it is back-to-start
 * plus pause, both still present), the in-bar duration at 376 -- and that one MOVES to
 * the title row rather than vanishing -- and the elapsed clock at 336, the 320px floor,
 * where the tooltip and the crimson fill still report position.
 * Measured at 320/360/375/390/414/430, not at one width.
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
  /* Bar-then-triangle, the transport convention for "back to the start". Deliberately
     NOT a double chevron: that means previous TRACK, and this button restarts the
     current recording -- the user asked for the beginning, not the previous file. */
  back:  '<path d="M5.5 4.5h2.6v15H5.5zM19.5 4.5v15l-10.2-7.5z"/>',
  /* Its mirror, which DOES mean next track, because that is what it does. */
  fwd:   '<path d="M18.5 4.5h-2.6v15h2.6zM4.5 4.5v15l10.2-7.5z"/>',
  /* A lemniscate whose two lobes are actual circles that cross at the centre. The first
     attempt was two hand-placed arcs and rendered as a squiggle at 17px -- the loops did
     not close and the crossing sat off-centre. This is the standard glyph geometry:
     a stroked path that runs round the left lobe, diagonally through the middle, round
     the right lobe, and back. Stroked rather than filled, because a filled infinity at
     this size is two dots. */
  inf:   '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M18.6 8.4c-1.1 0-2 .4-2.8 1.1L12 13.2l-3.8 3.3c-.8.7-1.7 1.1-2.8 1.1a3.6 3.6 0 110-7.2c1.1 0 2 .4 2.8 1.1L12 13.2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 10.8l3.8-3.3M18.6 8.4a3.6 3.6 0 110 7.2c-1.1 0-2-.4-2.8-1.1L12 10.8"/>',
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

/* -- the sequence -------------------------------------------------------------
   Recording order is DATA order, which is the app's canonical condition order and
   the order left/right swipe already uses -- so "next recording" and "swipe right
   until you hit one" agree. Falling back to Object.keys is for the unit tests,
   which have RC_AUDIO but no DATA. */
function rcapOrder() {
  if (typeof DATA !== 'undefined' && DATA && DATA.length)
    return DATA.filter(function (d) { return RC_AUDIO[d.id]; }).map(function (d) { return d.id; });
  return Object.keys(RC_AUDIO);
}

function rcapCategory(id) {
  if (typeof byId !== 'undefined' && byId && byId[id]) return byId[id].category;
  return null;
}

/* Next recording after `id`. NOT wrapping, in either mode:
     - forward, scoped to the module, would otherwise restart the same recording as
       soon as a category has only one -- which reads as a broken button, not a lap;
     - the chain is specified to run "until all the audio files in the app have been
       played", which has an end.
   Returns null when there is none, and the caller disables the control. */
function rcapNext(id, sameCategory) {
  var order = rcapOrder(), i = order.indexOf(id);
  if (i < 0) return null;
  var cat = sameCategory ? rcapCategory(id) : null;
  for (var k = i + 1; k < order.length; k++)
    if (!sameCategory || rcapCategory(order[k]) === cat) return order[k];
  return null;
}

/* Is the user still on a condition page? The chain advances the VIEW as well as the
   audio, which is what was asked for -- but only while they are reading conditions.
   If they have walked off to the calculators or a quiz, yanking them to another
   condition mid-task would be the app taking the wheel. Audio keeps going either way;
   only the navigation is conditional. */
function rcapOnCondition() {
  if (typeof stack === 'undefined' || !stack || !stack.length) return false;
  return stack[stack.length - 1].v === 'detail';
}

/* -- the single element --------------------------------------------------------- */
var RCAP_EL = null;          // the one HTMLAudioElement, created on first use
var RCAP_ID = null;          // which recording is loaded into it
var RCAP_CHAIN = false;      // continuous play across the whole app
var RCAP_PENDING = null;     // id whose page we navigated to and should autoplay
var RCAP_RATE = 1;           // survives navigation; a new view must not reset it
var RCAP_VOL = 1;

function rcapAudio() {
  if (RCAP_EL) return RCAP_EL;
  var a = new Audio();
  /* Nothing at all until Play. The duration is published in RC_AUDIO, so the bar
     already reads 6:06 without a single byte. Audio also bypasses the service worker
     (sw.js MEDIA_RE) so Range requests reach the network and seeking works. */
  a.preload = 'none';
  /* CarPlay and AirPlay route the element's output; remote playback must stay ON.
     Setting disableRemotePlayback (or routing through WebAudio) keeps the sound on
     the handset speaker with the car connected, which is the exact failure the
     CarPlay requirement is about. */
  a.setAttribute('x-webkit-airplay', 'allow');
  RCAP_EL = a;

  a.addEventListener('ended', function () {
    if (RCAP_CHAIN) {
      var nxt = rcapNext(RCAP_ID, false);      // across modules, in app order
      if (nxt) { rcapOpen(nxt, true, rcapOnCondition()); return; }
      RCAP_CHAIN = false;                       // end of the app; stop, do not loop
    }
    rcapSyncAll();
    rcapSession();
  });
  ['play', 'pause', 'timeupdate', 'loadedmetadata', 'ratechange', 'volumechange']
    .forEach(function (ev) { a.addEventListener(ev, function () { rcapSyncAll(); }); });
  a.addEventListener('play', rcapSession);
  a.addEventListener('loadedmetadata', rcapSession);
  return a;
}

/* Load `id` into the shared element. `play` starts it; `navigate` also takes the user
   to that condition's page. The gesture that reached here (forward, infinity, or the
   car's next-track button) has already unlocked the element, and because it is the
   SAME element every time, Safari lets the next track start. */
function rcapOpen(id, play, navigate) {
  var rec = RC_AUDIO[id];
  if (!rec) return false;
  var a = rcapAudio();
  if (RCAP_ID !== id) {
    RCAP_ID = id;
    a.src = rec.src;
    a.currentTime = 0;
  }
  a.playbackRate = RCAP_RATE;
  a.volume = RCAP_VOL;
  if (navigate && typeof go === 'function') {
    /* paint() destroys and rebuilds .rcap; the new node reads this and adopts the
       already-playing element rather than starting a second one. */
    RCAP_PENDING = id;
    go('detail', id);
  }
  if (play) {
    var p = a.play();
    if (p && p.catch) p.catch(function () { /* blocked or interrupted; UI stays honest */ });
  }
  rcapSyncAll();
  rcapSession();
  return true;
}

/* -- Media Session: the lock screen, and CarPlay ------------------------------
   CarPlay does not render the web page. It renders whatever the Media Session says
   is playing, and its transport buttons call these handlers. Without this block the
   head unit shows "Safari" with a dead progress bar and the steering-wheel next-track
   button does nothing -- the audio is audible but not controllable, which is worse
   than not supporting it. positionState is what draws the car's scrubber. */
var RCAP_ART = [
  { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
  { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
];

function rcapSession() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
  var ms = navigator.mediaSession, rec = RC_AUDIO[RCAP_ID], a = RCAP_EL;
  if (!rec || !a) return;
  try {
    if (typeof MediaMetadata === 'function')
      ms.metadata = new MediaMetadata({
        title: rec.title,
        artist: 'Rounds Codex',
        album: rcapCategory(RCAP_ID) || 'Clinical Modules',
        artwork: RCAP_ART
      });
  } catch (e) { /* metadata is cosmetic; never let it break playback */ }

  function on(action, fn) { try { ms.setActionHandler(action, fn); } catch (e) {} }
  on('play',  function () { a.play().catch(function () {}); });
  on('pause', function () { a.pause(); });
  on('stop',  function () { a.pause(); a.currentTime = 0; rcapSyncAll(); });
  /* Previous restarts the current recording -- same as the on-screen back button, and
     the same as every podcast app. Next follows the CHAIN order (whole app), because
     a car has no notion of which module you were in. */
  on('previoustrack', function () { a.currentTime = 0; rcapSyncAll(); });
  on('nexttrack', function () {
    var n = rcapNext(RCAP_ID, false);
    if (n) rcapOpen(n, true, rcapOnCondition());
  });
  on('seekbackward', function (d) { a.currentTime = Math.max(0, a.currentTime - ((d && d.seekOffset) || 15)); });
  on('seekforward',  function (d) { a.currentTime = Math.min(rcapTotal(), a.currentTime + ((d && d.seekOffset) || 15)); });
  on('seekto', function (d) { if (d && d.fastSeek && a.fastSeek) a.fastSeek(d.seekTime); else if (d) a.currentTime = d.seekTime; });

  ms.playbackState = a.paused ? 'paused' : 'playing';
  /* setPositionState throws if position exceeds duration or the rate is 0, and a
     throw here would abort the caller mid-update. */
  try {
    var d = rcapTotal();
    if (isFinite(d) && d > 0)
      ms.setPositionState({ duration: d, playbackRate: a.playbackRate || 1,
                            position: Math.min(Math.max(a.currentTime || 0, 0), d) });
  } catch (e) {}
}

function rcapTotal() {
  var a = RCAP_EL, rec = RC_AUDIO[RCAP_ID];
  if (a && isFinite(a.duration) && a.duration > 0) return a.duration;
  return (rec && rec.duration) || 0;
}

/* Every mounted bar re-reads shared state. Cheap: there is at most one per view. */
var RCAP_VIEWS = [];
function rcapSyncAll() {
  RCAP_VIEWS = RCAP_VIEWS.filter(function (v) { return document.body.contains(v.el); });
  RCAP_VIEWS.forEach(function (v) { v.sync(); });
}

/* `a` is {src, title, duration} -- duration in seconds, from the file, so the bar
   shows the real length before a single byte is fetched. It is verified against
   the decoded metadata on load and corrected if they disagree, because a wrong
   published duration is worse than none. */
function rcapHTML(a, id) {
  var fwd = rcapNext(id, true);
  return '' +
  '<div class="rcap" data-id="' + id + '" data-src="' + a.src + '" data-dur="' + a.duration + '">' +
    '<div class="rcap-title">' + a.title +
      /* Narrow phones drop the in-bar duration to keep the track scrubbable, so it
         moves up here rather than disappearing. Rendered always, shown only when the
         bar's copy is hidden -- one CSS rule decides, so the two can never both show
         or both vanish. */
      /* Leading space so the node's text reads "Congestive Heart Failure 6:06" rather
         than running together -- the flex gap separates it visually, but a screen
         reader and any text extraction see one concatenated string without it. */
      '<span class="rcap-tdur"> ' + rcapTime(a.duration) + '</span>' +
    '</div>' +
    '<div class="rcap-bar">' +
      '<div class="rcap-transport">' +
        rcapBtn('back', 'Back to start', RCAP_ICONS.back) +
        rcapBtn('play', 'Play', RCAP_ICONS.play) +
        rcapBtn('pause', 'Pause', RCAP_ICONS.pause) +
        rcapBtn('stop', 'Stop', RCAP_ICONS.stop) +
        (fwd
          ? rcapBtn('fwd', 'Next recording in ' + (rcapCategory(id) || 'this module'), RCAP_ICONS.fwd)
          : '<button type="button" class="rcap-b" data-rcap="fwd" disabled aria-label="No further recording in this module" ' +
            'title="No further recording in this module">' + rcapIcon(RCAP_ICONS.fwd) + '</button>') +
        rcapBtn('chain', 'Play every recording in sequence', RCAP_ICONS.inf, 'rcap-inf') +
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

    var id  = el.getAttribute('data-id');
    var q   = function (s) { return el.querySelector(s); };
    var seek = q('.rcap-seek'), tip = q('.rcap-tip'),
        cur  = q('.rcap-cur'),  dur = q('.rcap-dur'),
        volPop = q('.rcap-volpop'), setPop = q('.rcap-setpop'),
        volBtn = q('[data-rcap="vol"]'), infBtn = q('[data-rcap="chain"]');
    var published = parseFloat(el.getAttribute('data-dur')) || 0;
    var scrubbing = false;

    /* This bar is a view onto the shared element, and only when the shared element
       holds THIS recording. On any other page it shows its own 0:00 bar. */
    function mine() { return RCAP_ID === id && RCAP_EL; }
    function total() {
      if (mine() && isFinite(RCAP_EL.duration) && RCAP_EL.duration > 0) return RCAP_EL.duration;
      return published;
    }

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

    function sync() {
      if (scrubbing) return;                    // never fight the finger
      var playing = !!(mine() && !RCAP_EL.paused);
      el.classList.toggle('playing', playing);
      infBtn.classList.toggle('on', !!RCAP_CHAIN && !!mine());
      infBtn.setAttribute('aria-pressed', String(!!RCAP_CHAIN && !!mine()));
      if (mine()) {
        /* Trust the decoded file over the published number. They should agree; if they
           do not, the JSON is stale and the bar would otherwise scrub to the wrong
           place for the whole recording. */
        if (isFinite(RCAP_EL.duration) && RCAP_EL.duration > 0 &&
            Math.abs(RCAP_EL.duration - published) > 1) {
          published = RCAP_EL.duration;
          el.setAttribute('data-dur', String(published));
        }
        volBtn.innerHTML = rcapIcon(RCAP_EL.muted || RCAP_EL.volume === 0 ? RCAP_ICONS.mute : RCAP_ICONS.vol);
        q('.rcap-vol').value = String(Math.round((RCAP_EL.muted ? 0 : RCAP_EL.volume) * 100));
        setPop.querySelectorAll('.rcap-rate').forEach(function (b) {
          b.classList.toggle('on', parseFloat(b.getAttribute('data-rate')) === (RCAP_EL.playbackRate || 1));
        });
      }
      dur.textContent = rcapTime(total());
      paintPos(mine() ? RCAP_EL.currentTime : 0);
    }
    RCAP_VIEWS.push({ el: el, sync: sync });

    seek.addEventListener('input', function () {
      scrubbing = true;
      el.classList.add('scrubbing');      // touch has no :hover, so the class carries it
      paintPos((seek.value / 1000) * total());
    });
    function commit() {
      if (!scrubbing) return;
      scrubbing = false;
      var t = (seek.value / 1000) * total();
      if (mine()) RCAP_EL.currentTime = t; else { rcapOpen(id, false); RCAP_EL.currentTime = t; }
      /* Held briefly after release so the label does not vanish under the finger the
         instant you let go, which reads as the seek having failed. */
      setTimeout(function () { el.classList.remove('scrubbing'); sync(); }, 600);
      rcapSession();
    }
    seek.addEventListener('change', commit);
    seek.addEventListener('pointerup', commit);
    seek.addEventListener('pointercancel', commit);

    q('.rcap-vol').addEventListener('input', function (e) {
      RCAP_VOL = e.target.value / 100;
      var a = rcapAudio();
      a.volume = RCAP_VOL;
      a.muted = RCAP_VOL === 0;
      volBtn.innerHTML = rcapIcon(a.muted ? RCAP_ICONS.mute : RCAP_ICONS.vol);
    });

    function closePops(except) {
      [volPop, setPop].forEach(function (p) { if (p !== except) p.hidden = true; });
    }

    el.addEventListener('click', function (e) {
      var rate = e.target.closest && e.target.closest('.rcap-rate');
      if (rate) {
        RCAP_RATE = parseFloat(rate.getAttribute('data-rate'));
        rcapAudio().playbackRate = RCAP_RATE;
        setPop.querySelectorAll('.rcap-rate').forEach(function (b) { b.classList.remove('on'); });
        rate.classList.add('on');
        setPop.hidden = true;
        rcapSession();
        return;
      }
      var b = e.target.closest && e.target.closest('[data-rcap]');
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-rcap');
      var a = rcapAudio();

      if (act === 'play')  { closePops(); rcapOpen(id, true); }
      else if (act === 'pause') { closePops(); if (mine()) a.pause(); }
      else if (act === 'stop')  { closePops(); RCAP_CHAIN = false; if (mine()) { a.pause(); a.currentTime = 0; } sync(); }
      /* Back to the BEGINNING of this recording, as asked -- not the previous track.
         Keeps playing if it was playing, which is what rewinding a lecture means. */
      else if (act === 'back')  {
        closePops();
        if (!mine()) { rcapOpen(id, false); }
        RCAP_EL.currentTime = 0;
        sync(); rcapSession();
      }
      /* Next recording in THIS module, navigating there and starting it. */
      else if (act === 'fwd') {
        closePops();
        var n = rcapNext(id, true);
        if (n) rcapOpen(n, true, true);
      }
      /* Continuous play across every recording in the app, in order. Pressing it
         starts this one if nothing is playing; pressing it again just disarms the
         chain and leaves the audio alone. */
      else if (act === 'chain') {
        closePops();
        RCAP_CHAIN = !(RCAP_CHAIN && mine());
        if (RCAP_CHAIN && (!mine() || a.paused)) rcapOpen(id, true);
        sync();
      }
      else if (act === 'vol')   { closePops(volPop); volPop.hidden = !volPop.hidden; }
      else if (act === 'set')   { closePops(setPop); setPop.hidden = !setPop.hidden; }
      else if (act === 'full')  {
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

    /* The node dies with the view; the AUDIO does not, which is the whole point of the
       shared element. Only the listeners are torn down. */
    var obs = new MutationObserver(function () {
      if (!document.body.contains(el)) {
        obs.disconnect();
        document.removeEventListener('click', outside, true);
        document.removeEventListener('keydown', esc);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });

    sync();

    /* Arrived here from forward, the chain, or the car's next-track button: the
       element is already loaded and playing, this bar just adopts it. */
    if (RCAP_PENDING === id) { RCAP_PENDING = null; rcapOpen(id, true); }
  });
}

var RCAP_CSS = [
/* Sized against the quiz/gallery buttons it sits under: those are 43px tall, and the
   first build made the card 143px, which read as a second hero rather than a control.
   Every number below is cut to land the whole card near 70px. */
'.rcap{background-image:url(' + RCAP_CARD_BG + ');background-size:100% 100%;',
' border-radius:11px;padding:8px 9px 9px;margin:10px 0 2px}',
'.rcap-title{color:#0b0b0b;font-weight:800;font-size:13.5px;line-height:1.25;',
' letter-spacing:-.2px;margin:0 1px 6px;display:flex;align-items:baseline;gap:8px}',
/* Takes the leftover space so the duration sits hard right, and truncates rather than
   wrapping -- a two-line title would undo the whole point of the condensed card. */
'.rcap-title{white-space:nowrap}',
'.rcap-title>span.rcap-tdur{margin-left:auto;font-weight:600;font-size:11.5px;',
' font-variant-numeric:tabular-nums;color:#4a4a4a;display:none;flex:0 0 auto}',
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
/* Present but plainly unavailable, rather than absent. A control that disappears when
   a module has one recording and reappears when it has two reads as a rendering bug;
   a dimmed one with a title saying why reads as an answer. */
'.rcap-b[disabled]{opacity:.3;cursor:default}',
'.rcap-b[disabled]:hover{background:none}',
'.rcap-b[disabled]:active{transform:none}',
/* The chain is a mode, so it latches. Same crimson as the progress fill -- the bar
   already owns that colour and a second accent here would be noise. */
'.rcap-inf.on{background:#8D1D43}',
'.rcap-inf.on:hover{background:#a02450}',
/* Tabular figures: without them the readout jiggles every second as digit widths
   change, which on a 25px label is very visible. */
'.rcap-t{color:#fff;font-size:11.5px;font-variant-numeric:tabular-nums;flex:0 0 auto}',
/* The track sits at the BOTTOM of this box and the tooltip rides in the space above
   it, so the label needs no height of its own. */
'.rcap-seekwrap{position:relative;flex:1 1 auto;min-width:0;height:22px;',
' display:flex;align-items:flex-end;padding-bottom:2px}',
/* touch-action:none is load-bearing, not a nicety. Without it the browser may claim
   a horizontal drag on the slider as a pan before the range input sees it, and on the
   condition page that gesture is "swipe to the adjacent condition" -- so trying to
   scrub jumped to another page. The swipe handler in index.html now also ignores
   gestures that start on a control, which is the other half of the same fix; both are
   needed, because one stops the app reacting and this one stops the BROWSER reacting. */
'.rcap-seek{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;',
' touch-action:none;',
' background:linear-gradient(90deg,#8D1D43 0,#8D1D43 var(--rcap-pct,0%),#888 var(--rcap-pct,0%),#888 100%);',
' outline:none;margin:0;cursor:pointer}',
/* The hit target is 6px tall; a finger is not. The wrapper takes the same opt-out so
   a drag that starts a few pixels above the track still scrubs instead of swiping. */
'.rcap-seekwrap,.rcap-vol{touch-action:none}',
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
/* Three more buttons than the build this replaces, so the squeeze arrives sooner, and
   the floor it has to clear is the old one: below about 90px of track, four seconds of
   a six-minute recording share a pixel and the scrubber stops being usable. With all
   nine controls the track is 87px at 390 -- the commonest iPhone width -- so something
   has to go before that, not after it.
   Expand goes first: fullscreen on an audio bar is a nicety, scrubbing is not. Stop
   goes second, and it is the safest of the nine to lose because it is the only one
   that is a COMPOSITE of two others still present -- back-to-start, then pause.
   Last is the duration label, and only at 340px, where the alternative is a track too
   short to aim at. Measured at 320/375/390/430, not at one width. */
'@media(max-width:400px){ .rcap-b[data-rcap="full"],.rcap-b[data-rcap="stop"]{display:none} }',
'@media(max-width:376px){ .rcap-dur{display:none} .rcap-title>span.rcap-tdur{display:inline} }',
/* 320px is the floor (iPhone SE 1st gen and the 5s). Even with the duration moved up,
   nine controls plus a clock leave a 69px track there. The elapsed readout goes last,
   and only here, because the scrub tooltip and the crimson fill both still report the
   position -- an unaimable track reports nothing. */
'@media(max-width:336px){ .rcap-cur{display:none} }'
].join('');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { rcapHTML: rcapHTML, rcapInit: rcapInit, rcapTime: rcapTime,
                     rcapOrder: rcapOrder, rcapNext: rcapNext, rcapCategory: rcapCategory,
                     RCAP_CSS: RCAP_CSS, RCAP_CARD_BG: RCAP_CARD_BG, RCAP_RATES: RCAP_RATES,
                     RCAP_ICONS: RCAP_ICONS };
}
