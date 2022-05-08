import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL_CONTACTO =
  'https://script.google.com/macros/s/AKfycbyecKlludpLr3XHhbIDuQultnHQH0ctV-qO0cmGj8Ez8GZnRbiNeBHfmHb60SHwccRH/exec';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  enviarMail(nombre: string, email: string, msg: string): Observable<any> {
    let formData: any = new FormData();
    formData.append('name', nombre);
    formData.append('email', email);
    formData.append('message', msg);

    return this.http.post(API_URL_CONTACTO, formData);
  }
}
