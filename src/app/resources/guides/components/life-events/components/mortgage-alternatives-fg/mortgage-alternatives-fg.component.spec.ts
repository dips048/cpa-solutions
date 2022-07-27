import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageAlternativesFGComponent } from './mortgage-alternatives-fg.component';

describe('MortgageAlternativesFGComponent', () => {
  let component: MortgageAlternativesFGComponent;
  let fixture: ComponentFixture<MortgageAlternativesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageAlternativesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageAlternativesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
