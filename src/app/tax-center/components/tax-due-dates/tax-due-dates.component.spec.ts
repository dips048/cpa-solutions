import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDueDatesComponent } from './tax-due-dates.component';

describe('TaxDueDatesComponent', () => {
  let component: TaxDueDatesComponent;
  let fixture: ComponentFixture<TaxDueDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDueDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDueDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
