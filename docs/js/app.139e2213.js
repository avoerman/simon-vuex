(function(t){function e(e){for(var a,i,c=e[0],u=e[1],s=e[2],f=0,d=[];f<c.length;f++)i=c[f],r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"065f":function(t,e,n){"use strict";var a=n("e560"),r=n.n(a);r.a},"0ed6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"base-button"},[t._t("default")],2)},r=[],o={name:"BaseButton"},i=o,c=(n("f7f7"),n("2877")),u=Object(c["a"])(i,a,r,!1,null,"3d1f4724",null);u.options.__file="BaseButton.vue";e["default"]=u.exports},"38f3":function(t,e,n){"use strict";var a=n("3e26"),r=n.n(a);r.a},"3e26":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),c={},u=Object(i["a"])(c,r,o,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",[t._v("SIMON")]),n("router-link",{attrs:{to:"/play",tag:"button"}},[t._v("Play")])],1)},d=[],p={name:"home",components:{}},m=p,v=(n("f486"),Object(i["a"])(m,f,d,!1,null,"3a828de6",null));v.options.__file="Home.vue";var S=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Game")],1)},h=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[t.gameNotStarted?n("BaseButton",{staticClass:"startButton",nativeOn:{click:function(e){t.start()}}},[t._v("Start")]):t._e(),t.gameFailed?n("Failed"):t._e(),n("div",{staticClass:"squares"},[n("div",{staticClass:"row"},[n("Square",{attrs:{color:"#019A4A",lit:1===t.litCell,demonstrating:t.demonstrating},nativeOn:{click:function(e){t.handleSquareClick(1)}}}),n("Square",{attrs:{color:"#EB1C24",lit:3===t.litCell,demonstrating:t.demonstrating},nativeOn:{click:function(e){t.handleSquareClick(3)}}})],1),n("div",{staticClass:"row"},[n("Square",{attrs:{color:"#FFDA01",lit:2===t.litCell,demonstrating:t.demonstrating},nativeOn:{click:function(e){t.handleSquareClick(2)}}}),n("Square",{attrs:{color:"#6891CC",lit:4===t.litCell,demonstrating:t.demonstrating},nativeOn:{click:function(e){t.handleSquareClick(4)}}})],1)])],1)},b=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",class:{lit:t.lit,hoverable:!t.demonstrating},style:t.blockStyles})},O=[],T=n("a322"),C=n("6929"),y=n.n(C),x={name:"Square",props:{color:"",lit:!1,demonstrating:!1},computed:{blockStyles:function(){var t=y()(this.color).lighten(.4),e=y()(this.color).lighten(.6);return Object(T["a"])({background:this.color},"background-image",this.lit?"radial-gradient( ".concat(e,", ").concat(this.color,")"):"radial-gradient( ".concat(t,", ").concat(this.color,")"))}}},k=x,j=(n("065f"),Object(i["a"])(k,q,O,!1,null,"46dec944",null));j.options.__file="Square.vue";var $=j.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fail"},[n("div",{staticClass:"failLine"},[t._v(":( Fail - Final Score: "+t._s(t.score))]),n("div",{staticClass:"topScore"},[t._v("Top Score: "+t._s(t.topScore))]),n("BaseButton",{staticClass:"restartButton",nativeOn:{click:function(e){t.restart()}}},[t._v("Play again?")])],1)},E=[],G={name:"Failed",computed:{score:function(){return this.$store.state.currentSequence.length},topScore:function(){return this.$store.state.topScore}},methods:{restart:function(){this.$store.dispatch("restartGame")}}},A=G,D=(n("be3b"),Object(i["a"])(A,w,E,!1,null,"62a30fe6",null));D.options.__file="Failed.vue";var F=D.exports,I={NOT_STARTED:"NOT_STARTED",STARTED:"STARTED",FAIL:"FAIL"},B={name:"Game",components:{Square:$,Failed:F},computed:{demonstrating:function(){return this.$store.state.demonstrating},litCell:function(){return this.$store.state.litCell},gameNotStarted:function(){return this.$store.state.gameState===I.NOT_STARTED},gameFailed:function(){return this.$store.state.gameState===I.FAIL}},created:function(){this.$store.dispatch("updateGameState",I.NOT_STARTED)},methods:{start:function(){this.$store.dispatch("startRound")},handleSquareClick:function(t){this.$store.dispatch("guess",t)}}},R=B,N=(n("38f3"),Object(i["a"])(R,_,b,!1,null,"6baa058d",null));N.options.__file="Game.vue";var P=N.exports,M={components:{Game:P}},L=M,J=(n("fe31"),Object(i["a"])(L,g,h,!1,null,"15d3615e",null));J.options.__file="Play.vue";var U=J.exports;a["a"].use(l["a"]);var H=new l["a"]({routes:[{path:"/",name:"home",component:S},{path:"/play",name:"play",component:U}]}),z=n("8afe"),K=n("2f62");a["a"].use(K["a"]);var Q=new K["a"].Store({state:{gameState:I.NOT_STARTED,litCell:"",demonstrating:!1,currentSequence:[],guessIndex:0,topScore:0},mutations:{addToSequence:function(t,e){t.currentSequence=Object(z["a"])(t.currentSequence).concat([e])},toggleDemonstrating:function(t,e){t.demonstrating=e},lightSquare:function(t,e){t.litCell=e},updateGameState:function(t,e){t.gameState=e},incrementGuessIndex:function(t){t.guessIndex++},resetGuessIndex:function(t){t.guessIndex=0},resetSequence:function(t){t.currentSequence=[]},topScore:function(t,e){t.topScore=e}},actions:{startRound:function(t){var e=t.dispatch,n=t.commit;e("updateGameState",I.STARTED),n("resetGuessIndex"),e("addToSequence"),e("toggleDemonstrating",!0),e("lightSequence",0)},lightSequence:function(t,e){var n=t.dispatch,a=t.state;setTimeout(function(){a.currentSequence[e]?(n("lightSquare",-1),setTimeout(function(){n("lightSquare",a.currentSequence[e]),n("lightSequence",e+1)},100)):(n("toggleDemonstrating",!1),n("lightSquare",-1))},1e3)},restartGame:function(t){var e=t.commit,n=t.dispatch;e("resetGuessIndex"),e("resetSequence"),n("startRound")},guess:function(t,e){var n=t.state,a=t.dispatch,r=t.commit;if(e===n.currentSequence[n.guessIndex]){var o=n.guessIndex===n.currentSequence.length-1;o?a("startRound"):r("incrementGuessIndex")}else a("updateGameState",I.FAIL),a("setTopScore",n.currentSequence.length)},addToSequence:function(t){var e=t.commit,n=Math.floor(4*Math.random()+1);e("addToSequence",n)},toggleDemonstrating:function(t,e){var n=t.commit;n("toggleDemonstrating",e)},lightSquare:function(t,e){var n=t.commit;n("lightSquare",e)},updateGameState:function(t,e){var n=t.commit;n("updateGameState",e)},setTopScore:function(t,e){var n=t.state,a=t.commit;e>n.topScore&&a("topScore",e)}}}),V=(n("a481"),n("ac6a"),n("2ef0")),W=n("eeb4");W.keys().forEach(function(t){var e=W(t),n=Object(V["upperFirst"])(Object(V["camelCase"])(t.replace(/^\.\/(.*)\.\w+$/,"$1")));a["a"].component(n,e.default||e)}),a["a"].config.productionTip=!1,new a["a"]({router:H,store:Q,render:function(t){return t(s)}}).$mount("#app")},"7c15":function(t,e,n){},a0c5:function(t,e,n){},a6ae:function(t,e,n){},be3b:function(t,e,n){"use strict";var a=n("7c15"),r=n.n(a);r.a},c21b:function(t,e,n){},e560:function(t,e,n){},eeb4:function(t,e,n){var a={"./BaseButton.vue":"0ed6"};function r(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="eeb4"},f486:function(t,e,n){"use strict";var a=n("a0c5"),r=n.n(a);r.a},f7f7:function(t,e,n){"use strict";var a=n("a6ae"),r=n.n(a);r.a},f855:function(t,e,n){},fe31:function(t,e,n){"use strict";var a=n("f855"),r=n.n(a);r.a}});
//# sourceMappingURL=app.139e2213.js.map