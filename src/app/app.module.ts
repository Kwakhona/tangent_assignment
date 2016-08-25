import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, FORM_PROVIDERS }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.comp';
import { LoginComponent } from './login/login.comp';
import { HomeComponent } from './home/home.comp';
import { UserComponent } from './user/user.comp';

import { routing } from './routes/route.config';
import { UserService } from './services/user.service';

@NgModule({
    imports:        [BrowserModule, routing, FormsModule, HttpModule],
    declarations:   [AppComponent, LoginComponent, HomeComponent, UserComponent],
    providers:      [UserService, FORM_PROVIDERS],
    bootstrap:      [AppComponent]
})
export class AppModule{}