(this["webpackJsonpdog-info"]=this["webpackJsonpdog-info"]||[]).push([[0],{47:function(e,a,t){e.exports=t(61)},52:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),s=t(30),i=t.n(s),l=t(7),o=t(4),m=(t(52),t(17)),u=Object(m.b)({name:"navbar",initialState:{isOpen:!1},reducers:{toggle:function(e){e.isOpen=!e.isOpen}}}),d=u.actions.toggle,b=function(e){return e.navbar.isOpen},f=u.reducer,E=t(11),v=t.n(E),g=t(16),p=t(21),h=t(25),N=Object(m.b)({name:"breeds",initialState:{breeds:{}},reducers:{setBreeds:function(e,a){e.breeds={},a.payload.forEach((function(a){var t=a.charAt(0).toUpperCase()+a.slice(1);e.breeds[a.toLowerCase()]={name:t,images:[],subBreeds:{},dataLoaded:!1}}))},updateBreed:function(e,a){e.breeds[a.payload.name.toLowerCase()]=a.payload}}}),j=N.actions,O=j.setBreeds,y=j.updateBreed,k=function(){var e=Object(p.a)(v.a.mark((function e(a,t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<a.length)){e.next=7;break}return e.next=4,t(a[n],n,a);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),x=function(e){return e.breeds.breeds},w=N.reducer;!function(e){e[e.Information=0]="Information",e[e.Warning=1]="Warning",e[e.Error=2]="Error"}(n||(n={}));var C=function e(){Object(h.a)(this,e),this.message="<undefined>",this.severity=n.Information,this.id=Math.floor(1e5*Math.random())},L=Object(m.b)({name:"toasts",initialState:{toasts:[]},reducers:{addToast:function(e,a){e.toasts.push(a.payload)},dismissToast:function(e,a){e.toasts=e.toasts.filter((function(e){return e.id!==a.payload}))}}}),B=L.actions,M=B.addToast,F=B.dismissToast,T=function(e){return e.toast.toasts},I=L.reducer;function S(e){return new Promise((function(a){return setTimeout(a,e)}))}var A=Object(m.a)({middleware:Object(m.c)({immutableCheck:{warnAfter:100}}),reducer:{navbar:f,breeds:w,toast:I}}),z=t(6),D=t(64);function W(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},c.a.createElement(D.a,{id:"not-found-title",defaultMessage:"Not found!"})),c.a.createElement("p",{className:"subtitle"},c.a.createElement(D.a,{id:"not-found-text",defaultMessage:"This is not the page you are looking for."}))))}var P=t(32);function U(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},c.a.createElement(D.a,{id:"info",defaultMessage:"Infos about Dogs"})),c.a.createElement("p",{className:"subtitle"},c.a.createElement(D.a,{id:"info-sub",defaultMessage:"A simple website using the <a>dog api</a>",values:{a:function(e){return c.a.createElement("a",{href:"https://dog.ceo/dog-api/"},e)}}}))))}var J=t(65);function q(e){var a=Object(J.a)(),t=Object(g.a)(Object(g.a)({},e),{},{to:"/".concat(a.locale).concat(e.to)});return c.a.createElement(l.b,t)}function G(e){var a=Object(J.a)(),t=Object(g.a)(Object(g.a)({},e),{},{to:"/".concat(a.locale).concat(e.to)});return c.a.createElement(l.c,t)}function H(){var e,a=Object(z.c)(b),t=Object(z.c)(x),n=Object(z.b)(),s=Object(J.a)(),i=function(){a&&n(d())};if(Object(r.useEffect)((function(){n(function(){var e=Object(p.a)(v.a.mark((function e(a,t){var n,r,c,s,i,l,o,m,u,d,b,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/list/random/5");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c=r.message,a(O(c)),s=t(),i=s.breeds,l=0,o=Object.values(i.breeds);case 10:if(!(l<o.length)){e.next=24;break}return m=o[l],e.next=14,fetch("https://dog.ceo/api/breed/".concat(m.name.toLowerCase(),"/images"));case 14:return u=e.sent,e.next=17,u.json();case 17:d=e.sent,b=d.message,f=Object(g.a)(Object(g.a)({},m),{},{images:b}),a(y(f));case 21:l++,e.next=10;break;case 24:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())}),[]),0===Object.keys(t).length)e=c.a.createElement(q,{to:"/breeds",className:"navbar-item",onClick:function(){return i()}},c.a.createElement(D.a,{id:"breeds",defaultMessage:"Breeds"}));else{var o=[];Object.keys(t).forEach((function(e,a){o.push(c.a.createElement(G,{to:"/breeds/"+e,key:a,className:"navbar-item",activeClassName:"is-active",onClick:function(){return i()}},t[e].name))}));var m=c.a.createElement("div",{className:"navbar-dropdown"},o);e=c.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},c.a.createElement(q,{to:"/breeds",className:"navbar-link",onClick:function(){return i()}},c.a.createElement(D.a,{id:"breeds",defaultMessage:"Breeds"})),m)}return c.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(q,{to:"/",className:"navbar-item",onClick:function(){return i()}},c.a.createElement("span",{role:"img","aria-label":"dog",className:"is-size-4"},"\ud83d\udc15")),c.a.createElement("a",{className:"navbar-burger burger ".concat(a?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(){return n(d())}},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(a?"is-active":"")},c.a.createElement("div",{className:"navbar-start"},e),c.a.createElement("div",{className:"navbar-end"},c.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},c.a.createElement("p",{className:"navbar-link"},Ee[s.locale].displayText),c.a.createElement("div",{className:"navbar-dropdown"},Object.keys(Ee).map((function(e,a){var t=window.location.pathname.replace("/".concat(s.locale),"/".concat(e));return e!==s.locale?c.a.createElement(l.b,{to:t,key:a,className:"navbar-item",onClick:function(){return i()}},Ee[e].displayText):c.a.createElement("div",{key:a,className:"navbar-item has-text-weight-bold has-text-link"},Ee[e].displayText)})))))))}function K(e){var a=Object(o.h)().imageNumber,t=Object(o.i)().url,n=Object(z.c)(x)[e.breed];if(void 0===n)return c.a.createElement(c.a.Fragment,null);if(void 0!==e.subBreed&&void 0===(n=n.subBreeds[e.subBreed]))return c.a.createElement(c.a.Fragment,null);var r=parseInt(a);if(isNaN(r))return c.a.createElement(c.a.Fragment,null);var s=n.images[r];if(void 0===s)return c.a.createElement(c.a.Fragment,null);var i=t.indexOf("/image/"),m=t.slice(0,i),u=m+"/image/"+(r+1),d=m+"/image/"+(r-1);return c.a.createElement("div",{className:"modal is-active"},c.a.createElement("div",{className:"modal-background"}),c.a.createElement("div",{className:"modal-content",style:{width:"100%",height:"100%",maxWidth:"calc(100vw - 40px)"}},c.a.createElement("img",{src:s,alt:n.name,style:{display:"block",objectFit:"contain",width:"100%",height:"100%"}})),c.a.createElement(l.b,{to:m},c.a.createElement("button",{className:"modal-close is-large","aria-label":"close"})),r>0&&c.a.createElement("div",{style:{position:"fixed",left:"5vw",top:"90%"}},c.a.createElement(l.b,{to:d},c.a.createElement("button",{className:"button is-link"},"<"))),r<e.maxImageCount-1&&c.a.createElement("div",{style:{position:"fixed",right:"5vw",top:"90%"}},c.a.createElement(l.b,{to:u},c.a.createElement("button",{className:"button is-link"},">"))))}function Q(){var e=Object(o.h)(),a=e.breed,t=e.subbreed,n=Object(o.i)(),s=n.path,i=n.url,m=a,u=t,d=Object(z.b)(),b=Object(z.c)(x),f=function(e,a,t){var n=e[a];if(void 0===n)return;if(void 0!==t)return n.subBreeds[t];return n}(b,m,u),E=Object(r.useState)(0),h=Object(P.a)(E,2),N=h[0],j=h[1];if(Object(r.useEffect)((function(){j(0),void 0===u&&d(function(e){return function(){var a=Object(p.a)(v.a.mark((function a(t,n){var r,c,s,i,l,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==e){a.next=3;break}return console.warn("breed undefined"),a.abrupt("return");case 3:if(r=n(),!r.breeds.breeds[e.toLowerCase()].dataLoaded){a.next=6;break}return a.abrupt("return");case 6:return c=function(a){var r=n().breeds.breeds[e.toLowerCase()];if(void 0!==r){var c=Object(g.a)(Object(g.a)({},r),{},{subBreeds:a,dataLoaded:!0});t(y(c))}else console.warn("Somehow this breed is not in the list. abort!")},a.next=9,fetch("https://dog.ceo/api/breed/".concat(e.toLowerCase(),"/list"));case 9:return s=a.sent,a.next=12,s.json();case 12:return i=a.sent,l=i.message,o={},l.forEach((function(e){var a=e.charAt(0).toUpperCase()+e.slice(1);o[e.toLowerCase()]={name:a,images:[],subBreeds:{},dataLoaded:!1}})),c(o),o={},a.next=20,k(l,function(){var a=Object(p.a)(v.a.mark((function a(t){var n,r,c,s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://dog.ceo/api/breed/".concat(e.toLowerCase(),"/").concat(t.toLowerCase(),"/images"));case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,c=r.message,s=t.charAt(0).toUpperCase()+t.slice(1),o[t.toLowerCase()]={name:s,images:c,subBreeds:{},dataLoaded:!1};case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());case 20:c(o);case 21:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(null===f||void 0===f?void 0:f.name))}),[a,t]),void 0===f)return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},c.a.createElement(D.a,{id:"loading",defaultMessage:"Loading..."}))));var O=Math.floor((null===f||void 0===f?void 0:f.images.length)/20),w=f.images.slice(20*N,20*N+20).map((function(e,a){return c.a.createElement("div",{className:"column is-3",key:a},c.a.createElement(l.b,{to:"".concat(i,"/image/").concat(a+20*N),className:"box"},c.a.createElement("img",{src:e,alt:f.name,style:{display:"block",margin:"0 auto"}})))})),C=c.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},c.a.createElement("button",{className:"pagination-previous",disabled:N<=0,onClick:function(){return j(N-1)}},c.a.createElement(D.a,{id:"previous",defaultMessage:"Previous"})),c.a.createElement("button",{className:"pagination-next",disabled:N>=O,onClick:function(){return j(N+1)}},c.a.createElement(D.a,{id:"next",defaultMessage:"Next"})),c.a.createElement("ul",{className:"pagination-list"},N>1&&c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link",onClick:function(){return j(0)}},"1")),N>2&&c.a.createElement("li",null,c.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")),N>0&&c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link",onClick:function(){return j(N-1)}},N)),c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link is-current","aria-current":"page"},N+1)),N<O&&c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link",onClick:function(){return j(N+1)}},N+2)),N+2<O&&c.a.createElement("li",null,c.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")),N+1<O&&c.a.createElement("li",null,c.a.createElement("button",{className:"pagination-link",onClick:function(){return j(O)}},O+1)))),L=Object.keys(f.subBreeds).map((function(e,a){var t=f.subBreeds[e];return c.a.createElement("div",{className:"column is-4",key:a},c.a.createElement(q,{to:"/subbreeds/".concat(f.name.toLowerCase(),"/").concat(t.name.toLowerCase()),className:"box",style:{display:"flex",alignItems:"center",justifyContent:"space-around"}},c.a.createElement("h2",{className:"is-size-5"},t.name),0!==t.images.length&&c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{src:t.images[0],alt:t.name,className:"is-rounded",style:{objectFit:"cover",width:128,height:128}}))))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-3"},f.name),void 0!==u&&c.a.createElement("p",{className:"subtitle"},c.a.createElement(D.a,{id:"sub-breed-link",defaultMessage:"Is a sub-breed of <a></a>",values:{a:function(){return c.a.createElement(q,{to:"/breeds/".concat(m.toLowerCase())}," "+b[m].name)}}})))),0!==L.length&&c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title is-4"},c.a.createElement(D.a,{id:"sub-breeds",defaultMessage:"Sub-breeds"})),c.a.createElement("div",{className:"columns is-multiline"},L))),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title is-4"},c.a.createElement(D.a,{id:"images",defaultMessage:"Images"})),C,c.a.createElement("div",{className:"columns is-multiline"},w),C)),c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"".concat(s,"/image/:imageNumber"),render:function(){return c.a.createElement(K,{breed:a,subBreed:t,maxImageCount:f.images.length})}})))}function R(){var e=Object(z.c)(x);if(0===Object.keys(e).length)return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},c.a.createElement(D.a,{id:"breeds",defaultMessage:"Breeds"})),c.a.createElement("p",{className:"subtitle"},c.a.createElement(D.a,{id:"loading",defaultMessage:"Loading..."}))));var a=Object.keys(e).map((function(a,t){var n=e[a];return c.a.createElement("div",{className:"column is-4",key:t},c.a.createElement(q,{to:"/breeds/"+a,className:"box",style:{display:"flex",alignItems:"center",justifyContent:"space-around"}},c.a.createElement("h2",{className:"is-size-5"},n.name),0!==n.images.length&&c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{src:n.images[0],alt:n.name,className:"is-rounded",style:{objectFit:"cover",width:128,height:128}}))))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},c.a.createElement(D.a,{id:"breeds",defaultMessage:"Breeds"})),c.a.createElement("p",{className:"subtitle"},c.a.createElement(D.a,{id:"select-breed",defaultMessage:"Select a breed to show more information"})))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-multiline"},a))))}var V=t(18),X=t(19);function Y(){var e=Object(V.a)(["\n    margin-top: 2vw;\n    margin-right: 2vw;\n"]);return Y=function(){return e},e}function Z(){var e=Object(V.a)(["\n    position: fixed;\n    display: grid;\n    justify-items: right;\n    align-items: center;\n    width: 100%;\n    z-index: 19;\n"]);return Z=function(){return e},e}var $=X.a.div(Z()),_=X.a.div(Y());function ee(){var e=Object(z.c)(T),a=Object(z.b)();return 0===e.length?c.a.createElement(c.a.Fragment,null):c.a.createElement($,null,c.a.createElement(_,null,e.map((function(e){var t=e.severity===n.Error?"is-danger":e.severity===n.Warning?"is-warning":"";return c.a.createElement("div",{className:"notification ".concat(t)},c.a.createElement("button",{className:"delete",onClick:function(){return a(F(e.id))}}),e.message)}))))}t(60);var ae=function(){var e=Object(o.g)().listen,a=Object(o.i)().path;return Object(r.useEffect)((function(){return e((function(){var e,a=document.activeElement;(null===a||void 0===a||null===(e=a.classList)||void 0===e?void 0:e.contains("navbar-item"))&&a.blur()}))}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null),c.a.createElement(ee,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"".concat(a,"/"),component:U}),c.a.createElement(o.b,{exact:!0,path:"".concat(a,"/breeds"),component:R}),c.a.createElement(o.b,{path:"".concat(a,"/breeds/:breed"),component:Q}),c.a.createElement(o.b,{path:"".concat(a,"/subbreeds/:breed/:subbreed"),component:Q}),c.a.createElement(o.b,{path:"*",component:W})))},te=t(66);function ne(){var e=Object(V.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0; \n    animation: "," 2.0s infinite ease-in-out both;\n\n    &:before {\n        content: '';\n        display: block;\n        width: 25%;\n        height: 25%;\n        background-color: #34495e;\n        border-radius: 100%;\n        animation: "," 2.0s infinite ease-in-out both; \n    }\n\n    &:nth-child(1) { animation-delay: -1.1s; }\n    &:nth-child(2) { animation-delay: -1.0s; }\n    &:nth-child(3) { animation-delay: -0.9s; }\n    &:nth-child(4) { animation-delay: -0.8s; }\n    &:nth-child(5) { animation-delay: -0.7s; }\n    &:nth-child(6) { animation-delay: -0.6s; }\n    &:nth-child(1):before { animation-delay: -1.1s; }\n    &:nth-child(2):before { animation-delay: -1.0s; }\n    &:nth-child(3):before { animation-delay: -0.9s; }\n    &:nth-child(4):before { animation-delay: -0.8s; }\n    &:nth-child(5):before { animation-delay: -0.7s; }\n    &:nth-child(6):before { animation-delay: -0.6s; }\n"]);return ne=function(){return e},e}function re(){var e=Object(V.a)(["\n    width: 40px;\n    height: 40px;\n    position: relative;\n    animation: "," 2.5s infinite linear both;\n"]);return re=function(){return e},e}function ce(){var e=Object(V.a)(["\n    50% {\n      transform: scale(0.4); \n    } \n    100%, 0% {\n      transform: scale(1.0); \n    } \n\n"]);return ce=function(){return e},e}function se(){var e=Object(V.a)(["\n{\n    80%, 100% { transform: rotate(360deg); } \n}\n"]);return se=function(){return e},e}function ie(){var e=Object(V.a)(["\n{\n    100% { transform: rotate(360deg); } \n}\n"]);return ie=function(){return e},e}var le=Object(X.b)(ie()),oe=Object(X.b)(se()),me=Object(X.b)(ce()),ue=X.a.div(re(),le),de=X.a.div(ne(),oe,me);function be(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container",style:{display:"grid",placeItems:"center"}},c.a.createElement(ue,null,c.a.createElement(de,null),c.a.createElement(de,null),c.a.createElement(de,null),c.a.createElement(de,null),c.a.createElement(de,null),c.a.createElement(de,null))))}var fe,Ee={en:{displayText:"English"},de:{displayText:"Deutsch"}};function ve(e){var a=Object(r.useState)({messages:void 0,state:fe.Loading,locale:"en"}),t=Object(P.a)(a,2),s=t[0],i=t[1],l=Object(z.b)();return Object(r.useEffect)((function(){"en"!==e.locale?(i({messages:void 0,state:fe.Loading,locale:e.locale}),fetch("/compiled-lang/".concat(e.locale,".json")).then((function(e){return e.json()})).then((function(a){i({messages:a,state:fe.Ok,locale:e.locale})})).catch((function(){var e,a,t;i({messages:void 0,state:fe.Ok,locale:"en"}),l((e="Failed to load language data - Page is displayed in english as fallback",a=n.Error,function(){var n=Object(p.a)(v.a.mark((function n(r){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=new C).message=e,c.severity=a,r(M(c)),n.next=6,S(void 0===t?5e3:t);case 6:r(F(c.id));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}))):i({messages:void 0,state:fe.Ok,locale:e.locale})}),[e.locale,l]),s.state===fe.Loading?c.a.createElement(be,null):c.a.createElement(te.a,{messages:s.messages,locale:e.locale,defaultLocale:"en"},c.a.createElement(ae,null))}!function(e){e[e.FailedToLoadLanguageData=0]="FailedToLoadLanguageData",e[e.Loading=1]="Loading",e[e.Ok=2]="Ok"}(fe||(fe={})),i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z.a,{store:A},c.a.createElement(l.a,{basename:"/dog-info"},c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/en",render:function(){return c.a.createElement(ve,{locale:"en"})}}),c.a.createElement(o.b,{path:"/de",render:function(){return c.a.createElement(ve,{locale:"de"})}}),c.a.createElement(o.b,{exact:!0,path:"/",render:function(){return c.a.createElement(o.a,{to:"/en"})}}),c.a.createElement(o.b,{path:"*",component:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"Not found!"),c.a.createElement("p",{className:"subtitle"},"This is not the page you are looking for.")))}}))))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9289030a.chunk.js.map