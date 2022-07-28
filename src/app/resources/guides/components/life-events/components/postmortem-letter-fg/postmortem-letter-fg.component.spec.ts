import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmortemLetterFGComponent } from './postmortem-letter-fg.component';

describe('PostmortemLetterFGComponent', () => {
  let component: PostmortemLetterFGComponent;
  let fixture: ComponentFixture<PostmortemLetterFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmortemLetterFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmortemLetterFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
