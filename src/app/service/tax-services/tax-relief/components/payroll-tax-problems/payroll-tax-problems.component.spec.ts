import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTaxProblemsComponent } from './payroll-tax-problems.component';

describe('PayrollTaxProblemsComponent', () => {
  let component: PayrollTaxProblemsComponent;
  let fixture: ComponentFixture<PayrollTaxProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTaxProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTaxProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
