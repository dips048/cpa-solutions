import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateDeductionFGComponent } from './real-estate-deduction-fg.component';

describe('RealEstateDeductionFGComponent', () => {
  let component: RealEstateDeductionFGComponent;
  let fixture: ComponentFixture<RealEstateDeductionFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateDeductionFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateDeductionFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
