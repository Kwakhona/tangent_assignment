import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, FormGroup, AbstractControl,Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { User } from '../shared/User';
import { UserService } from '../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.comp.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
    private _user: User;
    private model = new User('', '', '', '');
    loginForm: FormGroup;
    _username: AbstractControl;
    _password: AbstractControl;


    public constructor(private _userService: UserService, private _router: Router, builder: FormBuilder){
        this.loginForm = builder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
        this._username = this.loginForm.controls['username'];
        this._password = this.loginForm.controls['password'];
    }
    
    ngOnInit(): void {
    }

    Login():void{
        let user = {
            username: "",
            password: ""
        };
        user.username = this._username.value;
        user.password = this._password.value;

        console.log(JSON.stringify(user));
        this._userService.Login(user)
                .then(
                    data => {
                        console.log("Data: "+JSON.stringify(data));
                    },
                    error => console.log("Error: "+JSON.stringify(error))
                );
    }
}