(()=>{var e={538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const s=a},426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(667),c=n.n(s),l=new URL(n(54),n.b),d=a()(o()),u=c()(l);d.push([e.id,"\n\nhtml,body{\n    height: 100%;\n    width: 100%;\n    \n}\n\nbody{\n    background-image: url("+u+");\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    border: violet solid;\n    align-items: center;\n}\n\ndiv#content{\n    display: flex;\n    flex-direction: column;\n    position:absolute;\n    height: 70%;\n    width: 70%;;\n    background-color: rgba(37, 154, 158, 0.548);\n    align-items: center;\n    justify-content: center;\n}\n\n.tabDiv{\n    display: flex;\n    flex-direction: row;\n    position:absolute;\n    height: 10%;\n    width: 100%;\n    top: 0;\n    justify-content: end;\n    border: solid black;\n    background-color: rgba(0, 128, 128, 0.808);\n}\n\n.tabs{\n    display: flex;\n    height: 100%;\n    flex:1;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(37, 154, 158, 0.548);\n    text-shadow: -1px 0px 0 white;\n    font-size: 1.2em;\n    font-weight: bolder;\n    /* border: black solid; */\n    /* text-align: center; */\n\n}\n\ndiv.tabDiv :nth-child(2){\n    border-left:black solid;\n    border-right: black solid;\n}\n\n.titleDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nimg{\n\n}\n\nh1{\n    /* position:absolute; */\n    font-size: 5rem;\n    text-shadow: -1px 1px 0 white;\n\n}\n\np{\n    color: cornsilk;\n    font-weight: bolder;\n    font-size: 1.5em;\n    text-shadow: -1px 1px 0 black;\n    margin-top: 1em;\n    text-align: center;\n    /* outline: blueviolet solid; */\n}\n\n\n",""]);const p=d},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},241:()=>{},711:()=>{},54:(e,t,n)=>{"use strict";e.exports=n.p+"700ddffad4a858fe0c8c.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(54);function t(e){let t=document.getElementById("content"),n=document.createElement("div");n.classList.add("tabDiv");let r=document.createElement("div");r.classList.add("tabs"),r.id="home",r.textContent="Home";let o=document.createElement("div");o.classList.add("tabs"),o.id="menu",o.textContent="Menu";let i=document.createElement("div");i.classList.add("tabs"),i.id="contact",i.textContent="Contact",n.append(r),n.append(o),n.append(i);let a=document.createElement("div");a.classList.add("titleDiv");let s=document.createElement("h1");s.textContent="Healthy Eating";let c=document.createElement("p");c.textContent="Eat healthy today, for tomorrow's you! Freshness always guaranteed!",a.appendChild(s),a.appendChild(c),t.appendChild(n),t.appendChild(a)}var r=n(711),o=n.n(r),i=n(241),a=n.n(i),s=n(379),c=n.n(s),l=n(795),d=n.n(l),u=n(569),p=n.n(u),f=n(565),m=n.n(f),h=n(216),b=n.n(h),v=n(589),g=n.n(v),y=n(538),x={};x.styleTagTransform=g(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=b(),c()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var w=n(426),E={};E.styleTagTransform=g(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=b(),c()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals,console.log("Step 3 Statment"+e),t(),Array.from(document.getElementsByClassName("tabs")).forEach((e=>{"home"===e.id?e.addEventListener("click",(function(e){t()})):"menu"===e.id?e.addEventListener("click",(function(e){o()()})):e.addEventListener("click",(function(e){a()()}))}))})()})();