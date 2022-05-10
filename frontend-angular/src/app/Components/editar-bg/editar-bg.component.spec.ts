import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditarBgComponent } from './editar-bg.component';

describe('EditarBgComponent', () => {
  let component: EditarBgComponent;
  let fixture: ComponentFixture<EditarBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarBgComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
