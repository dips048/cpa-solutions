import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductibleExpensesFGComponent } from './deductible-expenses-fg.component';

describe('DeductibleExpensesFGComponent', () => {
  let component: DeductibleExpensesFGComponent;
  let fixture: ComponentFixture<DeductibleExpensesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductibleExpensesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductibleExpensesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
