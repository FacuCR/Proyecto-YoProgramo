import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrar-habilidad',
  template: `
    <button
      class="position-absolute top-0 start-100 translate-middle"
      (click)="onBorrar()"
      mat-mini-fab
      color="warn"
      aria-label="icono de basurero"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `,
  styleUrls: ['./borrar-habilidad.component.css'],
})
export class BorrarHabilidadComponent implements OnInit {
  @Input() public habilidad: Habilidad = new Habilidad();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onBorrar(): void {
    if (this.habilidad) {
      const borrar: boolean = confirm(
        'seguro que deseas borrar la habilidad de ' + this.habilidad.nombre
      );
      if(borrar) {
        this.userService.deleteHabilidad(this.habilidad.id).subscribe({
          next: () => this.reloadPage(),
        })
      }
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
