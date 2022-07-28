import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseMotgagesFGComponent } from './reverse-motgages-fg.component';

describe('ReverseMotgagesFGComponent', () => {
  let component: ReverseMotgagesFGComponent;
  let fixture: ComponentFixture<ReverseMotgagesFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseMotgagesFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseMotgagesFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
