import{x as k,y as w,E as B,w as D,G as T}from"./element-plus.374f5afd.js";import{f as r,b as N}from"./index.66650ce1.js";import{u as $}from"./vue-clipboard3.91d4fd5f.js";import{d as j,r as F,e as L,a5 as S,o as s,c as i,V as o,M as t,W as U,a8 as G,L as M,a as m,u as P,k as R,T as W}from"./@vue.cab01781.js";const q={class:"code-preview"},z={class:"flex",style:{height:"50vh"}},A=W(" \u590D\u5236 "),Q=j({__name:"code-preview",props:{modelValue:{type:Boolean},code:null},emits:["update:modelValue"],setup(c,{emit:p}){const _=c,{toClipboard:f}=$(),u=F("index0"),b=async l=>{try{await f(l),r.msgSuccess("\u590D\u5236\u6210\u529F")}catch{r.msgError("\u590D\u5236\u5931\u8D25")}},n=L({get(){return _.modelValue},set(l){p("update:modelValue",l)}});return(l,a)=>{const h=S("highlightjs"),V=B,v=N,g=D,x=k,C=w,E=T;return s(),i("div",q,[o(E,{modelValue:P(n),"onUpdate:modelValue":a[1]||(a[1]=e=>R(n)?n.value=e:null),width:"900px",title:"\u4EE3\u7801\u9884\u89C8"},{default:t(()=>[o(C,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e)},{default:t(()=>[(s(!0),i(U,null,G(c.code,(e,d,y)=>(s(),M(x,{label:d,name:`index${y}`,key:d},{default:t(()=>[m("div",z,[o(V,{class:"flex-1"},{default:t(()=>[o(h,{autodetect:"",code:e},null,8,["code"])]),_:2},1024),m("div",null,[o(g,{onClick:H=>b(e),type:"primary",link:""},{icon:t(()=>[o(v,{name:"el-icon-CopyDocument"})]),default:t(()=>[A]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{Q as _};
