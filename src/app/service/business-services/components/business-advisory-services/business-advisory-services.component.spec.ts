import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvisoryServicesComponent } from './business-advisory-services.component';

describe('BusinessAdvisoryServicesComponent', () => {
  let component: BusinessAdvisoryServicesComponent;
  let fixture: ComponentFixture<BusinessAdvisoryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAdvisoryServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdvisoryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
