var oe=Object.defineProperty,se=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var M=(e,t,o)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))re.call(t,o)&&M(e,o,t[o]);if(x)for(var o of x(t))ie.call(t,o)&&M(e,o,t[o]);return e},V=(e,t)=>se(e,ne(t));import{d as A,t as ae,c as y,r as u,a as v,b as I,w as _,e as J,o as d,f as m,n as N,g as O,F as G,h as H,i as l,p as Q,j as W,k as F,l as ce,m as ue,E as T,q as le,R as X,s as _e,u as de,v as pe,x as me,y as fe,z as he,A as ve,B as ge,N as j,C as ye,D as Ee,G as q,H as we,U as be,I as $e,J as Ae,K as Pe,L as Ie,M as Le,O as Re,P as ke,Q as De,S as Oe,T as Te,V as je,W as Ce}from"./vendor.e90358ac.js";const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};Ve();const Se={token:e=>e.user.token,userInfo:e=>e.user.user,config:e=>e.app.config,permission:e=>e.user.permissions},Fe=1,xe="1.0.0";function Me(e,t=1e3,o){let s=new Date(0).getTime();return function(...n){const i=new Date().getTime();if(i-s>t)return s=i,e.apply(o,n)}}function Ne(e){const t={};for(const o of e.split("&"))t[o.split("=")[0]]=o.split("=")[1];return t}function qe(e=[],t=[],o="children"){return e.forEach(s=>{const n=s[o];n?qe(n,t,o):t.push(s)}),t}const Be="modulepreload",B={},Ue="/",c=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${Ue}${s}`,s in B)return;B[s]=!0;const n=s.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":Be,n||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),n)return new Promise((p,f)=>{r.addEventListener("load",p),r.addEventListener("error",f)})})).then(()=>t())};function ze(e){return/([^?&=]+)=([^?&=]*)/g.test(e)}var P=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o};const Ke=A({components:{},props:{route:{type:Object,default:()=>({})},path:{type:String}},setup(e){const{path:t,route:o}=ae(e),s=y(()=>{var p;return!!((p=o.value.children)!=null?p:[]).filter(f=>{var g;return!((g=f.meta)==null?void 0:g.hidden)}).length}),n=y(()=>r=>r!==void 0?`${t.value}/${r}`:t.value),i=y(()=>{const r=o.value.query;try{return ze(r)?Ne(r):JSON.parse(r)}catch{}});return{hasChildren:s,resolvePath:n,resolveQuery:i}}}),Je={key:0};function Ge(e,t,o,s,n,i){const r=u("sub-menu",!0),p=u("el-sub-menu"),f=u("el-menu-item"),g=u("router-link");return e.route.meta.hidden?J("",!0):(d(),v("div",Je,[e.hasChildren?(d(),I(p,{key:0,index:e.path},{title:_(()=>[m("i",{class:N(["iconfont m-r-10 icon-szie",e.route.meta.icon])},null,2),m("span",null,O(e.route.meta.title),1)]),default:_(()=>[(d(!0),v(G,null,H(e.route.children,(E,w)=>(d(),I(r,{key:w,route:E,path:e.resolvePath(E.path)},null,8,["route","path"]))),128))]),_:1},8,["index"])):(d(),I(g,{key:1,to:{path:e.path,query:e.resolveQuery}},{default:_(()=>[l(f,{index:e.path},{default:_(()=>[m("i",{class:N(["iconfont m-r-10",e.route.meta.icon])},null,2),m("span",null,O(e.route.meta.title),1)]),_:1},8,["index"])]),_:1},8,["to"]))]))}var He=P(Ke,[["render",Ge],["__scopeId","data-v-298a41e8"]]),Y="/assets/avatar.f16c9209.png";const Qe=A({components:{SubMenu:He},setup(){const{store:e,route:t}=C(),o=y(()=>e.state.permission.sidebar),s=y(()=>{var i,r;return(r=(i=t.meta)==null?void 0:i.activeMenu)!=null?r:t.path});return{config:y(()=>e.getters.config),sidebar:o,currentPath:s}}}),We=e=>(Q("data-v-34633561"),e=e(),W(),e),Xe={class:"layout-aside"},Ye={key:0},Ze=We(()=>m("img",{class:"logo-img",src:Y,alt:""},null,-1)),et=[Ze],tt={key:1},ot=["src"],st={class:"line-1"},nt={class:"scrollbar-wrap"};function rt(e,t,o,s,n,i){const r=u("router-link"),p=u("sub-menu"),f=u("el-menu"),g=u("el-scrollbar");return d(),v("div",Xe,[l(r,{to:"/workbench",class:"logo flex col-center"},{default:_(()=>[e.config.webLogo==""?(d(),v("div",Ye,et)):(d(),v("div",tt,[m("img",{class:"logo-img",src:e.config.webLogo,alt:""},null,8,ot)])),m("div",st,O(e.config.webName),1)]),_:1}),m("div",nt,[l(g,{style:{height:"100%"},class:"ls-scrollbar"},{default:_(()=>[l(f,{"active-text-color":"#fff","background-color":"#2a2c41","default-active":e.currentPath,"text-color":"#E5E5E5"},{default:_(()=>[(d(!0),v(G,null,H(e.sidebar,(E,w)=>(d(),I(p,{key:w,route:E,path:E.path},null,8,["route","path"]))),128))]),_:1},8,["default-active"])]),_:1})])])}var it=P(Qe,[["render",rt],["__scopeId","data-v-34633561"]]);const at=A({name:"layout-main",setup(){const{route:e}=C();return{keepAlive:y(()=>e.meta.keepAlive)}}}),ct={class:"layout-main"},ut={class:"p-15"};function lt(e,t,o,s,n,i){const r=u("router-view"),p=u("el-scrollbar");return d(),v("div",ct,[l(p,null,{default:_(()=>[m("div",ut,[l(r)])]),_:1})])}var _t=P(at,[["render",lt],["__scopeId","data-v-acd8804e"]]);const dt=A({setup(){const{store:e,router:t}=C(),o=y(()=>e.getters.userInfo);return console.log("____userInfo____",o),{userInfo:o,handleCommand:n=>{switch(n){case"logout":e.dispatch("user/logout").then(()=>{t.push("/login"),e.commit("permission/setPermission",{auth:null,root:0})})}}}}}),pt=e=>(Q("data-v-0131262e"),e=e(),W(),e),mt={class:"layout-header"},ft={class:"admin-info flex flex-center m-l-40"},ht={key:0},vt=pt(()=>m("img",{class:"default-avatar",src:Y,alt:""},null,-1)),gt=[vt],yt={key:1},Et={class:"m-l-10"},wt={class:"flex flex-center"},bt=F("\u4E2A\u4EBA\u8BBE\u7F6E"),$t=F("\u9000\u51FA\u767B\u5F55");function At(e,t,o,s,n,i){const r=u("el-avatar"),p=u("arrow-down"),f=u("el-icon"),g=u("el-dropdown-item"),E=u("router-link"),w=u("el-dropdown-menu"),te=u("el-dropdown");return d(),v("div",mt,[m("div",ft,[e.userInfo.avatar==""?(d(),v("div",ht,gt)):(d(),v("div",yt,[l(r,{size:40,src:e.userInfo.avatar},null,8,["src"])])),m("div",Et,[l(te,{trigger:"hover",onCommand:e.handleCommand},{dropdown:_(()=>[l(w,null,{default:_(()=>[l(E,{to:"/setting/personal_data"},{default:_(()=>[l(g,null,{default:_(()=>[bt]),_:1})]),_:1})]),_:1}),l(w,null,{default:_(()=>[l(g,{command:"logout"},{default:_(()=>[$t]),_:1})]),_:1})]),default:_(()=>[m("div",wt,[F(O(e.userInfo.username)+" ",1),l(f,{class:"el-icon--right"},{default:_(()=>[l(p)]),_:1})])]),_:1},8,["onCommand"])])])])}var Pt=P(dt,[["render",At],["__scopeId","data-v-0131262e"]]);const It=A({components:{LayoutAside:it,LayoutMain:_t,LayoutHeader:Pt}}),Lt={class:"layout"},Rt={class:"aside"},kt={class:"main"};function Dt(e,t,o,s,n,i){const r=u("layout-aside"),p=u("layout-header"),f=u("layout-main");return d(),v("div",Lt,[m("div",Rt,[l(r)]),m("div",kt,[l(p),l(f)])])}var U=P(It,[["render",Dt]]);const Ot=[{path:"/",redirect:"workbench",name:"index",component:U},{path:"/permission",component:U,children:[{path:"admin/edit",component:()=>c(()=>import("./edit.aac1ed15.js"),["assets/edit.aac1ed15.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css"]),meta:{title:"\u7F16\u8F91\u7BA1\u7406\u5458",activeMenu:"/permission/admin"}},{path:"menu/edit",component:()=>c(()=>import("./edit.d4245c18.js"),["assets/edit.d4245c18.js","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js","assets/index.0a79ebd6.js","assets/index.c8f32c75.css"]),meta:{title:"\u7F16\u8F91\u83DC\u5355",activeMenu:"/permission/menu"}},{path:"role/edit",component:()=>c(()=>import("./edit.e1e7423b.js"),["assets/edit.e1e7423b.js","assets/edit.629c18ed.css","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js"]),meta:{title:"\u7F16\u8F91\u89D2\u8272",activeMenu:"/permission/role"}}]},{path:"/login",component:()=>c(()=>import("./login.4804db31.js"),["assets/login.4804db31.js","assets/login.b806d417.css","assets/vendor.e90358ac.js"])},{path:"/500",component:()=>c(()=>import("./500.bccd3436.js"),["assets/500.bccd3436.js","assets/error.4028c6ac.js","assets/error.af0fe351.css","assets/vendor.e90358ac.js"])},{path:"/:pathMatch(.*)*",component:()=>c(()=>import("./404.0616677d.js"),["assets/404.0616677d.js","assets/error.4028c6ac.js","assets/error.af0fe351.css","assets/vendor.e90358ac.js"])}],$=ce({history:ue("/"),routes:Ot,scrollBehavior(e,t,o){return o||{top:0}}}),k={key:"like_admin_",set(e,t,o){e=this.getKey(e);let s={expire:o?this.time()+o:"",value:t};typeof s=="object"&&(s=JSON.stringify(s));try{window.localStorage.setItem(e,s)}catch{return!1}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return!1;const{value:o,expire:s}=JSON.parse(t);return s&&s<this.time()?(window.localStorage.removeItem(e),!1):o}catch{return!1}},time(){return Math.round(new Date().getTime()/1e3)},remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},D="token",mo="account",R={success:({show:e,msg:t,data:o})=>o,error:({msg:e})=>(console.log(e,"msg"),T({type:"error",message:e}),Promise.reject(e)),redirect:Me(()=>(h.commit("user/setToken",""),h.commit("user/setUser",{}),k.remove(D),$.push("/login"),Promise.reject())),page:({data:e})=>(window.location.href=e.url,e)},a=le.create({baseURL:"https://likeadmin-java-api.yixiangonline.com/api",timeout:60*1e3,headers:{"Content-Type":"application/json",version:xe}});a.interceptors.request.use(e=>{const t=h.getters.token;return e.headers&&(e.headers.token=t),e},e=>Promise.reject(e));a.interceptors.response.use(e=>{switch(e.data.code){case 200:return R.success(e.data);case 300:case 310:case 311:case 312:case 313:case 314:case 403:case 404:case 500:case 330:case 331:return R.error(e.data);case-1:case 332:case 333:return R.redirect();case 2:return R.page(e.data)}},e=>(console.log(e),T({type:"error",message:e}),Promise.reject(e)));function fo(e){return a.post("/album/cateAdd",e)}function ho(e){return a.post("/album/cateRename",e)}function vo(e){return a.post("/album/cateDel",e)}function go(e){return a.get("/album/cateList",{params:e})}function yo(e){return a.get("/album/albumList",{params:e})}function Eo(e){return a.post("/album/albumDel",e)}function wo(e){return a.post("/album/albumMove",e)}function Tt(){return a.get("/index/config")}const jt={namespaced:!0,state:{config:{}},mutations:{setConfig(e,t){e.config=t}},actions:{getConfig({commit:e}){return new Promise((t,o)=>{Tt().then(s=>{e("setConfig",s),t(s)})})}}};function bo(e){return a.get("/system/admin/list",{params:e})}function $o(e){return a.post("/system/admin/add",e)}function Ao(e){return a.post("/system/admin/edit",e)}function Po(e){return a.post("/system/admin/del",e)}function Io(e){return a.get("/system/admin/detail",{params:e})}function Lo(e){return a.post("/system/admin/disable",e)}function Ro(e){return a.get("/system/role/list",{params:e})}function ko(e){return a.post("/system/role/add",b({},e))}function Do(e){return a.post("/system/role/edit",b({},e))}function Oo(e){return a.post("/system/role/del",b({},e))}function To(e){return a.get("/system/role/detail",{params:e})}function jo(){return a.get("/system/menu/list")}function Ct(){return a.get("/system/menu/route")}function Co(e){return a.get("/system/menu/detail",{params:e})}function Vo(e){return a.post("/system/menu/add",e)}function So(e){return a.post("/system/menu/edit",e)}function Fo(e){return a.post("/system/menu/del",e)}const S={"/src/views/account/login.vue":()=>c(()=>import("./login.4804db31.js"),["assets/login.4804db31.js","assets/login.b806d417.css","assets/vendor.e90358ac.js"]),"/src/views/error/404.vue":()=>c(()=>import("./404.0616677d.js"),["assets/404.0616677d.js","assets/error.4028c6ac.js","assets/error.af0fe351.css","assets/vendor.e90358ac.js"]),"/src/views/error/500.vue":()=>c(()=>import("./500.bccd3436.js"),["assets/500.bccd3436.js","assets/error.4028c6ac.js","assets/error.af0fe351.css","assets/vendor.e90358ac.js"]),"/src/views/workbench/index.vue":()=>c(()=>import("./index.90a949bb.js"),["assets/index.90a949bb.js","assets/index.2b465026.css","assets/vendor.e90358ac.js"]),"/src/views/error/components/error.vue":()=>c(()=>import("./error.4028c6ac.js"),["assets/error.4028c6ac.js","assets/error.af0fe351.css","assets/vendor.e90358ac.js"]),"/src/views/permission/admin/edit.vue":()=>c(()=>import("./edit.aac1ed15.js"),["assets/edit.aac1ed15.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css"]),"/src/views/permission/admin/index.vue":()=>c(()=>import("./index.913f3e1d.js"),["assets/index.913f3e1d.js","assets/index.e2bbd555.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css"]),"/src/views/permission/menu/edit.vue":()=>c(()=>import("./edit.d4245c18.js"),["assets/edit.d4245c18.js","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js","assets/index.0a79ebd6.js","assets/index.c8f32c75.css"]),"/src/views/permission/menu/index.vue":()=>c(()=>import("./index.8a6c54e7.js"),["assets/index.8a6c54e7.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/vendor.e90358ac.js"]),"/src/views/permission/role/edit.vue":()=>c(()=>import("./edit.e1e7423b.js"),["assets/edit.e1e7423b.js","assets/edit.629c18ed.css","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js"]),"/src/views/permission/role/index.vue":()=>c(()=>import("./index.4805c45b.js"),["assets/index.4805c45b.js","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css"]),"/src/views/setting/personal/personal_data.vue":()=>c(()=>import("./personal_data.b2e2576b.js"),["assets/personal_data.b2e2576b.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css"]),"/src/views/setting/service/online_service.vue":()=>c(()=>import("./online_service.16e7db97.js"),["assets/online_service.16e7db97.js","assets/online_service.68ccc7e3.css","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/setting.28f6519d.js"]),"/src/views/setting/system/cache.vue":()=>c(()=>import("./cache.81510bca.js"),["assets/cache.81510bca.js","assets/cache.c6309f89.css","assets/setting.28f6519d.js","assets/vendor.e90358ac.js"]),"/src/views/setting/system/environment.vue":()=>c(()=>import("./environment.99058d19.js"),["assets/environment.99058d19.js","assets/setting.28f6519d.js","assets/vendor.e90358ac.js"]),"/src/views/setting/system/journal.vue":()=>c(()=>import("./journal.146bac5e.js"),["assets/journal.146bac5e.js","assets/setting.28f6519d.js","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/vendor.e90358ac.js"]),"/src/views/setting/user/index.vue":()=>c(()=>import("./index.1a30b286.js"),["assets/index.1a30b286.js","assets/setting.28f6519d.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css"]),"/src/views/setting/user/login.vue":()=>c(()=>import("./login.73206ff5.js"),["assets/login.73206ff5.js","assets/login.5c00f21e.css","assets/setting.28f6519d.js","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js"]),"/src/views/setting/website/filing.vue":()=>c(()=>import("./filing.8f1d8d17.js"),["assets/filing.8f1d8d17.js","assets/setting.28f6519d.js","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/vendor.e90358ac.js"]),"/src/views/setting/website/information.vue":()=>c(()=>import("./information.605a2696.js"),["assets/information.605a2696.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/vendor.e90358ac.js","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css","assets/setting.28f6519d.js"]),"/src/views/setting/website/protocol.vue":()=>c(()=>import("./protocol.ad02125c.js"),["assets/protocol.ad02125c.js","assets/protocol.2bacd504.css","assets/setting.28f6519d.js","assets/vendor.e90358ac.js","assets/index.2a7c75cf.js","assets/index.f6096b4e.css","assets/index.719d8460.js","assets/index.7aa9d0be.css","assets/index.07b66784.js","assets/index.104ca5ab.css","assets/index.9f188be7.js","assets/index.561c5e64.css"]),"/src/views/permission/menu/select-icon/index.vue":()=>c(()=>import("./index.0a79ebd6.js"),["assets/index.0a79ebd6.js","assets/index.c8f32c75.css","assets/vendor.e90358ac.js"])};function Z(e,t=!0){return e.map(o=>{const s=Vt(o,t);return o.children!=null&&o.children&&o.children.length&&(s.children=Z(o.children,!1)),s})}function Vt(e,t){const o={path:t?`/${e.paths}`:e.paths,name:e.paths,meta:{hidden:!e.isShow,keepAlive:!!e.isCache,title:e.menuName,perms:e.perms,query:e.params,icon:e.menuIcon,activePath:e.selected}};switch(e.menuType){case"M":o.component=X;break;case"C":o.component=St(e.component);break}return o}console.log(S);function St(e){try{const t=Object.keys(S).find(o=>o.includes(`${e}.vue`));if(t)return S[t];throw Error(`\u627E\u4E0D\u5230\u7EC4\u4EF6${e}\uFF0C\u8BF7\u786E\u4FDD\u7EC4\u4EF6\u8DEF\u5F84\u6B63\u786E`)}catch(t){return console.error(t),X}}const Ft={namespaced:!0,state:{routes:[],sidebar:[]},getters:{},mutations:{setSidebar(e,t){e.sidebar=t}},actions:{generateRoutes({commit:e}){return new Promise((t,o)=>{Ct().then(s=>{const n=JSON.parse(JSON.stringify(s)),i=Z(n);e("setSidebar",i),t(i)}).catch(s=>{o(s)})})}}};function xt(e){return a.post("/system/login",V(b({},e),{terminal:Fe}))}function Mt(){return a.post("/system/logout")}function Nt(){return a.get("/system/admin/self")}function xo(e){return a.post("/system/admin/upInfo",e)}const qt={namespaced:!0,state:{token:k.get(D)||"",user:{},permissions:[]},mutations:{setToken(e,t){e.token=t,k.set(D,t)},setUser(e,t){e.user=t},setPermission(e,t){e.permissions=t}},actions:{login({commit:e},t){const{account:o,password:s}=t;return new Promise((n,i)=>{xt({username:o,password:s}).then(r=>{e("setToken",r.token),n(r)}).catch(r=>{i(r)})})},logout({commit:e}){return new Promise((t,o)=>{Mt().then(s=>{e("setToken",""),e("setUser",{}),e("setPermission",[]),k.remove(D),t(s)}).catch(s=>{o(s)})})},getUser({commit:e}){return new Promise((t,o)=>{Nt().then(s=>{e("setUser",s.user),e("setPermission",s.permissions),console.log("___data.user___",s.user),t(s)}).catch(s=>{o(s)})})}}};var Bt={app:jt,permission:Ft,user:qt};const Ut=_e({modules:Bt,getters:Se}),ee=Symbol("vue-store");function zt(){return de(ee)}var h=Ut;function C(){const e=zt(),t=pe(),o=me();return{store:e,route:t,router:o}}const Kt=A({setup(){const{store:e,route:t}=C(),o=fe(!0);return he("reload",()=>{o.value=!1,ge(()=>{o.value=!0})}),ve(async()=>{const n=await e.dispatch("app/getConfig");console.log("data",n);let i=document.querySelector('link[rel="icon"]');if(i){i.href=n.webFavicon;return}i=document.createElement("link"),i.rel="icon",i.href=n.webFavicon,document.head.appendChild(i)}),{routerAlive:o}}});function Jt(e,t,o,s,n,i){const r=u("router-view");return e.routerAlive?(d(),I(r,{key:0})):J("",!0)}var Gt=P(Kt,[["render",Jt]]);j.configure({showSpinner:!1});const z="/login",Ht=["/login"];$.beforeEach(async(e,t,o)=>{var n;if(j.start(),((n=e.meta)==null?void 0:n.title)&&(document.title=e.meta.title),h.getters.token)if(h.getters.permission.length===0)try{await h.dispatch("user/getUser"),(await h.dispatch("permission/generateRoutes")).forEach(r=>{$.addRoute("index",r)}),console.log($.getRoutes()),e.path==="/login"?o({path:"/"}):o(V(b({},e),{replace:!0}))}catch{await h.dispatch("user/logout"),o({path:z,query:{redirect:e.fullPath}}),j.done()}else o();else Ht.includes(e.path)?o():o({path:z,query:{redirect:e.fullPath}})});$.afterEach(async(e,t)=>{j.done()});var Qt=e=>{e.use(ye,{zIndex:3e3,locale:Ee}),Object.keys(q).forEach(t=>{e.component(t,q[t])})};we([$e,Ae,Pe,Ie,Le,Re,ke,De,Oe,Te]);var Wt=e=>{e.component("VChart",be)};const Xt="#4a5dff",Yt="#67c23a",Zt="#fb9400",eo="#f56c6c",to="#909399",oo="#333333",so="#666666",no="#999999";var ro={color_primary:Xt,color_success:Yt,color_warning:Zt,color_danger:eo,color_ingo:to,font_color_primary:oo,font_color_regular:so,font_color_secondary:no};(function(){const t=new je(".copy-btn");t.on("success",o=>{T.success("\u590D\u5236\u6210\u529F"),o.clearSelection()}),t.on("error",o=>{console.error(o),T.success("\u590D\u5236\u5931\u8D25")})})();var io={mounted:(e,t)=>{e.className=e.className+" copy-btn",e.setAttribute("data-clipboard-text",t.value)},updated:(e,t)=>{e.setAttribute("data-clipboard-text",t.value)}},ao=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:io}),co={mounted:(e,t)=>{const{value:o}=t,s=h.getters&&h.getters.permission,n="*";if(Array.isArray(o))o.length>0&&(s.some(r=>n==r||o.includes(r))||e.parentNode&&e.parentNode.removeChild(e));else throw new Error(`like v-perm="['system:admin:edit']`)}},uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:co});const K={"./modules/copy.ts":ao,"./modules/perm.ts":uo};var lo=e=>{Object.keys(K).forEach(t=>{const o=t.replace(/^\.\/.*\/(.*)\.\w+$/,"$1");e.directive(o,K[t].default)})};const L=Ce(Gt);L.config.globalProperties.$variables=ro;Qt(L);Wt(L);lo(L);L.use($).use(h,ee).mount("#app");export{mo as A,Lo as B,Po as C,Fo as D,Oo as E,Nt as F,xo as G,P as _,Ro as a,Io as b,Ao as c,$o as d,fo as e,ho as f,vo as g,go as h,Eo as i,wo as j,yo as k,zt as l,Co as m,jo as n,Vo as o,So as p,qe as q,ko as r,Do as s,To as t,C as u,xe as v,k as w,a as x,Y as y,bo as z};
