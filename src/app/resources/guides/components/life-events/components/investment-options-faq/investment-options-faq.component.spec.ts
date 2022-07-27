import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOptionsFAQComponent } from './investment-options-faq.component';

describe('InvestmentOptionsFAQComponent', () => {
  let component: InvestmentOptionsFAQComponent;
  let fixture: ComponentFixture<InvestmentOptionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentOptionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentOptionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
