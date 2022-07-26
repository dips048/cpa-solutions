import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFiledTaxReturnsComponent } from './non-filed-tax-returns.component';

describe('NonFiledTaxReturnsComponent', () => {
  let component: NonFiledTaxReturnsComponent;
  let fixture: ComponentFixture<NonFiledTaxReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonFiledTaxReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFiledTaxReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
