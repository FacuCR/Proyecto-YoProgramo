import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFotoPerfilComponent } from './editar-foto-perfil.component';

describe('EditarFotoPerfilComponent', () => {
  let component: EditarFotoPerfilComponent;
  let fixture: ComponentFixture<EditarFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFotoPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
