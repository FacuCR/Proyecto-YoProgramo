import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditarFotoPerfilComponent } from './editar-foto-perfil.component';

describe('EditarFotoPerfilComponent', () => {
  let component: EditarFotoPerfilComponent;
  let fixture: ComponentFixture<EditarFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarFotoPerfilComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientTestingModule],
    }).compileComponents();
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
