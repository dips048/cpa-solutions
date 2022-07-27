import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementDistributionFAQComponent } from './retirement-distribution-faq.component';

describe('RetirementDistributionFAQComponent', () => {
  let component: RetirementDistributionFAQComponent;
  let fixture: ComponentFixture<RetirementDistributionFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementDistributionFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementDistributionFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
