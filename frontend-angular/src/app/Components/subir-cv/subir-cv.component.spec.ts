import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SubirCvComponent } from './subir-cv.component';

describe('SubirCvComponent', () => {
  let component: SubirCvComponent;
  let fixture: ComponentFixture<SubirCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubirCvComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
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
