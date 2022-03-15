import { Component, Optional } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';

@Component({
  selector: 'app-loginBtn',
  template: `
    <button mat-raised-button color="primary" (click)="openDialog()">
      Iniciar Sesion
    </button>
  `,
  styleUrls: ['./loginBtn.component.css'],
})
export class LoginBtnComponent {
  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog() {
    this.dialogRef.open(FormularioLoginComponent, { panelClass: ['animate__animated','animate__bounceIn'] });
  }
}
