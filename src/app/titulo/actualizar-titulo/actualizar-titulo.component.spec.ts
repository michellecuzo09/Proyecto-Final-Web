import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTituloComponent } from './actualizar-titulo.component';

describe('ActualizarTituloComponent', () => {
  let component: ActualizarTituloComponent;
  let fixture: ComponentFixture<ActualizarTituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTituloComponent]
    });
    fixture = TestBed.createComponent(ActualizarTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
