import { Component, Input, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddHabilidadComponent } from '../add-habilidad/add-habilidad.component';
import { AddProyectoComponent } from '../add-proyecto/add-proyecto.component';
import { AddRedSocialComponent } from '../add-red-social/add-red-social.component';

@Component({
  selector: 'app-add-btn',
  template: `
    <button
      (click)="openDialog(componentToOpen)"
      mat-mini-fab
      color="accent"
      aria-label="Boton con un icono de edit"
    >
      <mat-icon>add</mat-icon>
    </button>
  `,
  styleUrls: ['./add-btn.component.css'],
})
export class AddBtnComponent {
  @Input() public componentToOpen: number = 0;
  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog(component: number) {
    switch (component) {
      case 1:
        this.dialogRef.open(AddRedSocialComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;

      case 2:
        this.dialogRef.open(AddHabilidadComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;

      case 3:
        this.dialogRef.open(AddProyectoComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;

      default:
        break;
    }
  }
}
