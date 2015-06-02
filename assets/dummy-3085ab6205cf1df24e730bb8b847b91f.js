define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,i){"use strict";var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,Resolver:a["default"]}),n["default"](r,i["default"].modulePrefix),e["default"]=r}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,i=!1;e["default"]={name:"App Version",initialize:function(e,r){if(!i){var d=n(r.toString());a["default"].libraries.register(d,t["default"].APP.version),i=!0}}}}),define("dummy/initializers/device-orientation",["exports","ember-orientation/services/device-orientation","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var i=a["default"].orientationServiceDefaults,r=i.injectionFactories;n.register("config:device-orientation",i,{instantiate:!1}),n.register("service:device-orientation",t["default"]),n.inject("service:device-orientation","orientationServiceDefaults","config:device-orientation"),r.forEach(function(e){n.inject(e,"orientation","service:device-orientation")})}e.initialize=n,e["default"]={name:"device-orientation",initialize:n}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var i=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[i]&&(window[i]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/mixins/device-orientation-aware",["exports","ember-orientation/mixins/device-orientation-aware"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/device-orientation",["exports","ember-orientation/services/device-orientation"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.0-beta.2+70a206e1",loc:{source:null,start:{line:1,column:0},end:{line:21,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("link");e.setAttribute(a,"rel","stylesheet"),e.setAttribute(a,"href","css/materialize-bf8946acb62b8ac5e741dd574e7bb655.css"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar-fixed");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("nav");e.setAttribute(n,"class","indigo");var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","nav-wrapper");var r=e.createTextNode("\n      ");e.appendChild(i,r);var r=e.createElement("div");e.setAttribute(r,"class","container-fluid");var d=e.createTextNode("\n        ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","https://github.com/truenorth/ember-orientation"),e.setAttribute(d,"class","brand-logo");var o=e.createTextNode("Ember-orientation");e.appendChild(d,o),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d),e.appendChild(i,r);var r=e.createTextNode("\n    ");e.appendChild(i,r),e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","github-button-container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container text-center");var i=e.createTextNode("\n        ");e.appendChild(n,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/truenorth/ember-orientation"),e.setAttribute(i,"class","btn btn-large indigo text-grey text-lighten-4");var r=e.createTextNode("Go To Github");e.appendChild(i,r),e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[6,1]),1,1),n},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.0-beta.2+70a206e1",loc:{source:null,start:{line:1,column:0},end:{line:11,column:6}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h4"),n=e.createTextNode("Orientation-Aware View");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("ul"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("li"),i=e.createTextNode("Alpha: ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("li"),i=e.createTextNode("Beta: ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("li"),i=e.createTextNode("Gamma: ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","text-center");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("img");e.setAttribute(n,"src","img/ember-logo-2fdfa9893abb0ef7f9671b256adb2ca0.png"),e.setAttribute(n,"width","200"),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2]),i=e.childAt(t,[4,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(n,[1]),1,1),r[1]=e.createMorphAt(e.childAt(n,[3]),1,1),r[2]=e.createMorphAt(e.childAt(n,[5]),1,1),r[3]=e.createAttrMorph(i,"style"),r},statements:[["content","view.tiltAlpha"],["content","view.tiltBeta"],["content","view.tiltGamma"],["attribute","style",["get","view.transformStyle"]]],locals:[],templates:[]}}())}),define("dummy/utils/orientation-transformation-matrix",["exports","ember-orientation/utils/orientation-transformation-matrix"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/views/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({didInsertElement:function(){this._super.apply(this,arguments)}})}),define("dummy/views/index",["exports","ember","ember-orientation/mixins/device-orientation-aware"],function(e,t,a){"use strict";e["default"]=t["default"].View.extend(a["default"],{classNames:["index-view"],didMove:function(e){console.log("Event",e)},transformStyle:t["default"].computed("tiltAlpha","tiltBeta","tiltGamma",{get:function(){return"transform: rotateZ("+this.get("tiltAlpha")+"deg) "+("rotateX("+this.get("tiltBeta")+"deg) ")+("rotateY("+-this.get("tiltGamma")+"deg);")+("-webkit-transform: rotateZ("+this.get("tiltAlpha")+"deg) ")+("rotateX("+this.get("tiltBeta")+"deg) ")+("rotateY("+-this.get("tiltGamma")+"deg)")}})})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-orientation",version:"0.0.3.33304375"});