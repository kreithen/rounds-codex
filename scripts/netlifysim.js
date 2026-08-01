// Mimics Netlify: serve real files if they exist, else apply the rewrites in _redirects.
// The rules are READ FROM THE FILE, not hard-coded -- a hard-coded /c/* meant a new /s/*
// rule looked broken locally while being perfectly correct on the real site.
const http=require('http'), fs=require('fs'), path=require('path');
const ROOT=process.argv[2]||"/tmp/claude-0/-home-user-rounds-codex/12695854-44d2-559d-bb99-135cf9928bfb/scratchpad/flatlike";
const PORT=+(process.argv[3]||8899);
const TYPES={".html":"text/html",".jpg":"image/jpeg",".png":"image/png",".pdf":"application/pdf",
  ".js":"text/javascript",".json":"application/json",".css":"text/css",
  ".woff2":"font/woff2",".woff":"font/woff",".svg":"image/svg+xml",".ico":"image/x-icon",
  ".webmanifest":"application/manifest+json",".webp":"image/webp",".txt":"text/plain",
  // Audio: Netlify serves these by extension, and the sim was returning
  // application/octet-stream, so a player verified here was being tested against a
  // content type production never sends.
  ".mp3":"audio/mpeg",".m4a":"audio/mp4",".ogg":"audio/ogg",".wav":"audio/wav"};
// _redirects: "<from>  <to>  <status>", one per line, # comments. Only the "/prefix/*" shape
// this app uses is handled; anything fancier would need the real Netlify matcher.
function rules(){
  const f=path.join(ROOT,"_redirects");
  if(!fs.existsSync(f)) return [];
  return fs.readFileSync(f,"utf8").split("\n")
    .map(l=>l.replace(/#.*$/,"").trim()).filter(Boolean)
    .map(l=>l.split(/\s+/)).filter(p=>p.length>=2&&p[0].endsWith("/*"))
    .map(p=>({from:p[0].slice(0,-1),to:p[1],status:+(p[2]||301)}));
}
const RULES=rules();
console.log("  _redirects: "+(RULES.length?RULES.map(r=>`${r.from}* -> ${r.to} ${r.status}`).join(", "):"none"));

http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0].split("#")[0]);
  let f=path.join(ROOT,p);
  if(p==="/"||p==="") f=path.join(ROOT,"index.html");
  if(fs.existsSync(f)&&fs.statSync(f).isDirectory()){
    const di=path.join(f,"index.html");                              // Netlify serves dir index
    if(fs.existsSync(di)) f=di;
  }
  if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){
    const r=RULES.find(r=>p.startsWith(r.from));
    if(r&&r.status===200) f=path.join(ROOT,r.to.replace(/^\//,""));
    else if(r){ res.writeHead(r.status,{Location:r.to}); return res.end(); }
    else { res.writeHead(404); return res.end("not found: "+p); }
  }
  // Content-Length + Range, because Netlify sends both and the difference is not cosmetic.
  // Without Content-Length the sim replies Transfer-Encoding: chunked, and a browser that
  // cannot see the file size cannot estimate an MP3's duration -- media.duration stays NaN
  // until the whole 5.9 MB has arrived. Ignoring Range is worse: a seek in a media element
  // is a Range request, so the audio player's scrubber could not actually be tested here at
  // all. Both were true until 2026-08-01, which made the sim quietly wrong for exactly the
  // feature whose design depends on Range reaching the network (see sw.js MEDIA_RE).
  const type=TYPES[path.extname(f)]||"application/octet-stream";
  const size=fs.statSync(f).size;
  const range=req.headers.range;
  const m=range&&/^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if(m){
    let start=m[1]===""?null:+m[1], end=m[2]===""?null:+m[2];
    if(start===null){ start=Math.max(0,size-(end||0)); end=size-1; }   // suffix range
    else if(end===null||end>=size) end=size-1;
    if(start>end||start>=size){
      res.writeHead(416,{"Content-Range":"bytes */"+size,"Content-Type":type});
      return res.end();
    }
    res.writeHead(206,{"Content-Type":type,"Accept-Ranges":"bytes",
      "Content-Range":`bytes ${start}-${end}/${size}`,"Content-Length":end-start+1});
    if(req.method==="HEAD") return res.end();
    return fs.createReadStream(f,{start,end}).pipe(res);
  }
  res.writeHead(200,{"Content-Type":type,"Content-Length":size,"Accept-Ranges":"bytes"});
  if(req.method==="HEAD") return res.end();
  fs.createReadStream(f).pipe(res);
}).listen(PORT,()=>console.log("sim on :"+PORT+" root="+ROOT));
