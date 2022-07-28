import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableContributionsFGComponent } from './charitable-contributions-fg.component';

describe('CharitableContributionsFGComponent', () => {
  let component: CharitableContributionsFGComponent;
  let fixture: ComponentFixture<CharitableContributionsFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableContributionsFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableContributionsFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
