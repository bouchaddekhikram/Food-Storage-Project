import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthResponse } from './auth-response.interface'; // Import the AuthResponse interface

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';  // Your NestJS backend URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => this.setSession(response)),
        catchError(this.handleError<AuthResponse>('login'))
      );
  }

  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { username, password })
      .pipe(
        tap(response => this.setSession(response)),
        catchError(this.handleError<AuthResponse>('register'))
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    // Optionally, clear other session data or perform additional cleanup
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  private setSession(authResult: AuthResponse): void {
    localStorage.setItem('access_token', authResult.access_token);
    // Store other relevant session data if needed
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
