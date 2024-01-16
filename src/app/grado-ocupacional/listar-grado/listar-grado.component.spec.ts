import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGradoComponent } from './listar-grado.component';

describe('ListarGradoComponent', () => {
  let component: ListarGradoComponent;
  let fixture: ComponentFixture<ListarGradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarGradoComponent]
    });
    fixture = TestBed.createComponent(ListarGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
