import{j as C,k as _}from"./setting.94e8a443.js";import{F as B}from"./index.650b9dbd.js";import{_ as v}from"./index.b554da23.js";import{d as k,V as D,y as N,r,W as V,a as h,i as u,w as t,o as d,X as L,b as E,f as m,j as y}from"./vendor.bbaa8c82.js";const w=k({components:{FooterBtns:B},setup(){const e=D({privilege:"",icpNumber:"",icpLink:"",gaNumber:"",gaLink:""}),o={},s=()=>{C().then(l=>{console.log("res",l),e.privilege=l.privilege,e.icpNumber=l.icpNumber,e.icpLink=l.icpLink,e.gaNumber=l.gaNumber,e.gaLink=l.gaLink})},p=()=>{console.log(e.privilege,"=="),_({privilege:e.privilege,icpNumber:e.icpNumber,icpLink:e.icpLink,gaNumber:e.gaNumber,gaLink:e.gaLink}).then(l=>{console.log("res",l),s()}).catch(l=>{console.log("err",l)})};return N(()=>{s()}),{formData:e,rules:o,getCopyright:s,setCopyright:p}}}),A={class:"website-filing"},U=m("div",{class:"muted xs m-r-16"},"\u4F8B\u5982\u586B\u5199\uFF0CCopyright \xA9 2019-2020 \u516C\u53F8\u540D\u79F0",-1),I=m("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u57DF\u540D\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://beian.miit.gov.cn ",-1),P=m("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u516C\u5B89\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://www.beian.gov.cn ",-1),$=y("\u4FDD\u5B58");function j(e,o,s,p,l,z){const i=r("el-input"),n=r("el-form-item"),F=r("el-form"),c=r("el-card"),f=r("el-button"),g=r("footer-btns"),b=V("perm");return d(),h("div",A,[u(c,{shadow:"never",class:""},{default:t(()=>[u(F,{ref:"form",rules:e.rules,class:"ls-form",model:e.formData,"label-width":"150px",size:"small"},{default:t(()=>[u(n,{label:"\u7248\u6743\u4FE1\u606F",prop:"privilege"},{default:t(()=>[u(i,{modelValue:e.formData.privilege,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.privilege=a),placeholder:"\u8BF7\u8F93\u5165\u7248\u6743\u4FE1\u606F"},null,8,["modelValue"]),U]),_:1}),u(n,{label:"ICP\u5907\u6848\u53F7",prop:"icpNumber"},{default:t(()=>[u(i,{modelValue:e.formData.icpNumber,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.icpNumber=a),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),u(n,{label:"ICP\u5907\u6848\u53F7\u94FE\u63A5",prop:"icpLink"},{default:t(()=>[u(i,{modelValue:e.formData.icpLink,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.icpLink=a),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),I]),_:1}),u(n,{label:"\u516C\u5B89\u5907\u6848\u53F7",prop:"gaNumber"},{default:t(()=>[u(i,{modelValue:e.formData.gaNumber,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.gaNumber=a),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),u(n,{label:"\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5",prop:"gaLink"},{default:t(()=>[u(i,{modelValue:e.formData.gaLink,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gaLink=a),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),P]),_:1})]),_:1},8,["rules","model"])]),_:1}),u(g,null,{default:t(()=>[L((d(),E(f,{type:"primary",size:"small",onClick:e.setCopyright},{default:t(()=>[$]),_:1},8,["onClick"])),[[b,["setting:setCopyright"]]])]),_:1})])}var W=v(w,[["render",j]]);export{W as default};
