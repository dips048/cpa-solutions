import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanyRulesFAQComponent } from './nany-rules-faq.component';

describe('NanyRulesFAQComponent', () => {
  let component: NanyRulesFAQComponent;
  let fixture: ComponentFixture<NanyRulesFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanyRulesFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanyRulesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
