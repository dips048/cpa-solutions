import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermInsuranceFGComponent } from './long-term-insurance-fg.component';

describe('LongTermInsuranceFGComponent', () => {
  let component: LongTermInsuranceFGComponent;
  let fixture: ComponentFixture<LongTermInsuranceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTermInsuranceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermInsuranceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
