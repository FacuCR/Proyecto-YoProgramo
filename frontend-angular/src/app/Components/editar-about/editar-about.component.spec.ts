import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAboutComponent } from './editar-about.component';

describe('EditarAboutComponent', () => {
  let component: EditarAboutComponent;
  let fixture: ComponentFixture<EditarAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
