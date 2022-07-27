import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalVsRothIRAsFAQComponent } from './traditional-vs-roth-iras-faq.component';

describe('TraditionalVsRothIRAsFAQComponent', () => {
  let component: TraditionalVsRothIRAsFAQComponent;
  let fixture: ComponentFixture<TraditionalVsRothIRAsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionalVsRothIRAsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalVsRothIRAsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
