import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementDistributionFGWhenComponent } from './retirement-distribution-fg-when.component';

describe('RetirementDistributionFGWhenComponent', () => {
  let component: RetirementDistributionFGWhenComponent;
  let fixture: ComponentFixture<RetirementDistributionFGWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementDistributionFGWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementDistributionFGWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
