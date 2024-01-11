import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJornadaComponent } from './listar-jornada.component';

describe('ListarJornadaComponent', () => {
  let component: ListarJornadaComponent;
  let fixture: ComponentFixture<ListarJornadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarJornadaComponent]
    });
    fixture = TestBed.createComponent(ListarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
