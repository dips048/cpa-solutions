import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTroublesFAQComponent } from './financial-troubles-faq.component';

describe('FinancialTroublesFAQComponent', () => {
  let component: FinancialTroublesFAQComponent;
  let fixture: ComponentFixture<FinancialTroublesFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialTroublesFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTroublesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
