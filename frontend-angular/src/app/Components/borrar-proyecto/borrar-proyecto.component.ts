import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrar-proyecto',
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
  styleUrls: ['./borrar-proyecto.component.css']
})
export class BorrarProyectoComponent implements OnInit {
  @Input() public proyecto: Proyecto = new Proyecto();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onBorrar(): void {
    if (this.proyecto) {
      const borrar: boolean = confirm(
        'seguro que deseas borrar el proyecto ' + this.proyecto.titulo
      );
      if(borrar) {
        this.userService.deleteProyecto(this.proyecto.id).subscribe({
          next: () => this.reloadPage(),
        })
      }
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
