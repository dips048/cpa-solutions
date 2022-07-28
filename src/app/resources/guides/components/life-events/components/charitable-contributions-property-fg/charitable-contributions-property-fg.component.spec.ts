import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableContributionsPropertyFGComponent } from './charitable-contributions-property-fg.component';

describe('CharitableContributionsPropertyFGComponent', () => {
  let component: CharitableContributionsPropertyFGComponent;
  let fixture: ComponentFixture<CharitableContributionsPropertyFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableContributionsPropertyFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableContributionsPropertyFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
