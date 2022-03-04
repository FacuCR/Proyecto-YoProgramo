import { Component, OnInit, Optional } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoginBtnComponent } from '../loginBtn/loginBtn.component';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css'],
})
export class FormularioLoginComponent implements OnInit {
  login = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]],
    recordarme: false,
  });

  ocultar = true;
  roles: string[] = [];
  errorMessage: string = '';
  isInvalido: boolean = false;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<LoginBtnComponent>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.dialogRef.close();
    }
    if(localStorage.getItem('email'))
      this.login.setValue({
        'email': localStorage.getItem('email'),
        'contraseña': localStorage.getItem('contraseña'),
        'recordarme': true
      });
  }

  onSubmit(): void {
    const email: string = this.login.get('email')?.value;
    const contrasenia: string = this.login.get('contraseña')?.value;
    const checkboxValue: boolean = this.login.get('recordarme')?.value;

    this.authService.login(email, contrasenia).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        if(checkboxValue){
          localStorage.setItem('email', email);
          localStorage.setItem('contraseña', '');
        }
        else
          localStorage.clear();
        this.reloadPage();
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
        this.login.reset();
        this.isInvalido = true;
        this.openSnackBar("Ocurrio un error, vuelve a intentarlo!", "OK");
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  getEmailErrorMessage() {
    if (this.login.controls['email'].hasError('required')) {
      return 'Ingresa un email valido!';
    }

    return this.login.controls['email'].hasError('email')
      ? 'Formato de email incorrecto'
      : '';
  }

  getContraseniaErrorMessage() {
    if (this.login.controls['contraseña'].hasError('required')) {
      return 'Ingresar una contraseña valida!';
    }

    return this.login.controls['contraseña'].hasError('minLength')
      ? ''
      : 'La contraseña debe tener mas de 6 caracteres!';
  }

  onVolverClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 , });
  }
}
