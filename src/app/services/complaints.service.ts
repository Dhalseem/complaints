import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  constructor() {}

  public async getComplaints(): Promise<
    gapi.client.Response<gapi.client.sheets.ValueRange> | string
  > {
    let response;
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: environment.spreadSheetId,
        range: 'Sheet1',
      });
    } catch (err) {
      console.log('Error: ', err);
      return JSON.stringify(err);
    }
    console.log(response);
    return response;
  }
}
