import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  proyectos: Proyecto[] = [];
  authenticated: boolean = false;
  urlDefaultImg: string = '../../../assets/img/default-img.png';

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService
  ) {
    userService.getAllProyectos().subscribe({
      next: (data) => {
        const proyectosData: Proyecto[] = data;
        proyectosData.forEach((proyecto) => {
          this.proyectos.push(proyecto);
        });
        let cont = 0;
        this.proyectos.forEach((proyecto) => {
          userService.getImagenProyectoById(proyecto.id).subscribe({
            next: (data) => {
              if (data.url) proyecto.imagenUrl = data.url;
              else proyecto.imagenUrl = this.urlDefaultImg;
            },
          });
          this.proyectos[cont] = proyecto;
          cont++;
        });
        console.log(this.proyectos);
      },
    });
  }

  ngOnInit(): void {
    this.authenticated = this.tokenStorage.isAuthenticated();
  }
}
