import"./index-BMGIH1KI.js";import"./auth-DAZIr-f5.js";import{i as h,g as u,o as d}from"./index-54738136-Bd3ggPxx.js";import{g as y,a as f,T as b,c as x}from"./index.esm2017-D84HqCLi.js";var k={apiKey:"AIzaSyAGz2x2bGOZjgBcUxBV7E4-xLtL0NszImQ",authDomain:"aurora-language-learning-app.firebaseapp.com",projectId:"aurora-language-learning-app",storageBucket:"aurora-language-learning-app.appspot.com",messagingSenderId:"251894860890",appId:"1:251894860890:web:cbc7735ba34d698c56dc63",measurementId:"G-LKN9TF0F4D"};const o=h(k),w=u(o),I=y(o),c=["Art","Geography","History","Science","Sports"],q={Art:50,Geography:25,History:21,Science:31,Sports:50};let s={};function E(e){const i=`https://simple.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&list=categorymembers&cmlimit=${q[e]}&cmtitle=Category:${e}`;fetch(i).then(t=>t.json()).then(t=>{const r=Math.floor(Math.random()*t.query.categorymembers.length);console.log(t.query.categorymembers,t.query.categorymembers[r]);const p=t.query.categorymembers[r].title;let a="";const m=`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${p}`;fetch(m).then(n=>n.json()).then(n=>{a=Object.keys(n.query.pages)[0],n.query.pages[a].extract,console.log(n.query.pages[a].extract),s[e]=n.query.pages[a].extract})}).catch(t=>{console.error("Error fetching data:",t)})}c.forEach(e=>{E(e)});const g=document.getElementById("reading-menu");c.forEach(e=>{document.getElementById(e).onclick=()=>{g.classList.add("show"),document.getElementById("paragraph-holder").innerHTML=s[e]}});document.getElementById("close-reading-menu").onclick=()=>{g.classList.remove("show")};const A={"unit-1":[["artisan","nghệ nhân"],["community","cộng đồng"],["craft village","làng nghề thủ công"],["handicraft","sản phẩm thủ công"],["original","nguyên bản"]],"unit-2":[["bustling","hối hả"],["downtown","khu trung tâm"],["tram","xe điện"],["congested","ùn tắc giao thông"],["process","xử lí"]],"unit-3":[["accomplish","đạt được"],["delay","chậm trễ"],["priority","ưu tiên"],["stressed out","căng thẳng"],["due date","hạn chót"]],"unit-4":[["ancient","cổ đại"],["anniversary","lễ kỉ niệm"],["lâu đài","castle"],["basic","căn bản"],["found","thành lập"]],"unit-5":[["amazing","tuyệt vời"],["army-like","như trong quân đội"],["brilliant","rất thông minh"],["campus","khuôn viên trường đại học"],["confidence","sự tự tin"],["coral reef","rặng san hô"],["eco-tour","du lịch sinh thái"],["embrassing","làm ngượng ngùng, bối rối"],["exhilarating","đầy phấn khích"],["experience","trải nghiệm, kinh nghiệm"]]};for(let e=1;e<=5;e++)console.log("unit-"+e),document.getElementById("unit-"+e).onclick=()=>{B("unit-"+e),console.log("!")};let l="";d(w,async e=>{e&&(l=e.email)});async function B(e){A[e].forEach(async i=>{await f(x(I,l),{word:i[0],meaning:i[1],example:"",stage:0,time:b.now()})})}
