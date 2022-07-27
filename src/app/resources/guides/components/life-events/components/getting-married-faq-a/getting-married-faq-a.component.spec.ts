import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingMarriedFAQAComponent } from './getting-married-faq-a.component';

describe('GettingMarriedFAQAComponent', () => {
  let component: GettingMarriedFAQAComponent;
  let fixture: ComponentFixture<GettingMarriedFAQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingMarriedFAQAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingMarriedFAQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
