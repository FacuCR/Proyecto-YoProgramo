import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  proyectos: Proyecto[] = [];
  items = ["Prueba 1", "Prueba 2"];

  constructor(private userService: UserService) {
    userService.getAllProyectos().subscribe({
      next: (data) => {
        const proyectosData: Proyecto[] = data;
        proyectosData.forEach(proyecto => {
          this.proyectos.push(proyecto);
        });
      }
    })
   }

  ngOnInit(): void {
  }

}
