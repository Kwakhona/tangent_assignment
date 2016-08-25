import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.comp';
import { LoginComponent } from '../login/login.comp';
import { UserComponent } from '../user/user.comp';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];
export const routing = RouterModule.forRoot(appRoutes);