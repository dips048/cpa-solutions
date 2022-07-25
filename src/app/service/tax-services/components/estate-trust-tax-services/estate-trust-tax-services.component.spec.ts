import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateTrustTaxServicesComponent } from './estate-trust-tax-services.component';

describe('EstateTrustTaxServicesComponent', () => {
  let component: EstateTrustTaxServicesComponent;
  let fixture: ComponentFixture<EstateTrustTaxServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateTrustTaxServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateTrustTaxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
