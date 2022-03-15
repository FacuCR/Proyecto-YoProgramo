import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBtnComponent } from './editar-btn.component';

describe('EditarBtnComponent', () => {
  let component: EditarBtnComponent;
  let fixture: ComponentFixture<EditarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
