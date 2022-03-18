import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRedSocialComponent } from './editar-red-social.component';

describe('EditarRedSocialComponent', () => {
  let component: EditarRedSocialComponent;
  let fixture: ComponentFixture<EditarRedSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRedSocialComponent ]
    })
    .compileComponents();
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
