import{P as Ln,r as g,j as a,e as ot,g as Cn,f as Sn,R as En,L as Bn}from"./index-92cc1682.js";import{C as On,a as Pn,L as Fn,P as Mn,b as Nn,p as Rn,c as In,d as Dn,e as kn}from"./index-c6b989b0.js";const zn="_titleField_1kljs_6",Gn="_lastPeriodField_1kljs_13",Hn="_dashboardLink_1kljs_19",Un="_dashboardTitle_1kljs_28",qn="_toggleBtn_1kljs_35",$n="_lastButton_1kljs_43",Wn="_monthTitle_1kljs_57",Kn="_chartTitle_1kljs_64",Zn="_chartTitleField_1kljs_70",Xn="_average_1kljs_77",Yn="_averageValue_1kljs_84",Jn="_chart_1kljs_64",Vn="_chartCont_1kljs_101",_={titleField:zn,lastPeriodField:Gn,dashboardLink:Hn,dashboardTitle:Un,toggleBtn:qn,lastButton:$n,monthTitle:Wn,chartTitle:Kn,chartTitleField:Zn,average:Xn,averageValue:Yn,chart:Jn,chartCont:Vn},Qn="_modal_ofzml_6",tr={modal:Qn},Xt=({onClose:d,children:p})=>(g.useEffect(()=>{const x=j=>{j.code==="Escape"&&d()};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[d]),a.jsx("div",{className:tr.modal,children:p}));Xt.propTypes={onClose:Ln.func.isRequired};const er="_graphTooltip_1qmre_6",nr="_closeBtn_1qmre_14",rr="_tooltipValue_1qmre_24",ar="_tooltipTitle_1qmre_30",ir="_tooltipField_1qmre_39",X={graphTooltip:er,closeBtn:nr,tooltipValue:rr,tooltipTitle:ar,tooltipField:ir};var lt={exports:{}};lt.exports;(function(d,p){var x=200,j="__lodash_hash_undefined__",T=1,M=2,b=9007199254740991,L="[object Arguments]",B="[object Array]",z="[object AsyncFunction]",G="[object Boolean]",H="[object Date]",vt="[object Error]",mt="[object Function]",Jt="[object GeneratorFunction]",Y="[object Map]",xt="[object Number]",Vt="[object Null]",U="[object Object]",Tt="[object Promise]",Qt="[object Proxy]",bt="[object RegExp]",J="[object Set]",wt="[object String]",te="[object Symbol]",ee="[object Undefined]",ct="[object WeakMap]",jt="[object ArrayBuffer]",V="[object DataView]",ne="[object Float32Array]",re="[object Float64Array]",ae="[object Int8Array]",ie="[object Int16Array]",se="[object Int32Array]",oe="[object Uint8Array]",le="[object Uint8ClampedArray]",ce="[object Uint16Array]",ue="[object Uint32Array]",de=/[\\^$.*+?()[\]{}|]/g,fe=/^\[object .+?Constructor\]$/,he=/^(?:0|[1-9]\d*)$/,s={};s[ne]=s[re]=s[ae]=s[ie]=s[se]=s[oe]=s[le]=s[ce]=s[ue]=!0,s[L]=s[B]=s[jt]=s[G]=s[V]=s[H]=s[vt]=s[mt]=s[Y]=s[xt]=s[U]=s[bt]=s[J]=s[wt]=s[ct]=!1;var At=typeof ot=="object"&&ot&&ot.Object===Object&&ot,pe=typeof self=="object"&&self&&self.Object===Object&&self,C=At||pe||Function("return this")(),Lt=p&&!p.nodeType&&p,Ct=Lt&&!0&&d&&!d.nodeType&&d,St=Ct&&Ct.exports===Lt,ut=St&&At.process,Et=function(){try{return ut&&ut.binding&&ut.binding("util")}catch{}}(),Bt=Et&&Et.isTypedArray;function ge(t,e){for(var n=-1,r=t==null?0:t.length,o=0,i=[];++n<r;){var c=t[n];e(c,n,t)&&(i[o++]=c)}return i}function _e(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function ye(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function ve(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function me(t){return function(e){return t(e)}}function xe(t,e){return t.has(e)}function Te(t,e){return t==null?void 0:t[e]}function be(t){var e=-1,n=Array(t.size);return t.forEach(function(r,o){n[++e]=[o,r]}),n}function we(t,e){return function(n){return t(e(n))}}function je(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Ae=Array.prototype,Le=Function.prototype,Q=Object.prototype,dt=C["__core-js_shared__"],Ot=Le.toString,A=Q.hasOwnProperty,Pt=function(){var t=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ft=Q.toString,Ce=RegExp("^"+Ot.call(A).replace(de,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mt=St?C.Buffer:void 0,tt=C.Symbol,Nt=C.Uint8Array,Rt=Q.propertyIsEnumerable,Se=Ae.splice,N=tt?tt.toStringTag:void 0,It=Object.getOwnPropertySymbols,Ee=Mt?Mt.isBuffer:void 0,Be=we(Object.keys,Object),ft=q(C,"DataView"),$=q(C,"Map"),ht=q(C,"Promise"),pt=q(C,"Set"),gt=q(C,"WeakMap"),W=q(Object,"create"),Oe=D(ft),Pe=D($),Fe=D(ht),Me=D(pt),Ne=D(gt),Dt=tt?tt.prototype:void 0,_t=Dt?Dt.valueOf:void 0;function R(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Re(){this.__data__=W?W(null):{},this.size=0}function Ie(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function De(t){var e=this.__data__;if(W){var n=e[t];return n===j?void 0:n}return A.call(e,t)?e[t]:void 0}function ke(t){var e=this.__data__;return W?e[t]!==void 0:A.call(e,t)}function ze(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=W&&e===void 0?j:e,this}R.prototype.clear=Re,R.prototype.delete=Ie,R.prototype.get=De,R.prototype.has=ke,R.prototype.set=ze;function S(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ge(){this.__data__=[],this.size=0}function He(t){var e=this.__data__,n=nt(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function Ue(t){var e=this.__data__,n=nt(e,t);return n<0?void 0:e[n][1]}function qe(t){return nt(this.__data__,t)>-1}function $e(t,e){var n=this.__data__,r=nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}S.prototype.clear=Ge,S.prototype.delete=He,S.prototype.get=Ue,S.prototype.has=qe,S.prototype.set=$e;function I(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function We(){this.size=0,this.__data__={hash:new R,map:new($||S),string:new R}}function Ke(t){var e=rt(this,t).delete(t);return this.size-=e?1:0,e}function Ze(t){return rt(this,t).get(t)}function Xe(t){return rt(this,t).has(t)}function Ye(t,e){var n=rt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}I.prototype.clear=We,I.prototype.delete=Ke,I.prototype.get=Ze,I.prototype.has=Xe,I.prototype.set=Ye;function et(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new I;++e<n;)this.add(t[e])}function Je(t){return this.__data__.set(t,j),this}function Ve(t){return this.__data__.has(t)}et.prototype.add=et.prototype.push=Je,et.prototype.has=Ve;function O(t){var e=this.__data__=new S(t);this.size=e.size}function Qe(){this.__data__=new S,this.size=0}function tn(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function en(t){return this.__data__.get(t)}function nn(t){return this.__data__.has(t)}function rn(t,e){var n=this.__data__;if(n instanceof S){var r=n.__data__;if(!$||r.length<x-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new I(r)}return n.set(t,e),this.size=n.size,this}O.prototype.clear=Qe,O.prototype.delete=tn,O.prototype.get=en,O.prototype.has=nn,O.prototype.set=rn;function an(t,e){var n=at(t),r=!n&&xn(t),o=!n&&!r&&yt(t),i=!n&&!r&&!o&&Kt(t),c=n||r||o||i,u=c?ve(t.length,String):[],f=u.length;for(var l in t)(e||A.call(t,l))&&!(c&&(l=="length"||o&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||gn(l,f)))&&u.push(l);return u}function nt(t,e){for(var n=t.length;n--;)if(Ut(t[n][0],e))return n;return-1}function sn(t,e,n){var r=e(t);return at(t)?r:_e(r,n(t))}function K(t){return t==null?t===void 0?ee:Vt:N&&N in Object(t)?hn(t):mn(t)}function kt(t){return Z(t)&&K(t)==L}function zt(t,e,n,r,o){return t===e?!0:t==null||e==null||!Z(t)&&!Z(e)?t!==t&&e!==e:on(t,e,n,r,zt,o)}function on(t,e,n,r,o,i){var c=at(t),u=at(e),f=c?B:P(t),l=u?B:P(e);f=f==L?U:f,l=l==L?U:l;var y=f==U,w=l==U,h=f==l;if(h&&yt(t)){if(!yt(e))return!1;c=!0,y=!1}if(h&&!y)return i||(i=new O),c||Kt(t)?Gt(t,e,n,r,o,i):dn(t,e,f,n,r,o,i);if(!(n&T)){var v=y&&A.call(t,"__wrapped__"),m=w&&A.call(e,"__wrapped__");if(v||m){var F=v?t.value():t,E=m?e.value():e;return i||(i=new O),o(F,E,n,r,i)}}return h?(i||(i=new O),fn(t,e,n,r,o,i)):!1}function ln(t){if(!Wt(t)||yn(t))return!1;var e=qt(t)?Ce:fe;return e.test(D(t))}function cn(t){return Z(t)&&$t(t.length)&&!!s[K(t)]}function un(t){if(!vn(t))return Be(t);var e=[];for(var n in Object(t))A.call(t,n)&&n!="constructor"&&e.push(n);return e}function Gt(t,e,n,r,o,i){var c=n&T,u=t.length,f=e.length;if(u!=f&&!(c&&f>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var y=-1,w=!0,h=n&M?new et:void 0;for(i.set(t,e),i.set(e,t);++y<u;){var v=t[y],m=e[y];if(r)var F=c?r(m,v,y,e,t,i):r(v,m,y,t,e,i);if(F!==void 0){if(F)continue;w=!1;break}if(h){if(!ye(e,function(E,k){if(!xe(h,k)&&(v===E||o(v,E,n,r,i)))return h.push(k)})){w=!1;break}}else if(!(v===m||o(v,m,n,r,i))){w=!1;break}}return i.delete(t),i.delete(e),w}function dn(t,e,n,r,o,i,c){switch(n){case V:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case jt:return!(t.byteLength!=e.byteLength||!i(new Nt(t),new Nt(e)));case G:case H:case xt:return Ut(+t,+e);case vt:return t.name==e.name&&t.message==e.message;case bt:case wt:return t==e+"";case Y:var u=be;case J:var f=r&T;if(u||(u=je),t.size!=e.size&&!f)return!1;var l=c.get(t);if(l)return l==e;r|=M,c.set(t,e);var y=Gt(u(t),u(e),r,o,i,c);return c.delete(t),y;case te:if(_t)return _t.call(t)==_t.call(e)}return!1}function fn(t,e,n,r,o,i){var c=n&T,u=Ht(t),f=u.length,l=Ht(e),y=l.length;if(f!=y&&!c)return!1;for(var w=f;w--;){var h=u[w];if(!(c?h in e:A.call(e,h)))return!1}var v=i.get(t);if(v&&i.get(e))return v==e;var m=!0;i.set(t,e),i.set(e,t);for(var F=c;++w<f;){h=u[w];var E=t[h],k=e[h];if(r)var Zt=c?r(k,E,h,e,t,i):r(E,k,h,t,e,i);if(!(Zt===void 0?E===k||o(E,k,n,r,i):Zt)){m=!1;break}F||(F=h=="constructor")}if(m&&!F){var it=t.constructor,st=e.constructor;it!=st&&"constructor"in t&&"constructor"in e&&!(typeof it=="function"&&it instanceof it&&typeof st=="function"&&st instanceof st)&&(m=!1)}return i.delete(t),i.delete(e),m}function Ht(t){return sn(t,wn,pn)}function rt(t,e){var n=t.__data__;return _n(e)?n[typeof e=="string"?"string":"hash"]:n.map}function q(t,e){var n=Te(t,e);return ln(n)?n:void 0}function hn(t){var e=A.call(t,N),n=t[N];try{t[N]=void 0;var r=!0}catch{}var o=Ft.call(t);return r&&(e?t[N]=n:delete t[N]),o}var pn=It?function(t){return t==null?[]:(t=Object(t),ge(It(t),function(e){return Rt.call(t,e)}))}:jn,P=K;(ft&&P(new ft(new ArrayBuffer(1)))!=V||$&&P(new $)!=Y||ht&&P(ht.resolve())!=Tt||pt&&P(new pt)!=J||gt&&P(new gt)!=ct)&&(P=function(t){var e=K(t),n=e==U?t.constructor:void 0,r=n?D(n):"";if(r)switch(r){case Oe:return V;case Pe:return Y;case Fe:return Tt;case Me:return J;case Ne:return ct}return e});function gn(t,e){return e=e??b,!!e&&(typeof t=="number"||he.test(t))&&t>-1&&t%1==0&&t<e}function _n(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function yn(t){return!!Pt&&Pt in t}function vn(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Q;return t===n}function mn(t){return Ft.call(t)}function D(t){if(t!=null){try{return Ot.call(t)}catch{}try{return t+""}catch{}}return""}function Ut(t,e){return t===e||t!==t&&e!==e}var xn=kt(function(){return arguments}())?kt:function(t){return Z(t)&&A.call(t,"callee")&&!Rt.call(t,"callee")},at=Array.isArray;function Tn(t){return t!=null&&$t(t.length)&&!qt(t)}var yt=Ee||An;function bn(t,e){return zt(t,e)}function qt(t){if(!Wt(t))return!1;var e=K(t);return e==mt||e==Jt||e==z||e==Qt}function $t(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=b}function Wt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Z(t){return t!=null&&typeof t=="object"}var Kt=Bt?me(Bt):cn;function wn(t){return Tn(t)?an(t):un(t)}function jn(){return[]}function An(){return!1}d.exports=bn})(lt,lt.exports);var sr=lt.exports;const or=Cn(sr),lr=d=>g.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d},g.createElement("path",{d:"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),g.createElement("path",{d:"M9.16992 14.83L14.8299 9.17004",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),g.createElement("path",{d:"M14.8299 14.83L9.16992 9.17004",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));On.register(Pn,Fn,Mn,Nn,Rn,In,Dn);const Yt=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],cr=()=>{const d=g.useRef(null),[p,x]=g.useState({opacity:0,top:0,left:0,date:"",value:"",display:"none"}),j={interaction:{mode:"index",intersect:!1},responsive:!0,plugins:{legend:{display:!1,position:"top"},title:{display:!1,text:"Chart.js Line Chart"},tooltip:{enabled:!1,position:"nearest",external:M=>{const b=M.tooltip;if(b.opacity===0&&p.opacity!==0){x(z=>({...z,opacity:0,display:"none"}));return}const L=M.chart.canvas.getBoundingClientRect(),B={opacity:1,display:"block",left:L.left+b.caretX,top:L.top+b.caretY-94,date:b.dataPoints[0].label,value:b.dataPoints[0].formattedValue};or(p,B)||x(B)}}},indexAxis:"x",scales:{x:{ticks:{padding:6},beginAtZero:!1,grid:{color:"#292928",offset:!0,tickLength:0},border:{color:"#292928"}},y:{ticks:{stepSize:1e3,padding:8},beginAtZero:!0,grid:{color:"#292928",tickLength:0},border:{color:"#292928"}}}},T={labels:Yt,datasets:[{label:"Dataset 1",data:[1500,1450,1300,1210,1560,1700,1e3,0,1500,1120,2e3,1200,1600,1500,1510,1200,1800,2e3,1200,1200,1400,2e3,1300,2500,1e3,3e3,2500,1200,1500,3e3,2100],borderColor:"#E3FFA8",tension:.4,backgroundColor:"#292928",borderWidth:1,pointRadius:0,pointHoverBackgroundColor:"#E3FFA8",hitRadius:5,pointHoverRadius:5}]};return a.jsxs(a.Fragment,{children:[a.jsx(kn,{options:j,ref:d,data:T}),a.jsxs("div",{className:X.graphTooltip,style:{top:p.top,left:p.left,opacity:p.opacity,display:p.display},children:[a.jsx("button",{className:X.closeBtn,children:a.jsx(lr,{width:16,height:16,stroke:"#B6B6B6"})}),a.jsxs("div",{className:X.tooltipField,children:[a.jsx("p",{className:X.tooltipValue,children:p.value}),a.jsx("p",{className:X.tooltipTitle,children:"calories"})]})]})]})},ur=d=>g.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d},g.createElement("path",{d:"M9.57007 5.93018L3.50007 12.0002L9.57007 18.0702",stroke:"#B6B6B6",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),g.createElement("path",{d:"M20.5 12H3.67",stroke:"#B6B6B6",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),dr=d=>g.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d},g.createElement("path",{d:"M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995",stroke:"#E3FFA8",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),fr=["61","61","61","61","61","64","64","64","64","64","64","64","64","64","65","65","65","65","19","20","21","22","23","24","25","26","27","28","29","30","31"],hr=()=>{var z;const d=Sn(),p=g.useRef(((z=d.state)==null?void 0:z.from)??En.MainPage),[x,j]=g.useState(!1),[T,M]=g.useState(!0),b=()=>{x&&j(!1)},L=()=>{j(!x)},B=()=>{M(!T),b()};return a.jsxs("section",{children:[a.jsxs("div",{className:_.titleField,children:[a.jsxs("div",{className:_.lastPeriodField,children:[a.jsx(Bn,{to:p.current,className:_.dashboardLink,children:a.jsx(ur,{width:16,height:16,className:_.goBackBtn})}),a.jsx("h2",{className:_.dashboardTitle,children:T?"Last month":"Last year"}),a.jsx("button",{type:"button",className:_.toggleBtn,onClick:L,children:a.jsx(dr,{width:16,height:16,stroke:"#E3FFA8"})}),x&&a.jsx(Xt,{onClose:b,children:a.jsx("button",{type:"button",className:_.lastButton,onClick:B,children:T?"Last year":"Last month"})})]}),a.jsx("h3",{className:_.monthTitle,children:"November"})]}),T?a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsxs("div",{className:_.chartTitleField,children:[a.jsx("h4",{className:_.chartTitle,children:"Calories"}),a.jsxs("p",{className:_.average,children:["Average value: ",a.jsx("span",{className:_.averageValue,children:"1700 kg"})]})]}),a.jsx("div",{className:_.chartCont,children:a.jsx("div",{className:_.chart,children:a.jsx(cr,{})})})]}),a.jsxs("li",{children:[a.jsx("h4",{children:"Water"}),a.jsxs("p",{children:["Average value: ",a.jsx("span",{children:"1700 ml"})]})]}),a.jsxs("li",{children:[a.jsx("h4",{children:"Weight"}),a.jsxs("p",{children:["Average value: ",a.jsx("span",{children:"68 kg"})]}),a.jsxs("ul",{children:[Yt.map((G,H)=>a.jsx("li",{children:G},H)),fr.map((G,H)=>a.jsx("li",{children:G},H))]})]})]}):a.jsx("p",{children:"Last year"})]})},_r=hr;export{_r as default};
