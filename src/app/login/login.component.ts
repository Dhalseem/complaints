import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CustomAuthService } from '../services/custom-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user = '';
  public pass = '';
  constructor(
    private customAuthService: CustomAuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.customAuthService.login(this.user, this.pass).subscribe(
      (response: loginResponse) => {
        if (response.token) {
          localStorage.setItem('session_token', response.token);
          const decToken: userToken = jwtDecode(response.token);
          this.customAuthService.grant = decToken.grant;
          this.router.navigate(['home']);
        } else {
          this.snackbar.open('Login failed.');
          setTimeout(() => {
            this.snackbar.dismiss(), 3000;
          });
        }
      },
      (error) => {
        this.snackbar.open('Login failed.');
        setTimeout(() => {
          this.snackbar.dismiss();
        }, 3000);
      }
    );
  }
}
