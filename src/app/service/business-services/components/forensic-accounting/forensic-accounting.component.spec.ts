import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForensicAccountingComponent } from './forensic-accounting.component';

describe('ForensicAccountingComponent', () => {
  let component: ForensicAccountingComponent;
  let fixture: ComponentFixture<ForensicAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForensicAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForensicAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
