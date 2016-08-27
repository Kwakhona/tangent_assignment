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
var project_service_1 = require('../services/project.service');
var UserComponent = (function () {
    function UserComponent(_projectService, _router, builder) {
        this._projectService = _projectService;
        this._router = _router;
        this._projects = { projects: [] };
        this._task = { tasks: [] };
        this._added = { success: false };
        this._edited = { success: false };
        this.editF = {
            pk: "",
            title: "",
            description: "",
            start_date: "",
            end_date: "",
            is_billable: false,
            is_active: false
        };
        this.projectForm = builder.group({
            pk: [""],
            title: ["", forms_1.Validators.required],
            description: ["", forms_1.Validators.required],
            start_date: ["", forms_1.Validators.required],
            end_date: [""],
            is_billable: ["", forms_1.Validators.required],
            is_active: ["", forms_1.Validators.required]
        });
        this.editPForm = builder.group({
            pk: [""],
            title: ["", forms_1.Validators.required],
            description: ["", forms_1.Validators.required],
            start_date: ["", forms_1.Validators.required],
            end_date: [""],
            is_billable: [""],
            is_active: [""]
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.sessionStorage.getItem("token") === null) {
            this._router.navigate(['/home']);
        }
        else {
            this._projectService.getProjects()
                .then(function (data) {
                _this._projects.projects = data;
            });
        }
    };
    UserComponent.prototype.onprojectSelect = function (project) {
        if (project.task_set !== 0) {
            this._task.tasks = project.task_set;
        }
        else {
            this._task.tasks = [];
        }
    };
    UserComponent.prototype.addProject = function () {
        var _this = this;
        this._title = this.projectForm.controls['title'];
        this._description = this.projectForm.controls['description'];
        this._start_date = this.projectForm.controls['start_date'];
        this._end_date = this.projectForm.controls['end_date'];
        this._is_billable = this.projectForm.controls['is_billable'];
        this._is_active = this.projectForm.controls['is_active'];
        var project = {
            title: this._title.value,
            description: this._description.value,
            start_date: this._start_date.value,
            end_date: this._end_date.value,
            is_billable: this._is_billable.value,
            is_active: this._is_active.value,
            task_set: [],
            resource_set: []
        };
        if (window.sessionStorage.getItem("token") === null) {
            this._router.navigate(['/home']);
        }
        else {
            this._projectService.addProject(project)
                .then(function (data) {
                if (!data.error) {
                    _this._added.success = true;
                    _this.ngOnInit();
                }
                else {
                    _this._added.success = false;
                }
            });
        }
    };
    UserComponent.prototype.editP = function (project) {
        this.editF.pk = project.pk;
        this.editF.title = project.title;
        this.editF.description = project.description;
        this.editF.start_date = project.start_date;
        this.editF.end_date = project.end_date;
        this.editF.is_billable = project.is_billable;
        this.editF.is_active = project.is_active;
    };
    UserComponent.prototype.editProject = function () {
        var _this = this;
        this._title = this.editPForm.controls['title'];
        this._description = this.editPForm.controls['description'];
        this._start_date = this.editPForm.controls['start_date'];
        this._end_date = this.editPForm.controls['end_date'];
        this._is_billable = this.editPForm.controls['is_billable'];
        this._is_active = this.editPForm.controls['is_active'];
        var project = {
            pk: this.editPForm.controls['pk'].value,
            title: this._title.value,
            description: this._description.value,
            start_date: this._start_date.value,
            end_date: this._end_date.value,
            is_billable: this._is_billable.value,
            is_active: this._is_active.value
        };
        if (window.sessionStorage.getItem("token") === null) {
            this._router.navigate(['/home']);
        }
        else {
            this._projectService.updateProject(project)
                .then(function (data) {
                if (!data.error) {
                    _this._edited.success = true;
                    _this.ngOnInit();
                }
            });
        }
    };
    UserComponent.prototype.closeModal = function () {
        this._added.success = false;
        this._edited.success = false;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-dashboard',
            templateUrl: './app/user/user.comp.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder, project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router, forms_1.FormBuilder])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.comp.js.map