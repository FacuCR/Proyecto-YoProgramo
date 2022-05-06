import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://gentle-earth-94368.herokuapp.com/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, contrasenia: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'signin',
      {
        email,
        contrasenia,
      },
      httpOptions
    );
  }
}
