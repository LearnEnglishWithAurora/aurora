import"./index-CiSILCBj.js";import{i as c,g as r,o as g,s as l,c as m}from"./index-54738136-Bd3ggPxx.js";var d={apiKey:"AIzaSyAGz2x2bGOZjgBcUxBV7E4-xLtL0NszImQ",authDomain:"aurora-language-learning-app.firebaseapp.com",projectId:"aurora-language-learning-app",storageBucket:"aurora-language-learning-app.appspot.com",messagingSenderId:"251894860890",appId:"1:251894860890:web:cbc7735ba34d698c56dc63",measurementId:"G-LKN9TF0F4D"};const u=c(d),s=r(u);localStorage.getItem("state")=="true"&&window.location.replace("../home/");g(s,o=>{o?window.location.replace("../home/"):document.querySelector("#loader").remove()});var t="sign-in";document.getElementById("switch-mode").onclick=()=>{t=t=="sign-up"?"sign-in":"sign-up",document.getElementById("submit").innerHTML=t=="sign-in"?"Đăng nhập":"Đăng ký",document.getElementById("switch-mode").innerHTML=t=="sign-in"?"đăng ký":"đăng nhập"};document.getElementById("submit").onclick=()=>{const o=document.getElementById("email").value,i=document.getElementById("password").value;t=="sign-in"?l(s,o,i).then(e=>{const n=e.user;console.log(n),localStorage.setItem("state","true")}).catch(e=>{const n=e.code,a=e.message;console.log(n,a)}):t=="sign-up"&&m(s,o,i).then(e=>{const n=e.user;console.log(n),localStorage.setItem("state","true")}).catch(e=>{const n=e.code,a=e.message;console.log(n,a)})};
