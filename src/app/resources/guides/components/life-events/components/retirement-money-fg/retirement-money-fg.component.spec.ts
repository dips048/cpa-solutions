import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementMoneyFGComponent } from './retirement-money-fg.component';

describe('RetirementMoneyFGComponent', () => {
  let component: RetirementMoneyFGComponent;
  let fixture: ComponentFixture<RetirementMoneyFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementMoneyFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementMoneyFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
