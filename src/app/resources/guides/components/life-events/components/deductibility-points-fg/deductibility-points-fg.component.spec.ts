import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductibilityPointsFGComponent } from './deductibility-points-fg.component';

describe('DeductibilityPointsFGComponent', () => {
  let component: DeductibilityPointsFGComponent;
  let fixture: ComponentFixture<DeductibilityPointsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductibilityPointsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductibilityPointsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
