import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { SubirCvBtnComponent } from '../subir-cv-btn/subir-cv-btn.component';

@Component({
  selector: 'app-subir-cv',
  templateUrl: './subir-cv.component.html',
  styleUrls: ['./subir-cv.component.css'],
})
export class SubirCvComponent implements OnInit {
  cvForm = this.formBuilder.group({
    cv: [],
  });

  progreso = 0;
  mensaje = '';
  nombreArchivo = 'Seleciona un Archivo';
  infoArchivo?: Observable<any>;
  archivoCapturado?: File;

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<SubirCvBtnComponent>,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  seleccionarArchivo(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.archivoCapturado = file;
      this.nombreArchivo = this.archivoCapturado.name;
    } else {
      this.nombreArchivo = 'Seleciona un Archivo';
    }
  }

  onSubmit(): void {
    this.progreso = 0;
    this.mensaje = '';
    if (this.archivoCapturado) {
      this.userService.subirCv(this.archivoCapturado).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.mensaje = event.body.message;
          }
          this.openSnackBar(this.mensaje, 'OK');
          setTimeout(() => {this.reloadPage()}, 1500);
        },
        (err: any) => {
          console.log(err);
          this.progreso = 0;
          if (err.error && err.error.message) {
            this.mensaje = err.error.message;
          } else {
            this.mensaje = 'No se pudo subir el archivo!';
          }
          this.archivoCapturado = undefined;
          this.openSnackBar(this.mensaje, 'OK');
        }
      );
    }
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

  ngOnInit(): void {}
}
