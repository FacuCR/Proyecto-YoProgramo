import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { EditarImgBtnComponent } from '../editar-img-btn/editar-img-btn.component';

@Component({
  selector: 'app-editar-bg',
  templateUrl: './editar-bg.component.html',
  styleUrls: ['./editar-bg.component.css'],
})
export class EditarBgComponent implements OnInit {
  bgForm = this.formBuilder.group({
    imagen: [],
  });

  archivo: any;
  previsualizacion: string = '';

  archivoCapturado?: File;
  enviando: boolean = false;
  mensaje = '';
  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditarImgBtnComponent>,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  reloadPage(): void {
    window.location.reload();
  }

  capturarFile(event: any): any {
    if (event[0]) {
      this.archivoCapturado = event[0];
    } else {
      this.archivoCapturado = event.target.files[0];
    }
    this.archivo = this.archivoCapturado;
    this.extraerBase64(this.archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
        return null;
      } catch (e) {
        return null;
      }
    });

  onSubmit(): void {
    this.enviando = true;
    this.mensaje = '';
    if (this.archivoCapturado) {
      this.userService.uploadBg(this.archivoCapturado).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            if (Math.round((100 * event.loaded) / event.total) == 100)
              this.enviando = false;
          } else if (event instanceof HttpResponse) {
            this.mensaje = event.body.mensaje;
          }
          this.openSnackBar('Se cargo exitosamente', 'OK');
        },
        (err: any) => {
          console.log(err);
          this.enviando = false;
          if (err.error && err.error.mensaje) {
            this.mensaje = err.error.mensaje;
          } else {
            this.mensaje = 'No se pudo subir la imagen!';
          }
          this.archivoCapturado = undefined;
          this.openSnackBar(this.mensaje, 'OK');
        }
      );
    }
  }
}
