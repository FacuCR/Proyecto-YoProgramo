import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabilidadComponent } from './editar-habilidad.component';

describe('EditarHabilidadComponent', () => {
  let component: EditarHabilidadComponent;
  let fixture: ComponentFixture<EditarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
