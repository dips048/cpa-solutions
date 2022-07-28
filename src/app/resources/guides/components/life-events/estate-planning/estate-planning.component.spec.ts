import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePlanningComponent } from './estate-planning.component';

describe('EstatePlanningComponent', () => {
  let component: EstatePlanningComponent;
  let fixture: ComponentFixture<EstatePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatePlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
