import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL_CONTACTO = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeIaeSQ-6htlEosKXcQ6J0yeUNORN8kydTS6SfYkGO0BPwVkqw-BSGX1yDPuP7fRqLUl39la-ryOqJ/pubhtml';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) { }

  enviarMail(nombre: string, email: string, asunto: string, msg: string): Observable<any> {
    let formData: any = new FormData();
    formData.append('name', nombre);
    formData.append('email', email);
    formData.append('message', msg);

    return this.http.post(API_URL_CONTACTO, formData);
  }
}
