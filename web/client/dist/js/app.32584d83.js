(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-715dc413":"9251751f","chunk-3a3939b4":"e1b6cbae","chunk-8b96f714":"7c845161"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-715dc413":1,"chunk-3a3939b4":1,"chunk-8b96f714":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-715dc413":"74f8ad78","chunk-3a3939b4":"4dd36b26","chunk-8b96f714":"487136ad"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"351c":function(e,t,n){"use strict";var r=n("4e97"),o=n.n(r);o.a},"4e97":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"url('https://cdn.discordapp.com/attachments/703617428319502377/703937088059474063/d2cdo5l-7b5e2fb2-baec-47ec-8568-e637b9c7ca20.png') no-repeat","background-size":"cover"}},[n("router-view")],1)},a=[],c={name:"App"},u=c,i=n("2877"),s=n("6544"),l=n.n(s),d=n("7496"),p=Object(i["a"])(u,o,a,!1,null,null,null),f=p.exports;l()(p,{VApp:d["a"]});var h=n("f309");r["a"].use(h["a"]);var m=new h["a"]({}),b=(n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("button",{staticClass:"button",on:{click:function(t){return e.login()}}},[e._v("Login")])])},v=[],y={name:"Home",methods:{login:function(){fetch("http://localhost:8080/api/auth").then((function(e){return e.json()})).then((function(e){if(!e.success)return alert("An error occured!");location.href=e.redirect}))}}},k=y,w=(n("351c"),Object(i["a"])(k,g,v,!1,null,"09865541",null)),j=w.exports,O=n("e455"),_=O.baseurl;r["a"].use(b["a"]);var S=[{path:"/",name:"Home",component:j},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-715dc413"),n.e("chunk-3a3939b4")]).then(n.bind(null,"e124"))}},{path:"/dashboard/guild/:id",name:"Guild_Dashboard",component:function(){return Promise.all([n.e("chunk-715dc413"),n.e("chunk-8b96f714")]).then(n.bind(null,"9b96"))}}],P=new b["a"]({mode:"history",base:_,routes:S}),x=P;r["a"].config.productionTip=!1,new r["a"]({vuetify:m,router:x,render:function(e){return e(f)}}).$mount("#app")},e455:function(e){e.exports=JSON.parse('{"token":"Njk2NzU2MzIyODI1NDA0NDE2.Xsgfkg._Gs5FMGmmSZh4dQYQtndk9ons0g","secret":"48BWgqo8dgeRZ0TmiHheqM0IcaWc9t90","baseurl":"http://localhost:3000","mongodburl":"mongodb+srv://SecondRomeah:itc12345@mongodbxpcoinsystem-cjqmq.mongodb.net/test?authSource=admin&replicaSet=mongodbxpcoinsystem-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"}')}});
//# sourceMappingURL=app.32584d83.js.map