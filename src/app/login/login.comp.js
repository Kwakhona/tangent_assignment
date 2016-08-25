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
var forms_1 = require('@angular/forms');
var User_1 = require('../shared/User');
var user_service_1 = require('../services/user.service');
var LoginComponent = (function () {
    function LoginComponent(_userService, _router, builder) {
        this._userService = _userService;
        this._router = _router;
        this.model = new User_1.User('', '', '', '');
        this.loginForm = builder.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
        this._username = this.loginForm.controls['username'];
        this._password = this.loginForm.controls['password'];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var user = {
            username: "",
            password: ""
        };
        user.username = this._username.value;
        user.password = this._password.value;
        console.log(JSON.stringify(user));
        this._userService.Login(user)
            .then(function (data) {
            console.log("Data: " + JSON.stringify(data));
        }, function (error) { return console.log("Error: " + JSON.stringify(error)); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/login/login.comp.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.comp.js.map