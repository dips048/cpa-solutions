import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentStrategiesComponent } from './investment-strategies.component';

describe('InvestmentStrategiesComponent', () => {
  let component: InvestmentStrategiesComponent;
  let fixture: ComponentFixture<InvestmentStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentStrategiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
