#!/usr/bin/env node
/*
 * Chain the gallery viewer across galleries.
 *
 * Today gnav() wraps INSIDE one gallery: image 10 -> image 1 of the same set. After this,
 * the right arrow on the last image opens image 1 of the NEXT gallery, and the left arrow on
 * image 1 opens the last image of the PREVIOUS one. The same handler serves the swipe, so
 * swiping chains too.
 *
 * Seven surgeries, all asserted, and the script refuses to run twice.
 *
 * IT ALSO FIXES THE ARROWS, WHICH NEVER WORKED. `.varrow` carries onclick="gnav(±1)", but
 * gWire()'s pointerdown calls stage.setPointerCapture(), and an active pointer capture
 * retargets the derived click to the capturing element - so the click landed on .vstage and
 * the arrow's handler was never called. Verified against the shipped build, not just the
 * patched one: tapping either arrow moved nothing, in a gallery, at any index. Browsing has
 * only ever worked by swiping. Chaining "when the right arrow is tapped" is meaningless until
 * a tap does something, so the pointerdown handler now leaves arrow taps alone.
 *
 * ORDER comes from DATA (the conditions array) filtered by which conditions have a gallery -
 * the same rule rcapOrder() uses for the audio chain, so the two features browse the app in
 * the same sequence. It is NOT GALLERIES key order, which is insertion order and would send
 * the reader somewhere arbitrary.
 *
 * IT WRAPS at the ends, unlike the audio chain. The audio rule exists because a category with
 * one recording would restart the same file and read as a broken button; here the chain is 83
 * galleries long, so the wrap lands somewhere genuinely different and every arrow stays live -
 * which is also what the arrows do today.
 *
 * THE TRAP THIS FIXES ALONG THE WAY: the viewer's "Image N of M" total is written into the
 * template by openViewer() and never touched again - only #vn is updated per image. Crossing
 * into a gallery with a different image count would have kept displaying the old total. It is
 * 10 everywhere right now, so nothing would have looked wrong until the first gallery of a
 * different length shipped, and then it would have been wrong quietly.
 */
const fs = require('fs');

const file = process.argv[2];
if (!file) { console.error('usage: node add_gallery_chain.js <index.html>'); process.exit(2); }
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

if (s.includes('function rcGalOrder(')) {
  console.error('refusing: rcGalOrder() already present - this patcher has run before');
  process.exit(3);
}

function sub(name, from, to) {
  const n = s.split(from).length - 1;
  if (n !== 1) { console.error(`refusing: "${name}" matched ${n} times, expected 1`); process.exit(3); }
  s = s.replace(from, to);
  console.log(`  ok  ${name}`);
}

// 1. make the "of N" total addressable
sub('viewer total gets an id',
  'of ${g.images.length}<small id="vtitle"></small>',
  'of <span id="vtot">${g.images.length}</span><small id="vtitle"></small>');

// 2. keep it in step with the gallery actually being shown
sub('gVRender updates the total',
  `document.getElementById('vn').textContent=gcur+1;document.getElementById('vtitle').textContent=g.images[gcur].title;`,
  `document.getElementById('vn').textContent=gcur+1;` +
  `{const vt=document.getElementById('vtot');if(vt)vt.textContent=g.images.length;}` +
  `document.getElementById('vtitle').textContent=g.images[gcur].title;`);

// 3. the chain order
sub('rcGalOrder inserted',
  'function gnav(dd){',
  `function rcGalOrder(){\n` +
  ` /* DATA order filtered by which conditions have a gallery - the same rule the audio chain\n` +
  `    uses. GALLERIES key order is insertion order and would jump around. */\n` +
  ` if(typeof DATA!=='undefined'&&DATA&&DATA.length)\n` +
  `  return DATA.filter(function(d){var g=GALLERIES[d.id];return g&&g.images&&g.images.length;})\n` +
  `             .map(function(d){return d.id;});\n` +
  ` return Object.keys(GALLERIES);\n` +
  `}\n` +
  `function gnav(dd){`);

