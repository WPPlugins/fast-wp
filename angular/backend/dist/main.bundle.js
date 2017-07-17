webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='velocious'>\n  <div class=\"velocious-header\">\n    <h1>Welcome to Fast WP by Velocious.io</h1>\n    <h2>Thanks for using this plugin - you are awesome!</h2>\n  </div>\n\n  <div class=\"velocious-sidebar\">\n    <h3>Reset your data</h3>\n    <P>To reset your settings and <strong>undo every change</strong> your made just click the \"Reset\" Button.</P>\n    <button class=\"velocious-button\" (click)=\"resetData()\">Reset</button>\n\n    <h3>Detect new Assets</h3>\n    <p>To detect new assets and make them available to this plugin you can do two things:</p>\n    <p>Either click the \"Scan\"-Button and scan your site for scripts and stylesheets or open a new incognito window in your browser and visit your primary pages.</p>\n    <button class=\"velocious-button\" [class.velocious-button--is-loading]=\"isScanning\" (click)=\"getPostsToScan()\">Scan</button>\n    <p><strong>Note #1:</strong> This plugin only detects assets if you are visiting your site logged out. Otherwise, the list would be too big and would contain javascript only loaded for admins.</p>\n    <p><strong>Note #2:</strong> You may need to purge your cache when you want to detect new assets - detection will not work on cached pages.</p>\n\n  </div>\n\n  <div class=\"velocious-content\">\n\n    <input type=\"radio\" checked name=\"tab\" id=\"tab1\">\n    <label for=\"tab1\">Manage Scripts (JS)</label>\n\n    <input type=\"radio\" name=\"tab\" id=\"tab2\">\n    <label for=\"tab2\">Manage Styles (CSS)</label>\n\n    <div class=\"tab\">\n      <app-script-list>Loading ...</app-script-list>\n    </div>\n\n    <div class=\"tab\">\n      <app-style-list>Loading ...</app-style-list>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asset_service__ = __webpack_require__("../../../../../src/app/services/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_script_list_script_list_component__ = __webpack_require__("../../../../../src/app/components/script-list/script-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_style_list_style_list_component__ = __webpack_require__("../../../../../src/app/components/style-list/style-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(assetService) {
        this.assetService = assetService;
        this.postsToScan = [];
        this.isScanning = false;
    }
    AppComponent.prototype.resetData = function () {
        var _this = this;
        this.assetService.deleteAssets().then(function (response) { return _this.reloadLists(); });
    };
    AppComponent.prototype.getPostsToScan = function () {
        var _this = this;
        this.assetService.getPostsToScan().then(function (postsToScan) { return _this.scanPosts(postsToScan); });
    };
    AppComponent.prototype.scanPosts = function (postsToScan) {
        var _this = this;
        this.isScanning = true;
        this.postsToScan = postsToScan;
        this.assetService.scanPosts(this.postsToScan);
        setTimeout(function () {
            _this.setScanningFalse();
        }, 1000);
    };
    AppComponent.prototype.setScanningFalse = function () {
        this.isScanning = false;
        this.reloadLists();
    };
    AppComponent.prototype.reloadLists = function () {
        this.scriptList.reload();
        this.styleList.reload();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__components_script_list_script_list_component__["a" /* ScriptListComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_script_list_script_list_component__["a" /* ScriptListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_script_list_script_list_component__["a" /* ScriptListComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "scriptList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_style_list_style_list_component__["a" /* StyleListComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__components_style_list_style_list_component__["a" /* StyleListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_style_list_style_list_component__["a" /* StyleListComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "styleList", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_script_list_script_list_component__ = __webpack_require__("../../../../../src/app/components/script-list/script-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_style_list_style_list_component__ = __webpack_require__("../../../../../src/app/components/style-list/style-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_asset_service__ = __webpack_require__("../../../../../src/app/services/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_script_list_script_list_component__["a" /* ScriptListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_style_list_style_list_component__["a" /* StyleListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_asset_service__["a" /* AssetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/script-list/script-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/script-list/script-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"velocious-asset-list velocious-asset-list--scripts\">\n\n  <div *ngIf=\"onDropResponseStatus == 200\" class=\"c-message c-message--ok\">\n    <p class=\"velocious__status\">Status: OK!</p>\n  </div>\n\n  <div *ngIf=\"onDropResponseStatus != 200 && onDropResponseStatus != 0\" class=\"c-message c-message--error\">\n    <p class=\"velocious__status\">Status: Error!</p>\n    <p>\n      Sorry, something does not work as intended. I would be happy to fix it! So it would be awesome if you could provide some feedback <a href=\"https://www.velocious.io/contact/\">here</a>.\n    </p>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Scripts linked from your header</h3>\n    <p>Enqueuing scripts in your header is the standard way when adding Javascript to WordPress. However, scripts enqueued that way are render blocking.</p>\n  </div>\n  <div id=\"load_header\" class=\"c-asset-container c-asset-container--header\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of headerScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Scripts linked from your footer</h3>\n    <p>Enqueuing scripts in your footer is another way to add javascript to WordPress. Scripts enqueued that way are not render blocking but loaded very late and are therefore not the fastest.</p>\n  </div>\n  <div id=\"load_footer\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of footerScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Scripts inlined into your header</h3>\n    <p>Inlining your scripts into your header means that they are directly included in your HTML and not loaded via a separate request. That way scripts are not render blocking. However, this way of dealing with Javascript bloats your HTML  and is therefore only recommended for small files.</p>\n  </div>\n  <div id=\"load_inline\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of inlineScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Scripts linked from your header with the defer attribute</h3>\n    <p>Linking your scripts with the defer attribute means that they are downloaded instantly but executed after the rest of the document has finished loading. That way scripts are not render blocking.</p>\n  </div>\n  <div id=\"load_defer\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of deferScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h2>Scripts linked from your header with the async attribute</h2>\n    <p>Linking your scripts with the async attribute means they are downloaded instantly and executed as soon as their download finished. That way they are not render blocking while they are downloading. However: Keep in mind that due to different file sizes different script may load faster that others. Because of that, the execution order of your javascript files can't be guaranteed. This will cause problems in some situations.</p>\n  </div>\n  <div id=\"load_async\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of asyncScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h2>Scripts that are removed from your site</h2>\n    <p>Removing javascript from your site may result in enormous performance benefits. However, as this action may break some features, you should only use it if you know what you are doing.</p>\n  </div>\n  <div id=\"load_remove\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"script-bag\"'>\n    <div *ngFor=\"let asset of removeScripts\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/script-list/script-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asset_service__ = __webpack_require__("../../../../../src/app/services/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScriptListComponent = (function () {
    function ScriptListComponent(assetService, dragulaService) {
        var _this = this;
        this.assetService = assetService;
        this.dragulaService = dragulaService;
        dragulaService.drop.subscribe(function (value) {
            if (value[0] == 'script-bag') {
                _this.onDrop(value.slice(1));
            }
        });
        this.onDropResponseStatus = '0';
    }
    ScriptListComponent.prototype.ngOnInit = function () {
        this.getHeaderScripts();
        this.getFooterScripts();
        this.getInlineScripts();
        this.getDeferScripts();
        this.getAsyncScripts();
        this.getRemoveScripts();
    };
    ScriptListComponent.prototype.reload = function () {
        this.getHeaderScripts();
        this.getFooterScripts();
        this.getInlineScripts();
        this.getDeferScripts();
        this.getAsyncScripts();
        this.getRemoveScripts();
    };
    ScriptListComponent.prototype.getHeaderScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_header').then(function (assets) { return _this.headerScripts = assets; });
    };
    ScriptListComponent.prototype.getFooterScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_footer').then(function (assets) { return _this.footerScripts = assets; });
    };
    ScriptListComponent.prototype.getInlineScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_inline').then(function (assets) { return _this.inlineScripts = assets; });
    };
    ScriptListComponent.prototype.getDeferScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_defer').then(function (assets) { return _this.deferScripts = assets; });
    };
    ScriptListComponent.prototype.getAsyncScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_async').then(function (assets) { return _this.asyncScripts = assets; });
    };
    ScriptListComponent.prototype.getRemoveScripts = function () {
        var _this = this;
        this.assetService.getAssets('scripts', 'load_remove').then(function (assets) { return _this.removeScripts = assets; });
    };
    ScriptListComponent.prototype.onDrop = function (args) {
        var _this = this;
        this.assetService.updateAsset('scripts', args[0].id, args[1].id).then(function (onDropResponseStatus) { return _this.onDropResponseStatus = onDropResponseStatus; });
    };
    return ScriptListComponent;
}());
ScriptListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-script-list',
        template: __webpack_require__("../../../../../src/app/components/script-list/script-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/script-list/script-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], ScriptListComponent);

var _a, _b;
//# sourceMappingURL=script-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/style-list/style-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/style-list/style-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"velocious-asset-list velocious-asset-list--Styles\">\n\n  <div *ngIf=\"onDropResponseStatus == 200\" class=\"c-message c-message--ok\">\n    <p class=\"velocious__status\">Status: OK!</p>\n  </div>\n\n  <div *ngIf=\"onDropResponseStatus != 200 && onDropResponseStatus != 0\" class=\"c-message c-message--error\">\n    <p class=\"velocious__status\">Status: Error!</p>\n    <p>\n      Sorry, something does not work as intended. I would be happy to fix it! So it would be awesome if you could provide some feedback <a href=\"https://www.velocious.io/contact/\">here</a>.\n    </p>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Stylesheets linked from your header</h3>\n    <p>Inlining your styles into your header means that they are directly included in your HTML and not loaded via a separate request. That way stylesheets are not render blocking. However, this way of dealing with CSS bloats your HTML  and is therefore only recommended for small files.</p>\n  </div>\n  <div id=\"load_header\" class=\"c-asset-container c-asset-container--header\" [dragula]='\"style-bag\"'>\n    <div *ngFor=\"let asset of headerStyles\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Stylesheets inlined into your header</h3>\n    <p>Inlining your styles into your header means that they are directly included in your HTML and not loaded via a separate request. That way stylesheets are not render blocking. However, this way of dealing with CSS bloats your HTML  and is therefore only recommended for small files.</p>\n  </div>\n  <div id=\"load_inline\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"style-bag\"'>\n    <div *ngFor=\"let asset of inlineStyles\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Stylesheets linked from your header and loaded asynchronously</h3>\n    <p>Linking your CSS from your header and loading it asynchronous means that your stylesheets are downloaded instantly and executed as soon as their download finished. That way they are not render blocking while they are downloading.</p>\n  </div>\n  <div id=\"load_async\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"style-bag\"'>\n    <div *ngFor=\"let asset of asyncStyles\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n\n  <div class=\"c-asset-container-label\">\n    <h3>Stylesheets that are removed from your site</h3>\n    <p>Removing stylesheets from your site may result in enormous performance benefits. However, as this action may break some features, you should only use it if you know what you are doing.</p>\n  </div>\n  <div id=\"load_remove\" class=\"c-asset-container c-asset-container--footer\" [dragula]='\"style-bag\"'>\n    <div *ngFor=\"let asset of removeStyles\" id=\"{{asset.slug}}\" class=\"c-asset-container__item\"><p>{{asset.slug}}</p></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/style-list/style-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asset_service__ = __webpack_require__("../../../../../src/app/services/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StyleListComponent = (function () {
    function StyleListComponent(assetService, dragulaService) {
        var _this = this;
        this.assetService = assetService;
        this.dragulaService = dragulaService;
        dragulaService.drop.subscribe(function (value) {
            if (value[0] == 'style-bag') {
                _this.onDrop(value.slice(1));
            }
        });
        this.onDropResponseStatus = '0';
    }
    StyleListComponent.prototype.ngOnInit = function () {
        this.getHeaderStyles();
        this.getInlineStyles();
        this.getAsyncStyles();
        this.getRemoveStyles();
    };
    StyleListComponent.prototype.reload = function () {
        this.getHeaderStyles();
        this.getInlineStyles();
        this.getAsyncStyles();
        this.getRemoveStyles();
    };
    StyleListComponent.prototype.getHeaderStyles = function () {
        var _this = this;
        this.assetService.getAssets('styles', 'load_header').then(function (assets) { return _this.headerStyles = assets; });
    };
    StyleListComponent.prototype.getInlineStyles = function () {
        var _this = this;
        this.assetService.getAssets('styles', 'load_inline').then(function (assets) { return _this.inlineStyles = assets; });
    };
    StyleListComponent.prototype.getAsyncStyles = function () {
        var _this = this;
        this.assetService.getAssets('styles', 'load_async').then(function (assets) { return _this.asyncStyles = assets; });
    };
    StyleListComponent.prototype.getRemoveStyles = function () {
        var _this = this;
        this.assetService.getAssets('styles', 'load_remove').then(function (assets) { return _this.removeStyles = assets; });
    };
    StyleListComponent.prototype.onDrop = function (args) {
        var _this = this;
        this.assetService.updateAsset('styles', args[0].id, args[1].id).then(function (onDropResponseStatus) { return _this.onDropResponseStatus = onDropResponseStatus; });
    };
    return StyleListComponent;
}());
StyleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-style-list',
        template: __webpack_require__("../../../../../src/app/components/style-list/style-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/style-list/style-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_asset_service__["a" /* AssetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], StyleListComponent);

var _a, _b;
//# sourceMappingURL=style-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/asset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* unused harmony export Asset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());

var AssetService = (function () {
    function AssetService(http) {
        this.http = http;
        this.assetUrl = fastWPRestURL + 'fast-wp/v1/';
        this.idsToScan = [];
    }
    AssetService.prototype.getAssets = function (assetType, assetProperty) {
        return this.http.get(this.assetUrl + 'get/' + assetType + '/' + assetProperty, this.getOptions())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.updateAsset = function (assetType, assetSlug, assetProperty) {
        return this.http.get(this.assetUrl + 'update/' + assetType + '/' + assetSlug + '/' + assetProperty, this.getOptions())
            .toPromise()
            .then(function (response) { return response.status; })
            .catch(this.handleError);
    };
    AssetService.prototype.deleteAssets = function () {
        return this.http.get(this.assetUrl + 'delete', this.getOptions())
            .toPromise()
            .then(function (response) { return response.status; })
            .catch(this.handleError);
    };
    AssetService.prototype.getPostsToScan = function () {
        return this.http.get(this.assetUrl + 'scan', this.getOptions())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AssetService.prototype.scanPosts = function (ids) {
        this.idsToScan = ids;
        this.scanPostsWithPause();
    };
    AssetService.prototype.scanPostsWithPause = function () {
        var _this = this;
        if (this.idsToScan.length > 0) {
            var currentID = this.idsToScan.shift();
            this.scanPost(currentID).then(function (response) { return _this.scanPostsWithPause(); });
        }
        return true;
    };
    AssetService.prototype.scanPost = function (id) {
        return this.http.get(this.assetUrl + 'scan/' + id, this.getOptions())
            .toPromise()
            .then(function (response) { return response.status; })
            .catch(this.handleError);
    };
    AssetService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'X-WP-NONCE': fastWPNonce });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    AssetService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return error.status;
    };
    return AssetService;
}());
AssetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AssetService);

var _a;
//# sourceMappingURL=asset.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map