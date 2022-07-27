import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportsFAQComponent } from './credit-reports-faq.component';

describe('CreditReportsFAQComponent', () => {
  let component: CreditReportsFAQComponent;
  let fixture: ComponentFixture<CreditReportsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
