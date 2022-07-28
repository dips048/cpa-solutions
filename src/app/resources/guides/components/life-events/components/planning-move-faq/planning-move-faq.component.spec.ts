import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningMoveFAQComponent } from './planning-move-faq.component';

describe('PlanningMoveFAQComponent', () => {
  let component: PlanningMoveFAQComponent;
  let fixture: ComponentFixture<PlanningMoveFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningMoveFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningMoveFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
