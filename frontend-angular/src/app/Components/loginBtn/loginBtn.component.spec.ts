/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginBtnComponent } from './loginBtn.component';
import { MatDialog } from '@angular/material/dialog';
import { FormularioLoginComponent } from '../formulario-login/formulario-login.component';

describe('LoginBtnComponent', () => {
  let component: LoginBtnComponent;
  let fixture: ComponentFixture<LoginBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginBtnComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: {
            open: () => {},
            close: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el LoginBtnComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debe llamar al #dialogRef open()', () => {
    const spyObject = spyOn(component.dialogRef, 'open').and.callThrough();
    component.openDialog();
    expect(spyObject).toHaveBeenCalledWith(FormularioLoginComponent, {
      panelClass: ['animate__animated', 'animate__bounceIn'],
    });
  });
});
