import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTaxesOwedComponent } from './back-taxes-owed.component';

describe('BackTaxesOwedComponent', () => {
  let component: BackTaxesOwedComponent;
  let fixture: ComponentFixture<BackTaxesOwedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTaxesOwedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTaxesOwedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
