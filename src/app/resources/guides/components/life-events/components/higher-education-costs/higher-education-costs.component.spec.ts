import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherEducationCostsComponent } from './higher-education-costs.component';

describe('HigherEducationCostsComponent', () => {
  let component: HigherEducationCostsComponent;
  let fixture: ComponentFixture<HigherEducationCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherEducationCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherEducationCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
