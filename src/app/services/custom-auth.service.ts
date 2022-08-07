import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CustomAuthService {
  constructor(private http: HttpClient) {}
  public grant: string = '';

  public isAuthObservable: Subject<boolean> = new Subject<boolean>();
  public isAuthenticated() {
    const token = localStorage.getItem('session_token');
    if (token) {
      const decToken: userToken = jwt_decode(token);
      if (new Date().getTime() > new Date(decToken.exp * 1000).getTime()) {
        this.isAuthObservable.next(false);
        return false;
      } else {
        this.isAuthObservable.next(true);
        return decToken;
      }
    }
    this.isAuthObservable.next(false);
    return false;
  }

  public logout() {
    localStorage.clear();
    this.isAuthObservable.next(false);
  }
  public login(username: string, password: string) {
    return this.http.post<loginResponse>(`${environment.apiUrl}/login`, {
      username,
      password,
    });
  }
  public getGrant() {
    const token = localStorage.getItem('session_token') ?? '';
    const decToken: userToken = jwt_decode(token);
    return decToken.grant;
  }
  public getUsername() {
    const token = localStorage.getItem('session_token') ?? '';
    const decToken: userToken = jwt_decode(token);
    console.log(decToken);
    return decToken.username;
  }
  public register(paylaod: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('session_token')}`
    );
    return this.http.post(`${environment.apiUrl}/register`, paylaod, {
      headers: headers,
    });
  }
}
