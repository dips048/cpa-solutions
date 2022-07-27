import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsFAQComponent } from './credit-cards-faq.component';

describe('CreditCardsFAQComponent', () => {
  let component: CreditCardsFAQComponent;
  let fixture: ComponentFixture<CreditCardsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
