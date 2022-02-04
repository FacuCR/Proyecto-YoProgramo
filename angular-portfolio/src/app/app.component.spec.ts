import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse la app', () => {
    expect(app).toBeTruthy();
  });

  it('debe llamarse #onScroll() luego del evento scroll y #activarBackToTop cambiar su valor', () => {
    expect(app.activarBackToTop).toBe(false, 'inicializa en false');

    window.dispatchEvent(new Event('scroll'));
    window.scrollY = 120;
    app.onScroll();
    fixture.detectChanges();
    expect(app.activarBackToTop).toBe(true, 'cambia a true si el scroll supera los 100');

    window.dispatchEvent(new Event('scroll'));
    window.scrollY = 10;
    app.onScroll();
    fixture.detectChanges();
    expect(app.activarBackToTop).toBe(false, 'cambia a false si el scroll es menor a los 100');
  })

});
