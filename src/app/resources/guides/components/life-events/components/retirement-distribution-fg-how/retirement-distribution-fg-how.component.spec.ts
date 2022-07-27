import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementDistributionFGHowComponent } from './retirement-distribution-fg-how.component';

describe('RetirementDistributionFGHowComponent', () => {
  let component: RetirementDistributionFGHowComponent;
  let fixture: ComponentFixture<RetirementDistributionFGHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementDistributionFGHowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementDistributionFGHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
