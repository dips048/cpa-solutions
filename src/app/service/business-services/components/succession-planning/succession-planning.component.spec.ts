import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessionPlanningComponent } from './succession-planning.component';

describe('SuccessionPlanningComponent', () => {
  let component: SuccessionPlanningComponent;
  let fixture: ComponentFixture<SuccessionPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessionPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessionPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
