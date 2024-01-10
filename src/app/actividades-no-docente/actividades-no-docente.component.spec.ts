import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesNoDocenteComponent } from './actividades-no-docente.component';

describe('ActividadesNoDocenteComponent', () => {
  let component: ActividadesNoDocenteComponent;
  let fixture: ComponentFixture<ActividadesNoDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesNoDocenteComponent]
    });
    fixture = TestBed.createComponent(ActividadesNoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
