"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_comp_1 = require('./app.comp');
var login_comp_1 = require('./login/login.comp');
var home_comp_1 = require('./home/home.comp');
var user_comp_1 = require('./user/user.comp');
var route_config_1 = require('./routes/route.config');
var user_service_1 = require('./services/user.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, route_config_1.routing, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_comp_1.AppComponent, login_comp_1.LoginComponent, home_comp_1.HomeComponent, user_comp_1.UserComponent],
            providers: [user_service_1.UserService, forms_1.FORM_PROVIDERS],
            bootstrap: [app_comp_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map