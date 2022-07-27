import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceFAQComponent } from './car-insurance-faq.component';

describe('CarInsuranceFAQComponent', () => {
  let component: CarInsuranceFAQComponent;
  let fixture: ComponentFixture<CarInsuranceFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInsuranceFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
