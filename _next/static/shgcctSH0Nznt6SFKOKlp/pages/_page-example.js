(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+TSP":function(t,e,n){t.exports=window.fetch||(window.fetch=n("YUY5").default||n("YUY5"))},"5tTa":function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"6oba":function(t,e,n){n("iKhv"),n("WwSA"),n("k/kI"),n("oiJE"),n("P8hI"),n("L7yD"),t.exports=n("TaGV").Promise},L7yD:function(t,e,n){"use strict";var r=n("/6KZ"),o=n("WJTZ"),i=n("5tTa");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},P8hI:function(t,e,n){"use strict";var r=n("/6KZ"),o=n("TaGV"),i=n("41F1"),a=n("PK7I"),c=n("zafj");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},PK7I:function(t,e,n){var r=n("ADe/"),o=n("HD3J"),i=n("0Sp3")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},"R3/3":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n("ZOIa"),o=n.n(r);function i(t,e,n,r,i,a,c){try{var s=t[a](c),u=s.value}catch(f){return void n(f)}s.done?e(u):o.a.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)})}}},UrUy:function(t,e,n){t.exports=n("wcNg")},WJTZ:function(t,e,n){"use strict";var r=n("HD3J");function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},YUY5:function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,r){var o=new XMLHttpRequest,i=[],a=[],c={},s=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:s,headers:{keys:function(){return i},entries:function(){return a},get:function(t){return c[t.toLowerCase()]},has:function(t){return t.toLowerCase()in c}}}};for(var u in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,n){i.push(e=e.toLowerCase()),a.push([e,n]),c[e]=c[e]?c[e]+","+n:n}),n(s())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(u,e.headers[u]);o.send(e.body||null)})}},ZOIa:function(t,e,n){t.exports=n("6oba")},cCv0:function(t,e,n){var r,o,i,a=n("8Xl/"),c=n("qacR"),s=n("5gKE"),u=n("m/Uw"),f=n("41F1"),h=f.process,l=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,m=0,y={},w=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},g=function(t){w.call(t.data)};l&&v||(l=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++m]=function(){c("function"==typeof t?t:Function(t),e)},r(m),m},v=function(t){delete y[t]},"process"==n("g2rQ")(h)?r=function(t){h.nextTick(a(w,t,1))}:d&&d.now?r=function(t){d.now(a(w,t,1))}:p?(i=(o=new p).port2,o.port1.onmessage=g,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in u("script")?function(t){s.appendChild(u("script")).onreadystatechange=function(){s.removeChild(this),w.call(t)}}:function(t){setTimeout(a(w,t,1),0)}),t.exports={set:l,clear:v}},gDZL:function(t,e,n){var r=n("41F1").navigator;t.exports=r&&r.userAgent||""},oiJE:function(t,e,n){"use strict";var r,o,i,a,c=n("gtwY"),s=n("41F1"),u=n("8Xl/"),f=n("/1nD"),h=n("/6KZ"),l=n("fGh/"),v=n("HD3J"),p=n("LuVv"),d=n("s9UB"),m=n("PK7I"),y=n("cCv0").set,w=n("qg1s")(),g=n("WJTZ"),_=n("5tTa"),x=n("gDZL"),P=n("zafj"),L=s.TypeError,E=s.process,b=E&&E.versions,j=b&&b.v8||"",T=s.Promise,k="process"==f(E),O=function(){},S=o=g.f,F=!!function(){try{var t=T.resolve(1),e=(t.constructor={})[n("0Sp3")("species")]=function(t){t(O,O)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==j.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),G=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;w(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,c=o?e.ok:e.fail,s=e.resolve,u=e.reject,f=e.domain;try{c?(o||(2==t._h&&C(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),a=!0)),n===e.promise?u(L("Promise-chain cycle")):(i=G(n))?i.call(n,s,u):s(n)):u(r)}catch(h){f&&!a&&f.exit(),u(h)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){y.call(s,function(){var e,n,r,o=t._v,i=R(t);if(i&&(e=_(function(){k?E.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=k||R(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){y.call(s,function(){var e;k?E.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},J=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw L("Promise can't be resolved itself");(e=G(t))?w(function(){var r={_w:n,_d:!1};try{e.call(t,u(J,r,1),u(D,r,1))}catch(o){D.call(r,o)}}):(n._v=t,n._s=1,I(n,!1))}catch(r){D.call({_w:n,_d:!1},r)}}};F||(T=function(t){p(this,T,"Promise","_h"),v(t),r.call(this);try{t(u(J,this,1),u(D,this,1))}catch(e){D.call(this,e)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("IUx0")(T.prototype,{then:function(t,e){var n=S(m(this,T));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(J,t,1),this.reject=u(D,t,1)},g.f=S=function(t){return t===T||t===a?new i(t):o(t)}),h(h.G+h.W+h.F*!F,{Promise:T}),n("sWB5")(T,"Promise"),n("hXZv")("Promise"),a=n("TaGV").Promise,h(h.S+h.F*!F,"Promise",{reject:function(t){var e=S(this);return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(c||!F),"Promise",{resolve:function(t){return P(c&&this===a?T:this,t)}}),h(h.S+h.F*!(F&&n("Clx3")(function(t){T.all(t).catch(O)})),"Promise",{all:function(t){var e=this,n=S(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,a=1;d(t,!1,function(t){var c=i++,s=!1;n.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,n[c]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=S(e),r=n.reject,o=_(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},q86v:function(t,e,n){"use strict";n.r(e);var r=n("UrUy"),o=n.n(r),i=n("R3/3"),a=n("mXGw"),c=n.n(a),s=n("+TSP"),u=n.n(s),f=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Batman TV Shows"),c.a.createElement("ul",null,t.shows.map(function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("strong",null,t.name))})))};f.getInitialProps=Object(i.default)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()("https://api.tvmaze.com/search/shows?q=batman");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{shows:n.map(function(t){return t.show})});case 7:case"end":return t.stop()}},t)})),e.default=f},qacR:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},qg1s:function(t,e,n){var r=n("41F1"),o=n("cCv0").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,s="process"==n("g2rQ")(a);t.exports=function(){var t,e,n,u=function(){var r,o;for(s&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=void 0,i}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(u)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(u)}}else n=function(){o.call(r,u)};else{var h=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),n=function(){l.data=h=!h}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},wcNg:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",l="executing",v="completed",p={};function d(){}function m(){}function y(){}var w={};w[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(k([])));_&&_!==n&&r.call(_,i)&&(w=_);var x=y.prototype=d.prototype=Object.create(w);function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=u(t[n],t,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},P(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o){var i=new L(s(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},P(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},xiMG:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_page-example",function(){var t=n("q86v");return{page:t.default||t}}])},zafj:function(t,e,n){var r=n("ADe/"),o=n("fGh/"),i=n("WJTZ");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}}},[["xiMG",1,0]]]);