import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarHeroComponent } from '../editar-hero/editar-hero.component';

@Component({
  selector: 'app-editar-btn',
  template: `
    <button
    (click)="openDialog(componentToOpen)"
      mat-fab
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
  constructor(@Optional() public  dialogRef : MatDialog) {}

  openDialog(component: number){
    switch (component) {
      case 1:
        this.dialogRef.open(EditarHeroComponent, { panelClass: ['animate__animated','animate__bounceIn'], maxWidth: '25rem' });
        break;
    
      default:
        break;
    }
  }
}
