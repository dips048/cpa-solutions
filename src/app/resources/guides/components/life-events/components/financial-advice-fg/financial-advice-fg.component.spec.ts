import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAdviceFGComponent } from './financial-advice-fg.component';

describe('FinancialAdviceFGComponent', () => {
  let component: FinancialAdviceFGComponent;
  let fixture: ComponentFixture<FinancialAdviceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialAdviceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAdviceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
