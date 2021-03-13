(function(g){var window=this;var j4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.W.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.DN(a,e,"i"));g.Gi(this,g.aO(b.Jb(),this.element))},k4=function(a){g.W.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.ai=!1;this.player=a;this.N(a,"minimized",this.Ug);this.N(a,"onStateChange",this.GQ)},l4=function(a){g.gN.call(this,a);
this.i=new k4(this.player);this.i.hide();g.XM(this.player,this.i.element,4);a.xe()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(j4,g.W);j4.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u(k4,g.W);g.k=k4.prototype;
g.k.show=function(){this.be=new g.bn(this.Fr,null,this);this.be.start();if(!this.ai){this.tooltip=new g.aR(this.player,this);g.J(this,this.tooltip);g.XM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qb=new g.WN(this.player);g.J(this,this.Qb);this.zj=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.zj);this.zj.fa(this.element);this.N(this.zj.element,"click",this.XF);var a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.gL()]});
g.J(this,a);a.fa(this.zj.element);this.N(a.element,"click",this.sj);a=new j4(this.player,this);g.J(this,a);a.fa(this.zj.element);g.T(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.lQ(this.player,this),g.J(this,a),a.fa(this.zj.element),a=new g.rP(this.player,this),g.J(this,a),a.fa(this.zj.element));this.Vm=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Vm);this.Vm.fa(this.zj.element);this.N(this.Vm.element,"click",this.XF);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});
g.J(this,b);b.fa(this.Vm.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.fa(this.Vm.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.fa(this.Vm.element);this.rG=new g.wP(this.player,this,!1);g.J(this,this.rG);this.rG.fa(b.element);b=new g.tP(this.player,this);g.J(this,b);b.fa(a.element);this.nextButton=new g.wP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.fa(c.element);this.Ei=new g.mQ(this.player,this);g.J(this,
this.Ei);this.Ei.fa(this.zj.element);this.Zc=new g.BP(this.player,this);g.J(this,this.Zc);g.XM(this.player,this.Zc.element,4);this.Au=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.Au);g.XM(this.player,this.Au.element,4);a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.gL()]});g.J(this,a);a.fa(this.Au.element);this.N(a.element,"click",this.sj);a=new g.W({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},
S:[g.lL()]});g.J(this,a);a.fa(this.Au.element);this.N(a.element,"click",this.SO);this.N(this.player,"presentingplayerstatechange",this.Wb);this.N(this.player,"appresize",this.Za);this.N(this.player,"fullscreentoggled",this.Za);this.Za();this.ai=!0}0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Zc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.be&&(this.be.dispose(),this.be=void 0);g.W.prototype.hide.call(this);this.player.xe()||(this.ai&&this.Zc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.be&&(this.be.dispose(),this.be=void 0);g.W.prototype.da.call(this)};
g.k.sj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.SO=function(){this.player.playVideo()};
g.k.XF=function(a){if(a.target===this.zj.element||a.target===this.Vm.element)g.T(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.Wa())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.Ug=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.xe())};
g.k.oe=function(){this.Zc.Bb();this.Ei.Bb()};
g.k.Fr=function(){this.oe();this.be&&this.be.start()};
g.k.Wb=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.Za=function(){g.MP(this.Zc,0,this.player.Ka().getPlayerSize().width,!1);g.DP(this.Zc)};
g.k.GQ=function(a){this.player.xe()&&(0===a?this.hide():this.show())};
g.k.Jb=function(){return this.tooltip};
g.k.ue=function(){return!1};
g.k.Me=function(){return!1};
g.k.ci=function(){return!1};
g.k.bA=function(){};
g.k.Ym=function(){};
g.k.Dq=function(){};
g.k.hn=function(){return null};
g.k.cj=function(){return new g.cg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.ip=function(a,b,c,d,e){var f=0,h=d=0,l=g.Cg(a);if(b){c=g.kn(b,"ytp-prev-button")||g.kn(b,"ytp-next-button");var m=g.kn(b,"ytp-play-button"),n=g.kn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ag(b,this.element),h=b.x,f=b.y-12):n&&(h=g.kn(b,"ytp-miniplayer-button-top-left"),f=g.Ag(b,this.element),b=g.Cg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ka().getPlayerSize().width;e=f+(e||0);l=g.ee(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Bk=function(){};
g.k.ak=function(){return!1};g.u(l4,g.gN);l4.prototype.create=function(){};
l4.prototype.Ai=function(){return!1};
l4.prototype.load=function(){this.player.hideControls();this.i.show()};
l4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.mN.miniplayer=l4;})(_yt_player);
