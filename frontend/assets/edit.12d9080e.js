var w=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var D=(u,o,s)=>o in u?w(u,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[o]=s,V=(u,o)=>{for(var s in o||(o={}))y.call(o,s)&&D(u,s,o[s]);if(v)for(var s of v(o))A.call(o,s)&&D(u,s,o[s]);return u},C=(u,o)=>h(u,x(o));import{F as S}from"./index.e8866c8a.js";import{f as R,g as U,h as q}from"./organize.c10ccfe2.js";import{bA as I,d as N,u as z,c as P,r as M,t as T,a as $,o as j,b as L,e,w as d,j as m,l as G,m as l,E as H,aN as J,aL as K,q as O,x as Q,p as W}from"./index.1f7eca83.js";const X=u=>(J("data-v-22696a1c"),u=u(),K(),u),Y={class:"post-edit"},Z=X(()=>W("div",{class:"muted"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1)),ee=O("\u4FDD\u5B58"),ue=N({setup(u){const{router:o,route:s}=z(),p=P(()=>{var n;return(n=s.query)==null?void 0:n.id}),_=M(null),{formData:t,rules:B}=T($({formData:{name:"",code:"",sort:0,remarks:"",isStop:0},rules:{code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]}})),b=()=>{!p.value||R({id:p.value}).then(n=>{t.value=n})},g=()=>{var n;(n=_.value)==null||n.validate(a=>{if(!a)return;(p.value?U(C(V({},t.value),{id:p.value})):q(t.value)).then(()=>{setTimeout(()=>o.go(-1),500),Q({type:"success",message:"\u4FDD\u5B58\u6210\u529F"})})})};return j(()=>{b()}),(n,a)=>{const F=m("el-page-header"),f=m("el-card"),c=m("el-input"),i=m("el-form-item"),E=m("el-switch"),k=m("el-button");return G(),L("div",Y,[e(f,{shadow:"never"},{default:d(()=>[e(F,{content:l(p)?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D",onBack:a[0]||(a[0]=r=>n.$router.back())},null,8,["content"])]),_:1}),e(f,{shadow:"never",class:"m-t-15"},{default:d(()=>[e(l(H),{ref_key:"formRefs",ref:_,rules:l(B),class:"ls-form",model:l(t),"label-width":"150px",size:"small"},{default:d(()=>[e(i,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:d(()=>[e(c,{modelValue:l(t).name,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).name=r),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:d(()=>[e(c,{modelValue:l(t).code,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).code=r),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u6392\u5E8F",prop:"sort"},{default:d(()=>[e(c,{modelValue:l(t).sort,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"]),Z]),_:1}),e(i,{label:"\u5907\u6CE8",prop:"remarks"},{default:d(()=>[e(c,{modelValue:l(t).remarks,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).remarks=r),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5C97\u4F4D\u72B6\u6001"},{default:d(()=>[e(E,{modelValue:l(t).isStop,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).isStop=r),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1}),e(S,null,{default:d(()=>[e(k,{type:"primary",size:"small",onClick:g},{default:d(()=>[ee]),_:1})]),_:1})])}}});var se=I(ue,[["__scopeId","data-v-22696a1c"]]);export{se as default};
