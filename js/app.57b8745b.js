(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/itp-sandbox/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"browser"},[n("span",[t._v(t._s(t.browser.name))]),n("span",[t._v(t._s(t.browser.version))])]),t._l(t.events,(function(e,r){return n("div",{key:""+e.name+e.storageName},[n("span",[t._v(" "+t._s(e.name)+" ")]),n("span",[t._v(" "+t._s(e.storageName)+" ")]),n("span",[t._v(" "+t._s(t.times[r])+" ")])])}))],2)},o=[],s=n("9ab4"),a=n("b166"),u=n("337f"),c=n.n(u),f=r["a"].extend({name:"App",data:function(){return{events:[],browser:void 0}},computed:{times:function(){return this.events.map((function(t){return Object(a["a"])(t.timeForDate,"yyyy/MM/dd HH:mm:ss")}))}},created:function(){var t=this;this.$task.onVisit().then((function(){return Object(s["a"])(t,void 0,void 0,(function(){var t;return Object(s["b"])(this,(function(e){switch(e.label){case 0:return t=this,[4,this.$task.getEvents()];case 1:return t.events=e.sent(),[2]}}))}))})),this.browser=c.a.getParser(window.navigator.userAgent).getBrowser()}}),l=f,p=(n("034f"),n("2877")),v=Object(p["a"])(l,i,o,!1,null,null,null),m=v.exports,b=n("6f7e"),d=n("804b"),h=function(){function t(t,e,n){this.name=t,this.time=e,this.storageName=n}return Object.defineProperty(t.prototype,"timeForDate",{get:function(){return new Date(this.time)},enumerable:!0,configurable:!0}),t.prototype.asPrimitive=function(){return{name:this.name,time:this.time,storageName:this.storageName}},t.fromPrimitive=function(e){return Object(b["plainToClass"])(t,e)},t}(),g=function(){function t(t){this.storage=t}return Object.defineProperty(t.prototype,"keys",{get:function(){var t="itp-sandbox_"+this.storage.name;return{LAST_VISITED_AT:t+"_last_visited_at",FIRST_VISITED_AT:t+"_first_visited_at"}},enumerable:!0,configurable:!0}),t.prototype.run=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t;return Object(s["b"])(this,(function(e){switch(e.label){case 0:return t=(new Date).getTime(),this.storage.set(this.keys.LAST_VISITED_AT,new h("LastVisited",t,this.storage.name).asPrimitive()),[4,this.storage.get(this.keys.FIRST_VISITED_AT)];case 1:return e.sent()||this.storage.set(this.keys.FIRST_VISITED_AT,new h("FirstVisited",t,this.storage.name).asPrimitive()),[2]}}))}))},t.prototype.getEvents=function(){return Object(s["a"])(this,void 0,void 0,(function(){var t,e,n,r=this;return Object(s["b"])(this,(function(i){switch(i.label){case 0:return t=Object.values(this.keys),[4,Promise.all(t.map((function(t){return r.storage.get(t)})))];case 1:return e=i.sent(),n=e.filter((function(t){return!!t})).map((function(t){return h.fromPrimitive(t)})),[4,Promise.all(n.map((function(t){return Object(d["validateOrReject"])(t)})))];case 2:return i.sent(),[2,n]}}))}))},t}(),y=function(){function t(){this.name=t.name}return t.prototype.set=function(t,e){return window.localStorage.setItem(t,JSON.stringify(e)),Promise.resolve()},t.prototype.get=function(t){var e=window.localStorage.getItem(t);return null===e?Promise.resolve(void 0):Promise.resolve(JSON.parse(e))},t}(),w=n("a78e"),_=n.n(w),O=function(){function t(){this.name=t.name}return t.prototype.set=function(t,e){return _.a.set(t,JSON.stringify(e)),Promise.resolve()},t.prototype.get=function(t){var e=_.a.get(t);return void 0===e?Promise.resolve(void 0):Promise.resolve(JSON.parse(e))},t}(),j={install:function(t){var e=[new g(new y),new g(new O)];function n(){return Object(s["a"])(this,void 0,void 0,(function(){return Object(s["b"])(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(t){return t.run()})))];case 1:return t.sent(),[2]}}))}))}function r(){return Object(s["a"])(this,void 0,void 0,(function(){var t;return Object(s["b"])(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(t){return t.getEvents()})))];case 1:return t=n.sent(),[2,t.flat()]}}))}))}t.prototype.$task={onVisit:n,getEvents:r}}};r["a"].config.productionTip=!1,r["a"].use(j),new r["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.57b8745b.js.map