import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Redes } from 'src/app/models/Redes';
import { RedSocialService } from 'src/app/services/red-social.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  apellido: string = '...';
  nombre: string = 'Cargando';
  ocupacion: string = 'Desconocido';
  redes: Redes[] = [];
  authenticated: boolean = false;
  backgroundUrl: string = '';

  constructor(
    private userService: UserService,
    private redSocialesService: RedSocialService,
    private tokenStorage: TokenStorageService
  ) {
    this.userService.getPersona().subscribe({
      next: (data) => {
        this.apellido = data.persona.apellido;
        this.nombre = data.persona.nombre;
        this.ocupacion = data.persona.ocupacion.split(' ')[0];
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });

    this.redSocialesService.traerTodasLasRedes().subscribe({
      next: (data) => {
        this.redes = data;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.authenticated = this.tokenStorage.isAuthenticated();
    this.userService.getBg().subscribe({
      next: (data) => {
        this.backgroundUrl = data.url;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
