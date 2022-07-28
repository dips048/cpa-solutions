import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingHomeFAQComponent } from './buying-home-faq.component';

describe('BuyingHomeFAQComponent', () => {
  let component: BuyingHomeFAQComponent;
  let fixture: ComponentFixture<BuyingHomeFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingHomeFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingHomeFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
