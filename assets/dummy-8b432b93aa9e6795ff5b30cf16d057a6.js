define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,i,n){"use strict";var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,Resolver:a["default"]}),i["default"](r,n["default"].modulePrefix),e["default"]=r}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var i=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,r){if(!n){var d=i(r.toString());a["default"].libraries.register(d,t["default"].APP.version),n=!0}}}}),define("dummy/initializers/device-orientation",["exports","ember-orientation/services/device-orientation","dummy/config/environment"],function(e,t,a){"use strict";function i(e,i){var n=a["default"].orientationServiceDefaults,r=n.injectionFactories;i.register("config:device-orientation",n,{instantiate:!1}),i.register("service:device-orientation",t["default"]),i.inject("service:device-orientation","orientationServiceDefaults","config:device-orientation"),r.forEach(function(e){i.inject(e,"orientation","service:device-orientation")})}e.initialize=i,e["default"]={name:"device-orientation",initialize:i}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function i(e,i){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=i)}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("dummy/mixins/device-orientation-aware",["exports","ember-orientation/mixins/device-orientation-aware"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var i=t["default"].Router.extend({location:a["default"].locationType});i.map(function(){}),e["default"]=i}),define("dummy/services/device-orientation",["exports","ember-orientation/services/device-orientation"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.0-beta.2+70a206e1",loc:{source:null,start:{line:1,column:0},end:{line:21,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("link");e.setAttribute(a,"rel","stylesheet"),e.setAttribute(a,"href","css/materialize-bf8946acb62b8ac5e741dd574e7bb655.css"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar-fixed");var i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("nav");e.setAttribute(i,"class","indigo");var n=e.createTextNode("\n    ");e.appendChild(i,n);var n=e.createElement("div");e.setAttribute(n,"class","nav-wrapper");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container-fluid");var d=e.createTextNode("\n        ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","https://github.com/truenorth/ember-orientation"),e.setAttribute(d,"class","brand-logo");var o=e.createTextNode("Ember-orientation");e.appendChild(d,o),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(i,n);var n=e.createTextNode("\n  ");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n");e.appendChild(a,i),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","github-button-container");var i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("div");e.setAttribute(i,"class","container text-center");var n=e.createTextNode("\n        ");e.appendChild(i,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/truenorth/ember-orientation"),e.setAttribute(n,"class","btn btn-large indigo text-grey text-lighten-4");var r=e.createTextNode("Go To Github");e.appendChild(n,r),e.appendChild(i,n);var n=e.createTextNode("\n  ");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n");e.appendChild(a,i),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("div");e.setAttribute(i,"class","row");var n=e.createTextNode("\n    ");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n);var n=e.createTextNode("\n  ");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n");e.appendChild(a,i),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var i=new Array(1);return i[0]=e.createMorphAt(e.childAt(t,[6,1]),1,1),i},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.0-beta.2+70a206e1",loc:{source:null,start:{line:1,column:0},end:{line:11,column:6}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h4"),i=e.createTextNode("Orientation-Aware View");e.appendChild(a,i),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("ul"),i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("li"),n=e.createTextNode("Alpha: ");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("li"),n=e.createTextNode("Beta: ");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n  ");e.appendChild(a,i);var i=e.createElement("li"),n=e.createTextNode("Gamma: ");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n),e.appendChild(a,i);var i=e.createTextNode("\n");e.appendChild(a,i),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","text-center");var i=e.createTextNode("\n");e.appendChild(a,i);var i=e.createElement("img");e.setAttribute(i,"src","img/ember-logo-2fdfa9893abb0ef7f9671b256adb2ca0.png"),e.setAttribute(i,"width","200"),e.appendChild(a,i);var i=e.createTextNode("\n");return e.appendChild(a,i),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var i=e.childAt(t,[2]),n=e.childAt(t,[4,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(i,[1]),1,1),r[1]=e.createMorphAt(e.childAt(i,[3]),1,1),r[2]=e.createMorphAt(e.childAt(i,[5]),1,1),r[3]=e.createAttrMorph(n,"style"),r},statements:[["content","view.tiltAlpha"],["content","view.tiltBeta"],["content","view.tiltGamma"],["attribute","style",["get","view.transformStyle"]]],locals:[],templates:[]}}())}),define("dummy/utils/orientation-transformation-matrix",["exports","ember-orientation/utils/orientation-transformation-matrix"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/views/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({didInsertElement:function(){this._super.apply(this,arguments)}})}),define("dummy/views/index",["exports","ember","ember-orientation/mixins/device-orientation-aware"],function(e,t,a){"use strict";e["default"]=t["default"].View.extend(a["default"],{classNames:["index-view"],transformStyle:t["default"].computed("tiltAlpha","tiltBeta","tiltGamma",{get:function(){return"transform: rotateZ("+this.get("tiltAlpha")+"deg) "+("rotateX("+this.get("tiltBeta")+"deg) ")+("rotateY("+-this.get("tiltGamma")+"deg);")+("-webkit-transform: rotateZ("+this.get("tiltAlpha")+"deg) ")+("rotateX("+this.get("tiltBeta")+"deg) ")+("rotateY("+-this.get("tiltGamma")+"deg)")}})})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",i=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(i));return{"default":n}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-orientation",version:"0.0.3.75029261"});