// 4. the chaining itself
sub('gnav chains across galleries',
  `function gnav(dd){const g=GALLERIES[GID];gcur=(gcur+dd+g.images.length)%g.images.length;gzoom=1;gpx=0;gpy=0;gApply();gVRender();gShow();}`,
  `function gnav(dd){const g=GALLERIES[GID],n=g.images.length,t=gcur+dd;\n` +
  ` if(t>=0&&t<n){gcur=t;}\n` +
  ` else{\n` +
  `  const order=rcGalOrder(),i=order.indexOf(GID);\n` +
  `  /* a viewer opened on something outside the chain keeps the old in-gallery wrap */\n` +
  `  if(i<0){gcur=(t+n)%n;}\n` +
  `  else{\n` +
  `   const nid=order[(i+(dd>0?1:-1)+order.length)%order.length],ng=GALLERIES[nid];\n` +
  `   if(!ng||!ng.images||!ng.images.length){gcur=(t+n)%n;}\n` +
  `   else{\n` +
  `    GID=nid;gcur=dd>0?0:ng.images.length-1;\n` +
  `    /* Keep the page UNDER the overlay on the gallery being read, so closing does not drop\n` +
  `       the reader back on whichever gallery they happened to enter from, and the address bar\n` +
  `       still describes what is on screen. paint() cannot be used here - it calls\n` +
  `       closeViewer() first and would shut the viewer mid-swipe. */\n` +
  `    const top=stack[stack.length-1];\n` +
  `    if(top&&top.v==='gallery'){top.id=nid;\n` +
  `     const sc=document.getElementById('screen');if(sc)sc.innerHTML=galHTML(nid);\n` +
  `     if(typeof rcSyncURL==='function')rcSyncURL();}\n` +
  `    /* say which gallery this is: the header shows the PAGE title, not the condition, so a\n` +
  `       silent hop reads as the images changing for no reason */\n` +
  `    if(typeof toast==='function')\n` +
  `     toast(((typeof byId!=='undefined'&&byId[nid]&&byId[nid].name)||nid)+' · '+(gcur+1)+' of '+ng.images.length);\n` +
  `   }\n` +
  `  }\n` +
  ` }\n` +
  ` gzoom=1;gpx=0;gpy=0;gApply();gVRender();gShow();}`);

// 5. let an arrow tap reach the arrow
sub('pointerdown ignores the arrows',
  ` stage.addEventListener('pointerdown',e=>{\n  try{stage.setPointerCapture(e.pointerId);}catch(_){}`,
  ` stage.addEventListener('pointerdown',e=>{\n` +
  `  /* Leave taps on the prev/next arrows alone. Capturing the pointer here retargets the\n` +
  `     derived click to the capturing element, so .varrow's own onclick never fired and the\n` +
  `     arrows have been decorative since they shipped - browsing worked only by swiping.\n` +
  `     Returning before capture costs nothing: a swipe that begins on a 46px arrow is not a\n` +
  `     gesture anyone is making on purpose. */\n` +
  `  if(e.target&&e.target.closest&&e.target.closest('.varrow'))return;\n` +
  `  try{stage.setPointerCapture(e.pointerId);}catch(_){}`);

// 6. a cancelled gesture must not navigate
sub('pointercancel no longer counts as a swipe',
  `  const dx=e.clientX-sx;vslide.style.transform='';\n` +
  `  if(dx<-55)gnav(1);else if(dx>55)gnav(-1);else if(!moved)gShow();}\n` +
  ` stage.addEventListener('pointerup',endPtr);\n` +
  ` stage.addEventListener('pointercancel',endPtr);}`,
  `  const dx=e.clientX-sx;vslide.style.transform='';\n` +
  `  /* A pointercancel carries no coordinates - clientX is 0 - so treating it like a pointerup\n` +
  `     made dx = -sx, always a large negative, and the viewer jumped to the NEXT image whichever\n` +
  `     way the finger was going, or even on a cancelled tap. The slide still snaps back above;\n` +
  `     only the navigation is skipped. */\n` +
  `  if(cancelled)return;\n` +
  `  if(dx<-55)gnav(1);else if(dx>55)gnav(-1);else if(!moved)gShow();}\n` +
  ` stage.addEventListener('pointerup',endPtr);\n` +
  ` stage.addEventListener('pointercancel',function(e){endPtr(e,true);});}`);

sub('endPtr takes the cancelled flag',
  ` function endPtr(e){pts.delete(e.pointerId);`,
  ` function endPtr(e,cancelled){pts.delete(e.pointerId);`);

fs.writeFileSync(file, s);
console.log(`\n${file}: ${before} -> ${s.length} bytes (+${s.length - before})`);
