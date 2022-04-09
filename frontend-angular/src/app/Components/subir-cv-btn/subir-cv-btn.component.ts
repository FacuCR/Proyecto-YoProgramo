import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubirCvComponent } from '../subir-cv/subir-cv.component';

@Component({
  selector: 'app-subir-cv-btn',
  template: `
    <button
      (click)="openDialog()"
      mat-mini-fab
      color="accent"
      aria-label="Boton con un icono de edit"
    >
      <mat-icon>open_in_browser</mat-icon>
    </button>
  `,
  styleUrls: ['./subir-cv-btn.component.css']
})
export class SubirCvBtnComponent {

  constructor(@Optional() public dialogRef: MatDialog) {}

  openDialog() {
    this.dialogRef.open(SubirCvComponent, {
      panelClass: ['animate__animated', 'animate__bounceIn'],
      maxWidth: '19rem',
      height: '90%',
    });
  }

}
