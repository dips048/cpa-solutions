import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSituationFAQComponent } from './other-situation-faq.component';

describe('OtherSituationFAQComponent', () => {
  let component: OtherSituationFAQComponent;
  let fixture: ComponentFixture<OtherSituationFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSituationFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSituationFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
