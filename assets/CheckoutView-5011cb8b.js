import{_ as $,m as j,Y as q,u as W,r as l,Z as Y,a as S,o as c,c as _,e as o,b as t,w as C,F as Z,g as N,i as d,d as e,j as s,E as a,D as z,G as B,n as y,t as F,k as A,$ as H,h as J,p as K,l as Q,a0 as X}from"./index-1f35e4f5.js";const ee=""+new URL("PizzaOrder-3619b994.png",import.meta.url).href;const u=f=>(K("data-v-f1e83d85"),f=f(),Q(),f),oe={class:"checkout-info"},te={key:0,class:"checkout-info__items"},ce={key:0,class:"checkout-info__body"},se=u(()=>e("div",{class:"checkout-info__title"},"Ваши данные",-1)),_e={class:"checkout-form__row"},ae={class:"checkout-form__col"},ne={class:"checkout-form__elements"},le={class:"checkout-form__element"},re={class:"checkout-form__element"},ie={class:"checkout-form__tabs form-tab"},ue={class:"form-tab__tab-menu"},me=["onClick"],de={class:"form-tab__all-tabs"},he={key:0,class:"form-tab__tab"},fe={class:"checkout-form__elements"},ve={class:"checkout-form__elem-row"},ke={class:"checkout-form__checkbox"},pe=u(()=>e("div",{class:"checkout-form__checkbox-emulator"},null,-1)),be=u(()=>e("div",{class:"checkout-form__checkbox-text"}," Подготовить сдачу с ",-1)),ge={class:"checkout-form__input-col"},ye={key:1,class:"form-tab__tab"},we={class:"checkout-form__elements"},xe={class:"checkout-form__element"},Se={class:"checkout-form__elem-row"},Ce={class:"checkout-form__elem-col"},Ne={class:"checkout-form__elem-col"},ze={class:"checkout-form__element"},Be={class:"checkout-form__element"},Fe=u(()=>e("div",{class:"checkout-form__element"},null,-1)),Te={class:"checkout-form__col"},Ve={class:"checkout-form__tabs form-tab"},Ie={class:"form-tab__tab-menu"},Le=["onClick"],Oe={class:"form-tab__all-tabs"},Re={key:0,class:"form-tab__tab"},De={class:"checkout-form__elements"},Ee={class:"checkout-form__grid"},Me={class:"checkout-form__grid-col checkout-form__grid-col_big"},Pe={class:"checkout-form__grid-col"},Ue={class:"checkout-form__grid-col"},Ge={class:"checkout-form__grid-col"},$e={class:"checkout-form__grid-col"},je={class:"checkout-form__grid-col"},qe={key:1,class:"form-tab__tab"},We={class:"checkout-form__elements"},Ye={class:"checkout-form__elem-row"},Ze={class:"checkout-form__elem-col"},Ae={class:"checkout-form__elem-col"},He={key:0,class:"checkout-form__submit"},Je=u(()=>e("div",{class:"checkout-form__rights"},"Оформите заказ ! прямо сейчас",-1)),Ke={key:1,class:"checkout-info__order-done done-order"},Qe=u(()=>e("div",{class:"done-order__image _ibg"},[e("img",{src:ee,alt:"Pizza picture"})],-1)),Xe=u(()=>e("div",{class:"done-order__text"}," Ваш заказ был успешно оформлен, готовьте деньги! ",-1)),eo=[Qe,Xe],oo={key:1,class:"checkout-info__no-items no-items"},to=u(()=>e("div",{class:"no-items__title"}," Невозможно оформить заказ с пустой козиной! ",-1)),co={class:"no-items__button"},so={__name:"CheckoutView",setup(f){const k=j(),T=q(),{orderSchemaCashByCourier:V,orderShemaCardByCourier:I,orderSchemaCashBySelf:L,orderSchemaCardBySelf:O}=W(),r=l(1),R=l([{text:"Наличка",icon:"icon-Frame-11",tabNumber:1},{text:"Карта",icon:"icon-credit-cart",tabNumber:2}]),i=l(1),D=l([{text:"Курьером",tabNumber:1},{text:"Самовывоз",tabNumber:2}]),E=Y(()=>{if(i.value===1&&r.value===1)return console.log("y"),V;if(i.value===2&&r.value===1)return console.log("yy"),L;if(i.value===1&&r.value===2)return console.log("yyy"),I;if(i.value===2&&r.value===2)return console.log("yyyy"),O}),p=l(!1),b=l(!1),w=l(!1),v=l(!1),x=l(!1),M=async h=>{console.log(h),v.value=!0,h.promo&&k.updateUserPromo(h.promo);const m=await k.commitOrder();m.length&&(x.value=!0),m.err&&(w.value=!0,setTimeout(()=>w.value=!1,2500)),v.value=!1},P=({values:h,errors:m,results:g})=>{console.log(h),console.log(m),console.log(g),b.value=!0,setTimeout(()=>b.value=!1,500)};return(h,m)=>{const g=S("LoadingGif"),U=S("RouterLink");return c(),_("div",oe,[o(k).cartItems.length?(c(),_("div",te,[x.value?(c(),_("div",Ke,eo)):(c(),_("div",ce,[se,t(o(Z),{onSubmit:M,onInvalidSubmit:P,"validation-schema":o(E),class:"checkout-info__form checkout-form"},{default:C(()=>[e("div",_e,[e("div",ae,[e("div",ne,[e("div",le,[t(o(s),{name:"phone",type:"text",placeholder:"Телефон",class:"checkout-form__input"}),t(o(a),{name:"phone",class:"checkout-form__wrong-input"})]),e("div",re,[e("div",ie,[e("ul",ue,[(c(!0),_(z,null,B(R.value,n=>(c(),_("li",null,[e("span",{onClick:G=>r.value=n.tabNumber,class:y(["form-tab__button",[n.icon,n.tabNumber===r.value?"active":""]])},F(n.text),11,me)]))),256))]),e("div",de,[r.value===1?(c(),_("div",he,[e("div",fe,[e("div",ve,[e("label",ke,[A(e("input",{type:"checkbox","onUpdate:modelValue":m[0]||(m[0]=n=>p.value=n)},null,512),[[H,p.value]]),pe,be]),e("div",ge,[t(o(s),{name:"change",type:"text",placeholder:"Сумма",disabled:!p.value,class:"checkout-form__input"},null,8,["disabled"])])])])])):d("",!0),r.value===2?(c(),_("div",ye,[e("div",we,[e("div",xe,[t(o(s),{name:"card",type:"number",placeholder:"Номер карты",class:"checkout-form__input"}),t(o(a),{name:"card",class:"checkout-form__wrong-input"})]),e("div",Se,[e("div",Ce,[t(o(s),{name:"cvv",type:"number",placeholder:"cvv",class:"checkout-form__input"}),t(o(a),{name:"cvv",class:"checkout-form__wrong-input"})]),e("div",Ne,[t(o(s),{name:"cv",type:"number",placeholder:"cv",class:"checkout-form__input"}),t(o(a),{name:"cv",class:"checkout-form__wrong-input"})])])])])):d("",!0)])])]),e("div",ze,[t(o(s),{name:"comment",type:"text",as:"textarea",placeholder:"Комментарий к заказу",class:"checkout-form__textarea"})]),e("div",Be,[t(o(s),{name:"promo",type:"text",placeholder:"Промокод(если есть)",class:"checkout-form__input"}),t(o(a),{name:"promo",class:"checkout-form__wrong-input"})]),Fe])]),e("div",Te,[e("div",Ve,[e("ul",Ie,[(c(!0),_(z,null,B(D.value,n=>(c(),_("li",null,[e("span",{onClick:G=>i.value=n.tabNumber,class:y(["form-tab__button",[n.tabNumber===i.value?"active":""]])},F(n.text),11,Le)]))),256))]),e("div",Oe,[i.value===1?(c(),_("div",Re,[e("div",De,[e("div",Ee,[e("div",Me,[t(o(s),{name:"street",type:"text",placeholder:"Улица",class:"checkout-form__input"}),t(o(a),{name:"street",class:"checkout-form__wrong-input"})]),e("div",Pe,[t(o(s),{name:"house",type:"number",placeholder:"Дом",class:"checkout-form__input"}),t(o(a),{name:"house",class:"checkout-form__wrong-input"})]),e("div",Ue,[t(o(s),{name:"flat",type:"number",placeholder:"Кв.",class:"checkout-form__input"}),t(o(a),{name:"flat",class:"checkout-form__wrong-input"})]),e("div",Ge,[t(o(s),{name:"floor",type:"number",placeholder:"Этаж",class:"checkout-form__input"}),t(o(a),{name:"floor",class:"checkout-form__wrong-input"})]),e("div",$e,[t(o(s),{name:"entrance",type:"number",placeholder:"Подъезд",class:"checkout-form__input"}),t(o(a),{name:"entrance",class:"checkout-form__wrong-input"})]),e("div",je,[t(o(s),{name:"code",type:"number",placeholder:"Почт. код",class:"checkout-form__input"}),t(o(a),{name:"code",class:"checkout-form__wrong-input"})])])])])):d("",!0),i.value===2?(c(),_("div",qe,[e("div",We,[e("div",Ye,[e("div",Ze,[t(o(s),{name:"date",type:"text",placeholder:"Дата прибытия",class:"checkout-form__input"}),t(o(a),{name:"date",class:"checkout-form__wrong-input"})]),e("div",Ae,[t(o(s),{name:"time",type:"text",placeholder:"Время прибытия",class:"checkout-form__input"}),t(o(a),{name:"time",class:"checkout-form__wrong-input"})])])])])):d("",!0)])])])]),v.value?d("",!0):(c(),_("div",He,[e("button",{class:y(["btn",{wiggle:b.value}]),type:"submit"}," Оформить заказ ",2)])),v.value?(c(),N(g,{key:1})):d("",!0),Je]),_:1},8,["validation-schema"]),o(T).getSize<991.98?(c(),N(X,{key:0,class:"checkout-info__details"})):d("",!0)]))])):(c(),_("div",oo,[to,e("div",co,[t(U,{to:"/"},{default:C(()=>[J("На главную")]),_:1})])]))])}}},ao=$(so,[["__scopeId","data-v-f1e83d85"]]);export{ao as default};
