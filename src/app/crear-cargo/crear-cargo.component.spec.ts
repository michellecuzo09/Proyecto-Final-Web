import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCargoComponent } from './crear-cargo.component';

describe('CrearCargoComponent', () => {
  let component: CrearCargoComponent;
  let fixture: ComponentFixture<CrearCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCargoComponent]
    });
    fixture = TestBed.createComponent(CrearCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
