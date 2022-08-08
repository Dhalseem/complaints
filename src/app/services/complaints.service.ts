import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  constructor(private http: HttpClient) {}

  private complaints!: Complaint[];

  public getComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${environment.apiUrl}/complaints`);
  }

  public createComplaint(complaint: Complaint) {
    return this.http.post(`${environment.apiUrl}/complaints`, complaint);
  }

  public updateComplaint(complaint: Complaint) {
    return this.http.put(`${environment.apiUrl}/complaints`, complaint);
  }
}
