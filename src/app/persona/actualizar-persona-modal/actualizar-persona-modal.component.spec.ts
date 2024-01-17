import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPersonaModalComponent } from './actualizar-persona-modal.component';

describe('ActualizarPersonaModalComponent', () => {
  let component: ActualizarPersonaModalComponent;
  let fixture: ComponentFixture<ActualizarPersonaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPersonaModalComponent]
    });
    fixture = TestBed.createComponent(ActualizarPersonaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
