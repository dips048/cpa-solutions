import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingProfessionalFAQComponent } from './choosing-professional-faq.component';

describe('ChoosingProfessionalFAQComponent', () => {
  let component: ChoosingProfessionalFAQComponent;
  let fixture: ComponentFixture<ChoosingProfessionalFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingProfessionalFAQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingProfessionalFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
