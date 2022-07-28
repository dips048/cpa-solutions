import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableContributionsRecordsFGComponent } from './charitable-contributions-records-fg.component';

describe('CharitableContributionsRecordsFGComponent', () => {
  let component: CharitableContributionsRecordsFGComponent;
  let fixture: ComponentFixture<CharitableContributionsRecordsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableContributionsRecordsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableContributionsRecordsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
