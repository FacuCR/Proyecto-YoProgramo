import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Redes } from 'src/app/models/Redes';
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
          data: { redesActuales: this.redesActuales }
        });
        break;

      default:
        break;
    }
  }
}
