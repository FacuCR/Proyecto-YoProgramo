import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddRedSocialComponent } from './add-red-social.component';

describe('AddRedSocialComponent', () => {
  let component: AddRedSocialComponent;
  let fixture: ComponentFixture<AddRedSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRedSocialComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRedSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
