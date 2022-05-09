import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/models/Redes';
import { RedSocialService } from 'src/app/services/red-social.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  nombreCompleto: string = '';
  redes: Redes[] = [];

  constructor(
    private userService: UserService,
    private redSocialesService: RedSocialService
  ) {
    userService.getPersona().subscribe({
      next: (response) => {
        this.nombreCompleto = response.persona.nombre + ' ' + response.persona.apellido;
      }
    });

    redSocialesService.traerTodasLasRedes().subscribe({
      next: (response) => {
        this.redes = response;
      }
    });
  }

  ngOnInit(): void {}
}
