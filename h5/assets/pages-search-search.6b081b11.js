import{d as e,o as a,c as s,w as t,h as r,b as l,l as c,e as o,f as h,t as i,F as u,k as n,m as d,A as p,Y as _,ag as f,aE as m,aF as g,aG as x,at as b,r as v,a as y}from"./index.4f50f7aa.js";import{_ as w}from"./u-search.be8f9e92.js";import{_ as k}from"./news-card.572a4bb0.js";import{_ as j}from"./z-paging.19bee01b.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{b as V,c as I}from"./shop.b2a53e93.js";import"./u-icon.0a81a19c.js";import"./u-image.29be3df8.js";import"./icon_visit.5f8ba9a3.js";var z=C(e({__name:"suggest",props:{hot_search:{default:[]},his_search:{default:[]}},emits:["search","clear"],setup(e,{emit:d}){const p=e=>{d("search",e)};return(_,f)=>{const m=n;return a(),s(m,{class:"suggest bg-white"},{default:t((()=>[r(" 热门搜索 "),e.hot_search.length?(a(),s(m,{key:0,class:"hot"},{default:t((()=>[l(m,{class:"text-base font-medium pl-[24rpx] pt-[26rpx] pb-[6rpx]"},{default:t((()=>[c("热门搜索")])),_:1}),l(m,{class:"w-full pl-[24rpx] pr-[8rpx]"},{default:t((()=>[(a(!0),o(u,null,h(e.hot_search,(e=>(a(),s(m,{class:"keyword",onClick:a=>p(e)},{default:t((()=>[c(i(e),1)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):r("v-if",!0),e.hot_search.length&&e.his_search.length?(a(),s(m,{key:1,class:"mx-[24rpx] my-[40rpx] border-b border-solid border-0 border-light"})):r("v-if",!0),r(" 历史搜索 "),e.his_search.length?(a(),s(m,{key:2,class:"history"},{default:t((()=>[l(m,{class:"flex justify-between px-[24rpx] pb-[6rpx]"},{default:t((()=>[l(m,{class:"text-base font-medium"},{default:t((()=>[c("历史搜索")])),_:1}),l(m,{class:"text-xs text-muted",onClick:f[0]||(f[0]=()=>d("clear"))},{default:t((()=>[c("清空")])),_:1})])),_:1}),l(m,{class:"w-full pl-[24rpx] pr-[8rpx]"},{default:t((()=>[(a(!0),o(u,null,h(e.his_search,(e=>(a(),s(m,{class:"keyword",onClick:a=>p(e)},{default:t((()=>[c(i(e),1)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):r("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-60191c7a"]]);var S=C(e({__name:"search",setup(e){const c=d({hot_search:[],his_search:[],result:[],searching:!1}),i=p(""),C=_(),S=e=>{i.value=e,i.value&&(c.his_search.includes(i.value)||(c.his_search.unshift(i.value),f.set(m,c.his_search))),C.value.reload(),c.searching=!0},F=async()=>{(await b({title:"温馨提示",content:"是否清空历史记录？"})).confirm&&(f.set(m,""),c.his_search=[])},U=async(e,a)=>{try{const{lists:s}=await I({keyword:i.value,pageNo:e,pageSize:a});C.value.complete(s)}catch(s){console.log("报错=>",s),C.value.complete(!1)}};return(async()=>{try{c.hot_search=await V()}catch(e){console.log("获取热门搜索失败=>",e)}})(),c.his_search=f.get(m)||[],(e,d)=>{const p=v(y("u-search"),w),_=n,f=v(y("news-card"),k),m=v(y("z-paging"),j);return a(),s(_,{class:"search"},{default:t((()=>[r(" 搜索框 "),l(_,{class:"px-[24rpx] py-[14rpx] bg-white"},{default:t((()=>[l(p,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=e=>i.value=e),placeholder:"请输入关键词搜索",height:"72",onSearch:S,onCustom:S,onClear:d[1]||(d[1]=e=>c.searching=!1)},null,8,["modelValue"])])),_:1}),r(" 搜索 "),l(_,{class:"search-content"},{default:t((()=>[r("  "),g(l(z,{onSearch:S,onClear:F,hot_search:c.hot_search,his_search:c.his_search},null,8,["hot_search","his_search"]),[[x,!c.searching]]),r("  "),g(l(_,{class:"search-content-s pt-[20rpx]"},{default:t((()=>[l(m,{ref_key:"paging",ref:C,modelValue:c.result,"onUpdate:modelValue":d[2]||(d[2]=e=>c.result=e),onQuery:U,fixed:!1,height:"100%"},{default:t((()=>[(a(!0),o(u,null,h(c.result,((e,t)=>(a(),s(f,{key:e.id,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["modelValue"])])),_:1},512),[[x,c.searching]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-629a231d"]]);export{S as default};
