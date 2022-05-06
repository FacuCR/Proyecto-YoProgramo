import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css'],
})
export class AddProyectoComponent implements OnInit {
  proyectoForm = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    url: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<AddBtnComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  reloadPage(): void {
    window.location.reload();
  }

  onSubmit(): void {
    const titulo: string = this.proyectoForm.get('titulo')?.value;
    const descripcion: string = this.proyectoForm.get('descripcion')?.value;
    const url: string = this.proyectoForm.get('url')?.value;
    
    this.userService.agregarProyecto(titulo, descripcion, url).subscribe({
      next: () => this.reloadPage(),
    });
  }
}
