import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopingFinancialPlanFAQComponent } from './devloping-financial-plan-faq.component';

describe('DevlopingFinancialPlanFAQComponent', () => {
  let component: DevlopingFinancialPlanFAQComponent;
  let fixture: ComponentFixture<DevlopingFinancialPlanFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopingFinancialPlanFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopingFinancialPlanFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
