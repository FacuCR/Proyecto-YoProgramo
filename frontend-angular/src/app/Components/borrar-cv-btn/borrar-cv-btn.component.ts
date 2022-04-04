import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar-cv-btn',
  template: `
    <button
      (click)="onBorrar()"
      mat-mini-fab
      color="warn"
      aria-label="Boton con un icono de un basurero"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `,
  styleUrls: ['./borrar-cv-btn.component.css'],
})
export class BorrarCvBtnComponent {
  constructor() {}

  onBorrar(): void {
    const borrar: boolean = confirm('seguro que desea borrar su cv?');

    if (borrar) {
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
