(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var aa={a:!0},l={};try{l.__proto__=aa;k=l.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=h,n=this||self;
function p(a){a=a.split(".");for(var b=n,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ba:q=ca;return q.apply(null,arguments)}
function r(a,b){var c=a.split("."),e=n;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
;function u(){this.s=this.s;this.B=this.B}
u.prototype.s=!1;u.prototype.dispose=function(){this.s||(this.s=!0,this.G())};
u.prototype.G=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var v=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",v);function w(a,b){return a in v?v[a]:b}
;function x(a,b){var c=y(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function y(a){var b=w("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:w("EXPERIMENT_FLAGS",{})[a]}
;var da=x("web_emulated_idle_callback_delay",300),z=1E3/60-3;
function B(a){a=void 0===a?{}:a;u.call(this);this.g=[];this.g[8]=[];this.g[4]=[];this.g[3]=[];this.g[2]=[];this.g[1]=[];this.g[0]=[];this.j=0;this.N=a.timeout||1;this.i={};this.o=z;this.C=this.h=this.m=0;this.D=this.l=!1;this.u=[];this.H=q(this.R,this);this.M=q(this.T,this);this.J=q(this.O,this);this.K=q(this.P,this);this.L=q(this.S,this);this.A=this.F=!1;var b;if(b=!!window.requestIdleCallback)b=y("disable_scheduler_requestIdleCallback"),b=!("string"===typeof b&&"false"===b?0:b);this.I=b;(this.v=
!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.H)}
B.prototype=g(u.prototype);B.prototype.constructor=B;if(m)m(B,u);else for(var C in u)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(u,C);D&&Object.defineProperty(B,C,D)}else B[C]=u[C];function E(a,b){var c=Date.now();F(b);c=Date.now()-c;a.l||(a.o-=c)}
function G(a,b,c,e){++a.C;if(10==c)return E(a,b),a.C;var d=a.C;a.i[d]=b;a.l&&!e?a.u.push({id:d,priority:c}):(a.g[c].push(d),a.D||a.l||(0!=a.h&&H(a)!=a.m&&I(a),a.start()));return d}
function J(a){a.u.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};I(a)}
function H(a){if(a.g[8].length){if(a.A)return 4;if(!document.hidden&&a.v)return 3}for(var b=4;b>=a.j;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function F(a){try{a()}catch(b){(a=p("yt.logging.errors.log"))&&a(b)}}
function K(a){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}
f=B.prototype;f.P=function(a){var b=void 0;a&&(b=a.timeRemaining());this.F=!0;L(this,b);this.F=!1};
f.T=function(){L(this)};
f.O=function(){M(this)};
f.S=function(){this.A=!0;var a=H(this);4==a&&a!=this.m&&(I(this),this.start());L(this);this.A=!1};
f.R=function(){document.hidden||M(this);this.h&&(I(this),this.start())};
function M(a){I(a);a.l=!0;for(var b=Date.now(),c=a.g[8];c.length;){var e=c.shift(),d=a.i[e];delete a.i[e];d&&F(d)}N(a);a.l=!1;K(a)&&a.start();a.o-=Date.now()-b}
function N(a){for(var b=0,c=a.u.length;b<c;b++){var e=a.u[b];a.g[e.priority].push(e.id)}a.u.length=0}
function L(a,b){a.A&&4==a.m&&a.h||I(a);a.l=!0;for(var c=Date.now()+(b||a.o),e=a.g[4];e.length;){var d=e.shift(),t=a.i[d];delete a.i[d];t&&F(t)}e=a.F?0:1;e=a.j>e?a.j:e;if(!(Date.now()>=c)){do{a:{d=a;t=e;for(var A=3;A>=t;A--)for(var R=d.g[A];R.length;){var S=R.shift(),T=d.i[S];delete d.i[S];if(T){d=T;break a}}d=null}d&&F(d)}while(d&&Date.now()<c)}a.l=!1;N(a);a.o=z;K(a)&&a.start()}
f.start=function(){this.D=!1;if(0==this.h)switch(this.m=H(this),this.m){case 1:var a=this.K;this.h=this.I?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,da);break;case 2:this.h=window.setTimeout(this.M,this.N);break;case 3:this.h=window.requestAnimationFrame(this.L);break;case 4:this.h=window.setTimeout(this.J,0)}};
function I(a){if(a.h){switch(a.m){case 1:var b=a.h;a.I?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
f.G=function(){J(this);I(this);this.v&&document.removeEventListener("visibilitychange",this.H);u.prototype.G.call(this)};var O=p("yt.scheduler.instance.timerIdMap_")||{},P=x("kevlar_tuner_scheduler_soft_state_timer_ms",800),Q=0,U=0;function V(){var a=p("ytglobal.schedulerInstanceInstance_");if(!a||a.s)a=new B(w("scheduler",void 0)||{}),r("ytglobal.schedulerInstanceInstance_",a);return a}
function ea(){var a=p("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),r("ytglobal.schedulerInstanceInstance_",null))}
function fa(){J(V())}
function ha(a,b,c){if(0==c||void 0===c)return c=void 0===c,-G(V(),a,b,c);var e=window.setTimeout(function(){var d=G(V(),a,b);O[e]=d},c);
return e}
function ia(a){var b=V();E(b,a)}
function ja(a){var b=V();if(0>a)delete b.i[-a];else{var c=O[a];c?(delete b.i[c],delete O[a]):window.clearTimeout(a)}}
function W(a){var b=p("ytcsi.tick");b&&b(a)}
function ka(){W("jse");X()}
function X(){window.clearTimeout(Q);V().start()}
function la(){var a=V();I(a);a.D=!0;window.clearTimeout(Q);Q=window.setTimeout(ka,P)}
function Y(){window.clearTimeout(U);U=window.setTimeout(function(){W("jset");Z(0)},P)}
function Z(a){Y();var b=V();b.j=a;b.start()}
function ma(a){Y();var b=V();b.j>a&&(b.j=a,b.start())}
function na(){window.clearTimeout(U);var a=V();a.j=0;a.start()}
;p("yt.scheduler.initialized")||(r("yt.scheduler.instance.dispose",ea),r("yt.scheduler.instance.addJob",ha),r("yt.scheduler.instance.addImmediateJob",ia),r("yt.scheduler.instance.cancelJob",ja),r("yt.scheduler.instance.cancelAllJobs",fa),r("yt.scheduler.instance.start",X),r("yt.scheduler.instance.pause",la),r("yt.scheduler.instance.setPriorityThreshold",Z),r("yt.scheduler.instance.enablePriorityThreshold",ma),r("yt.scheduler.instance.clearPriorityThreshold",na),r("yt.scheduler.initialized",!0));}).call(this);
