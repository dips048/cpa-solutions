import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableDeductionsFAQComponent } from './charitable-deductions-faq.component';

describe('CharitableDeductionsFAQComponent', () => {
  let component: CharitableDeductionsFAQComponent;
  let fixture: ComponentFixture<CharitableDeductionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableDeductionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableDeductionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
