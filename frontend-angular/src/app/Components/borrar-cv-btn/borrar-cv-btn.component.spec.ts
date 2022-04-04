import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCvBtnComponent } from './borrar-cv-btn.component';

describe('BorrarCvBtnComponent', () => {
  let component: BorrarCvBtnComponent;
  let fixture: ComponentFixture<BorrarCvBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCvBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCvBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
