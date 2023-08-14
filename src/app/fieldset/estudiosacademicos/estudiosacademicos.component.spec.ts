import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosacademicosComponent } from './estudiosacademicos.component';

describe('EstudiosacademicosComponent', () => {
  let component: EstudiosacademicosComponent;
  let fixture: ComponentFixture<EstudiosacademicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiosacademicosComponent]
    });
    fixture = TestBed.createComponent(EstudiosacademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
