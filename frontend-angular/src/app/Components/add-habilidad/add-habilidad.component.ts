import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  tecnologiasDeBD: any;

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

  onSubmit(): void{}
}
