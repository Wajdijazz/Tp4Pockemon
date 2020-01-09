import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Tokens } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  JWT_TOKEN ="JWT_TOKEN" ;
REFRESH_TOKEN="REFRESH_TOKEN" ;
  private loggedUser: string;

  constructor(private http: HttpClient) {}

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/auth/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.email, tokens)),
        

        mapTo(true),
      
        catchError(error => {
          alert("vous n'avez pas un compte");
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`${config.apiUrl}/auth/logout`, {
      'refresh_token': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}/auth/refresh`, {
      'refresh_token': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {

      this.storeJwtToken(tokens.access_token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);

  }

  private doLoginUser(email: string, tokens: Tokens) {
    this.loggedUser = email;

    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}