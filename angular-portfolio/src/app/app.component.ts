import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facundo Castro';

  @ViewChild('hero', {
    read: ElementRef
  })
  public heroElement!: ElementRef;
  @ViewChild('about', {
    read: ElementRef
  })
  public aboutElement!: ElementRef;
  @ViewChild('habilidades', {
    read: ElementRef
  })
  public habElement!: ElementRef;
  @ViewChild('portfolio', {
    read: ElementRef
  })
  public portfolioElement!: ElementRef;
}
