import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { map, Observable } from 'rxjs';
import { settings } from '../../settings/settings.local';
import * as moment from 'moment';
import { ComplaintsService } from '../services/complaints.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent implements OnInit {
  constructor(
    private complaintsService: ComplaintsService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {}

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'timestamp',
      headerName: 'Created date',
      valueFormatter: (params) => new Date(params.value).toLocaleString(),
    },
    { field: 'email' },
    { field: 'fromSail' },
    { field: 'staffNumber' },
    { field: 'complaineeName' },
    { field: 'department' },
    { field: 'contactNumber' },
    { field: 'quarterType' },
    { field: 'blockNumber' },
    { field: 'unitNumber' },
    { field: 'newAllotment' },
    { field: 'quarterNumber' },
    { field: 'workNature' },
    { field: 'complaintDetails' },
    { field: 'status' },
    { field: 'pendingDays' },
    { field: 'attendingWorkId' },
    { field: 'contract' },
    { field: 'jobCardNumber' },
    { field: 'attendPeriodFrom' },
    { field: 'attendPeriodTo' },
    { field: 'remarks' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Complaint[];

  public selectedComplaint: Complaint = {} as Complaint;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from sever
  async onGridReady(params: GridReadyEvent) {
    this.rowData$ = await this.complaintsService.getComplaints();
    console.log(this.rowData$);
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    this.selectedComplaint = e.data;
    console.log('Selected complaint changed: ', this.selectedComplaint);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  public complaintForm: any;
  submitForm() {
    console.log('Submitted form brio');
  }
}
