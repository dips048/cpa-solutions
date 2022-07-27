import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermInsuranceFAQComponent } from './long-term-insurance-faq.component';

describe('LongTermInsuranceFAQComponent', () => {
  let component: LongTermInsuranceFAQComponent;
  let fixture: ComponentFixture<LongTermInsuranceFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTermInsuranceFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermInsuranceFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
