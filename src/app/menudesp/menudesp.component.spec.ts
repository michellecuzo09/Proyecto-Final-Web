import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudespComponent } from './menudesp.component';

describe('MenudespComponent', () => {
  let component: MenudespComponent;
  let fixture: ComponentFixture<MenudespComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenudespComponent]
    });
    fixture = TestBed.createComponent(MenudespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
