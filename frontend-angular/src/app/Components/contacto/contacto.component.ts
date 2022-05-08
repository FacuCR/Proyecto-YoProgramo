import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContacto: FormGroup = new FormGroup({});
  nombre: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  asunto: FormControl = new FormControl("", [Validators.required]);
  mensaje: FormControl = new FormControl("", [Validators.required, Validators.maxLength(300)]);
  antiSpam: FormControl = new FormControl("");
  submitted: boolean = false;
  cargando: boolean = false;
  mensajeDeRespuesta: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.formContacto = this.formBuilder.group({
      nombre: this.nombre,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje,
      antiSpam: this.antiSpam
    })
   }

  ngOnInit() {
    if(this.formContacto.status === 'VALID' && this.antiSpam.value === ''){
      
    }
  }

  onSubmit() {}

  getMensajeDeError(input: string) {
    if (this.formContacto.controls['email'].hasError('email')) {
      return 'Usa un mail valido!';
    }

    return this.formContacto.controls[input].hasError('required') ? 'Debes ingresar algo!' : '';
  }


}
