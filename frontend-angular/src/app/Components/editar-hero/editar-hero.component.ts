import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { EditarBtnComponent } from '../editar-btn/editar-btn.component';

@Component({
  selector: 'app-editar-hero',
  templateUrl: './editar-hero.component.html',
  styleUrls: ['./editar-hero.component.css'],
})
export class EditarHeroComponent implements OnInit {
  heroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    ocupacion: ['', Validators.required],
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
  ) {}

  ngOnInit(): void {
    this.userService.getPersona().subscribe({
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

  onSubmit(): void {
    const nombre: string = this.heroForm.get('nombre')?.value;
    const apellido: string = this.heroForm.get('apellido')?.value;
    const ocupacion: string = this.heroForm.get('ocupacion')?.value;

    this.userService.editarPrincipal(nombre, apellido, ocupacion).subscribe({
      next: (data) => {
        this.reloadPage();
      },
      error: (err: Error) => {}, //voy a intetar usar data de mat dialog para devolver el error
    });
  }

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
