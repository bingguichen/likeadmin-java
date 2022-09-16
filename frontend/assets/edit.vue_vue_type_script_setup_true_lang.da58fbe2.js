import{X as J,B as W,w as Y,E as Z,a as ee,O as ue,P as le,_ as oe,$ as te,C as se,v as ae,D as ne}from"./element-plus.374f5afd.js";import{m as de,n as ie,b as re,o as me,M as p,p as pe,t as ce,f as Fe}from"./index.66650ce1.js";import{d as P,r as g,s as I,a0 as z,e as G,w as _e,j as fe,o as i,c as D,V as l,M as o,u as r,L as f,W as O,a,a8 as L,Q as Ee,U as ve,_ as R,T as C,n as q,S as v}from"./@vue.cab01781.js";import{c as Ce}from"./@vueuse.724ed0af.js";import{m as be,a as Ve,b as Be,c as De}from"./menu.2a012171.js";import{P as he}from"./index.48f7fb70.js";const ye={class:"icon-select"},Te={class:"flex justify-between"},Ae=a("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),ke=["onClick"],ge={class:"h-[280px]"},we={class:"flex flex-wrap"},Ue={key:0,class:"flex items-center"},xe=C("\u65E0"),Ne=P({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(h,{emit:y}){const T=g(0),A=[{name:"element\u56FE\u6807",icons:de()},{name:"\u672C\u5730\u56FE\u6807",icons:ie()}],E=I(),s=z({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),x=()=>{s.inputFocus=s.popoverVisible=!0},w=()=>{s.inputFocus=!1,s.popoverVisible=s.mouseoverSelect},N=m=>{s.mouseoverSelect=s.popoverVisible=!1,y("update:modelValue",m),y("change",m)},u=()=>{y("update:modelValue",""),y("change","")},S=G(()=>{var _,b;const m=(b=(_=A[T.value])==null?void 0:_.icons)!=null?b:[];if(!s.inputValue)return m;const d=s.inputValue.toLowerCase();return m.filter(V=>{if(V.toLowerCase().indexOf(d)!==-1)return V})}),U=()=>{q(()=>{var d;const m=(d=E.value)==null?void 0:d.$el.offsetWidth;s.popoverWidth=m<300?300:m})};return Ce(document.body,"click",()=>{s.popoverVisible=!!(s.inputFocus||s.mouseoverSelect)}),_e(()=>s.popoverVisible,async m=>{var d,_;await q(),m?(d=E.value)==null||d.focus():(_=E.value)==null||_.blur()}),fe(()=>{U()}),(m,d)=>{const _=re,b=Y,V=Z,$=ee,M=J;return i(),D("div",ye,[l(M,{trigger:"contextmenu",visible:s.popoverVisible,"onUpdate:visible":d[3]||(d[3]=t=>s.popoverVisible=t),width:s.popoverWidth},{reference:o(()=>[l(r(W),{ref_key:"inputRef",ref:E,modelValue:s.inputValue,"onUpdate:modelValue":d[2]||(d[2]=t=>s.inputValue=t),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:h.disabled,onFocus:x,onBlur:w,clearable:""},{prepend:o(()=>[h.modelValue?(i(),D("div",Ue,[l($,{class:"flex-1 w-20",content:h.modelValue,placement:"top"},{default:o(()=>[(i(),f(_,{class:"mr-1",key:h.modelValue,name:h.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(i(),D(O,{key:1},[xe],64))]),append:o(()=>[l(b,null,{default:o(()=>[l(_,{name:"el-icon-Close",size:18,onClick:u})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:o(()=>[a("div",{onMouseover:d[0]||(d[0]=R(t=>s.mouseoverSelect=!0,["stop"])),onMouseout:d[1]||(d[1]=R(t=>s.mouseoverSelect=!1,["stop"]))},[a("div",null,[a("div",Te,[Ae,a("div",null,[(i(),D(O,null,L(A,(t,e)=>a("span",{key:e,class:Ee(["cursor-pointer text-sm ml-2",{"text-primary":e==T.value}]),onClick:c=>T.value=e},ve(t.name),11,ke)),64))])]),a("div",ge,[l(V,null,{default:o(()=>[a("div",we,[(i(!0),D(O,null,L(r(S),t=>(i(),D("div",{key:t,class:"m-1"},[l(b,{onClick:e=>N(t)},{default:o(()=>[l(_,{name:t,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}}),Se={class:"edit-popup"},$e=C("\u76EE\u5F55"),Me=C("\u83DC\u5355"),Oe=C("\u6309\u94AE"),Ie={class:"flex-1"},Le=a("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`admin`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),Re={class:"flex-1"},qe=a("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`permission/admin/index`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),We={class:"flex-1"},Pe=a("div",{class:"form-tips"}," \u8BBF\u95EE\u8BE6\u60C5\u9875\u9762\uFF0C\u7F16\u8F91\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9AD8\u4EAE\u663E\u793A\uFF0C\u5982`/consumer/lists` ",-1),ze={class:"flex-1"},Ge=a("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`system:admin:list`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),je={class:"flex-1"},Ke=a("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Qe=C("\u663E\u793A"),Xe=C("\u9690\u85CF"),He=a("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),Je=C("\u6B63\u5E38"),Ye=C("\u505C\u7528"),Ze=a("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),eu=a("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),nu=P({__name:"edit",emits:["success","close"],setup(h,{expose:y,emit:T}){const A=I(),E=I(),s=g("add"),x=G(()=>s.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),w=g(me()),N=(t,e)=>{const c=t?w.value.filter(B=>B.toLowerCase().includes(t.toLowerCase())):w.value;e(c.map(B=>({value:B})))},u=z({id:"",pid:0,menuType:p.CATALOGUE,menuIcon:"",menuName:"",menuSort:0,paths:"",perms:"",component:"",selected:"",params:"",isCache:0,isShow:1,isDisable:0}),S={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],menuName:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},U=g([]),m=g([]),d=async()=>{const t=await be(),e={id:0,menuName:"\u9876\u7EA7",children:[]};m.value=pe(ce(t).filter(c=>c.menuType!=p.BUTTON)),e.children=t,U.value.push(e)},_=async()=>{var t,e;await((t=A.value)==null?void 0:t.validate()),s.value=="edit"?await Ve(u):await Be(u),(e=E.value)==null||e.close(),Fe.msgSuccess("\u64CD\u4F5C\u6210\u529F"),T("success")},b=(t="add")=>{var e;s.value=t,(e=E.value)==null||e.open()},V=t=>{for(const e in u)t[e]!=null&&t[e]!=null&&(u[e]=t[e])},$=async t=>{const e=await De({id:t.id});V(e)},M=()=>{T("close")};return d(),y({open:b,setFormData:V,getDetail:$}),(t,e)=>{const c=ue,B=le,F=se,j=oe,k=W,K=Ne,Q=te,X=ae,H=ne;return i(),D("div",Se,[l(he,{ref_key:"popupRef",ref:E,title:r(x),async:!0,width:"550px",onConfirm:_,onClose:M},{default:o(()=>[l(H,{ref_key:"formRef",ref:A,model:u,"label-width":"80px",rules:S},{default:o(()=>[l(F,{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType",required:""},{default:o(()=>[l(B,{modelValue:u.menuType,"onUpdate:modelValue":e[0]||(e[0]=n=>u.menuType=n)},{default:o(()=>[l(c,{label:r(p).CATALOGUE},{default:o(()=>[$e]),_:1},8,["label"]),l(c,{label:r(p).MENU},{default:o(()=>[Me]),_:1},8,["label"]),l(c,{label:r(p).BUTTON},{default:o(()=>[Oe]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(F,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(j,{class:"flex-1",modelValue:u.pid,"onUpdate:modelValue":e[1]||(e[1]=n=>u.pid=n),data:U.value,clearable:"","node-key":"id",props:{label:"menuName"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(F,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:o(()=>[l(k,{modelValue:u.menuName,"onUpdate:modelValue":e[2]||(e[2]=n=>u.menuName=n),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),u.menuType!=r(p).BUTTON?(i(),f(F,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"menuIcon"},{default:o(()=>[l(K,{class:"flex-1",modelValue:u.menuIcon,"onUpdate:modelValue":e[3]||(e[3]=n=>u.menuIcon=n)},null,8,["modelValue"])]),_:1})):v("",!0),u.menuType!=r(p).BUTTON?(i(),f(F,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[a("div",Ie,[l(k,{modelValue:u.paths,"onUpdate:modelValue":e[4]||(e[4]=n=>u.paths=n),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),Le])]),_:1})):v("",!0),u.menuType==r(p).MENU?(i(),f(F,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[a("div",Re,[l(Q,{class:"w-full",modelValue:u.component,"onUpdate:modelValue":e[5]||(e[5]=n=>u.component=n),"fetch-suggestions":N,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),qe])]),_:1})):v("",!0),u.menuType==r(p).MENU?(i(),f(F,{key:3,label:"\u9009\u4E2D\u83DC\u5355",prop:"p"},{default:o(()=>[a("div",We,[l(k,{modelValue:u.selected,"onUpdate:modelValue":e[6]||(e[6]=n=>u.selected=n),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),Pe])]),_:1})):v("",!0),u.menuType!=r(p).CATALOGUE?(i(),f(F,{key:4,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[a("div",ze,[l(k,{modelValue:u.perms,"onUpdate:modelValue":e[7]||(e[7]=n=>u.perms=n),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:""},null,8,["modelValue"]),Ge])]),_:1})):v("",!0),u.menuType==r(p).MENU?(i(),f(F,{key:5,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[a("div",null,[a("div",je,[l(k,{modelValue:u.params,"onUpdate:modelValue":e[8]||(e[8]=n=>u.params=n),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570",clearable:""},null,8,["modelValue"])]),Ke])]),_:1})):v("",!0),u.menuType!=r(p).BUTTON?(i(),f(F,{key:6,label:"\u662F\u5426\u663E\u793A",prop:"isShow",required:""},{default:o(()=>[a("div",null,[l(B,{modelValue:u.isShow,"onUpdate:modelValue":e[9]||(e[9]=n=>u.isShow=n)},{default:o(()=>[l(c,{label:1},{default:o(()=>[Qe]),_:1}),l(c,{label:0},{default:o(()=>[Xe]),_:1})]),_:1},8,["modelValue"]),He])]),_:1})):v("",!0),u.menuType!=r(p).BUTTON?(i(),f(F,{key:7,label:"\u83DC\u5355\u72B6\u6001",prop:"isDisable",required:""},{default:o(()=>[a("div",null,[l(B,{modelValue:u.isDisable,"onUpdate:modelValue":e[10]||(e[10]=n=>u.isDisable=n)},{default:o(()=>[l(c,{label:0},{default:o(()=>[Je]),_:1}),l(c,{label:1},{default:o(()=>[Ye]),_:1})]),_:1},8,["modelValue"]),Ze])]),_:1})):v("",!0),l(F,{label:"\u83DC\u5355\u6392\u5E8F",prop:"menuSort"},{default:o(()=>[a("div",null,[l(X,{modelValue:u.menuSort,"onUpdate:modelValue":e[11]||(e[11]=n=>u.menuSort=n)},null,8,["modelValue"]),eu])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{nu as _};
