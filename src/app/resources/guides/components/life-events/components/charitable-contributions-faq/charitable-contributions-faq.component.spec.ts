import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableContributionsFAQComponent } from './charitable-contributions-faq.component';

describe('CharitableContributionsFAQComponent', () => {
  let component: CharitableContributionsFAQComponent;
  let fixture: ComponentFixture<CharitableContributionsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitableContributionsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableContributionsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
