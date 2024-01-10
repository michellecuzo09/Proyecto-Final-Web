import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoComponent } from './distributivo.component';

describe('DistributivoComponent', () => {
  let component: DistributivoComponent;
  let fixture: ComponentFixture<DistributivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributivoComponent]
    });
    fixture = TestBed.createComponent(DistributivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
