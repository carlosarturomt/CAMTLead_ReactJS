function rk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ik(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},vc={},j0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),sk=Symbol.for("react.portal"),ok=Symbol.for("react.fragment"),ak=Symbol.for("react.strict_mode"),lk=Symbol.for("react.profiler"),uk=Symbol.for("react.provider"),ck=Symbol.for("react.context"),hk=Symbol.for("react.forward_ref"),dk=Symbol.for("react.suspense"),fk=Symbol.for("react.memo"),pk=Symbol.for("react.lazy"),ly=Symbol.iterator;function mk(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B0=Object.assign,z0={};function xs(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||V0}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=xs.prototype;function Ap(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||V0}var Pp=Ap.prototype=new W0;Pp.constructor=Ap;B0(Pp,xs.prototype);Pp.isPureReactComponent=!0;var uy=Array.isArray,H0=Object.prototype.hasOwnProperty,Dp={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:Dp.current}}function gk(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cy=/\/+/g;function Th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yk(""+t.key):e.toString(36)}function $l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case sk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Th(o,0):r,uy(i)?(n="",t!=null&&(n=t.replace(cy,"$&/")+"/"),$l(i,e,n,"",function(u){return u})):i!=null&&(bp(i)&&(i=gk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Th(s,a);o+=$l(s,e,n,l,i)}else if(l=mk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Th(s,a++),o+=$l(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(t,e,n){if(t==null)return t;var r=[],i=0;return $l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ul={transition:null},_k={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Dp};K.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!bp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=xs;K.Fragment=ok;K.Profiler=lk;K.PureComponent=Ap;K.StrictMode=ak;K.Suspense=dk;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_k;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=B0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!K0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:ck,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uk,_context:t},t.Consumer=t};K.createElement=G0;K.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:hk,render:t}};K.isValidElement=bp;K.lazy=function(t){return{$$typeof:pk,_payload:{_status:-1,_result:t},_init:vk}};K.memo=function(t,e){return{$$typeof:fk,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return ct.current.useCallback(t,e)};K.useContext=function(t){return ct.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};K.useEffect=function(t,e){return ct.current.useEffect(t,e)};K.useId=function(){return ct.current.useId()};K.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return ct.current.useMemo(t,e)};K.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};K.useRef=function(t){return ct.current.useRef(t)};K.useState=function(t){return ct.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return ct.current.useTransition()};K.version="18.2.0";j0.exports=K;var I=j0.exports;const q0=ik(I),wk=rk({__proto__:null,default:q0},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ek=I,Ck=Symbol.for("react.element"),Ik=Symbol.for("react.fragment"),Tk=Object.prototype.hasOwnProperty,Sk=Ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kk={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Tk.call(e,r)&&!kk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ck,type:t,key:s,ref:o,props:i,_owner:Sk.current}}vc.Fragment=Ik;vc.jsx=Q0;vc.jsxs=Q0;U0.exports=vc;var _=U0.exports;function xk(){const[t,e]=I.useState(window.innerWidth),n=t<420;return I.useEffect(()=>{const r=()=>e(window.innerWidth);return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),_.jsxs(_.Fragment,{children:[_.jsx("h1",{className:n?"text-red-500":"text-blue-500",children:t}),n&&_.jsx("h2",{children:"Show only mobile device"})]})}function Nk(){return _.jsxs(_.Fragment,{children:[_.jsx("header",{className:"bg-stars",children:_.jsx("aside",{className:"radial-ellipse-far"})}),_.jsx("style",{children:`
                    header {
                        background: #170325;
                    }
                    .bg-stars {
                        margin-top: -40px;

                            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                            background-position: center;
                            height: 100vh;
                            background-size: auto;
                            color: #fefefe;
                    }
                    section {
                        background: #25103d;
                        width: 100%;
                        height: 100vh;
                        z-index: 11 !important;
                        position: relative;
                    }
                    .radial-ellipse-far {
                        height: 100vh;
                        background: radial-gradient(ellipse farthest-corner at 50% 150%,#e7d1ff, #8844d4, #000000e8 100%);
                    }
                `})]})}/**
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
 */const Y0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Ns(e)},Ns=function(t){return new Error("Firebase Database ("+Y0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const X0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Ak;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ak extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J0=function(t){const e=X0(t);return Op.encodeByteArray(e,!0)},iu=function(t){return J0(t).replace(/\./g,"")},su=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pk(t){return Z0(void 0,t)}function Z0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Dk(n)||(t[n]=Z0(t[n],e[n]));return t}function Dk(t){return t!=="__proto__"}/**
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
 */function bk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ok=()=>bk().__FIREBASE_DEFAULTS__,Mk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&su(t[1]);return e&&JSON.parse(e)},Mp=()=>{try{return Ok()||Mk()||Lk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ew=t=>{var e,n;return(n=(e=Mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fk=t=>{const e=ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tw=()=>{var t;return(t=Mp())===null||t===void 0?void 0:t.config},nw=t=>{var e;return(e=Mp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $k(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),a].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Uk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jk(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return Y0.NODE_ADMIN===!0}function sw(){try{return typeof indexedDB=="object"}catch{return!1}}function Vk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Bk="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bk,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,r)}}function zk(t,e){return t.replace(Wk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wk=/\{\$([^}]+)}/g;/**
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
 */function Po(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const ow=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Po(su(s[0])||""),n=Po(su(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Hk=function(t){const e=ow(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kk=function(t){const e=ow(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function as(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ou(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function au(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hy(s)&&hy(o)){if(!au(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hy(t){return t!==null&&typeof t=="object"}/**
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
 */function Rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Gk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qk(t,e){const n=new Qk(t,e);return n.subscribe.bind(n)}class Qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sh),i.error===void 0&&(i.error=Sh),i.complete===void 0&&(i.complete=Sh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sh(){}function aw(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Xk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Jk=1e3,Zk=2,ex=4*60*60*1e3,tx=.5;function nx(t,e=Jk,n=Zk){const r=e*Math.pow(n,t),i=Math.round(tx*r*(Math.random()-.5)*2);return Math.min(ex,r+i)}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class St{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class rx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sx(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ix(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ix(t){return t===Ar?void 0:t}function sx(t){return t.instantiationMode==="EAGER"}/**
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
 */class ox{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const ax={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},lx=Q.INFO,ux={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},cx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ux[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=lx,this._logHandler=cx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ax[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const hx=(t,e)=>e.some(n=>t instanceof n);let dy,fy;function dx(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fx(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lw=new WeakMap,bd=new WeakMap,uw=new WeakMap,kh=new WeakMap,$p=new WeakMap;function px(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lw.set(n,t)}).catch(()=>{}),$p.set(e,t),e}function mx(t){if(bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gx(t){Od=t(Od)}function yx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xh(this),e,...n);return uw.set(r,e.sort?e.sort():[e]),tr(r)}:fx().includes(t)?function(...e){return t.apply(xh(this),e),tr(lw.get(this))}:function(...e){return tr(t.apply(xh(this),e))}}function vx(t){return typeof t=="function"?yx(t):(t instanceof IDBTransaction&&mx(t),hx(t,dx())?new Proxy(t,Od):t)}function tr(t){if(t instanceof IDBRequest)return px(t);if(kh.has(t))return kh.get(t);const e=vx(t);return e!==t&&(kh.set(t,e),$p.set(e,t)),e}const xh=t=>$p.get(t);function _x(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wx=["get","getKey","getAll","getAllKeys","count"],Ex=["put","add","delete","clear"],Nh=new Map;function py(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ex.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nh.set(e,s),s}gx(t=>({...t,get:(e,n,r)=>py(e,n)||t.get(e,n,r),has:(e,n)=>!!py(e,n)||t.has(e,n)}));/**
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
 */class Cx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ix(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ix(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",my="0.9.12";/**
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
 */const Zr=new Sa("@firebase/app"),Tx="@firebase/app-compat",Sx="@firebase/analytics-compat",kx="@firebase/analytics",xx="@firebase/app-check-compat",Nx="@firebase/app-check",Rx="@firebase/auth",Ax="@firebase/auth-compat",Px="@firebase/database",Dx="@firebase/database-compat",bx="@firebase/functions",Ox="@firebase/functions-compat",Mx="@firebase/installations",Lx="@firebase/installations-compat",Fx="@firebase/messaging",$x="@firebase/messaging-compat",Ux="@firebase/performance",jx="@firebase/performance-compat",Vx="@firebase/remote-config",Bx="@firebase/remote-config-compat",zx="@firebase/storage",Wx="@firebase/storage-compat",Hx="@firebase/firestore",Kx="@firebase/firestore-compat",Gx="firebase",qx="9.22.2";/**
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
 */const Ld="[DEFAULT]",Qx={[Md]:"fire-core",[Tx]:"fire-core-compat",[kx]:"fire-analytics",[Sx]:"fire-analytics-compat",[Nx]:"fire-app-check",[xx]:"fire-app-check-compat",[Rx]:"fire-auth",[Ax]:"fire-auth-compat",[Px]:"fire-rtdb",[Dx]:"fire-rtdb-compat",[bx]:"fire-fn",[Ox]:"fire-fn-compat",[Mx]:"fire-iid",[Lx]:"fire-iid-compat",[Fx]:"fire-fcm",[$x]:"fire-fcm-compat",[Ux]:"fire-perf",[jx]:"fire-perf-compat",[Vx]:"fire-rc",[Bx]:"fire-rc-compat",[zx]:"fire-gcs",[Wx]:"fire-gcs-compat",[Hx]:"fire-fst",[Kx]:"fire-fst-compat","fire-js":"fire-js",[Gx]:"fire-js-all"};/**
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
 */const Do=new Map,Fd=new Map;function Yx(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(Fd.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;Fd.set(e,t);for(const n of Do.values())Yx(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xx={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new gi("app","Firebase",Xx);/**
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
 */class Jx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fn=qx;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=tw()),!n)throw nr.create("no-options");const s=Do.get(i);if(s){if(au(n,s.options)&&au(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new ox(i);for(const l of Fd.values())o.addComponent(l);const a=new Jx(n,r,o);return Do.set(i,a),a}function cw(t=Ld){const e=Do.get(t);if(!e&&t===Ld&&tw())return Up();if(!e)throw nr.create("no-app",{appName:t});return e}function Zx(){return Array.from(Do.values())}function Ie(t,e,n){var r;let i=(r=Qx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}Lt(new St(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const eN="firebase-heartbeat-database",tN=1,bo="firebase-heartbeat-store";let Rh=null;function hw(){return Rh||(Rh=_x(eN,tN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bo)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Rh}async function nN(t){try{return await(await hw()).transaction(bo).objectStore(bo).get(dw(t))}catch(e){if(e instanceof jt)Zr.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function gy(t,e){try{const r=(await hw()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,dw(t)),await r.done}catch(n){if(n instanceof jt)Zr.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function dw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rN=1024,iN=30*24*60*60*1e3;class sN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=iN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yy(),{heartbeatsToSend:n,unsentEntries:r}=oN(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yy(){return new Date().toISOString().substring(0,10)}function oN(t,e=rN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?Vk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vy(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lN(t){Lt(new St("platform-logger",e=>new Cx(e),"PRIVATE")),Lt(new St("heartbeat",e=>new sN(e),"PRIVATE")),Ie(Md,my,t),Ie(Md,my,"esm2017"),Ie("fire-js","")}lN("");function jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uN=fw,pw=new gi("auth","Firebase",fw());/**
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
 */const lu=new Sa("@firebase/auth");function cN(t,...e){lu.logLevel<=Q.WARN&&lu.warn(`Auth (${Fn}): ${t}`,...e)}function jl(t,...e){lu.logLevel<=Q.ERROR&&lu.error(`Auth (${Fn}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw Vp(t,...e)}function un(t,...e){return Vp(t,...e)}function mw(t,e,n){const r=Object.assign(Object.assign({},uN()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function hN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(t,"argument-error"),mw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pw.create(t,...e)}function F(t,e,...n){if(!t)throw Vp(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function An(t,e){t||wn(e)}/**
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
 */function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dN(){return _y()==="http:"||_y()==="https:"}function _y(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dN()||Uk()||"connection"in navigator)?navigator.onLine:!0}function pN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Fp()||rw()}get(){return fN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bp(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gN=new xa(3e4,6e4);function Na(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,r,i={}){return yw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gw.fetch()(vw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function yw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mN),e);try{const i=new yN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ll(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mw(t,c,u);Ft(t,c)}}catch(i){if(i instanceof jt)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function wc(t,e,n,r,i={}){const s=await As(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bp(t.config,i):`${t.config.apiScheme}://${i}`}class yN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),gN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vN(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function _N(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wN(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=zp(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(Ah(i.auth_time)),issuedAtTime:ho(Ah(i.iat)),expirationTime:ho(Ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=su(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EN(t){const e=zp(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&CN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _w{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oo(t,_N(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kN(s.providerUserInfo):[],a=SN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _w(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function TN(t){const e=Ke(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kN(t){return t.map(e=>{var{providerId:n}=e,r=jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xN(t,e){const n=await yw(t,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mo;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Vn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _w(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wN(this,e)}reload(){return TN(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oo(this,vN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:x,providerData:R,stsTokenManager:P}=n;F(y&&P,e,"internal-error");const b=Mo.fromJSON(this.name,P);F(typeof y=="string",e,"internal-error"),Vn(h,e.name),Vn(d,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof x=="boolean",e,"internal-error"),Vn(p,e.name),Vn(g,e.name),Vn(v,e.name),Vn(E,e.name),Vn(m,e.name),Vn(f,e.name);const ee=new Kr({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:x,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:b,createdAt:m,lastLoginAt:f});return R&&Array.isArray(R)&&(ee.providerData=R.map(z=>Object.assign({},z))),E&&(ee._redirectEventId=E),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}}/**
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
 */const wy=new Map;function En(t){An(t instanceof Function,"Expected a class definition");let e=wy.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wy.set(t,e),e)}/**
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
 */class ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ww.type="NONE";const Ey=ww;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(En(Ey),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||En(Ey);const o=Vl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ki(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ki(s,e,r))}}/**
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
 */function Cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ew(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sw(e))return"Blackberry";if(kw(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||Cw(e))&&!e.includes("edge/"))return"Chrome";if(Tw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ew(t=st()){return/firefox\//i.test(t)}function Wp(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cw(t=st()){return/crios\//i.test(t)}function Iw(t=st()){return/iemobile/i.test(t)}function Tw(t=st()){return/android/i.test(t)}function Sw(t=st()){return/blackberry/i.test(t)}function kw(t=st()){return/webos/i.test(t)}function Ec(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NN(t=st()){var e;return Ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RN(){return jk()&&document.documentMode===10}function xw(t=st()){return Ec(t)||Tw(t)||kw(t)||Sw(t)||/windows phone/i.test(t)||Iw(t)}function AN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Nw(t,e=[]){let n;switch(t){case"Browser":n=Cy(st());break;case"Worker":n=`${Cy(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fn}/${r}`}async function Rw(t,e){return As(t,"GET","/v2/recaptchaConfig",Na(t,e))}function Iy(t){return t!==void 0&&t.enterprise!==void 0}class Aw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function PN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PN().appendChild(r)})}function DN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bN="https://www.google.com/recaptcha/enterprise.js?render=",ON="recaptcha-enterprise",MN="NO_RECAPTCHA";class Dw{constructor(e){this.type=ON,this.auth=Ps(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Rw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Aw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Iy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(MN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Iy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pw(bN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ty(t,e,n,r=!1){const i=new Dw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class LN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class FN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sy(this),this.idTokenSubscription=new Sy(this),this.beforeStateQueue=new LN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}async initializeRecaptchaConfig(){const e=await Rw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Aw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Dw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ps(t){return Ke(t)}class Sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=qk(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $N(t,e){const n=ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(au(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function UN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jN(t,e,n){const r=Ps(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bw(e),{host:o,port:a}=VN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BN()}function bw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VN(t){const e=bw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ky(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ky(o)}}}function ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function zN(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ph(t,e){return wc(t,"POST","/v1/accounts:signInWithPassword",Na(t,e))}/**
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
 */async function WN(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",Na(t,e))}async function HN(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",Na(t,e))}/**
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
 */class Lo extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ty(e,r,"signInWithPassword");return Ph(e,i)}else return Ph(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ty(e,r,"signInWithPassword");return Ph(e,s)}else return Promise.reject(i)});case"emailLink":return WN(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gi(t,e){return wc(t,"POST","/v1/accounts:signInWithIdp",Na(t,e))}/**
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
 */const KN="http://localhost";class ei extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:KN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
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
 */function GN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qN(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class Kp{constructor(e){var n,r,i,s,o,a;const l=ro(io(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=GN((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qN(e);try{return new Kp(n)}catch{return null}}}/**
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
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kp.parseLink(n);return F(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ra extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Ra{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class Kn extends Ra{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Gn extends Ra{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=xy(r);return new ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xy(r);return new ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cu extends jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cu(e,n,r,i)}}function Ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,s,e,r):s})}async function QN(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function YN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Oo(t,Ow(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=zp(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function Mw(t,e,n=!1){const r="signIn",i=await Ow(t,r,e),s=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XN(t,e){return Mw(Ps(t),e)}function JN(t,e,n){return XN(Ke(t),Ds.credential(e,n))}function ZN(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function eR(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function Lw(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function tR(t){return Ke(t).signOut()}const hu="__sak";/**
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
 */class Fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function nR(){const t=st();return Wp(t)||Ec(t)}const rR=1e3,iR=10;class $w extends Fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nR()&&AN(),this.fallbackToPolling=xw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$w.type="LOCAL";const sR=$w;/**
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
 */class Uw extends Fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uw.type="SESSION";const jw=Uw;/**
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
 */function oR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await oR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
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
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function lR(t){cn().location.href=t}/**
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
 */function Vw(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hR(){return Vw()?self:null}/**
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
 */const Bw="firebaseLocalStorageDb",dR=1,du="firebaseLocalStorage",zw="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ic(t,e){return t.transaction([du],e?"readwrite":"readonly").objectStore(du)}function fR(){const t=indexedDB.deleteDatabase(Bw);return new Aa(t).toPromise()}function Ud(){const t=indexedDB.open(Bw,dR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(du,{keyPath:zw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(du)?e(r):(r.close(),await fR(),e(await Ud()))})})}async function Ny(t,e,n){const r=Ic(t,!0).put({[zw]:e,value:n});return new Aa(r).toPromise()}async function pR(t,e){const n=Ic(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Ry(t,e){const n=Ic(t,!0).delete(e);return new Aa(n).toPromise()}const mR=800,gR=3;class Ww{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(hR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Ny(e,hu,"1"),await Ry(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ic(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ww.type="LOCAL";const yR=Ww;new xa(3e4,6e4);/**
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
 */function Hw(t,e){return e?En(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vR(t){return Mw(t.auth,new Qp(t),t.bypassAuthState)}function _R(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),YN(n,new Qp(t),t.bypassAuthState)}async function wR(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),QN(n,new Qp(t),t.bypassAuthState)}/**
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
 */class Kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vR;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:Ft(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ER=new xa(2e3,1e4);async function CR(t,e,n){const r=Ps(t);hN(t,e,Gp);const i=Hw(r,n);return new Fr(r,"signInViaPopup",e,i).executeNotNull()}class Fr extends Kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}Fr.currentPopupAction=null;/**
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
 */const IR="pendingRedirect",Bl=new Map;class TR extends Kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await SR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(t,e){const n=NR(e),r=xR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kR(t,e){Bl.set(t._key(),e)}function xR(t){return En(t._redirectPersistence)}function NR(t){return Vl(IR,t.config.apiKey,t.name)}async function RR(t,e,n=!1){const r=Ps(t),i=Hw(r,e),o=await new TR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AR=10*60*1e3;class PR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gw(t);default:return!1}}/**
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
 */async function bR(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const OR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function LR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bR(t);for(const n of e)try{if(FR(n))return}catch{}Ft(t,"unauthorized-domain")}function FR(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MR.test(n))return!1;if(OR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $R=new xa(3e4,6e4);function Py(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var r,i,s;function o(){Py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Py(),n(un(t,"network-request-failed"))},timeout:$R.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const a=DN("iframefcb");return cn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Pw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zl=null,e})}let zl=null;function jR(t){return zl=zl||UR(t),zl}/**
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
 */const VR=new xa(5e3,15e3),BR="__/auth/iframe",zR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KR(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bp(e,zR):`https://${t.config.authDomain}/${BR}`,r={apiKey:e.apiKey,appName:t.name,v:Fn},i=HR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rs(r).slice(1)}`}async function GR(t){const e=await jR(t),n=cn().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:KR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=cn().setTimeout(()=>{s(o)},VR.get());function l(){cn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QR=500,YR=600,XR="_blank",JR="http://localhost";class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(t,e,n,r=QR,i=YR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=st().toLowerCase();n&&(a=Cw(u)?XR:n),Ew(u)&&(e=e||JR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(NN(u)&&a!=="_self")return eA(e||"",a),new Dy(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Dy(h)}function eA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tA="__/auth/handler",nA="emulator/auth/handler",rA=encodeURIComponent("fac");async function by(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fn,eventId:i};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ra){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${rA}=${encodeURIComponent(l)}`:"";return`${iA(t)}?${Rs(a).slice(1)}${u}`}function iA({config:t}){return t.emulator?Bp(t,nA):`https://${t.authDomain}/${tA}`}/**
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
 */const Dh="webStorageSupport";class sA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jw,this._completeRedirectFn=RR,this._overrideRedirectResult=kR}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await by(e,n,r,$d(),i);return ZR(e,o,qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await by(e,n,r,$d(),i);return lR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GR(e),r=new PR(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dh,{type:Dh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dh];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xw()||Wp()||Ec()}}const oA=sA;var Oy="@firebase/auth",My="0.23.2";/**
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
 */class aA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uA(t){Lt(new St("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nw(t)},u=new FN(r,i,s,l);return UN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new St("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(r=>new aA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Oy,My,lA(t)),Ie(Oy,My,"esm2017")}/**
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
 */const cA=5*60,hA=nw("authIdTokenMaxAge")||cA;let Ly=null;const dA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hA)return;const i=n==null?void 0:n.token;Ly!==i&&(Ly=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tc(t=cw()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$N(t,{popupRedirectResolver:oA,persistence:[yR,sR,jw]}),r=nw("authTokenSyncURL");if(r){const s=dA(r);eR(n,s,()=>s(n.currentUser)),ZN(n,o=>s(o))}const i=ew("auth");return i&&jN(n,`http://${i}`),n}uA("Browser");/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Fy="popstate";function fA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=yi(i.location.hash.substr(1));return jd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:fu(s))}function r(i,s){Sc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return mA(e,n,r,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pA(){return Math.random().toString(36).substr(2,8)}function $y(t,e){return{usr:t.state,key:t.key,idx:e}}function jd(t,e,n,r){return n===void 0&&(n=null),Fo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yi(e):e,{state:n,key:e&&e.key||r||pA()})}function fu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Xn.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:m})}function d(E,m){a=Xn.Push;let f=jd(v.location,E,m);n&&n(f,E),u=c()+1;let y=$y(f,u),w=v.createHref(f);try{o.pushState(y,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function p(E,m){a=Xn.Replace;let f=jd(v.location,E,m);n&&n(f,E),u=c();let y=$y(f,u),w=v.createHref(f);o.replaceState(y,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function g(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:fu(E);return Te(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fy,h),l=E,()=>{i.removeEventListener(Fy,h),l=null}},createHref(E){return e(i,E)},createURL:g,encodeLocation(E){let m=g(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(E){return o.go(E)}};return v}var Uy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Uy||(Uy={}));function gA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?yi(e):e,i=Yp(r.pathname||"/",n);if(i==null)return null;let s=qw(t);yA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=kA(s[a],RA(i));return o}function qw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:TA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Qw(s.path))i(s,o,l)}),e}function Qw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vA=/^:\w+$/,_A=3,wA=2,EA=1,CA=10,IA=-2,jy=t=>t==="*";function TA(t,e){let n=t.split("/"),r=n.length;return n.some(jy)&&(r+=IA),e&&(r+=wA),n.filter(i=>!jy(i)).reduce((i,s)=>i+(vA.test(s)?_A:s===""?EA:CA),r)}function SA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=xA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:rr([i,c.pathname]),pathnameBase:bA(rr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=rr([i,c.pathnameBase]))}return s}function xA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=AA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function NA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RA(t){try{return decodeURI(t)}catch(e){return Sc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function AA(t,e){try{return decodeURIComponent(t)}catch(n){return Sc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Yp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function PA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yi(t):t;return{pathname:n?n.startsWith("/")?n:DA(n,e):e,search:OA(r),hash:MA(i)}}function DA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yi(t):(i=Fo({},t),Te(!i.pathname||!i.pathname.includes("?"),bh("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),bh("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),bh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=PA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),bA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jw=["post","put","patch","delete"];new Set(Jw);const FA=["get",...Jw];new Set(FA);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pu.apply(this,arguments)}const $A="startTransition";var Vy=wk[$A];const Xp=I.createContext(null),Zw=I.createContext(null),vi=I.createContext(null),kc=I.createContext(null),_i=I.createContext({outlet:null,matches:[],isDataRoute:!1}),eE=I.createContext(null);function UA(t,e){let{relative:n}=e===void 0?{}:e;Pa()||Te(!1);let{basename:r,navigator:i}=I.useContext(vi),{hash:s,pathname:o,search:a}=Zp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Pa(){return I.useContext(kc)!=null}function Da(){return Pa()||Te(!1),I.useContext(kc).location}function tE(t){I.useContext(vi).static||I.useLayoutEffect(t)}function Jp(){let{isDataRoute:t}=I.useContext(_i);return t?JA():jA()}function jA(){Pa()||Te(!1);let t=I.useContext(Xp),{basename:e,navigator:n}=I.useContext(vi),{matches:r}=I.useContext(_i),{pathname:i}=Da(),s=JSON.stringify(Yw(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return tE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Xw(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Zp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(_i),{pathname:i}=Da(),s=JSON.stringify(Yw(r).map(o=>o.pathnameBase));return I.useMemo(()=>Xw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function VA(t,e){return BA(t,e)}function BA(t,e,n){Pa()||Te(!1);let{navigator:r}=I.useContext(vi),{matches:i}=I.useContext(_i),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Da(),u;if(e){var c;let v=typeof e=="string"?yi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Te(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=gA(t,{pathname:d}),g=GA(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:rr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:rr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?I.createElement(kc.Provider,{value:{location:pu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xn.Pop}},g):g}function zA(){let t=XA(),e=LA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const WA=I.createElement(zA,null);class HA extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(_i.Provider,{value:this.props.routeContext},I.createElement(eE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KA(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Xp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(_i.Provider,{value:e},r)}function GA(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||WA);let d=e.concat(s.slice(0,u+1)),p=()=>{let g;return c?g=h:l.route.Component?g=I.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,I.createElement(KA,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(HA,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Vd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Vd||(Vd={}));var $o;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})($o||($o={}));function qA(t){let e=I.useContext(Xp);return e||Te(!1),e}function QA(t){let e=I.useContext(Zw);return e||Te(!1),e}function YA(t){let e=I.useContext(_i);return e||Te(!1),e}function nE(t){let e=YA(),n=e.matches[e.matches.length-1];return n.route.id||Te(!1),n.route.id}function XA(){var t;let e=I.useContext(eE),n=QA($o.UseRouteError),r=nE($o.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function JA(){let{router:t}=qA(Vd.UseNavigateStable),e=nE($o.UseNavigateStable),n=I.useRef(!1);return tE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pu({fromRouteId:e},s)))},[t,e])}function Ri(t){Te(!1)}function ZA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1}=t;Pa()&&Te(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=yi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=I.useMemo(()=>{let v=Yp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return g==null?null:I.createElement(vi.Provider,{value:l},I.createElement(kc.Provider,{children:n,value:g}))}function eP(t){let{children:e,location:n}=t;return VA(Bd(e),n)}var By;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(By||(By={}));new Promise(()=>{});function Bd(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Bd(r.props.children,s));return}r.type!==Ri&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mu.apply(this,arguments)}function rE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nP(t,e){return t.button===0&&(!e||e==="_self")&&!tP(t)}const rP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],iP=["aria-current","caseSensitive","className","end","style","to","children"];function sP(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=fA({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&Vy?Vy(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(ZA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const oP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zd=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=rE(e,rP),{basename:d}=I.useContext(vi),p,g=!1;if(typeof u=="string"&&aP.test(u)&&(p=u,oP))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=Yp(y.pathname,d);y.origin===f.origin&&w!=null?u=w+y.search+y.hash:g=!0}catch{}let v=UA(u,{relative:i}),E=lP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||E(f)}return I.createElement("a",mu({},h,{href:p||v,onClick:g||s?r:m,ref:n,target:l}))}),Se=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=rE(e,iP),h=Zp(l,{relative:c.relative}),d=Da(),p=I.useContext(Zw),{navigator:g}=I.useContext(vi),v=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,E=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(E=E.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let f=E===v||!o&&E.startsWith(v)&&E.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=f?r:void 0,x;typeof s=="function"?x=s({isActive:f,isPending:y}):x=[s,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:f,isPending:y}):a;return I.createElement(zd,mu({},c,{"aria-current":w,className:x,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:f,isPending:y}):u)});var zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(zy||(zy={}));var Wy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wy||(Wy={}));function lP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Jp(),l=Da(),u=Zp(t,{relative:o});return I.useCallback(c=>{if(nP(c,n)){c.preventDefault();let h=r!==void 0?r:fu(l)===fu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function uP(){const t=Tc(),e=Jp(),n=()=>{tR(t).then(()=>{e("/"),console.log("Signed out successfully"),window.location.reload()}).catch(r=>{console.log("error")})};return _.jsx("div",{className:"flex justify-start w-full max-w-4xl",children:_.jsxs("button",{onClick:n,className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["Logout ",_.jsx("span",{className:"text-xl pl-1",children:"Logout"})]})})}function cP(t){const[e,n]=I.useState(!1),[r,i]=I.useState(!1),s=Tc();return I.useEffect(()=>{Lw(s,o=>{o.email?i(!0):i(!1)})}),_.jsxs("div",{className:"px-2",onMouseEnter:()=>n(o=>!o),onMouseLeave:()=>n(!1),children:[_.jsxs("aside",{children:[_.jsxs("ul",{className:"flex flex-col justify-between text-gray-100 mb-4",children:[_.jsx("img",{src:"/logoCAMTLed.svg",alt:"logo CAMT Lead",className:"py-4"}),_.jsx("span",{className:"flex justify-center items-center text-3xl text-[#e7d1ff] material-symbols-outlined",children:"search"}),_.jsx("h5",{className:"uppercase text-center w-full font-semibold py-3 text-[#e7d1ff] ",children:"MENÚ"}),_.jsx(Se,{to:"/",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"home"}),_.jsx(Se,{to:"/about",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"explore"}),_.jsx(Se,{to:"/discover",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"signpost"}),_.jsx(Se,{to:"/news",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"news"}),_.jsx(Se,{to:"/academic",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"history_edu"}),_.jsx(Se,{to:"/loyalty",className:"flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"loyalty"})]}),_.jsx("ul",{className:"flex flex-col justify-between text-gray-100 mb-8 ",children:t.children}),_.jsx("section",{className:e?"showMenu":"hideMenuNav",children:_.jsxs("div",{className:"h-full",children:[_.jsx("header",{className:"flex items-center justify-between px-2 bg-transparent",children:_.jsxs("section",{className:"flex justify-between items-center rounded-full w-[60px] h-[60px] bg-transparent",children:[_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"})]})}),_.jsx("div",{className:"mx-2",children:_.jsxs(Se,{to:"/",className:"flex items-center hover:animate-pulse",children:[_.jsx("img",{src:"/logoCAMTLed.svg",alt:"logo CAMT Lead",className:"py-4 w-[60px]"}),_.jsx("h1",{className:"text-lg text-[#e7d1ff]",children:"CAMTLead"})]})}),_.jsxs("div",{className:"mx-3",children:[_.jsxs("div",{className:" flex  rounded-lg bg-[#820eff25] items-center p-2  hover:animate-pulse",children:[_.jsx("span",{className:"material-symbols-outlined text-[#e7d1ff]",children:"search"}),_.jsx("input",{placeholder:"Search... ↩",className:"bg-transparent w-full focus:outline-none border-none text-[#e7d1ff]",type:"search"})]}),_.jsx("h5",{className:"uppercase w-full font-semibold py-3 text-[#e7d1ff] ",children:"MENÚ"})]}),_.jsxs("ul",{className:"flex flex-col justify-between text-gray-100 mb-4 mx-5",children:[_.jsxs(Se,{to:"/",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["home ",_.jsx("span",{className:"text-xl pl-1",children:"Home"})]}),_.jsxs(Se,{to:"/about",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["explore ",_.jsx("span",{className:"text-xl pl-1",children:"About"})]}),_.jsxs(Se,{to:"/discover",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["signpost ",_.jsx("span",{className:"text-xl pl-1",children:"Discover"})]}),_.jsxs(Se,{to:"/news",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["news ",_.jsx("span",{className:"text-xl pl-1",children:"News"})]}),_.jsxs(Se,{to:"/academic",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["history_edu ",_.jsx("span",{className:"text-xl pl-1",children:"Articles"})]}),_.jsxs(Se,{to:"/loyalty",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["loyalty ",_.jsx("span",{className:"text-xl pl-1",children:"Promote "})]})]}),_.jsx("ul",{className:"flex flex-col justify-between text-gray-100 mb-4 mx-5 border-t-2 border-[#e7d1ff]",children:r?_.jsxs(_.Fragment,{children:[_.jsxs(Se,{to:"/account",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["account_circle ",_.jsx("span",{className:"text-xl pl-1",children:"Account"})]}),_.jsx(uP,{})]}):_.jsxs(Se,{to:"/login",className:"flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:["Login",_.jsx("span",{id:"log",className:"my-3 text-xl pl-1 text-[#e7d1ff] z-20",children:"Login"})]})})]})})]}),_.jsx("style",{children:`
                    nav {
                        width: 99.4px;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenu {
                        position: fixed;
                        width: 180px;
                        height: 90%;
                        top: 40px;
                        left: 2.5%;
                        z-index: 15;
                        border-radius: 15px;
						background-color: #1b0d2a;
                    }
                    .btn-stars {
                        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                        background-position: center;
                        background-size: auto;
                    }
                    .showMenu article a:hover {
                        -webkit-text-stroke: 2px #fefefe;
                        color: transparent;
                    }

                    .button-plus:hover {
                        animation-name: resplandorAnimation, rotation;
                        animation-duration:  1s, 0.5s;
                        animation-iteration-count: infinite, 1;
                    }
                    @keyframes rotation {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                `})]})}function Hy(t){const[e,n]=I.useState(!1);return _.jsxs("div",{className:"pt-[40px] w-[full]",children:[_.jsxs("nav",{className:"ml-[2.5%] px-2 flex justify-start",children:[_.jsxs("section",{className:"fixed bg-transparent flex justify-between items-center rounded-full w-[60px] h-[60px] button-plus",onClick:()=>n(r=>!r),children:[_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#8844d4]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"})]}),_.jsx("section",{className:e?"showMenuNav":"hideMenuNav",children:_.jsxs("div",{className:"h-full",children:[_.jsx("header",{className:"flex items-center justify-between px-2 bg-transparent",onClick:()=>n(!1),children:_.jsxs("section",{className:"flex justify-between items-center rounded-full w-[60px] h-[60px] bg-transparent",onClick:()=>n(r=>!r),children:[_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"}),_.jsx("span",{className:"h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"})]})}),_.jsx(cP,{children:t.children})]})})]}),_.jsx("style",{children:`
                    nav {
                        width: 99.4px;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        position: fixed;
                        width: 75px;
                        height: 90%;
                        top: 40px;
                        left: 2.5%;
                        background: #1b0d2abf;
                        z-index: 15;
                        border-radius: 15px;
                    }
                    .btn-stars {
                        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                        background-position: center;
                        background-size: auto;
                    }
                    .showMenuNav article a:hover {
                        -webkit-text-stroke: 2px #fefefe;
                        color: transparent;
                    }

                    .button-plus:hover {
                        animation-name: resplandorAnimation, rotation;
                        animation-duration:  1s, 0.5s;
                        animation-iteration-count: infinite, 1;
                    }
                    @keyframes rotation {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                `})]})}function hP(){const[t,e]=I.useState(!1),n=Tc();return I.useEffect(()=>{Lw(n,r=>{r.email?e(!0):e(!1)})}),_.jsx(_.Fragment,{children:t?_.jsx(Hy,{children:_.jsxs("div",{className:"border-t-2 border-[#e7d1ff]",children:[_.jsx(Se,{to:"/account",className:"flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:"account_circle"}),_.jsx(Se,{to:"/",className:"flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate",children:"Logout"})]})}):_.jsx(Hy,{children:_.jsx("div",{className:"border-t-2 border-[#e7d1ff]",children:_.jsx(Se,{to:"/login",className:"flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse",children:"Login"})})})})}function ba(t){return _.jsxs("div",{className:"bg-[#820effec] h-[100vh]",children:[_.jsx(hP,{}),t.children]})}function dP(){return _.jsx(ba,{children:_.jsxs("section",{className:"flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md",children:[_.jsxs("h2",{className:"mb-8 font-extrabold text-9xl text-gray-300 animate-pulse",children:[_.jsx("span",{className:"sr-only",children:"Error"}),"404"]}),_.jsx("p",{className:"text-3xl text-gray-300 animate-pulse",children:"Looks like this page are currently offline for you"}),_.jsx("a",{rel:"noopener noreferrer",href:"/",className:"px-8 py-3 font-semibold rounded text-gray-400 border rounded-xl hover:text-gray-100 ",children:"Back to Homepage"})]})})}function fP(){const t=Tc(),e=Jp(),n=new Kt,[r,i]=I.useState(""),[s,o]=I.useState(""),l=window.location.toString(),u=d=>{d.preventDefault(),JN(t,r,s).then(p=>{const g=p.user;l.endsWith("login")?e("../"):e("./"),(g.email=="carlosarturomt@gmail.com"&&l.endsWith("login")||g.email=="amiranda@btcamericas.com"&&l.endsWith("login"))&&(e("/"),console.log("Welcome :)"))}).catch(p=>{const g=p.code,v=p.message;console.log(g,v)})},c=async d=>{d.preventDefault(),await CR(t,n).then(p=>{Kt.credentialFromResult(p).accessToken;const v=p.user;l.endsWith("login")?e("../"):e("./"),(v.email=="carlosarturomt@gmail.com"&&l.endsWith("login")||v.email=="amiranda@btcamericas.com"&&l.endsWith("login"))&&(e("/"),console.log("Welcome :)"))}).catch(p=>{p.code,p.message,p.customData.email,Kt.credentialFromError(p)})},h=()=>{const d=document.getElementById("password");d.type=="password"?(d.type="text",document.getElementById("eye").innerHTML="visibility_off"):(d.type="password",document.getElementById("eye").innerHTML="visibility")};return _.jsxs(ba,{children:[_.jsxs("section",{className:"flex w-full content-center items-center justify-center py-20 md:py-5 h-screen",children:[_.jsx("aside",{className:"px-8 py-4 flex content-center items-center justify-center rounded-3xl bg-[#ffffff29] md:px-28 md:py-12",children:_.jsxs("div",{className:"max-w-72",children:[_.jsx("h1",{className:"text-xl font-semibold text-gray-100",children:"Welcome back"}),_.jsx("small",{className:"text-gray-200",children:"Welcome back! Please enter your details"}),_.jsxs("form",{className:"mt-4 text-gray-200",children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Email"}),_.jsx("input",{className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",id:"email",name:"email",type:"email",placeholder:"Email Address",value:r,onChange:d=>i(d.target.value)})]}),_.jsxs("div",{className:"mb-3",children:[_.jsx("label",{className:"mb-2 block text-xs font-semibold leading-[0]",children:"Password"}),_.jsxs("div",{className:"flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]",children:[_.jsx("input",{className:"w-full bg-transparent focus:bg-transparent focus:outline-none",id:"password",name:"password",type:"password",placeholder:"******",value:s,onChange:d=>o(d.target.value)}),_.jsx("a",{onClick:h,className:"cursor-pointer flex items-center",children:_.jsx("span",{className:"material-symbols-outlined",id:"eye",children:"visibility"})})]})]}),_.jsxs("div",{className:"mb-3 flex flex-wrap content-center",children:[_.jsx("input",{id:"remember",type:"checkbox",className:"mr-1 checked:bg-purple-700"}),_.jsx("label",{htmlFor:"remember",className:"mr-auto text-xs font-semibold",children:"Remember for 30 days"}),_.jsx("a",{href:"#",className:"text-xs font-semibold text-gray-400 hover:text-gray-200 ml-1",children:"Forgot password?"})]}),_.jsxs("div",{className:"mb-3",children:[_.jsx("button",{className:"mb-1.5 block w-full text-center text-white bg-[#04135aa3] hover:bg-[#04125ae0] px-2 py-1.5 rounded-md",type:"submit",onClick:u,children:"Sign in"}),_.jsxs("button",{className:"bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]",type:"submit",onClick:c,children:[_.jsx("img",{className:"w-6 mr-2",src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}),"Sign in with Google"]})]})]}),_.jsxs("div",{className:"text-center",children:[_.jsx("span",{className:"text-xs text-gray-400 font-semibold",children:"Don't have account?"}),_.jsx(Se,{to:"/signup",className:"text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100",children:"Sign up"})]})]})}),_.jsx("div",{className:"bg-solid"})]}),_.jsx("style",{children:`
				.bg-solid {
						z-index: -2;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						background-color: #000c1a;
					}

					.bx-shadow {
						box-shadow: 0 0 5px #fff;
					}
					.fish {
						z-index: 2;
						position: absolute;
						animation: slide-left 50s infinite;
					}
					@keyframes slide-left {
						from {
							width: 5%;
							z-index: -2;
							left: 0;
							bottom: 0;
							opacity : 0.7;
							filter: blur(3px)
						}
						50% {
							z-index: -1;
							width: 20%;
							bottom: 10%;
							left: 50%;
							opacity: 0.8;
							filter: blur(2px)
						}
						to {
							width: 30%;
							z-index: 1;
							bottom: 80%;
							left: 80%;
							opacity: 0.9;
							filter: blur(1px)
						}
					}

					.fish1 {
						z-index: 2;
						position: absolute;
						transform: scaleX(-1);
						animation: fish 30s infinite;
					}
					@keyframes fish {
						from {
							width: 10%;
							z-index: -2;
							right: 0;
							top: 0;
							opacity : 0.6;
							filter: blur(3px)
						}
						20% {
							z-index: -1;
							width: 15%;
							top: 20%;
							right: 40%;
							opacity: 0.8;
							filter: blur(2px)
						}
						40% {
							z-index: 1;
							width: 15%;
							top: 10%;
							right: 50%;
							opacity: 1;
							filter: blur(1px);
							transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
						}
						60% {
							z-index: 1;
							width: 20%;
							top: 80%;
							right: 60%;
							opacity: 0.8;
							filter: blur(1px);
						}
						to {
							width: 10%;
							z-index: 1;
							top: 60%;
							right: 100%;
							opacity: 0.6;
							filter: blur(3px);
						}
					}
					.blur-img {
						width: 100%;
						filter: blur(5px);
						opacity: 0.9;
						height: 85vh;
						border: solid #000 5px;
					}
					.bg-gif {
						z-index: -2;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						opacity: 0.9;
						height: 100vh;
						filter: blur(10px);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/18/f0/37/18f037f6761bbc6ac0682035deab8778.gif')
					}
					.bg-fish {
						z-index: -3;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/e9/04/15/e904152f727d70e777066bd122c7f2dd.gif')
					}

				`})]})}function pP(){return _.jsx(ba,{children:_.jsxs("section",{className:"flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36",children:[_.jsx("h1",{className:"text-gray-100 text-4xl font-semibold w-full",children:"Welcome Charly"}),_.jsxs("article",{className:"flex items-start justify-center flex-wrap w-full",children:[_.jsxs("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[_.jsx("h2",{className:"text-gray-100 text-2xl font-semibold",children:"News"}),_.jsx(zd,{to:"news",children:_.jsx("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]}),_.jsxs("aside",{className:"w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]",children:[_.jsx("h2",{className:"text-gray-100 text-2xl font-semibold",children:"Articles"}),_.jsx(zd,{to:"articles",children:_.jsx("button",{className:"bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none",children:"See more..."})})]})]})]})})}function Ky({label:t,name:e,on:n,val:r}){return _.jsxs("div",{className:"my-4",children:[_.jsx("label",{htmlFor:"",className:"text-gray-300 text-sm",children:t}),_.jsx("input",{required:!0,value:r,type:"text",name:e,className:"block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]",onChange:n})]})}var mP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,em=em||{},$=mP||self;function xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gP(t){return Object.prototype.hasOwnProperty.call(t,Oh)&&t[Oh]||(t[Oh]=++yP)}var Oh="closure_uid_"+(1e9*Math.random()>>>0),yP=0;function vP(t,e,n){return t.call.apply(t.bind,arguments)}function _P(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=vP:rt=_P,rt.apply(null,arguments)}function ul(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Cr(){this.s=this.s,this.o=this.o}var wP=0;Cr.prototype.s=!1;Cr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wP!=0)&&gP(this)};Cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var EP=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function Nc(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return Nc().indexOf(t)!=-1}function nm(t){return nm[" "](t),t}nm[" "]=function(){};function CP(t,e){var n=pD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var IP=sn("Opera"),us=sn("Trident")||sn("MSIE"),sE=sn("Edge"),Wd=sE||us,oE=sn("Gecko")&&!(Nc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),TP=Nc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function aE(){var t=$.document;return t?t.documentMode:void 0}var Hd;e:{var Mh="",Lh=function(){var t=Nc();if(oE)return/rv:([^\);]+)(\)|;)/.exec(t);if(sE)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TP)return/WebKit\/(\S+)/.exec(t);if(IP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lh&&(Mh=Lh?Lh[1]:""),us){var Fh=aE();if(Fh!=null&&Fh>parseFloat(Mh)){Hd=String(Fh);break e}}Hd=Mh}var Kd;if($.document&&us){var qy=aE();Kd=qy||parseInt(Hd,10)||void 0}else Kd=void 0;var SP=Kd;function jo(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oE){e:{try{nm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jo.$.h.call(this)}}je(jo,it);var kP={2:"touch",3:"pen",4:"mouse"};jo.prototype.h=function(){jo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ma="closure_listenable_"+(1e6*Math.random()|0),xP=0;function NP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++xP,this.fa=this.ia=!1}function Rc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function lE(t){const e={};for(const n in t)e[n]=t[n];return e}const Qy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Qy.length;s++)n=Qy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ac(t){this.src=t,this.g={},this.h=0}Ac.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new NP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Gd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=iE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var im="closure_lm_"+(1e6*Math.random()|0),$h={};function cE(t,e,n,r,i){if(r&&r.once)return dE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cE(t,e[s],n,r,i);return null}return n=am(n),t&&t[Ma]?t.O(e,n,Oa(r)?!!r.capture:!!r,i):hE(t,e,n,!1,r,i)}function hE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Oa(i)?!!i.capture:!!i,a=om(t);if(a||(t[im]=a=new Ac(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=AP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AP(){function t(n){return e.call(t.src,t.listener,n)}const e=PP;return t}function dE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dE(t,e[s],n,r,i);return null}return n=am(n),t&&t[Ma]?t.P(e,n,Oa(r)?!!r.capture:!!r,i):hE(t,e,n,!0,r,i)}function fE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)fE(t,e[s],n,r,i);else r=Oa(r)?!!r.capture:!!r,n=am(n),t&&t[Ma]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qd(s,n,r,i),-1<n&&(Rc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=om(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qd(e,n,r,i)),(n=-1<t?e[t]:null)&&sm(n))}function sm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ma])Gd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=om(e))?(Gd(n,t),n.h==0&&(n.src=null,e[im]=null)):Rc(t)}}}function pE(t){return t in $h?$h[t]:$h[t]="on"+t}function PP(t,e){if(t.fa)t=!0;else{e=new jo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sm(t),t=n.call(r,e)}return t}function om(t){return t=t[im],t instanceof Ac?t:null}var Uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function am(t){return typeof t=="function"?t:(t[Uh]||(t[Uh]=function(e){return t.handleEvent(e)}),t[Uh])}function $e(){Cr.call(this),this.i=new Ac(this),this.S=this,this.J=null}je($e,Cr);$e.prototype[Ma]=!0;$e.prototype.removeEventListener=function(t,e,n,r){fE(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var i=e;e=new it(r,t),uE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=cl(o,r,!0,e)&&i}if(o=e.g=t,i=cl(o,r,!0,e)&&i,i=cl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=cl(o,r,!1,e)&&i}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rc(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function cl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Gd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var lm=$.JSON.stringify;let DP=class{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}};function bP(){var t=um;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}let OP=class{constructor(){this.h=this.g=null}add(e,n){const r=mE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}};var mE=new DP(()=>new MP,t=>t.reset());let MP=class{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function LP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function FP(t){$.setTimeout(()=>{throw t},0)}let Vo,Bo=!1,um=new OP,gE=()=>{const t=$.Promise.resolve(void 0);Vo=()=>{t.then($P)}};var $P=()=>{for(var t;t=bP();){try{t.h.call(t.g)}catch(n){FP(n)}var e=mE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bo=!1};function Pc(t,e){$e.call(this),this.h=t||1,this.g=e||$,this.j=rt(this.qb,this),this.l=Date.now()}je(Pc,$e);N=Pc.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(cm(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Pc.$.N.call(this),cm(this),delete this.g};function hm(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function yE(t){t.g=hm(()=>{t.g=null,t.i&&(t.i=!1,yE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}let UP=class extends Cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yE(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function zo(t){Cr.call(this),this.h=t,this.g={}}je(zo,Cr);var Yy=[];function vE(t,e,n,r){Array.isArray(n)||(n&&(Yy[0]=n.toString()),n=Yy);for(var i=0;i<n.length;i++){var s=cE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _E(t){rm(t.g,function(e,n){this.g.hasOwnProperty(n)&&sm(e)},t),t.g={}}zo.prototype.N=function(){zo.$.N.call(this),_E(this)};zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dc(){this.g=!0}Dc.prototype.Ea=function(){this.g=!1};function jP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zP(t,n)+(r?" "+r:"")})}function BP(t,e){t.info(function(){return"TIMEOUT: "+e})}Dc.prototype.info=function(){};function zP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lm(n)}catch{return e}}var wi={},Xy=null;function bc(){return Xy=Xy||new $e}wi.Ta="serverreachability";function wE(t){it.call(this,wi.Ta,t)}je(wE,it);function Wo(t){const e=bc();We(e,new wE(e))}wi.STAT_EVENT="statevent";function EE(t,e){it.call(this,wi.STAT_EVENT,t),this.stat=e}je(EE,it);function lt(t){const e=bc();We(e,new EE(e,t))}wi.Ua="timingevent";function CE(t,e){it.call(this,wi.Ua,t),this.size=e}je(CE,it);function La(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Oc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},IE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dm(){}dm.prototype.h=null;function Jy(t){return t.h||(t.h=t.i())}function TE(){}var Fa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fm(){it.call(this,"d")}je(fm,it);function pm(){it.call(this,"c")}je(pm,it);var Qd;function Mc(){}je(Mc,dm);Mc.prototype.g=function(){return new XMLHttpRequest};Mc.prototype.i=function(){return{}};Qd=new Mc;function $a(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zo(this),this.P=WP,t=Wd?125:void 0,this.V=new Pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new SE}function SE(){this.i=null,this.g="",this.h=!1}var WP=45e3,Yd={},gu={};N=$a.prototype;N.setTimeout=function(t){this.P=t};function Xd(t,e,n){t.L=1,t.v=Fc(Pn(e)),t.s=n,t.S=!0,kE(t,null)}function kE(t,e){t.G=Date.now(),Ua(t),t.A=Pn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),OE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new SE,t.g=t1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new UP(rt(t.Pa,t,t.g),t.O)),vE(t.U,t.g,"readystatechange",t.nb),e=t.I?lE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wo(),jP(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Wd||this.g&&(this.h.h||this.g.ja()||nv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Wo(3):Wo(2)),Lc(this);var n=this.g.da();this.ca=n;t:if(xE(this)){var r=nv(this.g);t="";var i=r.length,s=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),fo(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,VP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var u=a;break t}}u=null}if(n=u)Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jd(this,n);else{this.i=!1,this.o=3,lt(12),$r(this),fo(this);break e}}this.S?(NE(this,c,o),Wd&&this.i&&c==3&&(vE(this.U,this.V,"tick",this.mb),this.V.start())):(Pi(this.j,this.m,o,null),Jd(this,o)),c==4&&$r(this),this.i&&!this.J&&(c==4?XE(this.l,this):(this.i=!1,Ua(this)))}else hD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),$r(this),fo(this)}}}catch{}finally{}};function xE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function NE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=HP(t,n),i==gu){e==4&&(t.o=4,lt(14),r=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yd){t.o=4,lt(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Pi(t.j,t.m,i,null),Jd(t,i);xE(t)&&i!=gu&&i!=Yd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wm(e),e.M=!0,lt(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),$r(t),fo(t))}N.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.C<e.length&&(Lc(this),NE(this,t,e),this.i&&t!=4&&Ua(this))}};function HP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gu:(n=Number(e.substring(n,r)),isNaN(n)?Yd:(r+=1,r+n>e.length?gu:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,$r(this)};function Ua(t){t.Y=Date.now()+t.P,RE(t,t.P)}function RE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=La(rt(t.lb,t),e)}function Lc(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(BP(this.j,this.A),this.L!=2&&(Wo(),lt(17)),$r(this),this.o=2,fo(this)):RE(this,this.Y-t)};function fo(t){t.l.H==0||t.J||XE(t.l,t)}function $r(t){Lc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,cm(t.V),_E(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Jd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Zd(n.i,t))){if(!t.K&&Zd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)_u(n),jc(n);else break e;_m(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=La(rt(n.ib,n),6e3));if(1>=FE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ur(n,11)}else if((t.K||n.g==t)&&_u(n),!Uo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mm(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=e1(r,r.J?r.pa:null,r.Y),o.K){$E(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Lc(a),Ua(a)),r.g=o}else QE(r);0<n.j.length&&Vc(n)}else u[0]!="stop"&&u[0]!="close"||Ur(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ur(n,7):vm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Wo(4)}catch{}}function KP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function AE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GP(t),r=KP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var PE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gr){this.h=t.h,yu(this,t.j),this.s=t.s,this.g=t.g,vu(this,t.m),this.l=t.l;var e=t.i,n=new Ho;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zy(this,n),this.o=t.o}else t&&(e=String(t).match(PE))?(this.h=!1,yu(this,e[1]||"",!0),this.s=so(e[2]||""),this.g=so(e[3]||"",!0),vu(this,e[4]),this.l=so(e[5]||"",!0),Zy(this,e[6]||"",!0),this.o=so(e[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}Gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oo(e,ev,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oo(e,ev,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oo(n,n.charAt(0)=="/"?XP:YP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oo(n,ZP)),t.join("")};function Pn(t){return new Gr(t)}function yu(t,e,n){t.j=n?so(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zy(t,e,n){e instanceof Ho?(t.i=e,eD(t.i,t.h)):(n||(e=oo(e,JP)),t.i=new Ho(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Fc(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function so(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ev=/[#\/\?@]/g,YP=/[#\?:]/g,XP=/[#\?]/g,JP=/[#\?@]/g,ZP=/#/g;function Ho(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&qP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ho.prototype;N.add=function(t,e){Ir(this),this.i=null,t=bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function DE(t,e){Ir(t),e=bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bE(t,e){return Ir(t),e=bs(t,e),t.g.has(e)}N.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){Ir(this);let e=[];if(typeof t=="string")bE(this,t)&&(e=e.concat(this.g.get(bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Ir(this),this.i=null,t=bs(this,t),bE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function OE(t,e,n){DE(t,e),0<n.length&&(t.i=null,t.g.set(bs(t,e),tm(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eD(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(DE(this,r),OE(this,i,n))},t)),t.j=e}var tD=class{constructor(e,n){this.g=e,this.map=n}};function ME(t){this.l=t||nD,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nD=10;function LE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function FE(t){return t.h?1:t.g?t.g.size:0}function Zd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mm(t,e){t.g?t.g.add(e):t.h=e}function $E(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ME.prototype.cancel=function(){if(this.i=UE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function UE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tm(t.i)}var rD=class{stringify(e){return $.JSON.stringify(e,void 0)}parse(e){return $.JSON.parse(e,void 0)}};function iD(){this.g=new rD}function sD(t,e,n){const r=n||"";try{AE(t,function(i,s){let o=i;Oa(i)&&(o=lm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oD(t,e){const n=new Dc;if($.Image){const r=new Image;r.onload=ul(hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ul(hl,n,r,"TestLoadImage: error",!1,e),r.onabort=ul(hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ul(hl,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ja(t){this.l=t.fc||null,this.j=t.ob||!1}je(ja,dm);ja.prototype.g=function(){return new $c(this.l,this.j)};ja.prototype.i=function(t){return function(){return t}}({});function $c(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je($c,$e);var gm=0;N=$c.prototype;N.open=function(t,e){if(this.readyState!=gm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ko(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=gm};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function jE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Va(this):Ko(this),this.readyState==3&&jE(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Va(this))};N.Ya=function(t){this.g&&(this.response=t,Va(this))};N.ka=function(){this.g&&Va(this)};function Va(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ko(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aD=$.JSON.parse;function ve(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VE,this.L=this.M=!1}je(ve,$e);var VE="",lD=/^https?$/i,uD=["POST","PUT"];N=ve.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qd.g(),this.C=this.u?Jy(this.u):Jy(Qd),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){tv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=iE(uD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{WE(this),0<this.B&&((this.L=cD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=hm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tv(this,s)}};function cD(t){return us&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof em<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function tv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BE(t),Uc(t)}function BE(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Uc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uc(this,!0)),ve.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?zE(this):this.kb())};N.kb=function(){zE(this)};function zE(t){if(t.h&&typeof em<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)hm(t.La,0,t);else if(We(t,"readystatechange"),an(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(PE)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!lD.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<an(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",BE(t)}}finally{Uc(t)}}}}function Uc(t,e){if(t.g){WE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function WE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function an(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aD(e)}};function nv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hD(t){const e={};t=(t.g&&2<=an(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=LP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}RP(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function HE(t){let e="";return rm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ym(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KE(t){this.Ga=0,this.j=[],this.l=new Dc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zs("baseRetryDelayMs",5e3,t),this.hb=zs("retryDelaySeedMs",1e4,t),this.eb=zs("forwardChannelMaxRetries",2,t),this.xa=zs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ME(t&&t.concurrentRequestLimit),this.Ja=new iD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=KE.prototype;N.ra=8;N.H=1;function vm(t){if(GE(t),t.H==3){var e=t.W++,n=Pn(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ba(t,n),e=new $a(t,t.l,e),e.L=2,e.v=Fc(Pn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=t1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ua(e)}ZE(t)}function jc(t){t.g&&(wm(t),t.g.cancel(),t.g=null)}function GE(t){jc(t),t.u&&($.clearTimeout(t.u),t.u=null),_u(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Vc(t){if(!LE(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||gE(),Bo||(Vo(),Bo=!0),um.add(e,t),t.C=0}}function dD(t,e){return FE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=La(rt(t.Na,t,e),JE(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new $a(this,this.l,t);let s=this.s;if(this.U&&(s?(s=lE(s),uE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qE(this,i,e),n=Pn(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Ba(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(HE(s)))+"&"+e:this.o&&ym(n,this.o,s)),mm(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,Xd(i,n,null)):Xd(i,n,e),this.H=2}}else this.H==3&&(t?rv(this,t):this.j.length==0||LE(this.i)||rv(this))};function rv(t,e){var n;e?n=e.m:n=t.W++;const r=Pn(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Ba(t,r),t.o&&t.s&&ym(r,t.o,t.s),n=new $a(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mm(t.i,n),Xd(n,r,e)}function Ba(t,e){t.na&&rm(t.na,function(n,r){ae(e,r,n)}),t.h&&AE({},function(n,r){ae(e,r,n)})}function qE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function QE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||gE(),Bo||(Vo(),Bo=!0),um.add(e,t),t.A=0}}function _m(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=La(rt(t.Ma,t),JE(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,YE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=La(rt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),jc(this),YE(this))};function wm(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function YE(t){t.g=new $a(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Pn(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Ba(t,e),t.o&&t.s&&ym(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fc(Pn(e)),n.s=null,n.S=!0,kE(n,t)}N.ib=function(){this.v!=null&&(this.v=null,jc(this),_m(this),lt(19))};function _u(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function XE(t,e){var n=null;if(t.g==e){_u(t),wm(t),t.g=null;var r=2}else if(Zd(t.i,e))n=e.F,$E(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=bc(),We(r,new CE(r,n)),Vc(t)}else QE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dD(t,e)||r==2&&_m(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function JE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ur(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new Gr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||yu(n,"https"),Fc(n)),oD(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),ZE(t),GE(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function ZE(t){if(t.H=0,t.ma=[],t.h){const e=UE(t.i);(e.length!=0||t.j.length!=0)&&(Gy(t.ma,e),Gy(t.ma,t.j),t.i.i.length=0,tm(t.j),t.j.length=0),t.h.ya()}}function e1(t,e,n){var r=n instanceof Gr?Pn(n):new Gr(n);if(r.g!="")e&&(r.g=e+"."+r.g),vu(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gr(null);r&&yu(s,r),e&&(s.g=e),i&&vu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Ba(t,r),r}function t1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ve(new ja({ob:!0})):new ve(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function n1(){}N=n1.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function wu(){if(us&&!(10<=Number(SP)))throw Error("Environmental error: no available transport.")}wu.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){$e.call(this),this.g=new KE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Os(this)}je(kt,$e);kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=e1(t,null,t.Y),Vc(t)};kt.prototype.close=function(){vm(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lm(t),t=n);e.j.push(new tD(e.fb++,t)),e.H==3&&Vc(e)};kt.prototype.N=function(){this.g.h=null,delete this.j,vm(this.g),delete this.g,kt.$.N.call(this)};function r1(t){fm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(r1,fm);function i1(){pm.call(this),this.status=1}je(i1,pm);function Os(t){this.g=t}je(Os,n1);Os.prototype.Ba=function(){We(this.g,"a")};Os.prototype.Aa=function(t){We(this.g,new r1(t))};Os.prototype.za=function(t){We(this.g,new i1)};Os.prototype.ya=function(){We(this.g,"b")};function fD(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(fn,fD);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jh(this,r),i=0;break}}this.h=i,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pD={};function Em(t){return-128<=t&&128>t?CP(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function ln(t){if(isNaN(t)||!isFinite(t))return qi;if(0>t)return ze(ln(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ef;return new Z(e,0)}function s1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(s1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(e,8)),r=qi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ln(Math.pow(e,s)),r=r.R(s).add(ln(o))):(r=r.R(n),r=r.add(ln(o)))}return r}var ef=4294967296,qi=Em(0),tf=Em(1),iv=Em(16777216);N=Z.prototype;N.ea=function(){if(Dt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ef+r)*e,e*=ef}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Dt(this))return"-"+ze(this).toString(t);for(var e=ln(Math.pow(t,6)),n=this,r="";;){var i=Cu(n,e).g;n=Eu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}N.X=function(t){return t=Eu(this,t),Dt(t)?-1:Cn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(tf)}N.abs=function(){return Dt(this)?ze(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Eu(t,e){return t.add(ze(e))}N.R=function(t){if(Cn(this)||Cn(t))return qi;if(Dt(this))return Dt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Dt(t))return ze(this.R(ze(t)));if(0>this.X(iv)&&0>t.X(iv))return ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,dl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,dl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,dl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,dl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function dl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ws(t,e){this.g=t,this.h=e}function Cu(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new Ws(qi,qi);if(Dt(t))return e=Cu(ze(t),e),new Ws(ze(e.g),ze(e.h));if(Dt(e))return e=Cu(t,ze(e)),new Ws(ze(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tf,r=e;0>=r.X(t);)n=sv(n),r=sv(r);var i=ki(n,1),s=ki(r,1);for(r=ki(r,2),n=ki(n,2);!Cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ki(r,1),n=ki(n,1)}return e=Eu(t,i.R(e)),new Ws(i,e)}for(i=qi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ln(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=ln(n),o=s.R(e);Cn(s)&&(s=tf),i=i.add(s),t=Eu(t,o)}return new Ws(i,t)}N.gb=function(t){return Cu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function sv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function ki(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}wu.prototype.createWebChannel=wu.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Oc.NO_ERROR=0;Oc.TIMEOUT=8;Oc.HTTP_ERROR=6;IE.COMPLETE="complete";TE.EventType=Fa;Fa.OPEN="a";Fa.CLOSE="b";Fa.ERROR="c";Fa.MESSAGE="d";$e.prototype.listen=$e.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=ln;Z.fromString=s1;var mD=function(){return new wu},gD=function(){return bc()},Vh=Oc,yD=IE,vD=wi,ov={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_D=ja,fl=TE,wD=ve,ED=Z;const av="@firebase/firestore";/**
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
 */let Xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Ms="9.22.2";/**
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
 */const ti=new Sa("@firebase/firestore");function lv(){return ti.logLevel}function O(t,...e){if(ti.logLevel<=Q.DEBUG){const n=e.map(Cm);ti.debug(`Firestore (${Ms}): ${t}`,...n)}}function ni(t,...e){if(ti.logLevel<=Q.ERROR){const n=e.map(Cm);ti.error(`Firestore (${Ms}): ${t}`,...n)}}function Iu(t,...e){if(ti.logLevel<=Q.WARN){const n=e.map(Cm);ti.warn(`Firestore (${Ms}): ${t}`,...n)}}function Cm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function Ue(t,e){t||G()}function ue(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let L=class extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let qr=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
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
 */let o1=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},CD=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}};class ID{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let TD=class{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new o1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Xe(e)}},SD=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},kD=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new SD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},xD=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ND=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.T=n.token,new xD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function RD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class a1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Le(0,0))}static max(){return new he(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Go{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const AD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Go{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return AD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ge.fromString(e))}static fromName(e){return new j(ge.fromString(e).popFirst(5))}static empty(){return new j(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ge(e.slice()))}}function PD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new mr(i,j.empty(),e)}function DD(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(he.min(),j.empty(),-1)}static max(){return new mr(he.max(),j.empty(),-1)}}function bD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const OD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function l1(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==OD)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Bc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class u1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}u1.ct=-1;function Im(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function LD(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function za(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let en=class nf{constructor(e,n){this.comparator=e,this.root=n||ir.EMPTY}insert(e,n){return new nf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ir.BLACK,null,null))}remove(e){return new nf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ir.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}},pl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ir=class yn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yn.RED,this.left=i??yn.EMPTY,this.right=s??yn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}};ir.EMPTY=null,ir.RED=!0,ir.BLACK=!1;ir.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ir(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */let Ot=class rf{constructor(e){this.comparator=e,this.data=new en(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cv(this.data.getIterator())}getIteratorFrom(e){return new cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rf)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rf(this.comparator);return n.data=e,n}},cv=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
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
 */let Jn=class sf{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new sf([])}unionWith(e){let n=new Ot(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sf(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */let FD=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
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
 */let hs=class of{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new FD("Invalid base64 string: "+i):i}}(e);return new of(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new of(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};hs.EMPTY_BYTE_STRING=new hs("");const $D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=$D.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qo(t){return typeof t=="string"?hs.fromBase64String(t):hs.fromUint8Array(t)}/**
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
 */function Tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function h1(t){const e=t.mapValue.fields.__previous_value__;return Tm(e)?h1(e):e}function Su(t){const e=ri(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */let UD=class{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}},jD=class af{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new af("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof af&&e.projectId===this.projectId&&e.database===this.database}};/**
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
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tm(t)?4:VD(t)?9007199254740991:10:G()}function pn(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Su(t).isEqual(Su(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ri(r.timestampValue),o=ri(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return qo(r.bytesValue).isEqual(qo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Be(r.doubleValue),o=Be(i.doubleValue);return s===o?Tu(s)===Tu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(uv(s)!==uv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Qo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=ds(t),r=ds(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Be(i.integerValue||i.doubleValue),a=Be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hv(t.timestampValue,e.timestampValue);case 4:return hv(Su(t),Su(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=qo(i),a=qo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(Be(i.latitude),Be(s.latitude));return o!==0?o:ne(Be(i.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fs(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ml.mapValue&&s===ml.mapValue)return 0;if(i===ml.mapValue)return 1;if(s===ml.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ne(a[c],u[c]);if(h!==0)return h;const d=fs(o[a[c]],l[u[c]]);if(d!==0)return d}return ne(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function hv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ri(t),r=ri(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function ps(t){return lf(t)}function lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ri(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=lf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${lf(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function uf(t){return!!t&&"integerValue"in t}function Sm(t){return!!t&&"arrayValue"in t}function Wl(t){return!!t&&"mapValue"in t}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return za(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */let qn=class cf{constructor(e){this.value=e}static empty(){return new cf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=po(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){za(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cf(po(this.value))}};function d1(t){const e=[];return za(t.fields,(n,r)=>{const i=new nt([n]);if(Wl(r)){const s=d1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jn(e)}/**
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
 */let ku=class Pr{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pr(e,0,he.min(),he.min(),he.min(),qn.empty(),0)}static newFoundDocument(e,n,r,i){return new Pr(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Pr(e,2,n,he.min(),he.min(),qn.empty(),0)}static newUnknownDocument(e,n){return new Pr(e,3,n,he.min(),he.min(),qn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
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
 */let xu=class{constructor(e,n){this.position=e,this.inclusive=n}};function dv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */let mo=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function BD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class f1{}class Me extends f1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new GD(e,r):n==="in"?new qD(e,r):n==="not-in"?new QD(e,r):n==="array-contains-any"?new YD(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HD(e,r):new KD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gr extends f1{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new gr(e,n)}matches(e){return p1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function p1(t){return t.op==="and"}function m1(t){return zD(t)&&p1(t)}function zD(t){for(const e of t.filters)if(e instanceof gr)return!1;return!0}function hf(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(m1(t))return t.filters.map(e=>hf(e)).join(",");{const e=t.filters.map(n=>hf(n)).join(",");return`${t.op}(${e})`}}function g1(t,e){return t instanceof Me?function(n,r){return r instanceof Me&&n.op===r.op&&n.field.isEqual(r.field)&&pn(n.value,r.value)}(t,e):t instanceof gr?function(n,r){return r instanceof gr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&g1(s,r.filters[o]),!0):!1}(t,e):void G()}function y1(t){return t instanceof Me?function(e){return`${e.field.canonicalString()} ${e.op} ${ps(e.value)}`}(t):t instanceof gr?function(e){return e.op.toString()+" {"+e.getFilters().map(y1).join(" ,")+"}"}(t):"Filter"}class WD extends Me{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class HD extends Me{constructor(e,n){super(e,"in",n),this.keys=v1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KD extends Me{constructor(e,n){super(e,"not-in",n),this.keys=v1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class GD extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sm(n)&&Qo(n.arrayValue,this.value)}}class qD extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class QD extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class YD extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
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
 */class XD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XD(t,e,n,r,i,s,o)}function km(t){const e=ue(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Im(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.dt=n}return e.dt}function xm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fv(t.startAt,e.startAt)&&fv(t.endAt,e.endAt)}/**
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
 */class zc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function JD(t,e,n,r,i,s,o,a){return new zc(t,e,n,r,i,s,o,a)}function ZD(t){return new zc(t)}function mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tb(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nb(t){return t.collectionGroup!==null}function Qi(t){const e=ue(t);if(e.wt===null){e.wt=[];const n=tb(e),r=eb(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new mo(n)),e.wt.push(new mo(nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new mo(nt.keyField(),s))}}}return e.wt}function ms(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=pv(e.path,e.collectionGroup,Qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Qi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new mo(s.field,o))}const r=e.endAt?new xu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xu(e.startAt.position,e.startAt.inclusive):null;e._t=pv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function df(t,e,n){return new zc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _1(t,e){return xm(ms(t),ms(e))&&t.limitType===e.limitType}function w1(t){return`${km(ms(t))}|lt:${t.limitType}`}function gv(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>y1(r)).join(", ")}]`),Im(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),`Target(${n})`}(ms(t))}; limitType=${t.limitType})`}function Nm(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Qi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=dv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Qi(n),r)||n.endAt&&!function(i,s,o){const a=dv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Qi(n),r))}(t,e)}function rb(t){return(e,n)=>{let r=!1;for(const i of Qi(t)){const s=ib(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ib(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fs(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){za(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c1(this.inner)}size(){return this.innerSize}}/**
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
 */const sb=new en(j.comparator);function Nu(){return sb}const E1=new en(j.comparator);function gl(...t){let e=E1;for(const n of t)e=e.insert(n.key,n);return e}function C1(t){let e=E1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return go()}function I1(){return go()}function go(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const ob=new en(j.comparator),ab=new Ot(j.comparator);function Je(...t){let e=ab;for(const n of t)e=e.add(n);return e}const lb=new Ot(ne);function ub(){return lb}/**
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
 */function T1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function S1(t){return{integerValue:""+t}}function cb(t,e){return LD(e)?S1(e):T1(t,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function hb(t,e,n){return t instanceof Ru?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Tm(i)&&(i=h1(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Yo?x1(t,e):t instanceof Xo?N1(t,e):function(r,i){const s=k1(r,i),o=yv(s)+yv(r.gt);return uf(s)&&uf(r.gt)?S1(o):T1(r.serializer,o)}(t,e)}function db(t,e,n){return t instanceof Yo?x1(t,e):t instanceof Xo?N1(t,e):n}function k1(t,e){return t instanceof Au?uf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ru extends Wc{}class Yo extends Wc{constructor(e){super(),this.elements=e}}function x1(t,e){const n=R1(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Wc{constructor(e){super(),this.elements=e}}function N1(t,e){let n=R1(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Au extends Wc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function yv(t){return Be(t.integerValue||t.doubleValue)}function R1(t){return Sm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Yo&&r instanceof Yo||n instanceof Xo&&r instanceof Xo?cs(n.elements,r.elements,pn):n instanceof Au&&r instanceof Au?pn(n.gt,r.gt):n instanceof Ru&&r instanceof Ru}(t.transform,e.transform)}class pb{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hc{}function A1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new D1(t.key,kn.none()):new Wa(t.key,t.data,kn.none());{const n=t.data,r=qn.empty();let i=new Ot(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ei(t.key,r,new Jn(i.toArray()),kn.none())}}function mb(t,e,n){t instanceof Wa?function(r,i,s){const o=r.value.clone(),a=_v(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ei?function(r,i,s){if(!Hl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=_v(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(P1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function yo(t,e,n,r){return t instanceof Wa?function(i,s,o,a){if(!Hl(i.precondition,s))return o;const l=i.value.clone(),u=wv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ei?function(i,s,o,a){if(!Hl(i.precondition,s))return o;const l=wv(i.fieldTransforms,a,s),u=s.data;return u.setAll(P1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Hl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function gb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=k1(r.transform,i||null);s!=null&&(n===null&&(n=qn.empty()),n.set(r.field,s))}return n||null}function vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&cs(n,r,(i,s)=>fb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends Hc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ei extends Hc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function P1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _v(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,db(o,a,n[i]))}return r}function wv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hb(s,o,e))}return r}class D1 extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yb extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=A1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Je())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>vv(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>vv(n,r))}}let _b=class b1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=ob;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new b1(e,n,r,i)}};/**
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
 */let wb=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */var Ee,q;function Eb(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Cb(t){if(t===void 0)return ni("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ee.OK:return T.OK;case Ee.CANCELLED:return T.CANCELLED;case Ee.UNKNOWN:return T.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return T.INTERNAL;case Ee.UNAVAILABLE:return T.UNAVAILABLE;case Ee.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ee.NOT_FOUND:return T.NOT_FOUND;case Ee.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ee.ABORTED:return T.ABORTED;case Ee.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ee.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(q=Ee||(Ee={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ED([4294967295,4294967295],0);let Ib=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function ff(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sb(t,e){return ff(t,e.toTimestamp())}function Yi(t){return Ue(!!t),he.fromTimestamp(function(e){const n=ri(e);return new Le(n.seconds,n.nanos)}(t))}function O1(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kb(t){const e=ge.fromString(t);return Ue(Ob(e)),e}function pf(t,e){return O1(t.databaseId,e.path)}function xb(t){const e=kb(t);return e.length===4?ge.emptyPath():Rb(e)}function Nb(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rb(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ev(t,e,n){return{name:pf(t,e),fields:n.value.mapValue.fields}}function Ab(t,e){let n;if(e instanceof Wa)n={update:Ev(t,e.key,e.value)};else if(e instanceof D1)n={delete:pf(t,e.key)};else if(e instanceof Ei)n={update:Ev(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof yb))return G();n={verify:pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ru)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Yo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Au)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Sb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yi(r.updateTime):Yi(i);return s.isEqual(he.min())&&(s=Yi(i)),new pb(s,r.transformResults||[])}(n,e))):[]}function Db(t){let e=xb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=M1(c);return h instanceof gr&&m1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new mo(Ai(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Im(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new xu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new xu(d,h)}(n.endAt)),JD(e,i,o,s,a,"F",l,u)}function M1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ai(e.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ai(e.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(e.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ai(e.unaryFilter.field);return Me.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Me.create(Ai(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return gr.create(e.compositeFilter.filters.map(n=>M1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function Ai(t){return nt.fromServerFormat(t.fieldPath)}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ob(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mb{constructor(e){this.fe=e}}function Lb(t){const e=Db({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?df(e,e.limit,"L"):e}/**
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
 */class Fb{constructor(){this.rn=new $b}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(mr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class $b{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(ge.comparator)).toArray()}}/**
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
 */class gs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new gs(0)}static Mn(){return new gs(-1)}}/**
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
 */class Ub{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ku.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Vb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yo(r.mutation,i,Jn.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Je()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=gl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Je()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nu();const o=go(),a=go();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ei)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),yo(c.mutation,u,c.mutation.getFieldMask(),Le.now())):o.set(u.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new jb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=go();let i=new en((o,a)=>o-a),s=Je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Jn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Je()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=I1();c.forEach(d=>{if(!s.has(d)){const p=A1(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(jr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Je())).next(c=>({batchId:a,changes:C1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=gl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=gl();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new zc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ku.newInvalidDocument(u)))});let o=gl();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&yo(u.mutation,l,Jn.empty(),Le.now()),Nm(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Bb{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Yi(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Lb(r.bundledQuery),readTime:Yi(r.readTime)}}(n)),S.resolve()}}/**
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
 */class zb{constructor(){this.overlays=new en(j.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new en((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wb(n,r));let s=this.ls.get(n);s===void 0&&(s=Je(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class Rm{constructor(){this.fs=new Ot(Pe.ds),this.ws=new Ot(Pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Pe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new j(new ge([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new j(new ge([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=Je();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return j.comparator(e.key,n.key)||ne(e.As,n.As)}static _s(e,n){return ne(e.As,n.As)||j.comparator(e.key,n.key)}}/**
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
 */class Wb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ot(Pe.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(ne);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),S.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new j(s),0);let a=new Ot(ne);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return S.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.Rs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Hb{constructor(e){this.Ds=e,this.docs=new en(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ku.newInvalidDocument(n))}getEntries(e,n){let r=Nu();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ku.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nu();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bD(DD(c),r)<=0||(i.has(c.key)||Nm(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Cs(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return S.resolve(this.size)}}class Kb extends Ub{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class Gb{constructor(e){this.persistence=e,this.xs=new Ls(n=>km(n),xm),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Rm,this.targetCount=0,this.Ms=gs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
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
 */class qb{constructor(e,n){this.$s={},this.overlays={},this.Os=new u1(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Gb(this),this.indexManager=new Fb,this.remoteDocumentCache=function(r){return new Hb(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Mb(n),this.qs=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new Wb(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new Qb(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return S.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Qb extends MD{constructor(e){super(),this.currentSequenceNumber=e}}class Am{constructor(e){this.persistence=e,this.Qs=new Rm,this.js=null}static zs(e){return new Am(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,r=>{const i=j.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Pm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Je(),i=Je();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pm(e,n.fromCache,r,i)}}/**
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
 */class Yb{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(mv(n))return S.resolve(null);let r=ms(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=df(n,null,"F"),r=ms(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Je(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,df(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return mv(n)||i.isEqual(he.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(lv()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gv(n)),this.Wi(e,o,n,PD(i,-1)))})}ji(e,n){let r=new Ot(rb(e));return n.forEach((i,s)=>{Nm(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return lv()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",gv(n)),this.Ui.getDocumentsMatchingQuery(e,n,mr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Xb{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new en(ne),this.Yi=new Ls(s=>km(s),xm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vb(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Jb(t,e,n,r){return new Xb(t,e,n,r)}async function L1(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Je();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Zb(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const v=l.docVersions.get(p);Ue(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Je();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eO(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function tO(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Cv{constructor(){this.activeTargetIds=ub()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nO{constructor(){this.Hr=new Cv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rO{Yr(e){}shutdown(){}}/**
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
 */class Iv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yl=null;function Bh(){return yl===null?yl=268435456+Math.round(2147483648*Math.random()):yl++,"0x"+yl.toString(16)}/**
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
 */const iO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const qe="WebChannelConnection";class oO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Bh(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Iu("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=iO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Bh();return new Promise((o,a)=>{const l=new wD;l.setWithCredentials(!0),l.listenOnce(yD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vh.NO_ERROR:const c=l.getResponseJson();O(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Vh.TIMEOUT:O(qe,`RPC '${e}' ${s} timed out`),a(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Vh.HTTP_ERROR:const h=l.getStatus();if(O(qe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(E)>=0?E:T.UNKNOWN}(p.status);a(new L(g,p.message))}else a(new L(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{O(qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(qe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Bh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mD(),a=gD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new _D({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(qe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const g=new sO({ro:E=>{p?O(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(O(qe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(qe,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,m,f)=>{E.listen(m,y=>{try{f(y)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,fl.EventType.OPEN,()=>{p||O(qe,`RPC '${e}' stream ${i} transport opened.`)}),v(h,fl.EventType.CLOSE,()=>{p||(p=!0,O(qe,`RPC '${e}' stream ${i} transport closed`),g.wo())}),v(h,fl.EventType.ERROR,E=>{p||(p=!0,Iu(qe,`RPC '${e}' stream ${i} transport errored:`,E),g.wo(new L(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,fl.EventType.MESSAGE,E=>{var m;if(!p){const f=E.data[0];Ue(!!f);const y=f,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){O(qe,`RPC '${e}' stream ${i} received error:`,w);const x=w.status;let R=function(b){const ee=Ee[b];if(ee!==void 0)return Cb(ee)}(x),P=w.message;R===void 0&&(R=T.INTERNAL,P="Unknown error status: "+x+" with message "+w.message),p=!0,g.wo(new L(R,P)),h.close()}else O(qe,`RPC '${e}' stream ${i} received:`,f),g._o(f)}}),v(a,vD.STAT_EVENT,E=>{E.stat===ov.PROXY?O(qe,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===ov.NOPROXY&&O(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function zh(){return typeof document<"u"?document:null}/**
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
 */function Kc(t){return new Ib(t,!0)}/**
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
 */class F1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class aO{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new F1(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(ni(n.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new L(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lO extends aO{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Pb(e.writeResults,e.commitTime),r=Yi(e.commitTime);return this.listener.cu(r,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Nb(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ab(this.serializer,r))};this.Wo(n)}}/**
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
 */class uO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(T.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class cO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ni(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ka(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.vu.add(4),await Ha(l),l.bu.set("Unknown"),l.vu.delete(4),await Gc(l)}(this))})}),this.bu=new cO(r,i)}}async function Gc(t){if(Ka(t))for(const e of t.Ru)await e(!0)}async function Ha(t){for(const e of t.Ru)await e(!1)}function Ka(t){return ue(t).vu.size===0}async function $1(t,e,n){if(!Bc(e))throw e;t.vu.add(1),await Ha(t),t.bu.set("Offline"),n||(n=()=>eO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Gc(t)})}function U1(t,e){return e().catch(n=>$1(t,n,e))}async function qc(t){const e=ue(t),n=yr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;dO(e);)try{const i=await tO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,fO(e,i)}catch(i){await $1(e,i)}j1(e)&&V1(e)}function dO(t){return Ka(t)&&t.Eu.length<10}function fO(t,e){t.Eu.push(e);const n=yr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function j1(t){return Ka(t)&&!yr(t).Uo()&&t.Eu.length>0}function V1(t){yr(t).start()}async function pO(t){yr(t).hu()}async function mO(t){const e=yr(t);for(const n of t.Eu)e.uu(n.mutations)}async function gO(t,e,n){const r=t.Eu.shift(),i=_b.from(r,e,n);await U1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qc(t)}async function yO(t,e){e&&yr(t).ou&&await async function(n,r){if(i=r.code,Eb(i)&&i!==T.ABORTED){const s=n.Eu.shift();yr(n).Qo(),await U1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await qc(n)}var i}(t,e),j1(t)&&V1(t)}async function Tv(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Ka(n);n.vu.add(3),await Ha(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Gc(n)}async function vO(t,e){const n=ue(t);e?(n.vu.delete(2),await Gc(n)):e||(n.vu.add(2),await Ha(n),n.bu.set("Unknown"))}function yr(t){return t.Du||(t.Du=function(e,n,r){const i=ue(e);return i.fu(),new lO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:pO.bind(null,t),ao:yO.bind(null,t),au:mO.bind(null,t),cu:gO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await qc(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */let _O=class B1{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new B1(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function z1(t,e){if(ni("AsyncQueue",`${e}: ${t}`),Bc(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}let wO=class{constructor(){this.queries=new Ls(e=>w1(e),_1),this.onlineState="Unknown",this.ku=new Set}};function EO(t){t.ku.forEach(e=>{e.next()})}let CO=class{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ls(a=>w1(a),_1),this._c=new Map,this.mc=new Set,this.gc=new en(j.comparator),this.yc=new Map,this.Ic=new Rm,this.Tc={},this.Ec=new Map,this.Ac=gs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}};async function IO(t,e,n){const r=xO(t);try{const i=await function(s,o){const a=ue(s),l=Le.now(),u=o.reduce((d,p)=>d.add(p.key),Je());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Nu(),g=Je();return a.Zi.getEntries(d,u).next(v=>{p=v,p.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const E=[];for(const m of o){const f=gb(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new Ei(m.key,f,d1(f.value.mapValue),kn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:C1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new en(ne)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Qc(r,i.changes),await qc(r.remoteStore)}catch(i){const s=z1(i,"Failed to persist write");n.reject(s)}}function Sv(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&EO(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TO(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await Zb(n.localStore,e);H1(n,r,null),W1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qc(n,i)}catch(i){await l1(i)}}async function SO(t,e,n){const r=ue(t);try{const i=await function(s,o){const a=ue(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ue(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);H1(r,e,n),W1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qc(r,i)}catch(i){await l1(i)}}function W1(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function H1(t,e,n){const r=ue(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}async function Qc(t,e,n){const r=ue(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Pm.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Bc(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,g)}}}(r.localStore,s))}async function kO(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await L1(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(T.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qc(n,r.er)}}function xO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SO.bind(null,e),e}let kv=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Jb(this.persistence,new Yb,e.initialUser,this.serializer)}createPersistence(e){return new qb(Am.zs,this.serializer)}createSharedClientState(e){return new nO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}},NO=class{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kO.bind(null,this.syncEngine),await vO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wO}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new oO(i));var i;return function(s,o,a,l){return new uO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Sv(this.syncEngine,a,0),o=Iv.D()?new Iv:new rO,new hO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CO(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ha(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}};/**
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
 */class RO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=a1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=z1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wh(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await L1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PO(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Tv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Tv(e.remoteStore,s)),t._onlineComponents=e}function AO(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!AO(n))throw n;Iu("Error using user provided cache. Falling back to memory cache: "+n),await Wh(t,new kv)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Wh(t,new kv);return t._offlineComponents}async function DO(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await xv(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await xv(t,new NO))),t._onlineComponents}function bO(t){return DO(t).then(e=>e.syncEngine)}/**
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
 */function K1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nv=new Map;/**
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
 */function G1(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OO(t,e,n,r){if(e===!0&&r===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rv(t){if(!j.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Av(t){if(j.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function q1(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dm(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */let Pv=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=K1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}},Yc=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CD;switch(n.type){case"firstParty":return new kD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Nv.get(e);n&&(O("ComponentProvider","Removing Datastore"),Nv.delete(e),n.terminate())}(this),Promise.resolve()}};function MO(t,e,n,r={}){var i;const s=(t=q1(t,Yc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Iu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xe.MOCK_USER;else{a=$k(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xe(u)}t._authCredentials=new ID(new o1(a,l))}}/**
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
 */let Qr=class Q1{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q1(this.firestore,e,this._key)}},LO=class Y1{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Y1(this.firestore,e,this._query)}},Xi=class X1 extends LO{constructor(e,n,r){super(e,n,ZD(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qr(this.firestore,null,new j(e))}withConverter(e){return new X1(this.firestore,e,this._path)}};function FO(t,e,...n){if(t=Ke(t),G1("collection","path",e),t instanceof Yc){const r=ge.fromString(e,...n);return Av(r),new Xi(t,null,r)}{if(!(t instanceof Qr||t instanceof Xi))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Av(r),new Xi(t.firestore,null,r)}}function $O(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=a1.A()),G1("doc","path",e),t instanceof Yc){const r=ge.fromString(e,...n);return Rv(r),new Qr(t,null,new j(r))}{if(!(t instanceof Qr||t instanceof Xi))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Rv(r),new Qr(t.firestore,t instanceof Xi?t.converter:null,new j(r))}}/**
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
 */let UO=class{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new F1(this,"async_queue_retry"),this.Xc=()=>{const n=zh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new qr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Bc(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ni("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=_O.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}},J1=class extends Yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new UO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Z1(this),this._firestoreClient.terminate()}};function jO(t,e){const n=typeof t=="object"?t:cw(),r=typeof t=="string"?t:e||"(default)",i=ka(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fk("firestore");s&&MO(i,...s)}return i}function VO(t){return t._firestoreClient||Z1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Z1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new UD(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,K1(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new RO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */let eC=class mf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mf(hs.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mf(hs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
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
 */let tC=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let nC=class{constructor(e){this._methodName=e}};/**
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
 */let rC=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}};/**
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
 */const BO=/^__.*__$/;let zO=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wa(e,this.data,n,this.fieldTransforms)}};function iC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}let WO=class sC{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new sC(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Pu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(iC(this.ca)&&BO.test(e))throw this._a('Document fields cannot begin and end with "__"')}},HO=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}ya(e,n,r,i=!1){return new WO({ca:e,methodName:n,ga:r,path:nt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function KO(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new HO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GO(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);uC("Data must be an object, but it was:",o,r);const a=aC(r,o);let l,u;if(s.merge)l=new Jn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=qO(e,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);XO(c,d)||c.push(d)}l=new Jn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new zO(new qn(a),l,u)}function oC(t,e){if(lC(t=Ke(t)))return uC("Unsupported field value:",e,t),aC(t,e);if(t instanceof nC)return function(n,r){if(!iC(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=oC(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cb(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Le.fromDate(n);return{timestampValue:ff(r.serializer,i)}}if(n instanceof Le){const i=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ff(r.serializer,i)}}if(n instanceof rC)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof eC)return{bytesValue:Tb(r.serializer,n._byteString)};if(n instanceof Qr){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:O1(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Dm(n)}`)}(t,e)}function aC(t,e){const n={};return c1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):za(t,(r,i)=>{const s=oC(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof rC||t instanceof eC||t instanceof Qr||t instanceof nC)}function uC(t,e,n){if(!lC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function qO(t,e,n){if((e=Ke(e))instanceof tC)return e._internalPath;if(typeof e=="string")return YO(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const QO=new RegExp("[~\\*/\\[\\]]");function YO(t,e,n){if(e.search(QO)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tC(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(T.INVALID_ARGUMENT,a+t+l)}function XO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function JO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function ZO(t,e){const n=q1(t.firestore,J1),r=$O(t),i=JO(t.converter,e);return e2(n,[GO(KO(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,kn.exists(!1))]).then(()=>r)}function e2(t,e){return function(n,r){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>IO(await bO(n),r,i)),i.promise}(VO(t),e)}(function(t,e=!0){(function(n){Ms=n})(Fn),Lt(new St("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new J1(new TD(n.getProvider("auth-internal")),new ND(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jD(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ie(av,"3.12.2",t),Ie(av,"3.12.2","esm2017")})();const cC={apiKey:"AIzaSyC2fYAoBMNMlZxeweURNZfWas9KvS3AdZk",authDomain:"camtlead-b23d1.firebaseapp.com",databaseURL:"https://camtlead-b23d1-default-rtdb.firebaseio.com",projectId:"camtlead-b23d1",storageBucket:"camtlead-b23d1.appspot.com",messagingSenderId:"844347887170",appId:"1:844347887170:web:8c96ba5af7a6ca10eaa7db",measurementId:"G-DG06CJ4S1H"};var t2="firebase",n2="9.22.2";/**
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
 */Ie(t2,n2,"app");function r2(){const[t,e]=I.useState({}),n=i=>{const s=i.target.name,o=i.target.value;e({...t,[s]:o})},r=i=>{i.preventDefault();const s=Up(cC),o=jO(s);ZO(FO(o,"articles"),{vacancyData:t})};return _.jsx(ba,{children:_.jsx("section",{className:"flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ",children:_.jsxs("form",{className:"w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]",onSubmit:r,children:[_.jsx(Ky,{label:"Vacante",name:"articleTitle",on:n}),_.jsx(Ky,{label:"Área",name:"article",on:n}),_.jsx("div",{children:_.jsx("button",{className:"bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none",type:"submit",children:"CreateFirestore"})})]})})})}function i2(){const[t,e]=I.useState(!1);return _.jsx(_.Fragment,{children:_.jsx(sP,{children:_.jsxs(eP,{children:[_.jsx(Ri,{path:"/",element:_.jsxs(ba,{children:[_.jsx(Nk,{}),_.jsx("button",{onClick:()=>e(!t),children:"Show/Hide"}),t&&_.jsx(xk,{})]})}),_.jsx(Ri,{path:"/login",element:_.jsx(fP,{})}),_.jsx(Ri,{path:"/account",element:_.jsx(pP,{})}),_.jsx(Ri,{path:"/account/articles",element:_.jsx(r2,{})}),_.jsx(Ri,{path:"*",element:_.jsx(dP,{})})]})})})}const Dv="@firebase/database",bv="0.14.4";/**
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
 */let hC="";function s2(t){hC=t}/**
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
 */class o2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class a2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o2(e)}}catch{}return new a2},Vr=dC("localStorage"),gf=dC("sessionStorage");/**
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
 */const Ji=new Sa("@firebase/database"),l2=function(){let t=1;return function(){return t++}}(),fC=function(t){const e=Xk(t),n=new Gk;n.update(e);const r=n.digest();return Op.encodeByteArray(r)},Ga=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ga.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Yr=null,Ov=!0;const u2=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ji.logLevel=Q.VERBOSE,Yr=Ji.log.bind(Ji),e&&gf.set("logging_enabled",!0)):typeof t=="function"?Yr=t:(Yr=null,gf.remove("logging_enabled"))},Ze=function(...t){if(Ov===!0&&(Ov=!1,Yr===null&&gf.get("logging_enabled")===!0&&u2(!0)),Yr){const e=Ga.apply(null,t);Yr(e)}},qa=function(t){return function(...e){Ze(t,...e)}},yf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ga(...t);Ji.error(e)},ii=function(...t){const e=`FIREBASE FATAL ERROR: ${Ga(...t)}`;throw Ji.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ga(...t);Ji.warn(e)},c2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},h2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ys="[MIN_NAME]",si="[MAX_NAME]",Fs=function(t,e){if(t===e)return 0;if(t===ys||e===si)return-1;if(e===ys||t===si)return 1;{const n=Mv(t),r=Mv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},d2=function(t,e){return t===e?0:t<e?-1:1},Hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},bm=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=bm(t[e[r]]);return n+="}",n},mC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gC=function(t){k(!pC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},f2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},p2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function m2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const g2=new RegExp("^-?(0*)\\d{1,10}$"),y2=-2147483648,v2=2147483647,Mv=function(t){if(g2.test(t)){const e=Number(t);if(e>=y2&&e<=v2)return e}return null},Qa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},_2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class w2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class E2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class vf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vf.OWNER="owner";/**
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
 */const Om="5",yC="v",vC="s",_C="r",wC="f",EC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,CC="ls",IC="p",_f="ac",TC="websocket",SC="long_polling";/**
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
 */class C2{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function I2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kC(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===TC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===SC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);I2(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class T2{constructor(){this.counters_={}}incrementCounter(e,n=1){Ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pk(this.counters_)}}/**
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
 */const Hh={},Kh={};function Mm(t){const e=t.toString();return Hh[e]||(Hh[e]=new T2),Hh[e]}function S2(t,e){const n=t.toString();return Kh[n]||(Kh[n]=e()),Kh[n]}/**
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
 */class k2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Qa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Lv="start",x2="close",N2="pLPCommand",R2="pRTLPCB",xC="id",NC="pw",RC="ser",A2="cb",P2="seg",D2="ts",b2="d",O2="dframe",AC=1870,PC=30,M2=AC-PC,L2=25e3,F2=3e4;class Di{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=Mm(n),this.urlFn=l=>(this.appCheckToken&&(l[_f]=this.appCheckToken),kC(n,SC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new k2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F2)),h2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lv)this.id=a,this.password=l;else if(o===x2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lv]="t",r[RC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[A2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yC]=Om,this.transportSessionId&&(r[vC]=this.transportSessionId),this.lastSessionId&&(r[CC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[_f]=this.appCheckToken),typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(r[_C]=wC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Di.forceAllow_=!0}static forceDisallow(){Di.forceDisallow_=!0}static isAvailable(){return Di.forceAllow_?!0:!Di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!f2()&&!p2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=J0(n),i=mC(r,M2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[O2]="t",r[xC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=l2(),window[N2+this.uniqueCallbackIdentifier]=e,window[R2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xC]=this.myID,e[NC]=this.myPW,e[RC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+PC+r.length<=AC;){const o=this.pendingSegs.shift();r=r+"&"+P2+i+"="+o.seg+"&"+D2+i+"="+o.ts+"&"+b2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(L2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const $2=16384,U2=45e3;let Du=null;typeof MozWebSocket<"u"?Du=MozWebSocket:typeof WebSocket<"u"&&(Du=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=Mm(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[yC]=Om,typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(o[_C]=wC),n&&(o[vC]=n),r&&(o[CC]=r),i&&(o[_f]=i),s&&(o[IC]=s),kC(e,TC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vr.set("previous_websocket_failure",!0);try{let r;iw(),this.mySock=new Du(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Du!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Vr.isInMemoryStorage||Vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Po(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mC(n,$2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Di,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
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
 */const j2=6e4,V2=5e3,B2=10*1024,z2=100*1024,Gh="t",Fv="d",W2="s",$v="r",H2="e",Uv="o",jv="a",Vv="n",Bv="p",K2="h";class G2{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>z2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gh in e){const n=e[Gh];n===jv?this.upgradeIfSecondaryHealthy_():n===$v?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hs("t",e),r=Hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hs(Gh,e);if(Fv in e){const r=e[Fv];if(n===K2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===W2?this.onConnectionShutdown_(r):n===$v?this.onReset_(r):n===H2?yf("Server Error: "+r):n===Uv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Om!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),vo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(j2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(V2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class DC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class bC{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bu extends bC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bu}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zv=32,Wv=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new te("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vr(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function OC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function q2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function LC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new te(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function pt(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return pt(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fm(t,e){if(vr(t)!==vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vr(t)>vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Q2{constructor(e,n){this.errorPrefix_=n,this.parts_=MC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_c(this.parts_[r]);FC(this)}}function Y2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_c(e),FC(t)}function X2(t){const e=t.parts_.pop();t.byteLength_-=_c(e),t.parts_.length>0&&(t.byteLength_-=1)}function FC(t){if(t.byteLength_>Wv)throw new Error(t.errorPrefix_+"has a key path longer than "+Wv+" bytes ("+t.byteLength_+").");if(t.parts_.length>zv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zv+") or object contains a cycle "+Dr(t))}function Dr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $m extends bC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $m}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ks=1e3,J2=60*5*1e3,Hv=30*1e3,Z2=1.3,eM=3e4,tM="server_kill",Kv=3;class xn extends DC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ks,this.maxReconnectDelay_=J2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!iw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$m.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lp,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ln(e,"w")){const r=as(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yf("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eM&&(this.reconnectDelay_=Ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Z2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new G2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(tM)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&It(h),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dd(this.interruptReasons_)&&(this.reconnectDelay_=Ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>bm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kv&&(this.reconnectDelay_=Hv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hC.replace(/\./g,"-")]=1,Fp()?e["framework.cordova"]=1:rw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bu.getInstance().currentlyOnline();return Dd(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class Xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(ys,e),i=new B(ys,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
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
 */let vl;class $C extends Xc{static get __EMPTY_NODE(){return vl}static set __EMPTY_NODE(e){vl=e}compare(e,n){return Fs(e.name,n.name)}isDefinedOn(e){throw Ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(si,vl)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,vl)}toString(){return".key"}}const Zi=new $C;/**
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
 */class _l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class nM{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _l(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new nM;/**
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
 */function rM(t,e){return Fs(t.name,e.name)}function Um(t,e){return Fs(t,e)}/**
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
 */let wf;function iM(t){wf=t}const UC=function(t){return typeof t=="number"?"number:"+gC(t):"string:"+t},jC=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ln(e,".sv"),"Priority must be a string or number.")}else k(t===wf||t.isEmpty(),"priority of unexpected type.");k(t===wf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gv;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jC(this.priorityNode_)}static set __childrenNodeConstructor(e){Gv=e}static get __childrenNodeConstructor(){return Gv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:W(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+UC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gC(this.value_):e+=this.value_,this.lazyHash_=fC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let VC,BC;function sM(t){VC=t}function oM(t){BC=t}class aM extends Xc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(si,new Ae("[PRIORITY-POST]",BC))}makePost(e,n){const r=VC(e);return new B(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new aM;/**
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
 */const lM=Math.log(2);class uM{constructor(e){const n=s=>parseInt(Math.log(s)/lM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ou=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new De(d,h.node,De.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),v=i(p+1,u);return h=t[p],d=n?n(h):h,new De(d,h.node,De.BLACK,g,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,v){const E=h-g,m=h;h-=g;const f=i(E+1,m),y=t[E],w=n?n(y):y;p(new De(w,y.node,v,null,f))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));v?d(E,De.BLACK):(d(E,De.BLACK),d(E,De.RED))}return c},o=new uM(t.length),a=s(o);return new mt(r||e,a)};/**
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
 */let qh;const xi={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(xi&&ye,"ChildrenNode.ts has not been loaded"),qh=qh||new In({".priority":xi},{".priority":ye}),qh}get(e){const n=as(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Ln(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ou(r,e.getCompare()):a=xi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new In(c,u)}addToIndexes(e,n){const r=ou(this.indexes_,(i,s)=>{const o=as(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===xi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ou(a,o.getCompare())}else return xi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,n){const r=ou(this.indexes_,i=>{if(i===xi)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
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
 */let Gs;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jC(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gs||(Gs=new M(new mt(Um),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gs}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gs:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Gs:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{k(W(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+UC(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ya?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cM extends M{constructor(){super(new mt(Um),M.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Ya=new cM;Object.defineProperties(B,{MIN:{value:new B(ys,M.EMPTY_NODE)},MAX:{value:new B(si,Ya)}});$C.__EMPTY_NODE=M.EMPTY_NODE;Ae.__childrenNodeConstructor=M;iM(Ya);oM(Ya);/**
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
 */const hM=!0;function et(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,et(e))}if(!(t instanceof Array)&&hM){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=et(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=Ou(n,rM,o=>o.name,Um);if(r){const o=Ou(n,ye.getCompare());return new M(s,et(e),new In({".priority":o},{".priority":ye}))}else return new M(s,et(e),In.Default)}else{let n=M.EMPTY_NODE;return wt(t,(r,i)=>{if(Ln(t,r)&&r.substring(0,1)!=="."){const s=et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(et(e))}}sM(et);/**
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
 */class dM extends Xc{constructor(e){super(),this.indexPath_=e,k(!H(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}makePost(e,n){const r=et(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Ya);return new B(si,e)}toString(){return MC(this.indexPath_,0).join("/")}}/**
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
 */class fM extends Xc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=et(e);return new B(n,r)}toString(){return".value"}}const pM=new fM;/**
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
 */function zC(t){return{type:"value",snapshotNode:t}}function vs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ea(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class jm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zo(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vs(n,r)):o.trackChildChange(ea(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zo(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ea(i,s,o))}else r.trackChildChange(vs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ta{constructor(e){this.indexedFilter_=new jm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ta.getStartPost_(e),this.endPost_=ta.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class gM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new B(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ea(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zo(n,h));const v=a.updateImmediateChild(n,M.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(vs(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Zo(u.name,u.node)),s.trackChildChange(vs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
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
 */class Vm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ys}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new Vm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yM(t){return t.loadsAllData()?new jm(t.getIndex()):t.hasLimit()?new gM(t):new ta(t)}function qv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===pM?n="$value":t.index_===Zi?n="$key":(k(t.index_ instanceof dM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
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
 */class Mu extends DC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mu.getListenId_(e,r),a={};this.listens_[o]=a;const l=qv(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),as(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Mu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qv(e._queryParams),r=e._path.toString(),i=new Lp;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Po(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vM{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Lu(){return{value:null,children:new Map}}function WC(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Lu());const i=t.children.get(r);e=re(e),WC(i,e,n)}}function Ef(t,e,n){t.value!==null?n(e,t.value):_M(t,(r,i)=>{const s=new te(e.toString()+"/"+r);Ef(i,s,n)})}function _M(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class wM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Yv=10*1e3,EM=30*1e3,CM=5*60*1e3;class IM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wM(e);const r=Yv+(EM-Yv)*Math.random();vo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&Ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),vo(this.reportStats_.bind(this),Math.floor(Math.random()*2*CM))}}/**
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
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function HC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=HC()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Fu(X(),n,this.revert)}}else return k(W(this.path)===e,"operationForChild called for unrelated child."),new Fu(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class na{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new na(this.source,X()):new na(this.source,re(this.path))}}/**
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
 */class oi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return H(this.path)?new oi(this.source,X(),this.snap.getImmediateChild(e)):new oi(this.source,re(this.path),this.snap)}}/**
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
 */class ra{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new oi(this.source,X(),n.value):new ra(this.source,X(),n)}else return k(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ra(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ai{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mM(o.childName,o.snapshotNode))}),qs(t,i,"child_removed",e,r,n),qs(t,i,"child_added",e,r,n),qs(t,i,"child_moved",s,r,n),qs(t,i,"child_changed",e,r,n),qs(t,i,"value",e,r,n),i}function qs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>xM(t,a,l)),o.forEach(a=>{const l=kM(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function kM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xM(t,e,n){if(e.childName==null||n.childName==null)throw Ns("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Jc(t,e){return{eventCache:t,serverCache:e}}function _o(t,e,n,r){return Jc(new ai(e,n,r),t.serverCache)}function KC(t,e,n,r){return Jc(t.eventCache,new ai(e,n,r))}function Cf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Qh;const NM=()=>(Qh||(Qh=new mt(d2)),Qh);class oe{constructor(e,n=NM()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return wt(e,(r,i)=>{n=n.set(new te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(H(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:xe(new te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new oe(null)}}set(e,n){if(H(e))return new oe(n,this.children);{const r=W(e),s=(this.children.get(r)||new oe(null)).set(re(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(H(e))return n;{const r=W(e),s=(this.children.get(r)||new oe(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(H(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(re(e),xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(H(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),xe(n,i),r):new oe(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Xt{constructor(e){this.writeTree_=e}static empty(){return new Xt(new oe(null))}}function wo(t,e,n){if(H(e))return new Xt(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=pt(i,e);return s=s.updateChild(o,n),new Xt(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new Xt(s)}}}function Xv(t,e,n){let r=t;return wt(n,(i,s)=>{r=wo(r,xe(e,i),s)}),r}function Jv(t,e){if(H(e))return Xt.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Xt(n)}}function If(t,e){return Ci(t,e)!=null}function Ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function Zv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function sr(t,e){if(H(e))return t;{const n=Ci(t,e);return n!=null?new Xt(new oe(n)):new Xt(t.writeTree_.subtree(e))}}function Tf(t){return t.writeTree_.isEmpty()}function _s(t,e){return GC(X(),t.writeTree_,e)}function GC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=GC(xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xe(t,".priority"),r)),n}}/**
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
 */function Wm(t,e){return XC(e,t)}function RM(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=wo(t.visibleWrites,e,n)),t.lastWriteId=r}function AM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function PM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&DM(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return bM(t),!0;if(r.snap)t.visibleWrites=Jv(t.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{t.visibleWrites=Jv(t.visibleWrites,xe(r.path,l))})}return!0}else return!1}function DM(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(xe(t.path,n),e))return!0;return!1}function bM(t){t.visibleWrites=qC(t.allWrites,OM,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function OM(t){return t.visible}function qC(t,e,n){let r=Xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=pt(n,o),r=wo(r,a,s.snap)):qt(o,n)&&(a=pt(o,n),r=wo(r,X(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=pt(n,o),r=Xv(r,a,s.children);else if(qt(o,n))if(a=pt(o,n),H(a))r=Xv(r,X(),s.children);else{const l=as(s.children,W(a));if(l){const u=l.getChild(re(a));r=wo(r,X(),u)}}}else throw Ns("WriteRecord should have .snap or .children")}}return r}function QC(t,e,n,r,i){if(!r&&!i){const s=Ci(t.visibleWrites,e);if(s!=null)return s;{const o=sr(t.visibleWrites,e);if(Tf(o))return n;if(n==null&&!If(o,X()))return null;{const a=n||M.EMPTY_NODE;return _s(o,a)}}}else{const s=sr(t.visibleWrites,e);if(!i&&Tf(s))return n;if(!i&&n==null&&!If(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=qC(t.allWrites,o,e),l=n||M.EMPTY_NODE;return _s(a,l)}}}function MM(t,e,n){let r=M.EMPTY_NODE;const i=Ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=sr(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=_s(sr(s,new te(o)),a);r=r.updateImmediateChild(o,l)}),Zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=sr(t.visibleWrites,e);return Zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LM(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=xe(e,n);if(If(t.visibleWrites,s))return null;{const o=sr(t.visibleWrites,s);return Tf(o)?i.getChild(n):_s(o,i.getChild(n))}}function FM(t,e,n,r){const i=xe(e,n),s=Ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=sr(t.visibleWrites,i);return _s(o,r.getNode().getImmediateChild(n))}else return null}function $M(t,e){return Ci(t.visibleWrites,e)}function UM(t,e,n,r,i,s,o){let a;const l=sr(t.visibleWrites,e),u=Ci(l,X());if(u!=null)a=u;else if(n!=null)a=_s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function jM(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function $u(t,e,n,r){return QC(t.writeTree,t.treePath,e,n,r)}function Hm(t,e){return MM(t.writeTree,t.treePath,e)}function e_(t,e,n,r){return LM(t.writeTree,t.treePath,e,n,r)}function Uu(t,e){return $M(t.writeTree,xe(t.treePath,e))}function VM(t,e,n,r,i,s){return UM(t.writeTree,t.treePath,e,n,r,i,s)}function Km(t,e,n){return FM(t.writeTree,t.treePath,e,n)}function YC(t,e){return XC(xe(t.treePath,e),t.writeTree)}function XC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class BM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ea(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ea(r,e.snapshotNode,i.oldSnap));else throw Ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const JC=new zM;class Gm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ai(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Km(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),s=VM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function WM(t){return{filter:t}}function HM(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KM(t,e,n,r,i){const s=new BM;let o,a;if(n.type===Qt.OVERWRITE){const u=n;u.source.fromUser?o=Sf(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!H(u.path),o=ju(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const u=n;u.source.fromUser?o=qM(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=kf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const u=n;u.revert?o=XM(t,e,u.path,r,i,s):o=QM(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=YM(t,e,n.path,r,s);else throw Ns("Unknown operation type: "+n.type);const l=s.getChanges();return GM(e,o,l),{viewCache:o,changes:l}}function GM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Cf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(zC(Cf(e)))}}function ZC(t,e,n,r,i,s){const o=e.eventCache;if(Uu(r,n)!=null)return e;{let a,l;if(H(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=li(e),c=u instanceof M?u:M.EMPTY_NODE,h=Hm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=$u(r,li(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){k(vr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=e_(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=re(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=e_(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Km(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return _o(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function ju(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(H(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=W(n);if(!l.isCompleteForPath(n)&&vr(n)>1)return e;const g=re(n),E=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),p,E,g,JC,null)}const h=KC(e,u,l.isFullyInitialized()||H(n),c.filtersNodes()),d=new Gm(i,h,s);return ZC(t,h,n,i,d,a)}function Sf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Gm(i,e,s);if(H(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=_o(e,u,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=_o(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=re(n),p=a.getNode().getImmediateChild(h);let g;if(H(d))g=r;else{const v=c.getCompleteChild(h);v!=null?OC(d)===".priority"&&v.getChild(LC(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=M.EMPTY_NODE}if(p.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=_o(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function t_(t,e){return t.eventCache.isCompleteForChild(e)}function qM(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=xe(n,l);t_(e,W(c))&&(a=Sf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=xe(n,l);t_(e,W(c))||(a=Sf(t,a,c,u,i,s,o))}),a}function n_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function kf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;H(n)?u=r:u=new oe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=n_(t,p,d);l=ju(t,l,new te(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),v=n_(t,g,d);l=ju(t,l,new te(h),v,i,s,o,a)}}),l}function QM(t,e,n,r,i,s,o){if(Uu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ju(t,e,n,l.getNode().getChild(n),i,s,a,o);if(H(n)){let u=new oe(null);return l.getNode().forEachChild(Zi,(c,h)=>{u=u.set(new te(c),h)}),kf(t,e,n,u,i,s,a,o)}else return e}else{let u=new oe(null);return r.foreach((c,h)=>{const d=xe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),kf(t,e,n,u,i,s,a,o)}}function YM(t,e,n,r,i){const s=e.serverCache,o=KC(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return ZC(t,o,n,r,JC,i)}function XM(t,e,n,r,i,s){let o;if(Uu(r,n)!=null)return e;{const a=new Gm(r,e,i),l=e.eventCache.getNode();let u;if(H(n)||W(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=$u(r,li(e));else{const h=e.serverCache.getNode();k(h instanceof M,"serverChildren would be complete if leaf node"),c=Hm(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=W(n);let h=Km(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,re(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,M.EMPTY_NODE,re(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$u(r,li(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Uu(r,X())!=null,_o(e,u,o,t.filter.filtersNodes())}}/**
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
 */class JM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new jm(r.getIndex()),s=yM(r);this.processor_=WM(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),c=new ai(l,o.isFullyInitialized(),i.filtersNodes()),h=new ai(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Jc(h,c),this.eventGenerator_=new TM(this.query_)}get query(){return this.query_}}function ZM(t){return t.viewCache_.serverCache.getNode()}function eL(t,e){const n=li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function r_(t){return t.eventRegistrations_.length===0}function tL(t,e){t.eventRegistrations_.push(e)}function i_(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function s_(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(k(li(t.viewCache_),"We should always have a full cache before handling merges"),k(Cf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KM(t.processor_,i,e,n,r);return HM(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,eI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function nL(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(vs(s,o))}),n.isFullyInitialized()&&r.push(zC(n.getNode())),eI(t,r,n.getNode(),e)}function eI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return SM(t.eventGenerator_,e,n,i)}/**
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
 */let Vu;class rL{constructor(){this.views=new Map}}function iL(t){k(!Vu,"__referenceConstructor has already been defined"),Vu=t}function sL(){return k(Vu,"Reference.ts has not been loaded"),Vu}function oL(t){return t.views.size===0}function qm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),s_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(s_(o,e,n,r));return s}}function aL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=$u(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=Hm(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const u=Jc(new ai(a,l,!1),new ai(r,i,!1));return new JM(e,u)}return o}function lL(t,e,n,r,i,s){const o=aL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tL(o,n),nL(o,n)}function uL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=_r(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(i_(u,n,r)),r_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(i_(l,n,r)),r_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!_r(t)&&s.push(new(sL())(e._repo,e._path)),{removed:s,events:o}}function tI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function es(t,e){let n=null;for(const r of t.views.values())n=n||eL(r,e);return n}function nI(t,e){if(e._queryParams.loadsAllData())return Zc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rI(t,e){return nI(t,e)!=null}function _r(t){return Zc(t)!=null}function Zc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Bu;function cL(t){k(!Bu,"__referenceConstructor has already been defined"),Bu=t}function hL(){return k(Bu,"Reference.ts has not been loaded"),Bu}let dL=1;class o_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=jM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fL(t,e,n,r,i){return RM(t.pendingWriteTree_,e,n,r,i),i?Xa(t,new oi(HC(),e,n)):[]}function bi(t,e,n=!1){const r=AM(t.pendingWriteTree_,e);if(PM(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(X(),!0):wt(r.children,o=>{s=s.set(new te(o),!0)}),Xa(t,new Fu(r.path,s,n))}else return[]}function eh(t,e,n){return Xa(t,new oi(Bm(),e,n))}function pL(t,e,n){const r=oe.fromObject(n);return Xa(t,new ra(Bm(),e,r))}function mL(t,e){return Xa(t,new na(Bm(),e))}function gL(t,e,n){const r=Qm(t,n);if(r){const i=Ym(r),s=i.path,o=i.queryId,a=pt(s,e),l=new na(zm(o),a);return Xm(t,s,l)}else return[]}function xf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||rI(o,e))){const l=uL(o,e,n,r);oL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>_r(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=_L(d);for(let g=0;g<p.length;++g){const v=p[g],E=v.query,m=aI(t,v);t.listenProvider_.startListening(Eo(E),zu(t,E),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Eo(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(th(d));t.listenProvider_.stopListening(Eo(d),p)}))}wL(t,u)}return a}function yL(t,e,n,r){const i=Qm(t,r);if(i!=null){const s=Ym(i),o=s.path,a=s.queryId,l=pt(o,e),u=new oi(zm(a),l,n);return Xm(t,o,u)}else return[]}function vL(t,e,n,r){const i=Qm(t,r);if(i){const s=Ym(i),o=s.path,a=s.queryId,l=pt(o,e),u=oe.fromObject(n),c=new ra(zm(a),l,u);return Xm(t,o,c)}else return[]}function a_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=pt(d,i);s=s||es(p,g),o=o||_r(p)});let a=t.syncPointTree_.get(i);a?(o=o||_r(a),s=s||es(a,X())):(a=new rL,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=es(g,X());v&&(s=s.updateImmediateChild(p,v))}));const u=rI(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=th(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=EL();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=Wm(t.pendingWriteTree_,i);let h=lL(a,e,n,c,s,l);if(!u&&!o&&!r){const d=nI(a,e);h=h.concat(CL(t,e,d))}return h}function iI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=pt(o,e),u=es(a,l);if(u)return u});return QC(i,e,s,n,!0)}function Xa(t,e){return sI(e,t.syncPointTree_,null,Wm(t.pendingWriteTree_,X()))}function sI(t,e,n,r){if(H(t.path))return oI(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=es(i,X()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=YC(r,o);s=s.concat(sI(a,l,u,c))}return i&&(s=s.concat(qm(i,t,r,n))),s}}function oI(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=es(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=YC(r,o),c=t.operationForChild(o);c&&(s=s.concat(oI(c,a,l,u)))}),i&&(s=s.concat(qm(i,t,r,n))),s}function aI(t,e){const n=e.query,r=zu(t,n);return{hashFn:()=>(ZM(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?gL(t,n._path,r):mL(t,n._path);{const s=m2(i,n);return xf(t,n,null,s)}}}}function zu(t,e){const n=th(e);return t.queryToTagMap.get(n)}function th(t){return t._path.toString()+"$"+t._queryIdentifier}function Qm(t,e){return t.tagToQueryMap.get(e)}function Ym(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Xm(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Wm(t.pendingWriteTree_,e);return qm(r,n,i,null)}function _L(t){return t.fold((e,n,r)=>{if(n&&_r(n))return[Zc(n)];{let i=[];return n&&(i=tI(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hL())(t._repo,t._path):t}function wL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=th(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function EL(){return dL++}function CL(t,e,n){const r=e._path,i=zu(t,e),s=aI(t,n),o=t.listenProvider_.startListening(Eo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!_r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!H(u)&&c&&_r(c))return[Zc(c).query];{let d=[];return c&&(d=d.concat(tI(c).map(p=>p.query))),wt(h,(p,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Eo(c),zu(t,c))}}return o}/**
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
 */class Jm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jm(n)}node(){return this.node_}}class Zm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Zm(this.syncTree_,n)}node(){return iI(this.syncTree_,this.path_)}}const IL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},l_=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return SL(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},SL=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},kL=function(t,e,n,r){return eg(e,new Zm(n,t),r)},xL=function(t,e,n){return eg(t,new Jm(e),n)};function eg(t,e,n){const r=t.getPriority().val(),i=l_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=l_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(ye,(a,l)=>{const u=eg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class tg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ng(t,e){let n=e instanceof te?e:new te(e),r=t,i=W(n);for(;i!==null;){const s=as(r.node.children,i)||{children:{},childCount:0};r=new tg(i,r,s),n=re(n),i=W(n)}return r}function $s(t){return t.node.value}function lI(t,e){t.node.value=e,Nf(t)}function uI(t){return t.node.childCount>0}function NL(t){return $s(t)===void 0&&!uI(t)}function nh(t,e){wt(t.node.children,(n,r)=>{e(new tg(n,t,r))})}function cI(t,e,n,r){n&&!r&&e(t),nh(t,i=>{cI(i,e,!0,r)}),n&&r&&e(t)}function RL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ja(t){return new te(t.parent===null?t.name:Ja(t.parent)+"/"+t.name)}function Nf(t){t.parent!==null&&AL(t.parent,t.name,t)}function AL(t,e,n){const r=NL(n),i=Ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Nf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nf(t))}/**
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
 */const PL=/[\[\].#$\/\u0000-\u001F\u007F]/,DL=/[\[\].#$\u0000-\u001F\u007F]/,Yh=10*1024*1024,hI=function(t){return typeof t=="string"&&t.length!==0&&!PL.test(t)},dI=function(t){return typeof t=="string"&&t.length!==0&&!DL.test(t)},bL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dI(t)},fI=function(t,e,n){const r=n instanceof te?new Q2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Dr(r)+" with contents = "+e.toString());if(pC(e))throw new Error(t+"contains "+e.toString()+" "+Dr(r));if(typeof e=="string"&&e.length>Yh/3&&_c(e)>Yh)throw new Error(t+"contains a string greater than "+Yh+" utf8 bytes "+Dr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!hI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Y2(r,o),fI(t,a,r),X2(r)}),i&&s)throw new Error(t+' contains ".value" child '+Dr(r)+" in addition to actual children.")}},pI=function(t,e,n,r){if(!(r&&n===void 0)&&!dI(n))throw new Error(aw(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pI(t,e,n,r)},ML=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bL(n))throw new Error(aw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Fm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function gI(t,e,n){mI(t,n),yI(t,r=>Fm(r,e))}function Ii(t,e,n){mI(t,n),yI(t,r=>qt(r,e)||qt(e,r))}function yI(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(FL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function FL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yr&&Ze("event: "+n.toString()),Qa(r)}}}/**
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
 */const $L="repo_interrupt",UL=25;class jL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lu(),this.transactionQueueTree_=new tg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VL(t,e,n){if(t.stats_=Mm(t.repoInfo_),t.forceRestClient_||_2())t.server_=new Mu(t.repoInfo_,(r,i,s,o)=>{u_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>c_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xn(t.repoInfo_,e,(r,i,s,o)=>{u_(t,r,i,s,o)},r=>{c_(t,r)},r=>{zL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=S2(t.repoInfo_,()=>new IM(t.stats_,t.server_)),t.infoData_=new vM,t.infoSyncTree_=new o_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=eh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rg(t,"connected",!1),t.serverSyncTree_=new o_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ii(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function BL(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vI(t){return IL({timestamp:BL(t)})}function u_(t,e,n,r,i){t.dataUpdateCount++;const s=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ou(n,u=>et(u));o=vL(t.serverSyncTree_,s,l,i)}else{const l=et(n);o=yL(t.serverSyncTree_,s,l,i)}else if(r){const l=ou(n,u=>et(u));o=pL(t.serverSyncTree_,s,l)}else{const l=et(n);o=eh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=sg(t,s)),Ii(t.eventQueue_,a,o)}function c_(t,e){rg(t,"connected",e),e===!1&&HL(t)}function zL(t,e){wt(e,(n,r)=>{rg(t,n,r)})}function rg(t,e,n){const r=new te("/.info/"+e),i=et(n);t.infoData_.updateSnapshot(r,i);const s=eh(t.infoSyncTree_,r,i);Ii(t.eventQueue_,r,s)}function WL(t){return t.nextWriteId_++}function HL(t){_I(t,"onDisconnectEvents");const e=vI(t),n=Lu();Ef(t.onDisconnect_,X(),(i,s)=>{const o=kL(i,s,t.serverSyncTree_,e);WC(n,i,o)});let r=[];Ef(n,X(),(i,s)=>{r=r.concat(eh(t.serverSyncTree_,i,s));const o=YL(t,i);sg(t,o)}),t.onDisconnect_=Lu(),Ii(t.eventQueue_,X(),r)}function KL(t,e,n){let r;W(e._path)===".info"?r=a_(t.infoSyncTree_,e,n):r=a_(t.serverSyncTree_,e,n),gI(t.eventQueue_,e._path,r)}function h_(t,e,n){let r;W(e._path)===".info"?r=xf(t.infoSyncTree_,e,n):r=xf(t.serverSyncTree_,e,n),gI(t.eventQueue_,e._path,r)}function GL(t){t.persistentConnection_&&t.persistentConnection_.interrupt($L)}function _I(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function wI(t,e,n){return iI(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function ig(t,e=t.transactionQueueTree_){if(e||rh(t,e),$s(e)){const n=CI(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qL(t,Ja(e),n)}else uI(e)&&nh(e,n=>{ig(t,n)})}function qL(t,e,n){const r=n.map(u=>u.currentWriteId),i=wI(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=pt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{_I(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(bi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();rh(t,ng(t.transactionQueueTree_,e)),ig(t,t.transactionQueueTree_),Ii(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Qa(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}sg(t,e)}},o)}function sg(t,e){const n=EI(t,e),r=Ja(n),i=CI(t,n);return QL(t,i,r),r}function QL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=pt(n,l.path);let c=!1,h;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=UL)c=!0,h="maxretry",i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=wI(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){fI("transaction failed: Data returned ",p,l.path);let g=et(p);typeof p=="object"&&p!=null&&Ln(p,".priority")||(g=g.updatePriority(d.getPriority()));const E=l.currentWriteId,m=vI(t),f=xL(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=f,l.currentWriteId=WL(t),o.splice(o.indexOf(E),1),i=i.concat(fL(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(bi(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0))}Ii(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Qa(r[a]);ig(t,t.transactionQueueTree_)}function EI(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&$s(r)===void 0;)r=ng(r,n),e=re(e),n=W(e);return r}function CI(t,e){const n=[];return II(t,e,n),n.sort((r,i)=>r.order-i.order),n}function II(t,e,n){const r=$s(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);nh(e,i=>{II(t,i,n)})}function rh(t,e){const n=$s(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,lI(e,n.length>0?n:void 0)}nh(e,r=>{rh(t,r)})}function YL(t,e){const n=Ja(EI(t,e)),r=ng(t.transactionQueueTree_,e);return RL(r,i=>{Xh(t,i)}),Xh(t,r),cI(r,i=>{Xh(t,i)}),n}function Xh(t,e){const n=$s(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?lI(e,void 0):n.length=s+1,Ii(t.eventQueue_,Ja(e),i);for(let o=0;o<r.length;o++)Qa(r[o])}}/**
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
 */function XL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function JL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const d_=function(t,e){const n=ZL(t),r=n.namespace;n.domain==="firebase.com"&&ii(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||c2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new C2(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new te(n.pathString)}},ZL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=XL(t.substring(c,h)));const d=JL(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class TI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class SI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class eF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class og{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return H(this._path)?null:OC(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=Qv(this._queryParams),n=bm(e);return n==="{}"?"default":n}get _queryObject(){return Qv(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof og))return!1;const n=this._repo===e._repo,r=Fm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+q2(this._path)}}class $n extends og{constructor(e,n){super(e,n,new Vm,!1)}get parent(){const e=LC(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ia{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),r=Rf(this.ref,e);return new ia(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ia(i,Rf(this.ref,r),ye)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rf(t,e){return t=Ke(t),W(t._path)===null?OL("child","path",e,!1):pI("child","path",e,!1),new $n(t._repo,xe(t._path,e))}class ag{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new TI("value",this,new ia(e.snapshotNode,new $n(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SI(this,e,n):null}matches(e){return e instanceof ag?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class lg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SI(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=Rf(new $n(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new TI(e.type,this,new ia(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof lg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Za(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{h_(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new eF(n,s||void 0),a=e==="value"?new ag(o):new lg(e,o);return KL(t._repo,t,a),()=>h_(t._repo,t,a)}function tF(t,e,n,r){return Za(t,"value",e,n,r)}function nF(t,e,n,r){return Za(t,"child_added",e,n,r)}function rF(t,e,n,r){return Za(t,"child_changed",e,n,r)}function iF(t,e,n,r){return Za(t,"child_moved",e,n,r)}function sF(t,e,n,r){return Za(t,"child_removed",e,n,r)}iL($n);cL($n);/**
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
 */const oF="FIREBASE_DATABASE_EMULATOR_HOST",Af={};let aF=!1;function lF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=d_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[oF]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=d_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new vf(vf.OWNER):new E2(t.name,t.options,e);ML("Invalid Firebase Database URL",o),H(o.path)||ii("Database URL must point to the root of a Firebase Database (not including a child path).");const h=cF(a,t,c,new w2(t.name,n));return new hF(h,t)}function uF(t,e){const n=Af[e];(!n||n[t.key]!==t)&&ii(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GL(t),delete n[t.key]}function cF(t,e,n,r){let i=Af[e.name];i||(i={},Af[e.name]=i);let s=i[t.toURLString()];return s&&ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jL(t,aF,n,r),i[t.toURLString()]=s,s}class hF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ii("Cannot call "+e+" on a deleted database.")}}/**
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
 */function dF(t){s2(Fn),Lt(new St("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ie(Dv,bv,t),Ie(Dv,bv,"esm2017")}xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dF();/**
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
 */const fF="functions";/**
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
 */class pF{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const f_="us-central1";class mF{constructor(e,n,r,i,s=f_,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new pF(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=f_}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const p_="@firebase/functions",m_="0.10.0";/**
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
 */const gF="auth-internal",yF="app-check-internal",vF="messaging-internal";function _F(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(gF),a=r.getProvider(vF),l=r.getProvider(yF);return new mF(s,o,a,l,i,t)};Lt(new St(fF,n,"PUBLIC").setMultipleInstances(!0)),Ie(p_,m_,e),Ie(p_,m_,"esm2017")}_F(fetch.bind(self));/**
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
 */const kI="firebasestorage.googleapis.com",wF="storageBucket",EF=2*60*1e3,CF=10*60*1e3;/**
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
 */class gn extends jt{constructor(e,n,r=0){super(Jh(e),`Firebase Storage: ${n} (${Jh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mn||(mn={}));function Jh(t){return"storage/"+t}function IF(){const t="An unknown error occurred, please check the error payload for server response.";return new gn(mn.UNKNOWN,t)}function TF(){return new gn(mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SF(){return new gn(mn.CANCELED,"User canceled the upload/download.")}function kF(t){return new gn(mn.INVALID_URL,"Invalid URL '"+t+"'.")}function xF(t){return new gn(mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function g_(t){return new gn(mn.INVALID_ARGUMENT,t)}function xI(){return new gn(mn.APP_DELETED,"The Firebase app was deleted.")}function NF(t){return new gn(mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw xF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===kI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const x=y[w],R=x.regex.exec(e);if(R){const P=R[x.indices.bucket];let b=R[x.indices.path];b||(b=""),r=new Yt(P,b),x.postModify(r);break}}if(r==null)throw kF(e);return r}}class RF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){s&&clearTimeout(s)}function p(E,...m){if(u){d();return}if(E){d(),c.call(null,E,...m);return}if(l()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let g=!1;function v(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function PF(t){t(!1)}/**
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
 */function DF(t){return t!==void 0}function y_(t,e,n,r){if(r<e)throw g_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw g_(`Invalid value for '${t}'. Expected ${n} or less.`)}function bF(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Wu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wu||(Wu={}));/**
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
 */function OF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class MF{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Wu.NO_ERROR,l=s.getStatus();if(!a||OF(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Wu.ABORT;r(!1,new wl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new wl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=IF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xI():SF();o(l)}else{const l=TF();o(l)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=AF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $F(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jF(t,e,n,r,i,s,o=!0){const a=bF(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return $F(u,e),LF(u,n),FF(u,s),UF(u,r),new MF(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function VF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Hu{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hu(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BF(this._location.path)}get storage(){return this._service}get parent(){const e=VF(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Hu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NF(e)}}function v_(t,e){const n=e==null?void 0:e[wF];return n==null?null:Yt.makeFromBucketSpec(n,t)}class zF{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=kI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EF,this._maxUploadRetryTime=CF,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=v_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=v_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new RF(xI());{const o=jF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const __="@firebase/storage",w_="0.11.2";/**
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
 */const WF="storage";function HF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zF(n,r,i,e,Fn)}function KF(){Lt(new St(WF,HF,"PUBLIC").setMultipleInstances(!0)),Ie(__,w_,""),Ie(__,w_,"esm2017")}KF();const GF=(t,e)=>e.some(n=>t instanceof n);let E_,C_;function qF(){return E_||(E_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QF(){return C_||(C_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NI=new WeakMap,Pf=new WeakMap,RI=new WeakMap,Zh=new WeakMap,ug=new WeakMap;function YF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NI.set(n,t)}).catch(()=>{}),ug.set(e,t),e}function XF(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JF(t){Df=t(Df)}function ZF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ed(this),e,...n);return RI.set(r,e.sort?e.sort():[e]),or(r)}:QF().includes(t)?function(...e){return t.apply(ed(this),e),or(NI.get(this))}:function(...e){return or(t.apply(ed(this),e))}}function e$(t){return typeof t=="function"?ZF(t):(t instanceof IDBTransaction&&XF(t),GF(t,qF())?new Proxy(t,Df):t)}function or(t){if(t instanceof IDBRequest)return YF(t);if(Zh.has(t))return Zh.get(t);const e=e$(t);return e!==t&&(Zh.set(t,e),ug.set(e,t)),e}const ed=t=>ug.get(t);function t$(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const n$=["get","getKey","getAll","getAllKeys","count"],r$=["put","add","delete","clear"],td=new Map;function I_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=r$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n$.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return td.set(e,s),s}JF(t=>({...t,get:(e,n,r)=>I_(e,n)||t.get(e,n,r),has:(e,n)=>!!I_(e,n)||t.has(e,n)}));const AI="@firebase/installations",cg="0.6.4";/**
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
 */const PI=1e4,DI=`w:${cg}`,bI="FIS_v2",i$="https://firebaseinstallations.googleapis.com/v1",s$=60*60*1e3,o$="installations",a$="Installations";/**
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
 */const l$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ui=new gi(o$,a$,l$);function OI(t){return t instanceof jt&&t.code.includes("request-failed")}/**
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
 */function MI({projectId:t}){return`${i$}/projects/${t}/installations`}function LI(t){return{token:t.token,requestStatus:2,expiresIn:c$(t.expiresIn),creationTime:Date.now()}}async function FI(t,e){const r=(await e.json()).error;return ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function u$(t,{refreshToken:e}){const n=$I(t);return n.append("Authorization",h$(e)),n}async function UI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c$(t){return Number(t.replace("s","000"))}function h$(t){return`${bI} ${t}`}/**
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
 */async function d$({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=MI(t),i=$I(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:bI,appId:t.appId,sdkVersion:DI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await UI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:LI(u.authToken)}}else throw await FI("Create Installation",l)}/**
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
 */function jI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function f$(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const p$=/^[cdef][\w-]{21}$/,bf="";function m$(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=g$(t);return p$.test(n)?n:bf}catch{return bf}}function g$(t){return f$(t).substr(0,22)}/**
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
 */function ih(t){return`${t.appName}!${t.appId}`}/**
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
 */const VI=new Map;function BI(t,e){const n=ih(t);zI(n,e),y$(n,e)}function zI(t,e){const n=VI.get(t);if(n)for(const r of n)r(e)}function y$(t,e){const n=v$();n&&n.postMessage({key:t,fid:e}),_$()}let Br=null;function v$(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=t=>{zI(t.data.key,t.data.fid)}),Br}function _$(){VI.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const w$="firebase-installations-database",E$=1,ci="firebase-installations-store";let nd=null;function hg(){return nd||(nd=t$(w$,E$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}})),nd}async function Ku(t,e){const n=ih(t),i=(await hg()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&BI(t,e.fid),e}async function WI(t){const e=ih(t),r=(await hg()).transaction(ci,"readwrite");await r.objectStore(ci).delete(e),await r.done}async function sh(t,e){const n=ih(t),i=(await hg()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&BI(t,a.fid),a}/**
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
 */async function dg(t){let e;const n=await sh(t.appConfig,r=>{const i=C$(r),s=I$(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function C$(t){const e=t||{fid:m$(),registrationStatus:0};return HI(e)}function I$(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=T$(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S$(t)}:{installationEntry:e}}async function T$(t,e){try{const n=await d$(t,e);return Ku(t.appConfig,n)}catch(n){throw OI(n)&&n.customData.serverCode===409?await WI(t.appConfig):await Ku(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S$(t){let e=await T_(t.appConfig);for(;e.registrationStatus===1;)await jI(100),e=await T_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dg(t);return r||n}return e}function T_(t){return sh(t,e=>{if(!e)throw ui.create("installation-not-found");return HI(e)})}function HI(t){return k$(t)?{fid:t.fid,registrationStatus:0}:t}function k$(t){return t.registrationStatus===1&&t.registrationTime+PI<Date.now()}/**
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
 */async function x$({appConfig:t,heartbeatServiceProvider:e},n){const r=N$(t,n),i=u$(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:DI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await UI(()=>fetch(r,a));if(l.ok){const u=await l.json();return LI(u)}else throw await FI("Generate Auth Token",l)}function N$(t,{fid:e}){return`${MI(t)}/${e}/authTokens:generate`}/**
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
 */async function fg(t,e=!1){let n;const r=await sh(t.appConfig,s=>{if(!KI(s))throw ui.create("not-registered");const o=s.authToken;if(!e&&P$(o))return s;if(o.requestStatus===1)return n=R$(t,e),s;{if(!navigator.onLine)throw ui.create("app-offline");const a=b$(s);return n=A$(t,a),a}});return n?await n:r.authToken}async function R$(t,e){let n=await S_(t.appConfig);for(;n.authToken.requestStatus===1;)await jI(100),n=await S_(t.appConfig);const r=n.authToken;return r.requestStatus===0?fg(t,e):r}function S_(t){return sh(t,e=>{if(!KI(e))throw ui.create("not-registered");const n=e.authToken;return O$(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function A$(t,e){try{const n=await x$(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ku(t.appConfig,r),n}catch(n){if(OI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await WI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ku(t.appConfig,r)}throw n}}function KI(t){return t!==void 0&&t.registrationStatus===2}function P$(t){return t.requestStatus===2&&!D$(t)}function D$(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s$}function b$(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O$(t){return t.requestStatus===1&&t.requestTime+PI<Date.now()}/**
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
 */async function M$(t){const e=t,{installationEntry:n,registrationPromise:r}=await dg(e);return r?r.catch(console.error):fg(e).catch(console.error),n.fid}/**
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
 */async function L$(t,e=!1){const n=t;return await F$(n),(await fg(n,e)).token}async function F$(t){const{registrationPromise:e}=await dg(t);e&&await e}/**
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
 */function $$(t){if(!t||!t.options)throw rd("App Configuration");if(!t.name)throw rd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rd(t){return ui.create("missing-app-config-values",{valueName:t})}/**
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
 */const GI="installations",U$="installations-internal",j$=t=>{const e=t.getProvider("app").getImmediate(),n=$$(e),r=ka(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},V$=t=>{const e=t.getProvider("app").getImmediate(),n=ka(e,GI).getImmediate();return{getId:()=>M$(n),getToken:i=>L$(n,i)}};function B$(){Lt(new St(GI,j$,"PUBLIC")),Lt(new St(U$,V$,"PRIVATE"))}B$();Ie(AI,cg);Ie(AI,cg,"esm2017");const id="@firebase/remote-config",k_="0.4.4";/**
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
 */const z$="remote-config";/**
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
 */const W$={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},ft=new gi("remoteconfig","Remote Config",W$);function H$(t){const e=Ke(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class K${constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function G$(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class q${constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:G$()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(s,l),c=new Promise((E,m)=>{e.signal.addEventListener(()=>{const f=new Error("The operation was aborted.");f.name="AbortError",m(f)})});let h;try{await Promise.race([u,c]),h=await u}catch(E){let m="fetch-client-network";throw(E==null?void 0:E.name)==="AbortError"&&(m="fetch-timeout"),ft.create(m,{originalErrorMessage:E==null?void 0:E.message})}let d=h.status;const p=h.headers.get("ETag")||void 0;let g,v;if(h.status===200){let E;try{E=await h.json()}catch(m){throw ft.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}g=E.entries,v=E.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?d=500:v==="NO_CHANGE"?d=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(g={}),d!==304&&d!==200)throw ft.create("fetch-status",{httpStatus:d});return{status:d,eTag:p,config:g}}}/**
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
 */function Q$(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Y$(t){if(!(t instanceof jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class X${constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await Q$(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!Y$(i))throw i;const s={throttleEndTimeMillis:Date.now()+nx(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const J$=60*1e3,Z$=12*60*60*1e3;class e4{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:J$,minimumFetchIntervalMillis:Z$},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Kl(t,e){const n=t.target.error||void 0;return ft.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const br="app_namespace_store",t4="firebase_remote_config",n4=1;function r4(){return new Promise((t,e)=>{try{const n=indexedDB.open(t4,n4);n.onerror=r=>{e(Kl(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(br,{keyPath:"compositeKey"})}}}catch(n){e(ft.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class i4{constructor(e,n,r,i=r4()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([br],"readonly").objectStore(br),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{i(Kl(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(l){i(ft.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([br],"readwrite").objectStore(br),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{s(Kl(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s(ft.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([br],"readwrite").objectStore(br),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{i(Kl(u,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(ft.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class s4{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function o4(){Lt(new St(z$,t,"PUBLIC").setMultipleInstances(!0)),Ie(id,k_),Ie(id,k_,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw ft.create("registration-window");if(!sw())throw ft.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw ft.create("registration-project-id");if(!o)throw ft.create("registration-api-key");if(!a)throw ft.create("registration-app-id");n=n||"firebase";const l=new i4(a,r.name,n),u=new s4(l),c=new Sa(id);c.logLevel=Q.ERROR;const h=new q$(i,Fn,n,s,o,a),d=new X$(h,l),p=new K$(d,l,u,c),g=new e4(r,p,u,l,c);return H$(g),g}}o4();var Of=function(t,e){return Of=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Of(t,e)};function Un(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Of(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Mf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function sa(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function oa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function Nn(t){return typeof t=="function"}function pg(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var sd=pg(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Gu(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var el=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Mf(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(Nn(c))try{c()}catch(v){s=v instanceof sd?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=Mf(h),p=d.next();!p.done;p=d.next()){var g=p.value;try{x_(g)}catch(v){s=s??[],v instanceof sd?s=oa(oa([],sa(s)),sa(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new sd(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)x_(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Gu(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Gu(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),qI=el.EMPTY;function QI(t){return t instanceof el||t&&"closed"in t&&Nn(t.remove)&&Nn(t.add)&&Nn(t.unsubscribe)}function x_(t){Nn(t)?t():t.unsubscribe()}var YI={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},a4={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,oa([t,e],sa(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function l4(t){a4.setTimeout(function(){throw t})}function N_(){}function Gl(t){t()}var mg=function(t){Un(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,QI(n)&&n.add(r)):r.destination=d4,r}return e.create=function(n,r,i){return new Lf(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(el),u4=Function.prototype.bind;function od(t,e){return u4.call(t,e)}var c4=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){El(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){El(r)}else El(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){El(n)}},t}(),Lf=function(t){Un(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Nn(n)||!n)o={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;s&&YI.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&od(n.next,a),error:n.error&&od(n.error,a),complete:n.complete&&od(n.complete,a)}):o=n}return s.destination=new c4(o),s}return e}(mg);function El(t){l4(t)}function h4(t){throw t}var d4={closed:!0,next:N_,error:h4,complete:N_},f4=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function p4(t){return t}function m4(t){return t.length===0?p4:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var R_=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=y4(e)?e:new Lf(e,n,r);return Gl(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=A_(n),new n(function(i,s){var o=new Lf({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[f4]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return m4(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=A_(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function A_(t){var e;return(e=t??YI.Promise)!==null&&e!==void 0?e:Promise}function g4(t){return t&&Nn(t.next)&&Nn(t.error)&&Nn(t.complete)}function y4(t){return t&&t instanceof mg||g4(t)&&QI(t)}(function(t){Un(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(mg);var v4=pg(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),XI=function(t){Un(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new P_(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new v4},e.prototype.next=function(n){var r=this;Gl(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Mf(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Gl(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Gl(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?qI:(this.currentObservers=null,a.push(n),new el(function(){r.currentObservers=null,Gu(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new R_;return n.source=this,n},e.create=function(n,r){return new P_(n,r)},e}(R_),P_=function(t){Un(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:qI},e}(XI),gg={now:function(){return(gg.delegate||Date).now()},delegate:void 0};(function(t){Un(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=gg);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e})(XI);var _4=function(t){Un(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(el),Ff={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Ff.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,oa([t,e],sa(n))):setInterval.apply(void 0,oa([t,e],sa(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},w4=function(t){Un(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Ff.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Ff.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Gu(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(_4),D_=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=gg.now,t}(),E4=function(t){Un(e,t);function e(n,r){r===void 0&&(r=D_.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(D_);new E4(w4);pg(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const C4="[DEFAULT]",I4=I.createContext(void 0),T4=I.createContext(!1),S4="4.2.2",k4=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function x4(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=I.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=Zx().find(o=>o.name===(n||C4));if(s){if(e&&k4(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=I.version||"unknown";return Ie("react",o),Ie("reactfire",S4),Up(e,n)}},[t.firebaseApp,e,n]);return I.createElement(I4.Provider,{value:i},I.createElement(T4.Provider,Object.assign({value:r??!1},t)))}/**
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
 */var Rr,Lr;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Lr||(Lr={}));Object.freeze((Rr={},Rr[Lr.added]=nF,Rr[Lr.removed]=sF,Rr[Lr.changed]=rF,Rr[Lr.moved]=iF,Rr[Lr.value]=tF,Rr));const N4=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=N4);const R4=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=R4);const A4=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=A4);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);I.createContext(void 0);var JI={exports:{}},Nt={},ZI={exports:{}},eT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var V=D.length;D.push(U);e:for(;0<V;){var _e=V-1>>>1,Re=D[_e];if(0<i(Re,U))D[_e]=U,D[V]=Re,V=_e;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],V=D.pop();if(V!==U){D[0]=V;e:for(var _e=0,Re=D.length,sl=Re>>>1;_e<sl;){var xr=2*(_e+1)-1,Ih=D[xr],Nr=xr+1,ol=D[Nr];if(0>i(Ih,V))Nr<Re&&0>i(ol,Ih)?(D[_e]=ol,D[Nr]=V,_e=Nr):(D[_e]=Ih,D[xr]=V,_e=xr);else if(Nr<Re&&0>i(ol,V))D[_e]=ol,D[Nr]=V,_e=Nr;else break e}}return U}function i(D,U){var V=D.sortIndex-U.sortIndex;return V!==0?V:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function w(D){if(v=!1,y(D),!g)if(n(l)!==null)g=!0,Eh(x);else{var U=n(u);U!==null&&Ch(w,U.startTime-D)}}function x(D,U){g=!1,v&&(v=!1,m(b),b=-1),p=!0;var V=d;try{for(y(U),h=n(l);h!==null&&(!(h.expirationTime>U)||D&&!Vt());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var Re=_e(h.expirationTime<=U);U=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),y(U)}else r(l);h=n(l)}if(h!==null)var sl=!0;else{var xr=n(u);xr!==null&&Ch(w,xr.startTime-U),sl=!1}return sl}finally{h=null,d=V,p=!1}}var R=!1,P=null,b=-1,ee=5,z=-1;function Vt(){return!(t.unstable_now()-z<ee)}function Vs(){if(P!==null){var D=t.unstable_now();z=D;var U=!0;try{U=P(!0,D)}finally{U?Bs():(R=!1,P=null)}}else R=!1}var Bs;if(typeof f=="function")Bs=function(){f(Vs)};else if(typeof MessageChannel<"u"){var ay=new MessageChannel,nk=ay.port2;ay.port1.onmessage=Vs,Bs=function(){nk.postMessage(null)}}else Bs=function(){E(Vs,0)};function Eh(D){P=D,R||(R=!0,Bs())}function Ch(D,U){b=E(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Eh(x))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var V=d;d=U;try{return D()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=d;d=D;try{return U()}finally{d=V}},t.unstable_scheduleCallback=function(D,U,V){var _e=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?_e+V:_e):V=_e,D){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=V+Re,D={id:c++,callback:U,priorityLevel:D,startTime:V,expirationTime:Re,sortIndex:-1},V>_e?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(v?(m(b),b=-1):v=!0,Ch(w,V-_e))):(D.sortIndex=Re,e(l,D),g||p||(g=!0,Eh(x))),D},t.unstable_shouldYield=Vt,t.unstable_wrapCallback=function(D){var U=d;return function(){var V=d;d=U;try{return D.apply(this,arguments)}finally{d=V}}}})(eT);ZI.exports=eT;var P4=ZI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT=I,xt=P4;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nT=new Set,aa={};function Ti(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(aa[t]=e,t=0;t<e.length;t++)nT.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,D4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b_={},O_={};function b4(t){return $f.call(O_,t)?!0:$f.call(b_,t)?!1:D4.test(t)?O_[t]=!0:(b_[t]=!0,!1)}function O4(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M4(t,e,n,r){if(e===null||typeof e>"u"||O4(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var yg=/[\-:]([a-z])/g;function vg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yg,vg);Ge[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yg,vg);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yg,vg);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function _g(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M4(e,n,i,r)&&(n=null),r||i===null?b4(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=tT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),rT=Symbol.for("react.provider"),iT=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Cg=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),sT=Symbol.for("react.offscreen"),M_=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=M_&&t[M_]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,ad;function ao(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function ud(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function L4(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Oi:return"Portal";case Uf:return"Profiler";case wg:return"StrictMode";case jf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iT:return(t.displayName||"Context")+".Consumer";case rT:return(t._context.displayName||"Context")+".Provider";case Eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cg:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function F4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $4(t){var e=oT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Il(t){t._valueTracker||(t._valueTracker=$4(t))}function aT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=oT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zf(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function L_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lT(t,e){e=e.checked,e!=null&&_g(t,"checked",e,!1)}function Wf(t,e){lT(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function F_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(lo(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function uT(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function U_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,hT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U4=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){U4.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function dT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function fT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j4=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(j4[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function Ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xf=null,ns=null,rs=null;function j_(t){if(t=rl(t)){if(typeof Xf!="function")throw Error(C(280));var e=t.stateNode;e&&(e=ch(e),Xf(t.stateNode,t.type,e))}}function pT(t){ns?rs?rs.push(t):rs=[t]:ns=t}function mT(){if(ns){var t=ns,e=rs;if(rs=ns=null,j_(t),e)for(t=0;t<e.length;t++)j_(e[t])}}function gT(t,e){return t(e)}function yT(){}var cd=!1;function vT(t,e,n){if(cd)return t(e,n);cd=!0;try{return gT(t,e,n)}finally{cd=!1,(ns!==null||rs!==null)&&(yT(),mT())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var r=ch(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Jf=!1;if(Dn)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Jf=!1}function V4(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Io=!1,Qu=null,Yu=!1,Zf=null,B4={onError:function(t){Io=!0,Qu=t}};function z4(t,e,n,r,i,s,o,a,l){Io=!1,Qu=null,V4.apply(B4,arguments)}function W4(t,e,n,r,i,s,o,a,l){if(z4.apply(this,arguments),Io){if(Io){var u=Qu;Io=!1,Qu=null}else throw Error(C(198));Yu||(Yu=!0,Zf=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _T(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function V_(t){if(Si(t)!==t)throw Error(C(188))}function H4(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return V_(i),t;if(s===r)return V_(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function wT(t){return t=H4(t),t!==null?ET(t):null}function ET(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ET(t);if(e!==null)return e;t=t.sibling}return null}var CT=xt.unstable_scheduleCallback,B_=xt.unstable_cancelCallback,K4=xt.unstable_shouldYield,G4=xt.unstable_requestPaint,we=xt.unstable_now,q4=xt.unstable_getCurrentPriorityLevel,Tg=xt.unstable_ImmediatePriority,IT=xt.unstable_UserBlockingPriority,Xu=xt.unstable_NormalPriority,Q4=xt.unstable_LowPriority,TT=xt.unstable_IdlePriority,oh=null,hn=null;function Y4(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(oh,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Z4,X4=Math.log,J4=Math.LN2;function Z4(t){return t>>>=0,t===0?32:31-(X4(t)/J4|0)|0}var Sl=64,kl=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=uo(a):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function eU(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tU(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=eU(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ep(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ST(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function hd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function nU(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Sg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function kT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xT,kg,NT,RT,AT,tp=!1,xl=[],ar=null,lr=null,ur=null,ca=new Map,ha=new Map,Qn=[],rU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function z_(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&kg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iU(t,e,n,r,i){switch(e){case"focusin":return ar=Xs(ar,t,e,n,r,i),!0;case"dragenter":return lr=Xs(lr,t,e,n,r,i),!0;case"mouseover":return ur=Xs(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ca.set(s,Xs(ca.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ha.set(s,Xs(ha.get(s)||null,t,e,n,r,i)),!0}return!1}function PT(t){var e=zr(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=_T(n),e!==null){t.blockedOn=e,AT(t.priority,function(){NT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=np(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yf=r,n.target.dispatchEvent(r),Yf=null}else return e=rl(n),e!==null&&kg(e),t.blockedOn=n,!1;e.shift()}return!0}function W_(t,e,n){ql(t)&&n.delete(e)}function sU(){tp=!1,ar!==null&&ql(ar)&&(ar=null),lr!==null&&ql(lr)&&(lr=null),ur!==null&&ql(ur)&&(ur=null),ca.forEach(W_),ha.forEach(W_)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,tp||(tp=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,sU)))}function da(t){function e(i){return Js(i,t)}if(0<xl.length){Js(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Js(ar,t),lr!==null&&Js(lr,t),ur!==null&&Js(ur,t),ca.forEach(e),ha.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)PT(n),n.blockedOn===null&&Qn.shift()}var is=jn.ReactCurrentBatchConfig,Zu=!0;function oU(t,e,n,r){var i=J,s=is.transition;is.transition=null;try{J=1,xg(t,e,n,r)}finally{J=i,is.transition=s}}function aU(t,e,n,r){var i=J,s=is.transition;is.transition=null;try{J=4,xg(t,e,n,r)}finally{J=i,is.transition=s}}function xg(t,e,n,r){if(Zu){var i=np(t,e,n,r);if(i===null)Ed(t,e,r,ec,n),z_(t,r);else if(iU(i,t,e,n,r))r.stopPropagation();else if(z_(t,r),e&4&&-1<rU.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&xT(s),s=np(t,e,n,r),s===null&&Ed(t,e,r,ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ed(t,e,r,null,n)}}var ec=null;function np(t,e,n,r){if(ec=null,t=Ig(r),t=zr(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_T(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function DT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q4()){case Tg:return 1;case IT:return 4;case Xu:case Q4:return 16;case TT:return 536870912;default:return 16}default:return 16}}var Zn=null,Ng=null,Ql=null;function bT(){if(Ql)return Ql;var t,e=Ng,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function H_(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nl:H_,this.isPropagationStopped=H_,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rg=Rt(Us),nl=pe({},Us,{view:0,detail:0}),lU=Rt(nl),dd,fd,Zs,ah=pe({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(dd=t.screenX-Zs.screenX,fd=t.screenY-Zs.screenY):fd=dd=0,Zs=t),dd)},movementY:function(t){return"movementY"in t?t.movementY:fd}}),K_=Rt(ah),uU=pe({},ah,{dataTransfer:0}),cU=Rt(uU),hU=pe({},nl,{relatedTarget:0}),pd=Rt(hU),dU=pe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),fU=Rt(dU),pU=pe({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mU=Rt(pU),gU=pe({},Us,{data:0}),G_=Rt(gU),yU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wU(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_U[t])?!!e[t]:!1}function Ag(){return wU}var EU=pe({},nl,{key:function(t){if(t.key){var e=yU[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vU[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CU=Rt(EU),IU=pe({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q_=Rt(IU),TU=pe({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),SU=Rt(TU),kU=pe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),xU=Rt(kU),NU=pe({},ah,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RU=Rt(NU),AU=[9,13,27,32],Pg=Dn&&"CompositionEvent"in window,To=null;Dn&&"documentMode"in document&&(To=document.documentMode);var PU=Dn&&"TextEvent"in window&&!To,OT=Dn&&(!Pg||To&&8<To&&11>=To),Q_=String.fromCharCode(32),Y_=!1;function MT(t,e){switch(t){case"keyup":return AU.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function LT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function DU(t,e){switch(t){case"compositionend":return LT(e);case"keypress":return e.which!==32?null:(Y_=!0,Q_);case"textInput":return t=e.data,t===Q_&&Y_?null:t;default:return null}}function bU(t,e){if(Li)return t==="compositionend"||!Pg&&MT(t,e)?(t=bT(),Ql=Ng=Zn=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return OT&&e.locale!=="ko"?null:e.data;default:return null}}var OU={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OU[t.type]:e==="textarea"}function FT(t,e,n,r){pT(r),e=tc(e,"onChange"),0<e.length&&(n=new Rg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var So=null,fa=null;function MU(t){qT(t,0)}function lh(t){var e=Ui(t);if(aT(e))return t}function LU(t,e){if(t==="change")return e}var $T=!1;if(Dn){var md;if(Dn){var gd="oninput"in document;if(!gd){var J_=document.createElement("div");J_.setAttribute("oninput","return;"),gd=typeof J_.oninput=="function"}md=gd}else md=!1;$T=md&&(!document.documentMode||9<document.documentMode)}function Z_(){So&&(So.detachEvent("onpropertychange",UT),fa=So=null)}function UT(t){if(t.propertyName==="value"&&lh(fa)){var e=[];FT(e,fa,t,Ig(t)),vT(MU,e)}}function FU(t,e,n){t==="focusin"?(Z_(),So=e,fa=n,So.attachEvent("onpropertychange",UT)):t==="focusout"&&Z_()}function $U(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lh(fa)}function UU(t,e){if(t==="click")return lh(e)}function jU(t,e){if(t==="input"||t==="change")return lh(e)}function VU(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:VU;function pa(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function e0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t0(t,e){var n=e0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e0(n)}}function jT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function VT(){for(var t=window,e=qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qu(t.document)}return e}function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BU(t){var e=VT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jT(n.ownerDocument.documentElement,n)){if(r!==null&&Dg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=t0(n,s);var o=t0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zU=Dn&&"documentMode"in document&&11>=document.documentMode,Fi=null,rp=null,ko=null,ip=!1;function n0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ip||Fi==null||Fi!==qu(r)||(r=Fi,"selectionStart"in r&&Dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&pa(ko,r)||(ko=r,r=tc(rp,"onSelect"),0<r.length&&(e=new Rg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},yd={},BT={};Dn&&(BT=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function uh(t){if(yd[t])return yd[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in BT)return yd[t]=e[n];return t}var zT=uh("animationend"),WT=uh("animationiteration"),HT=uh("animationstart"),KT=uh("transitionend"),GT=new Map,r0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){GT.set(t,e),Ti(e,[t])}for(var vd=0;vd<r0.length;vd++){var _d=r0[vd],WU=_d.toLowerCase(),HU=_d[0].toUpperCase()+_d.slice(1);Tr(WU,"on"+HU)}Tr(zT,"onAnimationEnd");Tr(WT,"onAnimationIteration");Tr(HT,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(KT,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KU=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function i0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,W4(r,e,void 0,t),t.currentTarget=null}function qT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;i0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;i0(i,a,u),s=l}}}if(Yu)throw t=Zf,Yu=!1,Zf=null,t}function se(t,e){var n=e[up];n===void 0&&(n=e[up]=new Set);var r=t+"__bubble";n.has(r)||(QT(e,t,2,!1),n.add(r))}function wd(t,e,n){var r=0;e&&(r|=4),QT(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[Al]){t[Al]=!0,nT.forEach(function(n){n!=="selectionchange"&&(KU.has(n)||wd(n,!1,t),wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,wd("selectionchange",!1,e))}}function QT(t,e,n,r){switch(DT(e)){case 1:var i=oU;break;case 4:i=aU;break;default:i=xg}n=i.bind(null,e,n,t),i=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ed(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vT(function(){var u=s,c=Ig(n),h=[];e:{var d=GT.get(t);if(d!==void 0){var p=Rg,g=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":p=CU;break;case"focusin":g="focus",p=pd;break;case"focusout":g="blur",p=pd;break;case"beforeblur":case"afterblur":p=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=K_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=cU;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=SU;break;case zT:case WT:case HT:p=fU;break;case KT:p=xU;break;case"scroll":p=lU;break;case"wheel":p=RU;break;case"copy":case"cut":case"paste":p=mU;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q_}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=ua(f,m),w!=null&&v.push(ga(f,w,y)))),E)break;f=f.return}0<v.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Yf&&(g=n.relatedTarget||n.fromElement)&&(zr(g)||g[bn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?zr(g):null,g!==null&&(E=Si(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=K_,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=q_,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=p==null?d:Ui(p),y=g==null?d:Ui(g),d=new v(w,f+"leave",p,n,c),d.target=E,d.relatedTarget=y,w=null,zr(c)===u&&(v=new v(m,f+"enter",g,n,c),v.target=y,v.relatedTarget=E,w=v),E=w,p&&g)t:{for(v=p,m=g,f=0,y=v;y;y=Ni(y))f++;for(y=0,w=m;w;w=Ni(w))y++;for(;0<f-y;)v=Ni(v),f--;for(;0<y-f;)m=Ni(m),y--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ni(v),m=Ni(m)}v=null}else v=null;p!==null&&s0(h,d,p,v,!1),g!==null&&E!==null&&s0(h,E,g,v,!0)}}e:{if(d=u?Ui(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var x=LU;else if(X_(d))if($T)x=jU;else{x=$U;var R=FU}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=UU);if(x&&(x=x(t,u))){FT(h,x,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Hf(d,"number",d.value)}switch(R=u?Ui(u):window,t){case"focusin":(X_(R)||R.contentEditable==="true")&&(Fi=R,rp=u,ko=null);break;case"focusout":ko=rp=Fi=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,n0(h,n,c);break;case"selectionchange":if(zU)break;case"keydown":case"keyup":n0(h,n,c)}var P;if(Pg)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Li?MT(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(OT&&n.locale!=="ko"&&(Li||b!=="onCompositionStart"?b==="onCompositionEnd"&&Li&&(P=bT()):(Zn=c,Ng="value"in Zn?Zn.value:Zn.textContent,Li=!0)),R=tc(u,b),0<R.length&&(b=new G_(b,t,null,n,c),h.push({event:b,listeners:R}),P?b.data=P:(P=LT(n),P!==null&&(b.data=P)))),(P=PU?DU(t,n):bU(t,n))&&(u=tc(u,"onBeforeInput"),0<u.length&&(c=new G_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}qT(h,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ua(t,n),s!=null&&r.unshift(ga(t,s,i)),s=ua(t,e),s!=null&&r.push(ga(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function s0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ua(n,s),l!=null&&o.unshift(ga(n,l,a))):i||(l=ua(n,s),l!=null&&o.push(ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GU=/\r\n?/g,qU=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(GU,`
`).replace(qU,"")}function Pl(t,e,n){if(e=o0(e),o0(t)!==e&&n)throw Error(C(425))}function nc(){}var sp=null,op=null;function ap(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,QU=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,YU=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(XU)}:lp;function XU(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);da(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function l0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),on="__reactFiber$"+js,ya="__reactProps$"+js,bn="__reactContainer$"+js,up="__reactEvents$"+js,JU="__reactListeners$"+js,ZU="__reactHandles$"+js;function zr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=l0(t);t!==null;){if(n=t[on])return n;t=l0(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[on]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function ch(t){return t[ya]||null}var cp=[],ji=-1;function Sr(t){return{current:t}}function le(t){0>ji||(t.current=cp[ji],cp[ji]=null,ji--)}function ie(t,e){ji++,cp[ji]=t.current,t.current=e}var Er={},ot=Sr(Er),yt=Sr(!1),hi=Er;function Es(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function rc(){le(yt),le(ot)}function u0(t,e,n){if(ot.current!==Er)throw Error(C(168));ie(ot,e),ie(yt,n)}function YT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,F4(t)||"Unknown",i));return pe({},n,r)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,hi=ot.current,ie(ot,t),ie(yt,yt.current),!0}function c0(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=YT(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,le(yt),le(ot),ie(ot,t)):le(yt),ie(yt,n)}var _n=null,hh=!1,Id=!1;function XT(t){_n===null?_n=[t]:_n.push(t)}function ej(t){hh=!0,XT(t)}function kr(){if(!Id&&_n!==null){Id=!0;var t=0,e=J;try{var n=_n;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,hh=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),CT(Tg,kr),i}finally{J=e,Id=!1}}return null}var Vi=[],Bi=0,sc=null,oc=0,At=[],Pt=0,di=null,Tn=1,Sn="";function Or(t,e){Vi[Bi++]=oc,Vi[Bi++]=sc,sc=t,oc=e}function JT(t,e,n){At[Pt++]=Tn,At[Pt++]=Sn,At[Pt++]=di,di=t;var r=Tn;t=Sn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Jt(e)+i|n<<i|r,Sn=s+t}else Tn=1<<s|n<<i|r,Sn=t}function bg(t){t.return!==null&&(Or(t,1),JT(t,1,0))}function Og(t){for(;t===sc;)sc=Vi[--Bi],Vi[Bi]=null,oc=Vi[--Bi],Vi[Bi]=null;for(;t===di;)di=At[--Pt],At[Pt]=null,Sn=At[--Pt],At[Pt]=null,Tn=At[--Pt],At[Pt]=null}var Tt=null,Ct=null,ce=!1,Ht=null;function ZT(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function h0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:Tn,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Ct=null,!0):!1;default:return!1}}function hp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dp(t){if(ce){var e=Ct;if(e){var n=e;if(!h0(t,e)){if(hp(t))throw Error(C(418));e=cr(n.nextSibling);var r=Tt;e&&h0(t,e)?ZT(r,n):(t.flags=t.flags&-4097|2,ce=!1,Tt=t)}}else{if(hp(t))throw Error(C(418));t.flags=t.flags&-4097|2,ce=!1,Tt=t}}}function d0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Dl(t){if(t!==Tt)return!1;if(!ce)return d0(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ap(t.type,t.memoizedProps)),e&&(e=Ct)){if(hp(t))throw eS(),Error(C(418));for(;e;)ZT(t,e),e=cr(e.nextSibling)}if(d0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Tt?cr(t.stateNode.nextSibling):null;return!0}function eS(){for(var t=Ct;t;)t=cr(t.nextSibling)}function Cs(){Ct=Tt=null,ce=!1}function Mg(t){Ht===null?Ht=[t]:Ht.push(t)}var tj=jn.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ac=Sr(null),lc=null,zi=null,Lg=null;function Fg(){Lg=zi=lc=null}function $g(t){var e=ac.current;le(ac),t._currentValue=e}function fp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){lc=t,Lg=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Lg!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(lc===null)throw Error(C(308));zi=t,lc.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var Wr=null;function Ug(t){Wr===null?Wr=[t]:Wr.push(t)}function tS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ug(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function jg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Ug(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sg(t,n)}}function f0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=pe({},h,d);break e;case 2:Wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pi|=o,t.lanes=o,t.memoizedState=h}}function p0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var rS=new tT.Component().refs;function pp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=fr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),Xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=fr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Zt(e,t,i,r),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=fr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Zt(e,t,r,n),Xl(e,t,r))}};function m0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(n,r)||!pa(i,s):!0}function iS(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=vt(e)?hi:ot.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function g0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function mp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=rS,jg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=vt(e)?hi:ot.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===rS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function y0(t){var e=t._init;return e(t._payload)}function sS(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=pr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,w){return f===null||f.tag!==6?(f=Ad(y,m.mode,w),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,w){var x=y.type;return x===Mi?c(m,f,y.props.children,w,y.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===zn&&y0(x)===f.type)?(w=i(f,y.props),w.ref=eo(m,f,y),w.return=m,w):(w=ru(y.type,y.key,y.props,null,m.mode,w),w.ref=eo(m,f,y),w.return=m,w)}function u(m,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Pd(y,m.mode,w),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,w,x){return f===null||f.tag!==7?(f=Jr(y,m.mode,w,x),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ad(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cl:return y=ru(f.type,f.key,f.props,null,m.mode,y),y.ref=eo(m,null,f),y.return=m,y;case Oi:return f=Pd(f,m.mode,y),f.return=m,f;case zn:var w=f._init;return h(m,w(f._payload),y)}if(lo(f)||Qs(f))return f=Jr(f,m.mode,y,null),f.return=m,f;bl(m,f)}return null}function d(m,f,y,w){var x=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cl:return y.key===x?l(m,f,y,w):null;case Oi:return y.key===x?u(m,f,y,w):null;case zn:return x=y._init,d(m,f,x(y._payload),w)}if(lo(y)||Qs(y))return x!==null?null:c(m,f,y,w,null);bl(m,y)}return null}function p(m,f,y,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(f,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Cl:return m=m.get(w.key===null?y:w.key)||null,l(f,m,w,x);case Oi:return m=m.get(w.key===null?y:w.key)||null,u(f,m,w,x);case zn:var R=w._init;return p(m,f,y,R(w._payload),x)}if(lo(w)||Qs(w))return m=m.get(y)||null,c(f,m,w,x,null);bl(f,w)}return null}function g(m,f,y,w){for(var x=null,R=null,P=f,b=f=0,ee=null;P!==null&&b<y.length;b++){P.index>b?(ee=P,P=null):ee=P.sibling;var z=d(m,P,y[b],w);if(z===null){P===null&&(P=ee);break}t&&P&&z.alternate===null&&e(m,P),f=s(z,f,b),R===null?x=z:R.sibling=z,R=z,P=ee}if(b===y.length)return n(m,P),ce&&Or(m,b),x;if(P===null){for(;b<y.length;b++)P=h(m,y[b],w),P!==null&&(f=s(P,f,b),R===null?x=P:R.sibling=P,R=P);return ce&&Or(m,b),x}for(P=r(m,P);b<y.length;b++)ee=p(P,m,b,y[b],w),ee!==null&&(t&&ee.alternate!==null&&P.delete(ee.key===null?b:ee.key),f=s(ee,f,b),R===null?x=ee:R.sibling=ee,R=ee);return t&&P.forEach(function(Vt){return e(m,Vt)}),ce&&Or(m,b),x}function v(m,f,y,w){var x=Qs(y);if(typeof x!="function")throw Error(C(150));if(y=x.call(y),y==null)throw Error(C(151));for(var R=x=null,P=f,b=f=0,ee=null,z=y.next();P!==null&&!z.done;b++,z=y.next()){P.index>b?(ee=P,P=null):ee=P.sibling;var Vt=d(m,P,z.value,w);if(Vt===null){P===null&&(P=ee);break}t&&P&&Vt.alternate===null&&e(m,P),f=s(Vt,f,b),R===null?x=Vt:R.sibling=Vt,R=Vt,P=ee}if(z.done)return n(m,P),ce&&Or(m,b),x;if(P===null){for(;!z.done;b++,z=y.next())z=h(m,z.value,w),z!==null&&(f=s(z,f,b),R===null?x=z:R.sibling=z,R=z);return ce&&Or(m,b),x}for(P=r(m,P);!z.done;b++,z=y.next())z=p(P,m,b,z.value,w),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?b:z.key),f=s(z,f,b),R===null?x=z:R.sibling=z,R=z);return t&&P.forEach(function(Vs){return e(m,Vs)}),ce&&Or(m,b),x}function E(m,f,y,w){if(typeof y=="object"&&y!==null&&y.type===Mi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cl:e:{for(var x=y.key,R=f;R!==null;){if(R.key===x){if(x=y.type,x===Mi){if(R.tag===7){n(m,R.sibling),f=i(R,y.props.children),f.return=m,m=f;break e}}else if(R.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===zn&&y0(x)===R.type){n(m,R.sibling),f=i(R,y.props),f.ref=eo(m,R,y),f.return=m,m=f;break e}n(m,R);break}else e(m,R);R=R.sibling}y.type===Mi?(f=Jr(y.props.children,m.mode,w,y.key),f.return=m,m=f):(w=ru(y.type,y.key,y.props,null,m.mode,w),w.ref=eo(m,f,y),w.return=m,m=w)}return o(m);case Oi:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Pd(y,m.mode,w),f.return=m,m=f}return o(m);case zn:return R=y._init,E(m,f,R(y._payload),w)}if(lo(y))return g(m,f,y,w);if(Qs(y))return v(m,f,y,w);bl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Ad(y,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return E}var Is=sS(!0),oS=sS(!1),il={},dn=Sr(il),va=Sr(il),_a=Sr(il);function Hr(t){if(t===il)throw Error(C(174));return t}function Vg(t,e){switch(ie(_a,e),ie(va,t),ie(dn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gf(e,t)}le(dn),ie(dn,e)}function Ts(){le(dn),le(va),le(_a)}function aS(t){Hr(_a.current);var e=Hr(dn.current),n=Gf(e,t.type);e!==n&&(ie(va,t),ie(dn,n))}function Bg(t){va.current===t&&(le(dn),le(va))}var de=Sr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Td=[];function zg(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var Jl=jn.ReactCurrentDispatcher,Sd=jn.ReactCurrentBatchConfig,fi=0,fe=null,ke=null,be=null,hc=!1,xo=!1,wa=0,nj=0;function Qe(){throw Error(C(321))}function Wg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Hg(t,e,n,r,i,s){if(fi=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?oj:aj,t=n(r,i),xo){s=0;do{if(xo=!1,wa=0,25<=s)throw Error(C(301));s+=1,be=ke=null,e.updateQueue=null,Jl.current=lj,t=n(r,i)}while(xo)}if(Jl.current=dc,e=ke!==null&&ke.next!==null,fi=0,be=ke=fe=null,hc=!1,e)throw Error(C(300));return t}function Kg(){var t=wa!==0;return wa=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?fe.memoizedState=be=t:be=be.next=t,be}function Ut(){if(ke===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=be===null?fe.memoizedState:be.next;if(e!==null)be=e,ke=t;else{if(t===null)throw Error(C(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},be===null?fe.memoizedState=be=t:be=be.next=t}return be}function Ea(t,e){return typeof e=="function"?e(t):e}function kd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,fe.lanes|=c,pi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lS(){}function uS(t,e){var n=fe,r=Ut(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Gg(dS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Ca(9,hS.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(C(349));fi&30||cS(n,e,i)}return i}function cS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hS(t,e,n,r){e.value=n,e.getSnapshot=r,fS(e)&&pS(t)}function dS(t,e,n){return n(function(){fS(e)&&pS(t)})}function fS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function pS(t){var e=On(t,1);e!==null&&Zt(e,t,1,-1)}function v0(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=sj.bind(null,fe,t),[e.memoizedState,t]}function Ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mS(){return Ut().memoizedState}function Zl(t,e,n,r){var i=rn();fe.flags|=t,i.memoizedState=Ca(1|e,n,void 0,r===void 0?null:r)}function fh(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Wg(r,o.deps)){i.memoizedState=Ca(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Ca(1|e,n,s,r)}function _0(t,e){return Zl(8390656,8,t,e)}function Gg(t,e){return fh(2048,8,t,e)}function gS(t,e){return fh(4,2,t,e)}function yS(t,e){return fh(4,4,t,e)}function vS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _S(t,e,n){return n=n!=null?n.concat([t]):null,fh(4,4,vS.bind(null,e,t),n)}function qg(){}function wS(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ES(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function CS(t,e,n){return fi&21?(tn(n,e)||(n=ST(),fe.lanes|=n,pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function rj(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{J=n,Sd.transition=r}}function IS(){return Ut().memoizedState}function ij(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TS(t))SS(e,n);else if(n=tS(t,e,n,r),n!==null){var i=ut();Zt(n,t,r,i),kS(n,e,r)}}function sj(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TS(t))SS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ug(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=tS(t,e,i,r),n!==null&&(i=ut(),Zt(n,t,r,i),kS(n,e,r))}}function TS(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function SS(t,e){xo=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sg(t,n)}}var dc={readContext:$t,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},oj={readContext:$t,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:_0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,vS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ij.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:v0,useDebugValue:qg,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=v0(!1),e=t[0];return t=rj.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=rn();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Fe===null)throw Error(C(349));fi&30||cS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_0(dS.bind(null,r,s,t),[t]),r.flags|=2048,Ca(9,hS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Fe.identifierPrefix;if(ce){var n=Sn,r=Tn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nj++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aj={readContext:$t,useCallback:wS,useContext:$t,useEffect:Gg,useImperativeHandle:_S,useInsertionEffect:gS,useLayoutEffect:yS,useMemo:ES,useReducer:kd,useRef:mS,useState:function(){return kd(Ea)},useDebugValue:qg,useDeferredValue:function(t){var e=Ut();return CS(e,ke.memoizedState,t)},useTransition:function(){var t=kd(Ea)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:lS,useSyncExternalStore:uS,useId:IS,unstable_isNewReconciler:!1},lj={readContext:$t,useCallback:wS,useContext:$t,useEffect:Gg,useImperativeHandle:_S,useInsertionEffect:gS,useLayoutEffect:yS,useMemo:ES,useReducer:xd,useRef:mS,useState:function(){return xd(Ea)},useDebugValue:qg,useDeferredValue:function(t){var e=Ut();return ke===null?e.memoizedState=t:CS(e,ke.memoizedState,t)},useTransition:function(){var t=xd(Ea)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:lS,useSyncExternalStore:uS,useId:IS,unstable_isNewReconciler:!1};function Ss(t,e){try{var n="",r=e;do n+=L4(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uj=typeof WeakMap=="function"?WeakMap:Map;function xS(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pc||(pc=!0,kp=r),gp(t,e)},n}function NS(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gp(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function w0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uj;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ij.bind(null,t,e,n),e.then(t,t))}function E0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function C0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var cj=jn.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?oS(e,null,n,r):Is(e,t.child,n,r)}function I0(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=Hg(t,e,n,r,s,i),n=Kg(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ce&&n&&bg(e),e.flags|=1,at(t,e,r,i),e.child)}function T0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ny(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,RS(t,e,s,r,i)):(t=ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function RS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(pa(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return yp(t,e,n,r,i)}function AS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Hi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Hi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Hi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Hi,Et),Et|=r;return at(t,e,i,n),e.child}function PS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yp(t,e,n,r,i){var s=vt(n)?hi:ot.current;return s=Es(e,s),ss(e,i),n=Hg(t,e,n,r,s,i),r=Kg(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ce&&r&&bg(e),e.flags|=1,at(t,e,n,i),e.child)}function S0(t,e,n,r,i){if(vt(n)){var s=!0;ic(e)}else s=!1;if(ss(e,i),e.stateNode===null)eu(t,e),iS(e,n,r),mp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=vt(n)?hi:ot.current,u=Es(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&g0(e,o,r,u),Wn=!1;var d=e.memoizedState;o.state=d,uc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||yt.current||Wn?(typeof c=="function"&&(pp(e,n,c,r),l=e.memoizedState),(a=Wn||m0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=vt(n)?hi:ot.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&g0(e,o,r,l),Wn=!1,d=e.memoizedState,o.state=d,uc(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||yt.current||Wn?(typeof p=="function"&&(pp(e,n,p,r),g=e.memoizedState),(u=Wn||m0(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return vp(t,e,n,r,s,i)}function vp(t,e,n,r,i,s){PS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&c0(e,n,!1),Mn(t,e,s);r=e.stateNode,cj.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):at(t,e,a,s),e.memoizedState=r.state,i&&c0(e,n,!0),e.child}function DS(t){var e=t.stateNode;e.pendingContext?u0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&u0(t,e.context,!1),Vg(t,e.containerInfo)}function k0(t,e,n,r,i){return Cs(),Mg(i),e.flags|=256,at(t,e,n,r),e.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function bS(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(de,i&1),t===null)return dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gh(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=_p,t):Qg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hj(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_p,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qg(t,e){return e=gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,r){return r!==null&&Mg(r),Is(e,t.child,null,n),t=Qg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hj(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nd(Error(C(422))),Ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gh({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=_p,s);if(!(e.mode&1))return Ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Nd(s,r,void 0),Ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),Zt(r,t,i,-1))}return ty(),r=Nd(Error(C(421))),Ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Tj.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=cr(i.nextSibling),Tt=e,ce=!0,Ht=null,t!==null&&(At[Pt++]=Tn,At[Pt++]=Sn,At[Pt++]=di,Tn=t.id,Sn=t.overflow,di=e),e=Qg(e,r.children),e.flags|=4096,e)}function x0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fp(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function OS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&x0(t,n,e);else if(t.tag===19)x0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dj(t,e,n){switch(e.tag){case 3:DS(e),Cs();break;case 5:aS(e);break;case 1:vt(e.type)&&ic(e);break;case 4:Vg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?bS(t,e,n):(ie(de,de.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return OS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,AS(t,e,n)}return Mn(t,e,n)}var MS,Ep,LS,FS;MS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ep=function(){};LS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(dn.current);var s=null;switch(n){case"input":i=zf(t,i),r=zf(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nc)}qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(t,e,n,r){n!==r&&(e.flags|=4)};function to(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fj(t,e,n){var r=e.pendingProps;switch(Og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return vt(e.type)&&rc(),Ye(e),null;case 3:return r=e.stateNode,Ts(),le(yt),le(ot),zg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Rp(Ht),Ht=null))),Ep(t,e),Ye(e),null;case 5:Bg(e);var i=Hr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)LS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ye(e),null}if(t=Hr(dn.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[ya]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)se(co[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":L_(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":$_(r,s),se("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Il(r),F_(r,s,!0);break;case"textarea":Il(r),U_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[ya]=r,MS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qf(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)se(co[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":L_(t,r),i=zf(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),se("invalid",t);break;case"textarea":$_(t,r),i=Kf(t,r),se("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&_g(t,s,l,o))}switch(n){case"input":Il(t),F_(t,r,!1);break;case"textarea":Il(t),U_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)FS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Hr(_a.current),Hr(dn.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return Ye(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&Ct!==null&&e.mode&1&&!(e.flags&128))eS(),Cs(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[on]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ht!==null&&(Rp(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Ne===0&&(Ne=3):ty())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ts(),Ep(t,e),t===null&&ma(e.stateNode.containerInfo),Ye(e),null;case 10:return $g(e.type._context),Ye(e),null;case 17:return vt(e.type)&&rc(),Ye(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)to(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,to(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>ks&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Ye(e),null}else 2*we()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return ey(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function pj(t,e){switch(Og(e),e.tag){case 1:return vt(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),le(yt),le(ot),zg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bg(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return Ts(),null;case 10:return $g(e.type._context),null;case 22:case 23:return ey(),null;case 24:return null;default:return null}}var Ml=!1,tt=!1,mj=typeof WeakSet=="function"?WeakSet:Set,A=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function Cp(t,e,n){try{n()}catch(r){me(t,e,r)}}var N0=!1;function gj(t,e){if(sp=Zu,t=VT(),Dg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:t,selectionRange:n},Zu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,E=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:zt(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){me(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return g=N0,N0=!1,g}function No(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cp(e,n,s)}i=i.next}while(i!==r)}}function ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ip(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $S(t){var e=t.alternate;e!==null&&(t.alternate=null,$S(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[ya],delete e[up],delete e[JU],delete e[ZU])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function US(t){return t.tag===5||t.tag===3||t.tag===4}function R0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||US(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}var Ve=null,Wt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)jS(t,e,n),n=n.sibling}function jS(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(oh,n)}catch{}switch(n.tag){case 5:tt||Wi(n,e);case 6:var r=Ve,i=Wt;Ve=null,Bn(t,e,n),Ve=r,Wt=i,Ve!==null&&(Wt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Wt?(t=Ve,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),da(t)):Cd(Ve,n.stateNode));break;case 4:r=Ve,i=Wt,Ve=n.stateNode.containerInfo,Wt=!0,Bn(t,e,n),Ve=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cp(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!tt&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Bn(t,e,n),tt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mj),e.forEach(function(r){var i=Sj.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Wt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Wt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(Ve===null)throw Error(C(160));jS(s,o,i),Ve=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VS(e,t),e=e.sibling}function VS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),nn(t),r&4){try{No(3,t,t.return),ph(3,t)}catch(v){me(t,t.return,v)}try{No(5,t,t.return)}catch(v){me(t,t.return,v)}}break;case 1:Bt(e,t),nn(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(Bt(e,t),nn(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{la(i,"")}catch(v){me(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lT(i,s),Qf(a,o);var u=Qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?fT(i,h):c==="dangerouslySetInnerHTML"?hT(i,h):c==="children"?la(i,h):_g(i,c,h,u)}switch(a){case"input":Wf(i,s);break;case"textarea":uT(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[ya]=s}catch(v){me(t,t.return,v)}}break;case 6:if(Bt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){me(t,t.return,v)}}break;case 3:if(Bt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(v){me(t,t.return,v)}break;case 4:Bt(e,t),nn(t);break;case 13:Bt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jg=we())),r&4&&A0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(u=tt)||c,Bt(e,t),tt=u):Bt(e,t),nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(h=A=c;A!==null;){switch(d=A,p=d.child,d.tag){case 0:case 11:case 14:case 15:No(4,d,d.return);break;case 1:Wi(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){me(r,n,v)}}break;case 5:Wi(d,d.return);break;case 22:if(d.memoizedState!==null){D0(h);continue}}p!==null?(p.return=d,A=p):D0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dT("display",o))}catch(v){me(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){me(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bt(e,t),nn(t),r&4&&A0(t);break;case 21:break;default:Bt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(US(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(la(i,""),r.flags&=-33);var s=R0(t);Sp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=R0(t);Tp(t,a,o);break;default:throw Error(C(161))}}catch(l){me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yj(t,e,n){A=t,BS(t)}function BS(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ml;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=Ml;var u=tt;if(Ml=o,(tt=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?b0(i):l!==null?(l.return=o,A=l):b0(i);for(;s!==null;)A=s,BS(s),s=s.sibling;A=i,Ml=a,tt=u}P0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):P0(t)}}function P0(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&da(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}tt||e.flags&512&&Ip(e)}catch(d){me(e,e.return,d)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function D0(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function b0(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ph(4,e)}catch(l){me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){me(e,i,l)}}var s=e.return;try{Ip(e)}catch(l){me(e,s,l)}break;case 5:var o=e.return;try{Ip(e)}catch(l){me(e,o,l)}}}catch(l){me(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var vj=Math.ceil,fc=jn.ReactCurrentDispatcher,Yg=jn.ReactCurrentOwner,Mt=jn.ReactCurrentBatchConfig,Y=0,Fe=null,Ce=null,He=0,Et=0,Hi=Sr(0),Ne=0,Ia=null,pi=0,mh=0,Xg=0,Ro=null,dt=null,Jg=0,ks=1/0,vn=null,pc=!1,kp=null,dr=null,Ll=!1,er=null,mc=0,Ao=0,xp=null,tu=-1,nu=0;function ut(){return Y&6?we():tu!==-1?tu:tu=we()}function fr(t){return t.mode&1?Y&2&&He!==0?He&-He:tj.transition!==null?(nu===0&&(nu=ST()),nu):(t=J,t!==0||(t=window.event,t=t===void 0?16:DT(t.type)),t):1}function Zt(t,e,n,r){if(50<Ao)throw Ao=0,xp=null,Error(C(185));tl(t,n,r),(!(Y&2)||t!==Fe)&&(t===Fe&&(!(Y&2)&&(mh|=n),Ne===4&&Yn(t,He)),_t(t,r),n===1&&Y===0&&!(e.mode&1)&&(ks=we()+500,hh&&kr()))}function _t(t,e){var n=t.callbackNode;tU(t,e);var r=Ju(t,t===Fe?He:0);if(r===0)n!==null&&B_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&B_(n),e===1)t.tag===0?ej(O0.bind(null,t)):XT(O0.bind(null,t)),YU(function(){!(Y&6)&&kr()}),n=null;else{switch(kT(r)){case 1:n=Tg;break;case 4:n=IT;break;case 16:n=Xu;break;case 536870912:n=TT;break;default:n=Xu}n=YS(n,zS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zS(t,e){if(tu=-1,nu=0,Y&6)throw Error(C(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=Ju(t,t===Fe?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gc(t,r);else{e=r;var i=Y;Y|=2;var s=HS();(Fe!==t||He!==e)&&(vn=null,ks=we()+500,Xr(t,e));do try{Ej();break}catch(a){WS(t,a)}while(1);Fg(),fc.current=s,Y=i,Ce!==null?e=0:(Fe=null,He=0,e=Ne)}if(e!==0){if(e===2&&(i=ep(t),i!==0&&(r=i,e=Np(t,i))),e===1)throw n=Ia,Xr(t,0),Yn(t,r),_t(t,we()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_j(i)&&(e=gc(t,r),e===2&&(s=ep(t),s!==0&&(r=s,e=Np(t,s))),e===1))throw n=Ia,Xr(t,0),Yn(t,r),_t(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Mr(t,dt,vn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Jg+500-we(),10<e)){if(Ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lp(Mr.bind(null,t,dt,vn),e);break}Mr(t,dt,vn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vj(r/1960))-r,10<r){t.timeoutHandle=lp(Mr.bind(null,t,dt,vn),r);break}Mr(t,dt,vn);break;case 5:Mr(t,dt,vn);break;default:throw Error(C(329))}}}return _t(t,we()),t.callbackNode===n?zS.bind(null,t):null}function Np(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=gc(t,e),t!==2&&(e=dt,dt=n,e!==null&&Rp(e)),t}function Rp(t){dt===null?dt=t:dt.push.apply(dt,t)}function _j(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Xg,e&=~mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function O0(t){if(Y&6)throw Error(C(327));os();var e=Ju(t,0);if(!(e&1))return _t(t,we()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var r=ep(t);r!==0&&(e=r,n=Np(t,r))}if(n===1)throw n=Ia,Xr(t,0),Yn(t,e),_t(t,we()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,dt,vn),_t(t,we()),null}function Zg(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(ks=we()+500,hh&&kr())}}function mi(t){er!==null&&er.tag===0&&!(Y&6)&&os();var e=Y;Y|=1;var n=Mt.transition,r=J;try{if(Mt.transition=null,J=1,t)return t()}finally{J=r,Mt.transition=n,Y=e,!(Y&6)&&kr()}}function ey(){Et=Hi.current,le(Hi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QU(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Og(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rc();break;case 3:Ts(),le(yt),le(ot),zg();break;case 5:Bg(r);break;case 4:Ts();break;case 13:le(de);break;case 19:le(de);break;case 10:$g(r.type._context);break;case 22:case 23:ey()}n=n.return}if(Fe=t,Ce=t=pr(t.current,null),He=Et=e,Ne=0,Ia=null,Xg=mh=pi=0,dt=Ro=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function WS(t,e){do{var n=Ce;try{if(Fg(),Jl.current=dc,hc){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hc=!1}if(fi=0,be=ke=fe=null,xo=!1,wa=0,Yg.current=null,n===null||n.return===null){Ne=1,Ia=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=E0(o);if(p!==null){p.flags&=-257,C0(p,o,a,s,e),p.mode&1&&w0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){w0(s,u,e),ty();break e}l=Error(C(426))}}else if(ce&&a.mode&1){var E=E0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),C0(E,o,a,s,e),Mg(Ss(l,a));break e}}s=l=Ss(l,a),Ne!==4&&(Ne=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=xS(s,l,e);f0(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=NS(s,a,e);f0(s,w);break e}}s=s.return}while(s!==null)}GS(n)}catch(x){e=x,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function HS(){var t=fc.current;return fc.current=dc,t===null?dc:t}function ty(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Fe===null||!(pi&268435455)&&!(mh&268435455)||Yn(Fe,He)}function gc(t,e){var n=Y;Y|=2;var r=HS();(Fe!==t||He!==e)&&(vn=null,Xr(t,e));do try{wj();break}catch(i){WS(t,i)}while(1);if(Fg(),Y=n,fc.current=r,Ce!==null)throw Error(C(261));return Fe=null,He=0,Ne}function wj(){for(;Ce!==null;)KS(Ce)}function Ej(){for(;Ce!==null&&!K4();)KS(Ce)}function KS(t){var e=QS(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?GS(t):Ce=e,Yg.current=null}function GS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pj(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=fj(n,e,Et),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function Mr(t,e,n){var r=J,i=Mt.transition;try{Mt.transition=null,J=1,Cj(t,e,n,r)}finally{Mt.transition=i,J=r}return null}function Cj(t,e,n,r){do os();while(er!==null);if(Y&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nU(t,s),t===Fe&&(Ce=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,YS(Xu,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=J;J=1;var a=Y;Y|=4,Yg.current=null,gj(t,n),VS(n,t),BU(op),Zu=!!sp,op=sp=null,t.current=n,yj(n),G4(),Y=a,J=o,Mt.transition=s}else t.current=n;if(Ll&&(Ll=!1,er=t,mc=i),s=t.pendingLanes,s===0&&(dr=null),Y4(n.stateNode),_t(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pc)throw pc=!1,t=kp,kp=null,t;return mc&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===xp?Ao++:(Ao=0,xp=t):Ao=0,kr(),null}function os(){if(er!==null){var t=kT(mc),e=Mt.transition,n=J;try{if(Mt.transition=null,J=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,mc=0,Y&6)throw Error(C(331));var i=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:No(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var d=c.sibling,p=c.return;if($S(c),c===u){A=null;break}if(d!==null){d.return=p,A=d;break}A=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(x){me(a,a.return,x)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=i,kr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(oh,t)}catch{}r=!0}return r}finally{J=n,Mt.transition=e}}return!1}function M0(t,e,n){e=Ss(n,e),e=xS(t,e,1),t=hr(t,e,1),e=ut(),t!==null&&(tl(t,1,e),_t(t,e))}function me(t,e,n){if(t.tag===3)M0(t,t,n);else for(;e!==null;){if(e.tag===3){M0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Ss(n,t),t=NS(e,t,1),e=hr(e,t,1),t=ut(),e!==null&&(tl(e,1,t),_t(e,t));break}}e=e.return}}function Ij(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(He&n)===n&&(Ne===4||Ne===3&&(He&130023424)===He&&500>we()-Jg?Xr(t,0):Xg|=n),_t(t,e)}function qS(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=ut();t=On(t,e),t!==null&&(tl(t,e,n),_t(t,n))}function Tj(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qS(t,n)}function Sj(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),qS(t,n)}var QS;QS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,dj(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ce&&e.flags&1048576&&JT(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var i=Es(e,ot.current);ss(e,n),i=Hg(null,e,r,t,i,n);var s=Kg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jg(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,mp(e,r,t,n),e=vp(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&bg(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xj(r),t=zt(r,t),i){case 0:e=yp(null,e,r,t,n);break e;case 1:e=S0(null,e,r,t,n);break e;case 11:e=I0(null,e,r,t,n);break e;case 14:e=T0(null,e,r,zt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),yp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),S0(t,e,r,i,n);case 3:e:{if(DS(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nS(t,e),uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ss(Error(C(423)),e),e=k0(t,e,r,n,i);break e}else if(r!==i){i=Ss(Error(C(424)),e),e=k0(t,e,r,n,i);break e}else for(Ct=cr(e.stateNode.containerInfo.firstChild),Tt=e,ce=!0,Ht=null,n=oS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=Mn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return aS(e),t===null&&dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ap(r,i)?o=null:s!==null&&ap(r,s)&&(e.flags|=32),PS(t,e),at(t,e,o,n),e.child;case 6:return t===null&&dp(e),null;case 13:return bS(t,e,n);case 4:return Vg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),I0(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(ac,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!yt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=$t(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),T0(t,e,r,i,n);case 15:return RS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),eu(t,e),e.tag=1,vt(r)?(t=!0,ic(e)):t=!1,ss(e,n),iS(e,r,i),mp(e,r,i,n),vp(null,e,r,!0,t,n);case 19:return OS(t,e,n);case 22:return AS(t,e,n)}throw Error(C(156,e.tag))};function YS(t,e){return CT(t,e)}function kj(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new kj(t,e,n,r)}function ny(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xj(t){if(typeof t=="function")return ny(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eg)return 11;if(t===Cg)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ny(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return Jr(n.children,i,s,e);case wg:o=8,i|=8;break;case Uf:return t=bt(12,n,e,i|2),t.elementType=Uf,t.lanes=s,t;case jf:return t=bt(13,n,e,i),t.elementType=jf,t.lanes=s,t;case Vf:return t=bt(19,n,e,i),t.elementType=Vf,t.lanes=s,t;case sT:return gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rT:o=10;break e;case iT:o=9;break e;case Eg:o=11;break e;case Cg:o=14;break e;case zn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function gh(t,e,n,r){return t=bt(22,t,r,e),t.elementType=sT,t.lanes=n,t.stateNode={isHidden:!1},t}function Ad(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nj(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ry(t,e,n,r,i,s,o,a,l){return t=new Nj(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jg(s),t}function Rj(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XS(t){if(!t)return Er;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(vt(n))return YT(t,n,e)}return e}function JS(t,e,n,r,i,s,o,a,l){return t=ry(n,r,!0,t,i,s,o,a,l),t.context=XS(null),n=t.current,r=ut(),i=fr(n),s=Rn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,tl(t,i,r),_t(t,r),t}function yh(t,e,n,r){var i=e.current,s=ut(),o=fr(i);return n=XS(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Zt(t,i,o,s),Xl(t,i,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function L0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iy(t,e){L0(t,e),(t=t.alternate)&&L0(t,e)}function Aj(){return null}var ZS=typeof reportError=="function"?reportError:function(t){console.error(t)};function sy(t){this._internalRoot=t}vh.prototype.render=sy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));yh(t,e,null,null)};vh.prototype.unmount=sy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mi(function(){yh(null,t,null,null)}),e[bn]=null}};function vh(t){this._internalRoot=t}vh.prototype.unstable_scheduleHydration=function(t){if(t){var e=RT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&PT(t)}};function oy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F0(){}function Pj(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yc(o);s.call(u)}}var o=JS(e,r,t,0,null,!1,!1,"",F0);return t._reactRootContainer=o,t[bn]=o.current,ma(t.nodeType===8?t.parentNode:t),mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yc(l);a.call(u)}}var l=ry(t,0,!1,null,null,!1,!1,"",F0);return t._reactRootContainer=l,t[bn]=l.current,ma(t.nodeType===8?t.parentNode:t),mi(function(){yh(e,l,n,r)}),l}function wh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=yc(o);a.call(l)}}yh(e,o,t,i)}else o=Pj(n,e,t,i,r);return yc(o)}xT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Sg(e,n|1),_t(e,we()),!(Y&6)&&(ks=we()+500,kr()))}break;case 13:mi(function(){var r=On(t,1);if(r!==null){var i=ut();Zt(r,t,1,i)}}),iy(t,1)}};kg=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=ut();Zt(e,t,134217728,n)}iy(t,134217728)}};NT=function(t){if(t.tag===13){var e=fr(t),n=On(t,e);if(n!==null){var r=ut();Zt(n,t,e,r)}iy(t,e)}};RT=function(){return J};AT=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Xf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ch(r);if(!i)throw Error(C(90));aT(r),Wf(r,i)}}}break;case"textarea":uT(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};gT=Zg;yT=mi;var Dj={usingClientEntryPoint:!1,Events:[rl,Ui,ch,pT,mT,Zg]},no={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bj={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wT(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Aj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{oh=Fl.inject(bj),hn=Fl}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dj;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oy(e))throw Error(C(200));return Rj(t,e,null,n)};Nt.createRoot=function(t,e){if(!oy(t))throw Error(C(299));var n=!1,r="",i=ZS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ry(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,ma(t.nodeType===8?t.parentNode:t),new sy(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=wT(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return mi(t)};Nt.hydrate=function(t,e,n){if(!_h(e))throw Error(C(200));return wh(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!oy(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JS(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,ma(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vh(e)};Nt.render=function(t,e,n){if(!_h(e))throw Error(C(200));return wh(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!_h(t))throw Error(C(40));return t._reactRootContainer?(mi(function(){wh(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Zg;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return wh(t,e,n,!1,r)};Nt.version="18.2.0-next-9e3b772b8-20220608";function ek(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ek)}catch(t){console.error(t)}}ek(),JI.exports=Nt;var Oj=JI.exports,tk,$0=Oj;tk=$0.createRoot,$0.hydrateRoot;const Mj=document.getElementById("root"),Lj=tk(Mj);Lj.render(_.jsx(q0.StrictMode,{children:_.jsx(x4,{firebaseConfig:cC,children:_.jsx(i2,{})})}));
