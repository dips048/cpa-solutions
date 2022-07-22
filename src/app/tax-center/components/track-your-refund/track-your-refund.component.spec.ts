import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackYourRefundComponent } from './track-your-refund.component';

describe('TrackYourRefundComponent', () => {
  let component: TrackYourRefundComponent;
  let fixture: ComponentFixture<TrackYourRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackYourRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackYourRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
