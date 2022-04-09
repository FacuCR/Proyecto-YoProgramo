import { Component, Input } from '@angular/core';
import { Redes } from 'src/app/models/Redes';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrar-btn',
  template: `
    <button     
      (click)="onBorrar($event)"
      mat-icon-button
      color="warn"
      aria-label="icono de basurero"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `,
  styleUrls: ['./borrar-btn.component.css'],
})
export class BorrarBtnComponent {
  @Input() public red: Redes = new Redes();

  constructor(private userService: UserService) {}

  onBorrar(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.red) {
      const borrar: boolean = confirm(
        'seguro que deseas borrar tu red social de ' + this.red.nombre
      );

      if (borrar) {
        this.userService.borrarUnaRedSocialDeLaPersona(this.red.id).subscribe({
          next: () => this.reloadPage(),
          error: (err: Error) => {
            console.log(err.message);
          },
        });
      }
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
