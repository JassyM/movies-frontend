import { Injectable } from '@angular/core';
import { EnvConfig } from "../../config/env.config";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly authUrl:string;
  private headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')

  constructor(private httpClient: HttpClient) {
    this.authUrl = EnvConfig.baseUrl + 'user/login';
  }

  public logInUser(user: string, password: string): Observable<any>{
    return this.httpClient.post<{}>(this.authUrl, { username: user, password: password},
      {observe: 'response'});
  }

  /**
   * Elimina la sesión del usuario.
   */
  public logoutUser() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
  }

  /**
   * Agrega la sesión de usuario al localstorage.
   * @param user nombre de usuario
   */
  public setUser(username: string): void {
    localStorage.setItem("currentUser", username);
  }

  /**
   * Agrega el token de acceso al localstorage.
   * @param token token actual de acceso.
   */
  public setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  /**
   * Obtiene el token de acceso del localStorage
   * @return token almacenado o null.
   */
  static getToken() {
    let auth = localStorage.getItem("accessToken");
    if (!isNullOrUndefined(auth)) {
      return auth;
    } else {
      return null;
    }
  }

  /**
   * Obtiene el usuario del localStorage
   * @return usuario almacenado o null.
   */
  public getCurrentUser(): any {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      return user_string;
    } else {
      return null;
    }
  }

}
