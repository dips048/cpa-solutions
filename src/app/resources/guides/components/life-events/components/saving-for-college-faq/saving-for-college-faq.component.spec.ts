import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingForCollegeFAQComponent } from './saving-for-college-faq.component';

describe('SavingForCollegeFAQComponent', () => {
  let component: SavingForCollegeFAQComponent;
  let fixture: ComponentFixture<SavingForCollegeFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingForCollegeFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingForCollegeFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
