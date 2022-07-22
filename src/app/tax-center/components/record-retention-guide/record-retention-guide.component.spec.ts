import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRetentionGuideComponent } from './record-retention-guide.component';

describe('RecordRetentionGuideComponent', () => {
  let component: RecordRetentionGuideComponent;
  let fixture: ComponentFixture<RecordRetentionGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordRetentionGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRetentionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
