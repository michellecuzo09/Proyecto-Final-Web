import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarJornadaModalComponent } from './actualizar-jornada-modal.component';

describe('ActualizarJornadaModalComponent', () => {
  let component: ActualizarJornadaModalComponent;
  let fixture: ComponentFixture<ActualizarJornadaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarJornadaModalComponent]
    });
    fixture = TestBed.createComponent(ActualizarJornadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
