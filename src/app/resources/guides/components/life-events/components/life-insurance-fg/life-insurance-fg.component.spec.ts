import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceFGComponent } from './life-insurance-fg.component';

describe('LifeInsuranceFGComponent', () => {
  let component: LifeInsuranceFGComponent;
  let fixture: ComponentFixture<LifeInsuranceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInsuranceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuranceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
