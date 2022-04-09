import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabilidadComponent } from './add-habilidad.component';

describe('AddHabilidadComponent', () => {
  let component: AddHabilidadComponent;
  let fixture: ComponentFixture<AddHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
