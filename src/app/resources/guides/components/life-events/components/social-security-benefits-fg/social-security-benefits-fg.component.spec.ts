import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSecurityBenefitsFGComponent } from './social-security-benefits-fg.component';

describe('SocialSecurityBenefitsFGComponent', () => {
  let component: SocialSecurityBenefitsFGComponent;
  let fixture: ComponentFixture<SocialSecurityBenefitsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSecurityBenefitsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSecurityBenefitsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
