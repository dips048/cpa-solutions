import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorsBenefitsFGComponent } from './survivors-benefits-fg.component';

describe('SurvivorsBenefitsFGComponent', () => {
  let component: SurvivorsBenefitsFGComponent;
  let fixture: ComponentFixture<SurvivorsBenefitsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivorsBenefitsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorsBenefitsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
