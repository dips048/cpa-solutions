import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPlanningComponent } from './tax-planning.component';

describe('TaxPlanningComponent', () => {
  let component: TaxPlanningComponent;
  let fixture: ComponentFixture<TaxPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
