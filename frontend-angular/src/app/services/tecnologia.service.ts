import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/tecnologia/'

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  constructor(private http: HttpClient) { }

  traerTodasLasTecnologias(): Observable<any> {
    return this.http.get(API_URL + 'traer/todas');
  }

  traerTecnologiaPorNombre(nombreTecnologia: string): Observable<any> {
    const params = new HttpParams().set('nombreTecnologia', nombreTecnologia);
    return this.http.get(API_URL + 'traer', { params });
  }
}
