import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Notification } from "../../../providers/notification.provider";
import { isNullOrUndefined } from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = null;
  password: string = null;
  public isError: boolean = false;
  public errorMsg: string = null;

  constructor(
    private authenticationService: AuthenticationService,
    private notification: Notification,
    private router: Router
  ) { }

  ngOnInit() {
  }
  /**
   * Función que realiza el login
   * @param  form Formulario de inicio de sesión
   */
  public onLogin(form: NgForm) {
    if (form.valid) {
      return this.authenticationService.logInUser(this.username, this.password)
      .subscribe(
        res => {
          if(!isNullOrUndefined(res.body.token)) {
            this.authenticationService.setUser(this.username);
            this.authenticationService.setToken(res.body.token);
            this.isError = false;
            this.router.navigate(['/']);
          } else {
            this.errorMsg = 'Nombre de usuario o contraseña incorrecta. Por favor, inténtelo de nuevo.';
            console.log(this.errorMsg);
            this.notification.showNotification(
              'danger',
              'top',
              'right',
              this.errorMsg
            );
          }
        },
        error => {
          if(error.status == 401){
            this.errorMsg = 'Nombre de usuario o contraseña incorrecta. Por favor, inténtelo de nuevo.';
            console.log(this.errorMsg);
          } else {
            this.errorMsg = 'Ups! Ocurrió un error al iniciar sesión. Inténtelo de nuevo.';
            console.log(this.errorMsg);
            console.log(error)
          }
          this.notification.showNotification(
            'danger',
            'bottom',
            'right',
            this.errorMsg
          );
        }
        );
    }
  }


}
