import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCaredRightsComponent } from './credit-cared-rights.component';

describe('CreditCaredRightsComponent', () => {
  let component: CreditCaredRightsComponent;
  let fixture: ComponentFixture<CreditCaredRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCaredRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCaredRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
