import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSecurityBenefitsFAQComponent } from './social-security-benefits-faq.component';

describe('SocialSecurityBenefitsFAQComponent', () => {
  let component: SocialSecurityBenefitsFAQComponent;
  let fixture: ComponentFixture<SocialSecurityBenefitsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSecurityBenefitsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSecurityBenefitsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
