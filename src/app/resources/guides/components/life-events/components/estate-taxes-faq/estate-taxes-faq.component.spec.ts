import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateTaxesFAQComponent } from './estate-taxes-faq.component';

describe('EstateTaxesFAQComponent', () => {
  let component: EstateTaxesFAQComponent;
  let fixture: ComponentFixture<EstateTaxesFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateTaxesFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateTaxesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
