import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanQuestionsFAQComponent } from './loan-questions-faq.component';

describe('LoanQuestionsFAQComponent', () => {
  let component: LoanQuestionsFAQComponent;
  let fixture: ComponentFixture<LoanQuestionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanQuestionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanQuestionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
