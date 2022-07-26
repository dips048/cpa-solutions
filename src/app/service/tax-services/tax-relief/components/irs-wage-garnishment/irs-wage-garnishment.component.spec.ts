import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSWageGarnishmentComponent } from './irs-wage-garnishment.component';

describe('IRSWageGarnishmentComponent', () => {
  let component: IRSWageGarnishmentComponent;
  let fixture: ComponentFixture<IRSWageGarnishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSWageGarnishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSWageGarnishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
