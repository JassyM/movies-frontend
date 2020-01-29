import { Routes } from '@angular/router';

import { LoginComponent } from '../../modules/authentication/login/login.component';

export const AuthLayoutRoutes: Routes = [
    { path: '', component: LoginComponent }
];
