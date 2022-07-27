import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisingChildFAQComponent } from './raising-child-faq.component';

describe('RaisingChildFAQComponent', () => {
  let component: RaisingChildFAQComponent;
  let fixture: ComponentFixture<RaisingChildFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisingChildFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisingChildFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
