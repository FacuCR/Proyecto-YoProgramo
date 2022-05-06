import { DatePipe } from '@angular/common';
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

const API_URL = 'http://localhost:8080/api/persona/';
const API_URL_IMG = 'http://localhost:8080/api/img/';
const API_URL_CV = 'http://localhost:8080/api/cv/';
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
    const req = new HttpRequest('POST', `${API_URL_IMG}bg/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  getBg(): Observable<any> {
    return this.http.get(`${API_URL_IMG}bg/find`);
  }

  uploadFotoPerfil(img: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', img);
    const req = new HttpRequest(
      'POST',
      `${API_URL_IMG}perfil/upload`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
    return this.http.request(req);
  }

  getFotoPerfil(): Observable<any> {
    return this.http.get(`${API_URL_IMG}perfil/find`);
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

  editarSobreMi(
    sobreMi: string,
    nuevaFechaNac: Date,
    descripcion: string,
    pais: string,
    ciudad: string,
    disponibilidad: boolean
  ): Observable<any> {
    let datePipe = new DatePipe('en-US');
    let fechaNac = datePipe.transform(nuevaFechaNac, 'dd/MM/yyyy');
    return this.http.put(
      API_URL + 'editar/sobremi',
      {
        sobreMi,
        fechaNac,
        descripcion,
        pais,
        ciudad,
        disponibilidad,
      },
      httpOptions
    );
  }

  subirCv(cv: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', cv);
    const req = new HttpRequest('POST', `${API_URL_CV}upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  obtenerCv(): Observable<any> {
    return this.http.get(`${API_URL_CV}find`);
  }

  borrarCv(): Observable<any> {
    return this.http.delete(`${API_URL_CV}delete`);
  }

  getAllHabilidades(): Observable<any> {
    return this.http.get(`${API_URL}habilidad/traer/todas`);
  }

  agregarHabilidad(
    nombre: string,
    color: string,
    clase: string,
    fechaInicio: Date
  ): Observable<HttpEvent<any>> {
    let datePipe = new DatePipe('en-US');
    let fechaI = datePipe.transform(fechaInicio, 'dd/MM/yyyy');
    return this.http.post<any>(
      API_URL + 'habilidad/crear',
      { nombre, color, clase, fechaI },
      httpOptions
    );
  }

  updateHabilidad(
    nombre: string,
    color: string,
    clase: string,
    fechaInicio: Date,
    id: number
  ): Observable<any> {
    let datePipe = new DatePipe('en-US');
    let fechaI = datePipe.transform(fechaInicio, 'dd/MM/yyyy');
    return this.http.put<any>(
      API_URL + 'habilidad/actualizar/' + id,
      { nombre, color, clase, fechaI },
      httpOptions
    );
  }

  deleteHabilidad(id: number): Observable<any>{
    return this.http.delete(`${API_URL}habilidad/borrar/${id}`);
  }

  getAllProyectos(): Observable<any> {
    return this.http.get(`${API_URL}proyecto/traer/todas`);
  }

  getImagenProyectoById(idProyecto: number): Observable<any> {
    return this.http.get(`${API_URL}proyecto/imagen/find/idProyecto/${idProyecto}`)
  }

  agregarProyecto(titulo: string, descripcion: string, url: string): Observable<HttpEvent<any>> {
    return this.http.post<any>(
      API_URL + 'proyecto/crear',
      { titulo, descripcion, url },
      httpOptions
    );
  }

  updateProyecto(titulo: string, descripcion: string, url: string, id: number): Observable<any> {
    return this.http.put<any>(
      API_URL + 'proyecto/actualizar/' + id,
      { titulo, descripcion, url },
      httpOptions
    );
  }

  deleteProyecto(id: number): Observable<any>{
    return this.http.delete(`${API_URL}proyecto/borrar/${id}`);
  }

  uploadImgProyecto(img: File, idProyecto: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', img);
    formData.append('idProyecto', JSON.stringify(idProyecto));
    const req = new HttpRequest(
      'POST',
      `${API_URL}proyecto/imagen/upload`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
    return this.http.request(req);
  }
}
