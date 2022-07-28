import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePlanningFGComponent } from './estate-planning-fg.component';

describe('EstatePlanningFGComponent', () => {
  let component: EstatePlanningFGComponent;
  let fixture: ComponentFixture<EstatePlanningFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatePlanningFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatePlanningFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
