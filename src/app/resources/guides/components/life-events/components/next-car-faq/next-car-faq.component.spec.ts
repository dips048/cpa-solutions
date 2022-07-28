import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCarFAQComponent } from './next-car-faq.component';

describe('NextCarFAQComponent', () => {
  let component: NextCarFAQComponent;
  let fixture: ComponentFixture<NextCarFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCarFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCarFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
