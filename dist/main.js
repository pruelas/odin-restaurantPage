(()=>{var e={538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const s=o},426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(81),r=n.n(a),i=n(645),o=n.n(i),s=n(667),d=n.n(s),c=new URL(n(54),n.b),l=o()(r()),m=d()(c);l.push([e.id,"html{\n    height: 100%;\n    width: 100%;\n}\n\nbody{\n    background-image: url("+m+");\n    background-size: cover;\n    background-attachment: fixed;\n    display: flex;\n    justify-content: center;\n    min-height:100%;\n}\n\ndiv#content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    max-width: 70%;\n    background-color: rgba(52, 127, 129, 0.692);\n    border-top: rgba(0, 0, 0, 0.411) solid;\n    border-left: rgba(0, 0, 0, 0.411) solid;\n    border-right: rgba(0, 0, 0, 0.411) solid;\n}\n\n.tabDiv{\n    display: flex;\n    flex-direction: row;\n    min-height: 5rem;\n    width: 100%;\n    align-items: center;\n    justify-content: end;\n    background-color: rgba(52, 127, 129, 0.692);\n}\n\n.tabs{\n    display: flex;\n    height: 100%;\n    flex:1;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 54, 63, 0.582);\n    color: white;\n    text-shadow: -1px 0px 0 rgb(0, 0, 0);\n    font-size: 1.2em;\n    font-weight: bold;\n    border-bottom: rgba(0, 0, 0, 0.521) solid;\n}\n\n.tabs:hover{\n    background-color: \n    rgba(5, 163, 168, 0.192);\n    flex: 1.1;\n}\n.selected{\n    background-color: \n    rgba(5, 163, 168, 0.192);\n    flex: 1.1; \n}\n\n.selected:hover{\n    background-color: rgba(0, 69, 82, 0.582);\n}\n\ndiv.tabDiv :nth-child(2){\n    border-left:black solid;\n    border-right: black solid;\n}\n\n.contentDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 1em;\n}\n\nh1{\n    font-size: 5rem;\n    color: white;\n    text-shadow: -2px 2px 0 rgb(0, 0, 0);\n\n}\n\n.homeHeader{\n    margin-top: 20%;\n\n}\n\n.menuHeader{\n    font-size: 5rem;\n    color: rgb(255, 255, 255);\n    text-shadow: -2px 2px 0 rgb(0, 0, 0);\n    margin-bottom: 1rem;\n    border-bottom: rgba(255, 255, 255, 0.582)  solid;\n    width: 100%;\n    text-align: center;\n}\n\np{\n    color: black;\n    font-weight: bolder;\n    font-size: 1.5em;\n    text-shadow: -1px 1px 0 white;\n    margin-top: 1em;\n    text-align: center;\n    background-color: rgba(255, 255, 255, 0.582) ;\n    margin-left: 1em;\n    margin-right: 1em;\n    padding: 1rem 1em;;\n}\n\n.contactHeader{\n    margin-top: 20%;\n}\n\n.contactInfo{\n    text-align: center;\n    color: black;\n    font-weight: bolder;\n    font-size: 1.5em;\n    text-shadow: -1px 1px 0 white;\n    margin-top: 1em;\n    text-align: center;\n    background-color: rgba(255, 255, 255, 0.582) ;\n    margin-left: 1em;\n    margin-right: 1em;\n    padding: 1rem 1em;;\n}\n\n.dish{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 1rem;\n}\n\n.dishItem{\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-bottom:rgba(255, 255, 255, 0.582)  solid;\n    \n}\n\n.dishItem > .dishImage{\n    flex:1;\n    min-width: 0;\n    min-height: 0;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n}\n\n.dishText > .dishTitle{\n    color: rgb(255, 255, 255);\n    font-weight: bolder;\n    font-size: 2em;\n    text-shadow: -2px 2px 0 rgb(0, 0, 0);\n}\n\n.dishText > .dishDescription{\n    color: rgb(0, 0, 0);\n    font-weight: bolder;\n    font-size: 1.5em;\n    text-shadow: -1px 1px 0 rgb(255, 255, 255);\n    padding: 1rem .5rem;\n    margin: 1rem;\n    background-color: rgba(255, 255, 255, 0.582) ;\n    text-align: center;\n}\n\n.dishItem > .dishText{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 1rem;\n    justify-items: center;\n    align-items: center;\n}\n",""]);const p=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},191:e=>{e.exports=[["Section","TItle","Description","Image Url"],["Dish","Caesar Salad","A classic caeser salad with croutons and light dressing","caesarSalad"],["Dish","Asian Slaw","A salad with fresh herbs annd peaches with miso dressing","slawSalad"],["Dish","Salad Sandwich","A delicious filling meal amde with fresh vegetables","saladSandwich"],["Dish","Black Bean Wrap","A wrap made with black beans, salsa, corn, avocado, olives, and greens","blackBeanWrap"],["Drink","Water","A cold glass of water",""],["Drink","Homemade Lemonade","A refreshing freshly squeezed lemonade",""],["Drink","Black Coffee","An energizing medium roast coffee",""],["Drink","Green  Smoothie","A delicious smoothie made with Water, Spinach, Banana, Apple & Avocado",""]]},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=i[c]||0,m="".concat(c," ").concat(l);i[c]=l+1;var p=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=r(u,a);a.byIndex=s,t.splice(s,0,{identifier:m,updater:h,references:1})}o.push(m)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=a(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},54:(e,t,n)=>{"use strict";e.exports=n.p+"700ddffad4a858fe0c8c.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(54);function t(e){let t=document.getElementById("content"),n=document.createElement("div");n.classList.add("contentDiv");let a=document.createElement("h1");a.textContent="Healthy Eating",a.classList.add("homeHeader");let r=document.createElement("p");r.textContent="Eat healthy today, for tomorrow's you! Freshness always guaranteed!",n.appendChild(a),n.appendChild(r),t.appendChild(n)}n(191);const a=n.p+"8ab1528bb32584318099.jpg",r=n.p+"a1e4ab40d3d8476184dc.jpg",i=n.p+"72bbefe3b05e36ed1004.jpg",o=n.p+"d833697bd6f7b536e944.jpg";var s=n(379),d=n.n(s),c=n(795),l=n.n(c),m=n(569),p=n.n(m),u=n(565),h=n.n(u),f=n(216),g=n.n(f),b=n(589),v=n.n(b),x=n(538),y={};y.styleTagTransform=v(),y.setAttributes=h(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=g(),d()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;var w=n(426),E={};E.styleTagTransform=v(),E.setAttributes=h(),E.insert=p().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=g(),d()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals,console.log("Step 3 Statment"+e);let C=document.createElement("div");C.classList.add("tabDiv");let L=document.createElement("div");L.classList.add("tabs"),L.classList.add("selected"),L.id="home",L.textContent="Home";let k=document.createElement("div");k.classList.add("tabs"),k.id="menu",k.textContent="Menu";let I=document.createElement("div");function S(){let e=document.getElementById("content");e.removeChild(e.lastChild),Array.from(document.getElementsByClassName("tabs")).forEach((e=>{e.classList.remove("selected")}))}I.classList.add("tabs"),I.id="contact",I.textContent="Contact",C.append(L),C.append(k),C.append(I),document.getElementById("content").append(C),t(),Array.from(document.getElementsByClassName("tabs")).forEach((e=>{"home"===e.id?e.addEventListener("click",(function(n){S(),t(),e.classList.add("selected")})):"menu"===e.id?e.addEventListener("click",(function(t){S(),function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("contentDiv");let n=document.createElement("h1");n.textContent="Menu",n.classList.add("menuHeader");let s=document.createElement("div");s.classList.add("dish");let d=document.createElement("div");d.classList.add("drink"),document.createElement("p").textContent="Insert menu items here.",t.appendChild(n),t.appendChild(d),t.appendChild(s);let c=document.createElement("div");c.classList.add("dishItem");let l=new Image;l.src=a,l.classList.add("dishImage");let m=document.createElement("div");m.classList.add("dishText");let p=document.createElement("div");p.classList.add("dishTitle"),p.textContent="Caesar Salad";let u=document.createElement("div");u.classList.add("dishDescription"),u.textContent="A classic caeser salad with croutons and light dressing",m.append(p),m.append(u),c.append(l),c.append(m),s.append(c);let h=document.createElement("div");h.classList.add("dishItem");let f=new Image;f.src=r,f.classList.add("dishImage");let g=document.createElement("div");g.classList.add("dishText");let b=document.createElement("div");b.classList.add("dishTitle"),b.textContent="Asian Slaw Salad";let v=document.createElement("div");v.classList.add("dishDescription"),v.textContent="A salad with fresh herbs and peaches with miso dressing",g.append(b),g.append(v),h.append(f),h.append(g),s.append(h);let x=document.createElement("div");x.classList.add("dishItem");let y=new Image;y.src=i,y.classList.add("dishImage");let w=document.createElement("div");w.classList.add("dishText");let E=document.createElement("div");E.classList.add("dishTitle"),E.textContent="Salad Sandwich";let C=document.createElement("div");C.classList.add("dishDescription"),C.textContent="A delicious filling meal made with fresh vegetables",w.append(E),w.append(C),x.append(y),x.append(w),s.append(x);let L=document.createElement("div");L.classList.add("dishItem");let k=new Image;k.src=o,k.classList.add("dishImage");let I=document.createElement("div");I.classList.add("dishText");let S=document.createElement("div");S.classList.add("dishTitle"),S.textContent="Caesar Salad";let T=document.createElement("div");T.classList.add("dishDescription"),T.textContent="A wrap made with black beans, salsa, corn, avocado, olives, and greens",I.append(S),I.append(T),L.append(k),L.append(I),s.append(L),e.appendChild(t)}(),e.classList.add("selected")})):e.addEventListener("click",(function(t){S(),function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("contentDiv");let n=document.createElement("h1");n.textContent="Contact",n.classList.add("contactHeader");let a=document.createElement("div");a.classList.add("contactInfo"),a.innerHTML="Call us at (XXX) XXX-XXXX!<br />We take over the phone orders!",t.appendChild(n),t.appendChild(a);let r=document.createElement("p");r.textContent="MON-FRI 11AM-8PM";let i=document.createElement("p");i.textContent="Weekends Closed",t.appendChild(r),t.appendChild(i),e.appendChild(t)}(),e.classList.add("selected")}))}))})()})();