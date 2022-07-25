import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTaxPreparationComponent } from './individual-tax-preparation.component';

describe('IndividualTaxPreparationComponent', () => {
  let component: IndividualTaxPreparationComponent;
  let fixture: ComponentFixture<IndividualTaxPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualTaxPreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTaxPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
