var PH=[
{t:"Foundations + React core",w:"Weeks 1-6",g:"Be comfortable with React, then move to TypeScript and stay there.",
 gr:[["Web basics",["HTML/CSS, mobile-first","Tailwind (pick one styling tool)","JavaScript ES6+","Promises and async/await, deeply"]],
 ["React core",["Components, JSX, props, children","useState, lifting state, controlled inputs","useEffect, cleanup, dependency array","Lists, keys, conditional rendering","Events and form handling"]],
 ["TypeScript",["Types and interfaces","Generics","Typing props, state and hooks","Switch to TS after ~2-3 weeks of JS React"]]],
 n:"Don't wait months to learn TS. Many Nigerian job posts (e.g. Lendsqr) require strong TypeScript."},
{t:"Intermediate React + HTTP/SQL",w:"Weeks 5-8",g:"Cover the stuff where most beginners stall, plus the fundamentals Supabase sits on.",
 gr:[["Intermediate React",["useRef","useMemo / useCallback (and when NOT to)","Context API","Custom hooks","useReducer","Fetching: loading, error, empty states, abort controllers"]],
 ["Ecosystem (one each)",["React Router","TanStack Query","React Hook Form"]],
 ["HTTP and data",["HTTP methods, status codes, headers","REST, JSON, CORS","SQL: tables, keys, SELECT/INSERT/UPDATE/DELETE","JOINs, indexes, migrations (concepts)","Auth concepts: sessions vs JWT, cookies, OAuth"]]],
 n:"Skip Redux, Zustand, Next.js and RSC for now. Learn them when you hit real pain."},
{t:"Real projects + Supabase",w:"Weeks 7-12",g:"Build products with real user value, deploy them, write case studies.",
 gr:[["Supabase",["Auth","Row Level Security basics","Realtime (notifications or presence)","Storage"]],
 ["Ship",["Deploy every project live","Case study page: problem, solution, result","One new thing shipped every week"]]],
 n:"You don't need to be a Postgres expert: tables, relations, basic queries and RLS concepts are enough."},
{t:"Freelance + job hunt",w:"Weeks 13-24",g:"Turn skills into provable experience, in parallel.",
 gr:[["Freelance",["Message 10-15 local businesses daily","Target poorly designed sites","Start with ₦80k-₦150k projects","Collect testimonials"]],
 ["Jobs",["Polish 3 deep case studies, not 10 demos","Apply to fintech and microfinance juniors","Optional: Node/Express for fundamentals"]]],
 n:"Start charging from week 13. Real paid work beats tutorials."}];
var PR=[["Todo app (JS)","state, lists, forms"],["Weather app","effects, async, loading states"],["Movie search","Router, params, debounce"],["Rebuild 1-3 in TypeScript","TS with React"],["Blog with auth (mock backend)","Context, protected routes"],["CRUD app: Express + Postgres","HTTP, SQL, REST (optional)"],["Rebuild with Supabase","Auth, RLS, realtime, storage"],["Product-grade pieces","reservation system, data dashboard, e-commerce with real API, realtime feature"]];
var ST={};try{ST=JSON.parse(localStorage.getItem("rm")||"{}")}catch(e){}
function save(){try{localStorage.setItem("rm",JSON.stringify(ST))}catch(e){}}
var tab=0,open={0:1};
var TABS=["Phases","Projects","Salary","Avoid"];
function total(){var a=0,d=0;PH.forEach(function(p,i){p.gr.forEach(function(g,j){g[1].forEach(function(_,k){a++;if(ST[i+"."+j+"."+k])d++})})});return[d,a]}
function prog(){var r=total(),p=r[1]?Math.round(r[0]/r[1]*100):0;document.getElementById("pb").style.width=p+"%";document.getElementById("pt").textContent=r[0]+" of "+r[1]+" done";document.getElementById("pp").textContent=p+"%"}
function phCount(i){var a=0,d=0;PH[i].gr.forEach(function(g,j){g[1].forEach(function(_,k){a++;if(ST[i+"."+j+"."+k])d++})});return d+"/"+a}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function render(){
 var t=document.getElementById("tabs");t.innerHTML=TABS.map(function(x,i){return '<button class="'+(i==tab?"on":"")+'" data-t="'+i+'">'+x+'</button>'}).join("");
 var h="";
 if(tab==0){PH.forEach(function(p,i){
  h+='<div class="card'+(open[i]?" open":"")+'"><button class="hd" data-o="'+i+'"><span class="num">'+(i+1)+'</span><span><b>'+esc(p.t)+'</b><small>'+p.w+'</small></span><span class="c">'+phCount(i)+'</span></button><div class="bd"><p class="goal">'+esc(p.g)+'</p>';
  p.gr.forEach(function(g,j){h+='<div class="grp">'+g[0]+'</div>';g[1].forEach(function(x,k){var id=i+"."+j+"."+k;h+='<label><input type="checkbox" data-c="'+id+'"'+(ST[id]?" checked":"")+'><span>'+esc(x)+'</span></label>'})});
  h+='<div class="note">'+esc(p.n)+'</div></div></div>'})}
 if(tab==1){h+='<div class="card pad"><h3>Build in this order</h3><p>Recruiters have seen too many todo apps and Netflix clones. Real-time features and real data flow get interviews.</p>';PR.forEach(function(r,i){h+='<div class="row"><span class="n">'+(i+1)+'</span><span>'+esc(r[0])+'<small>'+esc(r[1])+'</small></span></div>'});h+='</div>'}
 if(tab==2){h+='<div class="card"><div class="sal"><span>Frontend, 1-4 yrs (Payscale avg)</span><b>≈ ₦1.2M/yr</b><span>Some local junior roles</span><b>₦200k/mo</b><span>Fintech/bank mid-senior</span><b>₦400-500k/mo net</b><span>Some Lagos listings</span><b>₦400-800k/mo</b><span>5-9 yrs avg total</span><b>≈ ₦4.9M/yr</b></div></div><p class="sub">Portfolio quality moves your pay more than years of experience.</p>'}
 if(tab==3){h+='<div class="card pad"><h3>Mistake 1: Tutorial-only projects</h3><p>Build things with real data flow and real problems behind them.</p><h3>Mistake 2: Skipping fundamentals for Supabase</h3><p>Supabase is a shortcut around infra, not around SQL, auth concepts and HTTP.</p><h3>Don\'t tutorial-hop</h3><p>One course + docs + build. Ship something every week.</p><h3>Don\'t narrow your niche too early</h3><p>Get employable first, refine direction after you are in the industry.</p></div>'}
 document.getElementById("view").innerHTML=h;prog()}
document.addEventListener("click",function(e){var b=e.target.closest("[data-t]");if(b){tab=+b.dataset.t;render();return}
 var o=e.target.closest("[data-o]");if(o){var i=o.dataset.o;open[i]=!open[i];render()}});
document.addEventListener("change",function(e){var c=e.target.dataset.c;if(c){ST[c]=e.target.checked;save();prog();var i=+c.split(".")[0];document.querySelectorAll(".card")[i].querySelector(".c").textContent=phCount(i)}});
document.getElementById("rst").onclick=function(){ST={};save();render()};
render();
