import{_ as j,r as i,a as g,o as _,c as d,b as t,w as l,T as y,d as e,u as s,e as u,t as D,n as G,f as M,g as x,p as A,h as z}from"./index-e6c5bcf0.js";import{u as J}from"./useFormSchemas-a3ddd8f3.js";import{c as K,F as P,a as m,E as f}from"./vee-validate.esm-adae6640.js";const q=async r=>{try{return await(await fetch("https://sushi-backend-henna.vercel.app/api/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})).json()}catch(c){return console.log(c),{err:c}}};const n=r=>(A("data-v-bfa53816"),r=r(),z(),r),H={class:"fullscreen"},Q={key:0,class:"message message_same-user"},W=n(()=>e("div",{class:"message__body"}," Упс, пользователь с такой же почтой уже существует ( ",-1)),X=[W],Y={key:0,class:"message message_error"},Z={class:"message__body"},$={key:0,class:"message message_success"},ee=n(()=>e("div",{class:"message__body"},"Пользователь добавлен в базу данных !)",-1)),se=[ee],oe={class:"fullscreen__body"},te={class:"fullscreen__content"},ae={class:"fullscreen__form-body"},ne=n(()=>e("div",{class:"action-form__title"},"Регистрация",-1)),ce={class:"action-form__elements"},ie={class:"action-form__element"},le={class:"action-form__input-body"},re=n(()=>e("div",{class:"action-form__placeholder"},"ФИО",-1)),_e={class:"action-form__element"},de={class:"action-form__input-body"},ue=n(()=>e("div",{class:"action-form__placeholder"},"Email",-1)),me={class:"action-form__element"},fe={class:"action-form__input-body"},pe=n(()=>e("div",{class:"action-form__placeholder"},"Номер телефона",-1)),he={class:"action-form__element"},ve={class:"action-form__element"},ge={class:"action-form__input-body"},ye=n(()=>e("div",{class:"action-form__placeholder"},"Пароль",-1)),be={class:"action-form__element"},ke={class:"action-form__input-body"},we=n(()=>e("div",{class:"action-form__placeholder"},"Повторите пароль",-1)),Se={class:"action-form__element"},Be=["disabled"],Fe={key:0,class:"action-form__login-btn"},Ce={__name:"RegisterView",setup(r){K({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!0,validateOnModelUpdate:!0});const c=i(!1),b=i(!1),B=i(!1),p=i(!1),k=i(null),F=i(["Москва","СПБ","Донецк","Ростов"]),C=i(F.value[0]),T=o=>{C.value=o},{registerSchema:I,isErr:w,toggleBlur:h,toggleFocus:v,isInvalidForm:L,invalidSubmit:R}=J(),O=async(o,{resetForm:V})=>{p.value=!0;let S={...o,name:o.username,city:C.value};const a=await q(S);console.log(a),a.isSuccess?(c.value=!0,setTimeout(()=>c.value=!1,3e3),V(),B.value=!0):a.isSameUser?(b.value=!0,setTimeout(()=>b.value=!1,3e3)):a.err&&(console.log(a.err),a.err.name?k.value="Ошибка в запросе fetch при регистрации!":k.value="Ошибка на стороне сервера, возможно в запросе к БД или БД не доступна",w.value=!0,setTimeout(()=>w.value=!1,3e3)),p.value=!1},E=o=>{console.log(o.key),o.key>="0"&&o.key<="9"||o.key=="+"||o.key=="Backspace"||o.key=="("||o.key==")"||o.key=="-"||o.key=="ArrowLeft"||o.key=="ArrowRight"||o.key=="Delete"||o.key=="Tab"||o.key==" "||o.preventDefault()};return(o,V)=>{const S=g("VCustomSelect"),a=g("LoadingGif"),N=g("router-link"),U=g("RouterLink");return _(),d("div",H,[t(y,{name:"message"},{default:l(()=>[b.value?(_(),d("div",Q,X)):u("",!0)]),_:1}),t(y,{name:"message"},{default:l(()=>[s(w)?(_(),d("div",Y,[e("div",Z,D(k.value),1)])):u("",!0)]),_:1}),t(y,{name:"message"},{default:l(()=>[c.value?(_(),d("div",$,se)):u("",!0)]),_:1}),e("div",oe,[e("div",te,[e("div",ae,[t(s(P),{onSubmit:O,onInvalidSubmit:s(R),class:"fullscreen__form action-form","validation-schema":s(I)},{default:l(()=>[ne,e("div",ce,[e("div",ie,[e("div",le,[re,t(s(m),{class:"action-form__input",type:"text",name:"username",onFocus:s(v),onBlur:s(h)},null,8,["onFocus","onBlur"])]),t(s(f),{class:"action-form__error-msg",name:"username"})]),e("div",_e,[e("div",de,[ue,t(s(m),{class:"action-form__input",name:"email",type:"text",onFocus:s(v),onBlur:s(h)},null,8,["onFocus","onBlur"])]),t(s(f),{class:"action-form__error-msg",name:"email"})]),e("div",me,[e("div",fe,[pe,t(s(m),{class:"action-form__input",name:"phone",type:"text",placeholder:"+7949 381 39 82",onFocus:s(v),onKeydown:E,onBlur:s(h)},null,8,["onFocus","onBlur"])]),t(s(f),{class:"action-form__error-msg",name:"phone"})]),e("div",he,[t(S,{"background-color":"#f8f1ff","default-title":"Ваш город",onUpdateValue:T,options:F.value},null,8,["options"])]),e("div",ve,[e("div",ge,[ye,t(s(m),{class:"action-form__input",name:"password",onFocus:s(v),onBlur:s(h),type:"password"},null,8,["onFocus","onBlur"])]),t(s(f),{class:"action-form__error-msg",name:"password"})]),e("div",be,[e("div",ke,[we,t(s(m),{class:"action-form__input",name:"passwordRepeat",type:"password"})]),t(s(f),{class:"action-form__error-msg",name:"passwordRepeat"})]),e("div",Se,[e("button",{disabled:p.value,class:G(["action-form__btn",{err:s(L)}]),type:"submit"}," Регистрация ",10,Be)]),p.value?(_(),M(a,{key:0})):u("",!0)])]),_:1},8,["onInvalidSubmit","validation-schema"]),t(y,{name:"login-btn"},{default:l(()=>[B.value?(_(),d("div",Fe,[t(N,{class:"action-form__btn",to:"/Login"},{default:l(()=>[x("Перейти к авторизации")]),_:1})])):u("",!0)]),_:1})]),t(U,{class:"home-button",to:"/"},{default:l(()=>[x("На главную")]),_:1})])])])}}},Ie=j(Ce,[["__scopeId","data-v-bfa53816"]]);export{Ie as default};
