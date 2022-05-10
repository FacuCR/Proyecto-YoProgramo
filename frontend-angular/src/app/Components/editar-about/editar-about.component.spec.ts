import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditarAboutComponent } from './editar-about.component';

describe('EditarAboutComponent', () => {
  let component: EditarAboutComponent;
  let fixture: ComponentFixture<EditarAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAboutComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
