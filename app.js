var Np=()=>{};var Op=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vw=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,v=(c&15)<<2|d>>6,A=d&63;l||(A=64,o||(v=64)),r.push(t[f],t[m],t[v],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Op(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||m==null)throw new Tl;let v=s<<2|c>>4;if(r.push(v),d!==64){let A=c<<4&240|d>>2;if(r.push(A),m!==64){let N=d<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Tl=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},ww=function(n){let e=Op(n);return Lp.encodeByteArray(e,!0)},Sl=function(n){return ww(n).replace(/\./g,"")},So=function(n){try{return Lp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Pl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Iw=()=>Pl().__FIREBASE_DEFAULTS__,Ew=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&So(n[1]);return e&&JSON.parse(e)},Rl=()=>{try{return Np()||Iw()||Ew()||bw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}};var Vp=()=>{var n;return(n=Rl())===null||n===void 0?void 0:n.config},Mp=n=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${n}`]};var Ao=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cl(n){return(await fetch(n,{credentials:"include"})).ok}function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Fp(){var n;let e=(n=Rl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Up(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qp(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){let n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kl(){return!Fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dl(){return!Fp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Po(){try{return typeof indexedDB=="object"}catch{return!1}}function zp(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Tw="FirebaseError",Qe=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Tw,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}},Rt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Aw(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Qe(i,c,r)}};function Aw(n,e){return n.replace(Sw,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Sw=/\{\$([^}]+)}/g;function Gt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(xp(s)&&xp(o)){if(!Gt(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function xp(n){return n!==null&&typeof n=="object"}function Ro(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tr(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ar(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gp(n,e){let t=new Al(n,e);return t.subscribe.bind(t)}var Al=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=bl),i.error===void 0&&(i.error=bl),i.complete===void 0&&(i.complete=bl);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Pw(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bl(){}var eT=4*60*60*1e3;function pe(n){return n&&n._delegate?n._delegate:n}var nt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Vn="[DEFAULT]";var Nl=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Ao;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cw(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Rw(n){return n===Vn?void 0:n}function Cw(n){return n.instantiationMode==="EAGER"}var Co=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Nl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var kw=[],Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));var Dw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Nw=Z.INFO,xw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Ow=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=xw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Ht=class{constructor(e){this.name=e,this._logLevel=Nw,this._logHandler=Ow,this._userLogHandler=null,kw.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}};var Lw=(n,e)=>e.some(t=>n instanceof t),Hp,Wp;function Vw(){return Hp||(Hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mw(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Kp=new WeakMap,Ol=new WeakMap,Qp=new WeakMap,xl=new WeakMap,Vl=new WeakMap;function $w(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(mt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kp.set(t,n)}).catch(()=>{}),Vl.set(e,n),e}function Fw(n){if(Ol.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ol.set(n,e)}var Ll={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ol.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yp(n){Ll=n(Ll)}function Uw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(ko(this),e,...t);return Qp.set(r,e.sort?e.sort():[e]),mt(r)}:Mw().includes(n)?function(...e){return n.apply(ko(this),e),mt(Kp.get(this))}:function(...e){return mt(n.apply(ko(this),e))}}function qw(n){return typeof n=="function"?Uw(n):(n instanceof IDBTransaction&&Fw(n),Lw(n,Vw())?new Proxy(n,Ll):n)}function mt(n){if(n instanceof IDBRequest)return $w(n);if(xl.has(n))return xl.get(n);let e=qw(n);return e!==n&&(xl.set(n,e),Vl.set(e,n)),e}var ko=n=>Vl.get(n);function Xp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),c=mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mt(o.result),l.oldVersion,l.newVersion,mt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var Bw=["get","getKey","getAll","getAllKeys","count"],jw=["put","add","delete","clear"],Ml=new Map;function Jp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ml.get(e))return Ml.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=jw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bw.includes(t)))return;let s=async function(o,...c){let l=this.transaction(o,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Ml.set(e,s),s}Yp(n=>({...n,get:(e,t,r)=>Jp(e,t)||n.get(e,t,r),has:(e,t)=>!!Jp(e,t)||n.has(e,t)}));var Fl=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zw(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function zw(n){let e=n.getComponent();return e?.type==="VERSION"}var Ul="@firebase/app",Zp="0.13.2";var Ct=new Ht("@firebase/app"),Gw="@firebase/app-compat",Hw="@firebase/analytics-compat",Ww="@firebase/analytics",Kw="@firebase/app-check-compat",Qw="@firebase/app-check",Yw="@firebase/auth",Jw="@firebase/auth-compat",Xw="@firebase/database",Zw="@firebase/data-connect",e0="@firebase/database-compat",t0="@firebase/functions",n0="@firebase/functions-compat",r0="@firebase/installations",i0="@firebase/installations-compat",s0="@firebase/messaging",o0="@firebase/messaging-compat",a0="@firebase/performance",c0="@firebase/performance-compat",l0="@firebase/remote-config",u0="@firebase/remote-config-compat",d0="@firebase/storage",h0="@firebase/storage-compat",f0="@firebase/firestore",p0="@firebase/ai",m0="@firebase/firestore-compat",g0="firebase",_0="11.10.0";var y0="[DEFAULT]",v0={[Ul]:"fire-core",[Gw]:"fire-core-compat",[Ww]:"fire-analytics",[Hw]:"fire-analytics-compat",[Qw]:"fire-app-check",[Kw]:"fire-app-check-compat",[Yw]:"fire-auth",[Jw]:"fire-auth-compat",[Xw]:"fire-rtdb",[Zw]:"fire-data-connect",[e0]:"fire-rtdb-compat",[t0]:"fire-fn",[n0]:"fire-fn-compat",[r0]:"fire-iid",[i0]:"fire-iid-compat",[s0]:"fire-fcm",[o0]:"fire-fcm-compat",[a0]:"fire-perf",[c0]:"fire-perf-compat",[l0]:"fire-rc",[u0]:"fire-rc-compat",[d0]:"fire-gcs",[h0]:"fire-gcs-compat",[f0]:"fire-fst",[m0]:"fire-fst-compat",[p0]:"fire-vertex","fire-js":"fire-js",[g0]:"fire-js-all"};var Wi=new Map,ql=new Map,Bl=new Map;function em(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wt(n){let e=n.name;if(Bl.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Bl.set(e,n);for(let t of Wi.values())em(t,n);for(let t of ql.values())em(t,n);return!0}function Do(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ye(n){return n==null?!1:n.settings!==void 0}var w0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new Rt("app","Firebase",w0);var jl=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}};var Sr=_0;function Hl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:y0,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(t||(t=Vp()),!t)throw Mn.create("no-options");let s=Wi.get(i);if(s){if(Gt(t,s.options)&&Gt(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}let o=new Co(i);for(let l of Bl.values())o.addComponent(l);let c=new jl(t,r,o);return Wi.set(i,c),c}async function im(n){let e=!1,t=n.name;Wi.has(t)?(e=!0,Wi.delete(t)):ql.has(t)&&n.decRefCount()<=0&&(ql.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function st(n,e,t){var r;let i=(r=v0[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(c.join(" "));return}Wt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var I0="firebase-heartbeat-database",E0=1,Ki="firebase-heartbeat-store",$l=null;function sm(){return $l||($l=Xp(I0,E0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ki)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mn.create("idb-open",{originalErrorMessage:n.message})})),$l}async function b0(n){try{let t=(await sm()).transaction(Ki),r=await t.objectStore(Ki).get(om(n));return await t.done,r}catch(e){if(e instanceof Qe)Ct.warn(e.message);else{let t=Mn.create("idb-get",{originalErrorMessage:e?.message});Ct.warn(t.message)}}}async function tm(n,e){try{let r=(await sm()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,om(n)),await r.done}catch(t){if(t instanceof Qe)Ct.warn(t.message);else{let r=Mn.create("idb-set",{originalErrorMessage:t?.message});Ct.warn(r.message)}}}function om(n){return`${n.name}!${n.options.appId}`}var T0=1024,A0=30,zl=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Gl(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>A0){let o=P0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=nm(),{heartbeatsToSend:r,unsentEntries:i}=S0(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ct.warn(t),""}}};function nm(){return new Date().toISOString().substring(0,10)}function S0(n,e=T0){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rm(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Gl=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Po()?zp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await b0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return tm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function rm(n){return Sl(JSON.stringify({version:2,heartbeats:n})).length}function P0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function R0(n){Wt(new nt("platform-logger",e=>new Fl(e),"PRIVATE")),Wt(new nt("heartbeat",e=>new zl(e),"PRIVATE")),st(Ul,Zp,n),st(Ul,Zp,"esm2017"),st("fire-js","")}R0("");var C0="firebase",k0="11.10.0";st(C0,k0,"app");function No(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Im(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Em=Im,bm=new Rt("auth","Firebase",Im());var Vo=new Ht("@firebase/auth");function x0(n,...e){Vo.logLevel<=Z.WARN&&Vo.warn(`Auth (${Sr}): ${n}`,...e)}function Oo(n,...e){Vo.logLevel<=Z.ERROR&&Vo.error(`Auth (${Sr}): ${n}`,...e)}function kt(n,...e){throw mu(n,...e)}function Pr(n,...e){return mu(n,...e)}function Tm(n,e,t){let r=Object.assign(Object.assign({},Em()),{[e]:t});return new Rt("auth","Firebase",r).create(e,{appName:n.name})}function Yt(n){return Tm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mu(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bm.create(n,...e)}function W(n,e,...t){if(!n)throw mu(e,...t)}function gt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Oo(e),new Error(e)}function Un(n,e){n||gt(e)}function O0(){return am()==="http:"||am()==="https:"}function am(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function L0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O0()||qp()||"connection"in navigator)?navigator.onLine:!0}function V0(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var qn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Un(t>e,"Short delay should be less than long delay!"),this.isMobile=$p()||Bp()}get(){return L0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function M0(n,e){Un(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Mo=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var $0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var F0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U0=new qn(3e4,6e4);function ge(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ce(n,e,t,r,i={}){return Am(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let c=Ro(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Up()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(d.credentials="include"),Mo.fetch()(await Sm(n,n.config.apiHost,t,c),d)})}async function Am(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},$0),e);try{let i=new Xl(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Yi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(n,"user-disabled",o);let f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Tm(n,f,d);kt(n,f)}}catch(i){if(i instanceof Qe)throw i;kt(n,"network-request-failed",{message:String(i)})}}async function Jt(n,e,t,r,i={}){let s=await Ce(n,e,t,r,i);return"mfaPendingCredential"in s&&kt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Sm(n,e,t,r){let i=`${e}${t}?${r}`,s=n,o=s.config.emulator?M0(n.config,i):`${n.config.apiScheme}://${i}`;return F0.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function q0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Xl=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Pr(this.auth,"network-request-failed")),U0.get())})}};function Yi(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Pr(n,e,r);return i.customData._tokenResponse=t,i}function cm(n){return n!==void 0&&n.enterprise!==void 0}var $o=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return q0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Pm(n,e){return Ce(n,"GET","/v2/recaptchaConfig",ge(n,e))}async function B0(n,e){return Ce(n,"POST","/v1/accounts:delete",e)}async function Fo(n,e){return Ce(n,"POST","/v1/accounts:lookup",e)}function Ji(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rm(n,e=!1){let t=pe(n),r=await t.getIdToken(e),i=gu(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Ji(Wl(i.auth_time)),issuedAtTime:Ji(Wl(i.iat)),expirationTime:Ji(Wl(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Wl(n){return Number(n)*1e3}function gu(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{let i=So(t);return i?JSON.parse(i):(Oo("Failed to decode base64 JWT payload"),null)}catch(i){return Oo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function lm(n){let e=gu(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Cr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qe&&j0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function j0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Zl=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var es=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Uo(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Cr(n,Fo(t,{idToken:r}));W(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?km(s.providerUserInfo):[],c=z0(n.providerData,o),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=l?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new es(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Cm(n){let e=pe(n);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z0(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function km(n){return n.map(e=>{var{providerId:t}=e,r=No(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function G0(n,e){let t=await Am(n,{},async()=>{let r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Sm(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:c,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(l.credentials="include"),Mo.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function H0(n,e){return Ce(n,"POST","/v2/accounts:revokeToken",ge(n,e))}var Xi=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");let t=lm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await G0(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return gt("not implemented")}};function Kt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Qt=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=No(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new es(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rm(this,e)}reload(){return Cm(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Yt(this.auth));let e=await this.getIdToken();return await Cr(this,B0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,d,f;let m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:Y,isAnonymous:k,providerData:O,stsTokenManager:w}=t;W(M&&w,e,"internal-error");let g=Xi.fromJSON(this.name,w);W(typeof M=="string",e,"internal-error"),Kt(m,e.name),Kt(v,e.name),W(typeof Y=="boolean",e,"internal-error"),W(typeof k=="boolean",e,"internal-error"),Kt(A,e.name),Kt(N,e.name),Kt(V,e.name),Kt(L,e.name),Kt(z,e.name),Kt($,e.name);let y=new n({uid:M,auth:e,email:v,emailVerified:Y,displayName:m,isAnonymous:k,photoURL:N,phoneNumber:A,tenantId:V,stsTokenManager:g,createdAt:z,lastLoginAt:$});return O&&Array.isArray(O)&&(y.providerData=O.map(E=>Object.assign({},E))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,t,r=!1){let i=new Xi;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Uo(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];W(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?km(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new Xi;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new es(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var um=new Map;function $n(n){Un(n instanceof Function,"Expected a class definition");let e=um.get(n);return e?(Un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,um.set(n,e),e)}var qo=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};qo.type="NONE";var ts=qo;function Kl(n,e,t){return`firebase:${n}:${e}:${t}`}var Bo=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kl("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Fo(this.auth,{idToken:e}).catch(()=>{});return t?Qt._fromGetAccountInfoResponse(this.auth,t,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n($n(ts),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||$n(ts),o=Kl(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let f=await d._get(o);if(f){let m;if(typeof f=="string"){let v=await Fo(e,{idToken:f}).catch(()=>{});if(!v)break;m=await Qt._fromGetAccountInfoResponse(e,v,f)}else m=Qt._fromJSON(e,f);d!==s&&(c=m),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new n(s,e,r))}};function dm(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xm(e))return"Blackberry";if(Om(e))return"Webos";if(K0(e))return"Safari";if((e.includes("chrome/")||Q0(e))&&!e.includes("edge/"))return"Chrome";if(Nm(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function W0(n=be()){return/firefox\//i.test(n)}function K0(n=be()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q0(n=be()){return/crios\//i.test(n)}function Dm(n=be()){return/iemobile/i.test(n)}function Nm(n=be()){return/android/i.test(n)}function xm(n=be()){return/blackberry/i.test(n)}function Om(n=be()){return/webos/i.test(n)}function Y0(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function J0(){return jp()&&document.documentMode===10}function X0(n=be()){return Y0(n)||Nm(n)||Om(n)||xm(n)||/windows phone/i.test(n)||Dm(n)}function Lm(n,e=[]){let t;switch(n){case"Browser":t=dm(be());break;case"Worker":t=`${dm(be())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${r}`}var eu=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,c)=>{try{let l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Z0(n,e={}){return Ce(n,"GET","/v2/passwordPolicy",ge(n,e))}var e1=6,tu=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:e1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var nu=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jo(this),this.idTokenSubscription=new jo(this),this.beforeStateQueue=new eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$n(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Fo(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ye(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Yt(this));let t=e?pe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Z0(this),t=new tu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await H0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&$n(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[$n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{let l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&x0(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Xt(n){return pe(n)}var jo=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gp(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t1(n){_u=n}function n1(n){return _u.loadJS(n)}function r1(){return _u.recaptchaEnterpriseScript}function i1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var ru=class{constructor(){this.enterprise=new iu}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},iu=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var s1="recaptcha-enterprise",Zi="NO_RECAPTCHA",zo=class{constructor(e){this.type=s1,this.auth=Xt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Pm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new $o(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){let l=window.grecaptcha;cm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Zi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ru().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&cm(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=r1();l.length!==0&&(l+=c),n1(l).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}};async function Qi(n,e,t,r=!1,i=!1){let s=new zo(n),o;if(i)o=Zi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Fn(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await Qi(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Qi(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let c=await Qi(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await Qi(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{let c=await Qi(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function o1(n){let e=Xt(n),t=await Pm(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $o(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new zo(e).verify()}function ra(n,e){let t=Do(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Gt(s,e??{}))return i;kt(i,"already-initialized")}return t.initialize({options:e})}function a1(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map($n);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}var Bn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}};async function c1(n,e){return Ce(n,"POST","/v1/accounts:update",e)}async function l1(n,e){return Ce(n,"POST","/v1/accounts:signUp",e)}async function u1(n,e){return Jt(n,"POST","/v1/accounts:signInWithPassword",ge(n,e))}async function d1(n,e){return Ce(n,"POST","/v1/accounts:sendOobCode",ge(n,e))}async function h1(n,e){return d1(n,e)}async function f1(n,e){return Jt(n,"POST","/v1/accounts:signInWithEmailLink",ge(n,e))}async function p1(n,e){return Jt(n,"POST","/v1/accounts:signInWithEmailLink",ge(n,e))}var ns=class n extends Bn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fn(e,t,"signInWithPassword",u1,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return f1(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fn(e,r,"signUpPassword",l1,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return p1(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Rr(n,e){return Jt(n,"POST","/v1/accounts:signInWithIdp",ge(n,e))}var m1="http://localhost",jn=class n extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=No(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Rr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}buildRequest(){let e={requestUri:m1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ro(t)}return e}};async function hm(n,e){return Ce(n,"POST","/v1/accounts:sendVerificationCode",ge(n,e))}async function g1(n,e){return Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",ge(n,e))}async function _1(n,e){let t=await Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",ge(n,e));if(t.temporaryProof)throw Yi(n,"account-exists-with-different-credential",t);return t}var y1={USER_NOT_FOUND:"user-not-found"};async function v1(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",ge(n,t),y1)}var rs=class n extends Bn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return g1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return v1(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function w1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function I1(n){let e=Tr(Ar(n)).link,t=e?Tr(Ar(e)).deep_link_id:null,r=Tr(Ar(n)).deep_link_id;return(r?Tr(Ar(r)).link:null)||r||t||e||n}var Go=class n{constructor(e){var t,r,i,s,o,c;let l=Tr(Ar(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=w1((i=l.mode)!==null&&i!==void 0?i:null);W(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=I1(e);try{return new n(t)}catch{return null}}};var Dt=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ns._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Go.parseLink(t);return W(r,"argument-error"),ns._fromEmailAndCode(e,r.code,r.tenantId)}};Dt.PROVIDER_ID="password";Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var su=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var kr=class extends su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var is=class n extends kr{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";var ss=class n extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";var os=class n extends kr{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";var as=class n extends kr{constructor(){super("twitter.com")}static credential(e,t){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";async function E1(n,e){return Jt(n,"POST","/v1/accounts:signUp",ge(n,e))}var Dr=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await Qt._fromIdTokenResponse(e,r,i),o=fm(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=fm(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function fm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var ou=class n extends Qe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Vm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(n,s,e,r):s})}async function b1(n,e,t=!1){let r=await Cr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dr._forOperation(n,"link",r)}async function Mm(n,e,t=!1){let{auth:r}=n;if(Ye(r.app))return Promise.reject(Yt(r));let i="reauthenticate";try{let s=await Cr(n,Vm(r,i,e,n),t);W(s.idToken,r,"internal-error");let o=gu(s.idToken);W(o,r,"internal-error");let{sub:c}=o;return W(n.uid===c,r,"user-mismatch"),Dr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}async function $m(n,e,t=!1){if(Ye(n.app))return Promise.reject(Yt(n));let r="signIn",i=await Vm(n,r,e),s=await Dr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Fm(n,e){return $m(Xt(n),e)}async function yu(n,e){return Mm(pe(n),e)}function T1(n,e,t){var r;W(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),W(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),W(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(W(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(W(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Um(n){let e=Xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ia(n,e,t){let r=Xt(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&T1(r,i,t),await Fn(r,i,"getOobCode",h1,"EMAIL_PASSWORD_PROVIDER")}async function vu(n,e,t){if(Ye(n.app))return Promise.reject(Yt(n));let r=Xt(n),o=await Fn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",E1,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Um(n),l}),c=await Dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function wu(n,e,t){return Ye(n.app)?Promise.reject(Yt(n)):Fm(pe(n),Dt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Um(n),r})}function Iu(n,e){return A1(pe(n),null,e)}async function A1(n,e,t){let{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);let o=await Cr(n,c1(r,s));await n._updateTokensIfNecessary(o,!0)}function Eu(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function sa(n){return pe(n).signOut()}function pm(n,e){return Ce(n,"POST","/v2/accounts/mfaEnrollment:start",ge(n,e))}function S1(n,e){return Ce(n,"POST","/v2/accounts/mfaEnrollment:finalize",ge(n,e))}function P1(n,e){return Ce(n,"POST","/v2/accounts/mfaEnrollment:start",ge(n,e))}function R1(n,e){return Ce(n,"POST","/v2/accounts/mfaEnrollment:finalize",ge(n,e))}var Ho="__sak";var Wo=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var C1=1e3,k1=10,Ko=class extends Wo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);J0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,k1):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},C1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ko.type="LOCAL";var bu=Ko;var D1=1e3;function Ql(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Yl(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var au=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Yl(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return Ql(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Yl(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=Yl(e);if(window.cookieStore){let c=d=>{let f=d.changed.find(v=>v.name===r);f&&t(f.value),d.deleted.find(v=>v.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",c)}let i=Ql(r),s=setInterval(()=>{let c=Ql(r);c!==i&&(t(c),i=c)},D1),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};au.type="COOKIE";var cu=class extends Wo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};cu.type="SESSION";function N1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Qo=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(o).map(async d=>d(t.origin,s)),l=await N1(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Qo.receivers=[];function qm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var lu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{let d=qm("",20);i.port1.start();let f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){let v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function mm(){return window}function Bm(){return typeof mm().WorkerGlobalScope<"u"&&typeof mm().importScripts=="function"}async function x1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function L1(){return Bm()?self:null}var jm="firebaseLocalStorageDb",V1=1,Yo="firebaseLocalStorage",zm="fbase_key",zn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function oa(n,e){return n.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function M1(){let n=indexedDB.deleteDatabase(jm);return new zn(n).toPromise()}function uu(){let n=indexedDB.open(jm,V1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Yo,{keyPath:zm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await M1(),e(await uu()))})})}async function gm(n,e,t){let r=oa(n,!0).put({[zm]:e,value:t});return new zn(r).toPromise()}async function $1(n,e){let t=oa(n,!1).get(e),r=await new zn(t).toPromise();return r===void 0?null:r.value}function _m(n,e){let t=oa(n,!0).delete(e);return new zn(t).toPromise()}var F1=800,U1=3,Jo=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>U1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(L1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await x1(),!this.activeServiceWorker)return;this.sender=new lu(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await uu();return await gm(e,Ho,"1"),await _m(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>$1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_m(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=oa(i,!1).getAll();return new zn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Jo.type="LOCAL";var Tu=Jo;function ym(n,e){return Ce(n,"POST","/v2/accounts/mfaSignIn:start",ge(n,e))}function q1(n,e){return Ce(n,"POST","/v2/accounts/mfaSignIn:finalize",ge(n,e))}function B1(n,e){return Ce(n,"POST","/v2/accounts/mfaSignIn:finalize",ge(n,e))}var kT=i1("rcb"),DT=new qn(3e4,6e4);var Lo="recaptcha";async function j1(n,e,t){var r;if(!n._getRecaptchaConfig())try{await o1(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){W(s.type==="enroll",n,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Fn(n,o,"mfaSmsEnrollment",async(f,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===Zi){W(t?.type===Lo,f,"argument-error");let v=await Jl(f,m,t);return pm(f,v)}return pm(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{W(s.type==="signin",n,"internal-error");let o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;W(o,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Fn(n,c,"mfaSmsSignIn",async(m,v)=>{if(v.phoneSignInInfo.captchaResponse===Zi){W(t?.type===Lo,m,"argument-error");let A=await Jl(m,v,t);return ym(m,A)}return ym(m,v)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Fn(n,s,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===Zi){W(t?.type===Lo,d,"argument-error");let m=await Jl(d,f,t);return hm(d,m)}return hm(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function Jl(n,e,t){W(t.type===Lo,n,"argument-error");let r=await t.verify();W(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var cs=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Xt(e)}verifyPhoneNumber(e,t){return j1(this.auth,e,pe(t))}static credential(e,t){return rs._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?rs._fromTokenResponse(t,r):null}};cs.PROVIDER_ID="phone";cs.PHONE_SIGN_IN_METHOD="phone";var ls=class extends Bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function z1(n){return $m(n.auth,new ls(n),n.bypassAuthState)}function G1(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),Mm(t,new ls(n),n.bypassAuthState)}async function H1(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),b1(t,new ls(n),n.bypassAuthState)}var du=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z1;case"linkViaPopup":case"linkViaRedirect":return H1;case"reauthViaPopup":case"reauthViaRedirect":return G1;default:kt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var W1=new qn(2e3,1e4);var hu=class n extends du{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");let e=qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W1.get())};e()}};hu.currentPopupAction=null;var NT=10*60*1e3;var xT=new qn(3e4,6e4);var OT=new qn(5e3,15e3);var LT=encodeURIComponent("fac");var Xo=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return gt("unexpected MultiFactorSessionType")}}},fu=class n extends Xo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return S1(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return q1(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Zo=class{constructor(){}static assertion(e){return fu._fromCredential(e)}};Zo.FACTOR_ID="phone";var ea=class{static assertionForEnrollment(e,t){return ta._fromSecret(e,t)}static assertionForSignIn(e,t){return ta._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;W(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await P1(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return na._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};ea.FACTOR_ID="totp";var ta=class n extends Xo{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return W(typeof this.secret<"u",e,"argument-error"),R1(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){W(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return B1(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},na=class n{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(xo(e)||xo(t))&&(i=!0),i&&(xo(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),xo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function xo(n){return typeof n>"u"||n?.length===0}var vm="@firebase/auth",wm="1.10.8";var pu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function K1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q1(n){Wt(new nt("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lm(n)},d=new nu(r,i,s,l);return a1(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wt(new nt("auth-internal",e=>{let t=Xt(e.getProvider("auth").getImmediate());return(r=>new pu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(vm,wm,K1(n)),st(vm,wm,"esm2017")}var Y1=5*60,VT=Mp("authIdTokenMaxAge")||Y1;function J1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}t1({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Pr("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",J1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q1("Browser");var Gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hm={};var Nt,Au;(function(){var n;function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(E,b,T){for(var I=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)I[Ge-2]=arguments[Ge];return g.prototype[b].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)E[b]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(b=0;16>b;++b)E[b]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],b=w.g[2];var T=w.g[3],I=g+(T^y&(b^T))+E[0]+3614090360&4294967295;g=y+(I<<7&4294967295|I>>>25),I=T+(b^g&(y^b))+E[1]+3905402710&4294967295,T=g+(I<<12&4294967295|I>>>20),I=b+(y^T&(g^y))+E[2]+606105819&4294967295,b=T+(I<<17&4294967295|I>>>15),I=y+(g^b&(T^g))+E[3]+3250441966&4294967295,y=b+(I<<22&4294967295|I>>>10),I=g+(T^y&(b^T))+E[4]+4118548399&4294967295,g=y+(I<<7&4294967295|I>>>25),I=T+(b^g&(y^b))+E[5]+1200080426&4294967295,T=g+(I<<12&4294967295|I>>>20),I=b+(y^T&(g^y))+E[6]+2821735955&4294967295,b=T+(I<<17&4294967295|I>>>15),I=y+(g^b&(T^g))+E[7]+4249261313&4294967295,y=b+(I<<22&4294967295|I>>>10),I=g+(T^y&(b^T))+E[8]+1770035416&4294967295,g=y+(I<<7&4294967295|I>>>25),I=T+(b^g&(y^b))+E[9]+2336552879&4294967295,T=g+(I<<12&4294967295|I>>>20),I=b+(y^T&(g^y))+E[10]+4294925233&4294967295,b=T+(I<<17&4294967295|I>>>15),I=y+(g^b&(T^g))+E[11]+2304563134&4294967295,y=b+(I<<22&4294967295|I>>>10),I=g+(T^y&(b^T))+E[12]+1804603682&4294967295,g=y+(I<<7&4294967295|I>>>25),I=T+(b^g&(y^b))+E[13]+4254626195&4294967295,T=g+(I<<12&4294967295|I>>>20),I=b+(y^T&(g^y))+E[14]+2792965006&4294967295,b=T+(I<<17&4294967295|I>>>15),I=y+(g^b&(T^g))+E[15]+1236535329&4294967295,y=b+(I<<22&4294967295|I>>>10),I=g+(b^T&(y^b))+E[1]+4129170786&4294967295,g=y+(I<<5&4294967295|I>>>27),I=T+(y^b&(g^y))+E[6]+3225465664&4294967295,T=g+(I<<9&4294967295|I>>>23),I=b+(g^y&(T^g))+E[11]+643717713&4294967295,b=T+(I<<14&4294967295|I>>>18),I=y+(T^g&(b^T))+E[0]+3921069994&4294967295,y=b+(I<<20&4294967295|I>>>12),I=g+(b^T&(y^b))+E[5]+3593408605&4294967295,g=y+(I<<5&4294967295|I>>>27),I=T+(y^b&(g^y))+E[10]+38016083&4294967295,T=g+(I<<9&4294967295|I>>>23),I=b+(g^y&(T^g))+E[15]+3634488961&4294967295,b=T+(I<<14&4294967295|I>>>18),I=y+(T^g&(b^T))+E[4]+3889429448&4294967295,y=b+(I<<20&4294967295|I>>>12),I=g+(b^T&(y^b))+E[9]+568446438&4294967295,g=y+(I<<5&4294967295|I>>>27),I=T+(y^b&(g^y))+E[14]+3275163606&4294967295,T=g+(I<<9&4294967295|I>>>23),I=b+(g^y&(T^g))+E[3]+4107603335&4294967295,b=T+(I<<14&4294967295|I>>>18),I=y+(T^g&(b^T))+E[8]+1163531501&4294967295,y=b+(I<<20&4294967295|I>>>12),I=g+(b^T&(y^b))+E[13]+2850285829&4294967295,g=y+(I<<5&4294967295|I>>>27),I=T+(y^b&(g^y))+E[2]+4243563512&4294967295,T=g+(I<<9&4294967295|I>>>23),I=b+(g^y&(T^g))+E[7]+1735328473&4294967295,b=T+(I<<14&4294967295|I>>>18),I=y+(T^g&(b^T))+E[12]+2368359562&4294967295,y=b+(I<<20&4294967295|I>>>12),I=g+(y^b^T)+E[5]+4294588738&4294967295,g=y+(I<<4&4294967295|I>>>28),I=T+(g^y^b)+E[8]+2272392833&4294967295,T=g+(I<<11&4294967295|I>>>21),I=b+(T^g^y)+E[11]+1839030562&4294967295,b=T+(I<<16&4294967295|I>>>16),I=y+(b^T^g)+E[14]+4259657740&4294967295,y=b+(I<<23&4294967295|I>>>9),I=g+(y^b^T)+E[1]+2763975236&4294967295,g=y+(I<<4&4294967295|I>>>28),I=T+(g^y^b)+E[4]+1272893353&4294967295,T=g+(I<<11&4294967295|I>>>21),I=b+(T^g^y)+E[7]+4139469664&4294967295,b=T+(I<<16&4294967295|I>>>16),I=y+(b^T^g)+E[10]+3200236656&4294967295,y=b+(I<<23&4294967295|I>>>9),I=g+(y^b^T)+E[13]+681279174&4294967295,g=y+(I<<4&4294967295|I>>>28),I=T+(g^y^b)+E[0]+3936430074&4294967295,T=g+(I<<11&4294967295|I>>>21),I=b+(T^g^y)+E[3]+3572445317&4294967295,b=T+(I<<16&4294967295|I>>>16),I=y+(b^T^g)+E[6]+76029189&4294967295,y=b+(I<<23&4294967295|I>>>9),I=g+(y^b^T)+E[9]+3654602809&4294967295,g=y+(I<<4&4294967295|I>>>28),I=T+(g^y^b)+E[12]+3873151461&4294967295,T=g+(I<<11&4294967295|I>>>21),I=b+(T^g^y)+E[15]+530742520&4294967295,b=T+(I<<16&4294967295|I>>>16),I=y+(b^T^g)+E[2]+3299628645&4294967295,y=b+(I<<23&4294967295|I>>>9),I=g+(b^(y|~T))+E[0]+4096336452&4294967295,g=y+(I<<6&4294967295|I>>>26),I=T+(y^(g|~b))+E[7]+1126891415&4294967295,T=g+(I<<10&4294967295|I>>>22),I=b+(g^(T|~y))+E[14]+2878612391&4294967295,b=T+(I<<15&4294967295|I>>>17),I=y+(T^(b|~g))+E[5]+4237533241&4294967295,y=b+(I<<21&4294967295|I>>>11),I=g+(b^(y|~T))+E[12]+1700485571&4294967295,g=y+(I<<6&4294967295|I>>>26),I=T+(y^(g|~b))+E[3]+2399980690&4294967295,T=g+(I<<10&4294967295|I>>>22),I=b+(g^(T|~y))+E[10]+4293915773&4294967295,b=T+(I<<15&4294967295|I>>>17),I=y+(T^(b|~g))+E[1]+2240044497&4294967295,y=b+(I<<21&4294967295|I>>>11),I=g+(b^(y|~T))+E[8]+1873313359&4294967295,g=y+(I<<6&4294967295|I>>>26),I=T+(y^(g|~b))+E[15]+4264355552&4294967295,T=g+(I<<10&4294967295|I>>>22),I=b+(g^(T|~y))+E[6]+2734768916&4294967295,b=T+(I<<15&4294967295|I>>>17),I=y+(T^(b|~g))+E[13]+1309151649&4294967295,y=b+(I<<21&4294967295|I>>>11),I=g+(b^(y|~T))+E[4]+4149444226&4294967295,g=y+(I<<6&4294967295|I>>>26),I=T+(y^(g|~b))+E[11]+3174756917&4294967295,T=g+(I<<10&4294967295|I>>>22),I=b+(g^(T|~y))+E[2]+718787259&4294967295,b=T+(I<<15&4294967295|I>>>17),I=y+(T^(b|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+T&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,E=this.B,b=this.h,T=0;T<g;){if(b==0)for(;T<=y;)i(this,w,T),T+=this.blockSize;if(typeof w=="string"){for(;T<g;)if(E[b++]=w.charCodeAt(T++),b==this.blockSize){i(this,E),b=0;break}}else for(;T<g;)if(E[b++]=w[T++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)w[y++]=this.g[g]>>>E&255;return w};function s(w,g){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function o(w,g){this.h=g;for(var y=[],E=!0,b=w.length-1;0<=b;b--){var T=w[b]|0;E&&T==g||(y[b]=T,E=!1)}this.g=y}var c={};function l(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(d(-w));for(var g=[],y=1,E=0;w>=y;E++)g[E]=w/y|0,y*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return L(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),E=m,b=0;b<w.length;b+=8){var T=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+T),g);8>T?(T=d(Math.pow(g,T)),E=E.j(T).add(d(I))):(E=E.j(y),E=E.add(d(I)))}return E}var m=l(0),v=l(1),A=l(16777216);n=o.prototype,n.m=function(){if(V(this))return-L(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+L(this).toString(w);for(var g=d(Math.pow(w,6)),y=this,E="";;){var b=Y(y,g).g;y=z(y,b.j(g));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=b,N(y))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=z(this,w),V(w)?-1:N(w)?0:1};function L(w){for(var g=w.g.length,y=[],E=0;E<g;E++)y[E]=~w.g[E];return new o(y,~w.h).add(v)}n.abs=function(){return V(this)?L(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0,b=0;b<=g;b++){var T=E+(this.i(b)&65535)+(w.i(b)&65535),I=(T>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);E=I>>>16,T&=65535,I&=65535,y[b]=I<<16|T}return new o(y,y[y.length-1]&-2147483648?-1:0)};function z(w,g){return w.add(L(g))}n.j=function(w){if(N(this)||N(w))return m;if(V(this))return V(w)?L(this).j(L(w)):L(L(this).j(w));if(V(w))return L(this.j(L(w)));if(0>this.l(A)&&0>w.l(A))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<w.g.length;b++){var T=this.i(E)>>>16,I=this.i(E)&65535,Ge=w.i(b)>>>16,Ri=w.i(b)&65535;y[2*E+2*b]+=I*Ri,$(y,2*E+2*b),y[2*E+2*b+1]+=T*Ri,$(y,2*E+2*b+1),y[2*E+2*b+1]+=I*Ge,$(y,2*E+2*b+1),y[2*E+2*b+2]+=T*Ge,$(y,2*E+2*b+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new o(y,0)};function $(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function M(w,g){this.g=w,this.h=g}function Y(w,g){if(N(g))throw Error("division by zero");if(N(w))return new M(m,m);if(V(w))return g=Y(L(w),g),new M(L(g.g),L(g.h));if(V(g))return g=Y(w,L(g)),new M(L(g.g),g.h);if(30<w.g.length){if(V(w)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=v,E=g;0>=E.l(w);)y=k(y),E=k(E);var b=O(y,1),T=O(E,1);for(E=O(E,2),y=O(y,2);!N(E);){var I=T.add(E);0>=I.l(w)&&(b=b.add(y),T=I),E=O(E,1),y=O(y,1)}return g=z(w,b.j(g)),new M(b,g)}for(b=m;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=d(y),I=T.j(g);V(I)||0<I.l(w);)y-=E,T=d(y),I=T.j(g);N(T)&&(T=v),b=b.add(T),w=z(w,I)}return new M(b,w)}n.A=function(w){return Y(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&w.i(E);return new o(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|w.i(E);return new o(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^w.i(E);return new o(y,this.h^w.h)};function k(w){for(var g=w.g.length+1,y=[],E=0;E<g;E++)y[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(y,w.h)}function O(w,g){var y=g>>5;g%=32;for(var E=w.g.length-y,b=[],T=0;T<E;T++)b[T]=0<g?w.i(T+y)>>>g|w.i(T+y+1)<<32-g:w.i(T+y);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Au=Hm.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Nt=Hm.Integer=o}).apply(typeof Gm<"u"?Gm:typeof self<"u"?self:typeof window<"u"?window:{});var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={};var Su,X1,Nr,Pu,us,ca,Ru,Cu,ku;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,h){return a==Array.prototype||a==Object.prototype||(a[u]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof aa=="object"&&aa];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var h=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var S=a[p];if(!(S in h))break e;h=h[S]}a=a[a.length-1],p=h[a],u=u(p),u!=p&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var h=0,p=!1,S={next:function(){if(!p&&h<a.length){var C=h++;return{value:u(C,a[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,h){return h})}});var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,h){return a.call.apply(a.bind,arguments)}function m(a,u,h){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function v(a,u,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function A(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function N(a,u){function h(){}h.prototype=u.prototype,a.aa=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(p,S,C){for(var F=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)F[ae-2]=arguments[ae];return u.prototype[S].apply(p,F)}}function V(a){let u=a.length;if(0<u){let h=Array(u);for(let p=0;p<u;p++)h[p]=a[p];return h}return[]}function L(a,u){for(let h=1;h<arguments.length;h++){let p=arguments[h];if(l(p)){let S=a.length||0,C=p.length||0;a.length=S+C;for(let F=0;F<C;F++)a[S+F]=p[F]}else a.push(p)}}class z{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var k=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function O(a,u,h){for(let p in a)u.call(h,a[p],p,a)}function w(a,u){for(let h in a)u.call(void 0,a[h],h,a)}function g(a){let u={};for(let h in a)u[h]=a[h];return u}let y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)a[h]=p[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(p,h)&&(a[h]=p[h])}}function b(a){var u=1;a=a.split(":");let h=[];for(;0<u&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function T(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Xc;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ge{constructor(){this.h=this.g=null}add(u,h){let p=Ri.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ri=new z(()=>new Fv,a=>a.reset());class Fv{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ci,ki=!1,Xc=new Ge,Df=()=>{let a=c.Promise.resolve(void 0);Ci=()=>{a.then(Uv)}};var Uv=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){T(h)}var u=Ri;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ki=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var qv=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return a}();function Di(a,u){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(k){e:{try{Y(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bv[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Di.aa.h.call(this)}}N(Di,xe);var Bv={2:"touch",3:"pen",4:"mouse"};Di.prototype.h=function(){Di.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),jv=0;function zv(a,u,h,p,S){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=S,this.key=++jv,this.da=this.fa=!1}function ao(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function co(a){this.src=a,this.g={},this.h=0}co.prototype.add=function(a,u,h,p,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var F=el(a,u,p,S);return-1<F?(u=a[F],h||(u.fa=!1)):(u=new zv(u,this.src,C,!!p,S),u.fa=h,a.push(u)),u};function Zc(a,u){var h=u.type;if(h in a.g){var p=a.g[h],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(ao(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function el(a,u,h,p){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==p)return S}return-1}var tl="closure_lm_"+(1e6*Math.random()|0),nl={};function Nf(a,u,h,p,S){if(p&&p.once)return Of(a,u,h,p,S);if(Array.isArray(u)){for(var C=0;C<u.length;C++)Nf(a,u[C],h,p,S);return null}return h=ol(h),a&&a[Ni]?a.K(u,h,d(p)?!!p.capture:!!p,S):xf(a,u,h,!1,p,S)}function xf(a,u,h,p,S,C){if(!u)throw Error("Invalid event type");var F=d(S)?!!S.capture:!!S,ae=il(a);if(ae||(a[tl]=ae=new co(a)),h=ae.add(u,h,p,F,C),h.proxy)return h;if(p=Gv(),h.proxy=p,p.src=a,p.listener=h,a.addEventListener)qv||(S=F),S===void 0&&(S=!1),a.addEventListener(u.toString(),p,S);else if(a.attachEvent)a.attachEvent(Vf(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gv(){function a(h){return u.call(a.src,a.listener,h)}let u=Hv;return a}function Of(a,u,h,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Of(a,u[C],h,p,S);return null}return h=ol(h),a&&a[Ni]?a.L(u,h,d(p)?!!p.capture:!!p,S):xf(a,u,h,!0,p,S)}function Lf(a,u,h,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)Lf(a,u[C],h,p,S);else p=d(p)?!!p.capture:!!p,h=ol(h),a&&a[Ni]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],h=el(C,h,p,S),-1<h&&(ao(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=il(a))&&(u=a.g[u.toString()],a=-1,u&&(a=el(u,h,p,S)),(h=-1<a?u[a]:null)&&rl(h))}function rl(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ni])Zc(u.i,a);else{var h=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(h,p,a.capture):u.detachEvent?u.detachEvent(Vf(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=il(u))?(Zc(h,a),h.h==0&&(h.src=null,u[tl]=null)):ao(a)}}}function Vf(a){return a in nl?nl[a]:nl[a]="on"+a}function Hv(a,u){if(a.da)a=!0;else{u=new Di(u,this);var h=a.listener,p=a.ha||a.src;a.fa&&rl(a),a=h.call(p,u)}return a}function il(a){return a=a[tl],a instanceof co?a:null}var sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ol(a){return typeof a=="function"?a:(a[sl]||(a[sl]=function(u){return a.handleEvent(u)}),a[sl])}function Oe(){qt.call(this),this.i=new co(this),this.M=this,this.F=null}N(Oe,qt),Oe.prototype[Ni]=!0,Oe.prototype.removeEventListener=function(a,u,h,p){Lf(this,a,u,h,p)};function qe(a,u){var h,p=a.F;if(p)for(h=[];p;p=p.F)h.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new xe(u,a);else if(u instanceof xe)u.target=u.target||a;else{var S=u;u=new xe(p,a),E(u,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var F=u.g=h[C];S=lo(F,p,!0,u)&&S}if(F=u.g=a,S=lo(F,p,!0,u)&&S,S=lo(F,p,!1,u)&&S,h)for(C=0;C<h.length;C++)F=u.g=h[C],S=lo(F,p,!1,u)&&S}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var h=a.g[u],p=0;p<h.length;p++)ao(h[p]);delete a.g[u],a.h--}}this.F=null},Oe.prototype.K=function(a,u,h,p){return this.i.add(String(a),u,!1,h,p)},Oe.prototype.L=function(a,u,h,p){return this.i.add(String(a),u,!0,h,p)};function lo(a,u,h,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var F=u[C];if(F&&!F.da&&F.capture==h){var ae=F.listener,Re=F.ha||F.src;F.fa&&Zc(a.i,F),S=ae.call(Re,p)!==!1&&S}}return S&&!p.defaultPrevented}function Mf(a,u,h){if(typeof a=="function")h&&(a=v(a,h));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function $f(a){a.g=Mf(()=>{a.g=null,a.i&&(a.i=!1,$f(a))},a.l);let u=a.h;a.h=null,a.m.apply(null,u)}class Wv extends qt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$f(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(a){qt.call(this),this.h=a,this.g={}}N(xi,qt);var Ff=[];function Uf(a){O(a.g,function(u,h){this.g.hasOwnProperty(h)&&rl(u)},a),a.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Uf(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var al=c.JSON.stringify,Kv=c.JSON.parse,Qv=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function cl(){}cl.prototype.h=null;function qf(a){return a.h||(a.h=a.i())}function Bf(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ll(){xe.call(this,"d")}N(ll,xe);function ul(){xe.call(this,"c")}N(ul,xe);var Nn={},jf=null;function uo(){return jf=jf||new Oe}Nn.La="serverreachability";function zf(a){xe.call(this,Nn.La,a)}N(zf,xe);function Li(a){let u=uo();qe(u,new zf(u))}Nn.STAT_EVENT="statevent";function Gf(a,u){xe.call(this,Nn.STAT_EVENT,a),this.stat=u}N(Gf,xe);function Be(a){let u=uo();qe(u,new Gf(u,a))}Nn.Ma="timingevent";function Hf(a,u){xe.call(this,Nn.Ma,a),this.size=u}N(Hf,xe);function Vi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function Yv(a,u,h,p,S,C){a.info(function(){if(a.g)if(C)for(var F="",ae=C.split("&"),Re=0;Re<ae.length;Re++){var ne=ae[Re].split("=");if(1<ne.length){var Le=ne[0];ne=ne[1];var Ve=Le.split("_");F=2<=Ve.length&&Ve[1]=="type"?F+(Le+"="+ne+"&"):F+(Le+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+h+`
`+F})}function Jv(a,u,h,p,S,C,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+h+`
`+C+" "+F})}function vr(a,u,h,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Zv(a,h)+(p?" "+p:"")})}function Xv(a,u){a.info(function(){return"TIMEOUT: "+u})}Mi.prototype.info=function(){};function Zv(a,u){if(!a.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var p=h[a];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return al(h)}catch{return u}}var ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dl;function fo(){}N(fo,cl),fo.prototype.g=function(){return new XMLHttpRequest},fo.prototype.i=function(){return{}},dl=new fo;function Bt(a,u,h,p){this.j=a,this.i=u,this.l=h,this.R=p||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kf}function Kf(){this.i=null,this.g="",this.h=!1}var Qf={},hl={};function fl(a,u,h){a.L=1,a.v=_o(St(u)),a.m=h,a.P=!0,Yf(a,null)}function Yf(a,u){a.F=Date.now(),po(a),a.A=St(a.v);var h=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),up(h.i,"t",p),a.C=0,h=a.j.J,a.h=new Kf,a.g=Rp(a.j,h?u:null,!a.m),0<a.O&&(a.M=new Wv(v(a.Y,a,a.g),a.O)),u=a.U,h=a.g,p=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ff[0]=S.toString()),S=Ff);for(var C=0;C<S.length;C++){var F=Nf(h,S[C],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Li(),Yv(a.i,a.u,a.A,a.l,a.R,a.m)}Bt.prototype.ca=function(a){a=a.target;let u=this.M;u&&Pt(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{let Ve=Pt(this.g);var u=this.g.Ba();let Er=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||_p(this.g)))){this.J||Ve!=4||u==7||(u==8||0>=Er?Li(3):Li(2)),pl(this);var h=this.g.Z();this.X=h;t:if(Jf(this)){var p=_p(this.g);a="";var S=p.length,C=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),$i(this);var F="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Jv(this.i,this.u,this.A,this.l,this.R,Ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Re=this.g;if((ae=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ae)){var ne=ae;break t}}ne=null}if(h=ne)vr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ml(this,h);else{this.o=!1,this.s=3,Be(12),xn(this),$i(this);break e}}if(this.P){h=!0;let it;for(;!this.J&&this.C<F.length;)if(it=ew(this,F),it==hl){Ve==4&&(this.s=4,Be(14),h=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Qf){this.s=4,Be(15),vr(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else vr(this.i,this.l,it,null),ml(this,it);if(Jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||F.length!=0||this.h.h||(this.s=1,Be(16),h=!1),this.o=this.o&&h,!h)vr(this.i,this.l,F,"[Invalid Chunked Response]"),xn(this),$i(this);else if(0<F.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Il(Le),Le.M=!0,Be(11))}}else vr(this.i,this.l,F,null),ml(this,F);Ve==4&&xn(this),this.o&&!this.J&&(Ve==4?Tp(this.j,this):(this.o=!1,po(this)))}else _w(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),xn(this),$i(this)}}}catch{}finally{}};function Jf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ew(a,u){var h=a.C,p=u.indexOf(`
`,h);return p==-1?hl:(h=Number(u.substring(h,p)),isNaN(h)?Qf:(p+=1,p+h>u.length?hl:(u=u.slice(p,p+h),a.C=p+h,u)))}Bt.prototype.cancel=function(){this.J=!0,xn(this)};function po(a){a.S=Date.now()+a.I,Xf(a,a.I)}function Xf(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(v(a.ba,a),u)}function pl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Bt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(Xv(this.i,this.A),this.L!=2&&(Li(),Be(17)),xn(this),this.s=2,$i(this)):Xf(this,this.S-a)};function $i(a){a.j.G==0||a.J||Tp(a.j,a)}function xn(a){pl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Uf(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ml(a,u){try{var h=a.j;if(h.G!=0&&(h.g==a||gl(h.h,a))){if(!a.K&&gl(h.h,a)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Eo(h),wo(h);else break e;wl(h),Be(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Vi(v(h.Za,h),6e3));if(1>=tp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ln(h,11)}else if((a.K||h.g==a)&&Eo(h),!$(u))for(S=h.Da.g.parse(u),u=0;u<S.length;u++){let ne=S[u];if(h.T=ne[0],ne=ne[1],h.G==2)if(ne[0]=="c"){h.K=ne[1],h.ia=ne[2];let Le=ne[3];Le!=null&&(h.la=Le,h.j.info("VER="+h.la));let Ve=ne[4];Ve!=null&&(h.Aa=Ve,h.j.info("SVER="+h.Aa));let Er=ne[5];Er!=null&&typeof Er=="number"&&0<Er&&(p=1.5*Er,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;let it=a.g;if(it){let To=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(To){var C=p.h;C.g||To.indexOf("spdy")==-1&&To.indexOf("quic")==-1&&To.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(_l(C,C.h),C.h=null))}if(p.D){let El=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;El&&(p.ya=El,ce(p.I,p.D,El))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=a;if(p.qa=Pp(p,p.J?p.ia:null,p.W),F.K){np(p.h,F);var ae=F,Re=p.L;Re&&(ae.I=Re),ae.B&&(pl(ae),po(ae)),p.g=F}else Ep(p);0<h.i.length&&Io(h)}else ne[0]!="stop"&&ne[0]!="close"||Ln(h,7);else h.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Ln(h,7):vl(h):ne[0]!="noop"&&h.l&&h.l.ta(ne),h.v=0)}}Li(4)}catch{}}var tw=class{constructor(a,u){this.g=a,this.map=u}};function Zf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ep(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tp(a){return a.h?1:a.g?a.g.size:0}function gl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function _l(a,u){a.g?a.g.add(u):a.h=u}function np(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Zf.prototype.cancel=function(){if(this.i=rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function rp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(let h of a.g.values())u=u.concat(h.D);return u}return V(a.i)}function nw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],h=a.length,p=0;p<h;p++)u.push(a[p]);return u}u=[],h=0;for(p in a)u[h++]=a[p];return u}function rw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var h=0;h<a;h++)u.push(h);return u}u=[],h=0;for(let p in a)u[h++]=p;return u}}}function ip(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var h=rw(a),p=nw(a),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],h&&h[C],a)}var sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iw(a,u){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var p=a[h].indexOf("="),S=null;if(0<=p){var C=a[h].substring(0,p);S=a[h].substring(p+1)}else C=a[h];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function On(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof On){this.h=a.h,mo(this,a.j),this.o=a.o,this.g=a.g,go(this,a.s),this.l=a.l;var u=a.i,h=new qi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),op(this,h),this.m=a.m}else a&&(u=String(a).match(sp))?(this.h=!1,mo(this,u[1]||"",!0),this.o=Fi(u[2]||""),this.g=Fi(u[3]||"",!0),go(this,u[4]),this.l=Fi(u[5]||"",!0),op(this,u[6]||"",!0),this.m=Fi(u[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}On.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ui(u,ap,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ui(u,ap,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Ui(h,h.charAt(0)=="/"?aw:ow,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Ui(h,lw)),a.join("")};function St(a){return new On(a)}function mo(a,u,h){a.j=h?Fi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function go(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function op(a,u,h){u instanceof qi?(a.i=u,uw(a.i,a.h)):(h||(u=Ui(u,cw)),a.i=new qi(u,a.h))}function ce(a,u,h){a.i.set(u,h)}function _o(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ui(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,sw),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ap=/[#\/\?@]/g,ow=/[#\?:]/g,aw=/[#\?]/g,cw=/[#\?@]/g,lw=/#/g;function qi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function jt(a){a.g||(a.g=new Map,a.h=0,a.i&&iw(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=qi.prototype,n.add=function(a,u){jt(this),this.i=null,a=wr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function cp(a,u){jt(a),u=wr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function lp(a,u){return jt(a),u=wr(a,u),a.g.has(u)}n.forEach=function(a,u){jt(this),this.g.forEach(function(h,p){h.forEach(function(S){a.call(u,S,p,this)},this)},this)},n.na=function(){jt(this);let a=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){let S=a[p];for(let C=0;C<S.length;C++)h.push(u[p])}return h},n.V=function(a){jt(this);let u=[];if(typeof a=="string")lp(this,a)&&(u=u.concat(this.g.get(wr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)u=u.concat(a[h])}return u},n.set=function(a,u){return jt(this),this.i=null,a=wr(this,a),lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function up(a,u,h){cp(a,u),0<h.length&&(a.i=null,a.g.set(wr(a,u),V(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];let C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var S=C;F[p]!==""&&(S+="="+encodeURIComponent(String(F[p]))),a.push(S)}}return this.i=a.join("&")};function wr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function uw(a,u){u&&!a.j&&(jt(a),a.i=null,a.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(cp(this,p),up(this,S,h))},a)),a.j=u}function dw(a,u){let h=new Mi;if(c.Image){let p=new Image;p.onload=A(zt,h,"TestLoadImage: loaded",!0,u,p),p.onerror=A(zt,h,"TestLoadImage: error",!1,u,p),p.onabort=A(zt,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(zt,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function hw(a,u){let h=new Mi,p=new AbortController,S=setTimeout(()=>{p.abort(),zt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?zt(h,"TestPingServer: ok",!0,u):zt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),zt(h,"TestPingServer: error",!1,u)})}function zt(a,u,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function fw(){this.g=new Qv}function pw(a,u,h){let p=h||"";try{ip(a,function(S,C){let F=S;d(S)&&(F=al(S)),u.push(p+C+"="+encodeURIComponent(F))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Bi(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Bi,cl),Bi.prototype.g=function(){return new yo(this.l,this.j)},Bi.prototype.i=function(a){return function(){return a}}({});function yo(a,u){Oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(yo,Oe),n=yo.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ji(this):zi(this),this.readyState==3&&dp(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,ji(this))},n.Qa=function(a){this.g&&(this.response=a,ji(this))},n.ga=function(){this.g&&ji(this)};function ji(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zi(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let u="";return O(a,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function yl(a,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=hp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ce(a,u,h))}function fe(a){Oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(fe,Oe);var mw=/^https?$/i,gw=["POST","PUT"];n=fe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dl.g(),this.v=this.o?qf(this.o):qf(dl),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){fp(this,C);return}if(a=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gw,u,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,F]of h)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gp(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){fp(this,C)}};function fp(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,pp(a),vo(a)}function pp(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,qe(this,"complete"),qe(this,"abort"),vo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vo(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mp(this):this.bb())},n.bb=function(){mp(this)};function mp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pt(a)!=4||a.Z()!=2)){if(a.u&&Pt(a)==4)Mf(a.Ea,0,a);else if(qe(a,"readystatechange"),Pt(a)==4){a.h=!1;try{let F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=F===0){var S=String(a.D).match(sp)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!mw.test(S?S.toLowerCase():"")}h=p}if(h)qe(a,"complete"),qe(a,"success");else{a.m=6;try{var C=2<Pt(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",pp(a)}}finally{vo(a)}}}}function vo(a,u){if(a.g){gp(a);let h=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||qe(a,"ready");try{h.onreadystatechange=p}catch{}}}function gp(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Pt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Kv(u)}};function _p(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _w(a){let u={};a=(a.g&&2<=Pt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if($(a[p]))continue;var h=b(a[p]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=u[S]||[];u[S]=C,C.push(h)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function yp(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gi("baseRetryDelayMs",5e3,a),this.cb=Gi("retryDelaySeedMs",1e4,a),this.Wa=Gi("forwardChannelMaxRetries",2,a),this.wa=Gi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zf(a&&a.concurrentRequestLimit),this.Da=new fw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yp.prototype,n.la=8,n.G=1,n.connect=function(a,u,h,p){Be(0),this.W=a,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Pp(this,null,this.W),Io(this)};function vl(a){if(vp(a),a.G==3){var u=a.U++,h=St(a.I);if(ce(h,"SID",a.K),ce(h,"RID",u),ce(h,"TYPE","terminate"),Hi(a,h),u=new Bt(a,a.j,u),u.L=2,u.v=_o(St(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Rp(u.j,null),u.g.ea(u.v)),u.F=Date.now(),po(u)}Sp(a)}function wo(a){a.g&&(Il(a),a.g.cancel(),a.g=null)}function vp(a){wo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Io(a){if(!ep(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ci||Df(),ki||(Ci(),ki=!0),Xc.add(u,a),a.B=0}}function yw(a,u){return tp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(v(a.Ga,a,u),Ap(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let S=new Bt(this,this.j,a),C=this.o;if(this.S&&(C?(C=g(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Ip(this,S,u),h=St(this.I),ce(h,"RID",a),ce(h,"CVER",22),this.D&&ce(h,"X-HTTP-Session-Id",this.D),Hi(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(hp(C)))+"&"+u:this.m&&yl(h,this.m,C)),_l(this.h,S),this.Ua&&ce(h,"TYPE","init"),this.P?(ce(h,"$req",u),ce(h,"SID","null"),S.T=!0,fl(S,h,null)):fl(S,h,u),this.G=2}}else this.G==3&&(a?wp(this,a):this.i.length==0||ep(this.h)||wp(this))};function wp(a,u){var h;u?h=u.l:h=a.U++;let p=St(a.I);ce(p,"SID",a.K),ce(p,"RID",h),ce(p,"AID",a.T),Hi(a,p),a.m&&a.o&&yl(p,a.m,a.o),h=new Bt(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ip(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_l(a.h,h),fl(h,p,u)}function Hi(a,u){a.H&&O(a.H,function(h,p){ce(u,p,h)}),a.l&&ip({},function(h,p){ce(u,p,h)})}function Ip(a,u,h){h=Math.min(a.i.length,h);var p=a.l?v(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){let F=["count="+h];C==-1?0<h?(C=S[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let ae=!0;for(let Re=0;Re<h;Re++){let ne=S[Re].g,Le=S[Re].map;if(ne-=C,0>ne)C=Math.max(0,S[Re].g-100),ae=!1;else try{pw(Le,F,"req"+ne+"_")}catch{p&&p(Le)}}if(ae){p=F.join("&");break e}}}return a=a.i.splice(0,h),u.D=a,p}function Ep(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ci||Df(),ki||(Ci(),ki=!0),Xc.add(u,a),a.v=0}}function wl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(v(a.Fa,a),Ap(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,bp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),wo(this),bp(this))};function Il(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function bp(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=St(a.qa);ce(u,"RID","rpc"),ce(u,"SID",a.K),ce(u,"AID",a.T),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(u,"TO",a.ja),ce(u,"TYPE","xmlhttp"),Hi(a,u),a.m&&a.o&&yl(u,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=_o(St(u)),h.m=null,h.P=!0,Yf(h,a)}n.Za=function(){this.C!=null&&(this.C=null,wo(this),wl(this),Be(19))};function Eo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Tp(a,u){var h=null;if(a.g==u){Eo(a),Il(a),a.g=null;var p=2}else if(gl(a.h,u))h=u.D,np(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;p=uo(),qe(p,new Hf(p,h)),Io(a)}else Ep(a);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&yw(a,u)||p==2&&wl(a)))switch(h&&0<h.length&&(u=a.h,u.i=u.i.concat(h)),S){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Ap(a,u){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*u}function Ln(a,u){if(a.j.info("Error code "+u),u==2){var h=v(a.fb,a),p=a.Xa;let S=!p;p=new On(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mo(p,"https"),_o(p),S?dw(p.toString(),h):hw(p.toString(),h)}else Be(2);a.G=0,a.l&&a.l.sa(u),Sp(a),vp(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Sp(a){if(a.G=0,a.ka=[],a.l){let u=rp(a.h);(u.length!=0||a.i.length!=0)&&(L(a.ka,u),L(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function Pp(a,u,h){var p=h instanceof On?St(h):new On(h);if(p.g!="")u&&(p.g=u+"."+p.g),go(p,p.s);else{var S=c.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new On(null);p&&mo(C,p),u&&(C.g=u),S&&go(C,S),h&&(C.l=h),p=C}return h=a.D,u=a.ya,h&&u&&ce(p,h,u),ce(p,"VER",a.la),Hi(a,p),p}function Rp(a,u,h){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new fe(new Bi({eb:h})):new fe(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cp(){}n=Cp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bo(){}bo.prototype.g=function(a,u){return new Ke(a,u)};function Ke(a,u){Oe.call(this),this.g=new yp(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Ir(this)}N(Ke,Oe),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){vl(this.g)},Ke.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=al(a),a=h);u.i.push(new tw(u.Ya++,a)),u.G==3&&Io(u)},Ke.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,Ke.aa.N.call(this)};function kp(a){ll.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(let h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}N(kp,ll);function Dp(){ul.call(this),this.status=1}N(Dp,ul);function Ir(a){this.g=a}N(Ir,Cp),Ir.prototype.ua=function(){qe(this.g,"a")},Ir.prototype.ta=function(a){qe(this.g,new kp(a))},Ir.prototype.sa=function(a){qe(this.g,new Dp)},Ir.prototype.ra=function(){qe(this.g,"b")},bo.prototype.createWebChannel=bo.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,ku=xt.createWebChannelTransport=function(){return new bo},Cu=xt.getStatEventTarget=function(){return uo()},Ru=xt.Event=Nn,ca=xt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,us=xt.ErrorCode=ho,Wf.COMPLETE="complete",Pu=xt.EventType=Wf,Bf.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,Nr=xt.WebChannel=Bf,X1=xt.FetchXmlHttpFactory=Bi,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,Su=xt.XhrIo=fe}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});var Wm="@firebase/firestore",Km="4.8.0";var Se=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");var Ii="11.10.0";var or=new Ht("@firebase/firestore");function Fr(){return or.logLevel}function x(n,...e){if(or.logLevel<=Z.DEBUG){let t=e.map(Mh);or.debug(`Firestore (${Ii}): ${n}`,...t)}}function me(n,...e){if(or.logLevel<=Z.ERROR){let t=e.map(Mh);or.error(`Firestore (${Ii}): ${n}`,...t)}}function un(n,...e){if(or.logLevel<=Z.WARN){let t=e.map(Mh);or.warn(`Firestore (${Ii}): ${n}`,...t)}}function Mh(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,c_(n,r,t)}function c_(n,e,t){let r=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw me(r),new Error(r)}function H(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||c_(e,i,r)}function G(n,e){return n}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},q=class extends Qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var wt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var $u=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Fu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}};var Uu=class{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new $u(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string",2055,{h:e}),new Se(e)}},qu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Bu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new qu(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Ea=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ju=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ye(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){H(this.o===void 0,3512);let r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.m;return this.m=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ea(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ea(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Z1(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function l_(){return new TextEncoder}var Ss=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Z1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function Q(n,e){return n<e?-1:n>e?1:0}function zu(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Q(r,i);{let s=l_(),o=eI(s.encode(Qm(n,t)),s.encode(Qm(e,t)));return o!==0?o:Q(r,i)}}t+=r>65535?2:1}return Q(n.length,e.length)}function Qm(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function eI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function Qr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function u_(n){return n+"\0"}var Ym="__name__",ba=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Q(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):zu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}},ie=class n extends ba{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},tI=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Te=class n extends ba{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return tI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ym}static keyField(){return new n([Ym])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var B=class n{constructor(e){this.path=e}static fromPath(e){return new n(ie.fromString(e))}static fromName(e){return new n(ie.fromString(e).popFirst(5))}static empty(){return new n(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ie(e.slice()))}};function d_(n,e,t){if(!t)throw new q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nI(n,e,t,r){if(e===!0&&r===!0)throw new q(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jm(n){if(!B.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xm(n){if(B.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function h_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $h(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=$h(n);throw new q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ve(n,e){let t={typeString:n};return e&&(t.value=e),t}function Gs(n,e){if(!h_(n))throw new q(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new q(D.INVALID_ARGUMENT,t);return!0}var Zm=-62135596800,eg=1e6,de=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*eg);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zm)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eg}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gs(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Zm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:ve("string",de._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};var K=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new de(0,0))}static max(){return new n(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Yr=-1,Jr=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function Gu(n){return n.fields.find(e=>e.kind===2)}function Hn(n){return n.fields.filter(e=>e.kind!==2)}Jr.UNKNOWN_ID=-1;var Gr=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Ps=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,rt.min())}};function f_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new rt(i,B.empty(),e)}function p_(n){return new rt(n.readTime,n.key,Yr)}var rt=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(K.min(),B.empty(),Yr)}static max(){return new n(K.max(),B.empty(),Yr)}};function Fh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}var m_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ta=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function En(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==m_)throw n;x("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,o=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(f=>{o[d]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var Je="SimpleDb",Aa=class n{static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new tr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new wt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new tr(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{let i=Uh(r.target.error);this.S.reject(new tr(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(x(Je,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new Wu(t)}},Xr=class n{static delete(e){return x(Je,"Removing database:",e),Kn(Pl().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Po())return!1;if(n.F())return!0;let e=be(),t=n.M(e),r=0<t&&t<10,i=g_(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,n.M(be())===12.2&&me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(x(Je,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{r(new tr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new q(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new q(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new tr(e,o))},i.onupgradeneeded=s=>{x(Je,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{x(Je,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{let r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(un('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.k(e);let c=Aa.open(this.db,e,s?"readonly":"readwrite",r),l=i(c).next(d=>(c.v(),d)).catch(d=>(c.abort(d),P.reject(d))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){let l=c,d=l.name!=="FirebaseError"&&o<3;if(x(Je,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}};function g_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var Hu=class{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Kn(this.$.delete())}},tr=class extends q{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function bn(n){return n.name==="IndexedDbTransactionError"}var Wu=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x(Je,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(x(Je,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Kn(r)}add(e){return x(Je,"ADD",this.store.name,e,e),Kn(this.store.add(e))}get(e){return Kn(this.store.get(e)).next(t=>(t===void 0&&(t=null),x(Je,"GET",this.store.name,e,t),t))}delete(e){return x(Je,"DELETE",this.store.name,e),Kn(this.store.delete(e))}count(){return x(Je,"COUNT",this.store.name),Kn(this.store.count())}j(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new P((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{let s=this.cursor(r),o=[];return this.J(s,(c,l)=>{o.push(l)}).next(()=>o)}}H(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new P((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){x(Je,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Z=!1;let i=this.cursor(r);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.J(i,t)}ee(e){let t=this.cursor({});return new P((r,i)=>{t.onerror=s=>{let o=Uh(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}J(e,t){let r=[];return new P((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let l=new Hu(c),d=t(c.primaryKey,c.value,l);if(d instanceof P){let f=d.catch(m=>(l.done(),P.reject(m)));r.push(f)}l.isDone?i():l.W===null?c.continue():c.continue(l.W)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function Kn(n){return new P((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Uh(r.target.error);t(i)}})}var tg=!1;function Uh(n){let e=Xr.M(be());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tg||(tg=!0,setTimeout(()=>{throw r},0)),r}}return n}var _s="IndexBackfiller",Ku=class{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){x(_s,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let t=await this.te.re();x(_s,`Documents written: ${t}`)}catch(t){bn(t)?x(_s,"Ignoring IndexedDB error during index backfill: ",t):await En(t)}await this.ne(6e4)})}},Qu=class{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){let r=new Set,i=t,s=!0;return P.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x(_s,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>(x(_s,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((i,s)=>{let o=p_(s);Fh(o,r)>0&&(r=o)}),new rt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var $e=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};$e.ue=-1;var nr=-1;function Tc(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function __(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Sa="";function Fe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ng(e)),e=rI(n.get(t),e);return ng(e)}function rI(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case Sa:t+="";break;default:t+=s}}return t}function ng(n){return n+Sa+""}function yt(n){let e=n.length;if(H(e>=2,64408,{path:n}),e===2)return H(n.charAt(0)===Sa&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let o=n.indexOf(Sa,s);switch((o<0||o>t)&&j(50515,{path:n}),n.charAt(o+1)){case"":let c=n.substring(s,o),l;i.length===0?l=c:(i+=c,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:j(61167,{path:n})}s=o+2}return new ie(r)}var Wn="remoteDocuments",Hs="owner",xr="owner",Cs="mutationQueues",iI="userId",ot="mutations",rg="batchId",Xn="userMutationsIndex",ig=["userId","batchId"];function pa(n,e){return[n,Fe(e)]}function y_(n,e,t){return[n,Fe(e),t]}var sI={},Zr="documentMutations",Pa="remoteDocumentsV14",oI=["prefixPath","collectionGroup","readTime","documentId"],ma="documentKeyIndex",aI=["prefixPath","collectionGroup","documentId"],v_="collectionGroupIndex",cI=["collectionGroup","readTime","prefixPath","documentId"],ks="remoteDocumentGlobal",Yu="remoteDocumentGlobalKey",ei="targets",w_="queryTargetsIndex",lI=["canonicalId","targetId"],ti="targetDocuments",uI=["targetId","path"],qh="documentTargetsIndex",dI=["path","targetId"],Ra="targetGlobalKey",rr="targetGlobal",Ds="collectionParents",hI=["collectionId","parent"],ni="clientMetadata",fI="clientId",Ac="bundles",pI="bundleId",Sc="namedQueries",mI="name",Bh="indexConfiguration",gI="indexId",Ju="collectionGroupIndex",_I="collectionGroup",ys="indexState",yI=["indexId","uid"],I_="sequenceNumberIndex",vI=["uid","sequenceNumber"],vs="indexEntries",wI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],E_="documentKeyIndex",II=["indexId","uid","orderedDocumentKey"],Pc="documentOverlays",EI=["userId","collectionPath","documentId"],Xu="collectionPathOverlayIndex",bI=["userId","collectionPath","largestBatchId"],b_="collectionGroupOverlayIndex",TI=["userId","collectionGroup","largestBatchId"],jh="globals",AI="name",T_=[Cs,ot,Zr,Wn,ei,Hs,rr,ti,ni,ks,Ds,Ac,Sc],SI=[...T_,Pc],A_=[Cs,ot,Zr,Pa,ei,Hs,rr,ti,ni,ks,Ds,Ac,Sc,Pc],S_=A_,zh=[...S_,Bh,ys,vs],PI=zh,P_=[...zh,jh],RI=P_;var Ns=class extends Ta{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}};function Ae(n,e){let t=G(n);return Xr.N(t.ce,e)}function sg(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function R_(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var le=class n{constructor(e,t){this.comparator=e,this.root=t||It.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}},zr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},It=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}};It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new It(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var oe=class n{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(e){return new Ca(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Ca=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function Or(n){return n.hasNext()?n.getNext():void 0}var Xe=class n{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new n([])}unionWith(e){let t=new oe(Te.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var ka=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var we=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ka("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};we.EMPTY_BYTE_STRING=new we("");var CI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(n){if(H(!!n,39018),typeof n=="string"){let e=0,t=CI.exec(n);if(H(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}var C_="server_timestamp",k_="__type__",D_="__previous_value__",N_="__local_write_time__";function Gh(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[k_])===null||t===void 0?void 0:t.stringValue)===C_}function Rc(n){let e=n.mapValue.fields[D_];return Gh(e)?Rc(e):e}function xs(n){let e=Lt(n.mapValue.fields[N_].timestampValue);return new de(e.seconds,e.nanos)}var Zu=class{constructor(e,t,r,i,s,o,c,l,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}},Da="(default)",ri=class n{constructor(e,t){this.projectId=e,this.database=t||Da}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===Da}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Hh="__type__",x_="__max__",rn={mapValue:{fields:{__type__:{stringValue:x_}}}},Wh="__vector__",ii="value",ga={nullValue:"NULL_VALUE"};function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gh(n)?4:O_(n)?9007199254740991:Cc(n)?10:11:j(28295,{value:n})}function Et(n,e){if(n===e)return!0;let t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xs(n).isEqual(xs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Lt(i.timestampValue),c=Lt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Vt(i.bytesValue).isEqual(Vt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=ue(i.doubleValue),c=ue(s.doubleValue);return o===c?Rs(o)===Rs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Qr(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(sg(o)!==sg(c))return!1;for(let l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Et(o[l],c[l])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function Os(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function hn(n,e){if(n===e)return 0;let t=dn(n),r=dn(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(s,o){let c=ue(s.integerValue||s.doubleValue),l=ue(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return og(n.timestampValue,e.timestampValue);case 4:return og(xs(n),xs(e));case 5:return zu(n.stringValue,e.stringValue);case 6:return function(s,o){let c=Vt(s),l=Vt(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){let f=Q(c[d],l[d]);if(f!==0)return f}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let c=Q(ue(s.latitude),ue(o.latitude));return c!==0?c:Q(ue(s.longitude),ue(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ag(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,d,f;let m=s.fields||{},v=o.fields||{},A=(c=m[ii])===null||c===void 0?void 0:c.arrayValue,N=(l=v[ii])===null||l===void 0?void 0:l.arrayValue,V=Q(((d=A?.values)===null||d===void 0?void 0:d.length)||0,((f=N?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:ag(A,N)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===rn.mapValue&&o===rn.mapValue)return 0;if(s===rn.mapValue)return 1;if(o===rn.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=o.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){let v=zu(l[m],f[m]);if(v!==0)return v;let A=hn(c[l[m]],d[f[m]]);if(A!==0)return A}return Q(l.length,f.length)}(n.mapValue,e.mapValue);default:throw j(23264,{le:t})}}function og(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);let t=Lt(n),r=Lt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function ag(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=hn(t[i],r[i]);if(s)return s}return Q(t.length,r.length)}function si(n){return ed(n)}function ed(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Lt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=ed(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${ed(t.fields[o])}`;return i+"}"}(n.mapValue):j(61005,{value:n})}function _a(n){switch(dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Rc(n);return e?16+_a(e):16;case 5:return 2*n.stringValue.length;case 6:return Vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+_a(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Tn(r.fields,(s,o)=>{i+=s.length+_a(o)}),i}(n.mapValue);default:throw j(13486,{value:n})}}function Kh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function td(n){return!!n&&"integerValue"in n}function Ls(n){return!!n&&"arrayValue"in n}function cg(n){return!!n&&"nullValue"in n}function lg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ya(n){return!!n&&"mapValue"in n}function Cc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hh])===null||t===void 0?void 0:t.stringValue)===Wh}function ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ws(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}function O_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===x_}var L_={mapValue:{fields:{[Hh]:{stringValue:Wh},[ii]:{arrayValue:{}}}}};function kI(n){return"nullValue"in n?ga:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Kh(ri.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Cc(n)?L_:{mapValue:{}}:j(35942,{value:n})}function DI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Kh(ri.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?L_:"mapValue"in n?Cc(n)?{mapValue:{}}:rn:j(61959,{value:n})}function ug(n,e){let t=hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function dg(n,e){let t=hn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var je=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ya(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(t)}setAll(e){let t=Te.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=ws(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());ya(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(ws(this.value))}};function V_(n){let e=[];return Tn(n.fields,(t,r)=>{let i=new Te([t]);if(ya(r)){let s=V_(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new Xe(e)}var ke=class n{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,K.min(),K.min(),K.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,K.min(),K.min(),je.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,K.min(),K.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var fn=class{constructor(e,t){this.position=e,this.inclusive=t}};function hg(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],o=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=hn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}var oi=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function NI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Na=class{},ee=class n extends Na{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new id(e,t,r):t==="array-contains"?new ad(e,r):t==="in"?new xa(e,r):t==="not-in"?new cd(e,r):t==="array-contains-any"?new ld(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sd(e,r):new od(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hn(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},se=class n extends Na{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return ai(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function ai(n){return n.op==="and"}function nd(n){return n.op==="or"}function Qh(n){return M_(n)&&ai(n)}function M_(n){for(let e of n.filters)if(e instanceof se)return!1;return!0}function rd(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+si(n.value);if(Qh(n))return n.filters.map(e=>rd(e)).join(",");{let e=n.filters.map(t=>rd(t)).join(",");return`${n.op}(${e})`}}function $_(n,e){return n instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.field.isEqual(i.field)&&Et(r.value,i.value)}(n,e):n instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&$_(o,i.filters[c]),!0):!1}(n,e):void j(19439)}function F_(n,e){let t=n.filters.concat(e);return se.create(t,n.op)}function U_(n){return n instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${si(t.value)}`}(n):n instanceof se?function(t){return t.op.toString()+" {"+t.getFilters().map(U_).join(" ,")+"}"}(n):"Filter"}var id=class extends ee{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.matchesComparison(t)}},sd=class extends ee{constructor(e,t){super(e,"in",t),this.keys=q_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},od=class extends ee{constructor(e,t){super(e,"not-in",t),this.keys=q_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function q_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}var ad=class extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Ls(t)&&Os(t.arrayValue,this.value)}},xa=class extends ee{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Os(this.value.arrayValue,t)}},cd=class extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Os(this.value.arrayValue,t)}},ld=class extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Ls(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Os(this.value.arrayValue,r))}};var ud=class{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}};function dd(n,e=null,t=[],r=[],i=null,s=null,o=null){return new ud(n,e,t,r,i,s,o)}function ar(n){let e=G(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>rd(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>si(r)).join(",")),e.Pe=t}return e.Pe}function Ws(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fg(n.startAt,e.startAt)&&fg(n.endAt,e.endAt)}function Oa(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function La(n,e){return n.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function pg(n,e,t){let r=ga,i=!0;for(let s of La(n,e)){let o=ga,c=!0;switch(s.op){case"<":case"<=":o=kI(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=ga}ug({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];ug({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function mg(n,e,t){let r=rn,i=!0;for(let s of La(n,e)){let o=rn,c=!0;switch(s.op){case">=":case">":o=DI(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=rn}dg({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let o=t.position[s];dg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}var ci=class{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function B_(n,e,t,r,i,s,o,c){return new ci(n,e,t,r,i,s,o,c)}function kc(n){return new ci(n)}function gg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xI(n){return n.collectionGroup!==null}function Is(n){let e=G(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new oe(Te.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new oi(s,r))}),t.has(Te.keyField().canonicalString())||e.Te.push(new oi(Te.keyField(),r))}return e.Te}function tt(n){let e=G(n);return e.Ie||(e.Ie=OI(e,Is(n))),e.Ie}function OI(n,e){if(n.limitType==="F")return dd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new oi(i.field,s)});let t=n.endAt?new fn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fn(n.startAt.position,n.startAt.inclusive):null;return dd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hd(n,e,t){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dc(n,e){return Ws(tt(n),tt(e))&&n.limitType===e.limitType}function j_(n){return`${ar(tt(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>U_(i)).join(", ")}]`),Tc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>si(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>si(i)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function Ks(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Is(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){let d=hg(o,c,l);return o.inclusive?d<=0:d<0}(r.startAt,Is(r),i)||r.endAt&&!function(o,c,l){let d=hg(o,c,l);return o.inclusive?d>=0:d>0}(r.endAt,Is(r),i))}(n,e)}function z_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function G_(n){return(e,t)=>{let r=!1;for(let i of Is(n)){let s=LI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function LI(n,e,t){let r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,o,c){let l=o.data.field(s),d=c.data.field(s);return l!==null&&d!==null?hn(l,d):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}var at=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return R_(this.inner)}size(){return this.innerSize}};var VI=new le(B.comparator);function Ze(){return VI}var H_=new le(B.comparator);function ms(...n){let e=H_;for(let t of n)e=e.insert(t.key,t);return e}function W_(n){let e=H_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vt(){return Es()}function K_(){return Es()}function Es(){return new at(n=>n.toString(),(n,e)=>n.isEqual(e))}var MI=new le(B.comparator),$I=new oe(B.comparator);function X(...n){let e=$I;for(let t of n)e=e.add(t);return e}var FI=new oe(Q);function Yh(){return FI}function Jh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Q_(n){return{integerValue:""+n}}function UI(n,e){return __(e)?Q_(e):Jh(n,e)}var li=class{constructor(){this._=void 0}};function qI(n,e,t){return n instanceof pn?function(i,s){let o={fields:{[k_]:{stringValue:C_},[N_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gh(s)&&(s=Rc(s)),s&&(o.fields[D_]=s),{mapValue:o}}(t,e):n instanceof mn?J_(n,e):n instanceof gn?X_(n,e):function(i,s){let o=Y_(i,s),c=_g(o)+_g(i.Ee);return td(o)&&td(i.Ee)?Q_(c):Jh(i.serializer,c)}(n,e)}function BI(n,e,t){return n instanceof mn?J_(n,e):n instanceof gn?X_(n,e):t}function Y_(n,e){return n instanceof cr?function(r){return td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var pn=class extends li{},mn=class extends li{constructor(e){super(),this.elements=e}};function J_(n,e){let t=Z_(e);for(let r of n.elements)t.some(i=>Et(i,r))||t.push(r);return{arrayValue:{values:t}}}var gn=class extends li{constructor(e){super(),this.elements=e}};function X_(n,e){let t=Z_(e);for(let r of n.elements)t=t.filter(i=>!Et(i,r));return{arrayValue:{values:t}}}var cr=class extends li{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function _g(n){return ue(n.integerValue||n.doubleValue)}function Z_(n){return Ls(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Va=class{constructor(e,t){this.field=e,this.transform=t}};function jI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof mn&&i instanceof mn||r instanceof gn&&i instanceof gn?Qr(r.elements,i.elements,Et):r instanceof cr&&i instanceof cr?Et(r.Ee,i.Ee):r instanceof pn&&i instanceof pn}(n.transform,e.transform)}var fd=class{constructor(e,t){this.version=e,this.transformResults=t}},et=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function va(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var ui=class{};function ey(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new di(n.key,et.none()):new _n(n.key,n.data,et.none());{let t=n.data,r=je.empty(),i=new oe(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ct(n.key,r,new Xe(i.toArray()),et.none())}}function zI(n,e,t){n instanceof _n?function(i,s,o){let c=i.value.clone(),l=vg(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ct?function(i,s,o){if(!va(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=vg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(ty(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function bs(n,e,t,r){return n instanceof _n?function(s,o,c,l){if(!va(s.precondition,o))return c;let d=s.value.clone(),f=wg(s.fieldTransforms,l,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof ct?function(s,o,c,l){if(!va(s.precondition,o))return c;let d=wg(s.fieldTransforms,l,o),f=o.data;return f.setAll(ty(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return va(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function GI(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Y_(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function yg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qr(r,i,(s,o)=>jI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var _n=class extends ui{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},ct=class extends ui{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function ty(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function vg(n,e,t){let r=new Map;H(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,BI(o,c,t[i]))}return r}function wg(n,e,t){let r=new Map;for(let i of n){let s=i.transform,o=t.data.field(i.field);r.set(i.field,qI(s,o,e))}return r}var di=class extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Ma=class extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Vs=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&zI(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=bs(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=bs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=K_();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let l=ey(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,(t,r)=>yg(t,r))&&Qr(this.baseMutations,e.baseMutations,(t,r)=>yg(t,r))}},pd=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){H(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return MI}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n(e,t,r,i)}};var Ms=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var md=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var _e,te;function HI(n){switch(n){case D.OK:return j(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function ny(n){if(n===void 0)return me("GRPC error has no .code"),D.UNKNOWN;switch(n){case _e.OK:return D.OK;case _e.CANCELLED:return D.CANCELLED;case _e.UNKNOWN:return D.UNKNOWN;case _e.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case _e.INTERNAL:return D.INTERNAL;case _e.UNAVAILABLE:return D.UNAVAILABLE;case _e.UNAUTHENTICATED:return D.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case _e.NOT_FOUND:return D.NOT_FOUND;case _e.ALREADY_EXISTS:return D.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return D.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case _e.ABORTED:return D.ABORTED;case _e.OUT_OF_RANGE:return D.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return D.UNIMPLEMENTED;case _e.DATA_LOSS:return D.DATA_LOSS;default:return j(39323,{code:n})}}(te=_e||(_e={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";var Ig=null;var WI=new Nt([4294967295,4294967295],0);function Eg(n){let e=l_().encode(n),t=new Au;return t.update(e),new Uint8Array(t.digest())}function bg(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nt([t,r],0),new Nt([i,s],0)]}var gd=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zn(`Invalid padding: ${t}`);if(r<0)throw new Zn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Nt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Nt.fromNumber(r)));return i.compare(WI)===1&&(i=new Nt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Eg(e),[r,i]=bg(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new n(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;let t=Eg(e),[r,i]=bg(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(r,i,s);this.we(o)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Zn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var $s=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(K.min(),i,new le(Q),Ze(),X())}},Fs=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,X(),X(),X())}};var Hr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},$a=class{constructor(e,t){this.targetId=e,this.De=t}},Fa=class{constructor(e,t,r=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ua=class{constructor(){this.ve=0,this.Ce=Tg(),this.Fe=we.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=X(),t=X(),r=X();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j(38017,{changeType:s})}}),new Fs(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Tg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},_d=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ze(),this.je=la(),this.Je=la(),this.He=new le(Q)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(Oa(s))if(r===0){let o=new B(s.path);this.Xe(t,o,ke.newNoDocument(o,K.min()))}else H(r===1,20013,{expectedCount:r});else{let o=this.ot(t);if(o!==r){let c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Ig?.ct(function(f,m,v,A,N){var V,L,z,$,M,Y;let k={localCacheCount:f,existenceFilterCount:m.count,databaseId:v.database,projectId:v.projectId},O=m.unchangedNames;return O&&(k.bloomFilter={applied:N===0,hashCount:(V=O?.hashCount)!==null&&V!==void 0?V:0,bitmapLength:($=(z=(L=O?.bits)===null||L===void 0?void 0:L.bitmap)===null||z===void 0?void 0:z.length)!==null&&$!==void 0?$:0,padding:(Y=(M=O?.bits)===null||M===void 0?void 0:M.padding)!==null&&Y!==void 0?Y:0,mightContain:w=>{var g;return(g=A?.mightContain(w))!==null&&g!==void 0&&g}}),k}(o,e.De,this.We.lt(),c,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Vt(r).toUint8Array()}catch(l){if(l instanceof ka)return un("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new gd(o,i,s)}catch(l){return un(l instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,o)=>{let c=this.st(o);if(c){if(s.current&&Oa(c.target)){let l=new B(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,ke.newNoDocument(l,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=X();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));let i=new $s(e,t,this.He,this.ze,r);return this.ze=Ze(),this.je=la(),this.Je=la(),this.He=new le(Q),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ua,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new oe(Q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new oe(Q),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ua),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function la(){return new le(B.comparator)}function Tg(){return new le(B.comparator)}var KI={asc:"ASCENDING",desc:"DESCENDING"},QI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YI={and:"AND",or:"OR"},yd=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function vd(n,e){return n.useProto3Json||Tc(e)?e:{value:e}}function hi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ry(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JI(n,e){return hi(n,e.toTimestamp())}function ze(n){return H(!!n,49232),K.fromTimestamp(function(t){let r=Lt(t);return new de(r.seconds,r.nanos)}(n))}function Xh(n,e){return wd(n,e).canonicalString()}function wd(n,e){let t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function iy(n){let e=ie.fromString(n);return H(fy(e),10190,{key:e.toString()}),e}function qa(n,e){return Xh(n.databaseId,e.path)}function ir(n,e){let t=iy(e);if(t.get(1)!==n.databaseId.projectId)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(ay(t))}function sy(n,e){return Xh(n.databaseId,e)}function oy(n){let e=iy(n);return e.length===4?ie.emptyPath():ay(e)}function Id(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ay(n){return H(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ag(n,e,t){return{name:qa(n,e),fields:t.value.mapValue.fields}}function XI(n,e,t){let r=ir(n,e.name),i=ze(e.updateTime),s=e.createTime?ze(e.createTime):K.min(),o=new je({mapValue:{fields:e.fields}}),c=ke.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function ZI(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(H(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){let f=d.code===void 0?D.UNKNOWN:ny(d.code);return new q(f,d.message||"")}(o);t=new Fa(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=ir(n,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):K.min(),c=new je({mapValue:{fields:r.document.fields}}),l=ke.newFoundDocument(i,s,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Hr(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=ir(n,r.document),s=r.readTime?ze(r.readTime):K.min(),o=ke.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Hr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=ir(n,r.document),s=r.removedTargetIds||[];t=new Hr([],s,i,null)}else{if(!("filter"in e))return j(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new md(i,s),c=r.targetId;t=new $a(c,o)}}return t}function Ba(n,e){let t;if(e instanceof _n)t={update:Ag(n,e.key,e.value)};else if(e instanceof di)t={delete:qa(n,e.key)};else if(e instanceof ct)t={update:Ag(n,e.key,e.data),updateMask:sE(e.fieldMask)};else{if(!(e instanceof Ma))return j(16599,{Rt:e.type});t={verify:qa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let c=o.transform;if(c instanceof pn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cr)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw j(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j(27497)}(n,e.precondition)),t}function Ed(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?et.updateTime(ze(s.updateTime)):s.exists!==void 0?et.exists(s.exists):et.none()}(e.currentDocument):et.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)H(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new pn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];l=new mn(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];l=new gn(f)}else"increment"in c?l=new cr(o,c.increment):j(16584,{proto:c});let d=Te.fromServerFormat(c.fieldPath);return new Va(d,l)}(n,i)):[];if(e.update){e.update.name;let i=ir(n,e.update.name),s=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(l){let d=l.fieldPaths||[];return new Xe(d.map(f=>Te.fromServerFormat(f)))}(e.updateMask);return new ct(i,s,o,t,r)}return new _n(i,s,t,r)}if(e.delete){let i=ir(n,e.delete);return new di(i,t)}if(e.verify){let i=ir(n,e.verify);return new Ma(i,t)}return j(1463,{proto:e})}function eE(n,e){return n&&n.length>0?(H(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(K.min())&&(o=ze(s)),new fd(o,i.transformResults||[])}(t,e))):[]}function cy(n,e){return{documents:[sy(n,e.path)]}}function ly(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sy(n,i);let s=function(d){if(d.length!==0)return hy(se.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:qr(v.field),direction:nE(v.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=vd(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function uy(n){let e=oy(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){H(r===1,65062);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let v=dy(m);return v instanceof se&&Qh(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(v=>function(N){return new oi(Br(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,Tc(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(m){let v=!!m.before,A=m.values||[];return new fn(A,v)}(t.startAt));let d=null;return t.endAt&&(d=function(m){let v=!m.before,A=m.values||[];return new fn(A,v)}(t.endAt)),B_(e,i,o,s,c,"F",l,d)}function tE(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dy(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=Br(t.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=Br(t.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=Br(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=Br(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ee.create(Br(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return se.create(t.compositeFilter.filters.map(r=>dy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function nE(n){return KI[n]}function rE(n){return QI[n]}function iE(n){return YI[n]}function qr(n){return{fieldPath:n.canonicalString()}}function Br(n){return Te.fromServerFormat(n.fieldPath)}function hy(n){return n instanceof ee?function(t){if(t.op==="=="){if(lg(t.value))return{unaryFilter:{field:qr(t.field),op:"IS_NAN"}};if(cg(t.value))return{unaryFilter:{field:qr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lg(t.value))return{unaryFilter:{field:qr(t.field),op:"IS_NOT_NAN"}};if(cg(t.value))return{unaryFilter:{field:qr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(t.field),op:rE(t.op),value:t.value}}}(n):n instanceof se?function(t){let r=t.getFilters().map(i=>hy(i));return r.length===1?r[0]:{compositeFilter:{op:iE(t.op),filters:r}}}(n):j(54877,{filter:n})}function sE(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var fi=class n{constructor(e,t,r,i,s=K.min(),o=K.min(),c=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var ja=class{constructor(e){this.gt=e}};function oE(n,e){let t;if(e.document)t=XI(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=B.fromSegments(e.noDocument.path),i=ur(e.noDocument.readTime);t=ke.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return j(56709);{let r=B.fromSegments(e.unknownDocument.path),i=ur(e.unknownDocument.version);t=ke.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new de(i[0],i[1]);return K.fromTimestamp(s)}(e.readTime)),t}function Sg(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:za(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:qa(s,o.key),fields:o.data.value.mapValue.fields,updateTime:hi(s,o.version.toTimestamp()),createTime:hi(s,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:lr(e.version)};else{if(!e.isUnknownDocument())return j(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:lr(e.version)}}return r}function za(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function lr(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ur(n){let e=new de(n.seconds,n.nanoseconds);return K.fromTimestamp(e)}function Qn(n,e){let t=(e.baseMutations||[]).map(s=>Ed(n.gt,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Ed(n.gt,s)),i=de.fromMillis(e.localWriteTimeMs);return new Vs(e.batchId,i,t,r)}function gs(n){let e=ur(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ur(n.lastLimboFreeSnapshotVersion):K.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){let o=s.documents.length;return H(o===1,1966,{count:o}),tt(kc(oy(s.documents[0])))}(n.query):function(s){return tt(uy(s))}(n.query),new fi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,we.fromBase64String(n.resumeToken))}function py(n,e){let t=lr(e.snapshotVersion),r=lr(e.lastLimboFreeSnapshotVersion),i;i=Oa(e.target)?cy(n.gt,e.target):ly(n.gt,e.target).Vt;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ar(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function my(n){let e=uy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hd(e,e.limit,"L"):e}function Du(n,e){return new Ms(e.largestBatchId,Ed(n.gt,e.overlayMutation))}function Pg(n,e){let t=e.path.lastSegment();return[n,Fe(e.path.popLast()),t]}function Rg(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:lr(r.readTime),documentKey:Fe(r.documentKey.path),largestBatchId:r.largestBatchId}}var bd=class{getBundleMetadata(e,t){return Cg(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ur(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Cg(e).put(function(i){return{bundleId:i.id,createTime:lr(ze(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return kg(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:my(s.bundledQuery),readTime:ur(s.readTime)}}(r)})}saveNamedQuery(e,t){return kg(e).put(function(i){return{name:i.name,readTime:lr(ze(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function Cg(n){return Ae(n,Ac)}function kg(n){return Ae(n,Sc)}var Ga=class n{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return ds(e).get(Pg(this.userId,t)).next(r=>r?Du(this.serializer,r):null)}getOverlays(e,t){let r=vt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,o)=>{let c=new Ms(t,o);i.push(this.wt(e,c))}),P.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(o=>i.add(Fe(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ds(e).Y(Xu,c))}),P.waitFor(s)}getOverlaysForCollection(e,t,r){let i=vt(),s=Fe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ds(e).j(Xu,o).next(c=>{for(let l of c){let d=Du(this.serializer,l);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=vt(),o,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ds(e).X({index:b_,range:c},(l,d,f)=>{let m=Du(this.serializer,d);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return ds(e).put(function(i,s,o){let[c,l,d]=Pg(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ba(i.gt,o.mutation)}}(this.serializer,this.userId,t))}};function ds(n){return Ae(n,Pc)}var Td=class{St(e){return Ae(e,jh)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{let r=t?.value;return r?we.fromUint8Array(r):we.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}};var Ot=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ue(e.integerValue));else if("doubleValue"in e){let r=ue(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Rs(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Lt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Vt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?O_(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Cc(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):j(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let o=ii,c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(ue(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),B.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};Ot.Ut=new Ot;var Lr=255;function aE(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Dg(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let o=aE(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var Ad=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{let i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{let i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){let t=this.Xt(e),r=Dg(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){let t=this.Xt(e),r=Dg(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Lr),this.rn(255)}sn(){this._n(Lr),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Wt(e){let t=255&e;t===0?(this.rn(0),this.rn(255)):t===Lr?(this.rn(Lr),this.rn(0)):this.rn(t)}jt(e){let t=255&e;t===0?(this._n(0),this._n(255)):t===Lr?(this._n(Lr),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Sd=class{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}},Pd=class{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}},Yn=class{constructor(){this.un=new Ad,this.cn=new Sd(this.un),this.ln=new Pd(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}};var Jn=class n{constructor(e,t,r,i){this.Pn=e,this.Tn=t,this.In=r,this.dn=i}En(){let e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new n(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:wa(this.In),directionalValue:wa(this.dn),orderedDocumentKey:wa(t),documentKey:r.path.toArray()}}Rn(e,t,r){let i=this.An(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}};function Zt(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=Ng(n.In,e.In),t!==0?t:(t=Ng(n.dn,e.dn),t!==0?t:B.comparator(n.Tn,e.Tn)))}function Ng(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function wa(n){return Dl()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function xg(n){return typeof n!="string"?n:function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}var Ha=class{constructor(e){this.Vn=new oe((t,r)=>Te.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(H(e.collectionGroup===this.collectionId,49279),this.gn)return!1;let t=Gu(e);if(t!==void 0&&!this.yn(t))return!1;let r=Hn(e),i=new Set,s=0,o=0;for(;s<r.length&&this.yn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){let c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){let l=r[s];if(!this.wn(c,l)||!this.Sn(this.mn[o++],l))return!1}++s}for(;s<r.length;++s){let c=r[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new oe(Te.comparator),t=[];for(let r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Gr(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Gr(r.field,0))}for(let r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Gr(r.field,r.dir==="asc"?0:1)));return new Jr(Jr.UNKNOWN_ID,this.collectionId,t,Ps.empty())}yn(e){for(let t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function gy(n){var e,t;if(H(n instanceof ee||n instanceof se,20012),n instanceof ee){if(n instanceof xa){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ee.create(n.field,"==",s)))||[];return se.create(i,"or")}return n}let r=n.filters.map(i=>gy(i));return se.create(r,n.op)}function cE(n){if(n.getFilters().length===0)return[];let e=kd(gy(n));return H(_y(e),7391),Rd(e)||Cd(e)?[e]:e.getFilters()}function Rd(n){return n instanceof ee}function Cd(n){return n instanceof se&&Qh(n)}function _y(n){return Rd(n)||Cd(n)||function(t){if(t instanceof se&&nd(t)){for(let r of t.getFilters())if(!Rd(r)&&!Cd(r))return!1;return!0}return!1}(n)}function kd(n){if(H(n instanceof ee||n instanceof se,34018),n instanceof ee)return n;if(n.filters.length===1)return kd(n.filters[0]);let e=n.filters.map(r=>kd(r)),t=se.create(e,n.op);return t=Wa(t),_y(t)?t:(H(t instanceof se,64498),H(ai(t),40251),H(t.filters.length>1,57927),t.filters.reduce((r,i)=>Zh(r,i)))}function Zh(n,e){let t;return H(n instanceof ee||n instanceof se,38388),H(e instanceof ee||e instanceof se,25473),t=n instanceof ee?e instanceof ee?function(i,s){return se.create([i,s],"and")}(n,e):Og(n,e):e instanceof ee?Og(e,n):function(i,s){if(H(i.filters.length>0&&s.filters.length>0,48005),ai(i)&&ai(s))return F_(i,s.getFilters());let o=nd(i)?i:s,c=nd(i)?s:i,l=o.filters.map(d=>Zh(d,c));return se.create(l,"or")}(n,e),Wa(t)}function Og(n,e){if(ai(e))return F_(e,n.getFilters());{let t=e.filters.map(r=>Zh(n,r));return se.create(t,"or")}}function Wa(n){if(H(n instanceof ee||n instanceof se,11850),n instanceof ee)return n;let e=n.getFilters();if(e.length===1)return Wa(e[0]);if(M_(n))return n;let t=e.map(i=>Wa(i)),r=[];return t.forEach(i=>{i instanceof ee?r.push(i):i instanceof se&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:se.create(r,n.op)}var Dd=class{constructor(){this.Dn=new Us}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(rt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(rt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},Us=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new oe(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(ie.comparator)).toArray()}};var Lg="IndexedDbIndexManager",ua=new Uint8Array(0),Nd=class{constructor(e,t){this.databaseId=t,this.vn=new Us,this.Cn=new at(r=>ar(r),(r,i)=>Ws(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});let s={collectionId:r,parent:Fe(i)};return Vg(e).put(s)}return P.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[u_(t),""],!1,!0);return Vg(e).j(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;r.push(yt(o.parent))}return r})}addFieldIndex(e,t){let r=hs(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let o=Mr(e);return s.next(c=>{o.put(Rg(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=hs(e),i=Mr(e),s=Vr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=hs(e),r=Vr(e),i=Mr(e);return t.Y().next(()=>r.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return P.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new Ha(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=Vr(e),i=!0,s=new Map;return P.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=X(),c=[];return P.forEach(s,(l,d)=>{x(Lg,`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`}(l)} to execute ${ar(t)}`);let f=function(M,Y){let k=Gu(Y);if(k===void 0)return null;for(let O of La(M,k.fieldPath))switch(O.op){case"array-contains-any":return O.value.arrayValue.values||[];case"array-contains":return[O.value]}return null}(d,l),m=function(M,Y){let k=new Map;for(let O of Hn(Y))for(let w of La(M,O.fieldPath))switch(w.op){case"==":case"in":k.set(O.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return k.set(O.fieldPath.canonicalString(),w.value),Array.from(k.values())}return null}(d,l),v=function(M,Y){let k=[],O=!0;for(let w of Hn(Y)){let g=w.kind===0?pg(M,w.fieldPath,M.startAt):mg(M,w.fieldPath,M.startAt);k.push(g.value),O&&(O=g.inclusive)}return new fn(k,O)}(d,l),A=function(M,Y){let k=[],O=!0;for(let w of Hn(Y)){let g=w.kind===0?mg(M,w.fieldPath,M.endAt):pg(M,w.fieldPath,M.endAt);k.push(g.value),O&&(O=g.inclusive)}return new fn(k,O)}(d,l),N=this.xn(l,d,v),V=this.xn(l,d,A),L=this.On(l,d,m),z=this.Nn(l.indexId,f,N,v.inclusive,V,A.inclusive,L);return P.forEach(z,$=>r.H($,t.limit).next(M=>{M.forEach(Y=>{let k=B.fromSegments(Y.documentKey);o.has(k)||(o=o.add(k),c.push(k))})}))}).next(()=>c)}return P.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=cE(se.create(e.filters,"and")).map(r=>dd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,i,s,o,c){let l=(t!=null?t.length:1)*Math.max(r.length,s.length),d=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){let v=t?this.Bn(t[m/d]):ua,A=this.Ln(e,v,r[m%d],i),N=this.kn(e,v,s[m%d],o),V=c.map(L=>this.Ln(e,v,L,!0));f.push(...this.createRange(A,N,V))}return f}Ln(e,t,r,i){let s=new Jn(e,B.empty(),t,r);return i?s:s.En()}kn(e,t,r,i){let s=new Jn(e,B.empty(),t,r);return i?s.En():s}Mn(e,t){let r=new Ha(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)r.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2,i=this.Fn(t);return P.forEach(i,s=>this.Mn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let d=new oe(Te.comparator),f=!1;for(let m of l.filters)for(let v of m.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?f=!0:d=d.add(v.field));for(let m of l.orderBy)m.field.isKeyField()||(d=d.add(m.field));return d.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}qn(e,t){let r=new Yn;for(let i of Hn(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=r.hn(i.kind);Ot.Ut.bt(s,o)}return r.an()}Bn(e){let t=new Yn;return Ot.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){let r=new Yn;return Ot.Ut.bt(Kh(this.databaseId,t),r.hn(function(s){let o=Hn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let i=[];i.push(new Yn);let s=0;for(let o of Hn(e)){let c=r[s++];for(let l of i)if(this.$n(t,o.fieldPath)&&Ls(c))i=this.Un(i,o,c);else{let d=l.hn(o.kind);Ot.Ut.bt(c,d)}}return this.Kn(i)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){let i=[...e],s=[];for(let o of r.arrayValue.values||[])for(let c of i){let l=new Yn;l.seed(c.an()),Ot.Ut.bt(o,l.hn(t.kind)),s.push(l)}return s}$n(e,t){return!!e.filters.find(r=>r instanceof ee&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=hs(e),i=Mr(e);return(t?r.j(Ju,IDBKeyRange.bound(t,t)):r.j()).next(s=>{let o=[];return P.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,m){let v=m?new Ps(m.sequenceNumber,new rt(ur(m.readTime),new B(yt(m.documentKey)),m.largestBatchId)):Ps.empty(),A=f.fields.map(([N,V])=>new Gr(Te.fromServerFormat(N),V));return new Jr(f.indexId,f.collectionGroup,A,v)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Q(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=hs(e),s=Mr(e);return this.Wn(e).next(o=>i.j(Ju,IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>s.put(Rg(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){let r=new Map;return P.forEach(t,(i,s)=>{let o=r.get(i.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),P.forEach(c,l=>this.Gn(e,i,l).next(d=>{let f=this.zn(s,l);return d.isEqual(f)?P.resolve():this.jn(e,s,l,d,f)}))))})}Jn(e,t,r,i){return Vr(e).put(i.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,i){return Vr(e).delete(i.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){let i=Vr(e),s=new oe(Zt);return i.X({index:E_,range:IDBKeyRange.only([r.indexId,this.uid,wa(this.Qn(r,t))])},(o,c)=>{s=s.add(new Jn(r.indexId,t,xg(c.arrayValue),xg(c.directionalValue)))}).next(()=>s)}zn(e,t){let r=new oe(Zt),i=this.qn(t,e);if(i==null)return r;let s=Gu(t);if(s!=null){let o=e.data.field(s.fieldPath);if(Ls(o))for(let c of o.arrayValue.values||[])r=r.add(new Jn(t.indexId,e.key,this.Bn(c),i))}else r=r.add(new Jn(t.indexId,e.key,ua,i));return r}jn(e,t,r,i,s){x(Lg,"Updating index entries for document '%s'",t.key);let o=[];return function(l,d,f,m,v){let A=l.getIterator(),N=d.getIterator(),V=Or(A),L=Or(N);for(;V||L;){let z=!1,$=!1;if(V&&L){let M=f(V,L);M<0?$=!0:M>0&&(z=!0)}else V!=null?$=!0:z=!0;z?(m(L),L=Or(N)):$?(v(V),V=Or(A)):(V=Or(A),L=Or(N))}}(i,s,Zt,c=>{o.push(this.Jn(e,t,r,c))},c=>{o.push(this.Hn(e,t,r,c))}),P.waitFor(o)}Wn(e){let t=1;return Mr(e).X({index:I_,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Zt(o,c)).filter((o,c,l)=>!c||Zt(o,l[c-1])!==0);let i=[];i.push(e);for(let o of r){let c=Zt(o,e),l=Zt(o,t);if(c===0)i[0]=e.En();else if(c>0&&l<0)i.push(o),i.push(o.En());else if(l>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];let c=i[o].Rn(this.uid,ua,B.empty()),l=i[o+1].Rn(this.uid,ua,B.empty());s.push(IDBKeyRange.bound(c,l))}return s}Yn(e,t){return Zt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Mg)}getMinOffset(e,t){return P.mapArray(this.Fn(t),r=>this.Mn(e,r).next(i=>i||j(44426))).next(Mg)}};function Vg(n){return Ae(n,Ds)}function Vr(n){return Ae(n,vs)}function hs(n){return Ae(n,Bh)}function Mr(n){return Ae(n,ys)}function Mg(n){H(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;Fh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new rt(e.readTime,e.documentKey,t)}var $g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yy=41943040,He=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};function vy(n,e,t){let r=n.store(ot),i=n.store(Zr),s=[],o=IDBKeyRange.only(t.batchId),c=0,l=r.X({range:o},(f,m,v)=>(c++,v.delete()));s.push(l.next(()=>{H(c===1,47070,{batchId:t.batchId})}));let d=[];for(let f of t.mutations){let m=y_(e,f.key.path,t.batchId);s.push(i.delete(m)),d.push(f.key)}return P.waitFor(s).next(()=>d)}function Ka(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw j(14731);e=n.noDocument}return JSON.stringify(e).length}He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(yy,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);var Qa=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static yt(e,t,r,i){H(e.uid!=="",64387);let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return en(e).X({index:Xn,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=jr(e),o=en(e);return o.add({}).next(c=>{H(typeof c=="number",49019);let l=new Vs(c,t,r,i),d=function(A,N,V){let L=V.baseMutations.map($=>Ba(A.gt,$)),z=V.mutations.map($=>Ba(A.gt,$));return{userId:N,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:L,mutations:z}}(this.serializer,this.userId,l),f=[],m=new oe((v,A)=>Q(v.canonicalString(),A.canonicalString()));for(let v of i){let A=y_(this.userId,v.key.path,c);m=m.add(v.key.path.popLast()),f.push(o.put(d)),f.push(s.put(A,sI))}return m.forEach(v=>{f.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Zn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return en(e).get(t).next(r=>r?(H(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Qn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?P.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return en(e).X({index:Xn,range:i},(o,c,l)=>{c.userId===this.userId&&(H(c.batchId>=r,47524,{er:r}),s=Qn(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=nr;return en(e).X({index:Xn,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,nr],[this.userId,Number.POSITIVE_INFINITY]);return en(e).j(Xn,t).next(r=>r.map(i=>Qn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=pa(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return jr(e).X({range:i},(o,c,l)=>{let[d,f,m]=o,v=yt(f);if(d===this.userId&&t.path.isEqual(v))return en(e).get(m).next(A=>{if(!A)throw j(61480,{tr:o,batchId:m});H(A.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:A.userId,batchId:m}),s.push(Qn(this.serializer,A))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(Q),i=[];return t.forEach(s=>{let o=pa(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=jr(e).X({range:c},(d,f,m)=>{let[v,A,N]=d,V=yt(A);v===this.userId&&s.path.isEqual(V)?r=r.add(N):m.done()});i.push(l)}),P.waitFor(i).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=pa(this.userId,r),o=IDBKeyRange.lowerBound(s),c=new oe(Q);return jr(e).X({range:o},(l,d,f)=>{let[m,v,A]=l,N=yt(v);m===this.userId&&r.isPrefixOf(N)?N.length===i&&(c=c.add(A)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){let r=[],i=[];return t.forEach(s=>{i.push(en(e).get(s).next(o=>{if(o===null)throw j(35274,{batchId:s});H(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Qn(this.serializer,o))}))}),P.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return vy(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),P.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();let r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return jr(e).X({range:r},(s,o,c)=>{if(s[0]===this.userId){let l=yt(s[1]);i.push(l)}else c.done()}).next(()=>{H(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return wy(e,this.userId,t)}sr(e){return Iy(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:nr,lastStreamToken:""})}};function wy(n,e,t){let r=pa(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),o=!1;return jr(n).X({range:s,Z:!0},(c,l,d)=>{let[f,m,v]=c;f===e&&m===i&&(o=!0),d.done()}).next(()=>o)}function en(n){return Ae(n,ot)}function jr(n){return Ae(n,Zr)}function Iy(n){return Ae(n,Cs)}var pi=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var xd=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{let r=new pi(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>K.fromTimestamp(new de(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>$r(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(H(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let i=0,s=[];return $r(e).X((o,c)=>{let l=gs(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(s)).next(()=>i)}forEachTarget(e,t){return $r(e).X((r,i)=>{let s=gs(i);t(s)})}cr(e){return Fg(e).get(Ra).next(t=>(H(t!==null,2888),t))}lr(e,t){return Fg(e).put(Ra,t)}hr(e,t){return $r(e).put(py(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){let r=ar(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return $r(e).X({range:i,index:w_},(o,c,l)=>{let d=gs(c);Ws(t,d.target)&&(s=d,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=nn(e);return t.forEach(o=>{let c=Fe(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(i)}removeMatchingKeys(e,t,r){let i=nn(e);return P.forEach(t,s=>{let o=Fe(s.path);return P.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=nn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=nn(e),s=X();return i.X({range:r,Z:!0},(o,c,l)=>{let d=yt(o[1]),f=new B(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=Fe(t.path),i=IDBKeyRange.bound([r],[u_(r)],!1,!0),s=0;return nn(e).X({index:qh,Z:!0,range:i},([o,c],l,d)=>{o!==0&&(s++,d.done())}).next(()=>s>0)}Et(e,t){return $r(e).get(t).next(r=>r?gs(r):null)}};function $r(n){return Ae(n,ei)}function Fg(n){return Ae(n,rr)}function nn(n){return Ae(n,ti)}var Ug="LruGarbageCollector",Ey=1048576;function qg([n,e],[t,r]){let i=Q(n,t);return i===0?Q(e,r):i}var Od=class{constructor(e){this.Tr=e,this.buffer=new oe(qg),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();qg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Ya=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){x(Ug,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?x(Ug,"Ignoring IndexedDB error during garbage collection: ",t):await En(t)}await this.Rr(3e5)})}},Ld=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve($e.ue);let r=new Od(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve($g)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$g):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,c,l,d,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Fr()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function by(n,e){return new Ld(n,e)}var Vd=class{constructor(e,t){this.db=e,this.garbageCollector=by(this,t)}mr(e){let t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,i)=>t(i))}addReference(e,t,r){return da(e,r)}removeReference(e,t,r){return da(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return da(e,t)}Sr(e,t){return function(i,s){let o=!1;return Iy(i).ee(c=>wy(i,c,s).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.wr(e,(o,c)=>{if(c<=t){let l=this.Sr(e,o).next(d=>{if(!d)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,K.min()),nn(e).delete(function(m){return[0,Fe(m.path)]}(o))))});i.push(l)}}).next(()=>P.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return da(e,t)}wr(e,t){let r=nn(e),i,s=$e.ue;return r.X({index:qh},([o,c],{path:l,sequenceNumber:d})=>{o===0?(s!==$e.ue&&t(new B(yt(i)),s),s=d,i=l):s=$e.ue}).next(()=>{s!==$e.ue&&t(new B(yt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function da(n,e){return nn(n).put(function(r,i){return{targetId:0,path:Fe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var Ja=class{constructor(){this.changes=new at(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Md=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Gn(e).put(r)}removeEntry(e,t,r){return Gn(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],za(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=ke.newInvalidDocument(t);return Gn(e).X({index:ma,range:IDBKeyRange.only(fs(t))},(i,s)=>{r=this.Dr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:ke.newInvalidDocument(t)};return Gn(e).X({index:ma,range:IDBKeyRange.only(fs(t))},(i,s)=>{r={document:this.Dr(t,s),size:Ka(s)}}).next(()=>r)}getEntries(e,t){let r=Ze();return this.Cr(e,t,(i,s)=>{let o=this.Dr(i,s);r=r.insert(i,o)}).next(()=>r)}Fr(e,t){let r=Ze(),i=new le(B.comparator);return this.Cr(e,t,(s,o)=>{let c=this.Dr(s,o);r=r.insert(s,c),i=i.insert(s,Ka(o))}).next(()=>({documents:r,Mr:i}))}Cr(e,t,r){if(t.isEmpty())return P.resolve();let i=new oe(zg);t.forEach(l=>i=i.add(l));let s=IDBKeyRange.bound(fs(i.first()),fs(i.last())),o=i.getIterator(),c=o.getNext();return Gn(e).X({index:ma,range:s},(l,d,f)=>{let m=B.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&zg(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,d),c=o.hasNext()?o.getNext():null),c?f.G(fs(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),za(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gn(e).j(IDBKeyRange.bound(c,l,!0)).next(d=>{s?.incrementDocumentReadCount(d.length);let f=Ze();for(let m of d){let v=this.Dr(B.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);v.isFoundDocument()&&(Ks(t,v)||i.has(v.key))&&(f=f.insert(v.key,v))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=Ze(),o=jg(t,r),c=jg(t,rt.max());return Gn(e).X({index:v_,range:IDBKeyRange.bound(o,c,!0)},(l,d,f)=>{let m=this.Dr(B.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new $d(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Bg(e).get(Yu).next(t=>(H(!!t,20021),t))}br(e,t){return Bg(e).put(Yu,t)}Dr(e,t){if(t){let r=oE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(K.min())))return r}return ke.newInvalidDocument(e)}};function Ty(n){return new Md(n)}var $d=class extends Ja{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new at(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new oe((s,o)=>Q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){let l=Sg(this.Or.serializer,o);i=i.add(s.path.popLast());let d=Ka(l);r+=d-c.size,t.push(this.Or.addEntry(e,s,l))}else if(r-=c.size,this.trackRemovals){let l=Sg(this.Or.serializer,o.convertToNoDocument(K.min()));t.push(this.Or.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}};function Bg(n){return Ae(n,ks)}function Gn(n){return Ae(n,Pa)}function fs(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jg(n,e){let t=e.documentKey.path.toArray();return[n,za(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function zg(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Q(t[s],r[s]),i)return i;return i=Q(t.length,r.length),i||(i=Q(t[t.length-2],r[r.length-2]),i||Q(t[t.length-1],r[r.length-1]))}var Fd=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Xa=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&bs(r.mutation,i,Xe.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){let i=vt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ms();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let r=vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=Ze(),o=Es(),c=function(){return Es()}();return t.forEach((l,d)=>{let f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ct)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),bs(f.mutation,d,f.mutation.getFieldMask(),de.now())):o.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var m;return c.set(d,new Fd(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Es(),i=new le((o,c)=>o-c),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let f=r.get(l)||Xe.empty();f=c.applyToLocalView(d,f),r.set(l,f);let m=(i.get(c.batchId)||X()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,f=l.value,m=K_();f.forEach(v=>{if(!s.has(v)){let A=ey(t.get(v),r.get(v));A!==null&&m.set(v,A),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):P.resolve(vt()),c=Yr,l=s;return o.next(d=>P.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{l=l.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,X())).next(f=>({batchId:c,changes:W_(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,o=ms();return this.indexManager.getCollectionParents(e,s).next(c=>P.forEach(c,l=>{let d=function(m,v){return new ci(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,v)=>{o=o.insert(m,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,d)=>{let f=d.getKey();o.get(f)===null&&(o=o.insert(f,ke.newInvalidDocument(f)))});let c=ms();return o.forEach((l,d)=>{let f=s.get(l);f!==void 0&&bs(f.mutation,d,Xe.empty(),de.now()),Ks(t,d)&&(c=c.insert(l,d))}),c})}};var Ud=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:my(i.bundledQuery),readTime:ze(i.readTime)}}(t)),P.resolve()}};var qd=class{constructor(){this.overlays=new le(B.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=vt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=vt(),s=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new le((d,f)=>d-f),o=this.overlays.getIterator();for(;o.hasNext();){let d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=vt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}let c=vt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return P.resolve(c)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ms(t,r));let s=this.kr.get(t);s===void 0&&(s=X(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Bd=class{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}};var qs=class{constructor(){this.qr=new oe(ye.Qr),this.$r=new oe(ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new ye(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ye(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new B(new ie([])),r=new ye(t,e),i=new ye(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new B(new ie([])),r=new ye(t,e),i=new ye(t,e+1),s=X();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new ye(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ye=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return B.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||B.comparator(e.key,t.key)}};var jd=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new oe(ye.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Vs(s,t,r,i);this.mutationQueue.push(o);for(let c of i)this.Yr=this.Yr.add(new ye(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?nr:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{let c=this.Zr(o.Hr);s.push(c)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(Q);return t.forEach(i=>{let s=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{r=r.add(c.Hr)})}),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;B.isDocumentKey(s)||(s=s.child(""));let o=new ye(new B(s),0),c=new oe(Q);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.Hr)),!0)},o),P.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){H(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,i=>{let s=new ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new ye(t,0),i=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var zd=class{constructor(e){this.ni=e,this.docs=function(){return new le(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=Ze();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ze(),o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:f}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Fh(p_(f),r)<=0||(i.has(f.key)||Ks(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,t,r,i){j(9500)}ri(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Gd(this)}getSize(e){return P.resolve(this.size)}},Gd=class extends Ja{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Hd=class{constructor(e){this.persistence=e,this.ii=new at(t=>ar(t),Ws),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new qs,this.targetCount=0,this._i=pi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new pi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}};var Bs=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new $e(0),this.ci=!1,this.ci=!0,this.li=new Bd,this.referenceDelegate=e(this),this.hi=new Hd(this),this.indexManager=new Dd,this.remoteDocumentCache=function(i){return new zd(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new ja(t),this.Ti=new Ud(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new jd(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);let i=new Wd(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return P.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Wd=class extends Ta{constructor(e){super(),this.currentSequenceNumber=e}},Za=class n{constructor(e){this.persistence=e,this.Ai=new qs,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw j(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,r=>{let i=B.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},ec=class n{constructor(e,t){this.persistence=e,this.gi=new at(r=>Fe(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=by(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return P.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?P.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,K.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_a(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Kd=class{constructor(e){this.serializer=e}q(e,t,r,i){let s=new Aa("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore(Hs)}(e),function(l){l.createObjectStore(Cs,{keyPath:iI}),l.createObjectStore(ot,{keyPath:rg,autoIncrement:!0}).createIndex(Xn,ig,{unique:!0}),l.createObjectStore(Zr)}(e),Gg(e),function(l){l.createObjectStore(Wn)}(e));let o=P.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore(ti),l.deleteObjectStore(ei),l.deleteObjectStore(rr)}(e),Gg(e)),o=o.next(()=>function(l){let d=l.store(rr),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return d.put(Ra,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,d){return d.store(ot).j().next(m=>{l.deleteObjectStore(ot),l.createObjectStore(ot,{keyPath:rg,autoIncrement:!0}).createIndex(Xn,ig,{unique:!0});let v=d.store(ot),A=m.map(N=>v.put(N));return P.waitFor(A)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore(ni,{keyPath:fI})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.pi(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore(ks)}(e),this.yi(s)))),r<7&&i>=7&&(o=o.next(()=>this.wi(s))),r<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Ac,{keyPath:pI})})(e),function(l){l.createObjectStore(Sc,{keyPath:mI})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){let d=l.createObjectStore(Pc,{keyPath:EI});d.createIndex(Xu,bI,{unique:!1}),d.createIndex(b_,TI,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){let d=l.createObjectStore(Pa,{keyPath:oI});d.createIndex(ma,aI),d.createIndex(v_,cI)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(Wn))),r<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore(Bh,{keyPath:gI,autoIncrement:!0}).createIndex(Ju,_I,{unique:!1}),l.createObjectStore(ys,{keyPath:yI}).createIndex(I_,vI,{unique:!1}),l.createObjectStore(vs,{keyPath:wI}).createIndex(E_,II,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(ys).clear()}).next(()=>{t.objectStore(vs).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(jh,{keyPath:AI})})(e)})),r<18&&i>=18&&Dl()&&(o=o.next(()=>{t.objectStore(ys).clear()}).next(()=>{t.objectStore(vs).clear()})),o}yi(e){let t=0;return e.store(Wn).X((r,i)=>{t+=Ka(i)}).next(()=>{let r={byteSize:t};return e.store(ks).put(Yu,r)})}pi(e){let t=e.store(Cs),r=e.store(ot);return t.j().next(i=>P.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,nr],[s.userId,s.lastAcknowledgedBatchId]);return r.j(Xn,o).next(c=>P.forEach(c,l=>{H(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});let d=Qn(this.serializer,l);return vy(e,s.userId,d).next(()=>{})}))}))}wi(e){let t=e.store(ti),r=e.store(Wn);return e.store(rr).get(Ra).next(i=>{let s=[];return r.X((o,c)=>{let l=new ie(o),d=function(m){return[0,Fe(m)]}(l);s.push(t.get(d).next(f=>f?P.resolve():(m=>t.put({targetId:0,path:Fe(m),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(s))})}Si(e,t){e.createObjectStore(Ds,{keyPath:hI});let r=t.store(Ds),i=new Us,s=o=>{if(i.add(o)){let c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Fe(l)})}};return t.store(Wn).X({Z:!0},(o,c)=>{let l=new ie(o);return s(l.popLast())}).next(()=>t.store(Zr).X({Z:!0},([o,c,l],d)=>{let f=yt(c);return s(f.popLast())}))}bi(e){let t=e.store(ei);return t.X((r,i)=>{let s=gs(i),o=py(this.serializer,s);return t.put(o)})}Di(e,t){let r=t.store(Wn),i=[];return r.X((s,o)=>{let c=t.store(Pa),l=function(m){return m.document?new B(ie.fromString(m.document.name).popFirst(5)):m.noDocument?B.fromSegments(m.noDocument.path):m.unknownDocument?B.fromSegments(m.unknownDocument.path):j(36783)}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(d))}).next(()=>P.waitFor(i))}Ci(e,t){let r=t.store(ot),i=Ty(this.serializer),s=new Bs(Za.Vi,this.serializer.gt);return r.j().next(o=>{let c=new Map;return o.forEach(l=>{var d;let f=(d=c.get(l.userId))!==null&&d!==void 0?d:X();Qn(this.serializer,l).keys().forEach(m=>f=f.add(m)),c.set(l.userId,f)}),P.forEach(c,(l,d)=>{let f=new Se(d),m=Ga.yt(this.serializer,f),v=s.getIndexManager(f),A=Qa.yt(f,this.serializer,v,s.referenceDelegate);return new Xa(i,A,m,v).recalculateAndSaveOverlaysForDocumentKeys(new Ns(t,$e.ue),l).next()})})}};function Gg(n){n.createObjectStore(ti,{keyPath:uI}).createIndex(qh,dI,{unique:!0}),n.createObjectStore(ei,{keyPath:"targetId"}).createIndex(w_,lI,{unique:!0}),n.createObjectStore(rr)}var tn="IndexedDbPersistence",Nu=18e5,xu=5e3,Ou="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",lE="main",Qd=class n{constructor(e,t,r,i,s,o,c,l,d,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=s,this.window=o,this.document=c,this.Mi=d,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=v=>Promise.resolve(),!n.C())throw new q(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vd(this,i),this.Qi=t+lE,this.serializer=new ja(l),this.$i=new Xr(this.Qi,this.Oi,new Kd(this.serializer)),this.li=new Td,this.hi=new xd(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ty(this.serializer),this.Ti=new bd,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&me(tn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(D.FAILED_PRECONDITION,Ou);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new $e(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ha(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(bn(e))return x(tn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x(tn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return ps(e).get(xr).next(t=>P.resolve(this.Xi(t)))}es(e){return ha(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Nu)){this.ki=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=Ae(t,ni);return r.j().next(i=>{let s=this.rs(i,Nu),o=i.filter(c=>s.indexOf(c)===-1);return P.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(let t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?P.resolve(!0):ps(e).get(xr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,xu)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new q(D.FAILED_PRECONDITION,Ou);return!1}}return!(!this.networkEnabled||!this.inForeground)||ha(e).j().next(r=>this.rs(r,xu).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x(tn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Hs,ni],e=>{let t=new Ns(e,$e.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>ha(e).j().next(t=>this.rs(t,Nu).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Qa.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Nd(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Ga.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){x(tn,"Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===18?RI:l===17?P_:l===16?PI:l===15?zh:l===14?S_:l===13?A_:l===12?SI:l===11?T_:void j(60245)}(this.Oi),o;return this.$i.runTransaction(e,i,s,c=>(o=new Ns(c,this.ui?this.ui.next():$e.ue),t==="readwrite-primary"?this.Ji(o).next(l=>!!l||this.Hi(o)).next(l=>{if(!l)throw me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new q(D.FAILED_PRECONDITION,m_);return r(o)}).next(l=>this.Zi(o).next(()=>l)):this.Ts(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return ps(e).get(xr).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,xu)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new q(D.FAILED_PRECONDITION,Ou)})}Zi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ps(e).put(xr,t)}static C(){return Xr.C()}Yi(e){let t=ps(e);return t.get(xr).next(r=>this.Xi(r)?(x(tn,"Releasing primary lease."),t.delete(xr)):P.resolve())}ns(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();let t=/(?:Version|Mobile)\/1[456]/;kl()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{let r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return x(tn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return me(tn,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){me("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function ps(n){return Ae(n,Hs)}function ha(n){return Ae(n,ni)}function Ay(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var Yd=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=X(),i=X();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Jd=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var tc=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return kl()?8:g_(be())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new Jd;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(Fr()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Fr()<=Z.DEBUG&&x("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Fr()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):P.resolve())}ps(e,t){if(gg(t))return P.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=hd(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=X(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,c);return this.Ds(t,d,o,l.readTime)?this.ps(e,hd(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return gg(t)||i.isEqual(K.min())?P.resolve(null):this.gs.getDocuments(e,r).next(s=>{let o=this.bs(t,s);return this.Ds(t,o,r,i)?P.resolve(null):(Fr()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ur(t)),this.vs(e,o,t,f_(i,Yr)).next(c=>c))})}bs(e,t){let r=new oe(G_(e));return t.forEach((i,s)=>{Ks(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return Fr()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.gs.getDocumentsMatchingQuery(e,t,rt.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var ef="LocalStore",uE=3e8,Xd=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new le(Q),this.Ms=new at(s=>ar(s),Ws),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function Sy(n,e,t,r){return new Xd(n,e,t,r)}async function Py(n,e){let t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],c=[],l=X();for(let d of i){o.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}for(let d of s){c.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:c}))})})}function dE(n,e){let t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){let m=d.batch,v=m.keys(),A=P.resolve();return v.forEach(N=>{A=A.next(()=>f.getEntry(l,N)).next(V=>{let L=d.docVersions.get(N);H(L!==null,48541),V.version.compareTo(L)<0&&(m.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ry(n){let e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function hE(n,e){let t=G(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let c=[];e.targetChanges.forEach((f,m)=>{let v=i.get(m);if(!v)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let A=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(we.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(V,L,z){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=uE?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(v,A,f)&&c.push(t.hi.updateTargetData(s,A))});let l=Ze(),d=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(fE(s,o,e.documentUpdates).next(f=>{l=f.Ls,d=f.ks})),!r.isEqual(K.min())){let f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return P.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function fE(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ze();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):x(ef,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ls:o,ks:i}})}function pE(n,e){let t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=nr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nc(n,e){let t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new fi(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function mi(n,e,t){let r=G(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bn(o))throw o;x(ef,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Zd(n,e,t){let r=G(n),i=K.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,f){let m=G(l),v=m.Ms.get(f);return v!==void 0?P.resolve(m.Fs.get(v)):m.hi.getTargetData(d,f)}(r,o,tt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:K.min(),t?s:X())).next(c=>(Dy(r,z_(e),c),{documents:c,qs:s})))}function Cy(n,e){let t=G(n),r=G(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function ky(n,e){let t=G(n),r=t.xs.get(e)||K.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,f_(r,Yr),Number.MAX_SAFE_INTEGER)).then(i=>(Dy(t,e,i),i))}function Dy(n,e,t){let r=n.xs.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var Ny="firestore_clients";function Hg(n,e){return`${Ny}_${n}_${e}`}var xy="firestore_mutations";function Wg(n,e,t){let r=`${xy}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}var Oy="firestore_targets";function Lu(n,e){return`${Oy}_${n}_${e}`}var _t="SharedClientState",rc=class n{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ks(e,t,r){let i=JSON.parse(r),s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new q(i.error.code,i.error.message))),o?new n(e,t,i.state,s):(me(_t,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},Ts=class n{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){let r=JSON.parse(t),i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new q(r.error.code,r.error.message))),s?new n(e,r.state,i):(me(_t,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},ic=class n{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){let r=JSON.parse(t),i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Yh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=__(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new n(e,s):(me(_t,`Failed to parse client data for instance '${e}': ${t}`),null)}},eh=class n{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){let t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new n(t.clientId,t.onlineState):(me(_t,`Failed to parse online state: ${e}`),null)}},js=class{constructor(){this.activeTargetIds=Yh()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},As=class{constructor(e,t,r,i,s){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new le(Q),this.started=!1,this.Zs=[];let o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Hg(this.persistenceKey,this.js),this.eo=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new js),this.no=new RegExp(`^${Ny}_${o}_([^_]*)$`),this.ro=new RegExp(`^${xy}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Oy}_${o}_(\\d+)$`),this.so=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.oo=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Ps();for(let r of e){if(r===this.js)continue;let i=this.getItem(Hg(this.persistenceKey,r));if(i){let s=ic.Ks(r,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();let t=this.storage.getItem(this.so);if(t){let r=this.ao(t);r&&this.uo(r)}for(let r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let i=this.storage.getItem(Lu(this.persistenceKey,e));if(i){let s=Ts.Ks(e,i);s&&(r=s.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lu(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ho(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return x(_t,"READ",e,t),t}setItem(e,t){x(_t,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){x(_t,"REMOVE",e),this.storage.removeItem(e)}Hs(e){let t=e;if(t.storageArea===this.storage){if(x(_t,"EVENT",t.key,t.newValue),t.key===this.Xs)return void me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){let r=this.Ao(t.key);return this.Ro(r,null)}{let r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){let r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){let r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){let r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){let r=function(s){let o=$e.ue;if(s!=null)try{let c=JSON.parse(s);H(typeof c=="number",30636,{wo:s}),o=c}catch(c){me(_t,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==$e.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){let r=this.So(t.newValue);await Promise.all(r.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){let i=new rc(this.currentUser,e,t,r),s=Wg(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){let t=Wg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){let t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){let i=Lu(this.persistenceKey,e),s=new Ts(e,t,r);this.setItem(i,s.Ws())}Eo(e){let t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){let t=this.no.exec(e);return t?t[1]:null}Vo(e,t){let r=this.Ao(e);return ic.Ks(r,t)}mo(e,t){let r=this.ro.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rc.Ks(new Se(s),i,t)}po(e,t){let r=this.io.exec(e),i=Number(r[1]);return Ts.Ks(i,t)}ao(e){return eh.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);x(_t,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){let r=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(r),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Yh();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}},sc=class{constructor(){this.Fo=new js,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new js,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var th=class{xo(e){}shutdown(){}};var Kg="ConnectivityMonitor",oc=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){x(Kg,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){x(Kg,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var fa=null;function nh(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}var Vu="RestConnection",mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},rh=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Da?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let o=nh(),c=this.Go(e,t.toUriEncodedString());x(Vu,`Sending RPC '${e}' ${o}:`,c,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(c),f=br(d);return this.jo(e,c,l,r,f).then(m=>(x(Vu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw un(Vu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=mE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var ih=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Me="WebChannelConnection",sh=class extends rh{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let o=nh();return new Promise((c,l)=>{let d=new Su;d.setWithCredentials(!0),d.listenOnce(Pu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case us.NO_ERROR:let m=d.getResponseJson();x(Me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case us.TIMEOUT:x(Me,`RPC '${e}' ${o} timed out`),l(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:let v=d.getStatus();if(x(Me,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);let N=A?.error;if(N&&N.status&&N.message){let V=function(z){let $=z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf($)>=0?$:D.UNKNOWN}(N.status);l(new q(V,N.message))}else l(new q(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new q(D.UNAVAILABLE,"Connection failed."));break;default:j(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{x(Me,`RPC '${e}' ${o} completed.`)}});let f=JSON.stringify(i);x(Me,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",f,r,15)})}P_(e,t,r){let i=nh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ku(),c=Cu(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let f=s.join("");x(Me,`Creating RPC '${e}' stream ${i}: ${f}`,l);let m=o.createWebChannel(f,l);this.T_(m);let v=!1,A=!1,N=new ih({Ho:L=>{A?x(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(x(Me,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),x(Me,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},Yo:()=>m.close()}),V=(L,z,$)=>{L.listen(z,M=>{try{$(M)}catch(Y){setTimeout(()=>{throw Y},0)}})};return V(m,Nr.EventType.OPEN,()=>{A||(x(Me,`RPC '${e}' stream ${i} transport opened.`),N.s_())}),V(m,Nr.EventType.CLOSE,()=>{A||(A=!0,x(Me,`RPC '${e}' stream ${i} transport closed`),N.__(),this.I_(m))}),V(m,Nr.EventType.ERROR,L=>{A||(A=!0,un(Me,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),N.__(new q(D.UNAVAILABLE,"The operation could not be completed")))}),V(m,Nr.EventType.MESSAGE,L=>{var z;if(!A){let $=L.data[0];H(!!$,16349);let M=$,Y=M?.error||((z=M[0])===null||z===void 0?void 0:z.error);if(Y){x(Me,`RPC '${e}' stream ${i} received error:`,Y);let k=Y.status,O=function(y){let E=_e[y];if(E!==void 0)return ny(E)}(k),w=Y.message;O===void 0&&(O=D.INTERNAL,w="Unknown error status: "+k+" with message "+Y.message),A=!0,N.__(new q(O,w)),m.close()}else x(Me,`RPC '${e}' stream ${i} received:`,$),N.a_($)}}),V(c,Ru.STAT_EVENT,L=>{L.stat===ca.PROXY?x(Me,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===ca.NOPROXY&&x(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Ly(){return typeof window<"u"?window:null}function Ia(){return typeof document<"u"?document:null}function Nc(n){return new yd(n,!0)}var ac=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Qg="PersistentStream",cc=class{constructor(e,t,r,i,s,o,c,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ac(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(me(t.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return x(Qg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(x(Qg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},oh=class extends cc{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=ZI(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?ze(o.readTime):K.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=Id(this.serializer),t.addTarget=function(s,o){let c,l=o.target;if(c=Oa(l)?{documents:cy(s,l)}:{query:ly(s,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ry(s,o.resumeToken);let d=vd(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=hi(s,o.snapshotVersion.toTimestamp());let d=vd(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=tE(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=Id(this.serializer),t.removeTarget=e,this.k_(t)}},ah=class extends cc{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=eE(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=Id(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Ba(this.serializer,r))};this.k_(t)}};var ch=class{},lh=class extends ch{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,wd(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(D.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,wd(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(D.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},uh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(me(t),this._a=!1):x("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var dr="RemoteStore",dh=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{fr(this)&&(x(dr,"Restarting streams for network reachability change."),await async function(l){let d=G(l);d.Ia.add(4),await Qs(d),d.Aa.set("Unknown"),d.Ia.delete(4),await xc(d)}(this))})}),this.Aa=new uh(r,i)}};async function xc(n){if(fr(n))for(let e of n.da)await e(!0)}async function Qs(n){for(let e of n.da)await e(!1)}function Oc(n,e){let t=G(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),rf(t)?nf(t):bi(t).x_()&&tf(t,e))}function gi(n,e){let t=G(n),r=bi(t);t.Ta.delete(e),r.x_()&&Vy(t,e),t.Ta.size===0&&(r.x_()?r.B_():fr(t)&&t.Aa.set("Unknown"))}function tf(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bi(n).H_(e)}function Vy(n,e){n.Ra.$e(e),bi(n).Y_(e)}function nf(n){n.Ra=new _d({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),bi(n).start(),n.Aa.aa()}function rf(n){return fr(n)&&!bi(n).M_()&&n.Ta.size>0}function fr(n){return G(n).Ia.size===0}function My(n){n.Ra=void 0}async function gE(n){n.Aa.set("Online")}async function _E(n){n.Ta.forEach((e,t)=>{tf(n,e)})}async function yE(n,e){My(n),rf(n)?(n.Aa.la(e),nf(n)):n.Aa.set("Unknown")}async function vE(n,e,t){if(n.Aa.set("Online"),e instanceof Fa&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(n,e)}catch(r){x(dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lc(n,r)}else if(e instanceof Hr?n.Ra.Ye(e):e instanceof $a?n.Ra.it(e):n.Ra.et(e),!t.isEqual(K.min()))try{let r=await Ry(n.localStore);t.compareTo(r)>=0&&await function(s,o){let c=s.Ra.Pt(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{let f=s.Ta.get(l);if(!f)return;s.Ta.set(l,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Vy(s,l);let m=new fi(f.target,l,d,f.sequenceNumber);tf(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x(dr,"Failed to raise snapshot:",r),await lc(n,r)}}async function lc(n,e,t){if(!bn(e))throw e;n.Ia.add(1),await Qs(n),n.Aa.set("Offline"),t||(t=()=>Ry(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(dr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await xc(n)})}function $y(n,e){return e().catch(t=>lc(n,t,e))}async function Ei(n){let e=G(n),t=yn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nr;for(;wE(e);)try{let i=await pE(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,IE(e,i)}catch(i){await lc(e,i)}Fy(e)&&Uy(e)}function wE(n){return fr(n)&&n.Pa.length<10}function IE(n,e){n.Pa.push(e);let t=yn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Fy(n){return fr(n)&&!yn(n).M_()&&n.Pa.length>0}function Uy(n){yn(n).start()}async function EE(n){yn(n).na()}async function bE(n){let e=yn(n);for(let t of n.Pa)e.X_(t.mutations)}async function TE(n,e,t){let r=n.Pa.shift(),i=pd.from(r,e,t);await $y(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ei(n)}async function AE(n,e){e&&yn(n).Z_&&await async function(r,i){if(function(o){return HI(o)&&o!==D.ABORTED}(i.code)){let s=r.Pa.shift();yn(r).N_(),await $y(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ei(r)}}(n,e),Fy(n)&&Uy(n)}async function Yg(n,e){let t=G(n);t.asyncQueue.verifyOperationInProgress(),x(dr,"RemoteStore received new credentials");let r=fr(t);t.Ia.add(3),await Qs(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xc(t)}async function hh(n,e){let t=G(n);e?(t.Ia.delete(2),await xc(t)):e||(t.Ia.add(2),await Qs(t),t.Aa.set("Unknown"))}function bi(n){return n.Va||(n.Va=function(t,r,i){let s=G(t);return s.ia(),new oh(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:gE.bind(null,n),e_:_E.bind(null,n),n_:yE.bind(null,n),J_:vE.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),rf(n)?nf(n):n.Aa.set("Unknown")):(await n.Va.stop(),My(n))})),n.Va}function yn(n){return n.ma||(n.ma=function(t,r,i){let s=G(t);return s.ia(),new ah(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:EE.bind(null,n),n_:AE.bind(null,n),ea:bE.bind(null,n),ta:TE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Ei(n)):(await n.ma.stop(),n.Pa.length>0&&(x(dr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var fh=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let o=Date.now()+r,c=new n(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function sf(n,e){if(me("AsyncQueue",`${e}: ${n}`),bn(n))return new q(D.UNAVAILABLE,`${e}: ${n}`);throw n}var uc=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=ms(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var dc=class{constructor(){this.fa=new le(B.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):j(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},_i=class n{constructor(e,t,r,i,s,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,uc.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var ph=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},mh=class{constructor(){this.queries=Jg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=G(t),s=i.queries;i.queries=Jg(),s.forEach((o,c)=>{for(let l of c.wa)l.onError(r)})})(this,new q(D.ABORTED,"Firestore shutting down"))}};function Jg(){return new at(n=>j_(n),Dc)}async function SE(n,e){let t=G(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new ph,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=sf(o,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&of(t)}async function PE(n,e){let t=G(n),r=e.query,i=3,s=t.queries.get(r);if(s){let o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function RE(n,e){let t=G(n),r=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.wa)c.Ca(i)&&(r=!0);o.ya=i}}r&&of(t)}function CE(n,e,t){let r=G(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function of(n){n.Da.forEach(e=>{e.next()})}var gh,Xg;(Xg=gh||(gh={})).Fa="default",Xg.Cache="cache";var _h=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==gh.Cache}};var hc=class{constructor(e){this.key=e}},fc=class{constructor(e){this.key=e}},yh=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=X(),this.mutatedKeys=X(),this.Xa=G_(e),this.eu=new uc(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new dc,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let v=i.get(f),A=Ks(this.query,m)?m:null,N=!!v&&this.mutatedKeys.has(v.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations),L=!1;v&&A?v.data.isEqual(A.data)?N!==V&&(r.track({type:3,doc:A}),L=!0):this.iu(v,A)||(r.track({type:2,doc:A}),L=!0,(l&&this.Xa(A,l)>0||d&&this.Xa(A,d)<0)&&(c=!0)):!v&&A?(r.track({type:0,doc:A}),L=!0):v&&!A&&(r.track({type:1,doc:v}),L=!0,(l||d)&&(c=!0)),L&&(A?(o=o.add(A),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let o=e.ru.pa();o.sort((f,m)=>function(A,N){let V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{At:L})}};return V(A)-V(N)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;let c=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,o.length!==0||d?{snapshot:new _i(this.query,e.eu,s,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new dc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=X(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new fc(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new hc(r))}),t}uu(e){this.Ha=e.qs,this.Za=X();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return _i.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Ti="SyncEngine",vh=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},wh=class{constructor(e){this.key=e,this.lu=!1}},Ih=class{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new at(c=>j_(c),Dc),this.Tu=new Map,this.Iu=new Set,this.du=new le(B.comparator),this.Eu=new Map,this.Au=new qs,this.Ru={},this.Vu=new Map,this.mu=pi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function kE(n,e,t=!0){let r=Lc(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await qy(r,e,t,!0),i}async function DE(n,e){let t=Lc(n);await qy(t,e,!0,!1)}async function qy(n,e,t,r){let i=await nc(n.localStore,tt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await af(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Oc(n.remoteStore,i),c}async function af(n,e,t,r,i){n.gu=(m,v,A)=>async function(V,L,z,$){let M=L.view.nu(z);M.Ds&&(M=await Zd(V.localStore,L.query,!1).then(({documents:w})=>L.view.nu(w,M)));let Y=$&&$.targetChanges.get(L.targetId),k=$&&$.targetMismatches.get(L.targetId)!=null,O=L.view.applyChanges(M,V.isPrimaryClient,Y,k);return Eh(V,L.targetId,O._u),O.snapshot}(n,m,v,A);let s=await Zd(n.localStore,e,!0),o=new yh(e,s.qs),c=o.nu(s.documents),l=Fs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,l);Eh(n,t,d._u);let f=new vh(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function NE(n,e,t){let r=G(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Dc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&gi(r.remoteStore,i.targetId),yi(r,i.targetId)}).catch(En)):(yi(r,i.targetId),await mi(r.localStore,i.targetId,!0))}async function xE(n,e){let t=G(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gi(t.remoteStore,r.targetId))}async function OE(n,e,t){let r=df(n);try{let i=await function(o,c){let l=G(o),d=de.now(),f=c.reduce((A,N)=>A.add(N.key),X()),m,v;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=Ze(),V=X();return l.Os.getEntries(A,f).next(L=>{N=L,N.forEach((z,$)=>{$.isValidDocument()||(V=V.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,N)).next(L=>{m=L;let z=[];for(let $ of c){let M=GI($,m.get($.key).overlayedDocument);M!=null&&z.push(new ct($.key,M,V_(M.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(A,d,z,c)}).next(L=>{v=L;let z=L.applyToLocalDocumentSet(m,V);return l.documentOverlayCache.saveOverlays(A,L.batchId,z)})}).then(()=>({batchId:v.batchId,changes:W_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let d=o.Ru[o.currentUser.toKey()];d||(d=new le(Q)),d=d.insert(c,l),o.Ru[o.currentUser.toKey()]=d}(r,i.batchId,t),await An(r,i.changes),await Ei(r.remoteStore)}catch(i){let s=sf(i,"Failed to persist write");t.reject(s)}}async function By(n,e){let t=G(n);try{let r=await hE(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Eu.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?H(o.lu,14607):i.removedDocuments.size>0&&(H(o.lu,42227),o.lu=!1))}),await An(t,r,e)}catch(r){await En(r)}}function Zg(n,e,t){let r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,o)=>{let c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let l=G(o);l.onlineState=c;let d=!1;l.queries.forEach((f,m)=>{for(let v of m.wa)v.va(c)&&(d=!0)}),d&&of(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LE(n,e,t){let r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let o=new le(B.comparator);o=o.insert(s,ke.newNoDocument(s,K.min()));let c=X().add(s),l=new $s(K.min(),new Map,new le(Q),o,c);await By(r,l),r.du=r.du.remove(s),r.Eu.delete(e),uf(r)}else await mi(r.localStore,e,!1).then(()=>yi(r,e,t)).catch(En)}async function VE(n,e){let t=G(n),r=e.batch.batchId;try{let i=await dE(t.localStore,e);lf(t,r,null),cf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await An(t,i)}catch(i){await En(i)}}async function ME(n,e,t){let r=G(n);try{let i=await function(o,c){let l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(H(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);lf(r,e,t),cf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await An(r,i)}catch(i){await En(i)}}function cf(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function lf(n,e,t){let r=G(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function yi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||jy(n,r)})}function jy(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(gi(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),uf(n))}function Eh(n,e,t){for(let r of t)r instanceof hc?(n.Au.addReference(r.key,e),$E(n,r)):r instanceof fc?(x(Ti,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||jy(n,r.key)):j(19791,{yu:r})}function $E(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(x(Ti,"New document in limbo: "+t),n.Iu.add(r),uf(n))}function uf(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new B(ie.fromString(e)),r=n.mu.next();n.Eu.set(r,new wh(t)),n.du=n.du.insert(t,r),Oc(n.remoteStore,new fi(tt(kc(t.path)),r,"TargetPurposeLimboResolution",$e.ue))}}async function An(n,e,t){let r=G(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{o.push(r.gu(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){let m=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);let m=Yd.Es(l.targetId,d);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(l,d){let f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(d,v=>P.forEach(v.Is,A=>f.persistence.referenceDelegate.addReference(m,v.targetId,A)).next(()=>P.forEach(v.ds,A=>f.persistence.referenceDelegate.removeReference(m,v.targetId,A)))))}catch(m){if(!bn(m))throw m;x(ef,"Failed to update sequence numbers: "+m)}for(let m of d){let v=m.targetId;if(!m.fromCache){let A=f.Fs.get(v),N=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(v,V)}}}(r.localStore,s))}async function FE(n,e){let t=G(n);if(!t.currentUser.isEqual(e)){x(Ti,"User change. New user:",e.toKey());let r=await Py(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(l=>{l.reject(new q(D.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await An(t,r.Bs)}}function UE(n,e){let t=G(n),r=t.Eu.get(e);if(r&&r.lu)return X().add(r.key);{let i=X(),s=t.Tu.get(e);if(!s)return i;for(let o of s){let c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function qE(n,e){let t=G(n),r=await Zd(t.localStore,e.query,!0),i=e.view.uu(r);return t.isPrimaryClient&&Eh(t,e.targetId,i._u),i}async function BE(n,e){let t=G(n);return ky(t.localStore,e).then(r=>An(t,r))}async function jE(n,e,t,r){let i=G(n),s=await function(c,l){let d=G(c),f=G(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,l).next(v=>v?d.localDocuments.getDocuments(m,v):P.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Ei(i.remoteStore):t==="acknowledged"||t==="rejected"?(lf(i,e,r||null),cf(i,e),function(c,l){G(G(c).mutationQueue).rr(l)}(i.localStore,e)):j(6720,"Unknown batchState",{wu:t}),await An(i,s)):x(Ti,"Cannot apply mutation batch with id: "+e)}async function zE(n,e){let t=G(n);if(Lc(t),df(t),e===!0&&t.fu!==!0){let r=t.sharedClientState.getAllActiveQueryTargets(),i=await e_(t,r.toArray());t.fu=!0,await hh(t.remoteStore,!0);for(let s of i)Oc(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){let r=[],i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(yi(t,o),mi(t.localStore,o,!0))),gi(t.remoteStore,o)}),await i,await e_(t,r),function(o){let c=G(o);c.Eu.forEach((l,d)=>{gi(c.remoteStore,d)}),c.Au.jr(),c.Eu=new Map,c.du=new le(B.comparator)}(t),t.fu=!1,await hh(t.remoteStore,!1)}}async function e_(n,e,t){let r=G(n),i=[],s=[];for(let o of e){let c,l=r.Tu.get(o);if(l&&l.length!==0){c=await nc(r.localStore,tt(l[0]));for(let d of l){let f=r.Pu.get(d),m=await qE(r,f);m.snapshot&&s.push(m.snapshot)}}else{let d=await Cy(r.localStore,o);c=await nc(r.localStore,d),await af(r,zy(d),o,!1,c.resumeToken)}i.push(c)}return r.hu.J_(s),i}function zy(n){return B_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function GE(n){return function(t){return G(G(t).persistence).Ps()}(G(n).localStore)}async function HE(n,e,t,r){let i=G(n);if(i.fu)return void x(Ti,"Ignoring unexpected query state notification.");let s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{let o=await ky(i.localStore,z_(s[0])),c=$s.createSynthesizedRemoteEventForCurrentChange(e,t==="current",we.EMPTY_BYTE_STRING);await An(i,o,c);break}case"rejected":await mi(i.localStore,e,!0),yi(i,e,r);break;default:j(64155,t)}}async function WE(n,e,t){let r=Lc(n);if(r.fu){for(let i of e){if(r.Tu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){x(Ti,"Adding an already active target "+i);continue}let s=await Cy(r.localStore,i),o=await nc(r.localStore,s);await af(r,zy(s),o.targetId,!1,o.resumeToken),Oc(r.remoteStore,o)}for(let i of t)r.Tu.has(i)&&await mi(r.localStore,i,!1).then(()=>{gi(r.remoteStore,i),yi(r,i)}).catch(En)}}function Lc(n){let e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=By.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.hu.J_=RE.bind(null,e.eventManager),e.hu.pu=CE.bind(null,e.eventManager),e}function df(n){let e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ME.bind(null,e),e}var hr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Sy(this.persistence,new tc,e.initialUser,this.serializer)}Du(e){return new Bs(Za.Vi,this.serializer)}bu(e){return new sc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};hr.provider={build:()=>new hr};var pc=class extends hr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){H(this.persistence.referenceDelegate instanceof ec,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new Ya(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Bs(r=>ec.Vi(r,t),this.serializer)}},mc=class extends hr{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await df(this.Mu.syncEngine),await Ei(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Sy(this.persistence,new tc,e.initialUser,this.serializer)}Cu(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new Ya(r,e.asyncQueue,t)}Fu(e,t){let r=new Qu(t,this.persistence);return new Ku(e.asyncQueue,r)}Du(e){let t=Ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Qd(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Ly(),Ia(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new sc}},bh=class extends mc{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Mu.syncEngine;this.sharedClientState instanceof As&&(this.sharedClientState.syncEngine={Do:jE.bind(null,t),vo:HE.bind(null,t),Co:WE.bind(null,t),Ps:GE.bind(null,t),bo:BE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await zE(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){let t=Ly();if(!As.C(t))throw new q(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=Ay(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new As(t,e.asyncQueue,r,e.clientId,e.initialUser)}},vn=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FE.bind(null,this.syncEngine),await hh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mh}()}createDatastore(e){let t=Nc(e.databaseInfo.databaseId),r=function(s){return new sh(s)}(e.databaseInfo);return function(s,o,c,l){return new lh(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new dh(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zg(this.syncEngine,t,0),function(){return oc.C()?new oc:new th}())}createSyncEngine(e,t){return function(i,s,o,c,l,d,f){let m=new Ih(i,s,o,c,l,d);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=G(i);x(dr,"RemoteStore shutting down."),s.Ia.add(5),await Qs(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};vn.provider={build:()=>new vn};var Th=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):me("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var wn="FirestoreClient",Ah=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=Ss.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{x(wn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x(wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=sf(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Mu(n,e){n.asyncQueue.verifyOperationInProgress(),x(wn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Py(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{un("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{x("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{un("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function t_(n,e){n.asyncQueue.verifyOperationInProgress();let t=await KE(n);x(wn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yg(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Yg(e.remoteStore,i)),n._onlineComponents=e}async function KE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(wn,"Using user provided OfflineComponentProvider");try{await Mu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await Mu(n,new hr)}}else x(wn,"Using default OfflineComponentProvider"),await Mu(n,new pc(void 0));return n._offlineComponents}async function Gy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(wn,"Using user provided OnlineComponentProvider"),await t_(n,n._uninitializedComponentsProvider._online)):(x(wn,"Using default OnlineComponentProvider"),await t_(n,new vn))),n._onlineComponents}function QE(n){return Gy(n).then(e=>e.syncEngine)}async function n_(n){let e=await Gy(n),t=e.eventManager;return t.onListen=kE.bind(null,e.syncEngine),t.onUnlisten=NE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xE.bind(null,e.syncEngine),t}function Hy(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var r_=new Map;var YE="firestore.googleapis.com",i_=!0,gc=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YE,this.ssl=i_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:i_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ey)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},zs=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fu;switch(r.type){case"firstParty":return new Bu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=r_.get(t);r&&(x("ComponentProvider","Removing Datastore"),r_.delete(t),r.terminate())}(this),Promise.resolve()}};var _c=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},De=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Gs(t,n._jsonSchema))return new n(e,r||null,new B(ie.fromString(t.referencePath)))}};De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:ve("string",De._jsonSchemaVersion),referencePath:ve("string")};var on=class n extends _c{constructor(e,t,r){super(e,t,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new B(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Wy(n,e,...t){if(n=pe(n),d_("collection","path",e),n instanceof zs){let r=ie.fromString(e,...t);return Xm(r),new on(n,null,r)}{if(!(n instanceof De||n instanceof on))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ie.fromString(e,...t));return Xm(r),new on(n.firestore,null,r)}}function pr(n,e,...t){if(n=pe(n),arguments.length===1&&(e=Ss.newId()),d_("doc","path",e),n instanceof zs){let r=ie.fromString(e,...t);return Jm(r),new De(n,null,new B(r))}{if(!(n instanceof De||n instanceof on))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ie.fromString(e,...t));return Jm(r),new De(n.firestore,n instanceof on?n.converter:null,new B(r))}}var s_="AsyncQueue",yc=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ac(this,"async_queue_retry"),this.oc=()=>{let r=Ia();r&&x(s_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Ia();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Ia();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new wt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!bn(e))throw e;x(s_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,me("INTERNAL UNHANDLED ERROR: ",o_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=fh.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&j(47125,{hc:o_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function o_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function a_(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var In=class extends zs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new yc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new yc(e),this._firestoreClient=void 0,await e}}};function hf(n,e,t){t||(t=Da);let r=Do(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Gt(s,e))return i;throw new q(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ey)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&br(e.host)&&Cl(e.host),r.initialize({options:e,instanceIdentifier:t})}function Ky(n){if(n._terminated)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JE(n),n._firestoreClient}function JE(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,f){return new Zu(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Hy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ah(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var an=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(we.fromBase64String(e))}catch(t){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gs(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};an._jsonSchemaVersion="firestore/bytes/1.0",an._jsonSchema={type:ve("string",an._jsonSchemaVersion),bytes:ve("string")};var vi=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var wi=class{constructor(e){this._methodName=e}};var cn=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Gs(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:ve("string",cn._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};var ln=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gs(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:ve("string",ln._jsonSchemaVersion),vectorValues:ve("object")};var XE=/^__.*__$/,Sh=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new _n(e,this.data,t,this.fieldTransforms)}},vc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Qy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ec:n})}}var Ph=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ic(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Qy(this.Ec)&&XE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},Rh=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Nc(e)}Dc(e,t,r,i=!1){return new Ph({Ec:e,methodName:t,bc:r,path:Te.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Yy(n){let e=n._freezeSettings(),t=Nc(n._databaseId);return new Rh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZE(n,e,t,r,i,s={}){let o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);ff("Data must be an object, but it was:",o,r);let c=Jy(r,o),l,d;if(s.merge)l=new Xe(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let v=kh(e,m,t);if(!o.contains(v))throw new q(D.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Zy(f,v)||f.push(v)}l=new Xe(f),d=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=o.fieldTransforms;return new Sh(new je(c),l,d)}var wc=class n extends wi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var Ch=class n extends wi{_toFieldTransform(e){return new Va(e.path,new pn)}isEqual(e){return e instanceof n}};function eb(n,e,t,r){let i=n.Dc(1,e,t);ff("Data must be an object, but it was:",i,r);let s=[],o=je.empty();Tn(r,(l,d)=>{let f=pf(e,l,t);d=pe(d);let m=i.gc(f);if(d instanceof wc)s.push(f);else{let v=Vc(d,m);v!=null&&(s.push(f),o.set(f,v))}});let c=new Xe(s);return new vc(o,c,i.fieldTransforms)}function tb(n,e,t,r,i,s){let o=n.Dc(1,e,t),c=[kh(e,r,t)],l=[i];if(s.length%2!=0)throw new q(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)c.push(kh(e,s[v])),l.push(s[v+1]);let d=[],f=je.empty();for(let v=c.length-1;v>=0;--v)if(!Zy(d,c[v])){let A=c[v],N=l[v];N=pe(N);let V=o.gc(A);if(N instanceof wc)d.push(A);else{let L=Vc(N,V);L!=null&&(d.push(A),f.set(A,L))}}let m=new Xe(d);return new vc(f,m,o.fieldTransforms)}function Vc(n,e){if(Xy(n=pe(n)))return ff("Unsupported field value:",e,n),Jy(n,e);if(n instanceof wi)return function(r,i){if(!Qy(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let c of r){let l=Vc(c,i.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=de.fromDate(r);return{timestampValue:hi(i.serializer,s)}}if(r instanceof de){let s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hi(i.serializer,s)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:ry(i.serializer,r._byteString)};if(r instanceof De){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(o,c){return{mapValue:{fields:{[Hh]:{stringValue:Wh},[ii]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Jh(c.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${$h(r)}`)}(n,e)}function Jy(n,e){let t={};return R_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(n,(r,i)=>{let s=Vc(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Xy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof cn||n instanceof an||n instanceof De||n instanceof wi||n instanceof ln)}function ff(n,e,t){if(!Xy(t)||!h_(t)){let r=$h(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function kh(n,e,t){if((e=pe(e))instanceof vi)return e._internalPath;if(typeof e=="string")return pf(n,e);throw Ic("Field path arguments must be of type string or ",n,!1,void 0,t)}var nb=new RegExp("[~\\*/\\[\\]]");function pf(n,e,t){if(e.search(nb)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vi(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ic(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(D.INVALID_ARGUMENT,c+n+l)}function Zy(n,e){return n.some(t=>t.isEqual(e))}var Ec=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Dh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ev("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Dh=class extends Ec{data(){return super.data()}};function ev(n,e){return typeof e=="string"?pf(n,e):e instanceof vi?e._internalPath:e._delegate._internalPath}function rb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Nh=class{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Tn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ii].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ue(o.doubleValue));return new ln(s)}convertGeoPoint(e){return new cn(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Rc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){let t=Lt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ie.fromString(e);H(fy(r),9688,{name:e});let i=new ri(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function ib(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var er=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},sr=class n extends Ec{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ev("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",sr._jsonSchema={type:ve("string",sr._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};var Wr=class extends sr{data(e={}){return super.data(e)}},Kr=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new er(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Wr(this._firestore,this._userDataWriter,r.key,r,new er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let l=new Wr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new Wr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:sb(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ss.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function sb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:ve("string",Kr._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};var bc=class extends Nh{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}};function Mc(n,e,t){n=sn(n,De);let r=sn(n.firestore,In),i=ib(n.converter,e,t);return gf(r,[ZE(Yy(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,et.none())])}function tv(n,e,t,...r){n=sn(n,De);let i=sn(n.firestore,In),s=Yy(i),o;return o=typeof(e=pe(e))=="string"||e instanceof vi?tb(s,"updateDoc",n._key,e,t,r):eb(s,"updateDoc",n._key,e),gf(i,[o.toMutation(n._key,et.exists(!0))])}function nv(n){return gf(sn(n.firestore,In),[new di(n._key,et.none())])}function mf(n,...e){var t,r,i;n=pe(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||a_(e[o])||(s=e[o++]);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(a_(e[o])){let m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let l,d,f;if(n instanceof De)d=sn(n.firestore,In),f=kc(n._key.path),l={next:m=>{e[o]&&e[o](ob(d,n,m))},error:e[o+1],complete:e[o+2]};else{let m=sn(n,_c);d=sn(m.firestore,In),f=m._query;let v=new bc(d);l={next:A=>{e[o]&&e[o](new Kr(d,v,m,A))},error:e[o+1],complete:e[o+2]},rb(n._query)}return function(v,A,N,V){let L=new Th(V),z=new _h(A,L,N);return v.asyncQueue.enqueueAndForget(async()=>SE(await n_(v),z)),()=>{L.Ou(),v.asyncQueue.enqueueAndForget(async()=>PE(await n_(v),z))}}(Ky(d),f,c,l)}function gf(n,e){return function(r,i){let s=new wt;return r.asyncQueue.enqueueAndForget(async()=>OE(await QE(r),i,s)),s.promise}(Ky(n),e)}function ob(n,e,t){let r=t.docs.get(e._key),i=new bc(n);return new sr(n,i,e._key,r,new er(t.hasPendingWrites,t.fromCache),e.converter)}var xh=class{constructor(e){this.kind="memory",this._onlineComponentProvider=vn.provider,e?.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new pc(void 0)}}toJSON(){return{kind:this.kind}}},Oh=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ab(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function rv(n){return new xh(n)}function iv(n){return new Oh(n)}var Lh=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vn.provider,this._offlineComponentProvider={build:t=>new mc(t,e?.cacheSizeBytes,this.forceOwnership)}}},Vh=class{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vn.provider,this._offlineComponentProvider={build:t=>new bh(t,e?.cacheSizeBytes)}}};function ab(n){return new Lh(n?.forceOwnership)}function sv(){return new Vh}function _f(){return new Ch("serverTimestamp")}(function(e,t=!0){(function(i){Ii=i})(Sr),Wt(new nt("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),c=new In(new Uu(r.getProvider("auth-internal")),new ju(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),st(Wm,Km,e),st(Wm,Km,"esm2017")})();var We={img:"clean.jpg",size:[1384,903],areas:[{id:"A1",nome:"\xC1rea 1",poly:[[689.9,401.4],[687.7,524.5],[742.8,515.6],[753.8,508.1],[788.1,448.7],[792.6,437.7],[778.7,407.4],[760.1,412.9],[750.1,413.9]],c:[733.2,455.5]},{id:"A2",nome:"\xC1rea 2",poly:[[601.5,414.8],[527,416.9],[476,407.3],[450.8,405.8],[446.9,437.4],[507.7,452.6],[515.8,479.1],[498.1,555.5],[535.1,557.5],[572.2,555.4],[593.4,546.8],[635.1,538.9],[687.9,524.3],[688.2,394.8],[636.6,418.2]],c:[581.9,481.6]},{id:"A3",nome:"\xC1rea 3",poly:[[326.8,377],[338.8,386.5],[369,398.9],[416.3,405.9],[451.7,413.1],[494,415.8],[533.1,423],[596.2,422.4],[626.9,425.5],[645.7,418.6],[673.9,402.2],[665.8,396.2],[645.7,368.4],[619.7,350.7],[598.2,340.5],[584.8,329.5],[569.7,294.2],[534.3,292.5],[516.9,288.6],[498.2,279.3],[488.6,271.5],[477.7,256.8],[465.9,227.9],[457.1,195.4],[450.8,160.3],[447.9,156.8],[427.1,166.9],[436.5,203.8],[420.9,239.8],[445.5,251.7],[448.3,273.9],[471.7,306],[483.2,331.3],[463.5,350.2],[446.7,334.7],[424.4,318.9],[368,298.4],[350.6,316],[332.7,308.3],[329.3,308.5],[324.4,314.6],[325.9,329],[320.3,334.8]],c:[534.7,362.6]},{id:"A4",nome:"\xC1rea 4",poly:[[245.6,354.2],[169.8,486.1],[200.9,492.2],[216.6,470.9],[253.4,444.9],[270.2,435],[330.6,428],[351.3,431.6],[368.6,439.6],[377.4,433.2],[374.3,426.7],[399.7,402.9],[367.5,398.6],[338.3,386.6],[307.1,364.6],[291.4,385.5]],c:[256.7,403.7]},{id:"A5",nome:"\xC1rea 5",poly:[[534,626.7],[522.6,643.5],[518.3,642],[534.6,681],[544.9,696.5],[591.4,713.8],[606.7,715.1],[616.9,718.8],[623.4,729.4],[624.6,737.4],[622.1,750.2],[623.4,780.9],[621.8,789.3],[628.5,787.9],[629.5,792.5],[631.9,793.4],[636.6,791.6],[637,784.9],[631.8,755.6],[633.4,716.9],[621.7,692],[631.3,642.3],[631.4,636.1],[627.8,634.8],[610,636.7],[608.7,640.4],[605.1,681.2],[591.8,684],[593.4,658.4],[591.8,655.1],[567.7,640.2],[538.5,627.6]],c:[563,671.3]},{id:"A6",nome:"\xC1rea 6",poly:[[623.4,729.4],[617,718.8],[606.7,715.1],[591.4,713.8],[544.9,696.4],[534.6,681],[518.3,642],[514.7,640.7],[509.5,641.6],[486.2,631.9],[474.1,637.2],[457.5,635.4],[425.6,642],[402.9,651.8],[383.6,653.9],[373.4,651.6],[354.7,644.2],[339.9,633.4],[336.3,632.1],[318.2,630.4],[314.1,642.1],[306.9,654.8],[304.3,662.1],[319.6,679.3],[331.5,727.7],[331.5,751.1],[327.7,771.8],[291.9,807.1],[290.6,812.8],[298.1,844.3],[302.9,846],[326,844.6],[356.7,845.2],[375.3,842.9],[405.9,851],[411.7,848.2],[414.1,849.1],[415.6,846.9],[430,841],[450.4,848.9],[515.4,833],[550.1,827.5],[587.6,818.2],[597.4,813.5],[618.1,790],[621.8,789.3],[623.4,780.9],[622.1,750.2],[624.7,737.4]],c:[452.8,741.7]}],units:[{id:"P1",nome:"Piquete 1",area:"A1",tipo:"pastagem",poly:[[731.1,409.9],[689.9,401.4],[688.7,469.1],[726.5,461.4],[727,459.1],[729.4,457.9]],m2:7228,c:[709.8,433.9]},{id:"P2",nome:"Piquete 2",area:"A1",tipo:"pastagem",poly:[[778.7,407.4],[760.1,412.9],[750.1,413.9],[731.1,409.9],[729.4,457.9],[731.1,458.5],[732.1,460.2],[788.1,448.7],[792.6,437.7]],m2:7233,c:[752.1,434.8]},{id:"P3",nome:"Piquete 3",area:"A1",tipo:"pastagem",poly:[[742.8,515.6],[753.8,508.1],[788.1,448.7],[732.1,460.2],[731.5,462.7],[729.2,463.6],[727.2,518.1]],m2:7228,c:[748.7,477.2]},{id:"P4",nome:"Piquete 4",area:"A1",tipo:"pastagem",poly:[[726.5,461.4],[688.7,469.1],[687.7,524.5],[727.2,518.1],[729.2,463.6],[727.4,463]],m2:7233,c:[708.2,493.6]},{id:"P5",nome:"Piquete 5",area:"A2",tipo:"pastagem",poly:[[601.5,414.8],[571.3,415.6],[597.2,546.1],[635.1,538.9],[687.9,524.3],[688.2,394.8],[636.6,418.2]],m2:40444,c:[635.7,471.6]},{id:"P6",nome:"Piquete 6",area:"A2",tipo:"pastagem",poly:[[597.2,546.1],[571.3,415.6],[527,416.9],[476,407.3],[450.8,405.8],[446.9,437.4],[507.7,452.6],[515.8,479.1],[498.1,555.5],[535.1,557.5],[572.2,555.4],[593.4,546.8]],m2:40586,c:[549.6,515.7]},{id:"P7",nome:"Piquete 7",area:"A3",tipo:"pastagem",poly:[[484.8,415.2],[495.2,359.1],[493.5,358.1],[492.9,355.7],[463.5,350.2],[446.7,334.7],[424.4,318.9],[368,298.4],[350.6,316],[332.7,308.3],[329.3,308.5],[324.4,314.6],[325.9,329],[320.3,334.8],[326.8,377],[338.8,386.5],[369,398.9],[416.3,405.9],[451.7,413.1]],m2:41850,c:[380.8,353]},{id:"P8",nome:"Piquete 8",area:"A3",tipo:"pastagem",poly:[[463.5,350.2],[492.9,355.7],[493.8,354],[495.9,353.4],[498.1,354.7],[498.6,356.5],[645.5,368.3],[619.7,350.7],[598.2,340.5],[584.8,329.5],[569.7,294.2],[534.3,292.5],[516.9,288.6],[498.2,279.3],[488.6,271.5],[477.7,256.8],[465.9,227.9],[457.1,195.4],[450.8,160.3],[447.9,156.8],[427.1,166.9],[436.5,203.8],[420.9,239.8],[445.5,251.7],[448.3,273.9],[471.7,306],[483.2,331.3]],m2:33518,c:[517.2,323.7]},{id:"P9",nome:"Piquete 9",area:"A3",tipo:"pastagem",poly:[[645.5,368.3],[498.6,356.5],[497.5,358.6],[495.2,359.1],[484.8,415.2],[494,415.8],[533.1,423],[596.2,422.4],[626.9,425.5],[645.7,418.6],[673.9,402.2],[665.8,396.2]],m2:33535,c:[536.1,391.4]},{id:"P10",nome:"Piquete 10",area:"A4",tipo:"pastagem",poly:[[245.6,354.2],[169.8,486.1],[200.9,492.2],[216.6,470.9],[260.1,440.9],[291.4,385.5]],m2:21868,c:[239.5,420.8]},{id:"P11",nome:"Piquete 11",area:"A4",tipo:"pastagem",poly:[[291.4,385.5],[260.1,440.9],[270.2,435],[330.6,428],[351.3,431.6],[368.6,439.6],[377.4,433.2],[374.3,426.7],[399.7,402.9],[367.5,398.6],[338.3,386.6],[307.1,364.6]],m2:15732,c:[313.3,402.5]},{id:"P12",nome:"Piquete 12",area:"A5",tipo:"pastagem",poly:[[534,626.7],[522.6,643.5],[518.3,642],[534.6,681],[544.9,696.5],[591.4,713.8],[606.7,715.1],[616.9,718.8],[623.4,729.4],[624.6,737.4],[622.1,750.2],[623.4,780.9],[621.8,789.3],[628.5,787.9],[629.5,792.5],[631.9,793.4],[636.6,791.6],[637,784.9],[631.8,755.6],[633.4,716.9],[621.7,692],[631.3,642.3],[631.4,636.1],[627.8,634.8],[610,636.7],[608.7,640.4],[605.1,681.2],[591.8,684],[593.4,658.4],[591.8,655.1],[567.7,640.2],[538.5,627.6]],m2:21181,c:[563,671.3]},{id:"P13",nome:"Piquete 13",area:"A6",tipo:"pastagem",poly:[[331.5,742.5],[460.9,748.4],[544.1,695.3],[534.6,681],[518.3,642],[514.7,640.7],[509.5,641.6],[486.2,631.9],[474.1,637.2],[457.5,635.4],[425.6,642],[402.9,651.8],[383.6,653.9],[373.4,651.6],[354.7,644.2],[339.9,633.4],[336.3,632.1],[318.2,630.4],[314.1,642.1],[306.9,654.8],[304.3,662.1],[319.6,679.3],[331.5,727.7]],m2:62038,c:[446,693.4]},{id:"P14",nome:"Piquete 14",area:"A6",tipo:"pastagem",poly:[[623.4,729.4],[617,718.8],[606.7,715.1],[591.4,713.8],[544.9,696.4],[544.1,695.3],[460.9,748.4],[331.5,742.5],[331.5,751.1],[327.7,771.8],[291.9,807.1],[290.6,812.8],[298.1,844.3],[302.9,846],[326,844.6],[356.7,845.2],[375.3,842.9],[405.9,851],[411.7,848.2],[414.1,849.1],[415.6,846.9],[430,841],[450.4,848.9],[515.4,833],[550.1,827.5],[587.6,818.2],[597.4,813.5],[618.1,790],[621.8,789.3],[623.4,780.9],[622.1,750.2],[624.7,737.4]],m2:100647,c:[550,764.3]}],corredor:[[629,538.1],[635.5,563.4],[631.9,570.6],[601.8,589.1],[579.9,611.9],[538,621.7],[532.4,628.7],[527.1,636.7],[520.6,642.1],[518.3,639.5],[524.5,634.3],[529.6,626.6],[536.1,618.6],[578,608.8],[599.6,586.4],[629.2,568.2],[631.8,563],[625.6,538.9]],sede:[{n:1,nome:"Barrac\xE3o",poly:[[442.3,452.1],[502.3,479.6],[490.8,507.5],[430.6,480.7],[442.3,452.1]]},{n:2,nome:"Barrac\xE3o",poly:[[462.3,498.4],[480.4,505.6],[464.9,546.4],[446.8,539.1],[462.3,498.4]]},{n:3,nome:"Barrac\xF5es (6 v\xE3os)",poly:[[387.1,418.9],[434.7,444.9],[419.9,473.8],[374.6,443.4],[387.1,418.9]]},{n:4,nome:"Barrac\xE3o",poly:[[364.4,441.6],[380.6,452.6],[356.8,481.1],[340.9,465.4],[364.4,441.6]]},{n:5,nome:"Barrac\xE3o",poly:[[382.3,460.9],[408.5,481.3],[390.2,504.1],[358.6,485.8],[382.3,460.9]]},{n:6,nome:"Barrac\xE3o (placas solares)",poly:[[405.4,493.4],[413.6,497.5],[402.3,537],[394.3,533.4],[405.4,493.4]]},{n:7,nome:"Constru\xE7\xE3o",poly:[[438.8,424.8],[445.1,428.3],[442.9,432.6],[436.7,429.4],[438.8,424.8]]},{n:8,nome:"Constru\xE7\xE3o",poly:[[347.8,436.3],[356.5,440.6],[353.4,446.7],[344.9,442.7],[347.8,436.3]]}],pontos:[{tipo:"agua_sal",nome:"Pra\xE7a da \xC1rea 1",p:[729.3,460.8]},{tipo:"agua_sal",nome:"Pra\xE7a da \xC1rea 3",p:[495.7,356.3]},{tipo:"agua",nome:"Bebedouro P12",p:[539,641.8]},{tipo:"agua",nome:"Bebedouro",p:[476.5,719.3]},{tipo:"agua",nome:"Bebedouro",p:[378.6,751.8]}],bbox:[169.8,156.8,792.6,851]};var ov={map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /> <path d="M15 5.764v15" /> <path d="M9 3.236v15" />',list:'<line x1="8" x2="21" y1="6" y2="6" /> <line x1="8" x2="21" y1="12" y2="12" /> <line x1="8" x2="21" y1="18" y2="18" /> <line x1="3" x2="3.01" y1="6" y2="6" /> <line x1="3" x2="3.01" y1="12" y2="12" /> <line x1="3" x2="3.01" y1="18" y2="18" />',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /> <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />',plus:'<path d="M5 12h14" /> <path d="M12 5v14" />',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /> <circle cx="12" cy="12" r="3" />',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />',"cloud-off":'<path d="m2 2 20 20" /> <path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" /> <path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',"cloud-upload":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M12 12v9" /> <path d="m16 16-4-4-4 4" />',check:'<path d="M20 6 9 17l-5-5" />',"chevron-right":'<path d="m9 18 6-6-6-6" />',"chevron-left":'<path d="m15 18-6-6 6-6" />',x:'<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',search:'<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />',calendar:'<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />',clock:'<circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" />',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />',sprout:'<path d="M7 20h10" /> <path d="M10 20c5.5-2.5.8-6.4 3-10" /> <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /> <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />',"spray-can":'<path d="M3 3h.01" /> <path d="M7 5h.01" /> <path d="M11 7h.01" /> <path d="M3 7h.01" /> <path d="M7 9h.01" /> <path d="M3 11h.01" /> <rect width="4" height="4" x="15" y="5" /> <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" /> <path d="m13 14 8-2" /> <path d="m13 19 8-2" />',wheat:'<path d="M2 22 16 8" /> <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /> <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />',droplets:'<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /> <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />',package:'<path d="m7.5 4.27 9 5.15" /> <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /> <path d="m3.3 7 8.7 5 8.7-5" /> <path d="M12 22V12" />',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /> <polyline points="10 17 15 12 10 7" /> <line x1="15" x2="3" y1="12" y2="12" />',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /> <polyline points="16 17 21 12 16 7" /> <line x1="21" x2="9" y1="12" y2="12" />',milk:'<path d="M8 2h8" /> <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" /> <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',minus:'<path d="M5 12h14" />',"trash-2":'<path d="M3 6h18" /> <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /> <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /> <line x1="10" x2="10" y1="11" y2="17" /> <line x1="14" x2="14" y1="11" y2="17" />',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <polyline points="7 10 12 15 17 10" /> <line x1="12" x2="12" y1="15" y2="3" />',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /> <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /> <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /> <path d="m15 5 4 4" />',fence:'<path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M6 8h4" /> <path d="M6 18h4" /> <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M14 8h4" /> <path d="M14 18h4" /> <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />',"notebook-pen":'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /> <path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />',"clipboard-list":'<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M12 11h4" /> <path d="M12 16h4" /> <path d="M8 11h.01" /> <path d="M8 16h.01" />',tractor:'<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" /> <path d="M16 18h-5" /> <path d="M18 5a1 1 0 0 0-1 1v5.573" /> <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" /> <path d="M4 11V4" /> <path d="M7 15h.01" /> <path d="M8 10.1V4" /> <circle cx="18" cy="18" r="2" /> <circle cx="7" cy="15" r="5" />',"locate-fixed":'<line x1="2" x2="5" y1="12" y2="12" /> <line x1="19" x2="22" y1="12" y2="12" /> <line x1="12" x2="12" y1="2" y2="5" /> <line x1="12" x2="12" y1="19" y2="22" /> <circle cx="12" cy="12" r="7" /> <circle cx="12" cy="12" r="3" />',"circle-check":'<circle cx="12" cy="12" r="10" /> <path d="m9 12 2 2 4-4" />',syringe:'<path d="m18 2 4 4" /> <path d="m17 7 3-3" /> <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /> <path d="m9 11 4 4" /> <path d="m5 19-3 3" /> <path d="m14 4 6 6" />',"arrow-right-left":'<path d="m16 3 4 4-4 4" /> <path d="M20 7H4" /> <path d="m8 21-4-4 4-4" /> <path d="M4 17h16" />',"arrow-right":'<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /> <path d="M20 3v4" /> <path d="M22 5h-4" /> <path d="M4 17v2" /> <path d="M5 18H3" />',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /> <path d="m14.5 12.5 2-2" /> <path d="m11.5 9.5 2-2" /> <path d="m8.5 6.5 2-2" /> <path d="m17.5 15.5 2-2" />',gauge:'<path d="m12 14 4-4" /> <path d="M3.34 19a10 10 0 1 1 17.32 0" />'};var $c='<svg xmlns="http://www.w3.org/2000/svg" viewBox="95 676 889 988" role="img" aria-label="Mapa dos 14 piquetes da GTF Milk"><style>.pl{font-family:"Barlow Semi Condensed",sans-serif;font-weight:700;font-size:25px;fill:#F4EFDF;text-anchor:middle;dominant-baseline:central;paint-order:stroke;stroke:#15291C;stroke-width:5px;stroke-linejoin:round}.pl.sm{font-size:19px}.pl.sede{font-family:"Barlow",sans-serif;font-weight:600;font-size:22px;fill:#E8E1C8;letter-spacing:2px}</style><g id="mapa"><path d="M744.4,1217.3L753.4,1252.3L748.4,1262.2L706.8,1287.8L676.5,1319.4L618.5,1332.9L610.8,1342.6L603.5,1353.6L594.5,1361.1L591.3,1357.5L599.9,1350.3L606.9,1339.7L615.9,1328.6L673.9,1315.1L703.7,1284.1L744.7,1258.9L748.3,1251.7L739.7,1218.4Z" fill="#E2BC45" fill-opacity=".9"/><path d="M885.6,1040.0L828.6,1028.3L826.9,1121.9L879.2,1111.2L879.9,1108.0L883.2,1106.4Z" fill="#3B6E4A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M951.4,1036.6L925.7,1044.2L911.9,1045.5L885.6,1040.0L883.2,1106.4L885.6,1107.2L887.0,1109.6L964.4,1093.7L970.6,1078.5Z" fill="#3B6E4A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M901.8,1186.2L917.0,1175.8L964.4,1093.7L887.0,1109.6L886.1,1113.0L883.0,1114.3L880.2,1189.6Z" fill="#3B6E4A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M879.2,1111.2L826.9,1121.9L825.6,1198.5L880.2,1189.6L883.0,1114.3L880.5,1113.4Z" fill="#3B6E4A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M706.4,1046.8L664.6,1047.9L700.4,1228.4L752.8,1218.4L825.8,1198.2L826.3,1019.1L754.9,1051.5Z" fill="#2F5D3E" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M700.4,1228.4L664.6,1047.9L603.3,1049.7L532.8,1036.4L498.0,1034.3L492.6,1078.0L576.6,1099.1L587.8,1135.7L563.4,1241.4L614.5,1244.1L665.8,1241.2L695.2,1229.3Z" fill="#2F5D3E" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M545.0,1047.3L559.4,969.8L557.0,968.4L556.2,965.1L515.5,957.5L492.3,936.0L461.5,914.2L383.5,885.8L359.4,910.2L334.6,899.5L329.9,899.8L323.2,908.2L325.2,928.1L317.5,936.2L326.5,994.5L343.1,1007.6L384.8,1024.8L450.3,1034.5L499.2,1044.4Z" fill="#36674A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M515.5,957.5L556.2,965.1L557.4,962.7L560.3,961.9L563.4,963.7L564.1,966.2L767.2,982.5L731.5,958.1L701.8,944.0L683.3,928.8L662.4,880.0L613.4,877.7L589.4,872.3L563.5,859.4L550.2,848.6L535.2,828.3L518.8,788.3L506.7,743.4L498.0,694.8L493.9,690.0L465.2,704.0L478.2,755.0L456.6,804.8L490.6,821.2L494.5,851.9L526.9,896.3L542.8,931.3Z" fill="#36674A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M767.2,982.5L564.1,966.2L562.5,969.1L559.4,969.8L545.0,1047.3L557.7,1048.2L611.8,1058.1L699.0,1057.3L741.5,1061.6L767.5,1052.0L806.5,1029.4L795.3,1021.1Z" fill="#36674A" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M214.2,963.0L109.4,1145.4L152.4,1153.8L174.1,1124.4L234.2,1082.9L277.5,1006.3Z" fill="#2B5439" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M277.5,1006.3L234.2,1082.9L248.2,1074.7L331.7,1065.0L360.4,1070.0L384.3,1081.1L396.5,1072.2L392.2,1063.2L427.3,1030.3L382.8,1024.4L342.4,1007.8L299.2,977.4Z" fill="#2B5439" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M613.0,1339.8L597.3,1363.1L591.3,1361.0L613.8,1414.9L628.1,1436.3L692.4,1460.3L713.6,1462.1L727.7,1467.2L736.6,1481.8L738.3,1492.9L734.8,1510.6L736.6,1553.1L734.4,1564.7L743.7,1562.7L745.1,1569.1L748.4,1570.3L754.9,1567.9L755.5,1558.6L748.3,1518.1L750.5,1464.6L734.3,1430.1L747.6,1361.4L747.7,1352.8L742.7,1351.0L718.1,1353.6L716.3,1358.8L711.3,1415.2L692.9,1419.1L695.2,1383.7L692.9,1379.1L659.6,1358.5L619.2,1341.1Z" fill="#4A7D55" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M333.0,1500.0L511.9,1508.1L627.0,1434.7L613.8,1414.9L591.3,1361.0L586.3,1359.2L579.1,1360.4L546.9,1347.0L530.2,1354.3L507.2,1351.8L463.1,1361.0L431.7,1374.5L405.0,1377.4L390.9,1374.3L365.1,1364.0L344.6,1349.1L339.6,1347.3L314.6,1344.9L308.9,1361.1L299.0,1378.7L295.4,1388.8L316.5,1412.6L333.0,1479.5Z" fill="#325F41" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M736.6,1481.8L727.8,1467.2L713.6,1462.1L692.4,1460.3L628.1,1436.2L627.0,1434.7L511.9,1508.1L333.0,1500.0L333.0,1511.8L327.7,1540.5L278.2,1589.3L276.4,1597.2L286.8,1640.7L293.4,1643.1L325.4,1641.1L367.8,1642.0L393.6,1638.8L435.9,1650.0L443.9,1646.1L447.2,1647.4L449.3,1644.3L469.2,1636.2L497.4,1647.1L587.3,1625.1L635.3,1617.5L687.1,1604.6L700.7,1598.1L729.3,1565.6L734.4,1564.7L736.6,1553.1L734.8,1510.6L738.4,1492.9Z" fill="#325F41" stroke="#E2BC45" stroke-width="3.2" stroke-linejoin="round"/><path d="M486.2,1098.4L569.2,1136.4L553.3,1175.0L470.0,1137.9L486.2,1098.4Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M513.9,1162.4L538.9,1172.4L517.5,1228.8L492.4,1218.7L513.9,1162.4Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M409.9,1052.5L475.7,1088.4L455.2,1128.4L392.6,1086.3L409.9,1052.5Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M378.5,1083.8L400.9,1099.1L368.0,1138.5L346.0,1116.8L378.5,1083.8Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M403.2,1110.5L439.5,1138.7L414.2,1170.3L370.5,1145.0L403.2,1110.5Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M435.2,1155.5L446.5,1161.1L430.9,1215.8L419.8,1210.8L435.2,1155.5Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M481.4,1060.6L490.1,1065.5L487.0,1071.4L478.5,1067.0L481.4,1060.6Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><path d="M355.5,1076.5L367.6,1082.5L363.3,1090.9L351.5,1085.4L355.5,1076.5Z" fill="#F1EBD8" fill-opacity=".18" stroke="#F1EBD8" stroke-opacity=".75" stroke-width="1.6"/><circle cx="883.1" cy="1110.4" r="8" fill="#5BB8F5" stroke="#13251A" stroke-width="3"/><circle cx="560.1" cy="965.9" r="8" fill="#5BB8F5" stroke="#13251A" stroke-width="3"/><circle cx="619.9" cy="1360.7" r="8" fill="#5BB8F5" stroke="#13251A" stroke-width="3"/><circle cx="533.5" cy="1467.9" r="8" fill="#5BB8F5" stroke="#13251A" stroke-width="3"/><circle cx="398.1" cy="1512.8" r="8" fill="#5BB8F5" stroke="#13251A" stroke-width="3"/><text x="856.1" y="1073.2" class="pl sm">P1</text><text x="914.6" y="1074.4" class="pl sm">P2</text><text x="909.9" y="1133.1" class="pl sm">P3</text><text x="853.9" y="1155.8" class="pl sm">P4</text><text x="753.7" y="1125.3" class="pl">P5</text><text x="634.6" y="1186.3" class="pl">P6</text><text x="401.2" y="961.3" class="pl">P7</text><text x="589.8" y="920.8" class="pl">P8</text><text x="615.9" y="1014.4" class="pl">P9</text><text x="205.8" y="1055.1" class="pl">P10</text><text x="307.8" y="1029.8" class="pl">P11</text><text x="653.1" y="1401.5" class="pl">P12</text><text x="491.3" y="1432.1" class="pl">P13</text><text x="635.1" y="1530.1" class="pl">P14</text><text x="439.2" y="1124.8" class="pl sede">Sede</text></g></svg>';var pv={apiKey:"AIzaSyAFFWCUUoewpmMHoxbBMVp9Xgwnqy6Gm3A",authDomain:"gtf-milk-campo.firebaseapp.com",projectId:"gtf-milk-campo",storageBucket:"gtf-milk-campo.firebasestorage.app",messagingSenderId:"391069218990",appId:"1:391069218990:web:2ff3475d712c7f8fc6553f"},db="gtfmilk.campo@gmail.com",mv="2026.11.10-1456",If=Hl(pv),Rn=ra(If,{persistence:[Tu,bu]}),Mt;try{Mt=hf(If,{localCache:iv({tabManager:sv()})})}catch{Mt=hf(If,{localCache:rv()})}var J=(n,e=document)=>e.querySelector(n),R=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),U=(n,e="")=>`<svg class="ic ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ov[n]||""}</svg>`,jc={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},Cn=n=>String(n).padStart(2,"0"),bt=n=>`${n.getFullYear()}-${Cn(n.getMonth()+1)}-${Cn(n.getDate())}`,Dn=()=>bt(new Date),gv=()=>{let n=new Date;return`${Cn(n.getHours())}:${Cn(n.getMinutes())}`},dt=(n,e)=>{let[t,r,i]=String(n).split("-").map(Number),[s,o]=String(e||"00:00").split(":").map(Number);return new Date(t,(r||1)-1,i||1,s||0,o||0)},ut=n=>Math.round((dt(Dn())-dt(n))/864e5),Ie=n=>{let e=dt(n);return`${Cn(e.getDate())}/${Cn(e.getMonth()+1)}${e.getFullYear()!==new Date().getFullYear()?"/"+e.getFullYear():""}`},Sf=n=>`${Cn(n.getHours())}:${Cn(n.getMinutes())}`+(bt(n)===Dn()?"":` de ${Ie(bt(n))}`),hb=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],fb=n=>{let e=ut(n);return e===0?"Hoje":e===1?"Ontem":`${Ie(n)} \xB7 ${hb[dt(n).getDay()]}`},Ne=(n,e=2)=>Number(n).toLocaleString("pt-BR",{maximumFractionDigits:e}),Tt=n=>(n/1e4).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ha",zc=()=>Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),Ee=(n,e,t)=>`${n} ${n===1?e:t}`,kn=We.units.map(n=>({...n,code:n.id,nome:n.nome||n.id})),re=Object.fromEntries(kn.map(n=>[n.id,n])),Yc=We.areas.map(n=>({...n,units:kn.filter(e=>e.area===n.id)})),mr=n=>"M"+n.map(e=>e.join(",")).join("L")+"Z",ht=n=>n.tipo==="pastagem"?`Piquete ${n.code.slice(1)}`:n.nome,_v=n=>Yc.find(e=>e.id===n.area),so={gado_entrou:{label:"Soltar gado",short:"Gado entrou",icon:"log-in",sub:"Soltar ou mudar de piquete"},gado_saiu:{label:"Tirar do pasto",short:"Gado saiu",icon:"log-out",sub:"Lote sai dos piquetes"},tratamento:{label:"Tratamento das novilhas",short:"Tratamento",icon:"syringe",sub:"Verm\xEDfugo, vacina, carrapaticida"},avaliacao:{label:"Avalia\xE7\xE3o do pasto",short:"Avalia\xE7\xE3o",icon:"ruler",sub:"Pronto, recuperando ou rapado"},aplicacao:{label:"Aplica\xE7\xE3o no pasto ou lavoura",short:"Aplica\xE7\xE3o",icon:"spray-can",sub:"Herbicida, inseticida, fungicida"},adubacao:{label:"Aduba\xE7\xE3o",short:"Aduba\xE7\xE3o",icon:"package",sub:"Adubo, ureia, calc\xE1rio"},plantio:{label:"Plantio",short:"Plantio",icon:"sprout",sub:"Semeadura ou ressemeadura"},colheita:{label:"Colheita ou corte",short:"Colheita",icon:"wheat",sub:"Gr\xE3o, silagem, feno"},ocorrencia:{label:"Ocorr\xEAncia",short:"Ocorr\xEAncia",icon:"triangle-alert",sub:"Cerca, \xE1gua, praga, doen\xE7a"},mudanca:{label:"Mudan\xE7a de piquete",short:"Mudan\xE7a",icon:"arrow-right-left",sub:"",hidden:!0}},eo=["gado_entrou","gado_saiu","tratamento","avaliacao"],At={pronto:{label:"Pronto para entrar",short:"Pasto pronto",chip:"descanso",icon:"check",sub:"Pasto recuperado, pode receber o gado"},recuperando:{label:"Recuperando",short:"Recuperando",chip:"pend",icon:"clock",sub:"Ainda precisa de mais dias de descanso"},rapado:{label:"Rapado",short:"Pasto rapado",chip:"car",icon:"triangle-alert",sub:"Pasto consumido, hora de tirar o gado"}},pb={pronto:0,recuperando:2,rapado:3},_r=(n,e)=>+n>0?+n/(re[e].m2/1e4):null,Si=n=>`${Ne(n,n<10?1:0)} por ha`,yv=["Herbicida","Inseticida","Fungicida","Acaricida","Adjuvante","Outro"],Pf=["Adubo","Corretivo","Outro"],Rf=["Verm\xEDfugo","Vacina","Carrapaticida","Antibi\xF3tico","Suplemento","Outro"],mb=[...yv,...Pf,...Rf].filter((n,e,t)=>n!=="Outro"&&t.indexOf(n)===e).concat("Outro"),gb=["L/ha","mL/ha","kg/ha","g/ha","mL/animal","dose/animal","g/animal"],av=["Aveia preta","Azev\xE9m","Aveia + azev\xE9m","Milho silagem","Milho gr\xE3o","Sorgo","Soja","Feij\xE3o","Trigo","Tifton"],_b=["Novilhas","Bezerras","Vacas secas","Vacas em lacta\xE7\xE3o"],yb=["Cerca","Bebedouro / \xE1gua","Praga","Doen\xE7a","Planta daninha","Eros\xE3o","Outro"],cv=["O que foi feito?","Em qual \xE1rea?","Detalhes","Conferir e salvar"],Fc={gado:"#2F6FDB",descanso:"#3FA34D",plantado:"#E3B21C",colhido:"#B08968",livre:"#FFFFFF"},vb={gado:"Com gado",descanso:"Descanso",plantado:"Plantado",colhido:"Colhido",livre:"Sem registro"};function wb(){let n=s=>bt(new Date(Date.now()-s*864e5)),e={"ex-fung":{nome:"Fungicida (exemplo)",tipo:"Fungicida",unidade:"L/ha",carencia:14,reentrada:24,ativo:""},"ex-herb":{nome:"Herbicida (exemplo)",tipo:"Herbicida",unidade:"L/ha",carencia:7,reentrada:24,ativo:""},"ex-ureia":{nome:"Ureia (exemplo)",tipo:"Adubo",unidade:"kg/ha",carencia:0,reentrada:0,ativo:""},"ex-verm":{nome:"Verm\xEDfugo (exemplo)",tipo:"Verm\xEDfugo",unidade:"mL/animal",carencia:0,reentrada:0,ativo:""}},t=(s,o)=>({id:s,nome:e[s].nome,tipo:e[s].tipo,dose:o,unidade:e[s].unidade,carencia:e[s].carencia,reentrada:e[s].reentrada}),r="Funcion\xE1rio (exemplo)",i={"ex-1":{tipo:"plantio",areas:["P13","P14"],data:n(78),hora:"08:00",cultura:"Aveia + azev\xE9m",quem:r},"ex-2":{tipo:"adubacao",areas:["P5","P6"],data:n(9),hora:"09:10",produtos:[t("ex-ureia",100)],quem:r},"ex-3":{tipo:"gado_entrou",areas:["P3"],data:n(16),hora:"08:00",lote:"Novilhas",animais:24,quem:r},"ex-4":{tipo:"mudanca",de:"P3",areas:["P1"],data:n(10),hora:"08:10",lote:"Novilhas",animais:24,quem:r},"ex-5":{tipo:"mudanca",de:"P1",areas:["P2"],data:n(4),hora:"07:40",lote:"Novilhas",animais:24,quem:r},"ex-9":{tipo:"tratamento",areas:["P2"],data:n(1),hora:"16:30",lote:"Novilhas",animais:24,produtos:[t("ex-verm",10)],quem:r},"ex-10":{tipo:"gado_entrou",areas:["P7"],data:n(3),hora:"16:00",lote:"Vacas secas",animais:18,quem:r},"ex-11":{tipo:"avaliacao",areas:["P2"],data:n(0),hora:"07:30",condicao:"rapado",altura:6,quem:r},"ex-12":{tipo:"avaliacao",areas:["P3"],data:n(0),hora:"07:35",condicao:"pronto",altura:22,quem:r},"ex-13":{tipo:"avaliacao",areas:["P1"],data:n(0),hora:"07:40",condicao:"recuperando",altura:12,quem:r},"ex-6":{tipo:"aplicacao",areas:["P13","P14"],data:n(2),hora:"08:30",produtos:[t("ex-fung",.6)],calda:150,alvo:"Ferrugem",quem:r},"ex-7":{tipo:"ocorrencia",areas:["P10"],data:n(1),hora:"17:15",ocorr:"Cerca",obs:"Arame arrebentado perto da porteira do P7.",quem:r},"ex-8":{tipo:"aplicacao",areas:["P9"],data:n(0),hora:"07:00",produtos:[t("ex-herb",2)],calda:200,alvo:"Buva",quem:r}};for(let s of Object.values(i))s.ha=Math.round(s.areas.reduce((o,c)=>o+re[c].m2,0)/100)/100;return{produtos:e,registros:i,equipe:{}}}var Ib=wb(),_={view:"mapa",user:null,perfil:null,perfilLoaded:!1,perfilErr:null,authReady:!1,isAdmin:!1,me:"",canWrite:!1,remote:{registros:{},produtos:{},usuarios:{}},loaded:{},fromCache:{},pend:new Set,demoPref:jc.get("gtf.treino",!1)===!0,sandbox:{registros:{},produtos:{},equipe:{}},sel:null,flow:null,detail:null,filter:"todos",q:"",open:null,confirmDel:null,prodForm:null,userForm:null,pw:!1,pwErr:"",busy:!1,ver:0,listDirty:!1};function $t(){return _.demoPref===!0}function yf(n,e=!0){let t={};if(e&&$t()){for(let[r,i]of Object.entries(Ib[n]||{}))t[r]={...i,_demo:!0};for(let[r,i]of Object.entries(_.sandbox[n]||{}))t[r]={...i,_treino:!0};return t}for(let[r,i]of Object.entries(_.remote[n]||{}))t[r]=_.pend.has(n+"/"+r)?{...i,_pending:!0}:i;return t}var Uc={ver:-1};function ft(){if(Uc.ver===_.ver)return Uc;let n=Object.entries(yf("registros")).map(([e,t])=>({id:e,...t})).sort((e,t)=>(t.data+(t.hora||"")).localeCompare(e.data+(e.hora||""))||String(t.criadoEm||"").localeCompare(String(e.criadoEm||"")));return Uc={ver:_.ver,regs:n,prods:yf("produtos"),equipe:yf("equipe"),st:{}},Uc}var Ft=()=>{_.ver++};function Jc(){let n=ft();if(n.pasto)return n.pasto;let e={},t={},r={},i=(s,o,c)=>{let l=r[s]||[];for(let d=l.length-1;d>=0;d--)if(!l[d].to&&l[d].lote.toLowerCase()===o.toLowerCase()){l[d].to=c;break}t[s]=c};for(let s of[...n.regs].reverse()){if(!["gado_entrou","mudanca","gado_saiu"].includes(s.tipo))continue;let o=String(s.lote||"Lote").trim()||"Lote",c=o.toLowerCase(),l=e[c];if(s.tipo==="gado_saiu"){if(l&&(s.areas||[]).includes(l.piq))i(l.piq,o,s.data),delete e[c];else for(let f of s.areas||[])t[f]=s.data;continue}let d=(s.areas||[])[0];d&&(l?i(l.piq,o,s.data):s.de&&(t[s.de]=s.data),e[c]={nome:o,piq:d,since:s.data,hora:s.hora,animais:+s.animais||l&&l.animais||null},(r[d]=r[d]||[]).push({lote:o,from:s.data,to:null,animais:e[c].animais}))}return n.pasto={lots:e,exits:t,periods:r},n.pasto}var Pn=()=>Object.values(Jc().lots),pt=n=>Jc().lots[String(n||"").trim().toLowerCase()]||null,Gc=()=>[...new Set([...Pn().map(n=>n.nome),..._b])];function vv(n){return kn.filter(e=>e.tipo==="pastagem"&&e.id!==n).map(e=>{let t=Ut(e.id);return{u:e,st:t,block:t.key==="gado"?"Ocupado":t.car||t.reent?"Em car\xEAncia":null,rest:t.key==="descanso"?t.rest:null,cond:t.aval?pb[t.aval.condicao]??1:1}}).sort((e,t)=>!!e.block-!!t.block||e.cond-t.cond||(t.rest??-1)-(e.rest??-1)||t.u.m2-e.u.m2)}function wv(n){let e=vv(n),t=e.find(r=>!r.block&&r.cond===0)||e.find(r=>!r.block&&r.cond===1&&r.rest!=null)||e.find(r=>!r.block&&r.cond<2)||e.find(r=>!r.block);return t?t.u.id:null}function Ut(n){let e=ft();if(e.st[n])return e.st[n];let t=e.regs.filter(M=>(M.areas||[]).includes(n)||M.de===n),r=new Date,i=null,s=null;for(let M of t)if(M.tipo==="aplicacao")for(let Y of M.produtos||[]){let k=dt(M.data,M.hora||"00:00"),O=+Y.carencia||0,w=+Y.reentrada||0;if(O){let g=dt(M.data);g.setDate(g.getDate()+O),g>r&&(!i||g>i.until)&&(i={until:g,nome:Y.nome,r:M})}if(w){let g=new Date(k.getTime()+w*36e5);g>r&&(!s||g>s.until)&&(s={until:g,nome:Y.nome,r:M})}}let o=Jc(),c=Object.values(o.lots).filter(M=>M.piq===n),l=o.exits[n],d=t.find(M=>M.tipo==="plantio"||M.tipo==="colheita"),f="livre",m=t.length?`\xDAltimo: ${(so[t[0].tipo]||{}).short||t[0].tipo} em ${Ie(t[0].data)}`:"Sem registro",v=null,A=null,N=null;if(c.length)A=ut(c[0].since)+1,f="gado",m=`${c[0].nome}${c.length>1?" +"+(c.length-1):""} \xB7 dia ${A}`,v={data:c[0].since};else if(l&&(!d||l>=d.data))N=Math.max(0,ut(l)),f="descanso",m=`Descanso \xB7 ${N===0?"desde hoje":Ee(N,"dia","dias")}`,v={data:l};else if(d){let M=ut(d.data);v=d,d.tipo==="plantio"?(f="plantado",m=`${d.cultura||"Plantado"} \xB7 ${M<=0?"plantado hoje":Ee(M,"dia","dias")}`):(f="colhido",m=`Colhido em ${Ie(d.data)}`)}let V=t.findIndex(M=>M.tipo==="avaliacao"),L=t.findIndex(M=>["gado_entrou","mudanca","gado_saiu"].includes(M.tipo)),z=V>=0&&(L<0||V<L)?t[V]:null,$={key:f,text:m,car:i,reent:s,ev:v,rs:t,occ:c,dia:A,rest:N,aval:z,lot:c.length?_r(c[0].animais,n):null,lastPl:t.find(M=>M.tipo==="plantio"),lastAp:t.find(M=>M.tipo==="aplicacao"),lastTr:t.find(M=>M.tipo==="tratamento")};return e.st[n]=$,$}function Ef(n){let e=`<span class="chip ${n.key}">${R(n.text)}</span>`;if(n.aval&&At[n.aval.condicao]){let t=At[n.aval.condicao];e+=`<span class="chip ${t.chip}">${U(t.icon,"sm")}${t.short}${n.aval.altura?` \xB7 ${n.aval.altura} cm`:""} \xB7 ${Ie(n.aval.data)}</span>`}return n.reent&&(e+=`<span class="chip car">${U("triangle-alert","sm")}N\xE3o entrar at\xE9 ${Sf(n.reent.until)}</span>`),n.car&&(e+=`<span class="chip car">${U("clock","sm")}Car\xEAncia \xB7 libera ${Ie(bt(n.car.until))}</span>`),e}function Hc(n){let e=n&&n.code||"";lt(e==="permission-denied"?"Sem permiss\xE3o para essa a\xE7\xE3o. O registro n\xE3o foi aceito.":`N\xE3o foi poss\xEDvel salvar (${e||"erro"}).`),Ft(),Ue()}function Wc(n,e,t){if($t()){_.sandbox[n]=_.sandbox[n]||{},_.sandbox[n][e]=t,Ft();return}let r={...t};n==="registros"&&(r.autorUid=_.user.uid,r.autorNome=_.me,r.criadoTs=_f()),Mc(pr(Mt,n,e),r).catch(Hc)}function lv(n,e){if(_.sandbox[n]&&_.sandbox[n][e]){delete _.sandbox[n][e],Ft();return}$t()||nv(pr(Mt,n,e)).catch(Hc)}var bf=n=>n&&typeof n.toMillis=="function"?n.toMillis():n&&n.seconds?n.seconds*1e3:null;function uv(n){if(n._demo)return!1;if(n._treino||_.isAdmin)return!0;if(!_.user||n.autorUid!==_.user.uid)return!1;let e=bf(n.criadoTs)||Date.parse(n.criadoEm||"");return!e||Date.now()-e<24*36e5}var yr=()=>navigator.onLine===!1||!!_.loaded.registros&&_.fromCache.registros===!0,Iv=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Ev=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ai=null;window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Ai=n,_.view==="cadastros"&&Pe()});window.addEventListener("online",()=>Ue());window.addEventListener("offline",()=>Ue());function bv(n,e,t){let r=document.createElement("a");r.href=URL.createObjectURL(new Blob([e],{type:t})),r.download=n,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},2e3)}var Eb=0;function Tv(n,e={}){let t=We.size[0],r=We.size[1],i=++Eb,s=We.sede.map(k=>`<path d="${mr(k.poly)}" fill="#fff" fill-opacity=".18" stroke="#fff" stroke-opacity=".8" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join(""),o=We.sede.flatMap(k=>k.poly),c=o.reduce((k,O)=>k+O[0],0)/o.length,l=o.reduce((k,O)=>k+O[1],0)/o.length;n.innerHTML=`<div class="mapwrap"><svg class="map" role="img" aria-label="Mapa das \xE1reas da fazenda">
    <defs><pattern id="h${i}" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="3.5" height="9" fill="#FF6B1A"/></pattern></defs>
    <rect x="-5000" y="-5000" width="${t+1e4}" height="${r+1e4}" fill="#1C2A21"/>
    <image href="${We.img}" x="0" y="0" width="${t}" height="${r}" preserveAspectRatio="none"/>
    <path d="${mr(We.corredor)}" fill="#F2C94C" fill-opacity=".85"/>
    ${s}
    <g class="ul">${kn.map(k=>`<g class="u" data-id="${k.id}"><path class="uf" d="${mr(k.poly)}"/><path class="uh" d="${mr(k.poly)}" fill="url(#h${i})" fill-opacity=".55" style="display:none"/><path class="us" d="${mr(k.poly)}" vector-effect="non-scaling-stroke"/></g>`).join("")}</g>
    <g class="pl">${We.pontos.map(k=>`<g class="pt" data-x="${k.p[0]}" data-y="${k.p[1]}"><circle r="5" fill="#4DABF7" stroke="#fff" stroke-width="1.5"/></g>`).join("")}
      ${kn.map(k=>`<g class="lb" data-id="${k.id}" data-x="${k.c[0]}" data-y="${k.c[1]}"><rect x="${-(8+k.code.length*5)}" y="-11" width="${16+k.code.length*10}" height="22" rx="6"/><text>${k.code}</text></g>`).join("")}
      <g class="lb" data-x="${c}" data-y="${l-34}"><rect x="-24" y="-11" width="48" height="22" rx="6"/><text>Sede</text></g>
    </g></svg>
    ${e.legend?`<div class="legend" aria-label="Legenda">
      <span class="lgd"><span class="sw" style="background:${Fc.gado}"></span>Com gado \xB7 dia</span>
      <span class="lgd"><span class="sw" style="background:#E8590C"></span>Hora de mudar</span>
      <span class="lgd"><span class="sw" style="background:#2F9E44"></span>Pronto p/ entrar</span>
      <span class="lgd"><span class="sw" style="background:${Fc.descanso}"></span>Descanso \xB7 dias</span>
      <span class="lgd"><span class="sw" style="background:${Fc.plantado}"></span>Plantado</span>
      <span class="lgd"><span class="sw" style="background:repeating-linear-gradient(45deg,#FF6B1A 0 3px,transparent 3px 6px)"></span>Car\xEAncia</span>
      <span class="lgd"><span class="sw" style="background:transparent"></span>Sem registro</span></div>`:""}
    <div class="zoom"><button data-z="in" aria-label="Aproximar">${U("plus")}</button><button data-z="out" aria-label="Afastar">${U("minus")}</button><button data-z="fit" aria-label="Ver tudo">${U("locate-fixed")}</button></div>
    <div class="attr">Imagem: Google Earth \xB7 Airbus</div>
    <div class="cardslot"></div></div>`;let d=n.querySelector("svg"),f=null,m=()=>d.getBoundingClientRect();function v(){let k=m();if(!k.width)return;let O=f.w/k.width;d.querySelectorAll("[data-x]").forEach(y=>y.setAttribute("transform",`translate(${y.dataset.x},${y.dataset.y}) scale(${O})`));let w=[],g=[...d.querySelectorAll(".lb")].map(y=>({g:y,id:y.dataset.id,w:+y.querySelector("rect").getAttribute("width"),pri:y.classList.contains("sel")?1e9:y.classList.contains("occ")?1e8:y.classList.contains("ready")?5e7:y.dataset.id?re[y.dataset.id].m2:5e3})).sort((y,E)=>E.pri-y.pri);for(let y of g){let E=(y.g.dataset.x-f.x)/O,b=(y.g.dataset.y-f.y)/O,T=[E-y.w/2-2,b-13,E+y.w/2+2,b+13],I=w.some(Ge=>T[0]<Ge[2]&&T[2]>Ge[0]&&T[1]<Ge[3]&&T[3]>Ge[1]);y.g.style.display=I?"none":"",I||w.push(T)}}function A(){d.setAttribute("viewBox",`${f.x} ${f.y} ${f.w} ${f.h}`),v()}function N(){let k=m(),O=k.width?k.height/k.width:r/t;f.w=Math.min(Math.max(f.w,80),t*1.2),f.h=f.w*O,f.x=Math.min(Math.max(f.x,-f.w*.4),t-f.w*.6),f.y=Math.min(Math.max(f.y,-f.h*.4),r-f.h*.6)}function V(k=We.bbox,O=.06){let w=m();if(!w.width)return!1;let g=w.height/w.width,y=(k[2]-k[0])*(1+O*2),E=(k[3]-k[1])*(1+O*2);return E/y>g?y=E/g:E=y*g,f={x:(k[0]+k[2])/2-y/2,y:(k[1]+k[3])/2-E/2,w:y,h:E},N(),A(),!0}function L(k,O,w){let g=m();if(!f)return;O==null&&(O=g.left+g.width/2,w=g.top+g.height/2);let y=(O-g.left)/g.width,E=(w-g.top)/g.height,b=f.x+y*f.w,T=f.y+E*f.h;f.w/=k,f.h/=k,f.x=b-y*f.w,f.y=T-E*f.h,N(),A()}let z=new Map,$=null;d.addEventListener("pointerdown",k=>{if(f){try{d.setPointerCapture(k.pointerId)}catch{}if(z.set(k.pointerId,[k.clientX,k.clientY]),z.size===1){let O=k.target.closest&&k.target.closest("[data-id]");$={mode:"pan",sx:k.clientX,sy:k.clientY,vb:{...f},moved:!1,tid:O?O.dataset.id:null}}else if(z.size===2){let[O,w]=[...z.values()];$={mode:"pinch",d0:Math.hypot(O[0]-w[0],O[1]-w[1])||1,m0:[(O[0]+w[0])/2,(O[1]+w[1])/2],vb:{...f},moved:!0}}}}),d.addEventListener("pointermove",k=>{if(!z.has(k.pointerId)||!$)return;z.set(k.pointerId,[k.clientX,k.clientY]);let O=m();if($.mode==="pan"&&z.size===1){let w=k.clientX-$.sx,g=k.clientY-$.sy;Math.hypot(w,g)>7&&($.moved=!0),$.moved&&(f.x=$.vb.x-w/O.width*$.vb.w,f.y=$.vb.y-g/O.height*$.vb.h,N(),A())}else if($.mode==="pinch"&&z.size===2){let[w,g]=[...z.values()],y=Math.hypot(w[0]-g[0],w[1]-g[1]),E=[(w[0]+g[0])/2,(w[1]+g[1])/2],b=y/$.d0,T=$.vb.x+($.m0[0]-O.left)/O.width*$.vb.w,I=$.vb.y+($.m0[1]-O.top)/O.height*$.vb.h;f.w=$.vb.w/b,f.h=$.vb.h/b,f.x=T-(E[0]-O.left)/O.width*f.w,f.y=I-(E[1]-O.top)/O.height*f.h,N(),A()}});let M=k=>{if(z.has(k.pointerId))if(z.delete(k.pointerId),$&&$.mode==="pan"&&!$.moved&&z.size===0&&k.type==="pointerup"&&e.onTap&&e.onTap($.tid),z.size===1){let[O]=[...z.values()];$={mode:"pan",sx:O[0],sy:O[1],vb:{...f},moved:!0,tid:null}}else z.size||($=null)};d.addEventListener("pointerup",M),d.addEventListener("pointercancel",M),d.addEventListener("wheel",k=>{k.preventDefault(),L(Math.exp(-k.deltaY*.0015),k.clientX,k.clientY)},{passive:!1}),n.querySelector(".zoom").addEventListener("click",k=>{let O=k.target.closest("[data-z]");O&&(O.dataset.z==="fit"?V():L(O.dataset.z==="in"?1.5:1/1.5))}),new ResizeObserver(()=>{let k=m();k.width&&(f?(f.h=f.w*k.height/k.width,N(),A()):V())}).observe(d);function Y(){d.querySelectorAll(".u").forEach(k=>{let O=k.dataset.id,w=k.querySelector(".uf"),g=k.querySelector(".uh");if(e.select){let y=e.select().has(O);w.setAttribute("fill",y?"#FFD43B":"#FFFFFF"),w.setAttribute("fill-opacity",y?".55":".08"),g.style.display="none",k.classList.toggle("sel",y)}else{let y=Ut(O);w.setAttribute("fill",Fc[y.key]),w.setAttribute("fill-opacity",y.key==="livre"?".06":".45"),g.style.display=y.car||y.reent?"":"none",k.classList.toggle("sel",_.sel===O)}}),d.querySelectorAll(".lb[data-id]").forEach(k=>{let O=k.dataset.id,w=re[O],g=w.code,y="";if(!e.select){let T=Ut(O),I=T.aval&&T.aval.condicao;T.key==="gado"?(g=`${w.code} \xB7 dia ${T.dia}`,y=I==="rapado"?"occ hot":"occ"):I==="pronto"?(g=T.rest!=null?`${w.code} \xB7 ${T.rest}d`:`${w.code} \xB7 pronto`,y="ready"):T.key==="descanso"&&(g=`${w.code} \xB7 ${T.rest}d`,y="rest")}let E=Math.round(16+g.length*7.4),b=k.querySelector("rect");b.setAttribute("x",-E/2),b.setAttribute("width",E),k.querySelector("text").textContent=g;for(let T of["occ","rest","ready","hot"])k.classList.toggle(T,y.split(" ").includes(T));k.classList.toggle("sel",e.select?e.select().has(O):_.sel===O)}),f&&v()}return Y(),{refresh:Y,fit:V,host:n}}function Pi(){let n=0;for(let e of _.pend)e.startsWith("registros/")&&n++;return n}function bb(){let n=J("#sync"),e=Pi(),t="",r="Tudo enviado",i='<span class="dot"></span>';$t()?(t="wait",r="Modo treino"):_.loaded.registros?e&&yr()?(t="off",r=`${e} sem sinal`):e?(t="wait",r=`Enviando ${e}\u2026`,i=U("refresh-cw","sm spin")):yr()&&(t="off",r="Sem sinal"):(t="wait",r="Carregando\u2026"),n.className="sync "+t,n.innerHTML=i+R(r);let s=J("#who");s&&(s.textContent=_.me?" \xB7 "+_.me:""),J("#banner").innerHTML=$t()?'<div class="banner"><p><b>Modo treino.</b> Nada do que for registrado \xE9 salvo.</p><button data-act="demo-hide">Sair do treino</button></div>':"";let o=[["mapa","map","Mapa"],["areas","layers","\xC1reas"],null,["caderno","book-open","Caderno"],["cadastros","settings",_.isAdmin?"Admin":"Conta"]];J("#bar").innerHTML=o.map(c=>c?`<button class="nb" data-act="nav" data-v="${c[0]}" ${_.view===c[0]?'aria-current="page"':""}>${U(c[1])}<span>${c[2]}</span></button>`:`<button class="nb reg" data-act="open-flow" ${_.canWrite?"":"disabled"}><span class="plus">${U("plus")}</span><span>Registrar</span></button>`).join("")}var gr=null;function Av(){let n=J("#v-mapa");gr||(gr=Tv(n,{legend:!0,onTap:e=>{_.sel=e||null,gr.refresh(),Tf()}})),gr.refresh(),Tf()}function Tf(){let n=J("#v-mapa .cardslot");if(!n)return;let e=_.canWrite?"":"disabled";if(!_.sel){let o=Pn();n.innerHTML=`<div class="mapcard rot" aria-label="Lotes no pasto">${o.length?o.map(c=>{let l=re[c.piq],d=wv(c.piq);return`<div class="rot-row"><span class="ucode gado">${R(l.code)}</span><span class="uinfo"><b>${R(c.nome)}${c.animais?` \xB7 ${c.animais}`:""} \xB7 dia ${ut(c.since)+1}</b><span>${Ut(l.id).aval?.condicao==="rapado"?"Pasto rapado":`${c.animais?Si(_r(c.animais,l.id)):"No "+R(l.code)}`}${d?` \xB7 pr\xF3ximo: ${R(re[d].code)}`:""}</span></span><button class="btn sm pri" data-act="q-mudar" data-id="${l.id}" data-lote="${R(c.nome)}" ${e}>Mudar</button></div>`}).join(""):'<div class="rot-row"><span class="uinfo"><b>Nenhum lote no pasto</b><span>Toque no piquete onde soltou as novilhas.</span></span></div>'}</div>`;return}let t=re[_.sel],r=Ut(t.id),i=_v(t),s=r.rs[0];n.innerHTML=`<div class="mapcard" role="dialog" aria-label="${R(ht(t))}">
    <div class="mc-h"><div><div class="mc-t">${R(ht(t))}</div><div class="mc-s">${R(i?i.nome:"")} \xB7 ${t.tipo==="pastagem"?"Pastagem":"Lavoura"} \xB7 ${Tt(t.m2)}</div></div>
    <button class="xbtn" data-act="card-close" aria-label="Fechar">${U("x")}</button></div>
    ${r.occ.length?r.occ.map(o=>`<div class="occ-box">${U("log-in")}<div><b>${R(o.nome)}${o.animais?` \xB7 ${Ee(o.animais,"animal","animais")}`:""}</b><span>Dia ${ut(o.since)+1} \xB7 entraram em ${Ie(o.since)}${o.animais?` \xB7 ${Si(_r(o.animais,t.id))}`:""}</span></div></div>`).join(""):`<div class="chips">${Ef(r)}</div>`}
    ${r.occ.length&&(r.car||r.reent||r.aval)?`<div class="chips">${Ef(r).replace(/^<span class="chip gado">.*?<\/span>/,"")}</div>`:""}
    ${t.tipo==="pastagem"?(r.occ.length?`<div class="row2"><button class="btn ghost" data-act="q-tirar" data-id="${t.id}" ${e}>Tirar do pasto</button><button class="btn pri" data-act="q-mudar" data-id="${t.id}" ${e}>${U("arrow-right-left")}Mudar</button></div>`:`<button class="btn pri" data-act="q-soltar" data-id="${t.id}" ${e}>${U("log-in")}Soltar novilhas aqui</button>`)+`<div class="row3"><button class="btn ghost" data-act="open-detail" data-id="${t.id}">Hist\xF3rico</button><button class="btn ghost" data-act="q-avaliar" data-id="${t.id}" ${e}>Avaliar pasto</button><button class="btn gold" data-act="q-trat" data-id="${t.id}" ${e}>Tratamento</button></div>`:`<div class="row2"><button class="btn ghost" data-act="open-detail" data-id="${t.id}">Hist\xF3rico</button><button class="btn gold" data-act="open-flow" data-id="${t.id}" ${e}>${U("plus")}Registrar aqui</button></div>`}</div>`}function Sv(){let n=document.activeElement;return n&&J("#v-list").contains(n)&&/INPUT|TEXTAREA|SELECT/.test(n.tagName)}function Pe(){if(_.view==="mapa")return;if(Sv()){_.listDirty=!0;return}_.listDirty=!1;let n=J("#v-list"),e=n.scrollTop;n.innerHTML=`<div class="pagew">${_.view==="areas"?Pv():_.view==="caderno"?Pb():kb()}</div>`,n.scrollTop=e}document.addEventListener("focusout",()=>setTimeout(()=>{_.listDirty&&!Sv()&&Pe()},0));function Tb(n,e="open-detail"){let t=Ut(n.id),r=[t.text];return t.car&&r.push(`car\xEAncia at\xE9 ${Ie(bt(t.car.until))}`),`<button class="urow" data-act="${e}" data-id="${n.id}"><span class="ucode ${t.key}">${R(n.code)}${t.car||t.reent?'<i class="flag" title="Em car\xEAncia"></i>':""}</span>
    <span class="uinfo"><b>${R(ht(n))}</b><span>${R(r.join(" \xB7 "))}</span></span><span class="uha">${Tt(n.m2)}</span>${U("chevron-right","sm")}</button>`}function Pv(){let n=_.q.trim().toLowerCase(),e=kn.reduce((r,i)=>r+i.m2,0),t=Yc.map(r=>{let i=r.units.filter(o=>!n||ht(o).toLowerCase().includes(n)||o.code.toLowerCase().includes(n)||r.nome.toLowerCase().includes(n));if(!i.length)return"";let s=r.units.reduce((o,c)=>o+c.m2,0);return`<section class="card"><div class="card-h"><h3>${R(r.nome)}</h3><span class="meta">${Ee(r.units.length,"piquete","piquetes")} \xB7 ${Tt(s)}</span></div>${i.map(o=>Tb(o)).join("")}</section>`}).join("");return`<div class="pg-h"><div><span class="eyebrow">\xC1reas de produ\xE7\xE3o</span><h2>Pastagens e lavouras</h2><p>${Ee(kn.length,"piquete","piquetes")} \xB7 ${Tt(e)} de pastagem</p></div></div>
    <label class="search">${U("search")}<input id="q" type="search" placeholder="Buscar piquete ou \xE1rea" value="${R(_.q)}" autocomplete="off"></label>
    ${t||'<div class="empty"><b>Nada encontrado</b><span>Tente \u201CP7\u201D ou \u201C\xC1rea 3\u201D.</span></div>'}
    <div class="placeholder">${U("wheat","lg")}<div><b>Lavouras</b><p>Entram aqui assim que chegar o arquivo do Google Earth com os talh\xF5es. Cada lavoura vai ter o mesmo controle: plantio, aplica\xE7\xF5es, aduba\xE7\xE3o e colheita.</p></div></div>`}function Rv(n){let e=[];if(n.produtos?.length)for(let t of n.produtos)e.push(`<div class="rl">${R(t.nome)} \xB7 <b>${Ne(t.dose)} ${R(t.unidade)}</b></div>`);if(n.tipo==="aplicacao"){let t=Math.max(0,...(n.produtos||[]).map(i=>+i.carencia||0));if(t){let i=dt(n.data);i.setDate(i.getDate()+t),e.push(`<div class="rl car">Car\xEAncia ${t} dias \xB7 libera em ${Ie(bt(i))}</div>`)}let r=[];n.calda&&r.push(`calda ${Ne(n.calda)} L/ha`),n.alvo&&r.push(`alvo: ${R(n.alvo)}`),r.length&&e.push(`<div class="rl">${r.join(" \xB7 ")}</div>`)}return n.tipo==="plantio"&&e.push(`<div class="rl"><b>${R(n.cultura||"")}</b>${n.variedade?" \xB7 "+R(n.variedade):""}${n.semente?` \xB7 ${Ne(n.semente)} kg/ha de semente`:""}</div>`),n.tipo==="colheita"&&(n.cultura||n.producao)&&e.push(`<div class="rl">${R(n.cultura||"")}${n.producao?` \xB7 ${Ne(n.producao)} ${R(n.prodUn||"")}`:""}</div>`),["gado_entrou","gado_saiu","mudanca","tratamento"].includes(n.tipo)&&e.push(`<div class="rl">${R(n.lote||"Lote")}${n.animais?` \xB7 <b>${Ee(+n.animais,"animal","animais")}</b>`:""}</div>`),n.tipo==="avaliacao"&&At[n.condicao]&&e.push(`<div class="rl"><b>${At[n.condicao].label}</b>${n.altura?` \xB7 ${Ne(n.altura)} cm`:""}</div>`),n.tipo==="ocorrencia"&&n.ocorr&&e.push(`<div class="rl"><b>${R(n.ocorr)}</b></div>`),n.obs&&e.push(`<div class="rl">${R(n.obs)}</div>`),e.join("")}function Ab(n,e=!0){let t=so[n.tipo]||{short:n.tipo,icon:"info"},r=(n.areas||[]).map(o=>re[o]?.code||o),i=_.open===n.id,s=[`${U("user","sm")}${R(n.quem||"\u2014")}`,`${U("clock","sm")}${R(n.hora||"")}`];return n.ha&&s.push(`${Ne(n.ha)} ha`),`<div class="rec" data-act="rec-toggle" data-id="${R(n.id)}" role="button" tabindex="0" aria-expanded="${i}">
    <span class="ricon ${n.tipo}">${U(t.icon)}</span>
    <div class="rbody"><div class="rt">${R(t.short)}${n.tipo==="mudanca"?` \xB7 ${R(re[n.de]?.code||n.de||"?")} \u2192 ${R(r.join(", "))}`:e?` \xB7 ${R(r.join(", "))}`:""}</div>${Rv(n)}
      <div class="rm">${s.map(o=>`<span style="display:inline-flex;gap:4px;align-items:center">${o}</span>`).join("")}${n._pending?`<span class="chip pend">${U("cloud-off","sm")}Aguardando envio</span>`:""}${n._demo?'<span class="chip demo">Exemplo</span>':""}${n._treino?'<span class="chip demo">Treino</span>':""}</div>
      ${i&&!uv(n)&&!n._demo?`<div class="rx"><span class="note">Lan\xE7ado por ${R(n.autorNome||n.quem||"\u2014")}${bf(n.criadoTs)?" em "+R(new Date(bf(n.criadoTs)).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})):""}. S\xF3 o administrador pode excluir.</span></div>`:""}
      ${i&&uv(n)?_.confirmDel===n.id?`<div class="rx"><span style="align-self:center;font-weight:600">Excluir este registro?</span><button class="btn sm danger" data-act="rec-del-yes" data-id="${R(n.id)}">Excluir</button><button class="btn sm ghost" data-act="rec-del-no">Cancelar</button></div>`:`<div class="rx"><span class="note">Lan\xE7ado ${n.criadoEm?"em "+R(new Date(n.criadoEm).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})):""}</span><button class="btn sm ghost" data-act="rec-del" data-id="${R(n.id)}">${U("trash-2","sm")}Excluir</button></div>`:""}
    </div></div>`}function Cv(n,e=!0){let t="",r=null,i=[],s=()=>{r&&(t+=`<div class="day">${R(fb(r))}</div><section class="card">${i.join("")}</section>`),i=[]};for(let o of n)o.data!==r&&(s(),r=o.data),i.push(Ab(o,e));return s(),t}var Sb=[["todos","Todos"],["gado","Gado"],["avaliacao","Avalia\xE7\xF5es"],["tratamento","Tratamentos"],["aplicacao","Aplica\xE7\xF5es"],["adubacao","Aduba\xE7\xF5es"],["plantio","Plantios"],["colheita","Colheitas"],["ocorrencia","Ocorr\xEAncias"]];function Pb(){let n=ft().regs,e=n.filter(t=>_.filter==="todos"||t.tipo===_.filter||_.filter==="gado"&&(t.tipo.startsWith("gado")||t.tipo==="mudanca"));return`<div class="pg-h"><div><span class="eyebrow">Caderno de campo</span><h2>Registros</h2><p>${Ee(n.length,"registro","registros")}${Pi()?` \xB7 ${Pi()} aguardando envio`:""}</p></div>
    ${n.length?`<button class="btn sm ghost" data-act="export">${U("download","sm")}Exportar planilha</button>`:""}</div>
    <div class="filters" role="toolbar" aria-label="Filtrar">${Sb.map(([t,r])=>`<button class="fbtn" data-act="filter" data-v="${t}" aria-pressed="${_.filter===t}">${r}</button>`).join("")}</div>
    ${e.length?Cv(e):`<div class="empty">${U("notebook-pen","lg")}<b>${n.length?"Nenhum registro deste tipo":"Nenhum registro ainda"}</b><span>Toque em <b>Registrar</b> para lan\xE7ar a primeira aplica\xE7\xE3o, plantio ou movimenta\xE7\xE3o de gado.</span>
      ${!n.length&&!$t()?'<button class="btn ghost" data-act="demo-show">Ver como fica com exemplos</button>':""}</div>`}`}function kv(n,e="pf"){return`<div class="newp">
    <div class="field"><label for="${e}-nome">Nome comercial</label><input class="inp" id="${e}-nome" data-pf="nome" value="${R(n.nome)}" placeholder="Como est\xE1 escrito na embalagem"></div>
    <div class="field"><label for="${e}-ativo">Princ\xEDpio ativo <span class="hint">(opcional)</span></label><input class="inp" id="${e}-ativo" data-pf="ativo" value="${R(n.ativo)}"></div>
    <div class="grid2"><div class="field"><label for="${e}-tipo">Tipo</label><select class="inp" id="${e}-tipo" data-pf="tipo">${mb.map(t=>`<option ${n.tipo===t?"selected":""}>${t}</option>`).join("")}</select></div>
    <div class="field"><label for="${e}-un">Dose em</label><select class="inp" id="${e}-un" data-pf="unidade">${gb.map(t=>`<option ${n.unidade===t?"selected":""}>${t}</option>`).join("")}</select></div></div>
    <div class="grid2"><div class="field"><label for="${e}-car">Car\xEAncia (dias)</label><input class="inp" id="${e}-car" data-pf="carencia" type="number" inputmode="numeric" min="0" value="${R(n.carencia)}"><span class="hint">At\xE9 pastejar ou colher</span></div>
    <div class="field"><label for="${e}-re">Reentrada (horas)</label><input class="inp" id="${e}-re" data-pf="reentrada" type="number" inputmode="numeric" min="0" value="${R(n.reentrada)}"><span class="hint">At\xE9 pessoas entrarem</span></div></div>
  </div>`}function Rb(){return`<div class="newp"><div class="field"><label for="pw-a">Senha atual</label><input class="inp" id="pw-a" type="password" autocomplete="current-password"></div>
    <div class="field"><label for="pw-b">Nova senha</label><input class="inp" id="pw-b" type="password" autocomplete="new-password"><span class="hint">M\xEDnimo de 6 caracteres.</span></div>
    ${_.pwErr?`<div class="alert">${U("triangle-alert")}<span>${R(_.pwErr)}</span></div>`:""}
    <div class="row2"><button class="btn ghost" data-act="pw-cancel">Cancelar</button><button class="btn pri" data-act="pw-save">Salvar senha</button></div></div>`}function Dv(){return Ai?`<button class="btn gold" data-act="install">${U("download")}Instalar app no celular</button>`:Ev()?'<p class="note">No iPhone, abra este endere\xE7o no <b>Safari</b>, toque em <b>Compartilhar</b> (o quadrado com a seta para cima) e depois em <b>Adicionar \xE0 Tela de In\xEDcio</b>.</p>':'<p class="note">No Android, abra no <b>Chrome</b>, toque no menu <b>\u22EE</b> e depois em <b>Instalar app</b> (ou <b>Adicionar \xE0 tela inicial</b>).</p>'}function Cb(){let n=Object.entries(_.remote.usuarios||{}).filter(([,t])=>t.papel!=="admin").sort((t,r)=>String(t[1].nome).localeCompare(String(r[1].nome))),e=_.userForm;return`<section class="card"><div class="card-h"><h3>L\xEDderes</h3><span class="meta">${Ee(n.filter(([,t])=>t.ativo).length,"ativo","ativos")}</span></div>
    ${n.length?n.map(([t,r])=>`<div class="kvrow"><span class="uinfo"><b>${R(r.nome)}</b><span>${R(r.email)}${r.ativo?"":' \xB7 <b style="color:var(--danger)">bloqueado</b>'}</span></span>
      <span style="display:flex;gap:6px;flex:none"><button class="btn sm ghost" data-act="u-reset" data-id="${R(t)}">Senha</button><button class="btn sm ${r.ativo?"danger":"pri"}" data-act="u-toggle" data-id="${R(t)}">${r.ativo?"Bloquear":"Liberar"}</button></span></div>`).join(""):'<p class="note" style="padding:0 16px">Nenhum l\xEDder cadastrado ainda.</p>'}
    <div class="card-b" style="padding-top:12px">${e?`<div class="newp">
      <div class="field"><label for="uf-nome">Nome</label><input class="inp" id="uf-nome" data-uf="nome" value="${R(e.nome)}" autocomplete="off"></div>
      <div class="field"><label for="uf-email">E-mail para entrar</label><input class="inp" id="uf-email" data-uf="email" type="email" inputmode="email" autocapitalize="none" value="${R(e.email)}" autocomplete="off">
        <span class="hint">Quem n\xE3o tem e-mail pode usar <b>gtfmilk.campo+nome@gmail.com</b> (por exemplo gtfmilk.campo+joao@gmail.com). Os avisos dessa conta chegam no e-mail da fazenda.</span></div>
      <div class="field"><label for="uf-senha">Senha inicial</label><input class="inp" id="uf-senha" data-uf="senha" type="text" value="${R(e.senha)}" autocomplete="off" autocapitalize="none"><span class="hint">M\xEDnimo de 6 caracteres. O l\xEDder pode trocar depois em Conta.</span></div>
      ${e.err?`<div class="alert">${U("triangle-alert")}<span>${R(e.err)}</span></div>`:""}
      <div class="row2"><button class="btn ghost" data-act="u-cancel">Cancelar</button><button class="btn pri" data-act="u-save" ${_.busy?"disabled":""}>${_.busy?"Cadastrando\u2026":"Cadastrar l\xEDder"}</button></div></div>`:`<button class="btn ghost" data-act="u-new">${U("plus","sm")}Cadastrar l\xEDder</button>`}</div></section>`}function kb(){let n=ft(),e=Object.entries(n.prods).filter(([,d])=>!d._demo).sort((d,f)=>String(d[1].nome).localeCompare(String(f[1].nome))),t=e.filter(([,d])=>d.conferir).length,r=Pi(),i=$t()?"Modo treino ligado: nada \xE9 salvo.":yr()?`Sem sinal agora. O que for registrado fica no celular e vai sozinho quando o sinal voltar.${Ev()?" No iPhone, abra o app quando chegar no Wi-Fi para enviar.":""}`:r?"Enviando os registros\u2026":"Tudo enviado para o caderno da fazenda.",s=_.prodForm,o=d=>Rf.includes(d.tipo)&&d.tipo!=="Outro"?["tratamento","syringe"]:Pf.includes(d.tipo)&&d.tipo!=="Outro"?["adubacao","package"]:["aplicacao","droplets"],c=([d,f])=>{let[m,v]=o(f),A=`<span class="ricon ${m}">${U(v)}</span><span class="uinfo"><b>${R(f.nome)}</b><span>${R(f.tipo)} \xB7 ${R(f.unidade)}${+f.carencia?` \xB7 car\xEAncia ${f.carencia} d`:""}${+f.reentrada?` \xB7 reentrada ${f.reentrada} h`:""}</span></span>${f.conferir?'<span class="chip pend">A conferir</span>':""}`;return _.isAdmin?`<button class="urow" style="padding-inline:0" data-act="p-edit" data-id="${R(d)}">${A}${U("pencil","sm")}</button>`:`<div class="urow" style="padding-inline:0">${A}</div>`},l=`<div class="pg-h"><div><span class="eyebrow">${_.isAdmin?"Administrador":"L\xEDder"}</span><h2>${_.isAdmin?"Administra\xE7\xE3o":"Conta"}</h2></div></div>`;return l+=`<section class="card"><div class="card-h"><h3>Seus dados</h3></div><div class="card-b">
    ${_.isAdmin?`<div class="field"><label for="me-nome">Seu nome nos registros</label><div class="inrow"><input class="inp" id="me-nome" value="${R(_.perfil&&_.perfil.nome?_.perfil.nome:"")}" placeholder="Ex.: Ivonei"><button class="btn pri" data-act="me-save">Salvar</button></div></div>`:`<div class="kv"><span>Nome</span><span><b>${R(_.me)}</b></span></div>`}
    <div class="kv"><span>E-mail</span><span style="overflow-wrap:anywhere;text-align:right"><b>${R(_.user?_.user.email:"")}</b></span></div>
    <div class="kv"><span>Aguardando envio</span><span><b>${Ee(r,"registro","registros")}</b></span></div>
    <p class="note">${R(i)}</p>
    ${_.pw?Rb():`<div class="row2"><button class="btn ghost" data-act="pw-open">Trocar senha</button><button class="btn ghost" data-act="logout">${U("log-out","sm")}Sair</button></div>`}
  </div></section>`,Iv()||(l+=`<section class="card"><div class="card-h"><h3>Instalar no celular</h3></div><div class="card-b">${Dv()}</div></section>`),_.isAdmin&&(l+=Cb()),l+=`<section class="card"><div class="card-h"><h3>Produtos</h3><span class="meta">${Ee(e.length,"produto","produtos")}</span></div><div class="card-b">
    ${_.isAdmin&&t?`<div class="selsum">${U("info")}<span>${Ee(t,"produto cadastrado","produtos cadastrados")} por l\xEDderes para conferir a car\xEAncia e a reentrada.</span></div>`:""}
    ${_.isAdmin&&s?`${kv(s)}<div class="row2">${s.id?`<button class="btn danger" data-act="p-del">${U("trash-2","sm")}Excluir</button>`:'<button class="btn ghost" data-act="p-cancel">Cancelar</button>'}<button class="btn pri" data-act="p-save">Salvar produto</button></div>${s.id?'<button class="link" data-act="p-cancel">Cancelar edi\xE7\xE3o</button>':""}`:`${e.length?e.map(c).join(""):`<p class="note">Nenhum produto cadastrado.${_.isAdmin?" Cadastre os defensivos, adubos e medicamentos usados na fazenda, com a car\xEAncia da bula.":""}</p>`}
        ${_.isAdmin?`<button class="btn ghost" data-act="p-new">${U("plus","sm")}Novo produto</button>`:'<p class="note">Se faltar um produto, d\xE1 para cadastrar na hora do registro. O administrador confere a car\xEAncia depois.</p>'}`}
  </div></section>`,_.isAdmin&&(l+=`<section class="card"><div class="card-h"><h3>C\xF3pia de seguran\xE7a</h3></div><div class="card-b">
    <p class="note">Baixe uma c\xF3pia uma vez por m\xEAs e guarde no computador ou no Google Drive da fazenda.</p>
    <div class="row2"><button class="btn ghost" data-act="backup-csv">${U("download","sm")}Planilha</button><button class="btn pri" data-act="backup-json">${U("download","sm")}C\xF3pia completa</button></div></div></section>`),l+=`<section class="card"><div class="card-h"><h3>Modo treino</h3></div><div class="card-b">
    <label class="toggle"><input type="checkbox" id="demo-t" ${$t()?"checked":""}><span>Mostra dados de exemplo e nada do que for registrado \xE9 salvo. Use para ensinar algu\xE9m a usar o app.</span></label></div></section>`,l+=`<p class="note" style="text-align:center">Caderno de Campo GTF Milk \xB7 vers\xE3o ${mv}</p>`,l}function Db(n){let e=(Jc().periods[n]||[]).slice().reverse();return`<section class="card"><div class="card-h"><h3>Ocupa\xE7\xF5es</h3><span class="meta">${Ee(e.length,"entrada","entradas")}</span></div>
    ${e.length?e.map(t=>{let r=t.to?Math.max(1,Math.round((dt(t.to)-dt(t.from))/864e5)):ut(t.from)+1;return`<div class="kvrow"><span><b>${Ie(t.from)} \u2192 ${t.to?Ie(t.to):"hoje"}</b><br><span class="note">${R(t.lote)}${t.animais?` \xB7 ${t.animais} animais \xB7 ${Si(_r(t.animais,n))}`:""}</span></span><span class="chip ${t.to?"":"gado"}">${t.to?Ee(r,"dia","dias"):"dia "+r}</span></div>`}).join(""):'<p class="note" style="padding:0 16px 16px">Nenhuma entrada de gado registrada neste piquete.</p>'}</section>`}function Nb(n){let e=re[n],t=e.poly.map(v=>v[0]),r=e.poly.map(v=>v[1]),i=Math.min(...t),s=Math.max(...t),o=Math.min(...r),c=Math.max(...r),l=(s-i)*1.7+40,d=(c-o)*1.7+40;d/l>9/16?l=d*16/9:d=l*9/16;let f=(i+s)/2,m=(o+c)/2;return`<svg class="mini" viewBox="${f-l/2} ${m-d/2} ${l} ${d}" role="img" aria-label="Localiza\xE7\xE3o de ${R(ht(e))}">
    <image href="${We.img}" x="0" y="0" width="${We.size[0]}" height="${We.size[1]}" preserveAspectRatio="none"/>
    ${kn.filter(v=>v.id!==n).map(v=>`<path d="${mr(v.poly)}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join("")}
    <path d="${mr(e.poly)}" fill="#FFD43B" fill-opacity=".38" stroke="#FFD43B" stroke-width="3" vector-effect="non-scaling-stroke"/></svg>`}function to(){let n=J("#detail");if(!_.detail){n.hidden=!0,n.innerHTML="";return}let e=re[_.detail],t=Ut(e.id),r=_v(e),i=t.lastPl,s=t.lastAp,o=_.canWrite?"":"disabled",c=n.querySelector(".ov-b")?.scrollTop||0;n.hidden=!1,n.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="close-detail" aria-label="Voltar">${U("chevron-left")}</button><div><div class="ov-k">${R(r?r.nome:"")} \xB7 ${e.tipo==="pastagem"?"Pastagem":"Lavoura"}</div><h2>${R(ht(e))}</h2></div></div>
    <div></div>
    <div class="ov-b"><div class="pagew">
      ${Nb(e.id)}
      <div class="chips">${Ef(t)}</div>
      <div class="facts">
        <div class="fact"><div class="k">Tamanho</div><div class="v">${Tt(e.m2)}</div><div class="s">${Ne(e.m2,0)} m\xB2</div></div>
        <div class="fact"><div class="k">Situa\xE7\xE3o</div><div class="v">${R(t.key==="livre"&&t.rs.length?"Livre":vb[t.key])}</div><div class="s">${R(t.ev?"desde "+Ie(t.ev.data):"sem registro")}</div></div>
        <div class="fact"><div class="k">\xDAltimo plantio</div><div class="v">${i?R(i.cultura||"\u2014"):"\u2014"}</div><div class="s">${i?`${Ie(i.data)} \xB7 ${Ee(ut(i.data),"dia","dias")}`:"sem registro"}</div></div>
        ${e.tipo==="pastagem"?`<div class="fact"><div class="k">Pasto</div><div class="v">${t.aval?R(At[t.aval.condicao]?.label||"\u2014"):"\u2014"}</div><div class="s">${t.aval?`avaliado ${Ie(t.aval.data)}${t.aval.altura?` \xB7 ${t.aval.altura} cm`:""}`:"sem avalia\xE7\xE3o"}</div></div>
        <div class="fact"><div class="k">Lota\xE7\xE3o</div><div class="v">${t.lot?Si(t.lot):"\u2014"}</div><div class="s">${t.occ.length&&t.occ[0].animais?`${Ee(t.occ[0].animais,"animal","animais")} em ${Tt(e.m2)}`:"sem gado agora"}</div></div>`:""}
        <div class="fact ${t.car?"car":""}"><div class="k">${t.car?"Em car\xEAncia":"\xDAltima aplica\xE7\xE3o"}</div><div class="v">${t.car?"Libera "+Ie(bt(t.car.until)):s?Ie(s.data):"\u2014"}</div><div class="s">${t.car?R(t.car.nome):s?R((s.produtos||[]).map(l=>l.nome).join(", ")):"sem registro"}</div></div>
      </div>
      ${e.tipo==="pastagem"?Db(e.id):""}
      <div class="pg-h"><div><h2 style="font-size:22px">Hist\xF3rico</h2><p>${Ee(t.rs.length,"registro","registros")} nesta \xE1rea</p></div></div>
      ${t.rs.length?Cv(t.rs,!1):`<div class="empty"><b>Nada registrado ainda</b><span>O que for lan\xE7ado para ${R(e.code)} aparece aqui, do mais novo para o mais antigo.</span></div>`}
    </div></div>
    <div class="ov-f ${e.tipo==="pastagem"?"three":""}">${e.tipo==="pastagem"?`${t.occ.length?`<button class="btn pri" data-act="q-mudar" data-id="${e.id}" ${o}>Mudar</button>`:`<button class="btn pri" data-act="q-soltar" data-id="${e.id}" ${o}>Soltar aqui</button>`}<button class="btn ghost" data-act="q-avaliar" data-id="${e.id}" ${o}>Avaliar</button><button class="btn gold" data-act="q-trat" data-id="${e.id}" ${o}>Tratamento</button>`:`<button class="btn gold" data-act="open-flow" data-id="${e.id}" ${o}>${U("plus")}Registrar nesta lavoura</button>`}</div>`,n.querySelector(".ov-b").scrollTop=c}var Sn=null;function Ys(n,e){_.quick=null,_.flow={step:0,tipo:null,areas:new Set(n?[n]:[]),mode:"lista",produtos:[{pid:"",dose:""}],calda:"",alvo:"",cultura:"",variedade:"",semente:"",cond:"",altura:"",producao:"",prodUn:"t",lote:"",animais:"",ocorr:"",obs:"",data:Dn(),hora:gv(),quem:_.me||"",novo:null,done:null},e&&(Object.assign(_.flow,e),e.tipo&&e.step==null&&(_.flow.step=1)),he()}var no=()=>[..._.flow.areas].reduce((n,e)=>n+(re[e]?.m2||0),0)/1e4,xb=()=>Object.entries(ft().prods).filter(([,n])=>!n._demo);function ro(){let n=_.flow;return n.step===0?!!n.tipo:n.step===1?n.areas.size>0:n.step===2?n.tipo==="aplicacao"||n.tipo==="adubacao"?n.produtos.length>0&&n.produtos.every(e=>e.pid&&e.pid!=="__novo"&&+e.dose>0):n.tipo==="plantio"?!!n.cultura.trim():n.tipo==="gado_entrou"?+n.animais>0&&!!n.lote.trim():n.tipo==="tratamento"?n.produtos.length>0&&n.produtos.every(e=>e.pid&&e.pid!=="__novo"&&+e.dose>0):n.tipo==="ocorrencia"?!!(n.ocorr||n.obs.trim()):n.tipo==="avaliacao"?!!n.cond:!!n.data:!!n.quem.trim()&&!!n.data}function he(){if(_.quick)return Bc();let n=J("#flow"),e=_.flow;if(!e){n.hidden=!0,n.innerHTML="",Sn=null;return}if(n.hidden=!1,e.done){n.innerHTML=Fb(),Sn=null;return}let t=[Ob,Lb,Vb,Mb][e.step](),r=e._ls===e.step&&n.querySelector(".ov-b")?.scrollTop||0;e._ls=e.step,n.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="flow-close" aria-label="Cancelar registro">${U("x")}</button><div><div class="ov-k">Novo registro \xB7 passo ${e.step+1} de 4</div><h2>${cv[e.step]}</h2></div></div>
    <div class="steps" aria-hidden="true">${cv.map((i,s)=>`<i class="${s<=e.step?"on":""}"></i>`).join("")}</div>
    <div class="ov-b"><div class="pagew">${t}</div></div>
    <div class="ov-f">${e.step>0?`<button class="btn ghost back" data-act="flow-back">${U("chevron-left")}Voltar</button>`:""}
      ${e.step<3?`<button class="btn pri" id="flow-next" data-act="flow-next" ${ro()?"":"disabled"}>Continuar${U("chevron-right")}</button>`:`<button class="btn gold" id="flow-next" data-act="flow-save" ${ro()?"":"disabled"}>${U("check")}Salvar registro</button>`}</div>`,n.querySelector(".ov-b").scrollTop=r,Sn=null,e.step===1&&e.mode==="mapa"&&(Sn=Tv(J("#flowmap"),{select:()=>_.flow.areas,onTap:i=>{if(!i)return;let s=_.flow.areas;eo.includes(_.flow.tipo)?(s.clear(),s.add(i)):s.has(i)?s.delete(i):s.add(i),Sn.refresh(),io()}}))}function io(){let n=J("#flow-next");n&&(n.disabled=!ro());let e=J("#selsum");e&&(e.innerHTML=Nv());let t=_.flow;t&&t.produtos.forEach((r,i)=>{let s=J(`#tot-${i}`);s&&(s.textContent=xv(r))})}function Ob(){let n=_.flow;return(n.areas.size?`<div class="selsum">${U("layers")}<span>Para ${R([...n.areas].map(t=>ht(re[t])).join(", "))}</span></div>`:"")+`<div class="tiles">${Object.entries(so).filter(([,t])=>!t.hidden).map(([t,r])=>`<button class="tile" data-act="tipo" data-v="${t}" aria-pressed="${n.tipo===t}">${U(r.icon,"lg")}<span>${r.label}</span><small>${r.sub}</small></button>`).join("")}</div>`}function Nv(){let e=_.flow.areas.size;return e?`${U("check")}<span>${Ee(e,"\xE1rea escolhida","\xE1reas escolhidas")} \xB7 ${Ne(no())} ha</span><button class="link" data-act="sel-clear">Limpar</button>`:`${U("info")}<span>Escolha uma ou mais \xE1reas</span>`}function Lb(){let n=_.flow,e=`<div class="seg" role="group" aria-label="Escolher por"><button data-act="area-mode" data-v="lista" aria-pressed="${n.mode==="lista"}">${U("list","sm")}Lista</button><button data-act="area-mode" data-v="mapa" aria-pressed="${n.mode==="mapa"}">${U("map","sm")}Mapa</button></div>`,t=`<div class="selsum" id="selsum">${Nv()}</div>`;if(n.mode==="mapa")return e+t+'<div class="flowmap" id="flowmap"></div><p class="note">Toque nos piquetes para marcar ou desmarcar.</p>';let r=eo.includes(n.tipo);return e+t+Yc.map(i=>`<section class="card"><div class="card-h"><h3>${R(i.nome)}</h3>${r?"":`<button class="link" data-act="grp-all" data-g="${i.id}">${i.units.every(s=>n.areas.has(s.id))?"Desmarcar":"Marcar"} todos</button>`}</div>
    ${i.units.map(s=>{let o=Ut(s.id);return`<label class="ck"><input type="${r?"radio":"checkbox"}" name="area1" data-area="${s.id}" ${n.areas.has(s.id)?"checked":""}><span class="ucode ${o.key}">${s.code}</span><span class="uinfo"><b>${R(ht(s))}</b><span>${R(o.text)}${o.car?" \xB7 em car\xEAncia":""}</span></span><span class="uha">${Tt(s.m2)}</span></label>`}).join("")}</section>`).join("")}function xv(n){let e=ft().prods[n.pid];if(!e||!(+n.dose>0))return"";let t=e.unidade.split("/")[0];if(/\/animal$/.test(e.unidade)){let i=+_.flow.animais;if(!(i>0))return"Informe o n\xFAmero de animais para ver o total";let s=+n.dose*i;return`Total: ${Ne(s,1)} ${t} para ${Ee(i,"animal","animais")}`}let r=+n.dose*no();return`Total: ${Ne(r,r<10?2:1)} ${t} para ${Ne(no())} ha`}function dv(n,e,t){let r=_.flow,i=xb().filter(([,o])=>t.includes(o.tipo)).sort((o,c)=>o[1].nome.localeCompare(c[1].nome)),s=ft().prods[n.pid];return`<div class="prow"><div class="prow-h"><span class="lbl">Produto ${r.produtos.length>1?e+1:""}</span>${r.produtos.length>1?`<button class="link" style="color:var(--danger)" data-act="prow-del" data-i="${e}">Remover</button>`:""}</div>
    <select class="inp" id="psel-${e}" data-psel="${e}" aria-label="Produto"><option value="">Escolha o produto\u2026</option>${i.map(([o,c])=>`<option value="${R(o)}" ${n.pid===o?"selected":""}>${R(c.nome)} (${R(c.tipo)})</option>`).join("")}<option value="__novo" ${n.pid==="__novo"?"selected":""}>+ Cadastrar produto novo</option></select>
    ${n.pid==="__novo"?`${kv(r.novo,"nf")}<div class="row2"><button class="btn ghost" data-act="pnew-cancel" data-i="${e}">Cancelar</button><button class="btn pri" data-act="pnew-save" data-i="${e}">Salvar produto</button></div>`:""}
    ${s&&n.pid!=="__novo"?`<div class="field"><label for="dose-${e}">Dose</label><div class="inrow"><input class="inp" id="dose-${e}" data-dose="${e}" type="number" inputmode="decimal" step="any" min="0" value="${R(n.dose)}" placeholder="0"><span class="unit">${R(s.unidade)}</span></div>
      <span class="total" id="tot-${e}">${xv(n)}</span>${+s.carencia?`<span class="hint" style="color:var(--danger)">Car\xEAncia de ${s.carencia} dias</span>`:""}</div>`:""}</div>`}function Vb(){let n=_.flow,e=n.tipo,t="",r=`<div class="grid2"><div class="field"><label for="f-data">Data</label><input class="inp" type="date" id="f-data" data-f="data" value="${R(n.data)}" max="${Dn()}"></div><div class="field"><label for="f-hora">Hora</label><input class="inp" type="time" id="f-hora" data-f="hora" value="${R(n.hora)}"></div></div>`,i=s=>`<div class="field"><span class="lbl">Lote</span><div class="pick">${Gc().map(o=>`<button class="pk" data-act="lote" data-v="${R(o)}" aria-pressed="${n.lote===o}">${R(o)}</button>`).join("")}</div>
      <input class="inp" id="f-lote" data-f="lote" value="${R(Gc().includes(n.lote)?"":n.lote)}" placeholder="Outro lote"></div>
    <div class="field"><label for="f-anim">N\xFAmero de animais${s?"":' <span class="hint">(opcional)</span>'}</label><input class="inp" id="f-anim" data-f="animais" type="number" inputmode="numeric" min="0" value="${R(n.animais)}"></div>`;if(e==="tratamento"&&(t+=i(!1),t+=n.produtos.map((s,o)=>dv(s,o,Rf)).join(""),t+=`<button class="btn ghost" data-act="prow-add">${U("plus","sm")}Outro produto</button>`),e==="aplicacao"||e==="adubacao"){let s=e==="aplicacao"?yv:Pf;t+=n.produtos.map((o,c)=>dv(o,c,s)).join(""),t+=`<button class="btn ghost" data-act="prow-add">${U("plus","sm")}${e==="aplicacao"?"Outro produto na mesma calda":"Outro produto"}</button>`,e==="aplicacao"&&(t+=`<div class="grid2"><div class="field"><label for="f-calda">Calda (L/ha)</label><input class="inp" id="f-calda" data-f="calda" type="number" inputmode="decimal" min="0" value="${R(n.calda)}" placeholder="Ex.: 150"></div>
      <div class="field"><label for="f-alvo">Alvo</label><input class="inp" id="f-alvo" data-f="alvo" value="${R(n.alvo)}" placeholder="Praga, doen\xE7a ou planta"></div></div>`)}if(e==="plantio"&&(t+=`<div class="field"><span class="lbl">Cultura</span><div class="pick">${av.map(s=>`<button class="pk" data-act="cultura" data-v="${R(s)}" aria-pressed="${n.cultura===s}">${R(s)}</button>`).join("")}</div>
      <input class="inp" id="f-cultura" data-f="cultura" value="${R(av.includes(n.cultura)?"":n.cultura)}" placeholder="Outra cultura"></div>
    <div class="grid2"><div class="field"><label for="f-var">Cultivar <span class="hint">(opcional)</span></label><input class="inp" id="f-var" data-f="variedade" value="${R(n.variedade)}"></div>
    <div class="field"><label for="f-sem">Semente (kg/ha)</label><input class="inp" id="f-sem" data-f="semente" type="number" inputmode="decimal" min="0" value="${R(n.semente)}"></div></div>`),e==="colheita"&&(t+=`<div class="field"><label for="f-cultura">Cultura</label><input class="inp" id="f-cultura" data-f="cultura" value="${R(n.cultura)}" placeholder="Ex.: Milho silagem"></div>
    <div class="field"><label for="f-prod">Produ\xE7\xE3o <span class="hint">(opcional)</span></label><div class="inrow"><input class="inp" id="f-prod" data-f="producao" type="number" inputmode="decimal" min="0" value="${R(n.producao)}"><select class="inp" style="flex:0 0 112px" id="f-pun" data-f="prodUn">${["t","sacas","fardos"].map(s=>`<option ${n.prodUn===s?"selected":""}>${s}</option>`).join("")}</select></div></div>`),e==="gado_entrou"||e==="gado_saiu"){t+=i(e==="gado_entrou");let s=pt(n.lote),o=[...n.areas][0];e==="gado_entrou"&&s&&o&&s.piq!==o&&(t+=`<div class="selsum" id="mv-info">${U("arrow-right-left")}<span>V\xE3o sair do ${R(re[s.piq].code)}, onde est\xE3o no dia ${ut(s.since)+1}. Fica registrado como mudan\xE7a de piquete.</span></div>`)}return e==="avaliacao"&&(t+=`<section class="card">${Object.entries(At).map(([s,o])=>`<button class="dest" data-act="cond" data-v="${s}" aria-pressed="${n.cond===s}"><span class="ucode ${o.chip}">${U(o.icon)}</span><span class="uinfo"><b>${o.label}</b><span>${o.sub}</span></span></button>`).join("")}</section>
    <div class="field"><label for="f-alt">Altura do pasto (cm) <span class="hint">(opcional)</span></label><input class="inp" id="f-alt" data-f="altura" type="number" inputmode="numeric" min="0" value="${R(n.altura)}"></div>`),e==="ocorrencia"&&(t+=`<div class="field"><span class="lbl">O que aconteceu?</span><div class="pick">${yb.map(s=>`<button class="pk" data-act="ocorr" data-v="${R(s)}" aria-pressed="${n.ocorr===s}">${R(s)}</button>`).join("")}</div></div>`),t+=r,t+=`<div class="field"><label for="f-obs">Observa\xE7\xE3o${e==="ocorrencia"?"":' <span class="hint">(opcional)</span>'}</label><textarea class="inp" id="f-obs" data-f="obs" placeholder="${e==="ocorrencia"?"Descreva o que viu e onde":"Clima, problema na m\xE1quina, etc."}">${R(n.obs)}</textarea></div>`,t}function Ov(){let n=_.flow,e={id:"_prev",tipo:n.tipo,areas:[...n.areas],data:n.data,hora:n.hora,quem:n.quem,obs:n.obs.trim()};return(n.tipo==="aplicacao"||n.tipo==="adubacao")&&(e.produtos=n.produtos.map(t=>{let r=ft().prods[t.pid]||{};return{id:t.pid,nome:r.nome||"",tipo:r.tipo||"",dose:+t.dose,unidade:r.unidade||"",carencia:+r.carencia||0,reentrada:+r.reentrada||0}})),n.tipo==="aplicacao"&&(+n.calda&&(e.calda=+n.calda),n.alvo.trim()&&(e.alvo=n.alvo.trim())),n.tipo==="plantio"&&(e.cultura=n.cultura.trim(),n.variedade.trim()&&(e.variedade=n.variedade.trim()),+n.semente&&(e.semente=+n.semente)),n.tipo==="colheita"&&(n.cultura.trim()&&(e.cultura=n.cultura.trim()),+n.producao&&(e.producao=+n.producao,e.prodUn=n.prodUn)),(n.tipo.startsWith("gado")||n.tipo==="tratamento")&&(n.lote.trim()&&(e.lote=n.lote.trim()),+n.animais&&(e.animais=+n.animais)),n.tipo==="tratamento"&&(e.produtos=n.produtos.map(t=>{let r=ft().prods[t.pid]||{};return{id:t.pid,nome:r.nome||"",tipo:r.tipo||"",dose:+t.dose,unidade:r.unidade||"",carencia:+r.carencia||0,reentrada:0}})),n.tipo==="ocorrencia"&&n.ocorr&&(e.ocorr=n.ocorr),n.tipo==="avaliacao"&&(e.condicao=n.cond,+n.altura&&(e.altura=+n.altura)),e.obs||delete e.obs,e.ha=Math.round(no()*100)/100,e}function Mb(){let n=_.flow,e=Ov(),t=so[n.tipo];return`<div class="sum"><div style="display:flex;gap:12px;align-items:center"><span class="ricon ${n.tipo}">${U(t.icon)}</span><div class="rt">${R(t.label)}</div></div>
      <div class="chips">${[...n.areas].map(r=>`<span class="chip">${R(ht(re[r]))}</span>`).join("")}</div>
      ${Rv(e)}<div class="rm">${U("calendar","sm")}${Ie(n.data)} \xE0s ${R(n.hora)} \xB7 ${Ne(no())} ha</div></div>
    <p class="note">Registrado por <b>${R(_.me)}</b>.</p>`}function $b(){let n=_.flow;if(!ro())return;let e=Ov();if(delete e.id,e.quem=_.me,e.criadoEm=new Date().toISOString(),e.tipo==="gado_entrou"){let i=pt(e.lote);i&&i.piq!==e.areas[0]&&(e.tipo="mudanca",e.de=i.piq)}let t=zc();Wc("registros",t,e);let r="";if(e.tipo==="aplicacao"){let i=Math.max(0,...e.produtos.map(l=>l.carencia)),s=Math.max(0,...e.produtos.map(l=>l.reentrada)),o=e.areas.map(l=>re[l].code).join(", "),c=[];if(s&&c.push(`Ningu\xE9m entra em ${o} at\xE9 ${Sf(new Date(dt(e.data,e.hora).getTime()+s*36e5))}.`),i){let l=dt(e.data);l.setDate(l.getDate()+i),c.push(`Sem gado e sem colheita at\xE9 ${Ie(bt(l))} (car\xEAncia de ${i} dias).`)}r=c.join(" ")}n.done={id:t,warn:r},Ue(),he()}function Fb(){let n=_.flow,e=n.done.id,t=!!_.sandbox.registros[e],r=_.pend.has("registros/"+e),i=t?"Modo treino: este registro n\xE3o foi salvo.":r?yr()?"Sem sinal agora. O registro est\xE1 guardado no celular e vai sozinho quando o sinal voltar.":"Guardado no celular. Enviando\u2026":"Enviado para o caderno da fazenda.";return`<div class="ov-h"><div><div class="ov-k">Novo registro</div><h2>Pronto</h2></div><button class="xbtn" data-act="flow-close" aria-label="Fechar">${U("x")}</button></div><div></div>
    <div class="ov-b"><div class="pagew"><div class="done"><div class="big">${U("check")}</div><h2>Registro salvo</h2>
      <p style="display:flex;gap:8px;align-items:center;justify-content:center">${U(r?yr()?"cloud-off":"cloud-upload":"circle-check","sm")}${R(i)}</p>
      ${n.done.warn?`<div class="alert">${U("triangle-alert")}<span>${R(n.done.warn)}</span></div>`:""}</div></div></div>
    <div class="ov-f"><button class="btn ghost" data-act="flow-again">Registrar outro</button><button class="btn pri" data-act="flow-close">Ver no mapa</button></div>`}function Js(n,e,t){let r=Pn(),i=r.filter(o=>o.piq===e),s=t?pt(t):null;s||(s=n==="soltar"?r.length===1?r[0]:pt("Novilhas"):i[0]||null),_.quick={kind:n,uid:e,cond:"",altura:"",obs:"",lote:s?s.nome:"Novilhas",animais:s&&s.animais?String(s.animais):"",dest:null,sug:null,data:Dn(),hora:gv(),quem:_.me||""},n==="mudar"&&(_.quick.dest=_.quick.sug=wv(e)),he()}function Cf(){let n=_.quick;if(!n||!(_.me||n.quem.trim())||!n.data)return!1;let e=pt(n.lote);return n.kind==="soltar"?!!n.lote.trim()&&+n.animais>0&&!(e&&e.piq===n.uid):n.kind==="mudar"?!!n.dest&&!!e:n.kind==="tirar"?!!e:n.kind==="avaliar"?!!n.cond:!1}function Lv(){let n=_.quick,e=pt(n.lote);return n.kind!=="soltar"||!e?"":e.piq===n.uid?`<div class="selsum">${U("info")}<span>${R(e.nome)} j\xE1 est\xE3o no ${R(re[n.uid].code)} (dia ${ut(e.since)+1}).</span></div>`:`<div class="selsum">${U("arrow-right-left")}<span>V\xE3o sair do ${R(re[e.piq].code)}, onde est\xE3o no dia ${ut(e.since)+1}.</span></div>`}function Vv(n){let e=_r(n.animais,n.uid);return e?`${Ee(+n.animais,"animal","animais")} em ${Tt(re[n.uid].m2)} = ${Si(e)}`:`${R(re[n.uid].code)} tem ${Tt(re[n.uid].m2)}`}function Ub(){let n=J("#q-save");n&&(n.disabled=!Cf());let e=J("#q-info");e&&(e.innerHTML=Lv());let t=J("#q-lot");t&&(t.textContent=Vv(_.quick))}function Bc(){let n=_.quick,e=J("#flow"),t=re[n.uid],r=Ut(n.uid),i=n._k===n.kind&&e.querySelector(".ov-b")?.scrollTop||0;n._k=n.kind,e.hidden=!1,Sn=null;let s=`<div class="grid2"><div class="field"><label for="q-data">Data</label><input class="inp" type="date" id="q-data" data-q="data" value="${R(n.data)}" max="${Dn()}"></div><div class="field"><label for="q-hora">Hora</label><input class="inp" type="time" id="q-hora" data-q="hora" value="${R(n.hora)}"></div></div>`,o=_.me?`<p class="note">Registrado por <b>${R(_.me)}</b>.</p>`:"",c=_.me?"":`<div class="field"><label for="q-quem">Seu nome</label><input class="inp" id="q-quem" data-q="quem" value="${R(n.quem)}" autocomplete="off" placeholder="Quem est\xE1 registrando"><span class="hint">Este celular lembra o nome.</span></div>`,l=Pn().filter(v=>v.piq===n.uid),d="",f="",m="";if(n.kind==="soltar")d=`Soltar no ${t.code}`,f=`<div class="field"><span class="lbl">Qual lote?</span><div class="pick">${Gc().map(v=>`<button class="pk" data-act="q-lote" data-v="${R(v)}" aria-pressed="${n.lote===v}">${R(v)}</button>`).join("")}</div>
      <input class="inp" id="q-lote" data-q="lote" value="${R(Gc().includes(n.lote)?"":n.lote)}" placeholder="Outro lote"></div>
      <div id="q-info">${Lv()}</div>
      ${r.car||r.reent?`<div class="alert">${U("triangle-alert")}<span>${R(t.code)} est\xE1 ${r.reent?`com reentrada proibida at\xE9 ${Sf(r.reent.until)}`:`em car\xEAncia at\xE9 ${Ie(bt(r.car.until))}`} (${R((r.reent||r.car).nome)}). Confira antes de soltar.</span></div>`:""}
      <div class="field"><label for="q-anim">N\xFAmero de animais</label><input class="inp" id="q-anim" data-q="animais" type="number" inputmode="numeric" min="1" value="${R(n.animais)}"><span class="hint" id="q-lot" style="font-size:15px;font-weight:600;color:var(--gado)">${Vv(n)}</span></div>${s}${o}`,m=`${U("log-in")}Soltar no ${R(t.code)}`;else if(n.kind==="mudar"){d=`Mudar ${n.lote} do ${t.code}`;let v=vv(n.uid);f=`${l.length>1?`<div class="pick">${l.map(A=>`<button class="pk" data-act="q-lote" data-v="${R(A.nome)}" aria-pressed="${n.lote===A.nome}">${R(A.nome)}</button>`).join("")}</div>`:""}
      <div class="selsum">${U("log-out")}<span>Saem do ${R(t.code)} no dia ${r.dia||1}. Para onde v\xE3o?</span></div>
      <section class="card">${v.map(A=>`<button class="dest" data-act="q-dest" data-id="${A.u.id}" aria-pressed="${n.dest===A.u.id}" ${A.block?"data-block":""}><span class="ucode ${A.st.key}">${R(A.u.code)}</span><span class="uinfo"><b>${R(ht(A.u))} \xB7 ${Tt(A.u.m2)}</b><span>${R(A.st.text)}${A.st.aval?" \xB7 "+At[A.st.aval.condicao]?.short:""}${pt(n.lote)?.animais?" \xB7 "+Si(_r(pt(n.lote).animais,A.u.id)):""}</span></span>${A.u.id===n.sug?'<span class="chip descanso">Sugerido</span>':A.block?`<span class="chip ${A.block==="Ocupado"?"gado":"car"}">${A.block}</span>`:""}</button>`).join("")}</section>
      <p class="note">Sugerido: o piquete marcado como pronto para entrar. Se nenhum estiver marcado, o que descansa h\xE1 mais tempo. Piquetes em car\xEAncia ficam de fora.</p>${s}${o}`,m=n.dest?`${U("arrow-right-left")}Mudar para ${R(re[n.dest].code)}`:"Escolha o piquete"}else if(n.kind==="avaliar")d=`Avaliar pasto \xB7 ${t.code}`,f=`<section class="card">${Object.entries(At).map(([v,A])=>`<button class="dest" data-act="q-cond" data-v="${v}" aria-pressed="${n.cond===v}"><span class="ucode ${A.chip}">${U(A.icon)}</span><span class="uinfo"><b>${A.label}</b><span>${A.sub}</span></span></button>`).join("")}</section>
      <div class="field"><label for="q-alt">Altura do pasto (cm) <span class="hint">(opcional)</span></label><input class="inp" id="q-alt" data-q="altura" type="number" inputmode="numeric" min="0" value="${R(n.altura)}"></div>
      <div class="field"><label for="q-obs">Observa\xE7\xE3o <span class="hint">(opcional)</span></label><textarea class="inp" id="q-obs" data-q="obs">${R(n.obs)}</textarea></div>${s}${o}`,m=`${U("check")}Salvar avalia\xE7\xE3o`;else if(n.kind==="tirar")d="Tirar do pasto",f=`${l.length>1?`<div class="pick">${l.map(v=>`<button class="pk" data-act="q-lote" data-v="${R(v.nome)}" aria-pressed="${n.lote===v.nome}">${R(v.nome)}</button>`).join("")}</div>`:""}
      <div class="selsum">${U("log-out")}<span>${R(n.lote)} saem do ${R(t.code)} no dia ${r.dia||1} e o piquete come\xE7a a contar o descanso.</span></div>${s}${o}`,m=`${U("log-out")}Tirar do pasto`;else{d=`Tratamento no ${t.code}`;let v=l[0];f=`<div class="tiles">
      <button class="tile" data-act="q-trat-go" data-v="tratamento">${U("syringe","lg")}<span>Nas novilhas</span><small>${v?`${R(v.nome)} do ${R(t.code)} \xB7 `:""}verm\xEDfugo, vacina, carrapaticida</small></button>
      <button class="tile" data-act="q-trat-go" data-v="aplicacao">${U("spray-can","lg")}<span>No pasto</span><small>Herbicida, inseticida, fungicida</small></button>
      <button class="tile" data-act="q-trat-go" data-v="adubacao">${U("package","lg")}<span>Aduba\xE7\xE3o</span><small>Ureia, adubo, calc\xE1rio</small></button>
      <button class="tile" data-act="q-trat-go" data-v="outro">${U("notebook-pen","lg")}<span>Outro registro</span><small>Plantio, colheita, ocorr\xEAncia</small></button></div>`}e.innerHTML=`<div class="ov-h"><button class="xbtn" data-act="q-close" aria-label="Cancelar">${U("x")}</button><div><div class="ov-k">${R(ht(t))} \xB7 ${R(r.text)}</div><h2>${R(d)}</h2></div></div><div></div>
    <div class="ov-b"><div class="pagew">${m?c:""}${f}</div></div>
    ${m?`<div class="ov-f"><button class="btn pri" id="q-save" data-act="q-save" ${Cf()?"":"disabled"}>${m}</button></div>`:"<div></div>"}`,e.querySelector(".ov-b").scrollTop=i}function qb(){let n=_.quick;if(!Cf())return;let e=(_.me||n.quem).trim(),t=pt(n.lote),r=t?t.nome:n.lote.trim(),i={data:n.data,hora:n.hora,quem:e,lote:r,criadoEm:new Date().toISOString()},s="",o=n.uid;n.kind==="avaliar"?(delete i.lote,Object.assign(i,{tipo:"avaliacao",areas:[n.uid],condicao:n.cond}),+n.altura&&(i.altura=+n.altura),n.obs.trim()&&(i.obs=n.obs.trim()),s=`${re[n.uid].code}: ${At[n.cond].label}`):n.kind==="soltar"?(Object.assign(i,t?{tipo:"mudanca",de:t.piq,areas:[n.uid]}:{tipo:"gado_entrou",areas:[n.uid]},{animais:+n.animais}),s=`${r} no ${re[n.uid].code} \xB7 dia 1`):n.kind==="mudar"?(Object.assign(i,{tipo:"mudanca",de:n.uid,areas:[n.dest]}),t&&t.animais&&(i.animais=t.animais),s=`${r}: ${re[n.uid].code} \u2192 ${re[n.dest].code}`,o=n.dest):(Object.assign(i,{tipo:"gado_saiu",areas:[n.uid]}),t&&t.animais&&(i.animais=t.animais),s=`${r} fora do pasto \xB7 ${re[n.uid].code} em descanso`),i.ha=Math.round(re[i.areas[0]].m2/100)/100,Wc("registros",zc(),i),_.quick=null,_.sel=o,he(),Ue(),lt(s+($t()?" \xB7 treino, n\xE3o salvo":yr()?" \xB7 envia quando tiver sinal":""))}var hv=null;function lt(n){let e=J("#toast");e.textContent=n,e.hidden=!1,clearTimeout(hv),hv=setTimeout(()=>{e.hidden=!0},3200)}function Bb(){let n=ft().regs.filter(i=>!i._demo&&!i._treino),e=["Data","Hora","Atividade","\xC1reas","Hectares","Produto","Tipo","Dose","Unidade","Car\xEAncia (dias)","Calda (L/ha)","Alvo","Cultura","Lote","Animais","Animais por ha","Condi\xE7\xE3o do pasto","Altura (cm)","Ocorr\xEAncia","Observa\xE7\xE3o","Quem fez"],t=i=>{let s=String(i??"");return/[";\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s},r=[e];for(let i of[...n].reverse()){let s=(i.areas||[]).map(d=>re[d]?.code||d).join(" "),o=[Ie(i.data),i.hora,so[i.tipo]?.label||i.tipo,i.tipo==="mudanca"?`${re[i.de]?.code||i.de} -> ${s}`:s,i.ha!=null?Ne(i.ha):""],c=i.animais&&i.areas?.length===1&&re[i.areas[0]]&&["gado_entrou","mudanca"].includes(i.tipo)?Ne(_r(i.animais,i.areas[0]),1):"",l=[i.calda?Ne(i.calda):"",i.alvo,i.cultura,i.lote,i.animais,c,At[i.condicao]?.label,i.altura,i.ocorr,i.obs,i.quem];if(i.produtos?.length)for(let d of i.produtos)r.push([...o,d.nome,d.tipo,Ne(d.dose),d.unidade,d.carencia||"",...l]);else r.push([...o,"","","","","",...l])}return"\uFEFF"+r.map(i=>i.map(t).join(";")).join(`\r
`)}function Mv(){bv(`caderno-de-campo-gtf-milk-${Dn()}.csv`,Bb(),"text/csv;charset=utf-8")}function Zs(n){return n&&typeof n.toDate=="function"?n.toDate().toISOString():Array.isArray(n)?n.map(Zs):n&&typeof n=="object"?Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Zs(t)])):n}function jb(){let n={app:"Caderno de Campo GTF Milk",versao:mv,geradoEm:new Date().toISOString(),registros:Zs(_.remote.registros),produtos:Zs(_.remote.produtos),usuarios:Zs(_.remote.usuarios)};bv(`copia-de-seguranca-gtf-milk-${Dn()}.json`,JSON.stringify(n,null,1),"application/json")}function Ue(){bb(),J("#v-mapa").hidden=_.view!=="mapa",J("#v-list").hidden=_.view==="mapa",_.view==="mapa"?Av():(gr&&gr.refresh(),Pe()),_.detail&&to()}var kf={nav:n=>{_.view=n.dataset.v,_.open=null,_.confirmDel=null,Ue(),J("#v-list").scrollTop=0},"open-flow":n=>{Ys(n.dataset.id||null)},"flow-close":()=>{_.flow=null,he(),_.view==="mapa"&&Av()},"flow-again":()=>{let n=_.flow.areas;Ys(null),_.flow.areas=new Set(n),he()},"flow-back":()=>{_.flow.step--,he()},"flow-next":()=>{let n=_.flow;if(ro()){if(n.step===1&&eo.includes(n.tipo)&&n.tipo!=="avaliacao"&&!n.lote){let e=Pn().find(i=>i.piq===[...n.areas][0]),t=Pn().length===1?Pn()[0]:null,r=n.tipo==="gado_entrou"?t||e:e||t;n.lote=r?r.nome:"Novilhas",r&&r.animais&&!n.animais&&(n.animais=String(r.animais))}n.step++,he(),J("#flow .ov-b").scrollTop=0}},"flow-save":()=>$b(),tipo:n=>{let e=_.flow;e.tipo=n.dataset.v,e.step=1,eo.includes(e.tipo)&&e.areas.size>1&&(e.areas=new Set([[...e.areas][0]])),e.tipo==="tratamento"&&!e.produtos.some(t=>t.pid)&&(e.produtos=[{pid:"",dose:""}]),he()},"area-mode":n=>{_.flow.mode=n.dataset.v,he()},"sel-clear":()=>{_.flow.areas.clear(),Sn&&Sn.refresh(),document.querySelectorAll("[data-area]").forEach(n=>n.checked=!1),io()},"grp-all":n=>{let e=Yc.find(r=>r.id===n.dataset.g),t=e.units.every(r=>_.flow.areas.has(r.id));e.units.forEach(r=>t?_.flow.areas.delete(r.id):_.flow.areas.add(r.id)),he()},"prow-add":()=>{_.flow.produtos.push({pid:"",dose:""}),he()},"prow-del":n=>{_.flow.produtos.splice(+n.dataset.i,1),he()},"pnew-cancel":n=>{_.flow.produtos[+n.dataset.i].pid="",_.flow.novo=null,he()},"pnew-save":n=>{let e=_.flow.novo;if(!e||!e.nome.trim()){J("#nf-nome")?.focus();return}let t=zc();Wc("produtos",t,{...fv(e),conferir:!_.isAdmin}),_.flow.produtos[+n.dataset.i].pid=t,_.flow.novo=null,he()},cultura:n=>{_.flow.cultura=n.dataset.v,he()},cond:n=>{_.flow.cond=n.dataset.v,he()},"q-avaliar":n=>Js("avaliar",n.dataset.id),"q-cond":n=>{_.quick.cond=n.dataset.v,Bc()},lote:n=>{let e=_.flow;e.lote=e.lote===n.dataset.v?"":n.dataset.v;let t=pt(e.lote);t&&t.animais&&(e.animais=String(t.animais)),he()},"q-soltar":n=>Js("soltar",n.dataset.id),"q-mudar":n=>Js("mudar",n.dataset.id,n.dataset.lote),"q-tirar":n=>Js("tirar",n.dataset.id),"q-trat":n=>Js("trat",n.dataset.id),"q-close":()=>{_.quick=null,he()},"q-lote":n=>{let e=_.quick;e.lote=n.dataset.v;let t=pt(e.lote);t&&t.animais&&(e.animais=String(t.animais)),Bc()},"q-dest":n=>{_.quick.dest=n.dataset.id,Bc()},"q-save":()=>qb(),"q-trat-go":n=>{let e=_.quick,t=e.uid,r=n.dataset.v,i=Pn().find(s=>s.piq===t);r==="tratamento"?Ys(t,{tipo:"tratamento",step:2,lote:i?i.nome:"Novilhas",animais:i&&i.animais?String(i.animais):""}):r==="outro"?Ys(t):Ys(t,{tipo:r,step:2})},ocorr:n=>{_.flow.ocorr=_.flow.ocorr===n.dataset.v?"":n.dataset.v,he()},quem:n=>{_.flow.quem=n.dataset.v,he()},"open-detail":n=>{_.detail=n.dataset.id,_.open=null,to()},"close-detail":()=>{_.detail=null,to()},"card-close":()=>{_.sel=null,gr.refresh(),Tf()},"rec-toggle":(n,e)=>{e.target.closest("button")||(_.open=_.open===n.dataset.id?null:n.dataset.id,_.confirmDel=null,vf())},"rec-del":n=>{_.confirmDel=n.dataset.id,vf()},"rec-del-no":()=>{_.confirmDel=null,vf()},"rec-del-yes":n=>{lv("registros",n.dataset.id),_.open=null,_.confirmDel=null,Ue()},filter:n=>{_.filter=n.dataset.v,Pe()},export:()=>Mv(),"demo-hide":()=>{_.demoPref=!1,jc.set("gtf.treino",!1),_.sandbox={registros:{},produtos:{},equipe:{}},_.sel=null,Ft(),Ue(),lt("Saiu do modo treino. Agora tudo que for registrado fica salvo.")},"demo-show":()=>{_.demoPref=!0,jc.set("gtf.treino",!0),_.sel=null,Ft(),Ue()},"p-new":()=>{_.prodForm={nome:"",ativo:"",tipo:"Herbicida",unidade:"L/ha",carencia:"",reentrada:""},Pe(),J("#pf-nome")?.focus()},"p-edit":n=>{let e=ft().prods[n.dataset.id];_.prodForm={id:n.dataset.id,nome:e.nome,ativo:e.ativo||"",tipo:e.tipo,unidade:e.unidade,carencia:e.carencia??"",reentrada:e.reentrada??""},Pe()},"p-cancel":()=>{_.prodForm=null,Pe()},"p-save":()=>{let n=_.prodForm;if(!n.nome.trim()){J("#pf-nome")?.focus();return}Wc("produtos",n.id||zc(),{...fv(n),conferir:!1}),_.prodForm=null,Ue()},"p-del":()=>{lv("produtos",_.prodForm.id),_.prodForm=null,Ue()}};function fv(n){return{nome:n.nome.trim(),ativo:(n.ativo||"").trim(),tipo:n.tipo,unidade:n.unidade,carencia:Math.max(0,+n.carencia||0),reentrada:Math.max(0,+n.reentrada||0)}}function vf(){_.detail?to():Pe()}document.addEventListener("click",n=>{let e=n.target.closest("[data-act]");if(!e||e.disabled)return;let t=kf[e.dataset.act];t&&t(e,n)});document.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&n.target.matches(".rec[data-act]")&&(n.preventDefault(),kf["rec-toggle"](n.target,n))});document.addEventListener("input",n=>{let e=n.target;if(e.id==="q"){_.q=e.value;let t=e.selectionStart;_.listDirty=!1;let r=J("#v-list");r.querySelector(".pagew").innerHTML=Pv();let i=J("#q");i.focus();try{i.setSelectionRange(t,t)}catch{}return}if(e.dataset.pf!=null){let t=_.flow&&_.flow.novo&&J("#flow").contains(e)?_.flow.novo:_.prodForm;t&&(t[e.dataset.pf]=e.value);return}if(e.dataset.q&&_.quick){_.quick[e.dataset.q]=e.value,e.dataset.q==="lote"&&document.querySelectorAll('[data-act="q-lote"]').forEach(t=>t.setAttribute("aria-pressed","false")),Ub();return}_.flow&&(e.dataset.f&&(_.flow[e.dataset.f]=e.value,e.dataset.f==="cultura"&&document.querySelectorAll('[data-act="cultura"]').forEach(t=>t.setAttribute("aria-pressed","false")),e.dataset.f==="quem"&&document.querySelectorAll('[data-act="quem"]').forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.v===e.value))),io()),e.dataset.dose&&(_.flow.produtos[+e.dataset.dose].dose=e.value,io()),e.dataset.f==="lote"&&document.querySelectorAll('[data-act="lote"]').forEach(t=>t.setAttribute("aria-pressed","false")))});document.addEventListener("change",n=>{let e=n.target;if(e.id==="demo-t"){_.demoPref=e.checked,jc.set("gtf.treino",e.checked),_.sel=null,e.checked||(_.sandbox={registros:{},produtos:{},equipe:{}}),Ft(),Ue();return}if(e.dataset.pf!=null){let t=_.flow&&_.flow.novo&&J("#flow").contains(e)?_.flow.novo:_.prodForm;t&&(t[e.dataset.pf]=e.value);return}if(_.flow){if(e.dataset.area&&(eo.includes(_.flow.tipo)?_.flow.areas=new Set([e.dataset.area]):e.checked?_.flow.areas.add(e.dataset.area):_.flow.areas.delete(e.dataset.area),io()),e.dataset.psel!=null){let t=+e.dataset.psel;_.flow.produtos[t].pid=e.value,e.value==="__novo"&&(_.flow.novo={nome:"",ativo:"",tipo:{adubacao:"Adubo",tratamento:"Verm\xEDfugo"}[_.flow.tipo]||"Herbicida",unidade:{adubacao:"kg/ha",tratamento:"mL/animal"}[_.flow.tipo]||"L/ha",carencia:"",reentrada:""}),he(),e.value==="__novo"?J("#nf-nome")?.focus():J(`#dose-${t}`)?.focus()}e.dataset.f==="prodUn"&&(_.flow.prodUn=e.value)}});var Kc=n=>`<div class="alert">${U("triangle-alert")}<span>${R(n)}</span></div>`;function oo(n){let e=n&&n.code||"";return e.includes("api-key")?"Erro na configura\xE7\xE3o do app (chave). Avise o administrador.":{"auth/invalid-credential":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/invalid-email":"Esse e-mail n\xE3o \xE9 v\xE1lido.","auth/missing-email":"Digite o e-mail.","auth/user-disabled":"Esse acesso foi desativado.","auth/too-many-requests":"Muitas tentativas. Espere alguns minutos e tente de novo.","auth/network-request-failed":"Sem internet. Essa a\xE7\xE3o precisa de sinal ou Wi-Fi.","auth/email-already-in-use":"Esse e-mail j\xE1 tem cadastro no app. Use outro e-mail.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/requires-recent-login":"Por seguran\xE7a, saia e entre de novo antes de trocar a senha.","auth/missing-password":"Digite a senha.","permission-denied":"Sem permiss\xE3o para essa a\xE7\xE3o."}[e]||`N\xE3o foi poss\xEDvel concluir (${e||"erro"}).`}function zb(){return`<form class="gate-in" id="login-form" novalidate>
    <div class="hero">${$c}</div>
    <div><p class="eyb">GTF Milk \xB7 Lebon R\xE9gis/SC</p><h1>Caderno de campo</h1></div>
    <div class="field"><label for="lg-email">E-mail</label><input class="inp" id="lg-email" type="email" inputmode="email" autocomplete="username" autocapitalize="none" spellcheck="false"></div>
    <div class="field"><label for="lg-senha">Senha</label><input class="inp" id="lg-senha" type="password" autocomplete="current-password"></div>
    <div id="lg-msg" role="alert"></div>
    <button class="btn pri" type="submit" id="lg-btn">Entrar</button>
    <button class="link" type="button" data-act="forgot">Esqueci minha senha</button>
    <p class="note">O primeiro acesso precisa de internet. Depois o app funciona sem sinal no campo.</p>
    ${Iv()?"":`<div class="gate-note">${Dv()}</div>`}
  </form>`}function Gb(){let n=t=>`<div class="gate-in"><div class="hero">${$c}</div><div><p class="eyb">GTF Milk \xB7 Lebon R\xE9gis/SC</p><h1>Caderno de campo</h1></div><p class="sub">${t}</p></div>`;if(!_.authReady)return n("Carregando\u2026");if(!_.user)return zb();if(!_.perfilLoaded)return n("Conferindo seu acesso\u2026");let e=_.perfil&&_.perfil.ativo===!1;return`<div class="gate-in"><div class="hero">${$c}</div>
    <div><h1>${e?"Acesso bloqueado":"Acesso n\xE3o liberado"}</h1><p class="sub">${R(_.user.email)}</p></div>
    <p>${e?"O administrador bloqueou este acesso.":"Este e-mail ainda n\xE3o foi cadastrado como l\xEDder."} Fale com o administrador da fazenda.</p>
    <button class="btn pri" data-act="logout">Sair</button></div>`}var Af=[],Qc=!1,qc=null;function $v(){Af.forEach(n=>{try{n()}catch{}}),Af=[],Qc=!1}function wf(n){Af.push(mf(Wy(Mt,n),{includeMetadataChanges:!0},e=>{for(let r of[..._.pend])r.startsWith(n+"/")&&_.pend.delete(r);let t={};e.docs.forEach(r=>{t[r.id]=r.data({serverTimestamps:"estimate"}),r.metadata.hasPendingWrites&&_.pend.add(n+"/"+r.id)}),_.remote[n]=t,_.loaded[n]=!0,_.fromCache[n]=e.metadata.fromCache,Ft(),Ue(),_.flow&&_.flow.done&&he()},e=>{_.loaded[n]=!0,console.warn(n,e&&e.code),Ft(),Ue()}))}function Hb(){Qc||(Qc=!0,wf("registros"),wf("produtos"),_.isAdmin&&wf("usuarios"))}function Xs(){let n=J("#gate"),e=J("#app");if(!!_.user&&(_.isAdmin||_.perfil&&_.perfil.ativo===!0)){_.canWrite=!0,_.me=_.perfil&&_.perfil.nome||(_.isAdmin?"Administrador":""),n.hidden=!0,e.hidden=!1,Hb(),Ue();return}_.canWrite=!1,Qc&&$v(),e.hidden=!0,n.hidden=!1,n.innerHTML=Gb()}Eu(Rn,n=>{if($v(),qc&&(qc(),qc=null),Object.assign(_,{user:n,perfil:null,perfilLoaded:!1,perfilErr:null,remote:{registros:{},produtos:{},usuarios:{}},loaded:{},sel:null,flow:null,quick:null,detail:null,prodForm:null,userForm:null,pw:!1,view:"mapa"}),_.pend.clear(),Ft(),he(),to(),_.authReady=!0,!n){_.isAdmin=!1,Xs();return}_.isAdmin=String(n.email||"").toLowerCase()===db,qc=mf(pr(Mt,"usuarios",n.uid),e=>{_.perfil=e.exists()?e.data():null,_.perfilLoaded=!0,_.perfilErr=null,Xs()},e=>{_.perfil=null,_.perfilLoaded=!0,_.perfilErr=e&&e.code,Xs()}),Xs()});async function Wb(){let n=J("#lg-email").value.trim(),e=J("#lg-senha").value,t=J("#lg-msg"),r=J("#lg-btn");if(!n||!e){t.innerHTML=Kc("Preencha o e-mail e a senha.");return}r.disabled=!0,r.textContent="Entrando\u2026",t.innerHTML="";try{await wu(Rn,n,e)}catch(i){t.innerHTML=Kc(oo(i)),r.disabled=!1,r.textContent="Entrar"}}async function Kb(){let n=(J("#lg-email")||{}).value?.trim(),e=J("#lg-msg");if(!n){e.innerHTML=Kc('Digite o seu e-mail acima e toque de novo em "Esqueci minha senha".');return}try{await ia(Rn,n),e.innerHTML=`<div class="selsum">${U("check")}<span>Se esse e-mail tiver cadastro, chega nele um link para criar uma senha nova. Veja tamb\xE9m a caixa de spam.</span></div>`}catch(t){e.innerHTML=Kc(oo(t))}}async function Qb(){let n=_.userForm,e=n.nome.trim(),t=n.email.trim().toLowerCase(),r=n.senha;if(n.err=!e||!t?"Preencha o nome e o e-mail.":r.length<6?"A senha inicial precisa ter pelo menos 6 caracteres.":yr()?"Precisa de internet para cadastrar um l\xEDder.":"",n.err){Pe();return}_.busy=!0,Pe();let i=Hl(pv,"cadastro-"+Date.now());try{let s=ra(i,{persistence:ts}),o=await vu(s,t,r);await Mc(pr(Mt,"usuarios",o.user.uid),{nome:e,email:t,papel:"lider",ativo:!0,criadoEm:_f()}),await sa(s),_.userForm=null,lt(`${e} cadastrado. Passe o e-mail e a senha inicial para ele.`)}catch(s){n.err=oo(s)}finally{_.busy=!1;try{await im(i)}catch{}Pe()}}async function Yb(){let n=J("#pw-a").value,e=J("#pw-b").value;if(e.length<6){_.pwErr="A nova senha precisa ter pelo menos 6 caracteres.",Pe();return}try{await yu(Rn.currentUser,Dt.credential(Rn.currentUser.email,n)),await Iu(Rn.currentUser,e),_.pw=!1,_.pwErr="",lt("Senha trocada.")}catch(t){_.pwErr=oo(t)}Pe()}var Jb={forgot:()=>Kb(),logout:()=>{if(Pi()){lt(`Ainda h\xE1 ${Ee(Pi(),"registro","registros")} para enviar. Conecte na internet antes de sair.`);return}sa(Rn)},install:async()=>{if(Ai){Ai.prompt();try{await Ai.userChoice}catch{}Ai=null,Pe()}},"me-save":()=>{let n=J("#me-nome").value.trim();if(!n){J("#me-nome").focus();return}Mc(pr(Mt,"usuarios",_.user.uid),{nome:n,email:_.user.email,papel:"admin",ativo:!0},{merge:!0}).catch(Hc),lt("Nome salvo.")},"pw-open":()=>{_.pw=!0,_.pwErr="",Pe(),setTimeout(()=>J("#pw-a")?.focus(),0)},"pw-cancel":()=>{_.pw=!1,_.pwErr="",Pe()},"pw-save":()=>Yb(),"u-new":()=>{_.userForm={nome:"",email:"",senha:"",err:""},Pe(),setTimeout(()=>J("#uf-nome")?.focus(),0)},"u-cancel":()=>{_.userForm=null,Pe()},"u-save":()=>Qb(),"u-toggle":n=>{let e=_.remote.usuarios[n.dataset.id];e&&(tv(pr(Mt,"usuarios",n.dataset.id),{ativo:!e.ativo}).catch(Hc),lt(e.ativo?`${e.nome} bloqueado.`:`${e.nome} liberado.`))},"u-reset":n=>{let e=_.remote.usuarios[n.dataset.id];e&&ia(Rn,e.email).then(()=>lt(`Link para nova senha enviado para ${e.email}.`)).catch(t=>lt(oo(t)))},"backup-csv":()=>Mv(),"backup-json":()=>jb()};Object.assign(kf,Jb);document.addEventListener("submit",n=>{n.target.id==="login-form"&&(n.preventDefault(),Wb())});document.addEventListener("input",n=>{let e=n.target;e.dataset.uf!=null&&_.userForm&&(_.userForm[e.dataset.uf]=e.value)});if("serviceWorker"in navigator){let n=!!navigator.serviceWorker.controller,e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{!n||e||(e=!0,!_.flow&&!_.quick?location.reload():lt("Vers\xE3o nova pronta. Feche e abra o app para usar."))}),window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}Ue();Xs();
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
