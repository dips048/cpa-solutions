import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingLoanComponent } from './getting-loan.component';

describe('GettingLoanComponent', () => {
  let component: GettingLoanComponent;
  let fixture: ComponentFixture<GettingLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
