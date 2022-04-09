import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona();
  authenticated: boolean = false;
  textoDisponibilidad: string = '';
  fotoPerfilUrl: string = '';
  cvUrl: string = '';

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService
  ) {
    this.userService.getPersona().subscribe({
      next: (data) => {
        this.persona.fechaNac = data.persona.fechaNac;
        this.persona.ocupacion = data.persona.ocupacion;
        this.persona.sobreMi = data.persona.sobreMi;
        this.persona.descripcion = data.persona.descripcion;
        this.persona.localizacion.pais = data.persona.localizacion.pais;
        this.persona.localizacion.ciudad = data.persona.localizacion.ciudad;
        this.textoDisponibilidad = data.persona.disponibilidad
          ? 'Disponible'
          : 'Trabajando';
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });

    this.userService.obtenerCv().subscribe({
      next: (data) => {
        this.cvUrl = data.url;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.authenticated = this.tokenStorage.isAuthenticated();

    this.userService.getFotoPerfil().subscribe({
      next: (data) => {
        this.fotoPerfilUrl = data.url;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  onBorrar(event: any): void {
    if (this.cvUrl != '') {
      const borrar: boolean = confirm('seguro que deseas borrar tu cv?');

      if (borrar) {
        this.userService.borrarCv().subscribe({
          next: () => this.reloadPage(),
          error: (err: Error) => {
            console.log(err.message);
          },
        });
      }
    }
  }

  public edad(): number {
    let parseFechaNac: Date = new Date(this.persona.fechaNac);
    let difTiempo: number = Math.abs(Date.now() - parseFechaNac.getTime());
    let edad: number = Math.floor(difTiempo / (1000 * 3600 * 24) / 365.25);
    return edad;
  }

  reloadPage(): void {
    window.location.reload();
  }
}
