import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { EditarBtnComponent } from '../editar-btn/editar-btn.component';

@Component({
  selector: 'app-editar-hero',
  templateUrl: './editar-hero.component.html',
  styleUrls: ['./editar-hero.component.css'],
})
export class EditarHeroComponent {
  heroForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    ocupacion: '',
  });

  apellidoActual: string = '';
  nombreActual: string = '';
  ocupacionActual: string = '';

  isInvalido: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditarBtnComponent>,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {
    userService.getPersona().subscribe({
      next: (data) => {
        this.apellidoActual = data.persona.apellido;
        this.nombreActual = data.persona.nombre;
        this.ocupacionActual = data.persona.ocupacion;
      },
      error: (err: Error) => {
        this.openSnackBar('No se pudo traer los datos actuales :(', 'OK');
      },
    });
  }

  onSubmit(): void {}

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 });
  }
}
