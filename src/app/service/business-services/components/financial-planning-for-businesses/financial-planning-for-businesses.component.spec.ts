import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPlanningForBusinessesComponent } from './financial-planning-for-businesses.component';

describe('FinancialPlanningForBusinessesComponent', () => {
  let component: FinancialPlanningForBusinessesComponent;
  let fixture: ComponentFixture<FinancialPlanningForBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialPlanningForBusinessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPlanningForBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
