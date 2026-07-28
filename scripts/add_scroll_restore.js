/* Back returns you to where you were, not to the top of the list.
 *
 * paint() ended with an unconditional window.scrollTo(0,0), so every navigation reset the
 * scroll -- including back(). Scroll a long way down the library, open a condition, tap back,
 * and you land at the top having lost your place.
 *
 * The offset is saved on the nav stack entry you are leaving, and back() hands it to paint().
 * Deliberately NOT stored on the entry and read by paint() itself: paint() is also called by
 * setMode(), by the clear-data action and by the content loader, and a paint() that restored
 * whatever offset happened to be sitting on the current entry would teleport you on a mode
 * switch. Passing it as an argument means only back() can trigger a restore, and every other
 * caller keeps the scroll-to-top it has always had.
 *
 * This is general rather than library-specific -- the same three lines cover gallery -> back
 * to the galleries index, drug -> back to the Rx list, and so on. "Back puts me where I was"
 * is expected everywhere, and a fix that only knew about the library would be the odd one out.
 *
 * Usage: node scripts/add_scroll_restore.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: add_scroll_restore.js <index.html>'); process.exit(2); }

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;
if (s.includes('rcRestoreScroll')) { console.error('FAIL: already patched'); process.exit(1); }

/* go() is the only thing that pushes onto the stack, so it is the only place a departure can
   be recorded. Verified rather than assumed -- a second push site would silently lose the
   offset for whatever route used it. */
const pushes = (s.match(/stack\.push/g) || []).length;
if (pushes !== 1) { console.error(`FAIL: expected 1 stack.push site, found ${pushes}`); process.exit(1); }

/* paint is about to take a parameter; if it were ever passed as a bare callback the caller
   would supply its own first argument (forEach index, event object) and scroll somewhere mad. */
const bare = (s.match(/[^a-zA-Z_.]paint\s*[),;\]]/g) || []).length;
if (bare !== 0) { console.error(`FAIL: paint used as a bare reference ${bare}x`); process.exit(1); }

s = replaceOnce(s,
  `function go(v,id){stack.push({v,id});paint();}
function back(){if(stack.length>1){stack.pop();paint();}}`,
  `/* Remember how far down the view you are leaving was scrolled, so back() can put you back. */
function go(v,id){stack[stack.length-1].y=window.scrollY||0;stack.push({v,id});paint();}
function back(){if(stack.length>1){stack.pop();paint(stack[stack.length-1].y);}}`,
  'go() records the departure offset, back() replays it');

s = replaceOnce(s,
  `function paint(){\n const r=stack[stack.length-1]`,
  `function paint(y){\n const r=stack[stack.length-1]`,
  'paint takes an optional scroll target');

s = replaceOnce(s,
  ` window.scrollTo(0,0);\n}`,
  ` rcRestoreScroll(y);\n}
/* Synchronous first: the library builds its whole list in one innerHTML write, so the height
   is final immediately and the restore must not flicker. The extra frame is for views that
   settle a frame late -- the galleries index positions its thumbs on a rAF -- where scrolling
   too early would clamp against a page that had not finished growing. Guarded on y, so an
   ordinary forward navigation is the plain scroll-to-top it always was. */
function rcRestoreScroll(y){
  y=y||0; window.scrollTo(0,y);
  if(!y) return;
  requestAnimationFrame(function(){ if(Math.abs(window.scrollY-y)>1) window.scrollTo(0,y); });
}`,
  'restore replaces the unconditional scroll-to-top');

fs.writeFileSync(INDEX, s);
console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
