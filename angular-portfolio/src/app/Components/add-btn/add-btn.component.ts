import { Component, Input, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarHeroComponent } from '../editar-hero/editar-hero.component';

@Component({
  selector: 'app-add-btn',
  template: `
    <button
      (click)="openDialog(componentToOpen)"
      mat-fab
      color="accent"
      aria-label="Boton con un icono de edit"
    >
      <mat-icon>add</mat-icon>
    </button>
  `,
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent {

  @Input() public componentToOpen: number = 0;
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

      default:
        break;
    }
  }

}
