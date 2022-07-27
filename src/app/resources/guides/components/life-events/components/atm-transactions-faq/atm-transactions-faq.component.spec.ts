import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMTransactionsFAQComponent } from './atm-transactions-faq.component';

describe('ATMTransactionsFAQComponent', () => {
  let component: ATMTransactionsFAQComponent;
  let fixture: ComponentFixture<ATMTransactionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATMTransactionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATMTransactionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
