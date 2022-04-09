import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habilidad } from 'src/app/models/Habilidad';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css'],
})
export class EditarHabilidadComponent implements OnInit {
  habilidadActualizarForm = this.formBuilder.group({
    tecnologia: ['', Validators.required],
    fechaI: ['', Validators.required],
  });

  habilidadesActuales: Habilidad[] = [];
  tecnologias: string[] = [];
  tecnologiasBD: any[] = [];
  idSeleccionada: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tecnologiaService: TecnologiaService
  ) {
    this.habilidadesActuales = data.habilidadesActuales;
  }

  onSubmit(): void {
    const tecnologia: string =
      this.habilidadActualizarForm.get('tecnologia')?.value;
    const fechaI: Date = this.habilidadActualizarForm.get('fechaI')?.value;
    let color: string = '';
    let clase: string = '';

    this.tecnologiaService.traerTecnologiaPorNombre(tecnologia).subscribe({
      next: (data) => {
        color = data.color;
        clase = data.clase;

        this.userService
          .updateHabilidad(tecnologia, color, clase, fechaI, this.idSeleccionada)
          .subscribe({
            next: () => this.reloadPage(),
          });
      },
    });
  }

  ngOnInit(): void {
    this.tecnologiaService.traerTodasLasTecnologias().subscribe({
      next: (data) => {
        this.tecnologiasBD = data;
        this.tecnologiasBD.forEach((tecnologia) => {
          this.tecnologias.push(tecnologia.nombre);
        });
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
