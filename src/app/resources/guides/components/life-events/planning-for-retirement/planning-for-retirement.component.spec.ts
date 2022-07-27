import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningForRetirementComponent } from './planning-for-retirement.component';

describe('PlanningForRetirementComponent', () => {
  let component: PlanningForRetirementComponent;
  let fixture: ComponentFixture<PlanningForRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningForRetirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningForRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
