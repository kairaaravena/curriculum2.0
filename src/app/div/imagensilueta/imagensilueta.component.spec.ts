import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensiluetaComponent } from './imagensilueta.component';

describe('ImagensiluetaComponent', () => {
  let component: ImagensiluetaComponent;
  let fixture: ComponentFixture<ImagensiluetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagensiluetaComponent]
    });
    fixture = TestBed.createComponent(ImagensiluetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
