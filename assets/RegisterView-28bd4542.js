import{_ as G,u as K,r as n,a as v,o as i,c as R,b as s,w as t,T as w,d as o,e,F as M,f as j,g as S,h,t as z,i as g,j as l,E as _,k as U,v as q,n as H,p as J,l as O}from"./index-bfef6200.js";import{u as P}from"./useFormActions-efc04c66.js";const c=r=>(J("data-v-6a2f6be2"),r=r(),O(),r),Q={class:"fullscreen"},W={class:"fullscreen__body"},X={class:"fullscreen__content"},Y={class:"fullscreen__form-body"},Z=c(()=>o("div",{class:"action-form__title"},"Регистрация",-1)),$={class:"action-form__elements"},ee={class:"action-form__element"},oe={class:"action-form__input-body"},se=c(()=>o("div",{class:"action-form__placeholder"},"ФИО",-1)),te={class:"action-form__element"},ae={class:"action-form__input-body"},ne=c(()=>o("div",{class:"action-form__placeholder"},"Email",-1)),ce={class:"action-form__element"},ie={class:"action-form__input-body"},le=c(()=>o("div",{class:"action-form__placeholder"},"Номер телефона",-1)),_e={class:"action-form__element"},re={class:"action-form__element"},ue={class:"action-form__input-body"},de=c(()=>o("div",{class:"action-form__placeholder"},"Пароль",-1)),me={class:"action-form__element"},fe={class:"action-form__input-body"},pe=c(()=>o("div",{class:"action-form__placeholder"},"Повторите пароль",-1)),ve={class:"action-form__element"},he={key:0,class:"action-form__login-btn"},ge={__name:"RegisterView",setup(r){const{registerSchema:I}=K(),{isInvalidFormSubmit:L,toggleBlur:u,toggleFocus:d,invalidSubmit:E,phoneControl:T}=P(),y=n(!1),b=n(!1),m=n(!1),F=n(!1),B=n("Произошла ошибка"),V=n(["Москва","СПБ","Донецк","Ростов"]),k=n(V.value[0]),N=f=>{k.value=f},A=async(f,{resetForm:x})=>{m.value=!0;let p={...f,city:k.value};const a=await j(p);console.log(a),a.isSuccess?(b.value=!0,setTimeout(()=>b.value=!1,3e3),x(),F.value=!0):a.err&&(console.log(a.err),B.value=a.err,y.value=!0,setTimeout(()=>y.value=!1,3e3)),m.value=!1};return(f,x)=>{const p=v("VAlert"),a=v("VCustomSelect"),D=v("LoadingGif"),C=v("RouterLink");return i(),R("div",Q,[s(w,{name:"message"},{default:t(()=>[y.value?(i(),S(p,{key:0,position:"fixed",type:"error"},{default:t(()=>[h(z(B.value),1)]),_:1})):g("",!0)]),_:1}),s(w,{name:"message"},{default:t(()=>[b.value?(i(),S(p,{key:0,position:"fixed",type:"success"},{default:t(()=>[h(" Пользователь добавлен в базу данных !) ")]),_:1})):g("",!0)]),_:1}),o("div",W,[o("div",X,[o("div",Y,[s(e(M),{onSubmit:A,onInvalidSubmit:e(E),class:"fullscreen__form action-form","validation-schema":e(I)},{default:t(()=>[Z,o("div",$,[o("div",ee,[o("div",oe,[se,s(e(l),{class:"action-form__input",type:"text",name:"name",onFocus:e(d),onBlur:e(u)},null,8,["onFocus","onBlur"])]),s(e(_),{class:"action-form__error-msg",name:"name"})]),o("div",te,[o("div",ae,[ne,s(e(l),{class:"action-form__input",name:"email",type:"text",onFocus:e(d),onBlur:e(u)},null,8,["onFocus","onBlur"])]),s(e(_),{class:"action-form__error-msg",name:"email"})]),o("div",ce,[o("div",ie,[le,s(e(l),{class:"action-form__input",name:"phone",type:"text",placeholder:"+7949 381 39 82",onFocus:e(d),onKeydown:e(T),onBlur:e(u)},null,8,["onFocus","onKeydown","onBlur"])]),s(e(_),{class:"action-form__error-msg",name:"phone"})]),o("div",_e,[s(a,{"background-color":"#f8f1ff","default-title":"Ваш город",onUpdateValue:N,options:V.value},null,8,["options"])]),o("div",re,[o("div",ue,[de,s(e(l),{class:"action-form__input",name:"password",onFocus:e(d),onBlur:e(u),type:"password"},null,8,["onFocus","onBlur"])]),s(e(_),{class:"action-form__error-msg",name:"password"})]),o("div",me,[o("div",fe,[pe,s(e(l),{class:"action-form__input",name:"passwordRepeat",type:"password"})]),s(e(_),{class:"action-form__error-msg",name:"passwordRepeat"})]),o("div",ve,[U(o("button",{class:H(["action-form__btn",{err:e(L)}]),type:"submit"}," Регистрация ",2),[[q,!m.value]])]),m.value?(i(),S(D,{key:0})):g("",!0)])]),_:1},8,["onInvalidSubmit","validation-schema"]),s(w,{name:"login-btn"},{default:t(()=>[F.value?(i(),R("div",he,[s(C,{class:"action-form__btn",to:"/Login"},{default:t(()=>[h("Перейти к авторизации")]),_:1})])):g("",!0)]),_:1})]),s(C,{class:"home-button",to:"/"},{default:t(()=>[h("На главную")]),_:1})])])])}}},we=G(ge,[["__scopeId","data-v-6a2f6be2"]]);export{we as default};
