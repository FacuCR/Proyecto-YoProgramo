import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditarRedSocialComponent } from './editar-red-social.component';

describe('EditarRedSocialComponent', () => {
  let component: EditarRedSocialComponent;
  let fixture: ComponentFixture<EditarRedSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarRedSocialComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRedSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
