import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarProyectoComponent } from './borrar-proyecto.component';

describe('BorrarProyectoComponent', () => {
  let component: BorrarProyectoComponent;
  let fixture: ComponentFixture<BorrarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
