import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/models/Redes';
import { UserService } from 'src/app/services/user.service';
import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  apellido: string = '';
  nombre: string = '';
  ocupacion: string = '';
  redes: Redes[] = [];
  red: Redes = new Redes();

  constructor(private userService: UserService) {
    this.userService.getPersona().subscribe({
      next: (data) => {
        this.apellido = data.persona.apellido;
        this.nombre = data.persona.nombre;
        this.ocupacion = data.persona.ocupacion;
        console.log(data.persona.redes);
        data.persona.redes.forEach((red: Redes) => {
          this.redes.push(red);
          console.log(red);
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  formularioLoginComponent!: FormularioLoginComponent;
}
