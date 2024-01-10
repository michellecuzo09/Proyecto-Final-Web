import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDocenteComponent } from './actividades-docente.component';

describe('ActividadesDocenteComponent', () => {
  let component: ActividadesDocenteComponent;
  let fixture: ComponentFixture<ActividadesDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesDocenteComponent]
    });
    fixture = TestBed.createComponent(ActividadesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
