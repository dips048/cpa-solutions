import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInCompromiseComponent } from './offer-in-compromise.component';

describe('OfferInCompromiseComponent', () => {
  let component: OfferInCompromiseComponent;
  let fixture: ComponentFixture<OfferInCompromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferInCompromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferInCompromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
