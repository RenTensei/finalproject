import{g as Qr,r as l,j as f}from"./index-0ee046fe.js";const en="/HealthyHub/assets/YourGoals-mob-1bdd0d67.png",tn="/HealthyHub/assets/YourGoals-mob@2x-720b5892.png",rn="/HealthyHub/assets/YourGoals-tab-fcf7e6b7.png",nn="/HealthyHub/assets/YourGoals-tab@2x-530fc013.png",Ct="/HealthyHub/assets/YourGoals-mob-1bdd0d67.png",an="/HealthyHub/assets/YourGoals-mob@2x-720b5892.png",on="_container_your_goal_1e6xo_6",cn="_container_picture_1e6xo_31",sn="_container_form_1e6xo_52",un="_title_1e6xo_68",ln="_form_checked_1e6xo_82",fn="_text_1e6xo_85",dn="_container_label_list_1e6xo_100",pn="_container_label_1e6xo_100",hn="_container_label_ctnter_1e6xo_127",mn="_container_label_end_1e6xo_141",yn="_list_1e6xo_156",bn="_item_1e6xo_163",gn="_btn_1e6xo_168",O={container_your_goal:on,container_picture:cn,container_form:sn,title:un,form_checked:ln,text:fn,container_label_list:dn,container_label:pn,container_label_ctnter:hn,container_label_end:mn,list:yn,item:bn,btn:gn};var vn=function(t){return _n(t)&&!Tn(t)};function _n(e){return!!e&&typeof e=="object"}function Tn(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||En(e)}var Sn=typeof Symbol=="function"&&Symbol.for,$n=Sn?Symbol.for("react.element"):60103;function En(e){return e.$$typeof===$n}function jn(e){return Array.isArray(e)?[]:{}}function _e(e,t){return t.clone!==!1&&t.isMergeableObject(e)?fe(jn(e),e,t):e}function An(e,t,r){return e.concat(t).map(function(n){return _e(n,r)})}function xn(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=_e(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=_e(t[i],r):n[i]=fe(e[i],t[i],r)}),n}function fe(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||An,r.isMergeableObject=r.isMergeableObject||vn;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):xn(e,t,r):_e(t,r)}fe.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return fe(n,i,r)},{})};var qe=fe,wn=typeof global=="object"&&global&&global.Object===Object&&global;const or=wn;var On=typeof self=="object"&&self&&self.Object===Object&&self,Cn=or||On||Function("return this")();const G=Cn;var Fn=G.Symbol;const z=Fn;var cr=Object.prototype,In=cr.hasOwnProperty,Mn=cr.toString,ue=z?z.toStringTag:void 0;function Nn(e){var t=In.call(e,ue),r=e[ue];try{e[ue]=void 0;var n=!0}catch{}var i=Mn.call(e);return n&&(t?e[ue]=r:delete e[ue]),i}var Rn=Object.prototype,Pn=Rn.toString;function Ln(e){return Pn.call(e)}var Dn="[object Null]",Vn="[object Undefined]",Ft=z?z.toStringTag:void 0;function J(e){return e==null?e===void 0?Vn:Dn:Ft&&Ft in Object(e)?Nn(e):Ln(e)}function sr(e,t){return function(r){return e(t(r))}}var Un=sr(Object.getPrototypeOf,Object);const rt=Un;function Q(e){return e!=null&&typeof e=="object"}var Hn="[object Object]",Gn=Function.prototype,Bn=Object.prototype,ur=Gn.toString,kn=Bn.hasOwnProperty,zn=ur.call(Object);function It(e){if(!Q(e)||J(e)!=Hn)return!1;var t=rt(e);if(t===null)return!0;var r=kn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&ur.call(r)==zn}var Mt=Array.isArray,Nt=Object.keys,Yn=Object.prototype.hasOwnProperty,Kn=typeof Element<"u";function Xe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Mt(e),n=Mt(t),i,o,c;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Xe(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var h=e instanceof Date,y=t instanceof Date;if(h!=y)return!1;if(h&&y)return e.getTime()==t.getTime();var v=e instanceof RegExp,I=t instanceof RegExp;if(v!=I)return!1;if(v&&I)return e.toString()==t.toString();var M=Nt(e);if(o=M.length,o!==Nt(t).length)return!1;for(i=o;i--!==0;)if(!Yn.call(t,M[i]))return!1;if(Kn&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(c=M[i],!(c==="_owner"&&e.$$typeof)&&!Xe(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var Wn=function(t,r){try{return Xe(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const W=Qr(Wn);var qn=!0;function Xn(e,t){if(!qn){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Zn(){this.__data__=[],this.size=0}function lr(e,t){return e===t||e!==e&&t!==t}function Te(e,t){for(var r=e.length;r--;)if(lr(e[r][0],t))return r;return-1}var Jn=Array.prototype,Qn=Jn.splice;function ea(e){var t=this.__data__,r=Te(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Qn.call(t,r,1),--this.size,!0}function ta(e){var t=this.__data__,r=Te(t,e);return r<0?void 0:t[r][1]}function ra(e){return Te(this.__data__,e)>-1}function na(e,t){var r=this.__data__,n=Te(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function k(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}k.prototype.clear=Zn;k.prototype.delete=ea;k.prototype.get=ta;k.prototype.has=ra;k.prototype.set=na;function aa(){this.__data__=new k,this.size=0}function ia(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function oa(e){return this.__data__.get(e)}function ca(e){return this.__data__.has(e)}function he(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var sa="[object AsyncFunction]",ua="[object Function]",la="[object GeneratorFunction]",fa="[object Proxy]";function fr(e){if(!he(e))return!1;var t=J(e);return t==ua||t==la||t==sa||t==fa}var da=G["__core-js_shared__"];const ze=da;var Rt=function(){var e=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function pa(e){return!!Rt&&Rt in e}var ha=Function.prototype,ma=ha.toString;function ee(e){if(e!=null){try{return ma.call(e)}catch{}try{return e+""}catch{}}return""}var ya=/[\\^$.*+?()[\]{}|]/g,ba=/^\[object .+?Constructor\]$/,ga=Function.prototype,va=Object.prototype,_a=ga.toString,Ta=va.hasOwnProperty,Sa=RegExp("^"+_a.call(Ta).replace(ya,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $a(e){if(!he(e)||pa(e))return!1;var t=fr(e)?Sa:ba;return t.test(ee(e))}function Ea(e,t){return e==null?void 0:e[t]}function te(e,t){var r=Ea(e,t);return $a(r)?r:void 0}var ja=te(G,"Map");const de=ja;var Aa=te(Object,"create");const pe=Aa;function xa(){this.__data__=pe?pe(null):{},this.size=0}function wa(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Oa="__lodash_hash_undefined__",Ca=Object.prototype,Fa=Ca.hasOwnProperty;function Ia(e){var t=this.__data__;if(pe){var r=t[e];return r===Oa?void 0:r}return Fa.call(t,e)?t[e]:void 0}var Ma=Object.prototype,Na=Ma.hasOwnProperty;function Ra(e){var t=this.__data__;return pe?t[e]!==void 0:Na.call(t,e)}var Pa="__lodash_hash_undefined__";function La(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&t===void 0?Pa:t,this}function Z(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Z.prototype.clear=xa;Z.prototype.delete=wa;Z.prototype.get=Ia;Z.prototype.has=Ra;Z.prototype.set=La;function Da(){this.size=0,this.__data__={hash:new Z,map:new(de||k),string:new Z}}function Va(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Se(e,t){var r=e.__data__;return Va(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ua(e){var t=Se(this,e).delete(e);return this.size-=t?1:0,t}function Ha(e){return Se(this,e).get(e)}function Ga(e){return Se(this,e).has(e)}function Ba(e,t){var r=Se(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Y.prototype.clear=Da;Y.prototype.delete=Ua;Y.prototype.get=Ha;Y.prototype.has=Ga;Y.prototype.set=Ba;var ka=200;function za(e,t){var r=this.__data__;if(r instanceof k){var n=r.__data__;if(!de||n.length<ka-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Y(n)}return r.set(e,t),this.size=r.size,this}function ce(e){var t=this.__data__=new k(e);this.size=t.size}ce.prototype.clear=aa;ce.prototype.delete=ia;ce.prototype.get=oa;ce.prototype.has=ca;ce.prototype.set=za;function Ya(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Ka=function(){try{var e=te(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Pt=Ka;function dr(e,t,r){t=="__proto__"&&Pt?Pt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Wa=Object.prototype,qa=Wa.hasOwnProperty;function pr(e,t,r){var n=e[t];(!(qa.call(e,t)&&lr(n,r))||r===void 0&&!(t in e))&&dr(e,t,r)}function $e(e,t,r,n){var i=!r;r||(r={});for(var o=-1,c=t.length;++o<c;){var h=t[o],y=n?n(r[h],e[h],h,r,e):void 0;y===void 0&&(y=e[h]),i?dr(r,h,y):pr(r,h,y)}return r}function Xa(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Za="[object Arguments]";function Lt(e){return Q(e)&&J(e)==Za}var hr=Object.prototype,Ja=hr.hasOwnProperty,Qa=hr.propertyIsEnumerable,ei=Lt(function(){return arguments}())?Lt:function(e){return Q(e)&&Ja.call(e,"callee")&&!Qa.call(e,"callee")};const ti=ei;var ri=Array.isArray;const me=ri;function ni(){return!1}var mr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Dt=mr&&typeof module=="object"&&module&&!module.nodeType&&module,ai=Dt&&Dt.exports===mr,Vt=ai?G.Buffer:void 0,ii=Vt?Vt.isBuffer:void 0,oi=ii||ni;const yr=oi;var ci=9007199254740991,si=/^(?:0|[1-9]\d*)$/;function ui(e,t){var r=typeof e;return t=t??ci,!!t&&(r=="number"||r!="symbol"&&si.test(e))&&e>-1&&e%1==0&&e<t}var li=9007199254740991;function br(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=li}var fi="[object Arguments]",di="[object Array]",pi="[object Boolean]",hi="[object Date]",mi="[object Error]",yi="[object Function]",bi="[object Map]",gi="[object Number]",vi="[object Object]",_i="[object RegExp]",Ti="[object Set]",Si="[object String]",$i="[object WeakMap]",Ei="[object ArrayBuffer]",ji="[object DataView]",Ai="[object Float32Array]",xi="[object Float64Array]",wi="[object Int8Array]",Oi="[object Int16Array]",Ci="[object Int32Array]",Fi="[object Uint8Array]",Ii="[object Uint8ClampedArray]",Mi="[object Uint16Array]",Ni="[object Uint32Array]",$={};$[Ai]=$[xi]=$[wi]=$[Oi]=$[Ci]=$[Fi]=$[Ii]=$[Mi]=$[Ni]=!0;$[fi]=$[di]=$[Ei]=$[pi]=$[ji]=$[hi]=$[mi]=$[yi]=$[bi]=$[gi]=$[vi]=$[_i]=$[Ti]=$[Si]=$[$i]=!1;function Ri(e){return Q(e)&&br(e.length)&&!!$[J(e)]}function nt(e){return function(t){return e(t)}}var gr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=gr&&typeof module=="object"&&module&&!module.nodeType&&module,Pi=le&&le.exports===gr,Ye=Pi&&or.process,Li=function(){try{var e=le&&le.require&&le.require("util").types;return e||Ye&&Ye.binding&&Ye.binding("util")}catch{}}();const oe=Li;var Ut=oe&&oe.isTypedArray,Di=Ut?nt(Ut):Ri;const Vi=Di;var Ui=Object.prototype,Hi=Ui.hasOwnProperty;function vr(e,t){var r=me(e),n=!r&&ti(e),i=!r&&!n&&yr(e),o=!r&&!n&&!i&&Vi(e),c=r||n||i||o,h=c?Xa(e.length,String):[],y=h.length;for(var v in e)(t||Hi.call(e,v))&&!(c&&(v=="length"||i&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||ui(v,y)))&&h.push(v);return h}var Gi=Object.prototype;function at(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Gi;return e===r}var Bi=sr(Object.keys,Object);const ki=Bi;var zi=Object.prototype,Yi=zi.hasOwnProperty;function Ki(e){if(!at(e))return ki(e);var t=[];for(var r in Object(e))Yi.call(e,r)&&r!="constructor"&&t.push(r);return t}function _r(e){return e!=null&&br(e.length)&&!fr(e)}function it(e){return _r(e)?vr(e):Ki(e)}function Wi(e,t){return e&&$e(t,it(t),e)}function qi(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Xi=Object.prototype,Zi=Xi.hasOwnProperty;function Ji(e){if(!he(e))return qi(e);var t=at(e),r=[];for(var n in e)n=="constructor"&&(t||!Zi.call(e,n))||r.push(n);return r}function ot(e){return _r(e)?vr(e,!0):Ji(e)}function Qi(e,t){return e&&$e(t,ot(t),e)}var Tr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ht=Tr&&typeof module=="object"&&module&&!module.nodeType&&module,eo=Ht&&Ht.exports===Tr,Gt=eo?G.Buffer:void 0,Bt=Gt?Gt.allocUnsafe:void 0;function to(e,t){if(t)return e.slice();var r=e.length,n=Bt?Bt(r):new e.constructor(r);return e.copy(n),n}function Sr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function ro(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var c=e[r];t(c,r,e)&&(o[i++]=c)}return o}function $r(){return[]}var no=Object.prototype,ao=no.propertyIsEnumerable,kt=Object.getOwnPropertySymbols,io=kt?function(e){return e==null?[]:(e=Object(e),ro(kt(e),function(t){return ao.call(e,t)}))}:$r;const ct=io;function oo(e,t){return $e(e,ct(e),t)}function Er(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var co=Object.getOwnPropertySymbols,so=co?function(e){for(var t=[];e;)Er(t,ct(e)),e=rt(e);return t}:$r;const jr=so;function uo(e,t){return $e(e,jr(e),t)}function Ar(e,t,r){var n=t(e);return me(e)?n:Er(n,r(e))}function lo(e){return Ar(e,it,ct)}function fo(e){return Ar(e,ot,jr)}var po=te(G,"DataView");const Ze=po;var ho=te(G,"Promise");const Je=ho;var mo=te(G,"Set");const Qe=mo;var yo=te(G,"WeakMap");const et=yo;var zt="[object Map]",bo="[object Object]",Yt="[object Promise]",Kt="[object Set]",Wt="[object WeakMap]",qt="[object DataView]",go=ee(Ze),vo=ee(de),_o=ee(Je),To=ee(Qe),So=ee(et),q=J;(Ze&&q(new Ze(new ArrayBuffer(1)))!=qt||de&&q(new de)!=zt||Je&&q(Je.resolve())!=Yt||Qe&&q(new Qe)!=Kt||et&&q(new et)!=Wt)&&(q=function(e){var t=J(e),r=t==bo?e.constructor:void 0,n=r?ee(r):"";if(n)switch(n){case go:return qt;case vo:return zt;case _o:return Yt;case To:return Kt;case So:return Wt}return t});const st=q;var $o=Object.prototype,Eo=$o.hasOwnProperty;function jo(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Eo.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ao=G.Uint8Array;const Xt=Ao;function ut(e){var t=new e.constructor(e.byteLength);return new Xt(t).set(new Xt(e)),t}function xo(e,t){var r=t?ut(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var wo=/\w*$/;function Oo(e){var t=new e.constructor(e.source,wo.exec(e));return t.lastIndex=e.lastIndex,t}var Zt=z?z.prototype:void 0,Jt=Zt?Zt.valueOf:void 0;function Co(e){return Jt?Object(Jt.call(e)):{}}function Fo(e,t){var r=t?ut(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Io="[object Boolean]",Mo="[object Date]",No="[object Map]",Ro="[object Number]",Po="[object RegExp]",Lo="[object Set]",Do="[object String]",Vo="[object Symbol]",Uo="[object ArrayBuffer]",Ho="[object DataView]",Go="[object Float32Array]",Bo="[object Float64Array]",ko="[object Int8Array]",zo="[object Int16Array]",Yo="[object Int32Array]",Ko="[object Uint8Array]",Wo="[object Uint8ClampedArray]",qo="[object Uint16Array]",Xo="[object Uint32Array]";function Zo(e,t,r){var n=e.constructor;switch(t){case Uo:return ut(e);case Io:case Mo:return new n(+e);case Ho:return xo(e,r);case Go:case Bo:case ko:case zo:case Yo:case Ko:case Wo:case qo:case Xo:return Fo(e,r);case No:return new n;case Ro:case Do:return new n(e);case Po:return Oo(e);case Lo:return new n;case Vo:return Co(e)}}var Qt=Object.create,Jo=function(){function e(){}return function(t){if(!he(t))return{};if(Qt)return Qt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Qo=Jo;function ec(e){return typeof e.constructor=="function"&&!at(e)?Qo(rt(e)):{}}var tc="[object Map]";function rc(e){return Q(e)&&st(e)==tc}var er=oe&&oe.isMap,nc=er?nt(er):rc;const ac=nc;var ic="[object Set]";function oc(e){return Q(e)&&st(e)==ic}var tr=oe&&oe.isSet,cc=tr?nt(tr):oc;const sc=cc;var uc=1,lc=2,fc=4,xr="[object Arguments]",dc="[object Array]",pc="[object Boolean]",hc="[object Date]",mc="[object Error]",wr="[object Function]",yc="[object GeneratorFunction]",bc="[object Map]",gc="[object Number]",Or="[object Object]",vc="[object RegExp]",_c="[object Set]",Tc="[object String]",Sc="[object Symbol]",$c="[object WeakMap]",Ec="[object ArrayBuffer]",jc="[object DataView]",Ac="[object Float32Array]",xc="[object Float64Array]",wc="[object Int8Array]",Oc="[object Int16Array]",Cc="[object Int32Array]",Fc="[object Uint8Array]",Ic="[object Uint8ClampedArray]",Mc="[object Uint16Array]",Nc="[object Uint32Array]",S={};S[xr]=S[dc]=S[Ec]=S[jc]=S[pc]=S[hc]=S[Ac]=S[xc]=S[wc]=S[Oc]=S[Cc]=S[bc]=S[gc]=S[Or]=S[vc]=S[_c]=S[Tc]=S[Sc]=S[Fc]=S[Ic]=S[Mc]=S[Nc]=!0;S[mc]=S[wr]=S[$c]=!1;function ve(e,t,r,n,i,o){var c,h=t&uc,y=t&lc,v=t&fc;if(r&&(c=i?r(e,n,i,o):r(e)),c!==void 0)return c;if(!he(e))return e;var I=me(e);if(I){if(c=jo(e),!h)return Sr(e,c)}else{var M=st(e),d=M==wr||M==yc;if(yr(e))return to(e,h);if(M==Or||M==xr||d&&!i){if(c=y||d?{}:ec(e),!h)return y?uo(e,Qi(c,e)):oo(e,Wi(c,e))}else{if(!S[M])return i?e:{};c=Zo(e,M,h)}}o||(o=new ce);var x=o.get(e);if(x)return x;o.set(e,c),sc(e)?e.forEach(function(F){c.add(ve(F,t,r,F,e,o))}):ac(e)&&e.forEach(function(F,A){c.set(A,ve(F,t,r,A,e,o))});var D=v?y?fo:lo:y?ot:it,N=I?void 0:D(e);return Ya(N||e,function(F,A){N&&(A=F,F=e[A]),pr(c,A,ve(F,t,r,A,e,o))}),c}var Rc=4;function rr(e){return ve(e,Rc)}function Cr(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Pc="[object Symbol]";function lt(e){return typeof e=="symbol"||Q(e)&&J(e)==Pc}var Lc="Expected a function";function ft(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Lc);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return r.cache=o.set(i,c)||o,c};return r.cache=new(ft.Cache||Y),r}ft.Cache=Y;var Dc=500;function Vc(e){var t=ft(e,function(n){return r.size===Dc&&r.clear(),n}),r=t.cache;return t}var Uc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hc=/\\(\\)?/g,Gc=Vc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Uc,function(r,n,i,o){t.push(i?o.replace(Hc,"$1"):n||r)}),t});const Bc=Gc;var kc=1/0;function zc(e){if(typeof e=="string"||lt(e))return e;var t=e+"";return t=="0"&&1/e==-kc?"-0":t}var Yc=1/0,nr=z?z.prototype:void 0,ar=nr?nr.toString:void 0;function Fr(e){if(typeof e=="string")return e;if(me(e))return Cr(e,Fr)+"";if(lt(e))return ar?ar.call(e):"";var t=e+"";return t=="0"&&1/e==-Yc?"-0":t}function Kc(e){return e==null?"":Fr(e)}function Ir(e){return me(e)?Cr(e,zc):lt(e)?[e]:Sr(Bc(Kc(e)))}var Mr={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=typeof Symbol=="function"&&Symbol.for,dt=C?Symbol.for("react.element"):60103,pt=C?Symbol.for("react.portal"):60106,Ee=C?Symbol.for("react.fragment"):60107,je=C?Symbol.for("react.strict_mode"):60108,Ae=C?Symbol.for("react.profiler"):60114,xe=C?Symbol.for("react.provider"):60109,we=C?Symbol.for("react.context"):60110,ht=C?Symbol.for("react.async_mode"):60111,Oe=C?Symbol.for("react.concurrent_mode"):60111,Ce=C?Symbol.for("react.forward_ref"):60112,Fe=C?Symbol.for("react.suspense"):60113,Wc=C?Symbol.for("react.suspense_list"):60120,Ie=C?Symbol.for("react.memo"):60115,Me=C?Symbol.for("react.lazy"):60116,qc=C?Symbol.for("react.block"):60121,Xc=C?Symbol.for("react.fundamental"):60117,Zc=C?Symbol.for("react.responder"):60118,Jc=C?Symbol.for("react.scope"):60119;function L(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dt:switch(e=e.type,e){case ht:case Oe:case Ee:case Ae:case je:case Fe:return e;default:switch(e=e&&e.$$typeof,e){case we:case Ce:case Me:case Ie:case xe:return e;default:return t}}case pt:return t}}}function Nr(e){return L(e)===Oe}g.AsyncMode=ht;g.ConcurrentMode=Oe;g.ContextConsumer=we;g.ContextProvider=xe;g.Element=dt;g.ForwardRef=Ce;g.Fragment=Ee;g.Lazy=Me;g.Memo=Ie;g.Portal=pt;g.Profiler=Ae;g.StrictMode=je;g.Suspense=Fe;g.isAsyncMode=function(e){return Nr(e)||L(e)===ht};g.isConcurrentMode=Nr;g.isContextConsumer=function(e){return L(e)===we};g.isContextProvider=function(e){return L(e)===xe};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dt};g.isForwardRef=function(e){return L(e)===Ce};g.isFragment=function(e){return L(e)===Ee};g.isLazy=function(e){return L(e)===Me};g.isMemo=function(e){return L(e)===Ie};g.isPortal=function(e){return L(e)===pt};g.isProfiler=function(e){return L(e)===Ae};g.isStrictMode=function(e){return L(e)===je};g.isSuspense=function(e){return L(e)===Fe};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ee||e===Oe||e===Ae||e===je||e===Fe||e===Wc||typeof e=="object"&&e!==null&&(e.$$typeof===Me||e.$$typeof===Ie||e.$$typeof===xe||e.$$typeof===we||e.$$typeof===Ce||e.$$typeof===Xc||e.$$typeof===Zc||e.$$typeof===Jc||e.$$typeof===qc)};g.typeOf=L;Mr.exports=g;var Qc=Mr.exports,Rr=Qc,es={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ts={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr={};Pr[Rr.ForwardRef]=es;Pr[Rr.Memo]=ts;function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function ae(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var Ne=l.createContext(void 0);Ne.displayName="FormikContext";var rs=Ne.Provider;Ne.Consumer;function Lr(){var e=l.useContext(Ne);return e||Xn(!1),e}var P=function(t){return typeof t=="function"},Re=function(t){return t!==null&&typeof t=="object"},ns=function(t){return String(Math.floor(Number(t)))===t},Ke=function(t){return Object.prototype.toString.call(t)==="[object String]"},as=function(t){return l.Children.count(t)===0},We=function(t){return Re(t)&&P(t.then)};function R(e,t,r,n){n===void 0&&(n=0);for(var i=Ir(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function X(e,t,r){for(var n=rr(e),i=n,o=0,c=Ir(t);o<c.length-1;o++){var h=c[o],y=R(e,c.slice(0,o+1));if(y&&(Re(y)||Array.isArray(y)))i=i[h]=rr(y);else{var v=c[o+1];i=i[h]=ns(v)&&Number(v)>=0?[]:{}}}return(o===0?e:i)[c[o]]===r?e:(r===void 0?delete i[c[o]]:i[c[o]]=r,o===0&&r===void 0&&delete n[c[o]],n)}function Dr(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],h=e[c];Re(h)?r.get(h)||(r.set(h,!0),n[c]=Array.isArray(h)?[]:{},Dr(h,t,r,n[c])):n[c]=t}return n}function is(e,t){switch(t.type){case"SET_VALUES":return E({},e,{values:t.payload});case"SET_TOUCHED":return E({},e,{touched:t.payload});case"SET_ERRORS":return W(e.errors,t.payload)?e:E({},e,{errors:t.payload});case"SET_STATUS":return E({},e,{status:t.payload});case"SET_ISSUBMITTING":return E({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return E({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return E({},e,{values:X(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return E({},e,{touched:X(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return E({},e,{errors:X(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return E({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return E({},e,{touched:Dr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return E({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return E({},e,{isSubmitting:!1});default:return e}}var K={},ge={};function os(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,h=e.isInitialValid,y=e.enableReinitialize,v=y===void 0?!1:y,I=e.onSubmit,M=ae(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=E({validateOnChange:r,validateOnBlur:i,validateOnMount:c,onSubmit:I},M),x=l.useRef(d.initialValues),D=l.useRef(d.initialErrors||K),N=l.useRef(d.initialTouched||ge),F=l.useRef(d.initialStatus),A=l.useRef(!1),V=l.useRef({});l.useEffect(function(){return A.current=!0,function(){A.current=!1}},[]);var Pe=l.useState(0),Le=Pe[1],ye=l.useRef({values:d.initialValues,errors:d.initialErrors||K,touched:d.initialTouched||ge,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=ye.current,_=l.useCallback(function(a){var s=ye.current;ye.current=is(s,a),s!==ye.current&&Le(function(u){return u+1})},[]),yt=l.useCallback(function(a,s){return new Promise(function(u,p){var m=d.validate(a,s);m==null?u(K):We(m)?m.then(function(b){u(b||K)},function(b){p(b)}):u(m)})},[d.validate]),De=l.useCallback(function(a,s){var u=d.validationSchema,p=P(u)?u(s):u,m=s&&p.validateAt?p.validateAt(s,a):ss(a,p);return new Promise(function(b,w){m.then(function(){b(K)},function(B){B.name==="ValidationError"?b(cs(B)):w(B)})})},[d.validationSchema]),bt=l.useCallback(function(a,s){return new Promise(function(u){return u(V.current[a].validate(s))})},[]),gt=l.useCallback(function(a){var s=Object.keys(V.current).filter(function(p){return P(V.current[p].validate)}),u=s.length>0?s.map(function(p){return bt(p,R(a,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(p){return p.reduce(function(m,b,w){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(m=X(m,s[w],b)),m},{})})},[bt]),Ur=l.useCallback(function(a){return Promise.all([gt(a),d.validationSchema?De(a):{},d.validate?yt(a):{}]).then(function(s){var u=s[0],p=s[1],m=s[2],b=qe.all([u,p,m],{arrayMerge:us});return b})},[d.validate,d.validationSchema,gt,yt,De]),H=U(function(a){return a===void 0&&(a=T.values),_({type:"SET_ISVALIDATING",payload:!0}),Ur(a).then(function(s){return A.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:s})),s})});l.useEffect(function(){c&&A.current===!0&&W(x.current,d.initialValues)&&H(x.current)},[c,H]);var se=l.useCallback(function(a){var s=a&&a.values?a.values:x.current,u=a&&a.errors?a.errors:D.current?D.current:d.initialErrors||{},p=a&&a.touched?a.touched:N.current?N.current:d.initialTouched||{},m=a&&a.status?a.status:F.current?F.current:d.initialStatus;x.current=s,D.current=u,N.current=p,F.current=m;var b=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:u,touched:p,status:m,values:s,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(d.onReset){var w=d.onReset(T.values,wt);We(w)?w.then(b):b()}else b()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);l.useEffect(function(){A.current===!0&&!W(x.current,d.initialValues)&&v&&(x.current=d.initialValues,se(),c&&H(x.current))},[v,d.initialValues,se,c,H]),l.useEffect(function(){v&&A.current===!0&&!W(D.current,d.initialErrors)&&(D.current=d.initialErrors||K,_({type:"SET_ERRORS",payload:d.initialErrors||K}))},[v,d.initialErrors]),l.useEffect(function(){v&&A.current===!0&&!W(N.current,d.initialTouched)&&(N.current=d.initialTouched||ge,_({type:"SET_TOUCHED",payload:d.initialTouched||ge}))},[v,d.initialTouched]),l.useEffect(function(){v&&A.current===!0&&!W(F.current,d.initialStatus)&&(F.current=d.initialStatus,_({type:"SET_STATUS",payload:d.initialStatus}))},[v,d.initialStatus,d.initialTouched]);var vt=U(function(a){if(V.current[a]&&P(V.current[a].validate)){var s=R(T.values,a),u=V.current[a].validate(s);return We(u)?(_({type:"SET_ISVALIDATING",payload:!0}),u.then(function(p){return p}).then(function(p){_({type:"SET_FIELD_ERROR",payload:{field:a,value:p}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:a,value:u}}),Promise.resolve(u))}else if(d.validationSchema)return _({type:"SET_ISVALIDATING",payload:!0}),De(T.values,a).then(function(p){return p}).then(function(p){_({type:"SET_FIELD_ERROR",payload:{field:a,value:R(p,a)}}),_({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Hr=l.useCallback(function(a,s){var u=s.validate;V.current[a]={validate:u}},[]),Gr=l.useCallback(function(a){delete V.current[a]},[]),_t=U(function(a,s){_({type:"SET_TOUCHED",payload:a});var u=s===void 0?i:s;return u?H(T.values):Promise.resolve()}),Tt=l.useCallback(function(a){_({type:"SET_ERRORS",payload:a})},[]),St=U(function(a,s){var u=P(a)?a(T.values):a;_({type:"SET_VALUES",payload:u});var p=s===void 0?r:s;return p?H(u):Promise.resolve()}),be=l.useCallback(function(a,s){_({type:"SET_FIELD_ERROR",payload:{field:a,value:s}})},[]),re=U(function(a,s,u){_({type:"SET_FIELD_VALUE",payload:{field:a,value:s}});var p=u===void 0?r:u;return p?H(X(T.values,a,s)):Promise.resolve()}),$t=l.useCallback(function(a,s){var u=s,p=a,m;if(!Ke(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,w=b.type,B=b.name,Be=b.id,ke=b.value,Zr=b.checked,Vs=b.outerHTML,Ot=b.options,Jr=b.multiple;u=s||B||Be,p=/number|range/.test(w)?(m=parseFloat(ke),isNaN(m)?"":m):/checkbox/.test(w)?fs(R(T.values,u),Zr,ke):Ot&&Jr?ls(Ot):ke}u&&re(u,p)},[re,T.values]),Ve=U(function(a){if(Ke(a))return function(s){return $t(s,a)};$t(a)}),ne=U(function(a,s,u){s===void 0&&(s=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:a,value:s}});var p=u===void 0?i:u;return p?H(T.values):Promise.resolve()}),Et=l.useCallback(function(a,s){a.persist&&a.persist();var u=a.target,p=u.name,m=u.id,b=u.outerHTML,w=s||p||m;ne(w,!0)},[ne]),Ue=U(function(a){if(Ke(a))return function(s){return Et(s,a)};Et(a)}),jt=l.useCallback(function(a){P(a)?_({type:"SET_FORMIK_STATE",payload:a}):_({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),At=l.useCallback(function(a){_({type:"SET_STATUS",payload:a})},[]),xt=l.useCallback(function(a){_({type:"SET_ISSUBMITTING",payload:a})},[]),He=U(function(){return _({type:"SUBMIT_ATTEMPT"}),H().then(function(a){var s=a instanceof Error,u=!s&&Object.keys(a).length===0;if(u){var p;try{if(p=kr(),p===void 0)return}catch(m){throw m}return Promise.resolve(p).then(function(m){return A.current&&_({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(A.current)throw _({type:"SUBMIT_FAILURE"}),m})}else if(A.current&&(_({type:"SUBMIT_FAILURE"}),s))throw a})}),Br=U(function(a){a&&a.preventDefault&&P(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&P(a.stopPropagation)&&a.stopPropagation(),He().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),wt={resetForm:se,validateForm:H,validateField:vt,setErrors:Tt,setFieldError:be,setFieldTouched:ne,setFieldValue:re,setStatus:At,setSubmitting:xt,setTouched:_t,setValues:St,setFormikState:jt,submitForm:He},kr=U(function(){return I(T.values,wt)}),zr=U(function(a){a&&a.preventDefault&&P(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&P(a.stopPropagation)&&a.stopPropagation(),se()}),Yr=l.useCallback(function(a){return{value:R(T.values,a),error:R(T.errors,a),touched:!!R(T.touched,a),initialValue:R(x.current,a),initialTouched:!!R(N.current,a),initialError:R(D.current,a)}},[T.errors,T.touched,T.values]),Kr=l.useCallback(function(a){return{setValue:function(u,p){return re(a,u,p)},setTouched:function(u,p){return ne(a,u,p)},setError:function(u){return be(a,u)}}},[re,ne,be]),Wr=l.useCallback(function(a){var s=Re(a),u=s?a.name:a,p=R(T.values,u),m={name:u,value:p,onChange:Ve,onBlur:Ue};if(s){var b=a.type,w=a.value,B=a.as,Be=a.multiple;b==="checkbox"?w===void 0?m.checked=!!p:(m.checked=!!(Array.isArray(p)&&~p.indexOf(w)),m.value=w):b==="radio"?(m.checked=p===w,m.value=w):B==="select"&&Be&&(m.value=m.value||[],m.multiple=!0)}return m},[Ue,Ve,T.values]),Ge=l.useMemo(function(){return!W(x.current,T.values)},[x.current,T.values]),qr=l.useMemo(function(){return typeof h<"u"?Ge?T.errors&&Object.keys(T.errors).length===0:h!==!1&&P(h)?h(d):h:T.errors&&Object.keys(T.errors).length===0},[h,Ge,T.errors,d]),Xr=E({},T,{initialValues:x.current,initialErrors:D.current,initialTouched:N.current,initialStatus:F.current,handleBlur:Ue,handleChange:Ve,handleReset:zr,handleSubmit:Br,resetForm:se,setErrors:Tt,setFormikState:jt,setFieldTouched:ne,setFieldValue:re,setFieldError:be,setStatus:At,setSubmitting:xt,setTouched:_t,setValues:St,submitForm:He,validateForm:H,validateField:vt,isValid:qr,dirty:Ge,unregisterField:Gr,registerField:Hr,getFieldProps:Wr,getFieldMeta:Yr,getFieldHelpers:Kr,validateOnBlur:i,validateOnChange:r,validateOnMount:c});return Xr}function Vr(e){var t=os(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return t}),l.createElement(rs,{value:t},r?l.createElement(r,t):i?i(t):n?P(n)?n(t):as(n)?null:l.Children.only(n):null)}function cs(e){var t={};if(e.inner){if(e.inner.length===0)return X(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;R(t,c.path)||(t=X(t,c.path,c.message))}}return t}function ss(e,t,r,n){r===void 0&&(r=!1);var i=tt(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function tt(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||It(i)?tt(i):i!==""?i:void 0}):It(e[n])?t[n]=tt(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function us(e,t,r){var n=e.slice();return t.forEach(function(o,c){if(typeof n[c]>"u"){var h=r.clone!==!1,y=h&&r.isMergeableObject(o);n[c]=y?qe(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[c]=qe(e[c],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function ls(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function fs(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var ds=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function U(e){var t=l.useRef(e);return ds(function(){t.current=e}),l.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function ie(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,c=e.component,h=e.className,y=ae(e,["validate","name","render","children","as","component","className"]),v=Lr(),I=ae(v,["validate","validationSchema"]),M=I.registerField,d=I.unregisterField;l.useEffect(function(){return M(r,{validate:t}),function(){d(r)}},[M,d,r,t]);var x=I.getFieldProps(E({name:r},y)),D=I.getFieldMeta(r),N={field:x,form:I};if(n)return n(E({},N,{meta:D}));if(P(i))return i(E({},N,{meta:D}));if(c){if(typeof c=="string"){var F=y.innerRef,A=ae(y,["innerRef"]);return l.createElement(c,E({ref:F},x,A,{className:h}),i)}return l.createElement(c,E({field:x,form:I},y,{className:h}),i)}var V=o||"input";if(typeof V=="string"){var Pe=y.innerRef,Le=ae(y,["innerRef"]);return l.createElement(V,E({ref:Pe},x,Le,{className:h}),i)}return l.createElement(V,E({},x,y,{className:h}),i)}var mt=l.forwardRef(function(e,t){var r=e.action,n=ae(e,["action"]),i=r??"#",o=Lr(),c=o.handleReset,h=o.handleSubmit;return l.createElement("form",E({onSubmit:h,ref:t,onReset:c,action:i},n))});mt.displayName="Form";const ps=()=>{const e=(t,r)=>{};return f.jsxs("div",{className:O.container_your_goal,children:[f.jsx("div",{className:O.container_picture,children:f.jsxs("picture",{className:O.picture,children:[f.jsx("source",{media:"(min-width: 1440px)",srcSet:`${en} 1x, ${tn} 2x`,width:592,height:574}),f.jsx("source",{media:"(min-width: 833px)",srcSet:`${rn} 1x, ${nn} 2x`,width:380,height:368}),f.jsx("img",{srcSet:`${Ct} 1x, ${an} 2x`,width:300,height:290,src:Ct,alt:"Your Goals"})]})}),f.jsxs("div",{className:O.container_form,children:[f.jsx("h1",{className:O.title,children:"Your goal"}),f.jsx(Vr,{onSubmit:e,children:f.jsxs(mt,{className:O.form_checked,children:[f.jsx("p",{className:O.text,children:"Choose a goal so that we can help you effectively"}),f.jsxs("div",{className:O.container_label_list,children:[f.jsx("div",{className:O.container_label,children:f.jsxs("label",{className:O.list,children:[f.jsx(ie,{className:O.item,type:"radio",name:"check",value:"Lose Fat ",onChange:()=>{}}),"Lose Fat"]})}),f.jsx("div",{className:O.container_label_ctnter,children:f.jsxs("label",{className:O.list,children:[f.jsx(ie,{className:O.item,type:"radio",name:"check",value:"Maintain ",onChange:()=>{}}),"Maintain"]})}),f.jsx("div",{className:O.container_label_end,children:f.jsxs("label",{className:O.list,children:[f.jsx(ie,{className:O.item,type:"radio",name:"check",value:"Gail ",onChange:()=>{}}),"Gail Muscle"]})})]}),f.jsx("button",{type:"submit",className:O.btn,children:"Next"})]})})]})]})},hs="/HealthyHub/assets/SelectGender-disct-5141ea05.png",ms="/HealthyHub/assets/SelectGender-diskt@2x-f6502d81.png",ys="/HealthyHub/assets/SelectGender-tab-8f058e9b.png",bs="/HealthyHub/assets/SelectGender-tab@2x-43a3b51c.png",ir="/HealthyHub/assets/SelectGender-mob-960cbdce.png",gs="/HealthyHub/assets/SelectGender-mob@2x-ec9ad435.png",vs="_container_your_goal_omc50_6",_s="_container_picture_omc50_31",Ts="_container_form_omc50_52",Ss="_title_omc50_67",$s="_form_checked_omc50_81",Es="_text_omc50_84",js="_desc_omc50_99",As="_container_label_list_omc50_114",xs="_container_label_item_omc50_126",ws="_container_label_omc50_114",Os="_container_label_center_omc50_147",Cs="_container_label_end_omc50_162",Fs="_list_omc50_176",Is="_item_omc50_182",Ms="_your_age_omc50_187",Ns="_item_input_omc50_199",Rs="_btn_omc50_222",Ps="_btn_back_omc50_252",j={container_your_goal:vs,container_picture:_s,container_form:Ts,title:Ss,form_checked:$s,text:Es,desc:js,container_label_list:As,container_label_item:xs,container_label:ws,container_label_center:Os,container_label_end:Cs,list:Fs,item:Is,your_age:Ms,item_input:Ns,btn:Rs,btn_back:Ps},Ls=()=>{const e=(t,r)=>{};return f.jsxs("div",{className:j.container_your_goal,children:[f.jsx("div",{className:j.container_picture,children:f.jsxs("picture",{className:j.picture,children:[f.jsx("source",{media:"(min-width: 1440px)",srcSet:`${hs} 1x, ${ms} 2x`,width:592,height:570}),f.jsx("source",{media:"(min-width: 833px)",srcSet:`${ys} 1x, ${bs} 2x`,width:380,height:366}),f.jsx("img",{srcSet:`${ir} 1x, ${gs} 2x`,width:300,height:288,src:ir,alt:"Select Gender"})]})}),f.jsxs("div",{className:j.container_form,children:[f.jsx("h1",{className:j.title,children:"Select gender, Age"}),f.jsx(Vr,{onSubmit:e,children:f.jsxs(mt,{className:j.form_checked,children:[f.jsx("p",{className:j.text,children:"Choose a goal so that we can help you effectively"}),f.jsx("p",{className:j.desc,children:"Gender"}),f.jsxs("div",{className:j.container_label_list,children:[f.jsxs("div",{className:j.container_label_item,children:[f.jsx("div",{className:j.container_label,children:f.jsxs("label",{className:j.list,children:[f.jsx(ie,{className:j.item,type:"radio",name:"check",value:"Male",onChange:()=>{}}),"Male"]})}),f.jsx("div",{className:j.container_label_center,children:f.jsxs("label",{className:j.list,children:[f.jsx(ie,{className:j.item,type:"radio",name:"check",value:"Female",onChange:()=>{}}),"Female"]})})]}),f.jsxs("div",{className:j.container_label_end,children:[f.jsx("p",{className:j.your_age,children:" Your age"}),f.jsx("label",{className:j,children:f.jsx(ie,{className:j.item_input,name:"check",value:"Enter your age",onChange:()=>{}})})]})]}),f.jsx("button",{type:"submit",className:j.btn,children:"Next"}),f.jsx("button",{type:"submit",className:j.btn_back,children:"Back"})]})})]})]})},Ds=()=>f.jsxs(f.Fragment,{children:[f.jsx(ps,{}),f.jsx(Ls,{}),"this is signup page"]}),Hs=Ds;export{Hs as default};