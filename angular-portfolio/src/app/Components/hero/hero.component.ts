import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Redes } from 'src/app/models/Redes';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  apellido: string = '';
  nombre: string = '';
  ocupacion: string = '';
  redes: Redes[] = [];
  red: Redes = new Redes();
  authenticated: boolean = false;
  backgroundUrl: string = '';

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService
  ) {
    this.userService.getPersona().subscribe({
      next: (data) => {
        this.apellido = data.persona.apellido;
        this.nombre = data.persona.nombre;
        this.ocupacion = data.persona.ocupacion;
        console.log(data.persona.redes);
        data.persona.redes.forEach((red: Redes) => {
          this.redes.push(red);
        });
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
        console.log(this.backgroundUrl);
      },
      error: (err: Error) => {
        console.log(err.message);
      }
    });
  }
}
