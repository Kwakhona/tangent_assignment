import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../services/project.service';


@Component({
    selector: 'user-dashboard',
    templateUrl: './app/user/user.comp.html',
    providers: [ProjectService]
})
export class UserComponent implements OnInit{
    private _projects = {   projects: [] };

    constructor(private _projectService: ProjectService, private _router: Router){
        
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
}