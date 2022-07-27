import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingQuestionsFAQComponent } from './financing-questions-faq.component';

describe('FinancingQuestionsFAQComponent', () => {
  let component: FinancingQuestionsFAQComponent;
  let fixture: ComponentFixture<FinancingQuestionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancingQuestionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingQuestionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
