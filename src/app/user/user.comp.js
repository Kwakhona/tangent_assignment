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
var project_service_1 = require('../services/project.service');
var UserComponent = (function () {
    function UserComponent(_projectService, _router) {
        this._projectService = _projectService;
        this._router = _router;
        this._projects = { projects: [] };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.sessionStorage.getItem("token") === null) {
            this._router.navigate(['/home']);
        }
        else {
            this._projectService.getProjects()
                .then(function (data) {
                if (data !== null) {
                    _this._projects.projects = data;
                    console.log(JSON.stringify(_this._projects.projects));
                }
                else {
                    console.log("No Data");
                }
            });
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-dashboard',
            templateUrl: './app/user/user.comp.html',
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.comp.js.map