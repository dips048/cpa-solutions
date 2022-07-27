import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceFGComponent } from './car-insurance-fg.component';

describe('CarInsuranceFGComponent', () => {
  let component: CarInsuranceFGComponent;
  let fixture: ComponentFixture<CarInsuranceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInsuranceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
