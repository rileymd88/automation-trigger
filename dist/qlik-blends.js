(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@nebula.js/stardust')) :
  typeof define === 'function' && define.amd ? define(['@nebula.js/stardust'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mystuff = factory(global.stardust));
}(this, (function (stardust) { 'use strict';

  const properties = {
    showTitles: true,
    title: '',
    subtitle: '',
    footnote: '',
    qHyperCubeDef: {
      qInitialDataFetch: [{
        qWidth: 10,
        qHeight: 1000
      }]
    }
  };

  var blendr = {
    accountId: "98c97bb0-5b07-11eb-bfda-35143d78df5c",
    appId: 8473,
    apiKey: "n3lFBh1JTBU9MfkuBE3YzQQj1LPBL2Jq",
    baseUrl: "https://api.blendr.io/v1"
  };

  function post(endpoint, body) {
    return new Promise(async function (resolve, reject) {
      try {
        const headers = {
          'X-App-Id': blendr.appId,
          'X-Api-Key': blendr.apiKey
        };
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body)
        };
        const url = `${blendr.baseUrl}/${endpoint.replace('account_externalid', blendr.accountId)}`;
        const response = await fetch(url, options);

        if (response.status === 200) {
          resolve(await response.json());
        } else {
          reject(response.status);
        }
      } catch {
        reject(err);
        console.error(err);
      }
    });
  }
  const executeBlend = (blendId, data) => {
    return new Promise(async function (resolve, reject) {
      try {
        await post(`accounts/account_externalid/blends/${blendId}/run`, data);
        resolve('Blend run successfully');
      } catch (err) {
        reject(err);
      }
    });
  };

  var data = {
    targets: []
  };

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /** @license React v17.0.1
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var react_production_min = createCommonjsModule(function (module, exports) {
  var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
  if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
  function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
  function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
  function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
  function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
  function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
  0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
  function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
  exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
  exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
  key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
  exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
  exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";
  });

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });

  /** @license React v0.20.1
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var scheduler_production_min = createCommonjsModule(function (module, exports) {
  var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
  if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
  window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
  E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
  x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
  function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
  function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
  function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
  exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
  exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
  exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
  exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
  });

  var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = scheduler_production_min;
  }
  });

  /** @license React v17.0.1
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
  function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
  var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
  ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
  function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
  ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
  ["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
  pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
  D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
  function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
  var ra=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
  if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
  var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
  function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
  f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
  function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
  function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
  return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
  function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
  null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
  function Ya(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
  function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
  function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
  function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=objectAssign({children:void 0},b);if(b=db(b.children))a.children=b;return a}
  function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
  function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
  function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
  function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
  var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
  function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
  var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
  floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
  function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
  function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
  function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
  function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
  function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
  function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
  typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
  function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
  function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
  c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
  function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
  function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
  function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
  function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){scheduler.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
  function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
  function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
  function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Ac)));}
  function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
  function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
  fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
  var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
  "lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=scheduler.unstable_now;Qc();var F=8;
  function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
  F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
  function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
  function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
  function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
  function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
  function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
  function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
  function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}objectAssign(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
  (a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
  var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=objectAssign({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=objectAssign({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
  a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=objectAssign({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=objectAssign({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=objectAssign({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=objectAssign({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=objectAssign({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
  Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
  119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
  var Qd=objectAssign({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
  a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=objectAssign({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=objectAssign({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=objectAssign({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=objectAssign({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
  deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
  function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
  function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
  var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
  function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
  function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
  function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
  function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
  function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
  var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
  function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
  Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
  ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
  da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
  function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
  function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
  function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
  function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
  function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
  function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
  a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
  Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
  t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
  x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
  gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
  K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
  case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
  "beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
  function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
  function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
  function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
  function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
  function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
  function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c);}
  function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return objectAssign({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
  var Lf=null,Mf=null,Nf=scheduler.unstable_runWithPriority,Of=scheduler.unstable_scheduleCallback,Pf=scheduler.unstable_cancelCallback,Qf=scheduler.unstable_shouldYield,Rf=scheduler.unstable_requestPaint,Sf=scheduler.unstable_now,Tf=scheduler.unstable_getCurrentPriorityLevel,Uf=scheduler.unstable_ImmediatePriority,Vf=scheduler.unstable_UserBlockingPriority,Wf=scheduler.unstable_NormalPriority,Xf=scheduler.unstable_LowPriority,Yf=scheduler.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
  function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
  function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
  function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
  function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
  function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
  function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
  b;c.lastBaseUpdate=b;}
  function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
  next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=objectAssign({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
  f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Fg=(new react.Component).refs;
  function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
  var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
  b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
  function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
  function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
  function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
  (b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
  function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
  function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
  function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
  c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
  Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
  a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
  null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
  n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
  h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
  u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
  d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
  Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
  function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
  function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
  function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
  function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
  function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
  function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
  function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
  function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
  function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
  eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
  function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
  function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
  function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
  e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
  function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
  function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
  function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
  function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
  function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
  function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
  var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
  b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
  wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
  void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
  a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
  a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
  function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
  function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
  function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
  function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
  function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
  "function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
  typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
  "function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
  x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
  h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
  function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
  var si={dehydrated:null,retryLane:0};
  function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
  b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
  {baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
  function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
  function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
  function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
  function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
  null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
  function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
  Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
  Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=objectAssign({},e,{value:void 0});d=objectAssign({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
  l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
  (c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
  c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
  function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
  b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
  {wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
  jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
  e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=objectAssign({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
  gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
  break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
  c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
  4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
  null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
  f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
  64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
  function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
  function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
  function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
  function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
  function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
  b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
  return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
  function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
  a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
  function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
  f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
  function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
  c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
  function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
  function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
  function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
  8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
  function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
  2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
  b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
  function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
  function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
  function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
  function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
  c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
  function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
  a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
  c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
  function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
  function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
  function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
  function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
  (h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
  void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
  g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
  function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
  function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
  a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
  function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
  Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
  break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
  Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
  J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
  g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
  0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
  Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
  function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
  function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
  null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
  function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
  function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
  ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
  b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
  typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
  a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
  d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
  ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
  c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
  k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
  f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
  };function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
  function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
  function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
  c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
  function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
  typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
  function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
  function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
  function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
  function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
  d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
  function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
  qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
  function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
  function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
  gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
  yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
  Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
  var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
  pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;var createPortal=uk;
  var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};var flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};var hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
  var render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};var unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};var unstable_batchedUpdates=Wj;var unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
  var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};var version="17.0.1";

  var reactDom_production_min = {
  	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  	createPortal: createPortal,
  	findDOMNode: findDOMNode,
  	flushSync: flushSync,
  	hydrate: hydrate,
  	render: render,
  	unmountComponentAtNode: unmountComponentAtNode,
  	unstable_batchedUpdates: unstable_batchedUpdates,
  	unstable_createPortal: unstable_createPortal,
  	unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
  	version: version
  };

  var reactDom = createCommonjsModule(function (module) {

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = reactDom_production_min;
  }
  });

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      },
      unit = 'px',
      step = 5
    } = breakpoints,
          other = _objectWithoutPropertiesLoose(breakpoints, ["values", "unit", "step"]);

    const keys = Object.keys(values);

    function up(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (min-width:${value}${unit})`;
    }

    function down(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }

    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }

    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }

      return up(key);
    }

    function width(key) {
      return values[key];
    }

    return _extends({
      keys,
      values,
      up,
      down,
      between,
      only,
      width,
      unit
    }, other);
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var propTypes = createCommonjsModule(function (module) {
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  function isPlainObject(item) {
    return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
    // @ts-expect-error
    item.constructor === Object;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends({}, target) : target;

    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(key => {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

  /**
   * WARNING: Don't import this directly.
   * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
   * @param {number} code
   */
  function formatMuiErrorMessage(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe iff we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

    /* eslint-disable prefer-template */
    let url = 'https://material-ui.com/production-error/?code=' + code;

    for (let i = 1; i < arguments.length; i += 1) {
      // rest params over-transpile for this case
      // eslint-disable-next-line prefer-rest-params
      url += '&args[]=' + encodeURIComponent(arguments[i]);
    }

    return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
    /* eslint-enable prefer-template */
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element$1,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word in the sentence.
  // We only handle the first word.
  function capitalize(string) {
    if (typeof string !== 'string') {
      throw (
        /* FIXME (minify-errors-in-prod): Unminified error message in production build! */
        new Error(`Material-UI: \`capitalize(string)\` expects a string argument.`)
      );
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Safe chained function.
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   * @param {function} functions to chain
   * @returns {function|null}
   */
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {});
  }

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce(func, wait = 166) {
    let timeout;

    function debounced(...args) {
      const later = () => {
        func.apply(this, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    debounced.clear = () => {
      clearTimeout(timeout);
    };

    return debounced;
  }

  function isMuiElement(element, muiNames) {
    return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function ownerWindow(node) {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  /**
   * TODO v5: consider making it private
   *
   * passes {value} to {ref}
   *
   * WARNING: Be sure to only call this inside a callback that is passed as a ref.
   * Otherwise, make sure to cleanup the previous {ref} if it changes. See
   * https://github.com/mui-org/material-ui/issues/13539
   *
   * Useful if you want to expose the ref of an inner component to the public API
   * while still using it inside the component.
   * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
   */
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;

  function useId(idOverride) {
    const [defaultId, setDefaultId] = react.useState(idOverride);
    const id = idOverride || defaultId;
    react.useEffect(() => {
      if (defaultId == null) {
        // Fallback to this default id when possible.
        // Use the random value for client-side rendering only.
        // We can't use it server-side.
        setDefaultId(`mui-${Math.round(Math.random() * 1e5)}`);
      }
    }, [defaultId]);
    return id;
  }

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const {
      current: isControlled
    } = react.useRef(controlled !== undefined);
    const [valueState, setValue] = react.useState(defaultProp);
    const value = isControlled ? controlled : valueState;

    const setValueIfUncontrolled = react.useCallback(newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   */

  function useEventCallback(fn) {
    const ref = react.useRef(fn);
    useEnhancedEffect(() => {
      ref.current = fn;
    });
    return react.useCallback((...args) => // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, ref.current)(...args), []);
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return react.useMemo(() => {
      if (refA == null && refB == null) {
        return null;
      }

      return refValue => {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  let hadFocusVisibleRecentlyTimeout = null;
  const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @returns {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    const {
      type,
      tagName
    } = node;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */


  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */


  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    const {
      target
    } = event;

    try {
      return target.matches(':focus-visible');
    } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
      // We use our own heuristic for those browsers.
      // Rethrow might be better if it's not the expected error but do we really
      // want to crash if focus-visible malfunctioned?
    } // No need for validFocusTarget check. The user does that by attaching it to
    // focusable events only.


    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }

  function useIsFocusVisible() {
    const ref = react.useCallback(node => {
      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = react.useRef(false);
    /**
     * Should be called if a blur event is fired
     */

    function handleBlurVisible() {
      // checking against potential state variable does not suffice if we focus and blur synchronously.
      // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
      // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
      // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
      // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
      if (isFocusVisibleRef.current) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
          hadFocusVisibleRecently = false;
        }, 100);
        isFocusVisibleRef.current = false;
        return true;
      }

      return false;
    }
    /**
     * Should be called if a blur event is fired
     */


    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }

      return false;
    }

    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
  function getScrollbarSize(doc) {
    const scrollDiv = doc.createElement('div');
    scrollDiv.style.width = '99px';
    scrollDiv.style.height = '99px';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.overflow = 'scroll';
    doc.body.appendChild(scrollDiv);
    const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    doc.body.removeChild(scrollDiv);
    return scrollbarSize;
  }

  const visuallyHidden = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1
  };

  function merge(acc, item) {
    if (!item) {
      return acc;
    }

    return deepmerge(acc, item, {
      clone: false // No need to clone deep, it's way faster.

    });
  }

  // For instance with the first breakpoint xs: [xs, sm[.

  const values = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {

    if (Array.isArray(propValue)) {
      const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }

    if (typeof propValue === 'object') {
      const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        // key is breakpoint
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          acc[themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }

        return acc;
      }, {});
    }

    const output = styleFromPropValue(propValue);
    return output;
  }

  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;

    const breakpointsInOrder = breakpointsInput === null || breakpointsInput === void 0 ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) === null || _breakpointsInput$key === void 0 ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

      if (isBreakpointUnused) {
        delete acc[key];
      }

      return acc;
    }, style);
  }

  function getPath(obj, path) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
  }

  function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;

    if (typeof themeMapping === 'function') {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }

    if (transform) {
      value = transform(value);
    }

    return value;
  }

  function style(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;

    const fn = props => {
      if (props[prop] == null) {
        return null;
      }

      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};

      const styleFromPropValue = propValueFinal => {
        let value = getValue(themeMapping, transform, propValueFinal);

        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }

        if (cssProperty === false) {
          return value;
        }

        return {
          [cssProperty]: value
        };
      };

      return handleBreakpoints(props, propValue, styleFromPropValue);
    };

    fn.propTypes =  {};
    fn.filterProps = [prop];
    return fn;
  }

  function compose(...styles) {
    const handlers = styles.reduce((acc, style) => {
      style.filterProps.forEach(prop => {
        acc[prop] = style;
      });
      return acc;
    }, {});

    const fn = props => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }

        return acc;
      }, {});
    };

    fn.propTypes =  {};
    fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
    return fn;
  }

  function memoize(fn) {
    const cache = {};
    return arg => {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }

      return cache[arg];
    };
  }

  const properties$1 = {
    m: 'margin',
    p: 'padding'
  };
  const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  }; // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec

  const getCssProperties = memoize(prop => {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }

    const [a, b] = prop.split('');
    const property = properties$1[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
  });
  const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY'];
  const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
  const spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey) || defaultValue;

    if (typeof themeSpacing === 'number') {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }

        return themeSpacing * abs;
      };
    }

    if (Array.isArray(themeSpacing)) {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }

        return themeSpacing[abs];
      };
    }

    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }

    return () => undefined;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8);
  }
  function getValue$1(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }

    const abs = Math.abs(propValue);
    const transformed = transformer(abs);

    if (propValue >= 0) {
      return transformed;
    }

    if (typeof transformed === 'number') {
      return -transformed;
    }

    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return propValue => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue$1(transformer, propValue);
      return acc;
    }, {});
  }

  function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (keys.indexOf(prop) === -1) {
      return null;
    }

    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }

  function style$1(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }

  function spacing(props) {
    return style$1(props, spacingKeys);
  }

  spacing.propTypes =  {};
  spacing.filterProps = spacingKeys;

  function getBorder(value) {
    if (typeof value !== 'number') {
      return value;
    }

    return `${value}px solid`;
  }

  const border = style({
    prop: 'border',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderTop = style({
    prop: 'borderTop',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderRight = style({
    prop: 'borderRight',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderBottom = style({
    prop: 'borderBottom',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderLeft = style({
    prop: 'borderLeft',
    themeKey: 'borders',
    transform: getBorder
  });
  const borderColor = style({
    prop: 'borderColor',
    themeKey: 'palette'
  });

  function resolveCssProperty$1(props, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it isn't worth the bundle size.
    if (prop !== 'borderRadius') {
      return null;
    }

    const cssProperties = ['borderRadius'];
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }

  const borderRadius = props => {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);
    return props.borderRadius ? resolveCssProperty$1(props, 'borderRadius', transformer) : {};
  };
  borderRadius.propTypes =  {};
  borderRadius.filterProps = ['borderRadius'];
  const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

  const displayPrint = style({
    prop: 'displayPrint',
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  });
  const displayRaw = style({
    prop: 'display'
  });
  const overflow = style({
    prop: 'overflow'
  });
  const textOverflow = style({
    prop: 'textOverflow'
  });
  const visibility = style({
    prop: 'visibility'
  });
  const whiteSpace = style({
    prop: 'whiteSpace'
  });
  var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

  const flexBasis = style({
    prop: 'flexBasis'
  });
  const flexDirection = style({
    prop: 'flexDirection'
  });
  const flexWrap = style({
    prop: 'flexWrap'
  });
  const justifyContent = style({
    prop: 'justifyContent'
  });
  const alignItems = style({
    prop: 'alignItems'
  });
  const alignContent = style({
    prop: 'alignContent'
  });
  const order = style({
    prop: 'order'
  });
  const flex = style({
    prop: 'flex'
  });
  const flexGrow = style({
    prop: 'flexGrow'
  });
  const flexShrink = style({
    prop: 'flexShrink'
  });
  const alignSelf = style({
    prop: 'alignSelf'
  });
  const justifyItems = style({
    prop: 'justifyItems'
  });
  const justifySelf = style({
    prop: 'justifySelf'
  });
  const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

  const gap = style({
    prop: 'gap'
  });
  const columnGap = style({
    prop: 'columnGap'
  });
  const rowGap = style({
    prop: 'rowGap'
  });
  const gridColumn = style({
    prop: 'gridColumn'
  });
  const gridRow = style({
    prop: 'gridRow'
  });
  const gridAutoFlow = style({
    prop: 'gridAutoFlow'
  });
  const gridAutoColumns = style({
    prop: 'gridAutoColumns'
  });
  const gridAutoRows = style({
    prop: 'gridAutoRows'
  });
  const gridTemplateColumns = style({
    prop: 'gridTemplateColumns'
  });
  const gridTemplateRows = style({
    prop: 'gridTemplateRows'
  });
  const gridTemplateAreas = style({
    prop: 'gridTemplateAreas'
  });
  const gridArea = style({
    prop: 'gridArea'
  });
  const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  const color = style({
    prop: 'color',
    themeKey: 'palette'
  });
  const bgcolor = style({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette'
  });
  const backgroundColor = style({
    prop: 'backgroundColor',
    themeKey: 'palette'
  });
  const palette = compose(color, bgcolor, backgroundColor);

  const position = style({
    prop: 'position'
  });
  const zIndex = style({
    prop: 'zIndex',
    themeKey: 'zIndex'
  });
  const top = style({
    prop: 'top'
  });
  const right = style({
    prop: 'right'
  });
  const bottom = style({
    prop: 'bottom'
  });
  const left = style({
    prop: 'left'
  });
  var positions = compose(position, zIndex, top, right, bottom, left);

  const boxShadow = style({
    prop: 'boxShadow',
    themeKey: 'shadows'
  });

  function transform(value) {
    return value <= 1 ? `${value * 100}%` : value;
  }

  const width = style({
    prop: 'width',
    transform
  });
  const maxWidth = style({
    prop: 'maxWidth',
    transform
  });
  const minWidth = style({
    prop: 'minWidth',
    transform
  });
  const height = style({
    prop: 'height',
    transform
  });
  const maxHeight = style({
    prop: 'maxHeight',
    transform
  });
  const minHeight = style({
    prop: 'minHeight',
    transform
  });
  const sizeWidth = style({
    prop: 'size',
    cssProperty: 'width',
    transform
  });
  const sizeHeight = style({
    prop: 'size',
    cssProperty: 'height',
    transform
  });
  const boxSizing = style({
    prop: 'boxSizing'
  });
  const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  const fontFamily = style({
    prop: 'fontFamily',
    themeKey: 'typography'
  });
  const fontSize = style({
    prop: 'fontSize',
    themeKey: 'typography'
  });
  const fontStyle = style({
    prop: 'fontStyle',
    themeKey: 'typography'
  });
  const fontWeight = style({
    prop: 'fontWeight',
    themeKey: 'typography'
  });
  const letterSpacing = style({
    prop: 'letterSpacing'
  });
  const lineHeight = style({
    prop: 'lineHeight'
  });
  const textAlign = style({
    prop: 'textAlign'
  });
  const typographyVariant = style({
    prop: 'typography',
    cssProperty: false,
    themeKey: 'typography'
  });
  const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

  const filterPropsMapping = {
    borders: borders.filterProps,
    display: display.filterProps,
    flexbox: flexbox.filterProps,
    grid: grid.filterProps,
    positions: positions.filterProps,
    palette: palette.filterProps,
    shadows: boxShadow.filterProps,
    sizing: sizing.filterProps,
    spacing: spacing.filterProps,
    typography: typography.filterProps
  };
  const styleFunctionMapping = {
    borders,
    display,
    flexbox,
    grid,
    positions,
    palette,
    shadows: boxShadow,
    sizing,
    spacing,
    typography
  };
  const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach(propName => {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  }, {});

  function getThemeValue(prop, value, theme) {
    const inputProps = {
      [prop]: value,
      theme
    };
    const styleFunction = propToStyleFunction[prop];
    return styleFunction ? styleFunction(inputProps) : {
      [prop]: value
    };
  }

  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
  }

  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
  }

  function styleFunctionSx(props) {
    const {
      sx: styles,
      theme = {}
    } = props || {};
    if (!styles) return null;

    if (typeof styles === 'function') {
      return styles(theme);
    }

    if (typeof styles !== 'object') {
      // value
      return styles;
    }

    const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
    const breakpointsKeys = Object.keys(emptyBreakpoints);
    let css = emptyBreakpoints;
    Object.keys(styles).forEach(styleKey => {
      const value = callIfFn(styles[styleKey], theme);

      if (typeof value === 'object') {
        if (propToStyleFunction[styleKey]) {
          css = merge(css, getThemeValue(styleKey, value, theme));
        } else {
          const breakpointsValues = handleBreakpoints({
            theme
          }, value, x => ({
            [styleKey]: x
          }));

          if (objectsHaveSameKeys(breakpointsValues, value)) {
            css[styleKey] = styleFunctionSx({
              sx: value,
              theme
            });
          } else {
            css = merge(css, breakpointsValues);
          }
        }
      } else {
        css = merge(css, getThemeValue(styleKey, value, theme));
      }
    });
    return removeUnusedBreakpoints(breakpointsKeys, css);
  }

  styleFunctionSx.filterProps = ['sx'];

  const splitProps = props => {
    const result = {
      systemProps: {},
      otherProps: {}
    };
    Object.keys(props).forEach(prop => {
      if (propToStyleFunction[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };

  function extendSxProp(props) {
    const {
      sx: inSx
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["sx"]);

    const {
      systemProps,
      otherProps
    } = splitProps(other);
    return _extends({}, otherProps, {
      sx: _extends({}, systemProps, inSx)
    });
  }

  /* eslint-disable @typescript-eslint/no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value, min = 0, max = 1) {

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function hexToRgb(color) {
    color = color.substr(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(n => n + n);
    }

    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
  }
  /**
   * Converts a color from hsl format to rgb format.
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    const {
      values
    } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);

    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type,
      values: rgb
    });
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    const marker = color.indexOf('(');
    const type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
      throw new Error( formatMuiErrorMessage(9, color));
    }

    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;

    if (type === 'color') {
      values = values.split(' ');
      colorSpace = values.shift();

      if (values.length === 4 && values[3].charAt(0) === '/') {
        values[3] = values[3].substr(1);
      }

      if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
        throw new Error( formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values = values.split(',');
    }

    values = values.map(value => parseFloat(value));
    return {
      type,
      values,
      colorSpace
    };
  }
  /**
   * Converts a color object with type and values to a string.
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    const {
      type,
      colorSpace
    } = color;
    let {
      values
    } = color;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = `${values[1]}%`;
      values[2] = `${values[2]}%`;
    }

    if (type.indexOf('color') !== -1) {
      values = `${colorSpace} ${values.join(' ')}`;
    } else {
      values = `${values.join(', ')}`;
    }

    return `${type}(${values})`;
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
      if (color.type !== 'color') {
        val /= 255; // normalized
      }

      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  /**
   * Darken or lighten a color, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} value - value to set the alpha channel to in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    if (color.type === 'color') {
      color.values[3] = `/${value}`;
    } else {
      color.values[3] = value;
    }

    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    } else if (color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (1 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  function toVal(mix) {
  	var k, y, str='';

  	if (typeof mix === 'string' || typeof mix === 'number') {
  		str += mix;
  	} else if (typeof mix === 'object') {
  		if (Array.isArray(mix)) {
  			for (k=0; k < mix.length; k++) {
  				if (mix[k]) {
  					if (y = toVal(mix[k])) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else {
  			for (k in mix) {
  				if (mix[k]) {
  					str && (str += ' ');
  					str += k;
  				}
  			}
  		}
  	}

  	return str;
  }

  function clsx () {
  	var i=0, tmp, x, str='';
  	while (i < arguments.length) {
  		if (tmp = arguments[i++]) {
  			if (x = toVal(tmp)) {
  				str && (str += ' ');
  				str += x;
  			}
  		}
  	}
  	return str;
  }

  function isHostComponent(element) {
    return typeof element === 'string';
  }

  function composeClasses(slots, getUtilityClass, classes) {
    const output = {};
    Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    slot => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }

          acc.push(getUtilityClass(key));
        }

        return acc;
      }, []).join(' ');
    });
    return output;
  }

  const globalPseudoClassesMapping = {
    active: 'Mui-active',
    checked: 'Mui-checked',
    disabled: 'Mui-disabled',
    error: 'Mui-error',
    focused: 'Mui-focused',
    focusVisible: 'Mui-focusVisible',
    required: 'Mui-required',
    expanded: 'Mui-expanded',
    selected: 'Mui-selected'
  };
  function generateUtilityClass(componentName, slot) {
    const globalPseudoClass = globalPseudoClassesMapping[slot];
    return globalPseudoClass || `${componentName}-${slot}`;
  }

  function generateUtilityClasses(componentName, slots) {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass(componentName, slot);
    });
    return result;
  }

  function getSliderUtilityClass(slot) {
    return generateUtilityClass('MuiSlider', slot);
  }
  const sliderUnstyledClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb', 'valueLabel', 'valueLabelOffset', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel']);

  const useValueLabelClasses = props => {
    const {
      open
    } = props;
    const utilityClasses = {
      offset: clsx(sliderUnstyledClasses.valueLabel, sliderUnstyledClasses.valueLabelOffset, open && sliderUnstyledClasses.valueLabelOpen),
      circle: sliderUnstyledClasses.valueLabelCircle,
      label: sliderUnstyledClasses.valueLabelLabel
    };
    return utilityClasses;
  };
  /**
   * @ignore - internal component.
   */


  function SliderValueLabelUnstyled(props) {
    const {
      children,
      className,
      value,
      components = {},
      theme
    } = props;
    const classes = useValueLabelClasses(props);
    const Root = components.Root || 'span';
    return /*#__PURE__*/react.cloneElement(children, {
      className: clsx(children.props.className)
    }, /*#__PURE__*/react.createElement(react.Fragment, null, children.props.children, /*#__PURE__*/react.createElement(Root, {
      className: clsx(classes.offset, className),
      theme: theme,
      "aria-hidden": true
    }, /*#__PURE__*/react.createElement("span", {
      className: classes.circle
    }, /*#__PURE__*/react.createElement("span", {
      className: classes.label
    }, value)))));
  }

  function asc(a, b) {
    return a - b;
  }

  function clamp$1(value, min, max) {
    if (value == null) {
      return min;
    }

    return Math.min(Math.max(min, value), max);
  }

  function findClosest(values, currentValue) {
    const {
      index: closestIndex
    } = values.reduce((acc, value, index) => {
      const distance = Math.abs(currentValue - value);

      if (acc === null || distance < acc.distance || distance === acc.distance) {
        return {
          distance,
          index
        };
      }

      return acc;
    }, null);
    return closestIndex;
  }

  function trackFinger(event, touchId) {
    if (touchId.current !== undefined && event.changedTouches) {
      for (let i = 0; i < event.changedTouches.length; i += 1) {
        const touch = event.changedTouches[i];

        if (touch.identifier === touchId.current) {
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }
      }

      return false;
    }

    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  function valueToPercent(value, min, max) {
    return (value - min) * 100 / (max - min);
  }

  function percentToValue(percent, min, max) {
    return (max - min) * percent + min;
  }

  function getDecimalPrecision(num) {
    // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
    // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
    if (Math.abs(num) < 1) {
      const parts = num.toExponential().split('e-');
      const matissaDecimalPart = parts[0].split('.')[1];
      return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
    }

    const decimalPart = num.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
  }

  function roundValueToStep(value, step, min) {
    const nearest = Math.round((value - min) / step) * step + min;
    return Number(nearest.toFixed(getDecimalPrecision(step)));
  }

  function setValueIndex({
    values,
    source,
    newValue,
    index
  }) {
    // Performance shortcut
    if (source[index] === newValue) {
      return source;
    }

    const output = values.slice();
    output[index] = newValue;
    return output;
  }

  function focusThumb({
    sliderRef,
    activeIndex,
    setActive
  }) {
    const doc = ownerDocument(sliderRef.current);

    if (!sliderRef.current.contains(doc.activeElement) || Number(doc.activeElement.getAttribute('data-index')) !== activeIndex) {
      sliderRef.current.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
    }

    if (setActive) {
      setActive(activeIndex);
    }
  }

  const axisProps = {
    horizontal: {
      offset: percent => ({
        left: `${percent}%`
      }),
      leap: percent => ({
        width: `${percent}%`
      })
    },
    'horizontal-reverse': {
      offset: percent => ({
        right: `${percent}%`
      }),
      leap: percent => ({
        width: `${percent}%`
      })
    },
    vertical: {
      offset: percent => ({
        bottom: `${percent}%`
      }),
      leap: percent => ({
        height: `${percent}%`
      })
    }
  };

  const Identity = x => x; // TODO: remove support for Safari < 13.
  // https://caniuse.com/#search=touch-action
  //
  // Safari, on iOS, supports touch action since v13.
  // Over 80% of the iOS phones are compatible
  // in August 2020.


  let cachedSupportsTouchActionNone;

  function doesSupportTouchActionNone() {
    if (cachedSupportsTouchActionNone === undefined) {
      const element = document.createElement('div');
      element.style.touchAction = 'none';
      document.body.appendChild(element);
      cachedSupportsTouchActionNone = window.getComputedStyle(element).touchAction === 'none';
      element.parentElement.removeChild(element);
    }

    return cachedSupportsTouchActionNone;
  }

  const useUtilityClasses = styleProps => {
    const {
      disabled,
      marked,
      orientation,
      track,
      classes
    } = styleProps;
    const slots = {
      root: ['root', disabled && 'disabled', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
      rail: ['rail'],
      track: ['track'],
      mark: ['mark'],
      markActive: ['markActive'],
      markLabel: ['markLabel'],
      markLabelActive: ['markLabelActive'],
      valueLabel: ['valueLabel'],
      thumb: ['thumb', disabled && 'disabled'],
      active: ['active'],
      disabled: ['disabled'],
      focusVisible: ['focusVisible']
    };
    return composeClasses(slots, getSliderUtilityClass, classes);
  };

  const Forward = ({
    children
  }) => children;

  const SliderUnstyled = /*#__PURE__*/react.forwardRef(function SliderUnstyled(props, ref) {
    const {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-valuetext': ariaValuetext,
      className,
      component: Component = 'span',
      classes: classesProp = {},
      defaultValue,
      disabled = false,
      getAriaLabel,
      getAriaValueText,
      marks: marksProp = false,
      max = 100,
      min = 0,
      name,
      onChange,
      onChangeCommitted,
      onMouseDown,
      orientation = 'horizontal',
      scale = Identity,
      step = 1,
      track = 'normal',
      value: valueProp,
      valueLabelDisplay = 'off',
      valueLabelFormat = Identity,
      isRtl = false,
      components = {},
      componentsProps = {},

      /* eslint-disable-next-line react/prop-types */
      theme
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["aria-label", "aria-labelledby", "aria-valuetext", "className", "component", "classes", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps", "theme"]);

    const touchId = react.useRef(); // We can't use the :active browser pseudo-classes.
    // - The active state isn't triggered when clicking on the rail.
    // - The active state isn't transferred when inversing a range slider.

    const [active, setActive] = react.useState(-1);
    const [open, setOpen] = react.useState(-1);
    const [valueDerived, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue !== null && defaultValue !== void 0 ? defaultValue : min,
      name: 'Slider'
    });

    const handleChange = onChange && ((event, value) => {
      if (!(event instanceof Event)) event.persist(); // Redefine target to allow name and value to be read.
      // This allows seamless integration with the most popular form libraries.
      // https://github.com/mui-org/material-ui/issues/13485#issuecomment-676048492

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value,
          name
        }
      });
      onChange(event, value);
    });

    const range = Array.isArray(valueDerived);
    let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
    values = values.map(value => clamp$1(value, min, max));
    const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
      value: min + step * index
    })) : marksProp || [];
    const {
      isFocusVisibleRef,
      onBlur: handleBlurVisible,
      onFocus: handleFocusVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = react.useState(-1);
    const sliderRef = react.useRef();
    const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
    const handleRef = useForkRef(ref, handleFocusRef);
    const handleFocus = useEventCallback(event => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      handleFocusVisible(event);

      if (isFocusVisibleRef.current === true) {
        setFocusVisible(index);
      }

      setOpen(index);
    });
    const handleBlur = useEventCallback(event => {
      handleBlurVisible(event);

      if (isFocusVisibleRef.current === false) {
        setFocusVisible(-1);
      }

      setOpen(-1);
    });
    const handleMouseOver = useEventCallback(event => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      setOpen(index);
    });
    const handleMouseLeave = useEventCallback(() => {
      setOpen(-1);
    });
    useEnhancedEffect(() => {
      if (disabled && sliderRef.current.contains(document.activeElement)) {
        // This is necessary because Firefox and Safari will keep focus
        // on a disabled element:
        // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
        document.activeElement.blur();
      }
    }, [disabled]);

    if (disabled && active !== -1) {
      setActive(-1);
    }

    if (disabled && focusVisible !== -1) {
      setFocusVisible(-1);
    }

    const handleHiddenInputChange = useEventCallback(event => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      const value = values[index];
      const marksValues = marks.map(mark => mark.value);
      const marksIndex = marksValues.indexOf(value);
      let newValue = event.target.valueAsNumber;

      if (marks && step == null) {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }

      newValue = clamp$1(newValue, min, max);

      if (marks && step == null) {
        const markValues = marks.map(mark => mark.value);
        const currentMarkIndex = markValues.indexOf(values[index]);
        newValue = newValue < values[index] ? markValues[currentMarkIndex - 1] : markValues[currentMarkIndex + 1];
      }

      if (range) {
        const previousValue = newValue;
        newValue = setValueIndex({
          values,
          source: valueDerived,
          newValue,
          index
        }).sort(asc);
        focusThumb({
          sliderRef,
          activeIndex: newValue.indexOf(previousValue)
        });
      }

      setValueState(newValue);
      setFocusVisible(index);

      if (handleChange) {
        handleChange(event, newValue);
      }

      if (onChangeCommitted) {
        onChangeCommitted(event, newValue);
      }
    });
    const previousIndex = react.useRef();
    let axis = orientation;

    if (isRtl && orientation !== "vertical") {
      axis += '-reverse';
    }

    const getFingerNewValue = ({
      finger,
      move = false,
      values: values2,
      source
    }) => {
      const {
        current: slider
      } = sliderRef;
      const {
        width,
        height,
        bottom,
        left
      } = slider.getBoundingClientRect();
      let percent;

      if (axis.indexOf('vertical') === 0) {
        percent = (bottom - finger.y) / height;
      } else {
        percent = (finger.x - left) / width;
      }

      if (axis.indexOf('-reverse') !== -1) {
        percent = 1 - percent;
      }

      let newValue;
      newValue = percentToValue(percent, min, max);

      if (step) {
        newValue = roundValueToStep(newValue, step, min);
      } else {
        const marksValues = marks.map(mark => mark.value);
        const closestIndex = findClosest(marksValues, newValue);
        newValue = marksValues[closestIndex];
      }

      newValue = clamp$1(newValue, min, max);
      let activeIndex = 0;

      if (range) {
        if (!move) {
          activeIndex = findClosest(values2, newValue);
        } else {
          activeIndex = previousIndex.current;
        }

        const previousValue = newValue;
        newValue = setValueIndex({
          values: values2,
          source,
          newValue,
          index: activeIndex
        }).sort(asc);
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }

      return {
        newValue,
        activeIndex
      };
    };

    const handleTouchMove = useEventCallback(nativeEvent => {
      const finger = trackFinger(nativeEvent, touchId);

      if (!finger) {
        return;
      } // Cancel move in case some other element consumed a mouseup event and it was not fired.


      if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleTouchEnd(nativeEvent);
        return;
      }

      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        move: true,
        values,
        source: valueDerived
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(nativeEvent, newValue);
      }
    });
    const handleTouchEnd = useEventCallback(nativeEvent => {
      const finger = trackFinger(nativeEvent, touchId);

      if (!finger) {
        return;
      }

      const {
        newValue
      } = getFingerNewValue({
        finger,
        values,
        source: valueDerived
      });
      setActive(-1);

      if (nativeEvent.type === 'touchend') {
        setOpen(-1);
      }

      if (onChangeCommitted) {
        onChangeCommitted(nativeEvent, newValue);
      }

      touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      stopListening();
    });
    const handleTouchStart = useEventCallback(event => {
      // If touch-action: none; is not supported we need to prevent the scroll manually.
      if (!doesSupportTouchActionNone()) {
        event.preventDefault();
      }

      const touch = event.changedTouches[0];

      if (touch != null) {
        // A number that uniquely identifies the current finger in the touch session.
        touchId.current = touch.identifier;
      }

      const finger = trackFinger(event, touchId);
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values,
        source: valueDerived
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(event, newValue);
      }

      const doc = ownerDocument(sliderRef.current);
      doc.addEventListener('touchmove', handleTouchMove);
      doc.addEventListener('touchend', handleTouchEnd);
    });
    const stopListening = react.useCallback(() => {
      const doc = ownerDocument(sliderRef.current);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    }, [handleTouchEnd, handleTouchMove]);
    react.useEffect(() => {
      const {
        current: slider
      } = sliderRef;
      slider.addEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      return () => {
        slider.removeEventListener('touchstart', handleTouchStart, {
          passive: doesSupportTouchActionNone()
        });
        stopListening();
      };
    }, [stopListening, handleTouchStart]);
    react.useEffect(() => {
      if (disabled) {
        stopListening();
      }
    }, [disabled, stopListening]);
    const handleMouseDown = useEventCallback(event => {
      if (onMouseDown) {
        onMouseDown(event);
      } // Only handle left clicks


      if (event.button !== 0) {
        return;
      } // Avoid text selection


      event.preventDefault();
      const finger = trackFinger(event, touchId);
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values,
        source: valueDerived
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(event, newValue);
      }

      const doc = ownerDocument(sliderRef.current);
      doc.addEventListener('mousemove', handleTouchMove);
      doc.addEventListener('mouseup', handleTouchEnd);
    });
    const trackOffset = valueToPercent(range ? values[0] : min, min, max);
    const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

    const trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

    const Root = components.Root || 'span';
    const rootProps = componentsProps.root || {};
    const Rail = components.Rail || 'span';
    const railProps = componentsProps.rail || {};
    const Track = components.Track || 'span';
    const trackProps = componentsProps.track || {};
    const Thumb = components.Thumb || 'span';
    const thumbProps = componentsProps.thumb || {};
    const ValueLabel = components.ValueLabel || SliderValueLabelUnstyled;
    const valueLabelProps = componentsProps.valueLabel || {};
    const Mark = components.Mark || 'span';
    const markProps = componentsProps.mark || {};
    const MarkLabel = components.MarkLabel || 'span';
    const markLabelProps = componentsProps.markLabel || {}; // all props with defaults
    // consider extracting to hook an reusing the lint rule for the varints

    const styleProps = _extends({}, props, {
      classes: {},
      disabled,
      max,
      min,
      orientation,
      scale,
      step,
      track,
      valueLabelDisplay,
      valueLabelFormat,
      isRtl,
      marked: marks.length > 0 && marks.some(mark => mark.label)
    });

    const utilityClasses = useUtilityClasses(_extends({}, styleProps, {
      classes: classesProp
    }));
    return /*#__PURE__*/react.createElement(Root, _extends({
      ref: handleRef,
      onMouseDown: handleMouseDown
    }, rootProps, !isHostComponent(Root) && {
      as: Component,
      styleProps: _extends({}, styleProps, rootProps.styleProps),
      theme
    }, other, {
      className: clsx(utilityClasses.root, rootProps.className, className)
    }), /*#__PURE__*/react.createElement(Rail, _extends({}, railProps, !isHostComponent(Rail) && {
      styleProps: _extends({}, styleProps, railProps.styleProps),
      theme
    }, {
      className: clsx(utilityClasses.rail, railProps.className)
    })), /*#__PURE__*/react.createElement(Track, _extends({}, trackProps, !isHostComponent(Track) && {
      styleProps: _extends({}, styleProps, trackProps.styleProps),
      theme
    }, {
      className: clsx(utilityClasses.track, trackProps.className),
      style: _extends({}, trackStyle, trackProps.style)
    })), marks.map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;

      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }

      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: mark.value
      }, /*#__PURE__*/react.createElement(Mark, _extends({
        "data-index": index
      }, markProps, !isHostComponent(Mark) && {
        styleProps: _extends({}, styleProps, markProps.styleProps, {
          markActive
        }),
        theme
      }, {
        style: _extends({}, style, markProps.style),
        className: clsx(utilityClasses.mark, markProps.className, markActive && utilityClasses.markActive)
      })), mark.label != null ? /*#__PURE__*/react.createElement(MarkLabel, _extends({
        "aria-hidden": true,
        "data-index": index
      }, markLabelProps, !isHostComponent(MarkLabel) && {
        styleProps: _extends({}, styleProps, markLabelProps.styleProps, {
          markLabelActive: markActive
        }),
        theme
      }, {
        style: _extends({}, style, markLabelProps.style),
        className: clsx(utilityClasses.markLabel, markLabelProps.className, markActive && utilityClasses.markLabelActive)
      }), mark.label) : null);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: index
      }, /*#__PURE__*/react.createElement(ValueLabelComponent, _extends({
        valueLabelFormat: valueLabelFormat,
        valueLabelDisplay: valueLabelDisplay,
        value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
        index: index,
        open: open === index || active === index || valueLabelDisplay === 'on',
        disabled: disabled
      }, valueLabelProps, {
        className: clsx(utilityClasses.valueLabel, valueLabelProps.className)
      }, !isHostComponent(ValueLabel) && {
        styleProps: _extends({}, styleProps, valueLabelProps.styleProps),
        theme
      }), /*#__PURE__*/react.createElement(Thumb, _extends({
        "data-index": index,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave
      }, thumbProps, {
        className: clsx(utilityClasses.thumb, thumbProps.className, active === index && utilityClasses['active'], focusVisible === index && utilityClasses['focusVisible'])
      }, !isHostComponent(Thumb) && {
        styleProps: _extends({}, styleProps, thumbProps.styleProps),
        theme
      }, {
        style: _extends({}, style, thumbProps.style)
      }), /*#__PURE__*/react.createElement("input", {
        "data-index": index,
        "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
        "aria-labelledby": ariaLabelledby,
        "aria-orientation": orientation,
        "aria-valuemax": scale(max),
        "aria-valuemin": scale(min),
        "aria-valuenow": scale(value),
        "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
        onFocus: handleFocus,
        onBlur: handleBlur,
        name: name,
        type: "range",
        min: props.min,
        max: props.max,
        step: props.step,
        disabled: disabled,
        value: values[index],
        onChange: handleHiddenInputChange,
        style: _extends({}, visuallyHidden, {
          direction: isRtl ? 'rtl' : 'ltr',
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: '100%',
          height: '100%'
        })
      }))));
    }));
  });

  function createMixins(breakpoints, spacing, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: 48
        },
        [breakpoints.up('sm')]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  const common = {
    black: '#000',
    white: '#fff'
  };

  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };

  const indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };

  const pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };

  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  const dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }

  function createPalette(palette) {
    const {
      primary = {
        light: indigo[300],
        main: indigo[500],
        dark: indigo[700]
      },
      secondary = {
        light: pink.A200,
        main: pink.A400,
        dark: pink.A700
      },
      error = {
        light: red[300],
        main: red[500],
        dark: red[700]
      },
      warning = {
        light: orange[300],
        main: orange[500],
        dark: orange[700]
      },
      info = {
        light: blue[300],
        main: blue[500],
        dark: blue[700]
      },
      success = {
        light: green[300],
        main: green[500],
        dark: green[700]
      },
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette,
          other = _objectWithoutPropertiesLoose(palette, ["primary", "secondary", "error", "warning", "info", "success", "mode", "contrastThreshold", "tonalOffset"]); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      return contrastText;
    }

    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color = _extends({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.hasOwnProperty('main')) {
        throw new Error( formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
      }

      if (typeof color.main !== 'string') {
        throw new Error( formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    };

    const modes = {
      dark,
      light
    };

    const paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common,
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: 'primary'
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: 'secondary',
        mainShade: 'A400',
        lightShade: 'A200',
        darkShade: 'A700'
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: 'error'
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: 'warning'
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: 'info'
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: 'succes'
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  const caseAllCaps = {
    textTransform: 'uppercase'
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    const _ref = typeof typography === 'function' ? typography(palette) : typography,
          {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell Material-UI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref,
          other = _objectWithoutPropertiesLoose(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

    const coef = fontSize / 14;

    const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);

    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends({
      htmlFontSize,
      pxToRem,
      round,
      // TODO v5: remove
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep

    });
  }

  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;

  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


  const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  const shape = {
    borderRadius: 4
  };

  /* tslint:enable:unified-signatures */
  function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons and type, can align to a 4dp grid.
    // https://material.io/design/layout/understanding-layout.html#usage


    const transform = createUnarySpacing({
      spacing: spacingInput
    });

    const spacing = (...args) => {

      if (args.length === 0) {
        args[0] = 1;
      }

      return args.map(argument => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      }).join(' ');
    };

    spacing.mui = true;
    return spacing;
  }

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };

  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }

  function create(props = ['all'], options = {}) {
    const {
      duration: durationOption = duration.standard,
      easing: easingOption = easing.easeInOut,
      delay = 0
    } = options,
          other = _objectWithoutPropertiesLoose(options, ["duration", "easing", "delay"]);

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  }
  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex$1 = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  function createMuiTheme(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      typography: typographyInput = {}
    } = options,
          other = _objectWithoutPropertiesLoose(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

    const palette = createPalette(paletteInput);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      components: {},
      // Inject component definitions
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      spacing,
      shape: _extends({}, shape),
      transitions: {
        duration,
        easing,
        create,
        getAutoHeightDuration
      },
      zIndex: _extends({}, zIndex$1)
    }, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

    return muiTheme;
  }

  const hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

  /**
   * This is the list of the style rule name we use as drop in replacement for the built-in
   * pseudo classes (:checked, :disabled, :focused, etc.).
   *
   * Why do they exist in the first place?
   * These classes are used at a specificity of 2.
   * It allows them to override previously defined styles as well as
   * being untouched by simple user overrides.
   */

  const pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName(options = {}) {
    const {
      disableGlobal = false,
      productionPrefix = 'jss',
      seed = ''
    } = options;
    const seedPrefix = seed === '' ? '' : `${seed}-`;
    let ruleCounter = 0;

    const getNextCounterId = () => {
      ruleCounter += 1;

      return ruleCounter;
    };

    return (rule, styleSheet) => {
      const name = styleSheet.options.name; // Is a global static MUI style?

      if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
        // We can use a shorthand class name, we never use the keys to style the components.
        if (pseudoClasses.indexOf(rule.key) !== -1) {
          return `Mui-${rule.key}`;
        }

        const prefix = `${seedPrefix}${name}-${rule.key}`;

        if (!styleSheet.options.theme[nested] || seed !== '') {
          return prefix;
        }

        return `${prefix}-${getNextCounterId()}`;
      }

      {
        return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;

    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    const defaultProps = theme.components[name].defaultProps;
    let propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@') ;

    return null;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };

  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */
  var toCssValue = function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.


    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  };

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */


  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
        _options$indent = _options.indent,
        indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += '\n';
              result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += '\n';
            result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += '\n';
        result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
      }
    } // Allow empty style in this case, because properties will be added dynamically.


    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = "\n" + result + "\n";
    return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape = (function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  });

  var BaseStyleRule =
  /*#__PURE__*/
  function () {
    function BaseStyleRule(key, style, options) {
      this.type = 'style';
      this.key = void 0;
      this.isProcessed = false;
      this.style = void 0;
      this.renderer = void 0;
      this.renderable = void 0;
      this.options = void 0;
      var sheet = options.sheet,
          Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
    }
    /**
     * Get or set a style property.
     */


    var _proto = BaseStyleRule.prototype;

    _proto.prop = function prop(name, value, options) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;

      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }

      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) ;

      return this;
    };

    return BaseStyleRule;
  }();
  var StyleRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(StyleRule, _BaseStyleRule);

    function StyleRule(key, style, options) {
      var _this;

      _this = _BaseStyleRule.call(this, key, style, options) || this;
      _this.selectorText = void 0;
      _this.id = void 0;
      _this.renderable = void 0;
      var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
        _this.selectorText = "." + escape(_this.id);
      }

      return _this;
    }
    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    var _proto2 = StyleRule.prototype;

    /**
     * Apply rule to an element inline.
     */
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;

      if (renderer) {
        var json = this.toJSON();

        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */
    ;

    _proto2.toJSON = function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };

    _createClass(StyleRule, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer,
            renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      }
      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(name, style, options) {
      if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
        return null;
      }

      return new StyleRule(name, style, options);
    }
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
  /*#__PURE__*/
  function () {
    function ConditionalRule(key, styles, options) {
      this.type = 'conditional';
      this.at = void 0;
      this.key = void 0;
      this.query = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

      this.query = options.name || "@" + this.at;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = ConditionalRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }

      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;

      if (options.children === false) {
        return this.query + " {}";
      }

      var children = this.rules.toString(options);
      return children ? this.query + " {\n" + children + "\n}" : '';
    };

    return ConditionalRule;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
  /*#__PURE__*/
  function () {
    function KeyframesRule(key, frames, options) {
      this.type = 'keyframes';
      this.at = '@keyframes';
      this.key = void 0;
      this.name = void 0;
      this.id = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      var nameMatch = key.match(nameRegExp);

      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = 'noname';
      }

      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
      this.id = scoped === false ? this.name : escape(generateId(this, sheet));
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, options, {
          parent: this
        }));
      }

      this.rules.process();
    }
    /**
     * Generates a CSS string.
     */


    var _proto = KeyframesRule.prototype;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }

      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;

      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }

      var children = this.rules.toString(options);
      if (children) children = "\n" + children + "\n";
      return this.at + " " + this.id + " {" + children + "}";
    };

    return KeyframesRule;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */


  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var plugin = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    }
  };

  var KeyframeRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(KeyframeRule, _BaseStyleRule);

    function KeyframeRule() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
      _this.renderable = void 0;
      return _this;
    }

    var _proto = KeyframeRule.prototype;

    /**
     * Generates a CSS string.
     */
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };

    return KeyframeRule;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    }
  };

  var FontFaceRule =
  /*#__PURE__*/
  function () {
    function FontFaceRule(key, style, options) {
      this.type = 'font-face';
      this.at = '@font-face';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = FontFaceRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += toCss(this.at, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return toCss(this.at, this.style, options);
    };

    return FontFaceRule;
  }();
  var keyRegExp$2 = /@font-face/;
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
    }
  };

  var ViewportRule =
  /*#__PURE__*/
  function () {
    function ViewportRule(key, style, options) {
      this.type = 'viewport';
      this.at = '@viewport';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = ViewportRule.prototype;

    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };

    return ViewportRule;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
    }
  };

  var SimpleRule =
  /*#__PURE__*/
  function () {
    function SimpleRule(key, value, options) {
      this.type = 'simple';
      this.key = void 0;
      this.value = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    var _proto = SimpleRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + " " + this.value[index] + ";";
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + " " + this.value + ";";
    };

    return SimpleRule;
  }();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };

  var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */

  };

  var RuleList =
  /*#__PURE__*/
  function () {
    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.
    // Original styles object.
    // Used to ensure correct rules order.
    function RuleList(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    var _proto = RuleList.prototype;

    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

      var options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateId: generateId,
        scoped: scoped,
        name: name,
        keyframes: this.keyframes,
        selector: undefined
      }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
      // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
      // we need to make the key unique within this RuleList instance scope.


      var key = name;

      if (name in this.raw) {
        key = name + "-d" + this.counter++;
      } // We need to save the original decl before creating the rule
      // because cache plugin needs to use it as a key to return a cached rule.


      this.raw[key] = decl;

      if (key in this.classes) {
        // E.g. rules inside of @media container
        options.selector = "." + escape(this.classes[key]);
      }

      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */
    ;

    _proto.get = function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */
    ;

    _proto.process = function process() {
      var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }
    /**
     * Register a rule in `.map`, `.classes` and `.keyframes` maps.
     */
    ;

    _proto.register = function register(rule) {
      this.map[rule.key] = rule;

      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    }
    /**
     * Unregister a rule.
     */
    ;

    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var name;
      var data;
      var options;

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

        data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

        options = arguments.length <= 2 ? undefined : arguments[2];
      } else {
        data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

        options = arguments.length <= 1 ? undefined : arguments[1];
        name = null;
      }

      if (name) {
        this.updateOne(this.map[name], data, options);
      } else {
        for (var index = 0; index < this.index.length; index++) {
          this.updateOne(this.index[index], data, options);
        }
      }
    }
    /**
     * Execute plugins, update rule props.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }

      var _this$options2 = this.options,
          plugins = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

      if (rule.rules instanceof RuleList) {
        rule.rules.update(data, options);
        return;
      }

      var styleRule = rule;
      var style = styleRule.style;
      plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

      if (options.process && style && style !== styleRule.style) {
        // We need to run the plugins in case new `style` relies on syntax plugins.
        plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

        for (var prop in styleRule.style) {
          var nextValue = styleRule.style[prop];
          var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (nextValue !== prevValue) {
            styleRule.prop(prop, nextValue, forceUpdateOptions);
          }
        } // Remove props.


        for (var _prop in style) {
          var _nextValue = styleRule.style[_prop];
          var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (_nextValue == null && _nextValue !== _prevValue) {
            styleRule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    };

    return RuleList;
  }();

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(styles, options) {
      this.options = void 0;
      this.deployed = void 0;
      this.attached = void 0;
      this.rules = void 0;
      this.renderer = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.queue = void 0;
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });

      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }

      this.rules = new RuleList(this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Attach renderable to the render tree.
     */


    var _proto = StyleSheet.prototype;

    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

      if (!this.deployed) this.deploy();
      return this;
    }
    /**
     * Remove renderable from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    ;

    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */
    ;

    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    ;

    _proto.addRules = function addRules(styles, options) {
      var added = [];

      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }

      return added;
    }
    /**
     * Get a rule by name.
     */
    ;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    ;

    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === 'object' ? name : this.rules.get(name);

      if (!rule || // Style sheet was created without link: true and attached, in this case we
      // won't be able to remove the CSS rule from the DOM.
      this.attached && !rule.renderable) {
        return false;
      }

      this.rules.remove(rule);

      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */
    ;

    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var _this$rules;

      (_this$rules = this.rules).update.apply(_this$rules, arguments);

      return this;
    }
    /**
     * Updates a single rule.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      this.rules.updateOne(rule, data, options);
      return this;
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };

    return StyleSheet;
  }();

  var PluginsRegistry =
  /*#__PURE__*/
  function () {
    function PluginsRegistry() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = void 0;
    }

    var _proto = PluginsRegistry.prototype;

    /**
     * Call `onCreateRule` hooks and return an object if returned by a hook.
     */
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */
    ;

    _proto.onProcessRule = function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */
    ;

    _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        // $FlowFixMe[prop-missing]
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */
    ;

    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */
    ;

    _proto.onChangeValue = function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     */
    ;

    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: 'external'
        };
      }

      var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

      if (plugins.indexOf(newPlugin) !== -1) {
        return;
      }

      plugins.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          }
        }

        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };

    return PluginsRegistry;
  }();

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry =
  /*#__PURE__*/
  function () {
    function SheetsRegistry() {
      this.registry = [];
    }

    var _proto = SheetsRegistry.prototype;

    /**
     * Register a Style Sheet.
     */
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */
    ;

    _proto.reset = function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */
    ;

    _proto.remove = function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */
    ;

    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

      var css = '';

      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];

        if (attached != null && sheet.attached !== attached) {
          continue;
        }

        if (css) css += '\n';
        css += sheet.toString(options);
      }

      return css;
    };

    _createClass(SheetsRegistry, [{
      key: "index",

      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var registry = new SheetsRegistry();

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis[ns]++;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */
  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;
    return function (rule, sheet) {
      ruleCounter += 1;

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
    };
  };

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize$1 = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };

  /**
   * Get a style property value.
   */
  var getPropertyValue = function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  };

  /**
   * Set a style property.
   */
  var setProperty = function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.


      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  };

  /**
   * Remove a style property.
   */
  var removeProperty = function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
    }
  };

  /**
   * Set the selector.
   */
  var setSelector = function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  };
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */


  var getHead = memoize$1(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */


  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */


  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry$1 = registry.registry;

    if (registry$1.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry$1, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      } // Otherwise insert after the last attached.


      sheet = findHighestSheet(registry$1, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    } // Try to find a comment placeholder if registry is empty.


    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      } // If user specifies an insertion point and it can't be found in the document -
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */


  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.


    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */


  var getNonce = memoize$1(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    try {
      if ('insertRule' in container) {
        var c = container;
        c.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
          var _c = container;

          _c.appendRule(rule);
        }
    } catch (err) {
      return false;
    }

    return container.cssRules[index];
  };

  var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      return maxIndex;
    }

    return index;
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
  /*#__PURE__*/
  function () {
    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
    // Will be empty if link: true option is not set, because
    // it is only for use together with insertRule API.
    function DomRenderer(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.element = void 0;
      this.sheet = void 0;
      this.hasInsertedRules = false;
      this.cssRules = [];
      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) registry.add(sheet);
      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }
    /**
     * Insert style element into render tree.
     */


    var _proto = DomRenderer.prototype;

    _proto.attach = function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // most browsers create a new CSSStyleSheet, except of all IEs.

      var deployed = Boolean(this.sheet && this.sheet.deployed);

      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    }
    /**
     * Remove style element from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.sheet) return;
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
      // Though IE will keep them and we need a consistent behavior.

      if (this.sheet.options.link) {
        this.cssRules = [];
        this.element.textContent = '\n';
      }
    }
    /**
     * Inject CSS string into element.
     */
    ;

    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;

      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }

      this.element.textContent = "\n" + sheet.toString() + "\n";
    }
    /**
     * Insert RuleList into an element.
     */
    ;

    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    }
    /**
     * Insert a rule into element.
     */
    ;

    _proto.insertRule = function insertRule(rule, index, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }

      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;

        if (rule.type === 'conditional' || rule.type === 'keyframes') {
          var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), _insertionIndex);

          if (latestNativeParent === false) {
            return false;
          }

          this.refCssRule(rule, _insertionIndex, latestNativeParent);
        }

        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      }

      var ruleStr = rule.toString();
      if (!ruleStr) return false;
      var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

      var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

      if (nativeRule === false) {
        return false;
      }

      this.hasInsertedRules = true;
      this.refCssRule(rule, insertionIndex, nativeRule);
      return nativeRule;
    };

    _proto.refCssRule = function refCssRule(rule, index, cssRule) {
      rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
      // like rules inside media queries or keyframes

      if (rule.options.parent instanceof StyleSheet) {
        this.cssRules[index] = cssRule;
      }
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      this.cssRules.splice(index, 1);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */
    ;

    _proto.indexOf = function indexOf(cssRule) {
      return this.cssRules.indexOf(cssRule);
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     *
     * Only used for some old browsers because they can't set a selector.
     */
    ;

    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      this.element.sheet.deleteRule(index);
      this.cssRules.splice(index, 1);
      return this.insertRule(rule, index);
    }
    /**
     * Get all rules elements.
     */
    ;

    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };

    return DomRenderer;
  }();

  var instanceCounter = 0;

  var Jss =
  /*#__PURE__*/
  function () {
    function Jss(options) {
      this.id = instanceCounter++;
      this.version = "10.5.1";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId: createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });

      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: 'internal'
        });
      }

      this.setup(options);
    }
    /**
     * Prepares various options, applies plugins.
     * Should not be used twice on the same instance, because there is no plugins
     * deduplication logic.
     */


    var _proto = Jss.prototype;

    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }

      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }

      if (options.id) {
        this.options.id = _extends({}, this.options.id, options.id);
      }

      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if ('Renderer' in options) {
        this.options.Renderer = options.Renderer;
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */
    ;

    _proto.createStyleSheet = function createStyleSheet(styles, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          index = _options.index;

      if (typeof index !== 'number') {
        index = registry.index === 0 ? 0 : registry.index + 1;
      }

      var sheet = new StyleSheet(styles, _extends({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */
    ;

    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      registry.remove(sheet);
      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     * [Deprecated] will be removed in the next major version.
     */
    ;

    _proto.createRule = function createRule$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }

      if (options === void 0) {
        options = {};
      }

      // Enable rule without name for inline styles.
      if (typeof name === 'object') {
        // $FlowFixMe[incompatible-call]
        return this.createRule(undefined, name, style);
      } // $FlowFixMe[incompatible-type]


      var ruleOptions = _extends({}, options, {
        name: name,
        jss: this,
        Renderer: this.options.Renderer
      });

      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

      var rule = createRule(name, style, ruleOptions);

      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */
    ;

    _proto.use = function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };

    return Jss;
  }();

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
  /**
   * Creates a new instance of Jss.
   */

  var create$1 = function create(options) {
    return new Jss(options);
  };
  /**
   * A global Jss instance.
   */

  var jss = create$1();

  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;

  var functionPlugin = function functionPlugin() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== 'function') return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style, rule) {
        // We need to extract function values from the declaration, so that we can keep core unaware of them.
        // We need to do that only once.
        // We don't need to extract functions on each style update, since this can happen only once.
        // We don't support function values inside of function rules.
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};

        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== 'function') continue;
          delete style[prop];
          fnValues[prop] = value;
        } // $FlowFixMe[prop-missing]


        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule; // $FlowFixMe[prop-missing]

        var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
        // will be returned from that function.

        if (fnRule) {
          // Empty object will remove all currently defined props
          // in case function rule returns a falsy value.
          styleRule.style = fnRule(data) || {};
        } // $FlowFixMe[prop-missing]


        var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

        if (fnValues) {
          for (var _prop in fnValues) {
            styleRule.prop(_prop, fnValues[_prop](data), options);
          }
        }
      }
    };
  };

  var at = '@global';
  var atPrefix = '@global ';

  var GlobalContainerRule =
  /*#__PURE__*/
  function () {
    function GlobalContainerRule(key, styles, options) {
      this.type = 'global';
      this.at = at;
      this.rules = void 0;
      this.options = void 0;
      this.key = void 0;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = GlobalContainerRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (rule) this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString() {
      return this.rules.toString();
    };

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule =
  /*#__PURE__*/
  function () {
    function GlobalPrefixedRule(key, style, options) {
      this.type = 'global';
      this.at = at;
      this.options = void 0;
      this.rule = void 0;
      this.isProcessed = false;
      this.key = void 0;
      this.key = key;
      this.options = options;
      var selector = key.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style, _extends({}, options, {
        parent: this
      }));
    }

    var _proto2 = GlobalPrefixedRule.prototype;

    _proto2.toString = function toString(options) {
      return this.rule ? this.rule.toString(options) : '';
    };

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';

    for (var i = 0; i < parts.length; i++) {
      scoped += scope + " " + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }

    return scoped;
  }

  function handleNestedGlobalContainerRule(rule, sheet) {
    var options = rule.options,
        style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;

    for (var name in rules) {
      sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[at];
  }

  function handlePrefixedGlobalRule(rule, sheet) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      sheet.addRule(selector, style[prop], _extends({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */


  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name) return null;

      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;

      if (parent) {
        if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
          options.scoped = false;
        }
      }

      if (options.scoped === false) {
        options.selector = name;
      }

      return null;
    }

    function onProcessRule(rule, sheet) {
      if (rule.type !== 'style' || !sheet) return;
      handleNestedGlobalContainerRule(rule, sheet);
      handlePrefixedGlobalRule(rule, sheet);
    }

    return {
      onCreateRule: onCreateRule,
      onProcessRule: onProcessRule
    };
  }

  var separatorRegExp$1 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp$1 = /\$([\w-]+)/g;
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */

  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container, sheet) {
      return function (match, key) {
        var rule = container.getRule(key) || sheet && sheet.getRule(key);

        if (rule) {
          rule = rule;
          return rule.selector;
        }
        return key;
      };
    }

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp$1);
      var nestedSelectors = nestedProp.split(separatorRegExp$1);
      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

          result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, prevOptions) {
      // Options has been already created, now we only increase index.
      if (prevOptions) return _extends({}, prevOptions, {
        index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

      });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      var options = _extends({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

      });

      delete options.name;
      return options;
    }

    function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style') return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef;

      for (var prop in style) {
        var isNested = prop.indexOf('&') !== -1;
        var isNestedConditional = prop[0] === '@';
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.

          if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

          selector = selector.replace(refRegExp$1, replaceRef);
          container.addRule(selector, style[prop], _extends({}, options, {
            selector: selector
          }));
        } else if (isNestedConditional) {
          // Place conditional right after the parent rule to ensure right ordering.
          container.addRule(prop, {}, options) // Flow expects more options but they aren't required
          // And flow doesn't know this will always be a StyleRule which has the addRule method
          // $FlowFixMe[incompatible-use]
          // $FlowFixMe[prop-missing]
          .addRule(styleRule.key, style[prop], {
            selector: styleRule.selector
          });
        }

        delete style[prop];
      }

      return style;
    }

    return {
      onProcessStyle: onProcessStyle
    };
  }

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */

  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
      converted[key] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }
  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */


  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }

        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      if (prop.indexOf('--') === 0) {
        return value;
      }

      var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

      return null;
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
  /**
   * Generated jss-plugin-default-unit CSS property units
   *
   * @type object
   */

  var defaultUnits = {
    // Animation properties
    'animation-delay': ms,
    'animation-duration': ms,
    // Background properties
    'background-position': px,
    'background-position-x': px,
    'background-position-y': px,
    'background-size': px,
    // Border Properties
    border: px,
    'border-bottom': px,
    'border-bottom-left-radius': px,
    'border-bottom-right-radius': px,
    'border-bottom-width': px,
    'border-left': px,
    'border-left-width': px,
    'border-radius': px,
    'border-right': px,
    'border-right-width': px,
    'border-top': px,
    'border-top-left-radius': px,
    'border-top-right-radius': px,
    'border-top-width': px,
    'border-width': px,
    'border-block': px,
    'border-block-end': px,
    'border-block-end-width': px,
    'border-block-start': px,
    'border-block-start-width': px,
    'border-block-width': px,
    'border-inline': px,
    'border-inline-end': px,
    'border-inline-end-width': px,
    'border-inline-start': px,
    'border-inline-start-width': px,
    'border-inline-width': px,
    'border-start-start-radius': px,
    'border-start-end-radius': px,
    'border-end-start-radius': px,
    'border-end-end-radius': px,
    // Margin properties
    margin: px,
    'margin-bottom': px,
    'margin-left': px,
    'margin-right': px,
    'margin-top': px,
    'margin-block': px,
    'margin-block-end': px,
    'margin-block-start': px,
    'margin-inline': px,
    'margin-inline-end': px,
    'margin-inline-start': px,
    // Padding properties
    padding: px,
    'padding-bottom': px,
    'padding-left': px,
    'padding-right': px,
    'padding-top': px,
    'padding-block': px,
    'padding-block-end': px,
    'padding-block-start': px,
    'padding-inline': px,
    'padding-inline-end': px,
    'padding-inline-start': px,
    // Mask properties
    'mask-position-x': px,
    'mask-position-y': px,
    'mask-size': px,
    // Width and height properties
    height: px,
    width: px,
    'min-height': px,
    'max-height': px,
    'min-width': px,
    'max-width': px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    inset: px,
    'inset-block': px,
    'inset-block-end': px,
    'inset-block-start': px,
    'inset-inline': px,
    'inset-inline-end': px,
    'inset-inline-start': px,
    // Shadow properties
    'box-shadow': px,
    'text-shadow': px,
    // Column properties
    'column-gap': px,
    'column-rule': px,
    'column-rule-width': px,
    'column-width': px,
    // Font and text properties
    'font-size': px,
    'font-size-delta': px,
    'letter-spacing': px,
    'text-decoration-thickness': px,
    'text-indent': px,
    'text-stroke': px,
    'text-stroke-width': px,
    'word-spacing': px,
    // Motion properties
    motion: px,
    'motion-offset': px,
    // Outline properties
    outline: px,
    'outline-offset': px,
    'outline-width': px,
    // Perspective properties
    perspective: px,
    'perspective-origin-x': percent,
    'perspective-origin-y': percent,
    // Transform properties
    'transform-origin': percent,
    'transform-origin-x': percent,
    'transform-origin-y': percent,
    'transform-origin-z': percent,
    // Transition properties
    'transition-delay': ms,
    'transition-duration': ms,
    // Alignment properties
    'vertical-align': px,
    'flex-basis': px,
    // Some random properties
    'shape-margin': px,
    size: px,
    gap: px,
    // Grid properties
    grid: px,
    'grid-gap': px,
    'row-gap': px,
    'grid-row-gap': px,
    'grid-column-gap': px,
    'grid-template-rows': px,
    'grid-template-columns': px,
    'grid-auto-rows': px,
    'grid-auto-columns': px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    'box-shadow-x': px,
    'box-shadow-y': px,
    'box-shadow-blur': px,
    'box-shadow-spread': px,
    'font-line-height': px,
    'text-shadow-x': px,
    'text-shadow-y': px,
    'text-shadow-blur': px
  };

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;

    var replace = function replace(str) {
      return str[1].toUpperCase();
    };

    var newObj = {};

    for (var _key in obj) {
      newObj[_key] = obj[_key];
      newObj[_key.replace(regExp, replace)] = obj[_key];
    }

    return newObj;
  }

  var units = addCamelCasedVersion(defaultUnits);
  /**
   * Recursive deep style passing function
   */

  function iterate(prop, value, options) {
    if (value == null) return value;

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
        }
      }
    } else if (typeof value === 'number' && !Number.isNaN(value)) {
      var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

      if (unit && !(value === 0 && unit === px)) {
        return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
      }

      return value.toString();
    }

    return value;
  }
  /**
   * Add unit to numeric values.
   */


  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  // Export javascript style and css style vendor prefixes.
  var js = '';
  var css = '';
  var vendor = '';
  var browser = '';
  var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

  if (isBrowser) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };

    var _document$createEleme = document.createElement('p'),
        style$2 = _document$createEleme.style;

    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style$2) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    } // Correctly detect the Edge browser.


    if (js === 'Webkit' && 'msHyphens' in style$2) {
      js = 'ms';
      css = jsCssMap.ms;
      browser = 'edge';
    } // Correctly detect the Safari browser.


    if (js === 'Webkit' && '-apple-trailing-word' in style$2) {
      vendor = 'apple';
    }
  }
  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String, vendor: String, browser: String}}
   * @api public
   */


  var prefix = {
    js: js,
    css: css,
    vendor: vendor,
    browser: browser,
    isTouch: isTouch
  };

  /**
   * Test if a keyframe at-rule should be prefixed or not
   *
   * @param {String} vendor prefix string for the current browser.
   * @return {String}
   * @api public
   */

  function supportedKeyframes(key) {
    // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
    if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
    // https://caniuse.com/#search=keyframes

    if (prefix.js === 'ms') return key;
    return "@" + prefix.css + "keyframes" + key.substr(10);
  }

  // https://caniuse.com/#search=appearance

  var appearence = {
    noPrefill: ['appearance'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'appearance') return false;
      if (prefix.js === 'ms') return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=color-adjust

  var colorAdjust = {
    noPrefill: ['color-adjust'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'color-adjust') return false;
      if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
      return prop;
    }
  };

  var regExp = /[-\s]+(.)?/g;
  /**
   * Replaces the letter with the capital letter
   *
   * @param {String} match
   * @param {String} c
   * @return {String}
   * @api private
   */

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  /**
   * Convert dash separated strings to camel-cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */


  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  /**
   * Convert dash separated strings to pascal cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function pascalize(str) {
    return camelize("-" + str);
  }

  // but we can use a longhand property instead.
  // https://caniuse.com/#search=mask

  var mask = {
    noPrefill: ['mask'],
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^mask/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var longhand = 'mask-image';

        if (camelize(longhand) in style) {
          return prop;
        }

        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=text-orientation

  var textOrientation = {
    noPrefill: ['text-orientation'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'text-orientation') return false;

      if (prefix.vendor === 'apple' && !prefix.isTouch) {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=transform

  var transform$1 = {
    noPrefill: ['transform'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transform') return false;

      if (options.transform) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=transition

  var transition = {
    noPrefill: ['transition'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transition') return false;

      if (options.transition) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=writing-mode

  var writingMode = {
    noPrefill: ['writing-mode'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'writing-mode') return false;

      if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=user-select

  var userSelect = {
    noPrefill: ['user-select'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'user-select') return false;

      if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=multicolumn
  // https://github.com/postcss/autoprefixer/issues/491
  // https://github.com/postcss/autoprefixer/issues/177

  var breakPropsOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^break-/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style ? prefix.css + "column-" + prop : false;
      }

      if (prefix.js === 'Moz') {
        var _jsProp = "page" + pascalize(prop);

        return _jsProp in style ? "page-" + prop : false;
      }

      return false;
    }
  };

  // See https://github.com/postcss/autoprefixer/issues/324.

  var inlineLogicalOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === 'Moz') return prop;
      var newProp = prop.replace('-inline', '');
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  // Camelization is required because we can't test using.
  // CSS syntax for e.g. in FF.

  var unprefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      return camelize(prop) in style ? prop : false;
    }
  };

  var prefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

      if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

      if (prop[0] === '-' && prop[1] === '-') return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

      if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
      return false;
    }
  };

  // https://caniuse.com/#search=scroll-snap

  var scrollSnap = {
    supportedProperty: function supportedProperty(prop) {
      if (prop.substring(0, 11) !== 'scroll-snap') return false;

      if (prefix.js === 'ms') {
        return "" + prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=overscroll-behavior

  var overscrollBehavior = {
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'overscroll-behavior') return false;

      if (prefix.js === 'ms') {
        return prefix.css + "scroll-chaining";
      }

      return prop;
    }
  };

  var propMap = {
    'flex-grow': 'flex-positive',
    'flex-shrink': 'flex-negative',
    'flex-basis': 'flex-preferred-size',
    'justify-content': 'flex-pack',
    order: 'flex-order',
    'align-items': 'flex-align',
    'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

  }; // Support old flex spec from 2012.

  var flex2012 = {
    supportedProperty: function supportedProperty(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  var propMap$1 = {
    flex: 'box-flex',
    'flex-grow': 'box-flex',
    'flex-direction': ['box-orient', 'box-direction'],
    order: 'box-ordinal-group',
    'align-items': 'box-align',
    'flex-flow': ['box-orient', 'box-direction'],
    'justify-content': 'box-pack'
  };
  var propKeys = Object.keys(propMap$1);

  var prefixCss = function prefixCss(p) {
    return prefix.css + p;
  }; // Support old flex spec from 2009.


  var flex2009 = {
    supportedProperty: function supportedProperty(prop, style, _ref) {
      var multiple = _ref.multiple;

      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];

        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
        }

        if (!multiple) return false;

        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }

        return newProp.map(prefixCss);
      }

      return false;
    }
  };

  // plugins = [
  //   ...plugins,
  //    breakPropsOld,
  //    inlineLogicalOld,
  //    unprefixed,
  //    prefixed,
  //    scrollSnap,
  //    flex2012,
  //    flex2009
  // ]
  // Plugins without 'noPrefill' value, going last.
  // 'flex-*' plugins should be at the bottom.
  // 'flex2009' going after 'flex2012'.
  // 'prefixed' going after 'unprefixed'

  var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform$1, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins$1.filter(function (p) {
    return p.supportedProperty;
  }).map(function (p) {
    return p.supportedProperty;
  });
  var noPrefill = plugins$1.filter(function (p) {
    return p.noPrefill;
  }).reduce(function (a, p) {
    a.push.apply(a, _toConsumableArray(p.noPrefill));
    return a;
  }, []);

  var el;
  var cache$1 = {};

  if (isBrowser) {
    el = document.createElement('p'); // We test every property on vendor prefix requirement.
    // Once tested, result is cached. It gives us up to 70% perf boost.
    // http://jsperf.com/element-style-object-access-vs-plain-object
    //
    // Prefill cache with known css properties to reduce amount of
    // properties we need to feature test at runtime.
    // http://davidwalsh.name/vendor-prefix

    var computed = window.getComputedStyle(document.documentElement, '');

    for (var key$1 in computed) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
    } // Properties that cannot be correctly detected using the
    // cache prefill method.


    noPrefill.forEach(function (x) {
      return delete cache$1[x];
    });
  }
  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @param {Object} [options]
   * @return {String|Boolean}
   * @api public
   */


  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }

    // For server-side rendering.
    if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

    if ( cache$1[prop] != null) {
      return cache$1[prop];
    } // Check if 'transition' or 'transform' natively supported in browser.


    if (prop === 'transition' || prop === 'transform') {
      options[prop] = prop in el.style;
    } // Find a plugin for current prefix property.


    for (var i = 0; i < propertyDetectors.length; i++) {
      cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

      if (cache$1[prop]) break;
    } // Reset styles for current property.
    // Firefox can even throw an error for invalid properties, e.g., "0".


    try {
      el.style[prop] = '';
    } catch (err) {
      return false;
    }

    return cache$1[prop];
  }

  var cache$1$1 = {};
  var transitionProperties = {
    transition: 1,
    'transition-property': 1,
    '-webkit-transition': 1,
    '-webkit-transition-property': 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  /**
   * Returns prefixed value transition/transform if needed.
   *
   * @param {String} match
   * @param {String} p1
   * @param {String} p2
   * @return {String}
   * @api private
   */

  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === 'var') return 'var';
    if (p1 === 'all') return 'all';
    if (p2 === 'all') return ', all';
    var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }

  if (isBrowser) el$1 = document.createElement('p');
  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */

  function supportedValue(property, value) {
    // For server-side rendering.
    var prefixedValue = value;
    if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    // eslint-disable-next-line no-restricted-globals

    if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    } // Create cache key for current value.


    var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

    if ( cache$1$1[cacheKey] != null) {
      return cache$1$1[cacheKey];
    } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


    try {
      // Test value as it is.
      el$1.style[property] = prefixedValue;
    } catch (err) {
      // Return false if value not supported.
      cache$1$1[cacheKey] = false;
      return false;
    } // If 'transition' or 'transition-property' property.


    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === '') {
      // Value with a vendor prefix.
      prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

      if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

      el$1.style[property] = prefixedValue; // Return false if value not supported.

      if (el$1.style[property] === '') {
        cache$1$1[cacheKey] = false;
        return false;
      }
    } // Reset styles for current property.


    el$1.style[property] = ''; // Write current value to cache.

    cache$1$1[cacheKey] = prefixedValue;
    return cache$1$1[cacheKey];
  }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @api public
   */

  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }

    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];

        if (prop === 'fallbacks' && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }

        var changeProp = false;
        var supportedProp = supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
        if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$1 || value;
        }
      }

      return style;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      return prefixStyle(style);
    }

    function onChangeValue(value, prop) {
      return supportedValue(prop, toCssValue(value)) || value;
    }

    return {
      onProcessRule: onProcessRule,
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    var sort = function sort(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }

      return prop0.length - prop1.length;
    };

    return {
      onProcessStyle: function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);

        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }

        return newStyle;
      }
    };
  }

  function jssPreset() {
    return {
      plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
    };
  }

  function mergeClasses(options = {}) {
    const {
      baseClasses,
      newClasses,
      Component
    } = options;

    if (!newClasses) {
      return baseClasses;
    }

    const nextClasses = _extends({}, baseClasses);

    Object.keys(newClasses).forEach(key => {

      if (newClasses[key]) {
        nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
      }
    });
    return nextClasses;
  }

  // Used https://github.com/thinkloop/multi-key-cache as inspiration
  const multiKeyStore = {
    set: (cache, key1, key2, value) => {
      let subCache = cache.get(key1);

      if (!subCache) {
        subCache = new Map();
        cache.set(key1, subCache);
      }

      subCache.set(key2, value);
    },
    get: (cache, key1, key2) => {
      const subCache = cache.get(key1);
      return subCache ? subCache.get(key2) : undefined;
    },
    delete: (cache, key1, key2) => {
      const subCache = cache.get(key1);
      subCache.delete(key2);
    }
  };

  const ThemeContext = /*#__PURE__*/react.createContext(null);

  function useTheme() {
    const theme = react.useContext(ThemeContext);

    return theme;
  }

  const jss$1 = create$1(jssPreset()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  const generateClassName = createGenerateClassName(); // Exported for test purposes

  const sheetsManager = new Map();
  const defaultOptions = {
    disableGeneration: false,
    generateClassName,
    jss: jss$1,
    sheetsCache: null,
    sheetsManager,
    sheetsRegistry: null
  };
  const StylesContext = /*#__PURE__*/react.createContext(defaultOptions);

  /* eslint-disable import/prefer-default-export */
  // Global index counter to preserve source order.
  // We create the style sheet during the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any child's styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.
  let indexCounter = -1e9;
  function increment() {
    indexCounter += 1;

    return indexCounter;
  }

  // TODO: remove this once the capitalize method is moved to the @material-ui/utils package
  function capitalize$1(string) {
    if (typeof string !== 'string') {
      throw new Error( formatMuiErrorMessage(7));
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function isEmpty(string) {
    return string.length === 0;
  }
  /**
   * Generates string classKey based on the properties provided. It starts with the
   * variant if defined, and then it appends all other properties in alphabetical order.
   * @param {object} props - the properties for which the classKey should be created
   */


  function propsToClassKey(props) {
    const {
      variant
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["variant"]);

    let classKey = variant || '';
    Object.keys(other).sort().forEach(key => {
      if (key === 'color') {
        classKey += isEmpty(classKey) ? props[key] : capitalize$1(props[key]);
      } else {
        classKey += `${isEmpty(classKey) ? key : capitalize$1(key)}${capitalize$1(props[key].toString())}`;
      }
    });
    return classKey;
  }

  // We use the same empty object to ref count the styles that don't need a theme object.
  const noopTheme = {};

  function getStylesCreator(stylesOrCreator) {
    const themingEnabled = typeof stylesOrCreator === 'function';

    return {
      create: (theme, name) => {
        let styles;

        try {
          styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
        } catch (err) {

          throw err;
        }

        if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
          return styles;
        }

        const overrides = theme.components[name].styleOverrides || {};
        const variants = theme.components[name].variants || [];

        const stylesWithOverrides = _extends({}, styles);

        Object.keys(overrides).forEach(key => {

          stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key] || {}, overrides[key]);
        });
        variants.forEach(definition => {
          const classKey = propsToClassKey(definition.props);
          stylesWithOverrides[classKey] = deepmerge(stylesWithOverrides[classKey] || {}, definition.style);
        });
        return stylesWithOverrides;
      },
      options: {}
    };
  }

  function getClasses({
    state,
    stylesOptions
  }, classes, Component) {
    if (stylesOptions.disableGeneration) {
      return classes || {};
    }

    if (!state.cacheClasses) {
      state.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastJSS: {}
      };
    } // Tracks if either the rendered classes or classes prop has changed,
    // requiring the generation of a new finalized classes object.


    let generate = false;

    if (state.classes !== state.cacheClasses.lastJSS) {
      state.cacheClasses.lastJSS = state.classes;
      generate = true;
    }

    if (classes !== state.cacheClasses.lastProp) {
      state.cacheClasses.lastProp = classes;
      generate = true;
    }

    if (generate) {
      state.cacheClasses.value = mergeClasses({
        baseClasses: state.cacheClasses.lastJSS,
        newClasses: classes,
        Component
      });
    }

    return state.cacheClasses.value;
  }

  function attach({
    state,
    theme,
    stylesOptions,
    stylesCreator,
    name
  }, props) {
    if (stylesOptions.disableGeneration) {
      return;
    }

    let sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

    if (!sheetManager) {
      sheetManager = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      };
      multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
    }

    const options = _extends({}, stylesCreator.options, stylesOptions, {
      theme,
      flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
    });

    options.generateId = options.serverGenerateClassName || options.generateClassName;
    const sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      let staticSheet;

      if (stylesOptions.sheetsCache) {
        staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
      }

      const styles = stylesCreator.create(theme, name);

      if (!staticSheet) {
        staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
          link: false
        }, options));
        staticSheet.attach();

        if (stylesOptions.sheetsCache) {
          multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
        }
      }

      if (sheetsRegistry) {
        sheetsRegistry.add(staticSheet);
      }

      sheetManager.staticSheet = staticSheet;
      sheetManager.dynamicStyles = getDynamicStyles(styles);
    }

    if (sheetManager.dynamicStyles) {
      const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
        link: true
      }, options));
      dynamicSheet.update(props);
      dynamicSheet.attach();
      state.dynamicSheet = dynamicSheet;
      state.classes = mergeClasses({
        baseClasses: sheetManager.staticSheet.classes,
        newClasses: dynamicSheet.classes
      });

      if (sheetsRegistry) {
        sheetsRegistry.add(dynamicSheet);
      }
    } else {
      state.classes = sheetManager.staticSheet.classes;
    }

    sheetManager.refs += 1;
  }

  function update({
    state
  }, props) {
    if (state.dynamicSheet) {
      state.dynamicSheet.update(props);
    }
  }

  function detach({
    state,
    theme,
    stylesOptions,
    stylesCreator
  }) {
    if (stylesOptions.disableGeneration) {
      return;
    }

    const sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
    sheetManager.refs -= 1;
    const sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
      stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(sheetManager.staticSheet);
      }
    }

    if (state.dynamicSheet) {
      stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(state.dynamicSheet);
      }
    }
  }

  function useSynchronousEffect(func, values) {
    const key = react.useRef([]);
    let output; // Store "generation" key. Just returns a new object every time

    const currentKey = react.useMemo(() => ({}), values); // eslint-disable-line react-hooks/exhaustive-deps
    // "the first render", or "memo dropped the value"

    if (key.current !== currentKey) {
      key.current = currentKey;
      output = func();
    }

    react.useEffect(() => () => {
      if (output) {
        output();
      }
    }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
    );
  }

  function makeStyles(stylesOrCreator, options = {}) {
    const {
      // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
      name,
      // Help with debuggability.
      classNamePrefix: classNamePrefixOption,
      Component,
      defaultTheme = noopTheme
    } = options,
          stylesOptions2 = _objectWithoutPropertiesLoose(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

    const stylesCreator = getStylesCreator(stylesOrCreator);
    const classNamePrefix = name || classNamePrefixOption || 'makeStyles';
    stylesCreator.options = {
      index: increment(),
      name,
      meta: classNamePrefix,
      classNamePrefix
    };

    const useStyles = (props = {}) => {
      const theme = useTheme() || defaultTheme;

      const stylesOptions = _extends({}, react.useContext(StylesContext), stylesOptions2);

      const instance = react.useRef();
      const shouldUpdate = react.useRef();
      useSynchronousEffect(() => {
        const current = {
          name,
          state: {},
          stylesCreator,
          stylesOptions,
          theme
        };
        attach(current, props);
        shouldUpdate.current = false;
        instance.current = current;
        return () => {
          detach(current);
        };
      }, [theme, stylesCreator]);
      react.useEffect(() => {
        if (shouldUpdate.current) {
          update(instance.current, props);
        }

        shouldUpdate.current = true;
      });
      const classes = getClasses(instance.current, props.classes, Component);

      return classes;
    };

    return useStyles;
  }

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above


    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols$1) {
        keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  const useThemeVariants = (props, name) => {
    const {
      classes = {}
    } = props;
    const theme = useTheme();
    let variantsClasses = '';

    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
      const themeVariants = theme.components[name].variants;
      themeVariants.forEach(themeVariant => {
        let isMatch = true;
        Object.keys(themeVariant.props).forEach(key => {
          if (props[key] !== themeVariant.props[key]) {
            isMatch = false;
          }
        });

        if (isMatch) {
          variantsClasses = `${variantsClasses}${classes[propsToClassKey(themeVariant.props)]} `;
        }
      });
    }

    return variantsClasses;
  };

  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.

  const withStyles = (stylesOrCreator, options = {}) => Component => {
    const {
      defaultTheme,
      withTheme = false,
      name
    } = options,
          stylesOptions = _objectWithoutPropertiesLoose(options, ["defaultTheme", "withTheme", "name"]);

    let classNamePrefix = name;

    const useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme,
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    const WithStyles = /*#__PURE__*/react.forwardRef(function WithStyles(props, ref) {
      const {
        innerRef
      } = props,
            other = _objectWithoutPropertiesLoose(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      const classes = useStyles(_extends({}, Component.defaultProps, props));
      let theme;
      let more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = useTheme() || defaultTheme;

        if (name) {
          more = getThemeProps({
            theme,
            name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react.createElement(Component, _extends({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });

    hoistNonReactStatics_cjs(WithStyles, Component);

    return WithStyles;
  };

  const defaultTheme = createMuiTheme();

  function makeStyles$1(stylesOrCreator, options = {}) {
    return makeStyles(stylesOrCreator, _extends({
      defaultTheme
    }, options));
  }

  function useTheme$1() {
    const theme = useTheme() || defaultTheme;

    return theme;
  }

  function useThemeProps({
    props: inputProps,
    name
  }) {
    const props = _extends({}, inputProps);

    const contextTheme = useTheme$1() || defaultTheme;
    const more = getThemeProps({
      theme: contextTheme,
      name,
      props
    });
    const theme = more.theme || contextTheme;
    const isRtl = theme.direction === 'rtl';
    return _extends({
      theme,
      isRtl
    }, more);
  }

  function withStyles$1(stylesOrCreator, options) {
    return withStyles(stylesOrCreator, _extends({
      defaultTheme
    }, options));
  }

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  function memoize$2(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize$2(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet$1 = /*#__PURE__*/function () {
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          before = _this.prepend ? _this.container.firstChild : _this.before;
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var e$1="-ms-";var r$1="-moz-";var a="-webkit-";var c$1="comm";var n$1="rule";var t$1="decl";var i="@import";var p$1="@keyframes";var k$1=Math.abs;var d$1=String.fromCharCode;function m$1(e,r){return (((r<<2^z$1(e,0))<<2^z$1(e,1))<<2^z$1(e,2))<<2^z$1(e,3)}function g$1(e){return e.trim()}function x$1(e,r){return (e=r.exec(e))?e[0]:e}function y$2(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z$1(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A$1(e){return e.length}function M$1(e){return e.length}function O$1(e,r){return r.push(e),e}function S$1(e,r){return e.map(r).join("")}var q$1=1;var B$1=1;var D$1=0;var E$1=0;var F$1=0;var G$1="";function H$1(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q$1,column:B$1,length:s,return:""}}function I$1(e,r,a){return H$1(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F$1}function K(){F$1=E$1<D$1?z$1(G$1,E$1++):0;if(B$1++,F$1===10)B$1=1,q$1++;return F$1}function L(){return z$1(G$1,E$1)}function N$1(){return E$1}function P$1(e,r){return C(G$1,e,r)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R$1(e){return q$1=B$1=1,D$1=A$1(G$1=e),E$1=0,[]}function T$1(e){return G$1="",e}function U$1(e){return g$1(P$1(E$1-1,Y$1(e===91?e+2:e===40?e+1:e)))}function W$1(e){while(F$1=L())if(F$1<33)K();else break;return Q(e)>2||Q(F$1)>3?"":" "}function Y$1(e){while(K())switch(F$1){case e:return E$1;case 34:case 39:return Y$1(e===34||e===39?e:F$1);case 40:if(e===41)Y$1(e);break;case 92:K();break}return E$1}function Z$1(e,r){while(K())if(e+F$1===47+10)break;else if(e+F$1===42+42&&L()===47)break;return "/*"+P$1(r,E$1-1)+"*"+d$1(e===47?e:K())}function _(e){while(!Q(L()))K();return P$1(e,E$1)}function ee$1(e){return T$1(re$1("",null,null,null,[""],e=R$1(e),0,[0],e))}function re$1(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var w=1;var b=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(b)switch(p=k,k=K()){case 34:case 39:case 91:case 40:z+=U$1(k);break;case 9:case 10:case 13:case 32:z+=W$1(p);break;case 47:switch(L()){case 42:case 47:O$1(ce$1(Z$1(K(),N$1()),r,a),i);break;default:z+="/";}break;case 123*w:u[f++]=A$1(z)*$;case 125*w:case 59:case 0:switch(k){case 0:case 125:b=0;case 59+o:if(h>0&&A$1(z)-l)O$1(h>32?ne$1(z+";",c,a,l-1):ne$1(y$2(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O$1(j=ae$1(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)re$1(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:re$1(e,j,j,c&&O$1(ae$1(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:re$1(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,w=$=1,m=z="",l=s;break;case 58:l=1+A$1(z),h=p;default:switch(z+=d$1(k),k*w){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A$1(z)-1)*$,$=1;break;case 64:if(L()===45)z+=U$1(K());v=L(),o=A$1(m=z+=_(N$1())),k++;break;case 45:if(p===45&&A$1(z)==2)w=0;}}return t}function ae$1(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M$1(h);for(var w=0,b=0,$=0;w<c;++w)for(var d=0,m=C(e,v+1,v=k$1(b=u[w])),x=e;d<p;++d)if(x=g$1(b>0?h[d]+" "+m:y$2(m,/&\f/g,h[d])))f[$++]=x;return H$1(e,r,a,t===0?n$1:i,f,o,l)}function ce$1(e,r,a){return H$1(e,r,a,c$1,d$1(J()),C(e,2,-2),0)}function ne$1(e,r,a,c){return H$1(e,r,a,t$1,C(e,0,c),C(e,c+1,-1),c)}function te$1(c,n){switch(m$1(c,n)){case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r$1+c+e$1+c+c;case 6828:case 4268:return a+c+e$1+c+c;case 6165:return a+c+e$1+"flex-"+c+c;case 5187:return a+c+y$2(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e$1+"flex-$1$2")+c;case 5443:return a+c+e$1+"flex-item-"+y$2(c,/flex-|-self/,"")+c;case 4675:return a+c+e$1+"flex-line-pack"+y$2(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e$1+y$2(c,"shrink","negative")+c;case 5292:return a+c+e$1+y$2(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y$2(c,"-grow","")+a+c+e$1+y$2(c,"grow","positive")+c;case 4554:return a+y$2(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y$2(y$2(y$2(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y$2(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y$2(y$2(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e$1+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y$2(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A$1(c)-1-n>6)switch(z$1(c,n+1)){case 102:n=z$1(c,n+3);case 109:return y$2(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r$1+(n==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?te$1(y$2(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z$1(c,n+1)!==115)break;case 6444:switch(z$1(c,A$1(c)-3-(~j(c,"!important")&&10))){case 107:case 111:return y$2(c,c,a+c)+c;case 101:return y$2(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z$1(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e$1+"$2box$3")+c}break;case 5936:switch(z$1(c,n+11)){case 114:return a+c+e$1+y$2(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e$1+y$2(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e$1+y$2(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e$1+c+c}return c}function se$1(e,r){var a="";var c=M$1(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function ue$1(e,r,a,s){switch(e.type){case i:case t$1:return e.return=e.return||e.value;case c$1:return "";case n$1:e.value=e.props.join(",");}return A$1(a=se$1(e.children,s))?e.return=e.value+"{"+a+"}":""}function ie$1(e){var r=M$1(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function fe$1(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function oe$1(c,s,u,i){if(!c.return)switch(c.type){case t$1:c.return=te$1(c.value,c.length);break;case p$1:return se$1([I$1(y$2(c.value,"@","@"+a),c,"")],i);case n$1:if(c.length)return S$1(c.props,(function(n){switch(x$1(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return se$1([I$1(y$2(n,/:(read-\w+)/,":"+r$1+"$1"),c,"")],i);case"::placeholder":return se$1([I$1(y$2(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I$1(y$2(n,/:(plac\w+)/,":"+r$1+"$1"),c,""),I$1(y$2(n,/:(plac\w+)/,e$1+"input-$1"),c,"")],i)}return ""}))}}

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (Q(character)) {
        case 0:
          // &\f
          if (character === 38 && L() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += _(E$1 - 1);
          break;

        case 2:
          parsed[index] += U$1(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = L() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += d$1(character);
      }
    } while (character = K());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return T$1(toRules(R$1(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
    !element.length) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  var isBrowser$1 = typeof document !== 'undefined';
  var getServerStylisCache = isBrowser$1 ? undefined : weakMemoize(function () {
    return memoize$2(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [oe$1];

  var createCache = function createCache(options) {
    var key = options.key;

    if (isBrowser$1 && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to

      Array.prototype.forEach.call(ssrStyles, function (node) {
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {}; // $FlowFixMe

    var container;
    var nodesToHydrate = [];

    if (isBrowser$1) {
      container = options.container || document.head;
      Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' ');

        if (attrib[0] !== key) {
          return;
        } // $FlowFixMe


        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    if (isBrowser$1) {
      var currentSheet;
      var finalizingPlugins = [ue$1,  fe$1(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = ie$1(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return se$1(ee$1(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [ue$1];

      var _serializer = ie$1(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

      var _stylis = function _stylis(styles) {
        return se$1(ee$1(styles), _serializer);
      }; // $FlowFixMe


      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet$1({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  var isBrowser$2 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        if (!isBrowser$2 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$2 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize$2(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {

        styles += strings[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  var isBrowser$3 = typeof document !== 'undefined';

  var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);
  var CacheProvider = EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/react.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = react.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  if (!isBrowser$3) {
    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        var cache = react.useContext(EmotionCacheContext);

        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/react.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }

  var ThemeContext$1 = /* #__PURE__ */react.createContext({});

  // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
  // initial client-side render from SSR, use place of hydrating tag

  var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

    var styles = props.styles;
    var serialized = serializeStyles([styles], undefined, typeof styles === 'function' || Array.isArray(styles) ? react.useContext(ThemeContext$1) : undefined);

    if (!isBrowser$3) {
      var _ref;

      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = cache.compat === true;
      var rules = cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, cache.sheet, shouldCache);

      if (shouldCache) {
        return null;
      }

      return /*#__PURE__*/react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = cache.sheet.nonce, _ref));
    } // yes, i know these hooks are used conditionally
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything


    var sheetRef = react.useRef();
    react.useLayoutEffect(function () {
      var key = cache.key + "-global";
      var sheet = new StyleSheet$1({
        key: key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      }); // $FlowFixMe

      var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }

      if (node !== null) {
        sheet.hydrate([node]);
      }

      sheetRef.current = sheet;
      return function () {
        sheet.flush();
      };
    }, [cache]);
    react.useLayoutEffect(function () {
      if (serialized.next !== undefined) {
        // insert keyframes
        insertStyles(cache, serialized.next, true);
      }

      var sheet = sheetRef.current;

      if (sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }

      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });

  function css$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  var keyframes = function keyframes() {
    var insertable = css$1.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  var testOmitPropsOnStringTag = isPropValid;

  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
  };

  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;

    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }

    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }

    return shouldForwardProp;
  };
  var isBrowser$4 = typeof document !== 'undefined';

  var createStyled = function createStyled(tag, options) {

    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;

    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
    }

    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {

        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {

          styles.push(args[i], args[0][i]);
        }
      } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


      var Styled = withEmotionCache(function (props, cache, ref) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = react.useContext(ThemeContext$1);
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
        className += cache.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref;
        var ele = /*#__PURE__*/react.createElement(finalTag, newProps);

        if (!isBrowser$4 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && "production" !== 'production') {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe: coerce undefined to string


          return "." + targetClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return createStyled(nextTag, _extends({}, options, {}, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };

      return Styled;
    };
  };

  var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  var newStyled = createStyled.bind();
  tags.forEach(function (tagName) {
    // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
    newStyled[tagName] = newStyled(tagName);
  });

  function isEmpty$1(obj) {
    return Object.keys(obj).length === 0;
  }

  function GlobalStyles(props) {
    const {
      styles,
      defaultTheme
    } = props;
    const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$1(themeInput) ? defaultTheme : themeInput) : styles;
    return /*#__PURE__*/react.createElement(Global, {
      styles: globalStyles
    });
  }

  function isEmpty$2(obj) {
    return Object.keys(obj).length === 0;
  }

  const getStyleOverrides = (name, theme) => {
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
      return theme.components[name].styleOverrides;
    }

    return null;
  };

  const getVariantStyles = (name, theme) => {
    let variants = [];

    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
      variants = theme.components[name].variants;
    }

    const variantsStyles = {};
    variants.forEach(definition => {
      const key = propsToClassKey(definition.props);
      variantsStyles[key] = definition.style;
    });
    return variantsStyles;
  };

  const variantsResolver = (props, styles, theme, name) => {
    var _theme$components, _theme$components$nam;

    const {
      styleProps = {}
    } = props;
    let variantsStyles = {};
    const themeVariants = theme === null || theme === void 0 ? void 0 : (_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : (_theme$components$nam = _theme$components[name]) === null || _theme$components$nam === void 0 ? void 0 : _theme$components$nam.variants;

    if (themeVariants) {
      themeVariants.forEach(themeVariant => {
        let isMatch = true;
        Object.keys(themeVariant.props).forEach(key => {
          if (styleProps[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
            isMatch = false;
          }
        });

        if (isMatch) {
          variantsStyles = _extends({}, variantsStyles, styles[propsToClassKey(themeVariant.props)]);
        }
      });
    }

    return variantsStyles;
  };

  const shouldForwardProp = prop => prop !== 'styleProps' && prop !== 'theme' && prop !== 'isRtl' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

  const lowercaseFirstLetter = string => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  const experimentalStyled = (tag, options, muiOptions = {}) => {
    const componentName = muiOptions.name;
    const componentSlot = muiOptions.slot;
    const overridesResolver = muiOptions.overridesResolver;
    const skipVariantsResolver = muiOptions.skipVariantsResolver || false;
    const skipSx = muiOptions.skipSx || false;
    let displayName;
    let name;
    let className;

    if (componentName) {
      displayName = `${componentName}${componentSlot || ''}`;
      name = !componentSlot || componentSlot === 'Root' ? `${componentName}` : null;
      className = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
    }

    const defaultStyledResolver = newStyled(tag, _extends({
      shouldForwardProp,
      label: className || componentName || ''
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        return typeof stylesArg === 'function' ? (_ref) => {
          let {
            theme: themeInput
          } = _ref,
              other = _objectWithoutPropertiesLoose(_ref, ["theme"]);

          return stylesArg(_extends({
            theme: isEmpty$2(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (name && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(name, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (name && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(name, theme), theme, name);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme
        transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2,
              other = _objectWithoutPropertiesLoose(_ref2, ["theme"]);

          return styleArg(_extends({
            theme: isEmpty$2(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      if (displayName || name) {
        Component.displayName = displayName || name;
      }

      return Component;
    };

    return muiStyledResolver;
  };

  function formControlState({
    props,
    states,
    muiFormControl
  }) {
    return states.reduce((acc, state) => {
      acc[state] = props[state];

      if (muiFormControl) {
        if (typeof props[state] === 'undefined') {
          acc[state] = muiFormControl[state];
        }
      }

      return acc;
    }, {});
  }

  /**
   * @ignore - internal component.
   */

  const FormControlContext = /*#__PURE__*/react.createContext();

  function useFormControl() {
    return react.useContext(FormControlContext);
  }

  function getStyleValue(computedStyle, property) {
    return parseInt(computedStyle[property], 10) || 0;
  }

  const styles = {
    /* Styles applied to the shadow textarea element. */
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: 'hidden',
      // Remove from the content flow
      position: 'absolute',
      // Ignore the scrollbar width
      overflow: 'hidden',
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: 'translateZ(0)'
    }
  };
  const TextareaAutosize = /*#__PURE__*/react.forwardRef(function TextareaAutosize(props, ref) {
    const {
      onChange,
      maxRows,
      minRows = 1,
      style,
      value
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["onChange", "maxRows", "minRows", "style", "value"]);

    const {
      current: isControlled
    } = react.useRef(value != null);
    const inputRef = react.useRef(null);
    const handleRef = useForkRef(ref, inputRef);
    const shadowRef = react.useRef(null);
    const renders = react.useRef(0);
    const [state, setState] = react.useState({});
    const syncHeight = react.useCallback(() => {
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

      if (computedStyle.width === '0px') {
        return;
      }

      const inputShallow = shadowRef.current;
      inputShallow.style.width = computedStyle.width;
      inputShallow.value = input.value || props.placeholder || 'x';

      if (inputShallow.value.slice(-1) === '\n') {
        // Certain fonts which overflow the line height will cause the textarea
        // to report a different scrollHeight depending on whether the last line
        // is empty. Make it non-empty to avoid this issue.
        inputShallow.value += ' ';
      }

      const boxSizing = computedStyle['box-sizing'];
      const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
      const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

      const innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

      inputShallow.value = 'x';
      const singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

      let outerHeight = innerHeight;

      if (minRows) {
        outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
      }

      if (maxRows) {
        outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
      }

      outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

      const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
      const overflow = Math.abs(outerHeight - innerHeight) <= 1;
      setState(prevState => {
        // Need a large enough difference to update the height.
        // This prevents infinite rendering loop.
        if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
          renders.current += 1;
          return {
            overflow,
            outerHeightStyle
          };
        }

        return prevState;
      });
    }, [maxRows, minRows, props.placeholder]);
    react.useEffect(() => {
      const handleResize = debounce(() => {
        renders.current = 0;
        syncHeight();
      });
      const containerWindow = ownerWindow(inputRef.current);
      containerWindow.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
      };
    }, [syncHeight]);
    useEnhancedEffect(() => {
      syncHeight();
    });
    react.useEffect(() => {
      renders.current = 0;
    }, [value]);

    const handleChange = event => {
      renders.current = 0;

      if (!isControlled) {
        syncHeight();
      }

      if (onChange) {
        onChange(event);
      }
    };

    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("textarea", _extends({
      value: value,
      onChange: handleChange,
      ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : null
      }, style)
    }, other)), /*#__PURE__*/react.createElement("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style)
    }));
  });

  /**
   * @ignore - do not document.
   */

  function GlobalStyles$1(props) {
    return /*#__PURE__*/react.createElement(GlobalStyles, _extends({}, props, {
      defaultTheme: defaultTheme
    }));
  }

  // Supports determination of isControlled().
  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  } // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.

  function isFilled(obj, SSR = false) {
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
  } // Determine if an Input is adorned on start.
  // It's corresponding to the left with LTR.
  //
  // @param obj
  // @returns {boolean} False when no adornments.
  //                    True when adorned at the start.

  function isAdornedStart(obj) {
    return obj.startAdornment;
  }

  function getInputBaseUtilityClass(slot) {
    return generateUtilityClass('MuiInputBase', slot);
  }
  const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);

  const overridesResolver = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styleProps.formControl && styles.formControl, styleProps.startAdornment && styles.adornedStart, styleProps.endAdornment && styles.adornedEnd, styleProps.error && styles.error, styleProps.size === 'small' && styles.sizeSmall, styleProps.multiline && styles.multiline, styleProps.color && styles[`color${capitalize(styleProps.color)}`], styleProps.fullWidth && styles.fullWidth, styleProps.hiddenLabel && styles.hiddenLabel, {
      [`& .${inputBaseClasses.input}`]: _extends({}, styles.input, styleProps.size === 'small' && styles.inputSizeSmall, styleProps.multiline && styles.inputMultiline, styleProps.type === 'search' && styles.inputTypeSearch, styleProps.startAdornment && styles.inputAdornedStart, styleProps.endAdornment && styles.inputAdornedEnd, styleProps.hiddenLabel && styles.inputHiddenLabel)
    }));
  };

  const useUtilityClasses$1 = styleProps => {
    const {
      classes,
      color,
      disabled,
      error,
      endAdornment,
      focused,
      formControl,
      fullWidth,
      hiddenLabel,
      multiline,
      size,
      startAdornment,
      type
    } = styleProps;
    const slots = {
      root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel'],
      input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd']
    };
    return composeClasses(slots, getInputBaseUtilityClass, classes);
  };

  const InputBaseRoot = experimentalStyled('div', {}, {
    name: 'MuiInputBase',
    slot: 'Root',
    overridesResolver
  })(({
    theme,
    styleProps
  }) => _extends({}, theme.typography.body1, {
    color: theme.palette.text.primary,
    lineHeight: '1.4375em',
    // 23px
    boxSizing: 'border-box',
    // Prevent padding issue with fullWidth.
    position: 'relative',
    cursor: 'text',
    display: 'inline-flex',
    alignItems: 'center',
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
      cursor: 'default'
    }
  }, styleProps.multiline && _extends({
    padding: '4px 0 5px'
  }, styleProps.size === 'small' && {
    paddingTop: 1
  }), styleProps.fullWidth && {
    width: '100%'
  }));
  const InputBaseComponent = experimentalStyled('input', {
    shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'classes'
  }, {
    name: 'MuiInputBase',
    slot: 'Input'
  })(({
    theme,
    styleProps
  }) => {
    const light = theme.palette.mode === 'light';
    const placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    };
    const placeholderHidden = {
      opacity: '0 !important'
    };
    const placeholderVisible = {
      opacity: light ? 0.42 : 0.5
    };
    return _extends({
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: '4px 0 5px',
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.4375em',
      // Reset 23pxthe native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        WebkitAppearance: 'none'
      },
      // Show and hide the placeholder logic
      [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&.Mui-disabled': {
        opacity: 1,
        // Reset iOS opacity
        WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug

      },
      '&:-webkit-auto-fill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    }, styleProps.size === 'small' && {
      paddingTop: 1
    }, styleProps.multiline && {
      height: 'auto',
      resize: 'none',
      padding: 0
    }, styleProps.type === 'search' && {
      // Improve type search style.
      MozAppearance: 'textfield',
      WebkitAppearance: 'textfield'
    });
  });
  /**
   * `InputBase` contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   */

  const InputBase = /*#__PURE__*/react.forwardRef(function InputBase(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiInputBase'
    });

    const {
      'aria-describedby': ariaDescribedby,
      autoComplete,
      autoFocus,
      className,
      defaultValue,
      disabled,
      endAdornment,
      fullWidth = false,
      id,
      inputComponent = 'input',
      inputProps: inputPropsProp = {},
      inputRef: inputRefProp,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      readOnly,
      renderSuffix,
      rows,
      startAdornment,
      type = 'text',
      value: valueProp
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "startAdornment", "type", "value"]);

    const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
    const {
      current: isControlled
    } = react.useRef(value != null);
    const inputRef = react.useRef();
    const handleInputRefWarning = react.useCallback(instance => {
    }, []);
    const handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
    const handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
    const handleInputRef = useForkRef(inputRef, handleInputRefProp);
    const [focused, setFocused] = react.useState(false);
    const muiFormControl = useFormControl();

    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.

    react.useEffect(() => {
      if (!muiFormControl && disabled && focused) {
        setFocused(false);

        if (onBlur) {
          onBlur();
        }
      }
    }, [muiFormControl, disabled, focused, onBlur]);
    const onFilled = muiFormControl && muiFormControl.onFilled;
    const onEmpty = muiFormControl && muiFormControl.onEmpty;
    const checkDirty = react.useCallback(obj => {
      if (isFilled(obj)) {
        if (onFilled) {
          onFilled();
        }
      } else if (onEmpty) {
        onEmpty();
      }
    }, [onFilled, onEmpty]);
    useEnhancedEffect(() => {
      if (isControlled) {
        checkDirty({
          value
        });
      }
    }, [value, checkDirty, isControlled]);

    const handleFocus = event => {
      // Fix a bug with IE11 where the focus/blur events are triggered
      // while the component is disabled.
      if (fcs.disabled) {
        event.stopPropagation();
        return;
      }

      if (onFocus) {
        onFocus(event);
      }

      if (inputPropsProp.onFocus) {
        inputPropsProp.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      } else {
        setFocused(true);
      }
    };

    const handleBlur = event => {
      if (onBlur) {
        onBlur(event);
      }

      if (inputPropsProp.onBlur) {
        inputPropsProp.onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      } else {
        setFocused(false);
      }
    };

    const handleChange = (event, ...args) => {
      if (!isControlled) {
        const element = event.target || inputRef.current;

        if (element == null) {
          throw new Error( formatMuiErrorMessage(1));
        }

        checkDirty({
          value: element.value
        });
      }

      if (inputPropsProp.onChange) {
        inputPropsProp.onChange(event, ...args);
      } // Perform in the willUpdate


      if (onChange) {
        onChange(event, ...args);
      }
    }; // Check the input state on mount, in case it was filled by the user
    // or auto filled by the browser before the hydration (for SSR).


    react.useEffect(() => {
      checkDirty(inputRef.current); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = event => {
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }

      if (onClick) {
        onClick(event);
      }
    };

    let InputComponent = inputComponent;
    let inputProps = inputPropsProp;

    if (multiline && InputComponent === 'input') {
      if (rows) {

        inputProps = _extends({
          type: undefined
        }, inputProps);
        InputComponent = 'textarea';
      } else {
        inputProps = _extends({
          type: undefined,
          maxRows,
          minRows
        }, inputProps);
        InputComponent = TextareaAutosize;
      }
    }

    const handleAutoFill = event => {
      // Provide a fake value as Chrome might not let you access it for security reasons.
      checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
        value: 'x'
      });
    };

    react.useEffect(() => {
      if (muiFormControl) {
        muiFormControl.setAdornedStart(Boolean(startAdornment));
      }
    }, [muiFormControl, startAdornment]);

    const styleProps = _extends({}, props, {
      color: fcs.color || 'primary',
      disabled: fcs.disabled,
      endAdornment,
      error: fcs.error,
      focused: fcs.focused,
      formControl: muiFormControl,
      fullWidth,
      hiddenLabel: fcs.hiddenLabel,
      multiline,
      size: fcs.size,
      startAdornment,
      type
    });

    const classes = useUtilityClasses$1(styleProps);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GlobalStyles$1, {
      styles: {
        '@keyframes mui-auto-fill': {},
        '@keyframes mui-auto-fill-cancel': {}
      }
    }), /*#__PURE__*/react.createElement(InputBaseRoot, _extends({
      className: clsx(classes.root, className),
      styleProps: styleProps,
      onClick: handleClick,
      ref: ref
    }, other), startAdornment, /*#__PURE__*/react.createElement(FormControlContext.Provider, {
      value: null
    }, /*#__PURE__*/react.createElement(InputBaseComponent, _extends({
      as: InputComponent,
      styleProps: styleProps,
      "aria-invalid": fcs.error,
      "aria-describedby": ariaDescribedby,
      autoComplete: autoComplete,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      disabled: fcs.disabled,
      id: id,
      onAnimationStart: handleAutoFill,
      name: name,
      placeholder: placeholder,
      readOnly: readOnly,
      required: fcs.required,
      rows: rows,
      value: value,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp,
      type: type
    }, inputProps, {
      ref: handleInputRef,
      className: clsx(classes.input, inputPropsProp.className),
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus
    }))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
      startAdornment
    })) : null));
  });

  const styles$1 = theme => {
    const light = theme.palette.mode === 'light';
    const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative'
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        'label + &': {
          marginTop: 16
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if color secondary. */
      colorSecondary: {
        '&$underline:after': {
          borderBottomColor: theme.palette.secondary.main
        }
      },

      /* Styles applied to the root element unless `disableUnderline={true}`. */
      underline: {
        '&:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red

        },
        '&:before': {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&:hover:not($disabled):before': {
          borderBottom: `2px solid ${theme.palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted'
        }
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the input element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},

      /* Styles applied to the input element. */
      input: {},

      /* Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {},

      /* Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {},

      /* Styles applied to the input element if `type="search"`. */
      inputTypeSearch: {}
    };
  };
  const Input = /*#__PURE__*/react.forwardRef(function Input(props, ref) {
    const {
      disableUnderline,
      classes,
      fullWidth = false,
      inputComponent = 'input',
      multiline = false,
      type = 'text'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

    return /*#__PURE__*/react.createElement(InputBase, _extends({
      classes: _extends({}, classes, {
        root: clsx(classes.root, !disableUnderline && classes.underline),
        underline: null
      }),
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other));
  });
  Input.muiName = 'Input';
  var Input$1 = withStyles$1(styles$1, {
    name: 'MuiInput'
  })(Input);

  const styles$2 = theme => {
    const light = theme.palette.mode === 'light';
    const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    const backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        backgroundColor,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        '&:hover': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor
          }
        },
        '&$focused': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
        },
        '&$disabled': {
          backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
        }
      },

      /* Styles applied to the root element if color secondary. */
      colorSecondary: {
        '&$underline:after': {
          borderBottomColor: theme.palette.secondary.main
        }
      },

      /* Styles applied to the root element unless `disableUnderline={true}`. */
      underline: {
        '&:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red

        },
        '&:before': {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&:hover:not($disabled):before': {
          borderBottom: `1px solid ${theme.palette.text.primary}`
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted'
        }
      },

      /* Pseudo-class applied to the root element if the component is focused. */
      focused: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 12
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 12
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the input element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '25px 12px 8px',
        '&$sizeSmall': {
          paddingTop: 21,
          paddingBottom: 4
        },
        '&$hiddenLabel': {
          paddingTop: 16,
          paddingBottom: 17
        }
      },

      /* Styles applied to the root element if `hiddenLabel={true}`. */
      hiddenLabel: {},

      /* Styles applied to the input element. */
      input: {
        padding: '25px 12px 8px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
          caretColor: theme.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit'
        }
      },

      /* Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {
        paddingTop: 21,
        paddingBottom: 4
      },

      /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
      inputHiddenLabel: {
        paddingTop: 16,
        paddingBottom: 17,
        '&$inputSizeSmall': {
          paddingTop: 8,
          paddingBottom: 9
        }
      },

      /* Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },

      /* Styles applied to the input element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },

      /* Styles applied to the input element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
    };
  };
  const FilledInput = /*#__PURE__*/react.forwardRef(function FilledInput(props, ref) {
    const {
      disableUnderline,
      classes,
      fullWidth = false,
      inputComponent = 'input',
      multiline = false,
      type = 'text'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

    return /*#__PURE__*/react.createElement(InputBase, _extends({
      classes: _extends({}, classes, {
        root: clsx(classes.root, !disableUnderline && classes.underline),
        underline: null
      }),
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other));
  });
  FilledInput.muiName = 'Input';
  var FilledInput$1 = withStyles$1(styles$2, {
    name: 'MuiFilledInput'
  })(FilledInput);

  const styles$3 = theme => {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: '0 8px',
        pointerEvents: 'none',
        borderRadius: 'inherit',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden'
      },

      /* Styles applied to the legend element when `labelWidth` is provided. */
      legend: {
        padding: 0,
        lineHeight: '11px',
        // sync with `height` in `legend` styles
        transition: theme.transitions.create('width', {
          duration: 150,
          easing: theme.transitions.easing.easeOut
        })
      },

      /* Styles applied to the legend element. */
      legendLabelled: {
        display: 'block',
        width: 'auto',
        padding: 0,
        height: 11,
        // sync with `lineHeight` in `legend` styles
        fontSize: '0.75em',
        visibility: 'hidden',
        maxWidth: 0.01,
        transition: theme.transitions.create('max-width', {
          duration: 50,
          easing: theme.transitions.easing.easeOut
        }),
        '& > span': {
          paddingLeft: 5,
          paddingRight: 5,
          display: 'inline-block'
        }
      },

      /* Styles applied to the legend element is notched. */
      legendNotched: {
        maxWidth: 1000,
        transition: theme.transitions.create('max-width', {
          duration: 100,
          easing: theme.transitions.easing.easeOut,
          delay: 50
        })
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  const NotchedOutline = /*#__PURE__*/react.forwardRef(function NotchedOutline(props, ref) {
    const {
      classes,
      className,
      label,
      labelWidth: labelWidthProp,
      notched,
      style
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

    const theme = useTheme$1();
    const align = theme.direction === 'rtl' ? 'right' : 'left';

    if (label !== undefined) {
      return /*#__PURE__*/react.createElement("fieldset", _extends({
        "aria-hidden": true,
        className: clsx(classes.root, className),
        ref: ref,
        style: style
      }, other), /*#__PURE__*/react.createElement("legend", {
        className: clsx(classes.legendLabelled, notched && classes.legendNotched)
      }, label ? /*#__PURE__*/react.createElement("span", null, label) :
      /*#__PURE__*/
      // notranslate needed while Google Translate will not fix zero-width space issue
      // eslint-disable-next-line react/no-danger
      react.createElement("span", {
        className: "notranslate",
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })));
    }

    const labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
    return /*#__PURE__*/react.createElement("fieldset", _extends({
      "aria-hidden": true,
      style: _extends({
        [`padding${capitalize(align)}`]: 8
      }, style),
      className: clsx(classes.root, className),
      ref: ref
    }, other), /*#__PURE__*/react.createElement("legend", {
      className: classes.legend,
      style: {
        // IE11: fieldset with legend does not render
        // a border radius. This maintains consistency
        // by always having a legend rendered
        width: notched ? labelWidth : 0.01
      }
    }, /*#__PURE__*/react.createElement("span", {
      className: "notranslate",
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  });
  var NotchedOutline$1 = withStyles$1(styles$3, {
    name: 'PrivateNotchedOutline'
  })(NotchedOutline);

  const styles$4 = theme => {
    const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover $notchedOutline': {
          borderColor: theme.palette.text.primary
        },
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          '&:hover $notchedOutline': {
            borderColor
          }
        },
        '&$focused $notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2
        },
        '&$error $notchedOutline': {
          borderColor: theme.palette.error.main
        },
        '&$disabled $notchedOutline': {
          borderColor: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {
        '&$focused $notchedOutline': {
          borderColor: theme.palette.secondary.main
        },
        '&$error $notchedOutline': {
          // To remove once we migrate to emotion
          borderColor: theme.palette.error.main
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 14
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 14
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the input element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '16.5px 14px',
        '&$sizeSmall': {
          paddingTop: 10.5,
          paddingBottom: 10.5
        }
      },

      /* Styles applied to the NotchedOutline element. */
      notchedOutline: {
        borderColor
      },

      /* Styles applied to the input element. */
      input: {
        padding: '16.5px 14px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
          caretColor: theme.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit'
        }
      },

      /* Styles applied to the input element if `size="small"`. */
      inputSizeSmall: {
        paddingTop: 8.5,
        paddingBottom: 8.5
      },

      /* Styles applied to the input element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },

      /* Styles applied to the input element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },

      /* Styles applied to the input element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
    };
  };
  const OutlinedInput = /*#__PURE__*/react.forwardRef(function OutlinedInput(props, ref) {
    const {
      classes,
      fullWidth = false,
      inputComponent = 'input',
      label,
      labelWidth = 0,
      multiline = false,
      notched,
      type = 'text'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

    return /*#__PURE__*/react.createElement(InputBase, _extends({
      renderSuffix: state => /*#__PURE__*/react.createElement(NotchedOutline$1, {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      }),
      classes: _extends({}, classes, {
        root: clsx(classes.root, classes.underline),
        notchedOutline: null
      }),
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other));
  });
  OutlinedInput.muiName = 'Input';
  var OutlinedInput$1 = withStyles$1(styles$4, {
    name: 'MuiOutlinedInput'
  })(OutlinedInput);

  function useFormControl$1() {
    return react.useContext(FormControlContext);
  }

  const styles$5 = theme => ({
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      },
      '&$error': {
        // To remove once we migrate to emotion
        color: theme.palette.error.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  });
  const FormLabel = /*#__PURE__*/react.forwardRef(function FormLabel(props, ref) {
    const {
      children,
      classes,
      className,
      component: Component = 'label'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

    const muiFormControl = useFormControl$1();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
    });
    return /*#__PURE__*/react.createElement(Component, _extends({
      className: clsx(classes.root, classes[`color${capitalize(fcs.color || 'primary')}`], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
      ref: ref
    }, other), children, fcs.required && /*#__PURE__*/react.createElement("span", {
      "aria-hidden": true,
      className: clsx(classes.asterisk, fcs.error && classes.error)
    }, "\u2009", '*'));
  });
  var FormLabel$1 = withStyles$1(styles$5, {
    name: 'MuiFormLabel'
  })(FormLabel);

  const styles$6 = theme => ({
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the input element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the input element unless `disableAnimation={true}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$sizeSmall': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$sizeSmall': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$sizeSmall': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  });
  const InputLabel = /*#__PURE__*/react.forwardRef(function InputLabel(props, ref) {
    const {
      classes,
      className,
      disableAnimation = false,
      shrink: shrinkProp
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

    const muiFormControl = useFormControl$1();
    let shrink = shrinkProp;

    if (typeof shrink === 'undefined' && muiFormControl) {
      shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
    }

    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['size', 'variant']
    });
    return /*#__PURE__*/react.createElement(FormLabel$1, _extends({
      "data-shrink": shrink,
      className: clsx(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.size === 'small' && classes.sizeSmall, {
        'filled': classes.filled,
        'outlined': classes.outlined
      }[fcs.variant]),
      classes: {
        focused: classes.focused,
        disabled: classes.disabled,
        error: classes.error,
        required: classes.required,
        asterisk: classes.asterisk
      },
      ref: ref
    }, other));
  });
  var InputLabel$1 = withStyles$1(styles$6, {
    name: 'MuiInputLabel'
  })(InputLabel);

  const styles$7 = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
      // Reset fieldset default style.
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0,
      verticalAlign: 'top' // Fix alignment issue on Safari.

    },

    /* Styles applied to the root element if `margin="normal"`. */
    marginNormal: {
      marginTop: 16,
      marginBottom: 8
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 8,
      marginBottom: 4
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    }
  };
  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibility and ensures that the state always stays
   * consistent across the children of the `FormControl`.
   * This context is used by the following components:
   *
   *  - FormLabel
   *  - FormHelperText
   *  - Input
   *  - InputLabel
   *
   * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
   *
   * ```jsx
   * <FormControl>
   *   <InputLabel htmlFor="my-input">Email address</InputLabel>
   *   <Input id="my-input" aria-describedby="my-helper-text" />
   *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
   * </FormControl>
   * ```
   *
   * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
   * For instance, only one input can be focused at the same time, the state shouldn't be shared.
   */

  const FormControl = /*#__PURE__*/react.forwardRef(function FormControl(props, ref) {
    const {
      children,
      classes,
      className,
      color = 'primary',
      component: Component = 'div',
      disabled = false,
      error = false,
      focused: visuallyFocused,
      fullWidth = false,
      hiddenLabel = false,
      margin = 'none',
      required = false,
      size = 'medium',
      variant = 'standard'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"]);

    const [adornedStart, setAdornedStart] = react.useState(() => {
      // We need to iterate through the children and find the Input in order
      // to fully support server-side rendering.
      let initialAdornedStart = false;

      if (children) {
        react.Children.forEach(children, child => {
          if (!isMuiElement(child, ['Input', 'Select'])) {
            return;
          }

          const input = isMuiElement(child, ['Select']) ? child.props.input : child;

          if (input && isAdornedStart(input.props)) {
            initialAdornedStart = true;
          }
        });
      }

      return initialAdornedStart;
    });
    const [filled, setFilled] = react.useState(() => {
      // We need to iterate through the children and find the Input in order
      // to fully support server-side rendering.
      let initialFilled = false;

      if (children) {
        react.Children.forEach(children, child => {
          if (!isMuiElement(child, ['Input', 'Select'])) {
            return;
          }

          if (isFilled(child.props, true)) {
            initialFilled = true;
          }
        });
      }

      return initialFilled;
    });
    const [focusedState, setFocused] = react.useState(false);
    const focused = visuallyFocused !== undefined ? visuallyFocused : focusedState;

    if (disabled && focused) {
      setFocused(false);
    }

    let registerEffect;

    const onFilled = react.useCallback(() => {
      setFilled(true);
    }, []);
    const onEmpty = react.useCallback(() => {
      setFilled(false);
    }, []);
    const childContext = {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty,
      onFilled,
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
    return /*#__PURE__*/react.createElement(FormControlContext.Provider, {
      value: childContext
    }, /*#__PURE__*/react.createElement(Component, _extends({
      className: clsx(classes.root, className, margin !== 'none' && classes[`margin${capitalize(margin)}`], fullWidth && classes.fullWidth),
      ref: ref
    }, other), children));
  });
  var FormControl$1 = withStyles$1(styles$7, {
    name: 'MuiFormControl'
  })(FormControl);

  const styles$8 = theme => ({
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  });
  const FormHelperText = /*#__PURE__*/react.forwardRef(function FormHelperText(props, ref) {
    const {
      children,
      classes,
      className,
      component: Component = 'p'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

    const muiFormControl = useFormControl$1();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
    });
    return /*#__PURE__*/react.createElement(Component, _extends({
      className: clsx(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.size === 'small' && classes.sizeSmall),
      ref: ref
    }, other), children === ' ' ?
    /*#__PURE__*/
    // notranslate needed while Google Translate will not fix zero-width space issue
    // eslint-disable-next-line react/no-danger
    react.createElement("span", {
      className: "notranslate",
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    }) : children);
  });
  var FormHelperText$1 = withStyles$1(styles$8, {
    name: 'MuiFormHelperText'
  })(FormHelperText);

  function getContainer(container) {
    return typeof container === 'function' ? container() : container;
  }
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */


  const Portal$1 = /*#__PURE__*/react.forwardRef(function Portal(props, ref) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = react.useState(null);
    const handleRef = useForkRef( /*#__PURE__*/react.isValidElement(children) ? children.ref : null, ref);
    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);

    if (disablePortal) {
      if ( /*#__PURE__*/react.isValidElement(children)) {
        return /*#__PURE__*/react.cloneElement(children, {
          ref: handleRef
        });
      }

      return children;
    }

    return mountNode ? /*#__PURE__*/reactDom.createPortal(children, mountNode) : mountNode;
  });

  // Is a vertical scrollbar displayed?
  function isOverflowing(container) {
    const doc = ownerDocument(container);

    if (doc.body === container) {
      return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
    }

    return container.scrollHeight > container.clientHeight;
  }

  function ariaHidden(element, show) {
    if (show) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }

  function getPaddingRight(element) {
    return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
  }

  function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
    const blacklist = [mountElement, currentElement, ...elementsToExclude];
    const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
    [].forEach.call(container.children, element => {
      if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
        ariaHidden(element, show);
      }
    });
  }

  function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index) => {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;

    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        const scrollbarSize = getScrollbarSize(ownerDocument(container));
        restoreStyle.push({
          value: container.style.paddingRight,
          property: 'padding-right',
          el: container
        }); // Use computed style, here to get the real padding to add our scrollbar width.

        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

        const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedElements, element => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: 'padding-right',
            el: element
          });
          element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
        });
      } // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      const scrollContainer = (parent === null || parent === void 0 ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.

      restoreStyle.push({
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }

    const restore = () => {
      restoreStyle.forEach(({
        value,
        el,
        property
      }) => {
        if (value) {
          el.style.setProperty(property, value);
        } else {
          el.style.removeProperty(property);
        }
      });
    };

    return restore;
  }

  function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, element => {
      if (element.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(element);
      }
    });
    return hiddenSiblings;
  }

  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */
  class ModalManager {
    constructor() {
      this.containers = void 0;
      this.modals = void 0;
      this.modals = [];
      this.containers = [];
    }

    add(modal, container) {
      let modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      const hiddenSiblings = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
      const containerIndex = findIndexOf(this.containers, item => item.container === container);

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblings
      });
      return modalIndex;
    }

    mount(modal, props) {
      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }

    remove(modal) {
      const modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }

    isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }

  }

  /* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */

  const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

  function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

    if (!Number.isNaN(tabindexAttr)) {
      return tabindexAttr;
    } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.


    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
      return 0;
    }

    return node.tabIndex;
  }

  function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
      return false;
    }

    if (!node.name) {
      return false;
    }

    const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

    let roving = getRadio(`[name="${node.name}"]:checked`);

    if (!roving) {
      roving = getRadio(`[name="${node.name}"]`);
    }

    return roving !== node;
  }

  function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
      return false;
    }

    return true;
  }

  function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
      const nodeTabIndex = getTabIndex(node);

      if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
        return;
      }

      if (nodeTabIndex === 0) {
        regularTabNodes.push(node);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex: nodeTabIndex,
          node
        });
      }
    });
    return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
  }
  /**
   * Utility component that locks focus inside the component.
   */

  function Unstable_TrapFocus(props) {
    const {
      children,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableRestoreFocus = false,
      getDoc,
      getTabbable = defaultGetTabbable,
      isEnabled,
      open
    } = props;
    const ignoreNextEnforceFocus = react.useRef();
    const sentinelStart = react.useRef(null);
    const sentinelEnd = react.useRef(null);
    const nodeToRestore = react.useRef();
    const reactFocusEventTarget = react.useRef(null); // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.

    const activated = react.useRef(false);
    const rootRef = react.useRef(null);
    const handleRef = useForkRef(children.ref, rootRef);
    const lastKeydown = react.useRef(null);
    const prevOpenRef = react.useRef();
    react.useEffect(() => {
      prevOpenRef.current = open;
    }, [open]);

    if (!prevOpenRef.current && open && typeof window !== 'undefined' && !disableAutoFocus) {
      // WARNING: Potentially unsafe in concurrent mode.
      // The way the read on `nodeToRestore` is setup could make this actually safe.
      // Say we render `open={false}` -> `open={true}` but never commit.
      // We have now written a state that wasn't committed. But no committed effect
      // will read this wrong value. We only read from `nodeToRestore` in effects
      // that were committed on `open={true}`
      // WARNING: Prevents the instance from being garbage collected. Should only
      // hold a weak ref.
      nodeToRestore.current = getDoc().activeElement;
    }

    react.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      activated.current = !disableAutoFocus;
    }, [disableAutoFocus, open]);
    react.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      const doc = ownerDocument(rootRef.current);

      if (!rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {

          rootRef.current.setAttribute('tabIndex', -1);
        }

        if (activated.current) {
          rootRef.current.focus();
        }
      }

      return () => {
        // restoreLastFocus()
        if (!disableRestoreFocus) {
          // In IE11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE11 have a focus method.
          // Once IE11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            ignoreNextEnforceFocus.current = true;
            nodeToRestore.current.focus();
          }

          nodeToRestore.current = null;
        }
      }; // Missing `disableRestoreFocus` which is fine.
      // We don't support changing that prop on an open TrapFocus
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    react.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }

      const doc = ownerDocument(rootRef.current);

      const contain = nativeEvent => {
        const {
          current: rootElement
        } = rootRef; // Cleanup functions are executed lazily in React 17.
        // Contain can be called between the component being unmounted and its cleanup function being run.

        if (rootElement === null) {
          return;
        }

        if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }

        if (!rootElement.contains(doc.activeElement)) {
          // if the focus event is not coming from inside the children's react tree, reset the refs
          if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
            reactFocusEventTarget.current = null;
          } else if (reactFocusEventTarget.current !== null) {
            return;
          }

          if (!activated.current) {
            return;
          }

          let tabbable = [];

          if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
            tabbable = getTabbable(rootRef.current);
          }

          if (tabbable.length > 0) {
            var _lastKeydown$current, _lastKeydown$current2;

            const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) === null || _lastKeydown$current === void 0 ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) === null || _lastKeydown$current2 === void 0 ? void 0 : _lastKeydown$current2.key) === 'Tab');
            const focusNext = tabbable[0];
            const focusPrevious = tabbable[tabbable.length - 1];

            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          } else {
            rootElement.focus();
          }
        }
      };

      const loopFocus = nativeEvent => {
        lastKeydown.current = nativeEvent;

        if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
          return;
        } // Make sure the next tab starts from the right place.
        // doc.activeElement referes to the origin.


        if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;
          sentinelEnd.current.focus();
        }
      };

      doc.addEventListener('focusin', contain);
      doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
      // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      // Instead, we can look if the active element was restored on the BODY element.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

      const interval = setInterval(() => {
        if (doc.activeElement.tagName === 'BODY') {
          contain();
        }
      }, 50);
      return () => {
        clearInterval(interval);
        doc.removeEventListener('focusin', contain);
        doc.removeEventListener('keydown', loopFocus, true);
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

    const onFocus = event => {
      if (!activated.current) {
        nodeToRestore.current = event.relatedTarget;
      }

      activated.current = true;
      reactFocusEventTarget.current = event.target;
      const childrenPropsHandler = children.props.onFocus;

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };

    const handleFocusSentinel = event => {
      if (!activated.current) {
        nodeToRestore.current = event.relatedTarget;
      }

      activated.current = true;
    };

    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/react.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/react.createElement("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    }));
  }

  const styles$9 = {
    /* Styles applied to the root element. */
    root: {
      zIndex: -1,
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent'
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };
  /**
   * @ignore - internal component.
   */

  const SimpleBackdrop = /*#__PURE__*/react.forwardRef(function SimpleBackdrop(props, ref) {
    const {
      invisible = false,
      open
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["invisible", "open"]);

    return open ? /*#__PURE__*/react.createElement("div", _extends({
      "aria-hidden": true,
      ref: ref
    }, other, {
      style: _extends({}, styles$9.root, invisible ? styles$9.invisible : {}, other.style)
    })) : null;
  });

  function getContainer$1(container) {
    return typeof container === 'function' ? container() : container;
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  } // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.


  const defaultManager = new ModalManager();
  const styles$a = theme => ({
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  });
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
    const theme = useTheme();
    const props = getThemeProps({
      name: 'MuiModal',
      props: _extends({}, inProps),
      theme
    });

    const {
      BackdropComponent = SimpleBackdrop,
      BackdropProps,
      children,
      closeAfterTransition = false,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      // private
      // eslint-disable-next-line react/prop-types
      manager = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      open
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open"]);

    const [exited, setExited] = react.useState(true);
    const modal = react.useRef({});
    const mountNodeRef = react.useRef(null);
    const modalRef = react.useRef(null);
    const handleRef = useForkRef(modalRef, ref);
    const hasTransition = getHasTransition(props);

    const getDoc = () => ownerDocument(mountNodeRef.current);

    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    const handleMounted = () => {
      manager.mount(getModal(), {
        disableScrollLock
      }); // Fix a bug on Chrome where the scroll isn't initially 0.

      modalRef.current.scrollTop = 0;
    };

    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer$1(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer); // The element was already mounted.

      if (modalRef.current) {
        handleMounted();
      }
    });
    const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
    const handlePortalRef = useEventCallback(node => {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });
    const handleClose = react.useCallback(() => {
      manager.remove(getModal());
    }, [manager]);
    react.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);
    react.useEffect(() => {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }

    const handleEnter = () => {
      setExited(false);
    };

    const handleExited = () => {
      setExited(true);

      if (closeAfterTransition) {
        handleClose();
      }
    };

    const handleBackdropClick = event => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };

    const handleKeyDown = event => {
      if (onKeyDown) {
        onKeyDown(event);
      } // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.


      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      }

      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();

        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };

    const inlineStyle = styles$a(theme || {
      zIndex: zIndex$1
    });
    const childProps = {};

    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = children.props.tabIndex || '-1';
    } // It's a Transition like component


    if (hasTransition) {
      childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
      childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
    }

    return /*#__PURE__*/react.createElement(Portal$1, {
      ref: handlePortalRef,
      container: container,
      disablePortal: disablePortal
    }, /*#__PURE__*/react.createElement("div", _extends({
      ref: handleRef,
      onKeyDown: handleKeyDown,
      role: "presentation"
    }, other, {
      style: _extends({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
    }), hideBackdrop ? null : /*#__PURE__*/react.createElement(BackdropComponent, _extends({
      open: open,
      onClick: handleBackdropClick
    }, BackdropProps)), /*#__PURE__*/react.createElement(Unstable_TrapFocus, {
      disableEnforceFocus: disableEnforceFocus,
      disableAutoFocus: disableAutoFocus,
      disableRestoreFocus: disableRestoreFocus,
      getDoc: getDoc,
      isEnabled: isTopModal,
      open: open
    }, /*#__PURE__*/react.cloneElement(children, childProps))));
  });

  var config = {
    disabled: false
  };

  var TransitionGroupContext = react.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        react.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
      );
    };

    return Transition;
  }(react.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && react.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) react.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!react.isValidElement(child)) return;
      var hasPrev = (key in prevChildMapping);
      var hasNext = (key in nextChildMapping);
      var prevChild = prevChildMapping[key];
      var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = react.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = react.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = react.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values$1 = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values$1(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/react.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(react.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  const reflow = node => node.scrollTop;
  function getTransitionProps(props, options) {
    const {
      timeout,
      style = {}
    } = props;
    return {
      duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
      delay: style.transitionDelay
    };
  }

  function getScale(value) {
    return `scale(${value}, ${value ** 2})`;
  }

  const styles$b = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: 'none'
    }
  };
  /**
   * The Grow transition is used by the [Tooltip](/components/tooltips/) and
   * [Popover](/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  const Grow = /*#__PURE__*/react.forwardRef(function Grow(props, ref) {
    const {
      appear = true,
      children,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = 'auto',
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["appear", "children", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

    const timer = react.useRef();
    const autoTimeout = react.useRef();
    const theme = useTheme$1();
    const nodeRef = react.useRef(null);
    const foreignRef = useForkRef(children.ref, ref);
    const handleRef = useForkRef(nodeRef, foreignRef);

    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const {
        duration: transitionDuration,
        delay
      } = getTransitionProps({
        style,
        timeout
      }, {
        mode: 'enter'
      });
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay
      })].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const {
        duration: transitionDuration,
        delay
      } = getTransitionProps({
        style,
        timeout
      }, {
        mode: 'exit'
      });
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);

    const addEndListener = next => {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }
    };

    react.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/react.createElement(TransitionComponent, _extends({
      appear: appear,
      in: inProp,
      nodeRef: nodeRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: addEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other), (state, childProps) => {
      return /*#__PURE__*/react.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles$b[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    });
  });
  Grow.muiSupportAuto = true;

  function getPaperUtilityClass(slot) {
    return generateUtilityClass('MuiPaper', slot);
  }
  const paperClasses = generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

  const overridesResolver$1 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styles[styleProps.variant], !styleProps.square && styles.rounded, styleProps.variant === 'elevation' && styles[`elevation${styleProps.elevation}`]));
  };

  const useUtilityClasses$2 = styleProps => {
    const {
      square,
      elevation,
      variant,
      classes
    } = styleProps;
    const slots = {
      root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };

  const PaperRoot = experimentalStyled('div', {}, {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: overridesResolver$1
  })(({
    theme,
    styleProps
  }) => {
    return _extends({
      /* Styles applied to the root element. */
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    }, !styleProps.square && {
      borderRadius: theme.shape.borderRadius
    }, styleProps.variant === 'outlined' && {
      border: `1px solid ${theme.palette.divider}`
    }, styleProps.variant === 'elevation' && {
      boxShadow: theme.shadows[styleProps.elevation]
    });
  });
  const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiPaper'
    });

    const {
      className,
      component = 'div',
      elevation = 1,
      square = false,
      variant = 'elevation'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["className", "component", "elevation", "square", "variant"]);

    const styleProps = _extends({}, props, {
      component,
      elevation,
      square,
      variant
    });

    const classes = useUtilityClasses$2(styleProps);

    return /*#__PURE__*/react.createElement(PaperRoot, _extends({
      as: component,
      styleProps: styleProps,
      className: clsx(classes.root, className),
      ref: ref
    }, other));
  });

  function getOffsetTop(rect, vertical) {
    let offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }
  function getOffsetLeft(rect, horizontal) {
    let offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
  } // Sum the scrollTop between two elements.


  function getScrollParent(parent, child) {
    let element = child;
    let scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentElement;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  const styles$c = {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the Paper component. */
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    }
  };
  const Popover = /*#__PURE__*/react.forwardRef(function Popover(props, ref) {
    const {
      action,
      anchorEl,
      anchorOrigin = {
        vertical: 'top',
        horizontal: 'left'
      },
      anchorPosition,
      anchorReference = 'anchorEl',
      children,
      classes,
      className,
      container: containerProp,
      elevation = 8,
      getContentAnchorEl,
      marginThreshold = 16,
      open,
      PaperProps = {},
      transformOrigin = {
        vertical: 'top',
        horizontal: 'left'
      },
      TransitionComponent = Grow,
      transitionDuration: transitionDurationProp = 'auto',
      TransitionProps: {
        onEntering
      } = {}
    } = props,
          TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, ["onEntering"]),
          other = _objectWithoutPropertiesLoose(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

    const paperRef = react.useRef(); // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)

    const getAnchorOffset = react.useCallback(contentAnchorOffset => {
      if (anchorReference === 'anchorPosition') {

        return anchorPosition;
      }

      const resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

      const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
      const anchorRect = anchorElement.getBoundingClientRect();

      const anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

    const getContentAnchorOffset = react.useCallback(element => {
      let contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        const contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          const scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value
      }

      return contentAnchorOffset;
    }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

    const getTransformOrigin = react.useCallback((elemRect, contentAnchorOffset = 0) => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }, [transformOrigin.horizontal, transformOrigin.vertical]);
    const getPositioningStyle = react.useCallback(element => {
      // Check if the parent has requested anchoring on an inner content node
      const contentAnchorOffset = getContentAnchorOffset(element);
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      const elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      } // Get the offset of of the anchoring element


      const anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      const containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }


      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }

      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
    const setPositioningStyles = react.useCallback(() => {
      const element = paperRef.current;

      if (!element) {
        return;
      }

      const positioning = getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    }, [getPositioningStyle]);

    const handleEntering = (element, isAppearing) => {
      if (onEntering) {
        onEntering(element, isAppearing);
      }

      setPositioningStyles();
    };

    react.useEffect(() => {
      if (open) {
        setPositioningStyles();
      }
    });
    react.useImperativeHandle(action, () => open ? {
      updatePosition: () => {
        setPositioningStyles();
      }
    } : null, [open, setPositioningStyles]);
    react.useEffect(() => {
      if (!open) {
        return undefined;
      }

      const handleResize = debounce(() => {
        setPositioningStyles();
      });
      const containerWindow = ownerWindow(anchorEl);
      containerWindow.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
      };
    }, [anchorEl, open, setPositioningStyles]);
    let transitionDuration = transitionDurationProp;

    if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
      transitionDuration = undefined;
    } // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container


    const container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
    return /*#__PURE__*/react.createElement(Modal, _extends({
      container: container,
      open: open,
      ref: ref,
      BackdropProps: {
        invisible: true
      },
      className: clsx(classes.root, className)
    }, other), /*#__PURE__*/react.createElement(TransitionComponent, _extends({
      appear: true,
      in: open,
      timeout: transitionDuration,
      onEntering: handleEntering
    }, TransitionProps), /*#__PURE__*/react.createElement(Paper, _extends({
      elevation: elevation,
      ref: paperRef
    }, PaperProps, {
      className: clsx(classes.paper, PaperProps.className)
    }), children)));
  });
  var Popover$1 = withStyles$1(styles$c, {
    name: 'MuiPopover'
  })(Popover);

  /**
   * @ignore - internal component.
   */

  const ListContext = /*#__PURE__*/react.createContext({});

  function getListUtilityClass(slot) {
    return generateUtilityClass('MuiList', slot);
  }
  const listClasses = generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);

  const overridesResolver$2 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, !styleProps.disablePadding && styles.padding, styleProps.dense && styles.dense, styleProps.subheader && styles.subheader));
  };

  const useUtilityClasses$3 = styleProps => {
    const {
      classes,
      disablePadding,
      dense,
      subheader
    } = styleProps;
    const slots = {
      root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
    };
    return composeClasses(slots, getListUtilityClass, classes);
  };

  const ListRoot = experimentalStyled('ul', {}, {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: overridesResolver$2
  })(({
    styleProps
  }) => _extends({
    /* Styles applied to the root element. */
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  }, !styleProps.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8
  }, styleProps.subheader && {
    paddingTop: 0
  }));
  const List = /*#__PURE__*/react.forwardRef(function List(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiList'
    });

    const {
      children,
      className,
      component = 'ul',
      dense = false,
      disablePadding = false,
      subheader
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "className", "component", "dense", "disablePadding", "subheader"]);

    const context = react.useMemo(() => ({
      dense
    }), [dense]);

    const styleProps = _extends({}, props, {
      component,
      dense,
      disablePadding
    });

    const classes = useUtilityClasses$3(styleProps);
    return /*#__PURE__*/react.createElement(ListContext.Provider, {
      value: context
    }, /*#__PURE__*/react.createElement(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      styleProps: styleProps
    }, other), subheader, children));
  });

  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }

    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }

    return disableListWrap ? null : list.firstChild;
  }

  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }

    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }

    return disableListWrap ? null : list.lastChild;
  }

  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
      return true;
    }

    let text = nextFocus.innerText;

    if (text === undefined) {
      // jsdom doesn't support innerText
      text = nextFocus.textContent;
    }

    text = text.trim().toLowerCase();

    if (text.length === 0) {
      return false;
    }

    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }

    return text.indexOf(textCriteria.keys.join('')) === 0;
  }

  function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

    while (nextFocus) {
      // Prevent infinite loop.
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return;
        }

        wrappedOnce = true;
      } // Same logic as useAutocomplete.js


      const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

      if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
        // Move to the next element.
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return;
      }
    }
  }
  /**
   * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
   * It's exposed to help customization of the [`Menu`](/api/menu/) component if you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   */


  const MenuList = /*#__PURE__*/react.forwardRef(function MenuList(props, ref) {
    const {
      // private
      // eslint-disable-next-line react/prop-types
      actions,
      autoFocus = false,
      autoFocusItem = false,
      children,
      className,
      disabledItemsFocusable = false,
      disableListWrap = false,
      onKeyDown,
      variant = 'selectedMenu'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

    const listRef = react.useRef(null);
    const textCriteriaRef = react.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    useEnhancedEffect(() => {
      if (autoFocus) {
        listRef.current.focus();
      }
    }, [autoFocus]);
    react.useImperativeHandle(actions, () => ({
      adjustStyleForScrollbar: (containerElement, theme) => {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        const noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
        }

        return listRef.current;
      }
    }), []);

    const handleKeyDown = event => {
      const list = listRef.current;
      const key = event.key;
      /**
       * @type {Element} - will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */

      const currentFocus = ownerDocument(list).activeElement;

      if (key === 'ArrowDown') {
        // Prevent scroll of the page
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key === 'Home') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'End') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key.length === 1) {
        const criteria = textCriteriaRef.current;
        const lowerKey = key.toLowerCase();
        const currTime = performance.now();

        if (criteria.keys.length > 0) {
          // Reset
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }

        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

        if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    const handleRef = useForkRef(listRef, ref);
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */

    let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    react.Children.forEach(children, (child, index) => {
      if (! /*#__PURE__*/react.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    const items = react.Children.map(children, (child, index) => {
      if (index === activeItemIndex) {
        const newChildProps = {};

        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }

        if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
          newChildProps.tabIndex = 0;
        }

        return /*#__PURE__*/react.cloneElement(child, newChildProps);
      }

      return child;
    });
    return /*#__PURE__*/react.createElement(List, _extends({
      role: "menu",
      ref: handleRef,
      className: className,
      onKeyDown: handleKeyDown,
      tabIndex: autoFocus ? 0 : -1
    }, other), items);
  });

  const RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
  };
  const LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
  };
  const styles$d = {
    /* Styles applied to the Paper component. */
    paper: {
      // specZ: The maximum height of a simple menu should be one or more rows less than the view
      // height. This ensures a tapable area outside of the simple menu with which to dismiss
      // the menu.
      maxHeight: 'calc(100% - 96px)',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch'
    },

    /* Styles applied to the List component via `MenuList`. */
    list: {
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    }
  };
  const Menu = /*#__PURE__*/react.forwardRef(function Menu(props, ref) {
    const {
      autoFocus = true,
      children,
      classes,
      disableAutoFocusItem = false,
      MenuListProps = {},
      onClose,
      open,
      PaperProps = {},
      PopoverClasses,
      transitionDuration = 'auto',
      variant = 'selectedMenu',
      TransitionProps: {
        onEntering
      } = {}
    } = props,
          TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, ["onEntering"]),
          other = _objectWithoutPropertiesLoose(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant", "TransitionProps"]);

    const theme = useTheme$1();
    const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
    const menuListActionsRef = react.useRef(null);
    const contentAnchorRef = react.useRef(null);

    const getContentAnchorEl = () => contentAnchorRef.current;

    const handleEntering = (element, isAppearing) => {
      if (menuListActionsRef.current) {
        menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
      }

      if (onEntering) {
        onEntering(element, isAppearing);
      }
    };

    const handleListKeyDown = event => {
      if (event.key === 'Tab') {
        event.preventDefault();

        if (onClose) {
          onClose(event, 'tabKeyDown');
        }
      }
    };
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */


    let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    react.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/react.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (variant !== "menu" && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    const items = react.Children.map(children, (child, index) => {
      if (index === activeItemIndex) {
        return /*#__PURE__*/react.cloneElement(child, {
          ref: instance => {
            contentAnchorRef.current = instance;
            setRef(child.ref, instance);
          }
        });
      }

      return child;
    });
    return /*#__PURE__*/react.createElement(Popover$1, _extends({
      getContentAnchorEl: getContentAnchorEl,
      classes: PopoverClasses,
      onClose: onClose,
      anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      PaperProps: _extends({}, PaperProps, {
        classes: _extends({}, PaperProps.classes, {
          root: classes.paper
        })
      }),
      open: open,
      ref: ref,
      transitionDuration: transitionDuration,
      TransitionProps: _extends({
        onEntering: handleEntering
      }, TransitionProps)
    }, other), /*#__PURE__*/react.createElement(MenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem: autoFocusItem,
      variant: variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className)
    }), items));
  });
  var Menu$1 = withStyles$1(styles$d, {
    name: 'MuiMenu'
  })(Menu);

  function areEqualValues(a, b) {
    if (typeof b === 'object' && b !== null) {
      return a === b;
    }

    return String(a) === String(b);
  }

  function isEmpty$3(display) {
    return display == null || typeof display === 'string' && !display.trim();
  }
  /**
   * @ignore - internal component.
   */


  const SelectInput = /*#__PURE__*/react.forwardRef(function SelectInput(props, ref) {
    const {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      autoFocus,
      autoWidth,
      children,
      classes,
      className,
      defaultValue,
      disabled,
      displayEmpty,
      IconComponent,
      inputRef: inputRefProp,
      labelId,
      MenuProps = {},
      multiple,
      name,
      onBlur,
      onChange,
      onClose,
      onFocus,
      onOpen,
      open: openProp,
      readOnly,
      renderValue,
      SelectDisplayProps = {},
      tabIndex: tabIndexProp,
      value: valueProp,
      variant = 'standard'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: 'Select'
    });
    const inputRef = react.useRef(null);
    const displayRef = react.useRef(null);
    const [displayNode, setDisplayNode] = react.useState(null);
    const {
      current: isOpenControlled
    } = react.useRef(openProp != null);
    const [menuMinWidthState, setMenuMinWidthState] = react.useState();
    const [openState, setOpenState] = react.useState(false);
    const handleRef = useForkRef(ref, inputRefProp);
    const handleDisplayRef = react.useCallback(node => {
      displayRef.current = node;

      if (node) {
        setDisplayNode(node);
      }
    }, []);
    react.useImperativeHandle(handleRef, () => ({
      focus: () => {
        displayRef.current.focus();
      },
      node: inputRef.current,
      value
    }), [value]);
    react.useEffect(() => {
      if (autoFocus) {
        displayRef.current.focus();
      }
    }, [autoFocus]);
    react.useEffect(() => {
      const label = ownerDocument(displayRef.current).getElementById(labelId);

      if (label) {
        const handler = () => {
          if (getSelection().isCollapsed) {
            displayRef.current.focus();
          }
        };

        label.addEventListener('click', handler);
        return () => {
          label.removeEventListener('click', handler);
        };
      }

      return undefined;
    }, [labelId]);

    const update = (open, event) => {
      if (open) {
        if (onOpen) {
          onOpen(event);
        }
      } else if (onClose) {
        onClose(event);
      }

      if (!isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
        setOpenState(open);
      }
    };

    const handleMouseDown = event => {
      // Ignore everything but left-click
      if (event.button !== 0) {
        return;
      } // Hijack the default focus behavior.


      event.preventDefault();
      displayRef.current.focus();
      update(true, event);
    };

    const handleClose = event => {
      update(false, event);
    };

    const childrenArray = react.Children.toArray(children); // Support autofill.

    const handleChange = event => {
      const index = childrenArray.map(child => child.props.value).indexOf(event.target.value);

      if (index === -1) {
        return;
      }

      const child = childrenArray[index];
      setValueState(child.props.value);

      if (onChange) {
        onChange(event, child);
      }
    };

    const handleItemClick = child => event => {
      let newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value !== newValue) {
        setValueState(newValue);

        if (onChange) {
          event.persist(); // Preact support, target is read only property on a native event.

          Object.defineProperty(event, 'target', {
            writable: true,
            value: {
              value: newValue,
              name
            }
          });
          onChange(event, child);
        }
      }

      if (!multiple) {
        update(false, event);
      }
    };

    const handleKeyDown = event => {
      if (!readOnly) {
        const validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        'Enter'];

        if (validKeys.indexOf(event.key) !== -1) {
          event.preventDefault();
          update(true, event);
        }
      }
    };

    const open = displayNode !== null && (isOpenControlled ? openProp : openState);

    const handleBlur = event => {
      // if open event.stopImmediatePropagation
      if (!open && onBlur) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value,
            name
          }
        });
        onBlur(event);
      }
    };

    delete other['aria-invalid'];
    let display;
    let displaySingle;
    const displayMultiple = [];
    let computeDisplay = false;

    if (isFilled({
      value
    }) || displayEmpty) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }

    const items = childrenArray.map(child => {
      if (! /*#__PURE__*/react.isValidElement(child)) {
        return null;
      }

      let selected;

      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error( formatMuiErrorMessage(2));
        }

        selected = value.some(v => areEqualValues(v, child.props.value));

        if (selected && computeDisplay) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = areEqualValues(value, child.props.value);

        if (selected && computeDisplay) {
          displaySingle = child.props.children;
        }
      }

      return /*#__PURE__*/react.cloneElement(child, {
        'aria-selected': selected ? 'true' : undefined,
        onClick: handleItemClick(child),
        onKeyUp: event => {
          if (event.key === ' ') {
            // otherwise our MenuItems dispatches a click event
            // it's not behavior of the native <option> and causes
            // the select to close immediately since we open on space keydown
            event.preventDefault();
          }

          if (child.props.onKeyUp) {
            child.props.onKeyUp(event);
          }
        },
        role: 'option',
        selected,
        value: undefined,
        // The value is most likely not a valid HTML attribute.
        'data-value': child.props.value // Instead, we provide it as a data attribute.

      });
    });

    if (computeDisplay) {
      display = multiple ? displayMultiple.join(', ') : displaySingle;
    } // Avoid performing a layout computation in the render method.


    let menuMinWidth = menuMinWidthState;

    if (!autoWidth && isOpenControlled && displayNode) {
      menuMinWidth = displayNode.clientWidth;
    }

    let tabIndex;

    if (typeof tabIndexProp !== 'undefined') {
      tabIndex = tabIndexProp;
    } else {
      tabIndex = disabled ? null : 0;
    }

    const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", _extends({
      ref: handleDisplayRef,
      tabIndex: tabIndex,
      role: "button",
      "aria-disabled": disabled ? 'true' : undefined,
      "aria-expanded": open ? 'true' : undefined,
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus: onFocus
    }, SelectDisplayProps, {
      className: clsx(classes.root, // TODO v5: merge root and select
      classes.select, classes.selectMenu, classes[variant], className, SelectDisplayProps.className, disabled && classes.disabled) // The id is required for proper a11y
      ,
      id: buttonId
    }), isEmpty$3(display) ?
    /*#__PURE__*/
    // notranslate needed while Google Translate will not fix zero-width space issue
    // eslint-disable-next-line react/no-danger
    react.createElement("span", {
      className: "notranslate",
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    }) : display), /*#__PURE__*/react.createElement("input", _extends({
      value: Array.isArray(value) ? value.join(',') : value,
      name: name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled: disabled,
      className: classes.nativeInput,
      autoFocus: autoFocus
    }, other)), /*#__PURE__*/react.createElement(IconComponent, {
      className: clsx(classes.icon, classes[`icon${capitalize(variant)}`], open && classes.iconOpen, disabled && classes.disabled)
    }), /*#__PURE__*/react.createElement(Menu$1, _extends({
      id: `menu-${name || ''}`,
      anchorEl: displayNode,
      open: open,
      onClose: handleClose
    }, MenuProps, {
      MenuListProps: _extends({
        'aria-labelledby': labelId,
        role: 'listbox',
        disableListWrap: true
      }, MenuProps.MenuListProps),
      PaperProps: _extends({}, MenuProps.PaperProps, {
        style: _extends({
          minWidth: menuMinWidth
        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
      })
    }), items));
  });

  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass('MuiSvgIcon', slot);
  }
  const svgIconClasses = generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

  const overridesResolver$3 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styleProps.color !== 'inherit' && styles[`color${capitalize(styleProps.color)}`], styles[`fontSize${capitalize(styleProps.fontSize)}`]));
  };

  const useUtilityClasses$4 = styleProps => {
    const {
      color,
      fontSize,
      classes
    } = styleProps;
    const slots = {
      root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };

  const SvgIconRoot = experimentalStyled('svg', {}, {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: overridesResolver$3
  })(({
    theme,
    styleProps
  }) => ({
    /* Styles applied to the root element. */
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: theme.typography.pxToRem(20),
      medium: theme.typography.pxToRem(24),
      large: theme.typography.pxToRem(35)
    }[styleProps.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      action: theme.palette.action.active,
      error: theme.palette.error.main,
      disabled: theme.palette.action.disabled,
      inherit: undefined
    }[styleProps.color]
  }));
  const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiSvgIcon'
    });

    const {
      children,
      className,
      color = 'inherit',
      component = 'svg',
      fontSize = 'medium',
      htmlColor,
      titleAccess,
      viewBox = '0 0 24 24'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

    const styleProps = _extends({}, props, {
      color,
      component,
      fontSize,
      viewBox
    });

    const classes = useUtilityClasses$4(styleProps);
    return /*#__PURE__*/react.createElement(SvgIconRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      styleProps: styleProps,
      focusable: "false",
      viewBox: viewBox,
      color: htmlColor,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? 'img' : undefined,
      ref: ref
    }, other), children, titleAccess ? /*#__PURE__*/react.createElement("title", null, titleAccess) : null);
  });
  SvgIcon.muiName = 'SvgIcon';

  /**
   * Private module reserved for @material-ui packages.
   */

  function createSvgIcon(path, displayName) {
    const Component = (props, ref) => /*#__PURE__*/react.createElement(SvgIcon, _extends({
      "data-testid": `${displayName}Icon`,
      ref: ref
    }, props), path);

    Component.muiName = SvgIcon.muiName;
    return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
  }

  /**
   * @ignore - internal component.
   */

  var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), 'ArrowDropDown');

  /**
   * @ignore - internal component.
   */

  const NativeSelectInput = /*#__PURE__*/react.forwardRef(function NativeSelectInput(props, ref) {
    const {
      classes,
      className,
      disabled,
      IconComponent,
      inputRef,
      variant = 'standard'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", _extends({
      className: clsx(classes.root, // TODO v5: merge root and select
      classes.select, classes[variant], className, disabled && classes.disabled),
      disabled: disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /*#__PURE__*/react.createElement(IconComponent, {
      className: clsx(classes.icon, classes[`icon${capitalize(variant)}`], disabled && classes.disabled)
    }));
  });

  const styles$e = theme => ({
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      // Bump specificity to allow extending custom inputs
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.4375em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  });
  const defaultInput = /*#__PURE__*/react.createElement(Input$1, null);
  /**
   * An alternative to `<Select native />` with a much smaller bundle size footprint.
   */

  const NativeSelect = /*#__PURE__*/react.forwardRef(function NativeSelect(props, ref) {
    const {
      children,
      classes,
      IconComponent = ArrowDropDownIcon,
      input = defaultInput,
      inputProps
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

    const muiFormControl = useFormControl$1();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['variant']
    });
    return /*#__PURE__*/react.cloneElement(input, _extends({
      // Most of the logic is implemented in `NativeSelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: NativeSelectInput,
      inputProps: _extends({
        children,
        classes,
        IconComponent,
        variant: fcs.variant,
        type: undefined
      }, inputProps, input ? input.props.inputProps : {}),
      ref
    }, other));
  });
  NativeSelect.muiName = 'Select';
  withStyles$1(styles$e, {
    name: 'MuiNativeSelect'
  })(NativeSelect);

  const styles$f = styles$e;

  var _ref = /*#__PURE__*/react.createElement(Input$1, null);

  var _ref2 = /*#__PURE__*/react.createElement(FilledInput$1, null);

  const Select = /*#__PURE__*/react.forwardRef(function Select(props, ref) {
    const {
      autoWidth = false,
      children,
      classes,
      displayEmpty = false,
      IconComponent = ArrowDropDownIcon,
      id,
      input,
      inputProps,
      label,
      labelId,
      labelWidth = 0,
      MenuProps,
      multiple = false,
      native = false,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps,
      variant: variantProps = 'standard'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

    const inputComponent = native ? NativeSelectInput : SelectInput;
    const muiFormControl = useFormControl$1();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['variant']
    });
    const variant = fcs.variant || variantProps;
    const InputComponent = input || {
      standard: _ref,
      outlined: /*#__PURE__*/react.createElement(OutlinedInput$1, {
        label: label,
        labelWidth: labelWidth
      }),
      filled: _ref2
    }[variant];
    return /*#__PURE__*/react.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children,
        IconComponent,
        variant,
        type: undefined,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? mergeClasses({
          baseClasses: classes,
          newClasses: inputProps.classes,
          Component: Select
        }) : classes
      }, input ? input.props.inputProps : {}),
      ref
    }, other));
  });
  Select.muiName = 'Select';
  var Select$1 = withStyles$1(styles$f, {
    name: 'MuiSelect'
  })(Select);

  const variantComponent = {
    standard: Input$1,
    filled: FilledInput$1,
    outlined: OutlinedInput$1
  };
  const styles$g = {
    /* Styles applied to the root element. */
    root: {}
  };
  /**
   * The `TextField` is a convenience wrapper for the most common cases (80%).
   * It cannot be all things to all people, otherwise the API would grow out of control.
   *
   * ## Advanced Configuration
   *
   * It's important to understand that the text field is a simple abstraction
   * on top of the following components:
   *
   * - [FormControl](/api/form-control/)
   * - [InputLabel](/api/input-label/)
   * - [FilledInput](/api/filled-input/)
   * - [OutlinedInput](/api/outlined-input/)
   * - [Input](/api/input/)
   * - [FormHelperText](/api/form-helper-text/)
   *
   * If you wish to alter the props applied to the `input` element, you can do so as follows:
   *
   * ```jsx
   * const inputProps = {
   *   step: 300,
   * };
   *
   * return <TextField id="time" type="time" inputProps={inputProps} />;
   * ```
   *
   * For advanced cases, please look at the source of TextField by clicking on the
   * "Edit this page" button above. Consider either:
   *
   * - using the upper case props for passing values directly to the components
   * - using the underlying components directly as shown in the demos
   */

  const TextField = /*#__PURE__*/react.forwardRef(function TextField(props, ref) {
    const {
      autoComplete,
      autoFocus = false,
      children,
      classes,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"]);

    const InputMore = {};

    if (variant === 'outlined') {
      if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
        InputMore.notched = InputLabelProps.shrink;
      }

      if (label) {
        var _InputLabelProps$requ;

        const displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
        InputMore.label = /*#__PURE__*/react.createElement(react.Fragment, null, label, displayRequired && '\u00a0*');
      }
    }

    if (select) {
      // unset defaults from textbox inputs
      if (!SelectProps || !SelectProps.native) {
        InputMore.id = undefined;
      }

      InputMore['aria-describedby'] = undefined;
    }

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = label && id ? `${id}-label` : undefined;
    const InputComponent = variantComponent[variant];
    const InputElement = /*#__PURE__*/react.createElement(InputComponent, _extends({
      "aria-describedby": helperTextId,
      autoComplete: autoComplete,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      fullWidth: fullWidth,
      multiline: multiline,
      name: name,
      rows: rows,
      maxRows: maxRows,
      minRows: minRows,
      type: type,
      value: value,
      id: id,
      inputRef: inputRef,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      placeholder: placeholder,
      inputProps: inputProps
    }, InputMore, InputProps));
    return /*#__PURE__*/react.createElement(FormControl$1, _extends({
      className: clsx(classes.root, className),
      disabled: disabled,
      error: error,
      fullWidth: fullWidth,
      ref: ref,
      required: required,
      color: color,
      variant: variant
    }, other), label && /*#__PURE__*/react.createElement(InputLabel$1, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps), label), select ? /*#__PURE__*/react.createElement(Select$1, _extends({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react.createElement(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps), helperText));
  });
  var TextField$1 = withStyles$1(styles$g, {
    name: 'MuiTextField'
  })(TextField);

  function t$2(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return "'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n$2(t){return !!t&&!!t[Q$1]}function r$2(t){return !!t&&(function(t){if(!t||"object"!=typeof t)return !1;var n=Object.getPrototypeOf(t);return !n||n===Object.prototype}(t)||Array.isArray(t)||!!t[L$1]||!!t.constructor[L$1]||s(t)||v$1(t))}function i$1(t,n,r){void 0===r&&(r=!1),0===o(t)?(r?Object.keys:Z$2)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t);})):t.forEach((function(r,e){return n(e,r,t)}));}function o(t){var n=t[Q$1];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:s(t)?2:v$1(t)?3:0}function u(t,n){return 2===o(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function a$1(t,n){return 2===o(t)?t.get(n):t[n]}function f$1(t,n,r){var e=o(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r;}function c$2(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function s(t){return X$1&&t instanceof Map}function v$1(t){return q$2&&t instanceof Set}function p$2(t){return t.o||t.t}function l$1(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=tt(t);delete n[Q$1];for(var r=Z$2(n),e=0;e<r.length;e++){var i=r[e],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]});}return Object.create(Object.getPrototypeOf(t),n)}function d$2(t,e){return void 0===e&&(e=!1),y$3(t)||n$2(t)||!r$2(t)?t:(o(t)>1&&(t.set=t.add=t.clear=t.delete=h$1),Object.freeze(t),e&&i$1(t,(function(t,n){return d$2(n,!0)}),!0),t)}function h$1(){t$2(2);}function y$3(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b$1(n){var r=nt[n];return r||t$2(18,n),r}function m$2(t,n){nt[t]||(nt[t]=n);}function _$1(){return U$2}function j$1(t,n){n&&(b$1("Patches"),t.u=[],t.s=[],t.v=n);}function g$2(t){w$1(t),t.p.forEach(S$2),t.p=null;}function w$1(t){t===U$2&&(U$2=t.l);}function O$2(t){return U$2={p:[],l:U$2,h:t,m:!0,_:0}}function S$2(t){var n=t[Q$1];0===n.i||1===n.i?n.j():n.g=!0;}function P$2(n,e){e._=e.p.length;var i=e.p[0],o=void 0!==n&&n!==i;return e.h.O||b$1("ES5").S(e,n,o),o?(i[Q$1].P&&(g$2(e),t$2(4)),r$2(n)&&(n=M$2(e,n),e.l||x$2(e,n)),e.u&&b$1("Patches").M(i[Q$1],n,e.u,e.s)):n=M$2(e,i,[]),g$2(e),e.u&&e.v(e.u,e.s),n!==H$2?n:void 0}function M$2(t,n,r){if(y$3(n))return n;var e=n[Q$1];if(!e)return i$1(n,(function(i,o){return A$2(t,e,n,i,o,r)}),!0),n;if(e.A!==t)return n;if(!e.P)return x$2(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$1(e.k):e.o;i$1(3===e.i?new Set(o):o,(function(n,i){return A$2(t,e,o,n,i,r)})),x$2(t,o,!1),r&&t.u&&b$1("Patches").R(e,r,t.u,t.s);}return e.o}function A$2(e,i,o,a,c,s){if(n$2(c)){var v=M$2(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f$1(o,a,v),!n$2(v))return;e.m=!1;}if(r$2(c)&&!y$3(c)){if(!e.h.N&&e._<1)return;M$2(e,c),i&&i.A.l||x$2(e,c);}}function x$2(t,n,r){void 0===r&&(r=!1),t.h.N&&t.m&&d$2(n,r);}function z$2(t,n){var r=t[Q$1];return (r?p$2(r):t)[n]}function I$2(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r);}}function k$2(t){t.P||(t.P=!0,t.l&&k$2(t.l));}function E$2(t){t.o||(t.o=l$1(t.t));}function R$2(t,n,r){var e=s(n)?b$1("MapSet").T(n,r):v$1(n)?b$1("MapSet").F(n,r):t.O?function(t,n){var r=Array.isArray(t),e={i:r?1:0,A:n?n.A:_$1(),P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=e,o=rt;r&&(i=[e],o=et);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(n,r):b$1("ES5").J(n,r);return (r?r.A:_$1()).p.push(e),e}function D$2(e){return n$2(e)||t$2(22,e),function t(n){if(!r$2(n))return n;var e,u=n[Q$1],c=o(n);if(u){if(!u.P&&(u.i<4||!b$1("ES5").K(u)))return u.t;u.I=!0,e=N$2(n,c),u.I=!1;}else e=N$2(n,c);return i$1(e,(function(n,r){u&&a$1(u.t,n)===r||f$1(e,n,t(r));})),3===c?new Set(e):e}(e)}function N$2(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return l$1(t)}function T$2(){function r(t,n){var r=s[t];return r?r.enumerable=n:s[t]=r={configurable:!0,enumerable:n,get:function(){var n=this[Q$1];return rt.get(n,t)},set:function(n){var r=this[Q$1];rt.set(r,t,n);}},r}function e(t){for(var n=t.length-1;n>=0;n--){var r=t[n][Q$1];if(!r.P)switch(r.i){case 5:a(r)&&k$2(r);break;case 4:o(r)&&k$2(r);}}}function o(t){for(var n=t.t,r=t.k,e=Z$2(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q$1){var a=n[o];if(void 0===a&&!u(n,o))return !0;var f=r[o],s=f&&f[Q$1];if(s?s.t!==a:!c$2(f,a))return !0}}var v=!!n[Q$1];return e.length!==Z$2(n).length+(v?0:1)}function a(t){var n=t.k;if(n.length!==t.t.length)return !0;var r=Object.getOwnPropertyDescriptor(n,n.length-1);return !(!r||r.get)}var s={};m$2("ES5",{J:function(t,n){var e=Array.isArray(t),i=function(t,n){if(t){for(var e=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tt(n);delete o[Q$1];for(var u=Z$2(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,t||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(n),o)}(e,t),o={i:e?5:4,A:n?n.A:_$1(),P:!1,I:!1,D:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q$1,{value:o,writable:!0}),i},S:function(t,r,o){o?n$2(r)&&r[Q$1].A===t&&e(t.p):(t.u&&function t(n){if(n&&"object"==typeof n){var r=n[Q$1];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i$1(o,(function(n){n!==Q$1&&(void 0!==e[n]||u(e,n)?f[n]||t(o[n]):(f[n]=!0,k$2(r)));})),i$1(e,(function(t){void 0!==o[t]||u(o,t)||(f[t]=!1,k$2(r));}));else if(5===c){if(a(r)&&(k$2(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&t(o[l]);}}}}(t.p[0]),e(t.p));},K:function(t){return 4===t.i?o(t):a(t)}});}var G$2,U$2,W$2="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X$1="undefined"!=typeof Map,q$2="undefined"!=typeof Set,B$2="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H$2=W$2?Symbol.for("immer-nothing"):((G$2={})["immer-nothing"]=!0,G$2),L$1=W$2?Symbol.for("immer-draftable"):"__$immer_draftable",Q$1=W$2?Symbol.for("immer-state"):"__$immer_state",Z$2="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(t){var n={};return Z$2(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r);})),n},nt={},rt={get:function(t,n){if(n===Q$1)return t;var e=p$2(t);if(!u(e,n))return function(t,n,r){var e,i=I$2(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.I||!r$2(i)?i:i===z$2(t.t,n)?(E$2(t),t.o[n]=R$2(t.A.h,i,t)):i},has:function(t,n){return n in p$2(t)},ownKeys:function(t){return Reflect.ownKeys(p$2(t))},set:function(t,n,r){var e=I$2(p$2(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=z$2(p$2(t),n),o=null==i?void 0:i[Q$1];if(o&&o.t===r)return t.o[n]=r,t.D[n]=!1,!0;if(c$2(r,i)&&(void 0!==r||u(t.t,n)))return !0;E$2(t),k$2(t);}return t.o[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==z$2(t.t,n)||n in t.t?(t.D[n]=!1,E$2(t),k$2(t)):delete t.D[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=p$2(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.i||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t$2(11);},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t$2(12);}},et={};i$1(rt,(function(t,n){et[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)};})),et.deleteProperty=function(n,r){return rt.deleteProperty.call(this,n[0],r)},et.set=function(n,r,e){return rt.set.call(this,n[0],r,e,n[0])};var it=function(){function e(t){this.O=B$2,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var o=e;e=n;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return (r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&t$2(6),void 0!==i&&"function"!=typeof i&&t$2(7),r$2(n)){var f=O$2(this),c=R$2(this,n,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g$2(f):w$1(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j$1(f,i),P$2(t,f)}),(function(t){throw g$2(f),t})):(j$1(f,i),P$2(a,f))}if(!n||"object"!=typeof n){if((a=e(n))===H$2)return;return void 0===a&&(a=n),this.N&&d$2(a,!0),a}t$2(21,n);},i.produceWithPatches=function(t,n){var r,e,i=this;return "function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n;})),r,e]},i.createDraft=function(e){r$2(e)||t$2(8),n$2(e)&&(e=D$2(e));var i=O$2(this),o=R$2(this,e,void 0);return o[Q$1].C=!0,w$1(i),o},i.finishDraft=function(n,r){var e=n&&n[Q$1];var i=e.A;return j$1(i,r),P$2(void 0,i)},i.setAutoFreeze=function(t){this.N=t;},i.setUseProxies=function(n){n&&!B$2&&t$2(20),this.O=n;},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var o=b$1("Patches").$;return n$2(t)?o(t,r):this.produce(t,(function(t){return o(t,r.slice(e+1))}))},e}(),ot=new it,ut=ot.produce,at$1=ot.produceWithPatches.bind(ot),ft=ot.setAutoFreeze.bind(ot),ct=ot.setUseProxies.bind(ot),st=ot.applyPatches.bind(ot),vt=ot.createDraft.bind(ot),pt=ot.finishDraft.bind(ot);

  function symbolObservablePonyfill(root) {
  	var result;
  	var Symbol = root.Symbol;

  	if (typeof Symbol === 'function') {
  		if (Symbol.observable) {
  			result = Symbol.observable;
  		} else {
  			result = Symbol('observable');
  			Symbol.observable = result;
  		}
  	} else {
  		result = '@@observable';
  	}

  	return result;
  }

  /* global window */

  var root;

  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }

  var result = symbolObservablePonyfill(root);

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };

  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  function isPlainObject$1(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  }

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */

  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;

    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
    }

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }

      return enhancer(createStore)(reducer, preloadedState);
    }

    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }

    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */


    function getState() {
      if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }

      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */


    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected the listener to be a function.');
      }

      if (isDispatching) {
        throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        if (isDispatching) {
          throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
        }

        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */


    function dispatch(action) {
      if (!isPlainObject$1(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }

      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners;

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }

      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */


    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }

      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */


    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new TypeError('Expected the observer to be an object.');
          }

          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }

          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[result] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.


    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[result] = observable, _ref2;
  }

  function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
    return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
  }

  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: ActionTypes.INIT
      });

      if (typeof initialState === 'undefined') {
        throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
      }

      if (typeof reducer(undefined, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === 'undefined') {
        throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */


  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};

    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];

      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }

    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

    var shapeAssertionError;

    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }

    return function combination(state, action) {
      if (state === void 0) {
        state = {};
      }

      if (shapeAssertionError) {
        throw shapeAssertionError;
      }

      var hasChanged = false;
      var nextState = {};

      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);

        if (typeof nextStateForKey === 'undefined') {
          var errorMessage = getUndefinedStateErrorMessage(_key, action);
          throw new Error(errorMessage);
        }

        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }

      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
      return hasChanged ? nextState : state;
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      keys.push.apply(keys, Object.getOwnPropertySymbols(object));
    }

    if (enumerableOnly) keys = keys.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  function compose$1() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }

  /**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */

  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }

    return function (createStore) {
      return function () {
        var store = createStore.apply(void 0, arguments);

        var _dispatch = function dispatch() {
          throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
        };

        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          }
        };
        var chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = compose$1.apply(void 0, chain)(store.dispatch);
        return _objectSpread2({}, store, {
          dispatch: _dispatch
        });
      };
    };
  }

  function defaultEqualityCheck(a, b) {
    return a === b;
  }

  function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }

    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  }

  function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function () {
      if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }

      lastArgs = arguments;
      return lastResult;
    };
  }

  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep;
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }

    return dependencies;
  }

  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }

      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = getDependencies(funcs);

      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++;
        // apply arguments instead of spreading for performance.
        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions));

      // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
      var selector = memoize(function () {
        var params = [];
        var length = dependencies.length;

        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        }

        // apply arguments instead of spreading for performance.
        return memoizedResultFunc.apply(null, params);
      });

      selector.resultFunc = resultFunc;
      selector.dependencies = dependencies;
      selector.recomputations = function () {
        return recomputations;
      };
      selector.resetRecomputations = function () {
        return recomputations = 0;
      };
      return selector;
    };
  }

  var createSelector = createSelectorCreator(defaultMemoize);

  function createThunkMiddleware(extraArgument) {
    return function (_ref) {
      var dispatch = _ref.dispatch,
          getState = _ref.getState;
      return function (next) {
        return function (action) {
          if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
          }

          return next(action);
        };
      };
    };
  }

  var thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  /**
   * @public
   */

  var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0) return undefined;
    if (typeof arguments[0] === 'object') return compose$1;
    return compose$1.apply(null, arguments);
  };

  /**
   * Returns true if the passed value is "plain" object, i.e. an object whose
   * protoype is the root `Object.prototype`. This includes objects created
   * using object literals, but not for instance for class instances.
   *
   * @param {any} value The value to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   *
   * @public
   */
  function isPlainObject$2(value) {
    if (typeof value !== 'object' || value === null) return false;
    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }
  /**
   * @public
   */

  var MiddlewareArray =
  /*#__PURE__*/
  function (_Array) {
    _inheritsLoose$1(MiddlewareArray, _Array);

    function MiddlewareArray() {
      return _Array.apply(this, arguments) || this;
    }

    var _proto = MiddlewareArray.prototype;

    _proto.concat = function concat() {
      var _Array$prototype$conc;

      for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
      }

      return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
    };

    _proto.prepend = function prepend() {
      for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arr[_key2] = arguments[_key2];
      }

      if (arr.length === 1 && Array.isArray(arr[0])) {
        return _construct(MiddlewareArray, arr[0].concat(this));
      }

      return _construct(MiddlewareArray, arr.concat(this));
    };

    return MiddlewareArray;
  }(
  /*#__PURE__*/
  _wrapNativeSuper(Array));

  function isBoolean(x) {
    return typeof x === 'boolean';
  }

  function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
      return getDefaultMiddleware(options);
    };
  }
  /**
   * Returns any array containing the default middleware installed by
   * `configureStore()`. Useful if you want to configure your store with a custom
   * `middleware` array but still keep the default set.
   *
   * @return The default middleware used by `configureStore()`.
   *
   * @public
   */

  function getDefaultMiddleware(options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$thunk = _options.thunk,
        thunk$1 = _options$thunk === void 0 ? true : _options$thunk,
        _options$immutableChe = _options.immutableCheck,
        _options$serializable = _options.serializableCheck;
    var middlewareArray = new MiddlewareArray();

    if (thunk$1) {
      if (isBoolean(thunk$1)) {
        middlewareArray.push(thunk);
      } else {
        middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
      }
    }

    return middlewareArray;
  }

  var IS_PRODUCTION = "production" === 'production';
  /**
   * A friendly abstraction over the standard Redux `createStore()` function.
   *
   * @param config The store configuration.
   * @returns A configured Redux store.
   *
   * @public
   */

  function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

    var _ref = options || {},
        _ref$reducer = _ref.reducer,
        reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
        _ref$middleware = _ref.middleware,
        middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
        _ref$devTools = _ref.devTools,
        devTools = _ref$devTools === void 0 ? true : _ref$devTools,
        _ref$preloadedState = _ref.preloadedState,
        preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
        _ref$enhancers = _ref.enhancers,
        enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

    var rootReducer;

    if (typeof reducer === 'function') {
      rootReducer = reducer;
    } else if (isPlainObject$2(reducer)) {
      rootReducer = combineReducers(reducer);
    } else {
      throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }

    var middlewareEnhancer = applyMiddleware.apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
    var finalCompose = compose$1;

    if (devTools) {
      finalCompose = composeWithDevTools(_extends$1({
        // Enable capture of stack traces for dispatched Redux actions
        trace: !IS_PRODUCTION
      }, typeof devTools === 'object' && devTools));
    }

    var storeEnhancers = [middlewareEnhancer];

    if (Array.isArray(enhancers)) {
      storeEnhancers = [middlewareEnhancer].concat(enhancers);
    } else if (typeof enhancers === 'function') {
      storeEnhancers = enhancers(storeEnhancers);
    }

    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
  }

  function createAction(type, prepareAction) {
    function actionCreator() {
      if (prepareAction) {
        var prepared = prepareAction.apply(void 0, arguments);

        if (!prepared) {
          throw new Error('prepareAction did not return an object');
        }

        return _extends$1({
          type: type,
          payload: prepared.payload
        }, 'meta' in prepared && {
          meta: prepared.meta
        }, {}, 'error' in prepared && {
          error: prepared.error
        });
      }

      return {
        type: type,
        payload: arguments.length <= 0 ? undefined : arguments[0]
      };
    }

    actionCreator.toString = function () {
      return "" + type;
    };

    actionCreator.type = type;

    actionCreator.match = function (action) {
      return action.type === type;
    };

    return actionCreator;
  }

  function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
      addCase: function addCase(typeOrActionCreator, reducer) {

        var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

        if (type in actionsMap) {
          throw new Error('addCase cannot be called with two reducers for the same action type');
        }

        actionsMap[type] = reducer;
        return builder;
      },
      addMatcher: function addMatcher(matcher, reducer) {

        actionMatchers.push({
          matcher: matcher,
          reducer: reducer
        });
        return builder;
      },
      addDefaultCase: function addDefaultCase(reducer) {

        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  }

  function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) {
      actionMatchers = [];
    }

    var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
        actionsMap = _ref[0],
        finalActionMatchers = _ref[1],
        finalDefaultCaseReducer = _ref[2];

    return function (state, action) {
      if (state === void 0) {
        state = initialState;
      }

      var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
        var matcher = _ref2.matcher;
        return matcher(action);
      }).map(function (_ref3) {
        var reducer = _ref3.reducer;
        return reducer;
      }));

      if (caseReducers.filter(function (cr) {
        return !!cr;
      }).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }

      return caseReducers.reduce(function (previousState, caseReducer) {
        if (caseReducer) {
          if (n$2(previousState)) {
            // If it's already a draft, we must already be inside a `createNextState` call,
            // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
            // inside an existing draft. It's safe to just pass the draft to the mutator.
            var draft = previousState; // We can assume this is already a draft

            var result = caseReducer(draft, action);

            if (typeof result === 'undefined') {
              return previousState;
            }

            return result;
          } else if (!r$2(previousState)) {
            // If state is not draftable (ex: a primitive, such as 0), we want to directly
            // return the caseReducer func and not wrap it with produce.
            var _result = caseReducer(previousState, action);

            if (typeof _result === 'undefined') {
              if (previousState === null) {
                return previousState;
              }

              throw Error('A case reducer on a non-draftable value must not return undefined');
            }

            return _result;
          } else {
            // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
            // than an Immutable<S>, and TypeScript cannot find out how to reconcile
            // these two types.
            return ut(previousState, function (draft) {
              return caseReducer(draft, action);
            });
          }
        }

        return previousState;
      }, state);
    };
  }

  function getType$1(slice, actionKey) {
    return slice + "/" + actionKey;
  }
  /**
   * A function that accepts an initial state, an object full of reducer
   * functions, and a "slice name", and automatically generates
   * action creators and action types that correspond to the
   * reducers and state.
   *
   * The `reducer` argument is passed to `createReducer()`.
   *
   * @public
   */


  function createSlice(options) {
    var name = options.name,
        initialState = options.initialState;

    if (!name) {
      throw new Error('`name` is a required option for createSlice');
    }

    var reducers = options.reducers || {};

    var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
        _ref$ = _ref[0],
        extraReducers = _ref$ === void 0 ? {} : _ref$,
        _ref$2 = _ref[1],
        actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
        _ref$3 = _ref[2],
        defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
      var maybeReducerWithPrepare = reducers[reducerName];
      var type = getType$1(name, reducerName);
      var caseReducer;
      var prepareCallback;

      if ('reducer' in maybeReducerWithPrepare) {
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
      } else {
        caseReducer = maybeReducerWithPrepare;
      }

      sliceCaseReducersByName[reducerName] = caseReducer;
      sliceCaseReducersByType[type] = caseReducer;
      actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });

    var finalCaseReducers = _extends$1({}, extraReducers, {}, sliceCaseReducersByType);

    var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    return {
      name: name,
      reducer: reducer,
      actions: actionCreators,
      caseReducers: sliceCaseReducersByName
    };
  }

  // A type of promise-like that resolves synchronously and supports only one observer

  const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

  const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

  // we assume RTK will be used with React Native and other Proxy-less
  // environments.  In addition, that's how Immer 4 behaved, and since
  // we want to ship this in an RTK minor, we should keep the same behavior.

  T$2();

  const slice = createSlice({
    name: 'forms',
    initialState: {
      items: {}
    },
    reducers: {
      setForms: (state, action) => {
        state.items = action.payload;
      },
      setItem: (state, action) => {
        state.items[action.payload.ref] = action.payload.data;
      },
      removeItem: (state, action) => {
        delete state.items[action.payload];
      }
    }
  });
  const selectAllItems = state => state.forms.items;
  const {
    setItem,
    removeItem
  } = slice.actions;

  Object.filter = (obj, predicate) => Object.keys(obj).filter(key => predicate(obj[key])).reduce((res, key) => (res[key] = obj[key], res), {});

  var formsReducer = slice.reducer;

  var ReactReduxContext = /*#__PURE__*/react.createContext(null);

  // Default to a dummy "batch" implementation that just runs the callback
  function defaultNoopBatch(callback) {
    callback();
  }

  var batch = defaultNoopBatch; // Allow injecting another batching function later

  var setBatch = function setBatch(newBatch) {
    return batch = newBatch;
  }; // Supply a getter just to skip dealing with ESM bindings

  var getBatch = function getBatch() {
    return batch;
  };

  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants

  var nullListeners = {
    notify: function notify() {}
  };

  function createListenerCollection() {
    var batch = getBatch();
    var first = null;
    var last = null;
    return {
      clear: function clear() {
        first = null;
        last = null;
      },
      notify: function notify() {
        batch(function () {
          var listener = first;

          while (listener) {
            listener.callback();
            listener = listener.next;
          }
        });
      },
      get: function get() {
        var listeners = [];
        var listener = first;

        while (listener) {
          listeners.push(listener);
          listener = listener.next;
        }

        return listeners;
      },
      subscribe: function subscribe(callback) {
        var isSubscribed = true;
        var listener = last = {
          callback: callback,
          next: null,
          prev: last
        };

        if (listener.prev) {
          listener.prev.next = listener;
        } else {
          first = listener;
        }

        return function unsubscribe() {
          if (!isSubscribed || first === null) return;
          isSubscribed = false;

          if (listener.next) {
            listener.next.prev = listener.prev;
          } else {
            last = listener.prev;
          }

          if (listener.prev) {
            listener.prev.next = listener.next;
          } else {
            first = listener.next;
          }
        };
      }
    };
  }

  var Subscription = /*#__PURE__*/function () {
    function Subscription(store, parentSub) {
      this.store = store;
      this.parentSub = parentSub;
      this.unsubscribe = null;
      this.listeners = nullListeners;
      this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    }

    var _proto = Subscription.prototype;

    _proto.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    _proto.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    _proto.handleChangeWrapper = function handleChangeWrapper() {
      if (this.onStateChange) {
        this.onStateChange();
      }
    };

    _proto.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    _proto.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = createListenerCollection();
      }
    };

    _proto.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  }();

  function Provider(_ref) {
    var store = _ref.store,
        context = _ref.context,
        children = _ref.children;
    var contextValue = react.useMemo(function () {
      var subscription = new Subscription(store);
      subscription.onStateChange = subscription.notifyNestedSubs;
      return {
        store: store,
        subscription: subscription
      };
    }, [store]);
    var previousState = react.useMemo(function () {
      return store.getState();
    }, [store]);
    react.useEffect(function () {
      var subscription = contextValue.subscription;
      subscription.trySubscribe();

      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }

      return function () {
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
      };
    }, [contextValue, previousState]);
    var Context = context || ReactReduxContext;
    return /*#__PURE__*/react.createElement(Context.Provider, {
      value: contextValue
    }, children);
  }

  // To get around it, we can conditionally useEffect on the server (no-op) and
  // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
  // subscription callback always has the selector from the latest render commit
  // available, otherwise a store update may happen between render and the effect,
  // which may cause missed updates; we also must ensure the store subscription
  // is created synchronously, otherwise a store update may occur before the
  // subscription is created and an inconsistent state may be observed

  var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

  /**
   * A hook to access the value of the `ReactReduxContext`. This is a low-level
   * hook that you should usually not need to call directly.
   *
   * @returns {any} the value of the `ReactReduxContext`
   *
   * @example
   *
   * import React from 'react'
   * import { useReduxContext } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const { store } = useReduxContext()
   *   return <div>{store.getState()}</div>
   * }
   */

  function useReduxContext() {
    var contextValue = react.useContext(ReactReduxContext);

    return contextValue;
  }

  /**
   * Hook factory, which creates a `useStore` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useStore` hook bound to the specified context.
   */

  function createStoreHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
      return react.useContext(context);
    };
    return function useStore() {
      var _useReduxContext = useReduxContext$1(),
          store = _useReduxContext.store;

      return store;
    };
  }
  /**
   * A hook to access the redux store.
   *
   * @returns {any} the redux store
   *
   * @example
   *
   * import React from 'react'
   * import { useStore } from 'react-redux'
   *
   * export const ExampleComponent = () => {
   *   const store = useStore()
   *   return <div>{store.getState()}</div>
   * }
   */

  var useStore = /*#__PURE__*/createStoreHook();

  /**
   * Hook factory, which creates a `useDispatch` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useDispatch` hook bound to the specified context.
   */

  function createDispatchHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
    return function useDispatch() {
      var store = useStore$1();
      return store.dispatch;
    };
  }
  /**
   * A hook to access the redux `dispatch` function.
   *
   * @returns {any|function} redux store's `dispatch` function
   *
   * @example
   *
   * import React, { useCallback } from 'react'
   * import { useDispatch } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const dispatch = useDispatch()
   *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
   *   return (
   *     <div>
   *       <span>{value}</span>
   *       <button onClick={increaseCounter}>Increase counter</button>
   *     </div>
   *   )
   * }
   */

  var useDispatch = /*#__PURE__*/createDispatchHook();

  var refEquality = function refEquality(a, b) {
    return a === b;
  };

  function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
    var _useReducer = react.useReducer(function (s) {
      return s + 1;
    }, 0),
        forceRender = _useReducer[1];

    var subscription = react.useMemo(function () {
      return new Subscription(store, contextSub);
    }, [store, contextSub]);
    var latestSubscriptionCallbackError = react.useRef();
    var latestSelector = react.useRef();
    var latestStoreState = react.useRef();
    var latestSelectedState = react.useRef();
    var storeState = store.getState();
    var selectedState;

    try {
      if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
        selectedState = selector(storeState);
      } else {
        selectedState = latestSelectedState.current;
      }
    } catch (err) {
      if (latestSubscriptionCallbackError.current) {
        err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
      }

      throw err;
    }

    useIsomorphicLayoutEffect(function () {
      latestSelector.current = selector;
      latestStoreState.current = storeState;
      latestSelectedState.current = selectedState;
      latestSubscriptionCallbackError.current = undefined;
    });
    useIsomorphicLayoutEffect(function () {
      function checkForUpdates() {
        try {
          var newSelectedState = latestSelector.current(store.getState());

          if (equalityFn(newSelectedState, latestSelectedState.current)) {
            return;
          }

          latestSelectedState.current = newSelectedState;
        } catch (err) {
          // we ignore all errors here, since when the component
          // is re-rendered, the selectors are called again, and
          // will throw again, if neither props nor store state
          // changed
          latestSubscriptionCallbackError.current = err;
        }

        forceRender();
      }

      subscription.onStateChange = checkForUpdates;
      subscription.trySubscribe();
      checkForUpdates();
      return function () {
        return subscription.tryUnsubscribe();
      };
    }, [store, subscription]);
    return selectedState;
  }
  /**
   * Hook factory, which creates a `useSelector` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useSelector` hook bound to the specified context.
   */


  function createSelectorHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
      return react.useContext(context);
    };
    return function useSelector(selector, equalityFn) {
      if (equalityFn === void 0) {
        equalityFn = refEquality;
      }

      var _useReduxContext = useReduxContext$1(),
          store = _useReduxContext.store,
          contextSub = _useReduxContext.subscription;

      var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
      react.useDebugValue(selectedState);
      return selectedState;
    };
  }
  /**
   * A hook to access the redux store's state. This hook takes a selector function
   * as an argument. The selector is called with the store state.
   *
   * This hook takes an optional equality comparison function as the second parameter
   * that allows you to customize the way the selected state is compared to determine
   * whether the component needs to be re-rendered.
   *
   * @param {Function} selector the selector function
   * @param {Function=} equalityFn the function that will be used to determine equality
   *
   * @returns {any} the selected state
   *
   * @example
   *
   * import React from 'react'
   * import { useSelector } from 'react-redux'
   *
   * export const CounterComponent = () => {
   *   const counter = useSelector(state => state.counter)
   *   return <div>{counter}</div>
   * }
   */

  var useSelector = /*#__PURE__*/createSelectorHook();

  setBatch(reactDom.unstable_batchedUpdates);

  function TextInput({
    block,
    blendGlobalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const text = useSelector(selectAllItems)[block.index];
    const useStyles = makeStyles$1(theme => ({
      textField: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();

    const onTextChange = e => {
      const payload = {
        ref: block.ref,
        data: e.target.value
      };
      dispatch(setItem(payload));
    };

    return react.createElement(TextField$1, {
      variant: blendGlobalTheme.variant,
      value: text,
      className: classes.textField,
      label: block.label,
      onChange: onTextChange,
      type: "string"
    });
  }

  function NumberInput({
    block,
    blendGlobalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const text = useSelector(selectAllItems)[block.index];
    const useStyles = makeStyles$1(theme => ({
      numberField: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();

    const onNumberChange = e => {
      const payload = {
        ref: block.ref,
        data: e.target.value
      };
      dispatch(setItem(payload));
    };

    return react.createElement(TextField$1, {
      variant: blendGlobalTheme.variant,
      value: text,
      className: classes.numberField,
      label: block.label,
      onChange: onNumberChange,
      type: "number"
    });
  }

  /**
   * @ignore - internal component.
   */

  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited = () => {},
      timeout
    } = props;
    const [leaving, setLeaving] = react.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    const handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

    useEnhancedEffect(() => {
      if (!inProp) {
        // react-transition-group#onExit
        setLeaving(true); // react-transition-group#onExited

        const timeoutId = setTimeout(handleExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }

      return undefined;
    }, [handleExited, inProp, timeout]);
    return /*#__PURE__*/react.createElement("span", {
      className: rippleClassName,
      style: rippleStyles
    }, /*#__PURE__*/react.createElement("span", {
      className: childClassName
    }));
  }

  const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

  let _$2 = t => t,
      _t,
      _t2,
      _t3,
      _t4;
  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = keyframes(_t || (_t = _$2`
0% {
  transform: scale(0);
  opacity: 0.1;
}
100% {
  transform: scale(1);
  opacity: 0.3;
}
`));
  const exitKeyframe = keyframes(_t2 || (_t2 = _$2`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`));
  const pulsateKeyframe = keyframes(_t3 || (_t3 = _$2`
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.92);
}
100% {
  transform: scale(1);
}
`));
  const TouchRippleRoot = experimentalStyled('span', {}, {
    name: 'MuiTouchRipple',
    slot: 'Root'
  })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  }); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
  // in string templates. Do not convert these styles in JS object as it will break.

  const TouchRippleRipple = experimentalStyled(Ripple, {
    shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'classes'
  }, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
  })(_t4 || (_t4 = _$2`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    left: 0;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
    theme
  }) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
    theme
  }) => theme.transitions.easing.easeInOut);
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  const TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTouchRipple'
    });

    const {
      center: centerProp = false,
      classes = {},
      className
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["center", "classes", "className"]);

    const [ripples, setRipples] = react.useState([]);
    const nextKey = react.useRef(0);
    const rippleCallback = react.useRef(null);
    react.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]); // Used to filter out mouse emulated events on mobile.

    const ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    const startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

    const startTimerCommit = react.useRef(null);
    const container = react.useRef(null);
    react.useEffect(() => {
      return () => {
        clearTimeout(startTimer.current);
      };
    }, []);
    const startCommit = react.useCallback(params => {
      const {
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples(oldRipples => [...oldRipples, /*#__PURE__*/react.createElement(TouchRippleRipple, {
        key: nextKey.current,
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = react.useCallback((event = {}, options = {}, cb) => {
      const {
        pulsate = false,
        center = centerProp || options.pulsate,
        fakeElement = false // For test purposes

      } = options;

      if (event.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }

      if (event.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }

      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      let rippleX;
      let rippleY;
      let rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      } // Touche devices


      if (event.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = () => {
            startCommit({
              pulsate,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          }; // Delay the execution of the ripple effect.


          startTimer.current = setTimeout(() => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        }
      } else {
        startCommit({
          pulsate,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit]);
    const pulsate = react.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = react.useCallback((event, cb) => {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        event.persist();
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(() => {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(oldRipples => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    react.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /*#__PURE__*/react.createElement(TouchRippleRoot, _extends({
      className: clsx(classes.root, touchRippleClasses.root, className),
      ref: container
    }, other), /*#__PURE__*/react.createElement(TransitionGroup, {
      component: null,
      exit: true
    }, ripples));
  });

  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass('MuiButtonBase', slot);
  }
  const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

  const overridesResolver$4 = (props, styles) => styles.root || {};

  const useUtilityClasses$5 = styleProps => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = styleProps;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }

    return composedClasses;
  };

  const ButtonBaseRoot = experimentalStyled('button', {}, {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: overridesResolver$4
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&.Mui-disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  });
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  const ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiButtonBase'
    });

    const {
      action,
      buttonRef: buttonRefProp,
      centerRipple = false,
      children,
      className,
      component = 'button',
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      onBlur,
      onClick,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      onDragLeave,
      tabIndex = 0,
      TouchRippleProps
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["action", "buttonRef", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps"]);

    const buttonRef = react.useRef(null);
    const rippleRef = react.useRef(null);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = react.useState(false);

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    react.useEffect(() => {
      isFocusVisibleRef.current = focusVisible;
    }, [focusVisible, isFocusVisibleRef]);
    react.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    react.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);

    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback(event => {
        if (eventCallback) {
          eventCallback(event);
        }

        const ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    const handleMouseDown = useRippleHandler('start', onMouseDown);
    const handleDragLeave = useRippleHandler('stop', onDragLeave);
    const handleMouseUp = useRippleHandler('stop', onMouseUp);
    const handleMouseLeave = useRippleHandler('stop', event => {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler('start', onTouchStart);
    const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    const handleTouchMove = useRippleHandler('stop', onTouchMove);
    const handleBlur = useRippleHandler('stop', event => {
      handleBlurVisible(event);

      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback(event => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      handleFocusVisible(event);

      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
     * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */


    const keydownRef = react.useRef(false);
    const handleKeyDown = useEventCallback(event => {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        event.persist();
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }

      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback(event => {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        event.persist();
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements


      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;

    if (ComponentProp === 'button' && other.href) {
      ComponentProp = 'a';
    }

    const buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = other.type === undefined ? 'button' : other.type;
      buttonProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !other.href) {
        buttonProps.role = 'button';
      }

      buttonProps['aria-disabled'] = disabled;
    }

    const handleUserRef = useForkRef(buttonRefProp, ref);
    const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    const handleRef = useForkRef(handleUserRef, handleOwnRef);
    const [mountedState, setMountedState] = react.useState(false);
    react.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;

    const styleProps = _extends({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });

    const classes = useUtilityClasses$5(styleProps);
    return /*#__PURE__*/react.createElement(ButtonBaseRoot, _extends({
      as: ComponentProp,
      className: clsx(classes.root, className),
      styleProps: styleProps,
      onBlur: handleBlur,
      onClick: onClick,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex
    }, buttonProps, other), children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    react.createElement(TouchRipple, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null);
  });

  function getIconButtonUtilityClass(slot) {
    return generateUtilityClass('MuiIconButton', slot);
  }
  const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'label']);

  const overridesResolver$5 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styleProps.color !== 'default' && styles[`color${capitalize(styleProps.color)}`], styleProps.edge && styles[`edge${capitalize(styleProps.edge)}`], styles[`size${capitalize(styleProps.size)}`], {
      [`& .${iconButtonClasses.label}`]: styles.label
    }));
  };

  const useUtilityClasses$6 = styleProps => {
    const {
      classes,
      disabled,
      color,
      edge,
      size
    } = styleProps;
    const slots = {
      root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
      label: ['label']
    };
    return composeClasses(slots, getIconButtonUtilityClass, classes);
  };

  const IconButtonRoot = experimentalStyled(ButtonBase, {}, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: overridesResolver$5
  })(({
    theme,
    styleProps
  }) => _extends({
    /* Styles applied to the root element. */
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: '50%',
    overflow: 'visible',
    // Explicitly set the default value to solve a bug on IE11.
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, styleProps.edge === 'start' && {
    marginLeft: styleProps.size === 'small' ? -3 : -12
  }, styleProps.edge === 'end' && {
    marginRight: styleProps.size === 'small' ? -3 : -12
  }), ({
    theme,
    styleProps
  }) => _extends({}, styleProps.color === 'inherit' && {
    color: 'inherit'
  }, styleProps.color === 'primary' && {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, styleProps.color === 'secondary' && {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, styleProps.size === 'small' && {
    padding: 3,
    fontSize: theme.typography.pxToRem(18)
  }, {
    /* Styles applied to the root element if `disabled={true}`. */
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled
    }
  }));
  const IconButtonLabel = experimentalStyled('span', {}, {
    name: 'MuiIconButton',
    slot: 'Label'
  })({
    /* Styles applied to the children container element. */
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  });
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiIconButton'
    });

    const {
      edge = false,
      children,
      className,
      color = 'default',
      disabled = false,
      disableFocusRipple = false,
      size = 'medium'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"]);

    const styleProps = _extends({}, props, {
      edge,
      color,
      disabled,
      disableFocusRipple,
      size
    });

    const classes = useUtilityClasses$6(styleProps);
    return /*#__PURE__*/react.createElement(IconButtonRoot, _extends({
      className: clsx(classes.root, className),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled,
      ref: ref,
      styleProps: styleProps
    }, other), /*#__PURE__*/react.createElement(IconButtonLabel, {
      className: classes.label,
      styleProps: styleProps
    }, children));
  });

  function getSwitchBaseUtilityClass(slot) {
    return generateUtilityClass('PrivateSwitchBase', slot);
  }
  const switchBaseClasses = generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input']);

  const useUtilityClasses$7 = styleProps => {
    const {
      classes,
      checked,
      disabled
    } = styleProps;
    const slots = {
      root: ['root', checked && 'checked', disabled && 'disabled'],
      input: ['input']
    };
    return composeClasses(slots, getSwitchBaseUtilityClass, classes);
  };

  const SwitchBaseRoot = experimentalStyled(IconButton, {}, {
    name: 'PrivateSwitchBase',
    slot: 'Root'
  })({
    /* Styles applied to the root element. */
    padding: 9
  });
  const SwitchBaseInput = experimentalStyled('input', {}, {
    name: 'PrivateSwitchBase',
    slot: 'Input'
  })({
    /* Styles applied to the internal input element. */
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  });
  /**
   * @ignore - internal component.
   */

  const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
    const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      className,
      defaultChecked,
      disabled: disabledProp,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required,
      tabIndex,
      type,
      value
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: 'SwitchBase',
      state: 'checked'
    });
    const muiFormControl = useFormControl$1();

    const handleFocus = event => {
      if (onFocus) {
        onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    const handleBlur = event => {
      if (onBlur) {
        onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    const handleInputChange = event => {
      // Workaround for https://github.com/facebook/react/issues/9023
      if (event.nativeEvent.defaultPrevented) {
        return;
      }

      const newChecked = event.target.checked;
      setCheckedState(newChecked);

      if (onChange) {
        // TODO v5: remove the second argument.
        onChange(event, newChecked);
      }
    };

    let disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    const hasLabelFor = type === 'checkbox' || type === 'radio';

    const styleProps = _extends({}, props, {
      checked,
      disabled
    });

    const classes = useUtilityClasses$7(styleProps);
    return /*#__PURE__*/react.createElement(SwitchBaseRoot, _extends({
      component: "span",
      className: clsx(classes.root, className),
      disabled: disabled,
      tabIndex: null,
      role: undefined,
      onFocus: handleFocus,
      onBlur: handleBlur,
      styleProps: styleProps,
      ref: ref
    }, other), /*#__PURE__*/react.createElement(SwitchBaseInput, _extends({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      styleProps: styleProps,
      tabIndex: tabIndex,
      type: type,
      value: value
    }, inputProps)), checked ? checkedIcon : icon);
  }); // NB: If changed, please update Checkbox, Switch and Radio

  /**
   * @ignore - internal component.
   */

  var CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), 'CheckBoxOutlineBlank');

  /**
   * @ignore - internal component.
   */

  var CheckBoxIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), 'CheckBox');

  /**
   * @ignore - internal component.
   */

  var IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), 'IndeterminateCheckBox');

  const styles$h = theme => ({
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked, &$indeterminate': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked, &$indeterminate': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  });
  const defaultCheckedIcon = /*#__PURE__*/react.createElement(CheckBoxIcon, null);
  const defaultIcon = /*#__PURE__*/react.createElement(CheckBoxOutlineBlankIcon, null);
  const defaultIndeterminateIcon = /*#__PURE__*/react.createElement(IndeterminateCheckBoxIcon, null);
  const Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(props, ref) {
    const {
      checkedIcon = defaultCheckedIcon,
      classes,
      color = 'secondary',
      icon: iconProp = defaultIcon,
      indeterminate = false,
      indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
      inputProps,
      size = 'medium'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);

    const icon = indeterminate ? indeterminateIconProp : iconProp;
    const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
    return /*#__PURE__*/react.createElement(SwitchBase, _extends({
      type: "checkbox",
      classes: {
        root: clsx(classes.root, classes[`color${capitalize(color)}`], indeterminate && classes.indeterminate),
        checked: classes.checked,
        disabled: classes.disabled
      },
      color: color,
      inputProps: _extends({
        'data-indeterminate': indeterminate
      }, inputProps),
      icon: /*#__PURE__*/react.cloneElement(icon, {
        fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
      }),
      checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
      }),
      ref: ref
    }, other));
  });
  var Checkbox$1 = withStyles$1(styles$h, {
    name: 'MuiCheckbox'
  })(Checkbox);

  function getTypographyUtilityClass(slot) {
    return generateUtilityClass('MuiTypography', slot);
  }
  const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorTextPrimary', 'colorTextSecondary', 'colorError', 'displayInline', 'displayBlock']);

  const getTextColor = (color, palette) => {
    if (color.indexOf('text') === 0) {
      return palette.text[color.split('text').pop().toLowerCase()];
    }

    if (color === 'inherit' || color === 'initial') {
      return color;
    }

    return palette[color].main;
  };

  const overridesResolver$6 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styleProps.variant && styles[styleProps.variant], styleProps.color && styles[`color${capitalize(styleProps.color)}`], styleProps.align && styles[`align${capitalize(styleProps.align)}`], styleProps.display && styles[`display${capitalize(styleProps.display)}`], styleProps.noWrap && styles.noWrap, styleProps.gutterBottom && styles.gutterBottom, styleProps.paragraph && styles.paragraph));
  };

  const TypographyRoot = experimentalStyled('span', {}, {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: overridesResolver$6
  })(({
    theme,
    styleProps
  }) => _extends({
    margin: 0
  }, styleProps.variant && theme.typography[styleProps.variant], styleProps.align !== 'inherit' && {
    textAlign: styleProps.align
  }, styleProps.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, styleProps.gutterBottom && {
    marginBottom: '0.35em'
  }, styleProps.paragraph && {
    marginBottom: 16
  }, styleProps.color && styleProps.color !== 'initial' && {
    color: getTextColor(styleProps.color, theme.palette)
  }, styleProps.display !== 'initial' && {
    display: styleProps.display
  }));
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  };

  const useUtilityClasses$8 = styleProps => {
    const {
      align,
      color,
      display,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = styleProps;
    const slots = {
      root: ['root', variant, `color${capitalize(color)}`, `align${capitalize(align)}`, `display${capitalize(display)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };

  const Typography = /*#__PURE__*/react.forwardRef(function Typography(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTypography'
    });

    const {
      align = 'inherit',
      className,
      color = 'initial',
      component,
      display = 'initial',
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      variantMapping = defaultVariantMapping
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["align", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

    const styleProps = _extends({}, props, {
      align,
      className,
      color,
      component,
      display,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    });

    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses$8(styleProps);
    return /*#__PURE__*/react.createElement(TypographyRoot, _extends({
      as: Component,
      ref: ref,
      styleProps: styleProps,
      className: clsx(classes.root, className)
    }, other));
  });

  const styles$i = theme => ({
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  });
  /**
   * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
   * Use this component if you want to display an extra label.
   */

  const FormControlLabel = /*#__PURE__*/react.forwardRef(function FormControlLabel(props, ref) {
    const {
      classes,
      className,
      control,
      disabled: disabledProp,
      label,
      labelPlacement = 'end'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

    const muiFormControl = useFormControl$1();
    let disabled = disabledProp;

    if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
      disabled = control.props.disabled;
    }

    if (typeof disabled === 'undefined' && muiFormControl) {
      disabled = muiFormControl.disabled;
    }

    const controlProps = {
      disabled
    };
    ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
      if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
        controlProps[key] = props[key];
      }
    });
    return /*#__PURE__*/react.createElement("label", _extends({
      className: clsx(classes.root, className, labelPlacement !== 'end' && classes[`labelPlacement${capitalize(labelPlacement)}`], disabled && classes.disabled),
      ref: ref
    }, other), /*#__PURE__*/react.cloneElement(control, controlProps), /*#__PURE__*/react.createElement(Typography, {
      component: "span",
      className: clsx(classes.label, disabled && classes.disabled)
    }, label));
  });
  var FormControlLabel$1 = withStyles$1(styles$i, {
    name: 'MuiFormControlLabel'
  })(FormControlLabel);

  function CustomCheckbox({
    block,
    globalTheme,
    blend
  }) {
    const useStyles = makeStyles$1(theme => ({
      numberField: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();
    const checked = useSelector(selectAllItems)[block.index];
    const dispatch = useDispatch();

    const onCheckBoxChange = e => {
      const payload = {
        ref: block.ref,
        data: e.target.checked
      };
      dispatch(setItem(payload));
    };

    return react.createElement(FormControlLabel$1, {
      control: react.createElement(Checkbox$1, {
        checked: checked,
        onChange: onCheckBoxChange,
        name: "checkedB",
        color: "primary"
      }),
      label: block.label
    });
  }

  function _extends$2() {
    _extends$2 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$2.apply(this, arguments);
  }

  var top$1 = 'top';
  var bottom$1 = 'bottom';
  var right$1 = 'right';
  var left$1 = 'left';
  var auto = 'auto';
  var basePlacements = [top$1, bottom$1, right$1, left$1];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  /*:: import type { Window } from '../types'; */

  /*:: declare function getWindow(node: Node | Window): Window; */
  function getWindow(node) {
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
    Element); */

  function isElement$1(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
    HTMLElement); */


  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  /*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
    ShadowRoot); */


  function isShadowRoot(node) {
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  // Returns the layout rect of an element relative to its offsetParent. Layout
  // means it doesn't take into account transforms.
  function getLayoutRect(element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      // $FlowFixMe[incompatible-return]: need a better way to handle this...
      element.host || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    var offsetParent = element.offsetParent;

    if (offsetParent) {
      var html = getDocumentElement(offsetParent);

      if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
        return html;
      }
    }

    return offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.

      if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min, value, max) {
    return Math.max(min, Math.min(value, max));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left$1, right$1].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = state.modifiersData[name + "#persistent"].padding;
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top$1 : left$1;
    var maxProp = axis === 'y' ? bottom$1 : right$1;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
        _options$padding = options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {

      return;
    }

    state.elements.arrow = arrowElement;
    state.modifiersData[name + "#persistent"] = {
      padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
    };
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: Math.round(x * dpr) / dpr || 0,
      y: Math.round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left$1;
    var sideY = top$1;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      /*:: offsetParent = (offsetParent: Element); */


      if (placement === top$1) {
        sideY = bottom$1;
        y -= offsetParent.clientHeight - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left$1) {
        sideX = right$1;
        x -= offsetParent.clientWidth - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect$2(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$2,
    data: {}
  };

  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  var hash$1 = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash$1[matched];
    });
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = element.ownerDocument.body;
    var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent$1(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent$1(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent$1(element);
    var isBody = getNodeName(scrollParent) === 'body';
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign(Object.assign({}, rect), {}, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement$1(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = Math.max(rect.top, accRect.top);
      accRect.right = Math.min(rect.right, accRect.right);
      accRect.bottom = Math.min(rect.bottom, accRect.bottom);
      accRect.left = Math.max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top$1:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom$1:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right$1:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left$1:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right$1, bottom$1].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top$1, bottom$1].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  /*:: type OverflowsMap = { [ComputedPlacement]: number }; */

  /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top$1, bottom$1].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right$1 : left$1 : isStartVariation ? bottom$1 : top$1;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top$1, right$1, bottom$1, left$1].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left$1, top$1].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left$1, right$1].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var mainSide = mainAxis === 'y' ? top$1 : left$1;
      var altSide = mainAxis === 'y' ? bottom$1 : right$1;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min = popperOffsets[mainAxis] + overflow[mainSide];
      var max = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top$1 : left$1;

      var _altSide = mainAxis === 'x' ? bottom$1 : right$1;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(_min, _offset, _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order$1(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order$1(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce$1(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
        options: Object.assign(Object.assign({}, existing.options), current.options),
        data: Object.assign(Object.assign({}, existing.data), current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
          state.scrollParents = {
            reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce$1(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  function flipPlacement(placement, theme) {
    const direction = theme && theme.direction || 'ltr';

    if (direction === 'ltr') {
      return placement;
    }

    switch (placement) {
      case 'bottom-end':
        return 'bottom-start';

      case 'bottom-start':
        return 'bottom-end';

      case 'top-end':
        return 'top-start';

      case 'top-start':
        return 'top-end';

      default:
        return placement;
    }
  }

  function getAnchorEl$1(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  const defaultPopperOptions = {};
  /**
   * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
   */

  const Popper = /*#__PURE__*/react.forwardRef(function Popper(props, ref) {
    const {
      anchorEl,
      children,
      container,
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open,
      placement: initialPlacement = 'bottom',
      popperOptions = defaultPopperOptions,
      popperRef: popperRefProp,
      style,
      transition = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);

    const tooltipRef = react.useRef(null);
    const ownRef = useForkRef(tooltipRef, ref);
    const popperRef = react.useRef(null);
    const handlePopperRef = useForkRef(popperRef, popperRefProp);
    const handlePopperRefRef = react.useRef(handlePopperRef);
    useEnhancedEffect(() => {
      handlePopperRefRef.current = handlePopperRef;
    }, [handlePopperRef]);
    react.useImperativeHandle(popperRefProp, () => popperRef.current, []);
    const [exited, setExited] = react.useState(true);
    const theme = useTheme();
    const rtlPlacement = flipPlacement(initialPlacement, theme);
    /**
     * placement initialized from prop but can change during lifetime if modifiers.flip.
     * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
     */

    const [placement, setPlacement] = react.useState(rtlPlacement);
    react.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.forceUpdate();
      }
    });
    const handleOpen = react.useCallback(() => {
      if (!tooltipRef.current || !anchorEl || !open) {
        return;
      }

      if (popperRef.current) {
        popperRef.current.destroy();
        handlePopperRefRef.current(null);
      }

      const handlePopperUpdate = data => {
        setPlacement(data.placement);
      };

      const resolvedAnchorEl = getAnchorEl$1(anchorEl);

      let popperModifiers = [{
        name: 'preventOverflow',
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: 'flip',
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: 'onUpdate',
        enabled: true,
        phase: 'afterWrite',
        fn: ({
          state
        }) => {
          handlePopperUpdate(state);
        }
      }];

      if (modifiers != null) {
        popperModifiers = popperModifiers.concat(modifiers);
      }

      if (popperOptions && popperOptions.modifiers != null) {
        popperModifiers = popperModifiers.concat(popperOptions.modifiers);
      }

      const popper = createPopper(getAnchorEl$1(anchorEl), tooltipRef.current, _extends({
        placement: rtlPlacement
      }, popperOptions, {
        modifiers: popperModifiers
      }));
      handlePopperRefRef.current(popper);
    }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
    const handleRef = react.useCallback(node => {
      setRef(ownRef, node);
      handleOpen();
    }, [ownRef, handleOpen]);

    const handleEnter = () => {
      setExited(false);
    };

    const handleClose = () => {
      if (!popperRef.current) {
        return;
      }

      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    };

    const handleExited = () => {
      setExited(true);
      handleClose();
    };

    react.useEffect(() => {
      return () => {
        handleClose();
      };
    }, []);
    react.useEffect(() => {
      if (!open && !transition) {
        // Otherwise handleExited will call this.
        handleClose();
      }
    }, [open, transition]);

    if (!keepMounted && !open && (!transition || exited)) {
      return null;
    }

    const childProps = {
      placement
    };

    if (transition) {
      childProps.TransitionProps = {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
      };
    }

    return /*#__PURE__*/react.createElement(Portal$1, {
      disablePortal: disablePortal,
      container: container
    }, /*#__PURE__*/react.createElement("div", _extends({
      ref: handleRef,
      role: "tooltip"
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: !open && keepMounted && !transition ? 'none' : null
      }, style)
    }), typeof children === 'function' ? children(childProps) : children));
  });

  function getListSubheaderUtilityClass(slot) {
    return generateUtilityClass('MuiListSubheader', slot);
  }
  const listSubheaderClasses = generateUtilityClasses('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);

  const overridesResolver$7 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styleProps.color !== 'default' && styles[`color${capitalize(styleProps.color)}`], !styleProps.disableGutters && styles.gutters, styleProps.inset && styles.inset, !styleProps.disableSticky && styles.sticky));
  };

  const useUtilityClasses$9 = styleProps => {
    const {
      classes,
      color,
      disableGutters,
      inset,
      disableSticky
    } = styleProps;
    const slots = {
      root: ['root', color !== 'default' && `color${capitalize(color)}`, !disableGutters && 'gutters', inset && 'inset', !disableSticky && 'sticky']
    };
    return composeClasses(slots, getListSubheaderUtilityClass, classes);
  };

  const ListSubheaderRoot = experimentalStyled('li', {}, {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: overridesResolver$7
  })(({
    theme,
    styleProps
  }) => _extends({
    /* Styles applied to the root element. */
    boxSizing: 'border-box',
    lineHeight: '48px',
    listStyle: 'none',
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  }, styleProps.color === 'primary' && {
    color: theme.palette.primary.main
  }, styleProps.color === 'inherit' && {
    color: 'inherit'
  }, !styleProps.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, styleProps.inset && {
    paddingLeft: 72
  }, !styleProps.disableSticky && {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: 'inherit'
  }));
  const ListSubheader = /*#__PURE__*/react.forwardRef(function ListSubheader(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiListSubheader'
    });

    const {
      className,
      color = 'default',
      component = 'li',
      disableGutters = false,
      disableSticky = false,
      inset = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["className", "color", "component", "disableGutters", "disableSticky", "inset"]);

    const styleProps = _extends({}, props, {
      color,
      component,
      disableGutters,
      disableSticky,
      inset
    });

    const classes = useUtilityClasses$9(styleProps);
    return /*#__PURE__*/react.createElement(ListSubheaderRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      styleProps: styleProps
    }, other));
  });

  /**
   * @ignore - internal component.
   */

  var CancelIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), 'Cancel');

  const styles$j = theme => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
    const deleteIconColor = alpha(theme.palette.text.primary, 0.26);
    return {
      /* Styles applied to the root element. */
      root: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        color: theme.palette.getContrastText(backgroundColor),
        backgroundColor,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(['background-color', 'box-shadow']),
        // label will inherit this from root, then `clickable` class overrides this for both
        cursor: 'default',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: 'none',
        border: 'none',
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        '&$disabled': {
          opacity: theme.palette.action.disabledOpacity,
          pointerEvents: 'none'
        },
        '& $avatar': {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
          fontSize: theme.typography.pxToRem(12)
        },
        '& $avatarColorPrimary': {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.dark
        },
        '& $avatarColorSecondary': {
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.dark
        },
        '& $avatarSmall': {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: theme.typography.pxToRem(10)
        }
      },

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        height: 24
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
      clickable: {
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        cursor: 'pointer',
        '&:hover, &$focusVisible': {
          backgroundColor: emphasize(backgroundColor, 0.08)
        },
        '&:active': {
          boxShadow: theme.shadows[1]
        }
      },

      /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
      clickableColorPrimary: {
        '&:hover, &$focusVisible': {
          backgroundColor: emphasize(theme.palette.primary.main, 0.08)
        }
      },

      /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
      clickableColorSecondary: {
        '&:hover, &$focusVisible': {
          backgroundColor: emphasize(theme.palette.secondary.main, 0.08)
        }
      },

      /* Styles applied to the root element if `onDelete` is defined. */
      deletable: {
        '&$focusVisible': {
          backgroundColor: emphasize(backgroundColor, 0.08)
        }
      },

      /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
      deletableColorPrimary: {
        '&$focusVisible': {
          backgroundColor: emphasize(theme.palette.primary.main, 0.2)
        }
      },

      /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
      deletableColorSecondary: {
        '&$focusVisible': {
          backgroundColor: emphasize(theme.palette.secondary.main, 0.2)
        }
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
        '&$focusVisible, $clickable&:hover': {
          backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
        },
        '& $avatar': {
          marginLeft: 4
        },
        '& $avatarSmall': {
          marginLeft: 2
        },
        '& $icon': {
          marginLeft: 4
        },
        '& $iconSmall': {
          marginLeft: 2
        },
        '& $deleteIcon': {
          marginRight: 5
        },
        '& $deleteIconSmall': {
          marginRight: 3
        }
      },

      /* Styles applied to the root element if `variant="filled"`. */
      filled: {},

      /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        '&$focusVisible, $clickable&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {
        color: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        '&$focusVisible, $clickable&:hover': {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
        }
      },
      // TODO v5: remove

      /* Styles applied to the avatar element. */
      avatar: {},

      /* Styles applied to the avatar element if `size="small"`. */
      avatarSmall: {},

      /* Styles applied to the avatar element if `color="primary"`. */
      avatarColorPrimary: {},

      /* Styles applied to the avatar element if `color="secondary"`. */
      avatarColorSecondary: {},

      /* Styles applied to the icon element. */
      icon: {
        color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        marginLeft: 5,
        marginRight: -6
      },

      /* Styles applied to the icon element if `size="small"`. */
      iconSmall: {
        fontSize: 18,
        marginLeft: 4,
        marginRight: -4
      },

      /* Styles applied to the icon element if `color="primary"`. */
      iconColorPrimary: {
        color: 'inherit'
      },

      /* Styles applied to the icon element if `color="secondary"`. */
      iconColorSecondary: {
        color: 'inherit'
      },

      /* Styles applied to the label `span` element. */
      label: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: 'nowrap'
      },

      /* Styles applied to the label `span` element if `size="small"`. */
      labelSmall: {
        paddingLeft: 8,
        paddingRight: 8
      },

      /* Styles applied to the deleteIcon element. */
      deleteIcon: {
        WebkitTapHighlightColor: 'transparent',
        color: deleteIconColor,
        fontSize: 22,
        cursor: 'pointer',
        margin: '0 5px 0 -6px',
        '&:hover': {
          color: alpha(deleteIconColor, 0.4)
        }
      },

      /* Styles applied to the deleteIcon element if `size="small"`. */
      deleteIconSmall: {
        fontSize: 16,
        marginRight: 4,
        marginLeft: -4
      },

      /* Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. */
      deleteIconColorPrimary: {
        color: alpha(theme.palette.primary.contrastText, 0.7),
        '&:hover, &:active': {
          color: theme.palette.primary.contrastText
        }
      },

      /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. */
      deleteIconColorSecondary: {
        color: alpha(theme.palette.secondary.contrastText, 0.7),
        '&:hover, &:active': {
          color: theme.palette.secondary.contrastText
        }
      },

      /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
      deleteIconOutlinedColorPrimary: {
        color: alpha(theme.palette.primary.main, 0.7),
        '&:hover, &:active': {
          color: theme.palette.primary.main
        }
      },

      /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
      deleteIconOutlinedColorSecondary: {
        color: alpha(theme.palette.secondary.main, 0.7),
        '&:hover, &:active': {
          color: theme.palette.secondary.main
        }
      },

      /* Pseudo-class applied to the root element if keyboard focused. */
      focusVisible: {}
    };
  };

  function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
  }
  /**
   * Chips represent complex entities in small blocks, such as a contact.
   */


  const Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
    const {
      avatar: avatarProp,
      classes,
      className,
      clickable: clickableProp,
      color = 'default',
      component: ComponentProp,
      deleteIcon: deleteIconProp,
      disabled = false,
      icon: iconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      onKeyUp,
      size = 'medium',
      variant = 'filled'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

    const chipRef = react.useRef(null);
    const handleRef = useForkRef(chipRef, ref);

    const handleDeleteIconClick = event => {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();

      if (onDelete) {
        onDelete(event);
      }
    };

    const handleKeyDown = event => {
      // Ignore events from children of `Chip`.
      if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
        // will be handled in keyUp, otherwise some browsers
        // might init navigation
        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    const handleKeyUp = event => {
      // Ignore events from children of `Chip`.
      if (event.currentTarget === event.target) {
        if (onDelete && isDeleteKeyboardEvent(event)) {
          onDelete(event);
        } else if (event.key === 'Escape' && chipRef.current) {
          chipRef.current.blur();
        }
      }

      if (onKeyUp) {
        onKeyUp(event);
      }
    };

    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const small = size === 'small';
    const Component = ComponentProp || (clickable || onDelete ? ButtonBase : 'div');
    const moreProps = Component === ButtonBase ? {
      component: 'div',
      focusVisibleClassName: classes.focusVisible,
      disableRipple: Boolean(onDelete)
    } : {};
    let deleteIcon = null;

    if (onDelete) {
      const customClasses = clsx(color !== 'default' && (variant === 'outlined' ? classes[`deleteIconOutlinedColor${capitalize(color)}`] : classes[`deleteIconColor${capitalize(color)}`]), small && classes.deleteIconSmall);
      deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
        className: clsx(deleteIconProp.props.className, classes.deleteIcon, customClasses),
        onClick: handleDeleteIconClick
      }) : /*#__PURE__*/react.createElement(CancelIcon, {
        className: clsx(classes.deleteIcon, customClasses),
        onClick: handleDeleteIconClick
      });
    }

    let avatar = null;

    if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
      avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
        className: clsx(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes[`avatarColor${capitalize(color)}`])
      });
    }

    let icon = null;

    if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
      icon = /*#__PURE__*/react.cloneElement(iconProp, {
        className: clsx(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes[`iconColor${capitalize(color)}`])
      });
    }

    const themeVariantsClasses = useThemeVariants(_extends({}, props, {
      clickable,
      color,
      disabled,
      size,
      variant
    }), 'MuiChip');
    return /*#__PURE__*/react.createElement(Component, _extends({
      className: clsx(classes.root, classes[variant], themeVariantsClasses, className, color !== 'default' && [classes[`color${capitalize(color)}`], clickable && classes[`clickableColor${capitalize(color)}`], onDelete && classes[`deletableColor${capitalize(color)}`]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable, variant === 'outlined' && {
        'primary': classes.outlinedPrimary,
        'secondary': classes.outlinedSecondary
      }[color]),
      disabled: clickable && disabled ? true : undefined,
      onClick: onClick,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      ref: handleRef
    }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
      className: clsx(classes.label, small && classes.labelSmall)
    }, label), deleteIcon);
  });
  var Chip$1 = withStyles$1(styles$j, {
    name: 'MuiChip'
  })(Chip);

  /**
   * @ignore - internal component.
   *
   * Alias to `Clear`.
   */

  var ClearIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), 'Close');

  // Give up on IE11 support for this feature

  function stripDiacritics(string) {
    return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
  }

  function createFilterOptions(config = {}) {
    const {
      ignoreAccents = true,
      ignoreCase = true,
      limit,
      matchFrom = 'any',
      stringify,
      trim = false
    } = config;
    return (options, {
      inputValue,
      getOptionLabel
    }) => {
      let input = trim ? inputValue.trim() : inputValue;

      if (ignoreCase) {
        input = input.toLowerCase();
      }

      if (ignoreAccents) {
        input = stripDiacritics(input);
      }

      const filteredOptions = options.filter(option => {
        let candidate = (stringify || getOptionLabel)(option);

        if (ignoreCase) {
          candidate = candidate.toLowerCase();
        }

        if (ignoreAccents) {
          candidate = stripDiacritics(candidate);
        }

        return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
      });
      return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
    };
  } // To replace with .findIndex() once we stop IE11 support.

  function findIndex(array, comp) {
    for (let i = 0; i < array.length; i += 1) {
      if (comp(array[i])) {
        return i;
      }
    }

    return -1;
  }

  const defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

  const pageSize = 5;
  function useAutocomplete(props) {
    const {
      autoComplete = false,
      autoHighlight = false,
      autoSelect = false,
      blurOnSelect = false,
      clearOnBlur = !props.freeSolo,
      clearOnEscape = false,
      componentName = 'useAutocomplete',
      defaultValue = props.multiple ? [] : null,
      disableClearable = false,
      disableCloseOnSelect = false,
      disabledItemsFocusable = false,
      disableListWrap = false,
      filterOptions = defaultFilterOptions,
      filterSelectedOptions = false,
      freeSolo = false,
      getOptionDisabled,
      getOptionLabel: getOptionLabelProp = option => {
        var _option$label;

        return (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option;
      },
      getOptionSelected = (option, value) => option === value,
      groupBy,
      handleHomeEndKeys = !props.freeSolo,
      id: idProp,
      includeInputInList = false,
      inputValue: inputValueProp,
      multiple = false,
      onChange,
      onClose,
      onHighlightChange,
      onInputChange,
      onOpen,
      open: openProp,
      openOnFocus = false,
      options,
      selectOnFocus = !props.freeSolo,
      value: valueProp
    } = props;
    const id = useId(idProp);
    let getOptionLabel = getOptionLabelProp;

    getOptionLabel = option => {
      const optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {

        return String(optionLabel);
      }

      return optionLabel;
    };

    const ignoreFocus = react.useRef(false);
    const firstFocus = react.useRef(true);
    const inputRef = react.useRef(null);
    const listboxRef = react.useRef(null);
    const [anchorEl, setAnchorEl] = react.useState(null);
    const [focusedTag, setFocusedTag] = react.useState(-1);
    const defaultHighlighted = autoHighlight ? 0 : -1;
    const highlightedIndexRef = react.useRef(defaultHighlighted);
    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: componentName
    });
    const [inputValue, setInputValueState] = useControlled({
      controlled: inputValueProp,
      default: '',
      name: componentName,
      state: 'inputValue'
    });
    const [focused, setFocused] = react.useState(false);
    const resetInputValue = useEventCallback((event, newValue) => {
      let newInputValue;

      if (multiple) {
        newInputValue = '';
      } else if (newValue == null) {
        newInputValue = '';
      } else {
        const optionLabel = getOptionLabel(newValue);
        newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
      }

      if (inputValue === newInputValue) {
        return;
      }

      setInputValueState(newInputValue);

      if (onInputChange) {
        onInputChange(event, newInputValue, 'reset');
      }
    });
    react.useEffect(() => {
      resetInputValue(null, value);
    }, [value, resetInputValue]);
    const [open, setOpenState] = useControlled({
      controlled: openProp,
      default: false,
      name: componentName,
      state: 'open'
    });
    const [inputPristine, setInputPristine] = react.useState(true);
    const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
    const popupOpen = open;
    const filteredOptions = popupOpen ? filterOptions(options.filter(option => {
      if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && getOptionSelected(option, value2))) {
        return false;
      }

      return true;
    }), // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
      getOptionLabel
    }) : [];
    const listboxAvailable = open && filteredOptions.length > 0;

    const focusTag = useEventCallback(tagToFocus => {
      if (tagToFocus === -1) {
        inputRef.current.focus();
      } else {
        anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
      }
    }); // Ensure the focusedTag is never inconsistent

    react.useEffect(() => {
      if (multiple && focusedTag > value.length - 1) {
        setFocusedTag(-1);
        focusTag(-1);
      }
    }, [value, multiple, focusedTag, focusTag]);

    function validOptionIndex(index, direction) {
      if (!listboxRef.current || index === -1) {
        return -1;
      }

      let nextFocus = index;

      while (true) {
        // Out of range
        if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
          return -1;
        }

        const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`); // Same logic as MenuList.js

        const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';

        if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
          // Move to the next element.
          nextFocus += direction === 'next' ? 1 : -1;
        } else {
          return nextFocus;
        }
      }
    }

    const setHighlightedIndex = useEventCallback(({
      event,
      index,
      reason = 'auto'
    }) => {
      highlightedIndexRef.current = index; // does the index exist?

      if (index === -1) {
        inputRef.current.removeAttribute('aria-activedescendant');
      } else {
        inputRef.current.setAttribute('aria-activedescendant', `${id}-option-${index}`);
      }

      if (onHighlightChange) {
        onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
      }

      if (!listboxRef.current) {
        return;
      }

      const prev = listboxRef.current.querySelector('[data-focus]');

      if (prev) {
        prev.removeAttribute('data-focus');
        prev.classList.remove('Mui-focusVisible');
      }

      const listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

      if (!listboxNode) {
        return;
      }

      if (index === -1) {
        listboxNode.scrollTop = 0;
        return;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);

      if (!option) {
        return;
      }

      option.setAttribute('data-focus', 'true');

      if (reason === 'keyboard') {
        option.classList.add('Mui-focusVisible');
      } // Scroll active descendant into view.
      // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
      //
      // Consider this API instead once it has a better browser support:
      // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });


      if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
        const element = option;
        const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
        const elementBottom = element.offsetTop + element.offsetHeight;

        if (elementBottom > scrollBottom) {
          listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
        } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
          listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
        }
      }
    });
    const changeHighlightedIndex = useEventCallback(({
      event,
      diff,
      direction = 'next',
      reason = 'auto'
    }) => {
      if (!popupOpen) {
        return;
      }

      const getNextIndex = () => {
        const maxIndex = filteredOptions.length - 1;

        if (diff === 'reset') {
          return defaultHighlighted;
        }

        if (diff === 'start') {
          return 0;
        }

        if (diff === 'end') {
          return maxIndex;
        }

        const newIndex = highlightedIndexRef.current + diff;

        if (newIndex < 0) {
          if (newIndex === -1 && includeInputInList) {
            return -1;
          }

          if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
            return 0;
          }

          return maxIndex;
        }

        if (newIndex > maxIndex) {
          if (newIndex === maxIndex + 1 && includeInputInList) {
            return -1;
          }

          if (disableListWrap || Math.abs(diff) > 1) {
            return maxIndex;
          }

          return 0;
        }

        return newIndex;
      };

      const nextIndex = validOptionIndex(getNextIndex(), direction);
      setHighlightedIndex({
        index: nextIndex,
        reason,
        event
      }); // Sync the content of the input with the highlighted option.

      if (autoComplete && diff !== 'reset') {
        if (nextIndex === -1) {
          inputRef.current.value = inputValue;
        } else {
          const option = getOptionLabel(filteredOptions[nextIndex]);
          inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
          // a completion string, appears inline after the input cursor in the textbox.

          const index = option.toLowerCase().indexOf(inputValue.toLowerCase());

          if (index === 0 && inputValue.length > 0) {
            inputRef.current.setSelectionRange(inputValue.length, option.length);
          }
        }
      }
    });
    const syncHighlightedIndex = react.useCallback(() => {
      if (!popupOpen) {
        return;
      }

      const valueItem = multiple ? value[0] : value; // The popup is empty, reset

      if (filteredOptions.length === 0 || valueItem == null) {
        changeHighlightedIndex({
          diff: 'reset'
        });
        return;
      }

      if (!listboxRef.current) {
        return;
      } // Synchronize the value with the highlighted index


      if (valueItem != null) {
        const currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

        if (multiple && currentOption && findIndex(value, val => getOptionSelected(currentOption, val)) !== -1) {
          return;
        }

        const itemIndex = findIndex(filteredOptions, optionItem => getOptionSelected(optionItem, valueItem));

        if (itemIndex === -1) {
          changeHighlightedIndex({
            diff: 'reset'
          });
        } else {
          setHighlightedIndex({
            index: itemIndex
          });
        }

        return;
      } // Prevent the highlighted index to leak outside the boundaries.


      if (highlightedIndexRef.current >= filteredOptions.length - 1) {
        setHighlightedIndex({
          index: filteredOptions.length - 1
        });
        return;
      } // Restore the focus to the previous index.


      setHighlightedIndex({
        index: highlightedIndexRef.current
      }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [// Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length, // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
    const handleListboxRef = useEventCallback(node => {
      setRef(listboxRef, node);

      if (!node) {
        return;
      }

      syncHighlightedIndex();
    });
    react.useEffect(() => {
      syncHighlightedIndex();
    }, [syncHighlightedIndex]);

    const handleOpen = event => {
      if (open) {
        return;
      }

      setOpenState(true);
      setInputPristine(true);

      if (onOpen) {
        onOpen(event);
      }
    };

    const handleClose = (event, reason) => {
      if (!open) {
        return;
      }

      setOpenState(false);

      if (onClose) {
        onClose(event, reason);
      }
    };

    const handleValue = (event, newValue, reason, details) => {
      if (value === newValue) {
        return;
      }

      if (onChange) {
        onChange(event, newValue, reason, details);
      }

      setValueState(newValue);
    };

    const isTouch = react.useRef(false);

    const selectNewValue = (event, option, reasonProp = 'select-option', origin = 'options') => {
      let reason = reasonProp;
      let newValue = option;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];

        const itemIndex = findIndex(newValue, valueItem => getOptionSelected(option, valueItem));

        if (itemIndex === -1) {
          newValue.push(option);
        } else if (origin !== 'freeSolo') {
          newValue.splice(itemIndex, 1);
          reason = 'remove-option';
        }
      }

      resetInputValue(event, newValue);
      handleValue(event, newValue, reason, {
        option
      });

      if (!disableCloseOnSelect && !event.ctrlKey && !event.metaKey) {
        handleClose(event, reason);
      }

      if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
        inputRef.current.blur();
      }
    };

    function validTagIndex(index, direction) {
      if (index === -1) {
        return -1;
      }

      let nextFocus = index;

      while (true) {
        // Out of range
        if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
          return -1;
        }

        const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`); // Same logic as MenuList.js

        if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
          nextFocus += direction === 'next' ? 1 : -1;
        } else {
          return nextFocus;
        }
      }
    }

    const handleFocusTag = (event, direction) => {
      if (!multiple) {
        return;
      }

      handleClose(event, 'toggleInput');
      let nextTag = focusedTag;

      if (focusedTag === -1) {
        if (inputValue === '' && direction === 'previous') {
          nextTag = value.length - 1;
        }
      } else {
        nextTag += direction === 'next' ? 1 : -1;

        if (nextTag < 0) {
          nextTag = 0;
        }

        if (nextTag === value.length) {
          nextTag = -1;
        }
      }

      nextTag = validTagIndex(nextTag, direction);
      setFocusedTag(nextTag);
      focusTag(nextTag);
    };

    const handleClear = event => {
      ignoreFocus.current = true;
      setInputValueState('');

      if (onInputChange) {
        onInputChange(event, '', 'clear');
      }

      handleValue(event, multiple ? [] : null, 'clear');
    };

    const handleKeyDown = other => event => {
      if (other.onKeyDown) {
        other.onKeyDown(event);
      }

      if (event.defaultMuiPrevented) {
        return;
      }

      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      } // Wait until IME is settled.


      if (event.which !== 229) {
        switch (event.key) {
          case 'Home':
            if (popupOpen && handleHomeEndKeys) {
              // Prevent scroll of the page
              event.preventDefault();
              changeHighlightedIndex({
                diff: 'start',
                direction: 'next',
                reason: 'keyboard',
                event
              });
            }

            break;

          case 'End':
            if (popupOpen && handleHomeEndKeys) {
              // Prevent scroll of the page
              event.preventDefault();
              changeHighlightedIndex({
                diff: 'end',
                direction: 'previous',
                reason: 'keyboard',
                event
              });
            }

            break;

          case 'PageUp':
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: -pageSize,
              direction: 'previous',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;

          case 'PageDown':
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: pageSize,
              direction: 'next',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;

          case 'ArrowDown':
            // Prevent cursor move
            event.preventDefault();
            changeHighlightedIndex({
              diff: 1,
              direction: 'next',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;

          case 'ArrowUp':
            // Prevent cursor move
            event.preventDefault();
            changeHighlightedIndex({
              diff: -1,
              direction: 'previous',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;

          case 'ArrowLeft':
            handleFocusTag(event, 'previous');
            break;

          case 'ArrowRight':
            handleFocusTag(event, 'next');
            break;

          case 'Enter':
            if (highlightedIndexRef.current !== -1 && popupOpen) {
              const option = filteredOptions[highlightedIndexRef.current];
              const disabled = getOptionDisabled ? getOptionDisabled(option) : false; // Avoid early form validation, let the end-users continue filling the form.

              event.preventDefault();

              if (disabled) {
                return;
              }

              selectNewValue(event, option, 'select-option'); // Move the selection to the end.

              if (autoComplete) {
                inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
              }
            } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
              if (multiple) {
                // Allow people to add new values before they submit the form.
                event.preventDefault();
              }

              selectNewValue(event, inputValue, 'create-option', 'freeSolo');
            }

            break;

          case 'Escape':
            if (popupOpen) {
              // Avoid Opera to exit fullscreen mode.
              event.preventDefault(); // Avoid the Modal to handle the event.

              event.stopPropagation();
              handleClose(event, 'escape');
            } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
              // Avoid Opera to exit fullscreen mode.
              event.preventDefault(); // Avoid the Modal to handle the event.

              event.stopPropagation();
              handleClear(event);
            }

            break;

          case 'Backspace':
            if (multiple && inputValue === '' && value.length > 0) {
              const index = focusedTag === -1 ? value.length - 1 : focusedTag;
              const newValue = value.slice();
              newValue.splice(index, 1);
              handleValue(event, newValue, 'remove-option', {
                option: value[index]
              });
            }

            break;
        }
      }
    };

    const handleFocus = event => {
      setFocused(true);

      if (openOnFocus && !ignoreFocus.current) {
        handleOpen(event);
      }
    };

    const handleBlur = event => {
      // Ignore the event when using the scrollbar with IE11
      if (listboxRef.current !== null && listboxRef.current.parentElement.contains(document.activeElement)) {
        inputRef.current.focus();
        return;
      }

      setFocused(false);
      firstFocus.current = true;
      ignoreFocus.current = false;

      if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
        selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
      } else if (autoSelect && freeSolo && inputValue !== '') {
        selectNewValue(event, inputValue, 'blur', 'freeSolo');
      } else if (clearOnBlur) {
        resetInputValue(event, value);
      }

      handleClose(event, 'blur');
    };

    const handleInputChange = event => {
      const newValue = event.target.value;

      if (inputValue !== newValue) {
        setInputValueState(newValue);
        setInputPristine(false);

        if (onInputChange) {
          onInputChange(event, newValue, 'input');
        }
      }

      if (newValue === '') {
        if (!disableClearable && !multiple) {
          handleValue(event, null, 'clear');
        }
      } else {
        handleOpen(event);
      }
    };

    const handleOptionMouseOver = event => {
      setHighlightedIndex({
        event,
        index: Number(event.currentTarget.getAttribute('data-option-index')),
        reason: 'mouse'
      });
    };

    const handleOptionTouchStart = () => {
      isTouch.current = true;
    };

    const handleOptionClick = event => {
      const index = Number(event.currentTarget.getAttribute('data-option-index'));
      selectNewValue(event, filteredOptions[index], 'select-option');
      isTouch.current = false;
    };

    const handleTagDelete = index => event => {
      const newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };

    const handlePopupIndicator = event => {
      if (open) {
        handleClose(event, 'toggleInput');
      } else {
        handleOpen(event);
      }
    }; // Prevent input blur when interacting with the combobox


    const handleMouseDown = event => {
      if (event.target.getAttribute('id') !== id) {
        event.preventDefault();
      }
    }; // Focus the input when interacting with the combobox


    const handleClick = () => {
      inputRef.current.focus();

      if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
        inputRef.current.select();
      }

      firstFocus.current = false;
    };

    const handleInputMouseDown = event => {
      if (inputValue === '' || !open) {
        handlePopupIndicator(event);
      }
    };

    let dirty = freeSolo && inputValue.length > 0;
    dirty = dirty || (multiple ? value.length > 0 : value !== null);
    let groupedOptions = filteredOptions;

    if (groupBy) {
      groupedOptions = filteredOptions.reduce((acc, option, index) => {
        const group = groupBy(option);

        if (acc.length > 0 && acc[acc.length - 1].group === group) {
          acc[acc.length - 1].options.push(option);
        } else {

          acc.push({
            key: index,
            index,
            group,
            options: [option]
          });
        }

        return acc;
      }, []);
    }

    return {
      getRootProps: (other = {}) => _extends({
        'aria-owns': listboxAvailable ? `${id}-listbox` : null,
        role: 'combobox',
        'aria-expanded': listboxAvailable
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      }),
      getInputLabelProps: () => ({
        id: `${id}-label`,
        htmlFor: id
      }),
      getInputProps: () => ({
        id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': listboxAvailable ? `${id}-listbox` : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      }),
      getClearProps: () => ({
        tabIndex: -1,
        onClick: handleClear
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        onClick: handlePopupIndicator
      }),
      getTagProps: ({
        index
      }) => ({
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      }),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${id}-listbox`,
        'aria-labelledby': `${id}-label`,
        ref: handleListboxRef,
        onMouseDown: event => {
          // Prevent blur
          event.preventDefault();
        }
      }),
      getOptionProps: ({
        index,
        option
      }) => {
        const selected = (multiple ? value : [value]).some(value2 => value2 != null && getOptionSelected(option, value2));
        const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
        return {
          key: getOptionLabel(option),
          tabIndex: -1,
          role: 'option',
          id: `${id}-option-${index}`,
          onMouseOver: handleOptionMouseOver,
          onClick: handleOptionClick,
          onTouchStart: handleOptionTouchStart,
          'data-option-index': index,
          'aria-disabled': disabled,
          'aria-selected': selected
        };
      },
      id,
      inputValue,
      value,
      dirty,
      popupOpen,
      focused: focused || focusedTag !== -1,
      anchorEl,
      setAnchorEl,
      focusedTag,
      groupedOptions
    };
  }

  const styles$k = theme => ({
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicator': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicator': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-sizeSmall"]': {
        '& $input': {
          padding: '2px 4px 3px'
        },
        '& $input:first-child': {
          padding: '1px 0 4px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '7.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-sizeSmall"]': {
        padding: 6,
        '& $input': {
          padding: '2.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '7px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-sizeSmall"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '2.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the Paper component. */
    paper: _extends({}, theme.typography.body1, {
      overflow: 'auto',
      margin: '4px 0'
    }),

    /* Styles applied to the listbox component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto'
      },
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&[aria-disabled="true"]': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none'
      },
      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&[data-focus="true"]': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected
          }
        },
        '&.Mui-focusVisible': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    },

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  });

  var _ref$1 = /*#__PURE__*/react.createElement(ClearIcon, {
    fontSize: "small"
  });

  var _ref2$1 = /*#__PURE__*/react.createElement(ArrowDropDownIcon, null);

  const Autocomplete = /*#__PURE__*/react.forwardRef(function Autocomplete(props, ref) {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      autoComplete = false,
      autoHighlight = false,
      autoSelect = false,
      blurOnSelect = false,
      ChipProps,
      classes,
      className,
      clearIcon = _ref$1,
      clearOnBlur = !props.freeSolo,
      clearOnEscape = false,
      clearText = 'Clear',
      closeText = 'Close',
      defaultValue = props.multiple ? [] : null,
      disableClearable = false,
      disableCloseOnSelect = false,
      disabled = false,
      disabledItemsFocusable = false,
      disableListWrap = false,
      disablePortal = false,
      filterSelectedOptions = false,
      forcePopupIcon = 'auto',
      freeSolo = false,
      fullWidth = false,
      getLimitTagsText = more => `+${more}`,
      getOptionLabel = option => {
        var _option$label;

        return (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option;
      },
      groupBy,
      handleHomeEndKeys = !props.freeSolo,
      includeInputInList = false,
      limitTags = -1,
      ListboxComponent = 'ul',
      ListboxProps,
      loading = false,
      loadingText = 'Loading…',
      multiple = false,
      noOptionsText = 'No options',
      openOnFocus = false,
      openText = 'Open',
      PaperComponent = Paper,
      PopperComponent = Popper,
      popupIcon = _ref2$1,
      renderGroup: renderGroupProp,
      renderInput,
      renderOption: renderOptionProp,
      renderTags,
      selectOnFocus = !props.freeSolo,
      size = 'medium'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
    /* eslint-enable @typescript-eslint/no-unused-vars */


    const {
      getRootProps,
      getInputProps,
      getInputLabelProps,
      getPopupIndicatorProps,
      getClearProps,
      getTagProps,
      getListboxProps,
      getOptionProps,
      value,
      dirty,
      id,
      popupOpen,
      focused,
      focusedTag,
      anchorEl,
      setAnchorEl,
      inputValue,
      groupedOptions
    } = useAutocomplete(_extends({}, props, {
      componentName: 'Autocomplete'
    }));
    let startAdornment;

    if (multiple && value.length > 0) {
      const getCustomizedTagProps = params => _extends({
        className: clsx(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled
      }, getTagProps(params));

      if (renderTags) {
        startAdornment = renderTags(value, getCustomizedTagProps);
      } else {
        startAdornment = value.map((option, index) => /*#__PURE__*/react.createElement(Chip$1, _extends({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index
        }), ChipProps)));
      }
    }

    if (limitTags > -1 && Array.isArray(startAdornment)) {
      const more = startAdornment.length - limitTags;

      if (!focused && more > 0) {
        startAdornment = startAdornment.splice(0, limitTags);
        startAdornment.push( /*#__PURE__*/react.createElement("span", {
          className: classes.tag,
          key: startAdornment.length
        }, getLimitTagsText(more)));
      }
    }

    const defaultRenderGroup = params => /*#__PURE__*/react.createElement("li", {
      key: params.key
    }, /*#__PURE__*/react.createElement(ListSubheader, {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/react.createElement("ul", {
      className: classes.groupUl
    }, params.children));

    const renderGroup = renderGroupProp || defaultRenderGroup;

    const defaultRenderOption = (props2, option) => /*#__PURE__*/react.createElement("li", props2, getOptionLabel(option));

    const renderOption = renderOptionProp || defaultRenderOption;

    const renderListOption = (option, index) => {
      const optionProps = getOptionProps({
        option,
        index
      });
      return renderOption(_extends({}, optionProps, {
        className: classes.option
      }), option, {
        selected: optionProps['aria-selected'],
        inputValue
      });
    };

    const hasClearIcon = !disableClearable && !disabled && dirty;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", _extends({
      ref: ref,
      className: clsx(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
    }, getRootProps(other)), renderInput({
      id,
      disabled,
      fullWidth: true,
      size: size === 'small' ? 'small' : undefined,
      InputLabelProps: getInputLabelProps(),
      InputProps: {
        ref: setAnchorEl,
        className: classes.inputRoot,
        startAdornment,
        endAdornment: /*#__PURE__*/react.createElement("div", {
          className: classes.endAdornment
        }, hasClearIcon ? /*#__PURE__*/react.createElement(IconButton, _extends({}, getClearProps(), {
          "aria-label": clearText,
          title: clearText,
          className: classes.clearIndicator
        }), clearIcon) : null, hasPopupIcon ? /*#__PURE__*/react.createElement(IconButton, _extends({}, getPopupIndicatorProps(), {
          disabled: disabled,
          "aria-label": popupOpen ? closeText : openText,
          title: popupOpen ? closeText : openText,
          className: clsx(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
        }), popupIcon) : null)
      },
      inputProps: _extends({
        className: clsx(classes.input, focusedTag === -1 && classes.inputFocused),
        disabled
      }, getInputProps())
    })), popupOpen && anchorEl ? /*#__PURE__*/react.createElement(PopperComponent, {
      className: clsx(classes.popper, disablePortal && classes.popperDisablePortal),
      disablePortal: disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      role: "presentation",
      anchorEl: anchorEl,
      open: true
    }, /*#__PURE__*/react.createElement(PaperComponent, {
      className: classes.paper
    }, loading && groupedOptions.length === 0 ? /*#__PURE__*/react.createElement("div", {
      className: classes.loading
    }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/react.createElement("div", {
      className: classes.noOptions
    }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/react.createElement(ListboxComponent, _extends({
      className: classes.listbox
    }, getListboxProps(), ListboxProps), groupedOptions.map((option, index) => {
      if (groupBy) {
        return renderGroup({
          key: option.key,
          group: option.group,
          children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
        });
      }

      return renderListOption(option, index);
    })) : null)) : null);
  });
  var Autocomplete$1 = withStyles$1(styles$k, {
    name: 'MuiAutocomplete'
  })(Autocomplete);

  function DropdownMultiple({
    block,
    blendGlobalTheme,
    blend
  }) {
    const useStyles = makeStyles$1(theme => ({
      dropdown: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();
    const checked = useSelector(selectAllItems)[block.index];
    const dispatch = useDispatch();
    const options = block.dropdownOptions === "" || typeof block.dropdownOptions === 'undefined' ? [] : block.dropdownOptions.split(',');

    const onDropdownChange = newValue => {
      const payload = {
        ref: block.ref,
        data: newValue
      };
      dispatch(setItem(payload));
    };

    return react.createElement(Autocomplete$1, {
      multiple: true,
      options: options.length > 1 ? options : [],
      className: classes.dropdown,
      renderInput: params => react.createElement(TextField$1, _extends$2({}, params, {
        variant: blendGlobalTheme.variant,
        label: block.label
      })),
      onChange: (event, newValue) => {
        onDropdownChange(newValue);
      }
    });
  }

  function Dropdown({
    block,
    blendGlobalTheme,
    blend
  }) {
    console.log(blendGlobalTheme);
    const useStyles = makeStyles$1(theme => ({
      dropdown: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    console.log(block);
    const classes = useStyles();
    const checked = useSelector(selectAllItems)[block.index];
    const dispatch = useDispatch();
    const options = block.dropdownOptions === "" || typeof block.dropdownOptions === 'undefined' ? [] : block.dropdownOptions.split(',');

    const onDropdownChange = newValue => {
      const payload = {
        ref: block.ref,
        data: newValue
      };
      dispatch(setItem(payload));
    };

    return react.createElement(Autocomplete$1, {
      defaultValue: block.defaultValue,
      variant: blendGlobalTheme.variant,
      options: options.length > 1 ? options : [],
      className: classes.dropdown,
      renderInput: params => react.createElement(TextField$1, _extends$2({}, params, {
        variant: blendGlobalTheme.variant,
        label: block.label
      })),
      onChange: (event, newValue) => {
        onDropdownChange(newValue);
      }
    });
  }

  const styles$l = theme => ({
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.mode === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.mode === 'light' ? 0.38 : 0.3
    }
  });
  const Switch = /*#__PURE__*/react.forwardRef(function Switch(props, ref) {
    const {
      classes,
      className,
      color = 'secondary',
      edge = false,
      size = 'medium'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["classes", "className", "color", "edge", "size"]);

    const icon = /*#__PURE__*/react.createElement("span", {
      className: classes.thumb
    });
    return /*#__PURE__*/react.createElement("span", {
      className: clsx(classes.root, className, {
        'start': classes.edgeStart,
        'end': classes.edgeEnd
      }[edge], size === "small" && classes[`size${capitalize(size)}`])
    }, /*#__PURE__*/react.createElement(SwitchBase, _extends({
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      classes: {
        root: clsx(classes.switchBase, classes[`color${capitalize(color)}`]),
        input: classes.input,
        checked: classes.checked,
        disabled: classes.disabled
      },
      ref: ref
    }, other)), /*#__PURE__*/react.createElement("span", {
      className: classes.track
    }));
  });
  var Switch$1 = withStyles$1(styles$l, {
    name: 'MuiSwitch'
  })(Switch);

  function CustomSwitch({
    block,
    globalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const checked = useSelector(selectAllItems)[block.index];
    const useStyles = makeStyles$1(theme => ({
      switch: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();

    const onSwitchChange = e => {
      const payload = {
        ref: block.ref,
        data: e.target.value
      };
      dispatch(setItem(payload));
    };

    return react.createElement(FormControlLabel$1, {
      className: classes.switch,
      control: react.createElement(Switch$1, {
        checked: checked,
        onChange: onSwitchChange,
        color: "primary"
      }),
      label: block.label
    });
  }

  const sliderClasses = _extends({}, sliderUnstyledClasses, generateUtilityClasses('MuiSlider', ['colorPrimary', 'colorSecondary', 'thumbColorPrimary', 'thumbColorSecondary']));

  const overridesResolver$8 = (props, styles) => {
    const {
      styleProps
    } = props;
    const marks = styleProps.marksProp === true && styleProps.step !== null ? [...Array(Math.floor((styleProps.max - styleProps.min) / styleProps.step) + 1)].map((_, index) => ({
      value: styleProps.min + styleProps.step * index
    })) : styleProps.marksProp || [];
    const marked = marks.length > 0 && marks.some(mark => mark.label);
    return deepmerge(styles.root || {}, _extends({}, styles[`color${capitalize(styleProps.color)}`], {
      [`&.${sliderClasses.disabled}`]: styles.disabled
    }, marked && styles.marked, styleProps.orientation === 'vertical' && styles.vertical, styleProps.track === 'inverted' && styles.trackInverted, styleProps.track === false && styles.trackFalse, {
      [`& .${sliderClasses.rail}`]: styles.rail,
      [`& .${sliderClasses.track}`]: styles.track,
      [`& .${sliderClasses.mark}`]: styles.mark,
      [`& .${sliderClasses.markLabel}`]: styles.markLabel,
      [`& .${sliderClasses.valueLabel}`]: styles.valueLabel,
      [`& .${sliderClasses.thumb}`]: _extends({}, styles.thumb, styles[`thumbColor${capitalize(styleProps.color)}`], {
        [`&.${sliderClasses.disabled}`]: styles.disabled
      })
    }));
  };

  const SliderRoot = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: overridesResolver$8
  })(({
    theme,
    styleProps
  }) => _extends({
    height: 2,
    width: '100%',
    boxSizing: 'content-box',
    padding: '13px 0',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    touchAction: 'none',
    color: theme.palette.primary.main,
    WebkitTapHighlightColor: 'transparent'
  }, styleProps.color === 'secondary' && {
    color: theme.palette.secondary.main
  }, {
    [`&.${sliderClasses.disabled}`]: {
      pointerEvents: 'none',
      cursor: 'default',
      color: theme.palette.grey[400]
    }
  }, styleProps.orientation === 'vertical' && {
    width: 2,
    height: '100%',
    padding: '0 13px'
  }, {
    // The primary input mechanism of the device includes a pointing device of limited accuracy.
    '@media (pointer: coarse)': _extends({
      // Reach 42px touch target, about ~8mm on screen.
      padding: '20px 0'
    }, styleProps.orientation === 'vertical' && {
      padding: '0 20px'
    }),
    '@media print': {
      colorAdjust: 'exact'
    }
  }, styleProps.marked && _extends({
    marginBottom: 20
  }, styleProps.orientation === 'vertical' && {
    marginBottom: 'auto',
    marginRight: 20
  }), {
    [`& .${sliderClasses.valueLabelCircle}`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'currentColor',
      transform: 'rotate(-45deg)'
    },
    [`& .${sliderClasses.valueLabelLabel}`]: {
      color: theme.palette.primary.contrastText,
      transform: 'rotate(45deg)',
      textAlign: 'center'
    }
  }));
  const SliderRail = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'Rail'
  })(({
    styleProps
  }) => _extends({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: 2,
    borderRadius: 1,
    backgroundColor: 'currentColor',
    opacity: 0.38
  }, styleProps.orientation === 'vertical' && {
    height: '100%',
    width: 2
  }, styleProps.track === 'inverted' && {
    opacity: 1
  }));
  const SliderTrack = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'Track'
  })(({
    theme,
    styleProps
  }) => _extends({
    display: 'block',
    position: 'absolute',
    height: 2,
    borderRadius: 1,
    backgroundColor: 'currentColor'
  }, styleProps.orientation === 'vertical' && {
    width: 2
  }, styleProps.track === false && {
    display: 'none'
  }, styleProps.track === 'inverted' && {
    backgroundColor: // Same logic as the LinearProgress track color
    theme.palette.mode === 'light' ? lighten(theme.palette.primary.main, 0.62) : darken(theme.palette.primary.main, 0.5)
  }));
  const SliderThumb = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'Thumb'
  })(({
    theme,
    styleProps
  }) => _extends({
    position: 'absolute',
    width: 12,
    height: 12,
    marginLeft: -6,
    marginTop: -5,
    boxSizing: 'border-box',
    borderRadius: '50%',
    outline: 0,
    backgroundColor: 'currentColor',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.shortest
    }),
    '&::after': {
      position: 'absolute',
      content: '""',
      borderRadius: '50%',
      // reach 42px hit target (2 * 15 + thumb diameter)
      left: -15,
      top: -15,
      right: -15,
      bottom: -15
    },
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0.16)}`,
      '@media (hover: none)': {
        boxShadow: 'none'
      }
    },
    [`&.${sliderClasses.active}`]: {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, 0.16)}`
    },
    [`&.${sliderClasses.disabled}`]: _extends({
      width: 8,
      height: 8,
      marginLeft: -4,
      marginTop: -3
    }, styleProps.orientation === 'vertical' && {
      marginLeft: -3,
      marginBottom: -4
    }, {
      '&:hover': {
        boxShadow: 'none'
      }
    })
  }, styleProps.orientation === 'vertical' && {
    marginLeft: -5,
    marginBottom: -6
  }, styleProps.color === 'secondary' && {
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.secondary.main, 0.16)}`
    },
    [`&.${sliderClasses.active}`]: {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.secondary.main, 0.16)}`
    }
  }));
  const SliderValueLabel = experimentalStyled(SliderValueLabelUnstyled, {}, {
    name: 'MuiSlider',
    slot: 'ValueLabel'
  })(({
    theme
  }) => _extends({
    // IE 11 centering bug, to remove from the customization demos once no longer supported
    left: 'calc(-50% - 4px)',
    [`&.${sliderClasses.valueLabelOpen}`]: {
      transform: 'scale(1) translateY(-10px)'
    },
    zIndex: 1
  }, theme.typography.body2, {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.2,
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shortest
    }),
    top: -34,
    transformOrigin: 'bottom center',
    transform: 'scale(0)',
    position: 'absolute'
  }));
  const SliderMark = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'Mark'
  })(({
    theme,
    styleProps
  }) => _extends({
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'currentColor'
  }, styleProps.markActive && {
    backgroundColor: theme.palette.background.paper,
    opacity: 0.8
  }));
  const SliderMarkLabel = experimentalStyled('span', {}, {
    name: 'MuiSlider',
    slot: 'MarkLabel'
  })(({
    theme,
    styleProps
  }) => _extends({}, theme.typography.body2, {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: 26,
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap'
  }, styleProps.orientation === 'vertical' && {
    top: 'auto',
    left: 26,
    transform: 'translateY(50%)'
  }, {
    '@media (pointer: coarse)': _extends({
      top: 40
    }, styleProps.orientation === 'vertical' && {
      left: 31
    })
  }, styleProps.markLabelActive && {
    color: theme.palette.text.primary
  }));
  SliderRoot.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------

    /**
     * @ignore
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    styleProps: propTypes.shape({
      'aria-label': propTypes.string,
      'aria-labelledby': propTypes.string,
      'aria-valuetext': propTypes.string,
      classes: propTypes.object,
      color: propTypes.oneOf(['primary', 'secondary']),
      defaultValue: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
      disabled: propTypes.bool,
      getAriaLabel: propTypes.func,
      getAriaValueText: propTypes.func,
      isRtl: propTypes.bool,
      marks: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
        label: propTypes.node,
        value: propTypes.number.isRequired
      })), propTypes.bool]),
      max: propTypes.number,
      min: propTypes.number,
      name: propTypes.string,
      onChange: propTypes.func,
      onChangeCommitted: propTypes.func,
      orientation: propTypes.oneOf(['horizontal', 'vertical']),
      scale: propTypes.func,
      step: propTypes.number,
      track: propTypes.oneOf(['inverted', 'normal', false]),
      value: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
      valueLabelDisplay: propTypes.oneOf(['auto', 'off', 'on']),
      valueLabelFormat: propTypes.oneOfType([propTypes.func, propTypes.string])
    })
  };

  const extendUtilityClasses = styleProps => {
    const {
      color,
      classes = {}
    } = styleProps;
    return _extends({}, classes, {
      root: clsx(classes.root, getSliderUtilityClass(`color${capitalize(color)}`), classes[`color${capitalize(color)}`]),
      thumb: clsx(classes.thumb, getSliderUtilityClass(`thumbColor${capitalize(color)}`), classes[`thumbColor${capitalize(color)}`])
    });
  };

  const shouldSpreadStyleProps = Component => {
    return !Component || !isHostComponent(Component);
  };

  const Slider = /*#__PURE__*/react.forwardRef(function Slider(inputProps, ref) {
    var _componentsProps$root, _componentsProps$thum;

    const props = useThemeProps({
      props: inputProps,
      name: 'MuiSlider'
    });

    const {
      components = {},
      componentsProps = {},
      color = 'primary'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["components", "componentsProps", "color"]);

    const styleProps = _extends({}, props, {
      color
    });

    const classes = extendUtilityClasses(styleProps);
    return /*#__PURE__*/react.createElement(SliderUnstyled, _extends({}, other, {
      components: _extends({
        Root: SliderRoot,
        Rail: SliderRail,
        Track: SliderTrack,
        Thumb: SliderThumb,
        ValueLabel: SliderValueLabel,
        Mark: SliderMark,
        MarkLabel: SliderMarkLabel
      }, components),
      componentsProps: _extends({}, componentsProps, {
        root: _extends({}, componentsProps.root, shouldSpreadStyleProps(components.Root) && {
          styleProps: _extends({}, (_componentsProps$root = componentsProps.root) === null || _componentsProps$root === void 0 ? void 0 : _componentsProps$root.styleProps, {
            color
          })
        }),
        thumb: _extends({}, componentsProps.thumb, shouldSpreadStyleProps(components.Thumb) && {
          styleProps: _extends({}, (_componentsProps$thum = componentsProps.thumb) === null || _componentsProps$thum === void 0 ? void 0 : _componentsProps$thum.styleProps, {
            color
          })
        })
      }),
      classes: classes,
      ref: ref
    }));
  });

  function CustomSlider({
    block,
    globalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const value = useSelector(selectAllItems)[block.index];
    const useStyles = makeStyles$1(theme => ({
      slider: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();

    return react.createElement("div", null, react.createElement(Typography, {
      id: "discrete-slider",
      gutterBottom: true
    }, block.label), react.createElement(Slider, {
      className: classes.slider,
      value: value,
      valueLabelDisplay: "auto",
      step: block.step,
      min: block.min,
      max: block.max
    }));
  }

  function getButtonUtilityClass(slot) {
    return generateUtilityClass('MuiButton', slot);
  }
  const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'label', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);

  const overridesResolver$9 = (props, styles) => {
    const {
      styleProps
    } = props;
    return deepmerge(styles.root || {}, _extends({}, styles[styleProps.variant], styles[`${styleProps.variant}${capitalize(styleProps.color)}`], styles[`size${capitalize(styleProps.size)}`], styles[`${styleProps.variant}Size${capitalize(styleProps.size)}`], styleProps.color === 'inherit' && styles.colorInherit, styleProps.disableElevation && styles.disableElevation, styleProps.fullWidth && styles.fullWidth, {
      [`& .${buttonClasses.label}`]: styles.label,
      [`& .${buttonClasses.startIcon}`]: _extends({}, styles.startIcon, styles[`iconSize${capitalize(styleProps.size)}`]),
      [`& .${buttonClasses.endIcon}`]: _extends({}, styles.endIcon, styles[`iconSize${capitalize(styleProps.size)}`])
    }));
  };

  const useUtilityClasses$a = styleProps => {
    const {
      color,
      disableElevation,
      fullWidth,
      size,
      variant,
      classes
    } = styleProps;
    const slots = {
      root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
      label: ['label'],
      startIcon: ['startIcon', `iconSize${capitalize(size)}`],
      endIcon: ['endIcon', `iconSize${capitalize(size)}`]
    };
    return composeClasses(slots, getButtonUtilityClass, classes);
  };

  const commonIconStyles = styleProps => _extends({}, styleProps.size === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18
    }
  }, styleProps.size === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20
    }
  }, styleProps.size === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22
    }
  });

  const ButtonRoot = experimentalStyled(ButtonBase, {}, {
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: overridesResolver$9
  })(({
    theme,
    styleProps
  }) => _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': _extends({
      textDecoration: 'none',
      backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, styleProps.variant === 'text' && styleProps.color !== 'inherit' && {
      backgroundColor: alpha(theme.palette[styleProps.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, styleProps.variant === 'outlined' && styleProps.color !== 'inherit' && {
      border: `1px solid ${theme.palette[styleProps.color].main}`,
      backgroundColor: alpha(theme.palette[styleProps.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, styleProps.variant === 'contained' && {
      backgroundColor: theme.palette.grey.A100,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.grey[300]
      }
    }, styleProps.variant === 'contained' && styleProps.color !== 'inherit' && {
      backgroundColor: theme.palette[styleProps.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[styleProps.color].main
      }
    }),
    '&:active': _extends({}, styleProps.variant === 'contained' && {
      boxShadow: theme.shadows[8]
    }),
    '&.Mui-focusVisible': _extends({}, styleProps.variant === 'contained' && {
      boxShadow: theme.shadows[6]
    }),
    '&.Mui-disabled': _extends({
      color: theme.palette.action.disabled
    }, styleProps.variant === 'outlined' && {
      border: `1px solid ${theme.palette.action.disabledBackground}`
    }, styleProps.variant === 'outlined' && styleProps.color === 'secondary' && {
      border: `1px solid ${theme.palette.action.disabled}`
    }, styleProps.variant === 'contained' && {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    })
  }, styleProps.variant === 'text' && {
    padding: '6px 8px'
  }, styleProps.variant === 'text' && styleProps.color !== 'inherit' && {
    color: theme.palette[styleProps.color].main
  }, styleProps.variant === 'outlined' && {
    padding: '5px 15px',
    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
  }, styleProps.variant === 'outlined' && styleProps.color !== 'inherit' && {
    color: theme.palette[styleProps.color].main,
    border: `1px solid ${alpha(theme.palette[styleProps.color].main, 0.5)}`
  }, styleProps.variant === 'contained' && {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2]
  }, styleProps.variant === 'contained' && styleProps.color !== 'inherit' && {
    color: theme.palette[styleProps.color].contrastText,
    backgroundColor: theme.palette[styleProps.color].main
  }, styleProps.color === 'inherit' && {
    color: 'inherit',
    borderColor: 'currentColor'
  }, styleProps.size === 'small' && styleProps.variant === 'text' && {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  }, styleProps.size === 'large' && styleProps.variant === 'text' && {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  }, styleProps.size === 'small' && styleProps.variant === 'outlined' && {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  }, styleProps.size === 'large' && styleProps.variant === 'outlined' && {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  }, styleProps.size === 'small' && styleProps.variant === 'contained' && {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  }, styleProps.size === 'large' && styleProps.variant === 'contained' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  }, styleProps.fullWidth && {
    width: '100%'
  }), ({
    styleProps
  }) => styleProps.disableElevation && {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    '&.Mui-focusVisible': {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    '&.Mui-disabled': {
      boxShadow: 'none'
    }
  });
  const ButtonLabel = experimentalStyled('span', {}, {
    name: 'MuiButton',
    slot: 'Label'
  })({
    width: '100%',
    // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  });
  const ButtonStartIcon = experimentalStyled('span', {}, {
    name: 'MuiButton',
    slot: 'StartIcon'
  })(({
    styleProps
  }) => _extends({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4
  }, styleProps.size === 'small' && {
    marginLeft: -2
  }, commonIconStyles(styleProps)));
  const ButtonEndIcon = experimentalStyled('span', {}, {
    name: 'MuiButton',
    slot: 'EndIcon'
  })(({
    styleProps
  }) => _extends({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8
  }, styleProps.size === 'small' && {
    marginRight: -2
  }, commonIconStyles(styleProps)));
  const Button = /*#__PURE__*/react.forwardRef(function Button(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiButton'
    });

    const {
      children,
      className,
      color = 'primary',
      component = 'button',
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = 'medium',
      startIcon: startIconProp,
      type,
      variant = 'text'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

    const styleProps = _extends({}, props, {
      color,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      size,
      type,
      variant
    });

    const classes = useUtilityClasses$a(styleProps);
    const startIcon = startIconProp && /*#__PURE__*/react.createElement(ButtonStartIcon, {
      className: classes.startIcon,
      styleProps: styleProps
    }, startIconProp);
    const endIcon = endIconProp && /*#__PURE__*/react.createElement(ButtonEndIcon, {
      className: classes.endIcon,
      styleProps: styleProps
    }, endIconProp);
    return /*#__PURE__*/react.createElement(ButtonRoot, _extends({
      className: clsx(classes.root, className),
      styleProps: styleProps,
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type
    }, other), /*#__PURE__*/react.createElement(ButtonLabel, {
      className: classes.label,
      styleProps: styleProps
    }, startIcon, children, endIcon));
  });

  const SIZE = 44;
  const styles$m = theme => ({
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block'
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the svg element. */
    svg: {
      display: 'block' // Keeps the progress centered

    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',

    },

    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    circleDeterminate: {
      transition: theme.transitions.create('stroke-dashoffset')
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

    },
    '@keyframes circular-rotate': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px'
      }
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none'
    }
  });
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */

  const CircularProgress = /*#__PURE__*/react.forwardRef(function CircularProgress(props, ref) {
    const {
      classes,
      className,
      color = 'primary',
      disableShrink = false,
      size = 40,
      style,
      thickness = 3.6,
      value = 0,
      variant = 'indeterminate'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

    const circleStyle = {};
    const rootStyle = {};
    const rootProps = {};

    if (variant === 'determinate') {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps['aria-valuenow'] = Math.round(value);
      circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    }

    return /*#__PURE__*/react.createElement("span", _extends({
      className: clsx(classes.root, className, variant === 'determinate' ? classes.determinate : classes.indeterminate, color !== 'inherit' && classes[`color${capitalize(color)}`]),
      style: _extends({
        width: size,
        height: size
      }, rootStyle, style),
      ref: ref,
      role: "progressbar"
    }, rootProps, other), /*#__PURE__*/react.createElement("svg", {
      className: classes.svg,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`
    }, /*#__PURE__*/react.createElement("circle", {
      className: clsx(classes.circle, variant === 'determinate' ? classes.circleDeterminate : classes.circleIndeterminate, disableShrink && classes.circleDisableShrink),
      style: circleStyle,
      cx: SIZE,
      cy: SIZE,
      r: (SIZE - thickness) / 2,
      fill: "none",
      strokeWidth: thickness
    })));
  });
  var CircularProgress$1 = withStyles$1(styles$m, {
    name: 'MuiCircularProgress',
    flip: false
  })(CircularProgress);

  const styles$n = () => ({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `pending={true}`. */
    pending: {},

    /* Styles applied to the pendingIndicator element. */
    pendingIndicator: {
      position: 'absolute',
      visibility: 'visible',
      display: 'flex'
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="center"`. */
    pendingIndicatorCenter: {
      left: '50%',
      transform: 'translate(-50%)'
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="start"`. */
    pendingIndicatorStart: {
      left: 14
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="end"`. */
    pendingIndicatorEnd: {
      right: 14
    },

    /* Styles applied to the endIcon element if `pending={true}` and `pendingPosition="end"`. */
    endIconPendingEnd: {
      visibility: 'hidden'
    },

    /* Styles applied to the startIcon element if `pending={true}` and `pendingPosition="start"`. */
    startIconPendingStart: {
      visibility: 'hidden'
    },

    /* Styles applied to the label element if `pending={true}` and `pendingPosition="center"`. */
    labelPendingCenter: {
      visibility: 'hidden'
    }
  });
  const PendingIndicator = /*#__PURE__*/react.createElement(CircularProgress$1, {
    color: "inherit",
    size: 16
  });
  const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(props, ref) {
    const {
      children,
      classes,
      className,
      disabled = false,
      pending = false,
      pendingIndicator = PendingIndicator,
      pendingPosition = 'center'
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "disabled", "pending", "pendingIndicator", "pendingPosition"]);

    return /*#__PURE__*/react.createElement(Button, _extends({
      className: clsx(classes.root, className, pending && classes.pending),
      disabled: disabled || pending,
      ref: ref,
      classes: {
        startIcon: classes[`startIcon${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`],
        endIcon: classes[`endIcon${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`],
        label: classes[`label${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`]
      }
    }, other), pending && /*#__PURE__*/react.createElement("div", {
      className: clsx(classes.pendingIndicator, classes[`pendingIndicator${capitalize(pendingPosition)}`])
    }, pendingIndicator), children);
  });
  var LoadingButton$1 = withStyles$1(styles$n, {
    name: 'MuiLoadingButton'
  })(LoadingButton);

  function CustomButton({
    block,
    blendGlobalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const useStyles = makeStyles$1(theme => ({
      button: {
        width: `${blend.buttonWidth}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();
    const items = useSelector(selectAllItems);
    const [loading, setLoading] = react.useState(false);

    const onButtonClick = async () => {
      try {
        setLoading(true);
        await executeBlend(blend.id, items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };

    let disabled;

    if (blend.id.length > 1) {
      if (blend.useEnabledCondition) {
        if (blend.enabledCondition === 1) {
          disabled = false;
        } else {
          disabled = true;
        }
      } else {
        disabled = false;
      }
    } else {
      disabled = true;
    }

    return react.createElement(LoadingButton$1, {
      disabled: disabled,
      className: classes.button,
      pending: loading,
      pendingIndicator: blend.runningBlendLabel,
      variant: "contained",
      color: "primary",
      onClick: onButtonClick
    }, blend.buttonLabel);
  }

  function DatePicker({
    block,
    blendGlobalTheme,
    blend
  }) {
    const dispatch = useDispatch();
    const date = useSelector(function (state) {
      return state;
    });
    console.log(date);
    const useStyles = makeStyles$1(theme => ({
      textField: {
        width: `${block.width}%`,
        marginBottom: 12
      }
    }));
    const classes = useStyles();

    const onDateChange = newValue => {
      const payload = {
        ref: block.ref,
        data: newValue
      };
      dispatch(setItem(payload));
    };

    return react.createElement(DatePicker, {
      label: "Year only",
      value: date,
      onChange: newValue => {
        onDateChange(newValue);
      },
      renderInput: params => react.createElement(TextField$1, _extends$2({}, params, {
        margin: "normal",
        helperText: null,
        variant: "standard"
      }))
    });
  }

  const Components = {
    textInput: TextInput,
    numberInput: NumberInput,
    checkbox: CustomCheckbox,
    dropdown: Dropdown,
    dropdownMultiple: DropdownMultiple,
    switch: CustomSwitch,
    slider: CustomSlider,
    button: CustomButton,
    datePicker: DatePicker
  };
  var Components$1 = ((block, blendGlobalTheme, blend) => {
    if (typeof Components[block.component] !== "undefined") {
      return react.createElement(Components[block.component], {
        key: block.id,
        block: block,
        blendGlobalTheme: blendGlobalTheme,
        blend: blend
      });
    }
  });

  var store = configureStore({
    reducer: {
      forms: formsReducer
    }
  });

  function getGridUtilityClass(slot) {
    return generateUtilityClass('MuiGrid', slot);
  }
  const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
  const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
  const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth', // spacings
  ...SPACINGS.map(spacing => `spacing-xs-${spacing}`), // direction values
  ...DIRECTIONS.map(direction => `direction-xs-${direction}`), // wrap values
  ...WRAPS.map(wrap => `wrap-xs-${wrap}`), // grid sizes for all breakpoints
  ...GRID_SIZES.map(size => `grid-xs-${String(size)}`), ...GRID_SIZES.map(size => `grid-sm-${String(size)}`), ...GRID_SIZES.map(size => `grid-md-${String(size)}`), ...GRID_SIZES.map(size => `grid-lg-${String(size)}`), ...GRID_SIZES.map(size => `grid-xl-${String(size)}`)]);

  function getOffset(val) {
    const parse = parseFloat(val);
    return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
  }

  function generateGrid(globalStyles, theme, breakpoint, styleProps) {
    const size = styleProps[breakpoint];
    if (!size) return;
    let styles = {};

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
    } else {
      // Keep 7 significant numbers.
      const width = `${Math.round(size / 12 * 10e7) / 10e5}%`;
      let more = {};

      if (styleProps.container && styleProps.item && styleProps.spacing !== 0) {
        const themeSpacing = theme.spacing(styleProps.spacing);

        if (themeSpacing !== '0px') {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      } // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


      styles = _extends({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    } // No need for a media query for the first size.


    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
  }

  function generateGap({
    theme,
    styleProps
  }) {
    const {
      container,
      spacing
    } = styleProps;
    let styles = {};

    if (container && spacing !== 0) {
      const themeSpacing = theme.spacing(spacing);

      if (themeSpacing !== '0px') {
        styles = {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginTop: `-${getOffset(themeSpacing)}`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingTop: getOffset(themeSpacing),
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }
    }

    return styles;
  }

  const overridesResolver$a = (props, styles) => {
    const {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = props.styleProps;
    return deepmerge(styles.root || {}, _extends({}, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, container && spacing !== 0 && styles[`spacing-xs-${String(spacing)}`], direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], xs !== false && styles[`grid-xs-${String(xs)}`], sm !== false && styles[`grid-sm-${String(sm)}`], md !== false && styles[`grid-md-${String(md)}`], lg !== false && styles[`grid-lg-${String(lg)}`], xl !== false && styles[`grid-xl-${String(xl)}`]));
  }; // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',


  const GridRoot = experimentalStyled('div', {}, {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: overridesResolver$a
  })(({
    styleProps
  }) => _extends({
    boxSizing: 'border-box'
  }, styleProps.container && {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  }, styleProps.item && {
    margin: 0 // For instance, it's useful when used with a `figure` element.

  }, styleProps.zeroMinWidth && {
    minWidth: 0
  }, styleProps.direction === 'column' && {
    flexDirection: 'column',
    [`& > .${gridClasses.item}`]: {
      maxWidth: 'none'
    }
  }, styleProps.direction === 'column-reverse' && {
    flexDirection: 'column-reverse',
    [`& > .${gridClasses.item}`]: {
      maxWidth: 'none'
    }
  }, styleProps.direction === 'row-reverse' && {
    flexDirection: 'row-reverse'
  }, styleProps.wrap === 'nowrap' && {
    flexWrap: 'nowrap'
  }, styleProps.wrap === 'reverse' && {
    flexWrap: 'wrap-reverse'
  }), generateGap, ({
    theme,
    styleProps
  }) => theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    generateGrid(globalStyles, theme, breakpoint, styleProps);
    return globalStyles;
  }, {}));

  const useUtilityClasses$b = styleProps => {
    const {
      classes,
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = styleProps;
    const slots = {
      root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', container && spacing !== 0 && `spacing-xs-${String(spacing)}`, direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, xs !== false && `grid-xs-${String(xs)}`, sm !== false && `grid-sm-${String(sm)}`, md !== false && `grid-md-${String(md)}`, lg !== false && `grid-lg-${String(lg)}`, xl !== false && `grid-xl-${String(xl)}`]
    };
    return composeClasses(slots, getGridUtilityClass, classes);
  };

  const Grid = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps({
      props: inProps,
      name: 'MuiGrid'
    });
    const props = extendSxProp(themeProps);

    const {
      className,
      component = 'div',
      container = false,
      direction = 'row',
      item = false,
      lg = false,
      md = false,
      sm = false,
      spacing = 0,
      wrap = 'wrap',
      xl = false,
      xs = false,
      zeroMinWidth = false
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["className", "component", "container", "direction", "item", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

    const styleProps = _extends({}, props, {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    });

    const classes = useUtilityClasses$b(styleProps);
    return /*#__PURE__*/react.createElement(GridRoot, _extends({
      styleProps: styleProps,
      className: clsx(classes.root, className),
      as: component,
      ref: ref
    }, other));
  });

  function render$1(element, items, blendGlobalTheme, blend) {
    const formItems = items.map(item => Components$1(item, blendGlobalTheme, blend));
    reactDom.render(react.createElement(Provider, {
      store: store
    }, react.createElement(Grid, {
      container: true,
      direction: "column"
    }, formItems)), element);
  }

  function supernova() {
    return {
      qae: {
        properties,
        data
      },

      component() {
        const el = stardust.useElement();
        const layout = stardust.useLayout(); //const allItems = useSelector(selectAllItems)

        stardust.useEffect(() => {
          const button = {
            ref: 'actionButton',
            component: 'button',
            blend: layout.blend.id
          };
          const blendGlobalTheme = layout.blendGlobalTheme;
          const blend = layout.blend;
          const formItems = layout.items;
          const index = formItems.findIndex(f => f.component === 'button');

          if (index === -1) {
            formItems.push(button);
          }

          render$1(el, formItems, blendGlobalTheme, blend);
        }, [layout]);
        /* useEffect(() => {
          layout.items.map(function(item){
            // new key
            if(typeof allItems[item.ref] === 'undefined') {
              dispatch(setItem(item.ref, item.defaultValue))
            }
          })
          allItems.map(function(item){
            // key no longer exists
            if(typeof layout.items[item.ref] === 'undefined') {
              dispatch(removeItem(item.ref))
            }
          })
        }, [...layout.items.map(i => i.ref)]); */
      }

    };
  }

  return supernova;

})));
//# sourceMappingURL=qlik-blends.js.map
