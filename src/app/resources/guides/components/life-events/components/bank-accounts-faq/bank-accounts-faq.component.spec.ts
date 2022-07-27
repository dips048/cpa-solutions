import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsFAQComponent } from './bank-accounts-faq.component';

describe('BankAccountsFAQComponent', () => {
  let component: BankAccountsFAQComponent;
  let fixture: ComponentFixture<BankAccountsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
