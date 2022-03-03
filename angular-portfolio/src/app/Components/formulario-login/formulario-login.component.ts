import { Component, OnInit, Optional } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<LoginBtnComponent>
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.dialogRef.close();
    }
  }

  onSubmit(): void {
    const email: string = this.login.get('email')?.value;
    const contrasenia: string = this.login.get('contraseña')?.value;

    this.authService.login(email, contrasenia).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  getEmailErrorMessage() {
    if (this.login.controls['email'].hasError('required')) {
      return 'Debes ingresar tu email!';
    }

    return this.login.controls['email'].hasError('email')
      ? 'Ingresa un mail valido!'
      : '';
  }

  getContraseniaErrorMessage() {
    if (this.login.controls['contraseña'].hasError('required')) {
      return 'Debes ingresar tu contraseña!';
    }

    return this.login.controls['contraseña'].hasError('minLength')
      ? ''
      : 'La contraseña debe tener mas de 6 caracteres!';
  }

  onVolverClick(): void {
    this.dialogRef.close();
  }
}
