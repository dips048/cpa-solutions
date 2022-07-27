import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingProfessionalComponent } from './choosing-professional.component';

describe('ChoosingProfessionalComponent', () => {
  let component: ChoosingProfessionalComponent;
  let fixture: ComponentFixture<ChoosingProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
