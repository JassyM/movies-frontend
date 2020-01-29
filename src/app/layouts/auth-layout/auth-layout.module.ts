import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Notification } from '../../providers/notification.provider';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { LoginComponent } from '../../modules/authentication/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
  ],
  providers: [
    Notification
  ]
})
export class AuthLayoutModule { }
