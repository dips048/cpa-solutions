import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingFGComponent } from './budgeting-fg.component';

describe('BudgetingFGComponent', () => {
  let component: BudgetingFGComponent;
  let fixture: ComponentFixture<BudgetingFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetingFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetingFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
