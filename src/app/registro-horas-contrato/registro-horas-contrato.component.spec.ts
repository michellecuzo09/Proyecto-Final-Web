import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHorasContratoComponent } from './registro-horas-contrato.component';

describe('RegistroHorasContratoComponent', () => {
  let component: RegistroHorasContratoComponent;
  let fixture: ComponentFixture<RegistroHorasContratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHorasContratoComponent]
    });
    fixture = TestBed.createComponent(RegistroHorasContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
