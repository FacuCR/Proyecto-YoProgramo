import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/models/Proyecto';
import { EditarBgComponent } from '../editar-bg/editar-bg.component';
import { EditarFotoPerfilComponent } from '../editar-foto-perfil/editar-foto-perfil.component';
import { EditarImagenProyectoComponent } from '../editar-imagen-proyecto/editar-imagen-proyecto.component';

@Component({
  selector: 'app-editar-img-btn',
  template: `
    <button
      (click)="openDialog(componentToOpen)"
      mat-mini-fab
      color="secondary"
      aria-label="Boton con un icono de edit"
    >
      <mat-icon>photo</mat-icon>
    </button>
  `,
  styleUrls: ['./editar-img-btn.component.css'],
})
export class EditarImgBtnComponent {
  @Input() public componentToOpen: number = 0;
  @Input() public idProyecto: number = 0;
  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog(component: number) {
    switch (component) {
      case 1:
        this.dialogRef.open(EditarBgComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;
      case 2:
        this.dialogRef.open(EditarFotoPerfilComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;
      case 3:
        this.dialogRef.open(EditarImagenProyectoComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
          data: { idProyecto: this.idProyecto },
        });
        break;

      default:
        break;
    }
  }
}
