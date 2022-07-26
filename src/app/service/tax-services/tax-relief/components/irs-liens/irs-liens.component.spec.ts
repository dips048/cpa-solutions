import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSLiensComponent } from './irs-liens.component';

describe('IRSLiensComponent', () => {
  let component: IRSLiensComponent;
  let fixture: ComponentFixture<IRSLiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSLiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSLiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
