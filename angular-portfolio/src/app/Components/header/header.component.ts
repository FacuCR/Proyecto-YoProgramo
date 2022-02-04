import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, AfterViewChecked, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked, OnInit {
  
  public screenXl: boolean = false;

  menuAbierto: boolean = false;

  public currentActiveMenuItem: number = 0;

  public heroOffset: number = 0;
  public aboutOffset: number = 0;
  public habOffset: number = 0;
  public portfolioOffset: number = 0;
  public contactoOffset: number = 0;
  winInnerWith: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: any
 ) {}
 
  ngOnInit(): void {
    this.ifScreenXl(window.innerWidth);
  }

 ngAfterViewChecked() {

    const heroElement: HTMLElement = this.getElementConId('hero');
    const aboutElement: HTMLElement = this.getElementConId('about');
    const habElement: HTMLElement = this.getElementConId('habilidades');
    const portfolioElement: HTMLElement = this.getElementConId('portfolio');
    const contactoElement: HTMLElement = this.getElementConId('contacto');
    
    /*
    * El test de creacion del componente está tratando de obtener el valor de html antes de renderizar por completo.
    * El setTimeout es lo unico que me esta funcionando para el test de momento.
    * No se necesita del setTimeout fuera del test, el componente se crea correctamente.
    * Nota: si no funciona el test aumentar el tiempo de espera.
    */
    setTimeout(() => {    
      this.heroOffset = heroElement.offsetTop;
      this.aboutOffset = aboutElement.offsetTop;
      this.habOffset = habElement.offsetTop;
      this.portfolioOffset = portfolioElement.offsetTop; 
      this.contactoOffset = contactoElement.offsetTop;
    });
    
  }

  /* ---===== Chequear la posicion para cambiar el cursor active del menu horizontal =====--- */
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    if (this.ifWindowEstaEntre(window.pageYOffset, this.heroOffset, this.aboutOffset)) {
      this.currentActiveMenuItem = 1;
    } 
    else if (this.ifWindowEstaEntre(window.pageYOffset, this.aboutOffset, this.habOffset)) {
      this.currentActiveMenuItem = 2;
    } 
    else if (this.ifWindowEstaEntre(window.pageYOffset, this.habOffset, this.portfolioOffset)) {
      this.currentActiveMenuItem = 3;
    } 
    else if (this.ifWindowEstaEntre(window.pageYOffset, this.portfolioOffset, this.contactoOffset)) {
      this.currentActiveMenuItem = 4;
    } 
    else if (this.ifWindowEstaEntre(window.pageYOffset, this.contactoOffset)) {
      this.currentActiveMenuItem = 5;
    } 
    else {
      this.currentActiveMenuItem = 0;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ifScreenXl(window.innerWidth);
  }

  activarMobileNav(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  getElementConId(elementId: string): HTMLElement {
    return this.document.getElementById(elementId) as HTMLElement;
  }

  ifScreenXl(windowInnerWidth: number) {
    this.screenXl = windowInnerWidth >= 1200;
  }

  ifWindowEstaEntre(windowPageYOffset: number,elementoDeArriba: number, elementoDeAbajo?: number): boolean {
    if(elementoDeAbajo){
      return windowPageYOffset >= elementoDeArriba && windowPageYOffset < elementoDeAbajo;}

    return windowPageYOffset >= elementoDeArriba;
  }

  /* Posible solucion para la posicion del active para cuando agregue elementos de forma dinamica *
  @HostListener('window:resize', ['$event'])
    onResize(event) {
  * Aqui asigno el valor offset de los elementos de nuevo
    }
  */
}