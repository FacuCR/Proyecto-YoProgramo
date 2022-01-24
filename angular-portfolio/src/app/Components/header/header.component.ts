import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, AfterViewChecked, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked, OnInit {

  public screenXl!: boolean;

  menuAbierto: boolean = false;

  public currentActive: number = 1;

  public heroOffset: number = 0;
  public aboutOffset: number = 0;
  public habOffset: number = 0;
  public portfolioOffset: number = 0;
  public contactoOffset: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: any
 ) {}
 
  ngOnInit(): void {
    this.screenXl = window.innerWidth >= 1200;
  }

 ngAfterViewChecked() {

  /*
  * El test de creacion del componente está tratando de obtener el valor de html antes de renderizar por completo.
  * El setTimeout es lo unico que me esta funcionando para el test de momento.
  * No se necesita del setTimeout fuera del test, el componente se crea correctamente.
  * Nota: si no funciona el test aumentar el tiempo de espera.
  */
  setTimeout(() => {
    const heroElement: HTMLElement = this.document.getElementById('hero') as HTMLElement;
    const aboutElement: HTMLElement = this.document.getElementById('about') as HTMLElement;
    const habElement: HTMLElement = this.document.getElementById('habilidades') as HTMLElement;
    const portfolioElement: HTMLElement = this.document.getElementById('portfolio') as HTMLElement;
    const contactoElement: HTMLElement = this.document.getElementById('contacto') as HTMLElement;
  
    this.heroOffset = heroElement.offsetTop;
    this.aboutOffset = aboutElement.offsetTop;
    this.habOffset = habElement.offsetTop;
    this.portfolioOffset = portfolioElement.offsetTop; 
    this.contactoOffset = contactoElement.offsetTop;
  }, 0.00001);
    
  }

  /* ---===== Chequear la posicion para cambiar el cursor active del menu horizontal =====--- */
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    if (window.pageYOffset >= this.heroOffset && window.pageYOffset < this.aboutOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.habOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.habOffset && window.pageYOffset < this.portfolioOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.portfolioOffset && window.pageYOffset < this.contactoOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.contactoOffset) {
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }
  
  /* ---===== Cambiar el valor de la variable cuando se cambien el tamaño de la ventana =====--- */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenXl = window.innerWidth >= 1200;
  }

  /* ---===== Cambiar el menu-toggle a menu-active de mobile =====--- */
  activarMobileNav(): void {
    this.menuAbierto = !this.menuAbierto;
    this.document.querySelector('#header').classList.toggle('start-0');
  }

  /* Posible solucion para la posicion del active para cuando agregue elementos de forma dinamica *
  @HostListener('window:resize', ['$event'])
    onResize(event) {
  * Aqui asigno el valor offset de los elementos de nuevo
    }
  */
}
