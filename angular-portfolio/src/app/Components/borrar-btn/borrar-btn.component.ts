import { Component } from '@angular/core';

@Component({
  selector: 'app-borrar-btn',
  template: `
    <button
      mat-fab
      color="warn"
      aria-label="Example icon button with a delete icon"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `,
  styleUrls: ['./borrar-btn.component.css'],
})
export class BorrarBtnComponent {
  constructor() {}
}
