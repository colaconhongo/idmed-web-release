import{l as je,bi as Qe,bj as vt,bk as mt,bl as St,ae as Rt,bm as Et,af as Ht,bn as Lt,c as f,bo as Tt,g as Ue,h,P as Be,bp as Dt,aC as Pt,ah as ne,bq as Nt,r as E,w as me,aQ as G,br as $t,bs as Kt,aG as jt,aH as Qt,q as gt,bt as Ut,bu as Wt,bv as rt,aE as ke,bw as Xt,bx as Yt,aT as Ne,by as Gt,aL as ve,bz as ct,ag as Jt,aD as Zt,a9 as el,y as tl}from"./index.28c7e456.js";import{r as Ke,c as ll,Q as ul,a as nl,b as ol}from"./QMenu.9a83401e.js";var al=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const il={xs:8,sm:10,md:14,lg:20,xl:24};var rl=je({name:"QChip",props:{...Rt,...Et,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:i}){const{proxy:{$q:y}}=Ue(),M=Ht(e,y),a=Lt(e,il),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||y.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||y.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||y.lang.label.remove};return{chip:d,remove:D}});function C(d){d.keyCode===13&&k(d)}function k(d){e.disable||(i("update:selected",!e.selected),i("click",d))}function p(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function T(){const d=[];z.value===!0&&d.push(h("div",{class:"q-focus-helper"})),F.value===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Dt(c.default,D))),e.iconRight&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:p,onKeyup:p})),d}return()=>{if(e.modelValue===!1)return;const d={class:r.value,style:a.value};return z.value===!0&&Object.assign(d,w.value.chip,{onClick:k,onKeyup:C}),Tt("div",d,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Pt,e.ripple]])}}});const K=1e3,cl=["start","center","end","start-force","center-force","end-force"],ht=Array.prototype.filter,sl=window.getComputedStyle(document.body).overflowAnchor===void 0?Nt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];ht.call(i,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const y=i[c];y&&y.dataset&&(y.dataset.qVsAnchor="")}))};function Se(e,c){return e+c}function $e(e,c,i,y,M,a,F,b){const g=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(M===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=g.scrollLeft,r.scrollViewSize+=g.clientWidth),r.scrollMaxSize=g.scrollWidth,a===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=g.scrollTop,r.scrollViewSize+=g.clientHeight),r.scrollMaxSize=g.scrollHeight),i!==null)for(let w=i.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=w[z]);if(y!==null)for(let w=y.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=w[z]);if(c!==e){const w=g.getBoundingClientRect(),C=c.getBoundingClientRect();M===!0?(r.offsetStart+=C.left-w.left,r.offsetEnd-=C.width):(r.offsetStart+=C.top-w.top,r.offsetEnd-=C.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function st(e,c,i,y){c==="end"&&(c=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(y===!0&&(c=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):i===!0?(y===!0&&(c=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function xe(e,c,i,y){if(i>=y)return 0;const M=c.length,a=Math.floor(i/K),F=Math.floor((y-1)/K)+1;let b=e.slice(a,F).reduce(Se,0);return i%K!==0&&(b-=c.slice(a*K,i).reduce(Se,0)),y%K!==0&&y!==M&&(b-=c.slice(y,F*K).reduce(Se,0)),b}const bt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},gl=Object.keys(bt),dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function dl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:i,virtualScrollItemSizeComputed:y}){const M=Ue(),{props:a,emit:F,proxy:b}=M,{$q:g}=b;let z,r,w,C=[],k;const p=E(0),T=E(0),d=E({}),D=E(null),W=E(null),L=E(null),_=E({from:0,to:0}),qe=f(()=>a.tableColspan!==void 0?a.tableColspan:100);y===void 0&&(y=f(()=>a.virtualScrollItemSize));const O=f(()=>y.value+";"+a.virtualScrollHorizontal),X=f(()=>O.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(O,J);function J(){oe(r,!0)}function ge(l){oe(l===void 0?r:l)}function Z(l,o){const v=c();if(v==null||v.nodeType===8)return;const A=$e(v,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);w!==A.scrollViewSize&&j(A.scrollViewSize),P(v,A,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,cl.indexOf(o)!==-1?o:r!==-1&&l>r?"end":"start")}function Ae(){const l=c();if(l==null||l.nodeType===8)return;const o=$e(l,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),v=e.value-1,A=o.scrollMaxSize-o.offsetStart-o.offsetEnd-T.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){P(l,o,0,0);return}w!==o.scrollViewSize&&j(o.scrollViewSize),he(_.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[v],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){P(l,o,v,o.scrollMaxSize-o.offsetEnd-C.reduce(Se,0));return}let V=0,S=o.scrollStart-o.offsetStart,R=S;if(S<=A&&S+o.scrollViewSize>=p.value)S-=p.value,V=_.value.from,R=S;else for(let m=0;S>=C[m]&&V<v;m++)S-=C[m],V+=K;for(;S>0&&V<v;)S-=k[V],S>-o.scrollViewSize?(V++,R=S):R=k[V]+S;P(l,o,V,R)}function P(l,o,v,A,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,S=V===!0?B.replace("-force",""):B,R=S!==void 0?S:"start";let m=Math.max(0,v-d.value[R]),N=m+d.value.total;N>e.value&&(N=e.value,m=Math.max(0,N-d.value.total)),z=o.scrollStart;const Y=m!==_.value.from||N!==_.value.to;if(Y===!1&&S===void 0){be(v);return}const{activeElement:ze}=document,Q=L.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",pe),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",pe)})),sl(Q,v-m);const Ie=S!==void 0?k.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=N>=_.value.from&&m<=_.value.to?_.value.to:N;_.value={from:m,to:ee},p.value=xe(C,k,0,m),T.value=xe(C,k,N,e.value),requestAnimationFrame(()=>{_.value.to!==N&&z===o.scrollStart&&(_.value={from:_.value.from,to:N},T.value=xe(C,k,N,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;Y===!0&&he(m);const ee=k.slice(m,v).reduce(Se,0),te=ee+o.offsetStart+p.value,Me=te+k[v];let we=te+A;if(S!==void 0){const Ee=ee-Ie,Ve=o.scrollStart+Ee;we=V!==!0&&Ve<te&&Me<Ve+o.scrollViewSize?Ve:S==="end"?Me-o.scrollViewSize:te-(S==="start"?0:Math.round((o.scrollViewSize-k[v])/2))}z=we,st(l,we,a.virtualScrollHorizontal,g.lang.rtl),be(v)})}function he(l){const o=L.value;if(o){const v=ht.call(o.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),A=v.length,B=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let V=l,S,R;for(let m=0;m<A;){for(S=B(v[m]),m++;m<A&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;R=S-k[V],R!==0&&(k[V]+=R,C[Math.floor(V/K)]+=R),V++}}}function pe(){L.value!==null&&L.value!==void 0&&L.value.focus()}function oe(l,o){const v=1*y.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const A=k.length;k.length=e.value;for(let V=e.value-1;V>=A;V--)k[V]=v;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let S=0;const R=Math.min((V+1)*K,e.value);for(let m=V*K;m<R;m++)S+=k[m];C.push(S)}r=-1,z=void 0,p.value=xe(C,k,0,_.value.from),T.value=xe(C,k,_.value.to,e.value),l>=0?(he(_.value.from),G(()=>{Z(l)})):ae()}function j(l){if(l===void 0&&typeof window!="undefined"){const S=c();S!=null&&S.nodeType!==8&&(l=$e(S,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const o=parseFloat(a.virtualScrollSliceRatioBefore)||0,v=parseFloat(a.virtualScrollSliceRatioAfter)||0,A=1+o+v,B=l===void 0||l<=0?1:Math.ceil(l/y.value),V=Math.max(1,B,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/A));d.value={total:Math.ceil(V*A),start:Math.ceil(V*o),center:Math.ceil(V*(.5+o)),end:Math.ceil(V*(1+o)),view:B}}function Re(l,o){const v=a.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+v]:y.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[h("tr",[h("td",{style:{[v]:`${p.value}px`,...A},colspan:qe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[v]:`${p.value}px`,...A}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},o.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[h("tr",[h("td",{style:{[v]:`${T.value}px`,...A},colspan:qe.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${T.value}px`,...A}})]}function be(l){r!==l&&(a.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:_.value.from,to:_.value.to-1,direction:l<r?"decrease":"increase",ref:b}),r=l)}j();const ae=$t(Ae,g.platform.is.ios===!0?120:35);Kt(()=>{j()});let ye=!1;return jt(()=>{ye=!0}),Qt(()=>{if(ye!==!0)return;const l=c();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,a.virtualScrollHorizontal,g.lang.rtl):Z(r)}),gt(()=>{ae.cancel()}),Object.assign(b,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:ae,localResetVirtualScroll:oe,padVirtualScroll:Re,scrollTo:Z,reset:J,refresh:ge}}const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);var hl=je({name:"QSelect",inheritAttrs:!1,props:{...dt,...Ut,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:c,emit:i}){const{proxy:y}=Ue(),{$q:M}=y,a=E(!1),F=E(!1),b=E(-1),g=E(""),z=E(!1),r=E(!1);let w=null,C=null,k,p,T,d=null,D,W,L,_;const qe=E(null),O=E(null),X=E(null),J=E(null),ge=E(null),Z=Wt(e),Ae=Gt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:pe,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:be,scrollTo:ae,setVirtualScrollSize:ye}=dl({virtualScrollLength:P,getVirtualScrollTarget:Ct,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=St(),o=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],s=n.map(q=>Vt(q,u));return e.modelValue===null&&t===!0?s.filter(q=>q!==null):s}return n}),v=f(()=>{const t={};return vl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),A=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(o.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=f(()=>P.value===0),m=f(()=>o.value.map(t=>$.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>o.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:n}=pe.value;return e.options.slice(t,n).map((u,s)=>{const q=ie.value(u)===!0,x=Te(u)===!0,H=t+s,I={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:A.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{le(u)}};return q!==!0&&(b.value===H&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{a.value===!0&&re(H)})),{index:H,opt:u,html:Y.value(u),label:$.value(u),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Ee=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Le(e.optionValue,"value")),$=f(()=>Le(e.optionLabel,"label")),ie=f(()=>Le(e.optionDisable,"disable")),_e=f(()=>o.value.map(t=>U.value(t))),yt=f(()=>{const t={onInput:ut,onChange:Ae,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(n){p===!0&&ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ae,t});me(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&a.value!==!0||B.value!==!0)&&(T!==!0&&fe(),(F.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(a,De),me(P,Bt);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();i("remove",{index:t,value:n.splice(t,1)[0]}),i("update:modelValue",n)}else i("update:modelValue",null)}function wt(t){He(t),l.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce($.value(t),!0,!0),i("update:modelValue",u);return}if(o.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Te(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();i("add",{index:s.length,value:u}),s.push(u),i("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||ie.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?$.value(t):"",!0,!0),ue()),O.value!==null&&O.value.focus(),(o.value.length===0||ke(U.value(o.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((p!==!0||z.value===!0)&&l.focus(),Ye(),o.value.length===0){const x=e.emitValue===!0?u:t;i("add",{index:0,value:x}),i("update:modelValue",e.multiple===!0?[x]:x);return}const s=e.modelValue.slice(),q=_e.value.findIndex(x=>ke(x,u));if(q!==-1)i("remove",{index:q,value:s.splice(q,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const x=e.emitValue===!0?u:t;i("add",{index:s.length,value:x}),s.push(x)}i("update:modelValue",s)}function re(t){if(M.platform.is.desktop!==!0)return;const n=t!==-1&&t<P.value?t:-1;b.value!==n&&(b.value=n)}function Oe(t=1,n){if(a.value===!0){let u=b.value;do u=ct(u+t,-1,P.value-1);while(u!==-1&&u!==b.value&&ie.value(e.options[u])===!0);b.value!==u&&(re(u),ae(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(u>=0?$.value(e.options[u]):D,!0))}}function Vt(t,n){const u=s=>ke(U.value(s),t);return e.options.find(u)||n.find(u)||t}function Le(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function Te(t){const n=U.value(t);return _e.value.find(u=>ke(u,n))!==void 0}function Ye(t){e.useInput===!0&&O.value!==null&&(t===void 0||O.value===t.target&&t.target.value===m.value)&&O.value.select()}function Ge(t){Jt(t,27)===!0&&a.value===!0&&(ve(t),ue(),fe()),i("keyup",t)}function Je(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=x=>{const H=e.options.find(I=>x.value(I).toLocaleLowerCase()===u);return H===void 0?!1:(o.value.indexOf(H)===-1?le(H):ue(),!0)},q=x=>{s(U)!==!0&&(s($)===!0||x===!0||ce(n,!0,()=>q(!0)))};q()}else l.clearValue(t)}function Ze(t){i("keypress",t)}function et(t){if(i("keydown",t),Zt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(b.value!==-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),b.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*oe.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Oe(t.keyCode===38?-1:1,e.multiple));const s=P.value;if((L===void 0||_<Date.now())&&(L=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){a.value!==!0&&de(t);const q=t.key.toLocaleLowerCase(),x=L.length===1&&L[0]===q;_=Date.now()+1500,x===!1&&(ne(t),L+=q);const H=new RegExp("^"+L.split("").map(Pe=>fl.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let I=b.value;if(x===!0||I<0||H.test($.value(e.options[I]))!==!0)do I=ct(I+1,-1,s-1);while(I!==b.value&&(ie.value(e.options[I])===!0||H.test($.value(e.options[I]))!==!0));b.value!==I&&G(()=>{re(I),ae(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<s){le(e.options[b.value]);return}if(n===!0){const q=(x,H)=>{if(H){if(ft(H)!==!0)return}else H=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(H==="toggle"?le:Xe)(x,H==="add-unique"),e.multiple!==!0&&(O.value!==null&&O.value.focus(),ue())};if(e.onNewValue!==void 0?i("newValue",g.value,q):q(g.value),e.multiple!==!0)return}a.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return p===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return tt()}function kt(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?te.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?te.value.map((t,n)=>h(rl,{key:"option-"+n,removable:l.editable.value===!0&&ie.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[h("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function lt(){if(R.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:g.value}):void 0;const t=c.option!==void 0?c.option:u=>h(ol,{key:u.index,...u.itemProps},()=>h(ul,()=>h(nl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Re("div",Me.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),tl(c["after-options"],n)}function xt(t,n){const u=n===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?O:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&p===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),h("input",s)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),T=!0,D=g.value,l.focused.value!==!0&&(p!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):C=setTimeout(()=>{C=null,i("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){T=u!==!0,e.useInput===!0&&(Fe(t,!0),(n===!0||u!==!0)&&(D=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&T!==!0&&t===$.value(o.value[0])&&(t="");const s=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);d!==null&&clearTimeout(d),d=s,i("filter",t,(q,x)=>{(n===!0||l.focused.value===!0)&&d===s&&(clearTimeout(d),typeof q=="function"&&q(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?a.value===!0&&ue():a.value===!0?De(!0):a.value=!0),typeof x=="function"&&G(()=>{x(y)}),typeof u=="function"&&G(()=>{u(y)})}))},()=>{l.focused.value===!0&&d===s&&(clearTimeout(d),l.innerLoading.value=!1,r.value=!1),a.value===!0&&(a.value=!1)})}function qt(){return h(ll,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:A.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ee.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:be,onBeforeShow:ot,onBeforeHide:At,onShow:pt},lt)}function At(t){at(t),se()}function pt(){ye()}function zt(t){ve(t),O.value!==null&&O.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ve(t),G(()=>{z.value=!1})}function Mt(){const t=[h(al,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:A.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(h("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ne,onScrollPassive:be},lt())),h(el,{ref:J,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:_t,onHide:Ot,onShow:Ft},()=>h("div",{class:"q-select__dialog"+(A.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function _t(t){at(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ot(t){ue(),l.focused.value===!1&&i("blur",t),fe()}function Ft(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&O.value!==null&&O.value!==t&&O.value.focus(),ye()}function se(){F.value!==!0&&(b.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function de(t){l.editable.value===!0&&(p===!0?(l.onControlFocusin(t),F.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(R.value!==!0||c["no-option"]!==void 0)&&(a.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&$.value(o.value[0])||"",!0,!0)}function De(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=U.value(o.value[0]);n=e.options.findIndex(s=>ke(U.value(s),u))}j(n)}re(n)}function Bt(t,n){a.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>n?j():De(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function ot(t){t!==void 0&&ve(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function at(t){t!==void 0&&ve(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function it(){p=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),W=M.platform.is.ios===!0&&p===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(it),Yt(nt),it(),gt(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(y,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:Oe,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:Te,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ie.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:qe,targetRef:O,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||R.value!==!0||c["no-option"]!==void 0))return p===!0?Mt():qt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if(Ne(t),p!==!0&&a.value===!0){se(),O.value!==null&&O.value.focus();return}de(t)}},getControl:t=>{const n=kt(),u=t===!0||F.value!==!0||p!==!0;if(e.useInput===!0)n.push(xt(t,u));else if(l.editable.value===!0){const q=u===!0?Ie.value:void 0;n.push(h("input",{ref:u===!0?O:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(Z.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const q=_e.value.map(x=>h("option",{value:x,selected:!0}));n.push(h("select",{class:"hidden",name:Z.value,multiple:e.multiple},q))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[h(Be,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{hl as Q,dl as a,rl as b,gl as c,dt as u};
