import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuitiesFAQComponent } from './annuities-faq.component';

describe('AnnuitiesFAQComponent', () => {
  let component: AnnuitiesFAQComponent;
  let fixture: ComponentFixture<AnnuitiesFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuitiesFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuitiesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
