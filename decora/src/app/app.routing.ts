import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "app/login/login.component";

const APP_ROUTES: Routes = [
    {     
        path: '', 
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);