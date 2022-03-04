import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarBtnComponent } from './borrar-btn.component';

describe('BorrarBtnComponent', () => {
  let component: BorrarBtnComponent;
  let fixture: ComponentFixture<BorrarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
