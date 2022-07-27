import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsFGComponent } from './bank-accounts-fg.component';

describe('BankAccountsFGComponent', () => {
  let component: BankAccountsFGComponent;
  let fixture: ComponentFixture<BankAccountsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
