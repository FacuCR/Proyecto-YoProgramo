import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/redes/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RedesService {
  constructor(private http: HttpClient) {}

  getTodasLasRedes(): Observable<any> {
    return this.http.get(API_URL + 'traer/todas');
  }

  getRedPorNombre(nombre: string): Observable<any> {
    const params = new HttpParams().set('red', nombre);
    return this.http.get(API_URL + 'traer', { params });
  }
}