import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardocenteComponent } from './creardocente.component';

describe('CreardocenteComponent', () => {
  let component: CreardocenteComponent;
  let fixture: ComponentFixture<CreardocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreardocenteComponent]
    });
    fixture = TestBed.createComponent(CreardocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
