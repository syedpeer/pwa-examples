w([2],{337:function(e,t,a){"use strict";var r=a(338),n=function(e){return e&&e.__esModule?e:{default:e}}(r);document.addEventListener("DOMContentLoaded",function(){document.querySelector("#app").innerHTML=(0,n.default)({title:"hi!"})})},353:function(e,t,a){"use strict";function r(e){var t=e&&e[0]||1,a=m.COMPILER_REVISION;if(t!==a){if(t<a){var r=m.REVISION_CHANGES[a],n=m.REVISION_CHANGES[t];throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+n+").")}throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function n(e,t){function a(a,r,n){n.hash&&(r=p.extend({},r,n.hash),n.ids&&(n.ids[0]=!0)),a=t.VM.resolvePartial.call(this,a,r,n);var o=t.VM.invokePartial.call(this,a,r,n);if(null==o&&t.compile&&(n.partials[n.name]=t.compile(a,e.compilerOptions,t),o=n.partials[n.name](r,n)),null!=o){if(n.indent){for(var i=o.split("\n"),l=0,u=i.length;l<u&&(i[l]||l+1!==u);l++)i[l]=n.indent+i[l];o=i.join("\n")}return o}throw new h.default("The partial "+n.name+" could not be compiled when running in runtime-only mode")}function r(t){function a(t){return""+e.main(n,t,n.helpers,n.partials,i,u,l)}var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;r._setup(o),!o.partial&&e.useData&&(i=s(t,i));var l=void 0,u=e.useBlockParams?[]:void 0;return e.useDepths&&(l=o.depths?t!=o.depths[0]?[t].concat(o.depths):o.depths:[t]),(a=c(e.main,a,n,o.depths||[],i,u))(t,o)}if(!t)throw new h.default("No environment passed to template");if(!e||!e.main)throw new h.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new h.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var a=e.length,r=0;r<a;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:p.escapeExpression,invokePartial:a,fn:function(t){var a=e[t];return a.decorator=e[t+"_d"],a},programs:[],program:function(e,t,a,r,n){var i=this.programs[e],l=this.fn(e);return t||n||r||a?i=o(this,e,l,t,a,r,n):i||(i=this.programs[e]=o(this,e,l)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var a=e||t;return e&&t&&e!==t&&(a=p.extend({},t,e)),a},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return r.isTop=!0,r._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators):(n.helpers=n.merge(a.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(a.decorators,t.decorators)))},r._child=function(t,a,r,i){if(e.useBlockParams&&!r)throw new h.default("must pass block params");if(e.useDepths&&!i)throw new h.default("must pass parent depths");return o(n,t,e[t],a,0,r,i)},r}function o(e,t,a,r,n,o,i){function l(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),a(e,t,e.helpers,e.partials,n.data||r,o&&[n.blockParams].concat(o),l)}return l=c(a,l,e,i,r,o),l.program=t,l.depth=i?i.length:0,l.blockParams=n||0,l}function i(e,t,a){return e?e.call||a.name||(a.name=e,e=a.partials[e]):e="@partial-block"===a.name?a.data["partial-block"]:a.partials[a.name],e}function l(e,t,a){var r=a.data&&a.data["partial-block"];a.partial=!0,a.ids&&(a.data.contextPath=a.ids[0]||a.data.contextPath);var n=void 0;if(a.fn&&a.fn!==u&&function(){a.data=m.createFrame(a.data);var e=a.fn;n=a.data["partial-block"]=function(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return a.data=m.createFrame(a.data),a.data["partial-block"]=r,e(t,a)},e.partials&&(a.partials=p.extend({},a.partials,e.partials))}(),void 0===e&&n&&(e=n),void 0===e)throw new h.default("The partial "+a.name+" could not be found");if(e instanceof Function)return e(t,a)}function u(){return""}function s(e,t){return t&&"root"in t||(t=t?m.createFrame(t):{},t.root=e),t}function c(e,t,a,r,n,o){if(e.decorator){var i={};t=e.decorator(t,i,a,r&&r[0],n,o,r),p.extend(t,i)}return t}t.__esModule=!0,t.checkRevision=r,t.template=n,t.wrapProgram=o,t.resolvePartial=i,t.invokePartial=l,t.noop=u;var d=a(29),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(d),f=a(50),h=function(e){return e&&e.__esModule?e:{default:e}}(f),m=a(128)}},[337]);