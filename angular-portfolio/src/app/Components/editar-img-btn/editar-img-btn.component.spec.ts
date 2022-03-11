import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarImgBtnComponent } from './editar-img-btn.component';

describe('EditarImgBtnComponent', () => {
  let component: EditarImgBtnComponent;
  let fixture: ComponentFixture<EditarImgBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarImgBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarImgBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
