import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoContratoComponent } from './crear-tipo-contrato.component';

describe('CrearTipoContratoComponent', () => {
  let component: CrearTipoContratoComponent;
  let fixture: ComponentFixture<CrearTipoContratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTipoContratoComponent]
    });
    fixture = TestBed.createComponent(CrearTipoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
