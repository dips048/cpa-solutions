import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingDivorcedFAQComponent } from './getting-divorced-faq.component';

describe('GettingDivorcedFAQComponent', () => {
  let component: GettingDivorcedFAQComponent;
  let fixture: ComponentFixture<GettingDivorcedFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingDivorcedFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingDivorcedFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
