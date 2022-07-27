import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopingFinancialPlanFGComponent } from './devloping-financial-plan-fg.component';

describe('DevlopingFinancialPlanFGComponent', () => {
  let component: DevlopingFinancialPlanFGComponent;
  let fixture: ComponentFixture<DevlopingFinancialPlanFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopingFinancialPlanFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopingFinancialPlanFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
