import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  public onLogout(): void {
    this.authenticationService.logoutUser();
    this.router.navigate(['/login']);
  }

  public getCurrentUser() {
    this.username = this.authenticationService.getCurrentUser();
  }
}
