(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({play:"play"}[e]||e)+"."+{play:"ba4cd68d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={play:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({play:"play"}[e]||e)+"."+{play:"78ed731d"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},"0ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"base-button"},[e._t("default")],2)},a=[],o={name:"BaseButton"},u=o,c=(n("f7f7"),n("2877")),i=Object(c["a"])(u,r,a,!1,null,"3d1f4724",null);i.options.__file="BaseButton.vue";t["default"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("034f"),n("2877")),c={},i=Object(u["a"])(c,a,o,!1,null,null,null);i.options.__file="App.vue";var s=i.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h2",[e._v("SIMON")]),n("router-link",{attrs:{to:"/play",tag:"button"}},[e._v("Play")])],1)},d=[],p={name:"home",components:{}},m=p,v=(n("f486"),Object(u["a"])(m,f,d,!1,null,"3a828de6",null));v.options.__file="Home.vue";var g=v.exports;r["a"].use(l["a"]);var h=new l["a"]({routes:[{path:"/",name:"home",component:g},{path:"/play",name:"play",component:function(){return n.e("play").then(n.bind(null,"8363"))}}]}),S=n("8afe"),y=n("2f62"),b=n("5829");r["a"].use(y["a"]);var T=new y["a"].Store({state:{gameState:b["a"].NOT_STARTED,litCell:"",demonstrating:!1,currentSequence:[],guessIndex:0,topScore:0},mutations:{addToSequence:function(e,t){e.currentSequence=Object(S["a"])(e.currentSequence).concat([t])},toggleDemonstrating:function(e,t){e.demonstrating=t},lightSquare:function(e,t){e.litCell=t},updateGameState:function(e,t){e.gameState=t},incrementGuessIndex:function(e){e.guessIndex++},resetGuessIndex:function(e){e.guessIndex=0},resetSequence:function(e){e.currentSequence=[]},topScore:function(e,t){e.topScore=t}},actions:{startRound:function(e){var t=e.state,n=e.dispatch,r=e.commit;n("updateGameState",b["a"].STARTED),r("resetGuessIndex"),n("addToSequence");var a=t.currentSequence,o=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout(function(){a[t]?(n("lightSquare",a[t]),e(t+1)):(n("toggleDemonstrating",!1),n("lightSquare",-1))},1e3)};n("toggleDemonstrating",!0),o()},restartGame:function(e){var t=e.commit,n=e.dispatch;t("resetGuessIndex"),t("resetSequence"),n("startRound")},guess:function(e,t){var n=e.state,r=e.dispatch,a=e.commit;if(t===n.currentSequence[n.guessIndex]){var o=n.guessIndex===n.currentSequence.length-1;o?r("startRound"):a("incrementGuessIndex")}else r("updateGameState",b["a"].FAIL),r("setTopScore",n.currentSequence.length)},addToSequence:function(e){var t=e.commit,n=Math.floor(4*Math.random()+1);t("addToSequence",n)},toggleDemonstrating:function(e,t){var n=e.commit;n("toggleDemonstrating",t)},lightSquare:function(e,t){var n=e.commit;n("lightSquare",t)},updateGameState:function(e,t){var n=e.commit;n("updateGameState",t)},setTopScore:function(e,t){var n=e.state,r=e.commit;t>n.topScore&&r("topScore",t)}}}),_=(n("a481"),n("ac6a"),n("2ef0")),O=n("eeb4");O.keys().forEach(function(e){var t=O(e),n=Object(_["upperFirst"])(Object(_["camelCase"])(e.replace(/^\.\/(.*)\.\w+$/,"$1")));r["a"].component(n,t.default||t)}),r["a"].config.productionTip=!1,new r["a"]({router:h,store:T,render:function(e){return e(s)}}).$mount("#app")},5829:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={NOT_STARTED:"NOT_STARTED",STARTED:"STARTED",FAIL:"FAIL"}},a0c5:function(e,t,n){},a6ae:function(e,t,n){},c21b:function(e,t,n){},eeb4:function(e,t,n){var r={"./BaseButton.vue":"0ed6"};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="eeb4"},f486:function(e,t,n){"use strict";var r=n("a0c5"),a=n.n(r);a.a},f7f7:function(e,t,n){"use strict";var r=n("a6ae"),a=n.n(r);a.a}});
//# sourceMappingURL=app.cc2832b9.js.map