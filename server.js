const http=require("http"),fs=require("fs"),path=require("path");
const PORT=process.env.PORT||3000,FILE=path.join(__dirname,"progress.json");
const send=(res,code,type,body)=>{res.writeHead(code,{"Content-Type":type});res.end(body)};
http.createServer((req,res)=>{
 const url=req.url.split("?")[0];
 if(url==="/api/progress"){
  if(req.method==="GET"){let d="{}";try{d=fs.readFileSync(FILE,"utf8")}catch(e){}return send(res,200,"application/json",d)}
  if(req.method==="POST"){let b="";req.on("data",c=>{b+=c;if(b.length>1e5)req.destroy()});
   req.on("end",()=>{try{JSON.parse(b);fs.writeFileSync(FILE,b);send(res,200,"application/json",'{"ok":true}')}catch(e){send(res,400,"application/json",'{"ok":false}')}});return}
  return send(res,405,"text/plain","Method not allowed")}
 fs.readFile(path.join(__dirname,"index.html"),(e,d)=>e?send(res,500,"text/plain","Missing index.html"):send(res,200,"text/html; charset=utf-8",d));
}).listen(PORT,()=>console.log("Running on http://localhost:"+PORT));
