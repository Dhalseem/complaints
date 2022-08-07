import { Component, OnInit } from '@angular/core';
import { CustomAuthService } from '../services/custom-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: string = '';
  pass: string = '';
  email: string = '';
  fullName: string = '';
  contactNumber: string = '';
  organization: string = '';
  department: string = '';
  grant: string = '';
  constructor(private authService: CustomAuthService) {}

  ngOnInit(): void {}

  submitForm() {
    this.authService
      .register({
        username: this.user,
        password: this.pass,
        fullName: this.fullName,
        contactNumber: this.contactNumber,
        organization: this.organization,
        department: this.department,
        grant: this.grant,
      })
      .subscribe(
        (res) => {
          console.log('User created!');
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
