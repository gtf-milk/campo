import"./chunks/chunk-2SNLK4DW.js";var Bp=()=>{};var Gp=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rw=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4,y=(c&15)<<2|d>>6,E=d&63;l||(E=64,o||(y=64)),r.push(t[f],t[p],t[y],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||p==null)throw new Ol;let y=s<<2|c>>4;if(r.push(y),d!==64){let E=c<<4&240|d>>2;if(r.push(E),p!==64){let N=d<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ol=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Cw=function(n){let e=Gp(n);return Hp.encodeByteArray(e,!0)},Vl=function(n){return Cw(n).replace(/\./g,"")},Vo=function(n){try{return Hp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var kw=()=>Ll().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Vo(n[1]);return e&&JSON.parse(e)},Ml=()=>{try{return Bp()||kw()||Dw()||Nw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}};var Wp=()=>{var n;return(n=Ml())===null||n===void 0?void 0:n.config},Kp=n=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${n}`]};var xo=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Mr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $l(n){return(await fetch(n,{credentials:"include"})).ok}function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Yp(){var n;let e=(n=Ml())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xp(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function em(){let n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fl(){return!Yp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ql(){return!Yp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Lo(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Ow="FirebaseError",tt=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ow,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$t.prototype.create)}},$t=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xw(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new tt(i,c,r)}};function xw(n,e){return n.replace(Vw,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Vw=/\{\$([^}]+)}/g;function tn(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(zp(s)&&zp(o)){if(!tn(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function zp(n){return n!==null&&typeof n=="object"}function Mo(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $r(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fr(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function nm(n,e){let t=new xl(n,e);return t.subscribe.bind(t)}var xl=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Lw(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Nl),i.error===void 0&&(i.error=Nl),i.complete===void 0&&(i.complete=Nl);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Lw(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Nl(){}var f1=4*60*60*1e3;function we(n){return n&&n._delegate?n._delegate:n}var dt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Qn="[DEFAULT]";var Ul=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new xo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($w(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Mw(n){return n===Qn?void 0:n}function $w(n){return n.instantiationMode==="EAGER"}var $o=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Ul(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Fw=[],ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));var qw={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Uw=ee.INFO,jw={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Bw=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=jw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},nn=class{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=Bw,this._userLogHandler=null,Fw.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}};var zw=(n,e)=>e.some(t=>n instanceof t),rm,im;function Gw(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return im||(im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var sm=new WeakMap,Bl=new WeakMap,om=new WeakMap,jl=new WeakMap,Gl=new WeakMap;function Ww(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Pt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sm.set(t,n)}).catch(()=>{}),Gl.set(e,n),e}function Kw(n){if(Bl.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Bl.set(n,e)}var zl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||om.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function am(n){zl=n(zl)}function Qw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Fo(this),e,...t);return om.set(r,e.sort?e.sort():[e]),Pt(r)}:Hw().includes(n)?function(...e){return n.apply(Fo(this),e),Pt(sm.get(this))}:function(...e){return Pt(n.apply(Fo(this),e))}}function Yw(n){return typeof n=="function"?Qw(n):(n instanceof IDBTransaction&&Kw(n),zw(n,Gw())?new Proxy(n,zl):n)}function Pt(n){if(n instanceof IDBRequest)return Ww(n);if(jl.has(n))return jl.get(n);let e=Yw(n);return e!==n&&(jl.set(n,e),Gl.set(e,n)),e}var Fo=n=>Gl.get(n);function lm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),c=Pt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var Jw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],Hl=new Map;function cm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hl.get(e))return Hl.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Xw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jw.includes(t)))return;let s=async function(o,...c){let l=this.transaction(o,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Hl.set(e,s),s}am(n=>({...n,get:(e,t,r)=>cm(e,t)||n.get(e,t,r),has:(e,t)=>!!cm(e,t)||n.has(e,t)}));var Kl=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zw(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Zw(n){let e=n.getComponent();return e?.type==="VERSION"}var Ql="@firebase/app",um="0.13.2";var Ft=new nn("@firebase/app"),e0="@firebase/app-compat",t0="@firebase/analytics-compat",n0="@firebase/analytics",r0="@firebase/app-check-compat",i0="@firebase/app-check",s0="@firebase/auth",o0="@firebase/auth-compat",a0="@firebase/database",c0="@firebase/data-connect",l0="@firebase/database-compat",u0="@firebase/functions",d0="@firebase/functions-compat",h0="@firebase/installations",f0="@firebase/installations-compat",p0="@firebase/messaging",m0="@firebase/messaging-compat",g0="@firebase/performance",v0="@firebase/performance-compat",_0="@firebase/remote-config",y0="@firebase/remote-config-compat",w0="@firebase/storage",I0="@firebase/storage-compat",b0="@firebase/firestore",E0="@firebase/ai",T0="@firebase/firestore-compat",A0="firebase",S0="11.10.0";var P0="[DEFAULT]",R0={[Ql]:"fire-core",[e0]:"fire-core-compat",[n0]:"fire-analytics",[t0]:"fire-analytics-compat",[i0]:"fire-app-check",[r0]:"fire-app-check-compat",[s0]:"fire-auth",[o0]:"fire-auth-compat",[a0]:"fire-rtdb",[c0]:"fire-data-connect",[l0]:"fire-rtdb-compat",[u0]:"fire-fn",[d0]:"fire-fn-compat",[h0]:"fire-iid",[f0]:"fire-iid-compat",[p0]:"fire-fcm",[m0]:"fire-fcm-compat",[g0]:"fire-perf",[v0]:"fire-perf-compat",[_0]:"fire-rc",[y0]:"fire-rc-compat",[w0]:"fire-gcs",[I0]:"fire-gcs-compat",[b0]:"fire-fst",[T0]:"fire-fst-compat",[E0]:"fire-vertex","fire-js":"fire-js",[A0]:"fire-js-all"};var ns=new Map,Yl=new Map,Jl=new Map;function dm(n,e){try{n.container.addComponent(e)}catch(t){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){let e=n.name;if(Jl.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,n);for(let t of ns.values())dm(t,n);for(let t of Yl.values())dm(t,n);return!0}function qo(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}var C0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new $t("app","Firebase",C0);var Xl=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};var qr=S0;function tu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:P0,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(t||(t=Wp()),!t)throw Yn.create("no-options");let s=ns.get(i);if(s){if(tn(t,s.options)&&tn(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}let o=new $o(i);for(let l of Jl.values())o.addComponent(l);let c=new Xl(t,r,o);return ns.set(i,c),c}async function mm(n){let e=!1,t=n.name;ns.has(t)?(e=!0,ns.delete(t)):Yl.has(t)&&n.decRefCount()<=0&&(Yl.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function wt(n,e,t){var r;let i=(r=R0[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(c.join(" "));return}rn(new dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var k0="firebase-heartbeat-database",D0=1,rs="firebase-heartbeat-store",Wl=null;function gm(){return Wl||(Wl=lm(k0,D0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yn.create("idb-open",{originalErrorMessage:n.message})})),Wl}async function N0(n){try{let t=(await gm()).transaction(rs),r=await t.objectStore(rs).get(vm(n));return await t.done,r}catch(e){if(e instanceof tt)Ft.warn(e.message);else{let t=Yn.create("idb-get",{originalErrorMessage:e?.message});Ft.warn(t.message)}}}async function hm(n,e){try{let r=(await gm()).transaction(rs,"readwrite");await r.objectStore(rs).put(e,vm(n)),await r.done}catch(t){if(t instanceof tt)Ft.warn(t.message);else{let r=Yn.create("idb-set",{originalErrorMessage:t?.message});Ft.warn(r.message)}}}function vm(n){return`${n.name}!${n.options.appId}`}var O0=1024,x0=30,Zl=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eu(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>x0){let o=L0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=fm(),{heartbeatsToSend:r,unsentEntries:i}=V0(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ft.warn(t),""}}};function fm(){return new Date().toISOString().substring(0,10)}function V0(n,e=O0){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pm(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),pm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var eu=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lo()?tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await N0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function pm(n){return Vl(JSON.stringify({version:2,heartbeats:n})).length}function L0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function M0(n){rn(new dt("platform-logger",e=>new Kl(e),"PRIVATE")),rn(new dt("heartbeat",e=>new Zl(e),"PRIVATE")),wt(Ql,um,n),wt(Ql,um,"esm2017"),wt("fire-js","")}M0("");var $0="firebase",F0="11.10.0";wt($0,F0,"app");function Uo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Om=Nm,xm=new $t("auth","Firebase",Nm());var Go=new nn("@firebase/auth");function j0(n,...e){Go.logLevel<=ee.WARN&&Go.warn(`Auth (${qr}): ${n}`,...e)}function Bo(n,...e){Go.logLevel<=ee.ERROR&&Go.error(`Auth (${qr}): ${n}`,...e)}function qt(n,...e){throw Tu(n,...e)}function Ur(n,...e){return Tu(n,...e)}function Vm(n,e,t){let r=Object.assign(Object.assign({},Om()),{[e]:t});return new $t("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return Vm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xm.create(n,...e)}function K(n,e,...t){if(!n)throw Tu(e,...t)}function Rt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Bo(e),new Error(e)}function Zn(n,e){n||Rt(e)}function B0(){return _m()==="http:"||_m()==="https:"}function _m(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B0()||Xp()||"connection"in navigator)?navigator.onLine:!0}function G0(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var er=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zn(t>e,"Short delay should be less than long delay!"),this.isMobile=Qp()||Zp()}get(){return z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function H0(n,e){Zn(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ho=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var W0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var K0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Q0=new er(3e4,6e4);function be(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ve(n,e,t,r,i={}){return Lm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let c=Mo(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Jp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(d.credentials="include"),Ho.fetch()(await Mm(n,n.config.apiHost,t,c),d)})}async function Lm(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},W0),e);try{let i=new au(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw ss(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(n,"user-disabled",o);let f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Vm(n,f,d);qt(n,f)}}catch(i){if(i instanceof tt)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function cn(n,e,t,r,i={}){let s=await Ve(n,e,t,r,i);return"mfaPendingCredential"in s&&qt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Mm(n,e,t,r){let i=`${e}${t}?${r}`,s=n,o=s.config.emulator?H0(n.config,i):`${n.config.apiScheme}://${i}`;return K0.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Y0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var au=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ur(this.auth,"network-request-failed")),Q0.get())})}};function ss(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Ur(n,e,r);return i.customData._tokenResponse=t,i}function ym(n){return n!==void 0&&n.enterprise!==void 0}var Wo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function $m(n,e){return Ve(n,"GET","/v2/recaptchaConfig",be(n,e))}async function J0(n,e){return Ve(n,"POST","/v1/accounts:delete",e)}async function Ko(n,e){return Ve(n,"POST","/v1/accounts:lookup",e)}function os(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fm(n,e=!1){let t=we(n),r=await t.getIdToken(e),i=Au(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:os(nu(i.auth_time)),issuedAtTime:os(nu(i.iat)),expirationTime:os(nu(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function nu(n){return Number(n)*1e3}function Au(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{let i=Vo(t);return i?JSON.parse(i):(Bo("Failed to decode base64 JWT payload"),null)}catch(i){return Bo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function wm(n){let e=Au(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Br(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof tt&&X0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function X0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var cu=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ls=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Qo(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Br(n,Ko(t,{idToken:r}));K(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Um(s.providerUserInfo):[],c=Z0(n.providerData,o),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ls(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function qm(n){let e=we(n);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z0(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Um(n){return n.map(e=>{var{providerId:t}=e,r=Uo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function eI(n,e){let t=await Lm(n,{},async()=>{let r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Mm(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(l.credentials="include"),Ho.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tI(n,e){return Ve(n,"POST","/v2/accounts:revokeToken",be(n,e))}var as=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");let t=wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await eI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Rt("not implemented")}};function sn(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var on=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ls(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Br(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fm(this,e)}reload(){return qm(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(an(this.auth));let e=await this.getIdToken();return await Br(this,J0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,d,f;let p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:Y,isAnonymous:k,providerData:M,stsTokenManager:w}=t;K(O&&w,e,"internal-error");let g=as.fromJSON(this.name,w);K(typeof O=="string",e,"internal-error"),sn(p,e.name),sn(y,e.name),K(typeof Y=="boolean",e,"internal-error"),K(typeof k=="boolean",e,"internal-error"),sn(E,e.name),sn(N,e.name),sn(V,e.name),sn(L,e.name),sn(z,e.name),sn(F,e.name);let _=new n({uid:O,auth:e,email:y,emailVerified:Y,displayName:p,isAnonymous:k,photoURL:N,phoneNumber:E,tenantId:V,stsTokenManager:g,createdAt:z,lastLoginAt:F});return M&&Array.isArray(M)&&(_.providerData=M.map(b=>Object.assign({},b))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new as;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];K(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Um(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new as;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ls(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var Im=new Map;function Jn(n){Zn(n instanceof Function,"Expected a class definition");let e=Im.get(n);return e?(Zn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Im.set(n,e),e)}var Yo=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Yo.type="NONE";var us=Yo;function ru(n,e,t){return`firebase:${n}:${e}:${t}`}var Jo=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=ru("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Ko(this.auth,{idToken:e}).catch(()=>{});return t?on._fromGetAccountInfoResponse(this.auth,t,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Jn(us),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Jn(us),o=ru(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let f=await d._get(o);if(f){let p;if(typeof f=="string"){let y=await Ko(e,{idToken:f}).catch(()=>{});if(!y)break;p=await on._fromGetAccountInfoResponse(e,y,f)}else p=on._fromJSON(e,f);d!==s&&(c=p),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new n(s,e,r))}};function bm(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Gm(e))return"Webos";if(rI(e))return"Safari";if((e.includes("chrome/")||iI(e))&&!e.includes("edge/"))return"Chrome";if(Bm(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function nI(n=ke()){return/firefox\//i.test(n)}function rI(n=ke()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iI(n=ke()){return/crios\//i.test(n)}function jm(n=ke()){return/iemobile/i.test(n)}function Bm(n=ke()){return/android/i.test(n)}function zm(n=ke()){return/blackberry/i.test(n)}function Gm(n=ke()){return/webos/i.test(n)}function sI(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function oI(){return em()&&document.documentMode===10}function aI(n=ke()){return sI(n)||Bm(n)||Gm(n)||zm(n)||/windows phone/i.test(n)||jm(n)}function Hm(n,e=[]){let t;switch(n){case"Browser":t=bm(ke());break;case"Worker":t=`${bm(ke())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qr}/${r}`}var lu=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,c)=>{try{let l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function cI(n,e={}){return Ve(n,"GET","/v2/passwordPolicy",be(n,e))}var lI=6,uu=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:lI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var du=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xo(this),this.idTokenSubscription=new Xo(this),this.beforeStateQueue=new lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Jo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ko(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nt(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(an(this));let t=e?we(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await cI(this),t=new uu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $t("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await tI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Jn(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Jo.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{let l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&j0(`Error while retrieving App Check token: ${t.error}`),t?.token}};function ln(n){return we(n)}var Xo=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=nm(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uI(n){Su=n}function dI(n){return Su.loadJS(n)}function hI(){return Su.recaptchaEnterpriseScript}function fI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var hu=class{constructor(){this.enterprise=new fu}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},fu=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var pI="recaptcha-enterprise",cs="NO_RECAPTCHA",Zo=class{constructor(e){this.type=pI,this.auth=ln(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{$m(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Wo(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){let l=window.grecaptcha;ym(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(cs)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hu().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&ym(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hI();l.length!==0&&(l+=c),dI(l).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}};async function is(n,e,t,r=!1,i=!1){let s=new Zo(n),o;if(i)o=cs;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Xn(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await is(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await is(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let c=await is(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await is(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{let c=await is(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function mI(n){let e=ln(n),t=await $m(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Wo(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Zo(e).verify()}function ha(n,e){let t=qo(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(tn(s,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function gI(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Jn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}var tr=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}};async function vI(n,e){return Ve(n,"POST","/v1/accounts:update",e)}async function _I(n,e){return Ve(n,"POST","/v1/accounts:signUp",e)}async function yI(n,e){return cn(n,"POST","/v1/accounts:signInWithPassword",be(n,e))}async function wI(n,e){return Ve(n,"POST","/v1/accounts:sendOobCode",be(n,e))}async function II(n,e){return wI(n,e)}async function bI(n,e){return cn(n,"POST","/v1/accounts:signInWithEmailLink",be(n,e))}async function EI(n,e){return cn(n,"POST","/v1/accounts:signInWithEmailLink",be(n,e))}var ds=class n extends tr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,t,"signInWithPassword",yI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return bI(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,r,"signUpPassword",_I,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return EI(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function jr(n,e){return cn(n,"POST","/v1/accounts:signInWithIdp",be(n,e))}var TI="http://localhost",nr=class n extends tr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Uo(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return jr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,jr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,jr(e,t)}buildRequest(){let e={requestUri:TI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mo(t)}return e}};async function Em(n,e){return Ve(n,"POST","/v1/accounts:sendVerificationCode",be(n,e))}async function AI(n,e){return cn(n,"POST","/v1/accounts:signInWithPhoneNumber",be(n,e))}async function SI(n,e){let t=await cn(n,"POST","/v1/accounts:signInWithPhoneNumber",be(n,e));if(t.temporaryProof)throw ss(n,"account-exists-with-different-credential",t);return t}var PI={USER_NOT_FOUND:"user-not-found"};async function RI(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cn(n,"POST","/v1/accounts:signInWithPhoneNumber",be(n,t),PI)}var hs=class n extends tr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return AI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return SI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return RI(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function CI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kI(n){let e=$r(Fr(n)).link,t=e?$r(Fr(e)).deep_link_id:null,r=$r(Fr(n)).deep_link_id;return(r?$r(Fr(r)).link:null)||r||t||e||n}var ea=class n{constructor(e){var t,r,i,s,o,c;let l=$r(Fr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=CI((i=l.mode)!==null&&i!==void 0?i:null);K(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=kI(e);try{return new n(t)}catch{return null}}};var Ut=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=ea.parseLink(t);return K(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}};Ut.PROVIDER_ID="password";Ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var pu=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var zr=class extends pu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var fs=class n extends zr{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";var ps=class n extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";var ms=class n extends zr{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";var gs=class n extends zr{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";async function DI(n,e){return cn(n,"POST","/v1/accounts:signUp",be(n,e))}var Gr=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await on._fromIdTokenResponse(e,r,i),o=Tm(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Tm(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Tm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var mu=class n extends tt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Wm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(n,s,e,r):s})}async function NI(n,e,t=!1){let r=await Br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gr._forOperation(n,"link",r)}async function Km(n,e,t=!1){let{auth:r}=n;if(nt(r.app))return Promise.reject(an(r));let i="reauthenticate";try{let s=await Br(n,Wm(r,i,e,n),t);K(s.idToken,r,"internal-error");let o=Au(s.idToken);K(o,r,"internal-error");let{sub:c}=o;return K(n.uid===c,r,"user-mismatch"),Gr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}async function Qm(n,e,t=!1){if(nt(n.app))return Promise.reject(an(n));let r="signIn",i=await Wm(n,r,e),s=await Gr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ym(n,e){return Qm(ln(n),e)}async function Pu(n,e){return Km(we(n),e)}function OI(n,e,t){var r;K(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),K(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),K(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(K(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(K(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Jm(n){let e=ln(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fa(n,e,t){let r=ln(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&OI(r,i,t),await Xn(r,i,"getOobCode",II,"EMAIL_PASSWORD_PROVIDER")}async function Ru(n,e,t){if(nt(n.app))return Promise.reject(an(n));let r=ln(n),o=await Xn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DI,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jm(n),l}),c=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Cu(n,e,t){return nt(n.app)?Promise.reject(an(n)):Ym(we(n),Ut.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jm(n),r})}function ku(n,e){return xI(we(n),null,e)}async function xI(n,e,t){let{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);let o=await Br(n,vI(r,s));await n._updateTokensIfNecessary(o,!0)}function Du(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function pa(n){return we(n).signOut()}function Am(n,e){return Ve(n,"POST","/v2/accounts/mfaEnrollment:start",be(n,e))}function VI(n,e){return Ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",be(n,e))}function LI(n,e){return Ve(n,"POST","/v2/accounts/mfaEnrollment:start",be(n,e))}function MI(n,e){return Ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",be(n,e))}var ta="__sak";var na=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var $I=1e3,FI=10,ra=class extends na{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FI):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ra.type="LOCAL";var Nu=ra;var qI=1e3;function iu(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function su(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var gu=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=su(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return iu(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=su(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=su(e);if(window.cookieStore){let c=d=>{let f=d.changed.find(y=>y.name===r);f&&t(f.value),d.deleted.find(y=>y.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",c)}let i=iu(r),s=setInterval(()=>{let c=iu(r);c!==i&&(t(c),i=c)},qI),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};gu.type="COOKIE";var vu=class extends na{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};vu.type="SESSION";function UI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var ia=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(o).map(async d=>d(t.origin,s)),l=await UI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};ia.receivers=[];function Xm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var _u=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{let d=Xm("",20);i.port1.start();let f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){let y=p;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Sm(){return window}function Zm(){return typeof Sm().WorkerGlobalScope<"u"&&typeof Sm().importScripts=="function"}async function jI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zI(){return Zm()?self:null}var eg="firebaseLocalStorageDb",GI=1,sa="firebaseLocalStorage",tg="fbase_key",rr=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function ma(n,e){return n.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function HI(){let n=indexedDB.deleteDatabase(eg);return new rr(n).toPromise()}function yu(){let n=indexedDB.open(eg,GI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(sa,{keyPath:tg})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await HI(),e(await yu()))})})}async function Pm(n,e,t){let r=ma(n,!0).put({[tg]:e,value:t});return new rr(r).toPromise()}async function WI(n,e){let t=ma(n,!1).get(e),r=await new rr(t).toPromise();return r===void 0?null:r.value}function Rm(n,e){let t=ma(n,!0).delete(e);return new rr(t).toPromise()}var KI=800,QI=3,oa=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>QI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(zI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jI(),!this.activeServiceWorker)return;this.sender=new _u(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await yu();return await Pm(e,ta,"1"),await Rm(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>WI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=ma(i,!1).getAll();return new rr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};oa.type="LOCAL";var Ou=oa;function Cm(n,e){return Ve(n,"POST","/v2/accounts/mfaSignIn:start",be(n,e))}function YI(n,e){return Ve(n,"POST","/v2/accounts/mfaSignIn:finalize",be(n,e))}function JI(n,e){return Ve(n,"POST","/v2/accounts/mfaSignIn:finalize",be(n,e))}var B1=fI("rcb"),z1=new er(3e4,6e4);var zo="recaptcha";async function XI(n,e,t){var r;if(!n._getRecaptchaConfig())try{await mI(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){K(s.type==="enroll",n,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Xn(n,o,"mfaSmsEnrollment",async(f,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===cs){K(t?.type===zo,f,"argument-error");let y=await ou(f,p,t);return Am(f,y)}return Am(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{K(s.type==="signin",n,"internal-error");let o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;K(o,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Xn(n,c,"mfaSmsSignIn",async(p,y)=>{if(y.phoneSignInInfo.captchaResponse===cs){K(t?.type===zo,p,"argument-error");let E=await ou(p,y,t);return Cm(p,E)}return Cm(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Xn(n,s,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===cs){K(t?.type===zo,d,"argument-error");let p=await ou(d,f,t);return Em(d,p)}return Em(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function ou(n,e,t){K(t.type===zo,n,"argument-error");let r=await t.verify();K(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var vs=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=ln(e)}verifyPhoneNumber(e,t){return XI(this.auth,e,we(t))}static credential(e,t){return hs._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?hs._fromTokenResponse(t,r):null}};vs.PROVIDER_ID="phone";vs.PHONE_SIGN_IN_METHOD="phone";var _s=class extends tr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function ZI(n){return Qm(n.auth,new _s(n),n.bypassAuthState)}function eb(n){let{auth:e,user:t}=n;return K(t,e,"internal-error"),Km(t,new _s(n),n.bypassAuthState)}async function tb(n){let{auth:e,user:t}=n;return K(t,e,"internal-error"),NI(t,new _s(n),n.bypassAuthState)}var wu=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:qt(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var nb=new er(2e3,1e4);var Iu=class n extends wu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");let e=Xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}};Iu.currentPopupAction=null;var G1=10*60*1e3;var H1=new er(3e4,6e4);var W1=new er(5e3,15e3);var K1=encodeURIComponent("fac");var aa=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rt("unexpected MultiFactorSessionType")}}},bu=class n extends aa{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return VI(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return YI(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ca=class{constructor(){}static assertion(e){return bu._fromCredential(e)}};ca.FACTOR_ID="phone";var la=class{static assertionForEnrollment(e,t){return ua._fromSecret(e,t)}static assertionForSignIn(e,t){return ua._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;K(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await LI(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return da._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};la.FACTOR_ID="totp";var ua=class n extends aa{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return K(typeof this.secret<"u",e,"argument-error"),MI(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){K(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return JI(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},da=class n{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(jo(e)||jo(t))&&(i=!0),i&&(jo(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),jo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function jo(n){return typeof n>"u"||n?.length===0}var km="@firebase/auth",Dm="1.10.8";var Eu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function rb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ib(n){rn(new dt("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hm(n)},d=new du(r,i,s,l);return gI(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rn(new dt("auth-internal",e=>{let t=ln(e.getProvider("auth").getImmediate());return(r=>new Eu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(km,Dm,rb(n)),wt(km,Dm,"esm2017")}var sb=5*60,Q1=Kp("authIdTokenMaxAge")||sb;function ob(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uI({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Ur("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ob().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ib("Browser");var ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rg={};var jt,xu;(function(){var n;function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(b,T,A){for(var I=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)I[Ce-2]=arguments[Ce];return g.prototype[T].apply(b,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,_){_||(_=0);var b=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)b[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)b[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],T=w.g[2];var A=w.g[3],I=g+(A^_&(T^A))+b[0]+3614090360&4294967295;g=_+(I<<7&4294967295|I>>>25),I=A+(T^g&(_^T))+b[1]+3905402710&4294967295,A=g+(I<<12&4294967295|I>>>20),I=T+(_^A&(g^_))+b[2]+606105819&4294967295,T=A+(I<<17&4294967295|I>>>15),I=_+(g^T&(A^g))+b[3]+3250441966&4294967295,_=T+(I<<22&4294967295|I>>>10),I=g+(A^_&(T^A))+b[4]+4118548399&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(T^g&(_^T))+b[5]+1200080426&4294967295,A=g+(I<<12&4294967295|I>>>20),I=T+(_^A&(g^_))+b[6]+2821735955&4294967295,T=A+(I<<17&4294967295|I>>>15),I=_+(g^T&(A^g))+b[7]+4249261313&4294967295,_=T+(I<<22&4294967295|I>>>10),I=g+(A^_&(T^A))+b[8]+1770035416&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(T^g&(_^T))+b[9]+2336552879&4294967295,A=g+(I<<12&4294967295|I>>>20),I=T+(_^A&(g^_))+b[10]+4294925233&4294967295,T=A+(I<<17&4294967295|I>>>15),I=_+(g^T&(A^g))+b[11]+2304563134&4294967295,_=T+(I<<22&4294967295|I>>>10),I=g+(A^_&(T^A))+b[12]+1804603682&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(T^g&(_^T))+b[13]+4254626195&4294967295,A=g+(I<<12&4294967295|I>>>20),I=T+(_^A&(g^_))+b[14]+2792965006&4294967295,T=A+(I<<17&4294967295|I>>>15),I=_+(g^T&(A^g))+b[15]+1236535329&4294967295,_=T+(I<<22&4294967295|I>>>10),I=g+(T^A&(_^T))+b[1]+4129170786&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^T&(g^_))+b[6]+3225465664&4294967295,A=g+(I<<9&4294967295|I>>>23),I=T+(g^_&(A^g))+b[11]+643717713&4294967295,T=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(T^A))+b[0]+3921069994&4294967295,_=T+(I<<20&4294967295|I>>>12),I=g+(T^A&(_^T))+b[5]+3593408605&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^T&(g^_))+b[10]+38016083&4294967295,A=g+(I<<9&4294967295|I>>>23),I=T+(g^_&(A^g))+b[15]+3634488961&4294967295,T=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(T^A))+b[4]+3889429448&4294967295,_=T+(I<<20&4294967295|I>>>12),I=g+(T^A&(_^T))+b[9]+568446438&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^T&(g^_))+b[14]+3275163606&4294967295,A=g+(I<<9&4294967295|I>>>23),I=T+(g^_&(A^g))+b[3]+4107603335&4294967295,T=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(T^A))+b[8]+1163531501&4294967295,_=T+(I<<20&4294967295|I>>>12),I=g+(T^A&(_^T))+b[13]+2850285829&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^T&(g^_))+b[2]+4243563512&4294967295,A=g+(I<<9&4294967295|I>>>23),I=T+(g^_&(A^g))+b[7]+1735328473&4294967295,T=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(T^A))+b[12]+2368359562&4294967295,_=T+(I<<20&4294967295|I>>>12),I=g+(_^T^A)+b[5]+4294588738&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^T)+b[8]+2272392833&4294967295,A=g+(I<<11&4294967295|I>>>21),I=T+(A^g^_)+b[11]+1839030562&4294967295,T=A+(I<<16&4294967295|I>>>16),I=_+(T^A^g)+b[14]+4259657740&4294967295,_=T+(I<<23&4294967295|I>>>9),I=g+(_^T^A)+b[1]+2763975236&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^T)+b[4]+1272893353&4294967295,A=g+(I<<11&4294967295|I>>>21),I=T+(A^g^_)+b[7]+4139469664&4294967295,T=A+(I<<16&4294967295|I>>>16),I=_+(T^A^g)+b[10]+3200236656&4294967295,_=T+(I<<23&4294967295|I>>>9),I=g+(_^T^A)+b[13]+681279174&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^T)+b[0]+3936430074&4294967295,A=g+(I<<11&4294967295|I>>>21),I=T+(A^g^_)+b[3]+3572445317&4294967295,T=A+(I<<16&4294967295|I>>>16),I=_+(T^A^g)+b[6]+76029189&4294967295,_=T+(I<<23&4294967295|I>>>9),I=g+(_^T^A)+b[9]+3654602809&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^T)+b[12]+3873151461&4294967295,A=g+(I<<11&4294967295|I>>>21),I=T+(A^g^_)+b[15]+530742520&4294967295,T=A+(I<<16&4294967295|I>>>16),I=_+(T^A^g)+b[2]+3299628645&4294967295,_=T+(I<<23&4294967295|I>>>9),I=g+(T^(_|~A))+b[0]+4096336452&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~T))+b[7]+1126891415&4294967295,A=g+(I<<10&4294967295|I>>>22),I=T+(g^(A|~_))+b[14]+2878612391&4294967295,T=A+(I<<15&4294967295|I>>>17),I=_+(A^(T|~g))+b[5]+4237533241&4294967295,_=T+(I<<21&4294967295|I>>>11),I=g+(T^(_|~A))+b[12]+1700485571&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~T))+b[3]+2399980690&4294967295,A=g+(I<<10&4294967295|I>>>22),I=T+(g^(A|~_))+b[10]+4293915773&4294967295,T=A+(I<<15&4294967295|I>>>17),I=_+(A^(T|~g))+b[1]+2240044497&4294967295,_=T+(I<<21&4294967295|I>>>11),I=g+(T^(_|~A))+b[8]+1873313359&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~T))+b[15]+4264355552&4294967295,A=g+(I<<10&4294967295|I>>>22),I=T+(g^(A|~_))+b[6]+2734768916&4294967295,T=A+(I<<15&4294967295|I>>>17),I=_+(A^(T|~g))+b[13]+1309151649&4294967295,_=T+(I<<21&4294967295|I>>>11),I=g+(T^(_|~A))+b[4]+4149444226&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~T))+b[11]+3174756917&4294967295,A=g+(I<<10&4294967295|I>>>22),I=T+(g^(A|~_))+b[2]+718787259&4294967295,T=A+(I<<15&4294967295|I>>>17),I=_+(A^(T|~g))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,b=this.B,T=this.h,A=0;A<g;){if(T==0)for(;A<=_;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(b[T++]=w.charCodeAt(A++),T==this.blockSize){i(this,b),T=0;break}}else for(;A<g;)if(b[T++]=w[A++],T==this.blockSize){i(this,b),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var b=0;32>b;b+=8)w[_++]=this.g[g]>>>b&255;return w};function s(w,g){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function o(w,g){this.h=g;for(var _=[],b=!0,T=w.length-1;0<=T;T--){var A=w[T]|0;b&&A==g||(_[T]=A,b=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(d(-w));for(var g=[],_=1,b=0;w>=_;b++)g[b]=w/_|0,_*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return L(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),b=p,T=0;T<w.length;T+=8){var A=Math.min(8,w.length-T),I=parseInt(w.substring(T,T+A),g);8>A?(A=d(Math.pow(g,A)),b=b.j(A).add(d(I))):(b=b.j(_),b=b.add(d(I)))}return b}var p=l(0),y=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(V(this))return-L(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var b=this.i(_);w+=(0<=b?b:4294967296+b)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+L(this).toString(w);for(var g=d(Math.pow(w,6)),_=this,b="";;){var T=Y(_,g).g;_=z(_,T.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=T,N(_))return A+b;for(;6>A.length;)A="0"+A;b=A+b}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=z(this,w),V(w)?-1:N(w)?0:1};function L(w){for(var g=w.g.length,_=[],b=0;b<g;b++)_[b]=~w.g[b];return new o(_,~w.h).add(y)}n.abs=function(){return V(this)?L(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0,T=0;T<=g;T++){var A=b+(this.i(T)&65535)+(w.i(T)&65535),I=(A>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);b=I>>>16,A&=65535,I&=65535,_[T]=I<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function z(w,g){return w.add(L(g))}n.j=function(w){if(N(this)||N(w))return p;if(V(this))return V(w)?L(this).j(L(w)):L(L(this).j(w));if(V(w))return L(this.j(L(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],b=0;b<2*g;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var T=0;T<w.g.length;T++){var A=this.i(b)>>>16,I=this.i(b)&65535,Ce=w.i(T)>>>16,Jt=w.i(T)&65535;_[2*b+2*T]+=I*Jt,F(_,2*b+2*T),_[2*b+2*T+1]+=A*Jt,F(_,2*b+2*T+1),_[2*b+2*T+1]+=I*Ce,F(_,2*b+2*T+1),_[2*b+2*T+2]+=A*Ce,F(_,2*b+2*T+2)}for(b=0;b<g;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=g;b<2*g;b++)_[b]=0;return new o(_,0)};function F(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function O(w,g){this.g=w,this.h=g}function Y(w,g){if(N(g))throw Error("division by zero");if(N(w))return new O(p,p);if(V(w))return g=Y(L(w),g),new O(L(g.g),L(g.h));if(V(g))return g=Y(w,L(g)),new O(L(g.g),g.h);if(30<w.g.length){if(V(w)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,b=g;0>=b.l(w);)_=k(_),b=k(b);var T=M(_,1),A=M(b,1);for(b=M(b,2),_=M(_,2);!N(b);){var I=A.add(b);0>=I.l(w)&&(T=T.add(_),A=I),b=M(b,1),_=M(_,1)}return g=z(w,T.j(g)),new O(T,g)}for(T=p;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),A=d(_),I=A.j(g);V(I)||0<I.l(w);)_-=b,A=d(_),I=A.j(g);N(A)&&(A=y),T=T.add(A),w=z(w,I)}return new O(T,w)}n.A=function(w){return Y(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)&w.i(b);return new o(_,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)|w.i(b);return new o(_,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)^w.i(b);return new o(_,this.h^w.h)};function k(w){for(var g=w.g.length+1,_=[],b=0;b<g;b++)_[b]=w.i(b)<<1|w.i(b-1)>>>31;return new o(_,w.h)}function M(w,g){var _=g>>5;g%=32;for(var b=w.g.length-_,T=[],A=0;A<b;A++)T[A]=0<g?w.i(A+_)>>>g|w.i(A+_+1)<<32-g:w.i(A+_);return new o(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xu=rg.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,jt=rg.Integer=o}).apply(typeof ng<"u"?ng:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bt={};var Vu,ab,Hr,Lu,ys,va,Mu,$u,Fu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var h=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in h))break e;h=h[S]}a=a[a.length-1],m=h[a],u=u(m),u!=m&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var h=0,m=!1,S={next:function(){if(!m&&h<a.length){var C=h++;return{value:u(C,a[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,h){return h})}});var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function p(a,u,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function y(a,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function E(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function N(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,S,C){for(var q=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)q[ue-2]=arguments[ue];return u.prototype[S].apply(m,q)}}function V(a){let u=a.length;if(0<u){let h=Array(u);for(let m=0;m<u;m++)h[m]=a[m];return h}return[]}function L(a,u){for(let h=1;h<arguments.length;h++){let m=arguments[h];if(l(m)){let S=a.length||0,C=m.length||0;a.length=S+C;for(let q=0;q<C;q++)a[S+q]=m[q]}else a.push(m)}}class z{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var k=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function M(a,u,h){for(let m in a)u.call(h,a[m],m,a)}function w(a,u){for(let h in a)u.call(void 0,a[h],h,a)}function g(a){let u={};for(let h in a)u[h]=a[h];return u}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let h,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(h in m)a[h]=m[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function T(a){var u=1;a=a.split(":");let h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function A(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Bn;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ce{constructor(){this.h=this.g=null}add(u,h){let m=Jt.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Jt=new z(()=>new Un,a=>a.reset());class Un{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,jn=!1,Bn=new Ce,Dr=()=>{let a=c.Promise.resolve(void 0);vt=()=>{a.then(al)}};var al=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){A(h)}var u=Jt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}jn=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var _o=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a}();function D(a,u){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(k){e:{try{Y(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:te[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&D.aa.h.call(this)}}N(D,he);var te={2:"touch",3:"pen",4:"mouse"};D.prototype.h=function(){D.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),_t=0;function ut(a,u,h,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=S,this.key=++_t,this.da=this.fa=!1}function Nr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zn(a){this.src=a,this.g={},this.h=0}zn.prototype.add=function(a,u,h,m,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var q=ll(a,u,m,S);return-1<q?(u=a[q],h||(u.fa=!1)):(u=new ut(u,this.src,C,!!m,S),u.fa=h,a.push(u)),u};function cl(a,u){var h=u.type;if(h in a.g){var m=a.g[h],S=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Nr(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function ll(a,u,h,m){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==m)return S}return-1}var ul="closure_lm_"+(1e6*Math.random()|0),dl={};function Bf(a,u,h,m,S){if(m&&m.once)return Gf(a,u,h,m,S);if(Array.isArray(u)){for(var C=0;C<u.length;C++)Bf(a,u[C],h,m,S);return null}return h=ml(h),a&&a[_e]?a.K(u,h,d(m)?!!m.capture:!!m,S):zf(a,u,h,!1,m,S)}function zf(a,u,h,m,S,C){if(!u)throw Error("Invalid event type");var q=d(S)?!!S.capture:!!S,ue=fl(a);if(ue||(a[ul]=ue=new zn(a)),h=ue.add(u,h,m,q,C),h.proxy)return h;if(m=ew(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)_o||(S=q),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(Wf(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ew(){function a(h){return u.call(a.src,a.listener,h)}let u=tw;return a}function Gf(a,u,h,m,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Gf(a,u[C],h,m,S);return null}return h=ml(h),a&&a[_e]?a.L(u,h,d(m)?!!m.capture:!!m,S):zf(a,u,h,!0,m,S)}function Hf(a,u,h,m,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)Hf(a,u[C],h,m,S);else m=d(m)?!!m.capture:!!m,h=ml(h),a&&a[_e]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],h=ll(C,h,m,S),-1<h&&(Nr(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=fl(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ll(u,h,m,S)),(h=-1<a?u[a]:null)&&hl(h))}function hl(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[_e])cl(u.i,a);else{var h=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(h,m,a.capture):u.detachEvent?u.detachEvent(Wf(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=fl(u))?(cl(h,a),h.h==0&&(h.src=null,u[ul]=null)):Nr(a)}}}function Wf(a){return a in dl?dl[a]:dl[a]="on"+a}function tw(a,u){if(a.da)a=!0;else{u=new D(u,this);var h=a.listener,m=a.ha||a.src;a.fa&&hl(a),a=h.call(m,u)}return a}function fl(a){return a=a[ul],a instanceof zn?a:null}var pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ml(a){return typeof a=="function"?a:(a[pl]||(a[pl]=function(u){return a.handleEvent(u)}),a[pl])}function Fe(){He.call(this),this.i=new zn(this),this.M=this,this.F=null}N(Fe,He),Fe.prototype[_e]=!0,Fe.prototype.removeEventListener=function(a,u,h,m){Hf(this,a,u,h,m)};function We(a,u){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new he(u,a);else if(u instanceof he)u.target=u.target||a;else{var S=u;u=new he(m,a),b(u,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var q=u.g=h[C];S=yo(q,m,!0,u)&&S}if(q=u.g=a,S=yo(q,m,!0,u)&&S,S=yo(q,m,!1,u)&&S,h)for(C=0;C<h.length;C++)q=u.g=h[C],S=yo(q,m,!1,u)&&S}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],m=0;m<h.length;m++)Nr(h[m]);delete a.g[u],a.h--}}this.F=null},Fe.prototype.K=function(a,u,h,m){return this.i.add(String(a),u,!1,h,m)},Fe.prototype.L=function(a,u,h,m){return this.i.add(String(a),u,!0,h,m)};function yo(a,u,h,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==h){var ue=q.listener,xe=q.ha||q.src;q.fa&&cl(a.i,q),S=ue.call(xe,m)!==!1&&S}}return S&&!m.defaultPrevented}function Kf(a,u,h){if(typeof a=="function")h&&(a=y(a,h));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Qf(a){a.g=Kf(()=>{a.g=null,a.i&&(a.i=!1,Qf(a))},a.l);let u=a.h;a.h=null,a.m.apply(null,u)}class nw extends He{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qf(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(a){He.call(this),this.h=a,this.g={}}N(ji,He);var Yf=[];function Jf(a){M(a.g,function(u,h){this.g.hasOwnProperty(h)&&hl(u)},a),a.g={}}ji.prototype.N=function(){ji.aa.N.call(this),Jf(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gl=c.JSON.stringify,rw=c.JSON.parse,iw=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function vl(){}vl.prototype.h=null;function Xf(a){return a.h||(a.h=a.i())}function Zf(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _l(){he.call(this,"d")}N(_l,he);function yl(){he.call(this,"c")}N(yl,he);var Gn={},ep=null;function wo(){return ep=ep||new Fe}Gn.La="serverreachability";function tp(a){he.call(this,Gn.La,a)}N(tp,he);function zi(a){let u=wo();We(u,new tp(u))}Gn.STAT_EVENT="statevent";function np(a,u){he.call(this,Gn.STAT_EVENT,a),this.stat=u}N(np,he);function Ke(a){let u=wo();We(u,new np(u,a))}Gn.Ma="timingevent";function rp(a,u){he.call(this,Gn.Ma,a),this.size=u}N(rp,he);function Gi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function sw(a,u,h,m,S,C){a.info(function(){if(a.g)if(C)for(var q="",ue=C.split("&"),xe=0;xe<ue.length;xe++){var se=ue[xe].split("=");if(1<se.length){var qe=se[0];se=se[1];var Ue=qe.split("_");q=2<=Ue.length&&Ue[1]=="type"?q+(qe+"="+se+"&"):q+(qe+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+h+`
`+q})}function ow(a,u,h,m,S,C,q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+h+`
`+C+" "+q})}function Or(a,u,h,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+cw(a,h)+(m?" "+m:"")})}function aw(a,u){a.info(function(){return"TIMEOUT: "+u})}Hi.prototype.info=function(){};function cw(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return gl(h)}catch{return u}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ip={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wl;function bo(){}N(bo,vl),bo.prototype.g=function(){return new XMLHttpRequest},bo.prototype.i=function(){return{}},wl=new bo;function Xt(a,u,h,m){this.j=a,this.i=u,this.l=h,this.R=m||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sp}function sp(){this.i=null,this.g="",this.h=!1}var op={},Il={};function bl(a,u,h){a.L=1,a.v=So(Lt(u)),a.m=h,a.P=!0,ap(a,null)}function ap(a,u){a.F=Date.now(),Eo(a),a.A=Lt(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ip(h.i,"t",m),a.C=0,h=a.j.J,a.h=new sp,a.g=Fp(a.j,h?u:null,!a.m),0<a.O&&(a.M=new nw(y(a.Y,a,a.g),a.O)),u=a.U,h=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Yf[0]=S.toString()),S=Yf);for(var C=0;C<S.length;C++){var q=Bf(h,S[C],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),zi(),sw(a.i,a.u,a.A,a.l,a.R,a.m)}Xt.prototype.ca=function(a){a=a.target;let u=this.M;u&&Mt(a)==3?u.j():this.Y(a)},Xt.prototype.Y=function(a){try{if(a==this.g)e:{let Ue=Mt(this.g);var u=this.g.Ba();let Lr=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Rp(this.g)))){this.J||Ue!=4||u==7||(u==8||0>=Lr?zi(3):zi(2)),El(this);var h=this.g.Z();this.X=h;t:if(cp(this)){var m=Rp(this.g);a="";var S=m.length,C=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),Wi(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(C&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=h==200,ow(this.i,this.u,this.A,this.l,this.R,Ue,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,xe=this.g;if((ue=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ue)){var se=ue;break t}}se=null}if(h=se)Or(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tl(this,h);else{this.o=!1,this.s=3,Ke(12),Hn(this),Wi(this);break e}}if(this.P){h=!0;let yt;for(;!this.J&&this.C<q.length;)if(yt=lw(this,q),yt==Il){Ue==4&&(this.s=4,Ke(14),h=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==op){this.s=4,Ke(15),Or(this.i,this.l,q,"[Invalid Chunk]"),h=!1;break}else Or(this.i,this.l,yt,null),Tl(this,yt);if(cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||q.length!=0||this.h.h||(this.s=1,Ke(16),h=!1),this.o=this.o&&h,!h)Or(this.i,this.l,q,"[Invalid Chunked Response]"),Hn(this),Wi(this);else if(0<q.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),kl(qe),qe.M=!0,Ke(11))}}else Or(this.i,this.l,q,null),Tl(this,q);Ue==4&&Hn(this),this.o&&!this.J&&(Ue==4?Vp(this.j,this):(this.o=!1,Eo(this)))}else Sw(this.g),h==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),Hn(this),Wi(this)}}}catch{}finally{}};function cp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lw(a,u){var h=a.C,m=u.indexOf(`
`,h);return m==-1?Il:(h=Number(u.substring(h,m)),isNaN(h)?op:(m+=1,m+h>u.length?Il:(u=u.slice(m,m+h),a.C=m+h,u)))}Xt.prototype.cancel=function(){this.J=!0,Hn(this)};function Eo(a){a.S=Date.now()+a.I,lp(a,a.I)}function lp(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Gi(y(a.ba,a),u)}function El(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Xt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(aw(this.i,this.A),this.L!=2&&(zi(),Ke(17)),Hn(this),this.s=2,Wi(this)):lp(this,this.S-a)};function Wi(a){a.j.G==0||a.J||Vp(a.j,a)}function Hn(a){El(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Jf(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Tl(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||Al(h.h,a))){if(!a.K&&Al(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Do(h),Co(h);else break e;Cl(h),Ke(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Gi(y(h.Za,h),6e3));if(1>=hp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kn(h,11)}else if((a.K||h.g==a)&&Do(h),!F(u))for(S=h.Da.g.parse(u),u=0;u<S.length;u++){let se=S[u];if(h.T=se[0],se=se[1],h.G==2)if(se[0]=="c"){h.K=se[1],h.ia=se[2];let qe=se[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));let Ue=se[4];Ue!=null&&(h.Aa=Ue,h.j.info("SVER="+h.Aa));let Lr=se[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(m=1.5*Lr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;let yt=a.g;if(yt){let Oo=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oo){var C=m.h;C.g||Oo.indexOf("spdy")==-1&&Oo.indexOf("quic")==-1&&Oo.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Sl(C,C.h),C.h=null))}if(m.D){let Dl=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(m.ya=Dl,fe(m.I,m.D,Dl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var q=a;if(m.qa=$p(m,m.J?m.ia:null,m.W),q.K){fp(m.h,q);var ue=q,xe=m.L;xe&&(ue.I=xe),ue.B&&(El(ue),Eo(ue)),m.g=q}else Op(m);0<h.i.length&&ko(h)}else se[0]!="stop"&&se[0]!="close"||Kn(h,7);else h.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Kn(h,7):Rl(h):se[0]!="noop"&&h.l&&h.l.ta(se),h.v=0)}}zi(4)}catch{}}var uw=class{constructor(a,u){this.g=a,this.map=u}};function up(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hp(a){return a.h?1:a.g?a.g.size:0}function Al(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Sl(a,u){a.g?a.g.add(u):a.h=u}function fp(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}up.prototype.cancel=function(){if(this.i=pp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function pp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(let h of a.g.values())u=u.concat(h.D);return u}return V(a.i)}function dw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,m=0;m<h;m++)u.push(a[m]);return u}u=[],h=0;for(m in a)u[h++]=a[m];return u}function hw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(let m in a)u[h++]=m;return u}}}function mp(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=hw(a),m=dw(a),S=m.length,C=0;C<S;C++)u.call(void 0,m[C],h&&h[C],a)}var gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fw(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),S=null;if(0<=m){var C=a[h].substring(0,m);S=a[h].substring(m+1)}else C=a[h];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wn){this.h=a.h,To(this,a.j),this.o=a.o,this.g=a.g,Ao(this,a.s),this.l=a.l;var u=a.i,h=new Yi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),vp(this,h),this.m=a.m}else a&&(u=String(a).match(gp))?(this.h=!1,To(this,u[1]||"",!0),this.o=Ki(u[2]||""),this.g=Ki(u[3]||"",!0),Ao(this,u[4]),this.l=Ki(u[5]||"",!0),vp(this,u[6]||"",!0),this.m=Ki(u[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}Wn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Qi(u,_p,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Qi(u,_p,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Qi(h,h.charAt(0)=="/"?gw:mw,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Qi(h,_w)),a.join("")};function Lt(a){return new Wn(a)}function To(a,u,h){a.j=h?Ki(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ao(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function vp(a,u,h){u instanceof Yi?(a.i=u,yw(a.i,a.h)):(h||(u=Qi(u,vw)),a.i=new Yi(u,a.h))}function fe(a,u,h){a.i.set(u,h)}function So(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ki(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qi(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,pw),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _p=/[#\/\?@]/g,mw=/[#\?:]/g,gw=/[#\?]/g,vw=/[#\?@]/g,_w=/#/g;function Yi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Zt(a){a.g||(a.g=new Map,a.h=0,a.i&&fw(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Yi.prototype,n.add=function(a,u){Zt(this),this.i=null,a=xr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function yp(a,u){Zt(a),u=xr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function wp(a,u){return Zt(a),u=xr(a,u),a.g.has(u)}n.forEach=function(a,u){Zt(this),this.g.forEach(function(h,m){h.forEach(function(S){a.call(u,S,m,this)},this)},this)},n.na=function(){Zt(this);let a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){let S=a[m];for(let C=0;C<S.length;C++)h.push(u[m])}return h},n.V=function(a){Zt(this);let u=[];if(typeof a=="string")wp(this,a)&&(u=u.concat(this.g.get(xr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return Zt(this),this.i=null,a=xr(this,a),wp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ip(a,u,h){yp(a,u),0<h.length&&(a.i=null,a.g.set(xr(a,u),V(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];let C=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var S=C;q[m]!==""&&(S+="="+encodeURIComponent(String(q[m]))),a.push(S)}}return this.i=a.join("&")};function xr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function yw(a,u){u&&!a.j&&(Zt(a),a.i=null,a.g.forEach(function(h,m){var S=m.toLowerCase();m!=S&&(yp(this,m),Ip(this,S,h))},a)),a.j=u}function ww(a,u){let h=new Hi;if(c.Image){let m=new Image;m.onload=E(en,h,"TestLoadImage: loaded",!0,u,m),m.onerror=E(en,h,"TestLoadImage: error",!1,u,m),m.onabort=E(en,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(en,h,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Iw(a,u){let h=new Hi,m=new AbortController,S=setTimeout(()=>{m.abort(),en(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?en(h,"TestPingServer: ok",!0,u):en(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),en(h,"TestPingServer: error",!1,u)})}function en(a,u,h,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(h)}catch{}}function bw(){this.g=new iw}function Ew(a,u,h){let m=h||"";try{mp(a,function(S,C){let q=S;d(S)&&(q=gl(S)),u.push(m+C+"="+encodeURIComponent(q))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Ji(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Ji,vl),Ji.prototype.g=function(){return new Po(this.l,this.j)},Ji.prototype.i=function(a){return function(){return a}}({});function Po(a,u){Fe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Po,Fe),n=Po.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Zi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xi(this):Zi(this),this.readyState==3&&bp(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Xi(this))},n.Qa=function(a){this.g&&(this.response=a,Xi(this))},n.ga=function(){this.g&&Xi(this)};function Xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zi(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function Zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ep(a){let u="";return M(a,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function Pl(a,u,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Ep(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):fe(a,u,h))}function ye(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ye,Fe);var Tw=/^https?$/i,Aw=["POST","PUT"];n=ye.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wl.g(),this.v=this.o?Xf(this.o):Xf(wl),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Tp(this,C);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)h.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(let C of m.keys())h.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Aw,u,void 0))||m||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,q]of h)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pp(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Tp(this,C)}};function Tp(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ap(a),Ro(a)}function Ap(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sp(this):this.bb())},n.bb=function(){Sp(this)};function Sp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mt(a)!=4||a.Z()!=2)){if(a.u&&Mt(a)==4)Kf(a.Ea,0,a);else if(We(a,"readystatechange"),Mt(a)==4){a.h=!1;try{let q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var m;if(m=q===0){var S=String(a.D).match(gp)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!Tw.test(S?S.toLowerCase():"")}h=m}if(h)We(a,"complete"),We(a,"success");else{a.m=6;try{var C=2<Mt(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Ap(a)}}finally{Ro(a)}}}}function Ro(a,u){if(a.g){Pp(a);let h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||We(a,"ready");try{h.onreadystatechange=m}catch{}}}function Pp(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Mt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),rw(u)}};function Rp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sw(a){let u={};a=(a.g&&2<=Mt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var h=T(a[m]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=u[S]||[];u[S]=C,C.push(h)}w(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function Cp(a){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,a),this.cb=es("retryDelaySeedMs",1e4,a),this.Wa=es("forwardChannelMaxRetries",2,a),this.wa=es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new up(a&&a.concurrentRequestLimit),this.Da=new bw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cp.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,m){Ke(0),this.W=a,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=$p(this,null,this.W),ko(this)};function Rl(a){if(kp(a),a.G==3){var u=a.U++,h=Lt(a.I);if(fe(h,"SID",a.K),fe(h,"RID",u),fe(h,"TYPE","terminate"),ts(a,h),u=new Xt(a,a.j,u),u.L=2,u.v=So(Lt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Fp(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Eo(u)}Mp(a)}function Co(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function kp(a){Co(a),a.u&&(c.clearTimeout(a.u),a.u=null),Do(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ko(a){if(!dp(a.h)&&!a.s){a.s=!0;var u=a.Ga;vt||Dr(),jn||(vt(),jn=!0),Bn.add(u,a),a.B=0}}function Pw(a,u){return hp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Gi(y(a.Ga,a,u),Lp(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let S=new Xt(this,this.j,a),C=this.o;if(this.S&&(C?(C=g(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Np(this,S,u),h=Lt(this.I),fe(h,"RID",a),fe(h,"CVER",22),this.D&&fe(h,"X-HTTP-Session-Id",this.D),ts(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(Ep(C)))+"&"+u:this.m&&Pl(h,this.m,C)),Sl(this.h,S),this.Ua&&fe(h,"TYPE","init"),this.P?(fe(h,"$req",u),fe(h,"SID","null"),S.T=!0,bl(S,h,null)):bl(S,h,u),this.G=2}}else this.G==3&&(a?Dp(this,a):this.i.length==0||dp(this.h)||Dp(this))};function Dp(a,u){var h;u?h=u.l:h=a.U++;let m=Lt(a.I);fe(m,"SID",a.K),fe(m,"RID",h),fe(m,"AID",a.T),ts(a,m),a.m&&a.o&&Pl(m,a.m,a.o),h=new Xt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Np(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sl(a.h,h),bl(h,m,u)}function ts(a,u){a.H&&M(a.H,function(h,m){fe(u,m,h)}),a.l&&mp({},function(h,m){fe(u,m,h)})}function Np(a,u,h){h=Math.min(a.i.length,h);var m=a.l?y(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){let q=["count="+h];C==-1?0<h?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let ue=!0;for(let xe=0;xe<h;xe++){let se=S[xe].g,qe=S[xe].map;if(se-=C,0>se)C=Math.max(0,S[xe].g-100),ue=!1;else try{Ew(qe,q,"req"+se+"_")}catch{m&&m(qe)}}if(ue){m=q.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,m}function Op(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;vt||Dr(),jn||(vt(),jn=!0),Bn.add(u,a),a.v=0}}function Cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Gi(y(a.Fa,a),Lp(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Gi(y(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Co(this),xp(this))};function kl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function xp(a){a.g=new Xt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Lt(a.qa);fe(u,"RID","rpc"),fe(u,"SID",a.K),fe(u,"AID",a.T),fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(u,"TO",a.ja),fe(u,"TYPE","xmlhttp"),ts(a,u),a.m&&a.o&&Pl(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=So(Lt(u)),h.m=null,h.P=!0,ap(h,a)}n.Za=function(){this.C!=null&&(this.C=null,Co(this),Cl(this),Ke(19))};function Do(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Vp(a,u){var h=null;if(a.g==u){Do(a),kl(a),a.g=null;var m=2}else if(Al(a.h,u))h=u.D,fp(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=wo(),We(m,new rp(m,h)),ko(a)}else Op(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&Pw(a,u)||m==2&&Cl(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),S){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function Lp(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Kn(a,u){if(a.j.info("Error code "+u),u==2){var h=y(a.fb,a),m=a.Xa;let S=!m;m=new Wn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||To(m,"https"),So(m),S?ww(m.toString(),h):Iw(m.toString(),h)}else Ke(2);a.G=0,a.l&&a.l.sa(u),Mp(a),kp(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Mp(a){if(a.G=0,a.ka=[],a.l){let u=pp(a.h);(u.length!=0||a.i.length!=0)&&(L(a.ka,u),L(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function $p(a,u,h){var m=h instanceof Wn?Lt(h):new Wn(h);if(m.g!="")u&&(m.g=u+"."+m.g),Ao(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new Wn(null);m&&To(C,m),u&&(C.g=u),S&&Ao(C,S),h&&(C.l=h),m=C}return h=a.D,u=a.ya,h&&u&&fe(m,h,u),fe(m,"VER",a.la),ts(a,m),m}function Fp(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ye(new Ji({eb:h})):new ye(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}n=qp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function No(){}No.prototype.g=function(a,u){return new et(a,u)};function et(a,u){Fe.call(this),this.g=new Cp(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Vr(this)}N(et,Fe),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Rl(this.g)},et.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=gl(a),a=h);u.i.push(new uw(u.Ya++,a)),u.G==3&&ko(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,et.aa.N.call(this)};function Up(a){_l.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(let h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}N(Up,_l);function jp(){yl.call(this),this.status=1}N(jp,yl);function Vr(a){this.g=a}N(Vr,qp),Vr.prototype.ua=function(){We(this.g,"a")},Vr.prototype.ta=function(a){We(this.g,new Up(a))},Vr.prototype.sa=function(a){We(this.g,new jp)},Vr.prototype.ra=function(){We(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Fu=Bt.createWebChannelTransport=function(){return new No},$u=Bt.getStatEventTarget=function(){return wo()},Mu=Bt.Event=Gn,va=Bt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,ys=Bt.ErrorCode=Io,ip.COMPLETE="complete",Lu=Bt.EventType=ip,Zf.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Hr=Bt.WebChannel=Zf,ab=Bt.FetchXmlHttpFactory=Ji,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Vu=Bt.XhrIo=ye}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});var ig="@firebase/firestore",sg="4.8.0";var Oe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");var Vi="11.10.0";var yr=new nn("@firebase/firestore");function Zr(){return yr.logLevel}function $(n,...e){if(yr.logLevel<=ee.DEBUG){let t=e.map(Hh);yr.debug(`Firestore (${Vi}): ${n}`,...t)}}function Ie(n,...e){if(yr.logLevel<=ee.ERROR){let t=e.map(Hh);yr.error(`Firestore (${Vi}): ${n}`,...t)}}function wn(n,...e){if(yr.logLevel<=ee.WARN){let t=e.map(Hh);yr.warn(`Firestore (${Vi}): ${n}`,...t)}}function Hh(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yv(n,r,t)}function yv(n,e,t){let r=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ie(r),new Error(r)}function W(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yv(e,i,r)}function H(n,e){return n}var x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},j=class extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Nt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Wu=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Ku=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}};var Qu=class{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nt,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nt)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}},Yu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Ju=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Yu(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Da=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Xu=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);let r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Da(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Da(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function cb(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function wv(){return new TextEncoder}var Vs=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=cb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function J(n,e){return n<e?-1:n>e?1:0}function Zu(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return J(r,i);{let s=wv(),o=lb(s.encode(og(n,t)),s.encode(og(e,t)));return o!==0?o:J(r,i)}}t+=r>65535?2:1}return J(n.length,e.length)}function og(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lb(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return J(n[t],e[t]);return J(n.length,e.length)}function li(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Iv(n){return n+"\0"}var ag="__name__",Na=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return J(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):Zu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jt.fromString(e.substring(4,e.length-2))}},oe=class n extends Na{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},ub=/^[_a-zA-Z][_a-zA-Z0-9]*$/,De=class n extends Na{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return ub.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ag}static keyField(){return new n([ag])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var B=class n{constructor(e){this.path=e}static fromPath(e){return new n(oe.fromString(e))}static fromName(e){return new n(oe.fromString(e).popFirst(5))}static empty(){return new n(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new oe(e.slice()))}};function bv(n,e,t){if(!t)throw new j(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function db(n,e,t,r){if(e===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cg(n){if(!B.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lg(n){if(B.isDocumentKey(n))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ev(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function mn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Wh(n);throw new j(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ae(n,e){let t={typeString:n};return e&&(t.value=e),t}function eo(n,e){if(!Ev(n))throw new j(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new j(x.INVALID_ARGUMENT,t);return!0}var ug=-62135596800,dg=1e6,ge=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*dg);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ug)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dg}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(eo(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Ae("string",ge._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};var Q=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new ge(0,0))}static max(){return new n(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var ui=-1,di=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function ed(n){return n.fields.find(e=>e.kind===2)}function sr(n){return n.fields.filter(e=>e.kind!==2)}di.UNKNOWN_ID=-1;var si=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Ls=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,ht.min())}};function Tv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new ht(i,B.empty(),e)}function Av(n){return new ht(n.readTime,n.key,ui)}var ht=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(Q.min(),B.empty(),ui)}static max(){return new n(Q.max(),B.empty(),ui)}};function Kh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}var Sv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Oa=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Nn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Sv)throw n;$("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,o=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(f=>{o[d]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var rt="SimpleDb",xa=class n{static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new pr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Nt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new pr(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{let i=Qh(r.target.error);this.S.reject(new pr(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||($(rt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new nd(t)}},hi=class n{static delete(e){return $(rt,"Removing database:",e),ar(Ll().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Lo())return!1;if(n.F())return!0;let e=ke(),t=n.M(e),r=0<t&&t<10,i=Pv(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,n.M(ke())===12.2&&Ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||($(rt,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{r(new pr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new j(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new pr(e,o))},i.onupgradeneeded=s=>{$(rt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{$(rt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{let r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(wn('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.k(e);let c=xa.open(this.db,e,s?"readonly":"readwrite",r),l=i(c).next(d=>(c.v(),d)).catch(d=>(c.abort(d),P.reject(d))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){let l=c,d=l.name!=="FirebaseError"&&o<3;if($(rt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}};function Pv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var td=class{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return ar(this.$.delete())}},pr=class extends j{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function On(n){return n.name==="IndexedDbTransactionError"}var nd=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?($(rt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):($(rt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ar(r)}add(e){return $(rt,"ADD",this.store.name,e,e),ar(this.store.add(e))}get(e){return ar(this.store.get(e)).next(t=>(t===void 0&&(t=null),$(rt,"GET",this.store.name,e,t),t))}delete(e){return $(rt,"DELETE",this.store.name,e),ar(this.store.delete(e))}count(){return $(rt,"COUNT",this.store.name),ar(this.store.count())}j(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new P((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{let s=this.cursor(r),o=[];return this.J(s,(c,l)=>{o.push(l)}).next(()=>o)}}H(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new P((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){$(rt,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Z=!1;let i=this.cursor(r);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.J(i,t)}ee(e){let t=this.cursor({});return new P((r,i)=>{t.onerror=s=>{let o=Qh(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}J(e,t){let r=[];return new P((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let l=new td(c),d=t(c.primaryKey,c.value,l);if(d instanceof P){let f=d.catch(p=>(l.done(),P.reject(p)));r.push(f)}l.isDone?i():l.W===null?c.continue():c.continue(l.W)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function ar(n){return new P((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Qh(r.target.error);t(i)}})}var hg=!1;function Qh(n){let e=hi.M(ke());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hg||(hg=!0,setTimeout(()=>{throw r},0)),r}}return n}var Ss="IndexBackfiller",rd=class{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){$(Ss,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let t=await this.te.re();$(Ss,`Documents written: ${t}`)}catch(t){On(t)?$(Ss,"Ignoring IndexedDB error during index backfill: ",t):await Nn(t)}await this.ne(6e4)})}},id=class{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){let r=new Set,i=t,s=!0;return P.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $(Ss,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>($(Ss,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((i,s)=>{let o=Av(s);Kh(o,r)>0&&(r=o)}),new ht(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Be=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Be.ue=-1;var mr=-1;function Oc(n){return n==null}function Ms(n){return n===0&&1/n==-1/0}function Rv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Va="";function ze(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fg(e)),e=hb(n.get(t),e);return fg(e)}function hb(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case Va:t+="";break;default:t+=s}}return t}function fg(n){return n+Va+""}function kt(n){let e=n.length;if(W(e>=2,64408,{path:n}),e===2)return W(n.charAt(0)===Va&&n.charAt(1)==="",56145,{path:n}),oe.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let o=n.indexOf(Va,s);switch((o<0||o>t)&&G(50515,{path:n}),n.charAt(o+1)){case"":let c=n.substring(s,o),l;i.length===0?l=c:(i+=c,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:G(61167,{path:n})}s=o+2}return new oe(r)}var or="remoteDocuments",to="owner",Wr="owner",$s="mutationQueues",fb="userId",It="mutations",pg="batchId",dr="userMutationsIndex",mg=["userId","batchId"];function Ea(n,e){return[n,ze(e)]}function Cv(n,e,t){return[n,ze(e),t]}var pb={},fi="documentMutations",La="remoteDocumentsV14",mb=["prefixPath","collectionGroup","readTime","documentId"],Ta="documentKeyIndex",gb=["prefixPath","collectionGroup","documentId"],kv="collectionGroupIndex",vb=["collectionGroup","readTime","prefixPath","documentId"],Fs="remoteDocumentGlobal",sd="remoteDocumentGlobalKey",pi="targets",Dv="queryTargetsIndex",_b=["canonicalId","targetId"],mi="targetDocuments",yb=["targetId","path"],Yh="documentTargetsIndex",wb=["path","targetId"],Ma="targetGlobalKey",gr="targetGlobal",qs="collectionParents",Ib=["collectionId","parent"],gi="clientMetadata",bb="clientId",xc="bundles",Eb="bundleId",Vc="namedQueries",Tb="name",Jh="indexConfiguration",Ab="indexId",od="collectionGroupIndex",Sb="collectionGroup",Ps="indexState",Pb=["indexId","uid"],Nv="sequenceNumberIndex",Rb=["uid","sequenceNumber"],Rs="indexEntries",Cb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ov="documentKeyIndex",kb=["indexId","uid","orderedDocumentKey"],Lc="documentOverlays",Db=["userId","collectionPath","documentId"],ad="collectionPathOverlayIndex",Nb=["userId","collectionPath","largestBatchId"],xv="collectionGroupOverlayIndex",Ob=["userId","collectionGroup","largestBatchId"],Xh="globals",xb="name",Vv=[$s,It,fi,or,pi,to,gr,mi,gi,Fs,qs,xc,Vc],Vb=[...Vv,Lc],Lv=[$s,It,fi,La,pi,to,gr,mi,gi,Fs,qs,xc,Vc,Lc],Mv=Lv,Zh=[...Mv,Jh,Ps,Rs],Lb=Zh,$v=[...Zh,Xh],Mb=$v;var Us=class extends Oa{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}};function Ne(n,e){let t=H(n);return hi.N(t.ce,e)}function gg(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fv(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var pe=class n{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ii(this.root,e,this.comparator,!0)}},ii=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ot=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}};Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ce=class n{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $a(this.data.getIterator())}getIteratorFrom(e){return new $a(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},$a=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function Kr(n){return n.hasNext()?n.getNext():void 0}var it=class n{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new n([])}unionWith(e){let t=new ce(De.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Fa=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Se=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Fa("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Se.EMPTY_BYTE_STRING=new Se("");var $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(W(!!n,39018),typeof n=="string"){let e=0,t=$b.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}var qv="server_timestamp",Uv="__type__",jv="__previous_value__",Bv="__local_write_time__";function ef(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Uv])===null||t===void 0?void 0:t.stringValue)===qv}function Mc(n){let e=n.mapValue.fields[jv];return ef(e)?Mc(e):e}function js(n){let e=Gt(n.mapValue.fields[Bv].timestampValue);return new ge(e.seconds,e.nanos)}var cd=class{constructor(e,t,r,i,s,o,c,l,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}},qa="(default)",vi=class n{constructor(e,t){this.projectId=e,this.database=t||qa}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===qa}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var tf="__type__",zv="__max__",pn={mapValue:{fields:{__type__:{stringValue:zv}}}},nf="__vector__",_i="value",Aa={nullValue:"NULL_VALUE"};function In(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ef(n)?4:Gv(n)?9007199254740991:$c(n)?10:11:G(28295,{value:n})}function xt(n,e){if(n===e)return!0;let t=In(n);if(t!==In(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Gt(i.timestampValue),c=Gt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return me(i.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(i.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return me(i.integerValue)===me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=me(i.doubleValue),c=me(s.doubleValue);return o===c?Ms(o)===Ms(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return li(n.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(gg(o)!==gg(c))return!1;for(let l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!xt(o[l],c[l])))return!1;return!0}(n,e);default:return G(52216,{left:n})}}function Bs(n,e){return(n.values||[]).find(t=>xt(t,e))!==void 0}function bn(n,e){if(n===e)return 0;let t=In(n),r=In(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){let c=me(s.integerValue||s.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return vg(n.timestampValue,e.timestampValue);case 4:return vg(js(n),js(e));case 5:return Zu(n.stringValue,e.stringValue);case 6:return function(s,o){let c=Ht(s),l=Ht(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){let f=J(c[d],l[d]);if(f!==0)return f}return J(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let c=J(me(s.latitude),me(o.latitude));return c!==0?c:J(me(s.longitude),me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _g(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,d,f;let p=s.fields||{},y=o.fields||{},E=(c=p[_i])===null||c===void 0?void 0:c.arrayValue,N=(l=y[_i])===null||l===void 0?void 0:l.arrayValue,V=J(((d=E?.values)===null||d===void 0?void 0:d.length)||0,((f=N?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:_g(E,N)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===pn.mapValue&&o===pn.mapValue)return 0;if(s===pn.mapValue)return 1;if(o===pn.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){let y=Zu(l[p],f[p]);if(y!==0)return y;let E=bn(c[l[p]],d[f[p]]);if(E!==0)return E}return J(l.length,f.length)}(n.mapValue,e.mapValue);default:throw G(23264,{le:t})}}function vg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);let t=Gt(n),r=Gt(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function _g(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=bn(t[i],r[i]);if(s)return s}return J(t.length,r.length)}function yi(n){return ld(n)}function ld(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=ld(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${ld(t.fields[o])}`;return i+"}"}(n.mapValue):G(61005,{value:n})}function Sa(n){switch(In(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Mc(n);return e?16+Sa(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Sa(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return xn(r.fields,(s,o)=>{i+=s.length+Sa(o)}),i}(n.mapValue);default:throw G(13486,{value:n})}}function rf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ud(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function yg(n){return!!n&&"nullValue"in n}function wg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pa(n){return!!n&&"mapValue"in n}function $c(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[tf])===null||t===void 0?void 0:t.stringValue)===nf}function Cs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Cs(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zv}var Hv={mapValue:{fields:{[tf]:{stringValue:nf},[_i]:{arrayValue:{}}}}};function Fb(n){return"nullValue"in n?Aa:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?rf(vi.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?$c(n)?Hv:{mapValue:{}}:G(35942,{value:n})}function qb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?rf(vi.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Hv:"mapValue"in n?$c(n)?{mapValue:{}}:pn:G(61959,{value:n})}function Ig(n,e){let t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function bg(n,e){let t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var Qe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(t)}setAll(e){let t=De.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Cs(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Pa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){xn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Cs(this.value))}};function Wv(n){let e=[];return xn(n.fields,(t,r)=>{let i=new De([t]);if(Pa(r)){let s=Wv(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new it(e)}var Le=class n{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,Q.min(),Q.min(),Q.min(),Qe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,Q.min(),Q.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,Q.min(),Q.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var En=class{constructor(e,t){this.position=e,this.inclusive=t}};function Eg(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],o=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=bn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}var wi=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Ub(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Ua=class{},ne=class n extends Ua{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fd(e,t,r):t==="array-contains"?new gd(e,r):t==="in"?new ja(e,r):t==="not-in"?new vd(e,r):t==="array-contains-any"?new _d(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pd(e,r):new md(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bn(t,this.value)):t!==null&&In(this.value)===In(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ae=class n extends Ua{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return Ii(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Ii(n){return n.op==="and"}function dd(n){return n.op==="or"}function sf(n){return Kv(n)&&Ii(n)}function Kv(n){for(let e of n.filters)if(e instanceof ae)return!1;return!0}function hd(n){if(n instanceof ne)return n.field.canonicalString()+n.op.toString()+yi(n.value);if(sf(n))return n.filters.map(e=>hd(e)).join(",");{let e=n.filters.map(t=>hd(t)).join(",");return`${n.op}(${e})`}}function Qv(n,e){return n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.field.isEqual(i.field)&&xt(r.value,i.value)}(n,e):n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&Qv(o,i.filters[c]),!0):!1}(n,e):void G(19439)}function Yv(n,e){let t=n.filters.concat(e);return ae.create(t,n.op)}function Jv(n){return n instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${yi(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(Jv).join(" ,")+"}"}(n):"Filter"}var fd=class extends ne{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.matchesComparison(t)}},pd=class extends ne{constructor(e,t){super(e,"in",t),this.keys=Xv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},md=class extends ne{constructor(e,t){super(e,"not-in",t),this.keys=Xv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Xv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}var gd=class extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return zs(t)&&Bs(t.arrayValue,this.value)}},ja=class extends ne{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Bs(this.value.arrayValue,t)}},vd=class extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bs(this.value.arrayValue,t)}},_d=class extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Bs(this.value.arrayValue,r))}};var yd=class{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}};function wd(n,e=null,t=[],r=[],i=null,s=null,o=null){return new yd(n,e,t,r,i,s,o)}function wr(n){let e=H(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>hd(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yi(r)).join(",")),e.Pe=t}return e.Pe}function no(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ub(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Tg(n.startAt,e.startAt)&&Tg(n.endAt,e.endAt)}function Ba(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function za(n,e){return n.filters.filter(t=>t instanceof ne&&t.field.isEqual(e))}function Ag(n,e,t){let r=Aa,i=!0;for(let s of za(n,e)){let o=Aa,c=!0;switch(s.op){case"<":case"<=":o=Fb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Aa}Ig({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];Ig({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Sg(n,e,t){let r=pn,i=!0;for(let s of za(n,e)){let o=pn,c=!0;switch(s.op){case">=":case">":o=qb(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=pn}bg({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];bg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}var bi=class{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Zv(n,e,t,r,i,s,o,c){return new bi(n,e,t,r,i,s,o,c)}function Fc(n){return new bi(n)}function Pg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jb(n){return n.collectionGroup!==null}function ks(n){let e=H(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ce(De.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new wi(s,r))}),t.has(De.keyField().canonicalString())||e.Te.push(new wi(De.keyField(),r))}return e.Te}function at(n){let e=H(n);return e.Ie||(e.Ie=Bb(e,ks(n))),e.Ie}function Bb(n,e){if(n.limitType==="F")return wd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new wi(i.field,s)});let t=n.endAt?new En(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new En(n.startAt.position,n.startAt.inclusive):null;return wd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Id(n,e,t){return new bi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qc(n,e){return no(at(n),at(e))&&n.limitType===e.limitType}function e_(n){return`${wr(at(n))}|lt:${n.limitType}`}function ei(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Jv(i)).join(", ")}]`),Oc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>yi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>yi(i)).join(",")),`Target(${r})`}(at(n))}; limitType=${n.limitType})`}function ro(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){let d=Eg(o,c,l);return o.inclusive?d<=0:d<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,c,l){let d=Eg(o,c,l);return o.inclusive?d>=0:d>0}(r.endAt,ks(r),i))}(n,e)}function t_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function n_(n){return(e,t)=>{let r=!1;for(let i of ks(n)){let s=zb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zb(n,e,t){let r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,o,c){let l=o.data.field(s),d=c.data.field(s);return l!==null&&d!==null?bn(l,d):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}var bt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Fv(this.inner)}size(){return this.innerSize}};var Gb=new pe(B.comparator);function st(){return Gb}var r_=new pe(B.comparator);function Ts(...n){let e=r_;for(let t of n)e=e.insert(t.key,t);return e}function i_(n){let e=r_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dt(){return Ds()}function s_(){return Ds()}function Ds(){return new bt(n=>n.toString(),(n,e)=>n.isEqual(e))}var Hb=new pe(B.comparator),Wb=new ce(B.comparator);function Z(...n){let e=Wb;for(let t of n)e=e.add(t);return e}var Kb=new ce(J);function of(){return Kb}function af(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(e)?"-0":e}}function o_(n){return{integerValue:""+n}}function Qb(n,e){return Rv(e)?o_(e):af(n,e)}var Ei=class{constructor(){this._=void 0}};function Yb(n,e,t){return n instanceof Tn?function(i,s){let o={fields:{[Uv]:{stringValue:qv},[Bv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ef(s)&&(s=Mc(s)),s&&(o.fields[jv]=s),{mapValue:o}}(t,e):n instanceof An?c_(n,e):n instanceof Sn?l_(n,e):function(i,s){let o=a_(i,s),c=Rg(o)+Rg(i.Ee);return ud(o)&&ud(i.Ee)?o_(c):af(i.serializer,c)}(n,e)}function Jb(n,e,t){return n instanceof An?c_(n,e):n instanceof Sn?l_(n,e):t}function a_(n,e){return n instanceof Ir?function(r){return ud(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Tn=class extends Ei{},An=class extends Ei{constructor(e){super(),this.elements=e}};function c_(n,e){let t=u_(e);for(let r of n.elements)t.some(i=>xt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Sn=class extends Ei{constructor(e){super(),this.elements=e}};function l_(n,e){let t=u_(e);for(let r of n.elements)t=t.filter(i=>!xt(i,r));return{arrayValue:{values:t}}}var Ir=class extends Ei{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Rg(n){return me(n.integerValue||n.doubleValue)}function u_(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ga=class{constructor(e,t){this.field=e,this.transform=t}};function Xb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof An&&i instanceof An||r instanceof Sn&&i instanceof Sn?li(r.elements,i.elements,xt):r instanceof Ir&&i instanceof Ir?xt(r.Ee,i.Ee):r instanceof Tn&&i instanceof Tn}(n.transform,e.transform)}var bd=class{constructor(e,t){this.version=e,this.transformResults=t}},ot=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Ra(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Ti=class{};function d_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ai(n.key,ot.none()):new Pn(n.key,n.data,ot.none());{let t=n.data,r=Qe.empty(),i=new ce(De.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Et(n.key,r,new it(i.toArray()),ot.none())}}function Zb(n,e,t){n instanceof Pn?function(i,s,o){let c=i.value.clone(),l=kg(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Et?function(i,s,o){if(!Ra(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=kg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(h_(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ns(n,e,t,r){return n instanceof Pn?function(s,o,c,l){if(!Ra(s.precondition,o))return c;let d=s.value.clone(),f=Dg(s.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Et?function(s,o,c,l){if(!Ra(s.precondition,o))return c;let d=Dg(s.fieldTransforms,l,o),f=o.data;return f.setAll(h_(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,c){return Ra(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function eE(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=a_(r.transform,i||null);s!=null&&(t===null&&(t=Qe.empty()),t.set(r.field,s))}return t||null}function Cg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&li(r,i,(s,o)=>Xb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Pn=class extends Ti{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Et=class extends Ti{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function h_(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function kg(n,e,t){let r=new Map;W(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,Jb(o,c,t[i]))}return r}function Dg(n,e,t){let r=new Map;for(let i of n){let s=i.transform,o=t.data.field(i.field);r.set(i.field,Yb(s,o,e))}return r}var Ai=class extends Ti{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Ha=class extends Ti{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Gs=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&Zb(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=s_();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let l=d_(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(t,r)=>Cg(t,r))&&li(this.baseMutations,e.baseMutations,(t,r)=>Cg(t,r))}},Ed=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){W(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return Hb}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n(e,t,r,i)}};var Hs=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Td=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Ee,re;function tE(n){switch(n){case x.OK:return G(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function f_(n){if(n===void 0)return Ie("GRPC error has no .code"),x.UNKNOWN;switch(n){case Ee.OK:return x.OK;case Ee.CANCELLED:return x.CANCELLED;case Ee.UNKNOWN:return x.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return x.INTERNAL;case Ee.UNAVAILABLE:return x.UNAVAILABLE;case Ee.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ee.NOT_FOUND:return x.NOT_FOUND;case Ee.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ee.ABORTED:return x.ABORTED;case Ee.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ee.DATA_LOSS:return x.DATA_LOSS;default:return G(39323,{code:n})}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";var Ng=null;var nE=new jt([4294967295,4294967295],0);function Og(n){let e=wv().encode(n),t=new xu;return t.update(e),new Uint8Array(t.digest())}function xg(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jt([t,r],0),new jt([i,s],0)]}var Ad=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hr(`Invalid padding: ${t}`);if(r<0)throw new hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=jt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(jt.fromNumber(r)));return i.compare(nE)===1&&(i=new jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Og(e),[r,i]=xg(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new n(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;let t=Og(e),[r,i]=xg(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);this.we(o)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},hr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Ws=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Ks.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(Q.min(),i,new pe(J),st(),Z())}},Ks=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,Z(),Z(),Z())}};var oi=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},Wa=class{constructor(e,t){this.targetId=e,this.De=t}},Ka=class{constructor(e,t,r=Se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Qa=class{constructor(){this.ve=0,this.Ce=Vg(),this.Fe=Se.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Z(),t=Z(),r=Z();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Ks(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Vg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},Sd=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=st(),this.je=_a(),this.Je=_a(),this.He=new pe(J)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(Ba(s))if(r===0){let o=new B(s.path);this.Xe(t,o,Le.newNoDocument(o,Q.min()))}else W(r===1,20013,{expectedCount:r});else{let o=this.ot(t);if(o!==r){let c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Ng?.ct(function(f,p,y,E,N){var V,L,z,F,O,Y;let k={localCacheCount:f,existenceFilterCount:p.count,databaseId:y.database,projectId:y.projectId},M=p.unchangedNames;return M&&(k.bloomFilter={applied:N===0,hashCount:(V=M?.hashCount)!==null&&V!==void 0?V:0,bitmapLength:(F=(z=(L=M?.bits)===null||L===void 0?void 0:L.bitmap)===null||z===void 0?void 0:z.length)!==null&&F!==void 0?F:0,padding:(Y=(O=M?.bits)===null||O===void 0?void 0:O.padding)!==null&&Y!==void 0?Y:0,mightContain:w=>{var g;return(g=E?.mightContain(w))!==null&&g!==void 0&&g}}),k}(o,e.De,this.We.lt(),c,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Ht(r).toUint8Array()}catch(l){if(l instanceof Fa)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ad(o,i,s)}catch(l){return wn(l instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,o)=>{let c=this.st(o);if(c){if(s.current&&Ba(c.target)){let l=new B(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,Le.newNoDocument(l,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=Z();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));let i=new Ws(e,t,this.He,this.ze,r);return this.ze=st(),this.je=_a(),this.Je=_a(),this.He=new pe(J),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Qa,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ce(J),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ce(J),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Qa),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function _a(){return new pe(B.comparator)}function Vg(){return new pe(B.comparator)}var rE={asc:"ASCENDING",desc:"DESCENDING"},iE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sE={and:"AND",or:"OR"},Pd=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Rd(n,e){return n.useProto3Json||Oc(e)?e:{value:e}}function Si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oE(n,e){return Si(n,e.toTimestamp())}function Ye(n){return W(!!n,49232),Q.fromTimestamp(function(t){let r=Gt(t);return new ge(r.seconds,r.nanos)}(n))}function cf(n,e){return Cd(n,e).canonicalString()}function Cd(n,e){let t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function m_(n){let e=oe.fromString(n);return W(T_(e),10190,{key:e.toString()}),e}function Ya(n,e){return cf(n.databaseId,e.path)}function vr(n,e){let t=m_(e);if(t.get(1)!==n.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(__(t))}function g_(n,e){return cf(n.databaseId,e)}function v_(n){let e=m_(n);return e.length===4?oe.emptyPath():__(e)}function kd(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function __(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Lg(n,e,t){return{name:Ya(n,e),fields:t.value.mapValue.fields}}function aE(n,e,t){let r=vr(n,e.name),i=Ye(e.updateTime),s=e.createTime?Ye(e.createTime):Q.min(),o=new Qe({mapValue:{fields:e.fields}}),c=Le.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function cE(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(W(f===void 0||typeof f=="string",58123),Se.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Se.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){let f=d.code===void 0?x.UNKNOWN:f_(d.code);return new j(f,d.message||"")}(o);t=new Ka(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=vr(n,r.document.name),s=Ye(r.document.updateTime),o=r.document.createTime?Ye(r.document.createTime):Q.min(),c=new Qe({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(i,s,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new oi(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=vr(n,r.document),s=r.readTime?Ye(r.readTime):Q.min(),o=Le.newNoDocument(i,s),c=r.removedTargetIds||[];t=new oi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=vr(n,r.document),s=r.removedTargetIds||[];t=new oi([],s,i,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new Td(i,s),c=r.targetId;t=new Wa(c,o)}}return t}function Ja(n,e){let t;if(e instanceof Pn)t={update:Lg(n,e.key,e.value)};else if(e instanceof Ai)t={delete:Ya(n,e.key)};else if(e instanceof Et)t={update:Lg(n,e.key,e.data),updateMask:pE(e.fieldMask)};else{if(!(e instanceof Ha))return G(16599,{Rt:e.type});t={verify:Ya(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let c=o.transform;if(c instanceof Tn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof An)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Sn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ir)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(n,e.precondition)),t}function Dd(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?ot.updateTime(Ye(s.updateTime)):s.exists!==void 0?ot.exists(s.exists):ot.none()}(e.currentDocument):ot.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)W(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Tn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];l=new An(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];l=new Sn(f)}else"increment"in c?l=new Ir(o,c.increment):G(16584,{proto:c});let d=De.fromServerFormat(c.fieldPath);return new Ga(d,l)}(n,i)):[];if(e.update){e.update.name;let i=vr(n,e.update.name),s=new Qe({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(l){let d=l.fieldPaths||[];return new it(d.map(f=>De.fromServerFormat(f)))}(e.updateMask);return new Et(i,s,o,t,r)}return new Pn(i,s,t,r)}if(e.delete){let i=vr(n,e.delete);return new Ai(i,t)}if(e.verify){let i=vr(n,e.verify);return new Ha(i,t)}return G(1463,{proto:e})}function lE(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Ye(i.updateTime):Ye(s);return o.isEqual(Q.min())&&(o=Ye(s)),new bd(o,i.transformResults||[])}(t,e))):[]}function y_(n,e){return{documents:[g_(n,e.path)]}}function w_(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=g_(n,i);let s=function(d){if(d.length!==0)return E_(ae.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:ti(y.field),direction:dE(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=Rd(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function I_(n){let e=v_(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){W(r===1,65062);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){let y=b_(p);return y instanceof ae&&sf(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(N){return new wi(ni(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,Oc(y)?null:y}(t.limit));let l=null;t.startAt&&(l=function(p){let y=!!p.before,E=p.values||[];return new En(E,y)}(t.startAt));let d=null;return t.endAt&&(d=function(p){let y=!p.before,E=p.values||[];return new En(E,y)}(t.endAt)),Zv(e,i,o,s,c,"F",l,d)}function uE(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function b_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=ni(t.unaryFilter.field);return ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=ni(t.unaryFilter.field);return ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ni(t.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=ni(t.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return ne.create(ni(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(r=>b_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function dE(n){return rE[n]}function hE(n){return iE[n]}function fE(n){return sE[n]}function ti(n){return{fieldPath:n.canonicalString()}}function ni(n){return De.fromServerFormat(n.fieldPath)}function E_(n){return n instanceof ne?function(t){if(t.op==="=="){if(wg(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NAN"}};if(yg(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wg(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NAN"}};if(yg(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(t.field),op:hE(t.op),value:t.value}}}(n):n instanceof ae?function(t){let r=t.getFilters().map(i=>E_(i));return r.length===1?r[0]:{compositeFilter:{op:fE(t.op),filters:r}}}(n):G(54877,{filter:n})}function pE(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function T_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Pi=class n{constructor(e,t,r,i,s=Q.min(),o=Q.min(),c=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Xa=class{constructor(e){this.gt=e}};function mE(n,e){let t;if(e.document)t=aE(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=B.fromSegments(e.noDocument.path),i=Er(e.noDocument.readTime);t=Le.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{let r=B.fromSegments(e.unknownDocument.path),i=Er(e.unknownDocument.version);t=Le.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new ge(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),t}function Mg(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Za(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ya(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Si(s,o.version.toTimestamp()),createTime:Si(s,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:br(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:br(e.version)}}return r}function Za(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function br(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Er(n){let e=new ge(n.seconds,n.nanoseconds);return Q.fromTimestamp(e)}function cr(n,e){let t=(e.baseMutations||[]).map(s=>Dd(n.gt,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Dd(n.gt,s)),i=ge.fromMillis(e.localWriteTimeMs);return new Gs(e.batchId,i,t,r)}function As(n){let e=Er(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Er(n.lastLimboFreeSnapshotVersion):Q.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){let o=s.documents.length;return W(o===1,1966,{count:o}),at(Fc(v_(s.documents[0])))}(n.query):function(s){return at(I_(s))}(n.query),new Pi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Se.fromBase64String(n.resumeToken))}function A_(n,e){let t=br(e.snapshotVersion),r=br(e.lastLimboFreeSnapshotVersion),i;i=Ba(e.target)?y_(n.gt,e.target):w_(n.gt,e.target).Vt;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function S_(n){let e=I_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Id(e,e.limit,"L"):e}function qu(n,e){return new Hs(e.largestBatchId,Dd(n.gt,e.overlayMutation))}function $g(n,e){let t=e.path.lastSegment();return[n,ze(e.path.popLast()),t]}function Fg(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:br(r.readTime),documentKey:ze(r.documentKey.path),largestBatchId:r.largestBatchId}}var Nd=class{getBundleMetadata(e,t){return qg(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Er(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return qg(e).put(function(i){return{bundleId:i.id,createTime:br(Ye(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ug(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:S_(s.bundledQuery),readTime:Er(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ug(e).put(function(i){return{name:i.name,readTime:br(Ye(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function qg(n){return Ne(n,xc)}function Ug(n){return Ne(n,Vc)}var ec=class n{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return ws(e).get($g(this.userId,t)).next(r=>r?qu(this.serializer,r):null)}getOverlays(e,t){let r=Dt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,o)=>{let c=new Hs(t,o);i.push(this.wt(e,c))}),P.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(o=>i.add(ze(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ws(e).Y(ad,c))}),P.waitFor(s)}getOverlaysForCollection(e,t,r){let i=Dt(),s=ze(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ws(e).j(ad,o).next(c=>{for(let l of c){let d=qu(this.serializer,l);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=Dt(),o,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ws(e).X({index:xv,range:c},(l,d,f)=>{let p=qu(this.serializer,d);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return ws(e).put(function(i,s,o){let[c,l,d]=$g(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ja(i.gt,o.mutation)}}(this.serializer,this.userId,t))}};function ws(n){return Ne(n,Lc)}var Od=class{St(e){return Ne(e,Xh)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{let r=t?.value;return r?Se.fromUint8Array(r):Se.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}};var zt=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(me(e.integerValue));else if("doubleValue"in e){let r=me(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Ms(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Gt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Ht(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Gv(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):$c(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):G(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let o=_i,c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(me(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),B.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};zt.Ut=new zt;var Qr=255;function gE(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function jg(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let o=gE(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var xd=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{let i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{let i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){let t=this.Xt(e),r=jg(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){let t=this.Xt(e),r=jg(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Qr),this.rn(255)}sn(){this._n(Qr),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Wt(e){let t=255&e;t===0?(this.rn(0),this.rn(255)):t===Qr?(this.rn(Qr),this.rn(0)):this.rn(t)}jt(e){let t=255&e;t===0?(this._n(0),this._n(255)):t===Qr?(this._n(Qr),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Vd=class{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}},Ld=class{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}},lr=class{constructor(){this.un=new xd,this.cn=new Vd(this.un),this.ln=new Ld(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}};var ur=class n{constructor(e,t,r,i){this.Pn=e,this.Tn=t,this.In=r,this.dn=i}En(){let e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new n(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Ca(this.In),directionalValue:Ca(this.dn),orderedDocumentKey:Ca(t),documentKey:r.path.toArray()}}Rn(e,t,r){let i=this.An(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}};function un(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=Bg(n.In,e.In),t!==0?t:(t=Bg(n.dn,e.dn),t!==0?t:B.comparator(n.Tn,e.Tn)))}function Bg(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ca(n){return ql()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function zg(n){return typeof n!="string"?n:function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}var tc=class{constructor(e){this.Vn=new ce((t,r)=>De.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(W(e.collectionGroup===this.collectionId,49279),this.gn)return!1;let t=ed(e);if(t!==void 0&&!this.yn(t))return!1;let r=sr(e),i=new Set,s=0,o=0;for(;s<r.length&&this.yn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){let c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){let l=r[s];if(!this.wn(c,l)||!this.Sn(this.mn[o++],l))return!1}++s}for(;s<r.length;++s){let c=r[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new ce(De.comparator),t=[];for(let r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new si(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new si(r.field,0))}for(let r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new si(r.field,r.dir==="asc"?0:1)));return new di(di.UNKNOWN_ID,this.collectionId,t,Ls.empty())}yn(e){for(let t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function P_(n){var e,t;if(W(n instanceof ne||n instanceof ae,20012),n instanceof ne){if(n instanceof ja){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ne.create(n.field,"==",s)))||[];return ae.create(i,"or")}return n}let r=n.filters.map(i=>P_(i));return ae.create(r,n.op)}function vE(n){if(n.getFilters().length===0)return[];let e=Fd(P_(n));return W(R_(e),7391),Md(e)||$d(e)?[e]:e.getFilters()}function Md(n){return n instanceof ne}function $d(n){return n instanceof ae&&sf(n)}function R_(n){return Md(n)||$d(n)||function(t){if(t instanceof ae&&dd(t)){for(let r of t.getFilters())if(!Md(r)&&!$d(r))return!1;return!0}return!1}(n)}function Fd(n){if(W(n instanceof ne||n instanceof ae,34018),n instanceof ne)return n;if(n.filters.length===1)return Fd(n.filters[0]);let e=n.filters.map(r=>Fd(r)),t=ae.create(e,n.op);return t=nc(t),R_(t)?t:(W(t instanceof ae,64498),W(Ii(t),40251),W(t.filters.length>1,57927),t.filters.reduce((r,i)=>lf(r,i)))}function lf(n,e){let t;return W(n instanceof ne||n instanceof ae,38388),W(e instanceof ne||e instanceof ae,25473),t=n instanceof ne?e instanceof ne?function(i,s){return ae.create([i,s],"and")}(n,e):Gg(n,e):e instanceof ne?Gg(e,n):function(i,s){if(W(i.filters.length>0&&s.filters.length>0,48005),Ii(i)&&Ii(s))return Yv(i,s.getFilters());let o=dd(i)?i:s,c=dd(i)?s:i,l=o.filters.map(d=>lf(d,c));return ae.create(l,"or")}(n,e),nc(t)}function Gg(n,e){if(Ii(e))return Yv(e,n.getFilters());{let t=e.filters.map(r=>lf(n,r));return ae.create(t,"or")}}function nc(n){if(W(n instanceof ne||n instanceof ae,11850),n instanceof ne)return n;let e=n.getFilters();if(e.length===1)return nc(e[0]);if(Kv(n))return n;let t=e.map(i=>nc(i)),r=[];return t.forEach(i=>{i instanceof ne?r.push(i):i instanceof ae&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ae.create(r,n.op)}var qd=class{constructor(){this.Dn=new Qs}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ht.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ht.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},Qs=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(oe.comparator)).toArray()}};var Hg="IndexedDbIndexManager",ya=new Uint8Array(0),Ud=class{constructor(e,t){this.databaseId=t,this.vn=new Qs,this.Cn=new bt(r=>wr(r),(r,i)=>no(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});let s={collectionId:r,parent:ze(i)};return Wg(e).put(s)}return P.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[Iv(t),""],!1,!0);return Wg(e).j(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;r.push(kt(o.parent))}return r})}addFieldIndex(e,t){let r=Is(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let o=Jr(e);return s.next(c=>{o.put(Fg(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=Is(e),i=Jr(e),s=Yr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Is(e),r=Yr(e),i=Jr(e);return t.Y().next(()=>r.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return P.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new tc(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=Yr(e),i=!0,s=new Map;return P.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=Z(),c=[];return P.forEach(s,(l,d)=>{$(Hg,`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`}(l)} to execute ${wr(t)}`);let f=function(O,Y){let k=ed(Y);if(k===void 0)return null;for(let M of za(O,k.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(d,l),p=function(O,Y){let k=new Map;for(let M of sr(Y))for(let w of za(O,M.fieldPath))switch(w.op){case"==":case"in":k.set(M.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return k.set(M.fieldPath.canonicalString(),w.value),Array.from(k.values())}return null}(d,l),y=function(O,Y){let k=[],M=!0;for(let w of sr(Y)){let g=w.kind===0?Ag(O,w.fieldPath,O.startAt):Sg(O,w.fieldPath,O.startAt);k.push(g.value),M&&(M=g.inclusive)}return new En(k,M)}(d,l),E=function(O,Y){let k=[],M=!0;for(let w of sr(Y)){let g=w.kind===0?Sg(O,w.fieldPath,O.endAt):Ag(O,w.fieldPath,O.endAt);k.push(g.value),M&&(M=g.inclusive)}return new En(k,M)}(d,l),N=this.xn(l,d,y),V=this.xn(l,d,E),L=this.On(l,d,p),z=this.Nn(l.indexId,f,N,y.inclusive,V,E.inclusive,L);return P.forEach(z,F=>r.H(F,t.limit).next(O=>{O.forEach(Y=>{let k=B.fromSegments(Y.documentKey);o.has(k)||(o=o.add(k),c.push(k))})}))}).next(()=>c)}return P.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=vE(ae.create(e.filters,"and")).map(r=>wd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,i,s,o,c){let l=(t!=null?t.length:1)*Math.max(r.length,s.length),d=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){let y=t?this.Bn(t[p/d]):ya,E=this.Ln(e,y,r[p%d],i),N=this.kn(e,y,s[p%d],o),V=c.map(L=>this.Ln(e,y,L,!0));f.push(...this.createRange(E,N,V))}return f}Ln(e,t,r,i){let s=new ur(e,B.empty(),t,r);return i?s:s.En()}kn(e,t,r,i){let s=new ur(e,B.empty(),t,r);return i?s.En():s}Mn(e,t){let r=new tc(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)r.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2,i=this.Fn(t);return P.forEach(i,s=>this.Mn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let d=new ce(De.comparator),f=!1;for(let p of l.filters)for(let y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:d=d.add(y.field));for(let p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}qn(e,t){let r=new lr;for(let i of sr(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=r.hn(i.kind);zt.Ut.bt(s,o)}return r.an()}Bn(e){let t=new lr;return zt.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){let r=new lr;return zt.Ut.bt(rf(this.databaseId,t),r.hn(function(s){let o=sr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let i=[];i.push(new lr);let s=0;for(let o of sr(e)){let c=r[s++];for(let l of i)if(this.$n(t,o.fieldPath)&&zs(c))i=this.Un(i,o,c);else{let d=l.hn(o.kind);zt.Ut.bt(c,d)}}return this.Kn(i)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){let i=[...e],s=[];for(let o of r.arrayValue.values||[])for(let c of i){let l=new lr;l.seed(c.an()),zt.Ut.bt(o,l.hn(t.kind)),s.push(l)}return s}$n(e,t){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=Is(e),i=Jr(e);return(t?r.j(od,IDBKeyRange.bound(t,t)):r.j()).next(s=>{let o=[];return P.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){let y=p?new Ls(p.sequenceNumber,new ht(Er(p.readTime),new B(kt(p.documentKey)),p.largestBatchId)):Ls.empty(),E=f.fields.map(([N,V])=>new si(De.fromServerFormat(N),V));return new di(f.indexId,f.collectionGroup,E,y)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=Is(e),s=Jr(e);return this.Wn(e).next(o=>i.j(od,IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>s.put(Fg(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){let r=new Map;return P.forEach(t,(i,s)=>{let o=r.get(i.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),P.forEach(c,l=>this.Gn(e,i,l).next(d=>{let f=this.zn(s,l);return d.isEqual(f)?P.resolve():this.jn(e,s,l,d,f)}))))})}Jn(e,t,r,i){return Yr(e).put(i.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,i){return Yr(e).delete(i.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){let i=Yr(e),s=new ce(un);return i.X({index:Ov,range:IDBKeyRange.only([r.indexId,this.uid,Ca(this.Qn(r,t))])},(o,c)=>{s=s.add(new ur(r.indexId,t,zg(c.arrayValue),zg(c.directionalValue)))}).next(()=>s)}zn(e,t){let r=new ce(un),i=this.qn(t,e);if(i==null)return r;let s=ed(t);if(s!=null){let o=e.data.field(s.fieldPath);if(zs(o))for(let c of o.arrayValue.values||[])r=r.add(new ur(t.indexId,e.key,this.Bn(c),i))}else r=r.add(new ur(t.indexId,e.key,ya,i));return r}jn(e,t,r,i,s){$(Hg,"Updating index entries for document '%s'",t.key);let o=[];return function(l,d,f,p,y){let E=l.getIterator(),N=d.getIterator(),V=Kr(E),L=Kr(N);for(;V||L;){let z=!1,F=!1;if(V&&L){let O=f(V,L);O<0?F=!0:O>0&&(z=!0)}else V!=null?F=!0:z=!0;z?(p(L),L=Kr(N)):F?(y(V),V=Kr(E)):(V=Kr(E),L=Kr(N))}}(i,s,un,c=>{o.push(this.Jn(e,t,r,c))},c=>{o.push(this.Hn(e,t,r,c))}),P.waitFor(o)}Wn(e){let t=1;return Jr(e).X({index:Nv,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>un(o,c)).filter((o,c,l)=>!c||un(o,l[c-1])!==0);let i=[];i.push(e);for(let o of r){let c=un(o,e),l=un(o,t);if(c===0)i[0]=e.En();else if(c>0&&l<0)i.push(o),i.push(o.En());else if(l>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];let c=i[o].Rn(this.uid,ya,B.empty()),l=i[o+1].Rn(this.uid,ya,B.empty());s.push(IDBKeyRange.bound(c,l))}return s}Yn(e,t){return un(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Kg)}getMinOffset(e,t){return P.mapArray(this.Fn(t),r=>this.Mn(e,r).next(i=>i||G(44426))).next(Kg)}};function Wg(n){return Ne(n,qs)}function Yr(n){return Ne(n,Rs)}function Is(n){return Ne(n,Jh)}function Jr(n){return Ne(n,Ps)}function Kg(n){W(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;Kh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ht(e.readTime,e.documentKey,t)}var Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C_=41943040,Je=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};function k_(n,e,t){let r=n.store(It),i=n.store(fi),s=[],o=IDBKeyRange.only(t.batchId),c=0,l=r.X({range:o},(f,p,y)=>(c++,y.delete()));s.push(l.next(()=>{W(c===1,47070,{batchId:t.batchId})}));let d=[];for(let f of t.mutations){let p=Cv(e,f.key.path,t.batchId);s.push(i.delete(p)),d.push(f.key)}return P.waitFor(s).next(()=>d)}function rc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G(14731);e=n.noDocument}return JSON.stringify(e).length}Je.DEFAULT_COLLECTION_PERCENTILE=10,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Je.DEFAULT=new Je(C_,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Je.DISABLED=new Je(-1,0,0);var ic=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static yt(e,t,r,i){W(e.uid!=="",64387);let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dn(e).X({index:dr,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=ri(e),o=dn(e);return o.add({}).next(c=>{W(typeof c=="number",49019);let l=new Gs(c,t,r,i),d=function(E,N,V){let L=V.baseMutations.map(F=>Ja(E.gt,F)),z=V.mutations.map(F=>Ja(E.gt,F));return{userId:N,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:L,mutations:z}}(this.serializer,this.userId,l),f=[],p=new ce((y,E)=>J(y.canonicalString(),E.canonicalString()));for(let y of i){let E=Cv(this.userId,y.key.path,c);p=p.add(y.key.path.popLast()),f.push(o.put(d)),f.push(s.put(E,pb))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Zn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return dn(e).get(t).next(r=>r?(W(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),cr(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?P.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return dn(e).X({index:dr,range:i},(o,c,l)=>{c.userId===this.userId&&(W(c.batchId>=r,47524,{er:r}),s=cr(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=mr;return dn(e).X({index:dr,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,mr],[this.userId,Number.POSITIVE_INFINITY]);return dn(e).j(dr,t).next(r=>r.map(i=>cr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=Ea(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ri(e).X({range:i},(o,c,l)=>{let[d,f,p]=o,y=kt(f);if(d===this.userId&&t.path.isEqual(y))return dn(e).get(p).next(E=>{if(!E)throw G(61480,{tr:o,batchId:p});W(E.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:E.userId,batchId:p}),s.push(cr(this.serializer,E))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(J),i=[];return t.forEach(s=>{let o=Ea(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=ri(e).X({range:c},(d,f,p)=>{let[y,E,N]=d,V=kt(E);y===this.userId&&s.path.isEqual(V)?r=r.add(N):p.done()});i.push(l)}),P.waitFor(i).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=Ea(this.userId,r),o=IDBKeyRange.lowerBound(s),c=new ce(J);return ri(e).X({range:o},(l,d,f)=>{let[p,y,E]=l,N=kt(y);p===this.userId&&r.isPrefixOf(N)?N.length===i&&(c=c.add(E)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){let r=[],i=[];return t.forEach(s=>{i.push(dn(e).get(s).next(o=>{if(o===null)throw G(35274,{batchId:s});W(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(cr(this.serializer,o))}))}),P.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return k_(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),P.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();let r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ri(e).X({range:r},(s,o,c)=>{if(s[0]===this.userId){let l=kt(s[1]);i.push(l)}else c.done()}).next(()=>{W(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return D_(e,this.userId,t)}sr(e){return N_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:mr,lastStreamToken:""})}};function D_(n,e,t){let r=Ea(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),o=!1;return ri(n).X({range:s,Z:!0},(c,l,d)=>{let[f,p,y]=c;f===e&&p===i&&(o=!0),d.done()}).next(()=>o)}function dn(n){return Ne(n,It)}function ri(n){return Ne(n,fi)}function N_(n){return Ne(n,$s)}var Ri=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var jd=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{let r=new Ri(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>Q.fromTimestamp(new ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Xr(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(W(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let i=0,s=[];return Xr(e).X((o,c)=>{let l=As(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Xr(e).X((r,i)=>{let s=As(i);t(s)})}cr(e){return Yg(e).get(Ma).next(t=>(W(t!==null,2888),t))}lr(e,t){return Yg(e).put(Ma,t)}hr(e,t){return Xr(e).put(A_(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){let r=wr(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return Xr(e).X({range:i,index:Dv},(o,c,l)=>{let d=As(c);no(t,d.target)&&(s=d,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=fn(e);return t.forEach(o=>{let c=ze(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(i)}removeMatchingKeys(e,t,r){let i=fn(e);return P.forEach(t,s=>{let o=ze(s.path);return P.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=fn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=fn(e),s=Z();return i.X({range:r,Z:!0},(o,c,l)=>{let d=kt(o[1]),f=new B(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=ze(t.path),i=IDBKeyRange.bound([r],[Iv(r)],!1,!0),s=0;return fn(e).X({index:Yh,Z:!0,range:i},([o,c],l,d)=>{o!==0&&(s++,d.done())}).next(()=>s>0)}Et(e,t){return Xr(e).get(t).next(r=>r?As(r):null)}};function Xr(n){return Ne(n,pi)}function Yg(n){return Ne(n,gr)}function fn(n){return Ne(n,mi)}var Jg="LruGarbageCollector",O_=1048576;function Xg([n,e],[t,r]){let i=J(n,t);return i===0?J(e,r):i}var Bd=class{constructor(e){this.Tr=e,this.buffer=new ce(Xg),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Xg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},sc=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(Jg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){On(t)?$(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Nn(t)}await this.Rr(3e5)})}},zd=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Be.ue);let r=new Bd(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Qg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,c,l,d,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Zr()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}};function x_(n,e){return new zd(n,e)}var Gd=class{constructor(e,t){this.db=e,this.garbageCollector=x_(this,t)}mr(e){let t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,i)=>t(i))}addReference(e,t,r){return wa(e,r)}removeReference(e,t,r){return wa(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return wa(e,t)}Sr(e,t){return function(i,s){let o=!1;return N_(i).ee(c=>D_(i,c,s).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.wr(e,(o,c)=>{if(c<=t){let l=this.Sr(e,o).next(d=>{if(!d)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),fn(e).delete(function(p){return[0,ze(p.path)]}(o))))});i.push(l)}}).next(()=>P.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return wa(e,t)}wr(e,t){let r=fn(e),i,s=Be.ue;return r.X({index:Yh},([o,c],{path:l,sequenceNumber:d})=>{o===0?(s!==Be.ue&&t(new B(kt(i)),s),s=d,i=l):s=Be.ue}).next(()=>{s!==Be.ue&&t(new B(kt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function wa(n,e){return fn(n).put(function(r,i){return{targetId:0,path:ze(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var oc=class{constructor(){this.changes=new bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Hd=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ir(e).put(r)}removeEntry(e,t,r){return ir(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Za(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=Le.newInvalidDocument(t);return ir(e).X({index:Ta,range:IDBKeyRange.only(bs(t))},(i,s)=>{r=this.Dr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:Le.newInvalidDocument(t)};return ir(e).X({index:Ta,range:IDBKeyRange.only(bs(t))},(i,s)=>{r={document:this.Dr(t,s),size:rc(s)}}).next(()=>r)}getEntries(e,t){let r=st();return this.Cr(e,t,(i,s)=>{let o=this.Dr(i,s);r=r.insert(i,o)}).next(()=>r)}Fr(e,t){let r=st(),i=new pe(B.comparator);return this.Cr(e,t,(s,o)=>{let c=this.Dr(s,o);r=r.insert(s,c),i=i.insert(s,rc(o))}).next(()=>({documents:r,Mr:i}))}Cr(e,t,r){if(t.isEmpty())return P.resolve();let i=new ce(tv);t.forEach(l=>i=i.add(l));let s=IDBKeyRange.bound(bs(i.first()),bs(i.last())),o=i.getIterator(),c=o.getNext();return ir(e).X({index:Ta,range:s},(l,d,f)=>{let p=B.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&tv(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,d),c=o.hasNext()?o.getNext():null),c?f.G(bs(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Za(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ir(e).j(IDBKeyRange.bound(c,l,!0)).next(d=>{s?.incrementDocumentReadCount(d.length);let f=st();for(let p of d){let y=this.Dr(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(ro(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=st(),o=ev(t,r),c=ev(t,ht.max());return ir(e).X({index:kv,range:IDBKeyRange.bound(o,c,!0)},(l,d,f)=>{let p=this.Dr(B.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new Wd(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Zg(e).get(sd).next(t=>(W(!!t,20021),t))}br(e,t){return Zg(e).put(sd,t)}Dr(e,t){if(t){let r=mE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Le.newInvalidDocument(e)}};function V_(n){return new Hd(n)}var Wd=class extends oc{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new bt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new ce((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){let l=Mg(this.Or.serializer,o);i=i.add(s.path.popLast());let d=rc(l);r+=d-c.size,t.push(this.Or.addEntry(e,s,l))}else if(r-=c.size,this.trackRemovals){let l=Mg(this.Or.serializer,o.convertToNoDocument(Q.min()));t.push(this.Or.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}};function Zg(n){return Ne(n,Fs)}function ir(n){return Ne(n,La)}function bs(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ev(n,e){let t=e.documentKey.path.toArray();return[n,Za(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function tv(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=J(t[s],r[s]),i)return i;return i=J(t.length,r.length),i||(i=J(t[t.length-2],r[r.length-2]),i||J(t[t.length-1],r[r.length-1]))}var Kd=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var ac=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ns(r.mutation,i,it.empty(),ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){let i=Dt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ts();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let r=Dt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=st(),o=Ds(),c=function(){return Ds()}();return t.forEach((l,d)=>{let f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Et)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ns(f.mutation,d,f.mutation.getFieldMask(),ge.now())):o.set(d.key,it.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var p;return c.set(d,new Kd(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Ds(),i=new pe((o,c)=>o-c),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let f=r.get(l)||it.empty();f=c.applyToLocalView(d,f),r.set(l,f);let p=(i.get(c.batchId)||Z()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,f=l.value,p=s_();f.forEach(y=>{if(!s.has(y)){let E=d_(t.get(y),r.get(y));E!==null&&p.set(y,E),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):P.resolve(Dt()),c=ui,l=s;return o.next(d=>P.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{l=l.insert(f,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,Z())).next(f=>({batchId:c,changes:i_(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=Ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,o=Ts();return this.indexManager.getCollectionParents(e,s).next(c=>P.forEach(c,l=>{let d=function(p,y){return new bi(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,d)=>{let f=d.getKey();o.get(f)===null&&(o=o.insert(f,Le.newInvalidDocument(f)))});let c=Ts();return o.forEach((l,d)=>{let f=s.get(l);f!==void 0&&Ns(f.mutation,d,it.empty(),ge.now()),ro(t,d)&&(c=c.insert(l,d))}),c})}};var Qd=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ye(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:S_(i.bundledQuery),readTime:Ye(i.readTime)}}(t)),P.resolve()}};var Yd=class{constructor(){this.overlays=new pe(B.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Dt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=Dt(),s=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((d,f)=>d-f),o=this.overlays.getIterator();for(;o.hasNext();){let d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Dt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}let c=Dt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return P.resolve(c)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hs(t,r));let s=this.kr.get(t);s===void 0&&(s=Z(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Jd=class{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}};var Ys=class{constructor(){this.qr=new ce(Te.Qr),this.$r=new ce(Te.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Te(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Te(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new B(new oe([])),r=new Te(t,e),i=new Te(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new B(new oe([])),r=new Te(t,e),i=new Te(t,e+1),s=Z();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new Te(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Te=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return B.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||B.comparator(e.key,t.key)}};var Xd=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ce(Te.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Gs(s,t,r,i);this.mutationQueue.push(o);for(let c of i)this.Yr=this.Yr.add(new Te(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?mr:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Te(t,0),i=new Te(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{let c=this.Zr(o.Hr);s.push(c)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(J);return t.forEach(i=>{let s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{r=r.add(c.Hr)})}),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;B.isDocumentKey(s)||(s=s.child(""));let o=new Te(new B(s),0),c=new ce(J);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.Hr)),!0)},o),P.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,i=>{let s=new Te(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Te(t,0),i=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Zd=class{constructor(e){this.ni=e,this.docs=function(){return new pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=st(),o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Kh(Av(f),r)<=0||(i.has(f.key)||ro(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G(9500)}ri(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new eh(this)}getSize(e){return P.resolve(this.size)}},eh=class extends oc{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var th=class{constructor(e){this.persistence=e,this.ii=new bt(t=>wr(t),no),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new Ys,this.targetCount=0,this._i=Ri.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Ri(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}};var Js=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Be(0),this.ci=!1,this.ci=!0,this.li=new Jd,this.referenceDelegate=e(this),this.hi=new th(this),this.indexManager=new qd,this.remoteDocumentCache=function(i){return new Zd(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Xa(t),this.Ti=new Qd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Xd(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);let i=new nh(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return P.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},nh=class extends Oa{constructor(e){super(),this.currentSequenceNumber=e}},cc=class n{constructor(e){this.persistence=e,this.Ai=new Ys,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,r=>{let i=B.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},lc=class n{constructor(e,t){this.persistence=e,this.gi=new bt(r=>ze(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=x_(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return P.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?P.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sa(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var rh=class{constructor(e){this.serializer=e}q(e,t,r,i){let s=new xa("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore(to)}(e),function(l){l.createObjectStore($s,{keyPath:fb}),l.createObjectStore(It,{keyPath:pg,autoIncrement:!0}).createIndex(dr,mg,{unique:!0}),l.createObjectStore(fi)}(e),nv(e),function(l){l.createObjectStore(or)}(e));let o=P.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore(mi),l.deleteObjectStore(pi),l.deleteObjectStore(gr)}(e),nv(e)),o=o.next(()=>function(l){let d=l.store(gr),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return d.put(Ma,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,d){return d.store(It).j().next(p=>{l.deleteObjectStore(It),l.createObjectStore(It,{keyPath:pg,autoIncrement:!0}).createIndex(dr,mg,{unique:!0});let y=d.store(It),E=p.map(N=>y.put(N));return P.waitFor(E)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore(gi,{keyPath:bb})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.pi(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore(Fs)}(e),this.yi(s)))),r<7&&i>=7&&(o=o.next(()=>this.wi(s))),r<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(xc,{keyPath:Eb})})(e),function(l){l.createObjectStore(Vc,{keyPath:Tb})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){let d=l.createObjectStore(Lc,{keyPath:Db});d.createIndex(ad,Nb,{unique:!1}),d.createIndex(xv,Ob,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){let d=l.createObjectStore(La,{keyPath:mb});d.createIndex(Ta,gb),d.createIndex(kv,vb)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(or))),r<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore(Jh,{keyPath:Ab,autoIncrement:!0}).createIndex(od,Sb,{unique:!1}),l.createObjectStore(Ps,{keyPath:Pb}).createIndex(Nv,Rb,{unique:!1}),l.createObjectStore(Rs,{keyPath:Cb}).createIndex(Ov,kb,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Ps).clear()}).next(()=>{t.objectStore(Rs).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Xh,{keyPath:xb})})(e)})),r<18&&i>=18&&ql()&&(o=o.next(()=>{t.objectStore(Ps).clear()}).next(()=>{t.objectStore(Rs).clear()})),o}yi(e){let t=0;return e.store(or).X((r,i)=>{t+=rc(i)}).next(()=>{let r={byteSize:t};return e.store(Fs).put(sd,r)})}pi(e){let t=e.store($s),r=e.store(It);return t.j().next(i=>P.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,mr],[s.userId,s.lastAcknowledgedBatchId]);return r.j(dr,o).next(c=>P.forEach(c,l=>{W(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});let d=cr(this.serializer,l);return k_(e,s.userId,d).next(()=>{})}))}))}wi(e){let t=e.store(mi),r=e.store(or);return e.store(gr).get(Ma).next(i=>{let s=[];return r.X((o,c)=>{let l=new oe(o),d=function(p){return[0,ze(p)]}(l);s.push(t.get(d).next(f=>f?P.resolve():(p=>t.put({targetId:0,path:ze(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(s))})}Si(e,t){e.createObjectStore(qs,{keyPath:Ib});let r=t.store(qs),i=new Qs,s=o=>{if(i.add(o)){let c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:ze(l)})}};return t.store(or).X({Z:!0},(o,c)=>{let l=new oe(o);return s(l.popLast())}).next(()=>t.store(fi).X({Z:!0},([o,c,l],d)=>{let f=kt(c);return s(f.popLast())}))}bi(e){let t=e.store(pi);return t.X((r,i)=>{let s=As(i),o=A_(this.serializer,s);return t.put(o)})}Di(e,t){let r=t.store(or),i=[];return r.X((s,o)=>{let c=t.store(La),l=function(p){return p.document?new B(oe.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):G(36783)}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(d))}).next(()=>P.waitFor(i))}Ci(e,t){let r=t.store(It),i=V_(this.serializer),s=new Js(cc.Vi,this.serializer.gt);return r.j().next(o=>{let c=new Map;return o.forEach(l=>{var d;let f=(d=c.get(l.userId))!==null&&d!==void 0?d:Z();cr(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),P.forEach(c,(l,d)=>{let f=new Oe(d),p=ec.yt(this.serializer,f),y=s.getIndexManager(f),E=ic.yt(f,this.serializer,y,s.referenceDelegate);return new ac(i,E,p,y).recalculateAndSaveOverlaysForDocumentKeys(new Us(t,Be.ue),l).next()})})}};function nv(n){n.createObjectStore(mi,{keyPath:yb}).createIndex(Yh,wb,{unique:!0}),n.createObjectStore(pi,{keyPath:"targetId"}).createIndex(Dv,_b,{unique:!0}),n.createObjectStore(gr)}var hn="IndexedDbPersistence",Uu=18e5,ju=5e3,Bu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",_E="main",ih=class n{constructor(e,t,r,i,s,o,c,l,d,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=s,this.window=o,this.document=c,this.Mi=d,this.xi=f,this.Oi=p,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=y=>Promise.resolve(),!n.C())throw new j(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gd(this,i),this.Qi=t+_E,this.serializer=new Xa(l),this.$i=new hi(this.Qi,this.Oi,new rh(this.serializer)),this.li=new Od,this.hi=new jd(this.referenceDelegate,this.serializer),this.remoteDocumentCache=V_(this.serializer),this.Ti=new Nd,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&Ie(hn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(x.FAILED_PRECONDITION,Bu);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Be(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ia(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(On(e))return $(hn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $(hn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return Es(e).get(Wr).next(t=>P.resolve(this.Xi(t)))}es(e){return Ia(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Uu)){this.ki=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=Ne(t,gi);return r.j().next(i=>{let s=this.rs(i,Uu),o=i.filter(c=>s.indexOf(c)===-1);return P.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(let t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?P.resolve(!0):Es(e).get(Wr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,ju)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new j(x.FAILED_PRECONDITION,Bu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ia(e).j().next(r=>this.rs(r,ju).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$(hn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[to,gi],e=>{let t=new Us(e,Be.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>Ia(e).j().next(t=>this.rs(t,Uu).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return ic.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ud(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return ec.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){$(hn,"Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===18?Mb:l===17?$v:l===16?Lb:l===15?Zh:l===14?Mv:l===13?Lv:l===12?Vb:l===11?Vv:void G(60245)}(this.Oi),o;return this.$i.runTransaction(e,i,s,c=>(o=new Us(c,this.ui?this.ui.next():Be.ue),t==="readwrite-primary"?this.Ji(o).next(l=>!!l||this.Hi(o)).next(l=>{if(!l)throw Ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new j(x.FAILED_PRECONDITION,Sv);return r(o)}).next(l=>this.Zi(o).next(()=>l)):this.Ts(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return Es(e).get(Wr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,ju)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(x.FAILED_PRECONDITION,Bu)})}Zi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Es(e).put(Wr,t)}static C(){return hi.C()}Yi(e){let t=Es(e);return t.get(Wr).next(r=>this.Xi(r)?($(hn,"Releasing primary lease."),t.delete(Wr)):P.resolve())}ns(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(Ie(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();let t=/(?:Version|Mobile)\/1[456]/;Fl()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{let r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return $(hn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ie(hn,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Ie("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Es(n){return Ne(n,to)}function Ia(n){return Ne(n,gi)}function L_(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var sh=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Z(),i=Z();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var oh=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var uc=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Fl()?8:Pv(ke())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new oh;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(Zr()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ei(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Zr()<=ee.DEBUG&&$("QueryEngine","Query:",ei(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Zr()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ei(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(t))):P.resolve())}ps(e,t){if(Pg(t))return P.resolve(null);let r=at(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Id(t,null,"F"),r=at(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=Z(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,c);return this.Ds(t,d,o,l.readTime)?this.ps(e,Id(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return Pg(t)||i.isEqual(Q.min())?P.resolve(null):this.gs.getDocuments(e,r).next(s=>{let o=this.bs(t,s);return this.Ds(t,o,r,i)?P.resolve(null):(Zr()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ei(t)),this.vs(e,o,t,Tv(i,ui)).next(c=>c))})}bs(e,t){let r=new ce(n_(e));return t.forEach((i,s)=>{ro(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return Zr()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ei(t)),this.gs.getDocumentsMatchingQuery(e,t,ht.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var uf="LocalStore",yE=3e8,ah=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new pe(J),this.Ms=new bt(s=>wr(s),no),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ac(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function M_(n,e,t,r){return new ah(n,e,t,r)}async function $_(n,e){let t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],c=[],l=Z();for(let d of i){o.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}for(let d of s){c.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:c}))})})}function wE(n,e){let t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){let p=d.batch,y=p.keys(),E=P.resolve();return y.forEach(N=>{E=E.next(()=>f.getEntry(l,N)).next(V=>{let L=d.docVersions.get(N);W(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function F_(n){let e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function IE(n,e){let t=H(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let c=[];e.targetChanges.forEach((f,p)=>{let y=i.get(p);if(!y)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,p)));let E=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Se.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(p,E),function(V,L,z){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=yE?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(y,E,f)&&c.push(t.hi.updateTargetData(s,E))});let l=st(),d=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(bE(s,o,e.documentUpdates).next(f=>{l=f.Ls,d=f.ks})),!r.isEqual(Q.min())){let f=t.hi.getLastRemoteSnapshotVersion(s).next(p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return P.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function bE(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=st();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):$(uf,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ls:o,ks:i}})}function EE(n,e){let t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=mr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dc(n,e){let t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Pi(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Ci(n,e,t){let r=H(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!On(o))throw o;$(uf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function ch(n,e,t){let r=H(n),i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,f){let p=H(l),y=p.Ms.get(f);return y!==void 0?P.resolve(p.Fs.get(y)):p.hi.getTargetData(d,f)}(r,o,at(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:Z())).next(c=>(j_(r,t_(e),c),{documents:c,qs:s})))}function q_(n,e){let t=H(n),r=H(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function U_(n,e){let t=H(n),r=t.xs.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,Tv(r,ui),Number.MAX_SAFE_INTEGER)).then(i=>(j_(t,e,i),i))}function j_(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var B_="firestore_clients";function rv(n,e){return`${B_}_${n}_${e}`}var z_="firestore_mutations";function iv(n,e,t){let r=`${z_}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}var G_="firestore_targets";function zu(n,e){return`${G_}_${n}_${e}`}var Ct="SharedClientState",hc=class n{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ks(e,t,r){let i=JSON.parse(r),s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new n(e,t,i.state,s):(Ie(Ct,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},Os=class n{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){let r=JSON.parse(t),i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new n(e,r.state,i):(Ie(Ct,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},fc=class n{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){let r=JSON.parse(t),i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=of();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Rv(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new n(e,s):(Ie(Ct,`Failed to parse client data for instance '${e}': ${t}`),null)}},lh=class n{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){let t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new n(t.clientId,t.onlineState):(Ie(Ct,`Failed to parse online state: ${e}`),null)}},Xs=class{constructor(){this.activeTargetIds=of()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},xs=class{constructor(e,t,r,i,s){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new pe(J),this.started=!1,this.Zs=[];let o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=rv(this.persistenceKey,this.js),this.eo=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Xs),this.no=new RegExp(`^${B_}_${o}_([^_]*)$`),this.ro=new RegExp(`^${z_}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${G_}_${o}_(\\d+)$`),this.so=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.oo=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Ps();for(let r of e){if(r===this.js)continue;let i=this.getItem(rv(this.persistenceKey,r));if(i){let s=fc.Ks(r,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();let t=this.storage.getItem(this.so);if(t){let r=this.ao(t);r&&this.uo(r)}for(let r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let i=this.storage.getItem(zu(this.persistenceKey,e));if(i){let s=Os.Ks(e,i);s&&(r=s.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zu(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ho(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return $(Ct,"READ",e,t),t}setItem(e,t){$(Ct,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){$(Ct,"REMOVE",e),this.storage.removeItem(e)}Hs(e){let t=e;if(t.storageArea===this.storage){if($(Ct,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){let r=this.Ao(t.key);return this.Ro(r,null)}{let r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){let r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){let r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){let r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){let r=function(s){let o=Be.ue;if(s!=null)try{let c=JSON.parse(s);W(typeof c=="number",30636,{wo:s}),o=c}catch(c){Ie(Ct,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Be.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){let r=this.So(t.newValue);await Promise.all(r.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){let i=new hc(this.currentUser,e,t,r),s=iv(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){let t=iv(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){let t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){let i=zu(this.persistenceKey,e),s=new Os(e,t,r);this.setItem(i,s.Ws())}Eo(e){let t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){let t=this.no.exec(e);return t?t[1]:null}Vo(e,t){let r=this.Ao(e);return fc.Ks(r,t)}mo(e,t){let r=this.ro.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return hc.Ks(new Oe(s),i,t)}po(e,t){let r=this.io.exec(e),i=Number(r[1]);return Os.Ks(i,t)}ao(e){return lh.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);$(Ct,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){let r=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(r),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=of();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}},pc=class{constructor(){this.Fo=new Xs,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Xs,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var uh=class{xo(e){}shutdown(){}};var sv="ConnectivityMonitor",mc=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(sv,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){$(sv,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var ba=null;function dh(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}var Gu="RestConnection",TE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},hh=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===qa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let o=dh(),c=this.Go(e,t.toUriEncodedString());$(Gu,`Sending RPC '${e}' ${o}:`,c,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(c),f=Mr(d);return this.jo(e,c,l,r,f).then(p=>($(Gu,`Received RPC '${e}' ${o}: `,p),p),p=>{throw wn(Gu,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=TE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var fh=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var je="WebChannelConnection",ph=class extends hh{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let o=dh();return new Promise((c,l)=>{let d=new Vu;d.setWithCredentials(!0),d.listenOnce(Lu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ys.NO_ERROR:let p=d.getResponseJson();$(je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ys.TIMEOUT:$(je,`RPC '${e}' ${o} timed out`),l(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case ys.HTTP_ERROR:let y=d.getStatus();if($(je,`RPC '${e}' ${o} failed with status:`,y,"response text:",d.getResponseText()),y>0){let E=d.getResponseJson();Array.isArray(E)&&(E=E[0]);let N=E?.error;if(N&&N.status&&N.message){let V=function(z){let F=z.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(F)>=0?F:x.UNKNOWN}(N.status);l(new j(V,N.message))}else l(new j(x.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new j(x.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{$(je,`RPC '${e}' ${o} completed.`)}});let f=JSON.stringify(i);$(je,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",f,r,15)})}P_(e,t,r){let i=dh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fu(),c=$u(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let f=s.join("");$(je,`Creating RPC '${e}' stream ${i}: ${f}`,l);let p=o.createWebChannel(f,l);this.T_(p);let y=!1,E=!1,N=new fh({Ho:L=>{E?$(je,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||($(je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),$(je,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Yo:()=>p.close()}),V=(L,z,F)=>{L.listen(z,O=>{try{F(O)}catch(Y){setTimeout(()=>{throw Y},0)}})};return V(p,Hr.EventType.OPEN,()=>{E||($(je,`RPC '${e}' stream ${i} transport opened.`),N.s_())}),V(p,Hr.EventType.CLOSE,()=>{E||(E=!0,$(je,`RPC '${e}' stream ${i} transport closed`),N.__(),this.I_(p))}),V(p,Hr.EventType.ERROR,L=>{E||(E=!0,wn(je,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),N.__(new j(x.UNAVAILABLE,"The operation could not be completed")))}),V(p,Hr.EventType.MESSAGE,L=>{var z;if(!E){let F=L.data[0];W(!!F,16349);let O=F,Y=O?.error||((z=O[0])===null||z===void 0?void 0:z.error);if(Y){$(je,`RPC '${e}' stream ${i} received error:`,Y);let k=Y.status,M=function(_){let b=Ee[_];if(b!==void 0)return f_(b)}(k),w=Y.message;M===void 0&&(M=x.INTERNAL,w="Unknown error status: "+k+" with message "+Y.message),E=!0,N.__(new j(M,w)),p.close()}else $(je,`RPC '${e}' stream ${i} received:`,F),N.a_(F)}}),V(c,Mu.STAT_EVENT,L=>{L.stat===va.PROXY?$(je,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===va.NOPROXY&&$(je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function H_(){return typeof window<"u"?window:null}function ka(){return typeof document<"u"?document:null}function Uc(n){return new Pd(n,!0)}var gc=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var ov="PersistentStream",vc=class{constructor(e,t,r,i,s,o,c,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new gc(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ie(t.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(ov,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():($(ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},mh=class extends vc{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=cE(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Ye(o.readTime):Q.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=kd(this.serializer),t.addTarget=function(s,o){let c,l=o.target;if(c=Ba(l)?{documents:y_(s,l)}:{query:w_(s,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=p_(s,o.resumeToken);let d=Rd(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=Si(s,o.snapshotVersion.toTimestamp());let d=Rd(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=uE(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=kd(this.serializer),t.removeTarget=e,this.k_(t)}},gh=class extends vc{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=lE(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=kd(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Ja(this.serializer,r))};this.k_(t)}};var vh=class{},_h=class extends vh{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Cd(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(x.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Cd(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(x.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},yh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ie(t),this._a=!1):$("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Tr="RemoteStore",wh=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Sr(this)&&($(Tr,"Restarting streams for network reachability change."),await async function(l){let d=H(l);d.Ia.add(4),await io(d),d.Aa.set("Unknown"),d.Ia.delete(4),await jc(d)}(this))})}),this.Aa=new yh(r,i)}};async function jc(n){if(Sr(n))for(let e of n.da)await e(!0)}async function io(n){for(let e of n.da)await e(!1)}function Bc(n,e){let t=H(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ff(t)?hf(t):Mi(t).x_()&&df(t,e))}function ki(n,e){let t=H(n),r=Mi(t);t.Ta.delete(e),r.x_()&&W_(t,e),t.Ta.size===0&&(r.x_()?r.B_():Sr(t)&&t.Aa.set("Unknown"))}function df(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mi(n).H_(e)}function W_(n,e){n.Ra.$e(e),Mi(n).Y_(e)}function hf(n){n.Ra=new Sd({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Mi(n).start(),n.Aa.aa()}function ff(n){return Sr(n)&&!Mi(n).M_()&&n.Ta.size>0}function Sr(n){return H(n).Ia.size===0}function K_(n){n.Ra=void 0}async function AE(n){n.Aa.set("Online")}async function SE(n){n.Ta.forEach((e,t)=>{df(n,e)})}async function PE(n,e){K_(n),ff(n)?(n.Aa.la(e),hf(n)):n.Aa.set("Unknown")}async function RE(n,e,t){if(n.Aa.set("Online"),e instanceof Ka&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(n,e)}catch(r){$(Tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(n,r)}else if(e instanceof oi?n.Ra.Ye(e):e instanceof Wa?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{let r=await F_(n.localStore);t.compareTo(r)>=0&&await function(s,o){let c=s.Ra.Pt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{let f=s.Ta.get(l);if(!f)return;s.Ta.set(l,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),W_(s,l);let p=new Pi(f.target,l,d,f.sequenceNumber);df(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$(Tr,"Failed to raise snapshot:",r),await _c(n,r)}}async function _c(n,e,t){if(!On(e))throw e;n.Ia.add(1),await io(n),n.Aa.set("Offline"),t||(t=()=>F_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(Tr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await jc(n)})}function Q_(n,e){return e().catch(t=>_c(n,t,e))}async function Li(n){let e=H(n),t=Rn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:mr;for(;CE(e);)try{let i=await EE(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,kE(e,i)}catch(i){await _c(e,i)}Y_(e)&&J_(e)}function CE(n){return Sr(n)&&n.Pa.length<10}function kE(n,e){n.Pa.push(e);let t=Rn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Y_(n){return Sr(n)&&!Rn(n).M_()&&n.Pa.length>0}function J_(n){Rn(n).start()}async function DE(n){Rn(n).na()}async function NE(n){let e=Rn(n);for(let t of n.Pa)e.X_(t.mutations)}async function OE(n,e,t){let r=n.Pa.shift(),i=Ed.from(r,e,t);await Q_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Li(n)}async function xE(n,e){e&&Rn(n).Z_&&await async function(r,i){if(function(o){return tE(o)&&o!==x.ABORTED}(i.code)){let s=r.Pa.shift();Rn(r).N_(),await Q_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Li(r)}}(n,e),Y_(n)&&J_(n)}async function av(n,e){let t=H(n);t.asyncQueue.verifyOperationInProgress(),$(Tr,"RemoteStore received new credentials");let r=Sr(t);t.Ia.add(3),await io(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await jc(t)}async function Ih(n,e){let t=H(n);e?(t.Ia.delete(2),await jc(t)):e||(t.Ia.add(2),await io(t),t.Aa.set("Unknown"))}function Mi(n){return n.Va||(n.Va=function(t,r,i){let s=H(t);return s.ia(),new mh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:AE.bind(null,n),e_:SE.bind(null,n),n_:PE.bind(null,n),J_:RE.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),ff(n)?hf(n):n.Aa.set("Unknown")):(await n.Va.stop(),K_(n))})),n.Va}function Rn(n){return n.ma||(n.ma=function(t,r,i){let s=H(t);return s.ia(),new gh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:DE.bind(null,n),n_:xE.bind(null,n),ea:NE.bind(null,n),ta:OE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Li(n)):(await n.ma.stop(),n.Pa.length>0&&($(Tr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var bh=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let o=Date.now()+r,c=new n(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function pf(n,e){if(Ie("AsyncQueue",`${e}: ${n}`),On(n))return new j(x.UNAVAILABLE,`${e}: ${n}`);throw n}var yc=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=Ts(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var wc=class{constructor(){this.fa=new pe(B.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):G(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},Di=class n{constructor(e,t,r,i,s,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,yc.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Eh=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Th=class{constructor(){this.queries=cv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=H(t),s=i.queries;i.queries=cv(),s.forEach((o,c)=>{for(let l of c.wa)l.onError(r)})})(this,new j(x.ABORTED,"Firestore shutting down"))}};function cv(){return new bt(n=>e_(n),qc)}async function VE(n,e){let t=H(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Eh,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=pf(o,`Initialization of query '${ei(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&mf(t)}async function LE(n,e){let t=H(n),r=e.query,i=3,s=t.queries.get(r);if(s){let o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ME(n,e){let t=H(n),r=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.wa)c.Ca(i)&&(r=!0);o.ya=i}}r&&mf(t)}function $E(n,e,t){let r=H(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function mf(n){n.Da.forEach(e=>{e.next()})}var Ah,lv;(lv=Ah||(Ah={})).Fa="default",lv.Cache="cache";var Sh=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ah.Cache}};var Ic=class{constructor(e){this.key=e}},bc=class{constructor(e){this.key=e}},Ph=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Z(),this.mutatedKeys=Z(),this.Xa=n_(e),this.eu=new yc(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new wc,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{let y=i.get(f),E=ro(this.query,p)?p:null,N=!!y&&this.mutatedKeys.has(y.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations),L=!1;y&&E?y.data.isEqual(E.data)?N!==V&&(r.track({type:3,doc:E}),L=!0):this.iu(y,E)||(r.track({type:2,doc:E}),L=!0,(l&&this.Xa(E,l)>0||d&&this.Xa(E,d)<0)&&(c=!0)):!y&&E?(r.track({type:0,doc:E}),L=!0):y&&!E&&(r.track({type:1,doc:y}),L=!0,(l||d)&&(c=!0)),L&&(E?(o=o.add(E),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let o=e.ru.pa();o.sort((f,p)=>function(E,N){let V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:L})}};return V(E)-V(N)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;let c=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,o.length!==0||d?{snapshot:new Di(this.query,e.eu,s,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new wc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=Z(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new bc(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Ic(r))}),t}uu(e){this.Ha=e.qs,this.Za=Z();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Di.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},$i="SyncEngine",Rh=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Ch=class{constructor(e){this.key=e,this.lu=!1}},kh=class{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new bt(c=>e_(c),qc),this.Tu=new Map,this.Iu=new Set,this.du=new pe(B.comparator),this.Eu=new Map,this.Au=new Ys,this.Ru={},this.Vu=new Map,this.mu=Ri.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function FE(n,e,t=!0){let r=zc(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await X_(r,e,t,!0),i}async function qE(n,e){let t=zc(n);await X_(t,e,!0,!1)}async function X_(n,e,t,r){let i=await dc(n.localStore,at(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await gf(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Bc(n.remoteStore,i),c}async function gf(n,e,t,r,i){n.gu=(p,y,E)=>async function(V,L,z,F){let O=L.view.nu(z);O.Ds&&(O=await ch(V.localStore,L.query,!1).then(({documents:w})=>L.view.nu(w,O)));let Y=F&&F.targetChanges.get(L.targetId),k=F&&F.targetMismatches.get(L.targetId)!=null,M=L.view.applyChanges(O,V.isPrimaryClient,Y,k);return Dh(V,L.targetId,M._u),M.snapshot}(n,p,y,E);let s=await ch(n.localStore,e,!0),o=new Ph(e,s.qs),c=o.nu(s.documents),l=Ks.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,l);Dh(n,t,d._u);let f=new Rh(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function UE(n,e,t){let r=H(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!qc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ci(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ki(r.remoteStore,i.targetId),Ni(r,i.targetId)}).catch(Nn)):(Ni(r,i.targetId),await Ci(r.localStore,i.targetId,!0))}async function jE(n,e){let t=H(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ki(t.remoteStore,r.targetId))}async function BE(n,e,t){let r=wf(n);try{let i=await function(o,c){let l=H(o),d=ge.now(),f=c.reduce((E,N)=>E.add(N.key),Z()),p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let N=st(),V=Z();return l.Os.getEntries(E,f).next(L=>{N=L,N.forEach((z,F)=>{F.isValidDocument()||(V=V.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,N)).next(L=>{p=L;let z=[];for(let F of c){let O=eE(F,p.get(F.key).overlayedDocument);O!=null&&z.push(new Et(F.key,O,Wv(O.value.mapValue),ot.exists(!0)))}return l.mutationQueue.addMutationBatch(E,d,z,c)}).next(L=>{y=L;let z=L.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(E,L.batchId,z)})}).then(()=>({batchId:y.batchId,changes:i_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let d=o.Ru[o.currentUser.toKey()];d||(d=new pe(J)),d=d.insert(c,l),o.Ru[o.currentUser.toKey()]=d}(r,i.batchId,t),await Vn(r,i.changes),await Li(r.remoteStore)}catch(i){let s=pf(i,"Failed to persist write");t.reject(s)}}async function Z_(n,e){let t=H(n);try{let r=await IE(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Eu.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?W(o.lu,14607):i.removedDocuments.size>0&&(W(o.lu,42227),o.lu=!1))}),await Vn(t,r,e)}catch(r){await Nn(r)}}function uv(n,e,t){let r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,o)=>{let c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let l=H(o);l.onlineState=c;let d=!1;l.queries.forEach((f,p)=>{for(let y of p.wa)y.va(c)&&(d=!0)}),d&&mf(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zE(n,e,t){let r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let o=new pe(B.comparator);o=o.insert(s,Le.newNoDocument(s,Q.min()));let c=Z().add(s),l=new Ws(Q.min(),new Map,new pe(J),o,c);await Z_(r,l),r.du=r.du.remove(s),r.Eu.delete(e),yf(r)}else await Ci(r.localStore,e,!1).then(()=>Ni(r,e,t)).catch(Nn)}async function GE(n,e){let t=H(n),r=e.batch.batchId;try{let i=await wE(t.localStore,e);_f(t,r,null),vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vn(t,i)}catch(i){await Nn(i)}}async function HE(n,e,t){let r=H(n);try{let i=await function(o,c){let l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(p=>(W(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);_f(r,e,t),vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vn(r,i)}catch(i){await Nn(i)}}function vf(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function _f(n,e,t){let r=H(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Ni(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||ey(n,r)})}function ey(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(ki(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),yf(n))}function Dh(n,e,t){for(let r of t)r instanceof Ic?(n.Au.addReference(r.key,e),WE(n,r)):r instanceof bc?($($i,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||ey(n,r.key)):G(19791,{yu:r})}function WE(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||($($i,"New document in limbo: "+t),n.Iu.add(r),yf(n))}function yf(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new B(oe.fromString(e)),r=n.mu.next();n.Eu.set(r,new Ch(t)),n.du=n.du.insert(t,r),Bc(n.remoteStore,new Pi(at(Fc(t.path)),r,"TargetPurposeLimboResolution",Be.ue))}}async function Vn(n,e,t){let r=H(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{o.push(r.gu(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){let p=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){i.push(d);let p=sh.Es(l.targetId,d);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(l,d){let f=H(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(d,y=>P.forEach(y.Is,E=>f.persistence.referenceDelegate.addReference(p,y.targetId,E)).next(()=>P.forEach(y.ds,E=>f.persistence.referenceDelegate.removeReference(p,y.targetId,E)))))}catch(p){if(!On(p))throw p;$(uf,"Failed to update sequence numbers: "+p)}for(let p of d){let y=p.targetId;if(!p.fromCache){let E=f.Fs.get(y),N=E.snapshotVersion,V=E.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(y,V)}}}(r.localStore,s))}async function KE(n,e){let t=H(n);if(!t.currentUser.isEqual(e)){$($i,"User change. New user:",e.toKey());let r=await $_(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(l=>{l.reject(new j(x.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vn(t,r.Bs)}}function QE(n,e){let t=H(n),r=t.Eu.get(e);if(r&&r.lu)return Z().add(r.key);{let i=Z(),s=t.Tu.get(e);if(!s)return i;for(let o of s){let c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function YE(n,e){let t=H(n),r=await ch(t.localStore,e.query,!0),i=e.view.uu(r);return t.isPrimaryClient&&Dh(t,e.targetId,i._u),i}async function JE(n,e){let t=H(n);return U_(t.localStore,e).then(r=>Vn(t,r))}async function XE(n,e,t,r){let i=H(n),s=await function(c,l){let d=H(c),f=H(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Xn(p,l).next(y=>y?d.localDocuments.getDocuments(p,y):P.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Li(i.remoteStore):t==="acknowledged"||t==="rejected"?(_f(i,e,r||null),vf(i,e),function(c,l){H(H(c).mutationQueue).rr(l)}(i.localStore,e)):G(6720,"Unknown batchState",{wu:t}),await Vn(i,s)):$($i,"Cannot apply mutation batch with id: "+e)}async function ZE(n,e){let t=H(n);if(zc(t),wf(t),e===!0&&t.fu!==!0){let r=t.sharedClientState.getAllActiveQueryTargets(),i=await dv(t,r.toArray());t.fu=!0,await Ih(t.remoteStore,!0);for(let s of i)Bc(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){let r=[],i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ni(t,o),Ci(t.localStore,o,!0))),ki(t.remoteStore,o)}),await i,await dv(t,r),function(o){let c=H(o);c.Eu.forEach((l,d)=>{ki(c.remoteStore,d)}),c.Au.jr(),c.Eu=new Map,c.du=new pe(B.comparator)}(t),t.fu=!1,await Ih(t.remoteStore,!1)}}async function dv(n,e,t){let r=H(n),i=[],s=[];for(let o of e){let c,l=r.Tu.get(o);if(l&&l.length!==0){c=await dc(r.localStore,at(l[0]));for(let d of l){let f=r.Pu.get(d),p=await YE(r,f);p.snapshot&&s.push(p.snapshot)}}else{let d=await q_(r.localStore,o);c=await dc(r.localStore,d),await gf(r,ty(d),o,!1,c.resumeToken)}i.push(c)}return r.hu.J_(s),i}function ty(n){return Zv(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function eT(n){return function(t){return H(H(t).persistence).Ps()}(H(n).localStore)}async function tT(n,e,t,r){let i=H(n);if(i.fu)return void $($i,"Ignoring unexpected query state notification.");let s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{let o=await U_(i.localStore,t_(s[0])),c=Ws.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Se.EMPTY_BYTE_STRING);await Vn(i,o,c);break}case"rejected":await Ci(i.localStore,e,!0),Ni(i,e,r);break;default:G(64155,t)}}async function nT(n,e,t){let r=zc(n);if(r.fu){for(let i of e){if(r.Tu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){$($i,"Adding an already active target "+i);continue}let s=await q_(r.localStore,i),o=await dc(r.localStore,s);await gf(r,ty(s),o.targetId,!1,o.resumeToken),Bc(r.remoteStore,o)}for(let i of t)r.Tu.has(i)&&await Ci(r.localStore,i,!1).then(()=>{ki(r.remoteStore,i),Ni(r,i)}).catch(Nn)}}function zc(n){let e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zE.bind(null,e),e.hu.J_=ME.bind(null,e.eventManager),e.hu.pu=$E.bind(null,e.eventManager),e}function wf(n){let e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HE.bind(null,e),e}var Ar=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return M_(this.persistence,new uc,e.initialUser,this.serializer)}Du(e){return new Js(cc.Vi,this.serializer)}bu(e){return new pc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Ar.provider={build:()=>new Ar};var Ec=class extends Ar{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){W(this.persistence.referenceDelegate instanceof lc,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new sc(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new Js(r=>lc.Vi(r,t),this.serializer)}},Tc=class extends Ar{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await wf(this.Mu.syncEngine),await Li(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return M_(this.persistence,new uc,e.initialUser,this.serializer)}Cu(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new sc(r,e.asyncQueue,t)}Fu(e,t){let r=new id(t,this.persistence);return new rd(e.asyncQueue,r)}Du(e){let t=L_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new ih(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,H_(),ka(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new pc}},Nh=class extends Tc{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Mu.syncEngine;this.sharedClientState instanceof xs&&(this.sharedClientState.syncEngine={Do:XE.bind(null,t),vo:tT.bind(null,t),Co:nT.bind(null,t),Ps:eT.bind(null,t),bo:JE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await ZE(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){let t=H_();if(!xs.C(t))throw new j(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=L_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xs(t,e.asyncQueue,r,e.clientId,e.initialUser)}},Cn=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KE.bind(null,this.syncEngine),await Ih(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Th}()}createDatastore(e){let t=Uc(e.databaseInfo.databaseId),r=function(s){return new ph(s)}(e.databaseInfo);return function(s,o,c,l){return new _h(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new wh(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>uv(this.syncEngine,t,0),function(){return mc.C()?new mc:new uh}())}createSyncEngine(e,t){return function(i,s,o,c,l,d,f){let p=new kh(i,s,o,c,l,d);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=H(i);$(Tr,"RemoteStore shutting down."),s.Ia.add(5),await io(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Cn.provider={build:()=>new Cn};var Oh=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ie("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var kn="FirestoreClient",xh=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=Vs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=pf(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Hu(n,e){n.asyncQueue.verifyOperationInProgress(),$(kn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{wn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{wn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function hv(n,e){n.asyncQueue.verifyOperationInProgress();let t=await rT(n);$(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>av(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>av(e.remoteStore,i)),n._onlineComponents=e}async function rT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(kn,"Using user provided OfflineComponentProvider");try{await Hu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await Hu(n,new Ar)}}else $(kn,"Using default OfflineComponentProvider"),await Hu(n,new Ec(void 0));return n._offlineComponents}async function ny(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(kn,"Using user provided OnlineComponentProvider"),await hv(n,n._uninitializedComponentsProvider._online)):($(kn,"Using default OnlineComponentProvider"),await hv(n,new Cn))),n._onlineComponents}function iT(n){return ny(n).then(e=>e.syncEngine)}async function fv(n){let e=await ny(n),t=e.eventManager;return t.onListen=FE.bind(null,e.syncEngine),t.onUnlisten=UE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jE.bind(null,e.syncEngine),t}function ry(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var pv=new Map;var sT="firestore.googleapis.com",mv=!0,Ac=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sT,this.ssl=mv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:mv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O_)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ry((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Zs=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ku;switch(r.type){case"firstParty":return new Ju(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=pv.get(t);r&&($("ComponentProvider","Removing Datastore"),pv.delete(t),r.terminate())}(this),Promise.resolve()}};var Sc=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Me=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(eo(t,n._jsonSchema))return new n(e,r||null,new B(oe.fromString(t.referencePath)))}};Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Ae("string",Me._jsonSchemaVersion),referencePath:Ae("string")};var gn=class n extends Sc{constructor(e,t,r){super(e,t,Fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new B(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function iy(n,e,...t){if(n=we(n),bv("collection","path",e),n instanceof Zs){let r=oe.fromString(e,...t);return lg(r),new gn(n,null,r)}{if(!(n instanceof Me||n instanceof gn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(oe.fromString(e,...t));return lg(r),new gn(n.firestore,null,r)}}function Pr(n,e,...t){if(n=we(n),arguments.length===1&&(e=Vs.newId()),bv("doc","path",e),n instanceof Zs){let r=oe.fromString(e,...t);return cg(r),new Me(n,null,new B(r))}{if(!(n instanceof Me||n instanceof gn))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(oe.fromString(e,...t));return cg(r),new Me(n.firestore,n instanceof gn?n.converter:null,new B(r))}}var gv="AsyncQueue",Pc=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new gc(this,"async_queue_retry"),this.oc=()=>{let r=ka();r&&$(gv,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new Nt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!On(e))throw e;$(gv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Ie("INTERNAL UNHANDLED ERROR: ",vv(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=bh.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&G(47125,{hc:vv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function vv(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function _v(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var Dn=class extends Zs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Pc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Pc(e),this._firestoreClient=void 0,await e}}};function If(n,e,t){t||(t=qa);let r=qo(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(tn(s,e))return i;throw new j(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O_)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Mr(e.host)&&$l(e.host),r.initialize({options:e,instanceIdentifier:t})}function sy(n){if(n._terminated)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||oT(n),n._firestoreClient}function oT(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,f){return new cd(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ry(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new xh(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var vn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Se.fromBase64String(e))}catch(t){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(eo(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:Ae("string",vn._jsonSchemaVersion),bytes:Ae("string")};var Oi=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var xi=class{constructor(e){this._methodName=e}};var _n=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(eo(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Ae("string",_n._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};var yn=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(eo(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new j(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Ae("string",yn._jsonSchemaVersion),vectorValues:Ae("object")};var aT=/^__.*__$/,Vh=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pn(e,this.data,t,this.fieldTransforms)}},Rc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Et(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function oy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:n})}}var Lh=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return kc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(oy(this.Ec)&&aT.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},Mh=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Uc(e)}Dc(e,t,r,i=!1){return new Lh({Ec:e,methodName:t,bc:r,path:De.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function ay(n){let e=n._freezeSettings(),t=Uc(n._databaseId);return new Mh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cT(n,e,t,r,i,s={}){let o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);bf("Data must be an object, but it was:",o,r);let c=cy(r,o),l,d;if(s.merge)l=new it(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let p of s.mergeFields){let y=Fh(e,p,t);if(!o.contains(y))throw new j(x.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);uy(f,y)||f.push(y)}l=new it(f),d=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=o.fieldTransforms;return new Vh(new Qe(c),l,d)}var Cc=class n extends xi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var $h=class n extends xi{_toFieldTransform(e){return new Ga(e.path,new Tn)}isEqual(e){return e instanceof n}};function lT(n,e,t,r){let i=n.Dc(1,e,t);bf("Data must be an object, but it was:",i,r);let s=[],o=Qe.empty();xn(r,(l,d)=>{let f=Ef(e,l,t);d=we(d);let p=i.gc(f);if(d instanceof Cc)s.push(f);else{let y=Gc(d,p);y!=null&&(s.push(f),o.set(f,y))}});let c=new it(s);return new Rc(o,c,i.fieldTransforms)}function uT(n,e,t,r,i,s){let o=n.Dc(1,e,t),c=[Fh(e,r,t)],l=[i];if(s.length%2!=0)throw new j(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(Fh(e,s[y])),l.push(s[y+1]);let d=[],f=Qe.empty();for(let y=c.length-1;y>=0;--y)if(!uy(d,c[y])){let E=c[y],N=l[y];N=we(N);let V=o.gc(E);if(N instanceof Cc)d.push(E);else{let L=Gc(N,V);L!=null&&(d.push(E),f.set(E,L))}}let p=new it(d);return new Rc(f,p,o.fieldTransforms)}function Gc(n,e){if(ly(n=we(n)))return bf("Unsupported field value:",e,n),cy(n,e);if(n instanceof xi)return function(r,i){if(!oy(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let c of r){let l=Gc(c,i.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ge.fromDate(r);return{timestampValue:Si(i.serializer,s)}}if(r instanceof ge){let s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(i.serializer,s)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:p_(i.serializer,r._byteString)};if(r instanceof Me){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yn)return function(o,c){return{mapValue:{fields:{[tf]:{stringValue:nf},[_i]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return af(c.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Wh(r)}`)}(n,e)}function cy(n,e){let t={};return Fv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xn(n,(r,i)=>{let s=Gc(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ly(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof _n||n instanceof vn||n instanceof Me||n instanceof xi||n instanceof yn)}function bf(n,e,t){if(!ly(t)||!Ev(t)){let r=Wh(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Fh(n,e,t){if((e=we(e))instanceof Oi)return e._internalPath;if(typeof e=="string")return Ef(n,e);throw kc("Field path arguments must be of type string or ",n,!1,void 0,t)}var dT=new RegExp("[~\\*/\\[\\]]");function Ef(n,e,t){if(e.search(dT)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Oi(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function kc(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(x.INVALID_ARGUMENT,c+n+l)}function uy(n,e){return n.some(t=>t.isEqual(e))}var Dc=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new qh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(dy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},qh=class extends Dc{data(){return super.data()}};function dy(n,e){return typeof e=="string"?Ef(n,e):e instanceof Oi?e._internalPath:e._delegate._internalPath}function hT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Uh=class{convertValue(e,t="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return xn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[_i].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>me(o.doubleValue));return new yn(s)}convertGeoPoint(e){return new _n(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Mc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){let t=Gt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=oe.fromString(e);W(T_(r),9688,{name:e});let i=new vi(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||Ie(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function fT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var fr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},_r=class n extends Dc{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(dy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};_r._jsonSchemaVersion="firestore/documentSnapshot/1.0",_r._jsonSchema={type:Ae("string",_r._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};var ai=class extends _r{data(e={}){return super.data(e)}},ci=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new fr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ai(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let l=new ai(i._firestore,i._userDataWriter,c.doc.key,c.doc,new fr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new ai(i._firestore,i._userDataWriter,c.doc.key,c.doc,new fr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:pT(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function pT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}ci._jsonSchemaVersion="firestore/querySnapshot/1.0",ci._jsonSchema={type:Ae("string",ci._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};var Nc=class extends Uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}};function Hc(n,e,t){n=mn(n,Me);let r=mn(n.firestore,Dn),i=fT(n.converter,e,t);return Af(r,[cT(ay(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ot.none())])}function hy(n,e,t,...r){n=mn(n,Me);let i=mn(n.firestore,Dn),s=ay(i),o;return o=typeof(e=we(e))=="string"||e instanceof Oi?uT(s,"updateDoc",n._key,e,t,r):lT(s,"updateDoc",n._key,e),Af(i,[o.toMutation(n._key,ot.exists(!0))])}function fy(n){return Af(mn(n.firestore,Dn),[new Ai(n._key,ot.none())])}function Tf(n,...e){var t,r,i;n=we(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_v(e[o])||(s=e[o++]);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_v(e[o])){let p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,d,f;if(n instanceof Me)d=mn(n.firestore,Dn),f=Fc(n._key.path),l={next:p=>{e[o]&&e[o](mT(d,n,p))},error:e[o+1],complete:e[o+2]};else{let p=mn(n,Sc);d=mn(p.firestore,Dn),f=p._query;let y=new Nc(d);l={next:E=>{e[o]&&e[o](new ci(d,y,p,E))},error:e[o+1],complete:e[o+2]},hT(n._query)}return function(y,E,N,V){let L=new Oh(V),z=new Sh(E,L,N);return y.asyncQueue.enqueueAndForget(async()=>VE(await fv(y),z)),()=>{L.Ou(),y.asyncQueue.enqueueAndForget(async()=>LE(await fv(y),z))}}(sy(d),f,c,l)}function Af(n,e){return function(r,i){let s=new Nt;return r.asyncQueue.enqueueAndForget(async()=>BE(await iT(r),i,s)),s.promise}(sy(n),e)}function mT(n,e,t){let r=t.docs.get(e._key),i=new Nc(n);return new _r(n,i,e._key,r,new fr(t.hasPendingWrites,t.fromCache),e.converter)}var jh=class{constructor(e){this.kind="memory",this._onlineComponentProvider=Cn.provider,e?.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new Ec(void 0)}}toJSON(){return{kind:this.kind}}},Bh=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=gT(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function py(n){return new jh(n)}function my(n){return new Bh(n)}var zh=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Cn.provider,this._offlineComponentProvider={build:t=>new Tc(t,e?.cacheSizeBytes,this.forceOwnership)}}},Gh=class{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Cn.provider,this._offlineComponentProvider={build:t=>new Nh(t,e?.cacheSizeBytes)}}};function gT(n){return new zh(n?.forceOwnership)}function gy(){return new Gh}function Sf(){return new $h("serverTimestamp")}(function(e,t=!0){(function(i){Vi=i})(qr),rn(new dt("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),c=new Dn(new Qu(r.getProvider("auth-internal")),new Xu(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),wt(ig,sg,e),wt(ig,sg,"esm2017")})();var Xe={img:"clean.jpg",size:[1384,903],areas:[{id:"A1",nome:"\xC1rea 1",poly:[[689.9,401.4],[687.7,524.5],[742.8,515.6],[753.8,508.1],[788.1,448.7],[792.6,437.7],[778.7,407.4],[760.1,412.9],[750.1,413.9]],c:[733.2,455.5]},{id:"A2",nome:"\xC1rea 2",poly:[[601.5,414.8],[527,416.9],[476,407.3],[450.8,405.8],[446.9,437.4],[507.7,452.6],[515.8,479.1],[498.1,555.5],[535.1,557.5],[572.2,555.4],[593.4,546.8],[635.1,538.9],[687.9,524.3],[688.2,394.8],[636.6,418.2]],c:[581.9,481.6]},{id:"A3",nome:"\xC1rea 3",poly:[[326.8,377],[338.8,386.5],[369,398.9],[416.3,405.9],[451.7,413.1],[494,415.8],[533.1,423],[596.2,422.4],[626.9,425.5],[645.7,418.6],[673.9,402.2],[665.8,396.2],[645.7,368.4],[619.7,350.7],[598.2,340.5],[584.8,329.5],[569.7,294.2],[534.3,292.5],[516.9,288.6],[498.2,279.3],[488.6,271.5],[477.7,256.8],[465.9,227.9],[457.1,195.4],[450.8,160.3],[447.9,156.8],[427.1,166.9],[436.5,203.8],[420.9,239.8],[445.5,251.7],[448.3,273.9],[471.7,306],[483.2,331.3],[463.5,350.2],[446.7,334.7],[424.4,318.9],[368,298.4],[350.6,316],[332.7,308.3],[329.3,308.5],[324.4,314.6],[325.9,329],[320.3,334.8]],c:[534.7,362.6]},{id:"A4",nome:"\xC1rea 4",poly:[[245.6,354.2],[169.8,486.1],[200.9,492.2],[216.6,470.9],[253.4,444.9],[270.2,435],[330.6,428],[351.3,431.6],[368.6,439.6],[377.4,433.2],[374.3,426.7],[399.7,402.9],[367.5,398.6],[338.3,386.6],[307.1,364.6],[291.4,385.5]],c:[256.7,403.7]},{id:"A5",nome:"\xC1rea 5",poly:[[534,626.7],[522.6,643.5],[518.3,642],[534.6,681],[544.9,696.5],[591.4,713.8],[606.7,715.1],[616.9,718.8],[623.4,729.4],[624.6,737.4],[622.1,750.2],[623.4,780.9],[621.8,789.3],[628.5,787.9],[629.5,792.5],[631.9,793.4],[636.6,791.6],[637,784.9],[631.8,755.6],[633.4,716.9],[621.7,692],[631.3,642.3],[631.4,636.1],[627.8,634.8],[610,636.7],[608.7,640.4],[605.1,681.2],[591.8,684],[593.4,658.4],[591.8,655.1],[567.7,640.2],[538.5,627.6]],c:[563,671.3]},{id:"A6",nome:"\xC1rea 6",poly:[[623.4,729.4],[617,718.8],[606.7,715.1],[591.4,713.8],[544.9,696.4],[534.6,681],[518.3,642],[514.7,640.7],[509.5,641.6],[486.2,631.9],[474.1,637.2],[457.5,635.4],[425.6,642],[402.9,651.8],[383.6,653.9],[373.4,651.6],[354.7,644.2],[339.9,633.4],[336.3,632.1],[318.2,630.4],[314.1,642.1],[306.9,654.8],[304.3,662.1],[319.6,679.3],[331.5,727.7],[331.5,751.1],[327.7,771.8],[291.9,807.1],[290.6,812.8],[298.1,844.3],[302.9,846],[326,844.6],[356.7,845.2],[375.3,842.9],[405.9,851],[411.7,848.2],[414.1,849.1],[415.6,846.9],[430,841],[450.4,848.9],[515.4,833],[550.1,827.5],[587.6,818.2],[597.4,813.5],[618.1,790],[621.8,789.3],[623.4,780.9],[622.1,750.2],[624.7,737.4]],c:[452.8,741.7]}],units:[{id:"P1",nome:"Piquete 1",area:"A1",tipo:"pastagem",poly:[[731.1,409.9],[689.9,401.4],[688.7,469.1],[726.5,461.4],[727,459.1],[729.4,457.9]],m2:7228,c:[709.8,433.9]},{id:"P2",nome:"Piquete 2",area:"A1",tipo:"pastagem",poly:[[778.7,407.4],[760.1,412.9],[750.1,413.9],[731.1,409.9],[729.4,457.9],[731.1,458.5],[732.1,460.2],[788.1,448.7],[792.6,437.7]],m2:7233,c:[752.1,434.8]},{id:"P3",nome:"Piquete 3",area:"A1",tipo:"pastagem",poly:[[742.8,515.6],[753.8,508.1],[788.1,448.7],[732.1,460.2],[731.5,462.7],[729.2,463.6],[727.2,518.1]],m2:7228,c:[748.7,477.2]},{id:"P4",nome:"Piquete 4",area:"A1",tipo:"pastagem",poly:[[726.5,461.4],[688.7,469.1],[687.7,524.5],[727.2,518.1],[729.2,463.6],[727.4,463]],m2:7233,c:[708.2,493.6]},{id:"P5",nome:"Piquete 5",area:"A2",tipo:"pastagem",poly:[[601.5,414.8],[571.3,415.6],[597.2,546.1],[635.1,538.9],[687.9,524.3],[688.2,394.8],[636.6,418.2]],m2:40444,c:[635.7,471.6]},{id:"P6",nome:"Piquete 6",area:"A2",tipo:"pastagem",poly:[[597.2,546.1],[571.3,415.6],[527,416.9],[476,407.3],[450.8,405.8],[446.9,437.4],[507.7,452.6],[515.8,479.1],[498.1,555.5],[535.1,557.5],[572.2,555.4],[593.4,546.8]],m2:40586,c:[549.6,515.7]},{id:"P7",nome:"Piquete 7",area:"A3",tipo:"pastagem",poly:[[484.8,415.2],[495.2,359.1],[493.5,358.1],[492.9,355.7],[463.5,350.2],[446.7,334.7],[424.4,318.9],[368,298.4],[350.6,316],[332.7,308.3],[329.3,308.5],[324.4,314.6],[325.9,329],[320.3,334.8],[326.8,377],[338.8,386.5],[369,398.9],[416.3,405.9],[451.7,413.1]],m2:41850,c:[380.8,353]},{id:"P8",nome:"Piquete 8",area:"A3",tipo:"pastagem",poly:[[463.5,350.2],[492.9,355.7],[493.8,354],[495.9,353.4],[498.1,354.7],[498.6,356.5],[645.5,368.3],[619.7,350.7],[598.2,340.5],[584.8,329.5],[569.7,294.2],[534.3,292.5],[516.9,288.6],[498.2,279.3],[488.6,271.5],[477.7,256.8],[465.9,227.9],[457.1,195.4],[450.8,160.3],[447.9,156.8],[427.1,166.9],[436.5,203.8],[420.9,239.8],[445.5,251.7],[448.3,273.9],[471.7,306],[483.2,331.3]],m2:33518,c:[517.2,323.7]},{id:"P9",nome:"Piquete 9",area:"A3",tipo:"pastagem",poly:[[645.5,368.3],[498.6,356.5],[497.5,358.6],[495.2,359.1],[484.8,415.2],[494,415.8],[533.1,423],[596.2,422.4],[626.9,425.5],[645.7,418.6],[673.9,402.2],[665.8,396.2]],m2:33535,c:[536.1,391.4]},{id:"P10",nome:"Piquete 10",area:"A4",tipo:"pastagem",poly:[[245.6,354.2],[169.8,486.1],[200.9,492.2],[216.6,470.9],[260.1,440.9],[291.4,385.5]],m2:21868,c:[239.5,420.8]},{id:"P11",nome:"Piquete 11",area:"A4",tipo:"pastagem",poly:[[291.4,385.5],[260.1,440.9],[270.2,435],[330.6,428],[351.3,431.6],[368.6,439.6],[377.4,433.2],[374.3,426.7],[399.7,402.9],[367.5,398.6],[338.3,386.6],[307.1,364.6]],m2:15732,c:[313.3,402.5]},{id:"P12",nome:"Piquete 12",area:"A5",tipo:"pastagem",poly:[[534,626.7],[522.6,643.5],[518.3,642],[534.6,681],[544.9,696.5],[591.4,713.8],[606.7,715.1],[616.9,718.8],[623.4,729.4],[624.6,737.4],[622.1,750.2],[623.4,780.9],[621.8,789.3],[628.5,787.9],[629.5,792.5],[631.9,793.4],[636.6,791.6],[637,784.9],[631.8,755.6],[633.4,716.9],[621.7,692],[631.3,642.3],[631.4,636.1],[627.8,634.8],[610,636.7],[608.7,640.4],[605.1,681.2],[591.8,684],[593.4,658.4],[591.8,655.1],[567.7,640.2],[538.5,627.6]],m2:21181,c:[563,671.3]},{id:"P13",nome:"Piquete 13",area:"A6",tipo:"pastagem",poly:[[331.5,742.5],[460.9,748.4],[544.1,695.3],[534.6,681],[518.3,642],[514.7,640.7],[509.5,641.6],[486.2,631.9],[474.1,637.2],[457.5,635.4],[425.6,642],[402.9,651.8],[383.6,653.9],[373.4,651.6],[354.7,644.2],[339.9,633.4],[336.3,632.1],[318.2,630.4],[314.1,642.1],[306.9,654.8],[304.3,662.1],[319.6,679.3],[331.5,727.7]],m2:62038,c:[446,693.4]},{id:"P14",nome:"Piquete 14",area:"A6",tipo:"pastagem",poly:[[623.4,729.4],[617,718.8],[606.7,715.1],[591.4,713.8],[544.9,696.4],[544.1,695.3],[460.9,748.4],[331.5,742.5],[331.5,751.1],[327.7,771.8],[291.9,807.1],[290.6,812.8],[298.1,844.3],[302.9,846],[326,844.6],[356.7,845.2],[375.3,842.9],[405.9,851],[411.7,848.2],[414.1,849.1],[415.6,846.9],[430,841],[450.4,848.9],[515.4,833],[550.1,827.5],[587.6,818.2],[597.4,813.5],[618.1,790],[621.8,789.3],[623.4,780.9],[622.1,750.2],[624.7,737.4]],m2:100647,c:[550,764.3]}],corredor:[[629,538.1],[635.5,563.4],[631.9,570.6],[601.8,589.1],[579.9,611.9],[538,621.7],[532.4,628.7],[527.1,636.7],[520.6,642.1],[518.3,639.5],[524.5,634.3],[529.6,626.6],[536.1,618.6],[578,608.8],[599.6,586.4],[629.2,568.2],[631.8,563],[625.6,538.9]],sede:[{n:1,nome:"Barrac\xE3o",poly:[[442.3,452.1],[502.3,479.6],[490.8,507.5],[430.6,480.7],[442.3,452.1]]},{n:2,nome:"Barrac\xE3o",poly:[[462.3,498.4],[480.4,505.6],[464.9,546.4],[446.8,539.1],[462.3,498.4]]},{n:3,nome:"Barrac\xF5es (6 v\xE3os)",poly:[[387.1,418.9],[434.7,444.9],[419.9,473.8],[374.6,443.4],[387.1,418.9]]},{n:4,nome:"Barrac\xE3o",poly:[[364.4,441.6],[380.6,452.6],[356.8,481.1],[340.9,465.4],[364.4,441.6]]},{n:5,nome:"Barrac\xE3o",poly:[[382.3,460.9],[408.5,481.3],[390.2,504.1],[358.6,485.8],[382.3,460.9]]},{n:6,nome:"Barrac\xE3o (placas solares)",poly:[[405.4,493.4],[413.6,497.5],[402.3,537],[394.3,533.4],[405.4,493.4]]},{n:7,nome:"Constru\xE7\xE3o",poly:[[438.8,424.8],[445.1,428.3],[442.9,432.6],[436.7,429.4],[438.8,424.8]]},{n:8,nome:"Constru\xE7\xE3o",poly:[[347.8,436.3],[356.5,440.6],[353.4,446.7],[344.9,442.7],[347.8,436.3]]}],pontos:[{tipo:"agua_sal",nome:"Pra\xE7a da \xC1rea 1",p:[729.3,460.8]},{tipo:"agua_sal",nome:"Pra\xE7a da \xC1rea 3",p:[495.7,356.3]},{tipo:"agua",nome:"Bebedouro P12",p:[539,641.8]},{tipo:"agua",nome:"Bebedouro",p:[476.5,719.3]},{tipo:"agua",nome:"Bebedouro",p:[378.6,751.8]}],bbox:[169.8,156.8,792.6,851]};var vy={map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /> <path d="M15 5.764v15" /> <path d="M9 3.236v15" />',list:'<line x1="8" x2="21" y1="6" y2="6" /> <line x1="8" x2="21" y1="12" y2="12" /> <line x1="8" x2="21" y1="18" y2="18" /> <line x1="3" x2="3.01" y1="6" y2="6" /> <line x1="3" x2="3.01" y1="12" y2="12" /> <line x1="3" x2="3.01" y1="18" y2="18" />',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /> <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />',plus:'<path d="M5 12h14" /> <path d="M12 5v14" />',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /> <circle cx="12" cy="12" r="3" />',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />',"cloud-off":'<path d="m2 2 20 20" /> <path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" /> <path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',"cloud-upload":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M12 12v9" /> <path d="m16 16-4-4-4 4" />',check:'<path d="M20 6 9 17l-5-5" />',"chevron-right":'<path d="m9 18 6-6-6-6" />',"chevron-left":'<path d="m15 18-6-6 6-6" />',x:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',search:'<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />',calendar:'<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />',clock:'<circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',sprout:'<path d="M7 20h10" /> <path d="M10 20c5.5-2.5.8-6.4 3-10" /> <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /> <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />',"spray-can":'<path d="M3 3h.01" /> <path d="M7 5h.01" /> <path d="M11 7h.01" /> <path d="M3 7h.01" /> <path d="M7 9h.01" /> <path d="M3 11h.01" /> <rect width="4" height="4" x="15" y="5" /> <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" /> <path d="m13 14 8-2" /> <path d="m13 19 8-2" />',wheat:'<path d="M2 22 16 8" /> <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /> <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />',droplets:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /> <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />',package:'<path d="m7.5 4.27 9 5.15" /> <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /> <path d="m3.3 7 8.7 5 8.7-5" /> <path d="M12 22V12" />',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /> <polyline points="10 17 15 12 10 7" /> <line x1="15" x2="3" y1="12" y2="12" />',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /> <polyline points="16 17 21 12 16 7" /> <line x1="21" x2="9" y1="12" y2="12" />',milk:'<path d="M8 2h8" /> <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" /> <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',minus:'<path d="M5 12h14" />',"trash-2":'<path d="M3 6h18" /> <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /> <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /> <line x1="10" x2="10" y1="11" y2="17" /> <line x1="14" x2="14" y1="11" y2="17" />',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <polyline points="7 10 12 15 17 10" /> <line x1="12" x2="12" y1="15" y2="3" />',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /> <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /> <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /> <path d="m15 5 4 4" />',fence:'<path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M6 8h4" /> <path d="M6 18h4" /> <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M14 8h4" /> <path d="M14 18h4" /> <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />',"notebook-pen":'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /> <path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />',"clipboard-list":'<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M12 11h4" /> <path d="M12 16h4" /> <path d="M8 11h.01" /> <path d="M8 16h.01" />',tractor:'<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" /> <path d="M16 18h-5" /> <path d="M18 5a1 1 0 0 0-1 1v5.573" /> <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" /> <path d="M4 11V4" /> <path d="M7 15h.01" /> <path d="M8 10.1V4" /> <circle cx="18" cy="18" r="2" /> <circle cx="7" cy="15" r="5" />',"locate-fixed":'<line x1="2" x2="5" y1="12" y2="12" /> <line x1="19" x2="22" y1="12" y2="12" /> <line x1="12" x2="12" y1="2" y2="5" /> <line x1="12" x2="12" y1="19" y2="22" /> <circle cx="12" cy="12" r="7" /> <circle cx="12" cy="12" r="3" />',"circle-check":'<circle cx="12" cy="12" r="10" /> <path d="m9 12 2 2 4-4" />',syringe:'<path d="m18 2 4 4" /> <path d="m17 7 3-3" /> <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /> <path d="m9 11 4 4" /> <path d="m5 19-3 3" /> <path d="m14 4 6 6" />',"arrow-right-left":'<path d="m16 3 4 4-4 4" /> <path d="M20 7H4" /> <path d="m8 21-4-4 4-4" /> <path d="M4 17h16" />',"arrow-right":'<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /> <path d="M20 3v4" /> <path d="M22 5h-4" /> <path d="M4 17v2" /> <path d="M5 18H3" />',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /> <path d="m14.5 12.5 2-2" /> <path d="m11.5 9.5 2-2" /> <path d="m8.5 6.5 2-2" /> <path d="m17.5 15.5 2-2" />',gauge:'<path d="m12 14 4-4" /> <path d="M3.34 19a10 10 0 1 1 17.32 0" />'};var Ry={apiKey:"AIzaSyAFFWCUUoewpmMHoxbBMVp9Xgwnqy6Gm3A",authDomain:"gtf-milk-campo.firebaseapp.com",projectId:"gtf-milk-campo",storageBucket:"gtf-milk-campo.firebasestorage.app",messagingSenderId:"391069218990",appId:"1:391069218990:web:2ff3475d712c7f8fc6553f"},yT="gtfmilk.campo@gmail.com",Cy="2026.11.10-1629",kf=tu(Ry),Fn=ha(kf,{persistence:[Ou,Nu]}),Wt;try{Wt=If(kf,{localCache:my({tabManager:gy()})})}catch{Wt=If(kf,{localCache:py()})}var X=(n,e=document)=>e.querySelector(n),R=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),U=(n,e="")=>`<svg class="ic ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${vy[n]||""}</svg>`,Jc={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},$e=n=>String(n).padStart(2,"0"),ft=n=>`${n.getFullYear()}-${$e(n.getMonth()+1)}-${$e(n.getDate())}`,Ze=()=>ft(new Date),Mf=()=>{let n=new Date;return`${$e(n.getHours())}:${$e(n.getMinutes())}`},lt=(n,e)=>{let[t,r,i]=String(n).split("-").map(Number),[s,o]=String(e||"00:00").split(":").map(Number);return new Date(t,(r||1)-1,i||1,s||0,o||0)},Tt=n=>Math.round((lt(Ze())-lt(n))/864e5),le=n=>{let e=lt(n);return`${$e(e.getDate())}/${$e(e.getMonth()+1)}${e.getFullYear()!==new Date().getFullYear()?"/"+e.getFullYear():""}`},$f=n=>`${$e(n.getHours())}:${$e(n.getMinutes())}`+(ft(n)===Ze()?"":` de ${le(ft(n))}`),wT=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],IT=n=>{let e=Tt(n);return e===0?"Hoje":e===1?"Ontem":`${le(n)} \xB7 ${wT[lt(n).getDay()]}`},de=(n,e=2)=>Number(n).toLocaleString("pt-BR",{maximumFractionDigits:e}),At=n=>(n/1e4).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ha",Xc=()=>Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),Re=(n,e,t)=>`${n} ${n===1?e:t}`,Kt=Xe.units.map(n=>({...n,code:n.id,nome:n.nome||n.id})),ie=Object.fromEntries(Kt.map(n=>[n.id,n])),il=Xe.areas.map(n=>({...n,units:Kt.filter(e=>e.area===n.id)})),Rr=n=>"M"+n.map(e=>e.join(",")).join("L")+"Z",pt=n=>n.tipo==="pastagem"?`Piquete ${n.code.slice(1)}`:n.nome,ky=n=>il.find(e=>e.id===n.area),mo={gado_entrou:{label:"Soltar gado",short:"Gado entrou",icon:"log-in",sub:"Soltar ou mudar de piquete"},gado_saiu:{label:"Tirar do pasto",short:"Gado saiu",icon:"log-out",sub:"Lote sai dos piquetes"},tratamento:{label:"Tratamento das novilhas",short:"Tratamento",icon:"syringe",sub:"Verm\xEDfugo, vacina, carrapaticida"},avaliacao:{label:"Avalia\xE7\xE3o do pasto",short:"Avalia\xE7\xE3o",icon:"ruler",sub:"Pronto, recuperando ou rapado"},aplicacao:{label:"Aplica\xE7\xE3o no pasto ou lavoura",short:"Aplica\xE7\xE3o",icon:"spray-can",sub:"Herbicida, inseticida, fungicida"},adubacao:{label:"Aduba\xE7\xE3o",short:"Aduba\xE7\xE3o",icon:"package",sub:"Adubo, ureia, calc\xE1rio"},plantio:{label:"Plantio",short:"Plantio",icon:"sprout",sub:"Semeadura ou ressemeadura"},colheita:{label:"Colheita ou corte",short:"Colheita",icon:"wheat",sub:"Gr\xE3o, silagem, feno"},ocorrencia:{label:"Ocorr\xEAncia",short:"Ocorr\xEAncia",icon:"triangle-alert",sub:"Cerca, \xE1gua, praga, doen\xE7a"},mudanca:{label:"Mudan\xE7a de piquete",short:"Mudan\xE7a",icon:"arrow-right-left",sub:"",hidden:!0}},lo=["gado_entrou","gado_saiu","tratamento","avaliacao"],mt={pronto:{label:"Pronto para entrar",short:"Pasto pronto",chip:"descanso",icon:"check",sub:"Pasto recuperado, pode receber o gado"},recuperando:{label:"Recuperando",short:"Recuperando",chip:"pend",icon:"clock",sub:"Ainda precisa de mais dias de descanso"},rapado:{label:"Rapado",short:"Pasto rapado",chip:"car",icon:"triangle-alert",sub:"Pasto consumido, hora de tirar o gado"}},bT={pronto:0,recuperando:2,rapado:3},kr=(n,e)=>+n>0?+n/(ie[e].m2/1e4):null,qi=n=>`${de(n,n<10?1:0)} por ha`,Dy=["Herbicida","Inseticida","Fungicida","Acaricida","Adjuvante","Outro"],Ff=["Adubo","Corretivo","Outro"],qf=["Verm\xEDfugo","Vacina","Carrapaticida","Antibi\xF3tico","Suplemento","Outro"],ET=[...Dy,...Ff,...qf].filter((n,e,t)=>n!=="Outro"&&t.indexOf(n)===e).concat("Outro"),TT=["L/ha","mL/ha","kg/ha","g/ha","mL/animal","dose/animal","g/animal"],_y=["Aveia preta","Azev\xE9m","Aveia + azev\xE9m","Milho silagem","Milho gr\xE3o","Sorgo","Soja","Feij\xE3o","Trigo","Tifton"],AT=["Novilhas","Bezerras","Vacas secas","Vacas em lacta\xE7\xE3o"],ST=["Cerca","Bebedouro / \xE1gua","Praga","Doen\xE7a","Planta daninha","Eros\xE3o","Outro"],yy=["O que foi feito?","Em qual \xE1rea?","Detalhes","Conferir e salvar"],Wc={gado:"#2F6FDB",descanso:"#3FA34D",plantado:"#E3B21C",colhido:"#B08968",livre:"#FFFFFF"},PT={gado:"Com gado",descanso:"Descanso",plantado:"Plantado",colhido:"Colhido",livre:"Sem registro"};function RT(){let n=s=>ft(new Date(Date.now()-s*864e5)),e={"ex-fung":{nome:"Fungicida (exemplo)",tipo:"Fungicida",unidade:"L/ha",carencia:14,reentrada:24,ativo:""},"ex-herb":{nome:"Herbicida (exemplo)",tipo:"Herbicida",unidade:"L/ha",carencia:7,reentrada:24,ativo:""},"ex-ureia":{nome:"Ureia (exemplo)",tipo:"Adubo",unidade:"kg/ha",carencia:0,reentrada:0,ativo:""},"ex-verm":{nome:"Verm\xEDfugo (exemplo)",tipo:"Verm\xEDfugo",unidade:"mL/animal",carencia:0,reentrada:0,ativo:""}},t=(s,o)=>({id:s,nome:e[s].nome,tipo:e[s].tipo,dose:o,unidade:e[s].unidade,carencia:e[s].carencia,reentrada:e[s].reentrada}),r="Funcion\xE1rio (exemplo)",i={"ex-1":{tipo:"plantio",areas:["P13","P14"],data:n(78),hora:"08:00",cultura:"Aveia + azev\xE9m",quem:r},"ex-2":{tipo:"adubacao",areas:["P5","P6"],data:n(9),hora:"09:10",produtos:[t("ex-ureia",100)],quem:r},"ex-3":{tipo:"gado_entrou",areas:["P3"],data:n(16),hora:"08:00",lote:"Novilhas",animais:24,quem:r},"ex-4":{tipo:"mudanca",de:"P3",areas:["P1"],data:n(10),hora:"08:10",lote:"Novilhas",animais:24,quem:r},"ex-5":{tipo:"mudanca",de:"P1",areas:["P2"],data:n(4),hora:"07:40",lote:"Novilhas",animais:24,quem:r},"ex-9":{tipo:"tratamento",areas:["P2"],data:n(1),hora:"16:30",lote:"Novilhas",animais:24,produtos:[t("ex-verm",10)],quem:r},"ex-10":{tipo:"gado_entrou",areas:["P7"],data:n(3),hora:"16:00",lote:"Vacas secas",animais:18,quem:r},"ex-11":{tipo:"avaliacao",areas:["P2"],data:n(0),hora:"07:30",condicao:"rapado",altura:6,quem:r},"ex-12":{tipo:"avaliacao",areas:["P3"],data:n(0),hora:"07:35",condicao:"pronto",altura:22,quem:r},"ex-13":{tipo:"avaliacao",areas:["P1"],data:n(0),hora:"07:40",condicao:"recuperando",altura:12,quem:r},"ex-6":{tipo:"aplicacao",areas:["P13","P14"],data:n(2),hora:"08:30",produtos:[t("ex-fung",.6)],calda:150,alvo:"Ferrugem",quem:r},"ex-7":{tipo:"ocorrencia",areas:["P10"],data:n(1),hora:"17:15",ocorr:"Cerca",obs:"Arame arrebentado perto da porteira do P7.",quem:r},"ex-8":{tipo:"aplicacao",areas:["P9"],data:n(0),hora:"07:00",produtos:[t("ex-herb",2)],calda:200,alvo:"Buva",quem:r}};for(let s of Object.values(i))s.ha=Math.round(s.areas.reduce((o,c)=>o+ie[c].m2,0)/100)/100;return{produtos:e,registros:i,equipe:{}}}var CT=RT(),v={view:"mapa",user:null,perfil:null,perfilLoaded:!1,perfilErr:null,authReady:!1,isAdmin:!1,me:"",canWrite:!1,remote:{registros:{},produtos:{},usuarios:{}},loaded:{},fromCache:{},pend:new Set,demoPref:Jc.get("gtf.treino",!1)===!0,sandbox:{registros:{},produtos:{},equipe:{}},sel:null,flow:null,detail:null,filter:"todos",q:"",open:null,confirmDel:null,prodForm:null,userForm:null,pw:!1,pwErr:"",busy:!1,ver:0,listDirty:!1};function Vt(){return v.demoPref===!0}function Pf(n,e=!0){let t={};if(e&&Vt()){for(let[r,i]of Object.entries(CT[n]||{}))t[r]={...i,_demo:!0};for(let[r,i]of Object.entries(v.sandbox[n]||{}))t[r]={...i,_treino:!0};return t}for(let[r,i]of Object.entries(v.remote[n]||{}))t[r]=v.pend.has(n+"/"+r)?{...i,_pending:!0}:i;return t}var Kc={ver:-1};function gt(){if(Kc.ver===v.ver)return Kc;let n=Object.entries(Pf("registros")).map(([e,t])=>({id:e,...t})).sort((e,t)=>(t.data+(t.hora||"")).localeCompare(e.data+(e.hora||""))||String(t.criadoEm||"").localeCompare(String(e.criadoEm||"")));return Kc={ver:v.ver,regs:n,prods:Pf("produtos"),equipe:Pf("equipe"),st:{}},Kc}var Qt=()=>{v.ver++};function go(){let n=gt();if(n.pasto)return n.pasto;let e={},t={},r={},i=(s,o,c)=>{let l=r[s]||[];for(let d=l.length-1;d>=0;d--)if(!l[d].to&&l[d].lote.toLowerCase()===o.toLowerCase()){l[d].to=c;break}t[s]=c};for(let s of[...n.regs].reverse()){if(!["gado_entrou","mudanca","gado_saiu"].includes(s.tipo))continue;let o=String(s.lote||"Lote").trim()||"Lote",c=o.toLowerCase(),l=e[c];if(s.tipo==="gado_saiu"){if(l&&(s.areas||[]).includes(l.piq))i(l.piq,o,s.data),delete e[c];else for(let f of s.areas||[])t[f]=s.data;continue}let d=(s.areas||[])[0];d&&(l?i(l.piq,o,s.data):s.de&&(t[s.de]=s.data),e[c]={nome:o,piq:d,since:s.data,hora:s.hora,animais:+s.animais||l&&l.animais||null},(r[d]=r[d]||[]).push({lote:o,from:s.data,to:null,animais:e[c].animais}))}return n.pasto={lots:e,exits:t,periods:r},n.pasto}var $n=()=>Object.values(go().lots),St=n=>go().lots[String(n||"").trim().toLowerCase()]||null,Zc=()=>[...new Set([...$n().map(n=>n.nome),...AT])];function Ny(n){return Kt.filter(e=>e.tipo==="pastagem"&&e.id!==n).map(e=>{let t=Yt(e.id);return{u:e,st:t,block:t.key==="gado"?"Ocupado":t.car||t.reent?"Em car\xEAncia":null,rest:t.key==="descanso"?t.rest:null,cond:t.aval?bT[t.aval.condicao]??1:1}}).sort((e,t)=>!!e.block-!!t.block||e.cond-t.cond||(t.rest??-1)-(e.rest??-1)||t.u.m2-e.u.m2)}function Oy(n){let e=Ny(n),t=e.find(r=>!r.block&&r.cond===0)||e.find(r=>!r.block&&r.cond===1&&r.rest!=null)||e.find(r=>!r.block&&r.cond<2)||e.find(r=>!r.block);return t?t.u.id:null}function Yt(n){let e=gt();if(e.st[n])return e.st[n];let t=e.regs.filter(O=>(O.areas||[]).includes(n)||O.de===n),r=new Date,i=null,s=null;for(let O of t)if(O.tipo==="aplicacao")for(let Y of O.produtos||[]){let k=lt(O.data,O.hora||"00:00"),M=+Y.carencia||0,w=+Y.reentrada||0;if(M){let g=lt(O.data);g.setDate(g.getDate()+M),g>r&&(!i||g>i.until)&&(i={until:g,nome:Y.nome,r:O})}if(w){let g=new Date(k.getTime()+w*36e5);g>r&&(!s||g>s.until)&&(s={until:g,nome:Y.nome,r:O})}}let o=go(),c=Object.values(o.lots).filter(O=>O.piq===n),l=o.exits[n],d=t.find(O=>O.tipo==="plantio"||O.tipo==="colheita"),f="livre",p=t.length?`\xDAltimo: ${(mo[t[0].tipo]||{}).short||t[0].tipo} em ${le(t[0].data)}`:"Sem registro",y=null,E=null,N=null;if(c.length)E=Tt(c[0].since)+1,f="gado",p=`${c[0].nome}${c.length>1?" +"+(c.length-1):""} \xB7 dia ${E}`,y={data:c[0].since};else if(l&&(!d||l>=d.data))N=Math.max(0,Tt(l)),f="descanso",p=`Descanso \xB7 ${N===0?"desde hoje":Re(N,"dia","dias")}`,y={data:l};else if(d){let O=Tt(d.data);y=d,d.tipo==="plantio"?(f="plantado",p=`${d.cultura||"Plantado"} \xB7 ${O<=0?"plantado hoje":Re(O,"dia","dias")}`):(f="colhido",p=`Colhido em ${le(d.data)}`)}let V=t.findIndex(O=>O.tipo==="avaliacao"),L=t.findIndex(O=>["gado_entrou","mudanca","gado_saiu"].includes(O.tipo)),z=V>=0&&(L<0||V<L)?t[V]:null,F={key:f,text:p,car:i,reent:s,ev:y,rs:t,occ:c,dia:E,rest:N,aval:z,lot:c.length?kr(c[0].animais,n):null,lastPl:t.find(O=>O.tipo==="plantio"),lastAp:t.find(O=>O.tipo==="aplicacao"),lastTr:t.find(O=>O.tipo==="tratamento")};return e.st[n]=F,F}function Df(n){let e=`<span class="chip ${n.key}">${R(n.text)}</span>`;if(n.aval&&mt[n.aval.condicao]){let t=mt[n.aval.condicao];e+=`<span class="chip ${t.chip}">${U(t.icon,"sm")}${t.short}${n.aval.altura?` \xB7 ${n.aval.altura} cm`:""} \xB7 ${le(n.aval.data)}</span>`}return n.reent&&(e+=`<span class="chip car">${U("triangle-alert","sm")}N\xE3o entrar at\xE9 ${$f(n.reent.until)}</span>`),n.car&&(e+=`<span class="chip car">${U("clock","sm")}Car\xEAncia \xB7 libera ${le(ft(n.car.until))}</span>`),e}function el(n){let e=n&&n.code||"";ct(e==="permission-denied"?"Sem permiss\xE3o para essa a\xE7\xE3o. O registro n\xE3o foi aceito.":`N\xE3o foi poss\xEDvel salvar (${e||"erro"}).`),Qt(),Ge()}function tl(n,e,t){if(Vt()){v.sandbox[n]=v.sandbox[n]||{},v.sandbox[n][e]=t,Qt();return}let r={...t};n==="registros"&&(r.autorUid=v.user.uid,r.autorNome=v.me,r.criadoTs=Sf()),Hc(Pr(Wt,n,e),r).catch(el)}function wy(n,e){if(v.sandbox[n]&&v.sandbox[n][e]){delete v.sandbox[n][e],Qt();return}Vt()||fy(Pr(Wt,n,e)).catch(el)}var Nf=n=>n&&typeof n.toMillis=="function"?n.toMillis():n&&n.seconds?n.seconds*1e3:null;function Iy(n){if(n._demo)return!1;if(n._treino||v.isAdmin)return!0;if(!v.user||n.autorUid!==v.user.uid)return!1;let e=Nf(n.criadoTs)||Date.parse(n.criadoEm||"");return!e||Date.now()-e<24*36e5}var qn=()=>navigator.onLine===!1||!!v.loaded.registros&&v.fromCache.registros===!0,xy=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Vy=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fi=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Fi=n,v.view==="cadastros"&&Pe()});window.addEventListener("online",()=>Ge());window.addEventListener("offline",()=>Ge());function Uf(n,e,t){let r=document.createElement("a");r.href=URL.createObjectURL(new Blob([e],{type:t})),r.download=n,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},2e3)}var kT=0;function Ly(n,e={}){let t=Xe.size[0],r=Xe.size[1],i=++kT,s=Xe.sede.map(k=>`<path d="${Rr(k.poly)}" fill="#fff" fill-opacity=".18" stroke="#fff" stroke-opacity=".8" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join(""),o=Xe.sede.flatMap(k=>k.poly),c=o.reduce((k,M)=>k+M[0],0)/o.length,l=o.reduce((k,M)=>k+M[1],0)/o.length;n.innerHTML=`<div class="mapwrap"><svg class="map" role="img" aria-label="Mapa das \xE1reas da fazenda">
    <defs><pattern id="h${i}" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="3.5" height="9" fill="#FF6B1A"/></pattern></defs>
    <rect x="-5000" y="-5000" width="${t+1e4}" height="${r+1e4}" fill="#1C2A21"/>
    <image href="${Xe.img}" x="0" y="0" width="${t}" height="${r}" preserveAspectRatio="none"/>
    <path d="${Rr(Xe.corredor)}" fill="#F2C94C" fill-opacity=".85"/>
    ${s}
    <g class="ul">${Kt.map(k=>`<g class="u" data-id="${k.id}"><path class="uf" d="${Rr(k.poly)}"/><path class="uh" d="${Rr(k.poly)}" fill="url(#h${i})" fill-opacity=".55" style="display:none"/><path class="us" d="${Rr(k.poly)}" vector-effect="non-scaling-stroke"/></g>`).join("")}</g>
    <g class="pl">${Xe.pontos.map(k=>`<g class="pt" data-x="${k.p[0]}" data-y="${k.p[1]}"><circle r="5" fill="#4DABF7" stroke="#fff" stroke-width="1.5"/></g>`).join("")}
      ${Kt.map(k=>`<g class="lb" data-id="${k.id}" data-x="${k.c[0]}" data-y="${k.c[1]}"><rect x="${-(8+k.code.length*5)}" y="-11" width="${16+k.code.length*10}" height="22" rx="6"/><text>${k.code}</text></g>`).join("")}
      <g class="lb" data-x="${c}" data-y="${l-34}"><rect x="-24" y="-11" width="48" height="22" rx="6"/><text>Sede</text></g>
    </g></svg>
    ${e.legend?`<div class="legend" aria-label="Legenda">
      <span class="lgd"><span class="sw" style="background:${Wc.gado}"></span>Com gado \xB7 dia</span>
      <span class="lgd"><span class="sw" style="background:#E8590C"></span>Hora de mudar</span>
      <span class="lgd"><span class="sw" style="background:#2F9E44"></span>Pronto p/ entrar</span>
      <span class="lgd"><span class="sw" style="background:${Wc.descanso}"></span>Descanso \xB7 dias</span>
      <span class="lgd"><span class="sw" style="background:${Wc.plantado}"></span>Plantado</span>
      <span class="lgd"><span class="sw" style="background:repeating-linear-gradient(45deg,#FF6B1A 0 3px,transparent 3px 6px)"></span>Car\xEAncia</span>
      <span class="lgd"><span class="sw" style="background:transparent"></span>Sem registro</span></div>`:""}
    <div class="zoom"><button data-z="in" aria-label="Aproximar">${U("plus")}</button><button data-z="out" aria-label="Afastar">${U("minus")}</button><button data-z="fit" aria-label="Ver tudo">${U("locate-fixed")}</button></div>
    <div class="attr">Imagem: Google Earth \xB7 Airbus</div>
    <div class="cardslot"></div></div>`;let d=n.querySelector("svg"),f=null,p=()=>d.getBoundingClientRect();function y(){let k=p();if(!k.width)return;let M=f.w/k.width;d.querySelectorAll("[data-x]").forEach(_=>_.setAttribute("transform",`translate(${_.dataset.x},${_.dataset.y}) scale(${M})`));let w=[],g=[...d.querySelectorAll(".lb")].map(_=>({g:_,id:_.dataset.id,w:+_.querySelector("rect").getAttribute("width"),pri:_.classList.contains("sel")?1e9:_.classList.contains("occ")?1e8:_.classList.contains("ready")?5e7:_.dataset.id?ie[_.dataset.id].m2:5e3})).sort((_,b)=>b.pri-_.pri);for(let _ of g){let b=(_.g.dataset.x-f.x)/M,T=(_.g.dataset.y-f.y)/M,A=[b-_.w/2-2,T-13,b+_.w/2+2,T+13],I=w.some(Ce=>A[0]<Ce[2]&&A[2]>Ce[0]&&A[1]<Ce[3]&&A[3]>Ce[1]);_.g.style.display=I?"none":"",I||w.push(A)}}function E(){d.setAttribute("viewBox",`${f.x} ${f.y} ${f.w} ${f.h}`),y()}function N(){let k=p(),M=k.width?k.height/k.width:r/t;f.w=Math.min(Math.max(f.w,80),t*1.2),f.h=f.w*M,f.x=Math.min(Math.max(f.x,-f.w*.4),t-f.w*.6),f.y=Math.min(Math.max(f.y,-f.h*.4),r-f.h*.6)}function V(k=Xe.bbox,M=.06){let w=p();if(!w.width)return!1;let g=w.height/w.width,_=(k[2]-k[0])*(1+M*2),b=(k[3]-k[1])*(1+M*2);return b/_>g?_=b/g:b=_*g,f={x:(k[0]+k[2])/2-_/2,y:(k[1]+k[3])/2-b/2,w:_,h:b},N(),E(),!0}function L(k,M,w){let g=p();if(!f)return;M==null&&(M=g.left+g.width/2,w=g.top+g.height/2);let _=(M-g.left)/g.width,b=(w-g.top)/g.height,T=f.x+_*f.w,A=f.y+b*f.h;f.w/=k,f.h/=k,f.x=T-_*f.w,f.y=A-b*f.h,N(),E()}let z=new Map,F=null;d.addEventListener("pointerdown",k=>{if(f){try{d.setPointerCapture(k.pointerId)}catch{}if(z.set(k.pointerId,[k.clientX,k.clientY]),z.size===1){let M=k.target.closest&&k.target.closest("[data-id]");F={mode:"pan",sx:k.clientX,sy:k.clientY,vb:{...f},moved:!1,tid:M?M.dataset.id:null}}else if(z.size===2){let[M,w]=[...z.values()];F={mode:"pinch",d0:Math.hypot(M[0]-w[0],M[1]-w[1])||1,m0:[(M[0]+w[0])/2,(M[1]+w[1])/2],vb:{...f},moved:!0}}}}),d.addEventListener("pointermove",k=>{if(!z.has(k.pointerId)||!F)return;z.set(k.pointerId,[k.clientX,k.clientY]);let M=p();if(F.mode==="pan"&&z.size===1){let w=k.clientX-F.sx,g=k.clientY-F.sy;Math.hypot(w,g)>7&&(F.moved=!0),F.moved&&(f.x=F.vb.x-w/M.width*F.vb.w,f.y=F.vb.y-g/M.height*F.vb.h,N(),E())}else if(F.mode==="pinch"&&z.size===2){let[w,g]=[...z.values()],_=Math.hypot(w[0]-g[0],w[1]-g[1]),b=[(w[0]+g[0])/2,(w[1]+g[1])/2],T=_/F.d0,A=F.vb.x+(F.m0[0]-M.left)/M.width*F.vb.w,I=F.vb.y+(F.m0[1]-M.top)/M.height*F.vb.h;f.w=F.vb.w/T,f.h=F.vb.h/T,f.x=A-(b[0]-M.left)/M.width*f.w,f.y=I-(b[1]-M.top)/M.height*f.h,N(),E()}});let O=k=>{if(z.has(k.pointerId))if(z.delete(k.pointerId),F&&F.mode==="pan"&&!F.moved&&z.size===0&&k.type==="pointerup"&&e.onTap&&e.onTap(F.tid),z.size===1){let[M]=[...z.values()];F={mode:"pan",sx:M[0],sy:M[1],vb:{...f},moved:!0,tid:null}}else z.size||(F=null)};d.addEventListener("pointerup",O),d.addEventListener("pointercancel",O),d.addEventListener("wheel",k=>{k.preventDefault(),L(Math.exp(-k.deltaY*.0015),k.clientX,k.clientY)},{passive:!1}),n.querySelector(".zoom").addEventListener("click",k=>{let M=k.target.closest("[data-z]");M&&(M.dataset.z==="fit"?V():L(M.dataset.z==="in"?1.5:1/1.5))}),new ResizeObserver(()=>{let k=p();k.width&&(f?(f.h=f.w*k.height/k.width,N(),E()):V())}).observe(d);function Y(){d.querySelectorAll(".u").forEach(k=>{let M=k.dataset.id,w=k.querySelector(".uf"),g=k.querySelector(".uh");if(e.select){let _=e.select().has(M);w.setAttribute("fill",_?"#FFD43B":"#FFFFFF"),w.setAttribute("fill-opacity",_?".55":".08"),g.style.display="none",k.classList.toggle("sel",_)}else{let _=Yt(M);w.setAttribute("fill",Wc[_.key]),w.setAttribute("fill-opacity",_.key==="livre"?".06":".45"),g.style.display=_.car||_.reent?"":"none",k.classList.toggle("sel",v.sel===M)}}),d.querySelectorAll(".lb[data-id]").forEach(k=>{let M=k.dataset.id,w=ie[M],g=w.code,_="";if(!e.select){let A=Yt(M),I=A.aval&&A.aval.condicao;A.key==="gado"?(g=`${w.code} \xB7 dia ${A.dia}`,_=I==="rapado"?"occ hot":"occ"):I==="pronto"?(g=A.rest!=null?`${w.code} \xB7 ${A.rest}d`:`${w.code} \xB7 pronto`,_="ready"):A.key==="descanso"&&(g=`${w.code} \xB7 ${A.rest}d`,_="rest")}let b=Math.round(16+g.length*7.4),T=k.querySelector("rect");T.setAttribute("x",-b/2),T.setAttribute("width",b),k.querySelector("text").textContent=g;for(let A of["occ","rest","ready","hot"])k.classList.toggle(A,_.split(" ").includes(A));k.classList.toggle("sel",e.select?e.select().has(M):v.sel===M)}),f&&y()}return Y(),{refresh:Y,fit:V,host:n}}function Ui(){let n=0;for(let e of v.pend)e.startsWith("registros/")&&n++;return n}function DT(){let n=X("#sync"),e=Ui(),t="",r="Tudo enviado",i='<span class="dot"></span>';Vt()?(t="wait",r="Modo treino"):v.loaded.registros?e&&qn()?(t="off",r=`${e} sem sinal`):e?(t="wait",r=`Enviando ${e}\u2026`,i=U("refresh-cw","sm spin")):qn()&&(t="off",r="Sem sinal"):(t="wait",r="Carregando\u2026"),n.className="sync "+t,n.innerHTML=i+R(r);let s=X("#who");s&&(s.textContent=v.me?" \xB7 "+v.me:""),X("#banner").innerHTML=Vt()?'<div class="banner"><p><b>Modo treino.</b> Nada do que for registrado \xE9 salvo.</p><button data-act="demo-hide">Sair do treino</button></div>':"";let o=[["mapa","map","Mapa"],["areas","layers","\xC1reas"],null,["caderno","book-open","Caderno"],["cadastros","settings",v.isAdmin?"Admin":"Conta"]];X("#bar").innerHTML=o.map(c=>c?`<button class="nb" data-act="nav" data-v="${c[0]}" ${v.view===c[0]?'aria-current="page"':""}>${U(c[1])}<span>${c[2]}</span></button>`:`<button class="nb reg" data-act="open-flow" ${v.canWrite?"":"disabled"}><span class="plus">${U("plus")}</span><span>Registrar</span></button>`).join("")}var Cr=null;function My(){let n=X("#v-mapa");Cr||(Cr=Ly(n,{legend:!0,onTap:e=>{v.sel=e||null,Cr.refresh(),Of()}})),Cr.refresh(),Of()}function Of(){let n=X("#v-mapa .cardslot");if(!n)return;let e=v.canWrite?"":"disabled";if(!v.sel){let o=$n();n.innerHTML=`<div class="mapcard rot" aria-label="Lotes no pasto">${o.length?o.map(c=>{let l=ie[c.piq],d=Oy(c.piq);return`<div class="rot-row"><span class="ucode gado">${R(l.code)}</span><span class="uinfo"><b>${R(c.nome)}${c.animais?` \xB7 ${c.animais}`:""} \xB7 dia ${Tt(c.since)+1}</b><span>${Yt(l.id).aval?.condicao==="rapado"?"Pasto rapado":`${c.animais?qi(kr(c.animais,l.id)):"No "+R(l.code)}`}${d?` \xB7 pr\xF3ximo: ${R(ie[d].code)}`:""}</span></span><button class="btn sm pri" data-act="q-mudar" data-id="${l.id}" data-lote="${R(c.nome)}" ${e}>Mudar</button></div>`}).join(""):'<div class="rot-row"><span class="uinfo"><b>Nenhum lote no pasto</b><span>Toque no piquete onde soltou as novilhas.</span></span></div>'}</div>`;return}let t=ie[v.sel],r=Yt(t.id),i=ky(t),s=r.rs[0];n.innerHTML=`<div class="mapcard" role="dialog" aria-label="${R(pt(t))}">
    <div class="mc-h"><div><div class="mc-t">${R(pt(t))}</div><div class="mc-s">${R(i?i.nome:"")} \xB7 ${t.tipo==="pastagem"?"Pastagem":"Lavoura"} \xB7 ${At(t.m2)}</div></div>
    <button class="xbtn" data-act="card-close" aria-label="Fechar">${U("x")}</button></div>
    ${r.occ.length?r.occ.map(o=>`<div class="occ-box">${U("log-in")}<div><b>${R(o.nome)}${o.animais?` \xB7 ${Re(o.animais,"animal","animais")}`:""}</b><span>Dia ${Tt(o.since)+1} \xB7 entraram em ${le(o.since)}${o.animais?` \xB7 ${qi(kr(o.animais,t.id))}`:""}</span></div></div>`).join(""):`<div class="chips">${Df(r)}</div>`}
    ${r.occ.length&&(r.car||r.reent||r.aval)?`<div class="chips">${Df(r).replace(/^<span class="chip gado">.*?<\/span>/,"")}</div>`:""}
    ${t.tipo==="pastagem"?(r.occ.length?`<div class="row2"><button class="btn ghost" data-act="q-tirar" data-id="${t.id}" ${e}>Tirar do pasto</button><button class="btn pri" data-act="q-mudar" data-id="${t.id}" ${e}>${U("arrow-right-left")}Mudar</button></div>`:`<button class="btn pri" data-act="q-soltar" data-id="${t.id}" ${e}>${U("log-in")}Soltar novilhas aqui</button>`)+`<div class="row3"><button class="btn ghost" data-act="open-detail" data-id="${t.id}">Hist\xF3rico</button><button class="btn ghost" data-act="q-avaliar" data-id="${t.id}" ${e}>Avaliar pasto</button><button class="btn gold" data-act="q-trat" data-id="${t.id}" ${e}>Tratamento</button></div>`:`<div class="row2"><button class="btn ghost" data-act="open-detail" data-id="${t.id}">Hist\xF3rico</button><button class="btn gold" data-act="open-flow" data-id="${t.id}" ${e}>${U("plus")}Registrar aqui</button></div>`}</div>`}function $y(){let n=document.activeElement;return n&&X("#v-list").contains(n)&&/INPUT|TEXTAREA|SELECT/.test(n.tagName)}function Pe(){if(v.view==="mapa")return;if($y()){v.listDirty=!0;return}v.listDirty=!1;let n=X("#v-list"),e=n.scrollTop;n.innerHTML=`<div class="pagew">${v.view==="areas"?Fy():v.view==="caderno"?VT():$T()}</div>`,n.scrollTop=e}document.addEventListener("focusout",()=>setTimeout(()=>{v.listDirty&&!$y()&&Pe()},0));function NT(n,e="open-detail"){let t=Yt(n.id),r=[t.text];return t.car&&r.push(`car\xEAncia at\xE9 ${le(ft(t.car.until))}`),`<button class="urow" data-act="${e}" data-id="${n.id}"><span class="ucode ${t.key}">${R(n.code)}${t.car||t.reent?'<i class="flag" title="Em car\xEAncia"></i>':""}</span>
    <span class="uinfo"><b>${R(pt(n))}</b><span>${R(r.join(" \xB7 "))}</span></span><span class="uha">${At(n.m2)}</span>${U("chevron-right","sm")}</button>`}function Fy(){let n=v.q.trim().toLowerCase(),e=Kt.reduce((r,i)=>r+i.m2,0),t=il.map(r=>{let i=r.units.filter(o=>!n||pt(o).toLowerCase().includes(n)||o.code.toLowerCase().includes(n)||r.nome.toLowerCase().includes(n));if(!i.length)return"";let s=r.units.reduce((o,c)=>o+c.m2,0);return`<section class="card"><div class="card-h"><h3>${R(r.nome)}</h3><span class="meta">${Re(r.units.length,"piquete","piquetes")} \xB7 ${At(s)}</span></div>${i.map(o=>NT(o)).join("")}</section>`}).join("");return`<div class="pg-h"><div><span class="eyebrow">\xC1reas de produ\xE7\xE3o</span><h2>Pastagens e lavouras</h2><p>${Re(Kt.length,"piquete","piquetes")} \xB7 ${At(e)} de pastagem</p></div></div>
    <label class="search">${U("search")}<input id="q" type="search" placeholder="Buscar piquete ou \xE1rea" value="${R(v.q)}" autocomplete="off"></label>
    ${t||'<div class="empty"><b>Nada encontrado</b><span>Tente \u201CP7\u201D ou \u201C\xC1rea 3\u201D.</span></div>'}
    <div class="placeholder">${U("wheat","lg")}<div><b>Lavouras</b><p>Entram aqui assim que chegar o arquivo do Google Earth com os talh\xF5es. Cada lavoura vai ter o mesmo controle: plantio, aplica\xE7\xF5es, aduba\xE7\xE3o e colheita.</p></div></div>`}function qy(n){let e=[];if(n.produtos?.length)for(let t of n.produtos)e.push(`<div class="rl">${R(t.nome)} \xB7 <b>${de(t.dose)} ${R(t.unidade)}</b></div>`);if(n.tipo==="aplicacao"){let t=Math.max(0,...(n.produtos||[]).map(i=>+i.carencia||0));if(t){let i=lt(n.data);i.setDate(i.getDate()+t),e.push(`<div class="rl car">Car\xEAncia ${t} dias \xB7 libera em ${le(ft(i))}</div>`)}let r=[];n.calda&&r.push(`calda ${de(n.calda)} L/ha`),n.alvo&&r.push(`alvo: ${R(n.alvo)}`),r.length&&e.push(`<div class="rl">${r.join(" \xB7 ")}</div>`)}return n.tipo==="plantio"&&e.push(`<div class="rl"><b>${R(n.cultura||"")}</b>${n.variedade?" \xB7 "+R(n.variedade):""}${n.semente?` \xB7 ${de(n.semente)} kg/ha de semente`:""}</div>`),n.tipo==="colheita"&&(n.cultura||n.producao)&&e.push(`<div class="rl">${R(n.cultura||"")}${n.producao?` \xB7 ${de(n.producao)} ${R(n.prodUn||"")}`:""}</div>`),["gado_entrou","gado_saiu","mudanca","tratamento"].includes(n.tipo)&&e.push(`<div class="rl">${R(n.lote||"Lote")}${n.animais?` \xB7 <b>${Re(+n.animais,"animal","animais")}</b>`:""}</div>`),n.tipo==="avaliacao"&&mt[n.condicao]&&e.push(`<div class="rl"><b>${mt[n.condicao].label}</b>${n.altura?` \xB7 ${de(n.altura)} cm`:""}</div>`),n.tipo==="ocorrencia"&&n.ocorr&&e.push(`<div class="rl"><b>${R(n.ocorr)}</b></div>`),n.obs&&e.push(`<div class="rl">${R(n.obs)}</div>`),e.join("")}function OT(n,e=!0){let t=mo[n.tipo]||{short:n.tipo,icon:"info"},r=(n.areas||[]).map(o=>ie[o]?.code||o),i=v.open===n.id,s=[`${U("user","sm")}${R(n.quem||"\u2014")}`,`${U("clock","sm")}${R(n.hora||"")}`];return n.ha&&s.push(`${de(n.ha)} ha`),`<div class="rec" data-act="rec-toggle" data-id="${R(n.id)}" role="button" tabindex="0" aria-expanded="${i}">
    <span class="ricon ${n.tipo}">${U(t.icon)}</span>
    <div class="rbody"><div class="rt">${R(t.short)}${n.tipo==="mudanca"?` \xB7 ${R(ie[n.de]?.code||n.de||"?")} \u2192 ${R(r.join(", "))}`:e?` \xB7 ${R(r.join(", "))}`:""}</div>${qy(n)}
      <div class="rm">${s.map(o=>`<span style="display:inline-flex;gap:4px;align-items:center">${o}</span>`).join("")}${n._pending?`<span class="chip pend">${U("cloud-off","sm")}Aguardando envio</span>`:""}${n._demo?'<span class="chip demo">Exemplo</span>':""}${n._treino?'<span class="chip demo">Treino</span>':""}</div>
      ${i&&!Iy(n)&&!n._demo?`<div class="rx"><span class="note">Lan\xE7ado por ${R(n.autorNome||n.quem||"\u2014")}${Nf(n.criadoTs)?" em "+R(new Date(Nf(n.criadoTs)).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})):""}. S\xF3 o administrador pode excluir.</span></div>`:""}
      ${i&&Iy(n)?v.confirmDel===n.id?`<div class="rx"><span style="align-self:center;font-weight:600">Excluir este registro?</span><button class="btn sm danger" data-act="rec-del-yes" data-id="${R(n.id)}">Excluir</button><button class="btn sm ghost" data-act="rec-del-no">Cancelar</button></div>`:`<div class="rx"><span class="note">Lan\xE7ado ${n.criadoEm?"em "+R(new Date(n.criadoEm).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})):""}</span><button class="btn sm ghost" data-act="rec-del" data-id="${R(n.id)}">${U("trash-2","sm")}Excluir</button></div>`:""}
    </div></div>`}function Uy(n,e=!0){let t="",r=null,i=[],s=()=>{r&&(t+=`<div class="day">${R(IT(r))}</div><section class="card">${i.join("")}</section>`),i=[]};for(let o of n)o.data!==r&&(s(),r=o.data),i.push(OT(o,e));return s(),t}var xT=[["todos","Todos"],["gado","Gado"],["avaliacao","Avalia\xE7\xF5es"],["tratamento","Tratamentos"],["aplicacao","Aplica\xE7\xF5es"],["adubacao","Aduba\xE7\xF5es"],["plantio","Plantios"],["colheita","Colheitas"],["ocorrencia","Ocorr\xEAncias"]];function VT(){let n=gt().regs,e=n.filter(t=>v.filter==="todos"||t.tipo===v.filter||v.filter==="gado"&&(t.tipo.startsWith("gado")||t.tipo==="mudanca"));return`<div class="pg-h"><div><span class="eyebrow">Caderno de campo</span><h2>Registros</h2><p>${Re(n.length,"registro","registros")}${Ui()?` \xB7 ${Ui()} aguardando envio`:""}</p></div>
    ${n.length?`<button class="btn sm ghost" data-act="export">${U("download","sm")}Exportar planilha</button>`:""}</div>
    <div class="filters" role="toolbar" aria-label="Filtrar">${xT.map(([t,r])=>`<button class="fbtn" data-act="filter" data-v="${t}" aria-pressed="${v.filter===t}">${r}</button>`).join("")}</div>
    ${e.length?Uy(e):`<div class="empty">${U("notebook-pen","lg")}<b>${n.length?"Nenhum registro deste tipo":"Nenhum registro ainda"}</b><span>Toque em <b>Registrar</b> para lan\xE7ar a primeira aplica\xE7\xE3o, plantio ou movimenta\xE7\xE3o de gado.</span>
      ${!n.length&&!Vt()?'<button class="btn ghost" data-act="demo-show">Ver como fica com exemplos</button>':""}</div>`}`}function jy(n,e="pf"){return`<div class="newp">
    <div class="field"><label for="${e}-nome">Nome comercial</label><input class="inp" id="${e}-nome" data-pf="nome" value="${R(n.nome)}" placeholder="Como est\xE1 escrito na embalagem"></div>
    <div class="field"><label for="${e}-ativo">Princ\xEDpio ativo <span class="hint">(opcional)</span></label><input class="inp" id="${e}-ativo" data-pf="ativo" value="${R(n.ativo)}"></div>
    <div class="grid2"><div class="field"><label for="${e}-tipo">Tipo</label><select class="inp" id="${e}-tipo" data-pf="tipo">${ET.map(t=>`<option ${n.tipo===t?"selected":""}>${t}</option>`).join("")}</select></div>
    <div class="field"><label for="${e}-un">Dose em</label><select class="inp" id="${e}-un" data-pf="unidade">${TT.map(t=>`<option ${n.unidade===t?"selected":""}>${t}</option>`).join("")}</select></div></div>
    <div class="grid2"><div class="field"><label for="${e}-car">Car\xEAncia (dias)</label><input class="inp" id="${e}-car" data-pf="carencia" type="number" inputmode="numeric" min="0" value="${R(n.carencia)}"><span class="hint">At\xE9 pastejar ou colher</span></div>
    <div class="field"><label for="${e}-re">Reentrada (horas)</label><input class="inp" id="${e}-re" data-pf="reentrada" type="number" inputmode="numeric" min="0" value="${R(n.reentrada)}"><span class="hint">At\xE9 pessoas entrarem</span></div></div>
  </div>`}function LT(){return`<div class="newp"><div class="field"><label for="pw-a">Senha atual</label><input class="inp" id="pw-a" type="password" autocomplete="current-password"></div>
    <div class="field"><label for="pw-b">Nova senha</label><input class="inp" id="pw-b" type="password" autocomplete="new-password"><span class="hint">M\xEDnimo de 6 caracteres.</span></div>
    ${v.pwErr?`<div class="alert">${U("triangle-alert")}<span>${R(v.pwErr)}</span></div>`:""}
    <div class="row2"><button class="btn ghost" data-act="pw-cancel">Cancelar</button><button class="btn pri" data-act="pw-save">Salvar senha</button></div></div>`}function By(){return Fi?`<button class="btn gold" data-act="install">${U("download")}Instalar app no celular</button>`:Vy()?'<p class="note">No iPhone, abra este endere\xE7o no <b>Safari</b>, toque em <b>Compartilhar</b> (o quadrado com a seta para cima) e depois em <b>Adicionar \xE0 Tela de In\xEDcio</b>.</p>':'<p class="note">No Android, abra no <b>Chrome</b>, toque no menu <b>\u22EE</b> e depois em <b>Instalar app</b> (ou <b>Adicionar \xE0 tela inicial</b>).</p>'}function MT(){let n=Object.entries(v.remote.usuarios||{}).filter(([,t])=>t.papel!=="admin").sort((t,r)=>String(t[1].nome).localeCompare(String(r[1].nome))),e=v.userForm;return`<section class="card"><div class="card-h"><h3>L\xEDderes</h3><span class="meta">${Re(n.filter(([,t])=>t.ativo).length,"ativo","ativos")}</span></div>
    ${n.length?n.map(([t,r])=>`<div class="kvrow"><span class="uinfo"><b>${R(r.nome)}</b><span>${R(r.email)}${r.ativo?"":' \xB7 <b style="color:var(--danger)">bloqueado</b>'}</span></span>
      <span style="display:flex;gap:6px;flex:none"><button class="btn sm ghost" data-act="u-reset" data-id="${R(t)}">Senha</button><button class="btn sm ${r.ativo?"danger":"pri"}" data-act="u-toggle" data-id="${R(t)}">${r.ativo?"Bloquear":"Liberar"}</button></span></div>`).join(""):'<p class="note" style="padding:0 16px">Nenhum l\xEDder cadastrado ainda.</p>'}
    <div class="card-b" style="padding-top:12px">${e?`<div class="newp">
      <div class="field"><label for="uf-nome">Nome</label><input class="inp" id="uf-nome" data-uf="nome" value="${R(e.nome)}" autocomplete="off"></div>
      <div class="field"><label for="uf-email">E-mail para entrar</label><input class="inp" id="uf-email" data-uf="email" type="email" inputmode="email" autocapitalize="none" value="${R(e.email)}" autocomplete="off">
        <span class="hint">Quem n\xE3o tem e-mail pode usar <b>gtfmilk.campo+nome@gmail.com</b> (por exemplo gtfmilk.campo+joao@gmail.com). Os avisos dessa conta chegam no e-mail da fazenda.</span></div>
      <div class="field"><label for="uf-senha">Senha inicial</label><input class="inp" id="uf-senha" data-uf="senha" type="text" value="${R(e.senha)}" autocomplete="off" autocapitalize="none"><span class="hint">M\xEDnimo de 6 caracteres. O l\xEDder pode trocar depois em Conta.</span></div>
      ${e.err?`<div class="alert">${U("triangle-alert")}<span>${R(e.err)}</span></div>`:""}
      <div class="row2"><button class="btn ghost" data-act="u-cancel">Cancelar</button><button class="btn pri" data-act="u-save" ${v.busy?"disabled":""}>${v.busy?"Cadastrando\u2026":"Cadastrar l\xEDder"}</button></div></div>`:`<button class="btn ghost" data-act="u-new">${U("plus","sm")}Cadastrar l\xEDder</button>`}</div></section>`}function $T(){let n=gt(),e=Object.entries(n.prods).filter(([,d])=>!d._demo).sort((d,f)=>String(d[1].nome).localeCompare(String(f[1].nome))),t=e.filter(([,d])=>d.conferir).length,r=Ui(),i=Vt()?"Modo treino ligado: nada \xE9 salvo.":qn()?`Sem sinal agora. O que for registrado fica no celular e vai sozinho quando o sinal voltar.${Vy()?" No iPhone, abra o app quando chegar no Wi-Fi para enviar.":""}`:r?"Enviando os registros\u2026":"Tudo enviado para o caderno da fazenda.",s=v.prodForm,o=d=>qf.includes(d.tipo)&&d.tipo!=="Outro"?["tratamento","syringe"]:Ff.includes(d.tipo)&&d.tipo!=="Outro"?["adubacao","package"]:["aplicacao","droplets"],c=([d,f])=>{let[p,y]=o(f),E=`<span class="ricon ${p}">${U(y)}</span><span class="uinfo"><b>${R(f.nome)}</b><span>${R(f.tipo)} \xB7 ${R(f.unidade)}${+f.carencia?` \xB7 car\xEAncia ${f.carencia} d`:""}${+f.reentrada?` \xB7 reentrada ${f.reentrada} h`:""}</span></span>${f.conferir?'<span class="chip pend">A conferir</span>':""}`;return v.isAdmin?`<button class="urow" style="padding-inline:0" data-act="p-edit" data-id="${R(d)}">${E}${U("pencil","sm")}</button>`:`<div class="urow" style="padding-inline:0">${E}</div>`},l=`<div class="pg-h"><div><span class="eyebrow">${v.isAdmin?"Administrador":"L\xEDder"}</span><h2>${v.isAdmin?"Administra\xE7\xE3o":"Conta"}</h2></div></div>`;return l+=`<section class="card"><div class="card-h"><h3>Seus dados</h3></div><div class="card-b">
    ${v.isAdmin?`<div class="field"><label for="me-nome">Seu nome nos registros</label><div class="inrow"><input class="inp" id="me-nome" value="${R(v.perfil&&v.perfil.nome?v.perfil.nome:"")}" placeholder="Ex.: Ivonei"><button class="btn pri" data-act="me-save">Salvar</button></div></div>`:`<div class="kv"><span>Nome</span><span><b>${R(v.me)}</b></span></div>`}
    <div class="kv"><span>E-mail</span><span style="overflow-wrap:anywhere;text-align:right"><b>${R(v.user?v.user.email:"")}</b></span></div>
    <div class="kv"><span>Aguardando envio</span><span><b>${Re(r,"registro","registros")}</b></span></div>
    <p class="note">${R(i)}</p>
    ${v.pw?LT():`<div class="row2"><button class="btn ghost" data-act="pw-open">Trocar senha</button><button class="btn ghost" data-act="logout">${U("log-out","sm")}Sair</button></div>`}
  </div></section>`,v.isAdmin&&(l+=t1()),xy()||(l+=`<section class="card"><div class="card-h"><h3>Instalar no celular</h3></div><div class="card-b">${By()}</div></section>`),v.isAdmin&&(l+=MT()),l+=`<section class="card"><div class="card-h"><h3>Produtos</h3><span class="meta">${Re(e.length,"produto","produtos")}</span></div><div class="card-b">
    ${v.isAdmin&&t?`<div class="selsum">${U("info")}<span>${Re(t,"produto cadastrado","produtos cadastrados")} por l\xEDderes para conferir a car\xEAncia e a reentrada.</span></div>`:""}
    ${v.isAdmin&&s?`${jy(s)}<div class="row2">${s.id?`<button class="btn danger" data-act="p-del">${U("trash-2","sm")}Excluir</button>`:'<button class="btn ghost" data-act="p-cancel">Cancelar</button>'}<button class="btn pri" data-act="p-save">Salvar produto</button></div>${s.id?'<button class="link" data-act="p-cancel">Cancelar edi\xE7\xE3o</button>':""}`:`${e.length?e.map(c).join(""):`<p class="note">Nenhum produto cadastrado.${v.isAdmin?" Cadastre os defensivos, adubos e medicamentos usados na fazenda, com a car\xEAncia da bula.":""}</p>`}
        ${v.isAdmin?`<button class="btn ghost" data-act="p-new">${U("plus","sm")}Novo produto</button>`:'<p class="note">Se faltar um produto, d\xE1 para cadastrar na hora do registro. O administrador confere a car\xEAncia depois.</p>'}`}
  </div></section>`,v.isAdmin&&(l+=`<section class="card"><div class="card-h"><h3>C\xF3pia de seguran\xE7a</h3></div><div class="card-b">
    <p class="note">Baixe uma c\xF3pia uma vez por m\xEAs e guarde no computador ou no Google Drive da fazenda.</p>
    <div class="row2"><button class="btn ghost" data-act="backup-csv">${U("download","sm")}Planilha</button><button class="btn pri" data-act="backup-json">${U("download","sm")}C\xF3pia completa</button></div></div></section>`),l+=`<section class="card"><div class="card-h"><h3>Modo treino</h3></div><div class="card-b">
    <label class="toggle"><input type="checkbox" id="demo-t" ${Vt()?"checked":""}><span>Mostra dados de exemplo e nada do que for registrado \xE9 salvo. Use para ensinar algu\xE9m a usar o app.</span></label></div></section>`,l+=`<p class="note" style="text-align:center">Caderno de Campo GTF Milk \xB7 vers\xE3o ${Cy}</p>`,l}function FT(n){let e=(go().periods[n]||[]).slice().reverse();return`<section class="card"><div class="card-h"><h3>Ocupa\xE7\xF5es</h3><span class="meta">${Re(e.length,"entrada","entradas")}</span></div>
    ${e.length?e.map(t=>{let r=t.to?Math.max(1,Math.round((lt(t.to)-lt(t.from))/864e5)):Tt(t.from)+1;return`<div class="kvrow"><span><b>${le(t.from)} \u2192 ${t.to?le(t.to):"hoje"}</b><br><span class="note">${R(t.lote)}${t.animais?` \xB7 ${t.animais} animais \xB7 ${qi(kr(t.animais,n))}`:""}</span></span><span class="chip ${t.to?"":"gado"}">${t.to?Re(r,"dia","dias"):"dia "+r}</span></div>`}).join(""):'<p class="note" style="padding:0 16px 16px">Nenhuma entrada de gado registrada neste piquete.</p>'}</section>`}function qT(n){let e=ie[n],t=e.poly.map(y=>y[0]),r=e.poly.map(y=>y[1]),i=Math.min(...t),s=Math.max(...t),o=Math.min(...r),c=Math.max(...r),l=(s-i)*1.7+40,d=(c-o)*1.7+40;d/l>9/16?l=d*16/9:d=l*9/16;let f=(i+s)/2,p=(o+c)/2;return`<svg class="mini" viewBox="${f-l/2} ${p-d/2} ${l} ${d}" role="img" aria-label="Localiza\xE7\xE3o de ${R(pt(e))}">
    <image href="${Xe.img}" x="0" y="0" width="${Xe.size[0]}" height="${Xe.size[1]}" preserveAspectRatio="none"/>
    ${Kt.filter(y=>y.id!==n).map(y=>`<path d="${Rr(y.poly)}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join("")}
    <path d="${Rr(e.poly)}" fill="#FFD43B" fill-opacity=".38" stroke="#FFD43B" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>`}function uo(){let n=X("#detail");if(!v.detail){n.hidden=!0,n.innerHTML="";return}let e=ie[v.detail],t=Yt(e.id),r=ky(e),i=t.lastPl,s=t.lastAp,o=v.canWrite?"":"disabled",c=n.querySelector(".ov-b")?.scrollTop||0;n.hidden=!1,n.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="close-detail" aria-label="Voltar">${U("chevron-left")}</button><div><div class="ov-k">${R(r?r.nome:"")} \xB7 ${e.tipo==="pastagem"?"Pastagem":"Lavoura"}</div><h2>${R(pt(e))}</h2></div></div>
    <div></div>
    <div class="ov-b"><div class="pagew">
      ${qT(e.id)}
      <div class="chips">${Df(t)}</div>
      <div class="facts">
        <div class="fact"><div class="k">Tamanho</div><div class="v">${At(e.m2)}</div><div class="s">${de(e.m2,0)} m\xB2</div></div>
        <div class="fact"><div class="k">Situa\xE7\xE3o</div><div class="v">${R(t.key==="livre"&&t.rs.length?"Livre":PT[t.key])}</div><div class="s">${R(t.ev?"desde "+le(t.ev.data):"sem registro")}</div></div>
        <div class="fact"><div class="k">\xDAltimo plantio</div><div class="v">${i?R(i.cultura||"\u2014"):"\u2014"}</div><div class="s">${i?`${le(i.data)} \xB7 ${Re(Tt(i.data),"dia","dias")}`:"sem registro"}</div></div>
        ${e.tipo==="pastagem"?`<div class="fact"><div class="k">Pasto</div><div class="v">${t.aval?R(mt[t.aval.condicao]?.label||"\u2014"):"\u2014"}</div><div class="s">${t.aval?`avaliado ${le(t.aval.data)}${t.aval.altura?` \xB7 ${t.aval.altura} cm`:""}`:"sem avalia\xE7\xE3o"}</div></div>
        <div class="fact"><div class="k">Lota\xE7\xE3o</div><div class="v">${t.lot?qi(t.lot):"\u2014"}</div><div class="s">${t.occ.length&&t.occ[0].animais?`${Re(t.occ[0].animais,"animal","animais")} em ${At(e.m2)}`:"sem gado agora"}</div></div>`:""}
        <div class="fact ${t.car?"car":""}"><div class="k">${t.car?"Em car\xEAncia":"\xDAltima aplica\xE7\xE3o"}</div><div class="v">${t.car?"Libera "+le(ft(t.car.until)):s?le(s.data):"\u2014"}</div><div class="s">${t.car?R(t.car.nome):s?R((s.produtos||[]).map(l=>l.nome).join(", ")):"sem registro"}</div></div>
      </div>
      ${e.tipo==="pastagem"?FT(e.id):""}
      <div class="pg-h"><div><h2 style="font-size:22px">Hist\xF3rico</h2><p>${Re(t.rs.length,"registro","registros")} nesta \xE1rea</p></div></div>
      ${t.rs.length?Uy(t.rs,!1):`<div class="empty"><b>Nada registrado ainda</b><span>O que for lan\xE7ado para ${R(e.code)} aparece aqui, do mais novo para o mais antigo.</span></div>`}
    </div></div>
    <div class="ov-f ${e.tipo==="pastagem"?"three":""}">${e.tipo==="pastagem"?`${t.occ.length?`<button class="btn pri" data-act="q-mudar" data-id="${e.id}" ${o}>Mudar</button>`:`<button class="btn pri" data-act="q-soltar" data-id="${e.id}" ${o}>Soltar aqui</button>`}<button class="btn ghost" data-act="q-avaliar" data-id="${e.id}" ${o}>Avaliar</button><button class="btn gold" data-act="q-trat" data-id="${e.id}" ${o}>Tratamento</button>`:`<button class="btn gold" data-act="open-flow" data-id="${e.id}" ${o}>${U("plus")}Registrar nesta lavoura</button>`}</div>`,n.querySelector(".ov-b").scrollTop=c}var Mn=null;function so(n,e){v.quick=null,v.flow={step:0,tipo:null,areas:new Set(n?[n]:[]),mode:"lista",produtos:[{pid:"",dose:""}],calda:"",alvo:"",cultura:"",variedade:"",semente:"",cond:"",altura:"",producao:"",prodUn:"t",lote:"",animais:"",ocorr:"",obs:"",data:Ze(),hora:Mf(),quem:v.me||"",novo:null,done:null},e&&(Object.assign(v.flow,e),e.tipo&&e.step==null&&(v.flow.step=1)),ve()}var ho=()=>[...v.flow.areas].reduce((n,e)=>n+(ie[e]?.m2||0),0)/1e4,UT=()=>Object.entries(gt().prods).filter(([,n])=>!n._demo);function fo(){let n=v.flow;return n.step===0?!!n.tipo:n.step===1?n.areas.size>0:n.step===2?n.tipo==="aplicacao"||n.tipo==="adubacao"?n.produtos.length>0&&n.produtos.every(e=>e.pid&&e.pid!=="__novo"&&+e.dose>0):n.tipo==="plantio"?!!n.cultura.trim():n.tipo==="gado_entrou"?+n.animais>0&&!!n.lote.trim():n.tipo==="tratamento"?n.produtos.length>0&&n.produtos.every(e=>e.pid&&e.pid!=="__novo"&&+e.dose>0):n.tipo==="ocorrencia"?!!(n.ocorr||n.obs.trim()):n.tipo==="avaliacao"?!!n.cond:!!n.data:!!n.quem.trim()&&!!n.data}function ve(){if(v.quick)return Yc();let n=X("#flow"),e=v.flow;if(!e){n.hidden=!0,n.innerHTML="",Mn=null;return}if(n.hidden=!1,e.done){n.innerHTML=WT(),Mn=null;return}let t=[jT,BT,zT,GT][e.step](),r=e._ls===e.step&&n.querySelector(".ov-b")?.scrollTop||0;e._ls=e.step,n.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="flow-close" aria-label="Cancelar registro">${U("x")}</button><div><div class="ov-k">Novo registro \xB7 passo ${e.step+1} de 4</div><h2>${yy[e.step]}</h2></div></div>
    <div class="steps" aria-hidden="true">${yy.map((i,s)=>`<i class="${s<=e.step?"on":""}"></i>`).join("")}</div>
    <div class="ov-b"><div class="pagew">${t}</div></div>
    <div class="ov-f">${e.step>0?`<button class="btn ghost back" data-act="flow-back">${U("chevron-left")}Voltar</button>`:""}
      ${e.step<3?`<button class="btn pri" id="flow-next" data-act="flow-next" ${fo()?"":"disabled"}>Continuar${U("chevron-right")}</button>`:`<button class="btn gold" id="flow-next" data-act="flow-save" ${fo()?"":"disabled"}>${U("check")}Salvar registro</button>`}</div>`,n.querySelector(".ov-b").scrollTop=r,Mn=null,e.step===1&&e.mode==="mapa"&&(Mn=Ly(X("#flowmap"),{select:()=>v.flow.areas,onTap:i=>{if(!i)return;let s=v.flow.areas;lo.includes(v.flow.tipo)?(s.clear(),s.add(i)):s.has(i)?s.delete(i):s.add(i),Mn.refresh(),po()}}))}function po(){let n=X("#flow-next");n&&(n.disabled=!fo());let e=X("#selsum");e&&(e.innerHTML=zy());let t=v.flow;t&&t.produtos.forEach((r,i)=>{let s=X(`#tot-${i}`);s&&(s.textContent=Gy(r))})}function jT(){let n=v.flow;return(n.areas.size?`<div class="selsum">${U("layers")}<span>Para ${R([...n.areas].map(t=>pt(ie[t])).join(", "))}</span></div>`:"")+`<div class="tiles">${Object.entries(mo).filter(([,t])=>!t.hidden).map(([t,r])=>`<button class="tile" data-act="tipo" data-v="${t}" aria-pressed="${n.tipo===t}">${U(r.icon,"lg")}<span>${r.label}</span><small>${r.sub}</small></button>`).join("")}</div>`}function zy(){let e=v.flow.areas.size;return e?`${U("check")}<span>${Re(e,"\xE1rea escolhida","\xE1reas escolhidas")} \xB7 ${de(ho())} ha</span><button class="link" data-act="sel-clear">Limpar</button>`:`${U("info")}<span>Escolha uma ou mais \xE1reas</span>`}function BT(){let n=v.flow,e=`<div class="seg" role="group" aria-label="Escolher por"><button data-act="area-mode" data-v="lista" aria-pressed="${n.mode==="lista"}">${U("list","sm")}Lista</button><button data-act="area-mode" data-v="mapa" aria-pressed="${n.mode==="mapa"}">${U("map","sm")}Mapa</button></div>`,t=`<div class="selsum" id="selsum">${zy()}</div>`;if(n.mode==="mapa")return e+t+'<div class="flowmap" id="flowmap"></div><p class="note">Toque nos piquetes para marcar ou desmarcar.</p>';let r=lo.includes(n.tipo);return e+t+il.map(i=>`<section class="card"><div class="card-h"><h3>${R(i.nome)}</h3>${r?"":`<button class="link" data-act="grp-all" data-g="${i.id}">${i.units.every(s=>n.areas.has(s.id))?"Desmarcar":"Marcar"} todos</button>`}</div>
    ${i.units.map(s=>{let o=Yt(s.id);return`<label class="ck"><input type="${r?"radio":"checkbox"}" name="area1" data-area="${s.id}" ${n.areas.has(s.id)?"checked":""}><span class="ucode ${o.key}">${s.code}</span><span class="uinfo"><b>${R(pt(s))}</b><span>${R(o.text)}${o.car?" \xB7 em car\xEAncia":""}</span></span><span class="uha">${At(s.m2)}</span></label>`}).join("")}</section>`).join("")}function Gy(n){let e=gt().prods[n.pid];if(!e||!(+n.dose>0))return"";let t=e.unidade.split("/")[0];if(/\/animal$/.test(e.unidade)){let i=+v.flow.animais;if(!(i>0))return"Informe o n\xFAmero de animais para ver o total";let s=+n.dose*i;return`Total: ${de(s,1)} ${t} para ${Re(i,"animal","animais")}`}let r=+n.dose*ho();return`Total: ${de(r,r<10?2:1)} ${t} para ${de(ho())} ha`}function by(n,e,t){let r=v.flow,i=UT().filter(([,o])=>t.includes(o.tipo)).sort((o,c)=>o[1].nome.localeCompare(c[1].nome)),s=gt().prods[n.pid];return`<div class="prow"><div class="prow-h"><span class="lbl">Produto ${r.produtos.length>1?e+1:""}</span>${r.produtos.length>1?`<button class="link" style="color:var(--danger)" data-act="prow-del" data-i="${e}">Remover</button>`:""}</div>
    <select class="inp" id="psel-${e}" data-psel="${e}" aria-label="Produto"><option value="">Escolha o produto\u2026</option>${i.map(([o,c])=>`<option value="${R(o)}" ${n.pid===o?"selected":""}>${R(c.nome)} (${R(c.tipo)})</option>`).join("")}<option value="__novo" ${n.pid==="__novo"?"selected":""}>+ Cadastrar produto novo</option></select>
    ${n.pid==="__novo"?`${jy(r.novo,"nf")}<div class="row2"><button class="btn ghost" data-act="pnew-cancel" data-i="${e}">Cancelar</button><button class="btn pri" data-act="pnew-save" data-i="${e}">Salvar produto</button></div>`:""}
    ${s&&n.pid!=="__novo"?`<div class="field"><label for="dose-${e}">Dose</label><div class="inrow"><input class="inp" id="dose-${e}" data-dose="${e}" type="number" inputmode="decimal" step="any" min="0" value="${R(n.dose)}" placeholder="0"><span class="unit">${R(s.unidade)}</span></div>
      <span class="total" id="tot-${e}">${Gy(n)}</span>${+s.carencia?`<span class="hint" style="color:var(--danger)">Car\xEAncia de ${s.carencia} dias</span>`:""}</div>`:""}</div>`}function zT(){let n=v.flow,e=n.tipo,t="",r=`<div class="grid2"><div class="field"><label for="f-data">Data</label><input class="inp" type="date" id="f-data" data-f="data" value="${R(n.data)}" max="${Ze()}"></div><div class="field"><label for="f-hora">Hora</label><input class="inp" type="time" id="f-hora" data-f="hora" value="${R(n.hora)}"></div></div>`,i=s=>`<div class="field"><span class="lbl">Lote</span><div class="pick">${Zc().map(o=>`<button class="pk" data-act="lote" data-v="${R(o)}" aria-pressed="${n.lote===o}">${R(o)}</button>`).join("")}</div>
      <input class="inp" id="f-lote" data-f="lote" value="${R(Zc().includes(n.lote)?"":n.lote)}" placeholder="Outro lote"></div>
    <div class="field"><label for="f-anim">N\xFAmero de animais${s?"":' <span class="hint">(opcional)</span>'}</label><input class="inp" id="f-anim" data-f="animais" type="number" inputmode="numeric" min="0" value="${R(n.animais)}"></div>`;if(e==="tratamento"&&(t+=i(!1),t+=n.produtos.map((s,o)=>by(s,o,qf)).join(""),t+=`<button class="btn ghost" data-act="prow-add">${U("plus","sm")}Outro produto</button>`),e==="aplicacao"||e==="adubacao"){let s=e==="aplicacao"?Dy:Ff;t+=n.produtos.map((o,c)=>by(o,c,s)).join(""),t+=`<button class="btn ghost" data-act="prow-add">${U("plus","sm")}${e==="aplicacao"?"Outro produto na mesma calda":"Outro produto"}</button>`,e==="aplicacao"&&(t+=`<div class="grid2"><div class="field"><label for="f-calda">Calda (L/ha)</label><input class="inp" id="f-calda" data-f="calda" type="number" inputmode="decimal" min="0" value="${R(n.calda)}" placeholder="Ex.: 150"></div>
      <div class="field"><label for="f-alvo">Alvo</label><input class="inp" id="f-alvo" data-f="alvo" value="${R(n.alvo)}" placeholder="Praga, doen\xE7a ou planta"></div></div>`)}if(e==="plantio"&&(t+=`<div class="field"><span class="lbl">Cultura</span><div class="pick">${_y.map(s=>`<button class="pk" data-act="cultura" data-v="${R(s)}" aria-pressed="${n.cultura===s}">${R(s)}</button>`).join("")}</div>
      <input class="inp" id="f-cultura" data-f="cultura" value="${R(_y.includes(n.cultura)?"":n.cultura)}" placeholder="Outra cultura"></div>
    <div class="grid2"><div class="field"><label for="f-var">Cultivar <span class="hint">(opcional)</span></label><input class="inp" id="f-var" data-f="variedade" value="${R(n.variedade)}"></div>
    <div class="field"><label for="f-sem">Semente (kg/ha)</label><input class="inp" id="f-sem" data-f="semente" type="number" inputmode="decimal" min="0" value="${R(n.semente)}"></div></div>`),e==="colheita"&&(t+=`<div class="field"><label for="f-cultura">Cultura</label><input class="inp" id="f-cultura" data-f="cultura" value="${R(n.cultura)}" placeholder="Ex.: Milho silagem"></div>
    <div class="field"><label for="f-prod">Produ\xE7\xE3o <span class="hint">(opcional)</span></label><div class="inrow"><input class="inp" id="f-prod" data-f="producao" type="number" inputmode="decimal" min="0" value="${R(n.producao)}"><select class="inp" style="flex:0 0 112px" id="f-pun" data-f="prodUn">${["t","sacas","fardos"].map(s=>`<option ${n.prodUn===s?"selected":""}>${s}</option>`).join("")}</select></div></div>`),e==="gado_entrou"||e==="gado_saiu"){t+=i(e==="gado_entrou");let s=St(n.lote),o=[...n.areas][0];e==="gado_entrou"&&s&&o&&s.piq!==o&&(t+=`<div class="selsum" id="mv-info">${U("arrow-right-left")}<span>V\xE3o sair do ${R(ie[s.piq].code)}, onde est\xE3o no dia ${Tt(s.since)+1}. Fica registrado como mudan\xE7a de piquete.</span></div>`)}return e==="avaliacao"&&(t+=`<section class="card">${Object.entries(mt).map(([s,o])=>`<button class="dest" data-act="cond" data-v="${s}" aria-pressed="${n.cond===s}"><span class="ucode ${o.chip}">${U(o.icon)}</span><span class="uinfo"><b>${o.label}</b><span>${o.sub}</span></span></button>`).join("")}</section>
    <div class="field"><label for="f-alt">Altura do pasto (cm) <span class="hint">(opcional)</span></label><input class="inp" id="f-alt" data-f="altura" type="number" inputmode="numeric" min="0" value="${R(n.altura)}"></div>`),e==="ocorrencia"&&(t+=`<div class="field"><span class="lbl">O que aconteceu?</span><div class="pick">${ST.map(s=>`<button class="pk" data-act="ocorr" data-v="${R(s)}" aria-pressed="${n.ocorr===s}">${R(s)}</button>`).join("")}</div></div>`),t+=r,t+=`<div class="field"><label for="f-obs">Observa\xE7\xE3o${e==="ocorrencia"?"":' <span class="hint">(opcional)</span>'}</label><textarea class="inp" id="f-obs" data-f="obs" placeholder="${e==="ocorrencia"?"Descreva o que viu e onde":"Clima, problema na m\xE1quina, etc."}">${R(n.obs)}</textarea></div>`,t}function Hy(){let n=v.flow,e={id:"_prev",tipo:n.tipo,areas:[...n.areas],data:n.data,hora:n.hora,quem:n.quem,obs:n.obs.trim()};return(n.tipo==="aplicacao"||n.tipo==="adubacao")&&(e.produtos=n.produtos.map(t=>{let r=gt().prods[t.pid]||{};return{id:t.pid,nome:r.nome||"",tipo:r.tipo||"",dose:+t.dose,unidade:r.unidade||"",carencia:+r.carencia||0,reentrada:+r.reentrada||0}})),n.tipo==="aplicacao"&&(+n.calda&&(e.calda=+n.calda),n.alvo.trim()&&(e.alvo=n.alvo.trim())),n.tipo==="plantio"&&(e.cultura=n.cultura.trim(),n.variedade.trim()&&(e.variedade=n.variedade.trim()),+n.semente&&(e.semente=+n.semente)),n.tipo==="colheita"&&(n.cultura.trim()&&(e.cultura=n.cultura.trim()),+n.producao&&(e.producao=+n.producao,e.prodUn=n.prodUn)),(n.tipo.startsWith("gado")||n.tipo==="tratamento")&&(n.lote.trim()&&(e.lote=n.lote.trim()),+n.animais&&(e.animais=+n.animais)),n.tipo==="tratamento"&&(e.produtos=n.produtos.map(t=>{let r=gt().prods[t.pid]||{};return{id:t.pid,nome:r.nome||"",tipo:r.tipo||"",dose:+t.dose,unidade:r.unidade||"",carencia:+r.carencia||0,reentrada:0}})),n.tipo==="ocorrencia"&&n.ocorr&&(e.ocorr=n.ocorr),n.tipo==="avaliacao"&&(e.condicao=n.cond,+n.altura&&(e.altura=+n.altura)),e.obs||delete e.obs,e.ha=Math.round(ho()*100)/100,e}function GT(){let n=v.flow,e=Hy(),t=mo[n.tipo];return`<div class="sum"><div style="display:flex;gap:12px;align-items:center"><span class="ricon ${n.tipo}">${U(t.icon)}</span><div class="rt">${R(t.label)}</div></div>
      <div class="chips">${[...n.areas].map(r=>`<span class="chip">${R(pt(ie[r]))}</span>`).join("")}</div>
      ${qy(e)}<div class="rm">${U("calendar","sm")}${le(n.data)} \xE0s ${R(n.hora)} \xB7 ${de(ho())} ha</div></div>
    <p class="note">Registrado por <b>${R(v.me)}</b>.</p>`}function HT(){let n=v.flow;if(!fo())return;let e=Hy();if(delete e.id,e.quem=v.me,e.criadoEm=new Date().toISOString(),e.tipo==="gado_entrou"){let i=St(e.lote);i&&i.piq!==e.areas[0]&&(e.tipo="mudanca",e.de=i.piq)}let t=Xc();tl("registros",t,e);let r="";if(e.tipo==="aplicacao"){let i=Math.max(0,...e.produtos.map(l=>l.carencia)),s=Math.max(0,...e.produtos.map(l=>l.reentrada)),o=e.areas.map(l=>ie[l].code).join(", "),c=[];if(s&&c.push(`Ningu\xE9m entra em ${o} at\xE9 ${$f(new Date(lt(e.data,e.hora).getTime()+s*36e5))}.`),i){let l=lt(e.data);l.setDate(l.getDate()+i),c.push(`Sem gado e sem colheita at\xE9 ${le(ft(l))} (car\xEAncia de ${i} dias).`)}r=c.join(" ")}n.done={id:t,warn:r},Ge(),ve()}function WT(){let n=v.flow,e=n.done.id,t=!!v.sandbox.registros[e],r=v.pend.has("registros/"+e),i=t?"Modo treino: este registro n\xE3o foi salvo.":r?qn()?"Sem sinal agora. O registro est\xE1 guardado no celular e vai sozinho quando o sinal voltar.":"Guardado no celular. Enviando\u2026":"Enviado para o caderno da fazenda.";return`<div class="ov-h"><div><div class="ov-k">Novo registro</div><h2>Pronto</h2></div><button class="xbtn" data-act="flow-close" aria-label="Fechar">${U("x")}</button></div><div></div>
    <div class="ov-b"><div class="pagew"><div class="done"><div class="big">${U("check")}</div><h2>Registro salvo</h2>
      <p style="display:flex;gap:8px;align-items:center;justify-content:center">${U(r?qn()?"cloud-off":"cloud-upload":"circle-check","sm")}${R(i)}</p>
      ${n.done.warn?`<div class="alert">${U("triangle-alert")}<span>${R(n.done.warn)}</span></div>`:""}</div></div></div>
    <div class="ov-f"><button class="btn ghost" data-act="flow-again">Registrar outro</button><button class="btn pri" data-act="flow-close">Ver no mapa</button></div>`}function oo(n,e,t){let r=$n(),i=r.filter(o=>o.piq===e),s=t?St(t):null;s||(s=n==="soltar"?r.length===1?r[0]:St("Novilhas"):i[0]||null),v.quick={kind:n,uid:e,cond:"",altura:"",obs:"",lote:s?s.nome:"Novilhas",animais:s&&s.animais?String(s.animais):"",dest:null,sug:null,data:Ze(),hora:Mf(),quem:v.me||""},n==="mudar"&&(v.quick.dest=v.quick.sug=Oy(e)),ve()}function jf(){let n=v.quick;if(!n||!(v.me||n.quem.trim())||!n.data)return!1;let e=St(n.lote);return n.kind==="soltar"?!!n.lote.trim()&&+n.animais>0&&!(e&&e.piq===n.uid):n.kind==="mudar"?!!n.dest&&!!e:n.kind==="tirar"?!!e:n.kind==="avaliar"?!!n.cond:!1}function Wy(){let n=v.quick,e=St(n.lote);return n.kind!=="soltar"||!e?"":e.piq===n.uid?`<div class="selsum">${U("info")}<span>${R(e.nome)} j\xE1 est\xE3o no ${R(ie[n.uid].code)} (dia ${Tt(e.since)+1}).</span></div>`:`<div class="selsum">${U("arrow-right-left")}<span>V\xE3o sair do ${R(ie[e.piq].code)}, onde est\xE3o no dia ${Tt(e.since)+1}.</span></div>`}function Ky(n){let e=kr(n.animais,n.uid);return e?`${Re(+n.animais,"animal","animais")} em ${At(ie[n.uid].m2)} = ${qi(e)}`:`${R(ie[n.uid].code)} tem ${At(ie[n.uid].m2)}`}function KT(){let n=X("#q-save");n&&(n.disabled=!jf());let e=X("#q-info");e&&(e.innerHTML=Wy());let t=X("#q-lot");t&&(t.textContent=Ky(v.quick))}function Yc(){let n=v.quick,e=X("#flow"),t=ie[n.uid],r=Yt(n.uid),i=n._k===n.kind&&e.querySelector(".ov-b")?.scrollTop||0;n._k=n.kind,e.hidden=!1,Mn=null;let s=`<div class="grid2"><div class="field"><label for="q-data">Data</label><input class="inp" type="date" id="q-data" data-q="data" value="${R(n.data)}" max="${Ze()}"></div><div class="field"><label for="q-hora">Hora</label><input class="inp" type="time" id="q-hora" data-q="hora" value="${R(n.hora)}"></div></div>`,o=v.me?`<p class="note">Registrado por <b>${R(v.me)}</b>.</p>`:"",c=v.me?"":`<div class="field"><label for="q-quem">Seu nome</label><input class="inp" id="q-quem" data-q="quem" value="${R(n.quem)}" autocomplete="off" placeholder="Quem est\xE1 registrando"><span class="hint">Este celular lembra o nome.</span></div>`,l=$n().filter(y=>y.piq===n.uid),d="",f="",p="";if(n.kind==="soltar")d=`Soltar no ${t.code}`,f=`<div class="field"><span class="lbl">Qual lote?</span><div class="pick">${Zc().map(y=>`<button class="pk" data-act="q-lote" data-v="${R(y)}" aria-pressed="${n.lote===y}">${R(y)}</button>`).join("")}</div>
      <input class="inp" id="q-lote" data-q="lote" value="${R(Zc().includes(n.lote)?"":n.lote)}" placeholder="Outro lote"></div>
      <div id="q-info">${Wy()}</div>
      ${r.car||r.reent?`<div class="alert">${U("triangle-alert")}<span>${R(t.code)} est\xE1 ${r.reent?`com reentrada proibida at\xE9 ${$f(r.reent.until)}`:`em car\xEAncia at\xE9 ${le(ft(r.car.until))}`} (${R((r.reent||r.car).nome)}). Confira antes de soltar.</span></div>`:""}
      <div class="field"><label for="q-anim">N\xFAmero de animais</label><input class="inp" id="q-anim" data-q="animais" type="number" inputmode="numeric" min="1" value="${R(n.animais)}"><span class="hint" id="q-lot" style="font-size:15px;font-weight:600;color:var(--gado)">${Ky(n)}</span></div>${s}${o}`,p=`${U("log-in")}Soltar no ${R(t.code)}`;else if(n.kind==="mudar"){d=`Mudar ${n.lote} do ${t.code}`;let y=Ny(n.uid);f=`${l.length>1?`<div class="pick">${l.map(E=>`<button class="pk" data-act="q-lote" data-v="${R(E.nome)}" aria-pressed="${n.lote===E.nome}">${R(E.nome)}</button>`).join("")}</div>`:""}
      <div class="selsum">${U("log-out")}<span>Saem do ${R(t.code)} no dia ${r.dia||1}. Para onde v\xE3o?</span></div>
      <section class="card">${y.map(E=>`<button class="dest" data-act="q-dest" data-id="${E.u.id}" aria-pressed="${n.dest===E.u.id}" ${E.block?"data-block":""}><span class="ucode ${E.st.key}">${R(E.u.code)}</span><span class="uinfo"><b>${R(pt(E.u))} \xB7 ${At(E.u.m2)}</b><span>${R(E.st.text)}${E.st.aval?" \xB7 "+mt[E.st.aval.condicao]?.short:""}${St(n.lote)?.animais?" \xB7 "+qi(kr(St(n.lote).animais,E.u.id)):""}</span></span>${E.u.id===n.sug?'<span class="chip descanso">Sugerido</span>':E.block?`<span class="chip ${E.block==="Ocupado"?"gado":"car"}">${E.block}</span>`:""}</button>`).join("")}</section>
      <p class="note">Sugerido: o piquete marcado como pronto para entrar. Se nenhum estiver marcado, o que descansa h\xE1 mais tempo. Piquetes em car\xEAncia ficam de fora.</p>${s}${o}`,p=n.dest?`${U("arrow-right-left")}Mudar para ${R(ie[n.dest].code)}`:"Escolha o piquete"}else if(n.kind==="avaliar")d=`Avaliar pasto \xB7 ${t.code}`,f=`<section class="card">${Object.entries(mt).map(([y,E])=>`<button class="dest" data-act="q-cond" data-v="${y}" aria-pressed="${n.cond===y}"><span class="ucode ${E.chip}">${U(E.icon)}</span><span class="uinfo"><b>${E.label}</b><span>${E.sub}</span></span></button>`).join("")}</section>
      <div class="field"><label for="q-alt">Altura do pasto (cm) <span class="hint">(opcional)</span></label><input class="inp" id="q-alt" data-q="altura" type="number" inputmode="numeric" min="0" value="${R(n.altura)}"></div>
      <div class="field"><label for="q-obs">Observa\xE7\xE3o <span class="hint">(opcional)</span></label><textarea class="inp" id="q-obs" data-q="obs">${R(n.obs)}</textarea></div>${s}${o}`,p=`${U("check")}Salvar avalia\xE7\xE3o`;else if(n.kind==="tirar")d="Tirar do pasto",f=`${l.length>1?`<div class="pick">${l.map(y=>`<button class="pk" data-act="q-lote" data-v="${R(y.nome)}" aria-pressed="${n.lote===y.nome}">${R(y.nome)}</button>`).join("")}</div>`:""}
      <div class="selsum">${U("log-out")}<span>${R(n.lote)} saem do ${R(t.code)} no dia ${r.dia||1} e o piquete come\xE7a a contar o descanso.</span></div>${s}${o}`,p=`${U("log-out")}Tirar do pasto`;else{d=`Tratamento no ${t.code}`;let y=l[0];f=`<div class="tiles">
      <button class="tile" data-act="q-trat-go" data-v="tratamento">${U("syringe","lg")}<span>Nas novilhas</span><small>${y?`${R(y.nome)} do ${R(t.code)} \xB7 `:""}verm\xEDfugo, vacina, carrapaticida</small></button>
      <button class="tile" data-act="q-trat-go" data-v="aplicacao">${U("spray-can","lg")}<span>No pasto</span><small>Herbicida, inseticida, fungicida</small></button>
      <button class="tile" data-act="q-trat-go" data-v="adubacao">${U("package","lg")}<span>Aduba\xE7\xE3o</span><small>Ureia, adubo, calc\xE1rio</small></button>
      <button class="tile" data-act="q-trat-go" data-v="outro">${U("notebook-pen","lg")}<span>Outro registro</span><small>Plantio, colheita, ocorr\xEAncia</small></button></div>`}e.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="q-close" aria-label="Cancelar">${U("x")}</button><div><div class="ov-k">${R(pt(t))} \xB7 ${R(r.text)}</div><h2>${R(d)}</h2></div></div><div></div>
    <div class="ov-b"><div class="pagew">${p?c:""}${f}</div></div>
    ${p?`<div class="ov-f"><button class="btn pri" id="q-save" data-act="q-save" ${jf()?"":"disabled"}>${p}</button></div>`:"<div></div>"}`,e.querySelector(".ov-b").scrollTop=i}function QT(){let n=v.quick;if(!jf())return;let e=(v.me||n.quem).trim(),t=St(n.lote),r=t?t.nome:n.lote.trim(),i={data:n.data,hora:n.hora,quem:e,lote:r,criadoEm:new Date().toISOString()},s="",o=n.uid;n.kind==="avaliar"?(delete i.lote,Object.assign(i,{tipo:"avaliacao",areas:[n.uid],condicao:n.cond}),+n.altura&&(i.altura=+n.altura),n.obs.trim()&&(i.obs=n.obs.trim()),s=`${ie[n.uid].code}: ${mt[n.cond].label}`):n.kind==="soltar"?(Object.assign(i,t?{tipo:"mudanca",de:t.piq,areas:[n.uid]}:{tipo:"gado_entrou",areas:[n.uid]},{animais:+n.animais}),s=`${r} no ${ie[n.uid].code} \xB7 dia 1`):n.kind==="mudar"?(Object.assign(i,{tipo:"mudanca",de:n.uid,areas:[n.dest]}),t&&t.animais&&(i.animais=t.animais),s=`${r}: ${ie[n.uid].code} \u2192 ${ie[n.dest].code}`,o=n.dest):(Object.assign(i,{tipo:"gado_saiu",areas:[n.uid]}),t&&t.animais&&(i.animais=t.animais),s=`${r} fora do pasto \xB7 ${ie[n.uid].code} em descanso`),i.ha=Math.round(ie[i.areas[0]].m2/100)/100,tl("registros",Xc(),i),v.quick=null,v.sel=o,ve(),Ge(),ct(s+(Vt()?" \xB7 treino, n\xE3o salvo":qn()?" \xB7 envia quando tiver sinal":""))}var Ey=null;function ct(n){let e=X("#toast");e.textContent=n,e.hidden=!1,clearTimeout(Ey),Ey=setTimeout(()=>{e.hidden=!0},3200)}function Qy(n){let e=gt().regs.filter(s=>!s._demo&&!s._treino&&(!n||n(s))),t=["Data","Hora","Atividade","\xC1reas","Hectares","Produto","Tipo","Dose","Unidade","Car\xEAncia (dias)","Calda (L/ha)","Alvo","Cultura","Lote","Animais","Animais por ha","Condi\xE7\xE3o do pasto","Altura (cm)","Ocorr\xEAncia","Observa\xE7\xE3o","Quem fez"],r=s=>{let o=String(s??"");return/[";\n]/.test(o)?`"${o.replace(/"/g,'""')}"`:o},i=[t];for(let s of[...e].reverse()){let o=(s.areas||[]).map(f=>ie[f]?.code||f).join(" "),c=[le(s.data),s.hora,mo[s.tipo]?.label||s.tipo,s.tipo==="mudanca"?`${ie[s.de]?.code||s.de} -> ${o}`:o,s.ha!=null?de(s.ha):""],l=s.animais&&s.areas?.length===1&&ie[s.areas[0]]&&["gado_entrou","mudanca"].includes(s.tipo)?de(kr(s.animais,s.areas[0]),1):"",d=[s.calda?de(s.calda):"",s.alvo,s.cultura,s.lote,s.animais,l,mt[s.condicao]?.label,s.altura,s.ocorr,s.obs,s.quem];if(s.produtos?.length)for(let f of s.produtos)i.push([...c,f.nome,f.tipo,de(f.dose),f.unidade,f.carencia||"",...d]);else i.push([...c,"","","","","",...d])}return"\uFEFF"+i.map(s=>s.map(r).join(";")).join(`\r
`)}function Yy(){Uf(`caderno-de-campo-gtf-milk-${Ze()}.csv`,Qy(),"text/csv;charset=utf-8")}function co(n){return n&&typeof n.toDate=="function"?n.toDate().toISOString():Array.isArray(n)?n.map(co):n&&typeof n=="object"?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,co(t)])):n}function YT(){let n={app:"Caderno de Campo GTF Milk",versao:Cy,geradoEm:new Date().toISOString(),registros:co(v.remote.registros),produtos:co(v.remote.produtos),usuarios:co(v.remote.usuarios)};Uf(`copia-de-seguranca-gtf-milk-${Ze()}.json`,JSON.stringify(n,null,1),"application/json")}function Ge(){DT(),X("#v-mapa").hidden=v.view!=="mapa",X("#v-list").hidden=v.view==="mapa",v.view==="mapa"?My():(Cr&&Cr.refresh(),Pe()),v.detail&&uo()}var sl={nav:n=>{v.view=n.dataset.v,v.open=null,v.confirmDel=null,Ge(),X("#v-list").scrollTop=0},"open-flow":n=>{so(n.dataset.id||null)},"flow-close":()=>{v.flow=null,ve(),v.view==="mapa"&&My()},"flow-again":()=>{let n=v.flow.areas;so(null),v.flow.areas=new Set(n),ve()},"flow-back":()=>{v.flow.step--,ve()},"flow-next":()=>{let n=v.flow;if(fo()){if(n.step===1&&lo.includes(n.tipo)&&n.tipo!=="avaliacao"&&!n.lote){let e=$n().find(i=>i.piq===[...n.areas][0]),t=$n().length===1?$n()[0]:null,r=n.tipo==="gado_entrou"?t||e:e||t;n.lote=r?r.nome:"Novilhas",r&&r.animais&&!n.animais&&(n.animais=String(r.animais))}n.step++,ve(),X("#flow .ov-b").scrollTop=0}},"flow-save":()=>HT(),tipo:n=>{let e=v.flow;e.tipo=n.dataset.v,e.step=1,lo.includes(e.tipo)&&e.areas.size>1&&(e.areas=new Set([[...e.areas][0]])),e.tipo==="tratamento"&&!e.produtos.some(t=>t.pid)&&(e.produtos=[{pid:"",dose:""}]),ve()},"area-mode":n=>{v.flow.mode=n.dataset.v,ve()},"sel-clear":()=>{v.flow.areas.clear(),Mn&&Mn.refresh(),document.querySelectorAll("[data-area]").forEach(n=>n.checked=!1),po()},"grp-all":n=>{let e=il.find(r=>r.id===n.dataset.g),t=e.units.every(r=>v.flow.areas.has(r.id));e.units.forEach(r=>t?v.flow.areas.delete(r.id):v.flow.areas.add(r.id)),ve()},"prow-add":()=>{v.flow.produtos.push({pid:"",dose:""}),ve()},"prow-del":n=>{v.flow.produtos.splice(+n.dataset.i,1),ve()},"pnew-cancel":n=>{v.flow.produtos[+n.dataset.i].pid="",v.flow.novo=null,ve()},"pnew-save":n=>{let e=v.flow.novo;if(!e||!e.nome.trim()){X("#nf-nome")?.focus();return}let t=Xc();tl("produtos",t,{...Ty(e),conferir:!v.isAdmin}),v.flow.produtos[+n.dataset.i].pid=t,v.flow.novo=null,ve()},cultura:n=>{v.flow.cultura=n.dataset.v,ve()},cond:n=>{v.flow.cond=n.dataset.v,ve()},"q-avaliar":n=>oo("avaliar",n.dataset.id),"q-cond":n=>{v.quick.cond=n.dataset.v,Yc()},lote:n=>{let e=v.flow;e.lote=e.lote===n.dataset.v?"":n.dataset.v;let t=St(e.lote);t&&t.animais&&(e.animais=String(t.animais)),ve()},"q-soltar":n=>oo("soltar",n.dataset.id),"q-mudar":n=>oo("mudar",n.dataset.id,n.dataset.lote),"q-tirar":n=>oo("tirar",n.dataset.id),"q-trat":n=>oo("trat",n.dataset.id),"q-close":()=>{v.quick=null,ve()},"q-lote":n=>{let e=v.quick;e.lote=n.dataset.v;let t=St(e.lote);t&&t.animais&&(e.animais=String(t.animais)),Yc()},"q-dest":n=>{v.quick.dest=n.dataset.id,Yc()},"q-save":()=>QT(),"q-trat-go":n=>{let e=v.quick,t=e.uid,r=n.dataset.v,i=$n().find(s=>s.piq===t);r==="tratamento"?so(t,{tipo:"tratamento",step:2,lote:i?i.nome:"Novilhas",animais:i&&i.animais?String(i.animais):""}):r==="outro"?so(t):so(t,{tipo:r,step:2})},ocorr:n=>{v.flow.ocorr=v.flow.ocorr===n.dataset.v?"":n.dataset.v,ve()},quem:n=>{v.flow.quem=n.dataset.v,ve()},"open-detail":n=>{v.detail=n.dataset.id,v.open=null,uo()},"close-detail":()=>{v.detail=null,uo()},"card-close":()=>{v.sel=null,Cr.refresh(),Of()},"rec-toggle":(n,e)=>{e.target.closest("button")||(v.open=v.open===n.dataset.id?null:n.dataset.id,v.confirmDel=null,Rf())},"rec-del":n=>{v.confirmDel=n.dataset.id,Rf()},"rec-del-no":()=>{v.confirmDel=null,Rf()},"rec-del-yes":n=>{wy("registros",n.dataset.id),v.open=null,v.confirmDel=null,Ge()},filter:n=>{v.filter=n.dataset.v,Pe()},export:()=>Yy(),"demo-hide":()=>{v.demoPref=!1,Jc.set("gtf.treino",!1),v.sandbox={registros:{},produtos:{},equipe:{}},v.sel=null,Qt(),Ge(),ct("Saiu do modo treino. Agora tudo que for registrado fica salvo.")},"demo-show":()=>{v.demoPref=!0,Jc.set("gtf.treino",!0),v.sel=null,Qt(),Ge()},"p-new":()=>{v.prodForm={nome:"",ativo:"",tipo:"Herbicida",unidade:"L/ha",carencia:"",reentrada:""},Pe(),X("#pf-nome")?.focus()},"p-edit":n=>{let e=gt().prods[n.dataset.id];v.prodForm={id:n.dataset.id,nome:e.nome,ativo:e.ativo||"",tipo:e.tipo,unidade:e.unidade,carencia:e.carencia??"",reentrada:e.reentrada??""},Pe()},"p-cancel":()=>{v.prodForm=null,Pe()},"p-save":()=>{let n=v.prodForm;if(!n.nome.trim()){X("#pf-nome")?.focus();return}tl("produtos",n.id||Xc(),{...Ty(n),conferir:!1}),v.prodForm=null,Ge()},"p-del":()=>{wy("produtos",v.prodForm.id),v.prodForm=null,Ge()}};function Ty(n){return{nome:n.nome.trim(),ativo:(n.ativo||"").trim(),tipo:n.tipo,unidade:n.unidade,carencia:Math.max(0,+n.carencia||0),reentrada:Math.max(0,+n.reentrada||0)}}function Rf(){v.detail?uo():Pe()}document.addEventListener("click",n=>{let e=n.target.closest("[data-act]");if(!e||e.disabled)return;let t=sl[e.dataset.act];t&&t(e,n)});document.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&n.target.matches(".rec[data-act]")&&(n.preventDefault(),sl["rec-toggle"](n.target,n))});document.addEventListener("input",n=>{let e=n.target;if(e.id==="q"){v.q=e.value;let t=e.selectionStart;v.listDirty=!1;let r=X("#v-list");r.querySelector(".pagew").innerHTML=Fy();let i=X("#q");i.focus();try{i.setSelectionRange(t,t)}catch{}return}if(e.dataset.pf!=null){let t=v.flow&&v.flow.novo&&X("#flow").contains(e)?v.flow.novo:v.prodForm;t&&(t[e.dataset.pf]=e.value);return}if(e.dataset.q&&v.quick){v.quick[e.dataset.q]=e.value,e.dataset.q==="lote"&&document.querySelectorAll('[data-act="q-lote"]').forEach(t=>t.setAttribute("aria-pressed","false")),KT();return}v.flow&&(e.dataset.f&&(v.flow[e.dataset.f]=e.value,e.dataset.f==="cultura"&&document.querySelectorAll('[data-act="cultura"]').forEach(t=>t.setAttribute("aria-pressed","false")),e.dataset.f==="quem"&&document.querySelectorAll('[data-act="quem"]').forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.v===e.value))),po()),e.dataset.dose&&(v.flow.produtos[+e.dataset.dose].dose=e.value,po()),e.dataset.f==="lote"&&document.querySelectorAll('[data-act="lote"]').forEach(t=>t.setAttribute("aria-pressed","false")))});document.addEventListener("change",n=>{let e=n.target;if(e.id==="demo-t"){v.demoPref=e.checked,Jc.set("gtf.treino",e.checked),v.sel=null,e.checked||(v.sandbox={registros:{},produtos:{},equipe:{}}),Qt(),Ge();return}if(e.dataset.pf!=null){let t=v.flow&&v.flow.novo&&X("#flow").contains(e)?v.flow.novo:v.prodForm;t&&(t[e.dataset.pf]=e.value);return}if(v.flow){if(e.dataset.area&&(lo.includes(v.flow.tipo)?v.flow.areas=new Set([e.dataset.area]):e.checked?v.flow.areas.add(e.dataset.area):v.flow.areas.delete(e.dataset.area),po()),e.dataset.psel!=null){let t=+e.dataset.psel;v.flow.produtos[t].pid=e.value,e.value==="__novo"&&(v.flow.novo={nome:"",ativo:"",tipo:{adubacao:"Adubo",tratamento:"Verm\xEDfugo"}[v.flow.tipo]||"Herbicida",unidade:{adubacao:"kg/ha",tratamento:"mL/animal"}[v.flow.tipo]||"L/ha",carencia:"",reentrada:""}),ve(),e.value==="__novo"?X("#nf-nome")?.focus():X(`#dose-${t}`)?.focus()}e.dataset.f==="prodUn"&&(v.flow.prodUn=e.value)}});var JT=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],XT=()=>Ze().slice(0,7);function ol(){let n=new Date;return n.getDate()<=5&&n.setMonth(n.getMonth()-1),ft(n).slice(0,7)}function Jy(n){let[e,t]=n.split("-").map(Number),r=new Date(e,t,0).getDate();return{ym:n,y:e,m:t,last:r,start:`${e}-${$e(t)}-01`,end:`${e}-${$e(t)}-${$e(r)}`,nome:`${JT[t-1]} de ${e}`}}var Xy=(n,e)=>{let t=lt(n);return t.setDate(t.getDate()+e),ft(t)},Ay=n=>{let e=lt(n);return`${$e(e.getDate())}/${$e(e.getMonth()+1)}/${e.getFullYear()}`},Sy=n=>n.charAt(0).toUpperCase()+n.slice(1),Ln=n=>ie[n]&&ie[n].code||n||"\u2014";function xf(n,e){let t=String(e.unidade||"").split("/")[0];return/\/animal$/.test(e.unidade||"")?+n.animais>0?{q:+e.dose*+n.animais,base:t}:null:n.ha?{q:+e.dose*+n.ha,base:t}:null}function ZT(n){let e=Jy(n),t=Ze(),r=gt().regs.filter(p=>p.data>=e.start&&p.data<=e.end).slice().reverse(),i=go(),s=Kt.filter(p=>p.tipo==="pastagem"),o={};for(let p of s){let y=Array.from({length:e.last},()=>[]);for(let E of i.periods[p.id]||[]){let N=E.to||Xy(t,1);for(let V=0;V<e.last;V++){let L=`${e.y}-${$e(e.m)}-${$e(V+1)}`;L>=E.from&&L<N&&L<=t&&y[V].push(E)}}o[p.id]=y}let c=s.map(p=>{let y=o[p.id],E=y.filter(F=>F.length).length,N=y.reduce((F,O)=>F+O.reduce((Y,k)=>Y+(+k.animais||0),0),0),V=[...new Set(y.flat().map(F=>F.lote))],L=(i.periods[p.id]||[]).filter(F=>F.from>=e.start&&F.from<=e.end).length,z=r.filter(F=>F.tipo==="avaliacao"&&(F.areas||[]).includes(p.id));return{u:p,dOcc:E,lots:V,entradas:L,lot:E&&N?N/E/(p.m2/1e4):null,lastAv:z[z.length-1]||null}}),l=p=>r.filter(y=>Array.isArray(p)?p.includes(y.tipo):y.tipo===p),d={};for(let p of r)for(let y of p.produtos||[]){let E=y.nome+"|"+(y.unidade||""),N=xf(p,y),V=d[E]=d[E]||{nome:y.nome,tipo:y.tipo||"",base:N?N.base:String(y.unidade||"").split("/")[0],total:0,usos:0,semTotal:0};V.usos++,N?V.total+=N.q:V.semTotal++}let f=[...new Set(Object.values(o).flatMap(p=>p.flat().map(y=>y.lote)))];return{M:e,regs:r,rows:c,occ:o,lotsAll:f,mov:l(["gado_entrou","mudanca","gado_saiu"]),trat:l("tratamento"),apl:l(["aplicacao","adubacao"]),aval:l("avaliacao"),ocor:l("ocorrencia"),plan:l(["plantio","colheita"]),consumo:Object.values(d).sort((p,y)=>p.nome.localeCompare(y.nome))}}async function e1(n){let[{jsPDF:e},t]=await Promise.all([import("./chunks/jspdf.es.min-FUARO66E.js"),import("./chunks/jspdf.plugin.autotable-3BCRFA2N.js")]),r=typeof t.default=="function"?t.default:t.autoTable||t.default&&t.default.default,i=ZT(n),s=i.M,o=new e({unit:"mm",format:"a4"}),c=210,l=14,d=c-2*l,f=[30,58,43],p=[201,162,39],y=[20,37,27],E=[92,108,98],N=[214,222,210],V=[243,246,240],L=[[47,111,219],[63,163,77],[214,160,20],[155,89,182],[230,110,50],[90,140,150]],z=D=>L[Math.max(0,i.lotsAll.indexOf(D))%L.length],F=Vt();if(o.setFillColor(...f),o.rect(0,0,c,36,"F"),o.setFillColor(...p),o.rect(0,36,c,1.2,"F"),o.setFont("helvetica","bold"),o.setFontSize(8.5),o.setTextColor(226,188,69),o.text("GTF MILK  \xB7  LEBON R\xC9GIS/SC  \xB7  CADERNO DE CAMPO",l,11),o.setTextColor(244,239,223),o.setFontSize(21),o.text("Relat\xF3rio mensal de campo"+(F?" (TREINO)":""),l,22),o.setFont("helvetica","normal"),o.setFontSize(12),o.text(Sy(s.nome),l,30),s.end>Ze()){let D=o.getTextWidth(Sy(s.nome));o.setFontSize(8.5),o.setTextColor(200,214,204),o.text(`  \xB7  m\xEAs em andamento, dados at\xE9 ${Ay(Ze())}`,l+D,30)}o.setFontSize(8.5),o.setTextColor(200,214,204),o.text(`Gerado em ${Ay(Ze())} \xE0s ${Mf()} por ${v.me||"\u2014"}`,c-l,30,{align:"right"});let O=44,Y=i.trat.reduce((D,te)=>D+(+te.animais||0),0),k=i.apl.reduce((D,te)=>D+(+te.ha||0),0),M=i.rows.reduce((D,te)=>D+te.dOcc,0),w=i.rows.filter(D=>D.lot),g=w.length?w.reduce((D,te)=>D+te.lot*te.dOcc,0)/w.reduce((D,te)=>D+te.dOcc,0):null,_=[["Registros no m\xEAs",String(i.regs.length)],["Movimenta\xE7\xF5es de gado",String(i.mov.length)],["Dias de piquete ocupado",String(M)],["Lota\xE7\xE3o m\xE9dia",g?`${de(g,1)} cab/ha`:"\u2014"],["Tratamentos",`${i.trat.length}${Y?` \xB7 ${Y} animais`:""}`],["Aplica\xE7\xF5es e aduba\xE7\xF5es",`${i.apl.length}${k?` \xB7 ${de(k,1)} ha`:""}`],["Avalia\xE7\xF5es do pasto",String(i.aval.length)],["Ocorr\xEAncias",String(i.ocor.length)]],b=(d-3*4)/4,T=17;_.forEach(([D,te],_e)=>{let _t=l+_e%4*(b+4),ut=O+Math.floor(_e/4)*(T+4);o.setFillColor(...V),o.setDrawColor(...N),o.roundedRect(_t,ut,b,T,2,2,"FD"),o.setFont("helvetica","normal"),o.setFontSize(7.5),o.setTextColor(...E),o.text(D,_t+3,ut+5.5),o.setFont("helvetica","bold"),o.setFontSize(12.5),o.setTextColor(...y),o.text(te,_t+3,ut+13)}),O+=2*T+4+10;let A=(D,te)=>{O>262&&(o.addPage(),O=18),o.setFont("helvetica","bold"),o.setFontSize(12),o.setTextColor(...y),o.text(D,l,O),o.setFillColor(...p),o.rect(l,O+1.6,14,.9,"F"),te&&(o.setFont("helvetica","normal"),o.setFontSize(8),o.setTextColor(...E),o.text(te,l,O+6.5),O+=4),O+=5};A("Ocupa\xE7\xE3o dos piquetes no m\xEAs","Cada quadradinho \xE9 um dia. A cor mostra o lote que estava no piquete.");let I=12,Ce=l+I,Jt=d-I,Un=Jt/s.last,vt=5.2,jn=i.rows.length,Bn=jn*vt;O+Bn+18>285&&(o.addPage(),O=18),o.setFont("helvetica","normal"),o.setFontSize(6.5),o.setTextColor(...E);for(let D=0;D<s.last;D++)(D===0||(D+1)%5===0)&&o.text(String(D+1),Ce+D*Un+Un/2,O+2,{align:"center"});let Dr=O+3.5,al=Ze();i.rows.forEach((D,te)=>{let _e=Dr+te*vt;o.setFont("helvetica","bold"),o.setFontSize(7.5),o.setTextColor(...y),o.text(D.u.code,l,_e+vt*.68);let _t=i.occ[D.u.id];for(let ut=0;ut<s.last;ut++){let Nr=`${s.y}-${$e(s.m)}-${$e(ut+1)}`,zn=Ce+ut*Un;_t[ut].length?(o.setFillColor(...z(_t[ut][0].lote)),o.rect(zn+.25,_e+.5,Un-.5,vt-1,"F")):(o.setFillColor(...Nr>al?[250,250,248]:V),o.rect(zn+.25,_e+.5,Un-.5,vt-1,"F"))}}),o.setDrawColor(...N),o.setLineWidth(.2),o.rect(Ce,Dr,Jt,Bn),O=Dr+Bn+5;let He=Ce;o.setFontSize(7.5),(i.lotsAll.length?i.lotsAll:["Nenhum lote no pasto neste m\xEAs"]).forEach(D=>{i.lotsAll.length&&(o.setFillColor(...z(D)),o.rect(He,O-2.6,3.2,3.2,"F"),He+=4.5),o.setTextColor(...y),o.setFont("helvetica","normal"),o.text(D,He,O),He+=o.getTextWidth(D)+7}),o.setFillColor(...V),o.rect(He,O-2.6,3.2,3.2,"F"),o.setTextColor(...E),o.text("vazio",He+4.5,O),O+=9;let he=(D,te,_e={})=>{if(!te.length){o.setFont("helvetica","italic"),o.setFontSize(8.5),o.setTextColor(...E),o.text("Nenhum registro neste m\xEAs.",l,O+1),O+=9;return}r(o,{startY:O,head:[D],body:te,margin:{left:l,right:l},theme:"grid",styles:{font:"helvetica",fontSize:7.8,cellPadding:1.6,textColor:y,lineColor:N,lineWidth:.15,overflow:"linebreak"},headStyles:{fillColor:f,textColor:[244,239,223],fontStyle:"bold",fontSize:7.8},alternateRowStyles:{fillColor:V},..._e}),O=o.lastAutoTable.finalY+10};A("Resumo por piquete"),he(["Piquete","\xC1rea","Dias com gado","Entradas","Lotes","Lota\xE7\xE3o m\xE9dia","\xDAltima avalia\xE7\xE3o"],i.rows.map(D=>[pt(D.u),At(D.u.m2),String(D.dOcc),String(D.entradas),D.lots.join(", ")||"\u2014",D.lot?`${de(D.lot,1)} cab/ha`:"\u2014",D.lastAv?`${mt[D.lastAv.condicao]?.label||""}${D.lastAv.altura?` \xB7 ${D.lastAv.altura} cm`:""} (${le(D.lastAv.data)})`:"\u2014"]),{columnStyles:{2:{halign:"center"},3:{halign:"center"}}}),A("Movimenta\xE7\xF5es do gado"),he(["Data","Lote","Saiu de","Entrou em","Animais","Respons\xE1vel"],i.mov.map(D=>[le(D.data)+" "+(D.hora||""),D.lote||"\u2014",D.tipo==="mudanca"?Ln(D.de):D.tipo==="gado_saiu"?(D.areas||[]).map(Ln).join(", "):"\u2014",D.tipo==="gado_saiu"?"Saiu do pasto":(D.areas||[]).map(Ln).join(", "),D.animais?String(D.animais):"\u2014",D.quem||"\u2014"])),A("Tratamentos das novilhas"),he(["Data","Lote","Piquete","Produto","Dose","Animais","Total","Respons\xE1vel"],i.trat.flatMap(D=>(D.produtos&&D.produtos.length?D.produtos:[{}]).map(te=>{let _e=te.nome?xf(D,te):null;return[le(D.data),D.lote||"\u2014",(D.areas||[]).map(Ln).join(", "),te.nome||"\u2014",te.nome?`${de(te.dose)} ${te.unidade}`:"\u2014",D.animais?String(D.animais):"\u2014",_e?`${de(_e.q,1)} ${_e.base}`:"\u2014",D.quem||"\u2014"]}))),A("Aplica\xE7\xF5es e aduba\xE7\xF5es"),he(["Data","Tipo","\xC1reas","Produto","Dose","Total","Car\xEAncia at\xE9","Respons\xE1vel"],i.apl.flatMap(D=>(D.produtos||[{}]).map(te=>{let _e=te.nome?xf(D,te):null,_t=+te.carencia||0;return[le(D.data),D.tipo==="adubacao"?"Aduba\xE7\xE3o":"Aplica\xE7\xE3o",(D.areas||[]).map(Ln).join(", "),te.nome||"\u2014",te.nome?`${de(te.dose)} ${te.unidade}`:"\u2014",_e?`${de(_e.q,1)} ${_e.base}`:"\u2014",_t?le(Xy(D.data,_t)):"\u2014",D.quem||"\u2014"]}))),A("Avalia\xE7\xF5es do pasto"),he(["Data","Piquete","Condi\xE7\xE3o","Altura","Observa\xE7\xE3o","Respons\xE1vel"],i.aval.map(D=>[le(D.data),(D.areas||[]).map(Ln).join(", "),mt[D.condicao]?.label||"\u2014",D.altura?`${D.altura} cm`:"\u2014",D.obs||"",D.quem||"\u2014"])),A("Ocorr\xEAncias"),he(["Data","\xC1rea","Tipo","Descri\xE7\xE3o","Respons\xE1vel"],i.ocor.map(D=>[le(D.data),(D.areas||[]).map(Ln).join(", "),D.ocorr||"\u2014",D.obs||"",D.quem||"\u2014"]),{columnStyles:{3:{cellWidth:80}}}),i.plan.length&&(A("Plantios e colheitas"),he(["Data","Tipo","\xC1reas","Cultura","Detalhe","Respons\xE1vel"],i.plan.map(D=>[le(D.data),D.tipo==="plantio"?"Plantio":"Colheita",(D.areas||[]).map(Ln).join(", "),D.cultura||"\u2014",D.tipo==="plantio"?D.variedade||"":D.producao?`${de(D.producao)} ${D.prodUn||""}`:"",D.quem||"\u2014"]))),A("Produtos usados no m\xEAs"),he(["Produto","Tipo","Quantidade total","Usos"],i.consumo.map(D=>[D.nome,D.tipo,D.total?`${de(D.total,1)} ${D.base}${D.semTotal?" (+ usos sem quantidade)":""}`:"\u2014",String(D.usos)]),{columnStyles:{3:{halign:"center"}}});let _o=o.getNumberOfPages();for(let D=1;D<=_o;D++)o.setPage(D),o.setDrawColor(...N),o.setLineWidth(.2),o.line(l,287,c-l,287),o.setFont("helvetica","normal"),o.setFontSize(7.5),o.setTextColor(...E),o.text(`Caderno de Campo GTF Milk \xB7 Relat\xF3rio de ${s.nome}`,l,291.5),o.text(`P\xE1gina ${D} de ${_o}`,c-l,291.5,{align:"right"});return{blob:o.output("blob"),name:`relatorio-gtf-milk-${n}.pdf`,M:s}}async function Py(n){let e=v.relMes||ol();v.relBusy=!0,Pe();try{let{blob:t,name:r,M:i}=await e1(e),s=new File([t],r,{type:"application/pdf"});if(n&&navigator.canShare&&navigator.canShare({files:[s]}))try{await navigator.share({files:[s],title:`Relat\xF3rio ${i.nome}`})}catch{}else{let o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=r,document.body.appendChild(o),o.click(),setTimeout(()=>{URL.revokeObjectURL(o.href),o.remove()},4e3),ct(`Relat\xF3rio de ${i.nome} baixado.`)}}catch(t){console.error(t),ct(qn()?"Na primeira vez, gerar o relat\xF3rio precisa de internet.":"N\xE3o foi poss\xEDvel gerar o relat\xF3rio.")}finally{v.relBusy=!1,Pe()}}function t1(){let n=!!(navigator.canShare&&window.File&&(()=>{try{return navigator.canShare({files:[new File(["x"],"x.pdf",{type:"application/pdf"})]})}catch{return!1}})());return`<section class="card"><div class="card-h"><h3>Relat\xF3rio do m\xEAs</h3></div><div class="card-b">
    <p class="note">PDF com a ocupa\xE7\xE3o dos piquetes dia a dia, movimenta\xE7\xF5es do gado, tratamentos, aplica\xE7\xF5es, avalia\xE7\xF5es, ocorr\xEAncias e produtos usados no m\xEAs.</p>
    <div class="field"><label for="rel-mes">M\xEAs</label><input class="inp" type="month" id="rel-mes" value="${R(v.relMes||ol())}" max="${XT()}"></div>
    <div class="row2"><button class="btn ghost" data-act="rel-csv">${U("download","sm")}Planilha</button><button class="btn pri" data-act="rel-pdf" ${v.relBusy?"disabled":""}>${U("notebook-pen","sm")}${v.relBusy?"Gerando\u2026":"Baixar PDF"}</button></div>
    ${n?`<button class="btn gold" data-act="rel-share" ${v.relBusy?"disabled":""}>${U("cloud-upload","sm")}Enviar PDF (WhatsApp, e-mail\u2026)</button>`:""}
  </div></section>`}Object.assign(sl,{"rel-pdf":()=>Py(!1),"rel-share":()=>Py(!0),"rel-csv":()=>{let n=Jy(v.relMes||ol());Uf(`caderno-de-campo-gtf-milk-${n.ym}.csv`,Qy(e=>e.data>=n.start&&e.data<=n.end),"text/csv;charset=utf-8")}});document.addEventListener("change",n=>{n.target.id==="rel-mes"&&(v.relMes=n.target.value||ol())});var nl=n=>`<div class="alert">${U("triangle-alert")}<span>${R(n)}</span></div>`;function vo(n){let e=n&&n.code||"";return e.includes("api-key")?"Erro na configura\xE7\xE3o do app (chave). Avise o administrador.":{"auth/invalid-credential":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/invalid-email":"Esse e-mail n\xE3o \xE9 v\xE1lido.","auth/missing-email":"Digite o e-mail.","auth/user-disabled":"Esse acesso foi desativado.","auth/too-many-requests":"Muitas tentativas. Espere alguns minutos e tente de novo.","auth/network-request-failed":"Sem internet. Essa a\xE7\xE3o precisa de sinal ou Wi-Fi.","auth/email-already-in-use":"Esse e-mail j\xE1 tem cadastro no app. Use outro e-mail.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/requires-recent-login":"Por seguran\xE7a, saia e entre de novo antes de trocar a senha.","auth/missing-password":"Digite a senha.","permission-denied":"Sem permiss\xE3o para essa a\xE7\xE3o."}[e]||`N\xE3o foi poss\xEDvel concluir (${e||"erro"}).`}var n1='<p class="eyb">GTF Milk \xB7 Lebon R\xE9gis/SC</p><h1>Caderno de campo</h1>',Vf=(n=n1)=>`<div class="photo-top"><div class="ph-img"><img src="bezerra.jpg" alt="" width="1280" height="853" decoding="async" fetchpriority="high"></div><div class="ph-ttl">${n}</div></div>`;function r1(){return`<form class="gate-in" id="login-form" novalidate>
    ${Vf()}
    <div class="field"><label for="lg-email">E-mail</label><input class="inp" id="lg-email" type="email" inputmode="email" autocomplete="username" autocapitalize="none" spellcheck="false"></div>
    <div class="field"><label for="lg-senha">Senha</label><input class="inp" id="lg-senha" type="password" autocomplete="current-password"></div>
    <div id="lg-msg" role="alert"></div>
    <button class="btn pri" type="submit" id="lg-btn">Entrar</button>
    <button class="link" type="button" data-act="forgot">Esqueci minha senha</button>
    <p class="note">O primeiro acesso precisa de internet. Depois o app funciona sem sinal no campo.</p>
    ${xy()?"":`<div class="gate-note">${By()}</div>`}
  </form>`}function i1(){let n=t=>`<div class="gate-in">${Vf()}<p class="sub">${t}</p></div>`;if(!v.authReady)return n("Carregando\u2026");if(!v.user)return r1();if(!v.perfilLoaded)return n("Conferindo seu acesso\u2026");let e=v.perfil&&v.perfil.ativo===!1;return`<div class="gate-in">${Vf(`<h1>${e?"Acesso bloqueado":"Acesso n\xE3o liberado"}</h1>`)}
    <p class="sub">${R(v.user.email)}</p>
    <p>${e?"O administrador bloqueou este acesso.":"Este e-mail ainda n\xE3o foi cadastrado como l\xEDder."} Fale com o administrador da fazenda.</p>
    <button class="btn pri" data-act="logout">Sair</button></div>`}var Lf=[],rl=!1,Qc=null;function Zy(){Lf.forEach(n=>{try{n()}catch{}}),Lf=[],rl=!1}function Cf(n){Lf.push(Tf(iy(Wt,n),{includeMetadataChanges:!0},e=>{for(let r of[...v.pend])r.startsWith(n+"/")&&v.pend.delete(r);let t={};e.docs.forEach(r=>{t[r.id]=r.data({serverTimestamps:"estimate"}),r.metadata.hasPendingWrites&&v.pend.add(n+"/"+r.id)}),v.remote[n]=t,v.loaded[n]=!0,v.fromCache[n]=e.metadata.fromCache,Qt(),Ge(),v.flow&&v.flow.done&&ve()},e=>{v.loaded[n]=!0,console.warn(n,e&&e.code),Qt(),Ge()}))}function s1(){rl||(rl=!0,Cf("registros"),Cf("produtos"),v.isAdmin&&Cf("usuarios"))}function ao(){let n=X("#gate"),e=X("#app");if(!!v.user&&(v.isAdmin||v.perfil&&v.perfil.ativo===!0)){v.canWrite=!0,v.me=v.perfil&&v.perfil.nome||(v.isAdmin?"Administrador":""),n.hidden=!0,e.hidden=!1,s1(),Ge();return}v.canWrite=!1,rl&&Zy(),e.hidden=!0,n.hidden=!1,n.innerHTML=i1()}Du(Fn,n=>{if(Zy(),Qc&&(Qc(),Qc=null),Object.assign(v,{user:n,perfil:null,perfilLoaded:!1,perfilErr:null,remote:{registros:{},produtos:{},usuarios:{}},loaded:{},sel:null,flow:null,quick:null,detail:null,prodForm:null,userForm:null,pw:!1,view:"mapa"}),v.pend.clear(),Qt(),ve(),uo(),v.authReady=!0,!n){v.isAdmin=!1,ao();return}v.isAdmin=String(n.email||"").toLowerCase()===yT,Qc=Tf(Pr(Wt,"usuarios",n.uid),e=>{v.perfil=e.exists()?e.data():null,v.perfilLoaded=!0,v.perfilErr=null,ao()},e=>{v.perfil=null,v.perfilLoaded=!0,v.perfilErr=e&&e.code,ao()}),ao()});async function o1(){let n=X("#lg-email").value.trim(),e=X("#lg-senha").value,t=X("#lg-msg"),r=X("#lg-btn");if(!n||!e){t.innerHTML=nl("Preencha o e-mail e a senha.");return}r.disabled=!0,r.textContent="Entrando\u2026",t.innerHTML="";try{await Cu(Fn,n,e)}catch(i){t.innerHTML=nl(vo(i)),r.disabled=!1,r.textContent="Entrar"}}async function a1(){let n=(X("#lg-email")||{}).value?.trim(),e=X("#lg-msg");if(!n){e.innerHTML=nl('Digite o seu e-mail acima e toque de novo em "Esqueci minha senha".');return}try{await fa(Fn,n),e.innerHTML=`<div class="selsum">${U("check")}<span>Se esse e-mail tiver cadastro, chega nele um link para criar uma senha nova. Veja tamb\xE9m a caixa de spam.</span></div>`}catch(t){e.innerHTML=nl(vo(t))}}async function c1(){let n=v.userForm,e=n.nome.trim(),t=n.email.trim().toLowerCase(),r=n.senha;if(n.err=!e||!t?"Preencha o nome e o e-mail.":r.length<6?"A senha inicial precisa ter pelo menos 6 caracteres.":qn()?"Precisa de internet para cadastrar um l\xEDder.":"",n.err){Pe();return}v.busy=!0,Pe();let i=tu(Ry,"cadastro-"+Date.now());try{let s=ha(i,{persistence:us}),o=await Ru(s,t,r);await Hc(Pr(Wt,"usuarios",o.user.uid),{nome:e,email:t,papel:"lider",ativo:!0,criadoEm:Sf()}),await pa(s),v.userForm=null,ct(`${e} cadastrado. Passe o e-mail e a senha inicial para ele.`)}catch(s){n.err=vo(s)}finally{v.busy=!1;try{await mm(i)}catch{}Pe()}}async function l1(){let n=X("#pw-a").value,e=X("#pw-b").value;if(e.length<6){v.pwErr="A nova senha precisa ter pelo menos 6 caracteres.",Pe();return}try{await Pu(Fn.currentUser,Ut.credential(Fn.currentUser.email,n)),await ku(Fn.currentUser,e),v.pw=!1,v.pwErr="",ct("Senha trocada.")}catch(t){v.pwErr=vo(t)}Pe()}var u1={forgot:()=>a1(),logout:()=>{if(Ui()){ct(`Ainda h\xE1 ${Re(Ui(),"registro","registros")} para enviar. Conecte na internet antes de sair.`);return}pa(Fn)},install:async()=>{if(Fi){Fi.prompt();try{await Fi.userChoice}catch{}Fi=null,Pe()}},"me-save":()=>{let n=X("#me-nome").value.trim();if(!n){X("#me-nome").focus();return}Hc(Pr(Wt,"usuarios",v.user.uid),{nome:n,email:v.user.email,papel:"admin",ativo:!0},{merge:!0}).catch(el),ct("Nome salvo.")},"pw-open":()=>{v.pw=!0,v.pwErr="",Pe(),setTimeout(()=>X("#pw-a")?.focus(),0)},"pw-cancel":()=>{v.pw=!1,v.pwErr="",Pe()},"pw-save":()=>l1(),"u-new":()=>{v.userForm={nome:"",email:"",senha:"",err:""},Pe(),setTimeout(()=>X("#uf-nome")?.focus(),0)},"u-cancel":()=>{v.userForm=null,Pe()},"u-save":()=>c1(),"u-toggle":n=>{let e=v.remote.usuarios[n.dataset.id];e&&(hy(Pr(Wt,"usuarios",n.dataset.id),{ativo:!e.ativo}).catch(el),ct(e.ativo?`${e.nome} bloqueado.`:`${e.nome} liberado.`))},"u-reset":n=>{let e=v.remote.usuarios[n.dataset.id];e&&fa(Fn,e.email).then(()=>ct(`Link para nova senha enviado para ${e.email}.`)).catch(t=>ct(vo(t)))},"backup-csv":()=>Yy(),"backup-json":()=>YT()};Object.assign(sl,u1);document.addEventListener("submit",n=>{n.target.id==="login-form"&&(n.preventDefault(),o1())});document.addEventListener("input",n=>{let e=n.target;e.dataset.uf!=null&&v.userForm&&(v.userForm[e.dataset.uf]=e.value)});if("serviceWorker"in navigator){let n=!!navigator.serviceWorker.controller,e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!n||e||(e=!0,!v.flow&&!v.quick?location.reload():ct("Vers\xE3o nova pronta. Feche e abra o app para usar."))}),window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}Ge();ao();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
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
   *)
  (**
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
*/
