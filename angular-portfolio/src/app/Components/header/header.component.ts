import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  AfterViewChecked,
  OnInit,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/models/Persona';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewChecked, OnInit {
  authenticated: boolean = false;
  screenXl: boolean = false;

  menuAbierto: boolean = false;

  currentActiveMenuItem: number = 0;

  heroOffset: number = 0;
  aboutOffset: number = 0;
  habOffset: number = 0;
  portfolioOffset: number = 0;
  contactoOffset: number = 0;
  winInnerWith: number = 0;

  nombre: string = "Cargando...";

  constructor(
    @Inject(DOCUMENT) private document: any,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.userService.getPersona().subscribe({
      next: (data) => {
        this.nombre = data.persona.nombre + " " + data.persona.apellido;
      },
      error: (err: Error) => {
        this.openSnackBar(
          'Ocurrio un error al mostrar los datos, vuelve mas tarde.',
          'OK'
        );
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.ifScreenXl(window.innerWidth);
    this.isAuthenticated();
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
    if (
      this.ifWindowEstaEntre(
        window.pageYOffset,
        this.heroOffset,
        this.aboutOffset
      )
    ) {
      this.currentActiveMenuItem = 1;
    } else if (
      this.ifWindowEstaEntre(
        window.pageYOffset,
        this.aboutOffset,
        this.habOffset
      )
    ) {
      this.currentActiveMenuItem = 2;
    } else if (
      this.ifWindowEstaEntre(
        window.pageYOffset,
        this.habOffset,
        this.portfolioOffset
      )
    ) {
      this.currentActiveMenuItem = 3;
    } else if (
      this.ifWindowEstaEntre(
        window.pageYOffset,
        this.portfolioOffset,
        this.contactoOffset
      )
    ) {
      this.currentActiveMenuItem = 4;
    } else if (
      this.ifWindowEstaEntre(window.pageYOffset, this.contactoOffset)
    ) {
      this.currentActiveMenuItem = 5;
    } else {
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

  ifWindowEstaEntre(
    windowPageYOffset: number,
    elementoDeArriba: number,
    elementoDeAbajo?: number
  ): boolean {
    if (elementoDeAbajo) {
      return (
        windowPageYOffset >= elementoDeArriba &&
        windowPageYOffset < elementoDeAbajo
      );
    }

    return windowPageYOffset >= elementoDeArriba;
  }

  onClickSignout(): void {
    this.tokenStorage.signOut();
    this.isAuthenticated();
    window.location.reload();
  }

  isAuthenticated(): void {
    this.authenticated = this.tokenStorage.isAuthenticated();
  }

  openSnackBar(message: string, action = '') {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  /* Posible solucion para la posicion del active para cuando agregue elementos de forma dinamica *
  @HostListener('window:resize', ['$event'])
    onResize(event) {
  * Aqui asigno el valor offset de los elementos de nuevo
    }
  */
}
