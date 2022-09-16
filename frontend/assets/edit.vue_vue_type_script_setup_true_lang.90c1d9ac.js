import{_ as S,C as h,B as x,v as R,t as U,D as q}from"./element-plus.374f5afd.js";import{d as N,a as I,b as M,c as L}from"./department.1e86bb73.js";import{P}from"./index.48f7fb70.js";import{u as T}from"./useDictOptions.fadeb82c.js";import{f as O}from"./index.66650ce1.js";import{d as $,s as E,r as j,e as z,a0 as G,o as f,c as H,V as l,M as s,L as J,u as F,S as K,a as D}from"./@vue.cab01781.js";const Q={class:"edit-popup"},W=D("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),ae=$({__name:"edit",emits:["success","close"],setup(X,{expose:_,emit:p}){const m=E(),d=E(),n=j("add"),B=z(()=>n.value=="edit"?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8"),u=G({id:"",pid:"",name:"",duty:"",mobile:"",sort:0,isStop:0}),b={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:["blur"]}],duty:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u59D3\u540D",trigger:["blur"]}],mobile:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",trigger:["blur"]},{validator:(t,e,r)=>{if(e){const a=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;if(console.log(a.test(e)),a.test(e))r();else return r(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"))}else return r(new Error("\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A"))},trigger:["blur"]}]},{optionsData:V}=T({dept:{api:N}}),g=async()=>{var t,e;await((t=m.value)==null?void 0:t.validate()),n.value=="edit"?await I(u):await M(u),(e=d.value)==null||e.close(),O.msgSuccess("\u64CD\u4F5C\u6210\u529F"),p("success")},A=(t="add")=>{var e;n.value=t,(e=d.value)==null||e.open()},c=t=>{for(const e in u)t[e]!=null&&t[e]!=null&&(u[e]=t[e])},v=async t=>{const e=await L({id:t.id});c(e)},y=()=>{p("close")};return _({open:A,setFormData:c,getDetail:v}),(t,e)=>{const r=S,a=h,i=x,C=R,w=U,k=q;return f(),H("div",Q,[l(P,{ref_key:"popupRef",ref:d,title:F(B),async:!0,width:"550px",onConfirm:g,onClose:y},{default:s(()=>[l(k,{ref_key:"formRef",ref:m,model:u,"label-width":"84px",rules:b},{default:s(()=>[u.pid!==0?(f(),J(a,{key:0,label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"pid"},{default:s(()=>[l(r,{class:"flex-1",modelValue:u.pid,"onUpdate:modelValue":e[0]||(e[0]=o=>u.pid=o),data:F(V).dept,clearable:"","node-key":"id",props:{value:"id",label:"name"},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data"])]),_:1})):K("",!0),l(a,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:s(()=>[l(i,{modelValue:u.name,"onUpdate:modelValue":e[1]||(e[1]=o=>u.name=o),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),l(a,{label:"\u8D1F\u8D23\u4EBA",prop:"duty"},{default:s(()=>[l(i,{modelValue:u.duty,"onUpdate:modelValue":e[2]||(e[2]=o=>u.duty=o),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u59D3\u540D",clearable:""},null,8,["modelValue"])]),_:1}),l(a,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"mobile"},{default:s(()=>[l(i,{modelValue:u.mobile,"onUpdate:modelValue":e[3]||(e[3]=o=>u.mobile=o),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",clearable:""},null,8,["modelValue"])]),_:1}),l(a,{label:"\u6392\u5E8F",prop:"sort"},{default:s(()=>[D("div",null,[l(C,{modelValue:u.sort,"onUpdate:modelValue":e[4]||(e[4]=o=>u.sort=o),min:0},null,8,["modelValue"]),W])]),_:1}),l(a,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop"},{default:s(()=>[l(w,{modelValue:u.isStop,"onUpdate:modelValue":e[5]||(e[5]=o=>u.isStop=o),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{ae as _};
