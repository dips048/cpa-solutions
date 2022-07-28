import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableContributionComponent } from './charitable-contribution.component';

describe('CharitableContributionComponent', () => {
  let component: CharitableContributionComponent;
  let fixture: ComponentFixture<CharitableContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
