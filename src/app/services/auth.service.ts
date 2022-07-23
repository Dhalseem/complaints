import { APP_ID, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _tokenClient!: google.accounts.oauth2.TokenClient;

  constructor() {
    gapi.load('client', async () => {
      await gapi.client.init({
        apiKey: environment.gapiKey,
        discoveryDocs: [environment.discoveryDoc],
      });
    });
  }

  public async authenticate(
    callback: (resp: google.accounts.oauth2.TokenResponse) => void
  ): Promise<void> {
    if (!this.isAuthenticated) {
      this._tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: environment.gapiClient,
        scope: environment.gapiScopes,
        callback: callback,
      });

      this._tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      this._tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  public get isAuthenticated() {
    try {
      if (gapi.client.getToken() === null) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  private initializeClient() {}
}
