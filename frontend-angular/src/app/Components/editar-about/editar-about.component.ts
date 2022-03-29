import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { EditarBtnComponent } from '../editar-btn/editar-btn.component';

@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css'],
})
export class EditarAboutComponent implements OnInit {
  aboutForm = this.formBuilder.group({
    presentacion: ['', Validators.required],
    fechaNac: ['', Validators.required],
    descripcion: ['', Validators.required],
    pais: ['', Validators.required],
    ciudad: ['', Validators.required],
    disponible: false,
  });

  isInvalido: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditarBtnComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const sobreMi: string = this.aboutForm.get('presentacion')?.value;
    const fechaNac: Date = this.aboutForm.get('fechaNac')?.value;
    const descripcion: string = this.aboutForm.get('descripcion')?.value;
    const pais: string = this.aboutForm.get('pais')?.value;
    const ciudad: string = this.aboutForm.get('ciudad')?.value;
    const checkboxValue: boolean = this.aboutForm.get('disponible')?.value;

    this.userService.editarSobreMi(sobreMi, fechaNac, descripcion, pais, ciudad, checkboxValue).subscribe({
      next: () => {
        this.reloadPage();
      },
      error: (err: Error) => {
        this.isInvalido = true;
        console.log(err.message);
        this.openSnackBar('Ocurrio un error, vuelve a intentarlo!', 'OK');
      },
    });
  }

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  reloadPage(): void {
    window.location.reload();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 , });
  }
}
