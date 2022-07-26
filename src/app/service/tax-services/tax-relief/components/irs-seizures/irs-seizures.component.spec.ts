import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSSeizuresComponent } from './irs-seizures.component';

describe('IRSSeizuresComponent', () => {
  let component: IRSSeizuresComponent;
  let fixture: ComponentFixture<IRSSeizuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSSeizuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSSeizuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
