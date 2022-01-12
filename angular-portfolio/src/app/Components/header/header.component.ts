import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked {

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

 ngAfterViewChecked() {
    
    const heroElement = this.document.getElementById('hero');
    const aboutElement = this.document.getElementById('about');
    const habElement = this.document.getElementById('habilidades');
    const portfolioElement = this.document.getElementById('portfolio');
    const contactoElement = this.document.getElementById('contacto');

    this.heroOffset = heroElement.offsetTop;
    this.aboutOffset = aboutElement.offsetTop;
    this.habOffset = habElement.offsetTop;
    this.portfolioOffset = portfolioElement.offsetTop; 
    this.contactoOffset = contactoElement.offsetTop;
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

  /* ---===== Cambiar el menu-toggle a menu-active de mobile =====--- */
  activarMobileNav(): void {
    this.menuAbierto = !this.menuAbierto;
    this.document.querySelector('#header').classList.toggle('start-0');
  }
}
