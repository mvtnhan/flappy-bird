(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/bird.cab12c37.png"},21:function(e,t,n){e.exports=n.p+"static/media/fg.6ecbd537.png"},22:function(e,t,n){e.exports=n.p+"static/media/pipe-bottom.f7914292.png"},23:function(e,t,n){e.exports=n.p+"static/media/pipe-top.07cd2335.png"},24:function(e,t,n){e.exports=n.p+"static/media/bg.f97dc14b.png"},29:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(4),i=n(13),o=n(0),c=n.n(o),u=n(9),p=n.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(3),l=n(18),d=n(19),f=n(26),m=n(28),v=n(1),b=n.n(v),y="BIRD_FLY",g="BIRD_FALL",h="PIPE_MOVE",E="PIPE_GENERATE",P="GAME_START",O="GAME_OVER",R="GAME_OVER",j="PLAYING",w=52,I=300,T=100,k=200,q=32,x=288,_=512,A=108,L=122,M=38,S=26,D=250,G=200,H=3e3,N=n(20),C=n.n(N),V=function(e){var t=e.top,n=e.rotate;return c.a.createElement("div",{style:{position:"absolute",top:t,left:L,height:S,width:M,background:"url(".concat(C.a,")"),transform:"rotate(".concat(n,"deg)"),transition:"transform 100ms, top 300ms"}})},B=Object(s.b)((function(e){var t=e.bird;return{top:t.top,rotate:t.rotate}}),{})(V);V.prototype={top:b.a.number.isRequired,rotate:b.a.number.isRequired};var K=n(21),W=n.n(K),F=function(){return c.a.createElement("div",{style:{position:"absolute",bottom:0,width:"".concat("".concat(x,"px")),height:"".concat("".concat(A,"px")),background:"url(".concat(W.a,")")}})},J=n(22),U=n.n(J),X=n(23),Y=n.n(X),z=function(e){var t=e.leftPadding,n=e.topPipes;return c.a.createElement("div",{style:{position:"relative"}},n.map((function(e,n){var r=e.topPipeHeight;return c.a.createElement("div",{key:n,style:{position:"relative"}},c.a.createElement("div",{style:{position:"absolute",width:w,left:t+n*k,transition:"left 300ms",top:0,height:r,background:"url(".concat(Y.a,")"),backgroundPosition:"bottom"}}),c.a.createElement("div",{style:{position:"absolute",width:w,left:t+n*k,transition:"left 300ms",top:r+T,height:_-r-T,background:"url(".concat(U.a,")")}}))})))},Z=Object(s.b)((function(e){var t=e.pipe;return{leftPadding:t.leftPadding,topPipes:t.topPipes}}),{})(z);z.prototype={leftPadding:b.a.number.isRequired,topPipes:b.a.number.isRequired,pipeInfo:b.a.elementType.isRequired,VERTICAL_DISTANCE:b.a.number.isRequired,HORIZONTAL_DISTANCE:b.a.number.isRequired,screen:b.a.elementType.isRequired,HEIGHT:b.a.number.isRequired};var $,Q,ee,te=n(24),ne=n.n(te);function re(){var e=Object(r.a)(["\n  position: relative;\n  width: ",";\n  height: ",";\n  background: url(",");\n  overflow: hidden;\n"]);return re=function(){return e},e}var ae=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleKeyPress=function(t){t.keyCode===q&&e.props.fly(),e.props.start()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeyPress)}},{key:"render",value:function(){return c.a.createElement(pe,null,c.a.createElement(B,null),c.a.createElement(Z,null),c.a.createElement(F,null))}}]),n}(o.Component),ie=function(){return function(e,t){t().game.status!==j&&($=setInterval((function(){e({type:g}),oe(e,t)}),D),Q=setInterval((function(){e({type:h}),oe(e,t)}),G),ee=setInterval((function(){e({type:E})}),H),e({type:P}))}},oe=function(e,t){var n=t(),r=n.game,a=n.bird,i=n.pipe;r.status===R&&(clearInterval($),clearInterval(Q),clearInterval(ee));var o=i.topPipes.map((function(e,t){var n=e.topPipeHeight;return{x1:i.leftPadding+t*k,y1:n,x2:i.leftPadding+t*k,y2:n+T}})).filter((function(e){var t=e.x1;return t>0&&t<x}));if(a.top>_-A&&e({type:O}),o.length){var c=o[0],u=c.x1,p=c.y1,s=c.x2,l=c.y2;(u<L+19&&L+19<u+w&&a.top+13<p||s<L+19&&L+19<s+w&&a.top+13>l)&&e({type:O})}},ce={start:ie,fly:function(){return function(e){e({type:y})}}},ue=Object(s.b)((function(e){return{status:e.game.status}}),ce)(ae);ie.prototype={status:b.a.elementType.isRequired},oe.prototype={game:b.a.elementType.isRequired,bird:b.a.elementType.isRequired,pipe:b.a.elementType.isRequired,pipeInfo:b.a.elementType.isRequired,screen:b.a.elementType.isRequired,topPipeHeight:b.a.number.isRequired};var pe=a.default.div(re(),"".concat(x,"px"),"".concat(_,"px"),ne.a);function se(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n"]);return se=function(){return e},e}var le=function(e){var t=e.store;return c.a.createElement(de,null,c.a.createElement(s.a,{store:t},c.a.createElement(ue,null)))},de=a.default.div(se()),fe=n(5),me=n(25),ve=n(2),be={top:250,rotate:0},ye=n(27),ge={leftPadding:I,topPipes:[]},he=Object(fe.c)({bird:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type;switch(n){case y:return Object(ve.a)({},e,{top:e.top-50,rotate:-20});case g:return Object(ve.a)({},e,{top:e.top+20,rotate:0});case O:return be;default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type;switch(n){case P:return Object(ve.a)({},e,{status:j});case O:return Object(ve.a)({},e,{status:R});default:return e}},pipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type;switch(n){case h:return e.topPipes.length?Object(ve.a)({},e,{leftPadding:e.leftPadding-10}):e;case E:var r=Math.round(160*Math.random())+80;return Object(ve.a)({},e,{topPipes:[].concat(Object(ye.a)(e.topPipes),[{topPipeHeight:r}])});case O:return ge;default:return e}}}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d;function Pe(){var e=Object(r.a)(["\n","\n"]);return Pe=function(){return e},e}var Oe=Object(a.createGlobalStyle)(Pe(),i.normalize),Re=Object(fe.e)(he,Ee(Object(fe.a)(me.a)));p.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Oe,null),c.a.createElement(le,{store:Re})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.2203c369.chunk.js.map