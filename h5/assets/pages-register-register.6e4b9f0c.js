import{d as e,A as a,u as s,B as o,m as l,o as r,c as t,w as u,b as d,g as p,l as m,y as n,h as c,ac as i,r as f,a as b,i as _,k as x}from"./index.68715320.js";import{_ as w,a as g}from"./u-form-item.46e66429.js";import{_ as h}from"./u-form.1dc422e0.js";import{_ as v}from"./u-checkbox.88ec3706.js";import{_ as y}from"./u-button.5f826225.js";import{r as V}from"./account.124fcd97.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.78cba928.js";import"./appEnums.a2ba827b.js";var k=j(e({__name:"register",setup(e){const j=a(!1),k=s(),$=o((()=>1==k.getLoginConfig.openAgreement)),B=l({username:"",password:"",password2:""}),C=async()=>!j.value&&$.value?uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》"):B.username?B.password?B.password2?B.password!=B.password2?uni.$u.toast("两次输入的密码不一致"):(await V(B),uni.$u.toast("注册成功"),void i()):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入账号");return(e,a)=>{const s=f(b("u-input"),w),o=f(b("u-form-item"),g),l=f(b("u-form"),h),i=_,V=x,k=f(b("u-checkbox"),v),U=f(b("u-button"),y);return r(),t(V,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:u((()=>[d(V,{class:"w-full"},{default:u((()=>[d(l,{borderBottom:"","label-width":150},{default:u((()=>[d(o,{label:"创建账号",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",modelValue:B.username,"onUpdate:modelValue":a[0]||(a[0]=e=>B.username=e),border:!1,placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),d(o,{label:"设置密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password,"onUpdate:modelValue":a[1]||(a[1]=e=>B.password=e),placeholder:"请输入字母+数字组合的密码",border:!1},null,8,["modelValue"])])),_:1}),d(o,{label:"确认密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password2,"onUpdate:modelValue":a[2]||(a[2]=e=>B.password2=e),placeholder:"请确认密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),p($)?(r(),t(V,{key:0,class:"mt-[40rpx]"},{default:u((()=>[d(k,{modelValue:j.value,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value=e),shape:"circle"},{default:u((()=>[d(V,{class:"text-xs flex"},{default:u((()=>[m(" 已阅读并同意 "),d(i,{onClick:a[3]||(a[3]=n((()=>{}),["stop"])),class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:u((()=>[m(" 《服务协议》 ")])),_:1}),m(" 和"),d(i,{onClick:a[4]||(a[4]=n((()=>{}),["stop"])),class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:u((()=>[m(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):c("v-if",!0),d(V,{class:"mt-[60rpx]"},{default:u((()=>[d(U,{type:"primary",shape:"circle",onClick:C},{default:u((()=>[m(" 注册 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-0e6c2b86"]]);export{k as default};
