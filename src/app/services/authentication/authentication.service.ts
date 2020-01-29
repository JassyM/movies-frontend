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

  public logoutUser() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
  }

  public setUser(user: string): void {
    localStorage.setItem("currentUser", user);
  }

  public setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  static getToken() {
    let auth = localStorage.getItem("accessToken");
    if (!isNullOrUndefined(auth)) {
      return auth;
    } else {
      return {};
    }
  }

  public getCurrentUser(): any {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      return user_string;
    } else {
      return null;
    }
  }

}
