import{_ as j,r as l,a as C,o as r,c as d,b as t,w as i,T as h,d as e,u as s,e as v,n as L,f as A,p as D,g as M}from"./index-6584aca8.js";import{c as z,u as G,F as J,a as m,E as u}from"./vee-validate.esm-3a05442f.js";const K=async c=>{try{return await(await fetch("http://localhost:3000/api/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(c)})).json()}catch(n){return console.log(n),{err:n}}};const a=c=>(D("data-v-5fe51190"),c=c(),M(),c),P={class:"fullscreen"},q={key:0,class:"message message_same-user"},H=a(()=>e("div",{class:"message__body"}," Упс, пользователь с такой же почтой уже существует ( ",-1)),Q=[H],W={key:0,class:"message message_error"},X=a(()=>e("div",{class:"message__body"}," Ошибка в базе данных(возможно она сейчас не работает) ",-1)),Y=[X],Z={key:0,class:"message message_success"},$=a(()=>e("div",{class:"message__body"},"Пользователь добавлен в базу данных !)",-1)),ee=[$],se={class:"fullscreen__body"},oe={class:"fullscreen__content"},te={class:"fullscreen__form-body"},ae=a(()=>e("div",{class:"action-form__title"},"Регистрация",-1)),ne={class:"action-form__elements"},ce={class:"action-form__element"},ie={class:"action-form__input-body"},_e=a(()=>e("div",{class:"action-form__placeholder"},"ФИО",-1)),le={class:"action-form__element"},re={class:"action-form__input-body"},de=a(()=>e("div",{class:"action-form__placeholder"},"Email",-1)),me={class:"action-form__element"},ue={class:"action-form__input-body"},fe=a(()=>e("div",{class:"action-form__placeholder"},"Номер телефона",-1)),pe={class:"action-form__element"},he={class:"action-form__element"},ve={class:"action-form__input-body"},ge=a(()=>e("div",{class:"action-form__placeholder"},"Пароль",-1)),ye={class:"action-form__element"},be={class:"action-form__input-body"},ke=a(()=>e("div",{class:"action-form__placeholder"},"Повторите пароль",-1)),we={class:"action-form__element"},Se={key:0,class:"action-form__login-btn"},Fe={__name:"RegisterView",setup(c){z({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!0,validateOnModelUpdate:!0});const n=l(!1),g=l(!1),w=l(!1),S=l(["Москва","СПБ","Донецк","Ростов"]),F=l(S.value[0]),V=o=>{F.value=o},{registerSchema:x,isErr:y,toggleBlur:f,toggleFocus:p,isInvalidForm:T,invalidSubmit:I}=G(),O=async(o,{resetForm:B})=>{let{username:b,email:k,password:E,phone:N}=o,U={name:b,email:k,password:E,phone:N,city:F.value};const _=await K(U);console.log(_),_.isSuccess&&(n.value=!0,setTimeout(()=>n.value=!1,3e3),B(),w.value=!0),_.isSameUser&&(g.value=!0,setTimeout(()=>g.value=!1,3e3)),_.err&&(console.log(_.err),y.value=!0,setTimeout(()=>{y.value=!1},3e3))},R=o=>{console.log(o.key),o.key>="0"&&o.key<="9"||o.key=="+"||o.key=="Backspace"||o.key=="("||o.key==")"||o.key=="-"||o.key=="ArrowLeft"||o.key=="ArrowRight"||o.key=="Delete"||o.key=="Tab"||o.key==" "||o.preventDefault()};return(o,B)=>{const b=C("VCustomSelect"),k=C("router-link");return r(),d("div",P,[t(h,{name:"message"},{default:i(()=>[g.value?(r(),d("div",q,Q)):v("",!0)]),_:1}),t(h,{name:"message"},{default:i(()=>[s(y)?(r(),d("div",W,Y)):v("",!0)]),_:1}),t(h,{name:"message"},{default:i(()=>[n.value?(r(),d("div",Z,ee)):v("",!0)]),_:1}),e("div",se,[e("div",oe,[e("div",te,[t(s(J),{onSubmit:O,onInvalidSubmit:s(I),class:"fullscreen__form action-form","validation-schema":s(x)},{default:i(()=>[ae,e("div",ne,[e("div",ce,[e("div",ie,[_e,t(s(m),{class:"action-form__input",type:"text",name:"username",onFocus:s(p),onBlur:s(f)},null,8,["onFocus","onBlur"])]),t(s(u),{class:"action-form__error-msg",name:"username"})]),e("div",le,[e("div",re,[de,t(s(m),{class:"action-form__input",name:"email",type:"text",onFocus:s(p),onBlur:s(f)},null,8,["onFocus","onBlur"])]),t(s(u),{class:"action-form__error-msg",name:"email"})]),e("div",me,[e("div",ue,[fe,t(s(m),{class:"action-form__input",name:"phone",type:"text",placeholder:"+7949 381 39 82",onFocus:s(p),onKeydown:R,onBlur:s(f)},null,8,["onFocus","onBlur"])]),t(s(u),{class:"action-form__error-msg",name:"phone"})]),e("div",pe,[t(b,{"background-color":"#f8f1ff","default-title":"Ваш город",onUpdateValue:V,options:S.value},null,8,["options"])]),e("div",he,[e("div",ve,[ge,t(s(m),{class:"action-form__input",name:"password",onFocus:s(p),onBlur:s(f),type:"password"},null,8,["onFocus","onBlur"])]),t(s(u),{class:"action-form__error-msg",name:"password"})]),e("div",ye,[e("div",be,[ke,t(s(m),{class:"action-form__input",name:"passwordRepeat",type:"password"})]),t(s(u),{class:"action-form__error-msg",name:"passwordRepeat"})]),e("div",we,[e("button",{class:L(["action-form__btn",{err:s(T)}]),type:"submit"}," Регистрация ",2)])])]),_:1},8,["onInvalidSubmit","validation-schema"]),t(h,{name:"login-btn"},{default:i(()=>[w.value?(r(),d("div",Se,[t(k,{class:"action-form__btn",to:"/Login"},{default:i(()=>[A("Перейти к авторизации")]),_:1})])):v("",!0)]),_:1})])])])])}}},Ve=j(Fe,[["__scopeId","data-v-5fe51190"]]);export{Ve as default};
