import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  menuAbierto: boolean = false;

  @ViewChild('hero')
  heroElement!: ElementRef;
  @ViewChild('about')
  aboutElement!: ElementRef;
  @ViewChild('habilidades')
  habElement!: ElementRef;  
  @ViewChild('portfolio')
  portfolioElement!: ElementRef;

  public currentActive = 1;
  public heroOffset: Number = 0;
  public portfolioOffset: Number = 0;
  public habOffset: Number = 0;
  public aboutOffset: Number = 0;

  constructor(
    @Inject(DOCUMENT) private document: any
 ) {}

  ngAfterViewInit() {  
    this.heroOffset = this.heroElement.nativeElement.offsetTop;
    this.portfolioOffset = this.portfolioElement.nativeElement.offsetTop;
    this.habOffset = this.habElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
  }

  scrollToElement() {
    // scrollToElement Code :)
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
    } else if (window.pageYOffset >= this.portfolioOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 0;
    }
  }

  /* ---===== Cambiar el menu-toggle a menu-active de mobile =====--- */
  mobileNavActivar(): void {
    this.menuAbierto = !this.menuAbierto;
    this.document.querySelector('#header').classList.toggle('start-0');
  }
}
