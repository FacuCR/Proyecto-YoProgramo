import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activarBackToTop: boolean = false;

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
 }

 @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.activarBackToTop = window.scrollY > 100;
  }

}
