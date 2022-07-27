import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityInsuranceFGComponent } from './disability-insurance-fg.component';

describe('DisabilityInsuranceFGComponent', () => {
  let component: DisabilityInsuranceFGComponent;
  let fixture: ComponentFixture<DisabilityInsuranceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilityInsuranceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityInsuranceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
