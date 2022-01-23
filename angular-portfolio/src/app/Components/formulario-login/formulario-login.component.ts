import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { LoginBtnComponent } from '../loginBtn/loginBtn.component';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  login = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    contraseña:['', Validators.required],
    recordarme: false
  })

  ocultar = true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginBtnComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit() {}

  getEmailErrorMessage() {
    if (this.login.controls['email'].hasError('required')) {
      return 'Debes ingresar algo!';
    }

    return this.login.controls['email'].hasError('email') ? 'Ingresa un mail valido!' : '';
  }

  onVolverClick(): void {
    this.dialogRef.close();
  }

}
