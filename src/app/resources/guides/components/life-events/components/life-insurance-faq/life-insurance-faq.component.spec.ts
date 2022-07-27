import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceFAQComponent } from './life-insurance-faq.component';

describe('LifeInsuranceFAQComponent', () => {
  let component: LifeInsuranceFAQComponent;
  let fixture: ComponentFixture<LifeInsuranceFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInsuranceFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuranceFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
