import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formContacto: FormGroup = new FormGroup({});
  nombre: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  mensaje: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(300),
  ]);
  antiSpam: FormControl = new FormControl('');
  submitted: boolean = false;
  cargando: boolean = false;
  mensajeDeRespuesta: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactoService: ContactoService
  ) {
    this.formContacto = this.formBuilder.group({
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      antiSpam: this.antiSpam,
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formContacto.status === 'VALID' && this.antiSpam.value === '') {
      this.formContacto.disable();
      const nombre: string = this.formContacto.get('nombre')?.value;
      const email: string = this.formContacto.get('email')?.value;
      const mensaje: string = this.formContacto.get('mensaje')?.value;
      this.cargando = true;
      this.submitted = false;

      this.mensajeDeRespuesta =
        'Oops! algo salio mal, recarga la pagina eh intentalo de nuevo';

      this.contactoService.enviarMail(nombre, email, mensaje).subscribe({
        next: (response) => {
          if (response['result'] == 'success')
            this.mensajeDeRespuesta =
              'Ey, gracias por el mensaje! me pondre en contacto contigo lo antes posible';
          this.formContacto.enable();
          this.submitted = true;
          this.cargando = false;
          console.log(this.mensajeDeRespuesta);
        },
        error: (error) => {
          this.formContacto.enable();
          this.submitted = true;
          this.cargando = false;
          console.log(error);
        },
      });
    }
  }

  getMensajeDeError(input: string) {
    if (this.formContacto.controls['email'].hasError('email')) {
      return 'Usa un mail valido!';
    }

    return this.formContacto.controls[input].hasError('required')
      ? 'Debes ingresar algo!'
      : '';
  }
}
