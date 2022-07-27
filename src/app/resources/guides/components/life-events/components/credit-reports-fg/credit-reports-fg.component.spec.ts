import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportsFGComponent } from './credit-reports-fg.component';

describe('CreditReportsFGComponent', () => {
  let component: CreditReportsFGComponent;
  let fixture: ComponentFixture<CreditReportsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditReportsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
