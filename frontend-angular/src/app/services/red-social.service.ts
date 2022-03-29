import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://gentle-earth-94368.herokuapp.com/api/persona/redes/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class RedSocialService {

  constructor(private http: HttpClient) { }

  traerTodasLasRedes(): Observable<any> {
    return this.http.get(API_URL + 'traer/todas');
  }
}
