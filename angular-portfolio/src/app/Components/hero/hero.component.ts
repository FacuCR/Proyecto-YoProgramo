import { Component, OnInit } from '@angular/core';
import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  formularioLoginComponent!: FormularioLoginComponent;
}
