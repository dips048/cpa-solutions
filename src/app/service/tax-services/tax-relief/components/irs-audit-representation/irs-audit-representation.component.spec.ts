import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRSAuditRepresentationComponent } from './irs-audit-representation.component';

describe('IRSAuditRepresentationComponent', () => {
  let component: IRSAuditRepresentationComponent;
  let fixture: ComponentFixture<IRSAuditRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRSAuditRepresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IRSAuditRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
