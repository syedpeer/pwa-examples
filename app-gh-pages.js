!function(e){function t(e){delete installedChunks[e]}function r(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(r)}function n(e){return e=e||1e4,new Promise(function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=p.p+""+w+".hot-update.json";n.open("GET",o,!0),n.timeout=e,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)t();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(n.responseText)}catch(e){return void r(e)}t(e)}}})}function o(e){var t=A[e];if(!t)return p;var r=function(r){return t.hot.active?(A[r]?A[r].parents.indexOf(e)<0&&A[r].parents.push(e):(P=[e],v=r),t.children.indexOf(r)<0&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),P=[]),p(r)};for(var n in p)Object.prototype.hasOwnProperty.call(p,n)&&"e"!==n&&Object.defineProperty(r,n,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(n));return r.e=function(e){function t(){D--,"prepare"===E&&(k[e]||u(e),0===D&&0===H&&d())}return"ready"===E&&i("prepare"),D++,p.e(e).then(t,function(e){throw t(),e})},r}function a(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:l,apply:f,status:function(e){if(!e)return E;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:x[e]};return v=void 0,t}function i(e){E=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function s(e){return+e+""===e?+e:e}function l(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return _=e,i("check"),n(b).then(function(e){if(!e)return i("idle"),null;j={},k={},I=e.c,y=e.h,i("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});g={};return u(5),"prepare"===E&&0===D&&0===H&&d(),t})}function c(e,t){if(I[e]&&j[e]){j[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(g[r]=t[r]);0==--H&&0===D&&d()}}function u(e){I[e]?(j[e]=!0,H++,r(e)):k[e]=!0}function d(){i("ready");var e=m;if(m=null,e)if(_)Promise.resolve().then(function(){return f(_)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&t.push(s(r));e.resolve(t)}}function f(r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");r=r||{};var o,a,l,c,u,d={},f=[],h={},v=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var m in g)if(Object.prototype.hasOwnProperty.call(g,m)){u=s(m);var _;_=g[m]?function(e){for(var t=[e],r={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var a=o.pop(),i=a.id,s=a.chain;if((c=A[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],d=A[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};t.indexOf(u)>=0||(d.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),n(r[u],[i])):(delete r[u],t.push(u),o.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}(u):{type:"disposed",moduleId:m};var b=!1,M=!1,O=!1,H="";switch(_.chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(b=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(_),r.ignoreDeclined||(b=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(_),r.ignoreUnaccepted||(b=new Error("Aborted because "+u+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(_),M=!0;break;case"disposed":r.onDisposed&&r.onDisposed(_),O=!0;break;default:throw new Error("Unexception type "+_.type)}if(b)return i("abort"),Promise.reject(b);if(M){h[u]=g[u],n(f,_.outdatedModules);for(u in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(d[u]||(d[u]=[]),n(d[u],_.outdatedDependencies[u]))}O&&(n(f,[_.moduleId]),h[u]=v)}var D=[];for(a=0;a<f.length;a++)u=f[a],A[u]&&A[u].hot._selfAccepted&&D.push({module:u,errorHandler:A[u].hot._selfAccepted});i("dispose"),Object.keys(I).forEach(function(e){!1===I[e]&&t(e)});for(var k,j=f.slice();j.length>0;)if(u=j.pop(),c=A[u]){var S={},q=c.hot._disposeHandlers;for(l=0;l<q.length;l++)(o=q[l])(S);for(x[u]=S,c.hot.active=!1,delete A[u],delete d[u],l=0;l<c.children.length;l++){var C=A[c.children[l]];C&&((k=C.parents.indexOf(u))>=0&&C.parents.splice(k,1))}}var F,L;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(c=A[u]))for(L=d[u],l=0;l<L.length;l++)F=L[l],(k=c.children.indexOf(F))>=0&&c.children.splice(k,1);i("apply"),w=y;for(u in h)Object.prototype.hasOwnProperty.call(h,u)&&(e[u]=h[u]);var N=null;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(c=A[u])){L=d[u];var R=[];for(a=0;a<L.length;a++)if(F=L[a],o=c.hot._acceptedDependencies[F]){if(R.indexOf(o)>=0)continue;R.push(o)}for(a=0;a<R.length;a++){o=R[a];try{o(L)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:L[a],error:e}),r.ignoreErrored||N||(N=e)}}}for(a=0;a<D.length;a++){var T=D[a];u=T.module,P=[u];try{p(u)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e}),r.ignoreErrored||N||(N=t),N||(N=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||N||(N=e)}}return N?(i("fail"),Promise.reject(N)):(i("idle"),new Promise(function(e){e(f)}))}function p(t){if(A[t])return A[t].exports;var r=A[t]={i:t,l:!1,exports:{},hot:a(t),parents:(M=P,P=[],M),children:[]};return e[t].call(r.exports,r,r.exports,o(t)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),h&&h(e,t)};var v,m,g,y,_=!0,w="e9755fc16561bde9b5fe",b=1e4,x={},P=[],M=[],O=[],E="idle",H=0,D=0,k={},j={},I={},A={};p.m=e,p.c=A,p.d=function(e,t,r){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/pwa-examples/",p.h=function(){return w},o(7)(p.s=7)}([function(e,t,r){"use strict";function n(e){return d[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}function a(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function i(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(f,n):e}function s(e){return!e&&0!==e||!(!m(e)||0!==e.length)}function l(e){var t=o({},e);return t._parent=e,t}function c(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=o,t.indexOf=a,t.escapeExpression=i,t.isEmpty=s,t.createFrame=l,t.blockParams=c,t.appendContextPath=u;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},f=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var v=function(e){return"function"==typeof e};v(/x/)&&(t.isFunction=v=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),t.isFunction=v;var m=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)};t.isArray=m},function(e,t,r){"use strict";function n(e,t){var r=t&&t.loc,a=void 0,i=void 0;r&&(a=r.start.line,i=r.start.column,e+=" - "+a+":"+i);for(var s=Error.prototype.constructor.call(this,e),l=0;l<o.length;l++)this[o[l]]=s[o[l]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{r&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}t.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},l.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=o;var a=r(0),i=r(1),s=n(i),l=r(11),c=r(19),u=r(21),d=n(u);t.VERSION="4.0.10";t.COMPILER_REVISION=7;var f={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=f;o.prototype={constructor:o,logger:d.default,log:d.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new s.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new s.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new s.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var p=d.default.log;t.log=p,t.createFrame=a.createFrame,t.logger=d.default},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},,,,function(e,t,r){"use strict";var n=r(8),o=function(e){return e&&e.__esModule?e:{default:e}}(n);document.addEventListener("DOMContentLoaded",function(){document.querySelector("#app").innerHTML=(0,o.default)({title:"hi!"})})},function(e,t,r){var n=r(9);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,n,o){var a;return'<div class="container">\n  <header>\n    <h1>'+e.escapeExpression((a=null!=(a=r.title||(null!=t?t.title:t))?a:r.helperMissing,"function"==typeof a?a.call(null!=t?t:e.nullContext||{},{name:"title",hash:{},data:o}):a))+'</h1>\n    <nav></nav>\n  </header>\n\n  <div id="slideshow-content"></div>\n\n  <main>\n    <div class="page" id="adoption">\n      <div class="container">\n        <h2 class="page-headline">Adoption</h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur dignissimos maiores quo veritatis.\n          Dolores pariatur quisquam sit tempore. Ab blanditiis cumque dicta doloremque dolores officia sit tempore vel vero.\n        </p>\n      </div>\n    </div>\n    <div class="page" id="appointments">\n      <div class="container">\n        <h2 class="page-headline">Appointments</h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta enim expedita in nemo officia quidem, voluptates.\n          Architecto cum cumque deleniti distinctio est et facere nobis porro, provident quasi, reiciendis voluptatibus!\n        </p>\n      </div>\n    </div>\n  </main>\n</div>\n'},useData:!0})},function(e,t,r){e.exports=r(10).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(){var e=new s.HandlebarsEnvironment;return p.extend(e,s),e.SafeString=c.default,e.Exception=d.default,e.Utils=p,e.escapeExpression=p.escapeExpression,e.VM=v,e.template=function(t){return v.template(t,e)},e}t.__esModule=!0;var i=r(2),s=o(i),l=r(22),c=n(l),u=r(1),d=n(u),f=r(0),p=o(f),h=r(23),v=o(h),m=r(24),g=n(m),y=a();y.create=a,g.default(y),y.default=y,t.default=y,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){i.default(e),l.default(e),u.default(e),f.default(e),h.default(e),m.default(e),y.default(e)}t.__esModule=!0,t.registerDefaultHelpers=o;var a=r(12),i=n(a),s=r(13),l=n(s),c=r(14),u=n(c),d=r(15),f=n(d),p=r(16),h=n(p),v=r(17),m=n(v),g=r(18),y=n(g)},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e){e.registerHelper("each",function(e,t){function r(t,r,a){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!a,u&&(c.contextPath=u+t)),l+=o(e[t],{data:c,blockParams:n.blockParams([e[t],t],[u+t,null])})}if(!t)throw new a.default("Must pass iterator to #each");var o=t.fn,i=t.inverse,s=0,l="",c=void 0,u=void 0;if(t.data&&t.ids&&(u=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(c=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var d=e.length;s<d;s++)s in e&&r(s,s,s===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&r(f,s-1),f=p,s++);void 0!==f&&r(f,s-1,!0)}return 0===s&&(l=i(this)),l})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&(o=n.createFrame(t.data),o.contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:o,blockParams:n.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";function n(e){a.default(e)}t.__esModule=!0,t.registerDefaultDecorators=n;var o=r(20),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var s=e(o,a);return r.partials=i,s}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=e&&e[0]||1,r=v.COMPILER_REVISION;if(t!==r){if(t<r){var n=v.REVISION_CHANGES[r],o=v.REVISION_CHANGES[t];throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){function r(r,n,o){o.hash&&(n=f.extend({},n,o.hash),o.ids&&(o.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,o);var a=t.VM.invokePartial.call(this,r,n,o);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),a=o.partials[o.name](n,o)),null!=a){if(o.indent){for(var i=a.split("\n"),s=0,l=i.length;s<l&&(i[s]||s+1!==l);s++)i[s]=o.indent+i[s];a=i.join("\n")}return a}throw new h.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function n(t){function r(t){return""+e.main(o,t,o.helpers,o.partials,i,l,s)}var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=a.data;n._setup(a),!a.partial&&e.useData&&(i=c(t,i));var s=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(s=a.depths?t!=a.depths[0]?[t].concat(a.depths):a.depths:[t]),(r=u(e.main,r,o,a.depths||[],i,l))(t,a)}if(!t)throw new h.default("No environment passed to template");if(!e||!e.main)throw new h.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var o={strict:function(e,t){if(!(t in e))throw new h.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:f.escapeExpression,invokePartial:r,fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var i=this.programs[e],s=this.fn(e);return t||o||n||r?i=a(this,e,s,t,r,n,o):i||(i=this.programs[e]=a(this,e,s)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=f.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return n.isTop=!0,n._setup=function(r){r.partial?(o.helpers=r.helpers,o.partials=r.partials,o.decorators=r.decorators):(o.helpers=o.merge(r.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=o.merge(r.decorators,t.decorators)))},n._child=function(t,r,n,i){if(e.useBlockParams&&!n)throw new h.default("must pass block params");if(e.useDepths&&!i)throw new h.default("must pass parent depths");return a(o,t,e[t],r,0,n,i)},n}function a(e,t,r,n,o,a,i){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(s=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),s)}return s=u(r,s,e,i,n,a),s.program=t,s.depth=i?i.length:0,s.blockParams=o||0,s}function i(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e}function s(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;if(r.fn&&r.fn!==l&&function(){r.data=v.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=v.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=f.extend({},r.partials,e.partials))}(),void 0===e&&o&&(e=o),void 0===e)throw new h.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)}function l(){return""}function c(e,t){return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t}function u(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),f.extend(t,i)}return t}t.__esModule=!0,t.checkRevision=n,t.template=o,t.wrapProgram=a,t.resolvePartial=i,t.invokePartial=s,t.noop=l;var d=r(0),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(d),p=r(1),h=function(e){return e&&e.__esModule?e:{default:e}}(p),v=r(2)},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,r(3))}]);