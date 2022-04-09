import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { UserService } from 'src/app/services/user.service';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css'],
})
export class AddHabilidadComponent implements OnInit {
  habilidadForm = this.formBuilder.group({
    tecnologia: ['', Validators.required],
    fechaI: ['', Validators.required],
  });

  tecnologias: string[] = [];
  tecnologiasDeBD: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<AddBtnComponent>,
    private userService: UserService,
    private tecnologiaService: TecnologiaService
  ) {
    this.tecnologiaService.traerTodasLasTecnologias().subscribe({
      next: (data) => {
        this.tecnologiasDeBD = data;
        this.tecnologiasDeBD.forEach((tecnologia) => {
          this.tecnologias.push(tecnologia.nombre);
        });
      },
    });
  }

  ngOnInit(): void {}

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  reloadPage(): void {
    window.location.reload();
  }

  onSubmit(): void {
    const tecnologia: string = this.habilidadForm.get('tecnologia')?.value;
    const fechaI: Date = this.habilidadForm.get('fechaI')?.value;
    let color: string = '';
    let clase: string = '';

    this.tecnologiaService.traerTecnologiaPorNombre(tecnologia).subscribe({
      next: (data) => {
        color = data.color;
        clase = data.clase;

        this.userService
          .agregarHabilidad(tecnologia, color, clase, fechaI)
          .subscribe({
            next: () => this.reloadPage(),
          });
      },
    });
  }
}
