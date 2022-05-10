import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditarHeroComponent } from './editar-hero.component';

describe('EditarHeroComponent', () => {
  let component: EditarHeroComponent;
  let fixture: ComponentFixture<EditarHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarHeroComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
