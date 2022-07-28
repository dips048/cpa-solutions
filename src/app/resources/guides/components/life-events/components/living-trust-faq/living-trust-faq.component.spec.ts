import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingTrustFAQComponent } from './living-trust-faq.component';

describe('LivingTrustFAQComponent', () => {
  let component: LivingTrustFAQComponent;
  let fixture: ComponentFixture<LivingTrustFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingTrustFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingTrustFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
