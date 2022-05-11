import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2022-09-09'));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it('debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });


  it('edad() debe devolver la edad correcta, teniendo en cuenta que el mockup de Date.now es 2022-09-09', () => {
    let fechaNac: Date = new Date('1997-04-24');
    let resultado: number = component.edad(fechaNac);
    expect(resultado).withContext('si nacio el 04 del 97 debe retornar 25').toBe(25);

    fechaNac = new Date('1972-04-09');
    resultado = component.edad(fechaNac);
    expect(resultado).withContext('si nacio el 04 del 72 debe retornar 50').toBe(50);

    fechaNac = new Date('2020-01-01');
    resultado = component.edad(fechaNac);
    expect(resultado).withContext('si nacio el 01 del 20 debe retornar 2').toBe(2);
  })
  
});
