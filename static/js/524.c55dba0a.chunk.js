/*! For license information please see 524.c55dba0a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[524],{687:function(t,r,e){e.d(r,{Hx:function(){return h},Y5:function(){return f},wr:function(){return u},xc:function(){return l},z1:function(){return s}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function x(){}var w={};f(w,c,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(q([])));E&&E!==e&&n.call(E,c)&&(w=E);var j=x.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function q(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=f(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(Z.prototype),f(Z.prototype,u,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,s,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=q,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:q(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var a="49238e7752d4a6c76c3ea61d8713efe7",c="https://api.themoviedb.org/3",u=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(a));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/search/movie?api_key=").concat(a,"&query=").concat(r));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movies:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"?api_key=").concat(a));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"/credits?api_key=").concat(a));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie credits:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"/reviews?api_key=").concat(a));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie reviews:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}()},429:function(t,r,e){var n=e(689),o=e(87),i=e(841),a=e(184);r.Z=function(t){var r=t.movies,e=(0,n.TH)();return(0,a.jsx)("section",{children:(0,a.jsx)("ul",{children:r.map((function(t){var r=t.id,n=t.title,c=t.name;return(0,a.jsx)(i.H2,{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:e},children:n||c})},r)}))})})}},841:function(t,r,e){e.d(r,{H2:function(){return s},R8:function(){return l},Yq:function(){return h},rS:function(){return f}});var n,o,i,a,c=e(168),u=e(867),s=u.ZP.li(n||(n=(0,c.Z)(["\n  margin-bottom: 8px;\n  \n"]))),f=u.ZP.h1(o||(o=(0,c.Z)(["\n  font-size: 36px;\n  margin-bottom: 30px;\n  font-weight: bold;\n  color: yellow;\n"]))),l=u.ZP.input(i||(i=(0,c.Z)(["\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    min-height: 40px;\n"]))),h=u.ZP.button(a||(a=(0,c.Z)(["\n  padding: 8px 16px;\n  border-radius: 5px;\n  background-color: red;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 50px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n"])))},524:function(t,r,e){e.r(r),e.d(r,{default:function(){return h}});var n=e(439),o=e(791),i=e(87),a=e(429),c=e(498),u=e(841),s=e(184),f=function(){var t=(0,i.lr)(),r=(0,n.Z)(t,2)[1],e=(0,o.useState)(""),a=(0,n.Z)(e,2),c=a[0],f=a[1];return(0,s.jsx)("section",{children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=c.trim();e?r({query:e}):alert("Please enter a search query.")},children:[(0,s.jsx)(u.R8,{type:"text",name:"query",autoFocus:!0,autoComplete:"off",placeholder:"Enter movie",value:c,onChange:function(t){return f(t.target.value)}}),(0,s.jsx)(u.Yq,{type:"submit",children:"Search"})]})})},l=e(687),h=function(){var t=(0,o.useState)([]),r=(0,n.Z)(t,2),e=r[0],h=r[1],p=(0,o.useState)(!1),v=(0,n.Z)(p,2),d=v[0],y=v[1],g=(0,o.useState)(!1),m=(0,n.Z)(g,2),x=m[0],w=m[1],b=(0,i.lr)(),E=(0,n.Z)(b,2),j=E[0],L=E[1],Z=(0,o.useRef)(j.get("query")||"");return(0,o.useEffect)((function(){j.get("query")===Z.current&&Z.current||(Z.current=j.get("query")||"",y(!0),w(!1),(0,l.z1)(Z.current).then((function(t){return h(t)})).catch((function(t){console.error("Error fetching movies:",t)})).finally((function(){y(!1)})))}),[j]),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.rS,{children:"Movies"}),(0,s.jsx)("section",{children:(0,s.jsx)(f,{setSearchParams:L})}),x&&(0,s.jsx)("p",{children:"Please enter a search query."}),d?(0,s.jsx)(c.Z,{}):(0,s.jsx)(a.Z,{movies:e})]})}}}]);
//# sourceMappingURL=524.c55dba0a.chunk.js.map