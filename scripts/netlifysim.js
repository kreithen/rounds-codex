// Mimics Netlify: serve real files if they exist, else rewrite /c/* -> /index.html with 200
const http=require('http'), fs=require('fs'), path=require('path');
const ROOT=process.argv[2]||"/tmp/claude-0/-home-user-rounds-codex/12695854-44d2-559d-bb99-135cf9928bfb/scratchpad/flatlike";
const PORT=+(process.argv[3]||8899);
const TYPES={".html":"text/html",".jpg":"image/jpeg",".png":"image/png",".pdf":"application/pdf",
  ".js":"text/javascript",".json":"application/json",".css":"text/css",
  ".woff2":"font/woff2",".woff":"font/woff",".svg":"image/svg+xml",".ico":"image/x-icon",
  ".webmanifest":"application/manifest+json",".webp":"image/webp",".txt":"text/plain"};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0].split("#")[0]);
  let f=path.join(ROOT,p);
  if(p==="/"||p==="") f=path.join(ROOT,"index.html");
  if(fs.existsSync(f)&&fs.statSync(f).isDirectory()){
    const di=path.join(f,"index.html");                              // Netlify serves dir index
    if(fs.existsSync(di)) f=di;
  }
  if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){
    if(/^\/c\//.test(p)) f=path.join(ROOT,"index.html");            // the rewrite rule
    else { res.writeHead(404); return res.end("not found: "+p); }
  }
  res.writeHead(200,{"Content-Type":TYPES[path.extname(f)]||"application/octet-stream"});
  fs.createReadStream(f).pipe(res);
}).listen(PORT,()=>console.log("sim on :"+PORT+" root="+ROOT));
