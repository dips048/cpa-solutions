import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementTipsFGComponent } from './retirement-tips-fg.component';

describe('RetirementTipsFGComponent', () => {
  let component: RetirementTipsFGComponent;
  let fixture: ComponentFixture<RetirementTipsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementTipsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementTipsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
