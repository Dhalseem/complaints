import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css'],
})
export class ComplaintFormComponent implements OnInit {
  constructor() {}
  public selectedComplaint: Complaint = {
    timestamp: new Date(),
    email: '',
    fromSail: '',
    staffNumber: '',
    complaineeName: '',
    department: '',
    contactNumber: '',
    quarterType: '',
    blockNumber: '',
    unitNumber: '',
    newAllotment: '',
    quarterNumber: '',
    workNature: '',
    complaintDetails: '',
    status: '',
    pendingDays: '',
    attendingWorkId: '',
    contract: '',
    jobCardNumber: '',
    attendPeriodFrom: '',
    attendPeriodTo: '',
    remarks: '',
    complaintId: '',
  };
  ngOnInit(): void {}
  public complaintForm: any;
  submitForm() {
    console.log('Submitted form brio');
  }
}
