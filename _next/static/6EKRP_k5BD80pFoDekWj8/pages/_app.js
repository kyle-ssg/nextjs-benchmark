!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}},o=!0;try{e[t].call(n.exports,n,n.exports,u),o=!1}finally{o&&delete r[t]}return n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push(["3Ckp",3,2]),n()}({"00et":function(e,t,n){},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("LkAs"),o=n("Moms"),a=n("bMj6"),u=n("hZod"),i=n("tEuJ"),c=n("mXGw"),l=n.n(c),s=n("o42t"),f=n.n(s),p=n("0EY2"),h=n.n(p),d=(n("00et"),n("5dyF")),v=n.n(d),m={marginRight:15};function y(){return l.a.createElement("div",null,l.a.createElement(v.a,{href:"/"},l.a.createElement("a",{style:m},"Home")),l.a.createElement(v.a,{href:"/about"},l.a.createElement("a",{style:m},"About")),l.a.createElement(v.a,{href:"/markup"},l.a.createElement("a",{style:m},"Markup")))}var b=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return l.a.createElement(s.Container,null,l.a.createElement(h.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),l.a.createElement("title",null,"TheProject"),l.a.createElement("link",{rel:"shortcut icon",href:"/images/favicon.ico"})),l.a.createElement(y,null),l.a.createElement(t,n))}}]),t}(f.a);t.default=b},"1qCV":function(e,t,n){e.exports=n("wFa1")},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6jsY":function(e,t,n){"use strict";var r=n("PL1w"),o=r(n("LkAs")),a=r(n("Moms")),u=r(n("bMj6")),i=r(n("hZod")),c=r(n("tEuJ")),l=r(n("UrUy")),s=n("PL1w");t.__esModule=!0,t.Container=w,t.createUrl=E,t.default=void 0;var f=s(n("pzQc")),p=s(n("VJxl")),h=s(n("mXGw")),d=s(n("W0B4")),v=n("MUK1");t.AppInitialProps=v.AppInitialProps;var m=n("bBV7");function y(e){return b.apply(this,arguments)}function b(){return(b=(0,p.default)(l.default.mark(function e(t){var n,r,o;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=E(t);return h.default.createElement(w,null,h.default.createElement(n,(0,f.default)({},r,{url:o})))}}]),t}(h.default.Component);function w(e){return e.children}t.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=y,g.getInitialProps=y;var k=(0,v.execOnce)(function(){0});function E(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return k(),r},get pathname(){return k(),t},get asPath(){return k(),n},back:function(){k(),e.back()},push:function(t,n){return k(),e.push(t,n)},pushTo:function(t,n){k();var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return k(),e.replace(t,n)},replaceTo:function(t,n){k();var r=n?t:"",o=n||t;return e.replace(r,o)}}}},"9CGT":function(e,t,n){"use strict";var r=n("PL1w"),o=r(n("LkAs")),a=r(n("Moms")),u=r(n("bMj6")),i=r(n("hZod")),c=r(n("tEuJ")),l=n("k3h2"),s=n("PL1w");t.__esModule=!0,t.default=void 0;var f,p=s(n("6mFX")),h=n("so/P"),d=l(n("mXGw")),v=(s(n("W0B4")),s(n("bBV7"))),m=(n("12ro"),n("MUK1"));function y(e){return e&&"object"==typeof e?(0,m.formatWithValidation)(e):e}var b=new p.default,g=window.IntersectionObserver;function w(){return f||(g?f=new g(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function t(){var e,n,r,a,c;return(0,o.default)(this,t),(e=(0,u.default)(this,(0,i.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=(n=function(e,t){return{href:y(e),as:t?y(t):t}},r=null,a=null,c=null,function(e,t){if(c&&e===r&&t===a)return c;var o=n(e,t);return r=e,a=t,c=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),u=a.href,i=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(u)){var c=window.location.pathname;u=(0,h.resolve)(c,u),i=i?(0,h.resolve)(c,i):u,t.preventDefault();var l=e.props.scroll;null==l&&(l=i.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](u,i,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,c.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),b.set(e,t),function(){n.unobserve(e),b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),u={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||r),d.default.cloneElement(a,u)}}]),t}(d.Component);k.propTypes=void 0,k.defaultProps={prefetch:!0};var E=k;t.default=E},"9lmX":function(e,t,n){n("zWrT");var r=n("TaGV").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},AFnJ:function(e,t,n){n("CAwg"),e.exports=n("TaGV").Object.assign},CAwg:function(e,t,n){var r=n("/6KZ");r(r.S+r.F,"Object",{assign:n("tbIA")})},E02R:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"F+l/":function(e,t,n){var r=n("dCrc"),o=n("/Lgp");n("qNvu")("keys",function(){return function(e){return o(r(e))}})},FtQO:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},NS33:function(e,t,n){"use strict";var r=n("E02R");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},U8Yc:function(e,t,n){e.exports=n("AFnJ")},W0B4:function(e,t,n){e.exports=n("NS33")()},dm4u:function(e,t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){r=window}e.exports=r},o42t:function(e,t,n){e.exports=n("6jsY")},tbIA:function(e,t,n){"use strict";var r=n("lBnu"),o=n("/Lgp"),a=n("phsM"),u=n("kBaS"),i=n("dCrc"),c=n("6wgB"),l=Object.assign;e.exports=!l||n("/Vl9")(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r})?function(e,t){for(var n=i(e),l=arguments.length,s=1,f=a.f,p=u.f;l>s;)for(var h,d=c(arguments[s++]),v=f?o(d).concat(f(d)):o(d),m=v.length,y=0;m>y;)h=v[y++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:l},tvLF:function(e,t,n){e.exports=n("9lmX")},wFa1:function(e,t,n){n("F+l/"),e.exports=n("TaGV").Object.keys},zWrT:function(e,t,n){var r=n("T/1i"),o=n("0HwX").f;n("qNvu")("getOwnPropertyDescriptor",function(){return function(e,t){return o(r(e),t)}})}});