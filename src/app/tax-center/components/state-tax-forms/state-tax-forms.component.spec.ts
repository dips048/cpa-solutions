import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTaxFormsComponent } from './state-tax-forms.component';

describe('StateTaxFormsComponent', () => {
  let component: StateTaxFormsComponent;
  let fixture: ComponentFixture<StateTaxFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTaxFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTaxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
