import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyecto } from 'src/app/models/Proyecto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css'],
})
export class EditarProyectoComponent implements OnInit {
  proyectoActualizarForm = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    url: ['', Validators.required],
  });

  proyectosActuales: Proyecto[] = [];
  idSeleccionada: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.proyectosActuales = data.proyectosActuales;
  }

  onSubmit(): void {
    const titulo: string = this.proyectoActualizarForm.get('titulo')?.value;
    const descripcion: string = this.proyectoActualizarForm.get('descripcion')?.value;
    const url: string = this.proyectoActualizarForm.get('url')?.value;
    
    
    this.userService
          .updateProyecto(titulo, descripcion, url, this.idSeleccionada)
          .subscribe({
            next: () => this.reloadPage(),
          });
  }

  ngOnInit(): void {}

  reloadPage(): void {
    window.location.reload();
  }
}
