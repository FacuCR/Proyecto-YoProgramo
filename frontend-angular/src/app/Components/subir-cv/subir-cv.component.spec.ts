import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCvComponent } from './subir-cv.component';

describe('SubirCvComponent', () => {
  let component: SubirCvComponent;
  let fixture: ComponentFixture<SubirCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
