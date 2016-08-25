import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, FORM_PROVIDERS }    from '@angular/forms';
import { HTTP_PROVIDERS }     from '@angular/http';

import { AppComponent } from './app.comp';
import { LoginComponent } from './login/login.comp';
import { HomeComponent } from './home/home.comp';
import { UserComponent } from './user/user.comp';

// Routing and Services
import { routing } from './routes/route.config';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';

@NgModule({
    imports:        [BrowserModule, routing, FormsModule],
    declarations:   [AppComponent, LoginComponent, HomeComponent, UserComponent],
    providers:      [UserService, ProjectService, FORM_PROVIDERS, HTTP_PROVIDERS],
    bootstrap:      [AppComponent]
})
export class AppModule{}