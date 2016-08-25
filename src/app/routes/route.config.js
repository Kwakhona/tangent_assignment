"use strict";
var router_1 = require('@angular/router');
var home_comp_1 = require('../home/home.comp');
var login_comp_1 = require('../login/login.comp');
var user_comp_1 = require('../user/user.comp');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_comp_1.HomeComponent
    },
    {
        path: 'login',
        component: login_comp_1.LoginComponent
    },
    {
        path: 'user/:username',
        component: user_comp_1.UserComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=route.config.js.map