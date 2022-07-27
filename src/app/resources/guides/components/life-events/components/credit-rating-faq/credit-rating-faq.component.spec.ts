import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRatingFAQComponent } from './credit-rating-faq.component';

describe('CreditRatingFAQComponent', () => {
  let component: CreditRatingFAQComponent;
  let fixture: ComponentFixture<CreditRatingFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditRatingFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRatingFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
