import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProyectoComponent } from './add-proyecto.component';

describe('AddProyectoComponent', () => {
  let component: AddProyectoComponent;
  let fixture: ComponentFixture<AddProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProyectoComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
