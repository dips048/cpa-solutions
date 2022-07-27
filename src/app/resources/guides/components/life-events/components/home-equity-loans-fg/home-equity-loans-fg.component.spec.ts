import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEquityLoansFGComponent } from './home-equity-loans-fg.component';

describe('HomeEquityLoansFGComponent', () => {
  let component: HomeEquityLoansFGComponent;
  let fixture: ComponentFixture<HomeEquityLoansFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEquityLoansFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEquityLoansFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
