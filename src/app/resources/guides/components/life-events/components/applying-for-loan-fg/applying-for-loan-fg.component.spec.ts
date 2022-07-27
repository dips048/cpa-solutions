import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyingForLoanFGComponent } from './applying-for-loan-fg.component';

describe('ApplyingForLoanFGComponent', () => {
  let component: ApplyingForLoanFGComponent;
  let fixture: ComponentFixture<ApplyingForLoanFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyingForLoanFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyingForLoanFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
