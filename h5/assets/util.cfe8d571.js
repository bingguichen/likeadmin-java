import{H as e,J as o,v as n,K as t,L as c}from"./index.68715320.js";const s=(e,o=!1,n)=>new Promise(((c,s)=>{let l=t();n&&(l=t().in(n)),l[o?"selectAll":"select"](e).boundingClientRect((function(e){return o&&Array.isArray(e)&&e.length||!o&&e?c(e):void s("找不到元素")})).exec()}));function l(){const e=n();return e[e.length-1]||{}}function a(e,o="navigateTo"){const n=e.query?`${e.path}?${function(e){let o="";for(const n of Object.keys(e)){const t=e[n],s=encodeURIComponent(n)+"=";if(!i(t))if(console.log(encodeURIComponent(n),c(t)),c(t)){for(const e of Object.keys(t))if(!i(t[e])){o+=encodeURIComponent(n+"["+e+"]")+"="+encodeURIComponent(t[e])+"&"}}else console.log(s+encodeURIComponent(t),"####"),o+=s+encodeURIComponent(t)+"&"}return o.slice(0,-1)}(e.query)}`:e.path;uni[o]({url:n})}const i=e=>null==e&&void 0===e;function r(n){return new Promise(((t,c)=>{const s=e();o({url:`${{}.VITE_APP_BASE_URL}/api/upload/image`,filePath:n,name:"file",header:{token:s},fileType:"image",success:e=>{console.log("uploadFile res ==> ",e);const o=JSON.parse(e.data);console.log("data.code",o.code),200==o.code?t(o.data):c()},fail:e=>{console.log(e),c()}})}))}export{l as c,s as g,a as n,r as u};
