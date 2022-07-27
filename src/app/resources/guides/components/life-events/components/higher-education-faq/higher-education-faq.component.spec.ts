import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherEducationFAQComponent } from './higher-education-faq.component';

describe('HigherEducationFAQComponent', () => {
  let component: HigherEducationFAQComponent;
  let fixture: ComponentFixture<HigherEducationFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherEducationFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherEducationFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
