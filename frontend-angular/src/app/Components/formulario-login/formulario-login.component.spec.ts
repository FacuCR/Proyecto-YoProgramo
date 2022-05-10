/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioLoginComponent } from './formulario-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('FormularioLoginComponent', () => {
  let component: FormularioLoginComponent;
  let fixture: ComponentFixture<FormularioLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      declarations: [FormularioLoginComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: {
            close: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el FormularioLoginComponent', () => {
    expect(component).toBeTruthy();
  });
});
