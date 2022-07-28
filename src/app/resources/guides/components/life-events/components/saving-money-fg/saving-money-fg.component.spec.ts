import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingMoneyFGComponent } from './saving-money-fg.component';

describe('SavingMoneyFGComponent', () => {
  let component: SavingMoneyFGComponent;
  let fixture: ComponentFixture<SavingMoneyFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingMoneyFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingMoneyFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
