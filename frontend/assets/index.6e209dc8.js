var v=Object.defineProperty;var n=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,m=(a,e)=>{for(var t in e||(e={}))B.call(e,t)&&r(a,t,e[t]);if(n)for(var t of n(e))g.call(e,t)&&r(a,t,e[t]);return a};import{i as h,j as w}from"./setting.d2dba5fc.js";import{m as E}from"./index.23fb99dd.js";import{F as b}from"./index.043a2f2c.js";import{d as A,r as V,b as x,e as o,w as l,F as U,j as s,l as y,p as i,q as D}from"./index.76484067.js";import"./index.a85244d4.js";import"./pages.1d19bb92.js";import"./index.9bb23935.js";const j=i("span",null," \u57FA\u672C\u8BBE\u7F6E ",-1),k=i("div",{class:"muted"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\uFF0C\u652F\u6301jpg\u3001png\u683C\u5F0F",-1),N=D("\u4FDD\u5B58"),K=A({setup(a){const e=V({default_avatar:"",wechat:""}),t=async()=>{e.value=await h()},d=async()=>{await w(m({},e.value)),t()},_=()=>{d()};return t(),(S,u)=>{const c=s("el-form-item"),p=s("el-form"),f=s("el-card"),F=s("el-button");return y(),x(U,null,[o(f,{shadow:"never",class:"m-t-16"},{header:l(()=>[j]),default:l(()=>[o(p,{ref:"formRef",model:e.value,"label-width":"100px",size:"small"},{default:l(()=>[o(c,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF",prop:"default_avatar"},{default:l(()=>[o(E,{modelValue:e.value.default_avatar,"onUpdate:modelValue":u[0]||(u[0]=C=>e.value.default_avatar=C),limit:1},null,8,["modelValue"]),k]),_:1})]),_:1},8,["model"])]),_:1}),o(b,null,{default:l(()=>[o(F,{type:"primary",size:"small",onClick:_},{default:l(()=>[N]),_:1})]),_:1})],64)}}});export{K as default};