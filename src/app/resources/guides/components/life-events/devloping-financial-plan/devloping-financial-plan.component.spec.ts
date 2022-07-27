import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopingFinancialPlanComponent } from './devloping-financial-plan.component';

describe('DevlopingFinancialPlanComponent', () => {
  let component: DevlopingFinancialPlanComponent;
  let fixture: ComponentFixture<DevlopingFinancialPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopingFinancialPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopingFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
