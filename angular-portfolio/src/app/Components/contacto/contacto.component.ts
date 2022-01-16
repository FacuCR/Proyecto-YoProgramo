import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto = this.formBuilder.group ({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {}

}
