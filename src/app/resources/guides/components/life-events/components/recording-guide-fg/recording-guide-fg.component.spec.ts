import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingGuideFGComponent } from './recording-guide-fg.component';

describe('RecordingGuideFGComponent', () => {
  let component: RecordingGuideFGComponent;
  let fixture: ComponentFixture<RecordingGuideFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordingGuideFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingGuideFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
