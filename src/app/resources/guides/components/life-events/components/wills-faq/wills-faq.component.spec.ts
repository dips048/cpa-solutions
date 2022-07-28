import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillsFAQComponent } from './wills-faq.component';

describe('WillsFAQComponent', () => {
  let component: WillsFAQComponent;
  let fixture: ComponentFixture<WillsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
