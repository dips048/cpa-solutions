import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingInsuranceComponent } from './buying-insurance.component';

describe('BuyingInsuranceComponent', () => {
  let component: BuyingInsuranceComponent;
  let fixture: ComponentFixture<BuyingInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
