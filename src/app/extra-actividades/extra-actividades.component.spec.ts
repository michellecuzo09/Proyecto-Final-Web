import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActividadesComponent } from './extra-actividades.component';

describe('ExtraActividadesComponent', () => {
  let component: ExtraActividadesComponent;
  let fixture: ComponentFixture<ExtraActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraActividadesComponent]
    });
    fixture = TestBed.createComponent(ExtraActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
