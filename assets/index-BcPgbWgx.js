(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},cs=[],pn=()=>{},Zd=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ya=t=>t.startsWith("onUpdate:"),st=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,Ne=(t,e)=>yy.call(t,e),ce=Array.isArray,us=t=>$i(t)==="[object Map]",va=t=>$i(t)==="[object Set]",xh=t=>$i(t)==="[object Date]",pe=t=>typeof t=="function",je=t=>typeof t=="string",rn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ep=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),tp=Object.prototype.toString,$i=t=>tp.call(t),vy=t=>$i(t).slice(8,-1),np=t=>$i(t)==="[object Object]",Oc=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ey=/-\w/g,Ot=Ea(t=>t.replace(Ey,e=>e.slice(1).toUpperCase())),Ty=/\B([A-Z])/g,yr=Ea(t=>t.replace(Ty,"-$1").toLowerCase()),Ta=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=Ea(t=>t?`on${Ta(t)}`:""),fn=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Iy=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Lh;const wa=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Aa(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Ry(r):Aa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||De(t))return t}const wy=/;(?![^(]*\))/g,Ay=/:([^]+)/,by=/\/\*[^]*?\*\//g;function Ry(t){const e={};return t.replace(by,"").split(wy).forEach(n=>{if(n){const r=n.split(Ay);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jt(t){let e="";if(je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Jt(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cy=Nc(Sy);function sp(t){return!!t||t===""}function Py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qi(t[r],e[r]);return n}function qi(t,e){if(t===e)return!0;let n=xh(t),r=xh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?Py(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!qi(t[o],e[o]))return!1}}return String(t)===String(e)}function ky(t,e){return t.findIndex(n=>qi(n,e))}const ip=t=>!!(t&&t.__v_isRef===!0),_e=t=>je(t)?t:t==null?"":ce(t)||De(t)&&(t.toString===tp||!pe(t.toString))?ip(t)?_e(t.value):JSON.stringify(t,op,2):String(t),op=(t,e)=>ip(e)?op(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ml(r,i)+" =>"]=s,n),{})}:va(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ml(n))}:rn(e)?ml(e):De(e)&&!ce(e)&&!np(e)?String(e):e,ml=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class Ny{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ct&&(ct.active?(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){if(this._on>0&&--this._on===0){if(ct===this)ct=this.prevScope;else{let e=ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dy(){return ct}let Ue;const _l=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&(ct.active?ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_l.has(this)&&(_l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mh(this),up(this);const e=Ue,n=tn;Ue=this,tn=!0;try{return this.fn()}finally{hp(this),Ue=e,tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,Mh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let lp=0,hi,fi;function cp(t,e=!1){if(t.flags|=8,e){t.next=fi,fi=t;return}t.next=hi,hi=t}function Vc(){lp++}function xc(){if(--lp>0)return;if(fi){let e=fi;for(fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hi;){let e=hi;for(hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Lc(r),Oy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function $l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai)||(t.globalVersion=Ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$l(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=tn;Ue=t,tn=!0;try{up(t);const s=t.fn(t._value);(e.version===0||fn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,tn=r,hp(t),t.flags&=-3}}function Lc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Lc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let tn=!0;const dp=[];function Mn(){dp.push(tn),tn=!1}function Fn(){const t=dp.pop();tn=t===void 0?!0:t}function Mh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Ai=0;class Vy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!tn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new Vy(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){Vc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xc()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ql=new WeakMap,Lr=Symbol(""),Hl=Symbol(""),bi=Symbol("");function Tt(t,e,n){if(tn&&Ue){let r=ql.get(t);r||ql.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mc),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=ql.get(t);if(!o){Ai++;return}const l=c=>{c&&c.trigger()};if(Vc(),e==="clear")o.forEach(l);else{const c=ce(t),h=c&&Oc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===bi||!rn(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(bi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Lr)),us(t)&&l(o.get(Hl)));break;case"delete":c||(l(o.get(Lr)),us(t)&&l(o.get(Hl)));break;case"set":us(t)&&l(o.get(Lr));break}}xc()}function ns(t){const e=Ce(t);return e===t?e:(Tt(e,"iterate",bi),Yt(t)?e:e.map(sn))}function ba(t){return Tt(t=Ce(t),"iterate",bi),t}function un(t,e){return Un(t)?Es(Mr(t)?sn(e):e):sn(e)}const xy={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,t=>un(this,t))},concat(...t){return ns(this).concat(...t.map(e=>ce(e)?ns(e):e))},entries(){return yl(this,"entries",t=>(t[1]=un(this,t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(r=>un(this,r)),arguments)},find(t,e){return Rn(this,"find",t,e,n=>un(this,n),arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,n=>un(this,n),arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return vl(this,"includes",t)},indexOf(...t){return vl(this,"indexOf",t)},join(t){return ns(this).join(t)},lastIndexOf(...t){return vl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Fh(this,"reduce",t,e)},reduceRight(t,...e){return Fh(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return ns(this).toReversed()},toSorted(t){return ns(this).toSorted(t)},toSpliced(...t){return ns(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return yl(this,"values",t=>un(this,t))}};function yl(t,e,n){const r=ba(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ly=Array.prototype;function Rn(t,e,n,r,s,i){const o=ba(t),l=o!==t&&!Yt(t),c=o[e];if(c!==Ly[e]){const p=c.apply(t,i);return l?sn(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,un(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function Fh(t,e,n,r){const s=ba(t),i=s!==t&&!Yt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,f,p){return l&&(l=!1,h=un(t,h)),n.call(this,h,un(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const c=s[e](o,...r);return l?un(t,c):c}function vl(t,e,n){const r=Ce(t);Tt(r,"iterate",bi);const s=r[e](...n);return(s===-1||s===!1)&&Bc(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Js(t,e,n=[]){Mn(),Vc();const r=Ce(t)[e].apply(t,n);return xc(),Fn(),r}const My=Nc("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function Fy(t){rn(t)||(t=String(t));const e=Ce(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gy:Ep:i?vp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=xy[n]))return c;if(n==="hasOwnProperty")return Fy}const l=Reflect.get(e,n,bt(e)?e:r);if((rn(n)?gp.has(n):My(n))||(s||Tt(e,"get",n),i))return l;if(bt(l)){const c=o&&Oc(n)?l:l.value;return s&&De(c)?Wl(c):c}return De(l)?s?Wl(l):Ra(l):l}}class _p extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ce(e)&&Oc(n);if(!this._isShallow){const h=Un(i);if(!Yt(r)&&!Un(r)&&(i=Ce(i),r=Ce(r)),!o&&bt(i)&&!bt(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Ne(e,n),c=Reflect.set(e,n,r,bt(e)?e:s);return e===Ce(s)&&(l?fn(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!gp.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ce(e)?"length":Lr),Reflect.ownKeys(e)}}class Uy extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const By=new _p,jy=new Uy,$y=new _p(!0);const Kl=t=>t,wo=t=>Reflect.getPrototypeOf(t);function qy(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=us(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?Kl:e?Es:sn;return!e&&Tt(i,"iterate",c?Hl:Lr),st(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hy(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(fn(s,l)&&Tt(o,"get",s),Tt(o,"get",l));const{has:c}=wo(o),h=e?Kl:t?Es:sn;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ce(s),"iterate",Lr),s.size},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(fn(s,l)&&Tt(o,"has",s),Tt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),h=e?Kl:t?Es:sn;return!t&&Tt(c,"iterate",Lr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return st(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){const i=Ce(this),o=wo(i),l=Ce(s),c=!e&&!Yt(s)&&!Un(s)?l:s;return o.has.call(i,c)||fn(s,c)&&o.has.call(i,s)||fn(l,c)&&o.has.call(i,l)||(i.add(c),Nn(i,"add",c,c)),this},set(s,i){!e&&!Yt(i)&&!Un(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=wo(o);let h=l.call(o,s);h||(s=Ce(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?fn(i,f)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=wo(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Nn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qy(s,t,e)}),n}function Fc(t,e){const n=Hy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const Ky={get:Fc(!1,!1)},Wy={get:Fc(!1,!0)},zy={get:Fc(!0,!1)};const yp=new WeakMap,vp=new WeakMap,Ep=new WeakMap,Gy=new WeakMap;function Qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ra(t){return Un(t)?t:Uc(t,!1,By,Ky,yp)}function Tp(t){return Uc(t,!1,$y,Wy,vp)}function Wl(t){return Uc(t,!0,jy,zy,Ep)}function Uc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=Qy(vy(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Mr(t){return Un(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function Bc(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Jy(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&rp(t,"__v_skip",!0),t}const sn=t=>De(t)?Ra(t):t,Es=t=>De(t)?Wl(t):t;function bt(t){return t?t.__v_isRef===!0:!1}function Fe(t){return Ip(t,!1)}function Yy(t){return Ip(t,!0)}function Ip(t,e){return bt(t)?t:new Xy(t,e)}class Xy{constructor(e,n){this.dep=new Mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||Un(e);e=r?e:Ce(e),fn(e,n)&&(this._rawValue=e,this._value=r?e:sn(e),this.dep.trigger())}}function Bt(t){return bt(t)?t.value:t}const Zy={get:(t,e,n)=>e==="__v_raw"?t:Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wp(t){return Mr(t)?t:new Proxy(t,Zy)}class ev{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return cp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new ev(r,s,n)}const bo={},qo=new WeakMap;let Pr;function nv(t,e=!1,n=Pr){if(n){let r=qo.get(n);r||qo.set(n,r=[]),r.push(t)}}function rv(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Yt(H)||s===!1||s===0?Dn(H,1):Dn(H);let f,p,g,_,N=!1,C=!1;if(bt(t)?(p=()=>t.value,N=Yt(t)):Mr(t)?(p=()=>h(t),N=!0):ce(t)?(C=!0,N=t.some(H=>Mr(H)||Yt(H)),p=()=>t.map(H=>{if(bt(H))return H.value;if(Mr(H))return h(H);if(pe(H))return c?c(H,2):H()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Mn();try{g()}finally{Fn()}}const H=Pr;Pr=f;try{return c?c(t,3,[_]):t(_)}finally{Pr=H}}:p=pn,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>Dn(H(),oe)}const I=Dy(),D=()=>{f.stop(),I&&I.active&&Dc(I.effects,f)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),D()}}let P=C?new Array(t.length).fill(bo):bo;const U=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const oe=f.run();if(s||N||(C?oe.some((re,w)=>fn(re,P[w])):fn(oe,P))){g&&g();const re=Pr;Pr=f;try{const w=[oe,P===bo?void 0:C&&P[0]===bo?[]:P,_];P=oe,c?c(e,3,w):e(...w)}finally{Pr=re}}}else f.run()};return l&&l(U),f=new ap(p),f.scheduler=o?()=>o(U,!1):U,_=H=>nv(H,!1,f),g=f.onStop=()=>{const H=qo.get(f);if(H){if(c)c(H,4);else for(const oe of H)oe();qo.delete(f)}},e?r?U(!0):P=f.run():o?o(U.bind(null,!0),!0):f.run(),D.pause=f.pause.bind(f),D.resume=f.resume.bind(f),D.stop=D,D}function Dn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,bt(t))Dn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Dn(t[r],e,n);else if(va(t)||us(t))t.forEach(r=>{Dn(r,e,n)});else if(np(t)){for(const r in t)Dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(t,e,n,r){try{return r?t(...r):t()}catch(s){Sa(s,e,n)}}function Xt(t,e,n,r){if(pe(t)){const s=Hi(t,e,n,r);return s&&ep(s)&&s.catch(i=>{Sa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function Sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){Mn(),Hi(i,null,10,[t,c,h]),Fn();return}}sv(t,n,s,r,o)}function sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let cn=-1;const hs=[];let nr=null,rs=0;const Ap=Promise.resolve();let Ho=null;function jc(t){const e=Ho||Ap;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=cn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $c(t){if(!(t.flags&1)){const e=Ri(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Ri(n)?Dt.push(t):Dt.splice(iv(e),0,t),t.flags|=1,bp()}}function bp(){Ho||(Ho=Ap.then(Sp))}function ov(t){ce(t)?hs.push(...t):nr&&t.id===-1?nr.splice(rs+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),bp()}function Uh(t,e,n=cn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(hs.length){const e=[...new Set(hs)].sort((n,r)=>Ri(n)-Ri(r));if(hs.length=0,nr){nr.push(...e);return}for(nr=e,rs=0;rs<nr.length;rs++){const n=nr[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,rs=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sp(t){try{for(cn=0;cn<Dt.length;cn++){const e=Dt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<Dt.length;cn++){const e=Dt[cn];e&&(e.flags&=-2)}cn=-1,Dt.length=0,Rp(),Ho=null,(Dt.length||hs.length)&&Sp()}}let dt=null,Cp=null;function Ko(t){const e=dt;return dt=t,Cp=t&&t.type.__scopeId||null,e}function tt(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qo(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Qo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fs(t,e){if(dt===null)return t;const n=Da(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Mn(),Xt(c,n,8,[t.el,l,t,e]),Fn())}}function di(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=fg();if(r||ps){let s=ps?ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const av=Symbol.for("v-scx"),lv=()=>qt(av);function Fr(t,e,n){return Pp(t,e,n)}function Pp(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=st({},n),c=e&&r||!e&&i!=="post";let h;if(ki){if(i==="sync"){const _=lv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const f=At;l.call=(_,N,C)=>Xt(_,f,N,C);let p=!1;i==="post"?l.scheduler=_=>{Pt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,N)=>{N?_():$c(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=rv(t,e,l);return ki&&(h?h.push(g):c&&g()),g}function cv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Wi(this),l=Pp(s,i.bind(r),n);return o(),l}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tr=new WeakMap,Np=Symbol("_vte"),Dp=t=>t.__isTeleport,Nr=t=>t&&(t.disabled||t.disabled===""),uv=t=>t&&(t.defer||t.defer===""),Bh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,jh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zl=(t,e)=>{const n=t&&t.to;return je(n)?e?e(n):null:n},hv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:f,pc:p,pbc:g,o:{insert:_,querySelector:N,createText:C,createComment:I,parentNode:D}}=h,P=Nr(e.props);let{dynamicChildren:U}=e;const H=(w,v,y)=>{w.shapeFlag&16&&f(w.children,v,y,s,i,o,l,c)},oe=(w=e)=>{const v=Nr(w.props),y=w.target=zl(w.props,N),R=Gl(y,w,C,_);y&&(o!=="svg"&&Bh(y)?o="svg":o!=="mathml"&&jh(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),v||(H(w,y,R),ti(w,!1)))},re=w=>{const v=()=>{if(tr.get(w)===v){if(tr.delete(w),Nr(w.props)){const y=D(w.el)||n;H(w,y,w.anchor),ti(w,!0)}oe(w)}};tr.set(w,v),Pt(v,i)};if(t==null){const w=e.el=C(""),v=e.anchor=C("");if(_(w,n,r),_(v,n,r),uv(e.props)||i&&i.pendingBranch){re(e);return}P&&(H(e,n,v),ti(e,!0)),oe()}else{e.el=t.el;const w=e.anchor=t.anchor,v=tr.get(t);if(v){v.flags|=8,tr.delete(t),re(e);return}e.targetStart=t.targetStart;const y=e.target=t.target,R=e.targetAnchor=t.targetAnchor,S=Nr(t.props),A=S?n:y,T=S?w:R;if(o==="svg"||Bh(y)?o="svg":(o==="mathml"||jh(y))&&(o="mathml"),U?(g(t.dynamicChildren,U,A,s,i,o,l),Kc(t,e,!0)):c||p(t,e,A,T,s,i,o,l,!1),P)S?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ro(e,n,w,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Se=e.target=zl(e.props,N);Se&&Ro(e,Se,null,h,0)}else S&&Ro(e,y,R,h,1);ti(e,P)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:g}=t,_=i||!Nr(g),N=tr.get(t);if(N&&(N.flags|=8,tr.delete(t)),p&&(s(h),s(f)),i&&s(c),!N&&o&16)for(let C=0;C<l.length;C++){const I=l[C];r(I,e,n,_,!!I.dynamicChildren)}},move:Ro,hydrate:fv};function Ro(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:f}=t,p=i===2;if(p&&r(o,e,n),!tr.has(t)&&(!p||Nr(f))&&c&16)for(let g=0;g<h.length;g++)s(h[g],e,n,2);p&&r(l,e,n)}function fv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:f}},p){function g(I,D){let P=D;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")e.targetStart=P;else if(P.data==="teleport anchor"){e.targetAnchor=P,I._lpa=e.targetAnchor&&o(e.targetAnchor);break}}P=o(P)}}function _(I,D){D.anchor=p(o(I),D,l(I),n,r,s,i)}const N=e.target=zl(e.props,c),C=Nr(e.props);if(N){const I=N._lpa||N.firstChild;e.shapeFlag&16&&(C?(_(t,e),g(N,I),e.targetAnchor||Gl(N,e,f,h,l(t)===N?t:null)):(e.anchor=o(t),g(N,I),e.targetAnchor||Gl(N,e,f,h),p(I&&o(I),e,N,n,r,s,i))),ti(e,C)}else C&&e.shapeFlag&16&&(_(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Op=hv;function ti(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Gl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Np]=o,t&&(r(i,t,s),r(o,t,s)),o}const Qt=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function dv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ki(()=>{t.isMounted=!0}),$p(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],Vp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},xp=t=>{const e=t.subTree;return e.component?xp(e.component):e},pv={name:"BaseTransition",props:Vp,setup(t,{slots:e}){const n=fg(),r=dv();return()=>{const s=e.default&&Fp(e.default(),!0),i=s&&s.length?Lp(s):n.subTree?ut():void 0;if(!i)return;const o=Ce(t),{mode:l}=o;if(r.isLeaving)return El(i);const c=$h(i);if(!c)return El(i);let h=Ql(c,o,r,n,p=>h=p);c.type!==wt&&Si(c,h);let f=n.subTree&&$h(n.subTree);if(f&&f.type!==wt&&!Dr(f,c)&&xp(n).type!==wt){let p=Ql(f,o,r,n);if(Si(f,p),l==="out-in"&&c.type!==wt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},El(i);l==="in-out"&&c.type!==wt?p.delayLeave=(g,_,N)=>{const C=Mp(r,f);C[String(f.key)]=f,g[Qt]=()=>{_(),g[Qt]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{N(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Lp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==wt){e=n;break}}return e}const gv=pv;function Mp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ql(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:N,onLeaveCancelled:C,onBeforeAppear:I,onAppear:D,onAfterAppear:P,onAppearCancelled:U}=e,H=String(t.key),oe=Mp(n,t),re=(y,R)=>{y&&Xt(y,r,9,R)},w=(y,R)=>{const S=R[1];re(y,R),ce(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:l,beforeEnter(y){let R=c;if(!n.isMounted)if(i)R=I||c;else return;y[Qt]&&y[Qt](!0);const S=oe[H];S&&Dr(t,S)&&S.el[Qt]&&S.el[Qt](),re(R,[y])},enter(y){if(oe[H]===t)return;let R=h,S=f,A=p;if(!n.isMounted)if(i)R=D||h,S=P||f,A=U||p;else return;let T=!1;y[Ys]=Ze=>{T||(T=!0,Ze?re(A,[y]):re(S,[y]),v.delayedLeave&&v.delayedLeave(),y[Ys]=void 0)};const Se=y[Ys].bind(null,!1);R?w(R,[y,Se]):Se()},leave(y,R){const S=String(t.key);if(y[Ys]&&y[Ys](!0),n.isUnmounting)return R();re(g,[y]);let A=!1;y[Qt]=Se=>{A||(A=!0,R(),Se?re(C,[y]):re(N,[y]),y[Qt]=void 0,oe[S]===t&&delete oe[S])};const T=y[Qt].bind(null,!1);oe[S]=t,_?w(_,[y,T]):T()},clone(y){const R=Ql(y,e,n,r,s);return s&&s(R),R}};return v}function El(t){if(Ca(t))return t=pr(t),t.children=null,t}function $h(t){if(!Ca(t))return Dp(t.type)&&t.children?Lp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Si(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Si(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&s++,r=r.concat(Fp(o.children,e,l))):(e||o.type!==wt)&&r.push(l!=null?pr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Up(t,e){return pe(t)?st({name:t.name},e,{setup:t}):t}function Bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Wo=new WeakMap;function pi(t,e,n,r,s=!1){if(ce(t)){t.forEach((C,I)=>pi(C,e&&(ce(e)?e[I]:e),n,r,s));return}if(ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Me?l.refs={}:l.refs,p=l.setupState,g=Ce(p),_=p===Me?Zd:C=>qh(f,C)?!1:Ne(g,C),N=(C,I)=>!(I&&qh(f,I));if(h!=null&&h!==c){if(Hh(e),je(h))f[h]=null,_(h)&&(p[h]=null);else if(bt(h)){const C=e;N(h,C.k)&&(h.value=null),C.k&&(f[C.k]=null)}}if(pe(c))Hi(c,l,12,[o,f]);else{const C=je(c),I=bt(c);if(C||I){const D=()=>{if(t.f){const P=C?_(c)?p[c]:f[c]:N()||!t.k?c.value:f[t.k];if(s)ce(P)&&Dc(P,i);else if(ce(P))P.includes(i)||P.push(i);else if(C)f[c]=[i],_(c)&&(p[c]=f[c]);else{const U=[i];N(c,t.k)&&(c.value=U),t.k&&(f[t.k]=U)}}else C?(f[c]=o,_(c)&&(p[c]=o)):I&&(N(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const P=()=>{D(),Wo.delete(t)};P.id=-1,Wo.set(t,P),Pt(P,n)}else Hh(t),D()}}}function Hh(t){const e=Wo.get(t);e&&(e.flags|=8,Wo.delete(t))}wa().requestIdleCallback;wa().cancelIdleCallback;const ds=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function mv(t,e){jp(t,"a",e)}function _v(t,e){jp(t,"da",e)}function jp(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=Pa(e,t,r,!0);qp(()=>{Dc(r[e],s)},n)}function Pa(t,e,n=At,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mn();const l=Wi(n),c=Xt(e,n,t,o);return l(),Fn(),c});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=At)=>{(!ki||t==="sp")&&Pa(t,(...r)=>e(...r),n)},vv=Hn("bm"),Ki=Hn("m"),Ev=Hn("bu"),Tv=Hn("u"),$p=Hn("bum"),qp=Hn("um"),Iv=Hn("sp"),wv=Hn("rtg"),Av=Hn("rtc");function bv(t,e=At){Pa("ec",t,e)}const Hp="components";function zo(t,e){return Wp(Hp,t,!0,e)||t}const Kp=Symbol.for("v-ndc");function Rv(t){return je(t)?Wp(Hp,t,!1)||t:t||Kp}function Wp(t,e,n=!0,r=!1){const s=dt||At;if(s){const i=s.type;{const l=hE(i,!1);if(l&&(l===e||l===Ot(e)||l===Ta(Ot(e))))return i}const o=Kh(s[t]||i[t],e)||Kh(s.appContext[t],e);return!o&&r?i:o}}function Kh(t,e){return t&&(t[e]||t[Ot(e)]||t[Ta(Ot(e))])}function gn(t,e,n,r){let s;const i=n,o=ce(t);if(o||je(t)){const l=o&&Mr(t);let c=!1,h=!1;l&&(c=!Yt(t),h=Un(t),t=ba(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Es(sn(t[f])):sn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function Sv(t,e,n={},r,s){if(dt.ce||dt.parent&&ds(dt.parent)&&dt.parent.ce){const h=Object.keys(n).length>0;return n.name=e,Z(),mn(Oe,null,[Pe("slot",n,r&&r())],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Z();const o=i&&zp(i(n)),l=n.key||o&&o.key,c=mn(Oe,{key:(l&&!rn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function zp(t){return t.some(e=>Pi(e)?!(e.type===wt||e.type===Oe&&!zp(e.children)):!0)?t:null}const Jl=t=>t?dg(t)?Da(t):Jl(t.parent):null,gi=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qp(t),$forceUpdate:t=>t.f||(t.f=()=>{$c(t.update)}),$nextTick:t=>t.n||(t.n=jc.bind(t.proxy)),$watch:t=>cv.bind(t)}),Tl=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ne(t,e),Cv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tl(r,e))return o[e]=1,r[e];if(s!==Me&&Ne(s,e))return o[e]=2,s[e];if(Ne(i,e))return o[e]=3,i[e];if(n!==Me&&Ne(n,e))return o[e]=4,n[e];Yl&&(o[e]=0)}}const h=gi[e];let f,p;if(h)return e==="$attrs"&&Tt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Me&&Ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tl(s,e)?(s[e]=n,!0):r!==Me&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Me&&l[0]!=="$"&&Ne(t,l)||Tl(e,l)||Ne(i,l)||Ne(r,l)||Ne(gi,l)||Ne(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yl=!0;function Pv(t){const e=Qp(t),n=t.proxy,r=t.ctx;Yl=!1,e.beforeCreate&&zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:N,activated:C,deactivated:I,beforeDestroy:D,beforeUnmount:P,destroyed:U,unmounted:H,render:oe,renderTracked:re,renderTriggered:w,errorCaptured:v,serverPrefetch:y,expose:R,inheritAttrs:S,components:A,directives:T,filters:Se}=e;if(h&&kv(h,r,null),o)for(const Ie in o){const ve=o[Ie];pe(ve)&&(r[Ie]=ve.bind(n))}if(s){const Ie=s.call(n,n);De(Ie)&&(t.data=Ra(Ie))}if(Yl=!0,i)for(const Ie in i){const ve=i[Ie],Mt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):pn,Zt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):pn,Kt=xt({get:Mt,set:Zt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:He=>Kt.value=He})}if(l)for(const Ie in l)Gp(l[Ie],r,n,Ie);if(c){const Ie=pe(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(ve=>{di(ve,Ie[ve])})}f&&zh(f,t,"c");function qe(Ie,ve){ce(ve)?ve.forEach(Mt=>Ie(Mt.bind(n))):ve&&Ie(ve.bind(n))}if(qe(vv,p),qe(Ki,g),qe(Ev,_),qe(Tv,N),qe(mv,C),qe(_v,I),qe(bv,v),qe(Av,re),qe(wv,w),qe($p,P),qe(qp,H),qe(Iv,y),ce(R))if(R.length){const Ie=t.exposed||(t.exposed={});R.forEach(ve=>{Object.defineProperty(Ie,ve,{get:()=>n[ve],set:Mt=>n[ve]=Mt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===pn&&(t.render=oe),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T),y&&Bp(t)}function kv(t,e,n=pn){ce(t)&&(t=Xl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zh(t,e,n){Xt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if(je(t)){const i=e[t];pe(i)&&Fr(s,i)}else if(pe(t))Fr(s,t.bind(n));else if(De(t))if(ce(t))t.forEach(i=>Gp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Fr(s,i,t)}}function Qp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Go(c,h,o,!0)),Go(c,e,o)),De(e)&&i.set(e,c),c}function Go(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Go(t,i,n,!0),s&&s.forEach(o=>Go(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Nv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Nv={data:Gh,props:Qh,emits:Qh,methods:ni,computed:ni,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:ni,directives:ni,watch:Ov,provide:Gh,inject:Dv};function Gh(t,e){return e?t?function(){return st(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return ni(Xl(t),Xl(e))}function Xl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?st(Object.create(null),t,e):e}function Qh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:st(Object.create(null),Wh(t),Wh(e??{})):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function Jp(){return{app:null,config:{isNativeTag:Zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function xv(t,e){return function(r,s=null){pe(r)||(r=st({},r)),s!=null&&!De(s)&&(s=null);const i=Jp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Vv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(h,...p)):pe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||Pe(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,h._container=f,f.__vue_app__=h,Da(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Xt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=ps;ps=h;try{return f()}finally{ps=p}}};return h}}let ps=null;const Lv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ot(e)}Modifiers`]||t[`${yr(e)}Modifiers`];function Mv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&Lv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>je(f)?f.trim():f)),o.number&&(s=n.map(Ia)));let l,c=r[l=gl(e)]||r[l=gl(Ot(e))];!c&&i&&(c=r[l=gl(yr(e))]),c&&Xt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Xt(h,t,6,s)}}const Fv=new WeakMap;function Yp(t,e,n=!1){const r=n?Fv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const f=Yp(h,e,!0);f&&(l=!0,st(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):st(o,i),De(t)&&r.set(t,o),o)}function ka(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,yr(e))||Ne(t,e))}function Jh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:N,inheritAttrs:C}=t,I=Ko(t);let D,P;try{if(n.shapeFlag&4){const H=s||r,oe=H;D=hn(h.call(oe,H,f,p,_,g,N)),P=l}else{const H=e;D=hn(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),P=e.props?l:Uv(l)}}catch(H){mi.length=0,Sa(H,t,1),D=Pe(wt)}let U=D;if(P&&C!==!1){const H=Object.keys(P),{shapeFlag:oe}=U;H.length&&oe&7&&(i&&H.some(ya)&&(P=Bv(P,i)),U=pr(U,P,!1,!0))}return n.dirs&&(U=pr(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&Si(U,n.transition),D=U,Ko(I),D}const Uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},Bv=(t,e)=>{const n={};for(const r in t)(!ya(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Xp(o,r,g)&&!ka(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Yh(r,o,h):!0:!!o;return!1}function Yh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Xp(e,t,i)&&!ka(n,i))return!0}return!1}function Xp(t,e,n){const r=t[n],s=e[n];return n==="style"&&De(r)&&De(s)?!qi(r,s):r!==s}function $v({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Zp={},eg=()=>Object.create(Zp),tg=t=>Object.getPrototypeOf(t)===Zp;function qv(t,e,n,r=!1){const s={},i=eg();t.propsDefaults=Object.create(null),ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ka(t.emitsOptions,g))continue;const _=e[g];if(c)if(Ne(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const N=Ot(g);s[N]=Zl(c,l,N,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{ng(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ne(e,p)&&((f=yr(p))===p||!Ne(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Zl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],h=!0)}h&&Nn(t.attrs,"set","")}function ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ui(c))continue;const h=e[c];let f;s&&Ne(s,f=Ot(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:ka(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||Me;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Zl(s,c,p,h[p],t,!Ne(h,p))}}return o}function Zl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Wi(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===yr(n))&&(r=!0))}return r}const Kv=new WeakMap;function rg(t,e,n=!1){const r=n?Kv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const f=p=>{c=!0;const[g,_]=rg(p,e,!0);st(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return De(t)&&r.set(t,cs),cs;if(ce(i))for(let f=0;f<i.length;f++){const p=Ot(i[f]);Xh(p)&&(o[p]=Me)}else if(i)for(const f in i){const p=Ot(f);if(Xh(p)){const g=i[f],_=o[p]=ce(g)||pe(g)?{type:g}:st({},g),N=_.type;let C=!1,I=!0;if(ce(N))for(let D=0;D<N.length;++D){const P=N[D],U=pe(P)&&P.name;if(U==="Boolean"){C=!0;break}else U==="String"&&(I=!1)}else C=pe(N)&&N.name==="Boolean";_[0]=C,_[1]=I,(C||Ne(_,"default"))&&l.push(p)}}const h=[o,l];return De(t)&&r.set(t,h),h}function Xh(t){return t[0]!=="$"&&!ui(t)}const qc=t=>t==="_"||t==="_ctx"||t==="$stable",Hc=t=>ce(t)?t.map(hn):[hn(t)],Wv=(t,e,n)=>{if(e._n)return e;const r=tt((...s)=>Hc(e(...s)),n);return r._c=!1,r},sg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qc(s))continue;const i=t[s];if(pe(i))e[s]=Wv(s,i,r);else if(i!=null){const o=Hc(i);e[s]=()=>o}}},ig=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},og=(t,e,n)=>{for(const r in e)(n||!qc(r))&&(t[r]=e[r])},zv=(t,e,n)=>{const r=t.slots=eg();if(t.vnode.shapeFlag&32){const s=e._;s?(og(r,e,n),n&&rp(r,"_",s,!0)):sg(e,r)}else e&&ig(t,e)},Gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:og(s,e,n):(i=!e.$stable,sg(e,s)),o=e}else e&&(ig(t,e),o={default:1});if(i)for(const l in s)!qc(l)&&o[l]==null&&delete s[l]},Pt=Zv;function Qv(t){return Jv(t)}function Jv(t,e){const n=wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=pn,insertStaticContent:N}=t,C=(E,b,k,L=null,B=null,M=null,G=void 0,W=null,K=!!b.dynamicChildren)=>{if(E===b)return;E&&!Dr(E,b)&&(L=F(E),He(E,B,M,!0),E=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:j,ref:se,shapeFlag:J}=b;switch(j){case Na:I(E,b,k,L);break;case wt:D(E,b,k,L);break;case wl:E==null&&P(b,k,L,G);break;case Oe:A(E,b,k,L,B,M,G,W,K);break;default:J&1?oe(E,b,k,L,B,M,G,W,K):J&6?T(E,b,k,L,B,M,G,W,K):(J&64||J&128)&&j.process(E,b,k,L,B,M,G,W,K,ee)}se!=null&&B?pi(se,E&&E.ref,M,b||E,!b):se==null&&E&&E.ref!=null&&pi(E.ref,null,M,E,!0)},I=(E,b,k,L)=>{if(E==null)r(b.el=l(b.children),k,L);else{const B=b.el=E.el;b.children!==E.children&&h(B,b.children)}},D=(E,b,k,L)=>{E==null?r(b.el=c(b.children||""),k,L):b.el=E.el},P=(E,b,k,L)=>{[E.el,E.anchor]=N(E.children,b,k,L,E.el,E.anchor)},U=({el:E,anchor:b},k,L)=>{let B;for(;E&&E!==b;)B=g(E),r(E,k,L),E=B;r(b,k,L)},H=({el:E,anchor:b})=>{let k;for(;E&&E!==b;)k=g(E),s(E),E=k;s(b)},oe=(E,b,k,L,B,M,G,W,K)=>{if(b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),E==null)re(b,k,L,B,M,G,W,K);else{const j=E.el&&E.el._isVueCE?E.el:null;try{j&&j._beginPatch(),y(E,b,B,M,G,W,K)}finally{j&&j._endPatch()}}},re=(E,b,k,L,B,M,G,W)=>{let K,j;const{props:se,shapeFlag:J,transition:te,dirs:ue}=E;if(K=E.el=o(E.type,M,se&&se.is,se),J&8?f(K,E.children):J&16&&v(E.children,K,null,L,B,Il(E,M),G,W),ue&&br(E,null,L,"created"),w(K,E,E.scopeId,G,L),se){for(const me in se)me!=="value"&&!ui(me)&&i(K,me,null,se[me],M,L);"value"in se&&i(K,"value",null,se.value,M),(j=se.onVnodeBeforeMount)&&ln(j,L,E)}ue&&br(E,null,L,"beforeMount");const le=Yv(B,te);le&&te.beforeEnter(K),r(K,b,k),((j=se&&se.onVnodeMounted)||le||ue)&&Pt(()=>{try{j&&ln(j,L,E),le&&te.enter(K),ue&&br(E,null,L,"mounted")}finally{}},B)},w=(E,b,k,L,B)=>{if(k&&_(E,k),L)for(let M=0;M<L.length;M++)_(E,L[M]);if(B){let M=B.subTree;if(b===M||cg(M.type)&&(M.ssContent===b||M.ssFallback===b)){const G=B.vnode;w(E,G,G.scopeId,G.slotScopeIds,B.parent)}}},v=(E,b,k,L,B,M,G,W,K=0)=>{for(let j=K;j<E.length;j++){const se=E[j]=W?kn(E[j]):hn(E[j]);C(null,se,b,k,L,B,M,G,W)}},y=(E,b,k,L,B,M,G)=>{const W=b.el=E.el;let{patchFlag:K,dynamicChildren:j,dirs:se}=b;K|=E.patchFlag&16;const J=E.props||Me,te=b.props||Me;let ue;if(k&&Rr(k,!1),(ue=te.onVnodeBeforeUpdate)&&ln(ue,k,b,E),se&&br(b,E,k,"beforeUpdate"),k&&Rr(k,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&f(W,""),j?R(E.dynamicChildren,j,W,k,L,Il(b,B),M):G||ve(E,b,W,null,k,L,Il(b,B),M,!1),K>0){if(K&16)S(W,J,te,k,B);else if(K&2&&J.class!==te.class&&i(W,"class",null,te.class,B),K&4&&i(W,"style",J.style,te.style,B),K&8){const le=b.dynamicProps;for(let me=0;me<le.length;me++){const Ae=le[me],We=J[Ae],Ye=te[Ae];(Ye!==We||Ae==="value")&&i(W,Ae,We,Ye,B,k)}}K&1&&E.children!==b.children&&f(W,b.children)}else!G&&j==null&&S(W,J,te,k,B);((ue=te.onVnodeUpdated)||se)&&Pt(()=>{ue&&ln(ue,k,b,E),se&&br(b,E,k,"updated")},L)},R=(E,b,k,L,B,M,G)=>{for(let W=0;W<b.length;W++){const K=E[W],j=b[W],se=K.el&&(K.type===Oe||!Dr(K,j)||K.shapeFlag&198)?p(K.el):k;C(K,j,se,null,L,B,M,G,!0)}},S=(E,b,k,L,B)=>{if(b!==k){if(b!==Me)for(const M in b)!ui(M)&&!(M in k)&&i(E,M,b[M],null,B,L);for(const M in k){if(ui(M))continue;const G=k[M],W=b[M];G!==W&&M!=="value"&&i(E,M,W,G,B,L)}"value"in k&&i(E,"value",b.value,k.value,B)}},A=(E,b,k,L,B,M,G,W,K)=>{const j=b.el=E?E.el:l(""),se=b.anchor=E?E.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ue}=b;ue&&(W=W?W.concat(ue):ue),E==null?(r(j,k,L),r(se,k,L),v(b.children||[],k,se,B,M,G,W,K)):J>0&&J&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(R(E.dynamicChildren,te,k,B,M,G,W),(b.key!=null||B&&b===B.subTree)&&Kc(E,b,!0)):ve(E,b,k,se,B,M,G,W,K)},T=(E,b,k,L,B,M,G,W,K)=>{b.slotScopeIds=W,E==null?b.shapeFlag&512?B.ctx.activate(b,k,L,G,K):Se(b,k,L,B,M,G,K):Ze(E,b,K)},Se=(E,b,k,L,B,M,G)=>{const W=E.component=oE(E,L,B);if(Ca(E)&&(W.ctx.renderer=ee),aE(W,!1,G),W.asyncDep){if(B&&B.registerDep(W,qe,G),!E.el){const K=W.subTree=Pe(wt);D(null,K,b,k),E.placeholder=K.el}}else qe(W,E,b,k,B,M,G)},Ze=(E,b,k)=>{const L=b.component=E.component;if(jv(E,b,k))if(L.asyncDep&&!L.asyncResolved){Ie(L,b,k);return}else L.next=b,L.update();else b.el=E.el,L.vnode=b},qe=(E,b,k,L,B,M,G)=>{const W=()=>{if(E.isMounted){let{next:J,bu:te,u:ue,parent:le,vnode:me}=E;{const mt=ag(E);if(mt){J&&(J.el=me.el,Ie(E,J,G)),mt.asyncDep.then(()=>{Pt(()=>{E.isUnmounted||j()},B)});return}}let Ae=J,We;Rr(E,!1),J?(J.el=me.el,Ie(E,J,G)):J=me,te&&Do(te),(We=J.props&&J.props.onVnodeBeforeUpdate)&&ln(We,le,J,me),Rr(E,!0);const Ye=Jh(E),Wt=E.subTree;E.subTree=Ye,C(Wt,Ye,p(Wt.el),F(Wt),E,B,M),J.el=Ye.el,Ae===null&&$v(E,Ye.el),ue&&Pt(ue,B),(We=J.props&&J.props.onVnodeUpdated)&&Pt(()=>ln(We,le,J,me),B)}else{let J;const{el:te,props:ue}=b,{bm:le,m:me,parent:Ae,root:We,type:Ye}=E,Wt=ds(b);Rr(E,!1),le&&Do(le),!Wt&&(J=ue&&ue.onVnodeBeforeMount)&&ln(J,Ae,b),Rr(E,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(Ye,E.parent?E.parent.type:void 0);const mt=E.subTree=Jh(E);C(null,mt,k,L,E,B,M),b.el=mt.el}if(me&&Pt(me,B),!Wt&&(J=ue&&ue.onVnodeMounted)){const mt=b;Pt(()=>ln(J,Ae,mt),B)}(b.shapeFlag&256||Ae&&ds(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&Pt(E.a,B),E.isMounted=!0,b=k=L=null}};E.scope.on();const K=E.effect=new ap(W);E.scope.off();const j=E.update=K.run.bind(K),se=E.job=K.runIfDirty.bind(K);se.i=E,se.id=E.uid,K.scheduler=()=>$c(se),Rr(E,!0),j()},Ie=(E,b,k)=>{b.component=E;const L=E.vnode.props;E.vnode=b,E.next=null,Hv(E,b.props,L,k),Gv(E,b.children,k),Mn(),Uh(E),Fn()},ve=(E,b,k,L,B,M,G,W,K=!1)=>{const j=E&&E.children,se=E?E.shapeFlag:0,J=b.children,{patchFlag:te,shapeFlag:ue}=b;if(te>0){if(te&128){Zt(j,J,k,L,B,M,G,W,K);return}else if(te&256){Mt(j,J,k,L,B,M,G,W,K);return}}ue&8?(se&16&&Vt(j,B,M),J!==j&&f(k,J)):se&16?ue&16?Zt(j,J,k,L,B,M,G,W,K):Vt(j,B,M,!0):(se&8&&f(k,""),ue&16&&v(J,k,L,B,M,G,W,K))},Mt=(E,b,k,L,B,M,G,W,K)=>{E=E||cs,b=b||cs;const j=E.length,se=b.length,J=Math.min(j,se);let te;for(te=0;te<J;te++){const ue=b[te]=K?kn(b[te]):hn(b[te]);C(E[te],ue,k,null,B,M,G,W,K)}j>se?Vt(E,B,M,!0,!1,J):v(b,k,L,B,M,G,W,K,J)},Zt=(E,b,k,L,B,M,G,W,K)=>{let j=0;const se=b.length;let J=E.length-1,te=se-1;for(;j<=J&&j<=te;){const ue=E[j],le=b[j]=K?kn(b[j]):hn(b[j]);if(Dr(ue,le))C(ue,le,k,null,B,M,G,W,K);else break;j++}for(;j<=J&&j<=te;){const ue=E[J],le=b[te]=K?kn(b[te]):hn(b[te]);if(Dr(ue,le))C(ue,le,k,null,B,M,G,W,K);else break;J--,te--}if(j>J){if(j<=te){const ue=te+1,le=ue<se?b[ue].el:L;for(;j<=te;)C(null,b[j]=K?kn(b[j]):hn(b[j]),k,le,B,M,G,W,K),j++}}else if(j>te)for(;j<=J;)He(E[j],B,M,!0),j++;else{const ue=j,le=j,me=new Map;for(j=le;j<=te;j++){const at=b[j]=K?kn(b[j]):hn(b[j]);at.key!=null&&me.set(at.key,j)}let Ae,We=0;const Ye=te-le+1;let Wt=!1,mt=0;const Gn=new Array(Ye);for(j=0;j<Ye;j++)Gn[j]=0;for(j=ue;j<=J;j++){const at=E[j];if(We>=Ye){He(at,B,M,!0);continue}let zt;if(at.key!=null)zt=me.get(at.key);else for(Ae=le;Ae<=te;Ae++)if(Gn[Ae-le]===0&&Dr(at,b[Ae])){zt=Ae;break}zt===void 0?He(at,B,M,!0):(Gn[zt-le]=j+1,zt>=mt?mt=zt:Wt=!0,C(at,b[zt],k,null,B,M,G,W,K),We++)}const Ms=Wt?Xv(Gn):cs;for(Ae=Ms.length-1,j=Ye-1;j>=0;j--){const at=le+j,zt=b[at],oo=b[at+1],Yr=at+1<se?oo.el||lg(oo):L;Gn[j]===0?C(null,zt,k,Yr,B,M,G,W,K):Wt&&(Ae<0||j!==Ms[Ae]?Kt(zt,k,Yr,2):Ae--)}}},Kt=(E,b,k,L,B=null)=>{const{el:M,type:G,transition:W,children:K,shapeFlag:j}=E;if(j&6){Kt(E.component.subTree,b,k,L);return}if(j&128){E.suspense.move(b,k,L);return}if(j&64){G.move(E,b,k,ee);return}if(G===Oe){r(M,b,k);for(let J=0;J<K.length;J++)Kt(K[J],b,k,L);r(E.anchor,b,k);return}if(G===wl){U(E,b,k);return}if(L!==2&&j&1&&W)if(L===0)W.persisted&&!M[Qt]?r(M,b,k):(W.beforeEnter(M),r(M,b,k),Pt(()=>W.enter(M),B));else{const{leave:J,delayLeave:te,afterLeave:ue}=W,le=()=>{E.ctx.isUnmounted?s(M):r(M,b,k)},me=()=>{const Ae=M._isLeaving||!!M[Qt];M._isLeaving&&M[Qt](!0),W.persisted&&!Ae?le():J(M,()=>{le(),ue&&ue()})};te?te(M,le,me):me()}else r(M,b,k)},He=(E,b,k,L=!1,B=!1)=>{const{type:M,props:G,ref:W,children:K,dynamicChildren:j,shapeFlag:se,patchFlag:J,dirs:te,cacheIndex:ue,memo:le}=E;if(J===-2&&(B=!1),W!=null&&(Mn(),pi(W,null,k,E,!0),Fn()),ue!=null&&(b.renderCache[ue]=void 0),se&256){b.ctx.deactivate(E);return}const me=se&1&&te,Ae=!ds(E);let We;if(Ae&&(We=G&&G.onVnodeBeforeUnmount)&&ln(We,b,E),se&6)Ft(E.component,k,L);else{if(se&128){E.suspense.unmount(k,L);return}me&&br(E,null,b,"beforeUnmount"),se&64?E.type.remove(E,b,k,ee,L):j&&!j.hasOnce&&(M!==Oe||J>0&&J&64)?Vt(j,b,k,!1,!0):(M===Oe&&J&384||!B&&se&16)&&Vt(K,b,k),L&&Ke(E)}const Ye=le!=null&&ue==null;(Ae&&(We=G&&G.onVnodeUnmounted)||me||Ye)&&Pt(()=>{We&&ln(We,b,E),me&&br(E,null,b,"unmounted"),Ye&&(E.el=null)},k)},Ke=E=>{const{type:b,el:k,anchor:L,transition:B}=E;if(b===Oe){zn(k,L);return}if(b===wl){H(E);return}const M=()=>{s(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:G,delayLeave:W}=B,K=()=>G(k,M);W?W(E.el,M,K):K()}else M()},zn=(E,b)=>{let k;for(;E!==b;)k=g(E),s(E),E=k;s(b)},Ft=(E,b,k)=>{const{bum:L,scope:B,job:M,subTree:G,um:W,m:K,a:j}=E;Zh(K),Zh(j),L&&Do(L),B.stop(),M&&(M.flags|=8,He(G,E,b,k)),W&&Pt(W,b),Pt(()=>{E.isUnmounted=!0},b)},Vt=(E,b,k,L=!1,B=!1,M=0)=>{for(let G=M;G<E.length;G++)He(E[G],b,k,L,B)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const b=g(E.anchor||E.el),k=b&&b[Np];return k?g(k):b};let Y=!1;const Q=(E,b,k)=>{let L;E==null?b._vnode&&(He(b._vnode,null,null,!0),L=b._vnode.component):C(b._vnode||null,E,b,null,null,null,k),b._vnode=E,Y||(Y=!0,Uh(L),Rp(),Y=!1)},ee={p:C,um:He,m:Kt,r:Ke,mt:Se,mc:v,pc:ve,pbc:R,n:F,o:t};return{render:Q,hydrate:void 0,createApp:xv(Q)}}function Il({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kc(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Kc(o,l)),l.type===Na&&(l.patchFlag===-1&&(l=s[i]=kn(l)),l.el=o.el),l.type===wt&&!l.el&&(l.el=o.el)}}function Xv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ag(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ag(e)}function Zh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function lg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?lg(e.subTree):null}const cg=t=>t.__isSuspense;function Zv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):ov(t)}const Oe=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),mi=[];let jt=null;function Z(t=!1){mi.push(jt=t?null:[])}function eE(){mi.pop(),jt=mi[mi.length-1]||null}let Ci=1;function Qo(t,e=!1){Ci+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function ug(t){return t.dynamicChildren=Ci>0?jt||cs:null,eE(),Ci>0&&jt&&jt.push(t),t}function ae(t,e,n,r,s,i){return ug(V(t,e,n,r,s,i,!0))}function mn(t,e,n,r,s){return ug(Pe(t,e,n,r,s,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const hg=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||bt(t)||pe(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===Oe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&Oo(e),scopeId:Cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return l?(Wc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Ci>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const Pe=tE;function tE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kp)&&(t=wt),Pi(t)){const l=pr(t,e,!0);return n&&Wc(l,n),Ci>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(fE(t)&&(t=t.__vccOpts),e){e=nE(e);let{class:l,style:c}=e;l&&!je(l)&&(e.class=Jt(l)),De(c)&&(Bc(c)&&!ce(c)&&(c=st({},c)),e.style=Aa(c))}const o=je(t)?1:cg(t)?128:Dp(t)?64:De(t)?4:pe(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function nE(t){return t?Bc(t)||tg(t)?st({},t):t:null}function pr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?rE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&hg(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(Oo(e)):[i,Oo(e)]:Oo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Si(f,c.clone(f)),f}function xe(t=" ",e=0){return Pe(Na,null,t,e)}function ut(t="",e=!1){return e?(Z(),mn(wt,null,t)):Pe(wt,null,t)}function hn(t){return t==null||typeof t=="boolean"?Pe(wt):ce(t)?Pe(Oe,null,t.slice()):Pi(t)?kn(t):Pe(Na,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pr(t)}function Wc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!tg(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function rE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jt([e.class,r.class]));else if(s==="style")e.style=Aa([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ya(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){Xt(t,e,7,[n,r])}const sE=Jp();let iE=0;function oE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sE,i={uid:iE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(r,s),emitsOptions:Yp(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mv.bind(null,i),t.ce&&t.ce(i),i}let At=null;const fg=()=>At||dt;let Jo,ec;{const t=wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>At=n),ec=e("__VUE_SSR_SETTERS__",n=>ki=n)}const Wi=t=>{const e=At;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},ef=()=>{At&&At.scope.off(),Jo(null)};function dg(t){return t.vnode.shapeFlag&4}let ki=!1;function aE(t,e=!1,n=!1){e&&ec(e);const{props:r,children:s}=t.vnode,i=dg(t);qv(t,r,i,e),zv(t,s,n||e);const o=i?lE(t,e):void 0;return e&&ec(!1),o}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cv);const{setup:r}=n;if(r){Mn();const s=t.setupContext=r.length>1?uE(t):null,i=Wi(t),o=Hi(r,t,0,[t.props,s]),l=ep(o);if(Fn(),i(),(l||t.sp)&&!ds(t)&&Bp(t),l){if(o.then(ef,ef),e)return o.then(c=>{tf(t,c)}).catch(c=>{Sa(c,t,0)});t.asyncDep=o}else tf(t,o)}else pg(t)}function tf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=wp(e)),pg(t)}function pg(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=Wi(t);Mn();try{Pv(t)}finally{Fn(),s()}}}const cE={get(t,e){return Tt(t,"get",""),t[e]}};function uE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cE),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wp(Jy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)},has(e,n){return n in e||n in gi}})):t.proxy}function hE(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function fE(t){return pe(t)&&"__vccOpts"in t}const xt=(t,e)=>tv(t,e,ki);function zc(t,e,n){try{Qo(-1);const r=arguments.length;return r===2?De(e)&&!ce(e)?Pi(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pi(n)&&(n=[n]),Pe(t,e,n))}finally{Qo(1)}}const dE="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const nf=typeof window<"u"&&window.trustedTypes;if(nf)try{tc=nf.createPolicy("vue",{createHTML:t=>t})}catch{}const gg=tc?t=>tc.createHTML(t):t=>t,pE="http://www.w3.org/2000/svg",gE="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,rf=Pn&&Pn.createElement("template"),mE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(pE,t):e==="mathml"?Pn.createElementNS(gE,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{rf.innerHTML=gg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=rf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xn="transition",Xs="animation",Ni=Symbol("_vtc"),mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_E=st({},Vp,mg),yE=t=>(t.displayName="Transition",t.props=_E,t),Gc=yE((t,{slots:e})=>zc(gv,vE(t),e)),Sr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},sf=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function vE(t){const e={};for(const A in t)A in mg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,N=EE(s),C=N&&N[0],I=N&&N[1],{onBeforeEnter:D,onEnter:P,onEnterCancelled:U,onLeave:H,onLeaveCancelled:oe,onBeforeAppear:re=D,onAppear:w=P,onAppearCancelled:v=U}=e,y=(A,T,Se,Ze)=>{A._enterCancelled=Ze,Cr(A,T?f:l),Cr(A,T?h:o),Se&&Se()},R=(A,T)=>{A._isLeaving=!1,Cr(A,p),Cr(A,_),Cr(A,g),T&&T()},S=A=>(T,Se)=>{const Ze=A?w:P,qe=()=>y(T,A,Se);Sr(Ze,[T,qe]),of(()=>{Cr(T,A?c:i),Sn(T,A?f:l),sf(Ze)||af(T,r,C,qe)})};return st(e,{onBeforeEnter(A){Sr(D,[A]),Sn(A,i),Sn(A,o)},onBeforeAppear(A){Sr(re,[A]),Sn(A,c),Sn(A,h)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const Se=()=>R(A,T);Sn(A,p),A._enterCancelled?(Sn(A,g),uf(A)):(uf(A),Sn(A,g)),of(()=>{A._isLeaving&&(Cr(A,p),Sn(A,_),sf(H)||af(A,r,I,Se))}),Sr(H,[A,Se])},onEnterCancelled(A){y(A,!1,void 0,!0),Sr(U,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Sr(v,[A])},onLeaveCancelled(A){R(A),Sr(oe,[A])}})}function EE(t){if(t==null)return null;if(De(t))return[Al(t.enter),Al(t.leave)];{const e=Al(t);return[e,e]}}function Al(t){return Iy(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ni]||(t[Ni]=new Set)).add(e)}function Cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ni];n&&(n.delete(e),n.size||(t[Ni]=void 0))}function of(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let TE=0;function af(t,e,n,r){const s=t._endId=++TE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=IE(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=_=>{_.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(h,g)}function IE(t,e){const n=window.getComputedStyle(t),r=N=>(n[N]||"").split(", "),s=r(`${Xn}Delay`),i=r(`${Xn}Duration`),o=lf(s,i),l=r(`${Xs}Delay`),c=r(`${Xs}Duration`),h=lf(l,c);let f=null,p=0,g=0;e===Xn?o>0&&(f=Xn,p=o,g=i.length):e===Xs?h>0&&(f=Xs,p=h,g=c.length):(p=Math.max(o,h),f=p>0?o>h?Xn:Xs:null,g=f?f===Xn?i.length:c.length:0);const _=f===Xn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Xn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:_}}function lf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>cf(n)+cf(t[r])))}function cf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uf(t){return(t?t.ownerDocument:document).body.offsetHeight}function wE(t,e,n){const r=t[Ni];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hf=Symbol("_vod"),AE=Symbol("_vsh"),bE=Symbol(""),RE=/(?:^|;)\s*display\s*:/;function SE(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ri(r,l,"")}else for(const o in e)n[o]==null&&ri(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?PE(t,o,!je(e)&&e?e[o]:void 0,l)||ri(r,o,l):ri(r,o,"")}}else if(s){if(e!==n){const o=r[bE];o&&(n+=";"+o),r.cssText=n,i=RE.test(n)}}else e&&t.removeAttribute("style");hf in t&&(t[hf]=i?r.display:"",t[AE]&&(r.display="none"))}const ff=/\s*!important$/;function ri(t,e,n){if(ce(n))n.forEach(r=>ri(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=CE(t,e);ff.test(n)?t.setProperty(yr(r),n.replace(ff,""),"important"):t[r]=n}}const df=["Webkit","Moz","ms"],bl={};function CE(t,e){const n=bl[e];if(n)return n;let r=Ot(e);if(r!=="filter"&&r in t)return bl[e]=r;r=Ta(r);for(let s=0;s<df.length;s++){const i=df[s]+r;if(i in t)return bl[e]=i}return e}function PE(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&je(r)&&n===r}const pf="http://www.w3.org/1999/xlink";function gf(t,e,n,r,s,i=Cy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pf,e.slice(6,e.length)):t.setAttributeNS(pf,e,n):n==null||i&&!sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function mf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function kE(t,e,n,r){t.removeEventListener(e,n,r)}const _f=Symbol("_vei");function NE(t,e,n,r,s=null){const i=t[_f]||(t[_f]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=DE(e);if(r){const h=i[e]=xE(r,s);Or(t,l,h,c)}else o&&(kE(t,l,o,c),i[e]=void 0)}}const yf=/(?:Once|Passive|Capture)$/;function DE(t){let e;if(yf.test(t)){e={};let r;for(;r=t.match(yf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let Rl=0;const OE=Promise.resolve(),VE=()=>Rl||(OE.then(()=>Rl=0),Rl=Date.now());function xE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ce(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const h=o[c];h&&Xt(h,e,5,l)}}else Xt(s,e,5,[r])};return n.value=t,n.attached=VE(),n}const vf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,LE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wE(t,r,o):e==="style"?SE(t,n,r):_a(e)?ya(e)||NE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ME(t,e,r,o))?(mf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gf(t,e,r,o,i,e!=="value")):t._isVueCE&&(FE(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!je(r)))?mf(t,Ot(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gf(t,e,r,o))};function ME(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vf(e)&&je(n)?!1:e in t}function FE(t,e){const n=t._def.props;if(!n)return!1;const r=Ot(e);return Array.isArray(n)?n.some(s=>Ot(s)===r):Object.keys(n).some(s=>Ot(s)===r)}const Yo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Do(e,n):e};function UE(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign");function Tf(t,e,n){return e&&(t=t.trim()),n&&(t=Ia(t)),t}const _i={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[gs]=Yo(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{o.target.composing||t[gs](Tf(t.value,n,i))}),(n||i)&&Or(t,"change",()=>{t.value=Tf(t.value,n,i)}),e||(Or(t,"compositionstart",UE),Or(t,"compositionend",Ef),Or(t,"change",Ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[gs]=Yo(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ia(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},BE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=va(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ia(Xo(o)):Xo(o));t[gs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jc(()=>{t._assigning=!1})}),t[gs]=Yo(r)},mounted(t,{value:e}){If(t,e)},beforeUpdate(t,e,n){t[gs]=Yo(n)},updated(t,{value:e}){t._assigning||If(t,e)}};function If(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!va(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Xo(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=ky(e,l)>-1}else o.selected=e.has(l);else if(qi(Xo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xo(t){return"_value"in t?t._value:t.value}const jE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jE.some(n=>t[`${n}Key`]&&!e.includes(n))},Zo=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=$E[e[o]];if(l&&l(s,e))return}return t(s,...i)})},qE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},HE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=yr(s.key);if(e.some(o=>o===i||qE[o]===i))return t(s)})},KE=st({patchProp:LE},mE);let wf;function WE(){return wf||(wf=Qv(KE))}const zE=(...t)=>{const e=WE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,GE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function GE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function QE(t){return je(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ss=typeof document<"u";function _g(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_g(t.default)}const ke=Object.assign;function Sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const yi=()=>{},on=Array.isArray;function Af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const yg=/#/g,YE=/&/g,XE=/\//g,ZE=/=/g,eT=/\?/g,vg=/\+/g,tT=/%5B/g,nT=/%5D/g,Eg=/%5E/g,rT=/%60/g,Tg=/%7B/g,sT=/%7C/g,Ig=/%7D/g,iT=/%20/g;function Qc(t){return t==null?"":encodeURI(""+t).replace(sT,"|").replace(tT,"[").replace(nT,"]")}function oT(t){return Qc(t).replace(Tg,"{").replace(Ig,"}").replace(Eg,"^")}function nc(t){return Qc(t).replace(vg,"%2B").replace(iT,"+").replace(yg,"%23").replace(YE,"%26").replace(rT,"`").replace(Tg,"{").replace(Ig,"}").replace(Eg,"^")}function aT(t){return nc(t).replace(ZE,"%3D")}function lT(t){return Qc(t).replace(yg,"%23").replace(eT,"%3F")}function cT(t){return lT(t).replace(XE,"%2F")}function Di(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const uT=/\/$/,hT=t=>t.replace(uT,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=gT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Di(o)}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ts(e.matched[r],n.matched[s])&&wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!pT(t[n],e[n]))return!1;return!0}function pT(t,e){return on(t)?Rf(t,e):on(e)?Rf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Rf(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let rc=function(t){return t.pop="pop",t.push="push",t}({}),Pl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function mT(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hT(t)}const _T=/^[^#]+#/;function yT(t,e){return t.replace(_T,"#")+e}function vT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function ET(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sf(t,e){return(history.state?history.state.position-e:-1)+t}const sc=new Map;function TT(t,e){sc.set(t,e)}function IT(t){const e=sc.get(t);return sc.delete(t),e}function wT(t){return typeof t=="string"||t&&typeof t=="object"}function Ag(t){return typeof t=="string"||typeof t=="symbol"}let Qe=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const bg=Symbol("");Qe.MATCHER_NOT_FOUND+"",Qe.NAVIGATION_GUARD_REDIRECT+"",Qe.NAVIGATION_ABORTED+"",Qe.NAVIGATION_CANCELLED+"",Qe.NAVIGATION_DUPLICATED+"";function Is(t,e){return ke(new Error,{type:t,[bg]:!0},e)}function Cn(t,e){return t instanceof Error&&bg in t&&(e==null||!!(t.type&e))}const AT=["params","query","hash"];function bT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of AT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function RT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(vg," "),i=s.indexOf("="),o=Di(i<0?s:s.slice(0,i)),l=i<0?null:Di(s.slice(i+1));if(o in e){let c=e[o];on(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Cf(t){let e="";for(let n in t){const r=t[n];if(n=aT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(s=>s&&nc(s)):[r&&nc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function ST(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CT=Symbol(""),Pf=Symbol(""),Va=Symbol(""),Jc=Symbol(""),ic=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Is(Qe.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):wT(g)?c(Is(Qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function kl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(_g(c)){const h=(c.__vccOpts||c)[e];h&&i.push(rr(h,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=JE(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&rr(g,n,r,o,l,s)()}))}}return i}function PT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Ts(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Ts(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kT=()=>location.protocol+"//"+location.host;function Rg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),bf(l,"")}return bf(n,t)+r+s}function NT(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=Rg(t,location),N=n.value,C=e.value;let I=0;if(g){if(n.value=_,e.value=g,o&&o===N){o=null;return}I=C?g.position-C.position:0}else r(_);s.forEach(D=>{D(n.value,N,{delta:I,type:rc.pop,direction:I?I>0?Pl.forward:Pl.back:Pl.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const N=s.indexOf(g);N>-1&&s.splice(N,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ke({},g.state,{scroll:Oa()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:h,destroy:p}}function kf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function DT(t){const{history:e,location:n}=window,r={value:Rg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:kT()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(c,h){i(c,ke({},e.state,kf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const f=ke({},s.value,e.state,{forward:c,scroll:Oa()});i(f.current,f,!0),i(c,ke({},kf(r.value,c,null),{position:f.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function OT(t){t=mT(t);const e=DT(t),n=NT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:yT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function VT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),OT(t)}let Vr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var et=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(et||{});const xT={type:Vr.Static,value:""},LT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[xT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=et.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===et.Static?i.push({type:Vr.Static,value:h}):n===et.Param||n===et.ParamRegExp||n===et.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Vr.Param,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==et.ParamRegExp){r=n,n=et.EscapeNext;continue}switch(n){case et.Static:c==="/"?(h&&p(),o()):c===":"?(p(),n=et.Param):g();break;case et.EscapeNext:g(),n=r;break;case et.Param:c==="("?n=et.ParamRegExp:LT.test(c)?g():(p(),n=et.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case et.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=et.ParamRegExpEnd:f+=c;break;case et.ParamRegExpEnd:p(),n=et.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===et.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Nf="[^/]+?",FT={sensitive:!1,strict:!1,start:!0,end:!0};var kt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(kt||{});const UT=/[.+*?^${}()[\]/\\]/g;function BT(t,e){const n=ke({},FT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[kt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=kt.Segment+(n.sensitive?kt.BonusCaseSensitive:0);if(g.type===Vr.Static)p||(s+="/"),s+=g.value.replace(UT,"\\$&"),_+=kt.Static;else if(g.type===Vr.Param){const{value:N,repeatable:C,optional:I,regexp:D}=g;i.push({name:N,repeatable:C,optional:I});const P=D||Nf;if(P!==Nf){_+=kt.BonusCustomRegExp;try{`${P}`}catch(H){throw new Error(`Invalid custom RegExp for param "${N}" (${P}): `+H.message)}}let U=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;p||(U=I&&h.length<2?`(?:/${U})`:"/"+U),I&&(U+="?"),s+=U,_+=kt.Dynamic,I&&(_+=kt.BonusOptional),C&&(_+=kt.BonusRepeatable),P===".*"&&(_+=kt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=kt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",N=i[g-1];p[N.name]=_&&N.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===Vr.Static)f+=_.value;else if(_.type===Vr.Param){const{value:N,repeatable:C,optional:I}=_,D=N in h?h[N]:"";if(on(D)&&!C)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const P=on(D)?D.join("/"):D;if(!P)if(I)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${N}"`);f+=P}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function jT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===kt.Static+kt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===kt.Static+kt.Segment?1:-1:0}function Sg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $T={strict:!1,end:!0,sensitive:!1};function qT(t,e,n){const r=BT(MT(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HT(t,e){const n=[],r=new Map;e=Af($T,e);function s(p){return r.get(p)}function i(p,g,_){const N=!_,C=Vf(p);C.aliasOf=_&&_.record;const I=Af(e,p),D=[C];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of H)D.push(Vf(ke({},C,{components:_?_.record.components:C.components,path:oe,aliasOf:_?_.record:C})))}let P,U;for(const H of D){const{path:oe}=H;if(g&&oe[0]!=="/"){const re=g.record.path,w=re[re.length-1]==="/"?"":"/";H.path=g.record.path+(oe&&w+oe)}if(P=qT(H,g,I),_?_.alias.push(P):(U=U||P,U!==P&&U.alias.push(P),N&&p.name&&!xf(P)&&o(p.name)),Cg(P)&&c(P),C.children){const re=C.children;for(let w=0;w<re.length;w++)i(re[w],P,_&&_.children[w])}_=_||P}return U?()=>{o(U)}:yi}function o(p){if(Ag(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=zT(p,n);n.splice(g,0,p),p.record.name&&!xf(p)&&r.set(p.record.name,p)}function h(p,g){let _,N={},C,I;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Is(Qe.MATCHER_NOT_FOUND,{location:p});I=_.record.name,N=ke(Of(g.params,_.keys.filter(U=>!U.optional).concat(_.parent?_.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&Of(p.params,_.keys.map(U=>U.name))),C=_.stringify(N)}else if(p.path!=null)C=p.path,_=n.find(U=>U.re.test(C)),_&&(N=_.parse(C),I=_.record.name);else{if(_=g.name?r.get(g.name):n.find(U=>U.re.test(g.path)),!_)throw Is(Qe.MATCHER_NOT_FOUND,{location:p,currentLocation:g});I=_.record.name,N=ke({},g.params,p.params),C=_.stringify(N)}const D=[];let P=_;for(;P;)D.unshift(P.record),P=P.parent;return{name:I,path:C,params:N,matched:D,meta:WT(D)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Of(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:KT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function KT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WT(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function zT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Sg(t,e[i])<0?r=i:n=i+1}const s=GT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GT(t){let e=t;for(;e=e.parent;)if(Cg(e)&&Sg(t,e)===0)return e}function Cg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Lf(t){const e=qt(Va),n=qt(Jc),r=xt(()=>{const c=Bt(t.to);return e.resolve(c)}),s=xt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Ts.bind(null,f));if(g>-1)return g;const _=Mf(c[h-2]);return h>1&&Mf(f)===_&&p[p.length-1].path!==_?p.findIndex(Ts.bind(null,c[h-2])):g}),i=xt(()=>s.value>-1&&ZT(n.params,r.value.params)),o=xt(()=>s.value>-1&&s.value===n.matched.length-1&&wg(n.params,r.value.params));function l(c={}){if(XT(c)){const h=e[Bt(t.replace)?"replace":"push"](Bt(t.to)).catch(yi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function QT(t){return t.length===1?t[0]:t}const JT=Up({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lf,setup(t,{slots:e}){const n=Ra(Lf(t)),{options:r}=qt(Va),s=xt(()=>({[Ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&QT(e.default(n));return t.custom?i:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YT=JT;function XT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Mf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ff=(t,e,n)=>t??e??n,eI=Up({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(ic),s=xt(()=>t.route||r.value),i=qt(Pf,0),o=xt(()=>{let h=Bt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=xt(()=>s.value.matched[o.value]);di(Pf,xt(()=>o.value+1)),di(CT,l),di(ic,s);const c=Fe();return Fr(()=>[c.value,l.value,t.name],([h,f,p],[g,_,N])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!Ts(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(C=>C(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Uf(n.default,{Component:g,route:h});const _=p.props[f],N=_?_===!0?h.params:typeof _=="function"?_(h):_:null,I=zc(g,ke({},N,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Uf(n.default,{Component:I,route:h})||I}}});function Uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tI=eI;function nI(t){const e=HT(t.routes,t),n=t.parseQuery||RT,r=t.stringifyQuery||Cf,s=t.history,i=Zs(),o=Zs(),l=Zs(),c=Yy(Zn);let h=Zn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Sl.bind(null,F=>""+F),p=Sl.bind(null,cT),g=Sl.bind(null,Di);function _(F,Y){let Q,ee;return Ag(F)?(Q=e.getRecordMatcher(F),ee=Y):ee=F,e.addRoute(ee,Q)}function N(F){const Y=e.getRecordMatcher(F);Y&&e.removeRoute(Y)}function C(){return e.getRoutes().map(F=>F.record)}function I(F){return!!e.getRecordMatcher(F)}function D(F,Y){if(Y=ke({},Y||c.value),typeof F=="string"){const k=Cl(n,F,Y.path),L=e.resolve({path:k.path},Y),B=s.createHref(k.fullPath);return ke(k,L,{params:g(L.params),hash:Di(k.hash),redirectedFrom:void 0,href:B})}let Q;if(F.path!=null)Q=ke({},F,{path:Cl(n,F.path,Y.path).path});else{const k=ke({},F.params);for(const L in k)k[L]==null&&delete k[L];Q=ke({},F,{params:p(k)}),Y.params=p(Y.params)}const ee=e.resolve(Q,Y),ye=F.hash||"";ee.params=f(g(ee.params));const E=fT(r,ke({},F,{hash:oT(ye),path:ee.path})),b=s.createHref(E);return ke({fullPath:E,hash:ye,query:r===Cf?ST(F.query):F.query||{}},ee,{redirectedFrom:void 0,href:b})}function P(F){return typeof F=="string"?Cl(n,F,c.value.path):ke({},F)}function U(F,Y){if(h!==F)return Is(Qe.NAVIGATION_CANCELLED,{from:Y,to:F})}function H(F){return w(F)}function oe(F){return H(ke(P(F),{replace:!0}))}function re(F,Y){const Q=F.matched[F.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let ye=typeof ee=="function"?ee(F,Y):ee;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=P(ye):{path:ye},ye.params={}),ke({query:F.query,hash:F.hash,params:ye.path!=null?{}:F.params},ye)}}function w(F,Y){const Q=h=D(F),ee=c.value,ye=F.state,E=F.force,b=F.replace===!0,k=re(Q,ee);if(k)return w(ke(P(k),{state:typeof k=="object"?ke({},ye,k.state):ye,force:E,replace:b}),Y||Q);const L=Q;L.redirectedFrom=Y;let B;return!E&&dT(r,ee,Q)&&(B=Is(Qe.NAVIGATION_DUPLICATED,{to:L,from:ee}),Kt(ee,ee,!0,!1)),(B?Promise.resolve(B):R(L,ee)).catch(M=>Cn(M)?Cn(M,Qe.NAVIGATION_GUARD_REDIRECT)?M:Zt(M):ve(M,L,ee)).then(M=>{if(M){if(Cn(M,Qe.NAVIGATION_GUARD_REDIRECT))return w(ke({replace:b},P(M.to),{state:typeof M.to=="object"?ke({},ye,M.to.state):ye,force:E}),Y||L)}else M=A(L,ee,!0,b,ye);return S(L,ee,M),M})}function v(F,Y){const Q=U(F,Y);return Q?Promise.reject(Q):Promise.resolve()}function y(F){const Y=zn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(F):F()}function R(F,Y){let Q;const[ee,ye,E]=PT(F,Y);Q=kl(ee.reverse(),"beforeRouteLeave",F,Y);for(const k of ee)k.leaveGuards.forEach(L=>{Q.push(rr(L,F,Y))});const b=v.bind(null,F,Y);return Q.push(b),Vt(Q).then(()=>{Q=[];for(const k of i.list())Q.push(rr(k,F,Y));return Q.push(b),Vt(Q)}).then(()=>{Q=kl(ye,"beforeRouteUpdate",F,Y);for(const k of ye)k.updateGuards.forEach(L=>{Q.push(rr(L,F,Y))});return Q.push(b),Vt(Q)}).then(()=>{Q=[];for(const k of E)if(k.beforeEnter)if(on(k.beforeEnter))for(const L of k.beforeEnter)Q.push(rr(L,F,Y));else Q.push(rr(k.beforeEnter,F,Y));return Q.push(b),Vt(Q)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),Q=kl(E,"beforeRouteEnter",F,Y,y),Q.push(b),Vt(Q))).then(()=>{Q=[];for(const k of o.list())Q.push(rr(k,F,Y));return Q.push(b),Vt(Q)}).catch(k=>Cn(k,Qe.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function S(F,Y,Q){l.list().forEach(ee=>y(()=>ee(F,Y,Q)))}function A(F,Y,Q,ee,ye){const E=U(F,Y);if(E)return E;const b=Y===Zn,k=ss?history.state:{};Q&&(ee||b?s.replace(F.fullPath,ke({scroll:b&&k&&k.scroll},ye)):s.push(F.fullPath,ye)),c.value=F,Kt(F,Y,Q,b),Zt()}let T;function Se(){T||(T=s.listen((F,Y,Q)=>{if(!Ft.listening)return;const ee=D(F),ye=re(ee,Ft.currentRoute.value);if(ye){w(ke(ye,{replace:!0,force:!0}),ee).catch(yi);return}h=ee;const E=c.value;ss&&TT(Sf(E.fullPath,Q.delta),Oa()),R(ee,E).catch(b=>Cn(b,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_CANCELLED)?b:Cn(b,Qe.NAVIGATION_GUARD_REDIRECT)?(w(ke(P(b.to),{force:!0}),ee).then(k=>{Cn(k,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===rc.pop&&s.go(-1,!1)}).catch(yi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(b,ee,E))).then(b=>{b=b||A(ee,E,!1),b&&(Q.delta&&!Cn(b,Qe.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===rc.pop&&Cn(b,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),S(ee,E,b)}).catch(yi)}))}let Ze=Zs(),qe=Zs(),Ie;function ve(F,Y,Q){Zt(F);const ee=qe.list();return ee.length?ee.forEach(ye=>ye(F,Y,Q)):console.error(F),Promise.reject(F)}function Mt(){return Ie&&c.value!==Zn?Promise.resolve():new Promise((F,Y)=>{Ze.add([F,Y])})}function Zt(F){return Ie||(Ie=!F,Se(),Ze.list().forEach(([Y,Q])=>F?Q(F):Y()),Ze.reset()),F}function Kt(F,Y,Q,ee){const{scrollBehavior:ye}=t;if(!ss||!ye)return Promise.resolve();const E=!Q&&IT(Sf(F.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return jc().then(()=>ye(F,Y,E)).then(b=>b&&ET(b)).catch(b=>ve(b,F,Y))}const He=F=>s.go(F);let Ke;const zn=new Set,Ft={currentRoute:c,listening:!0,addRoute:_,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:C,resolve:D,options:t,push:H,replace:oe,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:qe.add,isReady:Mt,install(F){F.component("RouterLink",YT),F.component("RouterView",tI),F.config.globalProperties.$router=Ft,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),ss&&!Ke&&c.value===Zn&&(Ke=!0,H(s.location).catch(ee=>{}));const Y={};for(const ee in Zn)Object.defineProperty(Y,ee,{get:()=>c.value[ee],enumerable:!0});F.provide(Va,Ft),F.provide(Jc,Tp(Y)),F.provide(ic,c);const Q=F.unmount;zn.add(F),F.unmount=function(){zn.delete(F),zn.size<1&&(h=Zn,T&&T(),T=null,c.value=Zn,Ke=!1,Ie=!1),Q()}}};function Vt(F){return F.reduce((Y,Q)=>Y.then(()=>y(Q)),Promise.resolve())}return Ft}function Pg(){return qt(Va)}function rI(t){return qt(Jc)}var Bf={};/**
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
 */const kg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new iI;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oI=function(t){const e=kg(t);return Ng.encodeByteArray(e,!0)},ea=function(t){return oI(t).replace(/\./g,"")},Dg=function(t){try{return Ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lI=()=>aI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof Bf>"u")return;const t=Bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dg(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return lI()||cI()||uI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Og=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hI=t=>{const e=Og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vg=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},xg=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),""].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function gI(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vI(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EI(){return!gI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const wI="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?AI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,l,r)}}function AI(t,e){return t.replace(bI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jf(i)&&jf(o)){if(!ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jf(t){return t!==null&&typeof t=="object"}/**
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
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new CI(t,e);return n.subscribe.bind(n)}class CI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nl),s.error===void 0&&(s.error=Nl),s.complete===void 0&&(s.complete=Nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nl(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class kI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===kr?void 0:t}function DI(t){return t.instantiationMode==="EAGER"}/**
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
 */class OI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const VI={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},xI=Te.INFO,LI={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=xI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const FI=(t,e)=>e.some(n=>t instanceof n);let $f,qf;function UI(){return $f||($f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return qf||(qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,oc=new WeakMap,Mg=new WeakMap,Dl=new WeakMap,Xc=new WeakMap;function jI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,t)}).catch(()=>{}),Xc.set(e,t),e}function $I(t){if(oc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oc.set(t,e)}let ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){ac=t(ac)}function HI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ol(this),e,...n);return Mg.set(r,e.sort?e.sort():[e]),cr(r)}:BI().includes(t)?function(...e){return t.apply(Ol(this),e),cr(Lg.get(this))}:function(...e){return cr(t.apply(Ol(this),e))}}function KI(t){return typeof t=="function"?HI(t):(t instanceof IDBTransaction&&$I(t),FI(t,UI())?new Proxy(t,ac):t)}function cr(t){if(t instanceof IDBRequest)return jI(t);if(Dl.has(t))return Dl.get(t);const e=KI(t);return e!==t&&(Dl.set(t,e),Xc.set(e,t)),e}const Ol=t=>Xc.get(t);function WI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const zI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],Vl=new Map;function Hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Vl.set(e,i),i}qI(t=>({...t,get:(e,n,r)=>Hf(e,n)||t.get(e,n,r),has:(e,n)=>!!Hf(e,n)||t.has(e,n)}));/**
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
 */class QI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Kf="0.10.13";/**
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
 */const Bn=new Yc("@firebase/app"),YI="@firebase/app-compat",XI="@firebase/analytics-compat",ZI="@firebase/analytics",ew="@firebase/app-check-compat",tw="@firebase/app-check",nw="@firebase/auth",rw="@firebase/auth-compat",sw="@firebase/database",iw="@firebase/data-connect",ow="@firebase/database-compat",aw="@firebase/functions",lw="@firebase/functions-compat",cw="@firebase/installations",uw="@firebase/installations-compat",hw="@firebase/messaging",fw="@firebase/messaging-compat",dw="@firebase/performance",pw="@firebase/performance-compat",gw="@firebase/remote-config",mw="@firebase/remote-config-compat",_w="@firebase/storage",yw="@firebase/storage-compat",vw="@firebase/firestore",Ew="@firebase/vertexai-preview",Tw="@firebase/firestore-compat",Iw="firebase",ww="10.14.1";/**
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
 */const cc="[DEFAULT]",Aw={[lc]:"fire-core",[YI]:"fire-core-compat",[ZI]:"fire-analytics",[XI]:"fire-analytics-compat",[tw]:"fire-app-check",[ew]:"fire-app-check-compat",[nw]:"fire-auth",[rw]:"fire-auth-compat",[sw]:"fire-rtdb",[iw]:"fire-data-connect",[ow]:"fire-rtdb-compat",[aw]:"fire-fn",[lw]:"fire-fn-compat",[cw]:"fire-iid",[uw]:"fire-iid-compat",[hw]:"fire-fcm",[fw]:"fire-fcm-compat",[dw]:"fire-perf",[pw]:"fire-perf-compat",[gw]:"fire-rc",[mw]:"fire-rc-compat",[_w]:"fire-gcs",[yw]:"fire-gcs-compat",[vw]:"fire-fst",[Tw]:"fire-fst-compat",[Ew]:"fire-vertex","fire-js":"fire-js",[Iw]:"fire-js-all"};/**
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
 */const na=new Map,bw=new Map,uc=new Map;function Wf(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(uc.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,t);for(const n of na.values())Wf(n,t);for(const n of bw.values())Wf(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const Rw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new zi("app","Firebase",Rw);/**
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
 */class Sw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=ww;function Fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=Vg()),!n)throw ur.create("no-options");const i=na.get(s);if(i){if(ta(n,i.options)&&ta(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new OI(s);for(const c of uc.values())o.addComponent(c);const l=new Sw(n,r,o);return na.set(s,l),l}function Ug(t=cc){const e=na.get(t);if(!e&&t===cc&&Vg())return Fg();if(!e)throw ur.create("no-app",{appName:t});return e}function hr(t,e,n){var r;let s=(r=Aw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}ws(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cw="firebase-heartbeat-database",Pw=1,Oi="firebase-heartbeat-store";let xl=null;function Bg(){return xl||(xl=WI(Cw,Pw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),xl}async function kw(t){try{const n=(await Bg()).transaction(Oi),r=await n.objectStore(Oi).get(jg(t));return await n.done,r}catch(e){if(e instanceof Kn)Bn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function zf(t,e){try{const r=(await Bg()).transaction(Oi,"readwrite");await r.objectStore(Oi).put(e,jg(t)),await r.done}catch(n){if(n instanceof Kn)Bn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function jg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nw=1024,Dw=30*24*60*60*1e3;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Dw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gf(),{heartbeatsToSend:r,unsentEntries:s}=Vw(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Gf(){return new Date().toISOString().substring(0,10)}function Vw(t,e=Nw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qf(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lw(t){ws(new Br("platform-logger",e=>new QI(e),"PRIVATE")),ws(new Br("heartbeat",e=>new Ow(e),"PRIVATE")),hr(lc,Kf,t),hr(lc,Kf,"esm2017"),hr("fire-js","")}Lw("");var Mw="firebase",Fw="10.14.1";/**
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
 */hr(Mw,Fw,"app");var Jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,$g;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function y(){}y.prototype=v.prototype,w.D=v.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(R,S,A){for(var T=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)T[Se-2]=arguments[Se];return v.prototype[S].apply(R,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,y){y||(y=0);var R=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)R[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)R[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=w.g[0],y=w.g[1],S=w.g[2];var A=w.g[3],T=v+(A^y&(S^A))+R[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+R[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+R[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+R[3]+3250441966&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+R[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+R[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+R[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+R[7]+4249261313&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+R[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+R[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+R[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+R[11]+2304563134&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+R[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+R[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+R[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+R[15]+1236535329&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(S^A&(y^S))+R[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+R[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+R[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+R[0]+3921069994&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+R[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+R[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+R[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+R[4]+3889429448&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+R[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+R[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+R[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+R[8]+1163531501&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+R[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+R[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+R[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+R[12]+2368359562&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(y^S^A)+R[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+R[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+R[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+R[14]+4259657740&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+R[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+R[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+R[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+R[10]+3200236656&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+R[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+R[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+R[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+R[6]+76029189&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+R[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+R[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+R[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+R[2]+3299628645&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(S^(y|~A))+R[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+R[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+R[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+R[5]+4237533241&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+R[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+R[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+R[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+R[1]+2240044497&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+R[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+R[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+R[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+R[13]+1309151649&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+R[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+R[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+R[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var y=v-this.blockSize,R=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<v;)if(R[S++]=w.charCodeAt(A++),S==this.blockSize){s(this,R),S=0;break}}else for(;A<v;)if(R[S++]=w[A++],S==this.blockSize){s(this,R),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var y=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.u(w),w=Array(16),v=y=0;4>v;++v)for(var R=0;32>R;R+=8)w[y++]=this.g[v]>>>R&255;return w};function i(w,v){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=v(w)}function o(w,v){this.h=v;for(var y=[],R=!0,S=w.length-1;0<=S;S--){var A=w[S]|0;R&&A==v||(y[S]=A,R=!1)}this.g=y}var l={};function c(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return I(h(-w));for(var v=[],y=1,R=0;w>=y;R++)v[R]=w/y|0,y*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return I(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),R=p,S=0;S<w.length;S+=8){var A=Math.min(8,w.length-S),T=parseInt(w.substring(S,S+A),v);8>A?(A=h(Math.pow(v,A)),R=R.j(A).add(h(T))):(R=R.j(y),R=R.add(h(T)))}return R}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-I(this).m();for(var w=0,v=1,y=0;y<this.g.length;y++){var R=this.i(y);w+=(0<=R?R:4294967296+R)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(C(this))return"-"+I(this).toString(w);for(var v=h(Math.pow(w,6)),y=this,R="";;){var S=H(y,v).g;y=D(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=S,N(y))return A+R;for(;6>A.length;)A="0"+A;R=A+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=D(this,w),C(w)?-1:N(w)?0:1};function I(w){for(var v=w.g.length,y=[],R=0;R<v;R++)y[R]=~w.g[R];return new o(y,~w.h).add(g)}t.abs=function(){return C(this)?I(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],R=0,S=0;S<=v;S++){var A=R+(this.i(S)&65535)+(w.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);R=T>>>16,A&=65535,T&=65535,y[S]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function D(w,v){return w.add(I(v))}t.j=function(w){if(N(this)||N(w))return p;if(C(this))return C(w)?I(this).j(I(w)):I(I(this).j(w));if(C(w))return I(this.j(I(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,y=[],R=0;R<2*v;R++)y[R]=0;for(R=0;R<this.g.length;R++)for(var S=0;S<w.g.length;S++){var A=this.i(R)>>>16,T=this.i(R)&65535,Se=w.i(S)>>>16,Ze=w.i(S)&65535;y[2*R+2*S]+=T*Ze,P(y,2*R+2*S),y[2*R+2*S+1]+=A*Ze,P(y,2*R+2*S+1),y[2*R+2*S+1]+=T*Se,P(y,2*R+2*S+1),y[2*R+2*S+2]+=A*Se,P(y,2*R+2*S+2)}for(R=0;R<v;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=v;R<2*v;R++)y[R]=0;return new o(y,0)};function P(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function U(w,v){this.g=w,this.h=v}function H(w,v){if(N(v))throw Error("division by zero");if(N(w))return new U(p,p);if(C(w))return v=H(I(w),v),new U(I(v.g),I(v.h));if(C(v))return v=H(w,I(v)),new U(I(v.g),v.h);if(30<w.g.length){if(C(w)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,R=v;0>=R.l(w);)y=oe(y),R=oe(R);var S=re(y,1),A=re(R,1);for(R=re(R,2),y=re(y,2);!N(R);){var T=A.add(R);0>=T.l(w)&&(S=S.add(y),A=T),R=re(R,1),y=re(y,1)}return v=D(w,S.j(v)),new U(S,v)}for(S=p;0<=w.l(v);){for(y=Math.max(1,Math.floor(w.m()/v.m())),R=Math.ceil(Math.log(y)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),A=h(y),T=A.j(v);C(T)||0<T.l(w);)y-=R,A=h(y),T=A.j(v);N(A)&&(A=g),S=S.add(A),w=D(w,T)}return new U(S,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],R=0;R<v;R++)y[R]=this.i(R)&w.i(R);return new o(y,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],R=0;R<v;R++)y[R]=this.i(R)|w.i(R);return new o(y,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),y=[],R=0;R<v;R++)y[R]=this.i(R)^w.i(R);return new o(y,this.h^w.h)};function oe(w){for(var v=w.g.length+1,y=[],R=0;R<v;R++)y[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(y,w.h)}function re(w,v){var y=v>>5;v%=32;for(var R=w.g.length-y,S=[],A=0;A<R;A++)S[A]=0<v?w.i(A+y)>>>v|w.i(A+y+1)<<32-v:w.i(A+y);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$g=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ur=o}).apply(typeof Jf<"u"?Jf:typeof self<"u"?self:typeof window<"u"?window:{});var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qg,oi,Hg,Vo,hc,Kg,Wg,zg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof So=="object"&&So];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var O=a[m];if(!(O in d))break e;d=d[O]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,O={next:function(){if(!m&&d<a.length){var x=d++;return{value:u(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,m),a.apply(u,O)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function N(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,O,x){for(var z=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)z[Le-2]=arguments[Le];return u.prototype[O].apply(m,z)}}function C(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function I(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const O=a.length||0,x=m.length||0;a.length=O+x;for(let z=0;z<x;z++)a[O+z]=m[z]}else a.push(m)}}class D{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var oe=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function re(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,u){let d,m;for(let O=1;O<arguments.length;O++){m=arguments[O];for(d in m)a[d]=m[d];for(let x=0;x<y.length;x++)d=y[x],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function S(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Mt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Se{constructor(){this.h=this.g=null}add(u,d){const m=Ze.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ze=new D(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ve=!1,Mt=new Se,Zt=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){A(d)}var u=Ze;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function Ft(a,u){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(oe){e:{try{H(u.nodeName);var O=!0;break e}catch{}O=!1}O||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}N(Ft,Ke);var Vt={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,u,d,m,O){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=O,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,u,d,m,O){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var z=b(a,u,m,O);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new Q(u,this.src,x,!!m,O),u.fa=d,a.push(u)),u};function E(a,u){var d=u.type;if(d in a.g){var m=a.g[d],O=Array.prototype.indexOf.call(m,u,void 0),x;(x=0<=O)&&Array.prototype.splice.call(m,O,1),x&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function b(a,u,d,m){for(var O=0;O<a.length;++O){var x=a[O];if(!x.da&&x.listener==u&&x.capture==!!d&&x.ha==m)return O}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function B(a,u,d,m,O){if(Array.isArray(u)){for(var x=0;x<u.length;x++)B(a,u[x],d,m,O);return null}return d=ue(d),a&&a[F]?a.K(u,d,h(m)?!!m.capture:!1,O):M(a,u,d,!1,m,O)}function M(a,u,d,m,O,x){if(!u)throw Error("Invalid event type");var z=h(O)?!!O.capture:!!O,Le=J(a);if(Le||(a[k]=Le=new ye(a)),d=Le.add(u,d,m,z,x),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)zn||(O=z),O===void 0&&(O=!1),a.addEventListener(u.toString(),m,O);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=se;return a}function W(a,u,d,m,O){if(Array.isArray(u))for(var x=0;x<u.length;x++)W(a,u[x],d,m,O);else m=h(m)?!!m.capture:!!m,d=ue(d),a&&a[F]?(a=a.i,u=String(u).toString(),u in a.g&&(x=a.g[u],d=b(x,d,m,O),-1<d&&(ee(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=b(u,d,m,O)),(d=-1<a?u[a]:null)&&K(d))}function K(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[F])E(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(j(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=J(u))?(E(d,a),d.h==0&&(d.src=null,u[k]=null)):ee(a)}}}function j(a){return a in L?L[a]:L[a]="on"+a}function se(a,u){if(a.da)a=!0;else{u=new Ft(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&K(a),a=d.call(m,u)}return a}function J(a){return a=a[k],a instanceof ye?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[te]||(a[te]=function(u){return a.handleEvent(u)}),a[te])}function le(){He.call(this),this.i=new ye(this),this.M=this,this.F=null}N(le,He),le.prototype[F]=!0,le.prototype.removeEventListener=function(a,u,d,m){W(this,a,u,d,m)};function me(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ke(u,a);else if(u instanceof Ke)u.target=u.target||a;else{var O=u;u=new Ke(m,a),R(u,O)}if(O=!0,d)for(var x=d.length-1;0<=x;x--){var z=u.g=d[x];O=Ae(z,m,!0,u)&&O}if(z=u.g=a,O=Ae(z,m,!0,u)&&O,O=Ae(z,m,!1,u)&&O,d)for(x=0;x<d.length;x++)z=u.g=d[x],O=Ae(z,m,!1,u)&&O}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ee(d[m]);delete a.g[u],a.h--}}this.F=null},le.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},le.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ae(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var O=!0,x=0;x<u.length;++x){var z=u[x];if(z&&!z.da&&z.capture==d){var Le=z.listener,lt=z.ha||z.src;z.fa&&E(a.i,z),O=Le.call(lt,m)!==!1&&O}}return O&&!m.defaultPrevented}function We(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=We(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Wt extends He{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){He.call(this),this.h=a,this.g={}}N(mt,He);var Gn=[];function Ms(a){re(a.g,function(u,d){this.g.hasOwnProperty(d)&&K(u)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),Ms(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=l.JSON.stringify,zt=l.JSON.parse,oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function Hu(a){return a.h||(a.h=a.i())}function Ku(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){Ke.call(this,"d")}N(tl,Ke);function nl(){Ke.call(this,"c")}N(nl,Ke);var Tr={},Wu=null;function ao(){return Wu=Wu||new le}Tr.La="serverreachability";function zu(a){Ke.call(this,Tr.La,a)}N(zu,Ke);function Us(a){const u=ao();me(u,new zu(u))}Tr.STAT_EVENT="statevent";function Gu(a,u){Ke.call(this,Tr.STAT_EVENT,a),this.stat=u}N(Gu,Ke);function St(a){const u=ao();me(u,new Gu(u,a))}Tr.Ma="timingevent";function Qu(a,u){Ke.call(this,Tr.Ma,a),this.size=u}N(Qu,Ke);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function Q_(a,u,d,m,O,x){a.info(function(){if(a.g)if(x)for(var z="",Le=x.split("&"),lt=0;lt<Le.length;lt++){var be=Le[lt].split("=");if(1<be.length){var _t=be[0];be=be[1];var yt=_t.split("_");z=2<=yt.length&&yt[1]=="type"?z+(_t+"="+be+"&"):z+(_t+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+m+") [attempt "+O+"]: "+u+`
`+d+`
`+z})}function J_(a,u,d,m,O,x,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+O+"]: "+u+`
`+d+`
`+x+" "+z})}function Xr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+X_(a,d)+(m?" "+m:"")})}function Y_(a,u){a.info(function(){return"TIMEOUT: "+u})}js.prototype.info=function(){};function X_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var O=m[1];if(Array.isArray(O)&&!(1>O.length)){var x=O[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return at(d)}catch{return u}}var lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rl;function co(){}N(co,Yr),co.prototype.g=function(){return new XMLHttpRequest},co.prototype.i=function(){return{}},rl=new co;function Qn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var Xu={},sl={};function il(a,u,d){a.L=1,a.v=po(An(u)),a.m=d,a.P=!0,Zu(a,null)}function Zu(a,u){a.F=Date.now(),uo(a),a.A=An(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),dh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Yu,a.g=Nh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Wt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Gn[0]=O.toString()),O=Gn);for(var x=0;x<O.length;x++){var z=B(d,O[x],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Us(),Q_(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const u=this.M;u&&bn(a)==3?u.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=bn(this.g);var u=this.g.Ba();const ts=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Eh(this.g)))){this.J||yt!=4||u==7||(u==8||0>=ts?Us(3):Us(2)),ol(this);var d=this.g.Z();this.X=d;t:if(eh(this)){var m=Eh(this.g);a="";var O=m.length,x=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),$s(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<O;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(x&&u==O-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,J_(this.i,this.u,this.A,this.l,this.R,yt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,lt=this.g;if((Le=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Le)){var be=Le;break t}}be=null}if(d=be)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,d);else{this.o=!1,this.s=3,St(12),Ir(this),$s(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<z.length;)if(en=Z_(this,z),en==sl){yt==4&&(this.s=4,St(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Xu){this.s=4,St(15),Xr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,en,null),al(this,en);if(eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||z.length!=0||this.h.h||(this.s=1,St(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,z,"[Invalid Chunked Response]"),Ir(this),$s(this);else if(0<z.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),dl(_t),_t.M=!0,St(11))}}else Xr(this.i,this.l,z,null),al(this,z);yt==4&&Ir(this),this.o&&!this.J&&(yt==4?Sh(this.j,this):(this.o=!1,uo(this)))}else my(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ir(this),$s(this)}}}catch{}finally{}};function eh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Z_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?sl:(d=Number(u.substring(d,m)),isNaN(d)?Xu:(m+=1,m+d>u.length?sl:(u=u.slice(m,m+d),a.C=m+d,u)))}Qn.prototype.cancel=function(){this.J=!0,Ir(this)};function uo(a){a.S=Date.now()+a.I,th(a,a.I)}function th(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(g(a.ba,a),u)}function ol(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Y_(this.i,this.A),this.L!=2&&(Us(),St(17)),Ir(this),this.s=2,$s(this)):th(this,this.S-a)};function $s(a){a.j.G==0||a.J||Sh(a.j,a)}function Ir(a){ol(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ms(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function al(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ll(d.h,a))){if(!a.K&&ll(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var O=m;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Eo(d),yo(d);else break e;fl(d),St(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Bs(g(d.Za,d),6e3));if(1>=sh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((a.K||d.g==a)&&Eo(d),!P(u))for(O=d.Da.g.parse(u),u=0;u<O.length;u++){let be=O[u];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const _t=be[3];_t!=null&&(d.la=_t,d.j.info("VER="+d.la));const yt=be[4];yt!=null&&(d.Aa=yt,d.j.info("SVER="+d.Aa));const ts=be[5];ts!=null&&typeof ts=="number"&&0<ts&&(m=1.5*ts,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const en=a.g;if(en){const Io=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var x=m.h;x.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(cl(x,x.h),x.h=null))}if(m.D){const pl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(m.ya=pl,Be(m.I,m.D,pl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=kh(m,m.J?m.ia:null,m.W),z.K){ih(m.h,z);var Le=z,lt=m.L;lt&&(Le.I=lt),Le.B&&(ol(Le),uo(Le)),m.g=z}else bh(m);0<d.i.length&&vo(d)}else be[0]!="stop"&&be[0]!="close"||Ar(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Ar(d,7):hl(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}Us(4)}catch{}}var ey=class{constructor(a,u){this.g=a,this.map=u}};function nh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sh(a){return a.h?1:a.g?a.g.size:0}function ll(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function cl(a,u){a.g?a.g.add(u):a.h=u}function ih(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}nh.prototype.cancel=function(){if(this.i=oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function oh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return C(a.i)}function ty(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function ny(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function ah(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=ny(a),m=ty(a),O=m.length,x=0;x<O;x++)u.call(void 0,m[x],d&&d[x],a)}var lh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ry(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),O=null;if(0<=m){var x=a[d].substring(0,m);O=a[d].substring(m+1)}else x=a[d];u(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wr){this.h=a.h,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.s),this.l=a.l;var u=a.i,d=new Ks;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ch(this,d),this.m=a.m}else a&&(u=String(a).match(lh))?(this.h=!1,ho(this,u[1]||"",!0),this.o=qs(u[2]||""),this.g=qs(u[3]||"",!0),fo(this,u[4]),this.l=qs(u[5]||"",!0),ch(this,u[6]||"",!0),this.m=qs(u[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}wr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Hs(u,uh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hs(u,uh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?oy:iy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,ly)),a.join("")};function An(a){return new wr(a)}function ho(a,u,d){a.j=d?qs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ch(a,u,d){u instanceof Ks?(a.i=u,cy(a.i,a.h)):(d||(u=Hs(u,ay)),a.i=new Ks(u,a.h))}function Be(a,u,d){a.i.set(u,d)}function po(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,sy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var uh=/[#\/\?@]/g,iy=/[#\?:]/g,oy=/[#\?]/g,ay=/[#\?@]/g,ly=/#/g;function Ks(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&ry(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ks.prototype,t.add=function(a,u){Jn(this),this.i=null,a=Zr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function hh(a,u){Jn(a),u=Zr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function fh(a,u){return Jn(a),u=Zr(a,u),a.g.has(u)}t.forEach=function(a,u){Jn(this),this.g.forEach(function(d,m){d.forEach(function(O){a.call(u,O,m,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const O=a[m];for(let x=0;x<O.length;x++)d.push(u[m])}return d},t.V=function(a){Jn(this);let u=[];if(typeof a=="string")fh(this,a)&&(u=u.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Jn(this),this.i=null,a=Zr(this,a),fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function dh(a,u,d){hh(a,u),0<d.length&&(a.i=null,a.g.set(Zr(a,u),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const x=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var O=x;z[m]!==""&&(O+="="+encodeURIComponent(String(z[m]))),a.push(O)}}return this.i=a.join("&")};function Zr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function cy(a,u){u&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(d,m){var O=m.toLowerCase();m!=O&&(hh(this,m),dh(this,O,d))},a)),a.j=u}function uy(a,u){const d=new js;if(l.Image){const m=new Image;m.onload=_(Yn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Yn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Yn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Yn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function hy(a,u){const d=new js,m=new AbortController,O=setTimeout(()=>{m.abort(),Yn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(O),x.ok?Yn(d,"TestPingServer: ok",!0,u):Yn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(O),Yn(d,"TestPingServer: error",!1,u)})}function Yn(a,u,d,m,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),m(d)}catch{}}function fy(){this.g=new oo}function dy(a,u,d){const m=d||"";try{ah(a,function(O,x){let z=O;h(O)&&(z=at(O)),u.push(m+x+"="+encodeURIComponent(z))})}catch(O){throw u.push(m+"type="+encodeURIComponent("_badmap")),O}}function go(a){this.l=a.Ub||null,this.j=a.eb||!1}N(go,Yr),go.prototype.g=function(){return new mo(this.l,this.j)},go.prototype.i=function(a){return function(){return a}}({});function mo(a,u){le.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(mo,le),t=mo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ph(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ph(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ws(this):zs(this),this.readyState==3&&ph(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},t.Qa=function(a){this.g&&(this.response=a,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gh(a){let u="";return re(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function ul(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=gh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Be(a,u,d))}function Ge(a){le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ge,le);var py=/^https?$/i,gy=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?Hu(this.o):Hu(rl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){mh(this,x);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var O in m)d.set(O,m[O]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gy,u,void 0))||m||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of d)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vh(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){mh(this,x)}};function mh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,_h(a),_o(a)}function _h(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yh(this):this.bb())},t.bb=function(){yh(this)};function yh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)We(a.Ea,0,a);else if(me(a,"readystatechange"),bn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=z===0){var O=String(a.D).match(lh)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),m=!py.test(O?O.toLowerCase():"")}d=m}if(d)me(a,"complete"),me(a,"success");else{a.m=6;try{var x=2<bn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",_h(a)}}finally{_o(a)}}}}function _o(a,u){if(a.g){vh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||me(a,"ready");try{d.onreadystatechange=m}catch{}}}function vh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),zt(u)}};function Eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function my(a){const u={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(P(a[m]))continue;var d=S(a[m]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=u[O]||[];u[O]=x,x.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Th(a){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,a),this.cb=Gs("retryDelaySeedMs",1e4,a),this.Wa=Gs("forwardChannelMaxRetries",2,a),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new nh(a&&a.concurrentRequestLimit),this.Da=new fy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Th.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){St(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=kh(this,null,this.W),vo(this)};function hl(a){if(Ih(a),a.G==3){var u=a.U++,d=An(a.I);if(Be(d,"SID",a.K),Be(d,"RID",u),Be(d,"TYPE","terminate"),Qs(a,d),u=new Qn(a,a.j,u),u.L=2,u.v=po(An(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),uo(u)}Ph(a)}function yo(a){a.g&&(dl(a),a.g.cancel(),a.g=null)}function Ih(a){yo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function vo(a){if(!rh(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ie||Zt(),ve||(Ie(),ve=!0),Mt.add(u,a),a.B=0}}function _y(a,u){return sh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(g(a.Ga,a,u),Ch(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Qn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=v(x),R(x,this.S)):x=this.S),this.m!==null||this.O||(O.H=x,x=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Ah(this,O,u),d=An(this.I),Be(d,"RID",a),Be(d,"CVER",22),this.D&&Be(d,"X-HTTP-Session-Id",this.D),Qs(this,d),x&&(this.O?u="headers="+encodeURIComponent(String(gh(x)))+"&"+u:this.m&&ul(d,this.m,x)),cl(this.h,O),this.Ua&&Be(d,"TYPE","init"),this.P?(Be(d,"$req",u),Be(d,"SID","null"),O.T=!0,il(O,d,null)):il(O,d,u),this.G=2}}else this.G==3&&(a?wh(this,a):this.i.length==0||rh(this.h)||wh(this))};function wh(a,u){var d;u?d=u.l:d=a.U++;const m=An(a.I);Be(m,"SID",a.K),Be(m,"RID",d),Be(m,"AID",a.T),Qs(a,m),a.m&&a.o&&ul(m,a.m,a.o),d=new Qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ah(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cl(a.h,d),il(d,m,u)}function Qs(a,u){a.H&&re(a.H,function(d,m){Be(u,m,d)}),a.l&&ah({},function(d,m){Be(u,m,d)})}function Ah(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let x=-1;for(;;){const z=["count="+d];x==-1?0<d?(x=O[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let Le=!0;for(let lt=0;lt<d;lt++){let be=O[lt].g;const _t=O[lt].map;if(be-=x,0>be)x=Math.max(0,O[lt].g-100),Le=!1;else try{dy(_t,z,"req"+be+"_")}catch{m&&m(_t)}}if(Le){m=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function bh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ie||Zt(),ve||(Ie(),ve=!0),Mt.add(u,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(g(a.Fa,a),Ch(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),yo(this),Rh(this))};function dl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rh(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=An(a.qa);Be(u,"RID","rpc"),Be(u,"SID",a.K),Be(u,"AID",a.T),Be(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(u,"TO",a.ja),Be(u,"TYPE","xmlhttp"),Qs(a,u),a.m&&a.o&&ul(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=po(An(u)),d.m=null,d.P=!0,Zu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,yo(this),fl(this),St(19))};function Eo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sh(a,u){var d=null;if(a.g==u){Eo(a),dl(a),a.g=null;var m=2}else if(ll(a.h,u))d=u.D,ih(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var O=a.B;m=ao(),me(m,new Qu(m,d)),vo(a)}else bh(a);else if(O=u.s,O==3||O==0&&0<u.X||!(m==1&&_y(a,u)||m==2&&fl(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),O){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function Ch(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Ar(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const O=!m;m=new wr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ho(m,"https"),po(m),O?uy(m.toString(),d):hy(m.toString(),d)}else St(2);a.G=0,a.l&&a.l.sa(u),Ph(a),Ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Ph(a){if(a.G=0,a.ka=[],a.l){const u=oh(a.h);(u.length!=0||a.i.length!=0)&&(I(a.ka,u),I(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function kh(a,u,d){var m=d instanceof wr?An(d):new wr(d);if(m.g!="")u&&(m.g=u+"."+m.g),fo(m,m.s);else{var O=l.location;m=O.protocol,u=u?u+"."+O.hostname:O.hostname,O=+O.port;var x=new wr(null);m&&ho(x,m),u&&(x.g=u),O&&fo(x,O),d&&(x.l=d),m=x}return d=a.D,u=a.ya,d&&u&&Be(m,d,u),Be(m,"VER",a.la),Qs(a,m),m}function Nh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ge(new go({eb:d})):new Ge(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dh(){}t=Dh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,u){return new Ut(a,u)};function Ut(a,u){le.call(this),this.g=new Th(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!P(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!P(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new es(this)}N(Ut,le),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){hl(this.g)},Ut.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=at(a),a=d);u.i.push(new ey(u.Ya++,a)),u.G==3&&vo(u)},Ut.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,Ut.aa.N.call(this)};function Oh(a){tl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}N(Oh,tl);function Vh(){nl.call(this),this.status=1}N(Vh,nl);function es(a){this.g=a}N(es,Dh),es.prototype.ua=function(){me(this.g,"a")},es.prototype.ta=function(a){me(this.g,new Oh(a))},es.prototype.sa=function(a){me(this.g,new Vh)},es.prototype.ra=function(){me(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,zg=function(){return new To},Wg=function(){return ao()},Kg=Tr,hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,Vo=lo,Ju.COMPLETE="complete",Hg=Ju,Ku.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",le.prototype.listen=le.prototype.K,oi=Ku,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,qg=Ge}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});const Yf="@firebase/firestore";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let Os="10.14.0";/**
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
 */const jr=new Yc("@firebase/firestore");function ei(){return jr.logLevel}function X(t,...e){if(jr.logLevel<=Te.DEBUG){const n=e.map(eu);jr.debug(`Firestore (${Os}): ${t}`,...n)}}function jn(t,...e){if(jr.logLevel<=Te.ERROR){const n=e.map(eu);jr.error(`Firestore (${Os}): ${t}`,...n)}}function As(t,...e){if(jr.logLevel<=Te.WARN){const n=e.map(eu);jr.warn(`Firestore (${Os}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Ve(t,e){t||fe()}function ge(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class Bw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jw{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Gg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Et(e)}}class $w{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $w(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new Hw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ww(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ww(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new rt(0,0))}static max(){return new de(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Vi{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const zw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Vi{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return zw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie($e.fromString(e))}static fromName(e){return new ie($e.fromString(e).popFirst(5))}static empty(){return new ie($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new $e(e.slice()))}}function Gw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new gr(s,ie.empty(),e)}function Qw(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(de.min(),ie.empty(),-1)}static max(){return new gr(de.max(),ie.empty(),-1)}}function Jw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const Yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==Yw)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Zw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tu.oe=-1;function La(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function eA(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Co(this.root,e,this.comparator,!1)}getReverseIterator(){return new Co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Co(this.root,e,this.comparator,!0)}}class Co{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new $t([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Yg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yg("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const tA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=tA.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ru(t){const e=t.mapValue.fields.__previous_value__;return nu(e)?ru(e):e}function xi(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class nA{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Po={mapValue:{}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nu(t)?4:sA(t)?9007199254740991:rA(t)?10:11:fe()}function In(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),l=mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),l=Je(i.doubleValue);return o===l?ra(o)===ra(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xf(o)!==Xf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function Mi(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Je(i.integerValue||i.doubleValue),c=Je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ed(t.timestampValue,e.timestampValue);case 4:return ed(xi(t),xi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const l=$r(i),c=$r(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Re(l[h],c[h]);if(f!==0)return f}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(Je(i.latitude),Je(o.latitude));return l!==0?l:Re(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return td(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,N=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=Re(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:td(_,N)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Po.mapValue&&o===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Re(c[p],f[p]);if(g!==0)return g;const _=Rs(l[c[p]],h[f[p]]);if(_!==0)return _}return Re(c.length,f.length)}(t.mapValue,e.mapValue);default:throw fe()}}function ed(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=mr(t),r=mr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function td(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Ss(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fc(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function dc(t){return!!t&&"integerValue"in t}function su(t){return!!t&&"arrayValue"in t}function nd(t){return!!t&&"nullValue"in t}function rd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function rA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function vi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vi(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=vi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(vi(this.value))}}function Xg(t){const e=[];return zr(t.fields,(n,r)=>{const s=new ft([n]);if(xo(r)){const i=Xg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
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
 */class It{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new It(e,0,de.min(),de.min(),de.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new It(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new It(e,2,n,de.min(),de.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,de.min(),de.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function sd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function id(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function iA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zg{}class nt extends Zg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aA(e,n,r):n==="array-contains"?new uA(e,r):n==="in"?new hA(e,r):n==="not-in"?new fA(e,r):n==="array-contains-any"?new dA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lA(e,r):new cA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends Zg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return em(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function em(t){return t.op==="and"}function tm(t){return oA(t)&&em(t)}function oA(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function pc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(tm(t))return t.filters.map(e=>pc(e)).join(",");{const e=t.filters.map(n=>pc(n)).join(",");return`${t.op}(${e})`}}function nm(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&nm(o,s.filters[l]),!0):!1}(t,e):void fe()}function rm(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(rm).join(" ,")+"}"}(t):"Filter"}class aA extends nt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class lA extends nt{constructor(e,n){super(e,"in",n),this.keys=sm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cA extends nt{constructor(e,n){super(e,"not-in",n),this.keys=sm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class uA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return su(n)&&Mi(n.arrayValue,this.value)}}class hA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class fA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mi(this.value.arrayValue,n)}}class dA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
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
 */class pA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pA(t,e,n,r,s,i,o)}function iu(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!id(t.startAt,e.startAt)&&id(t.endAt,e.endAt)}function gc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ma{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gA(t,e,n,r,s,i,o,l){return new Ma(t,e,n,r,s,i,o,l)}function au(t){return new Ma(t)}function ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mA(t){return t.collectionGroup!==null}function Ei(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ia(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new ia(ft.keyField(),r))}return e.ce}function _n(t){const e=ge(t);return e.le||(e.le=_A(e,Ei(t))),e.le}function _A(t,e){if(t.limitType==="F")return od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)});const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mc(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return ou(_n(t),_n(e))&&t.limitType===e.limitType}function im(t){return`${iu(_n(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rm(s)).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=sd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,l,c){const h=sd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Ei(r),s))}(t,e)}function yA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function om(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=vA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vA(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Rs(c,h):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jg(this.inner)}size(){return this.innerSize}}/**
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
 */const EA=new ze(ie.comparator);function $n(){return EA}const am=new ze(ie.comparator);function ai(...t){let e=am;for(const n of t)e=e.insert(n.key,n);return e}function lm(t){let e=am;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return Ti()}function cm(){return Ti()}function Ti(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const TA=new ze(ie.comparator),IA=new pt(ie.comparator);function Ee(...t){let e=IA;for(const n of t)e=e.add(n);return e}const wA=new pt(Re);function AA(){return wA}/**
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
 */function lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function um(t){return{integerValue:""+t}}function bA(t,e){return eA(e)?um(e):lu(t,e)}/**
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
 */class Ba{constructor(){this._=void 0}}function RA(t,e,n){return t instanceof Fi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nu(i)&&(i=ru(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ui?fm(t,e):t instanceof Bi?dm(t,e):function(s,i){const o=hm(s,i),l=ld(o)+ld(s.Pe);return dc(o)&&dc(s.Pe)?um(l):lu(s.serializer,l)}(t,e)}function SA(t,e,n){return t instanceof Ui?fm(t,e):t instanceof Bi?dm(t,e):n}function hm(t,e){return t instanceof oa?function(r){return dc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fi extends Ba{}class Ui extends Ba{constructor(e){super(),this.elements=e}}function fm(t,e){const n=pm(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bi extends Ba{constructor(e){super(),this.elements=e}}function dm(t,e){let n=pm(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class oa extends Ba{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ld(t){return Je(t.integerValue||t.doubleValue)}function pm(t){return su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class CA{constructor(e,n){this.field=e,this.transform=n}}function PA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Bi&&s instanceof Bi?bs(r.elements,s.elements,In):r instanceof oa&&s instanceof oa?In(r.Pe,s.Pe):r instanceof Fi&&s instanceof Fi}(t.transform,e.transform)}class kA{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function gm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cu(t.key,nn.none()):new Yi(t.key,t.data,nn.none());{const n=t.data,r=Lt.empty();let s=new pt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new $t(s.toArray()),nn.none())}}function NA(t,e,n){t instanceof Yi?function(s,i,o){const l=s.value.clone(),c=ud(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ud(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(mm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ii(t,e,n,r){return t instanceof Yi?function(i,o,l,c){if(!Lo(i.precondition,o))return l;const h=i.value.clone(),f=hd(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,l,c){if(!Lo(i.precondition,o))return l;const h=hd(i.fieldTransforms,c,o),f=o.data;return f.setAll(mm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function DA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hm(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>PA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ud(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,SA(o,l,n[s]))}return r}function hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RA(i,o,e))}return r}class cu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OA extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=gm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>cd(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>cd(n,r))}}class uu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return TA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uu(e,n,r,s)}}/**
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
 */class xA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,we;function MA(t){switch(t){default:return fe();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function _m(t){if(t===void 0)return jn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Xe.OK:return q.OK;case Xe.CANCELLED:return q.CANCELLED;case Xe.UNKNOWN:return q.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return q.INTERNAL;case Xe.UNAVAILABLE:return q.UNAVAILABLE;case Xe.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Xe.NOT_FOUND:return q.NOT_FOUND;case Xe.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Xe.ABORTED:return q.ABORTED;case Xe.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Xe.DATA_LOSS:return q.DATA_LOSS;default:return fe()}}(we=Xe||(Xe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FA(){return new TextEncoder}/**
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
 */const UA=new Ur([4294967295,4294967295],0);function fd(t){const e=FA().encode(t),n=new $g;return n.update(e),new Uint8Array(n.digest())}function dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class hu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(UA)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(de.min(),s,new ze(Re),$n(),Ee())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,Ee(),Ee(),Ee())}}/**
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
 */class Mo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ym{constructor(e,n){this.targetId=e,this.me=n}}class vm{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pd{constructor(){this.fe=0,this.ge=md(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new Xi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=md()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class BA{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=gd(),this.Qe=new ze(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(gc(i))if(r===0){const o=new ie(i.path);this.Ue(n,o,It.newNoDocument(o,de.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=$r(r).toUint8Array()}catch(c){if(c instanceof Yg)return As("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new hu(o,s,i)}catch(c){return As(c instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&gc(l.target)){const c=new ie(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,It.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=gd(),this.Qe=new ze(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new pd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gd(){return new ze(ie.comparator)}function md(){return new ze(ie.comparator)}const jA={asc:"ASCENDING",desc:"DESCENDING"},$A={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qA={and:"AND",or:"OR"};class HA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _c(t,e){return t.useProto3Json||La(e)?e:{value:e}}function aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KA(t,e){return aa(t,e.toTimestamp())}function yn(t){return Ve(!!t),de.fromTimestamp(function(n){const r=mr(n);return new rt(r.seconds,r.nanos)}(t))}function fu(t,e){return yc(t,e).canonicalString()}function yc(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tm(t){const e=$e.fromString(t);return Ve(Rm(e)),e}function vc(t,e){return fu(t.databaseId,e.path)}function Ll(t,e){const n=Tm(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(wm(n))}function Im(t,e){return fu(t.databaseId,e)}function WA(t){const e=Tm(t);return e.length===4?$e.emptyPath():wm(e)}function Ec(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wm(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _d(t,e,n){return{name:vc(t,e),fields:n.value.mapValue.fields}}function zA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ve(f===void 0||typeof f=="string"),gt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?q.UNKNOWN:_m(h.code);return new ne(f,h.message||"")}(o);n=new vm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):de.min(),l=new Lt({mapValue:{fields:r.document.fields}}),c=It.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Mo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?yn(r.readTime):de.min(),o=It.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Mo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new Mo([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new LA(s,i),l=r.targetId;n=new ym(l,o)}}return n}function GA(t,e){let n;if(e instanceof Yi)n={update:_d(t,e.key,e.value)};else if(e instanceof cu)n={delete:vc(t,e.key)};else if(e instanceof vr)n={update:_d(t,e.key,e.data),updateMask:rb(e.fieldMask)};else{if(!(e instanceof OA))return fe();n={verify:vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function QA(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(de.min())&&(o=yn(i)),new kA(o,s.transformResults||[])}(n,e))):[]}function JA(t,e){return{documents:[Im(t,e.path)]}}function YA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Im(t,s);const i=function(h){if(h.length!==0)return bm(wn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:os(g.field),direction:eb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=_c(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function XA(t){let e=WA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Am(p);return g instanceof wn&&tm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(N){return new ia(as(N.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,La(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new sa(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new sa(_,g)}(n.endAt)),gA(e,s,o,i,l,"F",c,h)}function ZA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Am(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Am(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function eb(t){return jA[t]}function tb(t){return $A[t]}function nb(t){return qA[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return ft.fromServerFormat(t.fieldPath)}function bm(t){return t instanceof nt?function(n){if(n.op==="=="){if(rd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(nd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(nd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:tb(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(s=>bm(s));return r.length===1?r[0]:{compositeFilter:{op:nb(n.op),filters:r}}}(t):fe()}function rb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sb{constructor(e){this.ct=e}}function ib(t){const e=XA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mc(e,e.limit,"L"):e}/**
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
 */class ob{constructor(){this.un=new ab}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(gr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class ab{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt($e.comparator)).toArray()}}/**
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
 */class Cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cs(0)}static kn(){return new Cs(-1)}}/**
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
 */class lb{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ub{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ii(r.mutation,s,$t.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ai();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=$n();const o=Ti(),l=function(){return Ti()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof vr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ii(f.mutation,h,f.mutation.getFieldMask(),rt.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new cb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ti();let s=new ze((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||$t.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=cm();f.forEach(g=>{if(!i.has(g)){const _=gm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(xr());let l=-1,c=i;return o.next(h=>$.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(f=>({batchId:l,changes:lm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ai();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const h=function(p,g){return new Ma(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,It.newInvalidDocument(f)))});let l=ai();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ii(f.mutation,h,$t.empty(),rt.now()),Ua(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class hb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:ib(s.bundledQuery),readTime:yn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class fb{constructor(){this.overlays=new ze(ie.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=xr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return $.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xA(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class db{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class du{constructor(){this.Tr=new pt(ot.Er),this.dr=new pt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new $e([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new $e([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class pb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(ot.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Re);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ie(i),0);let l=new pt(Re);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gb{constructor(e){this.Mr=e,this.docs=function(){return new ze(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,l=new ie(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Jw(Qw(f),r)<=0||(s.has(f.key)||Ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return $.resolve(this.size)}}class mb extends lb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class _b{constructor(e){this.persistence=e,this.Nr=new Vs(n=>iu(n),ou),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new du,this.targetCount=0,this.kr=Cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class yb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tu(0),this.Kr=!1,this.Kr=!0,this.$r=new db,this.referenceDelegate=e(this),this.Ur=new _b(this),this.indexManager=new ob,this.remoteDocumentCache=function(s){return new gb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new sb(n),this.Gr=new hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new vb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class vb extends Xw{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Jr=new du,this.Yr=null}static Zr(e){return new pu(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(e,n.fromCache,r,s)}}/**
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
 */class Eb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Tb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return EI()?8:Zw(Rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Eb;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ei()<=Te.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(ei()<=Te.DEBUG&&X("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ei()<=Te.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):$.resolve())}Yi(e,n){if(ad(n))return $.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=mc(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,mc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return ad(n)||s.isEqual(de.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(ei()<=Te.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.rs(e,o,n,Gw(s,-1)).next(l=>l))})}ts(e,n){let r=new pt(om(e));return n.forEach((s,i)=>{Ua(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ei()<=Te.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ib{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ze(Re),this._s=new Vs(i=>iu(i),ou),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ub(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wb(t,e,n,r){return new Ib(t,e,n,r)}async function Sm(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Ab(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let _=$.resolve();return g.forEach(N=>{_=_.next(()=>f.getEntry(c,N)).next(C=>{const I=h.docVersions.get(N);Ve(I!==null),C.version.compareTo(I)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Cm(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(gt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(C,I,D){return C.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(i,_))});let c=$n(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Rb(i,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(de.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function Rb(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function Sb(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Cb(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Tc(t,e,n){const r=ge(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function yd(t,e,n){const r=ge(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=ge(c),g=p._s.get(f);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ee())).next(l=>(Pb(r,yA(e),l),{documents:l,Ts:i})))}function Pb(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class vd{constructor(){this.activeTargetIds=AA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kb{constructor(){this.so=new vd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Nb{_o(e){}shutdown(){}}/**
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
 */class Ed{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ko=null;function Ml(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
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
 */const Db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ob{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class Vb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Ml(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw As("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Db[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ml();return new Promise((o,l)=>{const c=new qg;c.setWithCredentials(!0),c.listenOnce(Hg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vo.NO_ERROR:const f=c.getResponseJson();X(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Vo.TIMEOUT:X(vt,`RPC '${e}' ${i} timed out`),l(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case Vo.HTTP_ERROR:const p=c.getStatus();if(X(vt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const N=function(I){const D=I.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(D)>=0?D:q.UNKNOWN}(_.status);l(new ne(N,_.message))}else l(new ne(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(q.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{X(vt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(vt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Ml(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zg(),l=Wg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(vt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,_=!1;const N=new Ob({Io:I=>{_?X(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(g||(X(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(vt,`RPC '${e}' stream ${s} sending:`,I),p.send(I))},To:()=>p.close()}),C=(I,D,P)=>{I.listen(D,U=>{try{P(U)}catch(H){setTimeout(()=>{throw H},0)}})};return C(p,oi.EventType.OPEN,()=>{_||(X(vt,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),C(p,oi.EventType.CLOSE,()=>{_||(_=!0,X(vt,`RPC '${e}' stream ${s} transport closed`),N.So())}),C(p,oi.EventType.ERROR,I=>{_||(_=!0,As(vt,`RPC '${e}' stream ${s} transport errored:`,I),N.So(new ne(q.UNAVAILABLE,"The operation could not be completed")))}),C(p,oi.EventType.MESSAGE,I=>{var D;if(!_){const P=I.data[0];Ve(!!P);const U=P,H=U.error||((D=U[0])===null||D===void 0?void 0:D.error);if(H){X(vt,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let re=function(y){const R=Xe[y];if(R!==void 0)return _m(R)}(oe),w=H.message;re===void 0&&(re=q.INTERNAL,w="Unknown error status: "+oe+" with message "+H.message),_=!0,N.So(new ne(re,w)),p.close()}else X(vt,`RPC '${e}' stream ${s} received:`,P),N.bo(P)}}),C(l,Kg.STAT_EVENT,I=>{I.stat===hc.PROXY?X(vt,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===hc.NOPROXY&&X(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Fl(){return typeof document<"u"?document:null}/**
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
 */function qa(t){return new HA(t,!0)}/**
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
 */class Pm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class km{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Pm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xb extends km{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=zA(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?yn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ec(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=gc(c)?{documents:JA(i,c)}:{query:YA(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Em(i,o.resumeToken);const h=_c(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=aa(i,o.snapshotVersion.toTimestamp());const h=_c(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ZA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ec(this.serializer),n.removeTarget=e,this.a_(n)}}class Lb extends km{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=QA(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ec(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GA(this.serializer,r))};this.a_(n)}}/**
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
 */class Mb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,yc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(q.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,yc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Fb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ub{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ge(c);h.L_.add(4),await Zi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ha(h)}(this))})}),this.q_=new Fb(r,s)}}async function Ha(t){if(Gr(t))for(const e of t.B_)await e(!0)}async function Zi(t){for(const e of t.B_)await e(!1)}function Nm(t,e){const n=ge(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),vu(n)?yu(n):xs(n).r_()&&_u(n,e))}function mu(t,e){const n=ge(t),r=xs(n);n.N_.delete(e),r.r_()&&Dm(n,e),n.N_.size===0&&(r.r_()?r.o_():Gr(n)&&n.q_.set("Unknown"))}function _u(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).A_(e)}function Dm(t,e){t.Q_.xe(e),xs(t).R_(e)}function yu(t){t.Q_=new BA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.q_.v_()}function vu(t){return Gr(t)&&!xs(t).n_()&&t.N_.size>0}function Gr(t){return ge(t).L_.size===0}function Om(t){t.Q_=void 0}async function Bb(t){t.q_.set("Online")}async function jb(t){t.N_.forEach((e,n)=>{_u(t,e)})}async function $b(t,e){Om(t),vu(t)?(t.q_.M_(e),yu(t)):t.q_.set("Unknown")}async function qb(t,e,n){if(t.q_.set("Online"),e instanceof vm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Mo?t.Q_.Ke(e):e instanceof ym?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await Cm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),Dm(i,c);const p=new lr(f.target,c,h,f.sequenceNumber);_u(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Ji(e))throw e;t.L_.add(1),await Zi(t),t.q_.set("Offline"),n||(n=()=>Cm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ha(t)})}function Vm(t,e){return e().catch(n=>la(t,n,e))}async function Ka(t){const e=ge(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Hb(e);)try{const s=await Sb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Kb(e,s)}catch(s){await la(e,s)}xm(e)&&Lm(e)}function Hb(t){return Gr(t)&&t.O_.length<10}function Kb(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function xm(t){return Gr(t)&&!_r(t).n_()&&t.O_.length>0}function Lm(t){_r(t).start()}async function Wb(t){_r(t).p_()}async function zb(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function Gb(t,e,n){const r=t.O_.shift(),s=uu.from(r,e,n);await Vm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ka(t)}async function Qb(t,e){e&&_r(t).V_&&await async function(r,s){if(function(o){return MA(o)&&o!==q.ABORTED}(s.code)){const i=r.O_.shift();_r(r).s_(),await Vm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ka(r)}}(t,e),xm(t)&&Lm(t)}async function Td(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.L_.add(3),await Zi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ha(n)}async function Jb(t,e){const n=ge(t);e?(n.L_.delete(2),await Ha(n)):e||(n.L_.add(2),await Zi(n),n.q_.set("Unknown"))}function xs(t){return t.K_||(t.K_=function(n,r,s){const i=ge(n);return i.w_(),new xb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Bb.bind(null,t),Ro:jb.bind(null,t),mo:$b.bind(null,t),d_:qb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),vu(t)?yu(t):t.q_.set("Unknown")):(await t.K_.stop(),Om(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,s){const i=ge(n);return i.w_(),new Lb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Wb.bind(null,t),mo:Qb.bind(null,t),f_:zb.bind(null,t),g_:Gb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ka(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Eu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Eu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tu(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Ji(t))return new ne(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ai(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Id{constructor(){this.W_=new ze(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Xb{constructor(){this.queries=wd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=wd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ne(q.ABORTED,"Firestore shutting down"))}}function wd(){return new Vs(t=>im(t),Fa)}async function Mm(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Yb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Tu(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Iu(n)}async function Fm(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Zb(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Iu(n)}function eR(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Iu(t){t.Y_.forEach(e=>{e.next()})}var Ic,Ad;(Ad=Ic||(Ic={})).ea="default",Ad.Cache="cache";class Um{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ic.Cache}}/**
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
 */class Bm{constructor(e){this.key=e}}class jm{constructor(e){this.key=e}}class tR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=om(e),this.Ra=new ms(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Id,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=Ua(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;g&&_?g.data.isEqual(_.data)?N!==C&&(r.track({type:3,doc:_}),I=!0):this.ga(g,_)||(r.track({type:2,doc:_}),I=!0,(c&&this.Aa(_,c)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),I=!0):g&&!_&&(r.track({type:1,doc:g}),I=!0,(c||h)&&(l=!0)),I&&(_?(o=o.add(_),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,N){const C=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return C(_)-C(N)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new Ps(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Id,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new jm(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Bm(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ps.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rR{constructor(e){this.key=e,this.va=!1}}class sR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(l=>im(l),Fa),this.Ma=new Map,this.xa=new Set,this.Oa=new ze(ie.comparator),this.Na=new Map,this.La=new du,this.Ba={},this.ka=new Map,this.qa=Cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function iR(t,e,n=!0){const r=zm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await $m(r,e,n,!0),s}async function oR(t,e){const n=zm(t);await $m(n,e,!0,!1)}async function $m(t,e,n,r){const s=await Cb(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await aR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Nm(t.remoteStore,s),l}async function aR(t,e,n,r,s){t.Ka=(p,g,_)=>async function(C,I,D,P){let U=I.view.ma(D);U.ns&&(U=await yd(C.localStore,I.query,!1).then(({documents:w})=>I.view.ma(w,U)));const H=P&&P.targetChanges.get(I.targetId),oe=P&&P.targetMismatches.get(I.targetId)!=null,re=I.view.applyChanges(U,C.isPrimaryClient,H,oe);return Rd(C,I.targetId,re.wa),re.snapshot}(t,p,g,_);const i=await yd(t.localStore,e,!0),o=new tR(e,i.Ts),l=o.ma(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Rd(t,n,h.wa);const f=new nR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function lR(t,e,n){const r=ge(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Fa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Tc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&mu(r.remoteStore,s.targetId),wc(r,s.targetId)}).catch(Qi)):(wc(r,s.targetId),await Tc(r.localStore,s.targetId,!0))}async function cR(t,e){const n=ge(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mu(n.remoteStore,r.targetId))}async function uR(t,e,n){const r=_R(t);try{const s=await function(o,l){const c=ge(o),h=rt.now(),f=l.reduce((_,N)=>_.add(N.key),Ee());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let N=$n(),C=Ee();return c.cs.getEntries(_,f).next(I=>{N=I,N.forEach((D,P)=>{P.isValidDocument()||(C=C.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,N)).next(I=>{p=I;const D=[];for(const P of l){const U=DA(P,p.get(P.key).overlayedDocument);U!=null&&D.push(new vr(P.key,U,Xg(U.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,D,l)}).next(I=>{g=I;const D=I.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(_,I.batchId,D)})}).then(()=>({batchId:g.batchId,changes:lm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new ze(Re)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await eo(r,s.changes),await Ka(r.remoteStore)}catch(s){const i=Tu(s,"Failed to persist write");n.reject(i)}}async function qm(t,e){const n=ge(t);try{const r=await bb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await eo(n,r,e)}catch(r){await Qi(r)}}function bd(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Iu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hR(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ze(ie.comparator);o=o.insert(i,It.newNoDocument(i,de.min()));const l=Ee().add(i),c=new $a(de.min(),new Map,new ze(Re),o,l);await qm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),wu(r)}else await Tc(r.localStore,e,!1).then(()=>wc(r,e,n)).catch(Qi)}async function fR(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await Ab(n.localStore,e);Km(n,r,null),Hm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Qi(s)}}async function dR(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ve(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Km(r,e,n),Hm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Qi(s)}}function Hm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Km(t,e,n){const r=ge(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function wc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Wm(t,r)})}function Wm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(mu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wu(t))}function Rd(t,e,n){for(const r of n)r instanceof Bm?(t.La.addReference(r.key,e),pR(t,r)):r instanceof jm?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Wm(t,r.key)):fe()}function pR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),wu(t))}function wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie($e.fromString(e)),r=t.qa.next();t.Na.set(r,new rR(n)),t.Oa=t.Oa.insert(n,r),Nm(t.remoteStore,new lr(_n(au(n.path)),r,"TargetPurposeLimboResolution",tu.oe))}}async function eo(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=gu.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const f=ge(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(h,g=>$.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>$.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ji(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.os.get(g),N=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(g,C)}}}(r.localStore,i))}async function gR(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Sm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ne(q.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.hs)}}function mR(t,e){const n=ge(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function zm(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hR.bind(null,e),e.Ca.d_=Zb.bind(null,e.eventManager),e.Ca.$a=eR.bind(null,e.eventManager),e}function _R(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dR.bind(null,e),e}class ca{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return wb(this.persistence,new Tb,e.initialUser,this.serializer)}Ga(e){return new yb(pu.Zr,this.serializer)}Wa(e){return new kb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ca.provider={build:()=>new ca};class Ac{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gR.bind(null,this.syncEngine),await Jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xb}()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=function(i){return new Vb(i)}(e.databaseInfo);return function(i,o,l,c){return new Mb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ub(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>bd(this.syncEngine,n,0),function(){return Ed.D()?new Ed:new Nb}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new sR(s,i,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Zi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ac.provider={build:()=>new Ac};/**
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
 */class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vR(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Td(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Td(e.remoteStore,s)),t._onlineComponents=e}async function vR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new ca)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new ca);return t._offlineComponents}async function Qm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Sd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Sd(t,new Ac))),t._onlineComponents}function ER(t){return Qm(t).then(e=>e.syncEngine)}async function bc(t){const e=await Qm(t),n=e.eventManager;return n.onListen=iR.bind(null,e.syncEngine),n.onUnlisten=lR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cR.bind(null,e.syncEngine),n}function TR(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new Gm({next:g=>{f.Za(),o.enqueueAndForget(()=>Fm(i,p)),g.fromCache&&c.source==="server"?h.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Um(l,f,{includeMetadataChanges:!0,_a:!0});return Mm(i,p)}(await bc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cd=new Map;/**
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
 */function Ym(t,e,n){if(!n)throw new ne(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IR(t,e,n,r){if(e===!0&&r===!0)throw new ne(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pd(t){if(!ie.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kd(t){if(ie.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Au(t);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Nd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uw;switch(r.type){case"firstParty":return new qw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Cd.delete(n),r.terminate())}(this),Promise.resolve()}}function wR(t,e,n,r={}){var s;const i=(t=vn(t,Wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Et.MOCK_USER;else{l=dI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(h)}t._authCredentials=new Bw(new Gg(l,c))}}/**
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
 */class to{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new to(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class dr extends to{constructor(e,n,r){super(e,n,au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new ie(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function bu(t,e,...n){if(t=it(t),Ym("collection","path",e),t instanceof Wa){const r=$e.fromString(e,...n);return kd(r),new dr(t,null,r)}{if(!(t instanceof Ht||t instanceof dr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return kd(r),new dr(t.firestore,null,r)}}function Xm(t,e,...n){if(t=it(t),arguments.length===1&&(e=Qg.newId()),Ym("doc","path",e),t instanceof Wa){const r=$e.fromString(e,...n);return Pd(r),new Ht(t,null,new ie(r))}{if(!(t instanceof Ht||t instanceof dr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Pd(r),new Ht(t.firestore,t instanceof dr?t.converter:null,new ie(r))}}/**
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
 */class Dd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Pm(this,"async_queue_retry"),this.Vu=()=>{const r=Fl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Eu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&fe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Od(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Hr extends Wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Dd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dd(e),this._firestoreClient=void 0,await e}}}function AR(t,e){const n=typeof t=="object"?t:Ug(),r=typeof t=="string"?t:"(default)",s=Zc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hI("firestore");i&&wR(s,...i)}return s}function Ru(t){if(t._terminated)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bR(t),t._firestoreClient}function bR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new nA(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Jm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(gt.fromBase64String(e))}catch(n){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ga{constructor(e){this._methodName=e}}/**
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
 */class Su{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */class Cu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const RR=/^__.*__$/;class SR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class Zm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function e_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Pu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ua(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(e_(this.Cu)&&RR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class CR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}Qu(e,n,r,s=!1){return new Pu({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t_(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new CR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PR(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Nu("Data must be an object, but it was:",o,r);const l=n_(r,o);let c,h;if(i.merge)c=new $t(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Rc(e,p,n);if(!o.contains(g))throw new ne(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);s_(f,g)||f.push(g)}c=new $t(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new SR(new Lt(l),c,h)}class Qa extends Ga{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}class ku extends Ga{_toFieldTransform(e){return new CA(e.path,new Fi)}isEqual(e){return e instanceof ku}}function kR(t,e,n,r){const s=t.Qu(1,e,n);Nu("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();zr(r,(c,h)=>{const f=Du(e,c,n);h=it(h);const p=s.Nu(f);if(h instanceof Qa)i.push(f);else{const g=Ja(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new $t(i);return new Zm(o,l,s.fieldTransforms)}function NR(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Rc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Rc(e,i[g])),c.push(i[g+1]);const h=[],f=Lt.empty();for(let g=l.length-1;g>=0;--g)if(!s_(h,l[g])){const _=l[g];let N=c[g];N=it(N);const C=o.Nu(_);if(N instanceof Qa)h.push(_);else{const I=Ja(N,C);I!=null&&(h.push(_),f.set(_,I))}}const p=new $t(h);return new Zm(f,p,o.fieldTransforms)}function Ja(t,e){if(r_(t=it(t)))return Nu("Unsupported field value:",e,t),n_(t,e);if(t instanceof Ga)return function(r,s){if(!e_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ja(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:aa(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:aa(s.serializer,i)}}if(r instanceof Su)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:Em(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return lu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Au(r)}`)}(t,e)}function n_(t,e){const n={};return Jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=Ja(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function r_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Su||t instanceof ks||t instanceof Ht||t instanceof Ga||t instanceof Cu)}function Nu(t,e,n){if(!r_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Au(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Rc(t,e,n){if((e=it(e))instanceof za)return e._internalPath;if(typeof e=="string")return Du(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const DR=new RegExp("[~\\*/\\[\\]]");function Du(t,e,n){if(e.search(DR)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new za(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(q.INVALID_ARGUMENT,l+t+c)}function s_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class i_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(o_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OR extends i_{data(){return super.data()}}function o_(t,e){return typeof e=="string"?Du(t,e):e instanceof za?e._internalPath:e._delegate._internalPath}/**
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
 */function a_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VR{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Je(o.doubleValue));return new Cu(i)}convertGeoPoint(e){return new Su(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ru(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const n=mr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(Rm(r));const s=new Li(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function xR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class l_ extends i_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(o_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends l_{data(e={}){return super.data(e)}}class c_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ci(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ci(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ci(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:LR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class Ou extends VR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function MR(t){t=vn(t,to);const e=vn(t.firestore,Hr),n=Ru(e),r=new Ou(e);return a_(t._query),TR(n,t._query).then(s=>new c_(e,r,t,s))}function FR(t,e,n,...r){t=vn(t,Ht);const s=vn(t.firestore,Hr),i=t_(s);let o;return o=typeof(e=it(e))=="string"||e instanceof za?NR(i,"updateDoc",t._key,e,n,r):kR(i,"updateDoc",t._key,e),Vu(s,[o.toMutation(t._key,nn.exists(!0))])}function UR(t){return Vu(vn(t.firestore,Hr),[new cu(t._key,nn.none())])}function BR(t,e){const n=vn(t.firestore,Hr),r=Xm(t),s=xR(t.converter,e);return Vu(n,[PR(t_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function u_(t,...e){var n,r,s;t=it(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Od(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Od(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(t instanceof Ht)h=vn(t.firestore,Hr),f=au(t._key.path),c={next:p=>{e[o]&&e[o](jR(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=vn(t,to);h=vn(p.firestore,Hr),f=p._query;const g=new Ou(h);c={next:_=>{e[o]&&e[o](new c_(h,g,p,_))},error:e[o+1],complete:e[o+2]},a_(t._query)}return function(g,_,N,C){const I=new Gm(C),D=new Um(_,I,N);return g.asyncQueue.enqueueAndForget(async()=>Mm(await bc(g),D)),()=>{I.Za(),g.asyncQueue.enqueueAndForget(async()=>Fm(await bc(g),D))}}(Ru(h),f,l,c)}function Vu(t,e){return function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget(async()=>uR(await ER(r),s,i)),i.promise}(Ru(t),e)}function jR(t,e,n){const r=n.docs.get(e._key),s=new Ou(t);return new l_(t,s,e._key,r,new ci(n.hasPendingWrites,n.fromCache),e.converter)}function $R(){return new ku("serverTimestamp")}(function(e,n=!0){(function(s){Os=s})(Ds),ws(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Hr(new jw(r.getProvider("auth-internal")),new Kw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),hr(Yf,"4.7.3",e),hr(Yf,"4.7.3","esm2017")})();function xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function h_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qR=h_,f_=new zi("auth","Firebase",h_());/**
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
 */const ha=new Yc("@firebase/auth");function HR(t,...e){ha.logLevel<=Te.WARN&&ha.warn(`Auth (${Ds}): ${t}`,...e)}function Uo(t,...e){ha.logLevel<=Te.ERROR&&ha.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function an(t,...e){throw Lu(t,...e)}function En(t,...e){return Lu(t,...e)}function d_(t,e,n){const r=Object.assign(Object.assign({},qR()),{[e]:n});return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return d_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f_.create(t,...e)}function he(t,e,...n){if(!t)throw Lu(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function qn(t,e){t||On(e)}/**
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
 */function Sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KR(){return Vd()==="http:"||Vd()==="https:"}function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KR()||_I()||"connection"in navigator)?navigator.onLine:!0}function zR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=pI()||yI()}get(){return WR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mu(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class p_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QR=new no(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return g_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return mI()||(h.referrerPolicy="no-referrer"),p_.fetch()(m_(t,t.config.apiHost,n,l),h)})}async function g_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GR),e);try{const s=new YR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw No(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw d_(t,f,h);an(t,f)}}catch(s){if(s instanceof Kn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function ro(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function m_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Mu(t.config,s):`${t.config.apiScheme}://${s}`}function JR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),QR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}function xd(t){return t!==void 0&&t.enterprise!==void 0}class XR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZR(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
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
 */async function e0(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function __(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t0(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Fu(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(Bl(s.auth_time)),issuedAtTime:wi(Bl(s.iat)),expirationTime:wi(Bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bl(t){return Number(t)*1e3}function Fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dg(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ld(t){const e=Fu(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&n0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ns(t,__(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?y_(i.providerUserInfo):[],l=i0(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Cc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function s0(t){const e=it(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function y_(t){return t.map(e=>{var{providerId:n}=e,r=xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function o0(t,e){const n=await g_(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=m_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",p_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a0(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
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
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Ld(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await o0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function er(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t0(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Ns(this,e0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(h=n.createdAt)!==null&&h!==void 0?h:void 0,P=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:H,isAnonymous:oe,providerData:re,stsTokenManager:w}=n;he(U&&w,e,"internal-error");const v=_s.fromJSON(this.name,w);he(typeof U=="string",e,"internal-error"),er(p,e.name),er(g,e.name),he(typeof H=="boolean",e,"internal-error"),he(typeof oe=="boolean",e,"internal-error"),er(_,e.name),er(N,e.name),er(C,e.name),er(I,e.name),er(D,e.name),er(P,e.name);const y=new Vn({uid:U,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:N,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:D,lastLoginAt:P});return re&&Array.isArray(re)&&(y.providerData=re.map(R=>Object.assign({},R))),I&&(y._redirectEventId=I),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new _s;l.updateFromIdToken(r);const c=new Vn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Md=new Map;function xn(t){qn(t instanceof Function,"Expected a class definition");let e=Md.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Md.set(t,e),e)}/**
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
 */class v_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v_.type="NONE";const Fd=v_;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(xn(Fd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xn(Fd);const o=Bo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=Vn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ys(i,e,r))}}/**
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
 */function Ud(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b_(e))return"Blackberry";if(R_(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E_(t=Rt()){return/firefox\//i.test(t)}function T_(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(t=Rt()){return/crios\//i.test(t)}function w_(t=Rt()){return/iemobile/i.test(t)}function A_(t=Rt()){return/android/i.test(t)}function b_(t=Rt()){return/blackberry/i.test(t)}function R_(t=Rt()){return/webos/i.test(t)}function Uu(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l0(t=Rt()){var e;return Uu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c0(){return vI()&&document.documentMode===10}function S_(t=Rt()){return Uu(t)||A_(t)||R_(t)||b_(t)||/windows phone/i.test(t)||w_(t)}/**
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
 */function C_(t,e=[]){let n;switch(t){case"Browser":n=Ud(Rt());break;case"Worker":n=`${Ud(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class u0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function h0(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
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
 */const f0=6;class d0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class p0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new u0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await __(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Ln(this));const n=e?it(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h0(this),n=new d0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await a0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return it(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g0(t){Ya=t}function P_(t){return Ya.loadJS(t)}function m0(){return Ya.recaptchaEnterpriseScript}function _0(){return Ya.gapiScript}function y0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v0="recaptcha-enterprise",E0="NO_RECAPTCHA";class T0{constructor(e){this.type=v0,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new XR(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;xd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(E0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&xd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=m0();c.length!==0&&(c+=l),P_(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function jd(t,e,n,r=!1){const s=new T0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Pc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await jd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function I0(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ta(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function w0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function A0(t,e,n){const r=Qr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=k_(e),{host:o,port:l}=b0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),R0()}function k_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b0(t){const e=k_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$d(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$d(o)}}}function $d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function S0(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function C0(t,e){return ro(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
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
 */async function P0(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function k0(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
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
 */class ji extends Bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pc(e,n,"signInWithPassword",C0);case"emailLink":return P0(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pc(e,r,"signUpPassword",S0);case"emailLink":return k0(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return ro(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
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
 */const N0="http://localhost";class Kr extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:N0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
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
 */function D0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O0(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,r=si(ii(t)).deep_link_id;return(r?si(ii(r)).link:null)||r||n||e||t}class ju{constructor(e){var n,r,s,i,o,l;const c=si(ii(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=D0((s=c.mode)!==null&&s!==void 0?s:null);he(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=O0(e);try{return new ju(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ju.parseLink(n);return he(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class N_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends N_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends so{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class or extends so{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends so{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function V0(t,e){return ro(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=qd(r);return new Wr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qd(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class da extends Kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new da(e,n,r,s)}}function D_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(t,i,e,r):i})}async function x0(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function L0(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await Ns(t,D_(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Fu(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),Wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
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
 */async function O_(t,e,n=!1){if(dn(t.app))return Promise.reject(Ln(t));const r="signIn",s=await D_(t,r,e),i=await Wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function M0(t,e){return O_(Qr(t),e)}/**
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
 */async function V_(t){const e=Qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function F0(t,e,n){if(dn(t.app))return Promise.reject(Ln(t));const r=Qr(t),o=await Pc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&V_(t),c}),l=await Wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function U0(t,e,n){return dn(t.app)?Promise.reject(Ln(t)):M0(it(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}/**
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
 */async function B0(t,e){return Wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function j0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=it(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,B0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $0(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function q0(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function H0(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function K0(t){return it(t).signOut()}const pa="__sak";/**
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
 */class x_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const W0=1e3,z0=10;class L_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);c0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const G0=L_;/**
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
 */class M_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M_.type="SESSION";const F_=M_;/**
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
 */function Q0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Q0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
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
 */function $u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class J0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=$u("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function Y0(t){Tn().location.href=t}/**
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
 */function U_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function X0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eS(){return U_()?self:null}/**
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
 */const B_="firebaseLocalStorageDb",tS=1,ga="firebaseLocalStorage",j_="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function nS(){const t=indexedDB.deleteDatabase(B_);return new io(t).toPromise()}function kc(){const t=indexedDB.open(B_,tS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ga,{keyPath:j_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ga)?e(r):(r.close(),await nS(),e(await kc()))})})}async function Hd(t,e,n){const r=Za(t,!0).put({[j_]:e,value:n});return new io(r).toPromise()}async function rS(t,e){const n=Za(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function Kd(t,e){const n=Za(t,!0).delete(e);return new io(n).toPromise()}const sS=800,iS=3;class $_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(eS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X0(),!this.activeServiceWorker)return;this.sender=new J0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kc();return await Hd(e,pa,"1"),await Kd(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Za(s,!1).getAll();return new io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$_.type="LOCAL";const oS=$_;new no(3e4,6e4);/**
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
 */function aS(t,e){return e?xn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qu extends Bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lS(t){return O_(t.auth,new qu(t),t.bypassAuthState)}function cS(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),L0(n,new qu(t),t.bypassAuthState)}async function uS(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),x0(n,new qu(t),t.bypassAuthState)}/**
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
 */class q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lS;case"linkViaPopup":case"linkViaRedirect":return uS;case"reauthViaPopup":case"reauthViaRedirect":return cS;default:an(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hS=new no(2e3,1e4);class ls extends q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hS.get())};e()}}ls.currentPopupAction=null;/**
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
 */const fS="pendingRedirect",jo=new Map;class dS extends q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await pS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pS(t,e){const n=_S(e),r=mS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function gS(t,e){jo.set(t._key(),e)}function mS(t){return xn(t._redirectPersistence)}function _S(t){return Bo(fS,t.config.apiKey,t.name)}async function yS(t,e,n=!1){if(dn(t.app))return Promise.reject(Ln(t));const r=Qr(t),s=aS(r,e),o=await new dS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vS=10*60*1e3;class ES{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wd(e))}saveEventToCache(e){this.cachedEventUids.add(Wd(e)),this.lastProcessedEventTime=Date.now()}}function Wd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H_(t);default:return!1}}/**
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
 */async function IS(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
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
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AS=/^https?/;async function bS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IS(t);for(const n of e)try{if(RS(n))return}catch{}an(t,"unauthorized-domain")}function RS(t){const e=Sc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AS.test(n))return!1;if(wS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const SS=new no(3e4,6e4);function zd(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CS(t){return new Promise((e,n)=>{var r,s,i;function o(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(En(t,"network-request-failed"))},timeout:SS.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const l=y0("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},P_(`${_0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw $o=null,e})}let $o=null;function PS(t){return $o=$o||CS(t),$o}/**
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
 */const kS=new no(5e3,15e3),NS="__/auth/iframe",DS="emulator/auth/iframe",OS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xS(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mu(e,DS):`https://${t.config.authDomain}/${NS}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=VS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gi(r).slice(1)}`}async function LS(t){const e=await PS(t),n=Tn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:xS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},kS.get());function c(){Tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FS=500,US=600,BS="_blank",jS="http://localhost";class Gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(t,e,n,r=FS,s=US){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},MS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Rt().toLowerCase();n&&(l=I_(h)?BS:n),E_(h)&&(e=e||jS,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,N])=>`${g}${_}=${N},`,"");if(l0(h)&&l!=="_self")return qS(e||"",l),new Gd(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Gd(p)}function qS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HS="__/auth/handler",KS="emulator/auth/handler",WS=encodeURIComponent("fac");async function Qd(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof N_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof so){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${WS}=${encodeURIComponent(c)}`:"";return`${zS(t)}?${Gi(l).slice(1)}${h}`}function zS({config:t}){return t.emulator?Mu(t,KS):`https://${t.authDomain}/${HS}`}/**
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
 */const jl="webStorageSupport";class GS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=yS,this._overrideRedirectResult=gS}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qd(e,n,r,Sc(),s);return $S(e,o,$u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qd(e,n,r,Sc(),s);return Y0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LS(e),r=new ES(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jl,{type:jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jl];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S_()||T_()||Uu()}}const QS=GS;var Jd="@firebase/auth",Yd="1.7.9";/**
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
 */class JS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XS(t){ws(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C_(t)},h=new p0(r,s,i,c);return w0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new Br("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new JS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Jd,Yd,YS(t)),hr(Jd,Yd,"esm2017")}/**
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
 */const ZS=5*60,eC=xg("authIdTokenMaxAge")||ZS;let Xd=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n==null?void 0:n.token;Xd!==s&&(Xd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=Ug()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I0(t,{popupRedirectResolver:QS,persistence:[oS,G0,F_]}),r=xg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());q0(n,o,()=>o(n.currentUser)),$0(n,l=>o(l))}}const s=Og("auth");return s&&A0(n,`http://${s}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XS("Browser");const sC={apiKey:"AIzaSyDvzFDVXYVNULdvPfI7BatLZSNMSHkDz6M",authDomain:"acervodigital-f4649.firebaseapp.com",projectId:"acervodigital-f4649",storageBucket:"acervodigital-f4649.firebasestorage.app",messagingSenderId:"228044737693",appId:"1:228044737693:web:1a0f8e315a7f51a27a9874"},K_=Fg(sC),ma=AR(K_),el=nC(K_),Nt=Fe(void 0);H0(el,t=>{Nt.value=t});function W_(t){return{"auth/email-already-in-use":"Já existe uma conta com esse e-mail.","auth/invalid-email":"E-mail inválido.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/too-many-requests":"Muitas tentativas. Tente novamente em instantes."}[t]||"Não foi possível completar a operação. Tente novamente."}async function iC(t,e,n){try{const r=await F0(el,e,n);return t&&await j0(r.user,{displayName:t}),{ok:!0}}catch(r){return{ok:!1,message:W_(r.code)}}}async function oC(t,e){try{return await U0(el,t,e),{ok:!0}}catch(n){return{ok:!1,message:W_(n.code)}}}async function aC(){await K0(el)}const Jr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lC={id:"app-root"},cC={class:"navbar"},uC={class:"container navbar-inner"},hC={class:"navbar-nav"},fC={key:0,class:"nav-badge"},dC=["title"],pC={class:"user-pill"},gC={class:"main-content"},mC={class:"toast-container"},_C={__name:"App",setup(t){const e=Pg(),n=Fe([]);function r({message:h,type:f=""}){const p=Date.now();n.value.push({id:p,message:h,type:f}),setTimeout(()=>{n.value=n.value.filter(g=>g.id!==p)},3e3)}di("showToast",r);async function s(){await aC(),r({message:"Você saiu da sua conta."}),e.push("/")}const i=Fe(0),o=Fe(!1);let l=null;function c(h){if(l&&(l(),l=null),i.value=0,!!h)try{l=u_(bu(ma,"usuarios",h.uid,"livros"),f=>{i.value=f.size})}catch{}}return Ki(()=>{Fr(Nt,c,{immediate:!0})}),(h,f)=>{const p=zo("router-link"),g=zo("router-view");return Z(),ae("div",lC,[V("header",cC,[V("div",uC,[Pe(p,{to:"/",class:"navbar-logo"},{default:tt(()=>[...f[2]||(f[2]=[V("span",{class:"logo-icon"},"📚",-1),V("span",{class:"logo-text"},[xe("Acervo"),V("em",null,"Digital")],-1)])]),_:1}),V("nav",hC,[Pe(p,{to:"/",class:"nav-link"},{default:tt(()=>[...f[3]||(f[3]=[xe("Início",-1)])]),_:1}),Pe(p,{to:"/buscar",class:"nav-link"},{default:tt(()=>[...f[4]||(f[4]=[xe("Explorar",-1)])]),_:1}),Pe(p,{to:"/biblioteca",class:"nav-link"},{default:tt(()=>[f[5]||(f[5]=xe(" Minha Biblioteca ",-1)),i.value>0?(Z(),ae("span",fC,_e(i.value),1)):ut("",!0)]),_:1}),Bt(Nt)?(Z(),ae(Oe,{key:0},[V("span",{class:"user-pill",title:Bt(Nt).email}," 👤 "+_e(Bt(Nt).displayName||Bt(Nt).email),9,dC),V("button",{class:"nav-link nav-logout",onClick:s},"Sair")],64)):(Z(),mn(p,{key:1,to:"/login",class:"nav-link"},{default:tt(()=>[...f[6]||(f[6]=[xe("Entrar",-1)])]),_:1}))]),V("button",{class:"menu-toggle",onClick:f[0]||(f[0]=_=>o.value=!o.value),"aria-label":"Menu"},[...f[7]||(f[7]=[V("span",null,null,-1),V("span",null,null,-1),V("span",null,null,-1)])])]),V("div",{class:Jt(["mobile-menu",{open:o.value}]),onClick:f[1]||(f[1]=_=>o.value=!1)},[Pe(p,{to:"/",class:"nav-link"},{default:tt(()=>[...f[8]||(f[8]=[xe("Início",-1)])]),_:1}),Pe(p,{to:"/buscar",class:"nav-link"},{default:tt(()=>[...f[9]||(f[9]=[xe("Explorar",-1)])]),_:1}),Pe(p,{to:"/biblioteca",class:"nav-link"},{default:tt(()=>[...f[10]||(f[10]=[xe("Minha Biblioteca",-1)])]),_:1}),Bt(Nt)?(Z(),ae(Oe,{key:0},[V("span",pC,"👤 "+_e(Bt(Nt).displayName||Bt(Nt).email),1),V("button",{class:"nav-link nav-logout",onClick:s},"Sair")],64)):(Z(),mn(p,{key:1,to:"/login",class:"nav-link"},{default:tt(()=>[...f[11]||(f[11]=[xe("Entrar",-1)])]),_:1}))],2)]),V("main",gC,[Pe(g,null,{default:tt(({Component:_})=>[Pe(Gc,{name:"fade",mode:"out-in"},{default:tt(()=>[(Z(),mn(Rv(_),{onToast:r},null,32))]),_:2},1024)]),_:1})]),f[12]||(f[12]=V("footer",{class:"footer"},[V("div",{class:"container footer-inner"},[V("span",null,"Acervo Digital — organize suas leituras"),V("span",{class:"footer-sep"},"·"),V("span",null,[xe("Dados: "),V("a",{href:"https://developers.google.com/books",target:"_blank",rel:"noopener"},"Google Books API")])])],-1)),V("div",mC,[(Z(!0),ae(Oe,null,gn(n.value,_=>(Z(),ae("div",{key:_.id,class:Jt(["toast",_.type])},_e(_.message),3))),128))])])}}},yC=Jr(_C,[["__scopeId","data-v-6811e1b0"]]),vC={class:"home"},EC={class:"hero"},TC={class:"container hero-inner"},IC={class:"hero-text"},wC={class:"hero-actions"},AC={class:"hero-visual"},bC={class:"books-stack"},RC={class:"how-section"},SC={class:"container"},CC={class:"steps-row"},PC={class:"step-num"},kC={class:"step-icon"},NC={class:"cta-section"},DC={class:"container cta-inner"},OC={__name:"Home",setup(t){const e=[{emoji:"📗",style:"transform: rotate(-8deg) translateX(-20px); background:#2d6a4f;"},{emoji:"📕",style:"transform: rotate(3deg) translateY(-10px); background:#c0392b; z-index:2;"},{emoji:"📘",style:"transform: rotate(10deg) translateX(15px); background:#1a4a7a;"},{emoji:"📙",style:"transform: rotate(-3deg) translateY(5px); background:#b8952a;"}],n=[{num:"01",icon:"🔍",title:"Busque",desc:"Digite o título, autor ou tema. Buscamos na base do Google Books com milhões de títulos."},{num:"02",icon:"➕",title:"Adicione",desc:"Clique em adicionar e o livro vai direto para sua biblioteca pessoal no Firebase."},{num:"03",icon:"✏️",title:"Registre",desc:"Marque o status de leitura, dê uma nota de 1 a 5 e deixe suas impressões."},{num:"04",icon:"📚",title:"Organize",desc:"Filtre por status, ordene por nota ou pesquise dentro da sua biblioteca."}];return(r,s)=>{const i=zo("router-link");return Z(),ae("div",vC,[V("section",EC,[V("div",TC,[V("div",IC,[s[2]||(s[2]=V("p",{class:"hero-eyebrow"},"Seu diário de leituras",-1)),s[3]||(s[3]=V("h1",{class:"hero-heading"},[xe(" Cada livro conta"),V("br"),V("em",null,"uma história sua.")],-1)),s[4]||(s[4]=V("p",{class:"hero-sub"}," Busque livros, monte sua biblioteca pessoal e registre o que você sentiu em cada leitura. Tudo num só lugar. ",-1)),V("div",wC,[Pe(i,{to:"/buscar",class:"btn btn-primary btn-lg"},{default:tt(()=>[...s[0]||(s[0]=[xe(" Explorar livros → ",-1)])]),_:1}),Pe(i,{to:"/biblioteca",class:"btn btn-ghost btn-lg"},{default:tt(()=>[...s[1]||(s[1]=[xe(" Minha biblioteca ",-1)])]),_:1})])]),V("div",AC,[V("div",bC,[(Z(),ae(Oe,null,gn(e,(o,l)=>V("div",{key:l,class:"demo-book",style:Aa(o.style)},[V("span",null,_e(o.emoji),1)],4)),64))])])])]),V("section",RC,[V("div",SC,[s[5]||(s[5]=V("h2",{class:"section-title"},"Como funciona",-1)),V("div",CC,[(Z(),ae(Oe,null,gn(n,o=>V("div",{class:"step",key:o.num},[V("div",PC,_e(o.num),1),V("div",kC,_e(o.icon),1),V("h3",null,_e(o.title),1),V("p",null,_e(o.desc),1)])),64))])])]),V("section",NC,[V("div",DC,[s[7]||(s[7]=V("div",{class:"cta-quote"},[V("blockquote",null,' "Uma leitura bem registrada é uma memória que não desaparece." ')],-1)),Pe(i,{to:"/buscar",class:"btn btn-accent btn-lg"},{default:tt(()=>[...s[6]||(s[6]=[xe(" Começar agora ",-1)])]),_:1})])])])}}},VC=Jr(OC,[["__scopeId","data-v-1de39f1d"]]),xC={class:"searchbar"},LC={class:"searchbar-inner"},MC=["placeholder","value"],FC={__name:"SearchBar",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"Buscar livros…"}},emits:["update:modelValue","search","clear"],setup(t){return(e,n)=>(Z(),ae("div",xC,[V("div",LC,[n[4]||(n[4]=V("span",{class:"searchbar-icon"},"🔍",-1)),V("input",{class:"searchbar-input",type:"text",placeholder:t.placeholder,value:t.modelValue,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value)),onKeyup:n[1]||(n[1]=HE(r=>e.$emit("search"),["enter"])),autocomplete:"off",spellcheck:"false"},null,40,MC),t.modelValue?(Z(),ae("button",{key:0,class:"searchbar-clear",onClick:n[2]||(n[2]=r=>{e.$emit("update:modelValue",""),e.$emit("clear")}),"aria-label":"Limpar"},"✕")):ut("",!0),V("button",{class:"searchbar-btn btn btn-primary",onClick:n[3]||(n[3]=r=>e.$emit("search"))}," Buscar ")])]))}},UC=Jr(FC,[["__scopeId","data-v-75c75540"]]),BC={class:"card-cover"},jC=["src","alt"],$C={key:1,class:"cover-placeholder"},qC={class:"card-body"},HC={class:"card-meta"},KC={key:0,class:"book-category"},WC={key:1,class:"book-year"},zC={class:"card-title"},GC={class:"card-author"},QC={key:0,class:"card-stars"},JC={key:1,class:"card-comment"},YC={class:"card-actions"},XC=["disabled"],ZC={key:0,class:"card-hint"},eP={class:"detail-modal"},tP={class:"detail-header"},nP={class:"detail-book-info"},rP={class:"detail-cover-wrap"},sP=["src","alt"],iP={key:1,class:"detail-cover-placeholder"},oP={class:"detail-meta"},aP={key:0,class:"detail-category"},lP={class:"detail-title"},cP={class:"detail-author"},uP={key:1,class:"detail-year"},hP={class:"detail-body"},fP={class:"detail-field"},dP={class:"status-pills"},pP=["onClick"],gP={class:"detail-field"},mP={class:"stars-row"},_P=["onClick"],yP={key:0,class:"rating-hint"},vP={class:"detail-field detail-field-grow"},EP={class:"detail-footer"},TP={class:"footer-right"},IP=["disabled"],wP={__name:"BookCard",props:{book:{type:Object,required:!0},inLibrary:{type:Boolean,default:!1}},emits:["add","save","delete"],setup(t,{emit:e}){const n=t,r=e,s=Fe(!1),i=Fe(!1),o=Fe({status:"Quero ler",rating:0,comentario:""});Fr(()=>n.book,C=>{o.value={status:C.status||"Quero ler",rating:C.rating||0,comentario:C.comment||""}},{immediate:!0});function l(){o.value={status:n.book.status||"Quero ler",rating:n.book.rating||0,comentario:n.book.comment||""},s.value=!0,document.body.style.overflow="hidden"}function c(){s.value=!1,document.body.style.overflow=""}async function h(){i.value=!0,r("save",{id:n.book.id,status:o.value.status,nota:o.value.rating,comentario:o.value.comentario}),i.value=!1,c()}const f=[{value:"Quero ler",icon:"🔖",label:"Quero ler"},{value:"Lendo",icon:"📖",label:"Lendo"},{value:"Finalizado",icon:"✅",label:"Finalizado"},{value:"Abandonado",icon:"🚫",label:"Abandonado"}],p={1:"Não gostei",2:"Regular",3:"Bom",4:"Muito bom",5:"Excelente"},g={"Quero ler":{label:"Quero ler",cls:"badge-want"},Lendo:{label:"Lendo",cls:"badge-reading"},Finalizado:{label:"Finalizado",cls:"badge-done"},Abandonado:{label:"Abandonado",cls:"badge-abandoned"}},_=xt(()=>{var C;return((C=g[n.book.status])==null?void 0:C.label)??n.book.status}),N=xt(()=>{var C;return((C=g[n.book.status])==null?void 0:C.cls)??""});return(C,I)=>(Z(),ae(Oe,null,[V("article",{class:Jt(["book-card",{"in-library":t.inLibrary}]),onClick:I[1]||(I[1]=D=>t.inLibrary?l():null)},[V("div",BC,[t.book.image?(Z(),ae("img",{key:0,src:t.book.image,alt:`Capa de ${t.book.title}`,loading:"lazy"},null,8,jC)):(Z(),ae("div",$C,[I[4]||(I[4]=V("span",null,"📖",-1)),V("small",null,_e(t.book.title),1)])),t.book.status?(Z(),ae("span",{key:2,class:Jt(["status-chip",N.value])},_e(_.value),3)):ut("",!0)]),V("div",qC,[V("div",HC,[t.book.category?(Z(),ae("span",KC,_e(t.book.category),1)):ut("",!0),t.book.year?(Z(),ae("span",WC,_e(t.book.year),1)):ut("",!0)]),V("h3",zC,_e(t.book.title),1),V("p",GC,_e(t.book.author||"Autor desconhecido"),1),t.book.rating?(Z(),ae("div",QC,[(Z(),ae(Oe,null,gn(5,D=>V("span",{key:D,class:Jt(["star",{filled:D<=t.book.rating}])},"★",2)),64))])):ut("",!0),t.book.comment?(Z(),ae("p",JC,'"'+_e(t.book.comment)+'"',1)):ut("",!0),V("div",YC,[Sv(C.$slots,"actions",{},()=>[V("button",{class:Jt(["btn",t.inLibrary?"btn-ghost":"btn-primary"]),onClick:I[0]||(I[0]=Zo(D=>C.$emit("add",t.book),["stop"])),disabled:t.inLibrary},_e(t.inLibrary?"✓ Na biblioteca":"+ Adicionar"),11,XC)])])]),t.inLibrary?(Z(),ae("div",ZC,"clique para abrir")):ut("",!0)],2),(Z(),mn(Op,{to:"body"},[Pe(Gc,{name:"detail-modal"},{default:tt(()=>[s.value?(Z(),ae("div",{key:0,class:"detail-overlay",onClick:Zo(c,["self"])},[V("div",eP,[V("div",tP,[V("div",nP,[V("div",rP,[t.book.image?(Z(),ae("img",{key:0,src:t.book.image,alt:t.book.title,class:"detail-cover"},null,8,sP)):(Z(),ae("div",iP,"📖"))]),V("div",oP,[t.book.category?(Z(),ae("span",aP,_e(t.book.category),1)):ut("",!0),V("h2",lP,_e(t.book.title),1),V("p",cP,_e(t.book.author||"Autor desconhecido"),1),t.book.year?(Z(),ae("p",uP,_e(t.book.year),1)):ut("",!0)])]),V("button",{class:"detail-close",onClick:c,"aria-label":"Fechar"},"✕")]),V("div",hP,[V("div",fP,[I[5]||(I[5]=V("label",{class:"detail-label"},"Status de leitura",-1)),V("div",dP,[(Z(),ae(Oe,null,gn(f,D=>V("button",{key:D.value,class:Jt(["pill",{active:o.value.status===D.value}]),onClick:P=>o.value.status=D.value},_e(D.icon)+" "+_e(D.label),11,pP)),64))])]),V("div",gP,[I[6]||(I[6]=V("label",{class:"detail-label"},"Minha nota",-1)),V("div",mP,[(Z(),ae(Oe,null,gn(5,D=>V("button",{key:D,class:Jt(["star-pick",{filled:D<=o.value.rating}]),onClick:P=>o.value.rating=o.value.rating===D?0:D},"★",10,_P)),64)),o.value.rating?(Z(),ae("span",yP,_e(p[o.value.rating]),1)):ut("",!0)])]),V("div",vP,[I[7]||(I[7]=V("label",{class:"detail-label"},"📝 Bloco de notas",-1)),fs(V("textarea",{"onUpdate:modelValue":I[2]||(I[2]=D=>o.value.comentario=D),class:"input detail-textarea",placeholder:"Suas impressões, citações favoritas, reflexões, personagens marcantes…"},null,512),[[_i,o.value.comentario]])])]),V("div",EP,[V("button",{class:"btn btn-danger",onClick:I[3]||(I[3]=D=>C.$emit("delete",t.book))},"🗑 Remover livro"),V("div",TP,[V("button",{class:"btn btn-ghost",onClick:c},"Descartar"),V("button",{class:"btn btn-primary",onClick:h,disabled:i.value},_e(i.value?"Salvando…":"✓ Salvar"),9,IP)])])])])):ut("",!0)]),_:1})]))],64))}},z_=Jr(wP,[["__scopeId","data-v-64197e17"]]),AP={class:"search-page"},bP={class:"container"},RP={key:0,class:"spinner"},SP={key:1,class:"error-msg"},CP={key:2},PP={class:"results-count"},kP={class:"books-grid"},NP={key:3,class:"empty-state"},DP={key:4,class:"initial-state"},OP={class:"suggestions"},VP={class:"suggestions-chips"},xP=["onClick"],LP={__name:"Search",setup(t){const e=qt("showToast");function n(){return bu(ma,"usuarios",Nt.value.uid,"livros")}const r=Fe(""),s=Fe([]),i=Fe(!1),o=Fe(""),l=Fe(!1),c=Fe(""),h=Fe(new Set),f=["Dom Casmurro","1984","Harry Potter","Sapiens","O Alquimista","Clarice Lispector","Fiódor Dostoiévski"];function p(I,D){const P=new URLSearchParams({q:I,maxResults:"20"});return D&&P.set("langRestrict","pt"),`https://www.googleapis.com/books/v1/volumes?${P.toString()}`}function g(I){var U,H;const D=I.volumeInfo||{},P=((U=D.imageLinks)==null?void 0:U.thumbnail)||((H=D.imageLinks)==null?void 0:H.smallThumbnail)||"";return{id:I.id,title:D.title||"Título desconhecido",author:(D.authors||[]).join(", "),image:P.replace("http://","https://"),description:D.description||"",year:(D.publishedDate||"").slice(0,4),category:(D.categories||[])[0]||"",pages:D.pageCount||null,publisher:D.publisher||""}}async function _(){const I=r.value.trim();if(I){i.value=!0,o.value="",l.value=!1;try{const D=await fetch(p(I,!0));if(D.status===429){o.value="Muitas buscas em pouco tempo (limite da API do Google Books). Espere um minuto e tente de novo — ou configure uma chave de API gratuita para aumentar o limite (veja o README).";return}if(!D.ok)throw new Error("Erro na requisição à API");const P=await D.json();if(c.value=I,l.value=!0,s.value=(P.items||[]).map(g),s.value.length===0){const U=await fetch(p(I,!1));if(U.ok){const H=await U.json();s.value=(H.items||[]).map(g)}}}catch{o.value="Não foi possível buscar os livros. Verifique sua conexão."}finally{i.value=!1}}}async function N(){try{(await MR(n())).forEach(D=>h.value.add(D.data().googleBooksId))}catch{}}async function C(I){if(h.value.has(I.id)){e({message:"Este livro já está na sua biblioteca.",type:""});return}try{await BR(n(),{googleBooksId:I.id,titulo:I.title,autor:I.author,capa:I.image,descricao:I.description,ano:I.year,categoria:I.category,status:"Quero ler",nota:0,comentario:"",adicionadoEm:$R()}),h.value.add(I.id),e({message:`"${I.title}" adicionado à biblioteca!`,type:"success"})}catch{e({message:"Erro ao salvar. Verifique as configurações do Firebase.",type:"error"})}}return Ki(N),(I,D)=>(Z(),ae("div",AP,[V("div",bP,[D[7]||(D[7]=V("div",{class:"page-header"},[V("h1",{class:"page-title"},"Explorar Livros"),V("p",{class:"page-sub"},"Busque por título, autor ou assunto")],-1)),Pe(UC,{modelValue:r.value,"onUpdate:modelValue":D[0]||(D[0]=P=>r.value=P),placeholder:"Ex: Dom Casmurro, George Orwell, ficção científica…",onSearch:_,onClear:D[1]||(D[1]=P=>s.value=[])},null,8,["modelValue"]),i.value?(Z(),ae("div",RP)):o.value?(Z(),ae("div",SP,[D[2]||(D[2]=V("span",null,"⚠️",-1)),xe(" "+_e(o.value),1)])):s.value.length>0?(Z(),ae("div",CP,[V("p",PP,[V("span",null,_e(s.value.length)+" resultado"+_e(s.value.length>1?"s":""),1),D[3]||(D[3]=xe(' para "',-1)),V("em",null,_e(c.value),1),D[4]||(D[4]=xe('" ',-1))]),V("div",kP,[(Z(!0),ae(Oe,null,gn(s.value,P=>(Z(),mn(z_,{key:P.id,book:P,inLibrary:h.value.has(P.id),onAdd:C},null,8,["book","inLibrary"]))),128))])])):l.value?(Z(),ae("div",NP,[...D[5]||(D[5]=[V("div",{class:"empty-icon"},"🔍",-1),V("h3",null,"Nenhum resultado",-1),V("p",null,"Tente termos mais simples ou verifique a ortografia.",-1)])])):(Z(),ae("div",DP,[V("div",OP,[D[6]||(D[6]=V("p",{class:"suggestions-label"},"Sugestões para começar:",-1)),V("div",VP,[(Z(),ae(Oe,null,gn(f,P=>V("button",{key:P,class:"chip",onClick:U=>{r.value=P,_()}},_e(P),9,xP)),64))])])]))])]))}},MP=Jr(LP,[["__scopeId","data-v-eada6ca1"]]),FP={class:"library-page"},UP={class:"container"},BP={class:"page-header"},jP={class:"page-sub"},$P={class:"book-count"},qP={class:"controls"},HP={class:"local-search"},KP={class:"filter-tabs"},WP=["onClick"],zP={class:"tab-count"},GP={key:0,class:"spinner"},QP={key:1,class:"empty-state"},JP={key:2,class:"empty-state"},YP={key:3,class:"books-grid"},XP={class:"confirm-modal"},ZP={class:"confirm-actions"},ek={__name:"Library",setup(t){const e=qt("showToast");function n(C){return Xm(ma,"usuarios",Nt.value.uid,"livros",C)}const r=Fe([]),s=Fe(!0),i=Fe(""),o=Fe("all"),l=Fe("recent"),c=Fe(null),h=[{label:"Todos",value:"all"},{label:"Quero ler",value:"Quero ler"},{label:"Lendo",value:"Lendo"},{label:"Finalizados",value:"Finalizado"},{label:"Abandonados",value:"Abandonado"}];Ki(()=>{try{u_(bu(ma,"usuarios",Nt.value.uid,"livros"),C=>{r.value=C.docs.map(I=>({id:I.id,...I.data()})),s.value=!1})}catch{s.value=!1,e({message:"Configure o Firebase para usar a biblioteca.",type:"error"})}});const f=xt(()=>{let C=[...r.value];o.value!=="all"&&(C=C.filter(D=>D.status===o.value));const I=i.value.toLowerCase().trim();switch(I&&(C=C.filter(D=>{var P,U;return((P=D.titulo)==null?void 0:P.toLowerCase().includes(I))||((U=D.autor)==null?void 0:U.toLowerCase().includes(I))})),l.value){case"rating":C.sort((D,P)=>(P.nota||0)-(D.nota||0));break;case"az":C.sort((D,P)=>{var U;return(U=D.titulo)==null?void 0:U.localeCompare(P.titulo)});break;case"za":C.sort((D,P)=>{var U;return(U=P.titulo)==null?void 0:U.localeCompare(D.titulo)});break;default:C.sort((D,P)=>{var U,H;return(((U=P.adicionadoEm)==null?void 0:U.seconds)||0)-(((H=D.adicionadoEm)==null?void 0:H.seconds)||0)})}return C});function p(C){return C==="all"?r.value.length:r.value.filter(I=>I.status===C).length}async function g({id:C,status:I,nota:D,comentario:P}){try{await FR(n(C),{status:I,nota:D,comentario:P}),e({message:"Livro atualizado!",type:"success"})}catch{e({message:"Erro ao atualizar o livro.",type:"error"})}}function _(C){c.value=r.value.find(I=>I.id===C.id)||C}async function N(){if(!c.value)return;const C=c.value.titulo||c.value.title;try{await UR(n(c.value.id)),e({message:`"${C}" removido da biblioteca.`})}catch{e({message:"Erro ao remover o livro.",type:"error"})}finally{c.value=null}}return(C,I)=>{const D=zo("router-link");return Z(),ae("div",FP,[V("div",UP,[V("div",BP,[V("div",null,[I[4]||(I[4]=V("h1",{class:"page-title"},"Minha Biblioteca",-1)),V("p",jP,[V("span",$P,_e(f.value.length),1),xe(" "+_e(f.value.length===1?"livro":"livros")+" ",1),f.value.length!==r.value.length?(Z(),ae(Oe,{key:0},[xe(" de "+_e(r.value.length)+" no total",1)],64)):ut("",!0)])]),Pe(D,{to:"/buscar",class:"btn btn-primary"},{default:tt(()=>[...I[5]||(I[5]=[xe(" + Adicionar livros ",-1)])]),_:1})]),V("div",qP,[V("div",HP,[I[6]||(I[6]=V("span",{class:"search-icon"},"🔍",-1)),fs(V("input",{class:"input","onUpdate:modelValue":I[0]||(I[0]=P=>i.value=P),placeholder:"Buscar na biblioteca…",autocomplete:"off"},null,512),[[_i,i.value]])]),V("div",KP,[(Z(),ae(Oe,null,gn(h,P=>V("button",{key:P.value,class:Jt(["filter-tab",{active:o.value===P.value}]),onClick:U=>o.value=P.value},[xe(_e(P.label)+" ",1),V("span",zP,_e(p(P.value)),1)],10,WP)),64))]),fs(V("select",{"onUpdate:modelValue":I[1]||(I[1]=P=>l.value=P),class:"input sort-select"},[...I[7]||(I[7]=[V("option",{value:"recent"},"Mais recentes",-1),V("option",{value:"rating"},"Maior nota",-1),V("option",{value:"az"},"A → Z",-1),V("option",{value:"za"},"Z → A",-1)])],512),[[BE,l.value]])]),s.value?(Z(),ae("div",GP)):r.value.length===0?(Z(),ae("div",QP,[I[9]||(I[9]=V("div",{class:"empty-icon"},"📚",-1)),I[10]||(I[10]=V("h3",null,"Sua biblioteca está vazia",-1)),I[11]||(I[11]=V("p",null,"Explore livros e adicione os que quiser ao seu acervo.",-1)),Pe(D,{to:"/buscar",class:"btn btn-primary",style:{"margin-top":"16px"}},{default:tt(()=>[...I[8]||(I[8]=[xe(" Explorar livros ",-1)])]),_:1})])):f.value.length===0?(Z(),ae("div",JP,[...I[12]||(I[12]=[V("div",{class:"empty-icon"},"🔎",-1),V("h3",null,"Nenhum livro encontrado",-1),V("p",null,"Tente outro filtro ou termo de busca.",-1)])])):(Z(),ae("div",YP,[(Z(!0),ae(Oe,null,gn(f.value,P=>(Z(),mn(z_,{key:P.id,book:{...P,title:P.titulo,author:P.autor,image:P.capa,year:P.ano,category:P.categoria,rating:P.nota,comment:P.comentario},inLibrary:!0,onSave:g,onDelete:_},null,8,["book"]))),128))]))]),(Z(),mn(Op,{to:"body"},[Pe(Gc,{name:"modal"},{default:tt(()=>{var P;return[c.value?(Z(),ae("div",{key:0,class:"modal-overlay",onClick:I[3]||(I[3]=Zo(U=>c.value=null,["self"]))},[V("div",XP,[I[15]||(I[15]=V("h3",null,"Remover livro",-1)),V("p",null,[I[13]||(I[13]=xe("Tem certeza que deseja remover ",-1)),V("strong",null,'"'+_e((P=c.value)==null?void 0:P.titulo)+'"',1),I[14]||(I[14]=xe(" da sua biblioteca?",-1))]),V("div",ZP,[V("button",{class:"btn btn-ghost",onClick:I[2]||(I[2]=U=>c.value=null)},"Cancelar"),V("button",{class:"btn btn-danger",onClick:N},"Remover")])])])):ut("",!0)]}),_:1})]))])}}},tk=Jr(ek,[["__scopeId","data-v-ac450aef"]]),nk={class:"login-page"},rk={class:"login-card"},sk={class:"login-title"},ik={class:"login-sub"},ok={key:0,class:"field"},ak={class:"field"},lk={class:"field"},ck={key:1,class:"login-erro"},uk=["disabled"],hk={class:"login-switch"},fk={__name:"Login",setup(t){const e=Pg(),n=rI(),r=Fe("login"),s=Fe(""),i=Fe(""),o=Fe(""),l=Fe(""),c=Fe(!1);function h(){r.value=r.value==="login"?"cadastro":"login",l.value=""}async function f(){l.value="",c.value=!0;const p=r.value==="login"?await oC(i.value,o.value):await iC(s.value,i.value,o.value);if(c.value=!1,!p.ok){l.value=p.message;return}e.replace(n.query.redirect||"/")}return(p,g)=>(Z(),ae("div",nk,[V("div",rk,[g[8]||(g[8]=V("div",{class:"login-logo"},[V("span",{class:"logo-icon"},"📚"),V("span",{class:"logo-text"},[xe("Acervo"),V("em",null,"Digital")])],-1)),V("h1",sk,_e(r.value==="login"?"Entrar":"Criar conta"),1),V("p",ik,_e(r.value==="login"?"Acesse sua biblioteca pessoal.":"Sua biblioteca fica separada e só você tem acesso."),1),V("form",{onSubmit:Zo(f,["prevent"]),class:"login-form"},[r.value==="cadastro"?(Z(),ae("label",ok,[g[3]||(g[3]=V("span",null,"Nome",-1)),fs(V("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>s.value=_),class:"input",type:"text",autocomplete:"name"},null,512),[[_i,s.value]])])):ut("",!0),V("label",ak,[g[4]||(g[4]=V("span",null,"E-mail",-1)),fs(V("input",{"onUpdate:modelValue":g[1]||(g[1]=_=>i.value=_),class:"input",type:"email",required:"",autocomplete:"email"},null,512),[[_i,i.value]])]),V("label",lk,[g[5]||(g[5]=V("span",null,"Senha",-1)),fs(V("input",{"onUpdate:modelValue":g[2]||(g[2]=_=>o.value=_),class:"input",type:"password",required:"",minlength:"6",autocomplete:"current-password"},null,512),[[_i,o.value]])]),l.value?(Z(),ae("p",ck,"⚠️ "+_e(l.value),1)):ut("",!0),V("button",{class:"btn btn-primary btn-lg login-submit",type:"submit",disabled:c.value},_e(c.value?"Aguarde…":r.value==="login"?"Entrar":"Criar conta"),9,uk)],32),V("p",hk,[r.value==="login"?(Z(),ae(Oe,{key:0},[g[6]||(g[6]=xe(" Não tem conta? ",-1)),V("button",{type:"button",onClick:h},"Criar uma agora")],64)):(Z(),ae(Oe,{key:1},[g[7]||(g[7]=xe(" Já tem conta? ",-1)),V("button",{type:"button",onClick:h},"Entrar")],64))])])]))}},dk=Jr(fk,[["__scopeId","data-v-66ccaa7a"]]),pk=[{path:"/",component:VC,name:"home"},{path:"/buscar",component:MP,name:"search",meta:{requiresAuth:!0}},{path:"/biblioteca",component:tk,name:"library",meta:{requiresAuth:!0}},{path:"/login",component:dk,name:"login"}],G_=nI({history:VT(),routes:pk,scrollBehavior:()=>({top:0})});function gk(){return Nt.value!==void 0?Promise.resolve():new Promise(t=>{const e=Fr(Nt,n=>{n!==void 0&&(e(),t())})})}G_.beforeEach(async t=>{await gk();const e=!!Nt.value;if(t.meta.requiresAuth&&!e)return{path:"/login",query:{redirect:t.fullPath}};if(t.name==="login"&&e)return{path:"/"}});zE(yC).use(G_).mount("#app");
