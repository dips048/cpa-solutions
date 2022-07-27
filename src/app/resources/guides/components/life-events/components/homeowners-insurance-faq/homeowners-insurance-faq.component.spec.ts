import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownersInsuranceFAQComponent } from './homeowners-insurance-faq.component';

describe('HomeownersInsuranceFAQComponent', () => {
  let component: HomeownersInsuranceFAQComponent;
  let fixture: ComponentFixture<HomeownersInsuranceFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownersInsuranceFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownersInsuranceFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
