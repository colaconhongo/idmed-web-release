import{b6 as be,Y as pe,r as _,i as ve,o as ge,c as v,cd as ye,$ as he,a1 as ke,K as u,a_ as c,f as e,a7 as R,O as o,M as a,a4 as l,U as y,P as Y,a8 as h,V as m,a6 as V,a5 as n,c8 as M,F as X,c9 as Z,R as we,d9 as P,dr as xe,cQ as De,ds as Ce,d7 as qe,L as ee,be as Ve,a$ as Se,b4 as Ne,b_ as Qe}from"./index.28c7e456.js";import{Q as te,a as ae}from"./QPopupProxy.bc9f6d75.js";import{a as k,c as b,b as d,Q as oe}from"./QTable.f91943bc.js";import{b as w}from"./QSelect.caa108f8.js";import{_ as B,Q as le}from"./ListHeader.c33af243.js";import{C as se}from"./ClosePopup.20eb2e56.js";import{_ as Re}from"./TitleBar.f7be41e1.js";import"./use-render-cache.3aae9b27.js";import"./QMenu.9a83401e.js";import"./position-engine.b3fa6cbd.js";import"./QList.d4521672.js";import"./QLinearProgress.c6927d78.js";const Ye={key:0,class:"row"},Me={class:"col q-mx-md q-mt-md"},Pe={class:"box-border row q-pt-sm"},Be={class:"row items-center justify-end"},je={key:0,class:"row q-mx-sm items-center"},Ue={class:"col-12 q-px-md"},ze={class:"box-border q-pb-md"},Oe={class:"full-width row flex-center text-primary q-gutter-sm text-body2"},Ae=o("span",null," Sem resultados para visualizar ",-1),$e={key:0,class:"col"},Le={key:1,class:"col"},Ie={key:2,class:"col"},Fe={key:3,class:"col"},Te=o("th",null,null,-1),Ee=o("th",{align:"left"},[o("b",null,"Fornecedor")],-1),Ge=o("th",{align:"left"},[o("b",null,"Lote")],-1),Je=o("th",{align:"left"},[o("b",null,"Quantidade")],-1),Ke=o("th",{align:"left"},[o("b",null,"Data de Validade")],-1),We=[Te,Ee,Ge,Je,Ke],He={class:"row"},Xe={key:1,class:"row"},Ze={class:"col-3 q-pa-md q-pl-lg q-ml-lg q-mr-lg"},et={class:"box-border q-pt-md"},tt={class:"row items-center justify-end"},at={class:"row q-pa-sm"},ot={class:"col q-pt-md q-mr-lg"},lt={class:"box-border q-pb-md"},st={class:"full-width row flex-center text-primary q-gutter-sm text-body2"},it=o("span",null," Sem resultados para visualizar ",-1),nt={key:0,class:"col"},rt={key:1,class:"col"},dt={key:2,class:"col"},ut={key:3,class:"col"},ct=o("th",null,null,-1),mt=o("th",{align:"left"},[o("b",null,"Fornecedor")],-1),_t=o("th",{align:"left"},[o("b",null,"Lote")],-1),ft=o("th",{align:"left"},[o("b",null,"Quantidade")],-1),bt=o("th",{align:"left"},[o("b",null,"Data de Validade")],-1),pt=[ct,mt,_t,ft,bt],vt={class:"row"},Rt={__name:"StockConfirmDistributionPanel",setup(gt){const ie=be(),ne=Ve(),{closeLoading:S,showloading:j}=Se(),{alertSucess:A,alertError:U,alertWarningAction:$}=Ne(),{isMobile:L}=pe(),re=_("Detalhe da Guia"),I=ve("stockDistributionCount"),f=[{name:"order",required:!0,label:"Ordem",field:"index",align:"left",sortable:!1},{name:"drug",align:"left",label:"Medicamento",sortable:!0},{name:"clinic",align:"left",label:"Sector Clinico",sortable:!0},{name:"quantity",align:"left",label:"Quantidade",sortable:!0},{name:"options",align:"left",label:"Op\xE7\xF5es",sortable:!1}];let F=!1;const p=_(""),x=_(""),D=_(""),C=_("display"),z=_("display");_([]),_([]);const N=_([]),T=_(""),E=_(""),G=()=>{ie.go(-1)},de=()=>{p.value=ne.getDDMMYYYFromJSDate(q.value.creationDate),x.value=q.value.orderNumber,D.value=q.value.notes},J=i=>{console.log(i),$("Deseja Cofirmar a presente distribuicao de Stock?","N\xE3o","Sim").then(s=>{s&&(z.value="delete",ue(i))})},K=i=>{$("Deseja rejeitar a presente distribuicao de Stock?","N\xE3o","Sim").then(s=>{s&&ce(i)})},ue=i=>{j(),i.enabled=!1,i.status="C",P.updateDrugDistributorStatus(i,"C").then(s=>{S(),W(O.value),A("Opera\xE7\xE3o efectuada com sucesso.")}).catch(s=>{U("Ocorreu um erro inesperado, contacte o administrador!")})},ce=i=>{j(),i.enabled=!1,i.status="R",P.updateDrugDistributorStatus(i,"R").then(s=>{S(),W(O.value),A("Opera\xE7\xE3o efectuada com sucesso.")}).catch(s=>{U("Ocorreu um erro inesperado, contacte o administrador!")})},W=i=>{P.getDistributionsByStatus(i.id,"P").then(s=>{I.value=s.length,localStorage.setItem("stockDistributionCount",I.value)})},Q=()=>{if(j(),C.value==="create"||C.value==="edit")U("Por favor concluir ou cancelar a opera\xE7\xE3o em curso antes de iniciar a adi\xE7\xE3o de novo registo."),S();else{C.value="create";const i=new xe({drug:new De,enabled:!0,clinic:new Ce,stockDistributor:q});N.value.push(i),S()}},me=()=>{const i=JSON.parse(localStorage.getItem("currStockConfirmDistributor"));return qe.getStockDistributorById(i)},_e=()=>{const i=P.getDrugDistributorList(q.value.id,O.value.id);console.log("Finished loading stock: "+i),Object.keys(i).forEach(function(s){N.value.push(i[s])}.bind(this))};ge(()=>{de(),_e()});const q=v(()=>me());v(()=>ye.getActiveDrugs()),v(()=>C.value==="edit"),v(()=>C.value==="create");const g=v(()=>z.value==="edit"),H=i=>Qe.formatDate(i,"DD-MM-YYYY"),fe=v(()=>z.value==="display"),O=v(()=>he.currClinic());return ke("title",re),(i,s)=>(u(),c("div",null,[e(Re),R(L)?(u(),c("div",Ye,[o("div",Me,[e(B,{addVisible:!1,expandVisible:!1,mainContainer:!0,bgColor:"bg-primary"},{default:a(()=>[l("Notas da Ordem ")]),_:1}),o("div",Pe,[e(y,{outlined:"",modelValue:x.value,"onUpdate:modelValue":s[0]||(s[0]=t=>x.value=t),ref_key:"orderNumberRef",ref:T,label:"N\xFAmero",rules:[t=>!!t||"Por favor indicar o n\xFAmero da guia"],disable:!g.value,dense:"",class:"col q-mx-md"},null,8,["modelValue","rules","disable"]),e(y,{dense:"",outlined:"",disable:!g.value,class:"col q-mx-md",modelValue:p.value,"onUpdate:modelValue":s[3]||(s[3]=t=>p.value=t),label:"Data de Distribui\xE7\xE3o"},{append:a(()=>[e(Y,{name:"event",class:"cursor-pointer"},{default:a(()=>[e(te,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(ae,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=t=>p.value=t),mask:"DD-MM-YYYY"},{default:a(()=>[o("div",Be,[h(e(m,{label:"Close",color:"primary",flat:""},null,512),[[se]])])]),_:1},8,["modelValue"])]),_:1},512)]),_:1})]),default:a(()=>[e(y,{outlined:"",modelValue:D.value,"onUpdate:modelValue":s[1]||(s[1]=t=>D.value=t),label:"Notas",ref_key:"notesRef",ref:E,disable:!g.value,dense:"",class:"col",type:"textarea"},null,8,["modelValue","disable"])]),_:1},8,["disable","modelValue"]),fe.value?(u(),c("div",je,[e(m,{unelevated:"",color:"blue",class:"col q-ma-sm",label:"Voltar",onClick:G,size:"12px"})])):V("",!0)])]),o("div",Ue,[o("div",null,[e(B,{addVisible:!1,expandVisible:!1,mainContainer:!0,onShowAdd:Q,bgColor:"bg-primary",addButtonActions:Q},{default:a(()=>[l("Medicamentos ")]),_:1}),o("div",ze,[e(oe,{class:"col",dense:"",flat:"",rows:N.value,columns:f,"row-key":"id"},{"no-data":a(({icon:t,filter:r})=>[o("div",Oe,[Ae,e(Y,{size:"2em",name:r?"filter_b_and_w":t},null,8,["name"])])]),header:a(t=>[e(k,{class:"text-left bg-grey-3",props:t},{default:a(()=>[e(b,{style:{width:"70px"}},{default:a(()=>[l(n(),1)]),_:1}),e(b,{class:"col"},{default:a(()=>[l(n(f[1].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[2].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[3].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[4].label),1)]),_:1})]),_:2},1032,["props"])]),body:a(t=>[e(k,{props:t},{default:a(()=>[e(d,{"auto-width":""},{default:a(()=>[e(m,{size:"sm",color:"primary",round:"",dense:"",onClick:r=>t.expand=!t.expand,icon:t.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),e(d,{key:"drug",props:t},{default:a(()=>[l(n(t.row.drug.name),1)]),_:2},1032,["props"]),e(d,{key:"clinic",props:t},{default:a(()=>[l(n(t.row.clinic.clinicName),1)]),_:2},1032,["props"]),e(d,{key:"quantity",props:t},{default:a(()=>[l(n(t.row.quantity),1)]),_:2},1032,["props"]),e(d,{key:"options",props:t},{default:a(()=>[t.row.status==="P"?(u(),c("div",$e,[e(m,{loading:R(F),flat:"",size:"md",dense:"",round:"",color:"primary",icon:"done",onClick:r=>J(t.row)},null,8,["loading","onClick"]),e(m,{size:"md",flat:"",dense:"",round:"",color:"orange-5",icon:"clear",onClick:r=>K(t.row)},null,8,["onClick"])])):t.row.status==="C"?(u(),c("div",Le,[e(w,{color:"green","text-color":"white"},{default:a(()=>[l(" Confirmado ")]),_:1})])):t.row.status==="R"?(u(),c("div",Ie,[e(w,{color:"orange","text-color":"white"},{default:a(()=>[l(" Rejeitado ")]),_:1})])):t.row.status==="A"?(u(),c("div",Fe,[e(w,{color:"red","text-color":"white"},{default:a(()=>[l(" Anulado ")]),_:1})])):V("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"]),h(o("tr",null,We,512),[[M,t.expand]]),(u(!0),c(X,null,Z(t.row.stockDistributorBatchs,r=>h((u(),ee(k,{key:r.id},{default:a(()=>[e(d),e(d,{key:"manufacture"},{default:a(()=>[l(n(r.stock.manufacture),1)]),_:2},1024),e(d,{key:"batchNumber"},{default:a(()=>[l(n(r.stock.batchNumber),1)]),_:2},1024),e(d,{key:"quantity"},{default:a(()=>[l(n(r.quantity),1)]),_:2},1024),e(d,{key:"expireDate"},{default:a(()=>[l(n(H(r.stock.expireDate)),1)]),_:2},1024)]),_:2},1024)),[[M,t.expand]])),128))]),_:1},8,["rows"])]),o("div",He,[e(le,{dense:"","inline-actions":"",style:{"padding-top":"2px","padding-bottom":"2px"},class:"col text-white q-pa-none bg-orange-4 q-pr-sm"},{action:a(()=>[e(m,{dense:"",unelevated:"",color:"primary",class:"col hidden",label:"Imprimir"})]),_:1})])])])])):V("",!0),R(L)?V("",!0):(u(),c("div",Xe,[o("div",Ze,[o("div",null,[e(B,{addVisible:!1,expandVisible:!1,mainContainer:!0,bgColor:"bg-primary"},{default:a(()=>[l("Notas da Guia ")]),_:1}),o("div",et,[e(y,{outlined:"",modelValue:x.value,"onUpdate:modelValue":s[4]||(s[4]=t=>x.value=t),ref_key:"orderNumberRef",ref:T,label:"N\xFAmero",rules:[t=>!!t||"Por favor indicar o n\xFAmero da guia"],disable:!g.value,dense:"",class:"col q-ma-sm"},null,8,["modelValue","rules","disable"]),e(y,{dense:"",outlined:"",disable:!g.value,class:"col q-ma-sm",modelValue:p.value,"onUpdate:modelValue":s[6]||(s[6]=t=>p.value=t),label:"Data de Cria\xE7\xE3o"},{append:a(()=>[e(Y,{name:"event",class:"cursor-pointer"},{default:a(()=>[e(te,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(ae,{modelValue:p.value,"onUpdate:modelValue":s[5]||(s[5]=t=>p.value=t),mask:"DD-MM-YYYY"},{default:a(()=>[o("div",tt,[h(e(m,{label:"Close",color:"primary",flat:""},null,512),[[se]])])]),_:1},8,["modelValue"])]),_:1},512)]),_:1})]),_:1},8,["disable","modelValue"]),e(y,{outlined:"",modelValue:D.value,"onUpdate:modelValue":s[7]||(s[7]=t=>D.value=t),label:"Notas",ref_key:"notesRef",ref:E,disable:!g.value,dense:"",class:"col q-ma-sm",type:"textarea"},null,8,["modelValue","disable"]),e(we,{class:"q-mx-sm"}),o("div",at,[e(m,{unelevated:"",color:"orange",class:"q-ml-md col",label:"Voltar",onClick:G})])])])]),o("div",ot,[o("div",null,[e(B,{addVisible:!1,expandVisible:!1,mainContainer:!0,onShowAdd:Q,bgColor:"bg-primary",addButtonActions:Q},{default:a(()=>[l("Medicamentos ")]),_:1}),o("div",lt,[e(oe,{class:"col",dense:"",flat:"",rows:N.value,columns:f,"row-key":"id"},{"no-data":a(({icon:t,filter:r})=>[o("div",st,[it,e(Y,{size:"2em",name:r?"filter_b_and_w":t},null,8,["name"])])]),header:a(t=>[e(k,{class:"text-left bg-grey-3",props:t},{default:a(()=>[e(b,{style:{width:"70px"}},{default:a(()=>[l(n(),1)]),_:1}),e(b,{class:"col"},{default:a(()=>[l(n(f[1].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[2].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[3].label),1)]),_:1}),e(b,{style:{width:"190px"}},{default:a(()=>[l(n(f[4].label),1)]),_:1})]),_:2},1032,["props"])]),body:a(t=>[e(k,{props:t},{default:a(()=>[e(d,{"auto-width":""},{default:a(()=>[e(m,{size:"sm",color:"primary",round:"",dense:"",onClick:r=>t.expand=!t.expand,icon:t.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),e(d,{key:"drug",props:t},{default:a(()=>[l(n(t.row.drug.name),1)]),_:2},1032,["props"]),e(d,{key:"clinic",props:t},{default:a(()=>[l(n(t.row.clinic.clinicName),1)]),_:2},1032,["props"]),e(d,{key:"quantity",props:t},{default:a(()=>[l(n(t.row.quantity),1)]),_:2},1032,["props"]),e(d,{key:"options",props:t},{default:a(()=>[t.row.status==="P"?(u(),c("div",nt,[e(m,{loading:R(F),flat:"",size:"md",dense:"",round:"",color:"primary",icon:"done",onClick:r=>J(t.row)},null,8,["loading","onClick"]),e(m,{size:"md",flat:"",dense:"",round:"",color:"orange-5",icon:"clear",onClick:r=>K(t.row)},null,8,["onClick"])])):t.row.status==="C"?(u(),c("div",rt,[e(w,{color:"green","text-color":"white"},{default:a(()=>[l(" Confirmado ")]),_:1})])):t.row.status==="R"?(u(),c("div",dt,[e(w,{color:"orange","text-color":"white"},{default:a(()=>[l(" Rejeitado ")]),_:1})])):t.row.status==="A"?(u(),c("div",ut,[e(w,{color:"red","text-color":"white"},{default:a(()=>[l(" Anulado ")]),_:1})])):V("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"]),h(o("tr",null,pt,512),[[M,t.expand]]),(u(!0),c(X,null,Z(t.row.stockDistributorBatchs,r=>h((u(),ee(k,{key:r.id},{default:a(()=>[e(d),e(d,{key:"manufacture"},{default:a(()=>[l(n(r.stock.manufacture),1)]),_:2},1024),e(d,{key:"batchNumber"},{default:a(()=>[l(n(r.stock.batchNumber),1)]),_:2},1024),e(d,{key:"quantity"},{default:a(()=>[l(n(r.quantity),1)]),_:2},1024),e(d,{key:"expireDate"},{default:a(()=>[l(n(H(r.stock.expireDate)),1)]),_:2},1024)]),_:2},1024)),[[M,t.expand]])),128))]),_:1},8,["rows"])]),o("div",vt,[e(le,{dense:"","inline-actions":"",style:{"padding-top":"2px","padding-bottom":"2px"},class:"col text-white q-pa-none bg-orange-4 q-pr-sm"},{action:a(()=>[e(m,{dense:"",unelevated:"",color:"primary",class:"col hidden",label:"Imprimir"})]),_:1})])])])]))]))}};export{Rt as default};
