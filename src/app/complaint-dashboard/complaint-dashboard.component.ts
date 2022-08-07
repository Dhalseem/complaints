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
}
