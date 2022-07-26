import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxStrategiesIndividualsComponent } from './tax-strategies-individuals.component';

describe('TaxStrategiesIndividualsComponent', () => {
  let component: TaxStrategiesIndividualsComponent;
  let fixture: ComponentFixture<TaxStrategiesIndividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxStrategiesIndividualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxStrategiesIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
