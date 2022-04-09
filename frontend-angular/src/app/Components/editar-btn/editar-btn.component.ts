import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Habilidad } from 'src/app/models/Habilidad';
import { Redes } from 'src/app/models/Redes';
import { EditarAboutComponent } from '../editar-about/editar-about.component';
import { EditarHabilidadComponent } from '../editar-habilidad/editar-habilidad.component';
import { EditarHeroComponent } from '../editar-hero/editar-hero.component';
import { EditarRedSocialComponent } from '../editar-red-social/editar-red-social.component';

@Component({
  selector: 'app-editar-btn',
  template: `
    <button
      (click)="openDialog(componentToOpen)"
      mat-mini-fab
      color="secondary"
      aria-label="Boton con un icono de edit"
    >
      <mat-icon>edit</mat-icon>
    </button>
  `,
  styleUrls: ['./editar-btn.component.css'],
})
export class EditarBtnComponent {
  @Input() public componentToOpen: number = 0;

  @Input() public redesActuales: Redes[] = [];
  @Input() public habilidadesActuales: Habilidad[] = [];

  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog(component: number) {
    switch (component) {
      case 1:
        this.dialogRef.open(EditarHeroComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          maxWidth: '19rem',
          height: '90%',
        });
        break;

      case 2:
        this.dialogRef.open(EditarRedSocialComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          minWidth: '60%',
          maxHeight: '90%',
          autoFocus: false,
          data: { redesActuales: this.redesActuales },
        });
        break;

      case 3:
        this.dialogRef.open(EditarAboutComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          height: '90%',
        });
        break;

      case 4:
        this.dialogRef.open(EditarHabilidadComponent, {
          panelClass: ['animate__animated', 'animate__bounceIn'],
          minWidth: '60%',
          maxHeight: '90%',
          autoFocus: false,
          data: { habilidadesActuales: this.habilidadesActuales },
        });
        break;

      default:
        break;
    }
  }
}
