import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityInsuranceFAQComponent } from './disability-insurance-faq.component';

describe('DisabilityInsuranceFAQComponent', () => {
  let component: DisabilityInsuranceFAQComponent;
  let fixture: ComponentFixture<DisabilityInsuranceFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilityInsuranceFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityInsuranceFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
