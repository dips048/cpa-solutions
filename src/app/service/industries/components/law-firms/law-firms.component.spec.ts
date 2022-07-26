import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawFirmsComponent } from './law-firms.component';

describe('LawFirmsComponent', () => {
  let component: LawFirmsComponent;
  let fixture: ComponentFixture<LawFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawFirmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
