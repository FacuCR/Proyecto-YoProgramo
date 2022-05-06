import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarImagenProyectoComponent } from './editar-imagen-proyecto.component';

describe('EditarImagenProyectoComponent', () => {
  let component: EditarImagenProyectoComponent;
  let fixture: ComponentFixture<EditarImagenProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarImagenProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarImagenProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
