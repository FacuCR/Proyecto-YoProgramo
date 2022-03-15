import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../models/Redes';
import { RedesService } from './redes.service';

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
      API_URL + 'editar/hero',
      {
        nombre,
        apellido,
        ocupacion,
      },
      httpOptions
    );
  }

  uploadBg(img: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', img);
    const req = new HttpRequest('POST', `${API_URL}upload/bg`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  getBg(): Observable<any> {
    return this.http.get(`${API_URL}files/bg`);
  }

  agregarRedSocial(
    nombre: string,
    url: string,
    clase: string
  ): Observable<HttpEvent<any>> {
    return this.http.post<any>(
      API_URL + 'redes/crear',
      { nombre, url, clase },
      httpOptions
    );
  }

  borrarUnaRedSocialDeLaPersona(id: number): Observable<any> {
    return this.http.delete(API_URL + 'redes/borrar/' + id);
  }

  actualizarRedSocial(redAActualizar: Redes): Observable<any> {
    const nombre: string = redAActualizar.nombre;
    const url: string = redAActualizar.url;
    const clase: string = redAActualizar.clase;
    return this.http.put(
      API_URL + 'redes/actualizar/' + redAActualizar.id,
      {
        nombre,
        url,
        clase,
      },
      httpOptions
    );
  }
}
