import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidingScamsFAQComponent } from './avoiding-scams-faq.component';

describe('AvoidingScamsFAQComponent', () => {
  let component: AvoidingScamsFAQComponent;
  let fixture: ComponentFixture<AvoidingScamsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidingScamsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidingScamsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
