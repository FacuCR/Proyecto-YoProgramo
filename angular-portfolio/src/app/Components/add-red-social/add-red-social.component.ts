import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddBtnComponent } from '../add-btn/add-btn.component';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-add-red-social',
  templateUrl: './add-red-social.component.html',
  styleUrls: ['./add-red-social.component.css'],
})
export class AddRedSocialComponent implements OnInit {
  redForm = this.formBuilder.group({
    nombre: [, Validators.required],
    url: ['', Validators.required],
  });

  redes: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<AddBtnComponent>,
    private redesService: RedesService
  ) {}

  ngOnInit(): void {
    this.redesService.getTodasLasRedes().subscribe({
      next: (data) => {
        this.redes = data;
      },
      error: (err: Error) => {
        console.log(err.message);
      }
    })
  }

  onSubmit(): void {}

  onCancelarClick(): void {}
}
