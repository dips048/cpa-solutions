import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageLockInsFgComponent } from './mortgage-lock-ins-fg.component';

describe('MortgageLockInsFgComponent', () => {
  let component: MortgageLockInsFgComponent;
  let fixture: ComponentFixture<MortgageLockInsFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageLockInsFgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageLockInsFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
