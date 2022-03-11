import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarBgComponent } from '../editar-bg/editar-bg.component';

@Component({
  selector: 'app-editar-img-btn',
  template: `
    <button
      (click)="openDialog(componentToOpen)"
      mat-fab
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
  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog(component: number) {
    switch (component) {
      case 1:
        this.dialogRef.open(EditarBgComponent, { panelClass: ['animate__animated','animate__bounceIn'], maxWidth: '19rem' });
        break;

      default:
        break;
    }
  }
}
