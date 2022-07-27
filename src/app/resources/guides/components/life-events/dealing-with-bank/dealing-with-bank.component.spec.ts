import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealingWithBankComponent } from './dealing-with-bank.component';

describe('DealingWithBankComponent', () => {
  let component: DealingWithBankComponent;
  let fixture: ComponentFixture<DealingWithBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealingWithBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealingWithBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
