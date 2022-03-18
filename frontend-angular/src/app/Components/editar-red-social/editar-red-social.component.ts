import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Redes } from 'src/app/models/Redes';
import { RedesService } from 'src/app/services/redes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editar-red-social',
  templateUrl: './editar-red-social.component.html',
  styleUrls: ['./editar-red-social.component.css'],
})
export class EditarRedSocialComponent implements OnInit {
  redActualizarForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    url: ['', Validators.required],
  });

  redesActuales: Redes[] = [];
  redes: string[] = [];
  redesBD: any[] = [];
  idSeleccionada:number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private redesService: RedesService,
    private userService: UserService
  ) {
    this.redesActuales = data.redesActuales;
  }

  ngOnInit(): void {
    this.redesService.getTodasLasRedes().subscribe({
      next: (data) => {
        this.redesBD = data;
        this.redesBD.forEach((red) => {
          this.redes.push(red.nombre);
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  onSubmit(): void {
    let red: Redes = new Redes();
    red.id = this.idSeleccionada;
    red.nombre = this.redActualizarForm.get('nombre')?.value;
    red.url = this.redActualizarForm.get('url')?.value;
    this.redesService.getRedPorNombre(red.nombre).subscribe({
      next: (data) => {
        red.clase = data.clase;

        this.userService.actualizarRedSocial(red).subscribe({
          next: () => this.reloadPage(),
          error: (err: Error) => {
            console.log(err.message);
          }
        });

      },
      error: (err: Error) => {console.log(err.message);}
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
