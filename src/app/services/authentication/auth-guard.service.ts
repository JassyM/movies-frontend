import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) { }

  canActivate() {
    if (this.authenticationService.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
