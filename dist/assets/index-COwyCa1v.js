(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Br=[],Qt=()=>{},Zm=()=>!1,No=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$c=t=>t.startsWith("onUpdate:"),We=Object.assign,jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e_=Object.prototype.hasOwnProperty,Ae=(t,e)=>e_.call(t,e),ie=Array.isArray,$r=t=>Vo(t)==="[object Map]",td=t=>Vo(t)==="[object Set]",ue=t=>typeof t=="function",$e=t=>typeof t=="string",Xn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",nd=t=>(Oe(t)||ue(t))&&ue(t.then)&&ue(t.catch),rd=Object.prototype.toString,Vo=t=>rd.call(t),t_=t=>Vo(t).slice(8,-1),sd=t=>Vo(t)==="[object Object]",Hc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},n_=/-(\w)/g,Hn=xo(t=>t.replace(n_,(e,n)=>n?n.toUpperCase():"")),r_=/\B([A-Z])/g,wr=xo(t=>t.replace(r_,"-$1").toLowerCase()),id=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=xo(t=>t?`on${id(t)}`:""),Ln=(t,e)=>!Object.is(t,e),Gi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},od=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},s_=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Du;const Mo=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?c_(r):qc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Oe(t))return t}const i_=/;(?![^(]*\))/g,o_=/:([^]+)/,a_=/\/\*[^]*?\*\//g;function c_(t){const e={};return t.replace(a_,"").split(i_).forEach(n=>{if(n){const r=n.split(o_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zc(t){let e="";if($e(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=zc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u_=Bc(l_);function ad(t){return!!t||t===""}const cd=t=>!!(t&&t.__v_isRef===!0),co=t=>$e(t)?t:t==null?"":ie(t)||Oe(t)&&(t.toString===rd||!ue(t.toString))?cd(t)?co(t.value):JSON.stringify(t,ld,2):String(t),ld=(t,e)=>cd(e)?ld(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ia(r,i)+" =>"]=s,n),{})}:td(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ia(n))}:Xn(e)?Ia(e):Oe(e)&&!ie(e)&&!sd(e)?String(e):e,Ia=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class h_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function f_(){return bt}let ke;const ba=new WeakSet;class ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),dd(this);const e=ke,n=Ut;ke=this,Ut=!0;try{return this.fn()}finally{pd(this),ke=e,Ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wc(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ya(this)&&this.run()}get dirty(){return Ya(this)}}let hd=0,Ms,Ls;function fd(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Ms,Ms=t}function Kc(){hd++}function Gc(){if(--hd>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function dd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Wc(r),d_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ya(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ws))return;t.globalVersion=Ws;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ya(t)){t.flags&=-3;return}const n=ke,r=Ut;ke=t,Ut=!0;try{dd(t);const s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Ut=r,pd(t),t.flags&=-3}}function Wc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Wc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function d_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ut=!0;const md=[];function Yn(){md.push(Ut),Ut=!1}function Zn(){const t=md.pop();Ut=t===void 0?!0:t}function Ou(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ws=0;class p_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!Ut||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new p_(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,_d(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ws++,this.notify(e)}notify(e){Kc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gc()}}}function _d(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_d(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Za=new WeakMap,dr=Symbol(""),ec=Symbol(""),Qs=Symbol("");function ot(t,e,n){if(Ut&&ke){let r=Za.get(t);r||Za.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Qc),s.map=r,s.key=n),s.track()}}function cn(t,e,n,r,s,i){const a=Za.get(t);if(!a){Ws++;return}const c=l=>{l&&l.trigger()};if(Kc(),e==="clear")a.forEach(c);else{const l=ie(t),h=l&&Hc(n);if(l&&n==="length"){const f=Number(r);a.forEach((p,m)=>{(m==="length"||m===Qs||!Xn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(Qs)),e){case"add":l?h&&c(a.get("length")):(c(a.get(dr)),$r(t)&&c(a.get(ec)));break;case"delete":l||(c(a.get(dr)),$r(t)&&c(a.get(ec)));break;case"set":$r(t)&&c(a.get(dr));break}}Gc()}function Pr(t){const e=Ie(t);return e===t?e:(ot(e,"iterate",Qs),Ot(t)?e:e.map(at))}function Lo(t){return ot(t=Ie(t),"iterate",Qs),t}const g_={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,at)},concat(...t){return Pr(this).concat(...t.map(e=>ie(e)?Pr(e):e))},entries(){return Aa(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return rn(this,"every",t,e,void 0,arguments)},filter(t,e){return rn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return rn(this,"find",t,e,at,arguments)},findIndex(t,e){return rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ra(this,"includes",t)},indexOf(...t){return Ra(this,"indexOf",t)},join(t){return Pr(this).join(t)},lastIndexOf(...t){return Ra(this,"lastIndexOf",t)},map(t,e){return rn(this,"map",t,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...t){return Cs(this,"push",t)},reduce(t,...e){return Nu(this,"reduce",t,e)},reduceRight(t,...e){return Nu(this,"reduceRight",t,e)},shift(){return Cs(this,"shift")},some(t,e){return rn(this,"some",t,e,void 0,arguments)},splice(...t){return Cs(this,"splice",t)},toReversed(){return Pr(this).toReversed()},toSorted(t){return Pr(this).toSorted(t)},toSpliced(...t){return Pr(this).toSpliced(...t)},unshift(...t){return Cs(this,"unshift",t)},values(){return Aa(this,"values",at)}};function Aa(t,e,n){const r=Lo(t),s=r[e]();return r!==t&&!Ot(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const m_=Array.prototype;function rn(t,e,n,r,s,i){const a=Lo(t),c=a!==t&&!Ot(t),l=a[e];if(l!==m_[e]){const p=l.apply(t,i);return c?at(p):p}let h=n;a!==t&&(c?h=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Nu(t,e,n,r){const s=Lo(t);let i=n;return s!==t&&(Ot(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,at(c),l,t)}),s[e](i,...r)}function Ra(t,e,n){const r=Ie(t);ot(r,"iterate",Qs);const s=r[e](...n);return(s===-1||s===!1)&&Yc(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Cs(t,e,n=[]){Yn(),Kc();const r=Ie(t)[e].apply(t,n);return Gc(),Zn(),r}const __=Bc("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function y_(t){Xn(t)||(t=String(t));const e=Ie(this);return ot(e,"has",t),e.hasOwnProperty(t)}class vd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?C_:Id:i?wd:Td).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let l;if(a&&(l=g_[n]))return l;if(n==="hasOwnProperty")return y_}const c=Reflect.get(e,n,ut(e)?e:r);return(Xn(n)?yd.has(n):__(n))||(s||ot(e,"get",n),i)?c:ut(c)?a&&Hc(n)?c:c.value:Oe(c)?s?Ad(c):Fo(c):c}}class Ed extends vd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=_r(i);if(!Ot(r)&&!_r(r)&&(i=Ie(i),r=Ie(r)),!ie(e)&&ut(i)&&!ut(r))return l?!1:(i.value=r,!0)}const a=ie(e)&&Hc(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,ut(e)?e:s);return e===Ie(s)&&(a?Ln(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Xn(n)||!yd.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",ie(e)?"length":dr),Reflect.ownKeys(e)}}class v_ extends vd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const E_=new Ed,T_=new v_,w_=new Ed(!0);const tc=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function I_(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=$r(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?tc:e?nc:at;return!e&&ot(i,"iterate",l?ec:dr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function b_(t,e){const n={get(s){const i=this.__v_raw,a=Ie(i),c=Ie(s);t||(Ln(s,c)&&ot(a,"get",s),ot(a,"get",c));const{has:l}=Mi(a),h=e?tc:t?nc:at;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ot(Ie(s),"iterate",dr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ie(i),c=Ie(s);return t||(Ln(s,c)&&ot(a,"has",s),ot(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=Ie(c),h=e?tc:t?nc:at;return!t&&ot(l,"iterate",dr),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return We(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(s){!e&&!Ot(s)&&!_r(s)&&(s=Ie(s));const i=Ie(this);return Mi(i).has.call(i,s)||(i.add(s),cn(i,"add",s,s)),this},set(s,i){!e&&!Ot(i)&&!_r(i)&&(i=Ie(i));const a=Ie(this),{has:c,get:l}=Mi(a);let h=c.call(a,s);h||(s=Ie(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Ln(i,f)&&cn(a,"set",s,i):cn(a,"add",s,i),this},delete(s){const i=Ie(this),{has:a,get:c}=Mi(i);let l=a.call(i,s);l||(s=Ie(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&cn(i,"delete",s,void 0),h},clear(){const s=Ie(this),i=s.size!==0,a=s.clear();return i&&cn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=I_(s,t,e)}),n}function Jc(t,e){const n=b_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const A_={get:Jc(!1,!1)},R_={get:Jc(!1,!0)},S_={get:Jc(!0,!1)};const Td=new WeakMap,wd=new WeakMap,Id=new WeakMap,C_=new WeakMap;function P_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function k_(t){return t.__v_skip||!Object.isExtensible(t)?0:P_(t_(t))}function Fo(t){return _r(t)?t:Xc(t,!1,E_,A_,Td)}function bd(t){return Xc(t,!1,w_,R_,wd)}function Ad(t){return Xc(t,!0,T_,S_,Id)}function Xc(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=k_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function jr(t){return _r(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Ot(t){return!!(t&&t.__v_isShallow)}function Yc(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function D_(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&od(t,"__v_skip",!0),t}const at=t=>Oe(t)?Fo(t):t,nc=t=>Oe(t)?Ad(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function Fn(t){return Rd(t,!1)}function O_(t){return Rd(t,!0)}function Rd(t,e){return ut(t)?t:new N_(t,e)}class N_{constructor(e,n){this.dep=new Qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ot(e)||_r(e);e=r?e:Ie(e),Ln(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function pt(t){return ut(t)?t.value:t}const V_={get:(t,e,n)=>e==="__v_raw"?t:pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sd(t){return jr(t)?t:new Proxy(t,V_)}class x_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return fd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new x_(r,s,n)}const Fi={},lo=new WeakMap;let cr;function L_(t,e=!1,n=cr){if(n){let r=lo.get(n);r||lo.set(n,r=[]),r.push(t)}}function F_(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=$=>s?$:Ot($)||s===!1||s===0?ln($,1):ln($);let f,p,m,T,k=!1,N=!1;if(ut(t)?(p=()=>t.value,k=Ot(t)):jr(t)?(p=()=>h(t),k=!0):ie(t)?(N=!0,k=t.some($=>jr($)||Ot($)),p=()=>t.map($=>{if(ut($))return $.value;if(jr($))return h($);if(ue($))return l?l($,2):$()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Yn();try{m()}finally{Zn()}}const $=cr;cr=f;try{return l?l(t,3,[T]):t(T)}finally{cr=$}}:p=Qt,e&&s){const $=p,ae=s===!0?1/0:s;p=()=>ln($(),ae)}const L=f_(),z=()=>{f.stop(),L&&L.active&&jc(L.effects,f)};if(i&&e){const $=e;e=(...ae)=>{$(...ae),z()}}let U=N?new Array(t.length).fill(Fi):Fi;const B=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const ae=f.run();if(s||k||(N?ae.some((re,A)=>Ln(re,U[A])):Ln(ae,U))){m&&m();const re=cr;cr=f;try{const A=[ae,U===Fi?void 0:N&&U[0]===Fi?[]:U,T];l?l(e,3,A):e(...A),U=ae}finally{cr=re}}}else f.run()};return c&&c(B),f=new ud(p),f.scheduler=a?()=>a(B,!1):B,T=$=>L_($,!1,f),m=f.onStop=()=>{const $=lo.get(f);if($){if(l)l($,4);else for(const ae of $)ae();lo.delete(f)}},e?r?B(!0):U=f.run():a?a(B.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function ln(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))ln(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)ln(t[r],e,n);else if(td(t)||$r(t))t.forEach(r=>{ln(r,e,n)});else if(sd(t)){for(const r in t)ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function li(t,e,n,r){try{return r?t(...r):t()}catch(s){Uo(s,e,n)}}function Bt(t,e,n,r){if(ue(t)){const s=li(t,e,n,r);return s&&nd(s)&&s.catch(i=>{Uo(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function Uo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Yn(),li(i,null,10,[t,l,h]),Zn();return}}U_(t,n,s,r,a)}function U_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const gt=[];let qt=-1;const Hr=[];let Sn=null,kr=0;const Cd=Promise.resolve();let uo=null;function Pd(t){const e=uo||Cd;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=qt+1,n=gt.length;for(;e<n;){const r=e+n>>>1,s=gt[r],i=Js(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zc(t){if(!(t.flags&1)){const e=Js(t),n=gt[gt.length-1];!n||!(t.flags&2)&&e>=Js(n)?gt.push(t):gt.splice(B_(e),0,t),t.flags|=1,kd()}}function kd(){uo||(uo=Cd.then(Od))}function $_(t){ie(t)?Hr.push(...t):Sn&&t.id===-1?Sn.splice(kr+1,0,t):t.flags&1||(Hr.push(t),t.flags|=1),kd()}function Vu(t,e,n=qt+1){for(;n<gt.length;n++){const r=gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;gt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dd(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,r)=>Js(n)-Js(r));if(Hr.length=0,Sn){Sn.push(...e);return}for(Sn=e,kr=0;kr<Sn.length;kr++){const n=Sn[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Sn=null,kr=0}}const Js=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Od(t){try{for(qt=0;qt<gt.length;qt++){const e=gt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<gt.length;qt++){const e=gt[qt];e&&(e.flags&=-2)}qt=-1,gt.length=0,Dd(),uo=null,(gt.length||Hr.length)&&Od()}}let At=null,Nd=null;function ho(t){const e=At;return At=t,Nd=t&&t.type.__scopeId||null,e}function ur(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qu(-1);const i=ho(e);let a;try{a=t(...s)}finally{ho(i),r._d&&qu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Sa(t,e){if(At===null)return t;const n=qo(At),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Pe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Yn(),Bt(l,n,8,[t.el,c,t,e]),Zn())}}const j_=Symbol("_vte"),Vd=t=>t.__isTeleport,Cn=Symbol("_leaveCb"),Ui=Symbol("_enterCb");function H_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return el(()=>{t.isMounted=!0}),Hd(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],xd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},Md=t=>{const e=t.subTree;return e.component?Md(e.component):e},q_={name:"BaseTransition",props:xd,setup(t,{slots:e}){const n=$y(),r=H_();return()=>{const s=e.default&&Ud(e.default(),!0);if(!s||!s.length)return;const i=Ld(s),a=Ie(t),{mode:c}=a;if(r.isLeaving)return Ca(i);const l=xu(i);if(!l)return Ca(i);let h=rc(l,a,r,n,p=>h=p);l.type!==vt&&Xs(l,h);let f=n.subTree&&xu(n.subTree);if(f&&f.type!==vt&&!hr(l,f)&&Md(n).type!==vt){let p=rc(f,a,r,n);if(Xs(f,p),c==="out-in"&&l.type!==vt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Ca(i);c==="in-out"&&l.type!==vt?p.delayLeave=(m,T,k)=>{const N=Fd(r,f);N[String(f.key)]=f,m[Cn]=()=>{T(),m[Cn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{k(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Ld(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const z_=q_;function Fd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function rc(t,e,n,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:T,onAfterLeave:k,onLeaveCancelled:N,onBeforeAppear:L,onAppear:z,onAfterAppear:U,onAppearCancelled:B}=e,$=String(t.key),ae=Fd(n,t),re=(_,b)=>{_&&Bt(_,r,9,b)},A=(_,b)=>{const R=b[1];re(_,b),ie(_)?_.every(I=>I.length<=1)&&R():_.length<=1&&R()},y={mode:a,persisted:c,beforeEnter(_){let b=l;if(!n.isMounted)if(i)b=L||l;else return;_[Cn]&&_[Cn](!0);const R=ae[$];R&&hr(t,R)&&R.el[Cn]&&R.el[Cn](),re(b,[_])},enter(_){let b=h,R=f,I=p;if(!n.isMounted)if(i)b=z||h,R=U||f,I=B||p;else return;let v=!1;const Se=_[Ui]=qe=>{v||(v=!0,qe?re(I,[_]):re(R,[_]),y.delayedLeave&&y.delayedLeave(),_[Ui]=void 0)};b?A(b,[_,Se]):Se()},leave(_,b){const R=String(t.key);if(_[Ui]&&_[Ui](!0),n.isUnmounting)return b();re(m,[_]);let I=!1;const v=_[Cn]=Se=>{I||(I=!0,b(),Se?re(N,[_]):re(k,[_]),_[Cn]=void 0,ae[R]===t&&delete ae[R])};ae[R]=t,T?A(T,[_,v]):v()},clone(_){const b=rc(_,e,n,r,s);return s&&s(b),b}};return y}function Ca(t){if(Bo(t))return t=qn(t),t.children=null,t}function xu(t){if(!Bo(t))return Vd(t.type)&&t.children?Ld(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Xs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ud(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===xt?(a.patchFlag&128&&s++,r=r.concat(Ud(a.children,e,c))):(e||a.type!==vt)&&r.push(c!=null?qn(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Bd(t,e){return ue(t)?We({name:t.name},e,{setup:t}):t}function $d(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fo(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,N)=>fo(k,e&&(ie(e)?e[N]:e),n,r,s));return}if(Fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?qo(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,m=Ie(p),T=p===Pe?()=>!1:k=>Ae(m,k);if(h!=null&&h!==l&&($e(h)?(f[h]=null,T(h)&&(p[h]=null)):ut(h)&&(h.value=null)),ue(l))li(l,c,12,[a,f]);else{const k=$e(l),N=ut(l);if(k||N){const L=()=>{if(t.f){const z=k?T(l)?p[l]:f[l]:l.value;s?ie(z)&&jc(z,i):ie(z)?z.includes(i)||z.push(i):k?(f[l]=[i],T(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=a,T(l)&&(p[l]=a)):N&&(l.value=a,t.k&&(f[t.k]=a))};a?(L.id=-1,It(L,n)):L()}}}Mo().requestIdleCallback;Mo().cancelIdleCallback;const Fs=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function K_(t,e){jd(t,"a",e)}function G_(t,e){jd(t,"da",e)}function jd(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($o(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&W_(r,e,n,s),s=s.parent}}function W_(t,e,n,r){const s=$o(e,t,r,!0);qd(()=>{jc(r[e],s)},n)}function $o(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Yn();const c=ui(n),l=Bt(e,n,t,a);return c(),Zn(),l});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=lt)=>{(!Zs||t==="sp")&&$o(t,(...r)=>e(...r),n)},Q_=_n("bm"),el=_n("m"),J_=_n("bu"),X_=_n("u"),Hd=_n("bum"),qd=_n("um"),Y_=_n("sp"),Z_=_n("rtg"),ey=_n("rtc");function ty(t,e=lt){$o("ec",t,e)}const ny=Symbol.for("v-ndc");function ry(t,e,n,r){let s;const i=n,a=ie(t);if(a||$e(t)){const c=a&&jr(t);let l=!1;c&&(l=!Ot(t),t=Lo(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?at(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const sc=t=>t?fp(t)?qo(t):sc(t.parent):null,Us=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sc(t.parent),$root:t=>sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Kd(t),$forceUpdate:t=>t.f||(t.f=()=>{Zc(t.update)}),$nextTick:t=>t.n||(t.n=Pd.bind(t.proxy)),$watch:t=>by.bind(t)}),Pa=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Ae(t,e),sy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pa(r,e))return a[e]=1,r[e];if(s!==Pe&&Ae(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ae(h,e))return a[e]=3,i[e];if(n!==Pe&&Ae(n,e))return a[e]=4,n[e];ic&&(a[e]=0)}}const f=Us[e];let p,m;if(f)return e==="$attrs"&&ot(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Ae(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Ae(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pa(s,e)?(s[e]=n,!0):r!==Pe&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Pe&&Ae(t,a)||Pa(e,a)||(c=i[0])&&Ae(c,a)||Ae(r,a)||Ae(Us,a)||Ae(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ic=!0;function iy(t){const e=Kd(t),n=t.proxy,r=t.ctx;ic=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:T,updated:k,activated:N,deactivated:L,beforeDestroy:z,beforeUnmount:U,destroyed:B,unmounted:$,render:ae,renderTracked:re,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:R,components:I,directives:v,filters:Se}=e;if(h&&oy(h,r,null),a)for(const me in a){const pe=a[me];ue(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);Oe(me)&&(t.data=Fo(me))}if(ic=!0,i)for(const me in i){const pe=i[me],Tt=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):Qt,Nt=!ue(pe)&&ue(pe.set)?pe.set.bind(n):Qt,St=Mt({get:Tt,set:Nt});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ve=>St.value=Ve})}if(c)for(const me in c)zd(c[me],r,n,me);if(l){const me=ue(l)?l.call(n):l;Reflect.ownKeys(me).forEach(pe=>{Wi(pe,me[pe])})}f&&Lu(f,t,"c");function Ne(me,pe){ie(pe)?pe.forEach(Tt=>me(Tt.bind(n))):pe&&me(pe.bind(n))}if(Ne(Q_,p),Ne(el,m),Ne(J_,T),Ne(X_,k),Ne(K_,N),Ne(G_,L),Ne(ty,y),Ne(ey,re),Ne(Z_,A),Ne(Hd,U),Ne(qd,$),Ne(Y_,_),ie(b))if(b.length){const me=t.exposed||(t.exposed={});b.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:Tt=>n[pe]=Tt})})}else t.exposed||(t.exposed={});ae&&t.render===Qt&&(t.render=ae),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),v&&(t.directives=v),_&&$d(t)}function oy(t,e,n=Qt){ie(t)&&(t=oc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Lu(t,e,n){Bt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zd(t,e,n,r){let s=r.includes(".")?op(n,r):()=>n[r];if($e(t)){const i=e[t];ue(i)&&Qi(s,i)}else if(ue(t))Qi(s,t.bind(n));else if(Oe(t))if(ie(t))t.forEach(i=>zd(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Qi(s,i,t)}}function Kd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>po(l,h,a,!0)),po(l,e,a)),Oe(e)&&i.set(e,l),l}function po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&po(t,i,n,!0),s&&s.forEach(a=>po(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=ay[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const ay={data:Fu,props:Uu,emits:Uu,methods:Ds,computed:Ds,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ds,directives:Ds,watch:ly,provide:Fu,inject:cy};function Fu(t,e){return e?t?function(){return We(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function cy(t,e){return Ds(oc(t),oc(e))}function oc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?We(Object.create(null),t,e):e}function Uu(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:We(Object.create(null),Mu(t),Mu(e??{})):e}function ly(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function Gd(){return{app:null,config:{isNativeTag:Zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uy=0;function hy(t,e){return function(r,s=null){ue(r)||(r=We({},r)),s!=null&&!Oe(s)&&(s=null);const i=Gd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:uy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ue(f.install)?(a.add(f),f.install(h,...p)):ue(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const T=h._ceVNode||Be(r,s);return T.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(T,f,m),l=!0,h._container=f,f.__vue_app__=h,qo(T.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Bt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=qr;qr=h;try{return f()}finally{qr=p}}};return h}}let qr=null;function Wi(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=lt||At;if(r||qr){const s=qr?qr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Wd={},Qd=()=>Object.create(Wd),Jd=t=>Object.getPrototypeOf(t)===Wd;function fy(t,e,n,r=!1){const s={},i=Qd();t.propsDefaults=Object.create(null),Xd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:bd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Ie(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(jo(t.emitsOptions,m))continue;const T=e[m];if(l)if(Ae(i,m))T!==i[m]&&(i[m]=T,h=!0);else{const k=Hn(m);s[k]=ac(l,c,k,T,t,!1)}else T!==i[m]&&(i[m]=T,h=!0)}}}else{Xd(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ae(e,p)&&((f=wr(p))===p||!Ae(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ac(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&cn(t.attrs,"set","")}function Xd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(xs(l))continue;const h=e[l];let f;s&&Ae(s,f=Hn(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:jo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ie(n),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ac(s,l,p,h[p],t,!Ae(h,p))}}return a}function ac(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ae(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ui(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===wr(n))&&(r=!0))}return r}const py=new WeakMap;function Yd(t,e,n=!1){const r=n?py:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[m,T]=Yd(p,e,!0);We(a,m),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Oe(t)&&r.set(t,Br),Br;if(ie(i))for(let f=0;f<i.length;f++){const p=Hn(i[f]);Bu(p)&&(a[p]=Pe)}else if(i)for(const f in i){const p=Hn(f);if(Bu(p)){const m=i[f],T=a[p]=ie(m)||ue(m)?{type:m}:We({},m),k=T.type;let N=!1,L=!0;if(ie(k))for(let z=0;z<k.length;++z){const U=k[z],B=ue(U)&&U.name;if(B==="Boolean"){N=!0;break}else B==="String"&&(L=!1)}else N=ue(k)&&k.name==="Boolean";T[0]=N,T[1]=L,(N||Ae(T,"default"))&&c.push(p)}}const h=[a,c];return Oe(t)&&r.set(t,h),h}function Bu(t){return t[0]!=="$"&&!xs(t)}const Zd=t=>t[0]==="_"||t==="$stable",tl=t=>ie(t)?t.map(Kt):[Kt(t)],gy=(t,e,n)=>{if(e._n)return e;const r=ur((...s)=>tl(e(...s)),n);return r._c=!1,r},ep=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zd(s))continue;const i=t[s];if(ue(i))e[s]=gy(s,i,r);else if(i!=null){const a=tl(i);e[s]=()=>a}}},tp=(t,e)=>{const n=tl(e);t.slots.default=()=>n},np=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},my=(t,e,n)=>{const r=t.slots=Qd();if(t.vnode.shapeFlag&32){const s=e._;s?(np(r,e,n),n&&od(r,"_",s,!0)):ep(e,r)}else e&&tp(t,e)},_y=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:np(s,e,n):(i=!e.$stable,ep(e,s)),a=e}else e&&(tp(t,e),a={default:1});if(i)for(const c in s)!Zd(c)&&a[c]==null&&delete s[c]},It=Dy;function yy(t){return vy(t)}function vy(t,e){const n=Mo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:T=Qt,insertStaticContent:k}=t,N=(E,w,S,O=null,M=null,V=null,G=void 0,H=null,j=!!w.dynamicChildren)=>{if(E===w)return;E&&!hr(E,w)&&(O=D(E),Ve(E,M,V,!0),E=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:F,ref:ee,shapeFlag:Q}=w;switch(F){case Ho:L(E,w,S,O);break;case vt:z(E,w,S,O);break;case Ji:E==null&&U(w,S,O,G);break;case xt:I(E,w,S,O,M,V,G,H,j);break;default:Q&1?ae(E,w,S,O,M,V,G,H,j):Q&6?v(E,w,S,O,M,V,G,H,j):(Q&64||Q&128)&&F.process(E,w,S,O,M,V,G,H,j,Y)}ee!=null&&M&&fo(ee,E&&E.ref,V,w||E,!w)},L=(E,w,S,O)=>{if(E==null)r(w.el=c(w.children),S,O);else{const M=w.el=E.el;w.children!==E.children&&h(M,w.children)}},z=(E,w,S,O)=>{E==null?r(w.el=l(w.children||""),S,O):w.el=E.el},U=(E,w,S,O)=>{[E.el,E.anchor]=k(E.children,w,S,O,E.el,E.anchor)},B=({el:E,anchor:w},S,O)=>{let M;for(;E&&E!==w;)M=m(E),r(E,S,O),E=M;r(w,S,O)},$=({el:E,anchor:w})=>{let S;for(;E&&E!==w;)S=m(E),s(E),E=S;s(w)},ae=(E,w,S,O,M,V,G,H,j)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),E==null?re(w,S,O,M,V,G,H,j):_(E,w,M,V,G,H,j)},re=(E,w,S,O,M,V,G,H)=>{let j,F;const{props:ee,shapeFlag:Q,transition:Z,dirs:se}=E;if(j=E.el=a(E.type,V,ee&&ee.is,ee),Q&8?f(j,E.children):Q&16&&y(E.children,j,null,O,M,ka(E,V),G,H),se&&sr(E,null,O,"created"),A(j,E,E.scopeId,G,O),ee){for(const he in ee)he!=="value"&&!xs(he)&&i(j,he,null,ee[he],V,O);"value"in ee&&i(j,"value",null,ee.value,V),(F=ee.onVnodeBeforeMount)&&Ht(F,O,E)}se&&sr(E,null,O,"beforeMount");const te=Ey(M,Z);te&&Z.beforeEnter(j),r(j,w,S),((F=ee&&ee.onVnodeMounted)||te||se)&&It(()=>{F&&Ht(F,O,E),te&&Z.enter(j),se&&sr(E,null,O,"mounted")},M)},A=(E,w,S,O,M)=>{if(S&&T(E,S),O)for(let V=0;V<O.length;V++)T(E,O[V]);if(M){let V=M.subTree;if(w===V||cp(V.type)&&(V.ssContent===w||V.ssFallback===w)){const G=M.vnode;A(E,G,G.scopeId,G.slotScopeIds,M.parent)}}},y=(E,w,S,O,M,V,G,H,j=0)=>{for(let F=j;F<E.length;F++){const ee=E[F]=H?Pn(E[F]):Kt(E[F]);N(null,ee,w,S,O,M,V,G,H)}},_=(E,w,S,O,M,V,G)=>{const H=w.el=E.el;let{patchFlag:j,dynamicChildren:F,dirs:ee}=w;j|=E.patchFlag&16;const Q=E.props||Pe,Z=w.props||Pe;let se;if(S&&ir(S,!1),(se=Z.onVnodeBeforeUpdate)&&Ht(se,S,w,E),ee&&sr(w,E,S,"beforeUpdate"),S&&ir(S,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&f(H,""),F?b(E.dynamicChildren,F,H,S,O,ka(w,M),V):G||pe(E,w,H,null,S,O,ka(w,M),V,!1),j>0){if(j&16)R(H,Q,Z,S,M);else if(j&2&&Q.class!==Z.class&&i(H,"class",null,Z.class,M),j&4&&i(H,"style",Q.style,Z.style,M),j&8){const te=w.dynamicProps;for(let he=0;he<te.length;he++){const _e=te[he],et=Q[_e],Qe=Z[_e];(Qe!==et||_e==="value")&&i(H,_e,et,Qe,M,S)}}j&1&&E.children!==w.children&&f(H,w.children)}else!G&&F==null&&R(H,Q,Z,S,M);((se=Z.onVnodeUpdated)||ee)&&It(()=>{se&&Ht(se,S,w,E),ee&&sr(w,E,S,"updated")},O)},b=(E,w,S,O,M,V,G)=>{for(let H=0;H<w.length;H++){const j=E[H],F=w[H],ee=j.el&&(j.type===xt||!hr(j,F)||j.shapeFlag&70)?p(j.el):S;N(j,F,ee,null,O,M,V,G,!0)}},R=(E,w,S,O,M)=>{if(w!==S){if(w!==Pe)for(const V in w)!xs(V)&&!(V in S)&&i(E,V,w[V],null,M,O);for(const V in S){if(xs(V))continue;const G=S[V],H=w[V];G!==H&&V!=="value"&&i(E,V,H,G,M,O)}"value"in S&&i(E,"value",w.value,S.value,M)}},I=(E,w,S,O,M,V,G,H,j)=>{const F=w.el=E?E.el:c(""),ee=w.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:se}=w;se&&(H=H?H.concat(se):se),E==null?(r(F,S,O),r(ee,S,O),y(w.children||[],S,ee,M,V,G,H,j)):Q>0&&Q&64&&Z&&E.dynamicChildren?(b(E.dynamicChildren,Z,S,M,V,G,H),(w.key!=null||M&&w===M.subTree)&&rp(E,w,!0)):pe(E,w,S,ee,M,V,G,H,j)},v=(E,w,S,O,M,V,G,H,j)=>{w.slotScopeIds=H,E==null?w.shapeFlag&512?M.ctx.activate(w,S,O,G,j):Se(w,S,O,M,V,G,j):qe(E,w,j)},Se=(E,w,S,O,M,V,G)=>{const H=E.component=By(E,O,M);if(Bo(E)&&(H.ctx.renderer=Y),jy(H,!1,G),H.asyncDep){if(M&&M.registerDep(H,Ne,G),!E.el){const j=H.subTree=Be(vt);z(null,j,w,S)}}else Ne(H,E,w,S,M,V,G)},qe=(E,w,S)=>{const O=w.component=E.component;if(Py(E,w,S))if(O.asyncDep&&!O.asyncResolved){me(O,w,S);return}else O.next=w,O.update();else w.el=E.el,O.vnode=w},Ne=(E,w,S,O,M,V,G)=>{const H=()=>{if(E.isMounted){let{next:Q,bu:Z,u:se,parent:te,vnode:he}=E;{const tt=sp(E);if(tt){Q&&(Q.el=he.el,me(E,Q,G)),tt.asyncDep.then(()=>{E.isUnmounted||H()});return}}let _e=Q,et;ir(E,!1),Q?(Q.el=he.el,me(E,Q,G)):Q=he,Z&&Gi(Z),(et=Q.props&&Q.props.onVnodeBeforeUpdate)&&Ht(et,te,Q,he),ir(E,!0);const Qe=ju(E),Ct=E.subTree;E.subTree=Qe,N(Ct,Qe,p(Ct.el),D(Ct),E,M,V),Q.el=Qe.el,_e===null&&ky(E,Qe.el),se&&It(se,M),(et=Q.props&&Q.props.onVnodeUpdated)&&It(()=>Ht(et,te,Q,he),M)}else{let Q;const{el:Z,props:se}=w,{bm:te,m:he,parent:_e,root:et,type:Qe}=E,Ct=Fs(w);ir(E,!1),te&&Gi(te),!Ct&&(Q=se&&se.onVnodeBeforeMount)&&Ht(Q,_e,w),ir(E,!0);{et.ce&&et.ce._injectChildStyle(Qe);const tt=E.subTree=ju(E);N(null,tt,S,O,E,M,V),w.el=tt.el}if(he&&It(he,M),!Ct&&(Q=se&&se.onVnodeMounted)){const tt=w;It(()=>Ht(Q,_e,tt),M)}(w.shapeFlag&256||_e&&Fs(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&It(E.a,M),E.isMounted=!0,w=S=O=null}};E.scope.on();const j=E.effect=new ud(H);E.scope.off();const F=E.update=j.run.bind(j),ee=E.job=j.runIfDirty.bind(j);ee.i=E,ee.id=E.uid,j.scheduler=()=>Zc(ee),ir(E,!0),F()},me=(E,w,S)=>{w.component=E;const O=E.vnode.props;E.vnode=w,E.next=null,dy(E,w.props,O,S),_y(E,w.children,S),Yn(),Vu(E),Zn()},pe=(E,w,S,O,M,V,G,H,j=!1)=>{const F=E&&E.children,ee=E?E.shapeFlag:0,Q=w.children,{patchFlag:Z,shapeFlag:se}=w;if(Z>0){if(Z&128){Nt(F,Q,S,O,M,V,G,H,j);return}else if(Z&256){Tt(F,Q,S,O,M,V,G,H,j);return}}se&8?(ee&16&&_t(F,M,V),Q!==F&&f(S,Q)):ee&16?se&16?Nt(F,Q,S,O,M,V,G,H,j):_t(F,M,V,!0):(ee&8&&f(S,""),se&16&&y(Q,S,O,M,V,G,H,j))},Tt=(E,w,S,O,M,V,G,H,j)=>{E=E||Br,w=w||Br;const F=E.length,ee=w.length,Q=Math.min(F,ee);let Z;for(Z=0;Z<Q;Z++){const se=w[Z]=j?Pn(w[Z]):Kt(w[Z]);N(E[Z],se,S,null,M,V,G,H,j)}F>ee?_t(E,M,V,!0,!1,Q):y(w,S,O,M,V,G,H,j,Q)},Nt=(E,w,S,O,M,V,G,H,j)=>{let F=0;const ee=w.length;let Q=E.length-1,Z=ee-1;for(;F<=Q&&F<=Z;){const se=E[F],te=w[F]=j?Pn(w[F]):Kt(w[F]);if(hr(se,te))N(se,te,S,null,M,V,G,H,j);else break;F++}for(;F<=Q&&F<=Z;){const se=E[Q],te=w[Z]=j?Pn(w[Z]):Kt(w[Z]);if(hr(se,te))N(se,te,S,null,M,V,G,H,j);else break;Q--,Z--}if(F>Q){if(F<=Z){const se=Z+1,te=se<ee?w[se].el:O;for(;F<=Z;)N(null,w[F]=j?Pn(w[F]):Kt(w[F]),S,te,M,V,G,H,j),F++}}else if(F>Z)for(;F<=Q;)Ve(E[F],M,V,!0),F++;else{const se=F,te=F,he=new Map;for(F=te;F<=Z;F++){const Je=w[F]=j?Pn(w[F]):Kt(w[F]);Je.key!=null&&he.set(Je.key,F)}let _e,et=0;const Qe=Z-te+1;let Ct=!1,tt=0;const En=new Array(Qe);for(F=0;F<Qe;F++)En[F]=0;for(F=se;F<=Q;F++){const Je=E[F];if(et>=Qe){Ve(Je,M,V,!0);continue}let Pt;if(Je.key!=null)Pt=he.get(Je.key);else for(_e=te;_e<=Z;_e++)if(En[_e-te]===0&&hr(Je,w[_e])){Pt=_e;break}Pt===void 0?Ve(Je,M,V,!0):(En[Pt-te]=F+1,Pt>=tt?tt=Pt:Ct=!0,N(Je,w[Pt],S,null,M,V,G,H,j),et++)}const gs=Ct?Ty(En):Br;for(_e=gs.length-1,F=Qe-1;F>=0;F--){const Je=te+F,Pt=w[Je],Ei=Je+1<ee?w[Je+1].el:O;En[F]===0?N(null,Pt,S,Ei,M,V,G,H,j):Ct&&(_e<0||F!==gs[_e]?St(Pt,S,Ei,2):_e--)}}},St=(E,w,S,O,M=null)=>{const{el:V,type:G,transition:H,children:j,shapeFlag:F}=E;if(F&6){St(E.component.subTree,w,S,O);return}if(F&128){E.suspense.move(w,S,O);return}if(F&64){G.move(E,w,S,Y);return}if(G===xt){r(V,w,S);for(let Q=0;Q<j.length;Q++)St(j[Q],w,S,O);r(E.anchor,w,S);return}if(G===Ji){B(E,w,S);return}if(O!==2&&F&1&&H)if(O===0)H.beforeEnter(V),r(V,w,S),It(()=>H.enter(V),M);else{const{leave:Q,delayLeave:Z,afterLeave:se}=H,te=()=>r(V,w,S),he=()=>{Q(V,()=>{te(),se&&se()})};Z?Z(V,te,he):he()}else r(V,w,S)},Ve=(E,w,S,O=!1,M=!1)=>{const{type:V,props:G,ref:H,children:j,dynamicChildren:F,shapeFlag:ee,patchFlag:Q,dirs:Z,cacheIndex:se}=E;if(Q===-2&&(M=!1),H!=null&&fo(H,null,S,E,!0),se!=null&&(w.renderCache[se]=void 0),ee&256){w.ctx.deactivate(E);return}const te=ee&1&&Z,he=!Fs(E);let _e;if(he&&(_e=G&&G.onVnodeBeforeUnmount)&&Ht(_e,w,E),ee&6)jt(E.component,S,O);else{if(ee&128){E.suspense.unmount(S,O);return}te&&sr(E,null,w,"beforeUnmount"),ee&64?E.type.remove(E,w,S,Y,O):F&&!F.hasOnce&&(V!==xt||Q>0&&Q&64)?_t(F,w,S,!1,!0):(V===xt&&Q&384||!M&&ee&16)&&_t(j,w,S),O&&xe(E)}(he&&(_e=G&&G.onVnodeUnmounted)||te)&&It(()=>{_e&&Ht(_e,w,E),te&&sr(E,null,w,"unmounted")},S)},xe=E=>{const{type:w,el:S,anchor:O,transition:M}=E;if(w===xt){vn(S,O);return}if(w===Ji){$(E);return}const V=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:H}=M,j=()=>G(S,V);H?H(E.el,V,j):j()}else V()},vn=(E,w)=>{let S;for(;E!==w;)S=m(E),s(E),E=S;s(w)},jt=(E,w,S)=>{const{bum:O,scope:M,job:V,subTree:G,um:H,m:j,a:F}=E;$u(j),$u(F),O&&Gi(O),M.stop(),V&&(V.flags|=8,Ve(G,E,w,S)),H&&It(H,w),It(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},_t=(E,w,S,O=!1,M=!1,V=0)=>{for(let G=V;G<E.length;G++)Ve(E[G],w,S,O,M)},D=E=>{if(E.shapeFlag&6)return D(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),S=w&&w[j_];return S?m(S):w};let J=!1;const W=(E,w,S)=>{E==null?w._vnode&&Ve(w._vnode,null,null,!0):N(w._vnode||null,E,w,null,null,null,S),w._vnode=E,J||(J=!0,Vu(),Dd(),J=!1)},Y={p:N,um:Ve,m:St,r:xe,mt:Se,mc:y,pc:pe,pbc:b,n:D,o:t};return{render:W,hydrate:void 0,createApp:hy(W)}}function ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ir({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ey(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Pn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&rp(a,c)),c.type===Ho&&(c.el=a.el)}}function Ty(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function sp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sp(e)}function $u(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wy=Symbol.for("v-scx"),Iy=()=>fn(wy);function Qi(t,e,n){return ip(t,e,n)}function ip(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:a}=n,c=We({},n),l=e&&r||!e&&i!=="post";let h;if(Zs){if(i==="sync"){const T=Iy();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!l){const T=()=>{};return T.stop=Qt,T.resume=Qt,T.pause=Qt,T}}const f=lt;c.call=(T,k,N)=>Bt(T,f,k,N);let p=!1;i==="post"?c.scheduler=T=>{It(T,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(T,k)=>{k?T():Zc(T)}),c.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const m=F_(t,e,c);return Zs&&(h?h.push(m):l&&m()),m}function by(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?op(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=ui(this),c=ip(s,i.bind(r),n);return a(),c}function op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ay=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hn(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function Ry(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),a=i&&Ay(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>$e(f)?f.trim():f)),a.number&&(s=n.map(Xa)));let c,l=r[c=wa(e)]||r[c=wa(Hn(e))];!l&&i&&(l=r[c=wa(wr(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function ap(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ue(t)){const l=h=>{const f=ap(h,e,!0);f&&(c=!0,We(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>a[l]=null):We(a,i),Oe(t)&&r.set(t,a),a)}function jo(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,wr(e))||Ae(t,e))}function ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:T,ctx:k,inheritAttrs:N}=t,L=ho(t);let z,U;try{if(n.shapeFlag&4){const $=s||r,ae=$;z=Kt(h.call(ae,$,f,p,T,m,k)),U=c}else{const $=e;z=Kt($.length>1?$(p,{attrs:c,slots:a,emit:l}):$(p,null)),U=e.props?c:Sy(c)}}catch($){Bs.length=0,Uo($,t,1),z=Be(vt)}let B=z;if(U&&N!==!1){const $=Object.keys(U),{shapeFlag:ae}=B;$.length&&ae&7&&(i&&$.some($c)&&(U=Cy(U,i)),B=qn(B,U,!1,!0))}return n.dirs&&(B=qn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Xs(B,n.transition),z=B,ho(L),z}const Sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},Cy=(t,e)=>{const n={};for(const r in t)(!$c(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Py(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hu(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!jo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Hu(r,a,h):!0:!!a;return!1}function Hu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!jo(n,i))return!0}return!1}function ky({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cp=t=>t.__isSuspense;function Dy(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):$_(t)}const xt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),Bs=[];let Rt=null;function Dt(t=!1){Bs.push(Rt=t?null:[])}function Oy(){Bs.pop(),Rt=Bs[Bs.length-1]||null}let Ys=1;function qu(t,e=!1){Ys+=t,t<0&&Rt&&e&&(Rt.hasOnce=!0)}function lp(t){return t.dynamicChildren=Ys>0?Rt||Br:null,Oy(),Ys>0&&Rt&&Rt.push(t),t}function Lt(t,e,n,r,s,i){return lp(Re(t,e,n,r,s,i,!0))}function Ny(t,e,n,r,s){return lp(Be(t,e,n,r,s,!0))}function go(t){return t?t.__v_isVNode===!0:!1}function hr(t,e){return t.type===e.type&&t.key===e.key}const up=({key:t})=>t??null,Xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||ut(t)||ue(t)?{i:At,r:t,k:e,f:!!n}:t:null);function Re(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&up(e),ref:e&&Xi(e),scopeId:Nd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return c?(nl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Ys>0&&!a&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const Be=Vy;function Vy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ny)&&(t=vt),go(t)){const c=qn(t,e,!0);return n&&nl(c,n),Ys>0&&!i&&Rt&&(c.shapeFlag&6?Rt[Rt.indexOf(t)]=c:Rt.push(c)),c.patchFlag=-2,c}if(Ky(t)&&(t=t.__vccOpts),e){e=xy(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=zc(c)),Oe(l)&&(Yc(l)&&!ie(l)&&(l=We({},l)),e.style=qc(l))}const a=$e(t)?1:cp(t)?128:Vd(t)?64:Oe(t)?4:ue(t)?2:0;return Re(t,e,n,r,s,a,i,!0)}function xy(t){return t?Yc(t)||Jd(t)?We({},t):t:null}function qn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?Ly(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&up(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Xi(e)):[i,Xi(e)]:Xi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qn(t.ssContent),ssFallback:t.ssFallback&&qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Xs(f,l.clone(f)),f}function Dr(t=" ",e=0){return Be(Ho,null,t,e)}function hp(t,e){const n=Be(Ji,null,t);return n.staticCount=e,n}function My(t="",e=!1){return e?(Dt(),Ny(vt,null,t)):Be(vt,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Be(vt):ie(t)?Be(xt,null,t.slice()):go(t)?Pn(t):Be(Ho,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qn(t)}function nl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jd(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Dr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ly(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zc([e.class,r.class]));else if(s==="style")e.style=qc([e.style,r.style]);else if(No(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){Bt(t,e,7,[n,r])}const Fy=Gd();let Uy=0;function By(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fy,i={uid:Uy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(r,s),emitsOptions:ap(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ry.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const $y=()=>lt||At;let mo,cc;{const t=Mo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};mo=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),cc=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const ui=t=>{const e=lt;return mo(t),t.scope.on(),()=>{t.scope.off(),mo(e)}},zu=()=>{lt&&lt.scope.off(),mo(null)};function fp(t){return t.vnode.shapeFlag&4}let Zs=!1;function jy(t,e=!1,n=!1){e&&cc(e);const{props:r,children:s}=t.vnode,i=fp(t);fy(t,r,i,e),my(t,s,n);const a=i?Hy(t,e):void 0;return e&&cc(!1),a}function Hy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sy);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?zy(t):null,i=ui(t),a=li(r,t,0,[t.props,s]),c=nd(a);if(Zn(),i(),(c||t.sp)&&!Fs(t)&&$d(t),c){if(a.then(zu,zu),e)return a.then(l=>{Ku(t,l)}).catch(l=>{Uo(l,t,0)});t.asyncDep=a}else Ku(t,a)}else dp(t)}function Ku(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Sd(e)),dp(t)}function dp(t,e,n){const r=t.type;t.render||(t.render=r.render||Qt);{const s=ui(t);Yn();try{iy(t)}finally{Zn(),s()}}}const qy={get(t,e){return ot(t,"get",""),t[e]}};function zy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qy),slots:t.slots,emit:t.emit,expose:e}}function qo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sd(D_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)},has(e,n){return n in e||n in Us}})):t.proxy}function Ky(t){return ue(t)&&"__vccOpts"in t}const Mt=(t,e)=>M_(t,e,Zs);function rl(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!ie(e)?go(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&go(n)&&(n=[n]),Be(t,e,n))}const Gy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lc;const Gu=typeof window<"u"&&window.trustedTypes;if(Gu)try{lc=Gu.createPolicy("vue",{createHTML:t=>t})}catch{}const pp=lc?t=>lc.createHTML(t):t=>t,Wy="http://www.w3.org/2000/svg",Qy="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,Wu=an&&an.createElement("template"),Jy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?an.createElementNS(Wy,t):e==="mathml"?an.createElementNS(Qy,t):n?an.createElement(t,{is:n}):an.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>an.createTextNode(t),createComment:t=>an.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>an.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wu.innerHTML=pp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Wu.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bn="transition",Ps="animation",ei=Symbol("_vtc"),gp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xy=We({},xd,gp),Yy=t=>(t.displayName="Transition",t.props=Xy,t),Zy=Yy((t,{slots:e})=>rl(z_,ev(t),e)),or=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qu=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function ev(t){const e={};for(const I in t)I in gp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,k=tv(s),N=k&&k[0],L=k&&k[1],{onBeforeEnter:z,onEnter:U,onEnterCancelled:B,onLeave:$,onLeaveCancelled:ae,onBeforeAppear:re=z,onAppear:A=U,onAppearCancelled:y=B}=e,_=(I,v,Se,qe)=>{I._enterCancelled=qe,ar(I,v?f:c),ar(I,v?h:a),Se&&Se()},b=(I,v)=>{I._isLeaving=!1,ar(I,p),ar(I,T),ar(I,m),v&&v()},R=I=>(v,Se)=>{const qe=I?A:U,Ne=()=>_(v,I,Se);or(qe,[v,Ne]),Ju(()=>{ar(v,I?l:i),sn(v,I?f:c),Qu(qe)||Xu(v,r,N,Ne)})};return We(e,{onBeforeEnter(I){or(z,[I]),sn(I,i),sn(I,a)},onBeforeAppear(I){or(re,[I]),sn(I,l),sn(I,h)},onEnter:R(!1),onAppear:R(!0),onLeave(I,v){I._isLeaving=!0;const Se=()=>b(I,v);sn(I,p),I._enterCancelled?(sn(I,m),eh()):(eh(),sn(I,m)),Ju(()=>{I._isLeaving&&(ar(I,p),sn(I,T),Qu($)||Xu(I,r,L,Se))}),or($,[I,Se])},onEnterCancelled(I){_(I,!1,void 0,!0),or(B,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),or(y,[I])},onLeaveCancelled(I){b(I),or(ae,[I])}})}function tv(t){if(t==null)return null;if(Oe(t))return[Da(t.enter),Da(t.leave)];{const e=Da(t);return[e,e]}}function Da(t){return s_(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ei]||(t[ei]=new Set)).add(e)}function ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ei];n&&(n.delete(e),n.size||(t[ei]=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nv=0;function Xu(t,e,n,r){const s=t._endId=++nv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:c,propCount:l}=rv(t,e);if(!a)return r();const h=a+"end";let f=0;const p=()=>{t.removeEventListener(h,m),i()},m=T=>{T.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,m)}function rv(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${bn}Delay`),i=r(`${bn}Duration`),a=Yu(s,i),c=r(`${Ps}Delay`),l=r(`${Ps}Duration`),h=Yu(c,l);let f=null,p=0,m=0;e===bn?a>0&&(f=bn,p=a,m=i.length):e===Ps?h>0&&(f=Ps,p=h,m=l.length):(p=Math.max(a,h),f=p>0?a>h?bn:Ps:null,m=f?f===bn?i.length:l.length:0);const T=f===bn&&/\b(transform|all)(,|$)/.test(r(`${bn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:T}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zu(n)+Zu(t[r])))}function Zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}function sv(t,e,n){const r=t[ei];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const th=Symbol("_vod"),iv=Symbol("_vsh"),ov=Symbol(""),av=/(^|;)\s*display\s*:/;function cv(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Yi(r,c,"")}else for(const a in e)n[a]==null&&Yi(r,a,"");for(const a in n)a==="display"&&(i=!0),Yi(r,a,n[a])}else if(s){if(e!==n){const a=r[ov];a&&(n+=";"+a),r.cssText=n,i=av.test(n)}}else e&&t.removeAttribute("style");th in t&&(t[th]=i?r.display:"",t[iv]&&(r.display="none"))}const nh=/\s*!important$/;function Yi(t,e,n){if(ie(n))n.forEach(r=>Yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lv(t,e);nh.test(n)?t.setProperty(wr(r),n.replace(nh,""),"important"):t[r]=n}}const rh=["Webkit","Moz","ms"],Oa={};function lv(t,e){const n=Oa[e];if(n)return n;let r=Hn(e);if(r!=="filter"&&r in t)return Oa[e]=r;r=id(r);for(let s=0;s<rh.length;s++){const i=rh[s]+r;if(i in t)return Oa[e]=i}return e}const sh="http://www.w3.org/1999/xlink";function ih(t,e,n,r,s,i=u_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sh,e.slice(6,e.length)):t.setAttributeNS(sh,e,n):n==null||i&&!ad(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Xn(n)?String(n):n)}function oh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ad(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function uv(t,e,n,r){t.removeEventListener(e,n,r)}const ah=Symbol("_vei");function hv(t,e,n,r,s=null){const i=t[ah]||(t[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=fv(e);if(r){const h=i[e]=gv(r,s);Or(t,c,h,l)}else a&&(uv(t,c,a,l),i[e]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function fv(t){let e;if(ch.test(t)){e={};let r;for(;r=t.match(ch);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let Na=0;const dv=Promise.resolve(),pv=()=>Na||(dv.then(()=>Na=0),Na=Date.now());function gv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(mv(r,n.value),e,5,[r])};return n.value=t,n.attached=pv(),n}function mv(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_v=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?sv(t,r,a):e==="style"?cv(t,n,r):No(e)?$c(e)||hv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(t,e,r,a))?(oh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?oh(t,Hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ih(t,e,r,a))};function yv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&$e(n)?!1:e in t}const uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Gi(e,n):e};function vv(t){t.target.composing=!0}function hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Va=Symbol("_assign"),xa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Va]=uh(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Xa(c)),t[Va](c)}),n&&Or(t,"change",()=>{t.value=t.value.trim()}),e||(Or(t,"compositionstart",vv),Or(t,"compositionend",hh),Or(t,"change",hh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Va]=uh(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ev=["ctrl","shift","alt","meta"],Tv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ev.some(n=>t[`${n}Key`]&&!e.includes(n))},mp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=Tv[e[a]];if(c&&c(s,e))return}return t(s,...i)})},wv=We({patchProp:_v},Jy);let fh;function Iv(){return fh||(fh=yy(wv))}const bv=(...t)=>{const e=Iv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Av(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rv(t){return $e(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof document<"u";function _p(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_p(t.default)}const be=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const $s=()=>{},$t=Array.isArray,yp=/#/g,Cv=/&/g,Pv=/\//g,kv=/=/g,Dv=/\?/g,vp=/\+/g,Ov=/%5B/g,Nv=/%5D/g,Ep=/%5E/g,Vv=/%60/g,Tp=/%7B/g,xv=/%7C/g,wp=/%7D/g,Mv=/%20/g;function sl(t){return encodeURI(""+t).replace(xv,"|").replace(Ov,"[").replace(Nv,"]")}function Lv(t){return sl(t).replace(Tp,"{").replace(wp,"}").replace(Ep,"^")}function uc(t){return sl(t).replace(vp,"%2B").replace(Mv,"+").replace(yp,"%23").replace(Cv,"%26").replace(Vv,"`").replace(Tp,"{").replace(wp,"}").replace(Ep,"^")}function Fv(t){return uc(t).replace(kv,"%3D")}function Uv(t){return sl(t).replace(yp,"%23").replace(Dv,"%3F")}function Bv(t){return t==null?"":Uv(t).replace(Pv,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $v=/\/$/,jv=t=>t.replace($v,"");function La(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=Kv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ti(a)}}function Hv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&Ip(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ip(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zv(t[n],e[n]))return!1;return!0}function zv(t,e){return $t(t)?ph(t,e):$t(e)?ph(e,t):t===e}function ph(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Kv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function Gv(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jv(t)}const Wv=/^[^#]+#/;function Qv(t,e){return t.replace(Wv,"#")+e}function Jv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zo=()=>({left:window.scrollX,top:window.scrollY});function Xv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Jv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const hc=new Map;function Yv(t,e){hc.set(t,e)}function Zv(t){const e=hc.get(t);return hc.delete(t),e}let eE=()=>location.protocol+"//"+location.host;function bp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),dh(l,"")}return dh(n,t)+r+s}function tE(t,e,n,r){let s=[],i=[],a=null;const c=({state:m})=>{const T=bp(t,location),k=n.value,N=e.value;let L=0;if(m){if(n.value=T,e.value=m,a&&a===k){a=null;return}L=N?m.position-N.position:0}else r(T);s.forEach(z=>{z(n.value,k,{delta:L,type:ni.pop,direction:L?L>0?js.forward:js.back:js.unknown})})};function l(){a=n.value}function h(m){s.push(m);const T=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(T),T}function f(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:zo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function mh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zo():null}}function nE(t){const{history:e,location:n}=window,r={value:bp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:eE()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(T){console.error(T),n[f?"replace":"assign"](m)}}function a(l,h){const f=be({},e.state,mh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=be({},s.value,e.state,{forward:l,scroll:zo()});i(f.current,f,!0);const p=be({},mh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function rE(t){t=Gv(t);const e=nE(t),n=tE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:Qv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sE(t){return typeof t=="string"||t&&typeof t=="object"}function Ap(t){return typeof t=="string"||typeof t=="symbol"}const Rp=Symbol("");var _h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_h||(_h={}));function Yr(t,e){return be(new Error,{type:t,[Rp]:!0},e)}function on(t,e){return t instanceof Error&&Rp in t&&(e==null||!!(t.type&e))}const yh="[^/]+?",iE={sensitive:!1,strict:!1,start:!0,end:!0},oE=/[.+*?^${}()[\]/\\]/g;function aE(t,e){const n=be({},iE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(oE,"\\$&"),T+=40;else if(m.type===1){const{value:k,repeatable:N,optional:L,regexp:z}=m;i.push({name:k,repeatable:N,optional:L});const U=z||yh;if(U!==yh){T+=10;try{new RegExp(`(${U})`)}catch($){throw new Error(`Invalid custom RegExp for param "${k}" (${U}): `+$.message)}}let B=N?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(B=L&&h.length<2?`(?:/${B})`:"/"+B),L&&(B+="?"),s+=B,T+=20,L&&(T+=-8),N&&(T+=-20),U===".*"&&(T+=-50)}f.push(T)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const T=f[m]||"",k=i[m-1];p[k.name]=T&&k.repeatable?T.split("/"):T}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const T of m)if(T.type===0)f+=T.value;else if(T.type===1){const{value:k,repeatable:N,optional:L}=T,z=k in h?h[k]:"";if($t(z)&&!N)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const U=$t(z)?z.join("/"):z;if(!U)if(L)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=U}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function cE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vh(r))return 1;if(vh(s))return-1}return s.length-r.length}function vh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lE={type:0,value:""},uE=/[a-zA-Z0-9_]/;function hE(t){if(!t)return[[]];if(t==="/")return[[lE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:uE.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function fE(t,e,n){const r=aE(hE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dE(t,e){const n=[],r=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,T){const k=!T,N=Th(p);N.aliasOf=T&&T.record;const L=Ih(e,p),z=[N];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of $)z.push(Th(be({},N,{components:T?T.record.components:N.components,path:ae,aliasOf:T?T.record:N})))}let U,B;for(const $ of z){const{path:ae}=$;if(m&&ae[0]!=="/"){const re=m.record.path,A=re[re.length-1]==="/"?"":"/";$.path=m.record.path+(ae&&A+ae)}if(U=fE($,m,L),T?T.alias.push(U):(B=B||U,B!==U&&B.alias.push(U),k&&p.name&&!wh(U)&&a(p.name)),Cp(U)&&l(U),N.children){const re=N.children;for(let A=0;A<re.length;A++)i(re[A],U,T&&T.children[A])}T=T||U}return B?()=>{a(B)}:$s}function a(p){if(Ap(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const m=mE(p,n);n.splice(m,0,p),p.record.name&&!wh(p)&&r.set(p.record.name,p)}function h(p,m){let T,k={},N,L;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw Yr(1,{location:p});L=T.record.name,k=be(Eh(m.params,T.keys.filter(B=>!B.optional).concat(T.parent?T.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Eh(p.params,T.keys.map(B=>B.name))),N=T.stringify(k)}else if(p.path!=null)N=p.path,T=n.find(B=>B.re.test(N)),T&&(k=T.parse(N),L=T.record.name);else{if(T=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!T)throw Yr(1,{location:p,currentLocation:m});L=T.record.name,k=be({},m.params,p.params),N=T.stringify(k)}const z=[];let U=T;for(;U;)z.unshift(U.record),U=U.parent;return{name:L,path:N,params:k,matched:z,meta:gE(z)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Eh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Th(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Ih(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Sp(t,e[i])<0?r=i:n=i+1}const s=_E(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function _E(t){let e=t;for(;e=e.parent;)if(Cp(e)&&Sp(t,e)===0)return e}function Cp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(vp," "),a=i.indexOf("="),c=ti(a<0?i:i.slice(0,a)),l=a<0?null:ti(i.slice(a+1));if(c in e){let h=e[c];$t(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function bh(t){let e="";for(let n in t){const r=t[n];if(n=Fv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&uc(i)):[r&&uc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const EE=Symbol(""),Ah=Symbol(""),il=Symbol(""),Pp=Symbol(""),fc=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Yr(4,{from:n,to:e})):m instanceof Error?l(m):sE(m)?l(Yr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Fa(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(_p(l)){const f=(l.__vccOpts||l)[e];f&&i.push(kn(f,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=Sv(f)?f.default:f;a.mods[c]=f,a.components[c]=p;const T=(p.__vccOpts||p)[e];return T&&kn(T,n,r,a,c,s)()}))}}return i}function Rh(t){const e=fn(il),n=fn(Pp),r=Mt(()=>{const l=pt(t.to);return e.resolve(l)}),s=Mt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Xr.bind(null,f));if(m>-1)return m;const T=Sh(l[h-2]);return h>1&&Sh(f)===T&&p[p.length-1].path!==T?p.findIndex(Xr.bind(null,l[h-2])):m}),i=Mt(()=>s.value>-1&&bE(n.params,r.value.params)),a=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Ip(n.params,r.value.params));function c(l={}){if(IE(l)){const h=e[pt(t.replace)?"replace":"push"](pt(t.to)).catch($s);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function TE(t){return t.length===1?t[0]:t}const wE=Bd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(t,{slots:e}){const n=Fo(Rh(t)),{options:r}=fn(il),s=Mt(()=>({[Ch(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ch(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&TE(e.default(n));return t.custom?i:rl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Vr=wE;function IE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Sh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ch=(t,e,n)=>t??e??n,AE=Bd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=fn(fc),s=Mt(()=>t.route||r.value),i=fn(Ah,0),a=Mt(()=>{let h=pt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Mt(()=>s.value.matched[a.value]);Wi(Ah,Mt(()=>a.value+1)),Wi(EE,c),Wi(fc,s);const l=Fn();return Qi(()=>[l.value,c.value,t.name],([h,f,p],[m,T,k])=>{f&&(f.instances[p]=h,T&&T!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=T.leaveGuards),f.updateGuards.size||(f.updateGuards=T.updateGuards))),h&&f&&(!T||!Xr(f,T)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Ph(n.default,{Component:m,route:h});const T=p.props[f],k=T?T===!0?h.params:typeof T=="function"?T(h):T:null,L=rl(m,be({},k,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Ph(n.default,{Component:L,route:h})||L}}});function Ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kp=AE;function RE(t){const e=dE(t.routes,t),n=t.parseQuery||yE,r=t.stringifyQuery||bh,s=t.history,i=ks(),a=ks(),c=ks(),l=O_(An);let h=An;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ma.bind(null,D=>""+D),p=Ma.bind(null,Bv),m=Ma.bind(null,ti);function T(D,J){let W,Y;return Ap(D)?(W=e.getRecordMatcher(D),Y=J):Y=D,e.addRoute(Y,W)}function k(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(D=>D.record)}function L(D){return!!e.getRecordMatcher(D)}function z(D,J){if(J=be({},J||l.value),typeof D=="string"){const S=La(n,D,J.path),O=e.resolve({path:S.path},J),M=s.createHref(S.fullPath);return be(S,O,{params:m(O.params),hash:ti(S.hash),redirectedFrom:void 0,href:M})}let W;if(D.path!=null)W=be({},D,{path:La(n,D.path,J.path).path});else{const S=be({},D.params);for(const O in S)S[O]==null&&delete S[O];W=be({},D,{params:p(S)}),J.params=p(J.params)}const Y=e.resolve(W,J),Te=D.hash||"";Y.params=f(m(Y.params));const E=Hv(r,be({},D,{hash:Lv(Te),path:Y.path})),w=s.createHref(E);return be({fullPath:E,hash:Te,query:r===bh?vE(D.query):D.query||{}},Y,{redirectedFrom:void 0,href:w})}function U(D){return typeof D=="string"?La(n,D,l.value.path):be({},D)}function B(D,J){if(h!==D)return Yr(8,{from:J,to:D})}function $(D){return A(D)}function ae(D){return $(be(U(D),{replace:!0}))}function re(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let Y=typeof W=="function"?W(D):W;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=U(Y):{path:Y},Y.params={}),be({query:D.query,hash:D.hash,params:Y.path!=null?{}:D.params},Y)}}function A(D,J){const W=h=z(D),Y=l.value,Te=D.state,E=D.force,w=D.replace===!0,S=re(W);if(S)return A(be(U(S),{state:typeof S=="object"?be({},Te,S.state):Te,force:E,replace:w}),J||W);const O=W;O.redirectedFrom=J;let M;return!E&&qv(r,Y,W)&&(M=Yr(16,{to:O,from:Y}),St(Y,Y,!0,!1)),(M?Promise.resolve(M):b(O,Y)).catch(V=>on(V)?on(V,2)?V:Nt(V):pe(V,O,Y)).then(V=>{if(V){if(on(V,2))return A(be({replace:w},U(V.to),{state:typeof V.to=="object"?be({},Te,V.to.state):Te,force:E}),J||O)}else V=I(O,Y,!0,w,Te);return R(O,Y,V),V})}function y(D,J){const W=B(D,J);return W?Promise.reject(W):Promise.resolve()}function _(D){const J=vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function b(D,J){let W;const[Y,Te,E]=SE(D,J);W=Fa(Y.reverse(),"beforeRouteLeave",D,J);for(const S of Y)S.leaveGuards.forEach(O=>{W.push(kn(O,D,J))});const w=y.bind(null,D,J);return W.push(w),_t(W).then(()=>{W=[];for(const S of i.list())W.push(kn(S,D,J));return W.push(w),_t(W)}).then(()=>{W=Fa(Te,"beforeRouteUpdate",D,J);for(const S of Te)S.updateGuards.forEach(O=>{W.push(kn(O,D,J))});return W.push(w),_t(W)}).then(()=>{W=[];for(const S of E)if(S.beforeEnter)if($t(S.beforeEnter))for(const O of S.beforeEnter)W.push(kn(O,D,J));else W.push(kn(S.beforeEnter,D,J));return W.push(w),_t(W)}).then(()=>(D.matched.forEach(S=>S.enterCallbacks={}),W=Fa(E,"beforeRouteEnter",D,J,_),W.push(w),_t(W))).then(()=>{W=[];for(const S of a.list())W.push(kn(S,D,J));return W.push(w),_t(W)}).catch(S=>on(S,8)?S:Promise.reject(S))}function R(D,J,W){c.list().forEach(Y=>_(()=>Y(D,J,W)))}function I(D,J,W,Y,Te){const E=B(D,J);if(E)return E;const w=J===An,S=Nr?history.state:{};W&&(Y||w?s.replace(D.fullPath,be({scroll:w&&S&&S.scroll},Te)):s.push(D.fullPath,Te)),l.value=D,St(D,J,W,w),Nt()}let v;function Se(){v||(v=s.listen((D,J,W)=>{if(!jt.listening)return;const Y=z(D),Te=re(Y);if(Te){A(be(Te,{replace:!0,force:!0}),Y).catch($s);return}h=Y;const E=l.value;Nr&&Yv(gh(E.fullPath,W.delta),zo()),b(Y,E).catch(w=>on(w,12)?w:on(w,2)?(A(be(U(w.to),{force:!0}),Y).then(S=>{on(S,20)&&!W.delta&&W.type===ni.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(W.delta&&s.go(-W.delta,!1),pe(w,Y,E))).then(w=>{w=w||I(Y,E,!1),w&&(W.delta&&!on(w,8)?s.go(-W.delta,!1):W.type===ni.pop&&on(w,20)&&s.go(-1,!1)),R(Y,E,w)}).catch($s)}))}let qe=ks(),Ne=ks(),me;function pe(D,J,W){Nt(D);const Y=Ne.list();return Y.length?Y.forEach(Te=>Te(D,J,W)):console.error(D),Promise.reject(D)}function Tt(){return me&&l.value!==An?Promise.resolve():new Promise((D,J)=>{qe.add([D,J])})}function Nt(D){return me||(me=!D,Se(),qe.list().forEach(([J,W])=>D?W(D):J()),qe.reset()),D}function St(D,J,W,Y){const{scrollBehavior:Te}=t;if(!Nr||!Te)return Promise.resolve();const E=!W&&Zv(gh(D.fullPath,0))||(Y||!W)&&history.state&&history.state.scroll||null;return Pd().then(()=>Te(D,J,E)).then(w=>w&&Xv(w)).catch(w=>pe(w,D,J))}const Ve=D=>s.go(D);let xe;const vn=new Set,jt={currentRoute:l,listening:!0,addRoute:T,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:N,resolve:z,options:t,push:$,replace:ae,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ne.add,isReady:Tt,install(D){const J=this;D.component("RouterLink",Vr),D.component("RouterView",kp),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(l)}),Nr&&!xe&&l.value===An&&(xe=!0,$(s.location).catch(Te=>{}));const W={};for(const Te in An)Object.defineProperty(W,Te,{get:()=>l.value[Te],enumerable:!0});D.provide(il,J),D.provide(Pp,bd(W)),D.provide(fc,l);const Y=D.unmount;vn.add(D),D.unmount=function(){vn.delete(D),vn.size<1&&(h=An,v&&v(),v=null,l.value=An,xe=!1,me=!1),Y()}}};function _t(D){return D.reduce((J,W)=>J.then(()=>_(W)),Promise.resolve())}return jt}function SE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>Xr(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Xr(h,l))||s.push(l))}return[n,r,s]}const cs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},CE={class:"app-wrapper"},PE={class:"navbar"},kE={class:"navbar-container"},DE={class:"navbar-links"},OE={class:"main-content"},NE={class:"footer"},VE={__name:"App",setup(t){return(e,n)=>(Dt(),Lt("div",CE,[Re("nav",PE,[Re("div",kE,[n[5]||(n[5]=Re("a",{class:"navbar-brand",href:"#"},"MARIECLAIRE OWENS",-1)),Re("div",DE,[Be(pt(Vr),{class:"nav-link",to:"/"},{default:ur(()=>n[0]||(n[0]=[Dr("Home")])),_:1}),Be(pt(Vr),{class:"nav-link",to:"/resumeandcv"},{default:ur(()=>n[1]||(n[1]=[Dr("Resume & CV")])),_:1}),Be(pt(Vr),{class:"nav-link",to:"/reel"},{default:ur(()=>n[2]||(n[2]=[Dr("Reel")])),_:1}),Be(pt(Vr),{class:"nav-link",to:"/gallery"},{default:ur(()=>n[3]||(n[3]=[Dr("Gallery")])),_:1}),Be(pt(Vr),{class:"nav-link",to:"/contact"},{default:ur(()=>n[4]||(n[4]=[Dr("Contact")])),_:1})])])]),Re("main",OE,[Be(pt(kp))]),Re("footer",NE,[Re("p",null,"© "+co(new Date().getFullYear())+" Marieclaire Owens",1)])]))}},xE=cs(VE,[["__scopeId","data-v-b1d23e8b"]]),ME={name:"Home"};function LE(t,e,n,r,s,i){return Dt(),Lt("div",null,e[0]||(e[0]=[hp(`<div class="main-content" data-v-3adc2abb><h1 data-v-3adc2abb>MARIECLAIRE OWENS</h1><div class="shape-container" data-v-3adc2abb><svg width="300" height="300" viewBox="0 0 300 300" data-v-3adc2abb><circle cx="150" cy="150" r="50" class="animated-circle" data-v-3adc2abb></circle><rect x="100" y="100" width="100" height="100" class="animated-square" data-v-3adc2abb></rect><polygon points="150,50 200,200 100,200" class="animated-triangle" data-v-3adc2abb></polygon></svg></div></div><div class="current-activities" data-v-3adc2abb><h2 data-v-3adc2abb>What&#39;s Keeping Me <span class="italicized" data-v-3adc2abb>Moving</span></h2><div class="cards" data-v-3adc2abb><div class="card card-circle" data-v-3adc2abb><h3 data-v-3adc2abb>Dancer&#39;s Choice</h3><p data-v-3adc2abb>June 21, 2025</p><p data-v-3adc2abb>Lopez Theater -- Falmouth, ME</p><a href="#" target="_blank" data-v-3adc2abb>Learn More</a></div><div class="card card-circle" data-v-3adc2abb><h3 data-v-3adc2abb>Serenade</h3><p data-v-3adc2abb>June 21, 2025</p><p data-v-3adc2abb>Lopez Theater -- Falmouth, ME</p><a href="#" target="_blank" data-v-3adc2abb>Learn More</a></div><div class="card card-circle" data-v-3adc2abb><h3 data-v-3adc2abb>Heels Dance Instructor</h3><p data-v-3adc2abb>Maine Dance Center -- 7:00 PM Wednesdays</p><p data-v-3adc2abb>Body Positive Dance -- 5:00 PM Thursdays</p><a href="#" target="_blank" data-v-3adc2abb>Learn More</a></div></div></div><div class="artistic-section" data-v-3adc2abb><h2 class="mb-3" data-v-3adc2abb>Artistic Statement</h2><p data-v-3adc2abb> Dance is my gateway to the world and the people around me. I see it as a universal language that allows us to express emotions and ideas beyond words. Through dance, I aim to share the intricacies of human connection while exploring the depth of the human experience. Geometrical shapes inspire my personal movement style, as I play with the juxtaposition of angles and curves. Musicality is central to my work, driving movements that oscillate between sharpness, suspension, and flow. I believe in the power of simplicity—when movement is purposeful, even the smallest gesture can leave a profound impact. I also embrace the influence of multiple dance styles, blending techniques to create work that reflects the interconnectedness of art. </p><div class="animated-lines" data-v-3adc2abb><svg width="100%" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg" data-v-3adc2abb><path d="M0 25 Q 75 -10, 150 25 T 300 25" stroke="gray" stroke-width="2" fill="none" stroke-dasharray="500" stroke-dashoffset="500" data-v-3adc2abb><animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0 25 Q 75 -10, 150 25 T 300 25;
                       M0 25 Q 75 60, 150 25 T 300 25;
                       M0 25 Q 75 -10, 150 25 T 300 25" data-v-3adc2abb></animate><animate attributeName="stroke-dashoffset" values="300; 0; 300" dur="8s" repeatCount="indefinite" data-v-3adc2abb></animate></path><line x1="150" y1="10" x2="150" y2="40" stroke="black" stroke-width="2" stroke-dasharray="30" stroke-dashoffset="30" data-v-3adc2abb><animate attributeName="stroke-dashoffset" values="20; 0; 20" dur="3s" repeatCount="indefinite" data-v-3adc2abb></animate></line></svg></div><p data-v-3adc2abb> In all my work, I strive to create a space for audiences to connect on their own terms. I want viewers to feel something, whether it’s understanding the narrative I’ve crafted or creating their own interpretation. My goal is to evoke emotions and invite reflection, ensuring that each person walks away with something meaningful. </p><p data-v-3adc2abb> If you had asked me 4 years ago about the relationship between dance and perfection, I would have said that dance strives for perfection. Now, dance is not about that at all, and rather the contrary. It’s about exploration and embracing the endless possibilities, flops, and failures of creation. Through this process, I hope to continue connecting with others and celebrating the beauty of movement as an art form. The road to perfection does not exist, but luckily there are an infinite amount of roads that lead to art. </p></div><div class="aboutme-section" data-v-3adc2abb><h2 class="mb-3" data-v-3adc2abb>About Me</h2><p data-v-3adc2abb> I grew up in Maine, where I began my dance journey at Maine State Ballet, immersing myself in the authentic Balanchine technique. Under the direction of Linda MacArthur Miele, the youngest dancer ever accepted into the New York City Ballet by George Balanchine, I had the privilege of performing some of his most iconic works. This experience gave me a deep appreciation for the strong foundations of ballet, Balanchine&#39;s technique, and the crucial elements of performance and musicality. My journey continued at Florida Southern College in Lakeland, where I am pursuing a Bachelor of Fine Arts in Dance Performance and Choreography, along with a major in Applied Mathematics and a minor in Computer Science. It was here that I discovered the world of modern and contemporary dance, and began to draw connections between my classical ballet training and these new forms. Over time, my dance exploration expanded into styles I had never before encountered, such as hip-hop and heels, which pushed me to challenge myself creatively and technically. Currently, I am teaching a heels class to adults, sharing my passion for dance exploration, creativity, and choreography and fostering confidence in others. I am grateful for the diverse experiences and opportunities that have shaped my artistic journey, and I continue to seek ways to blend my technical expertise with my love for creative expression. </p></div>`,4)]))}const FE=cs(ME,[["render",LE],["__scopeId","data-v-3adc2abb"]]),UE={name:"Docs"},BE={class:"resumeandcvpage"};function $E(t,e,n,r,s,i){return Dt(),Lt("div",BE,e[0]||(e[0]=[hp('<div class="docs-wrapper" data-v-cccc6b8b><div class="pdf-container" data-v-cccc6b8b><h3 data-v-cccc6b8b>Curriculum Vitae</h3><p data-v-cccc6b8b><a href="/DanceFiles/Cirriculum Vitae -2.pdf" download data-v-cccc6b8b>Click here</a> to download the document. </p><iframe src="/DanceFiles/Cirriculum Vitae -2.pdf" class="pdf-frame" title="CV PDF" data-v-cccc6b8b></iframe></div><div class="pdf-container" data-v-cccc6b8b><h3 data-v-cccc6b8b>Performance Resume</h3><p data-v-cccc6b8b><a href="/DanceFiles/Performance Resume-2.pdf" download data-v-cccc6b8b>Click here</a> to download the document. </p><iframe src="/DanceFiles/Performance Resume-2.pdf" class="pdf-frame" title="Performance Resume PDF" data-v-cccc6b8b></iframe></div></div>',1)]))}const jE=cs(UE,[["render",$E],["__scopeId","data-v-cccc6b8b"]]),HE={name:"Reel"},qE={class:"video-wrapper text-center"};function zE(t,e,n,r,s,i){return Dt(),Lt("div",qE,e[0]||(e[0]=[Re("div",{class:"video-border"},[Re("iframe",{width:"900",height:"506",src:"https://www.youtube.com/embed/LtZjtD8K56Q",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)]))}const KE=cs(HE,[["render",zE],["__scopeId","data-v-b042b4f2"]]),GE={class:"gallery-container"},WE={class:"gallery-grid"},QE=["onClick"],JE=["src"],XE=["src"],YE={__name:"Gallery",setup(t){const e=Fn(["/DancePics/main.jpg","/DancePics/emerging1.JPG","/DancePics/emerging2.JPG","/DancePics/flutes.jpg","/DancePics/image1.jpg","/DancePics/cobweb1.jpg","/DancePics/sorchia3.JPG","/DancePics/cobweb2.jpg","/DancePics/snow1.jpg","/DancePics/cobweb3.jpg","/DancePics/sorchia2.JPG","/DancePics/image4.jpg","/DancePics/cobweb4.jpg","/DancePics/souvenir.jpg","/DancePics/image2.jpg","/DancePics/image3.jpg","/DancePics/image5.jpg","/DancePics/raymonda.jpg","/DancePics/sorchia4.jpg"]),n=Fn(null),r=i=>{n.value=i},s=()=>{n.value=null};return(i,a)=>(Dt(),Lt("div",GE,[Re("div",WE,[(Dt(!0),Lt(xt,null,ry(e.value,(c,l)=>(Dt(),Lt("div",{key:l,class:"gallery-item",onClick:h=>r(c)},[Re("img",{src:c,alt:"gallery image"},null,8,JE)],8,QE))),128))]),n.value?(Dt(),Lt("div",{key:0,class:"modal-overlay",onClick:s},[Be(Zy,{name:"fade"},{default:ur(()=>[Re("img",{class:"modal-image",src:n.value,onClick:a[0]||(a[0]=mp(()=>{},["stop"]))},null,8,XE)]),_:1})])):My("",!0)]))}},ZE=cs(YE,[["__scopeId","data-v-dc95e160"]]),eT=()=>{};var kh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,a||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new nT;const m=i<<2|c>>4;if(r.push(m),h!==64){const T=c<<4&240|h>>2;if(r.push(T),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rT=function(t){const e=Dp(t);return Op.encodeByteArray(e,!0)},_o=function(t){return rT(t).replace(/\./g,"")},Np=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=()=>sT().__FIREBASE_DEFAULTS__,oT=()=>{if(typeof process>"u"||typeof kh>"u")return;const t=kh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},Ko=()=>{try{return eT()||iT()||oT()||aT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vp=t=>{var e,n;return(n=(e=Ko())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cT=t=>{const e=Vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xp=()=>{var t;return(t=Ko())===null||t===void 0?void 0:t.config},Mp=t=>{var e;return(e=Ko())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_o(JSON.stringify(n)),_o(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function fT(){var t;const e=(t=Ko())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mT(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _T(){return!fT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yT(){try{return typeof indexedDB=="object"}catch{return!1}}function vT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ET,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?TT(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new yn(s,c,r)}}function TT(t,e){return t.replace(wT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wT=/\{\$([^}]+)}/g;function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Dh(i)&&Dh(a)){if(!yr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bT(t,e){const n=new AT(t,e);return n.subscribe.bind(n)}class AT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PT(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CT(t){return t===lr?void 0:t}function PT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ST(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const DT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},OT=ge.INFO,NT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},VT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=OT,this._logHandler=VT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const xT=(t,e)=>e.some(n=>t instanceof n);let Oh,Nh;function MT(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LT(){return Nh||(Nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,dc=new WeakMap,Fp=new WeakMap,Ba=new WeakMap,al=new WeakMap;function FT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Un(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),al.set(e,t),e}function UT(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});dc.set(t,e)}let pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BT(t){pc=t(pc)}function $T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($a(this),e,...n);return Fp.set(r,e.sort?e.sort():[e]),Un(r)}:LT().includes(t)?function(...e){return t.apply($a(this),e),Un(Lp.get(this))}:function(...e){return Un(t.apply($a(this),e))}}function jT(t){return typeof t=="function"?$T(t):(t instanceof IDBTransaction&&UT(t),xT(t,MT())?new Proxy(t,pc):t)}function Un(t){if(t instanceof IDBRequest)return FT(t);if(Ba.has(t))return Ba.get(t);const e=jT(t);return e!==t&&(Ba.set(t,e),al.set(e,t)),e}const $a=t=>al.get(t);function HT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Un(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Un(a.result),l.oldVersion,l.newVersion,Un(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const qT=["get","getKey","getAll","getAllKeys","count"],zT=["put","add","delete","clear"],ja=new Map;function Vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return ja.set(e,i),i}BT(t=>({...t,get:(e,n,r)=>Vh(e,n)||t.get(e,n,r),has:(e,n)=>!!Vh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",xh="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new ol("@firebase/app"),WT="@firebase/app-compat",QT="@firebase/analytics-compat",JT="@firebase/analytics",XT="@firebase/app-check-compat",YT="@firebase/app-check",ZT="@firebase/auth",ew="@firebase/auth-compat",tw="@firebase/database",nw="@firebase/data-connect",rw="@firebase/database-compat",sw="@firebase/functions",iw="@firebase/functions-compat",ow="@firebase/installations",aw="@firebase/installations-compat",cw="@firebase/messaging",lw="@firebase/messaging-compat",uw="@firebase/performance",hw="@firebase/performance-compat",fw="@firebase/remote-config",dw="@firebase/remote-config-compat",pw="@firebase/storage",gw="@firebase/storage-compat",mw="@firebase/firestore",_w="@firebase/vertexai",yw="@firebase/firestore-compat",vw="firebase",Ew="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="[DEFAULT]",Tw={[gc]:"fire-core",[WT]:"fire-core-compat",[JT]:"fire-analytics",[QT]:"fire-analytics-compat",[YT]:"fire-app-check",[XT]:"fire-app-check-compat",[ZT]:"fire-auth",[ew]:"fire-auth-compat",[tw]:"fire-rtdb",[nw]:"fire-data-connect",[rw]:"fire-rtdb-compat",[sw]:"fire-fn",[iw]:"fire-fn-compat",[ow]:"fire-iid",[aw]:"fire-iid-compat",[cw]:"fire-fcm",[lw]:"fire-fcm-compat",[uw]:"fire-perf",[hw]:"fire-perf-compat",[fw]:"fire-rc",[dw]:"fire-rc-compat",[pw]:"fire-gcs",[gw]:"fire-gcs-compat",[mw]:"fire-fst",[yw]:"fire-fst-compat",[_w]:"fire-vertex","fire-js":"fire-js",[vw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map,ww=new Map,_c=new Map;function Mh(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(_c.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,t);for(const n of yo.values())Mh(n,t);for(const n of ww.values())Mh(n,t);return!0}function cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new hi("app","Firebase",Iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=Ew;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=xp()),!n)throw Bn.create("no-options");const i=yo.get(s);if(i){if(yr(n,i.options)&&yr(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new kT(s);for(const l of _c.values())a.addComponent(l);const c=new bw(n,r,a);return yo.set(s,c),c}function Bp(t=mc){const e=yo.get(t);if(!e&&t===mc&&xp())return Up();if(!e)throw Bn.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=Tw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(c.join(" "));return}Zr(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="firebase-heartbeat-database",Rw=1,ri="firebase-heartbeat-store";let Ha=null;function $p(){return Ha||(Ha=HT(Aw,Rw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function Sw(t){try{const n=(await $p()).transaction(ri),r=await n.objectStore(ri).get(jp(t));return await n.done,r}catch(e){if(e instanceof yn)dn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function Lh(t,e){try{const r=(await $p()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,jp(t)),await r.done}catch(n){if(n instanceof yn)dn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function jp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=1024,Pw=30;class kw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ow(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Pw){const a=Nw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fh(),{heartbeatsToSend:r,unsentEntries:s}=Dw(this._heartbeatsCache.heartbeats),i=_o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return dn.warn(n),""}}}function Fh(){return new Date().toISOString().substring(0,10)}function Dw(t,e=Cw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Uh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Uh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yT()?vT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uh(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}function Nw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){Zr(new vr("platform-logger",e=>new KT(e),"PRIVATE")),Zr(new vr("heartbeat",e=>new kw(e),"PRIVATE")),$n(gc,xh,t),$n(gc,xh,"esm2017"),$n("fire-js","")}Vw("");var xw="firebase",Mw="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(xw,Mw,"app");function ll(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lw=Hp,qp=new hi("auth","Firebase",Hp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new ol("@firebase/auth");function Fw(t,...e){vo.logLevel<=ge.WARN&&vo.warn(`Auth (${ls}): ${t}`,...e)}function Zi(t,...e){vo.logLevel<=ge.ERROR&&vo.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw ul(t,...e)}function Jt(t,...e){return ul(t,...e)}function zp(t,e,n){const r=Object.assign(Object.assign({},Lw()),{[e]:n});return new hi("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ul(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qp.create(t,...e)}function ce(t,e,...n){if(!t)throw ul(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function gn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uw(){return Bh()==="http:"||Bh()==="https:"}function Bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||pT()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=hT()||gT()}get(){return Bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qw=new di(3e4,6e4);function fl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,r,s={}){return Gp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=fi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return dT()||(h.referrerPolicy="no-referrer"),Kp.fetch()(await Wp(t,t.config.apiHost,n,c),h)})}async function Gp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jw),e);try{const s=new Kw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Bi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Bi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Bi(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zp(t,f,h);pn(t,f)}}catch(s){if(s instanceof yn)throw s;pn(t,"network-request-failed",{message:String(s)})}}async function zw(t,e,n,r,s={}){const i=await us(t,e,n,r,s);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?hl(t.config,s):`${t.config.apiScheme}://${s}`;return Hw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Kw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),qw.get())})}}function Bi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function Eo(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ww(t,e=!1){const n=Ir(t),r=await n.getIdToken(e),s=dl(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hs(qa(s.auth_time)),issuedAtTime:Hs(qa(s.iat)),expirationTime:Hs(qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function dl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Np(n);return s?JSON.parse(s):(Zi("Failed to decode base64 JWT payload"),null)}catch(s){return Zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $h(t){const e=dl(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&Qw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){var e;const n=t.auth,r=await t.getIdToken(),s=await si(t,Eo(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qp(i.providerUserInfo):[],c=Yw(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new vc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Xw(t){const e=Ir(t);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qp(t){return t.map(e=>{var{providerId:n}=e,r=ll(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t,e){const n=await Gp(t,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Wp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Kp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eI(t,e){return us(t,"POST","/v2/accounts:revokeToken",fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=$h(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new zr;return r&&(ce(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ww(this,e)}reload(){return Xw(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await si(this,Gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:$,isAnonymous:ae,providerData:re,stsTokenManager:A}=n;ce(B&&A,e,"internal-error");const y=zr.fromJSON(this.name,A);ce(typeof B=="string",e,"internal-error"),Rn(p,e.name),Rn(m,e.name),ce(typeof $=="boolean",e,"internal-error"),ce(typeof ae=="boolean",e,"internal-error"),Rn(T,e.name),Rn(k,e.name),Rn(N,e.name),Rn(L,e.name),Rn(z,e.name),Rn(U,e.name);const _=new Ft({uid:B,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:ae,photoURL:k,phoneNumber:T,tenantId:N,stsTokenManager:y,createdAt:z,lastLoginAt:U});return re&&Array.isArray(re)&&(_.providerData=re.map(b=>Object.assign({},b))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new zr;s.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await To(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new zr;c.updateFromIdToken(r);const l=new Ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;function hn(t){gn(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jp.type="NONE";const Hh=Jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eo(this.auth,{idToken:e}).catch(()=>{});return n?Ft._fromGetAccountInfoResponse(this.auth,n,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(hn(Hh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hn(Hh);const a=eo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await Eo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Ft._fromGetAccountInfoResponse(e,m,f)}else p=Ft._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Kr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ng(e))return"Blackberry";if(rg(e))return"Webos";if(Yp(e))return"Safari";if((e.includes("chrome/")||Zp(e))&&!e.includes("edge/"))return"Chrome";if(tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xp(t=ht()){return/firefox\//i.test(t)}function Yp(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zp(t=ht()){return/crios\//i.test(t)}function eg(t=ht()){return/iemobile/i.test(t)}function tg(t=ht()){return/android/i.test(t)}function ng(t=ht()){return/blackberry/i.test(t)}function rg(t=ht()){return/webos/i.test(t)}function pl(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tI(t=ht()){var e;return pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nI(){return mT()&&document.documentMode===10}function sg(t=ht()){return pl(t)||tg(t)||rg(t)||ng(t)||/windows phone/i.test(t)||eg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e=[]){let n;switch(t){case"Browser":n=qh(ht());break;case"Worker":n=`${qh(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e={}){return us(t,"GET","/v2/passwordPolicy",fl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=6;class oI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:iI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new rI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eo(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(pr(this));const n=e?Ir(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),n=new oI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gl(t){return Ir(t)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cI(t){ml=t}function lI(t){return ml.loadJS(t)}function uI(){return ml.gapiScript}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){const n=cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yr(i,e??{}))return s;pn(s,"already-initialized")}return n.initialize({options:e})}function dI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pI(t,e,n){const r=gl(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=og(e),{host:a,port:c}=gI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(yr(h,r.config.emulator)&&yr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,mI()}function og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gI(t){const e=og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Kh(a)}}}function Kh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return zw(t,"POST","/v1/accounts:signInWithIdp",fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="http://localhost";class Er extends ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ll(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:_I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends cg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends pi{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends pi{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends pi{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),a=Gh(r);return new es({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gh(r);return new es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wo(e,n,r,s)}}function lg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(t,i,e,r):i})}async function yI(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await si(t,lg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const a=dl(i.idToken);ce(a,r,"internal-error");const{sub:c}=a;return ce(t.uid===c,r,"user-mismatch"),es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e,n=!1){if(Gt(t.app))return Promise.reject(pr(t));const r="signIn",s=await lg(t,r,e),i=await es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function TI(t,e,n,r){return Ir(t).onIdTokenChanged(e,n,r)}function wI(t,e,n){return Ir(t).beforeAuthStateChanged(e,n)}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,bI=10;class hg extends ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);nI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hg.type="LOCAL";const AI=hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fg.type="SESSION";const dg=fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await RI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=_l("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function CI(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function PI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DI(){return pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebaseLocalStorageDb",OI=1,bo="firebaseLocalStorage",mg="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(t,e){return t.transaction([bo],e?"readwrite":"readonly").objectStore(bo)}function NI(){const t=indexedDB.deleteDatabase(gg);return new gi(t).toPromise()}function Ec(){const t=indexedDB.open(gg,OI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bo,{keyPath:mg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bo)?e(r):(r.close(),await NI(),e(await Ec()))})})}async function Wh(t,e,n){const r=Wo(t,!0).put({[mg]:e,value:n});return new gi(r).toPromise()}async function VI(t,e){const n=Wo(t,!1).get(e),r=await new gi(n).toPromise();return r===void 0?null:r.value}function Qh(t,e){const n=Wo(t,!0).delete(e);return new gi(n).toPromise()}const xI=800,MI=3;class _g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(DI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await Wh(e,Io,"1"),await Qh(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wo(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_g.type="LOCAL";const LI=_g;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e){return e?hn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UI(t){return EI(t.auth,new yl(t),t.bypassAuthState)}function BI(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),vI(n,new yl(t),t.bypassAuthState)}async function $I(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),yI(n,new yl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return $I;case"reauthViaPopup":case"reauthViaRedirect":return BI;default:pn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new di(2e3,1e4);class Ur extends yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jI.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="pendingRedirect",to=new Map;class qI extends yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(t,e){const n=WI(e),r=GI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function KI(t,e){to.set(t._key(),e)}function GI(t){return hn(t._redirectPersistence)}function WI(t){return eo(HI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){if(Gt(t.app))return Promise.reject(pr(t));const r=gl(t),s=FI(r,e),a=await new qI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jh(e))}saveEventToCache(e){this.cachedEventUids.add(Jh(e)),this.lastProcessedEventTime=Date.now()}}function Jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t0=/^https?/;async function n0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(r0(n))return}catch{}pn(t,"unauthorized-domain")}function r0(t){const e=yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!t0.test(n))return!1;if(e0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new di(3e4,6e4);function Xh(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function i0(t){return new Promise((e,n)=>{var r,s,i;function a(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),n(Jt(t,"network-request-failed"))},timeout:s0.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)a();else{const c=hI("iframefcb");return Xt()[c]=()=>{gapi.load?a():n(Jt(t,"network-request-failed"))},lI(`${uI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw no=null,e})}let no=null;function o0(t){return no=no||i0(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new di(5e3,15e3),c0="__/auth/iframe",l0="emulator/auth/iframe",u0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hl(e,l0):`https://${t.config.authDomain}/${c0}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=h0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fi(r).slice(1)}`}async function d0(t){const e=await o0(t),n=Xt().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:f0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(t,"network-request-failed"),c=Xt().setTimeout(()=>{i(a)},a0.get());function l(){Xt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g0=500,m0=600,_0="_blank",y0="http://localhost";class Yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v0(t,e,n,r=g0,s=m0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},p0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();n&&(c=Zp(h)?_0:n),Xp(h)&&(e=e||y0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(tI(h)&&c!=="_self")return E0(e||"",c),new Yh(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Yh(p)}function E0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="__/auth/handler",w0="emulator/auth/handler",I0=encodeURIComponent("fac");async function Zh(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof cg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",IT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof pi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${I0}=${encodeURIComponent(l)}`:"";return`${b0(t)}?${fi(c).slice(1)}${h}`}function b0({config:t}){return t.emulator?hl(t,w0):`https://${t.authDomain}/${T0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class A0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dg,this._completeRedirectFn=QI,this._overrideRedirectResult=KI}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Zh(e,n,r,yc(),s);return v0(e,a,_l())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zh(e,n,r,yc(),s);return CI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d0(e),r=new XI(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[za];a!==void 0&&n(!!a),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sg()||Yp()||pl()}}const R0=A0;var ef="@firebase/auth",tf="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P0(t){Zr(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ig(t)},h=new aI(r,s,i,l);return dI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new vr("auth-internal",e=>{const n=gl(e.getProvider("auth").getImmediate());return(r=>new S0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(ef,tf,C0(t)),$n(ef,tf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=5*60,D0=Mp("authIdTokenMaxAge")||k0;let nf=null;const O0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D0)return;const s=n==null?void 0:n.token;nf!==s&&(nf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function N0(t=Bp()){const e=cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fI(t,{popupRedirectResolver:R0,persistence:[LI,AI,dg]}),r=Mp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=O0(i.toString());wI(n,a,()=>a(n.currentUser)),TI(n,c=>a(c))}}const s=Vp("auth");return s&&pI(n,`http://${s}`),n}function V0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",V0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P0("Browser");var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,Eg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(b,R,I){for(var v=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)v[Se-2]=arguments[Se];return y.prototype[R].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)b[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],R=A.g[2];var I=A.g[3],v=y+(I^_&(R^I))+b[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=I+(R^y&(_^R))+b[1]+3905402710&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(_^I&(y^_))+b[2]+606105819&4294967295,R=I+(v<<17&4294967295|v>>>15),v=_+(y^R&(I^y))+b[3]+3250441966&4294967295,_=R+(v<<22&4294967295|v>>>10),v=y+(I^_&(R^I))+b[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(R^y&(_^R))+b[5]+1200080426&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(_^I&(y^_))+b[6]+2821735955&4294967295,R=I+(v<<17&4294967295|v>>>15),v=_+(y^R&(I^y))+b[7]+4249261313&4294967295,_=R+(v<<22&4294967295|v>>>10),v=y+(I^_&(R^I))+b[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(R^y&(_^R))+b[9]+2336552879&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(_^I&(y^_))+b[10]+4294925233&4294967295,R=I+(v<<17&4294967295|v>>>15),v=_+(y^R&(I^y))+b[11]+2304563134&4294967295,_=R+(v<<22&4294967295|v>>>10),v=y+(I^_&(R^I))+b[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(R^y&(_^R))+b[13]+4254626195&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(_^I&(y^_))+b[14]+2792965006&4294967295,R=I+(v<<17&4294967295|v>>>15),v=_+(y^R&(I^y))+b[15]+1236535329&4294967295,_=R+(v<<22&4294967295|v>>>10),v=y+(R^I&(_^R))+b[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^R&(y^_))+b[6]+3225465664&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^_&(I^y))+b[11]+643717713&4294967295,R=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(R^I))+b[0]+3921069994&4294967295,_=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(_^R))+b[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^R&(y^_))+b[10]+38016083&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^_&(I^y))+b[15]+3634488961&4294967295,R=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(R^I))+b[4]+3889429448&4294967295,_=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(_^R))+b[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^R&(y^_))+b[14]+3275163606&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^_&(I^y))+b[3]+4107603335&4294967295,R=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(R^I))+b[8]+1163531501&4294967295,_=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(_^R))+b[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^R&(y^_))+b[2]+4243563512&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^_&(I^y))+b[7]+1735328473&4294967295,R=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(R^I))+b[12]+2368359562&4294967295,_=R+(v<<20&4294967295|v>>>12),v=y+(_^R^I)+b[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^R)+b[8]+2272392833&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^_)+b[11]+1839030562&4294967295,R=I+(v<<16&4294967295|v>>>16),v=_+(R^I^y)+b[14]+4259657740&4294967295,_=R+(v<<23&4294967295|v>>>9),v=y+(_^R^I)+b[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^R)+b[4]+1272893353&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^_)+b[7]+4139469664&4294967295,R=I+(v<<16&4294967295|v>>>16),v=_+(R^I^y)+b[10]+3200236656&4294967295,_=R+(v<<23&4294967295|v>>>9),v=y+(_^R^I)+b[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^R)+b[0]+3936430074&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^_)+b[3]+3572445317&4294967295,R=I+(v<<16&4294967295|v>>>16),v=_+(R^I^y)+b[6]+76029189&4294967295,_=R+(v<<23&4294967295|v>>>9),v=y+(_^R^I)+b[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^R)+b[12]+3873151461&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^_)+b[15]+530742520&4294967295,R=I+(v<<16&4294967295|v>>>16),v=_+(R^I^y)+b[2]+3299628645&4294967295,_=R+(v<<23&4294967295|v>>>9),v=y+(R^(_|~I))+b[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~R))+b[7]+1126891415&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~_))+b[14]+2878612391&4294967295,R=I+(v<<15&4294967295|v>>>17),v=_+(I^(R|~y))+b[5]+4237533241&4294967295,_=R+(v<<21&4294967295|v>>>11),v=y+(R^(_|~I))+b[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~R))+b[3]+2399980690&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~_))+b[10]+4293915773&4294967295,R=I+(v<<15&4294967295|v>>>17),v=_+(I^(R|~y))+b[1]+2240044497&4294967295,_=R+(v<<21&4294967295|v>>>11),v=y+(R^(_|~I))+b[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~R))+b[15]+4264355552&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~_))+b[6]+2734768916&4294967295,R=I+(v<<15&4294967295|v>>>17),v=_+(I^(R|~y))+b[13]+1309151649&4294967295,_=R+(v<<21&4294967295|v>>>11),v=y+(R^(_|~I))+b[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~R))+b[11]+3174756917&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~_))+b[2]+718787259&4294967295,R=I+(v<<15&4294967295|v>>>17),v=_+(I^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,b=this.B,R=this.h,I=0;I<y;){if(R==0)for(;I<=_;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<y;)if(b[R++]=A.charCodeAt(I++),R==this.blockSize){s(this,b),R=0;break}}else for(;I<y;)if(b[R++]=A[I++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)A[_++]=this.g[y]>>>b&255;return A};function i(A,y){var _=c;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],b=!0,R=A.length-1;0<=R;R--){var I=A[R]|0;b&&I==y||(_[R]=I,b=!1)}this.g=_}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return L(h(-A));for(var y=[],_=1,b=0;A>=_;b++)y[b]=A/_|0,_*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return L(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var I=Math.min(8,A.length-R),v=parseInt(A.substring(R,R+I),y);8>I?(I=h(Math.pow(y,I)),b=b.j(I).add(h(v))):(b=b.j(_),b=b.add(h(v)))}return b}var p=l(0),m=l(1),T=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-L(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(N(this))return"-"+L(this).toString(A);for(var y=h(Math.pow(A,6)),_=this,b="";;){var R=$(_,y).g;_=z(_,R.j(y));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=R,k(_))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=z(this,A),N(A)?-1:k(A)?0:1};function L(A){for(var y=A.g.length,_=[],b=0;b<y;b++)_[b]=~A.g[b];return new a(_,~A.h).add(m)}t.abs=function(){return N(this)?L(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0,R=0;R<=y;R++){var I=b+(this.i(R)&65535)+(A.i(R)&65535),v=(I>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=v>>>16,I&=65535,v&=65535,_[R]=v<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(A,y){return A.add(L(y))}t.j=function(A){if(k(this)||k(A))return p;if(N(this))return N(A)?L(this).j(L(A)):L(L(this).j(A));if(N(A))return L(this.j(L(A)));if(0>this.l(T)&&0>A.l(T))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var I=this.i(b)>>>16,v=this.i(b)&65535,Se=A.i(R)>>>16,qe=A.i(R)&65535;_[2*b+2*R]+=v*qe,U(_,2*b+2*R),_[2*b+2*R+1]+=I*qe,U(_,2*b+2*R+1),_[2*b+2*R+1]+=v*Se,U(_,2*b+2*R+1),_[2*b+2*R+2]+=I*Se,U(_,2*b+2*R+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function U(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function B(A,y){this.g=A,this.h=y}function $(A,y){if(k(y))throw Error("division by zero");if(k(A))return new B(p,p);if(N(A))return y=$(L(A),y),new B(L(y.g),L(y.h));if(N(y))return y=$(A,L(y)),new B(L(y.g),y.h);if(30<A.g.length){if(N(A)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,b=y;0>=b.l(A);)_=ae(_),b=ae(b);var R=re(_,1),I=re(b,1);for(b=re(b,2),_=re(_,2);!k(b);){var v=I.add(b);0>=v.l(A)&&(R=R.add(_),I=v),b=re(b,1),_=re(_,1)}return y=z(A,R.j(y)),new B(R,y)}for(R=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=h(_),v=I.j(y);N(v)||0<v.l(A);)_-=b,I=h(_),v=I.j(y);k(I)&&(I=m),R=R.add(I),A=z(A,v)}return new B(R,A)}t.A=function(A){return $(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&A.i(b);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|A.i(b);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^A.i(b);return new a(_,this.h^A.h)};function ae(A){for(var y=A.g.length+1,_=[],b=0;b<y;b++)_[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(_,A.h)}function re(A,y){var _=y>>5;y%=32;for(var b=A.g.length-_,R=[],I=0;I<b;I++)R[I]=0<y?A.i(I+_)>>>y|A.i(I+_+1)<<32-y:A.i(I+_);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Eg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,jn=a}).apply(typeof rf<"u"?rf:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tg,Os,wg,ro,Tc,Ig,bg,Ag;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in d))break e;d=d[C]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,C={next:function(){if(!g&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var q=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)q[Ce-2]=arguments[Ce];return u.prototype[C].apply(g,q)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function L(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let q=0;q<P;q++)o[C+q]=g[q]}else o.push(g)}}class z{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var ae=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function re(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)o[d]=g[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function I(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Tt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,d){const g=qe.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new z(()=>new Ne,o=>o.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,Tt=new Se,Nt=()=>{const o=c.Promise.resolve(void 0);me=()=>{o.then(St)}};var St=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){I(d)}var u=qe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function jt(o,u){if(xe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ae){e:{try{$(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_t[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jt.aa.h.call(this)}}k(jt,xe);var _t={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(o,u,d,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Te(o){this.src=o,this.g={},this.h=0}Te.prototype.add=function(o,u,d,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var q=w(o,u,g,C);return-1<q?(u=o[q],d||(u.fa=!1)):(u=new W(u,this.src,P,!!g,C),u.fa=d,o.push(u)),u};function E(o,u){var d=u.type;if(d in o.g){var g=o.g[d],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Y(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function w(o,u,d,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==g)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),O={};function M(o,u,d,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(o,u[P],d,g,C);return null}return d=se(d),o&&o[D]?o.K(u,d,h(g)?!!g.capture:!1,C):V(o,u,d,!1,g,C)}function V(o,u,d,g,C,P){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,Ce=Q(o);if(Ce||(o[S]=Ce=new Te(o)),d=Ce.add(u,d,g,q,P),d.proxy)return d;if(g=G(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)vn||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=ee;return o}function H(o,u,d,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)H(o,u[P],d,g,C);else g=h(g)?!!g.capture:!!g,d=se(d),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=w(P,d,g,C),-1<d&&(Y(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,d,g,C)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])E(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(F(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(E(d,o),d.h==0&&(d.src=null,u[S]=null)):Y(o)}}}function F(o){return o in O?O[o]:O[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new jt(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&j(o),o=d.call(g,u)}return o}function Q(o){return o=o[S],o instanceof Te?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function te(){Ve.call(this),this.i=new Te(this),this.M=this,this.F=null}k(te,Ve),te.prototype[D]=!0,te.prototype.removeEventListener=function(o,u,d,g){H(this,o,u,d,g)};function he(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new xe(u,o);else if(u instanceof xe)u.target=u.target||o;else{var C=u;u=new xe(g,o),b(u,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var q=u.g=d[P];C=_e(q,g,!0,u)&&C}if(q=u.g=o,C=_e(q,g,!0,u)&&C,C=_e(q,g,!1,u)&&C,d)for(P=0;P<d.length;P++)q=u.g=d[P],C=_e(q,g,!1,u)&&C}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Y(d[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},te.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function _e(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==d){var Ce=q.listener,Xe=q.ha||q.src;q.fa&&E(o.i,q),C=Ce.call(Xe,g)!==!1&&C}}return C&&!g.defaultPrevented}function et(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Qe(o){o.g=et(()=>{o.g=null,o.i&&(o.i=!1,Qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ct extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){Ve.call(this),this.h=o,this.g={}}k(tt,Ve);var En=[];function gs(o){re(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),gs(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=c.JSON.stringify,Pt=c.JSON.parse,Ei=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function aa(){}aa.prototype.h=null;function Bl(o){return o.h||(o.h=o.i())}function $l(){}var ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ca(){xe.call(this,"d")}k(ca,xe);function la(){xe.call(this,"c")}k(la,xe);var er={},jl=null;function Ti(){return jl=jl||new te}er.La="serverreachability";function Hl(o){xe.call(this,er.La,o)}k(Hl,xe);function _s(o){const u=Ti();he(u,new Hl(u))}er.STAT_EVENT="statevent";function ql(o,u){xe.call(this,er.STAT_EVENT,o),this.stat=u}k(ql,xe);function ft(o){const u=Ti();he(u,new ql(u,o))}er.Ma="timingevent";function zl(o,u){xe.call(this,er.Ma,o),this.size=u}k(zl,xe);function ys(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function vs(){this.g=!0}vs.prototype.xa=function(){this.g=!1};function km(o,u,d,g,C,P){o.info(function(){if(o.g)if(P)for(var q="",Ce=P.split("&"),Xe=0;Xe<Ce.length;Xe++){var we=Ce[Xe].split("=");if(1<we.length){var nt=we[0];we=we[1];var rt=nt.split("_");q=2<=rt.length&&rt[1]=="type"?q+(nt+"="+we+"&"):q+(nt+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+q})}function Dm(o,u,d,g,C,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+P+" "+q})}function Ar(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nm(o,d)+(g?" "+g:"")})}function Om(o,u){o.info(function(){return"TIMEOUT: "+u})}vs.prototype.info=function(){};function Nm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return Je(d)}catch{return u}}var wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ua;function Ii(){}k(Ii,aa),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},ua=new Ii;function Tn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gl}function Gl(){this.i=null,this.g="",this.h=!1}var Wl={},ha={};function fa(o,u,d){o.L=1,o.v=Si(tn(u)),o.m=d,o.P=!0,Ql(o,null)}function Ql(o,u){o.F=Date.now(),bi(o),o.A=tn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),lu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Gl,o.g=Su(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ct(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(En[0]=C.toString()),C=En);for(var P=0;P<C.length;P++){var q=M(d,C[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),_s(),km(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=nn(this.g);var u=this.g.Ba();const Cr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Cr?_s(3):_s(2)),da(this);var d=this.g.Z();this.X=d;t:if(Jl(this)){var g=mu(this.g);o="";var C=g.length,P=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Es(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,Dm(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Xe=this.g;if((Ce=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ce)){var we=Ce;break t}}we=null}if(d=we)Ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pa(this,d);else{this.o=!1,this.s=3,ft(12),tr(this),Es(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<q.length;)if(Vt=Vm(this,q),Vt==ha){rt==4&&(this.s=4,ft(14),d=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Wl){this.s=4,ft(15),Ar(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else Ar(this.i,this.l,Vt,null),pa(this,Vt);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||q.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)Ar(this.i,this.l,q,"[Invalid Chunked Response]"),tr(this),Es(this);else if(0<q.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ea(nt),nt.M=!0,ft(11))}}else Ar(this.i,this.l,q,null),pa(this,q);rt==4&&tr(this),this.o&&!this.J&&(rt==4?Iu(this.j,this):(this.o=!1,bi(this)))}else Xm(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),tr(this),Es(this)}}}catch{}finally{}};function Jl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vm(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?ha:(d=Number(u.substring(d,g)),isNaN(d)?Wl:(g+=1,g+d>u.length?ha:(u=u.slice(g,g+d),o.C=g+d,u)))}Tn.prototype.cancel=function(){this.J=!0,tr(this)};function bi(o){o.S=Date.now()+o.I,Xl(o,o.I)}function Xl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ys(m(o.ba,o),u)}function da(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Om(this.i,this.A),this.L!=2&&(_s(),ft(17)),tr(this),this.s=2,Es(this)):Xl(this,this.S-o)};function Es(o){o.j.G==0||o.J||Iu(o.j,o)}function tr(o){da(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,gs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function pa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ga(d.h,o))){if(!o.K&&ga(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ni(d),Di(d);else break e;va(d),ft(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ys(m(d.Za,d),6e3));if(1>=eu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else rr(d,11)}else if((o.K||d.g==o)&&Ni(d),!U(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let we=C[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const nt=we[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=we[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const Cr=we[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(g=1.5*Cr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Vt=o.g;if(Vt){const xi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var P=g.h;P.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ma(P,P.h),P.h=null))}if(g.D){const Ta=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ta&&(g.ya=Ta,De(g.I,g.D,Ta))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var q=o;if(g.qa=Ru(g,g.J?g.ia:null,g.W),q.K){tu(g.h,q);var Ce=q,Xe=g.L;Xe&&(Ce.I=Xe),Ce.B&&(da(Ce),bi(Ce)),g.g=q}else Tu(g);0<d.i.length&&Oi(d)}else we[0]!="stop"&&we[0]!="close"||rr(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?rr(d,7):ya(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}_s(4)}catch{}}var xm=class{constructor(o,u){this.g=o,this.map=u}};function Yl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function eu(o){return o.h?1:o.g?o.g.size:0}function ga(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ma(o,u){o.g?o.g.add(u):o.h=u}function tu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Yl.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function Mm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function Lm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function ru(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Lm(o),g=Mm(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],d&&d[P],o)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),C=null;if(0<=g){var P=o[d].substring(0,g);C=o[d].substring(g+1)}else P=o[d];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,Ai(this,o.j),this.o=o.o,this.g=o.g,Ri(this,o.s),this.l=o.l;var u=o.i,d=new Is;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),iu(this,d),this.m=o.m}else o&&(u=String(o).match(su))?(this.h=!1,Ai(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Ri(this,u[4]),this.l=Ts(u[5]||"",!0),iu(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ws(u,ou,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ws(u,ou,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ws(d,d.charAt(0)=="/"?$m:Bm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ws(d,Hm)),o.join("")};function tn(o){return new nr(o)}function Ai(o,u,d){o.j=d?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ri(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function iu(o,u,d){u instanceof Is?(o.i=u,qm(o.i,o.h)):(d||(u=ws(u,jm)),o.i=new Is(u,o.h))}function De(o,u,d){o.i.set(u,d)}function Si(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ws(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ou=/[#\/\?@]/g,Bm=/[#\?:]/g,$m=/[#\?]/g,jm=/[#\?@]/g,Hm=/#/g;function Is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&Fm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Is.prototype,t.add=function(o,u){wn(this),this.i=null,o=Rr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function au(o,u){wn(o),u=Rr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function cu(o,u){return wn(o),u=Rr(o,u),o.g.has(u)}t.forEach=function(o,u){wn(this),this.g.forEach(function(d,g){d.forEach(function(C){o.call(u,C,g,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)d.push(u[g])}return d},t.V=function(o){wn(this);let u=[];if(typeof o=="string")cu(this,o)&&(u=u.concat(this.g.get(Rr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return wn(this),this.i=null,o=Rr(this,o),cu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function lu(o,u,d){au(o,u),0<d.length&&(o.i=null,o.g.set(Rr(o,u),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const P=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var C=P;q[g]!==""&&(C+="="+encodeURIComponent(String(q[g]))),o.push(C)}}return this.i=o.join("&")};function Rr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function qm(o,u){u&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(au(this,g),lu(this,C,d))},o)),o.j=u}function zm(o,u){const d=new vs;if(c.Image){const g=new Image;g.onload=T(In,d,"TestLoadImage: loaded",!0,u,g),g.onerror=T(In,d,"TestLoadImage: error",!1,u,g),g.onabort=T(In,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(In,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Km(o,u){const d=new vs,g=new AbortController,C=setTimeout(()=>{g.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Gm(){this.g=new Ei}function Wm(o,u,d){const g=d||"";try{ru(o,function(C,P){let q=C;h(C)&&(q=Je(C)),u.push(g+P+"="+encodeURIComponent(q))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Ci(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ci,aa),Ci.prototype.g=function(){return new Pi(this.l,this.j)},Ci.prototype.i=function(o){return function(){return o}}({});function Pi(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Pi,te),t=Pi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):As(this),this.readyState==3&&uu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},t.Qa=function(o){this.g&&(this.response=o,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hu(o){let u="";return re(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function _a(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=hu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Le(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Le,te);var Qm=/^https?$/i,Jm=["POST","PUT"];t=Le.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ua.g(),this.v=this.o?Bl(this.o):Bl(ua),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){fu(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jm,u,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of d)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){fu(this,P)}};function fu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,du(o),ki(o)}function du(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pu(this):this.bb())},t.bb=function(){pu(this)};function pu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)et(o.Ea,0,o);else if(he(o,"readystatechange"),nn(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=q===0){var C=String(o.D).match(su)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Qm.test(C?C.toLowerCase():"")}d=g}if(d)he(o,"complete"),he(o,"success");else{o.m=6;try{var P=2<nn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",du(o)}}finally{ki(o)}}}}function ki(o,u){if(o.g){gu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||he(o,"ready");try{d.onreadystatechange=g}catch{}}}function gu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pt(u)}};function mu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xm(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var d=R(o[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[C]||[];u[C]=P,P.push(d)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function _u(o){this.Aa=0,this.i=[],this.j=new vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,o),this.cb=Rs("retryDelaySeedMs",1e4,o),this.Wa=Rs("forwardChannelMaxRetries",2,o),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yl(o&&o.concurrentRequestLimit),this.Da=new Gm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_u.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,g){ft(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ru(this,null,this.W),Oi(this)};function ya(o){if(yu(o),o.G==3){var u=o.U++,d=tn(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Ss(o,d),u=new Tn(o,o.j,u),u.L=2,u.v=Si(tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Su(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bi(u)}Au(o)}function Di(o){o.g&&(Ea(o),o.g.cancel(),o.g=null)}function yu(o){Di(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ni(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Oi(o){if(!Zl(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||Nt(),pe||(me(),pe=!0),Tt.add(u,o),o.B=0}}function Ym(o,u){return eu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ys(m(o.Ga,o,u),bu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Tn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),b(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Eu(this,C,u),d=tn(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ss(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(hu(P)))+"&"+u:this.m&&_a(d,this.m,P)),ma(this.h,C),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),C.T=!0,fa(C,d,null)):fa(C,d,u),this.G=2}}else this.G==3&&(o?vu(this,o):this.i.length==0||Zl(this.h)||vu(this))};function vu(o,u){var d;u?d=u.l:d=o.U++;const g=tn(o.I);De(g,"SID",o.K),De(g,"RID",d),De(g,"AID",o.T),Ss(o,g),o.m&&o.o&&_a(g,o.m,o.o),d=new Tn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Eu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ma(o.h,d),fa(d,g,u)}function Ss(o,u){o.H&&re(o.H,function(d,g){De(u,g,d)}),o.l&&ru({},function(d,g){De(u,g,d)})}function Eu(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const q=["count="+d];P==-1?0<d?(P=C[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let Ce=!0;for(let Xe=0;Xe<d;Xe++){let we=C[Xe].g;const nt=C[Xe].map;if(we-=P,0>we)P=Math.max(0,C[Xe].g-100),Ce=!1;else try{Wm(nt,q,"req"+we+"_")}catch{g&&g(nt)}}if(Ce){g=q.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function Tu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||Nt(),pe||(me(),pe=!0),Tt.add(u,o),o.v=0}}function va(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ys(m(o.Fa,o),bu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ys(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Di(this),wu(this))};function Ea(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function wu(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Ss(o,u),o.m&&o.o&&_a(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Si(tn(u)),d.m=null,d.P=!0,Ql(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Di(this),va(this),ft(19))};function Ni(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Iu(o,u){var d=null;if(o.g==u){Ni(o),Ea(o),o.g=null;var g=2}else if(ga(o.h,u))d=u.D,tu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Ti(),he(g,new zl(g,d)),Oi(o)}else Tu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Ym(o,u)||g==2&&va(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function bu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const C=!g;g=new nr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ai(g,"https"),Si(g),C?zm(g.toString(),d):Km(g.toString(),d)}else ft(2);o.G=0,o.l&&o.l.sa(u),Au(o),yu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Au(o){if(o.G=0,o.ka=[],o.l){const u=nu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Ru(o,u,d){var g=d instanceof nr?tn(d):new nr(d);if(g.g!="")u&&(g.g=u+"."+g.g),Ri(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new nr(null);g&&Ai(P,g),u&&(P.g=u),C&&Ri(P,C),d&&(P.l=d),g=P}return d=o.D,u=o.ya,d&&u&&De(g,d,u),De(g,"VER",o.la),Ss(o,g),g}function Su(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Le(new Ci({eb:d})):new Le(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}t=Cu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vi(){}Vi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){te.call(this),this.g=new _u(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}k(wt,te),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ya(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Je(o),o=d);u.i.push(new xm(u.Ya++,o)),u.G==3&&Oi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,wt.aa.N.call(this)};function Pu(o){ca.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Pu,ca);function ku(){la.call(this),this.status=1}k(ku,la);function Sr(o){this.g=o}k(Sr,Cu),Sr.prototype.ua=function(){he(this.g,"a")},Sr.prototype.ta=function(o){he(this.g,new Pu(o))},Sr.prototype.sa=function(o){he(this.g,new ku)},Sr.prototype.ra=function(){he(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Ag=function(){return new Vi},bg=function(){return Ti()},Ig=er,Tc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,ro=wi,Kl.COMPLETE="complete",wg=Kl,$l.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",te.prototype.listen=te.prototype.K,Os=$l,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,Tg=Le}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const sf="@firebase/firestore",of="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ol("@firebase/firestore");function xr(){return Tr.logLevel}function X(t,...e){if(Tr.logLevel<=ge.DEBUG){const n=e.map(vl);Tr.debug(`Firestore (${hs}): ${t}`,...n)}}function mn(t,...e){if(Tr.logLevel<=ge.ERROR){const n=e.map(vl);Tr.error(`Firestore (${hs}): ${t}`,...n)}}function ts(t,...e){if(Tr.logLevel<=ge.WARN){const n=e.map(vl);Tr.warn(`Firestore (${hs}): ${t}`,...n)}}function vl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Me(t,e){t||fe()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class M0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L0{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new Rg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new it(e)}}class F0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class U0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new F0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class af{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B0{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Gt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new af(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new af(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function wc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return de(r,s);{const i=Sg(),a=H0(i.encode(cf(t,n)),i.encode(cf(e,n)));return a!==0?a:de(r,s)}}n+=r>65535?2:1}return de(t.length,e.length)}function cf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function H0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return de(t[n],e[n]);return de(t.length,e.length)}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=-62135596800,uf=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*uf);return new Et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lf)throw new ne(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uf}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Et(0,0))}static max(){return new le(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="__name__";class zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=zt.isNumericId(e),s=zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?zt.extractNumericId(e).compare(zt.extractNumericId(n)):wc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class Fe extends zt{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const q0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends zt{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return q0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hf}static keyField(){return new mt([hf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new ne(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Fe.fromString(e))}static fromName(e){return new oe(Fe.fromString(e).popFirst(5))}static empty(){return new oe(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=-1;function z0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new zn(s,oe.empty(),e)}function K0(t){return new zn(t.readTime,t.key,ii)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(le.min(),oe.empty(),ii)}static max(){return new zn(le.max(),oe.empty(),ii)}}function G0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==W0)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function J0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jo.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=-1;function Xo(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="";function Y0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ff(e)),e=Z0(t.get(n),e);return ff(e)}function Z0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Cg:n+="";break;default:n+=i}}return n}function ff(t){return t+Cg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pf(this.data.getIterator())}getIteratorFrom(e){return new pf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class pf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new xn([])}unionWith(e){let n=new Ke(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pg("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=tb.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="server_timestamp",Dg="__type__",Og="__previous_value__",Ng="__local_write_time__";function El(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dg])===null||n===void 0?void 0:n.stringValue)===kg}function Yo(t){const e=t.mapValue.fields[Og];return El(e)?Yo(e):e}function oi(t){const e=Kn(t.mapValue.fields[Ng].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const Ao="(default)";class ai{constructor(e,n){this.projectId=e,this.database=n||Ao}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="__type__",sb="__max__",Hi={mapValue:{}},ib="__vector__",bc="value";function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?El(t)?4:ab(t)?9007199254740991:ob(t)?10:11:fe()}function Zt(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),c=Kn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Gn(s.bytesValue).isEqual(Gn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ue(s.doubleValue),c=Ue(i.doubleValue);return a===c?Ic(a)===Ic(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(df(a)!==df(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Zt(a[l],c[l])))return!1;return!0}(t,e);default:return fe()}}function ci(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=Wn(t),r=Wn(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ue(i.integerValue||i.doubleValue),l=Ue(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(oi(t),oi(e));case 5:return wc(t.stringValue,e.stringValue);case 6:return function(i,a){const c=Gn(i),l=Gn(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=de(c[h],l[h]);if(f!==0)return f}return de(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=de(Ue(i.latitude),Ue(a.latitude));return c!==0?c:de(Ue(i.longitude),Ue(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const p=i.fields||{},m=a.fields||{},T=(c=p[bc])===null||c===void 0?void 0:c.arrayValue,k=(l=m[bc])===null||l===void 0?void 0:l.arrayValue,N=de(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:mf(T,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Hi.mapValue&&a===Hi.mapValue)return 0;if(i===Hi.mapValue)return 1;if(a===Hi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=wc(l[p],f[p]);if(m!==0)return m;const T=rs(c[l[p]],h[f[p]]);if(T!==0)return T}return de(l.length,f.length)}(t.mapValue,e.mapValue);default:throw fe()}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Kn(t),r=Kn(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function mf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=rs(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function ss(t){return Ac(t)}function Ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ac(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ac(n.fields[a])}`;return s+"}"}(t.mapValue):fe()}function so(t){switch(Wn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yo(t);return e?16+so(e):16;case 5:return 2*t.stringValue.length;case 6:return Gn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+so(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return mi(r.fields,(i,a)=>{s+=i.length+so(a)}),s}(t.mapValue);default:throw fe()}}function Rc(t){return!!t&&"integerValue"in t}function Tl(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function ob(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[rb])===null||n===void 0?void 0:n.stringValue)===ib}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=qs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ka(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(qs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,le.min(),le.min(),le.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,le.min(),le.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,le.min(),le.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(a.referenceValue),n.key):r=rs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{}class ze extends Vg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ub(e,n,r):n==="array-contains"?new db(e,r):n==="in"?new pb(e,r):n==="not-in"?new gb(e,r):n==="array-contains-any"?new mb(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hb(e,r):new fb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends Vg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new en(e,n)}matches(e){return xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function xg(t){return t.op==="and"}function Mg(t){return lb(t)&&xg(t)}function lb(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Sc(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(Mg(t))return t.filters.map(e=>Sc(e)).join(",");{const e=t.filters.map(n=>Sc(n)).join(",");return`${t.op}(${e})`}}function Lg(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Lg(a,s.filters[c]),!0):!1}(t,e):void fe()}function Fg(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(Fg).join(" ,")+"}"}(t):"Filter"}class ub extends ze{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class hb extends ze{constructor(e,n){super(e,"in",n),this.keys=Ug("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fb extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Ug("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ug(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class db extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tl(n)&&ci(n.arrayValue,this.value)}}class pb extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ci(this.value.arrayValue,n)}}class gb extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ci(this.value.arrayValue,n)}}class mb extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ci(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.le=null}}function Tf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new _b(t,e,n,r,s,i,a)}function wl(t){const e=ve(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.le=n}return e.le}function Il(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function Cc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function yb(t,e,n,r,s,i,a,c){return new Zo(t,e,n,r,s,i,a,c)}function Bg(t){return new Zo(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vb(t){return t.collectionGroup!==null}function zs(t){const e=ve(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(mt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new So(i,r))}),n.has(mt.keyField().canonicalString())||e.he.push(new So(mt.keyField(),r))}return e.he}function Yt(t){const e=ve(t);return e.Pe||(e.Pe=Eb(e,zs(t))),e.Pe}function Eb(t,e){if(t.limitType==="F")return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new So(s.field,i)});const n=t.endAt?new Ro(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ro(t.startAt.position,t.startAt.inclusive):null;return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pc(t,e,n){return new Zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ea(t,e){return Il(Yt(t),Yt(e))&&t.limitType===e.limitType}function $g(t){return`${wl(Yt(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fg(s)).join(", ")}]`),Xo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ss(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ta(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=vf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,zs(r),s)||r.endAt&&!function(a,c,l){const h=vf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,zs(r),s))}(t,e)}function Tb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=wb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wb(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new je(oe.comparator);function Qn(){return Ib}const Hg=new je(oe.comparator);function Ns(...t){let e=Hg;for(const n of t)e=e.insert(n.key,n);return e}function bb(t){let e=Hg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return Ks()}function qg(){return Ks()}function Ks(){return new br(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ab=new Ke(oe.comparator);function Ee(...t){let e=Ab;for(const n of t)e=e.add(n);return e}const Rb=new Ke(de);function Sb(){return Rb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function Pb(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this._=void 0}}function kb(t,e,n){return t instanceof kc?function(s,i){const a={fields:{[Dg]:{stringValue:kg},[Ng]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&El(i)&&(i=Yo(i)),i&&(a.fields[Og]=i),{mapValue:a}}(n,e):t instanceof Co?zg(t,e):t instanceof Po?Kg(t,e):function(s,i){const a=Ob(s,i),c=If(a)+If(s.Ie);return Rc(a)&&Rc(s.Ie)?Pb(c):Cb(s.serializer,c)}(t,e)}function Db(t,e,n){return t instanceof Co?zg(t,e):t instanceof Po?Kg(t,e):n}function Ob(t,e){return t instanceof Dc?function(r){return Rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class kc extends na{}class Co extends na{constructor(e){super(),this.elements=e}}function zg(t,e){const n=Gg(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Po extends na{constructor(e){super(),this.elements=e}}function Kg(t,e){let n=Gg(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class Dc extends na{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function If(t){return Ue(t.integerValue||t.doubleValue)}function Gg(t){return Tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Nb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Co&&s instanceof Co||r instanceof Po&&s instanceof Po?ns(r.elements,s.elements,Zt):r instanceof Dc&&s instanceof Dc?Zt(r.Ie,s.Ie):r instanceof kc&&s instanceof kc}(t.transform,e.transform)}class mr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bl{}function Wg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xb(t.key,mr.none()):new Al(t.key,t.data,mr.none());{const n=t.data,r=Wt.empty();let s=new Ke(mt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ra(t.key,r,new xn(s.toArray()),mr.none())}}function Vb(t,e,n){t instanceof Al?function(s,i,a){const c=s.value.clone(),l=Af(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ra?function(s,i,a){if(!io(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Af(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Qg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof Al?function(i,a,c,l){if(!io(i.precondition,a))return c;const h=i.value.clone(),f=Rf(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ra?function(i,a,c,l){if(!io(i.precondition,a))return c;const h=Rf(i.fieldTransforms,l,a),f=a.data;return f.setAll(Qg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return io(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,a)=>Nb(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends bl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ra extends bl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Db(a,c,n[s]))}return r}function Rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,kb(i,a,e))}return r}class xb extends bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Wg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>bf(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>bf(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ye;function Jg(t){if(t===void 0)return mn("GRPC error has no .code"),K.UNKNOWN;switch(t){case He.OK:return K.OK;case He.CANCELLED:return K.CANCELLED;case He.UNKNOWN:return K.UNKNOWN;case He.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case He.INTERNAL:return K.INTERNAL;case He.UNAVAILABLE:return K.UNAVAILABLE;case He.UNAUTHENTICATED:return K.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case He.NOT_FOUND:return K.NOT_FOUND;case He.ALREADY_EXISTS:return K.ALREADY_EXISTS;case He.PERMISSION_DENIED:return K.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case He.ABORTED:return K.ABORTED;case He.OUT_OF_RANGE:return K.OUT_OF_RANGE;case He.UNIMPLEMENTED:return K.UNIMPLEMENTED;case He.DATA_LOSS:return K.DATA_LOSS;default:return fe()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new jn([4294967295,4294967295],0);function Sf(t){const e=Sg().encode(t),n=new Eg;return n.update(e),new Uint8Array(n.digest())}function Cf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([n,r],0),new jn([s,i],0)]}class Rl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=jn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(jn.fromNumber(r)));return s.compare(Ub)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Rl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,_i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sa(le.min(),s,new je(de),Qn(),Ee())}}class _i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _i(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Xg{constructor(e,n){this.targetId=e,this.ge=n}}class Yg{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.pe=0,this.ye=kf(),this.we=Ze.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ee(),n=Ee(),r=Ee();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new _i(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=kf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Me(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Bb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Qn(),this.$e=qi(),this.Ue=qi(),this.Ke=new je(de)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Cc(i))if(r===0){const a=new oe(i.path);this.ze(n,a,ct.newNoDocument(a,le.min()))}else Me(r===1);else{const a=this.et(n);if(a!==r){const c=this.tt(e),l=c?this.nt(c,e,a):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Gn(r).toUint8Array()}catch(l){if(l instanceof Pg)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Rl(a,s,i)}catch(l){return ts(l instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,a)=>{const c=this.Xe(a);if(c){if(i.current&&Cc(c.target)){const l=new oe(c.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,ct.newNoDocument(l,e))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=Ee();this.Ue.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new sa(e,n,this.Ke,this.Qe,r);return this.Qe=Qn(),this.$e=qi(),this.Ue=qi(),this.Ke=new je(de),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Pf,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ke(de),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ke(de),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Pf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function qi(){return new je(oe.comparator)}function kf(){return new je(oe.comparator)}const $b={asc:"ASCENDING",desc:"DESCENDING"},jb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hb={and:"AND",or:"OR"};class qb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oc(t,e){return t.useProto3Json||Xo(e)?e:{value:e}}function zb(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wr(t){return Me(!!t),le.fromTimestamp(function(n){const r=Kn(n);return new Et(r.seconds,r.nanos)}(t))}function Gb(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zg(t){const e=Fe.fromString(t);return Me(sm(e)),e}function Ga(t,e){const n=Zg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(tm(n))}function em(t,e){return Gb(t.databaseId,e)}function Wb(t){const e=Zg(t);return e.length===4?Fe.emptyPath():tm(e)}function Df(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tm(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Me(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?K.UNKNOWN:Jg(h.code);return new ne(f,h.message||"")}(a);n=new Yg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(t,r.document.name),i=Wr(r.document.updateTime),a=r.document.createTime?Wr(r.document.createTime):le.min(),c=new Wt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new oo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(t,r.document),i=r.readTime?Wr(r.readTime):le.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new oo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(t,r.document),i=r.removedTargetIds||[];n=new oo([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Fb(s,i),c=r.targetId;n=new Xg(c,a)}}return n}function Jb(t,e){return{documents:[em(t,e.path)]}}function Xb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=em(t,s);const i=function(h){if(h.length!==0)return rm(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Lr(m.field),direction:eA(m.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Oc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function Yb(t){let e=Wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=nm(p);return m instanceof en&&Mg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new So(Fr(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Xo(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,T=p.values||[];return new Ro(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new Ro(T,m)}(n.endAt)),yb(e,s,a,i,c,"F",l,h)}function Zb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(n.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>nm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function eA(t){return $b[t]}function tA(t){return jb[t]}function nA(t){return Hb[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return mt.fromServerFormat(t.fieldPath)}function rm(t){return t instanceof ze?function(n){if(n.op==="=="){if(yf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(_f(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(_f(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:tA(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>rm(s));return r.length===1?r[0]:{compositeFilter:{op:nA(n.op),filters:r}}}(t):fe()}function sm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=le.min(),a=le.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.Tt=e}}function sA(t){const e=Yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.Tn=new oA}addToCollectionParentIndex(e,n){return this.Tn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(zn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class oA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},im=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(im,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new is(0)}static Kn(){return new is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="LruGarbageCollector",aA=1048576;function Vf([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class cA{constructor(e){this.Hn=e,this.buffer=new Ke(Vf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Nf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?X(Nf,"Ignoring IndexedDB error during garbage collection: ",n):await Qo(n)}await this.er(3e5)})}}class uA{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Jo.ae);const r=new cA(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Of)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Of):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),xr()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function hA(t,e){return new uA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.changes=new br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Gs(r.mutation,s,xn.empty(),Et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ns();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=Qn();const a=Ks(),c=function(){return Ks()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ra)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Gs(f.mutation,h,f.mutation.getFieldMask(),Et.now())):a.set(h.key,xn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new dA(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ks();let s=new je((a,c)=>a-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||xn.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=qg();f.forEach(m=>{if(!i.has(m)){const T=Wg(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return oe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(fr());let c=ii,l=i;return a.next(h=>x.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ee())).next(f=>({batchId:c,changes:bb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ns();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,m){return new Zo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ct.newInvalidDocument(f)))});let c=Ns();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Gs(f.mutation,h,xn.empty(),Et.now()),ta(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return x.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wr(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:sA(s.bundledQuery),readTime:Wr(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.overlays=new je(oe.comparator),this.Rr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,a=new oe(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=fr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return x.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Lb(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ee(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.Vr=new Ke(Ge.mr),this.gr=new Ke(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ge(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new oe(new Fe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new oe(new Fe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=Ee();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return oe.comparator(e.key,n.key)||de(e.Cr,n.Cr)}static pr(e,n){return de(e.Cr,n.Cr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ke(Ge.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mb(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?X0:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(de);return n.forEach(s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],c=>{r=r.add(c.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new oe(i),0);let c=new Ke(de);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},a),x.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Mr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.kr=e,this.docs=function(){return new je(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const a=n.path,c=new oe(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||G0(K0(f),r)<=0||(s.has(f.key)||ta(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}qr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EA(this)}getSize(e){return x.resolve(this.size)}}class EA extends fA{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.persistence=e,this.Qr=new br(n=>wl(n),Il),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Sl,this.targetCount=0,this.Kr=is.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),x.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.zn(n),x.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Jo(0),this.zr=!1,this.zr=!0,this.jr=new _A,this.referenceDelegate=e(this),this.Hr=new TA(this),this.indexManager=new iA,this.remoteDocumentCache=function(s){return new vA(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new rA(n),this.Yr=new gA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new yA(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new wA(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class wA extends Q0{constructor(e){super(),this.currentSequenceNumber=e}}class Cl{constructor(e){this.persistence=e,this.ti=new Sl,this.ni=null}static ri(e){return new Cl(e)}get ii(){if(this.ni)return this.ni;throw fe()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),x.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const s=oe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return x.or([()=>x.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ko{constructor(e,n){this.persistence=e,this.oi=new br(r=>Y0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hA(this,n)}static ri(e,n){return new ko(e,n)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return x.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(c=>{c||(r++,i.removeEntry(a,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=so(e.data.value)),n}ar(e,n,r){return x.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _T()?8:J0(ht())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new IA;return this._s(e,n,a).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,a,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(xr()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(xr()<=ge.DEBUG&&X("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(xr()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):x.resolve())}rs(e,n){if(wf(n))return x.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pc(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,a,l.readTime)?this.rs(e,Pc(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return wf(n)||s.isEqual(le.min())?x.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?x.resolve(null):(xr()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(n)),this.hs(e,a,n,z0(s,ii)).next(c=>c))})}cs(e,n){let r=new Ke(jg(e));return n.forEach((s,i)=>{ta(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return xr()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.ns.getDocumentsMatchingQuery(e,n,zn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="LocalStore",AA=3e8;class RA{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new je(de),this.Is=new br(i=>wl(i),Il),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function SA(t,e,n,r){return new RA(t,e,n,r)}async function am(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:c}))})})}function cm(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function CA(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,p)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ze.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),function(N,L,z){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=AA?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,T,f)&&c.push(n.Hr.updateTargetData(i,T))});let l=Qn(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(PA(i,a,e.documentUpdates).next(f=>{l=f.Vs,h=f.fs})),!r.isEqual(le.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return x.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function PA(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Qn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):X(kl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:a,fs:s}})}function kA(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Vc(t,e,n){const r=ve(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fs(a))throw a;X(kl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function xf(t,e,n){const r=ve(t);let s=le.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=ve(l),m=p.Is.get(f);return m!==void 0?x.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,f)}(r,a,Yt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:Ee())).next(c=>(DA(r,Tb(e),c),{documents:c,gs:i})))}function DA(t,e,n){let r=t.Es.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Mf{constructor(){this.activeTargetIds=Sb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OA{constructor(){this.ho=new Mf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Mf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="ConnectivityMonitor";class Ff{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Lf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi=null;function xc(){return zi===null?zi=function(){return 268435456+Math.round(2147483648*Math.random())}():zi++,"0x"+zi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="RestConnection",VA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const a=xc(),c=this.bo(e,n.toUriEncodedString());X(Wa,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(X(Wa,`Received RPC '${e}' ${a}: `,h),h),h=>{throw ts(Wa,`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,a){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=VA[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class LA extends xA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=xc();return new Promise((a,c)=>{const l=new Tg;l.setWithCredentials(!0),l.listenOnce(wg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ro.NO_ERROR:const f=l.getResponseJson();X(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ro.TIMEOUT:X(st,`RPC '${e}' ${i} timed out`),c(new ne(K.DEADLINE_EXCEEDED,"Request time out"));break;case ro.HTTP_ERROR:const p=l.getStatus();if(X(st,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const k=function(L){const z=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(z)>=0?z:K.UNKNOWN}(T.status);c(new ne(k,T.message))}else c(new ne(K.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne(K.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{X(st,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(st,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=xc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ag(),c=bg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(st,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let m=!1,T=!1;const k=new MA({Fo:L=>{T?X(st,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(X(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(st,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Mo:()=>p.close()}),N=(L,z,U)=>{L.listen(z,B=>{try{U(B)}catch($){setTimeout(()=>{throw $},0)}})};return N(p,Os.EventType.OPEN,()=>{T||(X(st,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),N(p,Os.EventType.CLOSE,()=>{T||(T=!0,X(st,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),N(p,Os.EventType.ERROR,L=>{T||(T=!0,ts(st,`RPC '${e}' stream ${s} transport errored:`,L),k.Uo(new ne(K.UNAVAILABLE,"The operation could not be completed")))}),N(p,Os.EventType.MESSAGE,L=>{var z;if(!T){const U=L.data[0];Me(!!U);const B=U,$=(B==null?void 0:B.error)||((z=B[0])===null||z===void 0?void 0:z.error);if($){X(st,`RPC '${e}' stream ${s} received error:`,$);const ae=$.status;let re=function(_){const b=He[_];if(b!==void 0)return Jg(b)}(ae),A=$.message;re===void 0&&(re=K.INTERNAL,A="Unknown error status: "+ae+" with message "+$.message),T=!0,k.Uo(new ne(re,A)),p.close()}else X(st,`RPC '${e}' stream ${s} received:`,U),k.Ko(U)}}),N(c,Ig.STAT_EVENT,L=>{L.stat===Tc.PROXY?X(st,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Tc.NOPROXY&&X(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Qa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){return new qb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="PersistentStream";class FA{constructor(e,n,r,s,i,a,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new um(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ne(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UA extends FA{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=Qb(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Wr(a.readTime):le.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Df(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Cc(l)?{documents:Jb(i,l)}:{query:Xb(i,l).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Kb(i,a.resumeToken);const h=Oc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){c.readTime=zb(i,a.snapshotVersion.toTimestamp());const h=Oc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Zb(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Df(this.serializer),n.removeTarget=e,this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{}class $A extends BA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ne(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Nc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(K.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,Nc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(K.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class jA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(mn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="RemoteStore";class HA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{vi(this)&&(X(os,"Restarting streams for network reachability change."),await async function(l){const h=ve(l);h.W_.add(4),await yi(h),h.j_.set("Unknown"),h.W_.delete(4),await ia(h)}(this))})}),this.j_=new jA(r,s)}}async function ia(t){if(vi(t))for(const e of t.G_)await e(!0)}async function yi(t){for(const e of t.G_)await e(!1)}function hm(t,e){const n=ve(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Vl(n)?Nl(n):ds(n).c_()&&Ol(n,e))}function Dl(t,e){const n=ve(t),r=ds(n);n.K_.delete(e),r.c_()&&fm(n,e),n.K_.size===0&&(r.c_()?r.P_():vi(n)&&n.j_.set("Unknown"))}function Ol(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).y_(e)}function fm(t,e){t.H_.Ne(e),ds(t).w_(e)}function Nl(t){t.H_=new Bb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.j_.B_()}function Vl(t){return vi(t)&&!ds(t).u_()&&t.K_.size>0}function vi(t){return ve(t).W_.size===0}function dm(t){t.H_=void 0}async function qA(t){t.j_.set("Online")}async function zA(t){t.K_.forEach((e,n)=>{Ol(t,e)})}async function KA(t,e){dm(t),Vl(t)?(t.j_.q_(e),Nl(t)):t.j_.set("Unknown")}async function GA(t,e,n){if(t.j_.set("Online"),e instanceof Yg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.K_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){X(os,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bf(t,r)}else if(e instanceof oo?t.H_.We(e):e instanceof Xg?t.H_.Ze(e):t.H_.je(e),!n.isEqual(le.min()))try{const r=await cm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.H_.ot(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.K_.get(h);f&&i.K_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.K_.get(l);if(!f)return;i.K_.set(l,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),fm(i,l);const p=new Mn(f.target,l,h,f.sequenceNumber);Ol(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(os,"Failed to raise snapshot:",r),await Bf(t,r)}}async function Bf(t,e,n){if(!fs(e))throw e;t.W_.add(1),await yi(t),t.j_.set("Offline"),n||(n=()=>cm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(os,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await ia(t)})}async function $f(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),X(os,"RemoteStore received new credentials");const r=vi(n);n.W_.add(3),await yi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await ia(n)}async function WA(t,e){const n=ve(t);e?(n.W_.delete(2),await ia(n)):e||(n.W_.add(2),await yi(n),n.j_.set("Unknown"))}function ds(t){return t.J_||(t.J_=function(n,r,s){const i=ve(n);return i.M_(),new UA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:qA.bind(null,t),No:zA.bind(null,t),Lo:KA.bind(null,t),p_:GA.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Vl(t)?Nl(t):t.j_.set("Unknown")):(await t.J_.stop(),dm(t))})),t.J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new xl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(mn("AsyncQueue",`${e}: ${t}`),fs(t))return new ne(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static emptySet(e){return new Qr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.Z_=new je(oe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):fe():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new as(e,n,Qr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class JA{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=Hf(),i.forEach((a,c)=>{for(const l of c.ta)l.onError(r)})})(this,new ne(K.ABORTED,"Firestore shutting down"))}}function Hf(){return new br(t=>$g(t),ea)}async function XA(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new QA,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=pm(a,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Ml(n)}async function YA(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZA(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&Ml(n)}function eR(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Ml(t){t.ia.forEach(e=>{e.next()})}var Mc,qf;(qf=Mc||(Mc={}))._a="default",qf.Cache="cache";class tR{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Mc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.key=e}}class mm{constructor(e){this.key=e}}class nR{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ee(),this.mutatedKeys=Ee(),this.ya=jg(e),this.wa=new Qr(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new jf,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),T=ta(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let L=!1;m&&T?m.data.isEqual(T.data)?k!==N&&(r.track({type:3,doc:T}),L=!0):this.va(m,T)||(r.track({type:2,doc:T}),L=!0,(l&&this.ya(T,l)>0||h&&this.ya(T,h)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),L=!0):m&&!T&&(r.track({type:1,doc:m}),L=!0,(l||h)&&(c=!0)),L&&(T?(a=a.add(T),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,p)=>function(T,k){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return N(T)-N(k)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,a.length!==0||h?{snapshot:new as(this.query,e.wa,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new jf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new mm(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new gm(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ee();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return as.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ll="SyncEngine";class rR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sR{constructor(e){this.key=e,this.Ba=!1}}class iR{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new br(c=>$g(c),ea),this.qa=new Map,this.Qa=new Set,this.$a=new je(oe.comparator),this.Ua=new Map,this.Ka=new Sl,this.Wa={},this.Ga=new Map,this.za=is.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function oR(t,e,n=!0){const r=Tm(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await _m(r,e,n,!0),s}async function aR(t,e){const n=Tm(t);await _m(n,e,!0,!1)}async function _m(t,e,n,r){const s=await kA(t.localStore,Yt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await cR(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&hm(t.remoteStore,s),c}async function cR(t,e,n,r,s){t.Ha=(p,m,T)=>async function(N,L,z,U){let B=L.view.ba(z);B.ls&&(B=await xf(N.localStore,L.query,!1).then(({documents:A})=>L.view.ba(A,B)));const $=U&&U.targetChanges.get(L.targetId),ae=U&&U.targetMismatches.get(L.targetId)!=null,re=L.view.applyChanges(B,N.isPrimaryClient,$,ae);return Kf(N,L.targetId,re.Ma),re.snapshot}(t,p,m,T);const i=await xf(t.localStore,e,!0),a=new nR(e,i.gs),c=a.ba(i.documents),l=_i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Kf(t,n,h.Ma);const f=new rR(e,n,a);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function lR(t,e,n){const r=ve(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ea(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dl(r.remoteStore,s.targetId),Lc(r,s.targetId)}).catch(Qo)):(Lc(r,s.targetId),await Vc(r.localStore,s.targetId,!0))}async function uR(t,e){const n=ve(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dl(n.remoteStore,r.targetId))}async function ym(t,e){const n=ve(t);try{const r=await CA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Me(a.Ba):s.removedDocuments.size>0&&(Me(a.Ba),a.Ba=!1))}),await Em(n,r,e)}catch(r){await Qo(r)}}function zf(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const c=a.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ve(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(c)&&(h=!0)}),h&&Ml(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hR(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new je(oe.comparator);a=a.insert(i,ct.newNoDocument(i,le.min()));const c=Ee().add(i),l=new sa(le.min(),new Map,new je(de),a,c);await ym(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Fl(r)}else await Vc(r.localStore,e,!1).then(()=>Lc(r,e,n)).catch(Qo)}function Lc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||vm(t,r)})}function vm(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Dl(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Fl(t))}function Kf(t,e,n){for(const r of n)r instanceof gm?(t.Ka.addReference(r.key,e),fR(t,r)):r instanceof mm?(X(Ll,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||vm(t,r.key)):fe()}function fR(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Ll,"New document in limbo: "+n),t.Qa.add(r),Fl(t))}function Fl(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new oe(Fe.fromString(e)),r=t.za.next();t.Ua.set(r,new sR(n)),t.$a=t.$a.insert(n,r),hm(t.remoteStore,new Mn(Yt(Bg(n.path)),r,"TargetPurposeLimboResolution",Jo.ae))}}async function Em(t,e,n){const r=ve(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{a.push(r.Ha(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Pl.Yi(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(l,h){const f=ve(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,m=>x.forEach(m.Hi,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>x.forEach(m.Ji,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!fs(p))throw p;X(kl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=f.Ts.get(m),k=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(k);f.Ts=f.Ts.insert(m,N)}}}(r.localStore,i))}async function dR(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){X(Ll,"User change. New user:",e.toKey());const r=await am(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new ne(K.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Em(n,r.Rs)}}function pR(t,e){const n=ve(t),r=n.Ua.get(e);if(r&&r.Ba)return Ee().add(r.key);{let s=Ee();const i=n.qa.get(e);if(!i)return s;for(const a of i){const c=n.ka.get(a);s=s.unionWith(c.view.Sa)}return s}}function Tm(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hR.bind(null,e),e.La.p_=ZA.bind(null,e.eventManager),e.La.Ja=eR.bind(null,e.eventManager),e}class Do{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lm(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return SA(this.persistence,new bA,e.initialUser,this.serializer)}Xa(e){return new om(Cl.ri,this.serializer)}Za(e){return new OA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Do.provider={build:()=>new Do};class gR extends Do{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Me(this.persistence.referenceDelegate instanceof ko);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new om(r=>ko.ri(r,n),this.serializer)}}class Fc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await WA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JA}()}createDatastore(e){const n=lm(e.databaseInfo.databaseId),r=function(i){return new LA(i)}(e.databaseInfo);return function(i,a,c,l){return new $A(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new HA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>zf(this.syncEngine,n,0),function(){return Ff.D()?new Ff:new NA}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const p=new iR(s,i,a,c,l,h);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);X(os,"RemoteStore shutting down."),i.W_.add(5),await yi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fc.provider={build:()=>new Fc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="FirestoreClient";class _R{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=j0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(Jn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(Jn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ja(t,e){t.asyncQueue.verifyOperationInProgress(),X(Jn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await am(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yR(t);X(Jn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$f(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$f(e.remoteStore,s)),t._onlineComponents=e}async function yR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Jn,"Using user provided OfflineComponentProvider");try{await Ja(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Ja(t,new Do)}}else X(Jn,"Using default OfflineComponentProvider"),await Ja(t,new gR(void 0));return t._offlineComponents}async function vR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Jn,"Using user provided OnlineComponentProvider"),await Gf(t,t._uninitializedComponentsProvider._online)):(X(Jn,"Using default OnlineComponentProvider"),await Gf(t,new Fc))),t._onlineComponents}async function ER(t){const e=await vR(t),n=e.eventManager;return n.onListen=oR.bind(null,e.syncEngine),n.onUnlisten=lR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uR.bind(null,e.syncEngine),n}function TR(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new mR({next:m=>{f.su(),a.enqueueAndForget(()=>YA(i,p)),m.fromCache&&l.source==="server"?h.reject(new ne(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new tR(c,f,{includeMetadataChanges:!0,Ta:!0});return XA(i,p)}(await ER(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;function wR(t,e,n,r){if(e===!0&&r===!0)throw new ne(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(oe.isDocumentKey(t))throw new ne(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function IR(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Uc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=IR(t);throw new ne(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="firestore.googleapis.com",Jf=!0;class Xf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Im,this.ssl=Jf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=im;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aA)throw new ne(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new x0;switch(r.type){case"firstParty":return new U0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wf.get(n);r&&(X("ComponentProvider","Removing Datastore"),Wf.delete(n),r.terminate())}(this),Promise.resolve()}}function bR(t,e,n,r={}){var s;const i=(t=Uc(t,Ul))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==Im&&i.host!==c&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!yr(l,a)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=it.MOCK_USER;else{h=uT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new it(p)}t._authCredentials=new M0(new Rg(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oa(this.firestore,e,this._query)}}class ps{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ps(this.firestore,e,this._key)}}class Jr extends oa{constructor(e,n,r){super(e,n,Bg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ps(this.firestore,null,new oe(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function AR(t,e,...n){if(t=Ir(t),t instanceof Ul){const r=Fe.fromString(e,...n);return Qf(r),new Jr(t,null,r)}{if(!(t instanceof ps||t instanceof Jr))throw new ne(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Qf(r),new Jr(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="AsyncQueue";class Zf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new um(this,"async_queue_retry"),this.Su=()=>{const r=Qa();r&&X(Yf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Qa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new gr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!fs(e))throw e;X(Yf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=xl.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&fe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class bm extends Ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zf(e),this._firestoreClient=void 0,await e}}}function RR(t,e){const n=typeof t=="object"?t:Bp(),r=typeof t=="string"?t:Ao,s=cl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cT("firestore");i&&bR(s,...i)}return s}function SR(t){if(t._terminated)throw new ne(K.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CR(t),t._firestoreClient}function CR(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new nb(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new _R(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(Ze.fromBase64String(e))}catch(n){throw new ne(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oo(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const DR=new RegExp("[~\\*/\\[\\]]");function OR(t,e,n){if(e.search(DR)>=0)throw ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Am(...e.split("."))._internalPath}catch{throw ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ed(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new ne(K.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ps(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NR extends Rm{data(){return super.data()}}function Sm(t,e){return typeof e=="string"?OR(t,e):e instanceof Am?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xR{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[bc].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ue(a.doubleValue));return new kR(i)}convertGeoPoint(e){return new PR(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Me(sm(r));const s=new ai(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MR extends Rm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ao extends MR{data(e={}){return super.data(e)}}class LR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ao(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ki(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ki(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:FR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class UR extends xR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ps(this.firestore,null,n)}}function BR(t){t=Uc(t,oa);const e=Uc(t.firestore,bm),n=SR(e),r=new UR(e);return VR(t._query),TR(n,t._query).then(s=>new LR(e,r,t,s))}(function(e,n=!0){(function(s){hs=s})(ls),Zr(new vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new bm(new L0(r.getProvider("auth-internal")),new B0(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),$n(sf,of,e),$n(sf,of,"esm2017")})();const $R={apiKey:"AIzaSyD3EhkRXO9fgzmMJ95ow8bK0899vdpTS1A",authDomain:"portfolio-final-3503e.firebaseapp.com",projectId:"portfolio-final-3503e",storageBucket:"portfolio-final-3503e.firebasestorage.app",messagingSenderId:"695869043614",appId:"1:695869043614:web:5cdeb2230ff8b9dc131c8f"},Cm=Up($R);N0(Cm);const jR=RR(Cm);function HR(){const t=Fn({}),e=Fn(!0);return el(async()=>{(await BR(AR(jR,"contactInfo"))).forEach(s=>{t.value=s.data()}),e.value=!1}),{contact:t,loading:e}}const qR={class:"contact-page"},zR={class:"form-wrapper"},KR={key:0},GR={key:1},WR={class:"form-group"},QR={class:"form-group"},JR={class:"form-group"},XR={__name:"Contact",setup(t){const e=Fn(""),n=Fn(""),r=Fn(""),s=()=>{alert(`Sending message from ${e.value}...`),e.value="",n.value="",r.value=""},{contact:i,loading:a}=HR();return(c,l)=>(Dt(),Lt("div",qR,[Re("div",zR,[l[7]||(l[7]=Re("h2",null,"Let's Connect",-1)),pt(a)?(Dt(),Lt("div",KR,"Loading contact info...")):(Dt(),Lt("div",GR,[Re("p",null,co(pt(i).phone),1),Re("p",null,co(pt(i).email),1)])),Re("form",{onSubmit:mp(s,["prevent"])},[Re("div",WR,[l[3]||(l[3]=Re("label",{for:"name"},"Name",-1)),Sa(Re("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h),type:"text",id:"name",required:""},null,512),[[xa,e.value]])]),Re("div",QR,[l[4]||(l[4]=Re("label",{for:"email"},"Email",-1)),Sa(Re("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>n.value=h),type:"email",id:"email",required:""},null,512),[[xa,n.value]])]),Re("div",JR,[l[5]||(l[5]=Re("label",{for:"message"},"Message",-1)),Sa(Re("textarea",{"onUpdate:modelValue":l[2]||(l[2]=h=>r.value=h),id:"message",rows:"4",required:""},null,512),[[xa,r.value]])]),l[6]||(l[6]=Re("button",{type:"submit",class:"submit-button"},"Submit",-1))],32)])]))}},YR=cs(XR,[["__scopeId","data-v-53f1de03"]]),ZR=[{path:"/",component:FE},{path:"/resumeandcv",component:jE},{path:"/reel",component:KE},{path:"/gallery",component:ZE},{path:"/contact",component:YR}],eS=RE({history:rE("/"),routes:ZR}),Pm=bv(xE);Pm.use(eS);Pm.mount("#app");
