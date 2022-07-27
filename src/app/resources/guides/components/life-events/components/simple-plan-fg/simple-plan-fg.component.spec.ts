import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePlanFGComponent } from './simple-plan-fg.component';

describe('SimplePlanFGComponent', () => {
  let component: SimplePlanFGComponent;
  let fixture: ComponentFixture<SimplePlanFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePlanFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePlanFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
