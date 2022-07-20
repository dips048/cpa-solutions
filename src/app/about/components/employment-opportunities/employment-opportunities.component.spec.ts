import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentOpportunitiesComponent } from './employment-opportunities.component';

describe('EmploymentOpportunitiesComponent', () => {
  let component: EmploymentOpportunitiesComponent;
  let fixture: ComponentFixture<EmploymentOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
