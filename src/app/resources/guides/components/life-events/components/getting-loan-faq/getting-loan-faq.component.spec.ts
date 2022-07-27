import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingLoanFAQComponent } from './getting-loan-faq.component';

describe('GettingLoanFAQComponent', () => {
  let component: GettingLoanFAQComponent;
  let fixture: ComponentFixture<GettingLoanFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingLoanFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingLoanFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
