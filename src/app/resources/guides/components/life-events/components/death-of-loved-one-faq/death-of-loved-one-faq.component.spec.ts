import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathOfLovedOneFAQComponent } from './death-of-loved-one-faq.component';

describe('DeathOfLovedOneFAQComponent', () => {
  let component: DeathOfLovedOneFAQComponent;
  let fixture: ComponentFixture<DeathOfLovedOneFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathOfLovedOneFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathOfLovedOneFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
