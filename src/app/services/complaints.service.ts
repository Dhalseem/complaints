import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  constructor(private http: HttpClient) {}

  private complaints!: Complaint[];

  public async getComplaints(): Promise<any | Complaint[]> {
    let response;
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: environment.spreadSheetId,
        range: environment.complaintsSchema,
      });
      this.complaints = [];
      response.result.values?.forEach((elem, index) => {
        if (index != 0) {
          const complaint: Complaint = {
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
          };
          let valIndex = 0;
          for (const [key, value] of Object.entries(complaint)) {
            complaint[key as keyof Complaint] = elem[valIndex++] ?? '';
          }
          this.complaints.push(complaint);
        }
      });
      return this.complaints;
    } catch (err) {
      console.log('Error: ', err);
      return err;
    }
  }

  public createComplaint(complaint: Complaint) {
    return this.http.post(`${environment.apiUrl}/complaints`, complaint);
  }
}
