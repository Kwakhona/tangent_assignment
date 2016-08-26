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
    projectForm: FormGroup;
    
    _title: AbstractControl;
    _description: AbstractControl;
    _start_date: AbstractControl;
    _end_date: AbstractControl;
    _is_billable: AbstractControl;
    _is_active: AbstractControl;

    constructor(private _projectService: ProjectService, private _router: Router, builder: FormBuilder){
        this.projectForm = builder.group({
            title: ["", Validators.required],
            description: ["", Validators.required],
            start_date: ["", Validators.required],
            end_date: ["", Validators.required],
            is_billable: ["", Validators.required],
            is_active: ["", Validators.required]
        });
        this._title = this.projectForm.controls['title'];
        this._description = this.projectForm.controls['description'];
        this._start_date = this.projectForm.controls['start_date'];
        this._end_date = this.projectForm.controls['end_date'];
        this._is_billable = this.projectForm.controls['is_billable'];
        this._is_active = this.projectForm.controls['is_active'];
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
                                    this.ngOnInit();
                                });
        }
    }
}