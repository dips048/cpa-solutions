import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanyTaxRuleFGComponent } from './nany-tax-rule-fg.component';

describe('NanyTaxRuleFGComponent', () => {
  let component: NanyTaxRuleFGComponent;
  let fixture: ComponentFixture<NanyTaxRuleFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanyTaxRuleFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanyTaxRuleFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
