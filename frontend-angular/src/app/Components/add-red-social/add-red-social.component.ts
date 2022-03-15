import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddBtnComponent } from '../add-btn/add-btn.component';
import { RedesService } from 'src/app/services/redes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-red-social',
  templateUrl: './add-red-social.component.html',
  styleUrls: ['./add-red-social.component.css'],
})
export class AddRedSocialComponent implements OnInit {
  redForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    url: ['', Validators.required],
  });

  redes: string[] = [];
  redesBD: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<AddBtnComponent>,
    private redesService: RedesService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.redesService.getTodasLasRedes().subscribe({
      next: (data) => {
        this.redesBD = data;
        this.redesBD.forEach(red => {
          this.redes.push(red.nombre);
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  onSubmit(): void {
    const nombre: string = this.redForm.get('nombre')?.value;
    const url: string = this.redForm.get('url')?.value;
    let clase: string = '';
    this.redesService.getRedPorNombre(nombre).subscribe({
      next: (data) => {
        clase = data.clase;

        this.userService.agregarRedSocial(nombre, url, clase).subscribe({
          next: () => this.reloadPage(),
          error: (err: Error) => {
            console.log(err.message);
          }
        });

      },
      error: (err: Error) => {console.log(err.message);}
    });
  }

  onCancelarClick(): void {
    this.dialogRef.close();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
