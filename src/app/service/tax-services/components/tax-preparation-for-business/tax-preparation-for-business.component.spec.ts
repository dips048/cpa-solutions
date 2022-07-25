import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPreparationForBusinessComponent } from './tax-preparation-for-business.component';

describe('TaxPreparationForBusinessComponent', () => {
  let component: TaxPreparationForBusinessComponent;
  let fixture: ComponentFixture<TaxPreparationForBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxPreparationForBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPreparationForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
