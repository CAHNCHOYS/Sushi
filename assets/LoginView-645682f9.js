import{_ as A,m as M,q as N,u as R,a as q,s as G,r as S,x as $,b as l,o as n,c as w,d as t,w as a,T as b,e,f as s,F as j,g as u,i as _,h as d,t as x,j as F,E as k,n as z,p as D,l as P}from"./index-20580c92.js";import{u as H}from"./useFormActions-6dcece85.js";const m=i=>(D("data-v-79917a12"),i=i(),P(),i),J={class:"fullscreen"},K={class:"fullscreen__body"},O={class:"fullscreen__content"},Q={class:"fullscreen__form-body"},W=m(()=>e("div",{class:"action-form__title"},"Логин",-1)),X={class:"action-form__elements"},Y={class:"action-form__element"},Z={class:"action-form__input-body"},ss=m(()=>e("div",{class:"action-form__placeholder"},"Email",-1)),es={class:"action-form__element"},os={class:"action-form__input-body"},ts=m(()=>e("div",{class:"action-form__placeholder"},"Пароль",-1)),as={class:"action-form__btns"},ns={__name:"LoginView",setup(i){const L=M(),f=N(),{loginSchema:B}=R(),{isInvalidFormSubmit:V,toggleBlur:p,toggleFocus:v,invalidSubmit:E}=H(),o=q(),{fetchUserCartProducts:I}=G(),r=S(!1),c=S("password"),C=async h=>{r.value=!0,await o.loginUser(h),o.isUserLoggedIn&&(I(o.currentUser.id),setTimeout(()=>{L.push("/")},2e3)),r.value=!1};return $(()=>{f.query.redirect&&(o.isErrorMessageShown=!0,o.message=`Для доступа к данной странице ( ${f.query.redirect}) необходимо
        авторизироваться !`,setTimeout(()=>o.isErrorMessageShown=!1,2500))}),(h,g)=>{const y=l("VAlert"),T=l("LoadingGif"),U=l("RouterLink");return n(),w("div",J,[t(b,{name:"message"},{default:a(()=>[s(o).isSuccessMessageShown?(n(),u(y,{key:0,position:"fixed",type:"success"},{default:a(()=>[d(x(s(o).message),1)]),_:1})):_("",!0)]),_:1}),t(b,{name:"message"},{default:a(()=>[s(o).isErrorMessageShown?(n(),u(y,{key:0,position:"fixed",type:"error"},{default:a(()=>[d(x(s(o).message),1)]),_:1})):_("",!0)]),_:1}),e("div",K,[e("div",O,[e("div",Q,[t(s(j),{onSubmit:C,onInvalidSubmit:s(E),"validation-schema":s(B)},{default:a(()=>[W,e("div",X,[e("div",Y,[e("div",Z,[ss,t(s(F),{class:"action-form__input",type:"text",name:"email",onFocus:s(v),onBlur:s(p)},null,8,["onFocus","onBlur"])]),t(s(k),{class:"action-form__error-msg",name:"email"})]),e("div",es,[e("div",os,[ts,t(s(F),{class:"action-form__input",type:c.value,name:"password",onFocus:s(v),onBlur:s(p)},null,8,["type","onFocus","onBlur"])]),e("div",{class:"action-form__show-pass",onClick:g[0]||(g[0]=is=>c.value==="password"?c.value="text":c.value="password")}," Показать/скрыть пароль "),t(s(k),{class:"action-form__error-msg",name:"password"})]),e("div",as,[r.value?_("",!0):(n(),w("button",{key:0,class:z(["action-form__btn",{err:s(V)}]),type:"submit"}," Войти ",2))])])]),_:1},8,["onInvalidSubmit","validation-schema"]),r.value?(n(),u(T,{key:0})):_("",!0)]),t(U,{class:"home-button",to:"/"},{default:a(()=>[d("На главную")]),_:1})])])])}}},_s=A(ns,[["__scopeId","data-v-79917a12"]]);export{_s as default};
