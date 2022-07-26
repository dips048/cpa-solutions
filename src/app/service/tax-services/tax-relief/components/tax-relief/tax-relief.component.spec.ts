import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReliefComponent } from './tax-relief.component';

describe('TaxReliefComponent', () => {
  let component: TaxReliefComponent;
  let fixture: ComponentFixture<TaxReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxReliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
