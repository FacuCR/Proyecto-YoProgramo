import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('#activarMobileNav debe alternar el valor de #menuAbierto', () => {
    expect(component.menuAbierto).toBe(false, 'comienza en falso');
    component.activarMobileNav();

    expect(component.menuAbierto).toBe(true, 'true despues del evento');
    component.activarMobileNav();

    expect(component.menuAbierto).toBe(
      false,
      'falso nuevamente despues del segundo evento'
    );
  });

  it("debe el elemento #mobile-nav-toggle mostrar determinadas clases segun el valor de #menuAbierto", () => {
    let mobileNavToggleEl = fixture.debugElement.query(By.css('.mobile-nav-toggle'));
    fixture.detectChanges();

    expect(component.menuAbierto).toBe(false, 'comienza en falso');
    expect(mobileNavToggleEl.classes['bi-list']).toBe(true, 'cuando #menuAbierto es falso');
    expect(mobileNavToggleEl.classes['bi-x']).toBeUndefined();
    expect(mobileNavToggleEl.classes['bg-blue']).toBeUndefined();
    expect(mobileNavToggleEl.classes['mobile-nav-active']).toBeUndefined();

    component.activarMobileNav();
    fixture.detectChanges();

    expect(component.menuAbierto).toBe(true, 'true despues del evento');
    expect(mobileNavToggleEl.classes['bi-list']).toBeUndefined();
    expect(mobileNavToggleEl.classes['bi-x']).toBe(true, 'cuando #menuAbierto es true');
    expect(mobileNavToggleEl.classes['bg-blue']).toBe(true, 'cuando #menuAbierto es true');
    expect(mobileNavToggleEl.classes['mobile-nav-active']).toBe(true, 'cuando #menuAbierto es true');

  });

  it('debe #ifScreenXl() poner en true a #screenXl si la ventana es >= 1200', () => {
    let mockWindowInnerWith = 1200;
    component.ifScreenXl(mockWindowInnerWith);
    expect(component.screenXl).toBeTruthy();
  });

  it('debe #ifScreenXl() poner en false a #screenXl si la ventana es < 1200', () => {
    let mockWindowInnerWith = 100;
    component.ifScreenXl(mockWindowInnerWith);
    expect(component.screenXl).toBeFalse();
  });

  it('debe #screenXl volver a asignarse luego del evento #onResize()', () => {
    let mockWindowInnerWith = 100;
    component.ifScreenXl(mockWindowInnerWith);
    expect(component.screenXl).toBeFalse();
    window.dispatchEvent(new Event('resize'));
    mockWindowInnerWith = 1200;
    component.ifScreenXl(mockWindowInnerWith);
    expect(component.screenXl).toBeTruthy();
  });

  it("debe #ifWindoEstaEntre() retornar true si windowPageYOffset se encuentra entre el elemento de arriba y el elemento de abajo", () => {
    let mockWindowPageYOffset: number = 125;
    let mockElemDeArribaOffsetTop: number = 45;
    let mockElementoDeAbajoOffsetTop: number = 400;
    let resultado: boolean = false;
    
    resultado = component.ifWindowEstaEntre(mockWindowPageYOffset, mockElemDeArribaOffsetTop, mockElementoDeAbajoOffsetTop);

    expect(resultado).toBeTruthy();
  });

  it("debe #ifWindoEstaEntre() retornar true si windowPageYOffset es mayor que el elemento de arriba", () => {
    let mockWindowPageYOffset: number = 125;
    let mockElemDeArribaOffsetTop: number = 45;
    let resultado: boolean = false;
    
    resultado = component.ifWindowEstaEntre(mockWindowPageYOffset, mockElemDeArribaOffsetTop);

    expect(resultado).toBeTruthy();
  });

  it("debe #ifWindoEstaEntre() retornar false si windowPageYOffset no se encuentra entre el elemento de arriba y el elemento de abajo", () => {
    let mockWindowPageYOffset: number = 500;
    let mockElemDeArribaOffsetTop: number = 45;
    let mockElementoDeAbajoOffsetTop: number = 400;
    let resultado: boolean;
    
    resultado = component.ifWindowEstaEntre(mockWindowPageYOffset, mockElemDeArribaOffsetTop, mockElementoDeAbajoOffsetTop);

    expect(resultado).toBeFalsy();
  });

  it("debe #ifWindoEstaEntre() retornar false si windowPageYOffset es menor que el elemento de arriba", () => {
    let mockWindowPageYOffset: number = 500;
    let mockElemDeArribaOffsetTop: number = 750;
    let resultado: boolean;
    
    resultado = component.ifWindowEstaEntre(mockWindowPageYOffset, mockElemDeArribaOffsetTop);

    expect(resultado).toBeFalsy();
  });

  it("debe #checkOffsetTop() llamarse luego del evento scroll y cambiar el valor de #currentActiveMenuItem", () => {
    expect(component.currentActiveMenuItem).toBe(0);
    window.dispatchEvent(new Event('scroll'));
    //Configuracion para que sea #currentActiveMenuItem = 1
    window.pageYOffset = 150, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(1);

    //Configuracion para que sea #currentActiveMenuItem = 2
    window.pageYOffset = 700, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(2);

    //Configuracion para que sea #currentActiveMenuItem = 3
    window.pageYOffset = 1600, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(3);
    
    //Configuracion para que sea #currentActiveMenuItem = 4
    window.pageYOffset = 2570, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(4);

    //Configuracion para que sea #currentActiveMenuItem = 5
    window.pageYOffset = 4000, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(5);

    //Configuracion para que sea #currentActiveMenuItem = 0
    window.pageYOffset = 20, component.heroOffset = 41, component.aboutOffset = 656, component.habOffset = 1541, component.portfolioOffset = 2540, component.contactoOffset = 3813;
    component.checkOffsetTop();
    fixture.detectChanges();
    expect(component.currentActiveMenuItem).toBe(0);
  })

});
