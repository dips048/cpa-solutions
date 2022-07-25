import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFinancingComponent } from './bank-financing.component';

describe('BankFinancingComponent', () => {
  let component: BankFinancingComponent;
  let fixture: ComponentFixture<BankFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankFinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
