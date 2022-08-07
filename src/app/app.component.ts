import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ComplaintsService } from './services/complaints.service';
import { CustomAuthService } from './services/custom-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ComplaintsApp';
  public isLoggedIn: boolean = false;
  public username: string = '';

  @ViewChild('drawer')
  public drawer: any;

  public boardPermission = false;
  public addUserPermission = false;

  constructor(
    private authService: AuthService,
    private complaintsService: ComplaintsService,
    private router: Router,
    private customAuthService: CustomAuthService
  ) {}
  ngOnInit(): void {
    if (this.customAuthService.isAuthenticated()) {
    } else {
      this.router.navigate(['login']);
    }
    this.customAuthService.isAuthObservable.subscribe((val) => {
      this.isLoggedIn = val;
      if (val) {
        this.boardPermission =
          ['admin', 'supervisor', 'executive'].indexOf(
            this.customAuthService.getGrant()
          ) > -1;
        this.addUserPermission =
          ['admin'].indexOf(this.customAuthService.getGrant()) > -1;
        this.username = this.customAuthService.getUsername();
      }
    });
  }
  logout() {
    this.customAuthService.logout();
    this.router.navigate(['login']);
    this.drawer.toggle();
  }
}
