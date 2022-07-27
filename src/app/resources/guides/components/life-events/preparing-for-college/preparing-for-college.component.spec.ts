import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingForCollegeComponent } from './preparing-for-college.component';

describe('PreparingForCollegeComponent', () => {
  let component: PreparingForCollegeComponent;
  let fixture: ComponentFixture<PreparingForCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparingForCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingForCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
