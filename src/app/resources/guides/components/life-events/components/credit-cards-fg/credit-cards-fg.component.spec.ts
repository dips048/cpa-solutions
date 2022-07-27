import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsFGComponent } from './credit-cards-fg.component';

describe('CreditCardsFGComponent', () => {
  let component: CreditCardsFGComponent;
  let fixture: ComponentFixture<CreditCardsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
