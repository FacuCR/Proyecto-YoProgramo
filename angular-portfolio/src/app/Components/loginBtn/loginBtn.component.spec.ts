/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginBtnComponent } from './loginBtn.component';

describe('LoginBtnComponent', () => {
  let component: LoginBtnComponent;
  let fixture: ComponentFixture<LoginBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
