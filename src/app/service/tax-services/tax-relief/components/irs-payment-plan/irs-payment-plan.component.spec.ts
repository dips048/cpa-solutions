import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSPaymentPlanComponent } from './irs-payment-plan.component';

describe('IRSPaymentPlanComponent', () => {
  let component: IRSPaymentPlanComponent;
  let fixture: ComponentFixture<IRSPaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSPaymentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSPaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
