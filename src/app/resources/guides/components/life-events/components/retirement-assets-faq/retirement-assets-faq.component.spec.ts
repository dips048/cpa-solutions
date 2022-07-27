import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementAssetsFAQComponent } from './retirement-assets-faq.component';

describe('RetirementAssetsFAQComponent', () => {
  let component: RetirementAssetsFAQComponent;
  let fixture: ComponentFixture<RetirementAssetsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementAssetsFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementAssetsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
