import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarHabilidadComponent } from './borrar-habilidad.component';

describe('BorrarHabilidadComponent', () => {
  let component: BorrarHabilidadComponent;
  let fixture: ComponentFixture<BorrarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
