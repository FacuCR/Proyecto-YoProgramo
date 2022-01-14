import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginBtn',
  template: `
    <button mat-raised-button color="primary">Iniciar Sesion</button>
    `,
  styleUrls: ['./loginBtn.component.css']
})
export class LoginBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
