import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsReviewsCompilationsComponent } from './audits-reviews-compilations.component';

describe('AuditsReviewsCompilationsComponent', () => {
  let component: AuditsReviewsCompilationsComponent;
  let fixture: ComponentFixture<AuditsReviewsCompilationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditsReviewsCompilationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsReviewsCompilationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
