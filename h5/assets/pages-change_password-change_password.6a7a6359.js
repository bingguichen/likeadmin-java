import{d as a,m as o,o as s,c as e,w as l,b as r,l as t,aw as d,ac as u,k as p,r as m,a as f}from"./index.68715320.js";import{_ as i,a as n}from"./u-form-item.46e66429.js";import{_ as c}from"./u-form.1dc422e0.js";import{_ as w}from"./u-button.5f826225.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.78cba928.js";var _=b(a({__name:"change_password",setup(a){const b=o({oldPassword:"",password:"",password2:""}),_=async()=>b.oldPassword?b.password?b.password2?b.password!=b.password2?uni.$u.toast("两次输入的密码不一致"):(await d(b),uni.$u.toast("操作成功"),void u()):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入原来的密码");return(a,o)=>{const d=p,u=m(f("u-input"),i),x=m(f("u-form-item"),n),h=m(f("u-form"),c),V=m(f("u-button"),w);return s(),e(d,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[100rpx] box-border"},{default:l((()=>[r(d,{class:"w-full"},{default:l((()=>[r(d,{class:"text-2xl font-medium mb-[60rpx]"},{default:l((()=>[t("修改登录密码")])),_:1}),r(h,{borderBottom:"","label-width":150},{default:l((()=>[r(x,{label:"原密码",borderBottom:""},{default:l((()=>[r(u,{class:"flex-1",modelValue:b.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=a=>b.oldPassword=a),border:!1,placeholder:"请输入原来的密码"},null,8,["modelValue"])])),_:1}),r(x,{label:"新密码",borderBottom:""},{default:l((()=>[r(u,{class:"flex-1",type:"password",modelValue:b.password,"onUpdate:modelValue":o[1]||(o[1]=a=>b.password=a),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),r(x,{label:"确认密码",borderBottom:""},{default:l((()=>[r(u,{class:"flex-1",type:"password",modelValue:b.password2,"onUpdate:modelValue":o[2]||(o[2]=a=>b.password2=a),placeholder:"再次输入新密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),r(d,{class:"mt-[100rpx]"},{default:l((()=>[r(V,{type:"primary",shape:"circle",onClick:_},{default:l((()=>[t(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-6d4b2648"]]);export{_ as default};
