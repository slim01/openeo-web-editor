(function(e){function t(t){for(var n,s,a=t[0],c=t[1],u=t[2],l=0,d=[];l<a.length;l++)s=a[l],o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var a=r[s];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={"app~f075b844":0},o={"app~f075b844":0},i=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-e1d886a2":"e2dea115","chunk-0a12618c":"33d8c5d7","chunk-2d0c8f68":"f800c623","chunk-2b644eba":"d8d236a9","chunk-0026d950":"84679570","chunk-0f8b1978":"32b47a3c","chunk-752cebef":"15032529","chunk-2d225015":"adf82bb2","chunk-33c1822d":"b0af9e4d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-e1d886a2":1,"chunk-0a12618c":1,"chunk-2b644eba":1,"chunk-0f8b1978":1,"chunk-33c1822d":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-e1d886a2":"8fe82851","chunk-0a12618c":"4176f2c9","chunk-2d0c8f68":"31d6cfe0","chunk-2b644eba":"aefedea1","chunk-0026d950":"31d6cfe0","chunk-0f8b1978":"1a94bc99","chunk-752cebef":"31d6cfe0","chunk-2d225015":"31d6cfe0","chunk-33c1822d":"b9d3b249"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[e],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){s[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,r[1](i)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openeo-web-editor/demo/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors~253ae210","chunk-vendors~7d359b94"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"025e":function(e,t,r){"use strict";r("4917"),r("386d"),r("a481"),r("7f7f");var n=r("a1bc"),s=r("fbdae"),o=r("2f62");t["a"]={exception:function(e,t,r){console.error(t);var n=null,s=r;this.isObject(t)&&"string"===typeof t.message?(n=t.code>0?"Error #"+t.code:r,s=t.message):"string"===typeof t&&(s=t,n=r),this.error(e,s,n)},error:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.$snotify.error(t,r,n["a"].snotifyDefaults)},info:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.$snotify.info(t,r,n["a"].snotifyDefaults)},ok:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={timeout:2e3};e.$snotify.success(t,r,Object.assign({},n["a"].snotifyDefaults,s))},confirm:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={timeout:1e4,closeOnClick:!1,buttons:r};e.$snotify.confirm(t,null,Object.assign({},n["a"].snotifyDefaults,s))},blobToText:function(e,t){var r=new FileReader;r.onload=t,r.readAsText(e)},isChildOfModal:function(e){return e.$parent&&"Modal"==e.$parent.$options.name},getFileNameFromURL:function(e){return e=e.substring(0,-1==e.indexOf("#")?e.length:e.indexOf("#")),e=e.substring(0,-1==e.indexOf("?")?e.length:e.indexOf("?")),e=e.substring(e.lastIndexOf("/")+1,e.length),e},formatDateTime:function(e){if(!e)return"";var t=new Date(e);return t.toISOString().replace("T"," ").replace("Z","").substring(0,19)},param:function(e){var t=new URLSearchParams(window.location.search);return t.get(e)},isUrl:function(e){return"string"===typeof e&&e.length>0&&null!==e.match(/^https?:\/\//i)},isObject:function(e){return s["Utils"].isObject(e)},size:function(e){return s["Utils"].size(e)},domBoundingBox:function(e){var t=e.getBoundingClientRect();return t.offsetTop=t.top+document.body.scrollTop,t.offsetLeft=t.left+document.body.scrollLeft,t},extentToBBox:function(e){var t=e.length>4;return{west:e[0],east:e[t?3:2],south:e[1],north:e[t?4:3]}},mapState:o["e"],mapGetters:o["c"],mapMutations:o["d"],mapActions:o["b"]}},"22d7":function(e,t,r){"use strict";var n=r("b52e"),s=r.n(n);s.a},"4ab7":function(e,t,r){},5117:function(e,t,r){"use strict";var n=r("5740"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=r("f213"),o=(r("fbfd"),r("2f62")),i=(r("55dd"),r("ac6a"),r("5df3"),r("7f7f"),r("96cf"),r("3b8d")),a=r("e97b"),c=r("fbdae"),u=r("025e"),l=function(){return{connection:null,requireAuthentication:!0,userId:null,userInfo:{},connectionError:null,discoveryErrors:[],outputFormats:{},serviceTypes:{},processes:[],collections:[]}},d={namespaced:!0,state:l(),getters:{capabilities:function(e){return null!==e.connection?e.connection.capabilities():null},supports:function(e){return function(t){return null!==e.connection&&null!==e.connection.capabilities()&&e.connection.capabilities().hasFeature(t)}},formatCurrency:function(e){return function(t){var r="";return e.connection&&null!==e.connection.capabilities().currency()&&(r=" "+e.connection.capabilities().currency()),t+r}},isConnected:function(e){return null!==e.connection&&(!e.requireAuthentication||null!==e.userId)},processRegistry:function(e){var t=new c["ProcessRegistry"];for(var r in e.processes)t.add(e.processes[r]);return t},supportsBilling:function(e){return null!==e.connection&&null!==e.connection.capabilities().currency()},supportsBillingPlans:function(e){return null!==e.connection&&null!==e.connection.capabilities().currency()&&e.connection.capabilities().listPlans().length>0}},actions:{connect:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,o,i,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=r.url,o=r.requireAuthentication,n("reset"),e.prev=3,e.next=6,a["OpenEO"].connect(s);case 6:i=e.sent,n("connection",i),e.next=15;break;case 10:return e.prev=10,e.t0=e["catch"](3),"Network Error"!=e.t0.message&&"NetworkError"!=e.t0.name||(e.t0=new Error("Server is not available.")),n("setConnectionError",e.t0),e.abrupt("return",!1);case 15:return c=[],u=i.capabilities(),u.hasFeature("listCollections")?c.push(i.listCollections().then(function(e){return n("collections",e)}).catch(function(e){return n("addDiscoveryError",e)})):n("addDiscoveryError",new Error("Collections not supported by the back-end.")),u.hasFeature("listProcesses")?c.push(i.listProcesses().then(function(e){return n("processes",e)}).catch(function(e){return n("addDiscoveryError",e)})):n("addDiscoveryError",new Error("Processes not supported by the back-end.")),u.hasFeature("listFileTypes")&&c.push(i.listFileTypes().then(function(e){return n("outputFormats",e)}).catch(function(e){return n("addDiscoveryError",e)})),u.hasFeature("listServiceTypes")&&c.push(i.listServiceTypes().then(function(e){return n("serviceTypes",e)}).catch(function(e){return n("addDiscoveryError",e)})),e.next=23,Promise.all(c);case 23:return n("requireAuthentication",o),e.abrupt("return",!0);case 25:case"end":return e.stop()}},e,null,[[3,10]])}));function t(t,r){return e.apply(this,arguments)}return t}(),authenticateBasic:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,r){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=r.username,s=r.password,!t.getters.supports("authenticateBasic")){e.next=7;break}return e.next=4,t.state.connection.authenticateBasic(n,s);case 4:t.commit("userId",t.state.connection.getUserId()),e.next=8;break;case 7:throw"Sorry, Basic authentication is not supported.";case 8:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),describeAccount:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getters.supports("describeAccount")||!t.state.userId){e.next=7;break}return e.next=3,t.state.connection.describeAccount();case 3:r=e.sent,t.commit("userInfo",r),e.next=8;break;case 7:t.commit("userInfo",{userId:t.state.userId});case 8:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},mutations:{requireAuthentication:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.requireAuthentication=t},connection:function(e,t){e.connection=t},userId:function(e,t){e.userId=t},userInfo:function(e,t){e.userInfo=t},outputFormats:function(e,t){if(u["a"].isObject(t)){var r={};for(var n in t)r[n.toUpperCase()]=t[n];e.outputFormats=r}else e.outputFormats=t},serviceTypes:function(e,t){if(u["a"].isObject(t)){var r={};for(var n in t)r[n.toUpperCase()]=t[n];e.serviceTypes=r}else e.serviceTypes=t},processes:function(e,t){var r=[];for(var n in t.processes)"undefined"!==typeof t.processes[n].id&&r.push(t.processes[n]);r.sort(function(e,t){return e.id.localeCompare(t.id)}),e.processes=r},collections:function(e,t){var r=[];for(var n in t.collections)"undefined"!==typeof t.collections[n].id&&r.push(t.collections[n]);r.sort(function(e,t){return e.id.localeCompare(t.id)}),e.collections=r},setConnectionError:function(e,t){e.connectionError=t},addDiscoveryError:function(e,t){e.discoveryErrors.push(t)},reset:function(e){Object.assign(e,l())}}},p="serverUrls",f="savedScripts",h=function(){return{storedServers:JSON.parse(localStorage.getItem(p)||"[]"),storedScripts:JSON.parse(localStorage.getItem(f)||"{}"),scriptName:null,hightestModalZIndex:1e3}},b={namespaced:!0,state:h(),getters:{getScriptByName:function(e){return function(t){return e.storedScripts[t]}}},actions:{},mutations:{openModal:function(e){e.hightestModalZIndex=e.hightestModalZIndex+1},closeModal:function(e){e.hightestModalZIndex=e.hightestModalZIndex-1},addServer:function(e,t){-1===e.storedServers.indexOf(t)&&e.storedServers.push(t),localStorage.setItem(p,JSON.stringify(e.storedServers))},removeServer:function(e,t){e.storedServers.splice(e.storedServers.indexOf(t),1),localStorage.setItem(p,JSON.stringify(e.storedServers))},addScript:function(e,t){var r=t.name,n=t.script;e.storedScripts[r]=n,localStorage.setItem(f,JSON.stringify(e.storedScripts))},removeScript:function(e,t){n["a"].delete(e.storedScripts,t),localStorage.setItem(f,JSON.stringify(e.storedScripts))},setScriptName:function(e,t){e.scriptName=t},reset:function(e){Object.assign(e,h())}}};n["a"].use(o["a"]);var v=new o["a"].Store({modules:{server:d,editor:b}}),m=r("a1bc"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[e.isConnected?r("IDE"):r("ConnectForm"),r("Modal",{ref:"modal",attrs:{maxWidth:"60%"}}),r("vue-snotify"),r("div",{ref:"webEditorInfo",staticStyle:{display:"none"}},[r("p",{staticClass:"aboutPage"},[e._v(e._s(e.pkg.description))]),e._m(0),r("h3",{staticClass:"aboutPage"},[e._v("Supported API versions:")]),r("ul",{staticClass:"aboutPage"},e._l(e.pkg.apiVersions,function(t){return r("li",{key:t},[r("a",{attrs:{href:"https://open-eo.github.io/openeo-api/v/"+t+"/index.html",target:"_blank"}},[e._v(e._s(t))])])}),0)])],1)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"aboutPage"},[e._v("This software is published by the "),r("strong",[e._v("openEO Consortium")]),e._v(" under the "),r("strong",[e._v("Apache 2.0 license")]),e._v(". Please find more information about the openEO project on our "),r("a",{attrs:{href:"http://www.openeo.org",target:"_blank"}},[e._v("homepage")]),e._v(" and visit the "),r("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor",target:"_blank"}},[e._v("GitHub repository")]),e._v(" for information about the Web Editor. Feel encouraged to "),r("strong",[e._v("report bugs, feature requests and other issues in the "),r("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor/issues",target:"_blank"}},[e._v("GitHub issue tracker")])]),e._v(".")])}],w=(r("8e6e"),r("456d"),r("bd86")),O=r("9224"),k=r("4877"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("header",{staticClass:"logo"},[n("img",{attrs:{src:r("cf05"),alt:"openEO"}}),n("h2",[e._v("Web Editor "),n("span",{staticClass:"version",on:{click:e.showWebEditorInfo}},[e._v(e._s(e.version))])])]),e.message?n("div",{staticClass:"message",domProps:{innerHTML:e._s(e.message)}}):e._e(),n("h3",[e._v("Connect to server")]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"username"}},[e._v("Server:")]),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.serverUrl,expression:"serverUrl",modifiers:{lazy:!0,trim:!0}}],attrs:{id:"serverUrl"},domProps:{value:e.serverUrl},on:{change:function(t){e.serverUrl=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),n("button",{attrs:{type:"button",title:"Select previously used server"},on:{click:e.showServerSelector}},[n("i",{staticClass:"fas fa-book"})])])]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"username"}},[e._v("Username:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{id:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"row"},[n("button",{staticClass:"connectBtn",class:{connecting:e.connecting},attrs:{type:"submit"}},[n("i",{staticClass:"fas fa-spinner fa-spin fa-lg"}),e._v(" Connect")])])])])},A=[],S=(r("ac4d"),r("8a81"),r("8c7c"));function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach(function(t){Object(w["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var C={name:"ConnectForm",mixins:[S["a"],k["a"]],computed:j({},u["a"].mapState("server",["connectionError","discoveryErrors"]),{},u["a"].mapState("editor",["storedServers"])),data:function(){return{serverUrl:m["a"].serverUrl,username:"",password:"",connecting:!1,version:O.version,message:m["a"].loginMessage}},created:function(){var e=u["a"].param("server");u["a"].isUrl(e)&&(this.serverUrl=e)},methods:j({},u["a"].mapActions("server",["connect","authenticateBasic","describeAccount"]),{},u["a"].mapMutations("editor",["addServer","removeServer"]),{submitForm:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n,s,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("string"===typeof this.serverUrl&&u["a"].isUrl(this.serverUrl)){e.next=5;break}return u["a"].error(this,"Please specify a valid server."),e.abrupt("return");case 5:if("https:"!==window.location.protocol||"https:"===this.serverUrl.toLowerCase().substr(0,6)){e.next=8;break}return u["a"].error(this,"You are trying to connect to a back-end with HTTP instead of HTTPS, which is insecure and prohibited by web browsers. Please use HTTPS instead."),e.abrupt("return");case 8:return t=this.username||this.password,this.connecting=!0,e.prev=10,e.next=13,this.connect({url:this.serverUrl,requireAuthentication:t});case 13:if(!e.sent){e.next=17;break}this.addServer(this.serverUrl),e.next=20;break;case 17:return this.connecting=!1,u["a"].exception(this,this.connectionError),e.abrupt("return");case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e["catch"](10),this.connecting=!1,u["a"].exception(this,e.t0),e.abrupt("return");case 27:for(r=!0,n=!1,s=void 0,e.prev=30,o=this.discoveryErrors[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)a=i.value,u["a"].exception(this,a);e.next=38;break;case 34:e.prev=34,e.t1=e["catch"](30),n=!0,s=e.t1;case 38:e.prev=38,e.prev=39,r||null==o.return||o.return();case 41:if(e.prev=41,!n){e.next=44;break}throw s;case 44:return e.finish(41);case 45:return e.finish(38);case 46:if(!t){e.next=68;break}if(e.prev=47,this.supports("authenticateBasic")||!this.supports("authenticateOIDC")){e.next=52;break}u["a"].error(this,"Sorry, the authentication methods supported by the back-end are not supported by the Web Editor."),e.next=61;break;case 52:if(!this.supports("authenticateBasic")){e.next=60;break}return e.next=55,this.authenticateBasic({username:this.username,password:this.password});case 55:return e.next=57,this.describeAccount();case 57:u["a"].ok(this,"Login successful."),e.next=61;break;case 60:u["a"].error(this,"Sorry, the authentication methods is not supported by the Web Editor.");case 61:e.next=66;break;case 63:e.prev=63,e.t2=e["catch"](47),u["a"].error(this,"Sorry, credentials are wrong.");case 66:e.next=69;break;case 68:u["a"].info(this,"You are working as a guest. Your data will be publicly available!");case 69:this.connecting=!1;case 70:case"end":return e.stop()}},e,this,[[10,22],[30,34,38,46],[39,,41,45],[47,63]])}));function t(){return e.apply(this,arguments)}return t}(),showWebEditorInfo:function(){this.emit("showWebEditorInfo")},showServerSelector:function(){var e=this;this.emit("showListModal","Select previously used server",this.storedServers,[{callback:function(t){return e.serverUrl=t,!0}},{callback:function(t){return e.removeServer(t)},icon:"trash",title:"Delete entry from history"}])}})},E=C,M=(r("a986"),r("2877")),D=Object(M["a"])(E,x,A,!1,null,null,null),I=D.exports,U=r("714b"),F=r("bc3a"),N=r.n(F);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach(function(t){Object(w["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}window.axios=N.a;var L={name:"openeo-web-editor",mixins:[k["a"]],components:{ConnectForm:I,IDE:function(){return Promise.all([r.e("chunk-e1d886a2"),r.e("chunk-0a12618c"),r.e("chunk-2d0c8f68"),r.e("chunk-2b644eba"),r.e("chunk-0026d950"),r.e("chunk-0f8b1978"),r.e("chunk-752cebef"),r.e("chunk-2d225015")]).then(r.bind(null,"f3db"))},Modal:U["a"]},data:function(){return{pkg:O}},mounted:function(){this.listen("showMessageModal",this.showMessageModal),this.listen("showHtmlModal",this.showHtmlModal),this.listen("showListModal",this.showListModal),this.listen("showWebEditorInfo",this.showWebEditorInfo)},computed:H({},u["a"].mapGetters("server",["isConnected"])),methods:{showMessageModal:function(e,t){this.$refs.modal.showMessage(e,t)},showHtmlModal:function(e,t){this.$refs.modal.showHtml(e,t)},showListModal:function(e,t,r){this.$refs.modal.showList(e,t,r)},showWebEditorInfo:function(){this.showHtmlModal("openEO Web Editor "+O.version,this.$refs.webEditorInfo)}}},R=L,Y=(r("5117"),Object(M["a"])(R,g,y,!1,null,null,null)),Z=Y.exports;n["a"].use(s["a"]),n["a"].config.productionTip=!1,n["a"].config.errorHandler=function(e,t,r){console.error(e,r),(e instanceof Error||"string"===typeof e)&&t&&t.$snotify&&t.$snotify.error(e.message||e,"Fatal error",m["a"].snotifyDefaults)},new n["a"]({store:v,render:function(e){return e(Z)}}).$mount("#app")},5740:function(e,t,r){},"714b":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.shown?r("div",{style:{"z-index":e.zIndex},attrs:{id:"modal"},on:{mousedown:e.possiblyClose}},[r("div",{staticClass:"modal-container",style:{"min-width":e.minWidth,"max-width":e.maxWidth}},[r("header",{staticClass:"modal-header"},[r("h2",[e._v(e._s(e.title))]),r("span",{staticClass:"close",on:{click:e.close}},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),r("main",{staticClass:"modal-content"},[e._t("main",["string"===typeof e.html?r("div",{domProps:{innerHTML:e._s(e.html)}}):null!==e.html&&"object"===typeof e.html?r("div",{domProps:{innerHTML:e._s(e.html.innerHTML)}}):null!==e.list?[0==e.listCount?r("strong",{staticClass:"listEmpty"},[e._v("Sorry, no data available.")]):r("ul",{staticClass:"list"},e._l(e.listItems,function(t,n){return r("li",{key:n,on:{click:function(r){return e.doMainListAction(t,n)}}},[r("strong",[e._v(e._s(Array.isArray(e.listItems)?t:n))]),e._l(e.otherListActions,function(s){return r("button",{key:s.icon,attrs:{type:"button",title:s.title},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.doListAction(t,n,s.callback)}}},[r("i",{class:"fas fa-"+s.icon})])})],2)}),0)]:[e._v(e._s(e.message))]])],2),r("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])]):e._e()},s=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("4877"),a=r("025e");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var l=function(){return{title:"Sorry, no message passed!",message:null,html:null,list:null,listActions:[],shown:!1,onClose:null,zIndex:1e3}},d={name:"Modal",mixins:[i["a"]],props:{minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"80%"}},data:function(){return l()},mounted:function(){this.listen("showModal",this.showModal)},computed:u({},a["a"].mapState("editor",["hightestModalZIndex"]),{listCount:function(){return a["a"].size(this.listItems)},listItems:function(){return"function"==typeof this.list?this.list():this.list},otherListActions:function(){return Array.isArray(this.listActions)&&this.listActions.length>1?this.listActions.slice(1):[]}}),methods:u({},a["a"].mapMutations("editor",["openModal","closeModal"]),{escCloseListener:function(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.reset(),this._show(e,t)},showMessage:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.reset(),this.message=t,this._show(e,r)},showHtml:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.reset(),this.html=t,this._show(e,r)},showList:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.reset(),this.list=t,this.listActions=r,this._show(e,n)},_show:function(e,t){this.onClose=t,this.title=e,this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.shown=!0},reset:function(){Object.assign(this,l())},close:function(){("function"!==typeof this.onClose||this.onClose())&&(this.shown=!1,this.closeModal(),window.removeEventListener("keydown",this.escCloseListener))},possiblyClose:function(e){e.target==document.getElementById("modal")&&this.close()},doListAction:function(e,t,r){var n=r(Array.isArray(this.listItems)?e:t);!0===n&&this.close()},doMainListAction:function(e,t){this.listActions.length>0&&this.doListAction(e,t,this.listActions[0].callback)}})},p=d,f=(r("22d7"),r("2877")),h=Object(f["a"])(p,n,s,!1,null,null,null);t["a"]=h.exports},"8c7c":function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),s=r("025e");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var a,c,u={computed:i({},s["a"].mapState("server",["connection"]),{},s["a"].mapGetters("server",["supports","isConnected"]),{apiVersion:function(){return this.connection.capabilities().apiVersion()}})},l=u,d=r("2877"),p=Object(d["a"])(l,a,c,!1,null,null,null);t["a"]=p.exports},9224:function(e){e.exports={name:"@openeo/web-editor",version:"0.4.0-beta.4",apiVersions:["0.4.0","0.4.1","0.4.2"],author:"openEO Consortium",contributors:[{name:"Matthias Mohr"},{name:"Gustav Jv Rensburg"},{name:"Miha Kadunc"},{name:"Christoph Friedrich"}],description:"An interactive and easy to use web-based editor for the OpenEO API.",license:"Apache-2.0",homepage:"http://openeo.org",bugs:{url:"https://github.com/Open-EO/openeo-web-editor/issues"},repository:{type:"git",url:"https://github.com/Open-EO/openeo-web-editor.git"},scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build --report"},dependencies:{"@openeo/js-client":"^0.4.1","@openeo/js-commons":"^0.4.6","@openeo/vue-components":"^0.4.2",ajv:"^6.10.0",codemirror:"^5.47.0","content-type":"^1.0.4","core-js":"^2.6.9","fast-stable-stringify":"^1.0.0",ol:"^5.3.3","ol-ext":"^3.1.4","regenerator-runtime":"^0.13.3",vue:"^2.6.10","vue-ctk-date-time-picker":"^2.1.1","vue-snotify":"^3.2.1",vuedraggable:"^2.21.0",vuex:"^3.1.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.9.2","@vue/cli-service":"^3.9.2","vue-template-compiler":"^2.6.10"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},a1bc:function(e,t,r){"use strict";t["a"]={serverUrl:"",loginMessage:'<b>Credentials for the Google Earth Engine platform:</b><table><tr><td>Server:</td><td>https://earthengine.openeo.org</td></tr><tr><td>User:</td><td>group8</td></tr><tr><td>Password:&nbsp;&nbsp;</td><td>test123</td></tr></table><br>Contact <a href="mailto:m.mohr@uni-muenster.de">m.mohr@uni-muenster.de</a> for further information, bug reports or if you\'d like to test other platforms.<br><br>Please keep in mind that this is a very early beta version. The software and services are not always stable yet!',snotifyDefaults:{timeout:5e3,titleMaxLength:30,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0},supportedMapServices:["xyz"]}},a986:function(e,t,r){"use strict";var n=r("4ab7"),s=r.n(n);s.a},b52e:function(e,t,r){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAA8CAMAAAA67OZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURRUlWBkoWhoqXBwrXR0tXiAvXyAvYCEwYCQzYiU0YyU0ZCg2ZSk4Zis5aCw6aC48ajA/bDNBbTRCbjZEbzZEcDhFcTpIczxKdD5MdWVCH2VCIGZEIWhFI2lHJGpIJmtJKGxKKW5OLXFRMXNTNHNUNHRVNXZXOHdYOXhZO3laPHpcPkBNd0FOeENQeURQeUdTfEdUfEFadEhUfEpWfktYf0xYf0dgeXxeQH5hQ39jRk1agFBcglJehFVhhlhjiFlkiVxnil1oi15pjFRxj1p4l2FsjmRukGZwkmhyk2hzlGp0lGx2lm54mHB6mXJ8mnV/nXeAnniBn3mCoHuEoX2FoXKi03Sj03Sj1HWk1Him1Xuo1n2p1oBjRoJmSYRnS4VpTodrUIdsUIhtUYpvVIpwVY1zWY10Wo91XJB3XpN6YZV9ZZiBapqDbJuEbZyGcKCKdaGMd6OOeaSPeqSQe6WQfICJpIGKpYOLpoSMp4ePqYmRqouTrI2VrpKZsZSbs5Scs5iftpqgtp6luqmWgquYhayah62biLCfjbGgjrOhkLSikrallbiombusnbytnqCnu6KovaSrvqasv76voL6woYWu14Gs2Iew2Yqx2Iiw2qaswKiuwaqwwq60xbC2x7K3yLK4yLW6yrm+zbzAz77C0KPC4qTD47XO6LjQ6bzT6r7U68Cxo8GzpcO1p8S3qsW4qsa6rci7rsq+ssu/tMvAtM3Ct9DGu9HGvNPJv8HF0sPH1MXJ1srN2czP2s7R3NTKwNXMwtjPx9jQx9nRyNzUzdDT3dHU3t/Y0cPX7MPY7MbZ7cjb7src7szd79PW4NbZ4tja49nb5Nnc5Nve5tze5t/h6NHg8Nbk8t7p9eDZ0uLb1Obg2unk3+Hj6eLk6uTl6+Xm7Ofp7url4Ozn4+3p5ejp7urr8Ors8O3u8u/w8+/w9O/0+vDt6fLv7PTx7vDx9PXy8Pb08vX19vX2+Pf4+fj29fn5+fn6/Pv8/fz7+vz8+/z8/P39/v7+/f7+/gAAAJVn57cAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjb9TgnoAAAGcUlEQVRYR9WYC1QUVRiAL7iygDw2ZbXZVUJKyWellYYgaakV+ICoJCV7qCkYmmIPHxXYg5TKSnv5SBd72MPUsiQxS8jKNK1jJaFmBEJFoeaz1f/0//+9szsLi9AW5+R3DnPv/Wfmmzv/3Ll7BwHNxdlqfmGh5DuOVD0QF9IysPc933ALYH5Em57gXNS/VcuwhEXHVBBgw7B2geY2g5fJVq3Vai2EXcnnmlu2Td3HoXp9fsgkFMP+5MBsIYKqe6tY250cgwP9VUD0PkDtaqwtz/WXoYACCpH5uILaqbzP7EfbftxDNJt7CeEXHkSx4F0Uq4rAasBFvYKx6EZHkXkY7WfM+zFE5lE3S7YDLMF4cO4vcMTRDmvXkwXNQgQ+dRjg03is9aIY9rhFzhHs09N4h7MxQGYh2uUUOlKo49Mx5JkNp0WIkG+5epj6SRkjs3kHx5yDsO4A+BCLlzkCy4SwYMHma/iuC7HWDUsyn1DIU16i3chOrFN3yDxLhqA6QIhEgCQhYlUErEJggshswZsgBuItYsHZSJNsh1lCmNR+gIuFGIgFmX+UEYDBeMtsS9mpSMBHJ833q2PwBBMWntkYzicqsGc9sFAHSmZgZgDM6DGAd0nmpeqYXG/mZKMZn3V3LBo3PyPN2HXGYE4bKdnGFn4MRD8hrsSCsrFXRgDwEVo5GwlL3OBzbsDsZgMeoN4q2I9jWn+CM2UIqnCQDQG4TogIpwpJGjU7zxGidTVXT+CjcY0601cccw7A+hIABxb6cFlRS9uGsnGjZJt8UyIc2J8tcVhLoQPJLMw5v4KzCPMjrDg4gV72ZHqt9w4XsTQJNNpngBT2WFtREcsDEM3mHtgK4QklYAvF9oVh1a/7pfSSs7EJZuOMJEc2moMqe6pYeBHHYK8+RYlQFjaUjRskmA2kcvZlwX7mbqlqVmMzHJ8fG+QfFJsjpz/CcW1rk19IfK6M1FoslhVcA1hsseD4qd/nerDZB5rXrL8pXvjCZX5VRZrEKGU+M//TbKg3xQufAxQkJo7Ag15RkSbRtGz4SvOazzA2fETPxtGSVXlTszKzsvNWlRyly/0nkDlK07QuWR1vG98nUrOnP7zZc+r1FTJHale8dxqK4djqYryGpl3wSDmsVPflG3o2prx1GtcX2RmbDy1gs6bZM8vosv8KMs8tByjve1f77GwlRuzTDsoDfIbMSElMelmMTVkl538Au9XN/WP0bJRtgtLMyXCHUrqY8xdf1UfInL8W3i4vmah8Bu48JA/yCTJPXnOhZvdMheKWg/C6mgqIlZCKK3ADcnGJVOUOsgYHRQzMqQT40p2NjI5KVJ8xdd6cIfLHT0d9F1SPcP14+iVVyRibI1FBf96YiAPSgFfzxnDVZIILOcjmrvnrxuZ3Vaq6PA7fqwc+cuRKMocVuOGf1w3UYf8hi4s2Lh2Kq2Dh79itZ8MJa09OftMWo1ye2EvobB00t1ZVnUpam8SrdXA13VQAf3GQGd+TQ6trOuelK5kno41jz4sZl9Qi0T3VTMdmHFXIHN0h42QFlG6u+eyPaUpnZAG8qBYkr3kx70JTd9f6FeAULdFovSOfYHQxwDG67jplM9LJ/RHoxYwraqGemeQjDNDPmzRrHdbA7X2e+KEig1Vd2KhjW8NnMGi27Nf5iSLYxXDe5QJX17S8V2abFo0Oe1QkvTDpNaOxaC+1nTRtLGy9ieGx4cafPPg1NoBKN7i6xu8C3awzZx5t+5Q9Nu/Jn58l99TfozV7DZ9B1DcH8teWEVzO6itGgzmqYjwV0bYOewDeHadp82BuR+0dPoPwMLegSFP7rGWWqxbO2bBJ0z7B6VubAqP4TZFjw+mCPI3l2YWt+FEuM/igMdp6gD3aGG4QZFZVxUzsvL6+ZWhsJGNZ16z1reiM23FyJlqvrcXt+GhuEPXNPJ4N47LOeDYyYZNNm6Qfeutq3GTbncZsyD0uKPVJp1QD4F5s9qNKfbO2IGuuUzeXfoybCTZXn7yYK+lfEQk4LxO1idgwueaNOubzSuHufNqnM8numjrQHKrmOYIVPNeZhi7b8bUjla7it/y3NzDsxaxFxWjv0yk6q9obx4aR+3h/UahqMoEF0KAZV0wey6RijydoRJqhOon/h8MMpv/HEGS+/JK6XPW8kYVXq8pWSDR5MENK8FP6wfgwkyk0bhZ+oW9LS3sOQ2RuHs4+M8DfKQaa4/sLxwQAAAAASUVORK5CYII="}});
//# sourceMappingURL=app~f075b844.c23a0ccd.js.map