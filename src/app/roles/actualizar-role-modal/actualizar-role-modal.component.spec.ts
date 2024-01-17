import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRoleComponent } from './actualizar-role-modal.component';

describe('CrearRoleModalComponent', () => {
  let component: ActualizarRoleComponent;
  let fixture: ComponentFixture<ActualizarRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarRoleComponent]
    });
    fixture = TestBed.createComponent(ActualizarRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
