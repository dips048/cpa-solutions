import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSLeviesComponent } from './irs-levies.component';

describe('IRSLeviesComponent', () => {
  let component: IRSLeviesComponent;
  let fixture: ComponentFixture<IRSLeviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSLeviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSLeviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
