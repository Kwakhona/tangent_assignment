import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, FormGroup, AbstractControl,Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { ProjectService } from '../services/project.service';


@Component({
    selector: 'user-dashboard',
    templateUrl: './app/user/user.comp.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [FormBuilder, ProjectService]
})
export class UserComponent implements OnInit{
    
    private _projects = {   projects: [] };
    private _task = { tasks: [] };
    private _added = { success: false };
    private _edited = { success: false };
    projectForm: FormGroup;
    editPForm: FormGroup;
    private editF = {
        pk: "",
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        is_billable: false,
        is_active: false
    };

    _title: AbstractControl;
    _description: AbstractControl;
    _start_date: AbstractControl;
    _end_date: AbstractControl;
    _is_billable: AbstractControl;
    _is_active: AbstractControl;

    constructor(private _projectService: ProjectService, private _router: Router, builder: FormBuilder){
        this.projectForm = builder.group({
            pk: [""],
            title: ["", Validators.required],
            description: ["", Validators.required],
            start_date: ["", Validators.required],
            end_date: [""],
            is_billable: ["", Validators.required],
            is_active: ["", Validators.required]
        });

        this.editPForm = builder.group({
            pk: [""],
            title: ["", Validators.required],
            description: ["", Validators.required],
            start_date: ["", Validators.required],
            end_date: [""],
            is_billable: [""],
            is_active: [""]
        });

    }

    ngOnInit():void {
        if(window.sessionStorage.getItem("token") === null){
            this._router.navigate(['/home']);
        } else {
            this._projectService.getProjects()
                .then( data => {
                    this._projects.projects = data;
                });
        }
    }

    onprojectSelect(project: any): void{
        if(project.task_set !== 0){
            this._task.tasks = project.task_set;
        } else {
            this._task.tasks = [];
        }
    }

    addProject():void {
        this._title = this.projectForm.controls['title'];
        this._description = this.projectForm.controls['description'];
        this._start_date = this.projectForm.controls['start_date'];
        this._end_date = this.projectForm.controls['end_date'];
        this._is_billable = this.projectForm.controls['is_billable'];
        this._is_active = this.projectForm.controls['is_active'];

        let project = {
            title: this._title.value,
            description: this._description.value,
            start_date: this._start_date.value,
            end_date: this._end_date.value,
            is_billable: this._is_billable.value,
            is_active: this._is_active.value,
            task_set: [],
            resource_set: []
        };
        
        if(window.sessionStorage.getItem("token") === null){
            this._router.navigate(['/home']);
        } else {
            this._projectService.addProject(project)
                            .then( data => {
                                    if(!data.error || !data.detail){
                                        this._added.success = true;
                                        this.ngOnInit(); 
                                    } else {
                                        this._added.success = false;
                                    }
                                });
        }
    }

    editP(project: any): void{
        this.editF.pk = project.pk;
        this.editF.title = project.title;
        this.editF.description = project.description;
        this.editF.start_date = project.start_date;
        this.editF.end_date = project.end_date;
        this.editF.is_billable = project.is_billable;
        this.editF.is_active = project.is_active;        
    }

    editProject(): void{
        this._title = this.editPForm.controls['title'];
        this._description = this.editPForm.controls['description'];
        this._start_date = this.editPForm.controls['start_date'];
        this._end_date = this.editPForm.controls['end_date'];
        this._is_billable = this.editPForm.controls['is_billable'];
        this._is_active = this.editPForm.controls['is_active'];

        let project = {
            pk: this.editPForm.controls['pk'].value,
            title: this._title.value,
            description: this._description.value,
            start_date: this._start_date.value,
            end_date: this._end_date.value,
            is_billable: this._is_billable.value,
            is_active: this._is_active.value
        };

        if(window.sessionStorage.getItem("token") === null){
            this._router.navigate(['/home']);
        } else {
            this._projectService.updateProject(project)
                            .then( data => {
                                if(!data.detail || !data.error){
                                    this._edited.success = true;
                                    this.ngOnInit();
                                }
                            });
        }
    }

    deleteProject(project: any): void {
        if(window.sessionStorage.getItem("token") === null){
            this._router.navigate(['/home']);
        } else {
            if(confirm("Are you sure you want to delete Project: " + project.title) === true){
                this._projectService.deleteProject(project)
                                    .then(
                                        data=> {
                                            if(!data.detail){
                                                alert("You have succesfully deleted a project: "+ project.title);
                                                this.ngOnInit();
                                            } else {
                                                alert(data.details + " is not found. Please try again.");
                                                this.ngOnInit();
                                            }
                                        }
                                    );
            }
        }
    }

    closeModal():void {
        this._added.success = false;
        this._edited.success = false;
    }
}