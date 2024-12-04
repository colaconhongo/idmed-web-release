import{c as f,K as a,a_ as $,f as o,M as c,N as v,O as h,P as q,cc as Y,bI as N,L as u,bP as w,a8 as l,V as i,a6 as m,W as S,bO as j,be as B}from"./index.28c7e456.js";import{C as s}from"./ClosePopup.20eb2e56.js";const I={class:"row"},V={__name:"Dialog",props:{type:{type:String,default:"",object:Object}},setup(p){ref(!1);const d=()=>{this.$emit("commitOperation",this.object)},y=()=>{this.$emit("doOnYes",this.object)},g=()=>{this.$emit("doOnNo",this.object)},t=p,C=f(()=>t.type==="error"?"report":t.type==="warning"||t.type==="confirmation"?"warning":"info"),b=f(()=>t.type==="error"?"red":t.type==="warning"||t.type==="confirmation"?"warning":"primary"),D=f(()=>t.type==="error"?"text-red":t.type==="warning"||t.type==="confirmation"?"text-warning":"text-primary"),e=f(()=>t.type==="confirmation");return(n,r)=>(a(),$("div",null,[o(S,{style:{width:"500px"}},{default:c(()=>[o(v,null,{default:c(()=>[h("div",I,[o(q,{name:C.value,size:"md",color:b.value},null,8,["name","color"]),h("div",{class:Y(["text-h6 q-ml-sm",D.value])},[N(n.$slots,"title")],2)])]),_:3}),o(v,{class:"q-pt-none q-mt-md q-ml-sm"},{default:c(()=>[N(n.$slots,"msg")]),_:3}),n.isYesNoDialog?m("",!0):(a(),u(w,{key:0,align:"right"},{default:c(()=>[e.value?l((a(),u(i,{key:0,flat:"",label:"Cancelar",color:"primary",class:"q-mr-sm",onClick:r[0]||(r[0]=k=>n.$emit("cancelOperation"))},null,512)),[[s]]):m("",!0),e.value?l((a(),u(i,{key:1,flat:"",label:"Continuar",color:"primary",class:"q-mr-sm",onClick:d},null,512)),[[s]]):m("",!0),e.value?m("",!0):l((a(),u(i,{key:2,flat:"",label:"OK",color:"primary",class:"q-mr-sm",onClick:r[1]||(r[1]=k=>n.$emit("closeDialog"))},null,512)),[[s]])]),_:1})),n.isYesNoDialog?(a(),u(w,{key:1,align:"right"},{default:c(()=>[l(o(i,{flat:"",label:"Cancelar",color:"primary",class:"q-mr-sm",onClick:r[2]||(r[2]=k=>n.$emit("cancelYesNo"))},null,512),[[s]]),l(o(i,{flat:"",label:"N\xE3o",color:"primary",class:"q-mr-sm",onClick:g},null,512),[[s]]),l(o(i,{flat:"",label:"Sim",color:"primary",class:"q-mr-sm",onClick:y},null,512),[[s]])]),_:1})):m("",!0)]),_:3})]))}},O=B();function F(){function p(e){return e.generic===!0||e.generic==="true"?"Geral":"Parcial"}function d(e){return e.open?"primary":"negative"}function y(e){return j.utc(e.startDate).local().format("DD-MM-YYYY")}function g(e){return O.formatDate(e.startDate)}function t(e){return O.formatDate(e.endDate)}function C(e){return e.open?"Aberto":"Fechado"}function b(){const e=new WeakSet;return(n,r)=>{if(typeof r=="object"&&r!==null){if(e.has(r))return;e.add(r)}return r}}function D(){return"inventory"}return{getClassName:D,getInventoryType:p,getChipColor:d,getFormatedEndDate:t,getFormatedStartDate:g,getInventoryStatus:C,circularReferenceReplacer:b,getformatedUTCDate:y}}export{V as _,F as u};
