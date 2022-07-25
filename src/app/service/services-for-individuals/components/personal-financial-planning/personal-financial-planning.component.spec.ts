import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFinancialPlanningComponent } from './personal-financial-planning.component';

describe('PersonalFinancialPlanningComponent', () => {
  let component: PersonalFinancialPlanningComponent;
  let fixture: ComponentFixture<PersonalFinancialPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalFinancialPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFinancialPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
