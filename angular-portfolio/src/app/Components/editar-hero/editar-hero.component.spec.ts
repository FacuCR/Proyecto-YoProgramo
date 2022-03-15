import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHeroComponent } from './editar-hero.component';

describe('EditarHeroComponent', () => {
  let component: EditarHeroComponent;
  let fixture: ComponentFixture<EditarHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
