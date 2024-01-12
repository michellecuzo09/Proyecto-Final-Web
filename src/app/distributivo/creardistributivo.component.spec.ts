import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardistributivoComponent } from './creardistributivo.component';

describe('CreardistributivoComponent', () => {
  let component: CreardistributivoComponent;
  let fixture: ComponentFixture<CreardistributivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreardistributivoComponent]
    });
    fixture = TestBed.createComponent(CreardistributivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
