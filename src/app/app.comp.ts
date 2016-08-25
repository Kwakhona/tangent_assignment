import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: './app/app.comp.html'
})
export class AppComponent implements OnInit{
    private loggedIn: boolean = false;

    constructor(private _router: Router){}
    /**
     * Method initialized everytime the nav bar loads
     * 
     * @return void
     */
    ngOnInit():void {
        
        
        if(window.sessionStorage.getItem("token") === null){
            this.loggedIn = false;
            this._router.navigate(['/home']);
        } else {
            this.loggedIn = true;
        }
    }

    /**
     * Method to destroys the the token from the and logout user
     * 
     * @retun void
     */
    Logout():void {
        window.sessionStorage.removeItem("token");
        this._router.navigate(['/home']);

    }
}