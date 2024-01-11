import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTituloComponent } from './crear-titulo.component';

describe('CrearTituloComponent', () => {
  let component: CrearTituloComponent;
  let fixture: ComponentFixture<CrearTituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTituloComponent]
    });
    fixture = TestBed.createComponent(CrearTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
