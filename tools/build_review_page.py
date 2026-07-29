#!/usr/bin/env python3
"""
Build a standalone physician review page for generated candidate images.

Why this exists alongside tools/image-qa.html: that page `fetch()`es
image-manifest.json and probes for images in candidates/, so it needs the repo on
disk and an http server. This build produces ONE self-contained .html file that
works from file:// — double-click it, review, export decisions.json. That matters
because of where the images actually live:

  This sandbox cannot reach the image CDN at all (egress is allowlist-only and the
  proxy 403s it), so the bytes never arrive here. The images are referenced by their
  remote URLs and loaded by the reviewer's OWN browser, which has ordinary internet
  access. The same reason rules out publishing this as an Artifact: the Artifact CSP
  blocks every external host, so remote <img> would silently fail there.

The exported decisions.json is the same shape tools/incorporate_images.py already
consumes via --decisions, so an approval round feeds straight into the wiring step
with nothing to translate.

Usage:
  python3 tools/build_review_page.py --urls urls.json --out review.html [--title "..."]

  urls.json:  {"<question-id>": "https://.../image.png", ...}
"""
import argparse, json, os, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "tools", "image-manifest.json")

PAGE = """<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>__TITLE__</title>
<style>
 :root{--bg:#0a0f16;--ink:#e8f0f7;--mut:#8ba0b6;--card:#111823;--line:rgba(255,255,255,.11);
   --cy:#46d3e6;--good:#37d07a;--bad:#ff5d6c;--amb:#f1b24a}
 *{box-sizing:border-box}html,body{margin:0}
 body{background:var(--bg);color:var(--ink);padding:0 16px 90px;
   font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
 .wrap{max-width:1180px;margin:0 auto}
 header{position:sticky;top:0;z-index:5;background:rgba(10,15,22,.95);backdrop-filter:blur(8px);
   padding:14px 0;border-bottom:1px solid var(--line)}
 h1{font-size:17px;margin:0 0 4px}
 .sub{color:var(--mut);font-size:12.5px;margin-bottom:9px}
 .bar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;font-size:13px}
 .bar button{border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--ink);
   border-radius:9px;padding:6px 11px;cursor:pointer;font-weight:700}
 .bar button.on{border-color:var(--cy);color:#bff0f7}
 .bar .sp{flex:1}.stat{color:var(--mut)}.stat b{color:var(--ink)}
 .grid{display:grid;grid-template-columns:1fr;gap:18px;margin-top:18px}
 @media(min-width:820px){.grid{grid-template-columns:1fr 1fr}}
 .item{border:1px solid var(--line);border-radius:15px;background:var(--card);
   overflow:hidden;display:flex;flex-direction:column}
 .item.approved{border-color:rgba(55,208,122,.65)}
 .item.rejected{border-color:rgba(255,93,108,.6)}
 .item.regenerate{border-color:rgba(241,178,74,.65)}
 .imgwrap{background:#04070b;display:grid;place-items:center;min-height:260px;position:relative}
 .imgwrap img{max-width:100%;max-height:520px;display:block;cursor:zoom-in}
 .imgwrap img.zoom{max-height:none;cursor:zoom-out}
 .fail{color:var(--bad);font-size:13px;padding:44px 20px;text-align:center;line-height:1.6}
 .decal{position:absolute;top:9px;right:9px;font-size:11px;font-weight:800;
   padding:3px 8px;border-radius:6px;letter-spacing:.4px}
 .decal.approved{background:var(--good);color:#04240f}
 .decal.rejected{background:var(--bad);color:#2a0409}
 .decal.regenerate{background:var(--amb);color:#241a04}
 .body{padding:14px 15px;display:flex;flex-direction:column;gap:9px}
 .id{font-size:11.5px;color:var(--cy);font-weight:800;letter-spacing:.55px}
 .title{font-size:16.5px;font-weight:800;margin:0}
 .meta{font-size:12.5px;color:var(--mut)}.meta b{color:#c3d2e2}
 .must{margin:0;padding:0;list-style:none;font-size:13px}
 .must li{padding:4px 0 4px 23px;position:relative;color:#cfdae7}
 .must li::before{content:"\\2610";position:absolute;left:0;color:var(--mut)}
 details{font-size:12.5px;color:var(--mut)}summary{cursor:pointer;padding:2px 0}
 .acts{display:flex;gap:8px;margin-top:3px}
 .acts button{flex:1;border:1px solid var(--line);background:rgba(255,255,255,.04);
   color:var(--ink);border-radius:10px;padding:10px;font-weight:800;cursor:pointer;font-size:13px}
 .acts .ap.on{background:var(--good);color:#04240f;border-color:var(--good)}
 .acts .rj.on{background:var(--bad);color:#2a0409;border-color:var(--bad)}
 .acts .rg.on{background:var(--amb);color:#241a04;border-color:var(--amb)}
 .ecg{font-size:12px;color:var(--amb);border:1px solid rgba(241,178,74,.42);
   border-radius:8px;padding:6px 9px;background:rgba(241,178,74,.07)}
 .note{border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.03);
   color:var(--ink);font:inherit;font-size:13px;padding:8px 9px;width:100%;resize:vertical}
 button:focus-visible,textarea:focus-visible,img:focus-visible{outline:2px solid var(--cy);outline-offset:2px}
</style>
<div class="wrap">
<header>
 <h1>__TITLE__</h1>
 <div class="sub">Tick every <b>Must show</b> line against the image before approving. Click an image to
  view it full size. Decisions are saved in this browser as you go — <b>Export</b> when done and send
  the file back.</div>
 <div class="bar">
  <button data-f="" class="on">All</button>
  <button data-f="pending">Pending</button>
  <button data-f="approved">Approved</button>
  <button data-f="rejected">Rejected</button>
  <button data-f="regenerate">Regenerate</button>
  <span class="sp"></span>
  <span class="stat" id="counts"></span>
  <button id="export">Export decisions.json</button>
 </div>
</header>
<div class="grid" id="grid"></div>
</div>
<script>
var ITEMS = __ITEMS__;
var LS = "rc_img_review_" + __KEY__;
var state = {};
try { state = JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { state = {}; }
var filter = "";
function save(){ try{ localStorage.setItem(LS, JSON.stringify(state)); }catch(e){} }
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function verdict(id){ return (state[id]||{}).v || ""; }
function counts(){
  var a=0,r=0,g=0,p=0;
  ITEMS.forEach(function(it){ var v=verdict(it.id);
    if(v==="approved")a++; else if(v==="rejected")r++; else if(v==="regenerate")g++; else p++; });
  document.getElementById("counts").innerHTML = "<b>"+ITEMS.length+"</b> items · "+
    "<b style='color:var(--good)'>"+a+"</b> approved · "+r+" rejected · "+g+" regen · "+p+" pending";
}
function pass(it){ var v=verdict(it.id);
  return !filter || (filter==="pending" ? !v : v===filter); }
function render(){
  var grid=document.getElementById("grid"); grid.innerHTML="";
  ITEMS.filter(pass).forEach(function(it){
    var v=verdict(it.id), note=(state[it.id]||{}).note||"";
    var el=document.createElement("div"); el.className="item "+v;
    el.innerHTML=
      '<div class="imgwrap">'+
        '<img src="'+esc(it.url)+'" alt="candidate image for '+esc(it.id)+'" tabindex="0"'+
        ' onerror="this.parentNode.innerHTML=\\'<div class=&quot;fail&quot;>Image could not load.<br>'+
        'The link may have expired — ask for a fresh batch.</div>\\'">'+
        (v?'<span class="decal '+v+'">'+v.toUpperCase()+'</span>':'')+
      '</div>'+
      '<div class="body">'+
        '<div class="id">'+esc(it.id)+' · '+esc(it.exam)+(it.system?' · '+esc(it.system):'')+'</div>'+
        '<p class="title">'+esc(it.title)+'</p>'+
        (it.isECG?'<div class="ecg">ECG — AI renders ECGs unreliably. Approve only if every wave, '+
          'interval and lead is correct; otherwise keep the app\\'s vector tracing.</div>':'')+
        '<div class="meta"><b>Case:</b> '+esc(it.caseContext)+'</div>'+
        '<div class="meta"><b>Modality:</b> '+esc(it.modality)+'</div>'+
        (it.mustShow && it.mustShow.length
          ? '<div class="meta"><b>Must show:</b></div><ul class="must">'+
            it.mustShow.map(function(m){return '<li>'+esc(m)+'</li>';}).join('')+'</ul>'
          : '<div class="meta"><b>Must show:</b> not itemised for this one — judge against the case above.</div>')+
        (it.avoid?'<details><summary>Must NOT show</summary>'+esc(it.avoid)+'</details>':'')+
        (it.fallback?'<details><summary>Real-image fallback if this fails</summary>'+esc(it.fallback)+'</details>':'')+
        '<textarea class="note" rows="2" data-note="'+esc(it.id)+'"'+
          ' placeholder="What is wrong with it? (kept in the export)">'+esc(note)+'</textarea>'+
        '<div class="acts">'+
          '<button class="ap'+(v==="approved"?" on":"")+'" data-a="approved" data-id="'+esc(it.id)+'">Approve</button>'+
          '<button class="rj'+(v==="rejected"?" on":"")+'" data-a="rejected" data-id="'+esc(it.id)+'">Reject</button>'+
          '<button class="rg'+(v==="regenerate"?" on":"")+'" data-a="regenerate" data-id="'+esc(it.id)+'">Regenerate</button>'+
        '</div>'+
      '</div>';
    grid.appendChild(el);
  });
  counts();
}
document.getElementById("grid").addEventListener("click", function(e){
  var img = e.target.closest(".imgwrap img");
  if (img) { img.classList.toggle("zoom"); return; }
  var b = e.target.closest("button[data-a]"); if(!b) return;
  var id=b.getAttribute("data-id"), a=b.getAttribute("data-a");
  var cur=state[id]||{};
  cur.v = (cur.v===a) ? "" : a;          // clicking the active verdict clears it
  state[id]=cur; save(); render();
});
// Keep the note without re-rendering, so typing does not lose focus mid-sentence.
document.getElementById("grid").addEventListener("input", function(e){
  var t=e.target.closest("textarea[data-note]"); if(!t) return;
  var id=t.getAttribute("data-note"), cur=state[id]||{};
  cur.note=t.value; state[id]=cur; save();
});
[].forEach.call(document.querySelectorAll(".bar button[data-f]"), function(b){
  b.addEventListener("click", function(){
    filter=b.getAttribute("data-f");
    [].forEach.call(document.querySelectorAll(".bar button[data-f]"),
      function(x){ x.classList.toggle("on", x===b); });
    render();
  });
});
document.getElementById("export").addEventListener("click", function(){
  // Shape matches tools/incorporate_images.py --decisions, plus notes for the rejected ones.
  var out={approved:[],rejected:[],regenerate:[],notes:{}};
  ITEMS.forEach(function(it){
    var s=state[it.id]||{};
    if(out[s.v]) out[s.v].push(it.id);
    if((s.note||"").trim()) out.notes[it.id]=s.note.trim();
  });
  var blob=new Blob([JSON.stringify(out,null,2)],{type:"application/json"});
  var a=document.createElement("a");
  a.href=URL.createObjectURL(blob); a.download="decisions.json"; a.click();
});
render();
</script>
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--urls", required=True, help="JSON map of question-id -> image URL")
    ap.add_argument("--out", required=True)
    ap.add_argument("--title", default="Rounds Codex — candidate image review")
    ap.add_argument("--key", default="pilot", help="localStorage namespace, so separate batches "
                                                   "do not overwrite each other's decisions")
    a = ap.parse_args()

    urls = json.load(open(a.urls))
    by_id = {it["id"]: it for it in json.load(open(MANIFEST))["items"]}

    missing = [i for i in urls if i not in by_id]
    if missing:
        raise SystemExit("not in image-manifest.json: " + ", ".join(missing))

    items = []
    for qid, url in urls.items():
        it = by_id[qid]
        items.append({
            "id": qid,
            "url": url,
            "title": it["title"],
            "exam": it.get("exam", ""),
            "system": it.get("system", ""),
            "modality": it.get("modality", ""),
            "caseContext": it.get("caseContext", ""),
            "mustShow": it.get("mustShow") or [],
            "avoid": it.get("avoid", ""),
            "fallback": it.get("fallback", ""),
            "isECG": bool(it.get("isECG")),
        })
    items.sort(key=lambda x: x["id"])

    page = (PAGE
            .replace("__ITEMS__", json.dumps(items, ensure_ascii=False))
            .replace("__KEY__", json.dumps(a.key))
            .replace("__TITLE__", html.escape(a.title)))
    with open(a.out, "w") as f:
        f.write(page)

    ecg = sum(1 for i in items if i["isECG"])
    print(f"wrote {a.out}  ({len(items)} items"
          + (f", {ecg} flagged ECG" if ecg else "")
          + f", {sum(1 for i in items if not i['mustShow'])} without an itemised Must-show list)")


if __name__ == "__main__":
    main()
