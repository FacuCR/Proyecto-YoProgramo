import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBgComponent } from './editar-bg.component';

describe('EditarBgComponent', () => {
  let component: EditarBgComponent;
  let fixture: ComponentFixture<EditarBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBgComponent ]
    })
    .compileComponents();
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
