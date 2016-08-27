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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this.loggedIn = false;
        setInterval(function () {
            if (window.sessionStorage.getItem("token") === null) {
                _this.loggedIn = false;
            }
            else {
                _this.loggedIn = true;
            }
        }, 1000);
    }
    /**
     * Method initialized everytime the nav bar loads
     *
     * @return void
     */
    AppComponent.prototype.ngOnInit = function () {
        if (window.sessionStorage.getItem("token") === null) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
    };
    /**
     * Method to destroys the the token from the and logout user
     *
     * @retun void
     */
    AppComponent.prototype.Logout = function () {
        window.sessionStorage.removeItem("token");
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main',
            templateUrl: './app/app.comp.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.comp.js.map