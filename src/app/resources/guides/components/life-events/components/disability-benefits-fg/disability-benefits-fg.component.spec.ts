import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityBenefitsFGComponent } from './disability-benefits-fg.component';

describe('DisabilityBenefitsFGComponent', () => {
  let component: DisabilityBenefitsFGComponent;
  let fixture: ComponentFixture<DisabilityBenefitsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabilityBenefitsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityBenefitsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
