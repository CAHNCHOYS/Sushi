import{_ as E,c as R,x as q,y as A,z as D,r as n,A as M,a as k,o as a,b as i,d as t,w as r,T as v,e,u as s,F as $,i as j,g as c,f as z,B as G,t as B,h as F,E as L,n as P,j as J,p as W,k as H}from"./index-19896134.js";import{u as K}from"./useFormSchemas-c1889a27.js";const l=_=>(W("data-v-2646cf5e"),_=_(),H(),_),Q={class:"fullscreen"},X={key:0,class:"message message_same-user"},Y=l(()=>e("div",{class:"message__body"}," Не удалось войти по ввденным данным. Пожалуйста, введите правильные данные! ",-1)),Z=[Y],ee={key:0,class:"message message_success"},se=l(()=>e("div",{class:"message__body"}," Авторизация прошла успешно! Вас переведут на главную страницу ! ",-1)),oe=[se],te={key:0,class:"message message_error"},ae={class:"message__body"},ne={key:0,class:"message message_error"},ie={class:"message__body"},re={class:"fullscreen__body"},ce={class:"fullscreen__content"},le={class:"fullscreen__form-body"},_e=l(()=>e("div",{class:"action-form__title"},"Логин",-1)),ue={class:"action-form__elements"},de={class:"action-form__element"},me={class:"action-form__input-body"},ve=l(()=>e("div",{class:"action-form__placeholder"},"Email",-1)),fe={class:"action-form__element"},pe={class:"action-form__input-body"},he=l(()=>e("div",{class:"action-form__placeholder"},"Пароль",-1)),ge={class:"action-form__input-wrapper"},ye={__name:"LoginView",setup(_){R({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!0,validateOnModelUpdate:!0});const{fetchUserCartProducts:T}=q(),C=A(),I=D(),{isErr:f,loginSchema:x,toggleBlur:y,toggleFocus:b,invalidSubmit:V,isInvalidForm:N}=K(),p=n(!0);M(()=>I.query.redirect,()=>{p.value=!0,setTimeout(()=>p.value=!1,2500)},{immediate:!0});const h=n(!1),g=n(!1),u=n(!1),S=n("Произошла ошибка"),d=n("password"),O=async m=>{u.value=!0;let o=await z("/api/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(m)});console.log(o),o.err?(console.log(o.err),S.value=o.err,f.value=!0,setTimeout(()=>f.value=!1,3e3)):o.noSuchUser?(h.value=!0,setTimeout(()=>h.value=!1,3e3)):o.token&&(G().addUserToStorage(o),g.value=!0,await T(),setTimeout(()=>{C.push("/"),g.value=!1},2e3)),u.value=!1};return(m,o)=>{const w=k("LoadingGif"),U=k("RouterLink");return a(),i("div",Q,[t(v,{name:"message"},{default:r(()=>[h.value?(a(),i("div",X,Z)):c("",!0)]),_:1}),t(v,{name:"message"},{default:r(()=>[g.value?(a(),i("div",ee,oe)):c("",!0)]),_:1}),t(v,{name:"message"},{default:r(()=>[s(f)?(a(),i("div",te,[e("div",ae,B(S.value),1)])):c("",!0)]),_:1}),t(v,{name:"message"},{default:r(()=>[m.$route.query.isLoginRequired&&p.value?(a(),i("div",ne,[e("div",ie," Для доступа к данной странице ("+B(m.$route.query.redirect)+") необходимо авторизироваться ! ",1)])):c("",!0)]),_:1}),e("div",re,[e("div",ce,[e("div",le,[t(s($),{onSubmit:O,onInvalidSubmit:s(V),"validation-schema":s(x)},{default:r(()=>[_e,e("div",ue,[e("div",de,[e("div",me,[ve,t(s(F),{class:"action-form__input",type:"text",name:"email",onFocus:s(b),onBlur:s(y)},null,8,["onFocus","onBlur"])]),t(s(L),{class:"action-form__error-msg",name:"email"})]),e("div",fe,[e("div",pe,[he,t(s(F),{class:"action-form__input",type:d.value,name:"password",onFocus:s(b),onBlur:s(y)},null,8,["type","onFocus","onBlur"])]),e("div",{class:"action-form__show-pass",onClick:o[0]||(o[0]=be=>d.value==="password"?d.value="text":d.value="password")}," Показать/скрыть пароль "),t(s(L),{class:"action-form__error-msg",name:"password"})]),e("div",ge,[u.value?c("",!0):(a(),i("button",{key:0,class:P(["action-form__btn",{err:s(N)}]),type:"submit"}," Войти ",2))])])]),_:1},8,["onInvalidSubmit","validation-schema"]),u.value?(a(),j(w,{key:0})):c("",!0)]),t(U,{class:"home-button",to:"/"},{default:r(()=>[J("На главную")]),_:1})])])])}}},ke=E(ye,[["__scopeId","data-v-2646cf5e"]]);export{ke as default};
