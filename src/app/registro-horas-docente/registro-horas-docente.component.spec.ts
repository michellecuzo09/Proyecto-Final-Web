import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHorasDocenteComponent } from './registro-horas-docente.component';

describe('RegistroHorasDocenteComponent', () => {
  let component: RegistroHorasDocenteComponent;
  let fixture: ComponentFixture<RegistroHorasDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHorasDocenteComponent]
    });
    fixture = TestBed.createComponent(RegistroHorasDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
