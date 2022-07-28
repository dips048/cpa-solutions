import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagesFAQComponent } from './mortgages-faq.component';

describe('MortgagesFAQComponent', () => {
  let component: MortgagesFAQComponent;
  let fixture: ComponentFixture<MortgagesFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgagesFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
