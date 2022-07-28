import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingHomeFAQComponent } from './selling-home-faq.component';

describe('SellingHomeFAQComponent', () => {
  let component: SellingHomeFAQComponent;
  let fixture: ComponentFixture<SellingHomeFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingHomeFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingHomeFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
