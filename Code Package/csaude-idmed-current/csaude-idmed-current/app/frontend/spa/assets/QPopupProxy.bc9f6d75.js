import{c,bQ as E,bR as it,l as Ee,bt as st,ae as ct,af as vt,bS as dt,r as q,bE as ft,bT as Ie,bU as mt,bV as ht,bW as _e,w as U,bX as yt,h as u,ax as Z,m as gt,g as Pe,bY as bt,aQ as Be,V as j,bH as _t,a9 as wt}from"./index.28c7e456.js";import{u as xt}from"./use-render-cache.3aae9b27.js";import{c as Dt}from"./QMenu.9a83401e.js";import{u as Mt,c as qt}from"./position-engine.b3fa6cbd.js";const Ct=["gregorian","persian"],$e={mask:{type:String},locale:Object,calendar:{type:String,validator:n=>Ct.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},kt=["update:modelValue"];function T(n){return n.year+"/"+E(n.month)+"/"+E(n.day)}function Ht(n,P){const D=c(()=>n.disable!==!0&&n.readonly!==!0),I=c(()=>D.value===!0?0:-1),_=c(()=>{const f=[];return n.color!==void 0&&f.push(`bg-${n.color}`),n.textColor!==void 0&&f.push(`text-${n.textColor}`),f.join(" ")});function R(){return n.locale!==void 0?{...P.lang.date,...n.locale}:P.lang.date}function y(f){const V=new Date,S=f===!0?null:0;if(n.calendar==="persian"){const k=it(V);return{year:k.jy,month:k.jm,day:k.jd}}return{year:V.getFullYear(),month:V.getMonth()+1,day:V.getDate(),hour:S,minute:S,second:S,millisecond:S}}return{editable:D,tabindex:I,headerClass:_,getLocale:R,getCurrentDate:y}}const A=20,Vt=["Calendar","Years","Months"],Ae=n=>Vt.includes(n),we=n=>/^-?[\d]+\/[0-1]\d$/.test(n),L=" \u2014 ";function F(n){return n.year+"/"+E(n.month)}var Tt=Ee({name:"QDate",props:{...$e,...st,...ct,modelValue:{required:!0,validator:n=>typeof n=="string"||Array.isArray(n)===!0||Object(n)===n||n===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...$e.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:we},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:we},navigationMaxYearMonth:{type:String,validator:we},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ae}},emits:[...kt,"rangeStart","rangeEnd","navigation"],setup(n,{slots:P,emit:D}){const{proxy:I}=Pe(),{$q:_}=I,R=vt(n,_),{getCache:y}=xt(),{tabindex:f,headerClass:V,getLocale:S,getCurrentDate:k}=Ht(n,_);let H;const re=dt(n),ue=bt(re),J=q(null),m=q(Ve()),h=q(S()),Re=c(()=>Ve()),Ne=c(()=>S()),Y=c(()=>k()),i=q(Se(m.value,h.value)),x=q(n.defaultView),xe=c(()=>_.lang.rtl===!0?"right":"left"),p=q(xe.value),ie=q(xe.value),se=i.value.year,ee=q(se-se%A-(se<0?A:0)),w=q(null),Qe=c(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(R.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),B=c(()=>n.color||"primary"),N=c(()=>n.textColor||"white"),te=c(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ce=c(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),C=c(()=>ce.value.filter(e=>typeof e=="string").map(e=>me(e,m.value,h.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),Q=c(()=>{const e=t=>me(t,m.value,h.value);return ce.value.filter(t=>ft(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),ae=c(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Ie(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),ve=c(()=>n.calendar==="persian"?T:(e,t,a)=>mt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?m.value:t,a===void 0?h.value:a,e.year,e.timezoneOffset)),K=c(()=>C.value.length+Q.value.reduce((e,t)=>e+1+ht(ae.value(t.to),ae.value(t.from)),0)),De=c(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(w.value!==null){const a=w.value.init,l=ae.value(a);return h.value.daysShort[l.getDay()]+", "+h.value.monthsShort[a.month-1]+" "+a.day+L+"?"}if(K.value===0)return L;if(K.value>1)return`${K.value} ${h.value.pluralDay}`;const e=C.value[0],t=ae.value(e);return isNaN(t.valueOf())===!0?L:h.value.headerTitle!==void 0?h.value.headerTitle(t,e):h.value.daysShort[t.getDay()]+", "+h.value.monthsShort[e.month-1]+" "+e.day}),We=c(()=>C.value.concat(Q.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),ze=c(()=>C.value.concat(Q.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),Me=c(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(K.value===0)return L;if(K.value>1){const e=We.value,t=ze.value,a=h.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+L+a[t.month-1]+" ":e.month!==t.month?L+a[t.month-1]:"")+" "+t.year}return C.value[0].year}),ne=c(()=>{const e=[_.iconSet.datetime.arrowLeft,_.iconSet.datetime.arrowRight];return _.lang.rtl===!0?e.reverse():e}),qe=c(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):h.value.firstDayOfWeek),Le=c(()=>{const e=h.value.daysShort,t=qe.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),O=c(()=>{const e=i.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():_e(e.year,e.month)}),Ue=c(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),g=c(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),b=c(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),de=c(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return g.value!==null&&g.value.year>=i.value.year&&(e.year.prev=!1,g.value.year===i.value.year&&g.value.month>=i.value.month&&(e.month.prev=!1)),b.value!==null&&b.value.year<=i.value.year&&(e.year.next=!1,b.value.year===i.value.year&&b.value.month<=i.value.month&&(e.month.next=!1)),e}),le=c(()=>{const e={};return C.value.forEach(t=>{const a=F(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),Ce=c(()=>{const e={};return Q.value.forEach(t=>{const a=F(t.from),l=F(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===l?t.to.day:void 0,range:t}),a<l){let o;const{year:v,month:r}=t.from,s=r<12?{year:v,month:r+1}:{year:v+1,month:1};for(;(o=F(s))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?t.to.day:void 0,range:t}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),G=c(()=>{if(w.value===null)return;const{init:e,initHash:t,final:a,finalHash:l}=w.value,[o,v]=t<=l?[e,a]:[a,e],r=F(o),s=F(v);if(r!==M.value&&s!==M.value)return;const d={};return r===M.value?(d.from=o.day,d.includeFrom=!0):d.from=1,s===M.value?(d.to=v.day,d.includeTo=!0):d.to=O.value,d}),M=c(()=>F(i.value)),Je=c(()=>{const e={};if(n.options===void 0){for(let a=1;a<=O.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=O.value;a++){const l=M.value+"/"+E(a);e[a]=t(l)}return e}),Ke=c(()=>{const e={};if(n.events===void 0)for(let t=1;t<=O.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=O.value;a++){const l=M.value+"/"+E(a);e[a]=t(l)===!0&&Ue.value(l)}}return e}),Ge=c(()=>{let e,t;const{year:a,month:l}=i.value;if(n.calendar!=="persian")e=new Date(a,l-1,1),t=new Date(a,l-1,0).getDate();else{const o=Ie(a,l,1);e=new Date(o.gy,o.gm-1,o.gd);let v=l-1,r=a;v===0&&(v=12,r--),t=_e(r,v)}return{days:e.getDay()-qe.value-1,endDay:t}}),ke=c(()=>{const e=[],{days:t,endDay:a}=Ge.value,l=t<0?t+7:t;if(l<6)for(let r=a-l;r<=a;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=O.value;r++){const s={i:r,event:Ke.value[r],classes:[]};Je.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(le.value[M.value]!==void 0&&le.value[M.value].forEach(r=>{const s=o+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:B.value,textColor:N.value})}),Ce.value[M.value]!==void 0&&Ce.value[M.value].forEach(r=>{if(r.from!==void 0){const s=o+r.from-1,d=o+(r.to||O.value)-1;for(let X=s;X<=d;X++)Object.assign(e[X],{range:r.range,unelevated:!0,color:B.value,textColor:N.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[d],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=o+r.to-1;for(let d=o;d<=s;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:B.value,textColor:N.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=o+O.value-1;for(let d=o;d<=s;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:B.value,textColor:N.value})}}),G.value!==void 0){const r=o+G.value.from-1,s=o+G.value.to-1;for(let d=r;d<=s;d++)e[d].color=B.value,e[d].editRange=!0;G.value.includeFrom===!0&&(e[r].editRangeFrom=!0),G.value.includeTo===!0&&(e[s].editRangeTo=!0)}i.value.year===Y.value.year&&i.value.month===Y.value.month&&(e[o+Y.value.day-1].today=!0);const v=e.length%7;if(v>0){const r=7-v;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Xe=c(()=>n.disable===!0?{"aria-disabled":"true"}:{});U(()=>n.modelValue,e=>{if(H===e)H=0;else{const t=Se(m.value,h.value);W(t.year,t.month,t)}}),U(x,()=>{J.value!==null&&I.$el.contains(document.activeElement)===!0&&J.value.focus()}),U(()=>i.value.year+"|"+i.value.month,()=>{D("navigation",{year:i.value.year,month:i.value.month})}),U(Re,e=>{Fe(e,h.value,"mask"),m.value=e}),U(Ne,e=>{Fe(m.value,e,"locale"),h.value=e});function He(){const{year:e,month:t,day:a}=Y.value,l={...i.value,year:e,month:t,day:a},o=le.value[F(l)];(o===void 0||o.includes(l.day)===!1)&&ye(l),fe(l.year,l.month)}function Ze(e){Ae(e)===!0&&(x.value=e)}function pe(e,t){["month","year"].includes(e)&&(e==="month"?je:he)(t===!0?-1:1)}function fe(e,t){x.value="Calendar",W(e,t)}function et(e,t){if(n.range===!1||!e){w.value=null;return}const a=Object.assign({...i.value},e),l=t!==void 0?Object.assign({...i.value},t):a;w.value={init:a,initHash:T(a),final:l,finalHash:T(l)},fe(a.year,a.month)}function Ve(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function me(e,t,a){return yt(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Se(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Ye();const l=a[a.length-1],o=me(l.from!==void 0?l.from:l,e,t);return o.dateHash===null?Ye():o}function Ye(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=Y.value!==void 0?Y.value:k();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+E(t)+"/01"}}function je(e){let t=i.value.year,a=Number(i.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),W(t,a),te.value===!0&&oe("month")}function he(e){const t=Number(i.value.year)+e;W(t,i.value.month),te.value===!0&&oe("year")}function tt(e){W(e,i.value.month),x.value=n.defaultView==="Years"?"Months":"Calendar",te.value===!0&&oe("year")}function at(e){W(i.value.year,e),x.value="Calendar",te.value===!0&&oe("month")}function nt(e,t){const a=le.value[t];(a!==void 0&&a.includes(e.day)===!0?ge:ye)(e)}function $(e){return{year:e.year,month:e.month,day:e.day}}function W(e,t,a){if(g.value!==null&&e<=g.value.year&&((t<g.value.month||e<g.value.year)&&(t=g.value.month),e=g.value.year),b.value!==null&&e>=b.value.year&&((t>b.value.month||e>b.value.year)&&(t=b.value.month),e=b.value.year),a!==void 0){const{hour:o,minute:v,second:r,millisecond:s,timezoneOffset:d,timeHash:X}=a;Object.assign(i.value,{hour:o,minute:v,second:r,millisecond:s,timezoneOffset:d,timeHash:X})}const l=e+"/"+E(t)+"/01";l!==i.value.dateHash&&(p.value=i.value.dateHash<l==(_.lang.rtl!==!0)?"left":"right",e!==i.value.year&&(ie.value=p.value),Be(()=>{ee.value=e-e%A-(e<0?A:0),Object.assign(i.value,{year:e,month:t,day:1,dateHash:l})}))}function Oe(e,t,a){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;H=l;const{reason:o,details:v}=Te(t,a);D("update:modelValue",l,o,v)}function oe(e){const t=C.value[0]!==void 0&&C.value[0].dateHash!==null?{...C.value[0]}:{...i.value};Be(()=>{t.year=i.value.year,t.month=i.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():_e(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const l=z(t);H=l;const{details:o}=Te("",t);D("update:modelValue",l,e,o)})}function Te(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...$(t.target),from:$(t.from),to:$(t.to)}}:{reason:`${e}-day`,details:$(t)}}function z(e,t,a){return e.from!==void 0?{from:ve.value(e.from,t,a),to:ve.value(e.to,t,a)}:ve.value(e,t,a)}function ye(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=T(e.from),l=T(e.to),o=C.value.filter(r=>r.dateHash<a||r.dateHash>l),v=Q.value.filter(({from:r,to:s})=>s.dateHash<a||r.dateHash>l);t=o.concat(v).concat(e).map(r=>z(r))}else{const a=ce.value.slice();a.push(z(e)),t=a}else t=z(e);Oe(t,"add",e)}function ge(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=z(e);e.from!==void 0?t=n.modelValue.filter(l=>l.from!==void 0?l.from!==a.from&&l.to!==a.to:!0):t=n.modelValue.filter(l=>l!==a),t.length===0&&(t=null)}Oe(t,"remove",e)}function Fe(e,t,a){const l=C.value.concat(Q.value).map(o=>z(o,e,t)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);D("update:modelValue",(n.multiple===!0?l:l[0])||null,a)}function lt(){if(n.minimal!==!0)return u("div",{class:"q-date__header "+V.value},[u("div",{class:"relative-position"},[u(Z,{name:"q-transition--fade"},()=>u("div",{key:"h-yr-"+Me.value,class:"q-date__header-subtitle q-date__header-link "+(x.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...y("vY",{onClick(){x.value="Years"},onKeyup(e){e.keyCode===13&&(x.value="Years")}})},[Me.value]))]),u("div",{class:"q-date__header-title relative-position flex no-wrap"},[u("div",{class:"relative-position col"},[u(Z,{name:"q-transition--fade"},()=>u("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(x.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:f.value,...y("vC",{onClick(){x.value="Calendar"},onKeyup(e){e.keyCode===13&&(x.value="Calendar")}})},[De.value]))]),n.todayBtn===!0?u(j,{class:"q-date__header-today self-start",icon:_.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:f.value,onClick:He}):null])])}function be({label:e,type:t,key:a,dir:l,goTo:o,boundaries:v,cls:r}){return[u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ne.value[0],tabindex:f.value,disable:v.prev===!1,...y("go-#"+t,{onClick(){o(-1)}})})]),u("div",{class:"relative-position overflow-hidden flex flex-center"+r},[u(Z,{name:"q-transition--jump-"+l},()=>u("div",{key:a},[u(j,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:f.value,...y("view#"+t,{onClick:()=>{x.value=t}})})]))]),u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ne.value[1],tabindex:f.value,disable:v.next===!1,...y("go+#"+t,{onClick(){o(1)}})})])]}const ot={Calendar:()=>[u("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[u("div",{class:"q-date__navigation row items-center no-wrap"},be({label:h.value.months[i.value.month-1],type:"Months",key:i.value.month,dir:p.value,goTo:je,boundaries:de.value.month,cls:" col"}).concat(be({label:i.value.year,type:"Years",key:i.value.year,dir:ie.value,goTo:he,boundaries:de.value.year,cls:""}))),u("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Le.value.map(e=>u("div",{class:"q-date__calendar-item"},[u("div",e)]))),u("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[u(Z,{name:"q-transition--slide-"+p.value},()=>u("div",{key:M.value,class:"q-date__calendar-days fit"},ke.value.map(e=>u("div",{class:e.classes},[e.in===!0?u(j,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:f.value,...y("day#"+e.i,{onClick:()=>{rt(e.i)},onMouseover:()=>{ut(e.i)}})},e.event!==!1?()=>u("div",{class:"q-date__event bg-"+e.event}):null):u("div",""+e.i)]))))])])],Months(){const e=i.value.year===Y.value.year,t=l=>g.value!==null&&i.value.year===g.value.year&&g.value.month>l||b.value!==null&&i.value.year===b.value.year&&b.value.month<l,a=h.value.monthsShort.map((l,o)=>{const v=i.value.month===o+1;return u("div",{class:"q-date__months-item flex flex-center"},[u(j,{class:e===!0&&Y.value.month===o+1?"q-date__today":null,flat:v!==!0,label:l,unelevated:v,color:v===!0?B.value:null,textColor:v===!0?N.value:null,tabindex:f.value,disable:t(o+1),...y("month#"+o,{onClick:()=>{at(o+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(u("div",{class:"row no-wrap full-width"},[be({label:i.value.year,type:"Years",key:i.value.year,dir:ie.value,goTo:he,boundaries:de.value.year,cls:" col"})])),u("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=ee.value,t=e+A,a=[],l=o=>g.value!==null&&g.value.year>o||b.value!==null&&b.value.year<o;for(let o=e;o<=t;o++){const v=i.value.year===o;a.push(u("div",{class:"q-date__years-item flex flex-center"},[u(j,{key:"yr"+o,class:Y.value.year===o?"q-date__today":null,flat:!v,label:o,dense:!0,unelevated:v,color:v===!0?B.value:null,textColor:v===!0?N.value:null,tabindex:f.value,disable:l(o),...y("yr#"+o,{onClick:()=>{tt(o)}})})]))}return u("div",{class:"q-date__view q-date__years flex flex-center"},[u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ne.value[0],tabindex:f.value,disable:l(e),...y("y-",{onClick:()=>{ee.value-=A}})})]),u("div",{class:"q-date__years-content col self-stretch row items-center"},a),u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ne.value[1],tabindex:f.value,disable:l(t),...y("y+",{onClick:()=>{ee.value+=A}})})])])}};function rt(e){const t={...i.value,day:e};if(n.range===!1){nt(t,M.value);return}if(w.value===null){const a=ke.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&a.range!==void 0){ge({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){ge(t);return}const l=T(t);w.value={init:t,initHash:l,final:t,finalHash:l},D("rangeStart",$(t))}else{const a=w.value.initHash,l=T(t),o=a<=l?{from:w.value.init,to:t}:{from:t,to:w.value.init};w.value=null,ye(a===l?t:{target:t,...o}),D("rangeEnd",{from:$(o.from),to:$(o.to)})}}function ut(e){if(w.value!==null){const t={...i.value,day:e};Object.assign(w.value,{final:t,finalHash:T(t)})}}return Object.assign(I,{setToday:He,setView:Ze,offsetCalendar:pe,setCalendarTo:fe,setEditingRange:et}),()=>{const e=[u("div",{class:"q-date__content col relative-position"},[u(Z,{name:"q-transition--fade"},ot[x.value])])],t=gt(P.default);return t!==void 0&&e.push(u("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&ue(e,"push"),u("div",{class:Qe.value,...Xe.value},[lt(),u("div",{ref:J,class:"q-date__main col column",tabindex:-1},e)])}}}),Ft=Ee({name:"QPopupProxy",props:{...Mt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(n,{slots:P,emit:D,attrs:I}){const{proxy:_}=Pe(),{$q:R}=_,y=q(!1),f=q(null),V=c(()=>parseInt(n.breakpoint,10)),{canShow:S}=qt({showing:y});function k(){return R.screen.width<V.value||R.screen.height<V.value?"dialog":"menu"}const H=q(k()),re=c(()=>H.value==="menu"?{maxHeight:"99vh"}:{});U(()=>k(),m=>{y.value!==!0&&(H.value=m)});function ue(m){y.value=!0,D("show",m)}function J(m){y.value=!1,H.value=k(),D("hide",m)}return Object.assign(_,{show(m){S(m)===!0&&f.value.show(m)},hide(m){f.value.hide(m)},toggle(m){f.value.toggle(m)}}),_t(_,"currentComponent",()=>({type:H.value,ref:f.value})),()=>{const m={ref:f,...re.value,...I,onShow:ue,onHide:J};let h;return H.value==="dialog"?h=wt:(h=Dt,Object.assign(m,{target:n.target,contextMenu:n.contextMenu,noParentEvent:!0,separateClosePopup:!0})),u(h,m,P.default)}}});export{Ft as Q,Tt as a};
