import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCvBtnComponent } from './subir-cv-btn.component';

describe('SubirCvBtnComponent', () => {
  let component: SubirCvBtnComponent;
  let fixture: ComponentFixture<SubirCvBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirCvBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirCvBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
