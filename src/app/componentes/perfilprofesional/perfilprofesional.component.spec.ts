import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilprofesionalComponent } from './perfilprofesional.component';

describe('PerfilprofesionalComponent', () => {
  let component: PerfilprofesionalComponent;
  let fixture: ComponentFixture<PerfilprofesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilprofesionalComponent]
    });
    fixture = TestBed.createComponent(PerfilprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
