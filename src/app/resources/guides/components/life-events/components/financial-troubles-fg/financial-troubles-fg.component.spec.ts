import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTroublesFGComponent } from './financial-troubles-fg.component';

describe('FinancialTroublesFGComponent', () => {
  let component: FinancialTroublesFGComponent;
  let fixture: ComponentFixture<FinancialTroublesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialTroublesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTroublesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
