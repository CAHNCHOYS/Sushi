import{_ as C,u as F,q as M,z as L,r as d,A as N,a as y,o as _,c as p,e as t,k as r,v as u,d as e,t as g,b as a,w as S,F as D,B as G,y as O,j as b,E as U,T as R,i as w,g as x,p as j,l as q}from"./index-a3469fee.js";const n=m=>(j("data-v-ef2bcfbe"),m=m(),q(),m),z={class:"user-account"},$={key:0,class:"user-account__body"},H=n(()=>e("div",{class:"user-account__main-title"},"Информация о вас",-1)),J={class:"user-account__info"},K={class:"user-account__all-info"},P={class:"user-account__info-block"},Q=n(()=>e("div",{class:"user-account__info-text"},"Имя:",-1)),W={class:"user-account__info-value"},X={class:"user-account__info-block"},Y=n(()=>e("div",{class:"user-account__info-text"},"email:",-1)),Z={class:"user-account__info-value"},ee={class:"user-account__info-block"},se=n(()=>e("div",{class:"user-account__info-text"},"Телефон:",-1)),te={class:"user-account__info-value"},oe={class:"user-account__edit"},ae={class:"edit-form__elements"},ce={class:"edit-form__element"},ne=n(()=>e("div",{class:"edit-form__element-title"},"Ваш эмайл",-1)),ie={class:"edit-form__element"},_e=n(()=>e("div",{class:"edit-form__element-title"},"Имя",-1)),re={class:"edit-form__element"},ue=n(()=>e("div",{class:"edit-form__element-title"},"Телефон",-1)),le={class:"edit-form__element"},de=["disabled"],me={key:0,class:"edit-form__success"},fe={class:"user-account__actions"},ve={key:1,class:"user-account__no-user"},pe={__name:"AccountView",setup(m){const{userEditSchema:E}=F(),V=M(),s=L(),o=d(!1),f=d(!1),l=d(!1),h=d(!1),k=d(""),A=async v=>{f.value=!0,v.id=s.currentUser.id;const i=await G(v);if(i.err&&(k.value=i.err,l.value=!0,setTimeout(()=>l.value=!1,5e3)),i.isUpdated){s.updateUserInfo(v),console.log(s.currentUser);let c=await O({email:s.currentUser.email,password:s.currentUser.password});console.log(c),c.err?(console.log(c.err),k.value=res.err,l.value=!0,setTimeout(()=>l.value=!1,5e3)):c.token&&(s.addTokenToStorage(c),h.value=!0,setTimeout(()=>{h.value=!1,o.value=!1},2500))}f.value=!1},I=()=>{window.confirm("Вы уверены что хотите выйти с аккаунта?")&&(s.logOutUser(),V.push("/"))},T=N(()=>({email:s.currentUser.email,name:s.currentUser.name,phone:s.currentUser.phone}));return(v,i)=>{const c=y("LoadingGif"),B=y("VErrorMessage");return _(),p("div",z,[t(s).currentUser?(_(),p("div",$,[H,r(e("div",J,[e("div",K,[e("div",P,[Q,e("div",W,g(t(s).currentUser.name),1)]),e("div",X,[Y,e("div",Z,g(t(s).currentUser.email),1)]),e("div",ee,[se,e("div",te,g(t(s).currentUser.phone),1)])])],512),[[u,!o.value]]),r(e("div",oe,[a(t(D),{onSubmit:A,class:"user-account__edit-form edit-form","validation-schema":t(E),"initial-values":t(T)},{default:S(()=>[e("div",ae,[e("div",ce,[ne,a(t(b),{name:"email",type:"text",class:"edit-form__element-input"}),a(t(U),{name:"email",class:"edit-form__wrong-data"})]),e("div",ie,[_e,a(t(b),{name:"name",type:"text",class:"edit-form__element-input"}),a(t(U),{name:"name",class:"edit-form__wrong-data"})]),e("div",re,[ue,a(t(b),{name:"phone",type:"text",class:"edit-form__element-input"}),a(t(U),{name:"phone",class:"edit-form__wrong-data"})]),r(e("div",le,[r(e("button",{disabled:f.value,type:"submit",class:"user-account__btn user-account__btn_update"}," Обновить данные! ",8,de),[[u,o.value]]),a(R,{name:"message"},{default:S(()=>[h.value?(_(),p("div",me," Информация была успешно обновлена! ")):w("",!0)]),_:1})],512),[[u,o.value]]),f.value?(_(),x(c,{key:0,class:"edit-form__loading"})):w("",!0),l.value?(_(),x(B,{key:1,"error-message":"Ошибка при обновлении информации"})):w("",!0)])]),_:1},8,["validation-schema","initial-values"])],512),[[u,o.value]]),e("div",fe,[e("button",{class:"user-account__btn user-account__btn_edit",onClick:i[0]||(i[0]=he=>o.value=!o.value)},[r(e("span",null,"Изменить данные ",512),[[u,!o.value]]),r(e("span",null," Отменить изменение ",512),[[u,o.value]])]),e("button",{class:"user-account__btn",onClick:I}," Выйти с аккаунта ")])])):(_(),p("div",ve," Не удалось получить данные о пользователе "))])}}},be=C(pe,[["__scopeId","data-v-ef2bcfbe"]]);export{be as default};
