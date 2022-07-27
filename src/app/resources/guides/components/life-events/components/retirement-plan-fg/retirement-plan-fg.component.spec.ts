import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPlanFGComponent } from './retirement-plan-fg.component';

describe('RetirementPlanFGComponent', () => {
  let component: RetirementPlanFGComponent;
  let fixture: ComponentFixture<RetirementPlanFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementPlanFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementPlanFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
