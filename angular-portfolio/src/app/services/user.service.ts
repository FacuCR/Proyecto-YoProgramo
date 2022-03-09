import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/persona/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPersona(): Observable<any> {
    return this.http.get(API_URL + 'obtener', { responseType: 'json' });
  }

  editarPrincipal(
    nombre: string,
    apellido: string,
    ocupacion: string
  ): Observable<any> {
    return this.http.put<any>(
      API_URL + 'editar_hero',
      {
        nombre,
        apellido,
        ocupacion,
      },
      httpOptions
    );
  }
}
