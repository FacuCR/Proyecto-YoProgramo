import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRedesComponent } from './editar-redes.component';

describe('EditarRedesComponent', () => {
  let component: EditarRedesComponent;
  let fixture: ComponentFixture<EditarRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
