import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGradoOcupacionalComponent } from './crear-grado-ocupacional.component';

describe('CrearGradoOcupacionalComponent', () => {
  let component: CrearGradoOcupacionalComponent;
  let fixture: ComponentFixture<CrearGradoOcupacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearGradoOcupacionalComponent]
    });
    fixture = TestBed.createComponent(CrearGradoOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
