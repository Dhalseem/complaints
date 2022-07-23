import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'app-complaint-dashboard',
  templateUrl: './complaint-dashboard.component.html',
  styleUrls: ['./complaint-dashboard.component.css'],
})
export class ComplaintDashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private complaintsService: ComplaintsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public authenticate() {
    if (!this.authService.isAuthenticated) {
      this.authService.authenticate(async (resp) => {
        // check if user is authorized to use the sheets
        //TODO: only use services of auth for authorization purposes. (Follow single responsibility principle)
        let response = await this.complaintsService.getComplaints();
        if (
          typeof response == 'string' &&
          response?.includes('PERMISSION_DENIED')
        ) {
          console.log('Permission denied');
          alert('Permission denied, taking you to request access page.');
          window.location.href =
            'https://docs.google.com/spreadsheets/d/1QKWnUq_fZpdRZAYBNjkNDzyuUCtQqR0s7eDIF7LJ1GA';
        } else {
          this.router.navigate(['/complaints/manage']);
        }
      });
    }
  }
}
