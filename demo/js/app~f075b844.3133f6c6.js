(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],l=0,d=[];l<a.length;l++)s=a[l],o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={"app~f075b844":0},o={"app~f075b844":0},i=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-7261c156":"b9de5a54","chunk-08ce2731":"65878f50","chunk-2d0c8f68":"f800c623","chunk-2b644eba":"d8d236a9","chunk-0026d950":"84679570","chunk-0f8b1978":"32b47a3c","chunk-752cebef":"15032529","chunk-2d225015":"adf82bb2","chunk-2d0d07c4":"e2dec172","chunk-33c1822d":"0f989275"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-7261c156":1,"chunk-08ce2731":1,"chunk-2b644eba":1,"chunk-0f8b1978":1,"chunk-33c1822d":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-7261c156":"0c269016","chunk-08ce2731":"c1848fb2","chunk-2d0c8f68":"31d6cfe0","chunk-2b644eba":"aefedea1","chunk-0026d950":"31d6cfe0","chunk-0f8b1978":"1a94bc99","chunk-752cebef":"31d6cfe0","chunk-2d225015":"31d6cfe0","chunk-2d0d07c4":"31d6cfe0","chunk-33c1822d":"b9d3b249"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openeo-web-editor/demo/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors~253ae210","chunk-vendors~7d359b94","chunk-vendors~fdc6512a"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";n("4917"),n("6b54"),n("386d"),n("a481"),n("7f7f");var r=n("a1bc"),s=n("fbdae"),o=n("2f62");t["a"]={exception:function(e,t,n){console.error(t);var r=null,s=n;this.isObject(t)&&"string"===typeof t.message?(r=t.code>0?"Error #"+t.code:n,s=t.message):"string"===typeof t&&(s=t,r=n),this.error(e,s,r)},error:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.$snotify.error(t,n,r["a"].snotifyDefaults)},info:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.$snotify.info(t,n,r["a"].snotifyDefaults)},ok:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={timeout:2e3};e.$snotify.success(t,n,Object.assign({},r["a"].snotifyDefaults,s))},confirm:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={timeout:1e4,closeOnClick:!1,buttons:n};e.$snotify.confirm(t,null,Object.assign({},r["a"].snotifyDefaults,s))},blobToText:function(e,t){var n=new FileReader;n.onload=t,n.readAsText(e)},isChildOfModal:function(e){return e.$parent&&"Modal"==e.$parent.$options.name},getFileNameFromURL:function(e){return e=e.substring(0,-1==e.indexOf("#")?e.length:e.indexOf("#")),e=e.substring(0,-1==e.indexOf("?")?e.length:e.indexOf("?")),e=e.substring(e.lastIndexOf("/")+1,e.length),e},formatDateTime:function(e){if(!e)return"";var t=new Date(e);return t.toISOString().replace("T"," ").replace("Z","").substring(0,19)},replaceParam:function(e,t,n){var r=new URL(e),s=new URLSearchParams(r.search);return s.set(t,n),r.search=s.toString(),r.toString()},param:function(e){var t=new URLSearchParams(window.location.search);return t.get(e)},isUrl:function(e){return"string"===typeof e&&e.length>0&&null!==e.match(/^https?:\/\//i)},isObject:function(e){return s["Utils"].isObject(e)},size:function(e){return s["Utils"].size(e)},domBoundingBox:function(e){var t=e.getBoundingClientRect();return t.offsetTop=t.top+document.body.scrollTop,t.offsetLeft=t.left+document.body.scrollLeft,t},extentToBBox:function(e){var t=e.length>4;return{west:e[0],east:e[t?3:2],south:e[1],north:e[t?4:3]}},mapState:o["e"],mapGetters:o["c"],mapMutations:o["d"],mapActions:o["b"]}},"22d7":function(e,t,n){"use strict";var r=n("b52e"),s=n.n(r);s.a},"4ab7":function(e,t,n){},5117:function(e,t,n){"use strict";var r=n("5740"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("f213"),o=(n("fbfd"),n("2f62")),i=(n("55dd"),n("ac6a"),n("5df3"),n("7f7f"),n("96cf"),n("3b8d")),a=n("e97b"),c=n("fbdae"),u=n("025e"),l=function(){return{connection:null,discoveryCompleted:!1,userInfo:{},connectionError:null,discoveryErrors:[],outputFormats:{},serviceTypes:{},processes:[],collections:[]}},d={namespaced:!0,state:l(),getters:{title:function(e){if(null!==e.connection&&null!==e.connection.capabilities()){var t=e.connection.capabilities().title();return t||e.connection.getBaseUrl()}return null},capabilities:function(e){return null!==e.connection?e.connection.capabilities():null},supports:function(e){return function(t){return null!==e.connection&&null!==e.connection.capabilities()&&e.connection.capabilities().hasFeature(t)}},formatCurrency:function(e){return function(t){var n="";return e.connection&&null!==e.connection.capabilities().currency()&&(n=" "+e.connection.capabilities().currency()),t+n}},isConnected:function(e){return null!==e.connection&&null!==e.connection.capabilities()},isDiscovered:function(e){return null!==e.connection&&e.discoveryCompleted},isAuthenticated:function(e){return null!==e.connection&&null!==e.connection.accessToken},processRegistry:function(e){var t=new c["ProcessRegistry"];for(var n in e.processes)t.add(e.processes[n]);return t},supportsBilling:function(e){return null!==e.connection&&null!==e.connection.capabilities().currency()},supportsBillingPlans:function(e){return null!==e.connection&&null!==e.connection.capabilities().currency()&&e.connection.capabilities().listPlans().length>0}},actions:{connect:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.url,t.commit("reset"),e.prev=2,e.next=5,a["OpenEO"].connect(r);case 5:s=e.sent,t.commit("connection",s),e.next=14;break;case 9:return e.prev=9,e.t0=e["catch"](2),"Network Error"!=e.t0.message&&"NetworkError"!=e.t0.name||(e.t0=new Error("Server is not available.")),t.commit("setConnectionError",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,n){return e.apply(this,arguments)}return t}(),discover:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=[],r=t.state.connection.capabilities(),r.hasFeature("listCollections")?n.push(t.state.connection.listCollections().then(function(e){return t.commit("collections",e)}).catch(function(e){return t.commit("addDiscoveryError",e)})):t.commit("addDiscoveryError",new Error("Collections not supported by the back-end.")),r.hasFeature("listProcesses")?n.push(t.state.connection.listProcesses().then(function(e){return t.commit("processes",e)}).catch(function(e){return t.commit("addDiscoveryError",e)})):t.commit("addDiscoveryError",new Error("Processes not supported by the back-end.")),r.hasFeature("listFileTypes")&&n.push(t.state.connection.listFileTypes().then(function(e){return t.commit("outputFormats",e)}).catch(function(e){return t.commit("addDiscoveryError",e)})),r.hasFeature("listServiceTypes")&&n.push(t.state.connection.listServiceTypes().then(function(e){return t.commit("serviceTypes",e)}).catch(function(e){return t.commit("addDiscoveryError",e)})),s=t.dispatch("describeAccount").catch(function(e){return t.commit("addDiscoveryError",e)}),n.push(s),e.next=10,Promise.all(n);case 10:t.commit("discoveryCompleted",!0);case 11:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),authenticateOIDC:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getters.supports("authenticateOIDC")){e.next=5;break}return e.next=3,t.state.connection.authenticateOIDC(n);case 3:e.next=6;break;case 5:throw"Sorry, OpenID Connect authentication is not supported.";case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),authenticateBasic:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.username,s=n.password,!t.getters.supports("authenticateBasic")){e.next=6;break}return e.next=4,t.state.connection.authenticateBasic(r,s);case 4:e.next=7;break;case 6:throw"Sorry, Basic authentication is not supported.";case 7:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),describeAccount:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getters.supports("describeAccount")||!t.getters.isAuthenticated){e.next=7;break}return e.next=3,t.state.connection.describeAccount();case 3:n=e.sent,t.commit("userInfo",n),e.next=8;break;case 7:t.commit("userInfo",{user_id:t.state.connection.getUserId()});case 8:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.state.connection.logout();case 2:t.commit("reset");case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},mutations:{discoveryCompleted:function(e){e.discoveryCompleted=!0},connection:function(e,t){e.connection=t},userInfo:function(e,t){e.userInfo=t},outputFormats:function(e,t){if(u["a"].isObject(t)){var n={};for(var r in t)n[r.toUpperCase()]=t[r];e.outputFormats=n}else e.outputFormats=t},serviceTypes:function(e,t){if(u["a"].isObject(t)){var n={};for(var r in t)n[r.toUpperCase()]=t[r];e.serviceTypes=n}else e.serviceTypes=t},processes:function(e,t){var n=[];for(var r in t.processes)"undefined"!==typeof t.processes[r].id&&n.push(t.processes[r]);n.sort(function(e,t){return e.id.localeCompare(t.id)}),e.processes=n},collections:function(e,t){var n=[];for(var r in t.collections)"undefined"!==typeof t.collections[r].id&&n.push(t.collections[r]);n.sort(function(e,t){return e.id.localeCompare(t.id)}),e.collections=n},setConnectionError:function(e,t){e.connectionError=t},addDiscoveryError:function(e,t){e.discoveryErrors.push(t)},reset:function(e){Object.assign(e,l())}}},p="serverUrls",f="savedScripts",h=function(){return{storedServers:JSON.parse(localStorage.getItem(p)||"[]"),storedScripts:JSON.parse(localStorage.getItem(f)||"{}"),scriptName:null,hightestModalZIndex:1e3}},m={namespaced:!0,state:h(),getters:{getScriptByName:function(e){return function(t){return e.storedScripts[t]}}},actions:{},mutations:{openModal:function(e){e.hightestModalZIndex=e.hightestModalZIndex+1},closeModal:function(e){e.hightestModalZIndex=e.hightestModalZIndex-1},addServer:function(e,t){-1===e.storedServers.indexOf(t)&&e.storedServers.push(t),localStorage.setItem(p,JSON.stringify(e.storedServers))},removeServer:function(e,t){e.storedServers.splice(e.storedServers.indexOf(t),1),localStorage.setItem(p,JSON.stringify(e.storedServers))},addScript:function(e,t){var n=t.name,r=t.script;e.storedScripts[n]=r,localStorage.setItem(f,JSON.stringify(e.storedScripts))},removeScript:function(e,t){r["a"].delete(e.storedScripts,t),localStorage.setItem(f,JSON.stringify(e.storedScripts))},setScriptName:function(e,t){e.scriptName=t},reset:function(e){Object.assign(e,h())}}};r["a"].use(o["a"]);var v=new o["a"].Store({modules:{server:d,editor:m}}),b=n("a1bc"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[e.isDiscovered?n("IDE"):n("ConnectForm"),n("Modal",{ref:"modal",attrs:{maxWidth:"60%"}}),n("vue-snotify"),n("div",{ref:"webEditorInfo",staticStyle:{display:"none"}},[n("p",{staticClass:"aboutPage"},[e._v(e._s(e.pkg.description))]),e._m(0),n("h3",{staticClass:"aboutPage"},[e._v("Supported API versions:")]),n("ul",{staticClass:"aboutPage"},e._l(e.pkg.apiVersions,function(t){return n("li",{key:t},[n("a",{attrs:{href:"https://open-eo.github.io/openeo-api/v/"+t+"/index.html",target:"_blank"}},[e._v(e._s(t))])])}),0)])],1)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"aboutPage"},[e._v("This software is published by the "),n("strong",[e._v("openEO Consortium")]),e._v(" under the "),n("strong",[e._v("Apache 2.0 license")]),e._v(". Please find more information about the openEO project on our "),n("a",{attrs:{href:"http://www.openeo.org",target:"_blank"}},[e._v("homepage")]),e._v(" and visit the "),n("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor",target:"_blank"}},[e._v("GitHub repository")]),e._v(" for information about the Web Editor. Feel encouraged to "),n("strong",[e._v("report bugs, feature requests and other issues in the "),n("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor/issues",target:"_blank"}},[e._v("GitHub issue tracker")])]),e._v(".")])}],y=(n("8e6e"),n("456d"),n("bd86")),O=n("9224"),C=n("4877"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("div",{staticClass:"inner"},[r("header",{staticClass:"logo"},[r("img",{attrs:{src:n("cf05"),alt:"openEO"}}),r("h2",[e._v("Web Editor "),r("span",{staticClass:"version",on:{click:e.showWebEditorInfo}},[e._v(e._s(e.version))])])]),e.message?r("div",{staticClass:"message",domProps:{innerHTML:e._s(e.message)}}):e._e(),e.isConnected?e.isDiscovered?e._e():r("div",{staticClass:"login"},[r("h3",[e._v("Log in to "+e._s(e.title))]),r("Tabs",{attrs:{id:"credentials",pills:!0}},[e.supportsOidc?r("Tab",{attrs:{id:"oidc",name:"OpenID Connect"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.loginOidc(t)}}},[r("div",{staticClass:"row help"},[r("i",{staticClass:"fas fa-info-circle"}),r("span",[e._v("Common and most secure workflow to login at a provider, usually with username and password. You need to specify a "),r("em",[e._v("Client ID")]),e._v(", which will be provided to you by the provider. You need to allow the URL of this service as redirect URL for the authentication service.")])]),r("div",{staticClass:"row"},[r("label",{attrs:{for:"password"}},[e._v("Client ID:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.clientId,expression:"clientId"}],staticClass:"input",attrs:{id:"clientId",type:"text",required:"required"},domProps:{value:e.clientId},on:{input:function(t){t.target.composing||(e.clientId=t.target.value)}}})]),r("div",{staticClass:"row"},[r("button",{staticClass:"connectBtn",class:{loading:e.loading},attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-spinner fa-spin fa-lg"}),r("i",{staticClass:"fab fa-openid"}),e._v(" Connect with OpenID Connect (experimental)")])])])]):e._e(),e.supportsBasic?r("Tab",{attrs:{id:"basic",name:"Basic"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.loginBasic(t)}}},[r("div",{staticClass:"row help"},[r("i",{staticClass:"fas fa-info-circle"}),r("span",[e._v("The "),r("tt",[e._v("Basic")]),e._v(" is mostly used for development and testing purposes. You can log in with username and password.")],1)]),r("div",{staticClass:"row"},[r("label",{attrs:{for:"username"}},[e._v("Username:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{id:"username",type:"text",required:"required"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("div",{staticClass:"row"},[r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{id:"password",type:"password",required:"required"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"row"},[r("button",{staticClass:"connectBtn",class:{loading:e.loading},attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-spinner fa-spin fa-lg"}),e._v(" Log in")])])])]):e._e(),r("Tab",{attrs:{id:"noauth",name:"No credentials"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.loginNoAuth(t)}}},[r("div",{staticClass:"row help"},[r("i",{staticClass:"fas fa-info-circle"}),r("span",[e._v("Choose this if you don't have credentials for the service provider and just want to explore the service with its available data and processes. You may not be able to process any data.")])]),r("div",{staticClass:"row"},[r("button",{staticClass:"connectBtn",class:{loading:e.loading},attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-spinner fa-spin fa-lg"}),r("i",{staticClass:"fas fa-user-slash"}),e._v(" Proceed without logging in")])])])])],1)],1):r("form",{staticClass:"connect",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("h3",[e._v("Connect to server")]),r("div",{staticClass:"row"},[r("label",{attrs:{for:"serverUrl"}},[e._v("URL:")]),r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.serverUrl,expression:"serverUrl",modifiers:{lazy:!0,trim:!0}}],attrs:{id:"serverUrl",disabled:e.autoConnect},domProps:{value:e.serverUrl},on:{change:function(t){e.serverUrl=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),e.allowOtherServers?r("button",{attrs:{type:"button",title:"Select previously used server"},on:{click:e.showServerSelector}},[r("i",{staticClass:"fas fa-book"})]):e._e()])]),r("div",{staticClass:"row"},[r("button",{staticClass:"connectBtn",class:{loading:e.loading},attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-spinner fa-spin fa-lg"}),e._v(" Connect")])])])])])},x=[],S=(n("ac4d"),n("8a81"),n("8c7c")),A=n("e7ea"),j=n("bdb2");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(y["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E={name:"ConnectForm",mixins:[S["a"],C["a"]],components:{Tabs:A["a"],Tab:j["a"]},computed:D({},u["a"].mapState("server",["connectionError","discoveryErrors"]),{},u["a"].mapGetters("server",["isConnected","isDiscovered","isAuthenticated","title"]),{},u["a"].mapState("editor",["storedServers"]),{supportsOidc:function(){return this.supports("authenticateOIDC")},supportsBasic:function(){return this.supports("authenticateBasic")}}),data:function(){return{serverUrl:b["a"].serverUrl,allowOtherServers:!b["a"].serverUrl,autoConnect:!1,username:"",password:"",clientId:"",loading:!1,version:O.version,message:b["a"].loginMessage}},created:function(){a["OpenEO"].signinCallbackOIDC("popup");var e=u["a"].param("server");u["a"].isUrl(e)&&(this.serverUrl=e),this.serverUrl&&(this.autoConnect=!0)},mounted:function(){this.autoConnect&&this.submitForm()},methods:D({},u["a"].mapActions("server",["connect","discover","authenticateBasic","authenticateOIDC"]),{},u["a"].mapMutations("editor",["addServer","removeServer"]),{submitForm:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isConnected?this.isDiscovered||this.initDiscovery():this.initConnection();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loginOidc:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initDiscovery("oidc");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loginBasic:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initDiscovery("basic");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loginNoAuth:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initDiscovery("noauth");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),initConnection:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("string"===typeof this.serverUrl&&u["a"].isUrl(this.serverUrl)){e.next=5;break}return u["a"].error(this,"Please specify a valid server."),e.abrupt("return");case 5:if("https:"!==window.location.protocol||"https:"===this.serverUrl.toLowerCase().substr(0,6)){e.next=8;break}return u["a"].error(this,"You are trying to connect to a back-end with HTTP instead of HTTPS, which is insecure and prohibited by web browsers. Please use HTTPS instead."),e.abrupt("return");case 8:return this.loading=!0,e.prev=9,e.next=12,this.connect({url:this.serverUrl});case 12:if(!e.sent){e.next=16;break}this.addServer(this.serverUrl),e.next=17;break;case 16:u["a"].exception(this,this.connectionError);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](9),u["a"].exception(this,e.t0);case 22:this.loading=!1,!this.isConnected&&this.allowOtherServers&&(this.autoConnect=!1);case 24:case"end":return e.stop()}},e,this,[[9,19]])}));function t(){return e.apply(this,arguments)}return t}(),initDiscovery:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,s,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.loading=!0,e.prev=1,"basic"!==t){e.next=7;break}return e.next=5,this.authenticateBasic({username:this.username,password:this.password});case 5:e.next=13;break;case 7:if("oidc"!==t){e.next=12;break}return e.next=10,this.authenticateOIDC({client_id:this.clientId,redirect_uri:window.location,uiMethod:"popup",automaticSilentRenew:!0});case 10:e.next=13;break;case 12:u["a"].info(this,"You are working as a guest. Your data will be publicly available!");case 13:e.next=21;break;case 15:return e.prev=15,e.t0=e["catch"](1),console.log(e.t0),u["a"].error(this,"Sorry, credentials are wrong."),this.loading=!1,e.abrupt("return");case 21:return e.next=23,this.discover();case 23:for(n=!0,r=!1,s=void 0,e.prev=26,o=this.discoveryErrors[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)a=i.value,u["a"].exception(this,a);e.next=34;break;case 30:e.prev=30,e.t1=e["catch"](26),r=!0,s=e.t1;case 34:e.prev=34,e.prev=35,n||null==o.return||o.return();case 37:if(e.prev=37,!r){e.next=40;break}throw s;case 40:return e.finish(37);case 41:return e.finish(34);case 42:this.loading=!1,this.isAuthenticated&&u["a"].ok(this,"Login successful.");case 44:case"end":return e.stop()}},e,this,[[1,15],[26,30,34,42],[35,,37,41]])}));function t(t){return e.apply(this,arguments)}return t}(),showWebEditorInfo:function(){this.emit("showWebEditorInfo")},showServerSelector:function(){var e=this;this.emit("showListModal","Select previously used server",this.storedServers,[{callback:function(t){return e.serverUrl=t,!0}},{callback:function(t){return e.removeServer(t)},icon:"trash",title:"Delete entry from history"}])}})},M=E,I=(n("a986"),n("2877")),R=Object(I["a"])(M,k,x,!1,null,null,null),U=R.exports,_=n("714b"),T=n("bc3a"),N=n.n(T);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(y["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}window.axios=N.a;var B={name:"openeo-web-editor",mixins:[C["a"]],components:{ConnectForm:U,IDE:function(){return Promise.all([n.e("chunk-7261c156"),n.e("chunk-08ce2731"),n.e("chunk-2d0c8f68"),n.e("chunk-2b644eba"),n.e("chunk-0026d950"),n.e("chunk-0f8b1978"),n.e("chunk-752cebef"),n.e("chunk-2d225015")]).then(n.bind(null,"f3db"))},Modal:_["a"]},data:function(){return{pkg:O}},mounted:function(){this.listen("showMessageModal",this.showMessageModal),this.listen("showHtmlModal",this.showHtmlModal),this.listen("showListModal",this.showListModal),this.listen("showWebEditorInfo",this.showWebEditorInfo)},computed:L({},u["a"].mapGetters("server",["isDiscovered"])),methods:{showMessageModal:function(e,t){this.$refs.modal.showMessage(e,t)},showHtmlModal:function(e,t){this.$refs.modal.showHtml(e,t)},showListModal:function(e,t,n){this.$refs.modal.showList(e,t,n)},showWebEditorInfo:function(){this.showHtmlModal("openEO Web Editor "+O.version,this.$refs.webEditorInfo)}}},H=B,Y=(n("5117"),Object(I["a"])(H,g,w,!1,null,null,null)),Z=Y.exports;r["a"].use(s["a"]),r["a"].config.productionTip=!1,r["a"].config.errorHandler=function(e,t,n){console.error(e,n),(e instanceof Error||"string"===typeof e)&&t&&t.$snotify&&t.$snotify.error(e.message||e,"Fatal error",b["a"].snotifyDefaults)},new r["a"]({store:v,render:function(e){return e(Z)}}).$mount("#app")},5740:function(e,t,n){},"714b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.shown?n("div",{style:{"z-index":e.zIndex},attrs:{id:"modal"},on:{mousedown:e.possiblyClose}},[n("div",{staticClass:"modal-container",style:{"min-width":e.minWidth,"max-width":e.maxWidth}},[n("header",{staticClass:"modal-header"},[n("h2",[e._v(e._s(e.title))]),n("span",{staticClass:"close",on:{click:e.close}},[n("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),n("main",{staticClass:"modal-content"},[e._t("main",["string"===typeof e.html?n("div",{domProps:{innerHTML:e._s(e.html)}}):null!==e.html&&"object"===typeof e.html?n("div",{domProps:{innerHTML:e._s(e.html.innerHTML)}}):null!==e.list?[0==e.listCount?n("strong",{staticClass:"listEmpty"},[e._v("Sorry, no data available.")]):n("ul",{staticClass:"list"},e._l(e.listItems,function(t,r){return n("li",{key:r,on:{click:function(n){return e.doMainListAction(t,r)}}},[n("strong",[e._v(e._s(Array.isArray(e.listItems)?t:r))]),e._l(e.otherListActions,function(s){return n("button",{key:s.icon,attrs:{type:"button",title:s.title},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.doListAction(t,r,s.callback)}}},[n("i",{class:"fas fa-"+s.icon})])})],2)}),0)]:[e._v(e._s(e.message))]])],2),n("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])]):e._e()},s=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("4877"),a=n("025e");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){Object(o["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=function(){return{title:"Sorry, no message passed!",message:null,html:null,list:null,listActions:[],shown:!1,onClose:null,zIndex:1e3}},d={name:"Modal",mixins:[i["a"]],props:{minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"80%"}},data:function(){return l()},mounted:function(){this.listen("showModal",this.showModal)},computed:u({},a["a"].mapState("editor",["hightestModalZIndex"]),{listCount:function(){return a["a"].size(this.listItems)},listItems:function(){return"function"==typeof this.list?this.list():this.list},otherListActions:function(){return Array.isArray(this.listActions)&&this.listActions.length>1?this.listActions.slice(1):[]}}),methods:u({},a["a"].mapMutations("editor",["openModal","closeModal"]),{escCloseListener:function(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.reset(),this._show(e,t)},showMessage:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.reset(),this.message=t,this._show(e,n)},showHtml:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.reset(),this.html=t,this._show(e,n)},showList:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.reset(),this.list=t,this.listActions=n,this._show(e,r)},_show:function(e,t){this.onClose=t,this.title=e,this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.shown=!0},reset:function(){Object.assign(this,l())},close:function(){("function"!==typeof this.onClose||this.onClose())&&(this.shown=!1,this.closeModal(),window.removeEventListener("keydown",this.escCloseListener))},possiblyClose:function(e){e.target==document.getElementById("modal")&&this.close()},doListAction:function(e,t,n){var r=n(Array.isArray(this.listItems)?e:t);!0===r&&this.close()},doMainListAction:function(e,t){this.listActions.length>0&&this.doListAction(e,t,this.listActions[0].callback)}})},p=d,f=(n("22d7"),n("2877")),h=Object(f["a"])(p,r,s,!1,null,null,null);t["a"]=h.exports},"8c7c":function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),s=n("025e");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var a,c,u={computed:i({},s["a"].mapState("server",["connection"]),{},s["a"].mapGetters("server",["supports"]),{apiVersion:function(){return this.connection.capabilities().apiVersion()}})},l=u,d=n("2877"),p=Object(d["a"])(l,a,c,!1,null,null,null);t["a"]=p.exports},9224:function(e){e.exports={name:"@openeo/web-editor",version:"0.4.0-beta.4",apiVersions:["0.4.0","0.4.1","0.4.2"],author:"openEO Consortium",contributors:[{name:"Matthias Mohr"},{name:"Gustav Jv Rensburg"},{name:"Miha Kadunc"},{name:"Christoph Friedrich"}],description:"An interactive and easy to use web-based editor for the OpenEO API.",license:"Apache-2.0",homepage:"http://openeo.org",bugs:{url:"https://github.com/Open-EO/openeo-web-editor/issues"},repository:{type:"git",url:"https://github.com/Open-EO/openeo-web-editor.git"},scripts:{"build:epsg":"node src/build-epsg.js",serve:"npm run build:epsg && vue-cli-service serve",build:"npm run build:epsg && vue-cli-service build --report"},dependencies:{"@openeo/js-client":"^0.4.2","@openeo/js-commons":"^0.4.7","@openeo/vue-components":"^0.4.2",ajv:"^6.10.0",codemirror:"^5.47.0","content-type":"^1.0.4","core-js":"^2.6.9","fast-stable-stringify":"^1.0.0",ol:"^5.3.3","ol-ext":"^3.1.4","regenerator-runtime":"^0.13.3",vue:"^2.6.10","vue-ctk-date-time-picker":"^2.1.1","vue-snotify":"^3.2.1",vuedraggable:"^2.21.0",vuex:"^3.1.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.9.2","@vue/cli-service":"^3.9.2","epsg-index":"^1.0.0","vue-template-compiler":"^2.6.10"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},a1bc:function(e,t,n){"use strict";t["a"]={serverUrl:"",loginMessage:'<b>Credentials for the Google Earth Engine platform:</b><table><tr><td>Server:</td><td>https://earthengine.openeo.org</td></tr><tr><td>User:</td><td>group8</td></tr><tr><td>Password:&nbsp;&nbsp;</td><td>test123</td></tr></table><br>Contact <a href="mailto:m.mohr@uni-muenster.de">m.mohr@uni-muenster.de</a> for further information, bug reports or if you\'d like to test other platforms.<br><br>Please keep in mind that this is a very early beta version. The software and services are not always stable yet!',snotifyDefaults:{timeout:5e3,titleMaxLength:30,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0},supportedMapServices:["xyz"]}},a986:function(e,t,n){"use strict";var r=n("4ab7"),s=n.n(r);s.a},b52e:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAA8CAMAAAA67OZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURRUlWBkoWhoqXBwrXR0tXiAvXyAvYCEwYCQzYiU0YyU0ZCg2ZSk4Zis5aCw6aC48ajA/bDNBbTRCbjZEbzZEcDhFcTpIczxKdD5MdWVCH2VCIGZEIWhFI2lHJGpIJmtJKGxKKW5OLXFRMXNTNHNUNHRVNXZXOHdYOXhZO3laPHpcPkBNd0FOeENQeURQeUdTfEdUfEFadEhUfEpWfktYf0xYf0dgeXxeQH5hQ39jRk1agFBcglJehFVhhlhjiFlkiVxnil1oi15pjFRxj1p4l2FsjmRukGZwkmhyk2hzlGp0lGx2lm54mHB6mXJ8mnV/nXeAnniBn3mCoHuEoX2FoXKi03Sj03Sj1HWk1Him1Xuo1n2p1oBjRoJmSYRnS4VpTodrUIdsUIhtUYpvVIpwVY1zWY10Wo91XJB3XpN6YZV9ZZiBapqDbJuEbZyGcKCKdaGMd6OOeaSPeqSQe6WQfICJpIGKpYOLpoSMp4ePqYmRqouTrI2VrpKZsZSbs5Scs5iftpqgtp6luqmWgquYhayah62biLCfjbGgjrOhkLSikrallbiombusnbytnqCnu6KovaSrvqasv76voL6woYWu14Gs2Iew2Yqx2Iiw2qaswKiuwaqwwq60xbC2x7K3yLK4yLW6yrm+zbzAz77C0KPC4qTD47XO6LjQ6bzT6r7U68Cxo8GzpcO1p8S3qsW4qsa6rci7rsq+ssu/tMvAtM3Ct9DGu9HGvNPJv8HF0sPH1MXJ1srN2czP2s7R3NTKwNXMwtjPx9jQx9nRyNzUzdDT3dHU3t/Y0cPX7MPY7MbZ7cjb7src7szd79PW4NbZ4tja49nb5Nnc5Nve5tze5t/h6NHg8Nbk8t7p9eDZ0uLb1Obg2unk3+Hj6eLk6uTl6+Xm7Ofp7url4Ozn4+3p5ejp7urr8Ors8O3u8u/w8+/w9O/0+vDt6fLv7PTx7vDx9PXy8Pb08vX19vX2+Pf4+fj29fn5+fn6/Pv8/fz7+vz8+/z8/P39/v7+/f7+/gAAAJVn57cAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAGcUlEQVRYR9WYC1QUVRiAL7iygDw2ZbXZVUJKyWellYYgaakV+ICoJCV7qCkYmmIPHxXYg5TKSnv5SBd72MPUsiQxS8jKNK1jJaFmBEJFoeaz1f/0//+9szsLi9AW5+R3DnPv/Wfmmzv/3Ll7BwHNxdlqfmGh5DuOVD0QF9IysPc933ALYH5Em57gXNS/VcuwhEXHVBBgw7B2geY2g5fJVq3Vai2EXcnnmlu2Td3HoXp9fsgkFMP+5MBsIYKqe6tY250cgwP9VUD0PkDtaqwtz/WXoYACCpH5uILaqbzP7EfbftxDNJt7CeEXHkSx4F0Uq4rAasBFvYKx6EZHkXkY7WfM+zFE5lE3S7YDLMF4cO4vcMTRDmvXkwXNQgQ+dRjg03is9aIY9rhFzhHs09N4h7MxQGYh2uUUOlKo49Mx5JkNp0WIkG+5epj6SRkjs3kHx5yDsO4A+BCLlzkCy4SwYMHma/iuC7HWDUsyn1DIU16i3chOrFN3yDxLhqA6QIhEgCQhYlUErEJggshswZsgBuItYsHZSJNsh1lCmNR+gIuFGIgFmX+UEYDBeMtsS9mpSMBHJ833q2PwBBMWntkYzicqsGc9sFAHSmZgZgDM6DGAd0nmpeqYXG/mZKMZn3V3LBo3PyPN2HXGYE4bKdnGFn4MRD8hrsSCsrFXRgDwEVo5GwlL3OBzbsDsZgMeoN4q2I9jWn+CM2UIqnCQDQG4TogIpwpJGjU7zxGidTVXT+CjcY0601cccw7A+hIABxb6cFlRS9uGsnGjZJt8UyIc2J8tcVhLoQPJLMw5v4KzCPMjrDg4gV72ZHqt9w4XsTQJNNpngBT2WFtREcsDEM3mHtgK4QklYAvF9oVh1a/7pfSSs7EJZuOMJEc2moMqe6pYeBHHYK8+RYlQFjaUjRskmA2kcvZlwX7mbqlqVmMzHJ8fG+QfFJsjpz/CcW1rk19IfK6M1FoslhVcA1hsseD4qd/nerDZB5rXrL8pXvjCZX5VRZrEKGU+M//TbKg3xQufAxQkJo7Ag15RkSbRtGz4SvOazzA2fETPxtGSVXlTszKzsvNWlRyly/0nkDlK07QuWR1vG98nUrOnP7zZc+r1FTJHale8dxqK4djqYryGpl3wSDmsVPflG3o2prx1GtcX2RmbDy1gs6bZM8vosv8KMs8tByjve1f77GwlRuzTDsoDfIbMSElMelmMTVkl538Au9XN/WP0bJRtgtLMyXCHUrqY8xdf1UfInL8W3i4vmah8Bu48JA/yCTJPXnOhZvdMheKWg/C6mgqIlZCKK3ADcnGJVOUOsgYHRQzMqQT40p2NjI5KVJ8xdd6cIfLHT0d9F1SPcP14+iVVyRibI1FBf96YiAPSgFfzxnDVZIILOcjmrvnrxuZ3Vaq6PA7fqwc+cuRKMocVuOGf1w3UYf8hi4s2Lh2Kq2Dh79itZ8MJa09OftMWo1ye2EvobB00t1ZVnUpam8SrdXA13VQAf3GQGd+TQ6trOuelK5kno41jz4sZl9Qi0T3VTMdmHFXIHN0h42QFlG6u+eyPaUpnZAG8qBYkr3kx70JTd9f6FeAULdFovSOfYHQxwDG67jplM9LJ/RHoxYwraqGemeQjDNDPmzRrHdbA7X2e+KEig1Vd2KhjW8NnMGi27Nf5iSLYxXDe5QJX17S8V2abFo0Oe1QkvTDpNaOxaC+1nTRtLGy9ieGx4cafPPg1NoBKN7i6xu8C3awzZx5t+5Q9Nu/Jn58l99TfozV7DZ9B1DcH8teWEVzO6itGgzmqYjwV0bYOewDeHadp82BuR+0dPoPwMLegSFP7rGWWqxbO2bBJ0z7B6VubAqP4TZFjw+mCPI3l2YWt+FEuM/igMdp6gD3aGG4QZFZVxUzsvL6+ZWhsJGNZ16z1reiM23FyJlqvrcXt+GhuEPXNPJ4N47LOeDYyYZNNm6Qfeutq3GTbncZsyD0uKPVJp1QD4F5s9qNKfbO2IGuuUzeXfoybCTZXn7yYK+lfEQk4LxO1idgwueaNOubzSuHufNqnM8numjrQHKrmOYIVPNeZhi7b8bUjla7it/y3NzDsxaxFxWjv0yk6q9obx4aR+3h/UahqMoEF0KAZV0wey6RijydoRJqhOon/h8MMpv/HEGS+/JK6XPW8kYVXq8pWSDR5MENK8FP6wfgwkyk0bhZ+oW9LS3sOQ2RuHs4+M8DfKQaa4/sLxwQAAAAASUVORK5CYII="}});
//# sourceMappingURL=app~f075b844.3133f6c6.js.map