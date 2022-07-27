import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinancingMortgageFGComponent } from './refinancing-mortgage-fg.component';

describe('RefinancingMortgageFGComponent', () => {
  let component: RefinancingMortgageFGComponent;
  let fixture: ComponentFixture<RefinancingMortgageFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefinancingMortgageFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinancingMortgageFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
