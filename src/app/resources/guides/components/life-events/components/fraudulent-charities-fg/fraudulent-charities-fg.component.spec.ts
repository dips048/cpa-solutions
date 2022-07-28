import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudulentCharitiesFGComponent } from './fraudulent-charities-fg.component';

describe('FraudulentCharitiesFGComponent', () => {
  let component: FraudulentCharitiesFGComponent;
  let fixture: ComponentFixture<FraudulentCharitiesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudulentCharitiesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudulentCharitiesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
