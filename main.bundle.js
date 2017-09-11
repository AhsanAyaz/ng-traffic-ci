webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"traffic-container\">\n    <h3 class=\"text-center\">{{title}}</h3>\n    <h5 class=\"text-center\">\n      Use the buttons below to handle the state of the signal\n    </h5>\n    <div class=\"actions-container text-center\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-danger stop-btn\" (click)=\"stop()\">STOP</button>\n        <button class=\"btn btn-warn ready-btn\" (click)=\"ready()\">READY</button>\n        <button class=\"btn btn-success go-btn\" (click)=\"go()\">GO</button>\n      </div>\n      <div class=\"btn-group\">\n          <button class=\"btn btn-info\" (click)=\"auto()\">AUTO</button>\n      </div>\n    </div>\n    <div class=\"trafficlight\">\n      <div class=\"protector\"></div>\n      <div class=\"protector\"></div>\n      <div class=\"protector\"></div>\n      <div class=\"red light\" [class.animate]=\"trafficLightState === 'red'\"></div>\n      <div class=\"yellow light\" [class.animate]=\"trafficLightState === 'yellow'\"></div>\n      <div class=\"green light\" [class.animate]=\"trafficLightState === 'green'\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  padding-top: 40px; }\n  .app-container .traffic-container {\n    color: #333;\n    max-width: 500px;\n    margin: 0 auto; }\n    .app-container .traffic-container .btn-group {\n      margin-bottom: 10px; }\n    .app-container .traffic-container .trafficlight {\n      margin: 20px auto;\n      background: #222;\n      background-image: linear-gradient(transparent 2%, #111 2%, transparent 3%, #111 30%);\n      width: 170px;\n      height: 400px;\n      border-radius: 20px;\n      position: relative;\n      border: solid 5px #333; }\n      .app-container .traffic-container .trafficlight:before {\n        background: #222;\n        background-image: radial-gradient(#444, #000);\n        content: \"\";\n        width: 170px;\n        height: 150px;\n        margin: 0 auto;\n        position: absolute;\n        top: -20px;\n        margin-left: 0px;\n        border-radius: 50%;\n        z-index: -1; }\n      .app-container .traffic-container .trafficlight:after {\n        background: #222;\n        background-image: linear-gradient(-90deg, #222 0%, #444 30%, #000);\n        content: \"\";\n        width: 50px;\n        height: 50px;\n        margin-left: 60px;\n        position: absolute;\n        bottom: -50px;\n        z-index: -1; }\n      .app-container .traffic-container .trafficlight .protector {\n        background: transparent;\n        width: 230px;\n        height: 0;\n        position: absolute;\n        top: 20px;\n        left: -35px;\n        border-right: solid 30px transparent;\n        border-left: solid 30px transparent;\n        border-top: solid 90px #111;\n        border-radius: 10px;\n        z-index: -1; }\n        .app-container .traffic-container .trafficlight .protector:nth-child(2) {\n          top: 140px; }\n        .app-container .traffic-container .trafficlight .protector:nth-child(3) {\n          top: 260px; }\n      .app-container .traffic-container .trafficlight .red {\n        background: red;\n        background-image: radial-gradient(brown, transparent);\n        background-size: 5px 5px;\n        width: 100px;\n        height: 100px;\n        border-radius: 50%;\n        position: absolute;\n        top: 20px;\n        left: 35px;\n        border: dotted 2px red;\n        box-shadow: 0 0 20px #111 inset, 0 0 10px red;\n        opacity: 0.1; }\n        .app-container .traffic-container .trafficlight .red.animate {\n          -webkit-animation: 1s red;\n                  animation: 1s red;\n          opacity: 1; }\n      .app-container .traffic-container .trafficlight .yellow {\n        background: yellow;\n        background-image: radial-gradient(orange, transparent);\n        background-size: 5px 5px;\n        width: 100px;\n        height: 100px;\n        border-radius: 50%;\n        border: dotted 2px yellow;\n        position: absolute;\n        top: 145px;\n        left: 35px;\n        box-shadow: 0 0 20px #111 inset, 0 0 10px yellow;\n        opacity: 0.1; }\n        .app-container .traffic-container .trafficlight .yellow.animate {\n          -webkit-animation: 1s yellow;\n                  animation: 1s yellow;\n          opacity: 1; }\n      .app-container .traffic-container .trafficlight .green {\n        background: green;\n        background-image: radial-gradient(lime, transparent);\n        background-size: 5px 5px;\n        width: 100px;\n        height: 100px;\n        border-radius: 50%;\n        border: dotted 2px lime;\n        position: absolute;\n        top: 270px;\n        left: 35px;\n        box-shadow: 0 0 20px #111 inset, 0 0 10px lime;\n        opacity: 0.1; }\n        .app-container .traffic-container .trafficlight .green.animate {\n          -webkit-animation: 1s green;\n                  animation: 1s green;\n          opacity: 1; }\n\n@-webkit-keyframes red {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: .1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes red {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: .1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes yellow {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: .1; }\n  60% {\n    opacity: .1; }\n  80% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes yellow {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: .1; }\n  60% {\n    opacity: .1; }\n  80% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes green {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: .1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  83% {\n    opacity: .1; }\n  86% {\n    opacity: 1; }\n  89% {\n    opacity: .1; }\n  93% {\n    opacity: 1; }\n  96% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes green {\n  0% {\n    opacity: .1; }\n  20% {\n    opacity: .1; }\n  40% {\n    opacity: .1; }\n  60% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  83% {\n    opacity: .1; }\n  86% {\n    opacity: 1; }\n  89% {\n    opacity: .1; }\n  93% {\n    opacity: 1; }\n  96% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traffic_light_service__ = __webpack_require__("../../../../../src/app/traffic-light.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(trafficService) {
        this.trafficService = trafficService;
        this.title = 'Traffic Signal App';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trafficService.getState().subscribe(function (state) {
            _this.trafficLightState = state;
        });
    };
    /**
     * @author Ahsan Ayaz
     * The function gets triggered on STOP button click.
     * Disables the auto method and shows the Red Light
     */
    AppComponent.prototype.stop = function () {
        this.trafficService.setState(__WEBPACK_IMPORTED_MODULE_1__traffic_light_service__["a" /* LIGHT_STATES */].STOP);
    };
    /**
     * @author Ahsan Ayaz
     * The function gets triggered on READY button click.
     * Disables the auto method and shows the Yello Light
     */
    AppComponent.prototype.ready = function () {
        this.trafficService.setState(__WEBPACK_IMPORTED_MODULE_1__traffic_light_service__["a" /* LIGHT_STATES */].READY);
    };
    /**
     * @author Ahsan Ayaz
     * The function gets triggered on GO button click.
     * Disables the auto method and shows the Green Light
     */
    AppComponent.prototype.go = function () {
        this.trafficService.setState(__WEBPACK_IMPORTED_MODULE_1__traffic_light_service__["a" /* LIGHT_STATES */].GO);
    };
    /**
     * @author Ahsan Ayaz
     * The function gets triggered on AUTO button click.
     * Resets the signal to auto method which changes the state
     * of the signal using timeouts
     */
    AppComponent.prototype.auto = function () {
        this.trafficService.resetSignalToAuto();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__traffic_light_service__["b" /* TrafficLightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__traffic_light_service__["b" /* TrafficLightService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traffic_light_service__ = __webpack_require__("../../../../../src/app/traffic-light.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__traffic_light_service__["b" /* TrafficLightService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/traffic-light.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIGHT_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrafficLightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LIGHT_STATES = {
    STOP: 'red',
    READY: 'yellow',
    GO: 'green'
};
var TrafficLightService = (function () {
    function TrafficLightService(ngZone) {
        this.ngZone = ngZone;
        this._lightState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](LIGHT_STATES.GO);
        this.lightState = this._lightState.asObservable();
        this.resetSignalToAuto();
    }
    /**
     * @author Ahsan Ayaz
     * The function sends back the observable to which components can subscribe to for any state changes
     */
    TrafficLightService.prototype.getState = function () {
        //  we're returning an observable rather than the subject to avoid clustering with inputs :)
        return this.lightState;
    };
    /**
     * @author Ahsan Ayaz
     * The function sets the state of the signal and stops the auto timer
     * @param state {string} value of state as string
     */
    TrafficLightService.prototype.setState = function (state) {
        if (state === void 0) { state = LIGHT_STATES.STOP; }
        this._lightState.next(state);
        clearTimeout(this._timer);
    };
    /**
     * @author Ahsan Ayaz
     * Resets the signal to use auto state changer. It changes the state on particular hardcoded durations
     * for now. Simulates how signals actually work
     */
    TrafficLightService.prototype.resetSignalToAuto = function () {
        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._changeStateAuto();
    };
    /**
     * @author Ahsan Ayaz
     * This function triggers the automatic handling of the signals.
     * The signal's statge is changed with particular durations based on previous state
     */
    TrafficLightService.prototype._changeStateAuto = function () {
        var _this = this;
        var nextActionDuration;
        switch (this._lightState.getValue()) {
            case LIGHT_STATES.STOP:
                this._lightState.next(LIGHT_STATES.READY);
                nextActionDuration = 3000;
                break;
            case LIGHT_STATES.READY:
                this._lightState.next(LIGHT_STATES.GO);
                nextActionDuration = 5000;
                break;
            case LIGHT_STATES.GO:
                this._lightState.next(LIGHT_STATES.STOP);
                nextActionDuration = 5000;
                break;
        }
        /**
         * The below code shows how we can run timeouts outside angular.
         * This is because on each timeout it would trigger change detection. But we
         * don't want that. We want it to change detect when the state changes. So we run that code
         * inside the this.ngZone.run() method.
         * One more reason to do so is while e2e tests, protractor would wait for all async operations
         * to complete before going forward. Which stops the tests.
         */
        this.ngZone.runOutsideAngular(function () {
            _this._timer = setTimeout(function () {
                _this.ngZone.run(function () {
                    _this._changeStateAuto();
                });
            }, nextActionDuration);
        });
    };
    return TrafficLightService;
}());
TrafficLightService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], TrafficLightService);

var _a;
//# sourceMappingURL=traffic-light.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map