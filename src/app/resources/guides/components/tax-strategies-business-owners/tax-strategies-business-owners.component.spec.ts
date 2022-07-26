import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxStrategiesBusinessOwnersComponent } from './tax-strategies-business-owners.component';

describe('TaxStrategiesBusinessOwnersComponent', () => {
  let component: TaxStrategiesBusinessOwnersComponent;
  let fixture: ComponentFixture<TaxStrategiesBusinessOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxStrategiesBusinessOwnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxStrategiesBusinessOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
