import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGradoModalComponent } from './actualizar-grado-modal.component';

describe('ActualizarGradoModalComponent', () => {
  let component: ActualizarGradoModalComponent;
  let fixture: ComponentFixture<ActualizarGradoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarGradoModalComponent]
    });
    fixture = TestBed.createComponent(ActualizarGradoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
